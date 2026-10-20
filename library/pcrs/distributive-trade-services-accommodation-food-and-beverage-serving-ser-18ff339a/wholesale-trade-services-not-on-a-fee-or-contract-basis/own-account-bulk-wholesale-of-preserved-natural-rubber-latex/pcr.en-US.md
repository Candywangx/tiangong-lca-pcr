---
pcr_id: pcr.own-account-bulk-wholesale-of-preserved-natural-rubber-latex
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account bulk wholesale of preserved natural rubber latex

## 1. Scope and Applicability

This PCR defines one own-account merchant wholesale service for already concentrated and preserved Hevea natural rubber latex, released by its supplier and received at a single declared bulk-tank site. The merchant purchases and resells the material, records actual receipt/quality and tank holding, uses electric transfer equipment, and completes one business-buyer accepted bulk consignment without changing its commercial formulation. Actual same-batch transfer/circulation and representative sampling are measured where operated; neither an agitation schedule nor a universal storage period or temperature is prescribed.

Exclude plantation/tapping/collection, concentration, preservative addition, deliberate maturation or quality adjustment, water addition/dilution, blending grades, compounding, coagulation/recovery manufacture, vulcanization and finished articles, as well as fee/contract agency, retail and standalone warehousing or transport. Supplier-released preserved latex is the inherited condition, not a warehouse chemical recipe. Actual material-changing operation, even if outsourced, requires a separately reviewed route and boundary. All traded-latex manufacture, including embodied upstream of merchandise losses, remains outside this service add-on and requires a linked once-only commodity-system loss adjustment.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-bulk-wholesale-of-preserved-natural-rubber-latex |
| classification_refs | CPC 3.0:61019 Wholesale trade services, not on a fee or contract basis, of agricultural raw materials n.e.c.; narrower natural-rubber latex subset (0195 goods) |
| covered_products | One actual own-account bulk wholesale consignment service for supplier-released already concentrated/preserved Hevea latex without formulation change |
| excluded_products | Natural rubber primary production/processing; field latex requiring stabilization/concentration; compounded/vulcanized/synthetic latex; material-changing processing; retail/agency; separate storage/transport |
| representative_product | Own-account bulk wholesale of preserved natural rubber latex |
| production_route | Supplier final release -> merchant tank receipt and actual representative quality/stock control -> electric holding/transfer -> actual business-buyer accepted consignment |
| market_state | Completed commercial service rather than wet latex or dry rubber product; actual inherited latex grade, DRC/TSC, preservation and period/gate declared |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account bulk wholesale service for an actually accepted preserved natural-latex consignment |
| How much | 1 Item(s) |
| How well | Buyer acceptance against actual contract grade, preservation/assay scope, whole-latex quantity, DRC/TSC and quality condition; no universal concentration or ammonia requirement |
| How long or cycle | Actual source release, merchant receipt, tank holding/transfer and final buyer gate interval, plus linked stock/unfinished periods and attributable cleaning/idle events |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account bulk wholesale consignment of preserved natural rubber latex |
| reference_flow_property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | own_account_resale; merchant_site; source_lot_and_tank; supplier_release_gate; consignment_id; Hevea_latex_identity; concentration_route; inherited_grade_and_preservation; actual_whole_latex_net_mass; DRC_method_basis_result; TSC_method_basis_result; preservative_identity_concentration_basis; representative_sampling; receipt_holding_dispatch_times; actual_buyer_acceptance_gate; provider_freight_asset_scope; commodity_original_gate_loss_owner_adjustment |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `service_count` | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N is the positive final unique complete accepted consignment count. Tank turns, transfer loads, assay samples, invoices and kg wet/dry are not N; 1 is reference normalization, not a standard lotmass. |
| `latex_assays` | merchandise and latex_residues; latex_residues_atomic_case | Mass | kg; dimensionless mass fraction | Measure actual whole-latex net mass independently of DRC and TSC assays. Record fraction/percent conversions and actual sampling/method applicability; DRC is not total solids, TSC-DRC is only a compatible analytical non-rubber difference, and 1-TSC is not proved pure water when other volatiles matter. |
| `preservative_basis` | merchandise and direct_species; direct_species_ammonia_air | Mass | kg; declared composition basis | Preserve concentration basis on whole latex or aqueous phase and source-backed actual phase conversion; inherited ammonia content is neither added chemical supply nor released ammonia. No default grade, preservative recipe or emission fraction. |
| `native_once` | all actual exchanges | actual native property | actual native unit | Retain unit/support and physical service/asset identities. Normalize cohort-attributed actual amount to N once. Final unverified electricity support or provider native unit remains incomplete, not an fuel-specific NCV/GCV factors or Count substitute. Verified electricity using an ILCD reference property named Net calorific value is allowed on its independently confirmed electrical-energy basis and unit group; the label does not authorize fuel heating-value factors. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actually supplier-released already concentrated/preserved Hevea natural latex with measured whole-liquid quantity, traceable grade, DRC/TSC/preservative state and representative sampling evidence |
| starting_condition_role | Beginning of downstream merchant physical wholesale service, after supplier final primary processing/adjustment and release |
| product_classification_scope | Narrower 61019 service related to0195 natural rubber; not all agricultural raw materials or every natural-rubber form |
| recursive_input_rule | No self-recursing wholesale or traded commodity manufacturing input. Every supplier/provider gate, internal tank transfer and inherited stock is explicitly linked once. |
| upstream_dataset_requirement | Complete actual electricity, cleaning/sampling supply, laboratory package, tank/transfer asset, freight and treatment datasets; separately linked original-gate natural-latex commodity system with compatible measured loss adjustment |
| disclosure | Merchant commercial responsibility; actual source and buyer gates; tank/lot/consignment/period; actual DRC/TSC/chemical-state sampling and units; stock heels/residues/spills/returns; source/provider/asset/leg/outlet and commodity-loss sole ownership |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `post_release_service` | all service exchanges | The complete supplier plantation/tapping/concentration/preservation/maturation inventory is outside this add-on, including all merchandise-loss embodied upstream. Record actual losses and link their compatible original-gate upstream commodity adjustment exactly once before a complete-chain or final package claim; no zero-burden product interpretation or double addition. |  |
| `physical_route` | latex_wholesale | Include actual merchant receipt/quality verification, monitored holding and same-batch physical transfer/sampling, buyer acceptance and attributable idle/cleaning/rejected attempts. No deliberate concentration/preservation/compounding or recovery processing is hidden by calling it storage or outsourcing. Actual occurrence requires reviewed route extension. |  |
| `assay_applicability` | latex quality | DRC and TSC are separate applicable assay results, with sampled state/method and uncertainty. Confirm actual Hevea/preservative compatibility; do not extrapolate standard scopes to synthetic, compounded, vulcanized, non-Hevea or KOH-preserved latex. Method abstracts supply no full laboratory recipe or universal quality limits. | iso-latex-drc-126; iso-latex-tsc-124 |
| `source_quality_state` | supplier condition | Supplier sales sheets distinguish dry rubber, total solids and preservative qualities. Their product-specific limits, shipping sizes and upstream chemical additions are evidence of distinct inherited states, not mandatory merchant defaults. | thaitex-latex-specification; thaitex-latex-route |
| `providers_periods` | physical resources | Enumerate actual all-consumer period/site scope for electricity, tanks/pumps/hoses, laboratory and carriers, and treatment for disjoint residue/rinsewater streams. Missing scope is supplied once, no direct/provider double counting. No onsite combustion or environmental abstraction in this route. |  |


