---
pcr_id: pcr.own-account-original-closed-aqueous-shampoo-wholesale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of factory-finished original-closed bottled aqueous nonmedicated hair shampoo

## 1. Scope and Applicability

Applies to own-account merchant purchase/resale of actual factory-finished original-closed bottled aqueous nonmedicated hair shampoo to business buyers, in ordinary ambient warehouse holding and electrically handled receipt/dispatch. Excludes conditioners, body wash, medicated/dandruff treatments, dry/aerosol shampoo and refill stock. No merchant formulation, dilution, opening, refill, repacking, foaming tests, salon washing or consumer use is modeled. Actual extra operations or compromised goods require explicit route review rather than assumed zero work. Manufacturer ingredient evidence supports qualitative formulation questions only: actual water/surfactants/conditioning agents/fragrance/thickener/preservatives do not establish percentages, density, performance or releases. The manufacturer current body is partly templated; indexed product/bottle context is separate evidence and supplies no default bottle size, recycled fraction, recycling credit or wholesale life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-original-closed-aqueous-shampoo-wholesale |
| classification_refs | CPC 3.0:61075; narrower; supplied goods 35323 within 3532 |
| covered_products | Actual finished original-closed bottled aqueous nonmedicated hair shampoo merchant service |
| excluded_products | Conditioner, body wash, medicated/dandruff and dry/aerosol/refill products; fee agency, retail and formulation/filling/consumer-use services |
| representative_product | Actual traceable SKU/variant/batch/formula original bottle/closure, actual pump only if included, net liquid and pack/headspace state |
| production_route | Supplier released formulated-filled-closed original bottle -> merchant receipt/ambient hold/electric handling -> final real owned/resold B2B acceptance |
| market_state | Completed commercial service, with shampoo merchandise remaining a separately linked commodity system |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Final accepted own-account B2B consignment of original-closed bottled aqueous nonmedicated hair shampoo |
| How much | 1 Item(s) |
| How well | Actual ownership/resale and business-buyer gate/source after reversals, with SKU/formula/closure/pack/liquid-state qualifiers and linked source inventory |
| How long or cycle | Actual receipt/holding/dispatch/acceptance times and stock/meter/asset reporting periods, timezone and source; no universal duration |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account original-closed bottled aqueous nonmedicated hair-shampoo wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; SKU; variant; batch_id; formula_version; aqueous_nonmedicated_evidence; original_closed_state; bottle_count; net_shampoo_mass; net_shampoo_volume; density; density_temperature_unit; bottle_closure_label_pump_tare; headspace_quantity; source_gate_state; receiving_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only unique final actual owned/resold B2B acceptances after reversals; N>0 for normalization, not bottle count or mass. |
| liquid_mass | cp_shampoo; cp_outlets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Match actual liquid/formulation/temperature density and native volume units; separate bottle/closure/actual pump/headspace and no foam/capacity shortcut. |
| water_composition | cp_shampoo; cp_outlets | Mass | kg | Water wet-mass fraction versus compatible dry-basis ratio must be explicit; volume composition and LOD other volatiles are not water mass fractions. |
| packed_transport | freight | Mass * Length | t*km | Actual cargo includes all carried product/pack/support; native EACH actual count once or TOTAL unchanged, only noncargo tare subtraction, record share inside unique load-leg sum then N once. |
| native_component_fate | cp_outlets; cp_environment | Mass | kg | Each retained product/water/fluid/component/species quantity has independent unit/basis/method/state/source/sampletime; convert compatible measures only and keep whole-stream parts nonadditive. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-finished formulated aqueous nonmedicated hair shampoo in original closed bottles and inherited pack, released at the declared supplier gate. |
| starting_condition_role | Service add-on starting fact, not a production cut-off that removes missing commodity stages. |
| product_classification_scope | CPC 3.0:61075; supplied goods 35323 within 3532; narrower original-closed bottled aqueous nonmedicated hair shampoo |
| recursive_input_rule | Purchased/resold shampoo and commercial returns are nonexchange merchandise throughflow/stock. Do not recurse them into consumed service water, surfactant, bottle manufacture or the same wholesale service. |
| upstream_dataset_requirement | Link a compatible complete actual supplier-release inventory covering raw materials, formulation/manufacture, filling/closure and original bottle/pack. Raw water or surfactant alone is incomplete. Quantify actual assigned original-gate demand and exclusive linked loss adjustment with native units/state/source/owner and baseline stage/loss coverage once outside this service before complete-chain use. |
| disclosure | Declare actual formulation/SKU/batch, original closure and pack/headspace, net wet mass versus actual liquid volume and density temperature, dates/conditions, ownership and buyer acceptance, source link, every competing exit and incomplete evidence. |

### Boundary Rules

