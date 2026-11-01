---
pcr_id: pcr.own-account-manual-wood-deck-platform-handtruck-wholesale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of factory-finished manual four-caster steel-frame wood-deck platform handtrucks

## 1. Scope and Applicability

Applies only to own-account B2B ambient wholesale of actual factory-finished manual four-caster fixed-deck platform handtrucks with steel frame and wood deck, nonmotorized, nonlifting and nonhydraulic, in sourced original supplier presentation/BOM/shipping assembly state. Supplier-finished means complete actual supplied configuration, not assumed ready-to-use final assembly. No merchant assembly, load test, demonstration/use, repair, deck/caster replacement, surface treatment, washing or repack is prescribed. Excludes motorized/lifting trucks, container trade, babycarriages, bicycles, loose-parts trade, agency/retail and standalone hire/storage. The manufacturer example establishes qualitative material/caster/finish and shipping-weight questions only, not uniform capacity, dimensions, steel gauge, weight, component fractions, life or safety certification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-manual-wood-deck-platform-handtruck-wholesale |
| classification_refs | CPC 3.0:61082 narrower; supplied goods49930 within499 excluding49921 |
| covered_products | Actual complete original-supplier manual steel-frame wood fixed-deck four-caster platform-cart merchant service |
| excluded_products | Motor/lift/hydraulic trucks, bicycles/babycarriages/containers, parts-only, manufacture/merchant assembly/test/use/repair/wash/repack, fee agency/retail/rental |
| representative_product | Real model/serial or lot, steel/wood/caster/finish/accessory BOM, attached/detached shipping state and original pack; no fixed numeric model specification |
| production_route | Actual supplier complete original-presentation gate -> owned merchant receipt/ambient hold/electric handling -> final B2B acceptance after reversals |
| market_state | Completed merchant service; traded cart remains nonexchange commodity, not current warehouse asset |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed owned/resold business-buyer consignment of actual specified original-supplier manual platform handtrucks |
| How much | 1 Item(s) |
| How well | Actual ownership/resale and final buyer gate/source after reversals, qualified BOM/shipping assembly/pack/condition and linked original source; no universal load test or use readiness |
| How long or cycle | Actual release/receipt/holding/dispatch/acceptance/reversal dates, duration native units/timezones and stock/meter/full-asset periods; no universal life or holdtime |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account wholesale consignment of factory-finished manual four-caster steel-frame wood-deck platform handtrucks |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; BOM_record; manual_nonmotor_evidence; fixed_deck_nonlifting_nonhydraulic_evidence; four_caster_configuration; frame_material; wood_deck_identity; caster_tread_hub_identity; finish_identity; included_accessory_ids; supplier_shipping_assembly_state; attached_detached_membership; original_supplier_presentation; cart_count; net_cart_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| final_service | accepted_service | Count | Item(s) | Unique final owned/resold B2B acceptance after reversal, N>0; not cart, caster, capacity or kg. |
| actual_config_mass | cp_carts; cp_outlets | Mass | kg | Actual same model/BOM/shipping state and method; published shipweight not net/component mass. Whole/part/pack/coating/fluid views nonadditive. |
| native_component | cp_carts; cp_outlets | Mass | kg | Each component moisture/fluid/finish has independent native unit/basis/method/state/source/sampletime; water wet/dry ratio same-definition/sample only, not whole-cart correction or LOD volatiles as water. |
| cargo_work | freight | Mass * Length | t*km | Empty traded cart remains cargo; EACH times actual count once/TOTAL unchanged, only true noncargo carrier tare deducted; each load-leg share inside SUM/N once. |
| fate_species | cp_outlets; cp_environment | Mass | kg | Actual receiver/species/medium and compatible native component/factor/fate evidence; retained/captured parts not additional whole flow or automatic release. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete factory-finished manual four-caster fixed-deck platform handtruck with steel frame/wood deck in sourced original supplier presentation, shipping assembly state, BOM/accessories and inherited finish/contents/pack. |
| starting_condition_role | Received finished commodity gate for service add-on, not an assumed assembled/load-tested use state or raw-material basket. |
| product_classification_scope | CPC 3.0:61082 narrower manual platform-handtruck service; actual goods49930 in499, not bicycles49921 or containers49221 or babycarriages38992. |
| recursive_input_rule | Traded carts, original components/contents/pack and commercial returns are nonexchange merchandise stock/throughflow, not consumed warehouse assets, steel/wood/rubber service inputs or another wholesale service. |
| upstream_dataset_requirement | Link complete actual steel-frame/wood-deck/caster/finish/accessory manufacture, supplier assembly in actual shipping state and original pack gate including embodied lost commodity outside service once. Raw steel/wood alone or unmatched ready-to-use state is inadequate. Quantify actual original assigned demand, native conversion and loss/stage baseline/additional coverage with one owner before complete-chain use. |
| disclosure | Declare actual model/BOM/serial, received assembly and original pack/finish/contents, net versus ship/cargo/tare and component measures, buyer/ownership/final gate/time, source allocation including all competing exits and gaps. No universal manufacturer dimensions, capacity, weight or life. |