## 6. Process Inventory Structure

One merchant-responsibility node covers the actual same-grade, non-transforming bulk-latex wholesale operation. Tank transfers, sampling and cleaning carry distinct event/lot/period records within that node, not fabricated commodity-production nodes. Conditional requirements expand only for real actual SKU/provider/species/native units. The merchandise quality/stock/DRC/TSC/preservative ledger is a non-exchange audit and cannot add the full commodity manufacture to the service.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `latex_wholesale` | Merchant tank receipt, quality-tracked holding and bulk buyer acceptance | required | Actual source-released preserved Hevea latex merchant receipt/resale and complete business-buyer gate | Non-transforming physical wholesale-service responsibility | `accepted_service` |


### Process: Merchant tank receipt, quality-tracked holding and bulk buyer acceptance (`latex_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual meter registers, pump/circulation logs and disjoint all-consumer/time driver records must support a comparable consignment energy guardrail; no tank power, operating hours or kWh/tonne default.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable cleaning water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Use actual source meters and cleaning-event records, volumes and conversion evidence with real tank turnover; no fixed rinse quantity, cleaning frequency or assumption that all supplied water becomes wastewater.

###### Actual independently recorded synthetic detergent supply (`cleaning_chemicals_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable cleaning chemical supply per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Stock and actual formulation/concentration/state evidence must support mass consumption and residue attribution; supplier latex preservative specifications and SDS hazards are not cleaning doses or releases.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account bulk wholesale consignment of preserved natural rubber latex (`accepted_service`)

One actual merchant-own-account purchase/resale consignment of already concentrated and preserved Hevea natural latex accepted by the business buyer at its declared gate. N counts unique final accepted consignment IDs, not tanker loads, tank turnovers, invoices, assay samples or a standard wet/dry mass. Actual concentration/preservation/quality history remains declared.

- Selected flow: Completed own-account bulk wholesale consignment of preserved natural rubber latex
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_latex`

Range evidence need: One is only normalization. Signed actual commercial acceptance, shipment/stock links and representative lot DRC/TSC/preservative-state evidence define comparable service; no fixed wet tonnage, dry rubber tonnage, ammonia grade or margin equivalence.

##### Waste flows

###### Discarded undiluted preserved natural-rubber latex (`latex_residues_atomic_case`)

Conditional on independently recorded actual Discarded undiluted preserved natural-rubber latex. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `latex_residues`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded undiluted preserved natural-rubber latex
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable as-received contained latex residue mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_latex`

Range evidence need: Actual wet net mass, sample representativeness/DRC/TSC, state and receiving treatment are needed; do not assign liquid latex concentration to coagulum or infer residue from a tank mass deficit, nor call one wet kg one dry kg.

