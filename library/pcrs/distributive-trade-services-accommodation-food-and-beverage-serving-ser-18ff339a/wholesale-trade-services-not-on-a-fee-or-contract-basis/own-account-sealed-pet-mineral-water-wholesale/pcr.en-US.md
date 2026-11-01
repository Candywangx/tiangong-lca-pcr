---
pcr_id: pcr.own-account-sealed-pet-mineral-water-wholesale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of sealed PET-bottled non-carbonated natural mineral water

## 1. Scope and Applicability

This PCR covers a merchant purchasing and reselling supplier-filled, hermetically sealed one-way PET bottles of non-carbonated natural mineral water through ordinary ambient warehouse receiving, stock/pack checks, electric handling and actual business-buyer acceptance. The inherited seal and ambient location do not constitute a new bounded preservation operation. A dedicated operated temperature intervention requires fresh route/module review.

Exclude extraction/source operation, water treatment, bottle/closure/label manufacture, filling, opening/resealing, new carbonation/decarbonation, bulk water, returnable-bottle washing/refilling, sparkling/flavoured/sweetened water and other drinks, retail/fee agency and standalone storage/transport. Supplier release/state records define the natural mineral-water product; this PCR grants no health, purity, shelf-life or legal-compliance claim.

All water and inherited container/packing production and filling, including losses embodied upstream, stay outside this service add-on. Their ledger and once-only original-filled-sealed-gate demand/loss interface are mandatory before complete-chain use. Actual warehouse resources, spill handling and waste receiver/treatment operations remain covered once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-sealed-pet-mineral-water-wholesale |
| classification_refs | CPC 3.0:61026; narrower own-account sealed PET non-carbonated natural mineral-water wholesale subset |
| covered_products | Own-account ambient wholesale service for supplier-released sealed one-way PET non-carbonated natural mineral water |
| excluded_products | Bulk or sparkling water; other beverages; utility water; water extraction/filling/manufacture; returnable-bottle processing; standalone storage/agency/retail |
| representative_product | Actual source/SKU/lot sealed PET filled packs through accepted commercial consignment, no standard bottle volume or case count |
| production_route | Supplier final filled/sealed release -> merchant receiving/state/stock checks -> ordinary ambient holding/electric handling -> agreed B2B acceptance |
| market_state | Completed merchant service qualified by actual sealed bottled commodity and commercial gate, not water contents as the service output |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account sealed PET non-carbonated natural mineral-water wholesale service |
| How much | 1 Item(s) |
| How well | Actual source/product/state, count/contents/tare and pack-integrity acceptance qualifiers; buyer adopted criteria and actual ambient storage/exposure records |
| How long or cycle | Actual supplier release/receipt/holding/dispatch/acceptance periods and linked unfinished stock, never a default warehouse duration |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account sealed PET mineral-water wholesale consignment |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | source_id; product_sku; supplier_release_gate; filled_sealed_pet_state; noncarbonated_state; source_lot_id; bottle_count; bottle_unit; labelled_volume; labelled_volume_unit; actual_contents_quantity; actual_contents_unit; density; density_temperature; density_source; inherited_pack_tare; merchant_id; buyer_gate; reporting_period; actual_storage_conditions |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| consignment_count | accepted_service | Count | Item(s) | Count unique final buyer-accepted commercial consignments N>0, not bottles/cases/pallets/invoices/tonnes; retain actual physical qualifiers. |
| contents_and_pack | non-exchange merchandise | Mass; Volume; Count | kg; m3; Item(s) | Actual net water mass is distinct from labelled volume and bottle count; convert actual volume only using evidenced density at compatible temperature. Record PET/closure/label/outer/pallet tare and whole-load mass; no water density default. |
| actual_supply_units | all new supplies and outlets | native property | native unit | Count packing uses actual unit definition and per-piece mass source when conversion required; Mass/Volume use measured net quantities, density/temperature and conversion source. |
| provider_asset_units | provider_packages; shared_assets | Count | Item(s) | One physical package or complete whole-asset equivalent must be defined and compatible with selected native dataset; actual other native units require separate appropriate expansion. |
| freight_units | freight | mass*distance | kg*km | Actual whole payload kg times actual km times evidenced nonoverlapping share; t-km conversion recorded explicitly. |
| species_units | direct_species | Mass | kg | Actual species/medium and measured/factor/composition/fate basis required; convert native concentration/activity/volume/pressure/temperature only on matched evidence. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier final release of filled sealed one-way PET non-carbonated natural mineral-water packs; source/SKU/state/lot and primary/secondary packing known |
| starting_condition_role | Physical own-account ambient merchant wholesale service add-on |
| product_classification_scope | Narrower beverage wholesale subset; commodity production is independently linked |
| recursive_input_rule | Do not insert traded filled packs as consumed utility or recursively manufacture them in this service. Track source-gate commodity audit separately; actual service supplies/providers need their own physically scoped inputs. |
| upstream_dataset_requirement | Separate original released filled/sealed commodity system covers extraction/source operation, actual upstream treatment as applicable, PET/closure/label/inherited packaging manufacture and filling/release, with compatible assigned demand and loss adjustment once. Extraction-only water dataset is incomplete. |
| disclosure | Actual source/lot/pack/merchant/buyer state and periods; source-gate assigned quantity/unit/state/source/owner and existing-loss coverage; intact/breached fates; all physical service/provider/carrier/asset/treatment boundaries |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| commodity_separation | all merchandise | Keep contents-water/inherited-container manufacturing and filling, including lost upstream, outside service. Record source released pack demand and actual loss interface; never infer purchase of utility water, water abstraction or new PET manufacturing merely from resale. |  |
| ambient_handling | received/accepted sealed packs | Record actual ambient conditions and unusual heat/cold/freezing/condensation/pack failure events with supplier/buyer criteria. Historical code identifies packaged distribution exposure concerns; its upstream extraction/filling sections are not wholesale processes and no numeric storage limit is imported. | codex-packaged-water-hygiene |
| supplier_product_state | sealed natural mineral water | Verify supplier source/product and inherited noncarbonated/sealed state. Historical standard distinguishes these states and hermetic containers, but actual supplier evidence and applicable adopted criteria determine the case. No inferred purity or composition percentage. | codex-mineral-water-state |
| period_and_reject | stock and actual events | Retain actual all-cohort receipt/dispatch/return/reject/breach/closing/internal movement and failed/unfinished service resources across periods. Only actual final buyer acceptance counts N; commercial usable returns, intact discarded packs and real breach/cleanup are different exits. |  |
| resource_ownership | providers assets freight treatment | Bound actual physical supplies/electric handling/cleaning/providers/full-life assets/transport and receiver treatment once. Inherited commercial goods are audit, retained recovery/internal movement is stock; no financial burden substitutes or automatic credits. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | Sealed bottled mineral-water ambient merchant holding and handover | required | Actual merchant own-account receiving/ordinary ambient holding/electric handling of supplier-filled sealed PET mineral water through accepted B2B consignment | Commercial physical service and state/stock/pack responsibility, no new extraction/filling/preservation product | `accepted_service` |

