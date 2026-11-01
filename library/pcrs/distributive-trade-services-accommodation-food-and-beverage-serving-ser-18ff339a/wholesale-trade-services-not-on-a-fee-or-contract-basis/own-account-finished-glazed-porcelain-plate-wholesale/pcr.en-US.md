---
pcr_id: pcr.own-account-finished-glazed-porcelain-plate-wholesale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of finished glazed feldspar-porcelain plates

## 1. Scope and Applicability

This PCR covers own-account merchant wholesale of already fired, glazed and finished feldspar-porcelain plates from actual manufacturer release with inherited packing, ordinary ambient stock/handling and real business-buyer acceptance. Actual SKU/size/glaze/lot, plate count and stack/carton membership, body+glaze net plate mass, separators/carton/support tare and real intact/chipped/broken condition qualify each service. Product-page packaging mass does not prove net plate mass.

Exclude raw material/body preparation/forming/firing/glazing/finishing manufacture, merchant washing/sanitising/food-contact or strength testing, repair/grinding/repacking, dedicated climate intervention without review, other tableware/materials, agency/retail and standalone storage/transport. Actual outsourced processing remains physically real and requires scope review. Consumer first-use wash, microwave/dishwasher and durability marketing are not warehouse operations, universal breakage/life or safety guarantees. No routine destructive unwrapping/test is mandated; actual traceable supplier/non-invasive records may establish quantities/condition.

All complete fired/glazed plate and inherited-pack manufacturing burdens, including lost merchandise embodied upstream, remain outside this service add-on. A separate complete factory-gate system with actual assigned source demand, all cohort exits and compatible once-only loss adjustment/owner/existing coverage is mandatory before full-chain use. Actual merchant handling/cleanup and waste receiver/treatment remain once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-finished-glazed-porcelain-plate-wholesale |
| classification_refs | CPC 3.0:61045; narrower finished glazed feldspar-porcelain plate own-account merchant service; goods 37221 under3722 |
| covered_products | Actual manufacturer-finished fired/glazed feldspar-porcelain plate SKU/lot in ordinary ambient merchant B2B wholesale |
| excluded_products | Raw clay/feldspar/body or manufacturing/firing/glazing, otherware/materials, plate washing/sanitising/testing/repair/grind/repack, unreviewed climate intervention; agency/retail/standalone logistics |
| representative_product | Actual SKU/size/glaze/plate-piece/stack/carton and net/tare/condition from finished release to unique accepted commercial consignment |
| production_route | Complete fired/glazed finished plate+pack release -> merchant receipt/document/condition/stock checks -> ordinary ambient handling/holding -> buyer acceptance |
| market_state | Completed commercial service with actual finished plate/pack/condition/gate qualifiers, not one plate, kiln output, installation or consumer-use dataset |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account finished glazed porcelain-plate wholesale service |
| How much | 1 Item(s) |
| How well | Actual SKU/size/glaze/source lot, plate/pack quantities/net tare/condition and real buyer-adopted acceptance criteria |
| How long or cycle | Actual manufacturer release/merchant receipt/holding/dispatch/buyer acceptance and linked stock/open-resource periods, no universal plate use life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account finished glazed porcelain-plate wholesale consignment |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | manufacturer_id; product_sku; source_lot_id; finished_fired_glazed_gate; porcelain_glaze_state; actual_size; size_unit; plate_piece_count; stack_carton_membership; net_plate_mass; mass_unit; inherited_pack_tare; intact_chipped_broken_state; buyer_gate; merchant_id; reporting_period |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N counts final unique accepted commercial consignment, not plates/fragments/stacks/cartons/invoices/kg/currency. |
| plate_pack_native | commodity audit | Mass; Count | kg; Item(s) | Actual net plate body+glaze mass after actual separator/carton/support tare, actual plate-piece/stack/carton membership. Manufacturer package-listed mass cannot automatically be net plate. Fragment genealogy preserves original plate equivalents rather than counting shards as plates. |
| component_views | body/glaze/wholeplate | declared native property | declared native unit | Body/glaze/retained fragment analyses require actual quantity/unit/basis/source/method and compatible state; analytical components do not add to wholeplate physical transfer or prove species. |
| supply_outlet_native | actual supplies/outlets | native property | native unit | Actual unit/per-piece mass and density unit/temperature-unit/source plus conversion factor-unit/source required; whole stream unit cannot silently serve components/retained fluid. |
| physical_equivalence | providers/assets | Count | Item(s) | Match actual complete physical package or full-asset equivalent/native scope; actual other native units need separate appropriate expansion. |
| freight_native | freight | mass*distance | kg*km | Actual complete transported mass plus packing/support times actual km and disjoint share, no page-weight/standard stack default. |
| species_native | direct_species | Mass | kg | Actual species/medium/particle and measured or matched factor/composition/fate native quantities independently supported; captured fragments/glaze inventory not release. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual manufacturer finished fired/glazed feldspar-porcelain plate SKU/size/lot with inherited pack/separators and actual quantity/state traceable |
| starting_condition_role | Physical own-account ambient merchant service after complete ceramic product release |
| product_classification_scope | Narrower household-utensil wholesale subset, actual37221finishedplate commodity separately linked |
| recursive_input_rule | Do not create clay/feldspar/body/glaze manufacture or recursively consume traded plates as service inputs. Merchandise stock/originalgate demand is non-exchange audit; real service supplies/providers independent. |
| upstream_dataset_requirement | Separate complete original finished-plate system covers actual raw materials/body preparation/forming/firing/glazing/finishing and inherited packing once; raw feldspar/clay alone is incomplete. Quantify actual compatible original demand/loss/all-exit attribution outside service with owner/existing coverage. |
| disclosure | Actual SKU/size/glaze/source release/plate count/stack-carton membership/net body+glaze/pack tare/condition and periods; original source quantity/state/unit/source, direct assignment or complete-cohort native all-exit drivers with useful other exits, conversion/lossowner/existing coverage; actual direct/provider/asset/carrier/receiver scopes |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| finished_product_boundary | all merchandise | Exclude complete plate/body/glaze manufacturing and inherited pack including embodied lost upstream. No raw-mineral-only baseline, no new firing or glazing on resale. |  |
| specific_plate_evidence | actual product/pack records | IKEA specific product body identifies feldspar porcelain and glaze; page packaging weight is not independently demonstrated net plate. Use actual supplier SKU records and net/tare measurement. Consumer use/wash and durability marketing do not impose merchant quantities, strength/life/breakage/safety limits. | ikea-feldspar-plate-state |
| no_unreviewed_processing | whole service | No plate washing/sanitation/testing/repair/grinding/repacking or additional climate intervention, including actual outsourced processing; fresh scope/module review required. Ordinary ambient handling/inherited glaze is not new preservation. |  |
| stocks_and_attempts | actual records | Track actual plate/source/lot/stack/carton IDs, receipt/stock/return/reject/breakage/closing/internal transfer/receiver and event periods. Chipped/unknown pieces may be retained/useful other exits; observation or mass deficit is not actual waste/species/zero. Failed/open resources retained while N only final accepted services. |  |
| physical_scope_once | resources/outlets | One actual owner for source utilities/new supplies/provider/carrier/full-life asset/receiver treatment. Whole plate/body/glaze/fragment/packing/mixed cleanup/liquid/species are nonadditive views or exclusive physical states, no finance proxy or automatic recycling benefit. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | Finished glazed-plate merchant receipt, stock handling and handover | required | Actual ownaccount finished fired/glazed feldspar-porcelain plates in ordinary ambient stock/handling through B2B accepted commercial gate | One physical merchant service with SKU/plate-pack quantities/condition/stock and period responsibility, no ceramic manufacturing/preservation node | `accepted_service` |