| rule_id | Rule |
| --- | --- |
| commodity_boundary | Exclude all traded shampoo embodied upstream, including lost product and original container/pack, from service exchanges. Keep quantified original-gate demand/loss linkage outside once; include actual physical merchant handling, cleanup and scoped receiver treatment once. |
| merchant_route | Include actual receipt, closure/pack condition checks without opening, ordinary ambient holding, electric handling and final B2B handover. No merchant mixing, thinning, refill, repack, opening, foam testing, salon/consumer use or assumed climate intervention; real extra operations require reviewed route extension. |
| period_reject | Record consignment/cohort and actual meter/stock periods with timezone. Leaked, expired, compromised, rejected, unfinished and reversed lots retain their resource attribution, actual return/closing/receiver exits and no final acceptance count until eligible. No deficit-to-loss or unknown-to-zero inference. |
| outlet_boundary | Keep whole retained-product bottles, independent packaging residues, absorbed cleanup, free collected shampoo, contained hygiene liquid and direct species disjoint. Fate requires actual receiver or medium evidence. No automatic emptying, recycling, treatment credit or ingredient-to-emission conversion. |
| shared_coverage | Declare direct/provider/carrier/receiver and full-life asset owners for each event and period. Exclude duplicative utility, transport, treatment and asset coverage. Inherited formulation and original closed packaging are not merchant process modules. |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bottled_shampoo_wholesale | Own-account original-closed bottled shampoo wholesale | required | Actual owned/resold B2B consignment | foreground | accepted_service |

Consignment/cohort service in recorded warehouse periods, with event-linked receipt, ambient holding, electric handling, actual hygiene/cleanup, rejection and handover. No manufacturing yield is assigned to service. Record initial/open/closing stocks and incident/changeover work once across actual consumers; no default cleaning per bottle or rejected-lot disappearance.

### Process: Own-account original-closed bottled shampoo wholesale (`bottled_shampoo_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: actual_utility_quantity*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual meter interval kWh, all-consumer allocation driver and handling/idle coverage; no benchmark per bottle or litre.

###### Actual liquid treated tap-water supply (`hygiene_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: sum(exclusive_per_record(raw: converted_water_m3*documented_share; already_attributed: attributed_water_m3))/positive_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual hygiene-water meter or supplier volume and interval, sharing and destination records, not bottled shampoo volume.

###### Actual independently recorded synthetic detergent supply (`service_consumables_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: gross S/N with paired return or (S-usable_outward_return)/N omitting paired return
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material identity/composition, stock opening/receipts/closing, count-to-mass or density basis and real unused return. No default agent dose.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account original-closed bottled aqueous nonmedicated hair-shampoo wholesale consignment (`accepted_service`)

One real final business-buyer accepted consignment of owned/resold original-closed factory-finished shampoo, after reversals, with actual SKU/batch, formulation, bottle/closure/actual pump, liquid and packaging qualifiers. Count measures the completed service, not one bottle, kg, litre or currency margin.

- Selected flow: Completed own-account original-closed bottled aqueous nonmedicated hair-shampoo wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shampoo`

Range evidence need: Need actual unique final acceptance, merchant ownership/resale evidence, business buyer and gate/source/reversal records; actual bottle count, wet mass, liquid volume/density temperature and pack/headspace conditions qualify each service.

##### Waste flows

###### Discarded closed bottle containing aqueous shampoo (`whole_bottle_waste_atomic_case`)

Conditional on independently recorded actual Discarded closed bottle containing aqueous shampoo. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_bottle_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded closed bottle containing aqueous shampoo
- Flow property / unit: Mass / kg
- Amount rule: actual whole-bottle receiver transfer mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need original bottle IDs, actual whole transfer mass and retained content/closure state, discard decision and receiver treatment coverage; expiry does not prove a universal discard fraction.

###### Actual separately collected paper packaging waste (`separate_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packaging stream mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual separated pack material/retained shampoo units and sample evidence, transfer mass and receiver fate; nominal empty-bottle tare is insufficient for contaminated waste.


###### Actual separately collected metal packaging waste (`separate_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packaging stream mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual separated pack material/retained shampoo units and sample evidence, transfer mass and receiver fate; nominal empty-bottle tare is insufficient for contaminated waste.