### Boundary Rules

| rule_id | Rule |
| --- | --- |
| service_route | Include actual receipt/document/condition checks without prescribed unpacking, ambient hold and electric warehouse handling through final B2B handover. No merchant assembly, fitting, load test, rolling demonstration, use, wash, repair, deck replacement, grinding/coating or repack; outsourced extras also require reviewed extension. |
| commodity_outside | All purchased/resold cart/inherited component/finish/fluid/pack upstream including actual embodied losses remains outside service exchanges. A quantified compatible original-gate demand/loss linkage is mandatory once before complete-chain use; physical service containment/receiver treatment remains once. Unknown stock/state deficits are not loss or zero. |
| cart_cargo_not_asset | The sold handtruck is merchandise, not current merchant infrastructure. When transported it is cargo even empty, not carrier tare by vehicle identity. Capacity is not actual payload and published shipweight does not establish net cart/component mass. |
| period_and_reject | Record actual consignment/cohort, stock/meter/source/asset periods and timezones. Open/canceled/reversed/rejected attempts retain actual resources and closing/return/other receiver exits while N excludes unresolved acceptances. State observations do not prescribe preservation or defect rates. |
| exclusive_fate_owner | Follow whole cart, actual separate part/pack, mixed cleanup, contained liquid and direct species with retained coating/moisture/fluid membership exclusions. Actual receiver/medium evidence establishes fate, not corrosion/chips/material names. Direct/provider/carrier/receiver utilities/assets/freight/treatment each have one owner and no automatic recycling credit. |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| platform_handtruck_wholesale | Own-account manual steel-frame wood-deck platform-cart wholesale | required | Actual specified owned/resold B2B consignment | foreground | accepted_service |

Record consignment/cohort service in actual warehouse periods with receipt/hold/electric handling, conditional site-hygiene/incident/changeover and receiver events. Inputs/outputs link real periods and consumers; rejected/open efforts do not vanish. Finished cart manufacture/assembly/coating is outside, not merchant batch technology.

### Process: Own-account manual steel-frame wood-deck platform-cart wholesale (`platform_handtruck_wholesale`)

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

Range evidence need: Need actual meter interval kWh, all-consumer physical drivers, idle/open-cohort coverage and delivered utility support; no per-cart power benchmark.

###### Actual liquid treated tap-water supply (`site_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: actual compatible water volume*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need native meter/supplier volume, actual hygiene event, conversion and sharing records; no washwater allowance from deck area.

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

Range evidence need: Need actual material formulation, native amount/count/per-piece mass or density, stock and same-scope usable unused return evidence; no solvent or lubricant recipe.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wholesale consignment of factory-finished manual four-caster steel-frame wood-deck platform handtrucks (`accepted_service`)

Actual final owned/resold B2B accepted consignment after reversals, qualified by real model/BOM/original shipping assembly/presentation and net/tare/state. Service Count is neither cart piece, caster count, rated load nor commodity kg.

- Selected flow: Completed own-account wholesale consignment of factory-finished manual four-caster steel-frame wood-deck platform handtrucks
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carts`

Range evidence need: Need real unique final acceptance, merchant ownership/resale, business buyer/gate/source/reversals, actual cart count/BOM/shipping state and compatible net/pack mass/time qualifiers; no fixed carts per consignment.

##### Waste flows

###### Discarded complete manual wooden-deck platform handtruck (`whole_cart_waste_atomic_case`)

Conditional on independently recorded actual Discarded complete manual wooden-deck platform handtruck. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_cart_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete manual wooden-deck platform handtruck
- Flow property / unit: Mass / kg
- Amount rule: actual whole-cart receiver net mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual discard decision/parent IDs/received configuration, whole transfer net/tare and retained portions/receiver fate; rust or loose caster does not prove whole-cart discard.

###### Actual separately collected paper packaging waste (`separate_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packing receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need pack material/actual tare or contaminated stream mass, residue native evidence, independent transfer and receiver treatment; packing mass is not net cart.


###### Actual separately collected metal packaging waste (`separate_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packing receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need pack material/actual tare or contaminated stream mass, residue native evidence, independent transfer and receiver treatment; packing mass is not net cart.