The actual node owns receipt/document/non-destructive condition records, stock/electric handling and real surface hygiene/incident cleanup. Traded plates/body+glaze/inherited pack are non-exchange audit. Actual conditional supplies/providers/assets/receiver streams/species expand only from records, not presumed fracture or glaze release.

### Process: Finished glazed-plate merchant receipt, stock handling and handover (`ambient_wholesale`)

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

Range evidence need: Actual source meters/equipment charging scope/all-user causal periods including idle/hygiene/open work required; no kiln energy, dishwasher cycle or default electric handling hours per carton.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased surface-cleaning water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Real meters/events/source and allocations needed; no consumer first-use wash, plate rinse ratio or purchased water=effluent assumption.

###### Actual independently recorded synthetic detergent supply (`hygiene_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable new cleaning/containment supply mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual SKU/formulation/unit/native receipts/stocks/use/unused-return and composition/fate sources; no cleaning recipe, fracture-response dosage or agent-to-emission fraction.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account finished glazed porcelain-plate wholesale consignment (`accepted_service`)

One real unique B2B accepted commercial service for manufacturer-finished glazed feldspar-porcelain plates under merchant ownership. Actual SKU/size/glaze/lot, plate pieces versus stack/carton units, net plate/body+glaze versus inherited packing, actual intact/chipped/broken state and buyer/period/source gate qualify service. One reference is not one plate, shard count, carton, kilogram or margin.

