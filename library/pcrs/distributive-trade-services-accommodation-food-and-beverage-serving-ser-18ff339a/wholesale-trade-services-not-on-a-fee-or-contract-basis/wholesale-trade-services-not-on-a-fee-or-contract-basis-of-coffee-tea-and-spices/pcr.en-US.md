---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-coffee-tea-and-spices
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of sealed roasted whole coffee beans

## 1. Scope and Applicability

This PCR describes the physical service of a merchant buying and reselling manufacturer-released, sealed roasted WHOLE coffee beans through ordinary ambient receiving, inventory control, handling and accepted business-buyer handover. Actual blend/roast, package/seal/valve configuration, net contents, manufacture/roast/release/best-by dates, actual conditions and buyer quality criteria remain mandatory case evidence. No representative pack weight or shelf-life promise is created.

Exclude raw/green coffee production, roasting, grinding, decaffeination, instant coffee, brewing, opening/repacking or new gas flushing, retail, fee agency and storage-only. A processing or dedicated temperature intervention requires route review. NCA consumer guidance supplies qualitative air/moisture/heat/light and hygroscopic context only: do not instruct the wholesaler to open all sealed packs, freeze them, adopt household freshness numbers or repeat every-pack testing.

All coffee and inherited packaging manufacturing, including upstream production embodied in losses, remains outside this service. A separately quantified actual complete roasted/sealed source-gate demand/loss link is required once before full-chain readiness; actual service handling and declared receiving treatment remain here once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-coffee-tea-and-spices |
| classification_refs | CPC3 61027; narrower sealed roasted whole-coffee merchant wholesale |
| covered_products | Completed own-account B2B service for manufacturer-sealed roasted whole beans at ambient conditions |
| excluded_products | Green/ground/soluble/brewed coffee; roasting/processing/repacking; retail/agency/storage-only |
| representative_product | Actual released sealed whole-bean SKU/roast/lot through one accepted commercial consignment |
| production_route | Supplier complete roasted-sealed gate -> ownership receiving/ambient holding/handling -> accepted B2B resale |
| market_state | Counted physical service; coffee contents, package and headspace remain merchandise state audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account sealed roasted whole-coffee wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual manufacturer-sealed roasted whole-bean SKU/state/date/quantity/quality and commercial acceptance, no automatic safety/freshness guarantee |
| How long or cycle | Actual receipt/holding/handling/acceptance intervals, separately indexed stock/reporting and asset life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account sealed roasted whole-coffee wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count units `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; SKU_blend_whole_roast; manufacturer_release_gate; actual_roast_release_bestby_dates; package_seal_valve_state; net_contents_tare_basis; actual_moisture_method_basis; actual_conditions_exposure; actual_start_end_duration_unit; quality_acceptance_reversal; site_period_lot; supplier_stage_coverage; source_gate_assigned_demand; commodity_loss_owner_status |

N>0 counts actual unique accepted commercial consignments after reversals; packs, pallets, orders and coffee kg are not this count. Unfinished/rejected periods retain actual resources.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | accepted_service | Count | Item(s) | Use actual final accepted commercial gate IDs, not invoice/pack splits or a fixed bean mass. |
| net_state | merchandise audit | Mass; Count | kg; actual pack units | Separate wet/as-received bean contents, tare, seals/valves/headspace and cargo; measured moisture needs wet/dry basis and method, not a green-bean moisture default. |
| native_conversion | all actual exchanges | Native compatible property | Native unit | Keep quantity/state/density/temperature and conversion factor/unit/basis/source; gas conversion additionally needs actual pressure and composition where relevant. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual manufacturer-released roasted whole-bean sealed SKU/lot with date, seal/valve, net contents/tare, moisture and quality evidence |
| starting_condition_role | Inherited complete commodity state for ambient own-account physical wholesale |
| product_classification_scope | Narrower coffee wholesale within61027 goods2391; no green-coffee production substitution |
| recursive_input_rule | Do not consume traded beans/packs as service manufacturing inputs or recursively create the same merchant consignment; trace merchandise separately. |
| upstream_dataset_requirement | Separately link actual complete roasted/sealed source gate with green-coffee, roasting, cooling/degassing/packing as actually covered; assemble missing stages once outside service. |
| disclosure | Actual lot/date/net/tare/moisture/state/acceptance and conditions; supplier-gate assigned quantity/conversion/baseline losses; event/period/provider/asset/freight/treatment owners and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_owner | merchandise | All commodity production including loss remains outside service; actual physical handling/waste treatment is included once. |  |
| sealed_ambient | coffee_wholesale | Manufacturer sealing is inherited, not an operated packaging/preservation node. Actual humidity/temperature/odor/light and seal/date/quality evidence governs acceptance; consumer household instructions are not wholesale process defaults. | nca-coffee-storage |
| state_fates | merchandise and releases | Moisture uptake/loss, stale aroma, actual gas release, opened sample, damaged pack, supplier return and discard differ; stock residual cannot prove any one species or original-gate loss. |  |
| period_boundary | all stock and service events | Link lot/campaign/period IDs, all failed/rejected/unfinished and accepted jobs, paired internal moves and actual receiver exits; only final commercial acceptance counts N. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| coffee_wholesale | Sealed roasted whole-bean ambient merchant service | required | Actual ownership/resale and ordinary ambient physical service of released sealed roasted whole beans | Receiving/lot-condition control/handling/stock and accepted commercial handover; no coffee transformation | `accepted_service` |

Actual consignments overlap warehouse campaigns and continuous support periods. Link receipt/dispatch/sample/cleaning/idle/changeover and rejected/unfinished events before attribution. Broken seals, mold/odor/date or other quality rejection require real quarantine/return/downgrade/discard paths; opening/reprocessing is a route change, not an assumed loop. Resource burden remains even when N has no accepted event in a period; explain cross-period attribution.

### Process: Sealed roasted whole-bean ambient merchant service (`coffee_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed actual warehouse and handling electricity per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter differences, interval, all consumer use and completed-consignment attribution; independent checks must match warehouse load and scope, not a universal coffee kWh/kg.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed actual purchased hygiene and facility water per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/issue purpose and native volume with supplier boundary; purchased water, direct abstraction, bean moisture and received wastewater are separate quantities.