###### Actual separately collected plastic packaging waste (`separate_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packing receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need pack material/actual tare or contaminated stream mass, residue native evidence, independent transfer and receiver treatment; packing mass is not net cart.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| physical_events | Direct trace actual events to cohorts/consignments; otherwise use evidenced causal handling or space-time/native drivers over all consumers and periods, including idle/open/reject work. No automatic equal-cart, capacity, steel mass or sales-price share. |
| original_source_assignment | Outside service use real direct source-to-target quantity OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers only with complete positive compatible records for every terminal driver including closing, useful other exits, returns and actual loss, each native quantity/unit/basis/method/state/source/link/owner. commodity_source_gate_demand=assigned_source_gate_quantity at original finished/shipping-state gate including evidenced state-change share. Final dispatch+discard is not original demand; record actual baseline/additional/loss native quantities, conversion, stage/loss coverage and exclusive owner once.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| supply_return_choice | S=opening+net_receipts-closing including retained recovery. Gross input S/N plus separately recorded actual paired usable unused outward output OR consumed-only (S-usable_outward_return)/N and OMIT matching return exchange. Only same-scope standalone supply can be netted; never inherited cart/component/fluid or unrelated stock and no second credit. |
| full_life_assets | Allocate complete manufacture/maintenance/replacement/retirement/EOL with compatible job_driver/lifetime_all_user_driver, lifetime=observed all-user use+sourced remaining service across all consumers/periods. Keep native equivalence, uncertainty/sensitivity/update and provider/carrier exclusions; service total divided by N once. Traded carts not asset equivalents. |
| freight_outlets | Each unique load+leg own documented_service_share remains INSIDE SUM, then /N once. EACH actual compatible count once/TOTAL unchanged; actual empty traded cart remains cargo with pack/support, only noncargo carrier tare subtracted. Exclusive whole/part/pack/cleanup/liquid/component views and actual receiver transport/treatment once; no automatic credits. |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_carts | platform_handtruck_wholesale | Actual node flows/events and explanatory audit quantities | Cart model/BOM, received state, ownership, stock and source ledger | cart_count; cart_count_unit; cart_count_basis; cart_count_method; cart_count_state; cart_count_source; cart_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; net_cart_mass; net_cart_mass_unit; net_cart_mass_basis; net_cart_mass_method; net_cart_mass_state; net_cart_mass_source; net_cart_mass_sample_time; supplier_ship_weight; supplier_ship_weight_unit; supplier_ship_weight_basis; supplier_ship_weight_method; supplier_ship_weight_state; supplier_ship_weight_source; supplier_ship_weight_sample_time; original_pack_tare; original_pack_tare_unit; original_pack_tare_basis; original_pack_tare_method; original_pack_tare_state; original_pack_tare_source; original_pack_tare_sample_time; whole_cart_cargo_mass; whole_cart_cargo_mass_unit; whole_cart_cargo_mass_basis; whole_cart_cargo_mass_method; whole_cart_cargo_mass_state; whole_cart_cargo_mass_source; whole_cart_cargo_mass_sample_time; frame_mass; frame_mass_unit; frame_mass_basis; frame_mass_method; frame_mass_state; frame_mass_source; frame_mass_sample_time; deck_mass; deck_mass_unit; deck_mass_basis; deck_mass_method; deck_mass_state; deck_mass_source; deck_mass_sample_time; caster_mass; caster_mass_unit; caster_mass_basis; caster_mass_method; caster_mass_state; caster_mass_source; caster_mass_sample_time; finish_mass; finish_mass_unit; finish_mass_basis; finish_mass_method; finish_mass_state; finish_mass_source; finish_mass_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; water_wet_fraction; water_wet_fraction_unit; water_wet_fraction_basis; water_wet_fraction_method; water_wet_fraction_state; water_wet_fraction_source; water_wet_fraction_sample_time; water_dry_ratio; water_dry_ratio_unit; water_dry_ratio_basis; water_dry_ratio_method; water_dry_ratio_state; water_dry_ratio_source; water_dry_ratio_sample_time; component_wet_mass; component_wet_mass_unit; component_wet_mass_basis; component_wet_mass_method; component_wet_mass_state; component_wet_mass_source; component_wet_mass_sample_time; component_dry_mass; component_dry_mass_unit; component_dry_mass_basis; component_dry_mass_method; component_dry_mass_state; component_dry_mass_source; component_dry_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; size_quantity; size_quantity_unit; size_quantity_basis; size_quantity_method; size_quantity_state; size_quantity_source; size_quantity_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; BOM_record; manual_nonmotor_evidence; fixed_deck_nonlifting_nonhydraulic_evidence; four_caster_configuration; frame_material; wood_deck_identity; caster_tread_hub_identity; finish_identity; included_accessory_ids; supplier_shipping_assembly_state; attached_detached_membership; original_supplier_presentation; capacity_not_payload_evidence; shipweight_net_tare_coverage; component_membership; moisture_component_identity; water_wet_or_dry_basis; LOD_other_volatiles_exclusion; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; target_exit_driver; sum_exit_drivers; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; source_gate_allocation_source; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | Verify actual purchase/resale ownership, business buyer and final acceptance gate/source/reversals; receiving goods alone is insufficient. Trace each real model/serial or lot, fixed wood deck, steel frame, four casters, actual tread/hub/finish/accessories, attached versus supplier-intended detached parts and original presentation. Source the received assembly state rather than assuming assembled or incomplete. Separate net cart, published shipping weight, pack/support tare and compatible actual component quantities; capacity is not payload. Component moisture/fluid/density/size require independent native units, method, state, source and sample time. For original-gate attribution use real direct links OR a positive complete compatible terminal-exit driver record including closing, returns, useful other exits and actual loss, with quantities, units, basis, method, state, source, link and owner for every exit.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Actual native quantity units and sourced compatible conversions; dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs including all relevant consumers | per reference flow | Raw source/calibration/method and native unit/basis/state/source/sampletime; actual owner/exclusions/uncertainty, unknown not zero |
| cp_supplies | platform_handtruck_wholesale | Actual node flows/events and explanatory audit quantities | New merchant supplies and outward-unused pairing | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; supply_identity; standalone_stock_scope; matched_return_ids; unused_return_convention; allocation_owner; inherited_component_exclusion; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual surface-hygiene agents, wipes, absorbents, filters and additional external protection only if used. The traded cart and its inherited steel/wood/rubber/coating/fluid/pack are not service supplies. Reconcile native EACH/TOTAL quantities, composition, count-to-mass or actual density and standalone stock. Select gross supply with separate matched usable-unused outward output OR consumed-only input that omits that paired output; retained stock is not an external return. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversions; dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs including all relevant consumers | per reference flow | Raw source/calibration/method and native unit/basis/state/source/sampletime; actual owner/exclusions/uncertainty, unknown not zero |
| cp_utilities | platform_handtruck_wholesale | Actual node flows/events and explanatory audit quantities | Real warehouse and electrically operated merchant handling utilities | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; overlap_exclusion; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use real meter intervals or documented supplier quantities and matching all-consumer causal drivers for lighting, actual handling or conditional site hygiene. No traded-cart operating energy, load test, cart washing, assembly, coating or assumed climate-control demand. Separate actual provider/carrier coverage, native conversions and meter versus allocated evidence. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversions; dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs including all relevant consumers | per reference flow | Raw source/calibration/method and native unit/basis/state/source/sampletime; actual owner/exclusions/uncertainty, unknown not zero |
| cp_provider | platform_handtruck_wholesale | Actual node flows/events and explanatory audit quantities | Actual physically specified contracted warehouse package | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | Obtain actual physical work quantity and equivalent unit, period and share basis, included utilities/assets/transport/treatment and exclusions. Contracting assembly, repair, load testing or operation of the cart does not conceal an extra physical route; such work requires reviewed extension. No price-to-service or cart-capacity equivalence. | Actual native quantity units and sourced compatible conversions; dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs including all relevant consumers | per reference flow | Raw source/calibration/method and native unit/basis/state/source/sampletime; actual owner/exclusions/uncertainty, unknown not zero |
| cp_assets | platform_handtruck_wholesale | Actual node flows/events and explanatory audit quantities | Full-life merchant infrastructure and actual all-user history | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; asset_role; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; observed_boundary; remaining_life_source; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; traded_cart_exclusion; period_id; time_zone; time_source | Identify real warehouse/racks, handling equipment and reusable supports independently of the carts being resold. Gather complete manufacture, maintenance, replacement, retirement/EOL. On compatible native units/equivalence use observed all-user service plus sourced remaining use for lifetime, all periods and consumers including open/rejected lots, uncertainty/sensitivity/update. Do not charge a sold cart as a current warehouse asset or duplicate provider/carrier assets. | Actual native quantity units and sourced compatible conversions; dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs including all relevant consumers | per reference flow | Raw source/calibration/method and native unit/basis/state/source/sampletime; actual owner/exclusions/uncertainty, unknown not zero |
| cp_freight | platform_handtruck_wholesale | Actual node flows/events and explanatory audit quantities | Actual cargo load-leg, assembly state and unique freight ownership | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; cart_mass; cart_mass_unit; cart_mass_basis; cart_mass_method; cart_mass_state; cart_mass_source; cart_mass_sample_time; actual_parts_accessories_mass; actual_parts_accessories_mass_unit; actual_parts_accessories_mass_basis; actual_parts_accessories_mass_method; actual_parts_accessories_mass_state; actual_parts_accessories_mass_source; actual_parts_accessories_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_shipping_assembly_state; traded_cart_is_cargo_even_empty; capacity_not_payload; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | Use actual received/shipped presentation and whole packed cargo or exclusive compatible components, including cart and supplied detached parts/accessories, pack and carried reusable supports. A traded handtruck is cargo even empty: being a vehicle does not make it noncargo tare. Subtract only real noncargo carrier vehicle/container tare. EACH compatible mass times actual count once or TOTAL unchanged; capacity and published ship weight do not establish actual load. Convert actual mass/distance/work with sources and apply each record share inside unique load+leg sum, then /N once. Reconcile empty legs and provider/receiver scope. | Actual native quantity units and sourced compatible conversions; dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs including all relevant consumers | per reference flow | Raw source/calibration/method and native unit/basis/state/source/sampletime; actual owner/exclusions/uncertainty, unknown not zero |
| cp_outlets | platform_handtruck_wholesale | Actual node flows/events and explanatory audit quantities | Exclusive actual whole-cart, part, pack and containment exits | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_coating; retained_coating_unit; retained_coating_basis; retained_coating_method; retained_coating_state; retained_coating_source; retained_coating_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; transfer_id; event_id; parent_cart_ids; part_ids; BOM_membership; whole_cart_exclusion; separate_part_exclusion; separate_pack_exclusion; mixed_cleanup_exclusion; contained_liquid_exclusion; component_identity; moisture_wet_or_dry_basis; retained_content_fate; receiver_id; receiver_classification; treatment_owner; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Record actual damage, corrosion/stain, deck or caster condition and decision, not inferred full discard. Follow parent cart/BOM and original pack genealogy. Whole-cart stream includes frame/deck/casters/finish/retained fluid or moisture; independent part, pack, mixed cleanup or contained liquid transfers have exclusive membership. Component/coating/moisture/fluid quantities each have independent units/basis/method/state/source/sampletime, not the whole-stream unit by assumption. Record real useful export or waste classification/receiver/treatment once, stock versus export and matched unused supply convention, no automatic recycling/substitution credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native quantity units and sourced compatible conversions; dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs including all relevant consumers | per reference flow | Raw source/calibration/method and native unit/basis/state/source/sampletime; actual owner/exclusions/uncertainty, unknown not zero |
| cp_environment | platform_handtruck_wholesale | Actual node flows/events and explanatory audit quantities | Demonstrated species/particle and receiving-medium evidence | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | Identify actual species or particle class and receiving medium. Use measured release or a justified applicable activity/factor with composition/fate only as required by that factor, native units and complete sources. A complete species factor already includes its composition/release proportions and must not be multiplied again. Wear, odour, rust, chip, stock deficit, retained coating or rubber presence is not an air/soil/water release or zero. Separate captured material, retained content and contained receiver transfers. No cart-use rolling-wear or coating-emission factor is prescribed. | Actual native quantity units and sourced compatible conversions; dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs including all relevant consumers | per reference flow | Raw source/calibration/method and native unit/basis/state/source/sampletime; actual owner/exclusions/uncertainty, unknown not zero |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_carts | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals. Check real merchant ownership/resale, business buyer and gate/source/reversal IDs. N>0 before normalization; unfinished/canceled/rejected/reversed resource attribution persists in actual cohorts/periods. | Ownership, actual buyer gate and acceptance/reversal/time records | Final unique service denominator N |  |
| cart_pack_components | cp_carts | Use measured compatible net_cart_mass and actual original_pack_tare/cargo state. Published supplier_ship_weight only when its actual model/assembly/BOM/pack/method coverage matches; never assume it equals net or each steel/wood/rubber component. Whole cart/frame/deck/caster/finish/contents are nonadditive membership views. Expected supplier-detached parts are not automatically missing, and capacity is not actual payload. | Actual BOM/presentation, each-total net/pack/component/source records | Actual received-state cart and pack/component audit |  |
| component_water_fluid | cp_carts; cp_outlets | Only evidenced component-specific water measurement supports component_dry_mass=component_wet_mass*(1-water_wet_fraction), with actual water/as-received wet mass fraction. Compatible same-sample dry-basis water/nonwater ratio converts water_wet_fraction=water_dry_ratio/(1+water_dry_ratio), after native percent-to-ratio conversion. Do not dry-correct entire steel/wood/rubber/coated cart from one wood sample; LOD other volatiles not automatically water. Retained fluid/coating has own identity/units/source and no default release. | Component identity/membership and native water/fluid method/sample/state/units/source | Qualified component views with no whole-cart or emissions inference |  |
| source_gate_demand | cp_carts | Direct actual source-to-target trace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers with positive complete compatible all-terminal records. commodity_source_gate_demand=assigned_source_gate_quantity in actual original finished/shipping/BOM/pack state, including evidenced state-change share. Reconcile source input and exclusive closing/useful-other/return/actual-loss exits, baseline_quantity/additional_stage_quantity/loss_adjustment_quantity with native conversion and stage/loss/owner coverage once outside service. Unknown loss/stages block complete-chain readiness, not zero.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Original source, direct OR complete all-terminal native records and baseline/additional/loss coverage | Linked actual original finished commodity demand outside once |  |
| utility_share | cp_utilities | utility_per_service=sum(actual_utility_quantity*documented_share)/N after native conversion and matching all-consumer causal drivers. Use actual meter period, exclude provider/carrier scope; no traded-cart operating power or wash/load-test factor. | Actual native interval/quantity/conversion and native documented share | Actual kWh and conditional site-water m3 per service |  |
| supply_stock | cp_supplies | S=opening+net_receipts-closing including retained recovery. Use gross S/N with separate paired usable outward output OR consumed (S-usable_outward_return)/N and OMIT matching return exchange. EACH times actual compatible count once/TOTAL unchanged; mass conversion uses actual per-piece or compatible density-temperature evidence. No inherited part/fluid netting. | Standalone supply stocks/returns, native quantity/composition/conversion/share | Exclusive actual gross or consumed supply with matched return convention |  |
| provider_equivalent | cp_provider | provider_per_service=sum(actual_native_package_quantity*documented_share)/N using evidenced physical_equivalence and disjoint coverage. documented_share=share_numerator/share_denominator on matching native causal units, never fee or rated capacity. | Actual physical package/native equivalent and coverage/share evidence | Actual disjoint contracted service amount |  |
| asset_life_share | cp_assets | lifetime_all_user_driver=observed_all_user_driver+remaining_driver only with compatible native units/equivalence and sourced remainder. Apply job_driver/lifetime_all_user_driver to full manufacture/maintenance/replacement/retirement/EOL; sum service assets then /N once. All consumers/periods, uncertainty/sensitivity/update and provider/carrier exclusion are mandatory; sold carts not service assets. | Full-life event/job/observed/remainder/lifetime/equivalence native records | Actual all-user full-life asset equivalents |  |
| unique_freight_sum | cp_freight | Actual cargo includes shipped cart even empty, supplied parts/accessories/pack/carried support. EACH mass*actual_count once OR TOTAL unchanged; subtract only true noncargo carrier vehicle/container tare. Convert native payload/distance to actual_transport_work and use freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N. Every record share inside SUM and N once, with actual empty-leg/provider/receiver coverage. Published capacity/shipweight do not replace measured compatible cargo. | Unique load-leg, native EACH/TOTAL cargo/count/tare/distance/conversion and share | Actual scoped freight t*km per service |  |
| receiver_outlets | cp_outlets | outlet_per_service=actual_compatible_native_transfer_quantity/N, after EACH actual count once/TOTAL unchanged and supported conversion. Whole cart/independent part/pack/mixed cleanup/liquid and explanatory coating/moisture/fluid components are exclusive/nonadditive. Retained stock not export; consumed-only supplies omit paired return. Actual receiver classification/transport/treatment owner once; no automatic credit or inferred dismantling. | Native measured stream/component/fate/receiver/parent membership and conversions | Actual exclusive transfer quantities and treatment coverage |  |
| actual_species | cp_environment | release_mass=measured_species_mass OR compatible activity*applicable_species_factor with composition/release_fraction only where required by that factor. Complete species factor already covering a proportion must not multiply it again. Native units and actual medium/capture/contained exclusions then /N once; no rolling-wear/coating/wood/rust/material-presence or stock-gap default. | Actual species/particle/medium, native measurement or applicable factor chain | Actual independently evidenced species release |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_configuration | cp_carts | Actual model/BOM/shipping state/pack and native net/ship/component source must be representative; no published numeric model value as universal default. | Actual release/BOM/measurement/calibration |
| full_chain | all | Native complete original source assignment/loss/stage coverage and all-consumer full asset/service periods require actual records; missing information blocks complete-chain readiness. | Exclusive source/owner/period and uncertainty review |
| source_limits | durham-platform-truck | Manufacturer model body supports qualitative steel/wood/caster/finish/shipping questions, not general capacity/size/weight/life or assembly/use/test obligation. | Actual primary body plus real lot evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| site_water | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `site_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| hygiene_materials | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_materials` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_outer_protection | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_outer_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_package | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_package` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| service_assets | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_supply_return | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| usable_material_export | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_material_export` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| whole_cart_waste | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_cart_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_cart_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| separate_parts_waste | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separate_parts_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| separate_pack_waste | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separate_pack_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| mixed_cleanup_solids | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `mixed_cleanup_solids` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| contained_liquid | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_liquid` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species_release | platform_handtruck_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species_release` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Actual site utility attributable to receipt, hold and dispatch; manual product has no assumed power demand and no assembly/test/use occurs.

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