- Selected flow: Completed own-account finished glazed porcelain-plate wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plate`

Range evidence need: Actual supplier finished release, piece/pack/net/tare/state and commercial buyer gate evidence required; no fixed SKU, diameter, plate mass, stack count, strength/breakage tolerance or service lifetime.

##### Waste flows

###### Discarded glazed porcelain plate (`plate_waste_atomic_case`)

Conditional on independently recorded actual Discarded glazed porcelain plate. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `plate_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded glazed porcelain plate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable whole/chipped plate waste-stream mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plate`

Range evidence need: Need actual SKU/parent plate identities/piece state/net stream/pack inclusion and receiver disposition; no quality-score=loss, automatic landfill/recycling or universal breakage rate.

###### Collected glazed porcelain fragment (`fragment_waste_atomic_case`)

Conditional on independently recorded actual Collected glazed porcelain fragment. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `fragment_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Collected glazed porcelain fragment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separately transferred fragment mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual parent/source/state/mass/composition/fate and receiver required; no mass deficit=breakage, chip=whole loss, shard count=plates or assumed respirable/emitted fraction.

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

Range evidence need: Need actual component/native net quantity/remaining contents/source/receiver scope; no default paper/foam weights, all separators discarded or recycling substitution benefit.


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

Range evidence need: Need actual component/native net quantity/remaining contents/source/receiver scope; no default paper/foam weights, all separators discarded or recycling substitution benefit.


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