###### Actual separately collected plastic packaging waste (`separate_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packaging stream mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual separated pack material/retained shampoo units and sample evidence, transfer mass and receiver fate; nominal empty-bottle tare is insufficient for contaminated waste.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| physical_attribution | Direct-assign actual events to consignments when traceable; otherwise use documented physical handling, occupied-space-time or other causal native drivers across every consumer/cohort/period. No bottle-count, sales margin or liquid-mass allocation without actual equivalence evidence. |
| source_gate_assignment | Outside service, direct actual source-to-target trace is preferred. Otherwise assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers, only with positive complete compatible all-terminal drivers including closing, returns, useful other exits and actual loss, each quantity/unit/basis/method/state/source/link/owner. commodity_source_gate_demand=assigned_source_gate_quantity in original released state, including evidenced ordinary state-change share; final shipped mass plus discard is not a substitute. Record native baseline/additional quantity, conversion, missing stages, loss owner and existing coverage once.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| supply_return_convention | S=opening+net_receipts-closing including retained recovery. Use gross supply input S/N and separately record actual paired usable unused return output; or consumed-only input (S-usable_outward_return)/N and OMIT that paired return exchange. Deduct only matching same-scope standalone supply, never inherited shampoo/bottle or unrelated input, and never a second credit. |
| asset_lifetime | Allocate each full asset lifecycle by compatible job_driver/lifetime_all_user_driver, where lifetime combines observed all-user use and sourced remaining service, with uncertainty/sensitivity/update. All periods and consumers, manufacture/maintenance/replacement/EOL included; provider/carrier coverage disjoint. Divide service total by N once. |
| freight_and_fates | Each unique load-leg actual work uses that record documented_service_share inside the sum, then /N once. Cargo includes actual bottle/closure/pump/headspace/pack/support, not only liquid; EACH actual count once/TOTAL unchanged and only noncargo tare deducted. Actual return/recovery/disposal classification, receiver transport and treatment have one owner; portions of whole mixed streams are nonadditive, with no automatic credit. |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_shampoo | bottled_shampoo_wholesale | Actual node inputs, outputs or explanatory audit quantities | Consignment, bottle-state, stock and original-source ledger | bottle_count; bottle_count_unit; bottle_count_basis; bottle_count_method; bottle_count_state; bottle_count_source; bottle_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; net_shampoo_mass; net_shampoo_mass_unit; net_shampoo_mass_basis; net_shampoo_mass_method; net_shampoo_mass_state; net_shampoo_mass_source; net_shampoo_mass_sample_time; net_shampoo_volume; net_shampoo_volume_unit; net_shampoo_volume_basis; net_shampoo_volume_method; net_shampoo_volume_state; net_shampoo_volume_source; net_shampoo_volume_sample_time; bottle_closure_label_pump_tare; bottle_closure_label_pump_tare_unit; bottle_closure_label_pump_tare_basis; bottle_closure_label_pump_tare_method; bottle_closure_label_pump_tare_state; bottle_closure_label_pump_tare_source; bottle_closure_label_pump_tare_sample_time; whole_bottle_cargo_mass; whole_bottle_cargo_mass_unit; whole_bottle_cargo_mass_basis; whole_bottle_cargo_mass_method; whole_bottle_cargo_mass_state; whole_bottle_cargo_mass_source; whole_bottle_cargo_mass_sample_time; headspace_quantity; headspace_quantity_unit; headspace_quantity_basis; headspace_quantity_method; headspace_quantity_state; headspace_quantity_source; headspace_quantity_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; water_mass_fraction; water_mass_fraction_unit; water_mass_fraction_basis; water_mass_fraction_method; water_mass_fraction_state; water_mass_fraction_source; water_mass_fraction_sample_time; dry_matter_mass; dry_matter_mass_unit; dry_matter_mass_basis; dry_matter_mass_method; dry_matter_mass_state; dry_matter_mass_source; dry_matter_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; SKU; variant; batch_id; formula_version; formulation_record; aqueous_nonmedicated_evidence; original_closed_state; bottle_material; closure_type; pump_if_actual; headspace_composition_source; actual_fill_not_capacity; foam_exclusion; component_mass_or_volume_basis; water_wet_or_dry_basis; water_definition_source; LOD_other_volatiles_exclusion; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; target_exit_driver; sum_exit_drivers; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; source_gate_allocation_source; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; receiving_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; wet_mass; wet_mass_unit; wet_mass_basis; wet_mass_method; wet_mass_state; wet_mass_source; wet_mass_sample_time; w_wet; w_wet_unit; w_wet_basis; w_wet_method; w_wet_state; w_wet_source; w_wet_sample_time; w_dry; w_dry_unit; w_dry_basis; w_dry_method; w_dry_state; w_dry_source; w_dry_sample_time; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | Trace actual merchant purchase/resale ownership, business buyer and final acceptance gate/source/reversals; receipt alone does not establish ownership or completed resale. Check actual SKU, variant, batch, formulation, original closure, bottle and actual cap/pump. Retain net liquid mass, actual liquid fill versus nominal capacity or foam, matching volume/density temperature and tare/headspace boundaries. Ingredient order is not composition percentage. For source attribution use actual direct links or every compatible terminal exit driver including closing, returns, useful other exits and evidenced loss; record each native quantity, unit, basis, method, state, source, link and owner. Preserve source-gate original quantities including evidenced state changes, full manufactured/fill/closure/pack stage and baseline loss coverage.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Native record units and sourced compatible conversions; dates and timezone | Each actual event and meter/stock interval | Actual receipt/dispatch/acceptance times and cross-period attribution including unfinished resources | Actual node site and explicitly owned handoffs, no synthetic all-process scope | per reference flow | Raw records, method calibration, units/basis/state/source/sample time, exclusive ownership and uncertainty; missing evidence is not zero |
| cp_supplies | bottled_shampoo_wholesale | Actual node inputs, outputs or explanatory audit quantities | Actual service consumables and secondary protection ledger | composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; material_identity; supply_stock_scope; matched_return_ids; allocation_owner; unused_return_convention; inherited_product_exclusion; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh or count actual wipes, hygiene agents, absorbents, filters and added outer protection by material and event; do not include inherited shampoo, bottle, cap, pump or factory pack. Record native EACH/TOTAL, conversion, density and sampling evidence. Link standalone supply stock and outward usable unused returns; choose gross supply plus separate return or consumed-only supply omitting the paired return exchange, with no second credit. Allocate only evidenced service share. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Native record units and sourced compatible conversions; dates and timezone | Each actual event and meter/stock interval | Actual receipt/dispatch/acceptance times and cross-period attribution including unfinished resources | Actual node site and explicitly owned handoffs, no synthetic all-process scope | per reference flow | Raw records, method calibration, units/basis/state/source/sample time, exclusive ownership and uncertainty; missing evidence is not zero |
| cp_utilities | bottled_shampoo_wholesale | Actual node inputs, outputs or explanatory audit quantities | Electric handling and actual site-water meter records | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; interval_start; interval_end; time_zone; time_source; all_consumers; share_numerator; share_denominator; overlap_exclusion; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; utility_quantity_scope_raw_or_attributed; utility_quantity_scope_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read interval meters or reconcile supplier records and actual handling/space-time drivers across all consumers. Distinguish delivered site water used for merchant hygiene from water contained in shampoo. Keep actual utility identity, unit conversions, meter interval and ownership; exclude provider/carrier utility already included elsewhere. Ambient observations do not imply refrigeration or climate control.  Use the actual documented share of each interval record. A directly measured quantity belonging exclusively to this target cohort may use share=1 only with scope evidence; an already attributed quantity is not multiplied by a share again. Record utility_quantity_scope_raw_or_attributed and its source; reconcile compatible numerator/denominator units, complete all-consumer scope and share basis. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Native record units and sourced compatible conversions; dates and timezone | Each actual event and meter/stock interval | Actual receipt/dispatch/acceptance times and cross-period attribution including unfinished resources | Actual node site and explicitly owned handoffs, no synthetic all-process scope | per reference flow | Raw records, method calibration, units/basis/state/source/sample time, exclusive ownership and uncertainty; missing evidence is not zero |
| cp_provider | bottled_shampoo_wholesale | Actual node inputs, outputs or explanatory audit quantities | Actual contracted merchant-operation package | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; share_driver_quantity; share_driver_quantity_unit; share_driver_quantity_basis; share_driver_quantity_method; share_driver_quantity_state; share_driver_quantity_source; share_driver_quantity_sample_time; provider_id; contract_id; included_operations; excluded_operations; asset_utility_transport_treatment_coverage; owner; allocation_evidence; period_id; time_zone; time_source; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time | Obtain actual provider work description, physical quantity/unit and coverage for handling or site hygiene. Supplier formulation/filling, consumer washing and merchant opening/refill are not included operations. Reconcile utility, assets, freight and waste-treatment coverage with direct records once; money alone is not physical equivalence. | Native record units and sourced compatible conversions; dates and timezone | Each actual event and meter/stock interval | Actual receipt/dispatch/acceptance times and cross-period attribution including unfinished resources | Actual node site and explicitly owned handoffs, no synthetic all-process scope | per reference flow | Raw records, method calibration, units/basis/state/source/sample time, exclusive ownership and uncertainty; missing evidence is not zero |
| cp_assets | bottled_shampoo_wholesale | Actual node inputs, outputs or explanatory audit quantities | Full-life warehouse, handling and reusable-support records | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; asset_type; manufacture; maintenance; replacement; end_of_life; all_consumers; all_periods; observed_boundary; remaining_life_evidence; uncertainty; sensitivity; update_trigger; provider_overlap; period_id; time_zone; time_source | Identify actual warehouse, racks, electric handling devices and reusable supports. Collect full manufacture, maintenance, replacement and end-of-life scope. Assign job use against observed all-user use plus evidenced remaining all-user service on compatible units; record equivalence, uncertainty, sensitivity and update triggers. Keep every consumer and period, including open/rejected consignments, and exclude carrier/provider-owned coverage already modeled. | Native record units and sourced compatible conversions; dates and timezone | Each actual event and meter/stock interval | Actual receipt/dispatch/acceptance times and cross-period attribution including unfinished resources | Actual node site and explicitly owned handoffs, no synthetic all-process scope | per reference flow | Raw records, method calibration, units/basis/state/source/sample time, exclusive ownership and uncertainty; missing evidence is not zero |
| cp_freight | bottled_shampoo_wholesale | Actual node inputs, outputs or explanatory audit quantities | Unique actual load-leg shipment record | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; shampoo_mass; shampoo_mass_unit; shampoo_mass_basis; shampoo_mass_method; shampoo_mass_state; shampoo_mass_source; shampoo_mass_sample_time; bottle_cap_pump_label_mass; bottle_cap_pump_label_mass_unit; bottle_cap_pump_label_mass_basis; bottle_cap_pump_label_mass_method; bottle_cap_pump_label_mass_state; bottle_cap_pump_label_mass_source; bottle_cap_pump_label_mass_sample_time; headspace_contents_mass; headspace_contents_mass_unit; headspace_contents_mass_basis; headspace_contents_mass_method; headspace_contents_mass_state; headspace_contents_mass_source; headspace_contents_mass_sample_time; actual_carried_outer_pack_support_mass; actual_carried_outer_pack_support_mass_unit; actual_carried_outer_pack_support_mass_basis; actual_carried_outer_pack_support_mass_method; actual_carried_outer_pack_support_mass_state; actual_carried_outer_pack_support_mass_source; actual_carried_outer_pack_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; share_driver_quantity; share_driver_quantity_unit; share_driver_quantity_basis; share_driver_quantity_method; share_driver_quantity_state; share_driver_quantity_source; share_driver_quantity_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; documented_service_share; share_numerator; share_denominator; record_allocation_owner; empty_return_coverage; provider_overlap; N; time_zone; time_source; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time | Link each load and leg to measured whole packed payload or supported additive cargo components. Retain shampoo, bottle/cap/actual pump, label, actual headspace contents, packaging and carried supports even if reusable; subtract only evidenced noncargo vehicle/container tare. Record whether native mass is EACH or TOTAL; multiply actual compatible count once for EACH only. Each unique load-leg has its own documented share inside the work sum, then divide by N once. Record distance conversions, empty-return and carrier/provider coverage. | Native record units and sourced compatible conversions; dates and timezone | Each actual event and meter/stock interval | Actual receipt/dispatch/acceptance times and cross-period attribution including unfinished resources | Actual node site and explicitly owned handoffs, no synthetic all-process scope | per reference flow | Raw records, method calibration, units/basis/state/source/sample time, exclusive ownership and uncertainty; missing evidence is not zero |
| cp_outlets | bottled_shampoo_wholesale | Actual node inputs, outputs or explanatory audit quantities | Exclusive whole-bottle, residue, recovered material and waste exits | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; retained_shampoo_quantity; retained_shampoo_quantity_unit; retained_shampoo_quantity_basis; retained_shampoo_quantity_method; retained_shampoo_quantity_state; retained_shampoo_quantity_source; retained_shampoo_quantity_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_water; retained_water_unit; retained_water_basis; retained_water_method; retained_water_state; retained_water_source; retained_water_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; original_bottle_ids; whole_bottle_exclusion; separate_pack_exclusion; absorbed_solids_exclusion; free_shampoo_exclusion; hygiene_liquid_exclusion; component_mass_or_volume_basis; water_wet_or_dry_basis; retained_content_fate; receiver_classification; receiver_id; transfer_id; treatment_owner; usable_return_supply_link; actual_export_not_closing_stock; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Record actual intact reject, expiry, leak or spill state and receiver. Whole rejected bottles include retained product/pack/headspace; independent pack residues, absorbed cleanup solids, free collected shampoo and contained hygiene liquid require distinct measured transfers and membership exclusions. Component quantities, retained water and fluid have their own units, basis, method, state, source and sample time; they are explanatory portions, not extra whole-stream exchanges. Recovered export differs from retained closing stock; usable unused supply returns require matching standalone supply, and consumed-only convention omits their exchange. Record actual receiver and treatment once with no automatic recycling or avoided-production credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Native record units and sourced compatible conversions; dates and timezone | Each actual event and meter/stock interval | Actual receipt/dispatch/acceptance times and cross-period attribution including unfinished resources | Actual node site and explicitly owned handoffs, no synthetic all-process scope | per reference flow | Raw records, method calibration, units/basis/state/source/sample time, exclusive ownership and uncertainty; missing evidence is not zero |
| cp_environment | bottled_shampoo_wholesale | Actual node inputs, outputs or explanatory audit quantities | Actual species and receiving-medium release evidence | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; receiving_medium; factor_scope_complete; composition_mass_or_volume_basis; contained_transfer_exclusion; measurement_location; sampling_start; sampling_end; time_zone; time_source; release_owner | Identify actual species and receiving medium before selecting elementary flows. Use measured release or an applicable activity/factor with composition and fate required by that factor, all with native units and sources. A complete species factor already covering composition or release fraction is not multiplied again. Ingredient list, fragrance odour, foam, stock difference or shampoo VOC/COD label is neither release evidence nor zero. Separate contained collected product and hygiene liquid handed to receivers from demonstrated direct releases; record captured/retained portions without double counting. | Native record units and sourced compatible conversions; dates and timezone | Each actual event and meter/stock interval | Actual receipt/dispatch/acceptance times and cross-period attribution including unfinished resources | Actual node site and explicitly owned handoffs, no synthetic all-process scope | per reference flow | Raw records, method calibration, units/basis/state/source/sample time, exclusive ownership and uncertainty; missing evidence is not zero |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_shampoo | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals. Match actual merchant ownership, business buyer and acceptance gate/source; N>0 before division. Carry open/canceled/rejected/reversed resources to actual cohorts/periods without inventing completed service. | merchant and buyer identities; acceptance/reversal IDs; dates | Final unique completed-service denominator N |  |
| liquid_and_pack_basis | cp_shampoo | net_shampoo_mass=net_shampoo_volume*density only for actual compatible liquid volume, formulation, temperature and units. Foam or nominal bottle capacity is not liquid fill; gross-to-net requires actual bottle/closure/label/pump tare and independently evidenced headspace contents, not assumed zero. Mass and volume ingredient fractions are not interchangeable. | native volume/density/temperature/conversion and pack records | Compatible actual liquid net mass and separate packaging/headspace state |  |
| water_and_dry_basis | cp_shampoo | Only if required and evidenced: dry_matter_mass=wet_mass*(1-w_wet), where w_wet is actual water/as-received wet mass fraction, not volume solids or loss-on-drying containing other volatiles. Compatible same-sample dry-basis water/nonwater ratio converts w_wet=w_dry/(1+w_dry), after actual percent-to-ratio conversion. Ingredient list gives no fraction. Do not infer pollutant or lost dry product from moisture change. | actual water definition, native wet/dry sample units/method/state/source/time | Qualified water and nonwater mass views, no invented composition |  |
| commodity_source | cp_shampoo | Use direct_assignment_quantity with actual source links OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers with complete positive all-terminal records. commodity_source_gate_demand=assigned_source_gate_quantity in compatible original formulated-filled-closed-pack state, not final mass+discard. Reconcile original input, closing/returns/useful others/actual loss, state changes and exclusive source use. Quantify baseline_quantity/additional_stage_quantity/loss_adjustment_quantity with conversion, owner, stage/loss coverage once outside service. Unknown gaps block complete-chain readiness.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | direct links OR complete native source/terminal records; baseline/additional/loss records | Auditable linked original commodity demand and one loss owner outside service |  |
| utilities | cp_utilities | utility_per_service=sum(actual_utility_quantity*documented_share)/N after native conversion and complete all-consumer driver reconciliation. Metered service water is not shampoo water; no consumer-use or climate-control default.  Use the actual documented share of each interval record. A directly measured quantity belonging exclusively to this target cohort may use share=1 only with scope evidence; an already attributed quantity is not multiplied by a share again. Record utility_quantity_scope_raw_or_attributed and its source; reconcile compatible numerator/denominator units, complete all-consumer scope and share basis. | native intervals, utility quantity/conversion, all-consumer share | Actual attributed kWh and m3 per service |  |
| supplies | cp_supplies | S=opening+net_receipts-closing including retained recovery. gross_input=S/N with separate paired unused outward output OR consumed_input=(S-usable_outward_return)/N and OMIT matching return exchange. Convert EACH*actual_count once or actual mass/compatible density; no unrelated stock netting or second credit. | same-scope opening/receipts/closing/recovery/returns; actual units and conversions | Actual consumed or gross supplied material and mutually exclusive return |  |
| provider_package | cp_provider | actual_package_per_service=sum(actual_native_package_quantity*documented_share)/N using physical equivalence and disjoint utility/assets/freight/treatment coverage; no monetary or bottle-count shortcut. | actual contract operation, native package and coverage | Actual scoped provider share per service |  |
| asset_equivalents | cp_assets | lifetime_all_user_driver=observed_all_user_driver+remaining_driver only after compatible native-unit/equivalence reconciliation. full_asset_share=job_driver/lifetime_all_user_driver. Apply to full manufacture, maintenance, replacement and EOL; sum then /N once. Include all consumers/periods and sourced remaining-life uncertainty/sensitivity/update. | asset events and job/observed/remaining/lifetime/equivalence units and sources | Full-life service asset equivalents |  |
| freight_work | cp_freight | Cargo mass is actual packed TOTAL or compatible EACH*actual_count once, including liquid/bottle/closure/actual pump/headspace/pack/carried support; subtract only actual noncargo vehicle/container tare. Convert to t and km from native records. freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N; each record share inside SUM and N once, with empty/receiver/provider coverage disjoint. | unique load+leg native packed masses/counts/distance/conversions and share | Actual scoped t*km per service |  |
| exclusive_outlets | cp_outlets | outlet_per_service=actual_compatible_native_transfer_quantity/N with matched receiver classification. Whole bottle includes retained contents; portions retained in whole, separate pack, absorbed solids, free collected shampoo and hygiene liquid are nonadditive. Each component/retained water/fluid has independent native unit/basis/method/state/source/sample time. Retained stock is not export; consumed-only supply convention omits paired return. Receiver transport/treatment once and no automatic credit. | actual transfer native quantity/conversions, component membership and receiver | Exclusive actual product/waste exits with receiver ownership |  |
| species_release | cp_environment | release_mass=measured_species_mass OR compatible activity*applicable_species_factor with composition and release_fraction only where that factor requires them. A complete species factor already covering those fractions must not multiply them again. Convert native units then /N once; retain actual medium, captured/contained exclusion and owner. No fragrance/ingredient/stockgap/foam-to-VOC-COD assumption or zero. | actual species/medium, native measurement or justified factor chain | Actual exclusive species mass released per service |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_records | all | Use actual SKU/formulation/closure, native units and relevant measurement state/sample time/source; no uniform percentages/density/bottle size or recycled fraction. | Source records, calibration, uncertainty and ranges |
| complete_ownership | all | Retain all period/cohort/source/asset/freight/receiver consumers and exclusions; missing complete gate/loss/fate evidence blocks complete-chain readiness, not hidden zero. | Exclusive audit and sensitivity |
| source_limits | palmolive_ingredients | Current manufacturer ingredient body is qualitative and partly templated elsewhere; indexed bottle context is distinct. No medical/performance, composition percent, consumer washing, density, VOC/COD or disposal defaults. | Actual ingredient body and indexed context, actual foreground SKU evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| hygiene_water | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| service_consumables | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_consumables` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_protection | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_operations | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_operations` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| full_life_assets | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `full_life_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_supply_return | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| recovered_material | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `recovered_material` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| whole_bottle_waste | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_bottle_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_bottle_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| separate_pack_waste | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separate_pack_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| absorbed_cleanup_waste | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `absorbed_cleanup_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| free_collected_shampoo | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `free_collected_shampoo` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| contained_hygiene_liquid | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_hygiene_liquid` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species_release | bottled_shampoo_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species_release` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Actual electrically operated handling and attributable warehouse demand only; no manufacture, consumer hair washing, activation test or assumed climate intervention.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Delivered electricity for actual merchant handling and warehouse use
- Flow property / unit: Energy / kWh
- Amount rule: actual_utility_quantity*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual meter interval kWh, all-consumer allocation driver and handling/idle coverage; no benchmark per bottle or litre.