###### Actual separately recorded polyethylene packaging film (`outer_packaging_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual new outer handling protection and labels per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need inherited/new level and SKU, actual area/count/mass and per-piece or areal conversion sources. Do not manufacture a complete new primary coffee pack for every wholesale sale.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual warehouse cleaning and maintenance supplies per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need SKU concentration, opening/receipts/closing, composition, net/tare and actual waste/return/release fates. A safety sheet or applied product amount alone is not a species emission.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual attributed actual handling and support fuel supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need grade, native stock receipts/returns/closing and actual disjoint burn/nonburned fates, with density/temperature/conversion source if needed; no purchased-equals-burn assumption.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account sealed roasted whole-coffee wholesale consignment (`accepted_service`)

One actual merchant-owned B2B accepted consignment of manufacturer-released sealed roasted whole beans through ordinary ambient receiving, holding and handling. Bean mass/package/date/state are qualifiers, not a manufactured commodity service-output identity.

- Selected flow: Completed own-account sealed roasted whole-coffee wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Count is normalization only; actual SKU/blend/roast/whole-bean/seal/valve/date/net/tare/moisture basis, conditions/time and commercial acceptance required. No standard lot mass, freshness duration or opening/freezing prescription.

##### Waste flows

###### Discarded sealed roasted whole-coffee-bean pack (`discarded_coffee_packs_atomic_case`)

Conditional on independently recorded actual Discarded sealed roasted whole-coffee-bean pack. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_coffee_packs`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded sealed roasted whole-coffee-bean pack
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual discarded coffee packs and contents per reference flow; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`

Range evidence need: Need actual disposition receipt, native quantity/net/tare/composition, original supplier-gate equivalent and receiver treatment scope; missing mass or best-by date alone does not prove discard.

###### Actual separately collected paper packaging waste (`other_wastes_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual operating and new outer-packaging waste per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need native measured quantity, conversion/composition and receiver/treatment record; supply receipt or cleaning issue is not waste quantity and no automatic recycling credit.


###### Actual separately collected metal packaging waste (`other_wastes_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual operating and new outer-packaging waste per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need native measured quantity, conversion/composition and receiver/treatment record; supply receipt or cleaning issue is not waste quantity and no automatic recycling credit.