Range evidence need: Need actual component/native net quantity/remaining contents/source/receiver scope; no default paper/foam weights, all separators discarded or recycling substitution benefit.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| source_quantity_attribution | plate merchandise | Retain actual original finished/glazed/packed source quantity/unit/state/source and map its demand to every real exit. Use documented direct source-to-target assignment OR compatible complete-cohort target_exit_driver/sum_exit_drivers with native driver units/basis/source and source-state conversions. Include accepted target, other useful exits, commercial returns, closing and actual loss coverage exclusively; no accepted-only denominator or shard count as original plates. Actual assigned source demand and compatible irreversible loss adjustment/owner/existing coverage once outside service. Unknown quantity/condition not default loss/species/zero. |  |
| all_consumer_service | actual service periods | Actual all-user source periods and causal handling/space-time or other justified driver, with native unit/source/rationale, include idle/hygiene/failed/open resources. Equal consignments or plate counts/mass splits are not presumed; unfinished work retains attribution without fictitious N. |  |
| new_supply_returns | new service supplies | S=opening_supply+net_receipts-closing_supply. Gross input S/N plus separately recorded matched native unused outward-return output OR consumed-only (S-usable_outward_return)/N with matching return exchange omitted and no extra deduction. Same-scope standalone supplystock pairing; retained recovery is closing. Inherited pack/merchandise or asset components cannot offset unrelated current inputs. |  |
| full_asset_life | shared_assets | asset_equivalent=(job_driver/life_driver)/N for one compatible complete asset/all users/periods. Include manufacture/maintenance/real replacements/retirement/EOL, observed history+sourced remainder and uncertainty/sensitivity/update. Direct/provider/carrier/current-event overlap removed only once same burden actually owned elsewhere; no per-turn new support, duplicate rent/service+wholeasset or repeated normalization. |  |
| actual_transfer_views | real fates | Useful commercial returns/retained or marketable downgrades remain distinct commodity exits. Actual whole/chipped plate stream with associated pack vs separate fragments/packing/mixed hygiene/liquid are exclusive physical transfers with real receiver. Body/glaze/component/retained-fluid analysis does not create duplicate physical or species outflows. Actual service handling/treatment once, no assumed material substitution benefit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_plate` | ambient_wholesale | reference and non-exchange finished plate/pack stock and originalgate attribution | plate_acceptance_stock_record | site_id; merchant_id; warehouse_id; manufacturer_id; cohort_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; product_sku; source_lot_id; finished_fired_glazed_gate; factory_release_date_time; porcelain_glaze_state; glaze_identity_source; actual_size; size_unit; size_method; size_source; plate_piece_count; piece_unit; plate_id_or_group; parent_plate_id; stack_id; pieces_per_stack; carton_id; stacks_per_carton; pieces_per_carton; pack_count_source; pack_integrity; intact_chipped_broken_state; condition_method; condition_source; buyer_criteria; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; gross_quantity; gross_unit; separator_tare; primary_wrap_tare; carton_tare; transported_support_tare; tare_unit; tare_source; net_plate_mass; mass_unit; mass_basis; mass_method; mass_source; component_id; component_quantity; component_unit; component_basis; component_method; component_source; opening_quantity; receipts; dispatch_quantity; supplier_return; buyer_return; closing_quantity; recovered_closing; stock_unit; stock_state; internal_transfer_id; retained_reject_quantity; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_unit; useful_other_exit_state; useful_other_exit_owner; actual_breakage_event; fragment_parent_link; actual_discard_piece_count; actual_discard_stream_mass; discard_mass_unit; transferred_pack_inclusion; actual_loss_fate; unknown_count_difference; unknown_mass_difference; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_unit; direct_assignment_source; allocation_cohort_id; cohort_source_quantity; cohort_source_unit; cohort_source_state; cohort_source_record; target_exit_driver; sum_exit_drivers; exit_driver_unit; exit_driver_basis; exit_driver_source; all_exit_ids; all_exit_driver_records; exit_original_plate_equivalent; exit_equivalence_unit; exit_equivalence_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Join actual finished fired/glazed supplier release to SKU/size/lot, inherited stack/carton/separator membership, net plate body+glaze vs tare and adopted buyer condition criteria, using actual non-invasive or traceable representative supplier records. Count final unique commercial N, not plate/shard/carton. Reconcile actual stock/returns/closing/useful other exits/breakage/receiver with parentplate genealogy and unknown differences investigated. Map actual source demand via evidenced direct source assignment OR compatible complete-cohort all-exit native drivers, not accepted-only/shard denominator. Actual compatible loss owner/existing coverage once outside service. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); actual plate pieces/kg and compatible source/exit native units | each real receipt/check/movement/reject/breakage/acceptance/stocktake/source-allocation review | Supplier finished release through acceptance plus prior/later stocks/other exits/failed/open cohorts | One actual merchant and independent complete commodity/buyer/all-exit ownership gates | per reference flow | Actual SKU/size/glaze/source/net/tare/calibration/buyer/condition and all-exit assignment/equivalence/disposition evidence |
| `cp_supplies` | ambient_wholesale | new hygiene/outerpacking supplies and unused returns | supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; opening_supply; gross_receipts; receipt_tare; net_receipts; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; per_piece_mass_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion; conversion_unit; conversion_source; composition; composition_basis; composition_source; actual_fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record actual standalone new product/unit/source stock/use/closing and matched unused outward return. New outer transit/hygiene separate from inherited plate separators/cartons and contaminated waste. Select gross-plus-output OR consumed-only-omit-output, with actual native conversions/composition sources, no prescribed consumer plate washing. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; Item(s); actual native units/conversions | each actual receipt/use/return/stock event | All supply/use/return periods including open work | Named actual direct service supply excluding provider-covered resources | per reference flow | Actual SKU/native unit/calibrated netstock/return pairing and per-piece/density/conversion/composition sources |
| `cp_utilities` | ambient_wholesale | actual source utility meters and all-user drivers | utility_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_unit; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; breakage_cleanup_event_id; equipment_charging_scope; actual_water_source; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual import/export source interval OR matched direct submeter and disjoint scope. All-user causal handling/space-time or justified driver includes idle/hygiene/failed/open work. No ceramic firing/kiln/dishwasher or unreviewed processing/climate load; actual surface-water source/treatment scope explicit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh; m3; actual meter/driver units | each actual matched source/user/event interval | All service source periods/users/idle/hygiene/open cohorts | Actual direct utility/supply treatment boundary excluding provider overlap | per reference flow | Real source direction/calibration/period and full causal driver evidence |
| `cp_provider` | ambient_wholesale | actual complete physical warehouse packages | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_unit; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_energy; included_materials; included_assets; included_transport; included_treatment; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | Collect actual completed physical package/native equivalent and full resource result scope. Direct/provider/carrier/asset/receiver responsibilities exclusive; actual plate wash/food-contact test/glaze/repair/repack is separately reviewed processing, not hidden inside package. | Item(s) equivalent or actual appropriately expanded native unit | each real completed package | Actual package source/operation/treatment periods | Named actual warehouse physical provider and explicit exclusions | per reference flow | Actual completion/native equivalence/resource/overlap evidence |
| `cp_assets` | ambient_wholesale | complete warehouse/reusable handling lifetime | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_unit; conversion_source | Identify actual full assets matching manufacture/maintenance/real replacements/retirement/EOL. All-user observed history+sourced remaining driver with compatible job/life units and uncertainty/sensitivity/update, direct/provider/carrier overlap once. No everyturn new support or duplicate rent/driver-service/wholeasset view. | Item(s) equivalent; actual compatible lifetime/job driver units | each actual asset period/maintenance/replacement/retirement review | Full manufacture-to-EOL all users/periods/history+sourced remainder | One actual complete asset owner with explicit overlaps | per reference flow | Full scope/history/remainder source/native driver units and uncertainty/sensitivity |
| `cp_freight` | ambient_wholesale | actual complete packed plate payload | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; plate_payload_mass; inherited_separator_pack_mass; inherited_carton_mass; added_pack_mass; transported_support_mass; mass_unit; mass_source; whole_payload_mass; route_distance; distance_unit; distance_source; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; work_conversion_unit; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | Collect actual body+glaze plate load and disjoint inherited separators/cartons/added outer/supports, real route distance/share/empty/multi-drop/return. Actual transported vs net plate basis and native conversions source explicit; carrier embedded energy/assets once. | kg*km; actual payload/distance/native work units | each actual shipment/return leg | Agreed real transport gates and matching empty/return periods | Named actual carrier work/resource scope | per reference flow | Actual load/basis/source/route/share/native conversion records |
| `cp_outlets` | ambient_wholesale | separate fragments/packing/mixedhygiene/liquid receivers | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; source_lot_id; parent_plate_id; fragment_parent_link; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; quantity_source; whole_plate_exclusion; transferred_pack_exclusion; separate_fragment_exclusion; composition; composition_basis; composition_source; retained_component_quantity; retained_component_unit; retained_component_basis; retained_component_method; retained_component_source; retained_component_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; volume; volume_unit; conversion; conversion_unit; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Measure actual collected fragment, separated pack, mixed hygiene or cleaning liquid in its real native state with source/parent/transfer identity. Wholeplate/body/glaze/retained component/fluid nonadditive; exclude already transferred whole/chipped plates or other streams. Actual component method/source/sampletime and unit/basis explicit. Receiver classification/acceptance/treatment once; no fracture-driven emission or wash-sludge default. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | kg; m3; actual native component/stream units | each real breakage/collection/transfer and receiver acceptance | Actual incident/hygiene/receiver periods with retained stocks distinct | Actual contained receiver interface excluding direct releases | per reference flow | Actual net/source/component-fluid unit-basis-method/sample/density/composition/load and receiver evidence |
| `cp_environment` | ambient_wholesale | actual direct species and receiving medium | direct_species_record | site_id; cohort_id; event_id; period_id; substance_identity; particle_size; receiving_medium; release_state; measured_mass; measured_mass_unit; measurement_source; activity; activity_unit; activity_source; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; whole_stream_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_unit; density_source; conversion; conversion_unit; conversion_source; retained_captured_quantity; retained_captured_unit; receiver_treatment_coverage; applicability; calibration; uncertainty | Identify actual species/particle/medium and select measured species mass OR justified matched activity/factor OR measured whole-stream composition/fate with native source conversions. Complete factor not multiplied by composition/fate again. Raw/body/glaze composition, chipping/fracture/stock difference or captured fragments alone do not establish direct release or its absence. Actual species, receiving medium and release evidence are required; do not assume zero. | kg species; actual activity/whole-stream/concentration native units | each actual direct release or justified matched monitoring interval | Actual direct period/evidence applicability, no stock-residual proxy | Named actual direct environmental interface excluding contained receiver treatment | per reference flow | Calibrated measurement or applicable factor/composition/fate/native conversion/source evidence |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N=count unique final accepted_consignment_ids at reference_gate_id; accepted_service=1 Item(s). | cp_plate | One actual complete commercial service with finishedplate/pack/state/gate qualifiers |  |
| plate_pack_audit | non-exchange commodity | net_plate_mass=gross_quantity-separator_tare-primary_wrap_tare-carton_tare-transported_support_tare on matching actual native boundaries. Platepiece count and stack/carton membership real; no shard-to-plate count or manufacturer packaging mass=net plate inference. Body/glaze/component analyses do not add again to wholeplate. | cp_plate | Actual plate body+glaze/net/tare and count-state audit |  |
| original_gate_demand | non-exchange original commodity | assigned_source_gate_quantity=direct_assignment_quantity only with evidenced source-to-target link and compatible source state/unit, OR cohort_source_quantity*target_exit_driver/sum_exit_drivers after compatible sourced native conversions and complete mutually exclusive all_exit_driver_records. Denominator includes other useful exits/returns/closing/actual loss routes, not only accepted output; driver-equivalence to original plate state supported, never shard count. commodity_source_gate_demand=assigned_source_gate_quantity/N outside service; actual compatible loss_adjustment_quantity/unit/basis/source/owner and already_included_loss_coverage reconcile once without double allocation. | cp_plate; N | Actual complete factorygate assigned demand and compatible upstream loss once |  |
| new_supply_stock | service new supplies and unused returns | S=opening_supply+net_receipts-closing_supply; net_receipts=gross_receipts-receipt_tare. Gross S/N with separate matched usable_outward_return/N OR consumed-only (S-usable_outward_return)/N omitting matching return exchange. Retained recovery in closing, actual same-scope/native conversion sources required. | cp_supplies; N | Actual service supply and selected unused-return convention per reference flow |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading on actual import/export direction OR matched direct_submeter_quantity; attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N for disjoint all-user periods including idle/hygiene/failed/open resources. | cp_utilities; N | Actual warehouse purchased utility quantity per reference flow |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N only for actual matching completed physical package and complete resource ownership once. | cp_provider; N | Actual equivalent completed package quantity per reference flow |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N; life_driver=observed_driver+remaining_driver in compatible native units with all-user full lifecycle/history+sourced remainder/real replacements/EOL, one view/no double normalization. | cp_assets; N | Actual complete asset-equivalent share per reference flow |  |
| whole_load_freight | freight | whole_payload_mass=plate_payload_mass+inherited_separator_pack_mass+inherited_carton_mass+added_pack_mass+transported_support_mass on real exclusive components; freight_work=whole_payload_mass*route_distance*load_share/N after native conversions/exclusive return-empty coverage. | cp_freight; N | Actual packed-plate complete-load freight work per reference flow |  |
| contained_outlets | actual waste outlets | plate_waste=actual_discard_stream_mass/N on actual whole/chipped plate plus transferred pack scope. Other outlet_quantity=(gross_quantity-tare_quantity)/N in actual native stream unit OR volume/N with source-backed density-temperature conversion. Wholeplate/fragments/pack/mixedcleanup/liquid and component analyses nonduplicate; retained stocks/internal moves not exports, treatment once. | cp_plate; cp_outlets; N | Actual exclusive receiver streams/state and quantities per reference flow |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N after compatible source-backed native conversion; choose one. factor_complete prevents extra composition/fate, whole-stream/species outputs not duplicated. | cp_environment; N | Actual direct species mass with receiving medium per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| finished_plate_gate | received/accepted goods | Actual finished fired/glazed feldspar porcelain SKU/size/lot, source packing/count/net-tare and condition/buyer criteria; no raw-mineral baseline/page packaged weight as net plate or consumer care/safety default. | cp_plate actual source/SKU/measurement/buyer records |
| source_cohort_fates | commodity and actual exits | Actual source quantities/state/unit, direct assignment or compatible cohort all-exit native drivers incl useful other exits and exclusive original-state equivalence. Real chipping/breakage/whole-fragment genealogy/receiver and loss owner/existing coverage; unknown residual not default waste/species/zero. | Actual complete source/exit mapping/stock/disposition and quantified commodity link |
| complete_physical_scope | service resources and periods | Real all-user native drivers/source periods, complete providers/full-life assets observed+sourced remainder/replacements/EOL/uncertainty, direct/carrier/receiver scope incl hygiene/failed/open work once. | Source meters/supplies/driver/provider/asset/carrier/treatment records |
| concrete_identity_ranges | actual expanded rows | Verify actual product/provider/asset/fragment/waste/species/native property-unit before finaldata; empirical quantitative bounds need comparable evidence, not marketing strength/lifetime. | Actual detail/support/receiver and range applicability evidence |

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
| plate_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `plate_waste` under `cp_plate`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `plate_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_plate`; actual source-linked native records |
| fragment_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fragment_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `fragment_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| packaging_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packaging_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| hygiene_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| wastewater | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `wastewater` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Actual electric logistics/charging, lighting, records, ordinary ventilation and surface-cleaning equipment in ambient plate wholesale. No forming/firing/glaze kiln, merchant dishwasher, sterilizer or dedicated climate intervention; actual additional processing requires review. No onsite combustion in the declared route.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased plate-warehouse handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased warehouse electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual source meters/equipment charging scope/all-user causal periods including idle/hygiene/open work required; no kiln energy, dishwasher cycle or default electric handling hours per carton.