One true service node owns real receiving/handling/hygiene and agreed gate resources. The bottled-water/pack ledger is non-exchange merchandise audit. Actual conditional packing/SKU/provider/asset/waste/species cards expand from foreground records; do not invent standard inputs or environmental exits.

### Process: Sealed bottled mineral-water ambient merchant holding and handover (`ambient_wholesale`)

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

Range evidence need: Use actual source meter periods, equipment/charging scope and all-consumer driver records including idle/failed handling; no assumed kWh per bottle, nominal motor capacity or ambient climate-control default.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased utility water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual cleaning event meters, utility source/treatment and breach-cleanup inclusion are needed; no labelled bottle volume used as utility amount, or purchase-to-sewer equality.

###### Actual independently recorded synthetic detergent supply (`cleaning_agents_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable new hygiene agent supply per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual product/SKU and net receipts/stocks/unused returns and handling records; no universal chemical recipe, dose, composition or release fraction.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account sealed PET mineral-water wholesale consignment (`accepted_service`)

One actually completed unique business-buyer accepted commercial consignment of supplier-filled/sealed one-way PET non-carbonated natural mineral water under merchant ownership. Actual mineral source/product release, bottle/case quantity and unit, labelled volume, measured contents mass or evidenced actual volume-density-temperature, inherited tare/state, period and buyer conditions qualify the Count service. No fixed bottle count, water tonne or margin equivalence.