###### Actual separately collected plastic packaging waste (`other_wastes_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual operating and new outer-packaging waste per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need native measured quantity, conversion/composition and receiver/treatment record; supply receipt or cleaning issue is not waste quantity and no automatic recycling credit.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`other_releases_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual handling combustion and maintenance species per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or actual burn/activity and compatible complete factor with required composition/fate once. Product application, financial cost and hazard classification are not emitted mass.


###### Actual separately evidenced fossil methane emitted to air (`other_releases_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual handling combustion and maintenance species per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or actual burn/activity and compatible complete factor with required composition/fate once. Product application, financial cost and hazard classification are not emitted mass.


###### Actual separately evidenced nitrous oxide emitted to air (`other_releases_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual handling combustion and maintenance species per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or actual burn/activity and compatible complete factor with required composition/fate once. Product application, financial cost and hazard classification are not emitted mass.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| operations | all actual service rows | Assign direct event use first. Shared support uses justified compatible physical drivers across ALL real users/periods including rejected and idle work; divide attributed total by positive accepted N once. Revenue or equal orders are not automatic drivers. |  |
| assets | shared_assets | Cover manufacture, maintenance, actual replacements and end-of-life using actual used/compatible lifetime driver. Lifetime is observed history plus evidenced remaining service/termination with uncertainty/sensitivity. Use one asset-equivalent or lifecycle-complete provider view, not both or twice divided by N. |  |
| supply_returns | operating supplies | Per actual native SKU/state S = attributed opening + net external receipts - closing. Gross-with-outlets uses S/N and actual usable return; consumed-only uses (S - matched usable external return)/N and OMITs that matched return exchange. Retained recovery stays closing, waste/loss retains production, no negative/unmatched netting. |  |
| source_gate | coffee/packs memorandum | Keep complete roasted/sealed source-gate manufacture outside service. Map actual lot source quantities to accepted dispatch, closing, useful return/other exits and proven discard/state-change shares in original units/state with conversions. Additional assigned demand = actual required gate demand minus identical demand/loss already covered in baseline; document same-state nonoverlap, never subtract unrelated scopes or create negative demand. Missing roasting/packing stages from green-coffee-only data are assembled once outside. Do not call moisture change or headspace gas a discarded bean kg. |  |
| fates | all outlets | Actual receiver treatment has one owner; no automatic avoided-production credit from usable goods/supplies or recovery. Actual commercial coffee returns/downgrades remain non-exchange merchandise audit. Unknown source demand/state/receiver coverage blocks full-chain finalization. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | coffee_wholesale | accepted_service | Actual commercial acceptance and inherited state ledger | site_id; campaign_id; period_id; consignment_id; lot_id; supplier_id; SKU; blend_species; roast_state; whole_bean_state; manufacturer_release; supplier_gate; roast_date; release_date; best_by_date; date_source; ownership_start; resale_risk; business_buyer; pack_configuration; seal_valve_state; net_contents; net_unit; tare; tare_unit; actual_temperature; temperature_unit; relative_humidity; humidity_unit; odor_light_exposure; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_criteria; acceptance_record; reversal_id; N | Verify actual merchant ownership/resale, whole roasted sealed SKU/release/date and real final B2B acceptance; retain quantities/conditions without opening every pack. | Item(s) | Each consignment/reversal | Actual linked service/stock/reporting intervals | Actual merchant warehouse and commercial gate | per reference flow | Traceable release/ownership/date/condition/acceptance |
| cp_stock | coffee_wholesale | merchandise; discarded_coffee_packs | Actual coffee/pack state and original-gate stock ledger | site_id; period_id; consignment_id; lot_id; event_id; event_time; time_zone; SKU; pack_count; pack_unit; net_bean_mass; mass_unit; package_tare; moisture; moisture_unit; moisture_wet_dry_basis; moisture_method; moisture_source; sample_selection; sample_quantity; sample_unit; sample_removal; sample_return; sample_fate; seal_valve_state; temperature; temperature_unit; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exit; discarded_quantity; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; moisture_state_change; other_state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; source_gate_quantity; source_gate_unit; source_gate_state; source_gate_dataset; source_gate_conversion_method; source_gate_conversion_factor; conversion_unit; conversion_basis; conversion_source; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; baseline_same_loss_coverage; additional_gate_demand; commodity_owner; adjustment_status; uncertainty; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Reconcile actual compatible pack counts and bean/pack moisture states; track all exits/sample fates and actual original-gate assigned demand. Residuals stay unexplained rather than guessed gas/waste; supplier complete roasted/sealed stages and loss coverage are independent. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native packs and kg/state | Each movement/stocktake/sample/disposition | Actual linked service/stock/reporting intervals | All actual stock lots and original supplier state | per reference flow | Scales/tare/moisture sample provenance and matched source quantities |
| cp_energy | coffee_wholesale | electricity; fuel_supply | Actual meter and fuel burn ledger | site_id; campaign_id; period_id; consignment_id; event_id; asset_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; energy_carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; idle_cleaning_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual service use/burn and all-consumer allocation; reconstruct burn only with complete disjoint native stock fates, investigating unknown losses. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy/fuel units | Each real meter interval/event | Actual linked service/stock/reporting intervals | All included handling/warehouse/support users | per reference flow | Meters, actual drivers and complete burn/provider coverage |
| cp_supplies | coffee_wholesale | facility_water; outer_packaging; operating_supplies; fuel_supply; usable_supply_returns | Actual native supply and return ledger | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; chemical_formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; actual_waste; direct_loss; inherited_new_pack_level; matched_input_id; return_recipient; gross_consumed_view; omit_matched_return_exchange; original_supply_owner; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_purpose; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use net receipts after tare, same-state stock and actual external fates; match a return only to its standalone scope. Primary sealed bags are inherited; adding outside protection is separate. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native supply unit | Each receipt/issue/return/stock boundary | Actual linked service/stock/reporting intervals | Actual operating stock and service boundary | per reference flow | Native receipt/stock/return matching and conversions |
| cp_assets | coffee_wholesale | shared_assets | Complete lifecycle and consumer ledger | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; manufacture_dataset; maintenance; replacement; end_of_life; event_date; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | Cover all real consumers/periods and complete lifecycle, matching used/lifetime units and observed/evidenced remaining service with one view. | Item(s) or actual lifecycle-service unit | Each asset event/period review | Actual linked service/stock/reporting intervals | Full actual shared asset service life | per reference flow | Complete stages, actual driver and evidenced remainder |
| cp_providers | coffee_wholesale | provider_services | Completed physical result and coverage matrix | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_result; physical_quantity; native_unit; duration; duration_unit; completion_evidence; sample_scope; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage | Verify actual result/native unit and full physical boundary; avoid separate direct inputs for already covered provider operations, and retain missing components. | Actual provider-native physical unit | Each completed real result | Actual linked service/stock/reporting intervals | Actual outsourced responsibility | per reference flow | Completion/unit proof and coverage ownership |
| cp_freight | coffee_wholesale | freight | Actual cargo/load and distance ledger | site_id; period_id; consignment_id; leg_id; event_date; provider_id; mode; actual_load; load_unit; bean_net_mass; pack_mass; included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check | Measure actual cargo including declared real pack/tare scope and real distance; retain empty/shared legs and delivered-source coverage once. | kg*km or actual native freight unit | Each actual included leg | Actual linked service/stock/reporting intervals | All actual included commodity/service/waste legs | per reference flow | Cargo/distance/conversion and one scope owner |
| cp_fates | coffee_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | Actual water/waste receiver ledger | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; native_quantity; native_unit; collected_volume; received_volume; volume_unit; mass; mass_unit; density; density_unit; temperature; temperature_unit; composition; concentration; concentration_unit; composition_basis; composition_source; conversion_factor; factor_unit; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual source and native receiver state/quantity with composition/treatment owner. Purchased water, environmental intake, contained liquid, direct outfall and species are distinct non-additive roles. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native water/waste units | Each actual intake/receiver/outfall event | Actual linked service/stock/reporting intervals | Actual source and receiving responsibility | per reference flow | Actual measured quantity/composition/receiver scope |
| cp_releases | coffee_wholesale | coffee_species; other_releases | Actual source/species/medium release ledger | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; SKU_lot_or_asset; chemical_species; receiving_medium; measured_quantity; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; gas_composition; composition_basis; composition_source; molecular_conversion; conversion_unit; conversion_source; release_fraction; fate_basis; fate_source; method; method_version; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual species/medium measurement or compatible actual source-state/time method with every operand/unit/source. Inherited coffee/pack releases and direct operating chemicals are separate; stock deficit/quality deterioration is no emission method. A complete factor must not be multiplied again by composition/fate. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg identified species with actual operand units | Each actual measured/modeled source interval | Actual linked service/stock/reporting intervals | Actual source and receiving medium | per reference flow | Complete measured/model/source/factor/composition/fate evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | Attribute actual quantities by event then compatible all-user driver; retain rejected/unfinished/idle burdens and divide by positive accepted N only once. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Physical service inventory per reference |  |
| stock_balance | merchandise | Same-state packs: opening + external receipts + buyer returns - closing - physical dispatch - supplier returns - useful other exits - actual discard - net sample removals = unexplained residual. Pair internal moves. Separately reconcile wet bean net/tare/moisture/state with actual uncertainty; do not force coffee water/gas to residual or dry solids. | cp_stock | Audited stock and actual component/state fates |  |
| commodity_demand | commodity interface | At actual roasted/sealed original gate, reconcile lot assigned accepted-demand + allocated proven discard/state-change demand against actual source quantities after closing/useful exits/returns, all in original units/state with evidenced conversion. Required linked demand and existing identical baseline loss/stage coverage yield one additional adjustment outside service; no generic yield multiplier, lost-mass gas factor or duplicate treatment. | cp_stock; cp_consignment | Explicit complete source-gate demand/adjustment outside service |  |
| species_release | coffee_species; other_releases; other_releases_co2_fossil_air; other_releases_methane_fossil_air; other_releases_nitrous_oxide_air | Use actual measured identified species/medium or compatible activity/burn and source-specific factor. If volume-to-species conversion is necessary retain actual pressure/temperature/composition/molecular conversion and units/sources; complete species factor not multiplied twice by composition/fate. No stock residual becomes CO2/aroma/water release. | cp_releases; cp_stock; cp_energy | Actual evidenced release per reference |  |
| cargo_transport | freight | Actual kg*km = measured actual included cargo converted to kg times real distance converted to km, with non-overlapping shared leg attribution and provider coverage. Other native units need matching service datasets. | cp_freight | Actual native freight quantity per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity | all rows | Resolve actual SKU/provider/species/state/receiver and compatible support before final exchanges; Count support is not a wholesale flow identity. | Actual detailed identity/support and foreground proof |
| supplier_state | coffee and package audit | Keep actual whole-bean roasted release, seals/valves, dates, moisture basis/method and applicable buyer quality/condition evidence; no household shelf-life or every-pack assay default. | cp_consignment; cp_stock; nca-coffee-storage |
| coverage | all obligations | Match all-users/full-life asset and provider scopes once; original roasted/sealed commodity stages and assigned loss coverage must be explicit outside service. Unknown gas/stock/fate stays disclosed. | Coverage matrix and independent native measurements |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| facility_water | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| outer_packaging | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `outer_packaging` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_coffee_packs | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_coffee_packs` under `cp_stock`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_coffee_packs_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_stock`; actual source-linked native records |
| other_wastes | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| coffee_species | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `coffee_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |
| other_releases | coffee_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_releases` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Record actual lighting, electric handling and business-support meter scope. Roasting/grinding/brewing electricity is outside this service; ambient placement is not evidence of a dedicated cooling intervention.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse and handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed actual warehouse and handling electricity per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter differences, interval, all consumer use and completed-consignment attribution; independent checks must match warehouse load and scope, not a universal coffee kWh/kg.