#### cleaning_water

Only real externally supplied water for warehouse floors/equipment/actual incident cleanup with source/treatment scope. Plates are not routinely washed/sanitized or tested for food contact in this route. Actual liquid collection and recirculation/make-up recorded independently.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased warehouse-surface cleaning water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased surface-cleaning water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Real meters/events/source and allocations needed; no consumer first-use wash, plate rinse ratio or purchased water=effluent assumption.

#### hygiene_supplies

Actual named agents, wipes/absorbents or other mass-measured service products used on warehouse surfaces or real breakage incidents. No ceramic glaze/repair adhesive/food-contact test chemical, routine plate detergent or universal spill-kit prescribed. Actual clean product mass and contaminated spent stream distinct.

Residual inventory requirement after the independently identified cases `hygiene_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse cleaning and fragment-containment consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable new cleaning/containment supply mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual SKU/formulation/unit/native receipts/stocks/use/unused-return and composition/fate sources; no cleaning recipe, fracture-response dosage or agent-to-emission fraction.

#### added_packing

Actual merchant-added outer boxes/straps/protective supports only, with defined unit/material and actual per-piece mass if converted. Inherited factory cartons, plate separators, sleeves/labels remain commodity audit, not new supply on resale. No routine plate unpack/repack; reusable pallets/bins are lifecycle assets.

- Identity requirement: Actual added outer transit supports and packing units
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable new outer transit units per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual added unit/material/native stock/unused return needed; no default plates per carton/separator weight, new bag per plate or universal protective-pack regimen.

#### provider_packages

Actual complete provider package for agreed external pack/document/condition checks, warehouse hygiene/incident handling or maintenance, with equivalent completed native unit and resource scope. Finance/fee/margin is not a physical resource-free unit. Contracted washing/food-contact testing, glazing/firing/repair/repacking remains extra real processing requiring scope review.

- Identity requirement: Completed actual physical plate-warehouse checking hygiene or handling packages
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable equivalent completed physical packages per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Actual completed contract/native unit/conversion and energy/material/asset/transport/treatment inclusions required; no standard inspection frequency, sanitizer task or price-to-Count assumption.

#### shared_assets

Real warehouse/racks/electric handling/reusable bins/pallets/scales/monitoring use one matching complete whole-asset equivalent. Include manufacture/maintenance/actual replacement/retirement/EOL across all consumers and periods. No new pallet per turn, no simultaneous rent/driver-service and wholeasset coverage.

- Identity requirement: Actual complete-life warehouse and reusable plate-handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable complete asset-equivalent shares per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need actual asset identity/native job/life driver units/all-users/observed history/sourced remaining driver and uncertainty/sensitivity/update; no universal rack lifetime or support turns.

#### freight

Actual agreed inbound/outbound/return transport includes fired/glazed plate mass plus inherited separators/cartons, added packing and transported support. Manufacturer package-listed weight is not proved net plate; actual component boundaries prevent double load. Carrier energy/assets and empty/multi-drop/return scope owned once.

- Identity requirement: Actual complete packed-plate freight work
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributable complete-load freight work per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Real as-transported component masses, actual distance/disjoint load share/native conversion evidence required; no product-page weight as universal net plate, standard stack or road distance.

#### unused_count_returns

Real unused new Count packing returned externally, paired to same-scope original supplystock/unit and recipient acceptance. Retained or internally moved items stay stock. Gross input with separate matched return OR consumed-only input omitting return exchange, no double deduction.

- Identity requirement: Actual outward unused added-transit packing returns
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable unused packing units returned per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual pair/native count/receiver and selected view; no manufacturer separator recovery counted as new unused supply, default return percentage or avoided production credit.

#### unused_mass_returns

Real unconsumed external service-supply return with exact product/state/net mass and original standalone input scope. Commercial intact/chipped plate returns remain commodity ledger, not negative cleaning supply or service. Spent contaminated material is waste.

- Identity requirement: Actual outward unused cleaning-supply returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable unused mass supply returned per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual product/native quantity/original supply pairing/receiver needed; no credit against unrelated supplies/inherited commodity packing.

#### plate_waste

Actual receiver-accepted discarded plate pieces, whole/chipped but individually identifiable, with body+glaze and associated packaging only if physically transferred together. Chipping, buyer refusal or retained reject alone is not disposal or mass loss. No duplicate fragments/glaze/packing already in this stream. Upstream actual commodity loss remains outside service; handling/treatment once.

- Identity requirement: Actual discarded whole or chipped plates in declared transfer-pack state
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable whole/chipped plate waste-stream mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plate`