- Selected flow: Completed own-account sealed PET mineral-water wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waterpack`

Range evidence need: Actual commercial acceptance records and source-lot/SKU/pack-condition evidence establish service comparability; no default bottle size, batch load, purity threshold, service duration or acceptance yield.

##### Waste flows

###### Discarded sealed filled PET mineral-water bottle (`intact_pack_waste_atomic_case`)

Conditional on independently recorded actual Discarded sealed filled PET mineral-water bottle. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `intact_pack_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded sealed filled PET mineral-water bottle
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable intact filled-pack waste transfer mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waterpack`

Range evidence need: Need actual rejected lot/bottle count, intact status, measured gross/net receiver basis and transfer/treatment scope; do not presume rejected stock was opened, leaked or entirely discarded.

###### Actual separately collected plastic packaging waste (`empty_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated damaged-pack waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require actual component/stream identity, remaining-content basis, net mass and receiver sorting/treatment; no standard PET tare, recycling yield or avoided virgin material credit.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| commodity_gate_demand | merchandise | Trace actual original filled/sealed supplier-gate input and assigned quantity to the accepted consignment/cohort with compatible water-and-pack state/unit/source and evidenced allocation/conversion. Include evidenced originally supplied water not recovered after real breach and matching inherited packaging. Returns, closing and other exits have exclusive assignments. Dispatch net water plus discarded PET cannot substitute source-gate filled-pack demand. All upstream stages and loss adjustment are owned once outside service with existing-loss coverage; stock deficit alone cannot determine lost water, waste or release. |  |
| all_consumer_resources | actual warehouse period | Use actual all-consumer source periods and causal handling/occupied-space-time/other justified drivers, with native units and rationale, including idle, hygiene, failed/repeated attempts and open cohorts. Equal consignment or water-mass ratios are not presumed. Unfinished service resources carry forward without inventing N. |  |
| supply_return_convention | service new supplies | S=opening_supply+net_receipts-closing_supply. Choose gross input S/N plus separately recorded matching actual native unused outward-return output, OR consumed-only input (S-usable_outward_return)/N with that return exchange omitted and no extra deduction. Deduction requires evidenced same-scope standalone supplystock; retained recovered stock belongs to closing. Inherited merchandise/asset contents do not reduce unrelated current supply. |  |
| full_asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N for one compatible complete whole asset and all consumers/periods. Include manufacture, maintenance, actual replacement/retirement/end-of-life, observed history plus sourced remainder and uncertainty/sensitivity/update. Current-event/provider overlaps removed only when those same burdens have one actual owner elsewhere. No per-turn new pallet or rent/asset duplicate view. |  |
| actual_outlet_once | wastes and actual returns | Intact usable commercial return remains commodity; intact filled-pack waste is one physical whole-state transfer. On actual breach, separately assign water, separated pack and mixed cleanup stocks/outputs using measured state and receiver. No duplicate water/pack components under intact waste, no extra whole-stream/species outflow, no assumed avoided-production/recycling credit. Treatment belongs once to service or receiver package coverage. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_waterpack` | ambient_wholesale | reference and non-exchange water/pack stock | sealed_pack_acceptance_stock_record | site_id; merchant_id; warehouse_id; cohort_id; consignment_id; event_id; period_id; accepted_consignment_ids; N; reference_gate_id; ownership_resale_record; source_id; supplier_id; product_sku; source_lot_id; supplier_release_gate; supplier_release_date_time; filled_sealed_pet_state; noncarbonated_state; primary_pack_material; one_way_state; source_product_evidence; applicable_acceptance_criteria; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; exposure_event; seal_integrity; label_condition; secondary_pack_condition; bottle_count; bottle_unit; bottles_per_case; case_count; labelled_volume; labelled_volume_unit; actual_volume; actual_volume_unit; contents_net_mass; mass_unit; density; density_unit; density_temperature; density_temperature_unit; density_source; contents_measurement_method; whole_pack_gross; pet_tare; closure_tare; label_tare; outer_pack_tare; pallet_support_tare; tare_unit; opening_quantity; receipts; dispatch_quantity; supplier_return; buyer_return; closing_quantity; recovered_closing; internal_transfer_id; stock_unit; stock_state; intact_reject_quantity; intact_waste_transfer_mass; intact_waste_unit; actual_breach_event; breached_bottle_count; actual_water_unrecovered; water_unrecovered_unit; water_fate; pack_fate; measured_cleanup_quantity; unknown_discrepancy; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Join actual supplier source/SKU/filled-sealed release to merchant ownership, individual pack/cohort, adopted integrity/condition criteria and final unique buyer acceptance. Weigh contents separately from PET/closure/label/outer/pallet/support tare or convert actual volume with density/temperature evidence. Keep label volume/count analytical views separate. Reconcile actual same-state stocks/returns/closing/internal transfers, intact reject versus actual breach/fates and unknown discrepancy. Trace original filled/sealed assigned demand and actual compatible loss with one external owner and existing coverage; no loss from deficit. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); actual water kg/m3 and pack-state native units | each actual receipt/check/movement/breach/reject/acceptance/stocktake | Supplier release/receipt through handover plus prior/later stocks and unfinished/failed repeated attempts | One actual merchant responsibility and linked commodity release and buyer gates | per reference flow | Actual supplier/source/state and buyer records; calibrated mass/volume/density/tare and documented condition/fate investigation |
| `cp_supplies` | ambient_wholesale | new hygiene cleanup packing supplies and unused returns | supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; gross_receipts; receipt_tare; net_receipts; opening_supply; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; density; density_unit; density_temperature; density_source; conversion; conversion_source; composition; composition_basis; composition_source; fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record actual supply native stock/receipt/use/closing and actual matching unused external return, with separately supported unit conversions. Select one gross-plus-return or consumed-only-omit-return convention. Added transit unit identity and per-piece material mass are actual, inherited bottle/pack is excluded. No recipe/dose inferred. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; Item(s); actual native units and conversions | each actual receipt/use/return/stocktake | Complete supply source/use/return periods including open cohorts | Named actual direct supply scope with provider overlap excluded | per reference flow | Calibrated net measures; SKU/unit and pairing/closing evidence; actual composition and conversion source |
| `cp_utilities` | ambient_wholesale | actual source meters and all-consumer utility attribution | meter_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; breach_cleanup_event_id; electric_handling_coverage; utility_water_coverage; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual source import interval or matched direct submeter, with nonoverlapping scopes. Attribute all-consumer quantity on evidenced handling/space-time or justified driver, including idle/hygiene/failed/open events. Mineral merchandise water is not utility meter supply. Actual dedicated climate intervention triggers route review. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh; m3; actual meter/driver units | each matching meter and consumer/event interval | All actual service periods/users and idle/cleaning/open cohorts | Actual direct meter boundary and supplier treatment; provider overlap excluded | per reference flow | Meter calibration, real interval/source readings and all-user driver evidence with rationale |
| `cp_provider` | ambient_wholesale | physical provider packages | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_electricity; included_supplies; included_assets; included_freight; included_treatment; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | Obtain actual equivalent completed package definition, native quantity and full resource/result scope. Reconcile direct/provider/carrier/treatment/asset owners once; commercial invoice alone cannot establish resource-free Count. Water processing remains outside. | Item(s) or actually expanded native unit | each completed actual contract/event | All package source, operating and treatment periods | Named physical provider responsibility with explicit exclusions | per reference flow | Actual signed completion, package/native-unit evidence and overlap matrix |
| `cp_assets` | ambient_wholesale | complete lifecycle assets all consumers | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_source | Identify actual warehouse/rack/forklift/reusable pallet/monitor/weigher lifecycle. Attribute matching complete asset equivalent with compatible all-consumer life driver, observed history and evidenced remainder including replacement/termination/EOL. Actual turn counts inform drivers but are not new manufacture each turn. Partition direct current events/providers/carriers. | Item(s) equivalent; actual compatible life/job driver units | each asset period/maintenance/replacement/retirement review | Full asset manufacture through end-of-life, history plus evidenced remainder and every consumer | One actual complete asset responsibility; direct/provider/carrier overlap accounted once | per reference flow | Asset coverage/history/remaining-life source; driver units and uncertainty/sensitivity |
| `cp_freight` | ambient_wholesale | actual whole-load transport | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; water_payload_mass; pet_closure_label_mass; inherited_outer_mass; added_pack_mass; transported_pallet_support_mass; mass_unit; whole_payload_mass; route_distance; distance_unit; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | Reconcile actual transported water plus inherited/added packing and pallet/support load at agreed gates. Multiply compatible whole payload and actual route distance with actual disjoint shipment/consignment share. State empty/multi-drop/return and carrier energy/assets coverage. | kg*km; actual payload/distance/native-work units | each real shipment and return leg | Actual agreed transport gates and associated empty/return periods | Named carrier work with embedded energy/asset owners | per reference flow | Actual load/route/share records and source-backed unit conversions |
| `cp_outlets` | ambient_wholesale | contained damaged pack cleanup solids and liquids | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; remaining_contents; remaining_contents_unit; composition; composition_basis; composition_source; water_merchandise_fraction; utility_water_fraction; retained_cleanup_fluid; inherited_pack_inclusion; separate_stream_exclusion; density; density_unit; density_temperature; density_source; volume; volume_unit; conversion; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure each actual separated pack, mixed cleanup solid or contained liquid in its actual stream state and native unit; define remaining contents and nonadditive component views. Verify receiver/treatment and provider ownership once, exclude already-transferred intact packs and retained closing material. Composition and pollutant load require actual independent evidence. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; m3; actual stream native units | each actual collection/transfer and receiver acceptance | All actual loss/cleaning/receiver periods with stock retained separately | Actual contained physical receiver interface, no automatic direct release | per reference flow | Measured net quantity/density/state, actual composition/load basis and receiver treatment evidence |
| `cp_environment` | ambient_wholesale | actual direct species and receiving medium | direct_species_measurement_record | site_id; cohort_id; event_id; period_id; substance_identity; receiving_medium; release_state; measured_mass; measured_mass_unit; measured_volume; measured_volume_unit; activity; activity_unit; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_source; conversion; conversion_source; retained_captured_quantity; receiver_treatment_coverage; applicability; calibration; uncertainty | Establish actual species and receiving medium before identity choice. Select measured species mass OR justified matched activity/factor OR measured whole-stream composition/fate. A complete species factor is not multiplied by composition/fate again. Collected streams/retained stock differ from actual environment release; uncontained whole liquid needs appropriate separate native identity and no pure-water assumption. | kg species; all raw native activity/concentration/stream units | each actual event or justified matched monitoring interval | Actual release period and source applicability, no inferred opening/closing residual | Named direct environmental interface excluding contained receiver treatment | per reference flow | Measurement/calibration or justified factor applicability/composition/fate sources and conversion uncertainty |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N=count unique final accepted_consignment_ids at reference_gate_id; accepted_service=1 Item(s). | cp_waterpack | One complete actual commercial service with actual contents/count/pack/state/time qualifiers |  |
| contents_pack_views | non-exchange commodity | contents_net_mass=whole_pack_gross-pet_tare-closure_tare-label_tare-outer_pack_tare-pallet_support_tare on actual compatible boundary; OR contents_net_mass=actual_volume*density with compatible measured volume/density-temperature evidence. Labelled volume, bottle count and actual contents are separately recorded nonadditive views. | cp_waterpack | Actual water/pack/tare audit, no constant litre-to-kg factor |  |
| source_gate_demand | non-exchange commodity | assigned_source_gate_quantity=actual compatible evidenced allocation/conversion of source_gate_input_quantity to accepted cohort, with originally supplied unrecovered water and matching packaging where evidenced, exclusive returns/closing/other exits. commodity_source_gate_demand=assigned_source_gate_quantity/N outside service; actual loss_adjustment_quantity/unit/basis/source/owner and already_included_loss_coverage reconcile once. Unknown stock difference is not loss. | cp_waterpack; N | Separate source-gate filled/sealed demand and once-only commodity loss interface |  |
| new_supply_stock | service new supplies; unused returns | S=opening_supply+net_receipts-closing_supply; net_receipts=gross_receipts-receipt_tare. Gross input S/N plus actual matched outward return usable_outward_return/N OR consumed-only (S-usable_outward_return)/N and omit matching return exchange. Recoveries retained included in closing; use actual native units and conversion sources. | cp_supplies; N | Actual service supply and selected one return convention per reference flow |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading with actual import/export direction OR matched direct_submeter_quantity; attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N on disjoint scopes and complete all-user periods, retaining idle/hygiene/open work. | cp_utilities; N | Actual purchased utility quantity per reference flow |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N only for evidenced actual matching package; embedded physical resource owners reconciled. | cp_provider; N | Actual equivalent package quantity per reference flow |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N; life_driver=observed_driver+remaining_driver in compatible units, sourced full-life coverage and remainder, all consumers included. No duplicate per-driver service view. | cp_assets; N | One compatible actual full-lifecycle asset-equivalent share per reference flow |  |
| whole_load_freight | freight | whole_payload_mass=water_payload_mass+pet_closure_label_mass+inherited_outer_mass+added_pack_mass+transported_pallet_support_mass on actual disjoint load components; freight_work=whole_payload_mass*route_distance*load_share/N after actual unit conversions and exclusive empty/return coverage. | cp_freight; N | Actual whole-load transport work per reference flow |  |
| actual_contained_outlets | intact_pack_waste; empty_pack_waste; cleanup_waste; contained_wastewater; empty_pack_waste_plastic_pack; intact_pack_waste_atomic_case | intact_pack_waste=intact_waste_transfer_mass/N for actual intact whole pack. Other outlet_quantity=(gross_quantity-tare_quantity)/N or actual volume/N with compatible density/temperature conversion as needed. Separate whole streams and components; receiver/treatment counted once, retained closing/internal movements not exports. | cp_waterpack; cp_outlets; N | Actual disjoint contained outlets in recorded native states per reference flow |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N after compatible source-backed conversions; choose one method. factor_complete forbids extra composition/fate; no whole-stream/species duplicate physical output. | cp_environment; N | Actual species mass and receiving medium per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| sealed_source_state | received and accepted filled packs | Actual supplier/source/SKU filled-sealed one-wayPET noncarbonated release, actual buyer criteria, pack integrity/exposure history and unique acceptance required. No historical numeric quality/health/legal guarantee. | cp_waterpack actual release/condition/buyer records |
| quantity_and_loss | water and pack ledger | Actual bottle/case/label-volume/contents-mass/density-temperature/tare views compatible and separate. Actual filledpack source-gate demand, intact vs breach/returns/closing/outlets and external loss ownership/coverage required, no default deficit loss. | Measured stocks/state/fates and quantified linked commodity interface |
| resource_completeness | all consumers/providers/assets/transport | Complete actual event/period/driver units, full asset life/history/remainder/EOL and physical resource ownership including hygiene/idle/unfinished/failed and transport/treatment. | Source meters all-user drivers, provider scope and lifecycle records |
| actual_identity_ranges | actual expanded exchanges | Verify specific products/wastes/species/native property-unit support before final data; numerical bounds need independent comparable evidence, no invented benchmark. | Actual detail/support and range applicability evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| cleaning_water | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| cleaning_agents | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_agents` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| cleanup_consumables | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleanup_consumables` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_packing | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_packing` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_packages | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_packages` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_assets | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_count_returns | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_count_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| unused_mass_returns | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_mass_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| intact_pack_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `intact_pack_waste` under `cp_waterpack`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `intact_pack_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waterpack`; actual source-linked native records |
| empty_pack_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `empty_pack_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| cleanup_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleanup_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| contained_wastewater | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Measure actual electric forklift charging, conveyors, lighting, ordinary ventilation and cleaning equipment attributable to the declared ambient warehouse service. No onsite combustion or dedicated refrigeration/heating intervention in this route. Operator climate-control intervention, if actually required, needs route/module review rather than silent inclusion.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased electricity for ambient bottled-water handling
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Use actual source meter periods, equipment/charging scope and all-consumer driver records including idle/failed handling; no assumed kWh per bottle, nominal motor capacity or ambient climate-control default.