#### facility_water

Include actual service cleaning and sanitation supplies; moisture in inherited beans and beverage preparation are not this input. A real analytical sample has its own documented support event.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased hygiene and facility water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed actual purchased hygiene and facility water per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/issue purpose and native volume with supplier boundary; purchased water, direct abstraction, bean moisture and received wastewater are separate quantities.

#### outer_packaging

Use only new service-owned outer cartons, stretch film, straps or labels actually added without opening manufacturer seals. Inherited bags/valves/labels are commodity state; reusable pallets are lifetime services.

Residual inventory requirement after the independently identified cases `outer_packaging_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual new outer handling protection and labels
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual new outer handling protection and labels per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need inherited/new level and SKU, actual area/count/mass and per-piece or areal conversion sources. Do not manufacture a complete new primary coffee pack for every wholesale sale.

#### operating_supplies

Expand real cleaners, absorbents, filters, lubricants and test consumables by formulation/native unit. Ingredients, roast additions and new package flushing gas are excluded operations.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse cleaning and maintenance supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual warehouse cleaning and maintenance supplies per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need SKU concentration, opening/receipts/closing, composition, net/tare and actual waste/return/release fates. A safety sheet or applied product amount alone is not a species emission.

#### fuel_supply

Retain actual grade and native stock supply; measured burn is distinct. Hired handling or transport may already include fuel and must have one coverage owner.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual handling and support fuel supply
- Flow property / unit: Volume / L
- Amount rule: Actual attributed actual handling and support fuel supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need grade, native stock receipts/returns/closing and actual disjoint burn/nonburned fates, with density/temperature/conversion source if needed; no purchased-equals-burn assumption.

#### provider_services

Expand actual storage, handling, inspection/sample, hygiene, maintenance and business-support results in their real physical units. An inherited supplier certificate is not another performed test.

- Identity requirement: Actual contracted physical wholesale support
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed actual contracted physical wholesale support per reference flow; cp_providers.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need completed result, native quantity and full material/energy/assets/freight/treatment coverage; invoices or financial margins cannot define service quantities.

#### shared_assets

Record complete warehouse, racks, handling/measurement/ICT equipment and reusable transport assets across every actual consumer and period.

- Identity requirement: Lifecycle-attributed warehouse and reusable assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed lifecycle-attributed warehouse and reusable assets per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need manufacture, maintenance, replacements, end-of-life, compatible used/lifetime driver units and observed history plus evidenced remainder/termination, uncertainty and sensitivity. No default asset life or one full pallet manufacture per trip.

#### freight

Measure real transported whole cargo including actual bag/carton/protection scope, not just declared coffee contents. Retain supplier-delivered gate and empty/return legs without duplication.

- Identity requirement: Actual non-overlapping cargo and service freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual attributed actual non-overlapping cargo and service freight per reference flow; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need cargo/tare scope, actual route/load/distance units and conversion factors, all-consumer share and provider scope. No fixed pack percentage or mass from consignment count.

#### environmental_water

Only actual withdrawal crossing the environmental boundary belongs here. Moisture uptake by inherited coffee is a stock-state question and does not establish a utility intake.

- Identity requirement: Actual direct source-specific water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed actual direct source-specific water withdrawal per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual source/location purpose, meter and interval, distinguishing purchased water. No fixed water content or abstracted-water factor from traded coffee mass.

#### usable_supply_returns

Match actual standalone SKU/state return and recipient. Under consumed-only supply accounting omit that matched return exchange; inherited coffee packs/beans remain commodity audit.

- Identity requirement: Actual matched unused operating supply returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual matched unused operating supply returns per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual external native quantity/state and matching supply owner. Closing stock/internal reusable loops are not external transfers and no automatic avoided production credit arises.

#### discarded_coffee_packs

Use actual receiver quantity/state for damaged, rejected or expired stock sent to treatment. Whole-pack and bean/package component views are alternative non-additive audit views; no commodity manufacture input here.

- Identity requirement: Actual discarded coffee packs and contents
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual discarded coffee packs and contents per reference flow; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`