Range evidence need: Need actual SKU/parent plate identities/piece state/net stream/pack inclusion and receiver disposition; no quality-score=loss, automatic landfill/recycling or universal breakage rate.

#### fragment_waste

Only actual separately collected fragments/fines after documented breakage with source-lot/parent-plate genealogy and measured body/glaze/mixed state. Fragment number is not original plate count. Captured fragments/fines are contained waste, not automatic airborne silica, glaze species or complete dry substance. Exclude whole-plate transfer and already retained mixed cleanup solids.

- Identity requirement: Actual separately collected broken porcelain fragments
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separately transferred fragment mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual parent/source/state/mass/composition/fate and receiver required; no mass deficit=breakage, chip=whole loss, shard count=plates or assumed respirable/emitted fraction.

#### packaging_waste

Actual physically separated damaged cartons/separators/sleeves/added outer packing with real material/state/remaining fragments and receiver. Not routine opening/repacking or new manufacture. Exclude packing already with whole/chipped plate transfer, fragment stream or mixed cleanup material.

Residual inventory requirement after the independently identified cases `packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately removed damaged plate packing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual component/native net quantity/remaining contents/source/receiver scope; no default paper/foam weights, all separators discarded or recycling substitution benefit.

#### hygiene_waste

Real used wipes/absorbents/cleaning residues or mixed captured solids with actual retained fragments/glaze/fluid/agents as measured in stream state. Clean product and component analyses nonadditive; separate fragment/packing transfers excluded. No cutting/grinding ceramic dust or assumed plate wash sludge introduced.

- Identity requirement: Actual contained spent hygiene and mixed fragment-cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable mixed hygiene/cleanup-solid mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual net stream and retained component/fluid quantity/unit/basis/source/receiver evidence needed; no supplied consumable=spent mass, assumed absorption or glaze-content release.

#### wastewater

Actual collected surface/incident-cleaning liquid to receiver with native volume or supported net mass-density-temperature conversion, actual composition/load/treatment. No mandatory plate washing/food-contact leach test. Retained cleanup fluid, separated solids and direct environmental species are distinct nonadditive states.

- Identity requirement: Actual contained warehouse-surface cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable contained surface-cleaning liquid volume per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual collection/receiver/density-unit-temperature-unit/source and load scope needed; no dishwashing cycles, default suspended ceramic content or water-purchase-to-sewer ratio.

#### direct_species

Only actual named species/particle and receiving medium from measurement or justified matched activity/factor or measured whole-stream composition/fate. Fired body/glaze inventory, chipping/breakage, captured fragments/fines or contained wastewater do not establish airborne silica, metal leachate or other direct release.

- Identity requirement: Actual independently identified direct warehouse species releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable direct released species mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual identity/particle size/medium/native quantity and applicability/conversion/factor/composition/fate sources; no raw-clay dust factor, glaze% to metal release or stock residual=emission.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_gate_check | accepted_service | N>0 final unique accepted commercial service with actual finishedSKU/size/glaze/platepiece/stackcarton/nettare/condition/source/period, not plate/shard/carton Count. |  |
| no_processing | whole route | No forming/firing/glazing/merchantplatewashing/sanitising/foodcontact-strengthtests/repair/grind/repack or unreviewed climate intervention, including contracted actual operations. |  |
| commodity_source_check | non-exchange source/exit ledger | Complete actual factoryplate/inheritedpack baseline, actual originalsourcequantity/unit/state/source/directlink OR compatiblecompletecohort all-exit drivers including usefulotherexits, assignment/exclusive exits/loss owner/conversion/coverage once outside service; no accepted-only denominator/shardcount/stockresidualloss. |  |
| resource_owner_check | all service resources | All users/periods/native causal drivers idle/hygiene/open attempts, grosssupplies+matchedreturn OR consumed-onlyomitreturn, fullassetlife observed+sourcedremainder/EOL/uncertainty and direct/provider/carrier/receiver physicalscope once. |  |
| outlet_species_check | actual fates | Whole/chippedplate+associatedpack vs separatefragment/packing/mixedhygiene/containedliquid exclusive with actualreceiver. Body/glaze/component/retainedfluid views nonadditive; fracture/capturedfines not chemical/particle release or recyclingcredit. |  |
| bilingual_raw_contract | all content | Raw7identity5FU6boundary6reference7profile, all8CP12fields and10calcbody-output nonempty; exact IDs/rawoperands/propertyunits/evidence/sourceURLs/ordered rules and deterministic projection withoutpreprocessing align. Pass not actualstrength/foodsafety/finalUUIDproof. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after actual foreground completion and concrete identity verification |
| downstream_use | Physical ambient finished-plate merchant add-on linked to separate complete fired/glazed factoryplate+pack source demand and compatible actual loss once, not total delivered plate manufacture/use lifecycle |
| allowed_use | Actual finished glazed feldspar-porcelain plate SKU/size/lot and merchant B2B accepted cohort with real pieces/stacks/cartons/nettare/condition/period qualifiers |
| excluded_use | Otherware/materials, rawmineral/ceramicmanufacture, washing/sanitation/testing/repair/grind/repack or unreviewedclimate, agency/retail/standalonelogistics; strength/breakage/service-life/foodsafety guarantee |
| required_metadata | Manufacturer/SKU/size/glaze/sourcegate/lot/merchant/buyer; actualplatepiece/stackcarton and parentfragment genealogy, netbodyglaze/packtare/state/source; actualconditions/stock/fates/periods; alluserresources/provider/fullassetlife/carrier/receiver scope; originalsourcequantity/state/unit/source, directassignment or compatiblecohort all-exit driver units/basis/source/usefulotherexits/equivalence, conversion/exclusivecoverage/lossownerexistingcoverage |
| required_quality_disclosure | Actual productpage/source applicability and netplate vs packweight evidence; whole/chipped/fragments and component/retainedfluid quantities nonadditive; actualsource all-exit assignment/losscoverage/unknownstate; full allusernative drivers/asset remainder uncertainty; concrete flow/support/empiricalrange gaps |
| update_trigger | SKU/porcelain/glaze/size/pack/source/acceptance changes; new processing/washing/testing/repair/repack/climate; warehouse/provider/assets/carrier/receiver scope change; actualbreakage/discard/release or materialsource evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ikea-feldspar-plate-state | literature | IKEA, IKEA365+ plate white, article502.589.45, product details/materials/measurements/packaging. https://www.ikea.com/sg/en/p/ikea-365-plate-white-50258945/ | Primary specific finished feldspar-porcelain/glaze plate and packaging-state example only. Packaging-listed weight not proved net plate. No consumer firstwash/microwave/dishwasher, marketing durability, dimensions/weight or universal breakage/strength/lifetime/food-safety claim adopted. |