##### Elementary flows

###### Actual separately evidenced ammonia emitted to air (`direct_species_ammonia_air`)

Only actual directly released ammonia CAS7664-41-7 to air, with measured or independently supported species-specific amount, source and medium. Native mass is kgNH3, not kgN or ammonium; no default volatility, dose, manure factor or whole-fluid release. The unspecified-air identity does not replace a known finer compartment. Exclude upstream/provider emissions and contained transfers.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable species mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Require actual species mass or justified matched activity factor or measured whole-fluid release with composition and fate, all with basis/unit/source and uncertainty. Whole-latex ammonia versus aqueous-phase concentration cannot be interchanged; complete factors are not multiplied again by composition/fate.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `commodity_loss_interface` | latex merchandise | Record actual loss/outlet wet mass/state and matched DRC/TSC rather than infer a loss from stock residue. The separate original-gate commodity system owns its once-only measured upstream adjustment with quantity/unit/basis/source and existing-loss-coverage check. Dry-rubber and whole-latex basis must match that dataset; 1 wet kg is not 1 dry kg. All commodity manufacturing remains outside this service.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |  |
| `actual_cohort` | all service resources | Use measured physical causal drivers across all actual contracts/lots/periods, not default equal shares or margin allocation. Retain resources for rejected/repeated events. Unfinished consignments keep actual open-cohort period resources until acceptance or final reject fate; never create N or disappear. |  |
| `shared_lifecycle` | shared_assets | asset_equivalent=(job_driver/life_driver)/N with a matching full lifecycle covering manufacture, maintenance, actual replacements, retirement and end-of-life. life_driver covers all consumers and periods using observed life/history or evidenced remainder with sources/uncertainty/sensitivity/update. No simultaneous per-driver service or duplicated manufacturer/carrier asset burden. |  |
| `supply_return_convention` | supplies and usable_returns | S=opening+net_receipts-closing; choose gross supply input S/N and separately record its actual matched unused outward-return output, OR consumed-only supply input (S-usable_outward_return)/N and omit that return exchange with no further deduction. Recovered closing is already closing. Nonreturned waste/loss supply burden remains; latex commercial returns stay in merchandise ledger, not avoided-production credits. |  |
| `fluid_fates` | latex/residue/wastewater and species | Pair internal transfers and separate usable returns/recovered closing, distinct contained fluid/residue wastes and actual environmental releases. Total spill is a nonadditive audit of those disjoint fates. Wet liquid, DRC dry-rubber/TSC characterization and species views are never added as duplicate physical outflows; no automatic credit for commercial recovery. |  |