Range evidence need: Need actual disposition receipt, native quantity/net/tare/composition, original supplier-gate equivalent and receiver treatment scope; missing mass or best-by date alone does not prove discard.

#### other_wastes

Expand real cleaning residues, spent supplies, wrapping and other service-generated fractions by receiver/state. Exclude bean/primary-pack fractions already in whole-pack waste.

Residual inventory requirement after the independently identified cases `other_wastes_paper_pack`; `other_wastes_metal_pack`; `other_wastes_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual operating and new outer-packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual operating and new outer-packaging waste per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need native measured quantity, conversion/composition and receiver/treatment record; supply receipt or cleaning issue is not waste quantity and no automatic recycling credit.

#### contained_wastewater

Record actual liquid sent to a treatment receiver, including real sample support only when performed. Bean moisture is not purchased water or presumed wastewater.

- Identity requirement: Actual collected cleaning or analytical wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed actual collected cleaning or analytical wastewater per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual received/collected volume, composition/unit/basis, source interval and treatment responsibility. Do not equate incoming water to wastewater or duplicate a direct outfall.

#### water_outfalls

Record actual direct receiving medium and quality; contained transfer to treatment is Waste. Discharge volume and any measured species must retain separate compatible non-additive bases.

- Identity requirement: Actual direct water outfall to environment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed actual direct water outfall to environment per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual outfall/location/volume and composition/state evidence, not sewer invoice or a presumed constant percentage of cleaning-water supply.

#### coffee_species

Conditional actual coffee/headspace/package gas or water release requires measured species and medium or an applicable source-state method. Roasting emissions occur upstream; unknown bean mass change is not CO2, volatile aroma, water vapour or another species.

- Identity requirement: Actual evidenced species release from inherited coffee or pack
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual evidenced species release from inherited coffee or pack per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual chemical/composition, source/receiver medium, interval, compatible activity/factor or gas volume/pressure/temperature conversion and uncertainty. Residual stock or lost aroma cannot quantify a species.

#### other_releases

Expand actual fuel combustion, cleaning and maintenance species/medium separately from coffee-origin releases and provider-covered upstream emissions.

Residual inventory requirement after the independently identified cases `other_releases_co2_fossil_air`; `other_releases_methane_fossil_air`; `other_releases_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual handling combustion and maintenance species
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed actual handling combustion and maintenance species per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or actual burn/activity and compatible complete factor with required composition/fate once. Product application, financial cost and hazard classification are not emitted mass.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commercial_gate | accepted_service | Verify unique positive actual B2B ownership/resale acceptance with required whole/roast/seal/date/net/moisture/time qualifiers; no order/pack/kg equivalence. |  |
| route_state | coffee_wholesale | Check ordinary ambient service and actual quality/seal reject paths; no opening/repacking/roasting/grinding or household freezing introduced silently. | nca-coffee-storage |
| stock_source | merchandise | Reconcile all lot/period stock/fates/sample/state and full roasted-sealed original-gate quantity/conversion/baseline-loss interface; no residual species or green-only complete gate. |  |
| allocation_period | all resources | Require all consumers/events/periods and complete asset life with observed/evidenced remainder, compatible drivers and one per-N view. Failed/unfinished work retains burden; direct/provider scopes do not duplicate. |  |
| physical_fates | all actual exchanges | Verify native quantity/conversions/composition/receiver and treatment coverage, and omit matched return under consumed-only; keep non-additive pack/component/water/species views and no automatic avoided credit. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Physical coffee wholesale add-on linked separately to complete original roasted/sealed product and assigned demand/loss interface |
| allowed_use | Actual ambient manufacturer-sealed roasted whole-bean own-account accepted consignment with matching qualifiers |
| excluded_use | Standalone coffee footprint; green/ground/brewed/soluble coffee; processing/repacking; household storage recommendation; retail/agency/storage-only |
| required_metadata | Actual SKU/blend/roast/date/seal/valve/net/tare/moisture/conditions/time/acceptance and lot/merchant/site/period; supplier-gate stages/assigned quantity and baseline loss owners; service/provider/asset/freight/treatment scope |
| required_quality_disclosure | Actual identity/support gaps, measurement/moisture/date/quality uncertainty, source-gate and unexplained stock/gas/fate limitations, all-consumer/lifetime evidence and absent independent range data |
| update_trigger | Changed coffee presentation/roast/pack/gate/quality/date/state, actual processing or dedicated preservation, stock/loss coverage, provider/asset/measurement/species methods |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-coffee-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June 2025), printed page301,61027/class2391. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: prepared coffee/tea wholesale includes the selected narrower roasted whole-bean service. |
| nca-coffee-storage | official_guidance | National Coffee Association USA, Storage and shelf life, public consumer guidance. https://www.aboutcoffee.org/beans/storage-and-shelf-life/ | Qualitative packaging/condition/moisture/odor and quality context only; consumer opening/freezing/quantity/freshness windows are not wholesale prescriptions or quantitative factors. |