#### cleaning_water

Only externally supplied utility water actually used for floor/equipment hygiene or breach cleanup. Merchandise mineral water remains a separate commodity ledger and is never counted as purchased cleaning supply or direct abstraction. Record recirculation and genuine externally supplied make-up distinctly.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased warehouse and spill-cleaning utility water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased utility water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual cleaning event meters, utility source/treatment and breach-cleanup inclusion are needed; no labelled bottle volume used as utility amount, or purchase-to-sewer equality.

#### cleaning_agents

Expand actual named formulated products, native product mass, composition basis and use/fate for warehouse surfaces or cleanup. No bottle opening/rinsing/disinfection/resealing or processing of mineral-water contents belongs to this merchant route.

Residual inventory requirement after the independently identified cases `cleaning_agents_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse hygiene agent products
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable new hygiene agent supply per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual product/SKU and net receipts/stocks/unused returns and handling records; no universal chemical recipe, dose, composition or release fraction.

#### cleanup_consumables

Actual absorbents, wipes or other mass-measured expendables used to contain a breached pack event, segregate damaged goods or maintain handling equipment. Record clean product mass separately from retained water/chemical contamination in spent material. Conditional zero use needs event evidence.

- Identity requirement: Actual spill-containment and handling consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable new cleanup-consumable supply per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual consumable identity/native quantities/stock and compatible spent-material composition; no standard spill kit, absorbed-water ratio or unexplained loss allowance.

#### added_packing

Only new secondary transit supports, straps, wraps or outer cases actually added by the merchant for the consignment, expanded by each actual unit/material and measured per-piece mass when needed. Supplier PET bottles/closures/labels and inherited outer packing are merchandise, not newly manufactured or purchased packaging inputs here. Reusable pallets are assets, not disposable units on every turn.

- Identity requirement: Actual additional countable secondary transit packing
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable additional transit packing units per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual packing unit definition, stock/unused returns, per-piece material mass and transit role required; no fixed bottles per case, wrap grams per pallet or automatically added secondary pack.

#### provider_packages

Actual contracted physical warehouse inspection, sanitation, maintenance or handling package only when its provider defines one equivalent completed unit and includes full physical resources. No margin, insurance, finance or invoice-equivalent substitute. Products remain filled/sealed; contracted water treatment/filling/resealing is actual processing outside this route.

- Identity requirement: Completed physical inspection hygiene or handling packages
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable equivalent provider packages per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Obtain package definition/native-unit conversions, actual completed quantity, boundaries and direct/provider overlap matrix; no standard service price, duration or resource-free Count substitute.

#### shared_assets

Use actual complete warehouse, racks, forklift/electric handling, reusable pallets, monitoring or weighing equipment with matching whole-asset equivalent and one burden owner. Full manufacture, maintenance, replacement and retirement/end-of-life cover all actual consumers and periods; service rent or per-turn pallet circulation is not automatically a whole new asset.

- Identity requirement: Actual complete-lifecycle warehouse and reusable handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable full-asset equivalents per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Actual asset ID/type, complete lifecycle coverage, driver units, observed life and evidenced remainder across all users required; no standard warehouse lifetime, pallet turns or zero end-of-life.

#### freight

Actual agreed inbound/outbound/return freight with carrier gate and all load components: water contents, PET bottle/closure/label, inherited and added outer packaging, pallet/handling supports where transported. Commodity water net mass alone is not whole payload. Do not duplicate carrier electricity/fuel/vehicle infrastructure already in its transport dataset.

- Identity requirement: Actual whole-load bottled-water and return freight work
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributable freight work per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Actual payload components, loading/route distance, multi-drop share and empty return coverage/native-unit conversion are required; no nominal litre=kg default or standard route/loading ratio.

#### unused_count_returns

Actual external return of unused merchant-added Count packing matched to the same supplystock/unit and recipient acceptance. Retained or internally moved stock is not an external exchange. Use either gross supply plus this outward return, or consumed-only supply with this return exchange omitted, never both deductions.

- Identity requirement: Actual outward unused added-packing returns
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable returned unused packing units per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require paired original supply ID, actual outward quantity/unit and recipient record; no assumed return rate, inherited-bottle deposit credit or recycling credit.

#### unused_mass_returns

Actual externally returned unused hygiene/cleanup supply, with exact product/state and matching standalone input-stock scope. Commercial filled-bottle returns belong to the non-exchange commodity audit; spent contaminated wipes are waste.

- Identity requirement: Actual outward unused mass-measured service supply returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable unused supply mass returned per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual same-scope supply/outward-return pairing and net mass; no negative utility demand or automatic credit from merchandise returns.

#### intact_pack_waste

Actual intact sealed filled packs accepted by a named waste receiver, with measured water-plus-primary-pack mass and state. Commercial usable supplier/buyer returns are not this waste. An intact-pack transfer is one whole-state outlet; do not simultaneously report its still-contained water and PET as additional physical outlets. Commodity loss demand remains outside this service; actual handling/treatment owner remains once.

- Identity requirement: Actual discarded intact filled mineral-water packs
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable intact filled-pack waste transfer mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waterpack`