Gross-with-outlets is permitted only when all actual same-native-unit usable-return exchanges are explicitly represented. For mass-measured cleaning chemicals returned unused without a represented Mass return exchange, use consumed-only supply and keep the matched outward transfer in the audit; never silently substitute the Count return card. Actual additional return exchange expansion is required before adopting a gross view.


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_latex` | latex_wholesale | accepted consignment and non-exchange latex inventory/quality/loss | latex_stock_quality_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; supplier_release_gate; ownership_record; grade; Hevea_identity; concentration_route; preservation_state; preservative_identity; preservative_concentration; preservative_basis; preservative_assay_source; arrival_time; dispatch_time; duration; duration_unit; temperature; temperature_unit; tank_layer; circulation_record; sample_id; sample_time; sample_removed_quantity; sample_returned_quantity; sample_quantity_unit; sample_fate; sampling_method; sampling_coverage; assay_method; method_applicability; drc_value; drc_unit; drc_basis; drc_fraction; drc_conversion_source; tsc_value; tsc_unit; tsc_basis; tsc_fraction; tsc_conversion_source; assay_uncertainty; gross_mass; tare_mass; net_latex_mass; mass_unit; density; density_unit; density_temperature; density_temperature_unit; density_source; measured_volume; volume_unit; opening_heel; receipts; closing_heel; recovered_closing; internal_transfer_id; buyer_accepted_quantity; supplier_return; customer_return; usable_recovery; rejected_quantity; residue_wet_quantity; residue_drc; residue_drc_unit; residue_drc_basis; residue_tsc; residue_tsc_unit; residue_tsc_basis; residue_assay_source; loss_fate; receiver; transfer_id; stock_discrepancy; investigation; commodity_dataset_id; original_commodity_gate; commodity_basis; commodity_loss_owner; commodity_loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; existing_loss_coverage; commodity_overlap_check; acceptance_specification; buyer_signature; calibration; uncertainty; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Reconcile actual title/purchase/resale, received and dispatched weighed whole latex, tank heels, representative layer/transfer samples and actual buyer specification/results. Record inherited preservation state and any rejected/repeated event. N uses final unique accepted consignment IDs; unfinished resources stay in linked open-cohort periods. Pair internal transfers and recovered closing; resolve unexplained stock differences without inferring fluid/species loss. Quantify actual fates and link original-gate commodity loss adjustment outside service once.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); actual whole latex kg and assay-specific fractions | each receipt, tank/transfer sample, dispatch, reject, spill and opening/closing survey | All source-released latex receipt-to-accepted-buyer events, linked prior/later stock and unfinished periods | Named merchant tank site and actual contractual provider interfaces | per reference flow | Signed acceptance; calibrated mass/volume; representative assays with applicability/uncertainty; complete stock/fate and original-gate commodity-loss evidence |
| `cp_supplies` | latex_wholesale | current cleaning chemicals and discrete sampling consumables/returns | supply_stock_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; sku; material_identity; composition; composition_basis; composition_source; material_state; native_property; native_unit; opening; gross_receipts; tare_receipts; net_receipts; closing; recovered_closing; usable_outward_return; return_receiver; return_transfer_id; used; waste; uncontained_loss; chosen_return_view; conversion_factor; conversion_unit; conversion_source; piece_mass; piece_mass_unit; piece_mass_source; density; density_unit; density_source; temperature; temperature_unit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual formulation/SKU native stock and receipt/return records. S=opening+net_receipts-closing; choose S/N gross-with-outlets with matched return ledger, or (S-usable_outward_return)/N consumed-only without a second return deduction. Recovered closing is already closing; nonreturned wastes/losses retain supply burdens. Expand actual other-native exchanges before final dataset. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | actual SKU native unit; kg or Item(s) where appropriate | each supply, use, return and stocktake event | All selected operation and linked stock periods | Same merchant node and actual consumption boundary | per reference flow | Stock/return matching, formulation and actual unit conversion evidence |
| `cp_utilities` | latex_wholesale | purchased electricity and cleaning water | utility_meter_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; meter_id; source_id; meter_register_role; reading_start; reading_end; meter_factor; metered_quantity; gross_import; gross_export; utility_unit; conversion_factor; conversion_unit; conversion_source; cleaning_event; rinse_stage; recirculation; retained_water; wastewater; measured_evaporation; driver; driver_unit; attributable_share; all_consumers; idle_intervals; provider_inclusion; coverage_start; coverage_end; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read source-specific import meters/bills and disjoint consumer intervals. Attribute actual pump, circulation, cleaning, monitoring and idle uses with compatible all-consumer drivers; no active recipe/conditioning assumed. Keep gross supplied water and actual fates separate, no automatic water=effluent or unrelated export netting. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh; m3 | each meter interval and actual cleaning/transfer event | All attributable active, idle and cleaning periods | Actual site sources and all disjoint consumers | per reference flow | Meter calibration, bills and complete driver/source coverage |
| `cp_provider` | latex_wholesale | actual completed external quality packages | provider_quality_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; provider_id; sample_id; assay_method; applicability; physical_result; completed_package_id; completion_date; quantity; native_property; native_unit; upstream_dataset; upstream_unit; material_scope; utility_scope; asset_scope; transport_scope; waste_scope; missing_scope; direct_overlap; acceptance_id; uncertainty | Obtain actual package completion/sample assay result and full upstream scope. Count only a physically specified native-Count completed package, never fee/hours. Other native quantities require expansion. Include actual reagents, utilities/assets, transport and waste once; supplier inherited quality certificate is evidence rather than a new purchased assay by default. | actual provider native unit; Count only if package-native | each completed actual package | All attributable sample/retest events in selected cohorts | Actual provider and merchant responsibility split | per reference flow | Signed results, package native unit and complete non-overlap scope |
| `cp_assets` | latex_wholesale | shared tanks/pumps/hoses/containment full lifecycles | asset_lifecycle_driver_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; asset_id; asset_identity; lifecycle_dataset; lifecycle_unit; all_consumers; all_periods; job_driver; driver_unit; life_driver; life_driver_unit; observed_life; observed_history; evidenced_remainder; remainder_source; manufacture_scope; maintenance_scope; replacement_events; replacement_scope; termination_event; eol_scope; lifecycle_sources; provider_inclusion; selected_view; uncertainty; sensitivity; update_trigger | Use actual asset inventory, complete lifetime burden and compatible driver across every contract, lot/site consumer and period. Include actual maintenance, replacements, retirement/end-of-life and observed lifetime or evidence-backed remainder. Choose one complete asset-equivalent Count view; no simultaneous per-driver service plus duplicate asset manufacture. | asset-equivalent Item(s); compatible driver units | each use, maintenance, replacement and terminal event | Full asset manufacture through all usage/maintenance/replacements to end-of-life; selected cohort driver separately linked | Every actual consumer of merchant assets; supplier/carrier inclusion separately bounded | per reference flow | Full lifecycle sources, compatible all-consumer drivers, evidence-backed remaining use and sensitivity |
| `cp_freight` | latex_wholesale | actual whole-latex payload and route/empty return | freight_leg_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; shipment_id; leg_id; carrier; load_quantity; load_unit; whole_latex_kg; load_conversion; load_conversion_source; route_distance; distance_unit; distance_km; distance_conversion; distance_source; attribution_share; all_loads; empty_return; empty_service_coverage; commodity_inclusion; provider_inclusion; responsibility; uncertainty | Reconcile actual carrier legs and weighed whole-latex payload with route distance and commodity/provider overlap. Preserve failed or returned legs where merchant-owned; actual empty service coverage is required but has no invented payload. | kg*km | each actual carrier leg and return | All selected merchant responsibility legs | Merchant-carrier-commodity dataset interfaces | per reference flow | Weighbills, route evidence, load/distance conversion and empty service coverage |
| `cp_outlets` | latex_wholesale | contained rinsewater and other non-latex waste outlets | waste_receiver_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; outlet_id; stream_id; origin_event; material_identity; material_state; native_property; native_unit; gross_quantity; tare; net_quantity; measured_volume; density; density_unit; density_temperature; density_temperature_unit; density_source; sample_id; sampling_method; drc_value; drc_basis; tsc_value; tsc_basis; pollutant_identity; concentration; concentration_unit; composition_basis; composition_source; receiver; transfer_id; treatment_route; treatment_coverage; provider_inclusion; nonadditive_characterization; uncertainty | Measure actual waste/aqueous outlets by disjoint stream, material/state and receiver. Match actual treatment once and preserve contaminated solids vs latex residue vs rinsewater. Analytical dry rubber/solids/species load characterizes the same physical fluid and is not an additive second waste amount. Direct outfall would need separately reviewed Elementary exchange, not this contained wastewater. | actual waste native unit; kg or m3 as applicable | each outlet, cleaning drain and receiver transfer | All actual attributed waste and cleaning events | Named site outlets and receiving treatment | per reference flow | Actual quantities, sampling/composition and disjoint treatment boundary/receiver proof |
| `cp_environment` | latex_wholesale | actual direct inherited-latex species handling and releases | species_release_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; exchange_id; substance; source_medium; receiving_medium; source_event; measured_mass; mass_unit; activity; activity_unit; species_factor; factor_unit; factor_scope; factor_source; factor_complete; whole_release; whole_release_unit; whole_fluid_identity; composition; composition_basis; composition_source; aqueous_phase_fraction; phase_fraction_source; fate; fate_basis; fate_source; capture_state; retained_spill; recovered_to_closing; contained_waste; uncontained_release; conversion_factor; conversion_unit; conversion_source; temperature; temperature_unit; pressure; pressure_unit; provider_inclusion; calibration; detection_limit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Identify actual species and receiving medium independently of merchandise identity. Use measured species mass, valid matched activity factor, or actual whole-fluid release with evidence-backed composition/fate and exclusive paths; retain whole-latex vs aqueous-phase basis and actual phase conversion. Recovered spill in closing, contained waste and environmental release are separate disjoint fates, total-spill audit nonadditive; no SDS or stock residual factor. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg by actual species and receiving medium | each actual release and relevant observation interval | All attributable direct events and periods | Actual emitting site; provider-included releases excluded from repeat | per reference flow | Species/medium and compatible measured/factor/composition/fate sources with uncertainty/detection limits |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `consignment_reference` | accepted_service | N=count unique accepted_consignment_ids at final reference_gate_id; accepted_service=1 Item(s). | cp_latex | One actually accepted physical commercial consignment with actual latex/assay/time qualifiers |  |
| `latex_assay_views` | merchandise; latex_residues; latex_residues_atomic_case | dry_rubber_kg=net_latex_mass*drc_fraction; total_solids_kg=net_latex_mass*tsc_fraction, only for same representative sample/state/method-compatible mass fractions. nonrubber_difference_kg=total_solids_kg-dry_rubber_kg is an analytical compatible difference, not a pollutant species. Do not infer pure water as 1-tsc_fraction or wet residue as dry rubber. | cp_latex; cp_outlets | Nonadditive actual assay views of the same recorded physical material |  |
| `latex_stock_fates` | merchandise and residue audit | Reconcile opening_heel+receipts with closing_heel, actual buyer dispatch, supplier/customer returns and complete actual fates by compatible whole-latex and dry-rubber views. Recovered closing belongs to closing; paired internal transfers cancel. Record actual sample removals/returns, representative stratified/settled material and uncertainty; investigate stock_discrepancy without inventing releases.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | cp_latex; cp_environment | Non-exchange stock audit and compatible commodity-loss adjustment evidence |  |
| `supply_native` | cleaning_chemicals; sampling_consumables; usable_returns; cleaning_chemicals_synthetic_detergent | net_receipts=gross_receipts-tare_receipts; S=opening+net_receipts-closing; gross_input=S/N OR consumed_input=(S-usable_outward_return)/N, one chosen convention. Count return ledger only pairs actual unused countable items; chemical/outlet other-native quantities expand separately. | cp_supplies; N | Actual native supply and outward unused returns per reference flow |  |
| `utility_meter` | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | metered_quantity=(reading_end-reading_start)*meter_factor on the appropriate source import register, or directly measured compatible source quantity; utility_quantity=sum(metered_quantity*conversion_factor*attributable_share)/N. Use disjoint source/consumer/event/period intervals and all-consumer drivers. | cp_utilities; N | Actual purchased electrical energy or cleaning water per reference flow |  |
| `quality_package` | quality_packages | provider_quantity=quantity/N for actual native-Count completed package with matching result/unit and full coverage; other native-unit provider exchanges require expansion. Add missing_scope once and remove direct_overlap. | cp_provider; N | Complete actual provider quality service per reference flow |  |
| `asset_equivalent` | shared_assets | asset_equivalent=(job_driver/life_driver)/N with compatible complete lifetime driver units and matching full-lifecycle asset dataset. | cp_assets; N | Asset-equivalent Item(s) per reference flow |  |
| `freight_work` | freight | freight_work=sum(whole_latex_kg*distance_km*attribution_share)/N; whole_latex_kg is actual transported wet payload and distance units/conversions/empty scope are explicit. | cp_freight; N | Actual kg*km per reference flow and separately covered actual empty service |  |
| `physical_outlets` | latex_residues; other_wastes; wastewater; usable_returns; latex_residues_atomic_case | For latex_residues use residue_wet_quantity/N; for other_wastes or wastewater use net_quantity/N in their actual native unit; for usable_returns use usable_outward_return/N. Every outlet has its distinct material/state/receiver; analytical DRC/TSC/species views are characterization, not added outlets. Pair receiving treatment once without avoided-product credit. | cp_latex; cp_outlets; cp_supplies; N | Actual disjoint contained outlets per reference flow |  |
| `species_release` | direct_species; direct_species_ammonia_air | species_mass=measured_mass/N OR activity*species_factor/N OR whole_release*composition*fate/N after compatible basis/unit conversion, choose one path. Whole-latex versus aqueous-phase composition needs actual phase_fraction_source, not inferred water=1-TSC or 1-DRC. factor_complete forbids multiplying composition/fate again. | cp_environment; N | Actual species mass and receiving medium per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `accepted_gate` | accepted_service | Each N entry has merchant title/resale responsibility, actual lot/tank and complete business-buyer specification/results/signature. Supplier release and inherited physical formulation are distinct from warehouse transformation. | cp_latex commercial and quality evidence |
| `representative_assays` | actual latex stocks/fates | Require representative source/tank/transfer samples, actual assay methods/applicability and fraction/basis conversion plus uncertainty. DRC/TSC/preservative tests differ; reject inappropriate method/state transfer and unknown composition rather than fill a vendor default. | Sample IDs, layer/transfer records, actual certificates and calibration |
| `commodity_interface` | commodity and service linkage | Before complete-chain/finalpackage use identify original gate and actual loss wet/dry basis, quantity/unit/source/owner and existing loss coverage; no omitted upstream lost commodity or duplicated burden within service. | Commodity-adjustment and stock/outlet evidence |
| `complete_scope` | all source/provider/asset/leg/period | One actual owner and compatible unit for each resource, full provider and asset lifecycle/all-consumer scope, replacements/termination and source-backed remainder. Quantify actual contained waste/rinsewater and treatment once. | Scope matrix, physical provider results and full-life asset register |
| `identity_ranges` | actual exchange expansion | Concrete SKU/provider/asset/species/property/unit identities must be verified before final dataset. Empirical ranges require independent comparable source/basis and actual reference quantity; no commercial specification substituted for consumption, loss or emission. | Concrete UUID details/support and independent empirical evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| cleaning_water | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| cleaning_chemicals | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_chemicals` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| sampling_consumables | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `sampling_consumables` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| quality_packages | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `quality_packages` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_assets | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| usable_returns | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| latex_residues | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `latex_residues` under `cp_latex`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `latex_residues_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_latex`; actual source-linked native records |
| other_wastes | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| wastewater | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `wastewater` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species | latex_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Only actual purchased electricity for pumps, sampling circulation, monitoring, lighting and any actually operated environmental controls at this electric-only site, including attributable idle and cleaning intervals. Same-batch circulation is physical handling, not a recipe for concentration, deliberate maturation or compounding.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased electrical energy for latex wholesale tanks and transfer
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual meter registers, pump/circulation logs and disjoint all-consumer/time driver records must support a comparable consignment energy guardrail; no tank power, operating hours or kWh/tonne default.