#### hygiene_water

Conditional supplied utility water for documented site hygiene; shampoo formulation water stays in the merchandise system. No salon washing or bottle rinsing assumed.

Residual inventory requirement after the independently identified cases `hygiene_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Delivered site water actually used for merchant hygiene
- Flow property / unit: Volume / m3
- Amount rule: sum(exclusive_per_record(raw: converted_water_m3*documented_share; already_attributed: attributed_water_m3))/positive_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual hygiene-water meter or supplier volume and interval, sharing and destination records, not bottled shampoo volume.

#### service_consumables

Conditional individual actual wipes, absorbents, filters or hygiene agents by composition and supply scope; inherited shampoo ingredients are not this input.

Residual inventory requirement after the independently identified cases `service_consumables_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual merchant hygiene and incident-cleanup consumables
- Flow property / unit: Mass / kg
- Amount rule: gross S/N with paired return or (S-usable_outward_return)/N omitting paired return
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material identity/composition, stock opening/receipts/closing, count-to-mass or density basis and real unused return. No default agent dose.

#### added_protection

Only documented extra outer protection without opening or repacking the original bottle; inherited bottle, closure and factory pack remain commodity burdens.

- Identity requirement: Added outer transport protection actually supplied by merchant
- Flow property / unit: Mass / kg
- Amount rule: actual allocated native material mass/N with supply-return convention
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material, quantity, native per-piece/total mass, reuse ownership and supply-return evidence; do not infer extra wrapping from bottle state.