Range evidence need: Need actual meter interval kWh, all-consumer physical drivers, idle/open-cohort coverage and delivered utility support; no per-cart power benchmark.

#### site_water

Conditional actual warehouse surface-hygiene supply, not traded-cart wash or use-phase cleaning.

Residual inventory requirement after the independently identified cases `site_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual site-hygiene utility water
- Flow property / unit: Volume / m3
- Amount rule: actual compatible water volume*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need native meter/supplier volume, actual hygiene event, conversion and sharing records; no washwater allowance from deck area.

#### hygiene_materials

Actual agent/wipe/absorbent/filter identities only if used; inherited deck, caster rubber, coating and lubricant are commodity constituents.

Residual inventory requirement after the independently identified cases `hygiene_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual service hygiene and incident-containment materials
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed supply mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material formulation, native amount/count/per-piece mass or density, stock and same-scope usable unused return evidence; no solvent or lubricant recipe.

#### added_outer_protection

Conditional extra external protection without assumed opening/repack/assembly. Inherited manufacturer pack remains commodity; reusable merchant support is full-life asset.

- Identity requirement: Actual newly supplied external shipment protection
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed added material mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual protection material, supplied quantity, EACH/TOTAL mass and stock/return ownership; no crate or wrap count from cart size by default.