#### cleaning_water

Record actual external cleaning water and scope; never add water to traded latex as an assumed top-up or replace an actual dilution step with a cleaning label. Retain actual rinse sequences, recirculation and disjoint residual fates. Environmental abstraction is outside this purchased-water route.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased water for emptied tank, hose and work-area cleaning
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable cleaning water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Use actual source meters and cleaning-event records, volumes and conversion evidence with real tank turnover; no fixed rinse quantity, cleaning frequency or assumption that all supplied water becomes wastewater.

#### cleaning_chemicals

Actual named and formulated cleaning chemicals used on isolated/empty equipment, with residue fate and provider boundary. There is no default preservative, ammonia, stabilizer or coagulant addition to merchandise within this scope. Any intentional latex chemistry adjustment requires reviewed route extension.

Residual inventory requirement after the independently identified cases `cleaning_chemicals_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual mass-measured tank and hose cleaning chemicals
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable cleaning chemical supply per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Stock and actual formulation/concentration/state evidence must support mass consumption and residue attribution; supplier latex preservative specifications and SDS hazards are not cleaning doses or releases.

#### sampling_consumables

Record actual countable single-use sample bottles, seals or other discrete transfer consumables by SKU and state; use actual native-unit expansion for uncountable materials. Reusable hoses, pumps and vessels are lifecycle assets; inherited latex containers are commodity/transport scope, not new supplies each order.

- Identity requirement: Actual countable sampling vessels and transfer consumables
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable countable sampling and transfer consumables per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual SKU piece counts, opening/receipts/closing and unused returns; obtain actual count-to-mass data only for an independent nonadditive mass view, not an assumed bottle or seal mass.

#### quality_packages

Actual completed and physically defined native-Count laboratory/inspection packages matched to sample/lot and assay results. Distinguish DRC from TSC and preservative/alkalinity/other specified tests; do not assume every method fits every latex. Full package covers its actual reagents, utilities, equipment, waste and transport unless separately supplied once.

- Identity requirement: Completed external latex assay and quality-inspection packages
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable completed assay packages per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Require actual package ID, tests, physical result, native unit, completion and complete dataset scope; invoice fee or analyst hours cannot become one Count package, and raw actual-native units need expansion if not package-native.

#### shared_assets

Actual merchant tanks, pumps, hoses, scales, sampling tools and containment facilities allocated as fractions of matching complete asset lifecycles across every contract, user and period. Include manufacture, maintenance, replacements and end-of-life; do not count the whole site or a tank-litre each consignment.

- Identity requirement: Tank, pump, hose and containment asset-equivalent lifecycles
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable whole-lifecycle asset-equivalent quantity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Use actual compatible lifetime driver totals and observed service history or evidenced remainder, replacement/termination/end-of-life sources, uncertainty and sensitivity; name every consumer and prevent supplier/carrier-owned asset overlap.

#### freight

Actual carrier legs in merchant responsibility not already included in commodity or other provider datasets. Use weighed whole-latex net load, not dry rubber mass as tanker payload; attribute shared loads and actual empty tank/container return scope separately without inventing loaded mass.

- Identity requirement: Actual responsibility-bounded bulk-latex and return freight work
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributable bulk-latex freight work per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Actual leg load and distance units/conversions, carrier and responsibility/empty-return records are required; no dry-rubber substitution for transported wet latex or standard tanker capacity/distance default.

#### usable_returns

Only actual unused discrete sampling/transfer consumables returned across the boundary to a named receiver, matched to input SKU and count basis. Carried or recovered closing stock is not an outward return. Supplier/customer latex returns belong to merchandise audit, not this consumable return.

- Identity requirement: Actual unused countable current-operation consumable returns
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable unused counted consumable returns per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require matching SKU/state/Count and signed outward transfer plus selected gross-with-outlets or consumed-only stock convention; no artificial negative supply or second avoided-product credit.

#### latex_residues

Weigh actual wet latex discard, collected undiluted spill, coagulum/skin or tank residue by distinct state and receiver, with measured DRC/TSC where needed. Returned usable latex is not Waste. A rinse-water stream goes to the separate wastewater ledger; dry rubber content is an analytical view of the same residue, not a second additive waste exchange.

- Identity requirement: Actual contained undiluted latex, coagulum or tank residues for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable as-received contained latex residue mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_latex`