#### provider_operations

Conditional actual physical handling or site-hygiene service, with detailed exclusions and coverage; no merchant formulation or filling. Expand actual providers rather than fixing a generic package UUID.

- Identity requirement: Actual scoped contracted merchant-operation package
- Flow property / unit: Count / Item(s)
- Amount rule: actual_native_package_quantity*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need provider, physical package quantity/unit, scope and overlap declarations; neither contract price nor shampoo bottle count defines a package.

#### full_life_assets

Actual asset equivalents include manufacturing, maintenance, replacement and end-of-life across all users and periods. No new pallet or rack per consignment.

- Identity requirement: Attributed full-life warehouse handling and reusable-support service
- Flow property / unit: Count / Item(s)
- Amount rule: sum_full_life_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need actual asset inventory, job use, observed total use plus sourced remainder, compatible driver units and complete lifetime/EOL scope, with uncertainty sensitivity.

#### freight

Actual merchandise and service/waste transfers when in the owned service boundary; retain whole packed cargo, actual headspace contents and carried supports, disjoint from provider and receiver transport.

- Identity requirement: Actual unique load-leg freight for packed shampoo and scoped exits
- Flow property / unit: Mass * Length / t*km
- Amount rule: sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need unique load/leg, actual packed mass, EACH/TOTAL extent, noncargo tare, actual count, distance and each record share/empty coverage; no net-liquid-only payload.