Range evidence need: Need actual rejected lot/bottle count, intact status, measured gross/net receiver basis and transfer/treatment scope; do not presume rejected stock was opened, leaked or entirely discarded.

#### empty_pack_waste

Actual breached PET bottle/closure/label waste physically separated for receiver transfer, plus declared remaining adhered contents only when included in measured stream state. Not new bottle manufacture. Inherited secondary-pack waste expands separately by actual material/receiver if damaged. No duplicate transfer of an intact whole pack or already included mixed cleanup solids.

Residual inventory requirement after the independently identified cases `empty_pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately collected breached or emptied primary-pack waste
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated damaged-pack waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require actual component/stream identity, remaining-content basis, net mass and receiver sorting/treatment; no standard PET tare, recycling yield or avoided virgin material credit.

#### cleanup_waste

Actual spent absorbents, wipes and handling/hygiene residues with measured dry consumable, retained mineral water/utility water/chemical state as recorded; one whole mixed physical stream to actual receiver. Contents and clean consumable supply are analytical views, not extra duplicate outflows.

- Identity requirement: Actual collected mixed spill-cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable mixed cleanup-solid transfer mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual net transfer mass, composition/state and source, retained fluid and excluded pack streams; no waste mass inferred from purchased absorbents or stock deficit.

#### contained_wastewater

Actual separately identified collected breached water and/or cleaning liquid to a receiver, with actual mixing/composition, compatible volume/density/temperature or net mass conversion and pollutant-load evidence. Utility water, spilled merchandise, condensed external moisture and retained cleanup fluid differ. A contained stream is not a direct environmental water emission or pollutant species.

- Identity requirement: Actual contained mineral-water breach and cleaning liquid to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable contained liquid transfer volume per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require actual collection/receiver volume or measured mass-density basis and treatment scope; no pure-water assumption, labelled bottle litres=outfall or default sewer fraction.

#### direct_species

Only actual direct release with named substance and receiving medium, measured mass or justified matched activity/factor or measured whole-stream composition/fate. Mineral-water merchandise is not automatic pure water, extraction or pollutant discharge. An actual uncontained liquid needs appropriate separate native whole-stream identity/unit and independently supported species; no stock-difference release, and no collected waste release before its receiver treatment. Non-carbonated does not mean chemically zero dissolved carbon dioxide; Neither bottle breach nor a label alone establishes whether, or how much, carbonate/carbon-dioxide is released. Require actual release evidence; assume neither zero nor a positive release.

- Identity requirement: Actual independently evidenced direct released species
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable directly released species mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Require species/medium, quantity and unit conversions, composition/factor applicability and fate source; no SDS=release, default mineral species, evaporation loss or complete-chemical-release assumption.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_check | accepted_service | N>0 final unique commercial buyer accepted consignment with actual source/state/pack/count/contents/tare/density-temperature/time/condition qualifiers; not bottle/case or kg reference. |  |
| no_hidden_processing | whole route | No extraction/treatment/filling/opening/resealing/carbonation/returnable bottle processing or unreviewed dedicated climate intervention; contracted physical processing remains real route scope. |  |
| commodity_stock_gate | merchandise and actual exits | Verify actual original released filled/sealed baseline covers upstream water+container+filling, assigned originalgate demand/actual loss units/state/source/owner/existingcoverage outside service once, exclusive returns/closing/other exits, no stock residual=release. |  |
| physical_resource_owners | all resources | Actual all-user periods/driver units, idle/hygiene/open attempts, supply returns and full asset lifecycle/remainder/EOL; provider/carrier/treatment scopes once, no per-turn pallet manufacture or double normalization. |  |
| intact_breach_release | all actual outlets | Usable commercial return differs from intact waste, actual breach/separated pack/mixed cleanup/liquid and environmental species. No simultaneous intact whole pack and component outflows, no commodity-water abstraction/utility/purewater emission assumption. |  |
| bilingual_projection | all cards/rules | Actual output reference name/link and raw six fields, qualifiers, seven profile fields, card/evidence/property-unit/protocol operands/sourceURL and ordered rules align bilingual and projection; pass alone does not verify site quality or final UUID. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after complete actual foreground collection and concrete exchange verification |
| downstream_use | Ambient merchant physical service add-on linked to separate released filled/sealed mineral-water commodity system with actual compatible demand/loss once; not full bottled-water delivered footprint |
| allowed_use | Declared one-wayPET suppliersealed noncarbonated natural-mineralwater ambient own-account wholesale cohort and actual accepted B2B gate |
| excluded_use | Bulk/sparkling/flavoured water or otherdrinks, extraction/filling/containerproduction, climate-intervention route without review, returnable bottle processing, feeagency/retail/standalonewarehouse; health/safety/shelflife guarantee |
| required_metadata | Merchant/source/SKU/lot/pack/release and buyer gates; actual bottle/case/labelvolume/contentsquantity densitytemperature and PETclosurelabelouter/support tare; ambient/exposure/period records; all-user resources/providers/carriers/full-life assets and actual waste receiver; originalgate assigned quantity/state/unit/source/allocation/conversion/lossowner/existingcoverage |
| required_quality_disclosure | Actual measurement/calibration and count-volume-mass/tare compatibility; intact/breach/cleanup/unknown differences; all-user causal drivers and full-life sourced remainder; physical package/treatment overlap; originalgate commodity demand/loss adjustment; actual exchange support/identity/range gaps |
| update_trigger | Supplier/source/noncarbonated/pack state or criteria change; new opening/refilling/resealing/climate intervention; warehouse/handling/asset/provider/carrier/treatment route change; breach/reject/loss/release or material evidence update |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| codex-packaged-water-hygiene | official_guidance | Codex, Code of Hygienic Practice for Collecting, Processing and Marketing of Natural Mineral Waters, CAC/RCP33-1985 revised2011, section8. https://www.fao.org/input/download/standards/224/CXP_033e.pdf | Historical primary packaged distribution exposure/context: freezing/container failure, condensation/label-secondarypack damage, excessive heat/cold concerns. No numeric defaults, current legal-compliance claim, chemical recipe or upstream production step adopted. |
| codex-mineral-water-state | standard | Codex Standard for Natural Mineral Waters, CODEXSTAN108-1981 amended2011, sections2.2.2 and5. https://www.fao.org/input/download/standards/223/CXS_108e.pdf | Historical primary distinction of noncarbonated mineral-water and hermetic packaged state; actual supplier/source evidence remains required, no purity/density/composition/health threshold or inferred current law. |