Range evidence need: Actual wet net mass, sample representativeness/DRC/TSC, state and receiving treatment are needed; do not assign liquid latex concentration to coagulum or infer residue from a tank mass deficit, nor call one wet kg one dry kg.

#### other_wastes

Actual spent absorbents, filters if actually present, cleaning residues and sampling/transfer disposables by material and contamination state, with receiving treatment. Separate retained reusable equipment, unused return and commodity residue; hazardous status requires actual evidence.

- Identity requirement: Actual spent cleaning and sampling materials for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable other contained waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require actual weigh/tare and material/state/receiver records, treatment scope and evidence of contamination; no waste fraction per tank, default filter, or inherited latex chemical concentration applied to every disposable.

#### wastewater

Actual separately measured aqueous rinse/cleaning wastewater sent to an identified treatment receiver, with actual pollutant load/DRC/TSC evidence as appropriate for that stream. Distinguish it from undiluted latex residue, recirculation, recovered merchandise and direct environmental outfall. Analytical rubber/species load is a nonadditive characterization of the same fluid.

- Identity requirement: Actual contained latex-rinse and cleaning wastewater to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable contained wastewater per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Use actual volume, density if mass conversion is required, sampling/composition/time and treatment coverage; wastewater volume is not dry rubber lost and purchased cleaning water is not automatic effluent.