#### unused_supply_return

Only matched standalone service supply actually exported usable under gross input convention. Omit this exchange for consumed-only convention. Merchandise returns are nonexchange stock movements; inherited bottle contents cannot offset unrelated service supply.

- Identity requirement: Actual outward usable unused standalone service-supply return
- Flow property / unit: Mass / kg
- Amount rule: actual matched unused exported mass/N under gross-input convention only
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need same-scope supply identity, actual return mass, usability, receiver/transfer and proof it is not closing stock; consumed-only input must omit matching outlet.

#### recovered_material

Conditional evidenced usable material export, separately classified from whole retained-product bottles and waste. Record actual receiver, composition, retained contents and owner; no automatic recycling or avoided-production credit.

- Identity requirement: Actual separately recovered usable service or packing material export
- Flow property / unit: Mass / kg
- Amount rule: actual usable exported material mass/N excluding other outlet memberships
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need transfer/receiver and actual usable grade, mass, moisture/fluid content and exclusive membership; collection alone does not prove recovery.

#### whole_bottle_waste

Actual discarded sealed/compromised/expired whole bottles include retained shampoo, cap/pump/label and actual headspace contents. Do not also add their constituent product or package as full waste exchanges. Commodity embodied loss stays outside service, with original-gate linked adjustment once; physical service treatment remains once.