#### provider_package

Actual physical handling/site operation package and explicit scope, no hidden assembly/load test/repair or purchased cart asset.

- Identity requirement: Actual disjoint contracted merchant work package
- Flow property / unit: Count / Item(s)
- Amount rule: sum(actual_native_package_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need actual provider physical equivalent, scope, interval and same-basis share/resource exclusions; neither fee nor rated capacity defines package quantity.

#### service_assets

Full-life infrastructure/handler/support equivalents across all users and periods. The carts being sold are not current warehouse assets or new supports consumed per consignment.

- Identity requirement: Actual complete-life warehouse and merchant handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: sum_full_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need real asset boundary/manufacture/maintenance/replacement/EOL, observed all-user and sourced remainder native drivers/equivalence and sensitivity; no lifetime or per-use asset factor.

#### freight

The actual cart remains cargo even empty, including supplied detached parts, pack and carried support; subtract only true noncargo carrier tare. Actual capacity is not actual load.

- Identity requirement: Actual unique load-leg freight with handtrucks as cargo
- Flow property / unit: Mass * Length / t*km
- Amount rule: sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual packed load mass versus published shipweight, EACH/TOTAL count, assembly/pack state, distance/conversion, record-specific share and empty/receiver coverage; no zero payload because vehicle.

#### unused_supply_return

Gross-input convention only, actual usable material exported from matched standalone supply stock. Consumed-only input omits this exchange; sold-cart or inherited component returns are merchandise ledger events.

- Identity requirement: Actual matched usable unused standalone supply outward return
- Flow property / unit: Mass / kg
- Amount rule: actual matched usable unused outward mass/N under gross convention only
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need original supply identity/native mass, same-scope pairing, actual receiver/usability and not closing stock; no inherited coating/fluid against unrelated supply.

#### usable_material_export

Conditional evidenced useful material exported, not assumed recycling of every damaged cart. Actual classification, remaining contents and recipient proof; no automatic avoided production credit.

- Identity requirement: Actual separately accepted usable service-material export
- Flow property / unit: Mass / kg
- Amount rule: actual independently usable exported mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual material identity/state, mass/component moisture/fluid, transfer/receiver and exclusion from waste/closing/whole-cart views; collection is not proof of recovery.

#### whole_cart_waste

Only real discarded whole cart in declared received state, including retained frame/deck/casters/finish/fluid/pack where present. Component explanations are not extra full-stream waste; embodied commodity loss outside service once, physical treatment once.

- Identity requirement: Actual rejected whole-cart stream with retained components
- Flow property / unit: Mass / kg
- Amount rule: actual whole-cart receiver net mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual discard decision/parent IDs/received configuration, whole transfer net/tare and retained portions/receiver fate; rust or loose caster does not prove whole-cart discard.

#### separate_parts_waste

Actual separate deck/frame/caster/accessory part stream only with genealogy and exclusive whole-cart membership; no presumed dismantling. Retained coating/rubber/lubricant is within that part unless a separate real transfer exists.

- Identity requirement: Actual independently transferred cart-part waste with retained finish or contents
- Flow property / unit: Mass / kg
- Amount rule: actual exclusive part-stream net mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual separated part identity/native mass/BOM link, retained finish/fluid/moisture units and receiver; no material fraction or coating loss from shipweight.

#### separate_pack_waste

Actual separate original or new pack stream with attached material/fluids, disjoint from whole cart/part and other outlets. No universal unpack/repack/recycle is assumed.

Residual inventory requirement after the independently identified cases `separate_pack_waste_paper_pack`; `separate_pack_waste_metal_pack`; `separate_pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual independently transferred packing waste and residues
- Flow property / unit: Mass / kg
- Amount rule: actual separate packing receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need pack material/actual tare or contaminated stream mass, residue native evidence, independent transfer and receiver treatment; packing mass is not net cart.

#### mixed_cleanup_solids

Conditional actual wipes/absorbents/filters retaining debris/coating/fluid/water, with substrate and retained portions within one stream. Captured debris is not airborne emission.

- Identity requirement: Actual spent mixed incident-cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: actual mixed cleanup receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual substrate and retained content quantities with own units/basis/method/source/sampletime, incident and exclusive receiver membership; no fixed cleanup ratio.

#### contained_liquid

Conditional independently collected liquid with actual water/agent/particulates/fluid composition, disjoint from retained portions in whole cart/part/pack/solids. Receiver transfer is not direct outfall or pure-water release.

- Identity requirement: Actual contained service-hygiene or incident liquid receiver transfer
- Flow property / unit: Mass / kg
- Amount rule: actual contained compatible liquid mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual collection/receiver, net liquid quantity and density-temperature if converted, native composition/fate and treatment boundary; no cart-wash wastewater default.

#### direct_species_release

Real species/particle and receiving medium at merchant boundary only; no rubber/coating/wood wear, rust or stock-gap emission inference and no zero without evidence.

- Identity requirement: Actual identified species or particle release to a demonstrated medium
- Flow property / unit: Mass / kg
- Amount rule: actual compatible measured or justified species release mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual species/particle/medium, measured mass or native applicable activity/factor and required composition/fate with sources, retained/captured exclusions and owner; not an equipment-use factor.

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| final_identity | Reference output/link/name and Count match actual ownership/B2B final gate/source/reversal qualifiers; N>0 only, all unfinished/rejected resources retained. |
| complete_gate | Require actual complete frame/deck/casters/finish/accessory manufacture, shipping assembly/original pack gate and direct OR positive complete all-terminal source/loss/coverage outside once. No raw steel/wood or unmatched ready-use substitute.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| actual_operation | No hidden merchant or contracted assembly/load test/use/repair/wash/repack/coating route; real extras require review. Actual assembly/BOM expected detached state does not prove missing parts. |
| cargo_resource | Sold cart not current asset; transported empty cart remains cargo. Check EACH/TOTAL/net-ship/component boundaries, noncargo tare only, unique load-leg record share inside SUM/N once; full all-user life/assets/provider/receiver exclusions and gross OR consumed OMIT supply return. |
| exclusive_fate | Whole cart/part/pack/cleanup/liquid and retained coating/moisture/fluid/component/species views exclusive; actual receiver/medium/factor native evidence, no default breakage/recycling/wear/species/zero from damage/stock. |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground own-account merchant-service add-on per completed accepted consignment |
| downstream_use | Combine once with complete compatible original finished cart/BOM/shipping-state/pack commodity demand and quantified native loss/stage coverage |
| allowed_use | Actual manual nonmotor/nonlifting/nonhydraulic four-caster steel-frame wood fixed-deck original-supplier presentation merchant route with records |
| excluded_use | Standalone complete cart footprint, user rolling/load operation or testing, assumed assembly/repair/coating/wash/repack, motor/lift/container/babycarriage/bicycle/parts-only routes |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; BOM_record; manual_nonmotor_evidence; fixed_deck_nonlifting_nonhydraulic_evidence; four_caster_configuration; frame_material; wood_deck_identity; caster_tread_hub_identity; finish_identity; included_accessory_ids; supplier_shipping_assembly_state; attached_detached_membership; original_supplier_presentation; cart_count; net_cart_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | Actual identity/range/native quantities, shipping-BOM net/ship/tare/component evidence, original all-terminal source/loss/stage owner coverage, asset observed/remainder uncertainty and freight/receiver exclusions |
| update_trigger | Actual model/BOM/shipping assembly/finish/pack state, merchant work/source allocation/loss, asset lifetime/provider/carrier/receiver/species or conversion evidence changes |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| durham-platform-truck | literature | https://www.durhammfg.com/products/material-handling/platform-trucks/platform-truck-work-height-wood-deck-1800-lbs-capacity-24-x-48/ | Actual Durham WHPT-WD-2448-8MR-95 manufacturer example: qualitative steel-frame/wood-deck/caster/finish distinctions and published shipping-weight coverage question. No uniform numeric specification, actual target-lot shipping state, merchant assembly/test/use, life or performance factor. |