#### direct_species

Actual direct species and receiving medium, including ammonia only where established by monitoring or a valid matched activity/composition/fate path. Inherited preservative content may require handling/release accounting without any added warehouse ammonia. Contained spill and capture are not air release; no whole-fluid, dry rubber deficit or SDS hazard is a species identity or released amount.

Residual inventory requirement after the independently identified cases `direct_species_ammonia_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual individually identified direct latex-handling substance releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable species mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Require actual species mass or justified matched activity factor or measured whole-fluid release with composition and fate, all with basis/unit/source and uncertainty. Whole-latex ammonia versus aqueous-phase concentration cannot be interchanged; complete factors are not multiplied again by composition/fate.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `service_reference_check` | accepted_service | N>0 unique final accepted IDs with actual net whole latex, separate DRC/TSC/preservation/sampling/grade/period/buyer-gate qualifiers; 1 Item(s) is not a load, dry tonne, standard concentration or monetary unit. |  |
| `quality_boundary` | all route | Verify supplier final release before merchant operation and no hidden preservative addition, deliberate maturation, concentration, dilution, compounding or vulcanization. Actual transformed route even outsourced must be separately reviewed. |  |
| `stock_and_assay` | all merchandise and residue fates | Check whole-liquid vs dry rubber/TSC/volatile/species bases, sample/settling coverage, assay applicability, heels/recovered closing/internal transfers, actual commercial return/reject/waste decisions and unknown discrepancy investigation. No purewater/ammonia/airrelease inference from residual or SDS. |  |
| `upstream_loss_once` | service and commodity system | Every actual irrecoverable merchandise-loss quantity has compatible original commodity gate, measured basis/source and sole owner with existing-loss-coverage check; its upstream adjustment occurs once outside service before complete chain readiness. No 1wetkg=1drykg or default zero losses.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |  |
| `resources_scope` | providers/assets/periods | Verify actual causal all-consumer drivers, provider native completion/unit and full scope, complete asset life/remaining evidence/replacement/end-of-life, meter/cleaning/idle freight/empty/reject coverage and unfinished-resource carry. No double normalization or repeated supply returns. |  |
| `fluid_species_treatment` | residues; wastewater; direct_species; direct_species_ammonia_air | Actual contained spill/residue, rinsewater, recovered merchandise and species/medium releases have disjoint stream/fate owners and once-only treatment. Verify compatible composition/factor/fate with real phase basis; no additive dryrubber/species characterization of same fluid or duplicate provider-included release. |  |
| `languages_projection` | all rules/cards/protocols | Raw bilingual reference fields/card names/IDs/units/evidence/collection raw operands/source URLs and ordered rules align with canonical projection. Concrete identity and final quantitative evidence require separate verification. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset only after actual complete foreground collection and concrete exchange verification |
| downstream_use | One non-transforming merchant wholesale service add-on linked to a separate compatible original-gate natural-latex commodity system and its once-only measured loss adjustment. |
| allowed_use | The declared source-released preserved Hevea latex grade, tank/site/consignment and buyer gate, with actual whole-liquid mass, DRC/TSC/preservative/sampling and physical scope qualifiers. |
| excluded_use | Whole delivered-latex product footprint; plantation/primary processing or any deliberate merchant material transformation; compounded/vulcanized/synthetic latex; agency/retail; unknown commodity loss ownership or universal tankload/concentration values. |
| required_metadata | Own-account owner/site; source release and buyer gates; actual lot/tank/consignment/cohort/period IDs; inherited grade and preservative state; actual wet net mass, DRC/TSC methods/bases/results and sampling; actual holding/transfer times, provider/asset/freight/cleaning scope; stock heels/fates and original-gate commodity loss adjustment/sole owner |
| required_quality_disclosure | Mass/volume calibration and density state where used; representative layer/transfer assay applicability/uncertainty; stock discrepancy and actual spill/residue handling; all-consumer full-life asset/remainder/provider/period scope; once-only commodity loss linkage; unresolved actual identity and Range evidence limits |
| update_trigger | Changed source or latex grade/chemistry/state, tank/transfer/storage operation or quality method, deliberate concentration/preservation/compound activity, gate/owner, resource/provider/asset lifetime or observed stock/loss/effluent/release evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| iso-latex-sampling-123 | standard | ISO 123:2001, Rubber latex — Sampling, public scope. https://www.iso.org/standard/23281.html | Recognizes representative latex sampling in tanks/transport containers. Full method steps/counts not supplied by abstract and not claimed. |
| iso-latex-drc-126 | standard | ISO 126:2005, Natural rubber latex concentrate — Determination of dry rubber content, public abstract. https://www.iso.org/standard/35176.html | DRC assay identity/applicability, distinct from total solids; actual qualified method required, no inaccessible procedure or universal DRC limit. |
| iso-latex-tsc-124 | standard | ISO 124:2014, Latex, rubber — Determination of total solids content, public abstract. https://www.iso.org/standard/61884.html | Separate TSC test scope and method applicability; not rubber species, water purity or ammonia release evidence. |
| thaitex-latex-specification | handbook | THAITEX, Natural latex concentrate sale specification. https://www.thaitexgroup.com/latex/latex_specification.php | Primary producer distinguishes DRC, TSC, nonrubber and ammonia on whole latex. Supplier values are product-specific sales criteria, not default quantities/grades/chemical recipes in this PCR. |
| thaitex-latex-route | handbook | THAITEX, Manufacturing process and quality control. https://www.thaitexgroup.com/latex/latex_manufacturing_flow.php | Primary producer concentration, preservation and maturation/final adjustment precede tested dispatch. Distinguishes upstream material manufacture from subsequent merchant receipt/holding; numeric process examples not reused. |