- Identity requirement: Actual rejected whole shampoo bottles with retained contents for receiver treatment
- Flow property / unit: Mass / kg
- Amount rule: actual whole-bottle receiver transfer mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need original bottle IDs, actual whole transfer mass and retained content/closure state, discard decision and receiver treatment coverage; expiry does not prove a universal discard fraction.

#### separate_pack_waste

Only independently separated actual outer pack or bottle components, with attached shampoo and liquid recorded within the stream; exclude whole-bottle membership and any separately measured free shampoo. No default emptying or recycling operation.

Residual inventory requirement after the independently identified cases `separate_pack_waste_paper_pack`; `separate_pack_waste_metal_pack`; `separate_pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately transferred packaging waste with attached residues
- Flow property / unit: Mass / kg
- Amount rule: actual separate packaging stream mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual separated pack material/retained shampoo units and sample evidence, transfer mass and receiver fate; nominal empty-bottle tare is insufficient for contaminated waste.

#### absorbed_cleanup_waste

Conditional actual mixed cleanup solids include substrate and retained shampoo/water/agent; component views explain but do not add whole-stream mass. Exclude separately collected liquid and whole-bottle or pack membership.

- Identity requirement: Actual spent absorbents wipes or filters retaining shampoo and hygiene fluid
- Flow property / unit: Mass / kg
- Amount rule: actual mixed cleanup solid receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need spent material mass, substrate and retained product/fluid native units/bases/method/sample time, incident link and receiver; no fixed absorption ratio.

#### free_collected_shampoo

Actual independently collected liquid product with formulation and any mixing state recorded. This is not automatically pure water, COD, VOC or an elementary discharge. Exclude retained portions already in bottle, pack or cleanup solids.

- Identity requirement: Actual free collected leaked or spilled shampoo transferred as contained liquid
- Flow property / unit: Mass / kg
- Amount rule: actual free collected liquid mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual collected mass or compatible volume-density-temperature conversion, source product batch, mixing state and receiver treatment; stock deficit is insufficient.

#### contained_hygiene_liquid

Conditional actual hygiene wastewater with water, shampoo, agent and solids state documented; no consumer-use washwater. A contained transfer is waste/product classification by actual receiver, not a direct water or species release.

- Identity requirement: Actual contained merchant-hygiene wastewater transferred to a receiver
- Flow property / unit: Mass / kg
- Amount rule: actual contained hygiene liquid receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual contained mass, independent components and sampling/density evidence if converted, receiver and treatment scope, disjoint from free product/absorbed solids; no default wastewater factor.

#### direct_species_release

Only real measured or justified species-specific release at the service boundary. Fragrance, ingredient presence, liquid loss or foam cannot supply species identity, medium, emitted fraction or a zero. No default VOC/COD/surfactant fate.

- Identity requirement: Actual identified species released to a demonstrated receiving medium
- Flow property / unit: Mass / kg
- Amount rule: actual compatible species release mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need species/medium, measured mass or native activity-factor-composition-fate units and applicability/source, captured fraction and exclusive release owner; unavailable evidence remains a gap.

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| identity_and_N | Require merchant ownership/resale evidence, business buyer, actual final acceptance gate/source and reversals; reference output name/link match. N>0 only; open/rejected/reversed resource cohorts remain attributed. |
| source_completeness | Verify actual complete formulated-manufactured-filled-closed original bottle/pack gate, original assigned demand using direct or positive complete all-terminal drivers, native conversion/stage/loss/owner coverage once outside service. Unknown source/loss cannot pass complete-chain use.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| measurement_state | Check actual mass/volume-density-temperature units, liquid not foam/capacity, tare/headspace and water wet/dry/composition bases; LOD other volatiles not automatically water and label composition not emissions. |
| allocation_and_returns | Check per-event shared period consumers/full-life observed+remainder assets, supplies gross+paired output OR consumed-only OMIT, unique load-leg EACH/TOTAL cargo/share inside SUM then N once, no provider/carrier/receiver overlap. |
| rejected_fate | Rejects, leaks, expiry and unknown differences are not accepted service or automatic waste/species/zero. Verify exclusive whole bottle/pack/absorbed/free shampoo/hygiene liquid/direct-species membership, actual transfer/receiver/treatment and no automatic credit. |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground merchant-service add-on inventory per completed accepted consignment |
| downstream_use | Link once to compatible complete original supplier-gate shampoo commodity demand and actual buyer handover system |
| allowed_use | Actual original-closed bottled aqueous nonmedicated shampoo route with records and resolved final package gaps |
| excluded_use | Standalone shampoo footprint or consumer-use/clinical claim; open/refill/formulation/medicated/dry-aerosol/bodywash route; unknown linked-source loss treated zero |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; SKU; variant; batch_id; formula_version; aqueous_nonmedicated_evidence; original_closed_state; bottle_count; net_shampoo_mass; net_shampoo_volume; density; density_temperature_unit; bottle_closure_label_pump_tare; headspace_quantity; source_gate_state; receiving_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | Actual flow identities and ranges, source/baseline/loss-stage coverage, native bases/conversions, all-terminal and asset remaining-life evidence, overlap/fate uncertainty |
| update_trigger | Actual formula/SKU/closure/pack, operation, source gate, buyer condition, loss/fate, asset life, provider or conversion evidence changes |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| palmolive_ingredients | literature | https://www.palmolive.com.au/products-range/hair-care/active-nourishment-shampoo | Manufacturer current actual ingredients body: water/surfactants/conditioning/fragrance/thickener/preservatives; other header portions partly templated. Qualitative formulation distinctions, no percentages/density/releases. |
| palmolive_indexed_bottle_context | literature | https://www.palmolive.com.au/products-range/hair-care/active-nourishment-shampoo?bvstate=pg%3A7%2Fct%3Ar | Official indexed product/bottle context, distinct from unhydrated current header; no bottle-size/recycled-percent/performance/consumer-use default. |
