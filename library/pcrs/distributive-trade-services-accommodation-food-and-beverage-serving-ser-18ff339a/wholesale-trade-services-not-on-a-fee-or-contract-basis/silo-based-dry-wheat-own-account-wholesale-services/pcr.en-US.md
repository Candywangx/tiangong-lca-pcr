---
pcr_id: pcr.silo-based-dry-wheat-own-account-wholesale-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Silo-based dry wheat own-account wholesale services

## 1. Scope and Applicability

This PCR defines a service add-on for an own-account merchant that buys already-dry, already-clean non-seed wheat grain, takes ownership and resale risk, operates commercial silo handling, storage surveillance and ambient aeration, and resells a documented consignment to a business buyer. The end gate is actual agreed commercial handover with identity, quantity, quality and acceptance recorded; physical dispatch alone or an unpaid invoice alone does not establish that gate. The reference is one completed consignment, qualified by actual grain mass and residence time.

It excludes growing, harvest, deliberate drying or primary cleaning, seed production, milling/feed manufacture, retail, fee/commission agency and independently sold storage-only services. A separately required remediation or processing operation needs its own declared boundary and all actual upstream service inputs; it must not be hidden as loss-free storage. FAO storage guidance supports receipt/handling/condition-monitoring roles but does not establish ownership, universal safe thresholds or an inventory recipe. All applicable local requirements and contractual criteria must be supplied for the actual data package.

This is an operational wholesale-service dataset, not a delivered-wheat dataset or a corporate inventory. Upstream manufacture of ALL traded wheat, including wheat subsequently lost, is excluded from its exchanges. The linked commodity system must quantify and include the upstream loss adjustment once, alongside the successfully sold commodity, before a complete-chain claim. Physical waste handling and its treatment are included in this service according to declared coverage; the linked commodity adjustment must not duplicate them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.silo-based-dry-wheat-own-account-wholesale-services` |
| classification_refs | CPC 3.0 `61011`; narrower semantic subset |
| covered_products | Own-account silo-based wholesale service for already-dry cleaned non-seed wheat grain |
| excluded_products | All grain production and deliberate processing; seed; other grains/oilseeds/feed; agency; retail; standalone storage service |
| representative_product | Completed silo-based dry wheat wholesale consignment service to a business buyer |
| production_route | Ownership receipt and quality verification; silo holding/handling/ambient aeration; contracted resale handover |
| market_state | Commercial wholesale service, with separate memorandum grain-stock and ownership ledgers |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed silo-based dry wheat own-account wholesale consignment service |
| How much | 1 completed wholesale consignment service |
| How well | Actual non-seed wheat identity, condition/quality acceptance, ownership resale and business-buyer handover; actual mass, moisture and storage time disclosed |
| How long or cycle | Actual receipt-to-commercial-handover period; reporting-period stock carry and asset lifecycle handled separately |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed silo-based dry wheat own-account wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | consignment_id; ownership_and_resale_risk; buyer_business_role; contract_handover_gate; actual_net_mass; mass_unit; moisture_wet_basis; grain_class_grade; accepted_quality_criteria; silo_route; storage_start_end; geography; period; transport_coverage; linked_commodity_loss_adjustment |

All operational amounts use the same declared service-reference basis. N is the number of unique accepted wholesale consignments in the same attributed lot/campaign period, net of actual cancellations, and N must be positive. Shared site burdens include failed/rejected attempts assigned through an evidenced physical driver; such attempts do not add accepted output counts. A consignment is the actual contractual lot/handover unit; subdividing invoices or truck movements must not inflate N. Different mass, quality and storage profiles are not comparable simply because each counts as one. Required qualifiers must be declared in actual data-package fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | reference product | Number of items | Item(s) | Use actual accepted consignment IDs; reconcile ownership and handover/cancellation, record N > 0 and all comparability qualifiers. Count is not tonnes, truckloads or monetary turnover. |
| grain_stock_basis | grain memorandum stock and waste grain | Mass | kg | Record as-is mass and wet-basis moisture fraction for each lot/state; dry mass equals as-is mass times (1 - moisture fraction). Harmonize actual units and sampling periods before reconciliation; water change is not dry-matter loss. |
| native_units | all inventory rows | Native compatible property | Actual native unit | Keep measured native units for actual fuel, packaging, assets and provider services. Any conversion requires explicit source state, density/composition if needed, factor, unit and uncertainty; non-additive mass views are audit-only. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already-dry cleaned wheat accepted into merchant ownership at declared supplier gate; actual stock/quality/moisture and any prior transport coverage stated |
| starting_condition_role | Declared input-state fact for a service add-on, not a zero-burden claim about wheat |
| product_classification_scope | Own-account business-buyer dry wheat wholesale subset of CPC 61011 |
| recursive_input_rule | Upstream wheat stock remains a memorandum; do not recurse wholesale service into its own turnover. Actual outsourced support uses separate provider result and explicit non-overlap. |
| upstream_dataset_requirement | Verified appropriate upstream supplies/providers/asset lifecycle data; linked commodity-production and attributable-loss demand resolved outside this service before complete-chain claims |
| disclosure | Actual starting/ending grain stock; receipts/returns/dispatch/losses; agreed commercial gate; scope of freight, waste treatment and assets; exclusions and all unknown coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_service | wholesale | Inventory the wholesale operation, its actual consumed supplies, energy, attributable assets, actual support and owned transport/waste-treatment scope once. Successful through-traded wheat and its lost fraction have no production exchange in this service; maintain a separate physical grain ledger and mandatory linked upstream commodity adjustment. |  |
| boundary_gate | wholesale | Declare actual receipt state and commercial handover; reject or cancelled dispatch is not accepted service output. Maintain ownership, physical custody and accounting periods separately. Fee agency and commodity processing are excluded. | unsd-cpc3-wholesale-2025 |
| boundary_grain | wholesale | Track initial dry usable wheat, actual silo residence, handling, monitoring and ambient aeration; existing quality is preserved without a default drying, fumigation or cleaning recipe. Record any actual corrective outsourced scope explicitly and avoid hidden processing. | fao-bulk-storage; fao-grain-aeration |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| wholesale | Integrated ownership-based dry-wheat wholesale operation | required | Actual own-account dry wheat receipt, silo holding and business-buyer resale handover | Integrated service responsibility including failed handling/reject routes; no commodity production output | `accepted_service` |

Batch/consignment and campaign-period IDs own every stock transfer, monitoring record, cleaning event and dispatch. Ambient aeration and ordinary checking are activities within this one responsibility, not independently sold preservation or grading outputs. Actual refused deliveries are held, returned, separately processed or discarded with documented receivers and actual energy/waste; only accepted handovers count as N. Transferred grain between silos is an internal stock movement, never another purchase or accepted wholesale consignment.

All operational amounts use the same declared service-reference basis. N is the number of unique accepted wholesale consignments in the same attributed lot/campaign period, net of actual cancellations, and N must be positive. Shared site burdens include failed/rejected attempts assigned through an evidenced physical driver; such attempts do not add accepted output counts.

### Process: Integrated ownership-based dry-wheat wholesale operation (`wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed electricity per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Metered kWh by operation interval, actual aeration/handling hours, consignment residence and all-consumer attribution are needed. An empirical kWh guardrail needs independent comparable silo climate/load/quality evidence; missing generic Energy support and supplier identity remain separate gaps.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual attributed fuel supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Use actual grade and native litres or mass, opening/receipts/closing and matched usable returns; any density/temperature conversion needs traceable basis. The supplied-to-burn relationship requires measured burn or complete disjoint fates, not a presumed combustion fraction.

###### Actual liquid treated tap-water supply (`water_supplied_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed water supplied per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Retain actual metered purchased volume, cleaning/sanitary purpose, service period and supplier coverage. Any per-consignment water guardrail requires the same actual cleaning scope and allocation; it does not validate grain moisture or imply direct abstraction.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed operating supplies per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Collect actual SKU, formulation and concentration, native unit, stock-adjusted consumption, usable returns and separately measured waste/release fates. A chemical-application or maintenance guardrail needs current actual route and product evidence; no generic fumigant dose or direct-release fraction is provided.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed silo-based dry wheat own-account wholesale consignment service (`accepted_service`)

One actual unique consignment with ownership-based resale to a business buyer and recorded dispatch, quality/state, agreed commercial handover and accepted net grain quantity. This output is the wholesale service, not the wheat commodity.

- Selected flow: Completed silo-based dry wheat own-account wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: The fixed count defines normalization only. Actual consignment mass, moisture, quality, storage time and ownership/handover evidence are required; there is no universal tonne equivalent or generic lot size.

##### Waste flows

###### Discarded dry wheat grain (`waste_grain_atomic_case`)

Conditional on independently recorded actual Discarded dry wheat grain. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `waste_grain`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded dry wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed waste grain per reference flow; cp_grain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grain`

Range evidence need: Measure actual contained waste net mass and representative moisture, lot and receiving route; reconcile its dry matter against actual grain stock and linked lost-commodity demand. Do not impose historical FAO loss percentages, infer spoilage from water loss, or use captured dust as airborne-release quantity.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`species_releases_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed species releases per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: For each actual identified species or particle fraction and medium retain measured release or compatible measured activity and species factor, with composition/fate basis and sources if applicable. Dry-matter stock residual, dust captured as waste, safety limits or total formulated supply cannot establish a species release; complete factors are applied once.


###### Actual separately evidenced fossil methane emitted to air (`species_releases_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed species releases per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: For each actual identified species or particle fraction and medium retain measured release or compatible measured activity and species factor, with composition/fate basis and sources if applicable. Dry-matter stock residual, dust captured as waste, safety limits or total formulated supply cannot establish a species release; complete factors are applied once.


###### Actual separately evidenced nitrous oxide emitted to air (`species_releases_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed species releases per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: For each actual identified species or particle fraction and medium retain measured release or compatible measured activity and species factor, with composition/fate basis and sources if applicable. Dry-matter stock residual, dust captured as waste, safety limits or total formulated supply cannot establish a species release; complete factors are applied once.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_meter | wholesale | Prefer actual submeter and event assignments. Allocate remaining documented common operating burdens to all actual consumers by an evidenced compatible physical driver, such as handling mass for conveying or occupied grain-volume-time for space-related holding. Choose driver by causal use, keep total-consumer denominator and failed/rejected attempts, explain idle-capacity treatment; invoice value and equal consignment count are not default drivers. Divide attributable totals by N once. |  |
| alloc_assets | shared_assets | Identify asset and every consuming lot/site/period. Attribute its complete manufacture, actual maintenance, replacements and end-of-life burden by driver_used / driver_lifetime. Establish lifetime driver from observed use or observed history plus evidenced remaining use, replacement and termination assumptions, uncertainty and sensitivity. Use either asset-equivalent fraction / N OR lifecycle-complete provider quantity in native units / N, never both and never normalize twice. |  |
| alloc_supplies | operating supplies | For one actual native-unit SKU/state, S = attributed opening stock + external receipts - closing stock. Choose gross-with-outlets S / N and retain usable external returns, or consumed-only (S - usable external returns) / N with matched return omitted from credited exchange. Closing stock includes usable recovered closing stock; wastage and uncontained loss are not usable returns and retain upstream supply burden. Internal issues/returns do not create external purchases. |  |
| alloc_commodity_loss | grain memorandum | Keep all wheat-production burdens outside this service. Send attributed irrecoverable grain dry-matter loss L, accepted outbound grain dry matter G and existing commodity-dataset loss coverage to the linked commodity system. If G > 0 and its commodity baseline excludes this loss, upstream dry-wheat demand = G + L (factor (G + L) / G). Convert at the actual upstream reference moisture; for service linkage provide L / N. If matching losses are already included, reconcile instead of multiplying again. Waste treatment included here must not be repeated there. Unknown loss or attribution blocks complete-chain claims, never defaults to zero. |  |
| alloc_outlets | wholesale | No substitution credit from unusable grain, usable supply returns or unsold merchandise. Downgraded but usable sold grain retains actual state and receiving transaction; it is a documented physical merchandise exit, not an automatically burden-free coproduct. If genuinely independent intended co-products or processing appear, declare and review a new attribution boundary before final dataset use. |  |

Here G is net completed accepted outbound grain after actual cancellations and buyer-return reversals, not all physical dispatches. The physical stock balance separately retains gross physical dispatch and actual return receipts. Buyer-returned grain that remains merchant stock is not irrecoverable L. Storage-water changes must be reconciled at the actually measured state, including moisture sampling uncertainty.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | wholesale | accepted_service | Ownership and handover ledger | site_id; campaign_id; period_id; consignment_id; seller_id; buyer_id; buyer_business_role; contract_id; ownership_start; resale_risk; dispatch_id; handover_gate; handover_date; time_zone; storage_start; storage_end; residence_duration; residence_duration_unit; accepted_net_mass; mass_unit; moisture_fraction_wet_basis; grain_grade; quality_criteria; acceptance_record; cancellation_id; N | Reconcile unique actual commercial consignments against dispatch, acceptance, cancellation and ownership records; exclude duplicate invoice/truck splits. | Item(s) | Every consignment and cancellation | Actual receipt-to-handover and relevant reporting periods | Merchant silo and linked business-buyer gate | per reference flow | Ownership/acceptance record and calibrated weighing evidence |
| cp_grain | wholesale | grain stock and waste_grain | Lot-linked physical stock and loss ledger | site_id; silo_id; campaign_id; period_id; lot_id; consignment_id; transfer_id; state; event_date; time_zone; storage_start; storage_end; residence_duration; residence_duration_unit; moisture_basis; moisture_source; gross_mass; tare_mass; mass_unit; moisture_fraction_wet_basis; moisture_method; temperature; temperature_unit; opening_mass; receipts_mass; buyer_returns_mass; supplier_returns_mass; physical_dispatch_mass; net_accepted_dispatch_mass; useful_other_exit_mass; closing_mass; contained_waste_mass; measured_direct_loss_mass; loss_method; residual; loss_receiver; commodity_dataset_id; commodity_loss_coverage; linked_loss_adjustment_owner; linked_loss_adjustment_status; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Use calibrated net weighing and representative moisture sampling at each actual state; pair internal transfers, reconcile dry matter, investigate unknown residual and preserve actual waste receiver proof. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | kg | Each receipt, transfer, return, stocktake and dispatch | All stock periods and actual silo residence | Actual silo lots and their actual external handoffs | per reference flow | Calibrated scale/moisture method, grain stock reconciliation and linked commodity-loss interface |
| cp_energy | wholesale | electricity and actual fuel burn | Submeter and combustion ledger | site_id; campaign_id; period_id; consignment_id; asset_id; event_id; event_date; time_zone; duration; duration_unit; energy_type; meter_id; opening_reading; closing_reading; reading_unit; attribution_driver; all_consumer_driver; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; unrecovered_loss; carried_closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual energy and measured burn; if burn is reconstructed, require a complete disjoint native-unit fate ledger with uncertainty and unknown-loss investigation. Fuel delivered is not burn. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Native energy or fuel unit | Meter interval and each burn/handling event | Entire attributed campaign and relevant periods | Direct silo, handling and support assets | per reference flow | Meter calibration, burn evidence and complete coverage reconciliation |
| cp_supplies | wholesale | fuel, water, supplies, packaging and returns | Native-unit stock and consumption ledger | site_id; campaign_id; period_id; consignment_id; event_id; event_date; time_zone; SKU; composition; concentration; state; native_unit; opening_quantity; external_receipts; receipt_gross_quantity; receipt_tare_quantity; receipt_net_quantity; receipt_quantity_unit; closing_quantity; recovered_closing; usable_external_return; contained_waste; uncontained_loss; gross_or_consumed_convention; conversion_factor; factor_unit; factor_source; density; density_unit; temperature; temperature_unit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use invoices plus physical stock/issue/return records; distinguish products, wastes, environmental inputs and direct release; retain actual state-specific conversion evidence. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native SKU unit | Each external event and period stocktake | Complete attributed reporting periods | One SKU/state and actual silo activities | per reference flow | Matched returns, inventory reconciliation and conversion provenance |
| cp_providers | wholesale | provider_services | Completed service and coverage ledger | site_id; campaign_id; period_id; consignment_id; provider_id; service_id; event_date; duration; duration_unit; actual_result; quantity; native_unit; completion_record; upstream_dataset_id; included_energy; included_material; included_asset_lifecycle; included_freight; included_waste_treatment; coverage_gap; attribution_driver; all_consumer_driver | Verify actual delivered provider result and upstream dataset coverage; reconcile against direct ledgers so each burden appears once. Missing physical quantity or necessary coverage remains a data gap. | Actual provider-native unit | Each actual provider result | Actual service period | All included provider responsibilities | per reference flow | Completion evidence and explicit burden coverage matrix |
| cp_assets | wholesale | shared_assets | Lifecycle and consuming-driver ledger | site_id; campaign_id; period_id; consignment_id; asset_id; asset_configuration; event_date; phase_id; acquisition_record; manufacture_dataset; maintenance_record; replacement_id; end_of_life_record; consumer_id; driver_unit; driver_used; driver_lifetime; observed_driver; evidenced_remaining_driver; lifetime_source; termination_assumption; attribution_view; uncertainty; sensitivity; update_trigger | Identify all consumers and periods; reconcile driver use against full lifecycle burden and support evidenced remaining use/replacements/termination; retain one allocation view. | Item(s) or actual lifecycle-service native unit | Each asset event and period review | All actual and evidenced remaining asset life | All consumers, jobs and periods of the actual asset | per reference flow | Lifecycle-complete coverage, observed service records and evidenced remaining-use scenarios |
| cp_freight | wholesale | freight | Leg and load ledger | site_id; campaign_id; period_id; consignment_id; leg_id; event_date; provider_id; route; transport_mode; net_load; load_unit; load_conversion_factor; load_conversion_factor_unit; load_conversion_source; distance; distance_unit; distance_conversion_factor; distance_conversion_factor_unit; distance_conversion_source; native_service_unit; attribution_driver; attribution_driver_unit; all_consumer_driver; attribution_share; empty_return_method; upstream_coverage; duplicate_leg_check; uncertainty | Record actual leg loads and distances; convert to compatible kg*km using explicit conversion, preserve mode/load/empty-return and upstream coverage before attribution. | kg*km | Each transport leg | All included legs and returns | Declared transport responsibility boundary | per reference flow | Transport documents, load/distance provenance and coverage check |
| cp_environment | wholesale | environmental_water, other_wastes, contained_wastewater, water_outfalls, species_releases | Measured fate and receiver ledger | site_id; campaign_id; period_id; consignment_id; event_id; event_date; time_zone; source_id; material_state; collected_wastewater_volume; received_wastewater_volume; wastewater_volume_unit; concentration; concentration_unit; concentration_basis; concentration_source; species; particle_fraction; receiving_medium; temperature; temperature_unit; measured_quantity; native_unit; measurement_method; waste_receiver; treatment_dataset_id; treatment_coverage; water_source; outfall_id; combustion_activity; activity_unit; species_factor; factor_unit; factor_basis; factor_source; composition_fraction; composition_basis; composition_source; release_fraction; fate_basis; fate_source; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Expand actual material, species/particle fraction and receiver; use direct measurement or actual compatible activity times species-specific factor. Whole-fluid release times measured composition/fate is an alternative only when it does not duplicate an already complete species factor. Carrier water, contained waste and substance views remain non-additive where appropriate. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native unit | Each release, waste movement and relevant measured interval | Whole attributed operation and events | Actual direct boundaries and contracted treatment receiver | per reference flow | Actual receiver proof, measurement/factor provenance and non-overlap check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| count_and_attribution | all inventory rows | Collect actual operational totals using actual consignment, campaign and period keys. Attribute shared burdens with documented all-consumer physical drivers, then divide the attributed quantity by N once. Rejected/cancelled attempts retain attributable burdens but do not increase N. | cp_consignment; cp_energy; cp_supplies; cp_providers; cp_assets; cp_freight; cp_environment | Operational exchange quantity per reference flow |  |
| grain_dry_balance | grain memorandum and waste_grain; waste_grain_atomic_case | For each actual state D = net as-is mass times (1 - wet-basis moisture fraction). Dry opening + dry external receipts + dry buyer returns - dry closing - dry physical dispatch - dry supplier returns - dry useful other exits - dry contained waste - independently measured dry direct loss = unexplained residual. Internal transfers cancel. Investigate residual with uncertainty; do not label it emission or loss automatically. Water gain/loss is tracked separately and never equated with dry matter. | cp_grain | Stock reconciliation and identified dry-matter loss L per linked commodity consignment |  |
| commodity_link | grain memorandum | For actual attributed irrecoverable dry-grain loss L and accepted outbound dry-grain quantity G, send L / N to the commodity model. If G > 0 and the same loss is not already included upstream, commodity dry-grain demand is G + L, or multiplier (G + L) / G. Convert using actual upstream reference moisture and preserve responsibility/coverage. Treatment already in this service stays excluded from this production-only adjustment. Unknown loss, receiver or coverage blocks complete-chain finalization. | cp_grain; cp_consignment | Linked upstream commodity-loss adjustment, outside service exchanges |  |
| fuel_and_species | fuel_supply and species_releases; fuel_supply_diesel_supply; species_releases_co2_fossil_air; species_releases_methane_fossil_air; species_releases_nitrous_oxide_air | Upstream supply follows stock-adjusted input convention. Actual burn is measured or reconstructed from a complete disjoint fate ledger: carried closing, usable external return, contained nonburned waste, unrecovered nonburned loss and actual burn. A total spill tally is audit-only when its recovered/remaining fates already appear. Species release equals actual compatible activity times a species/medium-specific factor, or actual whole-fluid release times evidenced composition and fate. Do not multiply composition/fate again into a complete species factor. | cp_energy; cp_supplies; cp_environment | Actual supply, burn and identified species release views with once-only coverage |  |
| freight_service | freight | For each actual leg use net load in kg times distance in km; convert actual mass and length units before multiplication. Attribute included empty returns and provider coverage once; total attributable kg*km is expressed per reference flow. | cp_freight; cp_consignment | Actual kg*km per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Verify actual material/service/species identity, property and unit before final exchange binding. A candidate semantic label and verified Count support are not a flow UUID. | Concrete identity/detail/support evidence |
| quality_grain | grain ledger | Preserve representative moisture sampling, scale calibration and actual stock states; resolve unexplained dry-matter residual, segregation and lot links. No universal loss, moisture, residence or aeration factor. | cp_grain; uncertainty and investigation records |
| quality_coverage | wholesale | Reconcile direct, provider, freight, assets, waste-treatment and linked commodity-loss boundaries; unknowns stay explicit. Quantitative guards require independent comparable evidence, not the maximum of the batch being validated. | Coverage matrix and missing-data register |
| quality_period | wholesale | Link stock, energy, assets, service handovers and actual returns/replacements/termination to all relevant periods; avoid duplication between opening/closing stock and another reporting period. | Period/asset/consignment trace ledger |

For cp_supplies, external_receipts means net product quantity after actual tare in the same native unit; retained receipt gross, tare and net quantities reconcile. For cp_freight, any shared leg uses an actual compatible physical driver with all-consumer denominator; the sum of attributed shares must equal the declared leg coverage, without allocating already net consignment loads twice.
Wastewater records retain actual collected and received aqueous volumes, composition and receiving treatment scope independently of purchased water. An actual physical water balance also records consumption, retained moisture and direct withdrawal/outfall as applicable; no residual volume is assigned automatically to wastewater or environmental release.

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| fuel_supply | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| water_supplied | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_supplied` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| packaging | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packaging` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| usable_returns | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| waste_grain | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `waste_grain` under `cp_grain`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `waste_grain_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_grain`; actual source-linked native records |
| other_wastes | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| contained_wastewater | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| water_outfalls | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| species_releases | wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `species_releases` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Record attributable metered handling, ambient-aeration, lighting, laboratory and office electricity, including unsuccessful handling and cleaning events; exclude overlapping provider-meter coverage.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Electricity supplied to wholesale operations
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed electricity per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Metered kWh by operation interval, actual aeration/handling hours, consignment residence and all-consumer attribution are needed. An empirical kWh guardrail needs independent comparable silo climate/load/quality evidence; missing generic Energy support and supplier identity remain separate gaps.

#### fuel_supply

Expand the actual fuel grade and native supply unit; upstream supply follows actual stock-adjusted supply while direct combustion follows separately measured burn. No automatic full-tank combustion.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Fuel supplied for actual handling and site vehicles
- Flow property / unit: Volume / L
- Amount rule: Actual attributed fuel supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Use actual grade and native litres or mass, opening/receipts/closing and matched usable returns; any density/temperature conversion needs traceable basis. The supplied-to-burn relationship requires measured burn or complete disjoint fates, not a presumed combustion fraction.

#### water_supplied

Include actual purchased cleaning and sanitary water attributable to the operation. It is not grain moisture, environmental withdrawal or water-footprint output.

Residual inventory requirement after the independently identified cases `water_supplied_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased water for recorded site support
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed water supplied per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Retain actual metered purchased volume, cleaning/sanitary purpose, service period and supplier coverage. Any per-consignment water guardrail requires the same actual cleaning scope and allocation; it does not validate grain moisture or imply direct abstraction.

#### operating_supplies

Expand only actual separately identified formulations, lubricants, filters and test consumables in native units; capture concentration and waste fate. No prescribed fumigant or application recipe.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual cleaning, pest-control and maintenance supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed operating supplies per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Collect actual SKU, formulation and concentration, native unit, stock-adjusted consumption, usable returns and separately measured waste/release fates. A chemical-application or maintenance guardrail needs current actual route and product evidence; no generic fumigant dose or direct-release fraction is provided.

#### packaging

Normally bulk dispatch; include bags, seals or other actual single-use supplies only when used. Reusable bins and pallets belong in the asset or provider ledger.

- Identity requirement: Actual dispatch packaging and single-use containment supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed packaging per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual single-use SKU counts or mass and matching net merchandise quantity, package state and usable return evidence are needed. Bulk default does not prove zero packaging; reusable units require independently evidenced lifecycle service, not full new manufacture each dispatch.

#### provider_services

Expand actual laboratory, sanitation, pest-control, hired handling and administrative support results with provider-native quantity and full upstream scope. Item(s) is used only for a truly counted completed result, never hours or price converted to a count.

- Identity requirement: Actual externally provided wholesale support services
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed provider services per reference flow; cp_providers.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Verify each actual completed physical result, provider-native quantity and full upstream energy/material/asset/transport/treatment coverage; empirical guards need identical service scope and physical driver. Price, staff-hours or job count alone cannot fill absent provider burden.

#### shared_assets

Record attributable fractions of actual silo structures, conveyors, fans, scales, vehicles, instruments and ICT assets including manufacture, maintenance, replacements and end-of-life. Do not allocate merchandise as infrastructure.

- Identity requirement: Lifetime-attributed silo, handling and business-support assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed shared assets per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Require actual asset configuration, complete manufacture/maintenance/replacement/end-of-life coverage and observed plus evidenced remaining lifetime driver across all consumers. Compare per-consignment asset fractions only at compatible utilization and holding profiles; no universal silo life or allocation fraction applies.

#### freight

Expand each actual inbound, outbound, return and waste leg owned by the declared service scope; use net load and distance, and include empty-return treatment or disclosed provider coverage. Do not count an upstream delivered-price transport leg twice.

- Identity requirement: Actual non-overlapping freight service attributable to wholesale
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual attributed freight per reference flow; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: For each non-overlapping actual leg retain vehicle/mode, net load, load/distance units, actual route, empty-return basis and upstream scope. Any kg*km guardrail must preserve the same actual inbound/outbound/waste responsibility, consignment mass and route.

#### environmental_water

Expand actual water source, location and withdrawal role only if directly drawn. Purchased water is a different product input; no default direct withdrawal for an otherwise dry route.

- Identity requirement: Actual direct environmental water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed environmental water per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Actual source, location, withdrawal volume meter, purpose and time are required if direct abstraction occurs. A missing meter or unknown source is unresolved coverage; no dry-wheat or purchased-water figure substitutes for actual direct abstraction.

#### usable_returns

Expand unused usable supply returns by the same SKU, native unit and state as their matched input. Closing stock is not an outward return; merchandise supplier/buyer returns stay in the separate grain ledger.

- Identity requirement: Usable operating-supply returns crossing the boundary
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed usable returns per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require the same actual SKU/state/native-unit match, external recipient and physical transfer as the supply ledger. Any mass view needs measured per-item mass or actual state conversion and is non-additive; closing stock and discarded material are not usable return quantities.

#### waste_grain

Record actual unusable spill, dust captured as waste and spoiled grain crossing to a documented waste receiver, with wet mass, moisture and dry-matter views. Captured dust is not an airborne emission. Rejecting a consignment is not proof that all its grain is waste.

- Identity requirement: Contained discarded wheat and grain residues
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed waste grain per reference flow; cp_grain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grain`

Range evidence need: Measure actual contained waste net mass and representative moisture, lot and receiving route; reconcile its dry matter against actual grain stock and linked lost-commodity demand. Do not impose historical FAO loss percentages, infer spoilage from water loss, or use captured dust as airborne-release quantity.

#### other_wastes

Expand actual packaging waste, spent filters, oils, laboratory and cleaning wastes separately by composition, native unit and receiving route. Treatment burdens must have one owner and explicit inclusion coverage.

- Identity requirement: Actual non-grain contained wastes and spent materials
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other wastes per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Each actual waste fraction requires composition/state, native measured amount, receiver and treatment coverage. Any per-consignment guardrail must use the actual single-use/maintenance scope; container mass, treatment invoice or safety classification alone is not actual waste composition or treatment load.

#### contained_wastewater

Record actual collected cleaning, sanitary or other aqueous wastewater transferred to a documented receiving treatment system. Measure native received volume and actual composition; it is not a direct environmental outfall and is not inferred from purchased water volume. Identify whether provider treatment is included in this card or another upstream service, with one burden owner.

- Identity requirement: Actual contained wastewater sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed contained wastewater per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Obtain actual collected or received wastewater volume, collection interval, aqueous state and contaminant composition/concentration basis, receiver and treatment coverage. Do not set wastewater equal to water purchased or count a separate direct outfall for the same transfer. A quantitative guardrail requires independent comparable actual cleaning/sanitary scope and unit basis.

#### water_outfalls

Expand only actual direct outfalls by receiving medium and quality. Wastewater sent in containment to treatment is Waste, not an elementary outfall; separately quantified pollutants must not double count carrier water.

- Identity requirement: Actual water discharged to the environment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed water outfalls per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Actual direct outfall volume and receiving medium, sampling interval, measured composition and treatment responsibility are needed. Do not infer pollutant mass from purchased water, sum carrier volume and pollutant mass as one flow, or treat containerized wastewater as direct discharge.

#### species_releases

Expand actual combustion, uncontained grain dust, refrigerant or pest-control emissions only for identified species or particle fraction and medium. Use actual measurement or compatible species-specific factors and activity, never total supply, missing stock or a safety-limit value as an emission.

Residual inventory requirement after the independently identified cases `species_releases_co2_fossil_air`; `species_releases_methane_fossil_air`; `species_releases_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual identified substance releases to declared receiving media
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed species releases per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: For each actual identified species or particle fraction and medium retain measured release or compatible measured activity and species factor, with composition/fate basis and sources if applicable. Dry-matter stock residual, dust captured as waste, safety limits or total formulated supply cannot establish a species release; complete factors are applied once.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | Confirm actual own-account B2B resale, unique accepted consignment, N > 0, actual mass/moisture/quality/storage time and agreed gate. Rejected/cancelled output is excluded and invoice splits cannot inflate count. |  |
| validate_grain | grain memorandum | Reconcile all grain dry-matter and water states, actual usable returns, downgrades, waste and independently identified loss; do not convert unexplained residual to an elementary emission. Record linked commodity production-only loss adjustment and its coverage once before complete-chain claims. |  |
| validate_coverage | all inventory rows | Every actual exchange has native unit, node-owned protocol and quantity/fate evidence. Expand actual provider, supply, waste and species umbrellas; missing coverage cannot be assumed absent. Direct/provider and commodity/service boundaries must not overlap. |  |
| validate_assets_periods | shared_assets | Check all asset consumers and lifecycle phases, observed plus evidenced remaining driver, maintenance/replacement/end-of-life, period linkage, idle treatment, uncertainty and one attribution view. An unsupported lifetime is a data gap. |  |
| validate_species | species_releases; species_releases_co2_fossil_air; species_releases_methane_fossil_air; species_releases_nitrous_oxide_air | Verify actual species/particle fraction, receiving medium, compatible activity and factor/composition/fate sources. Captured dust or container contents are not direct emissions; measured fuel supply is not burn; no duplication of carrier-water and species views. |  |
| validate_reject_mode | wholesale | Link each batch/campaign/period, failed attempt, cleaning/changeover, reject return and disposal to the originating lot and one owner. Internal transfers and grain returns must reconcile stock and cancellation without creating new production or multiple accepted service counts. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after concrete identity and foreground completeness review |
| downstream_use | Wholesale-service add-on combined with separately matched commodity production and commodity-loss adjustment |
| allowed_use | Declared own-account dry wheat wholesale consignment route with matching physical/commercial gate and actual mass/storage qualifiers |
| excluded_use | Standalone delivered-wheat footprint; wheat cultivation or processing; all-grains average; fee agency; retail; monetary factor; a complete-chain claim without linked upstream commodity loss |
| required_metadata | Actual consignment/lot, merchant/site, period, wheat class/grade, mass/moisture/state, ownership, buyer role, gate, residence time, transport and treatment coverage, linked commodity adjustment owner and status |
| required_quality_disclosure | Concrete identities and unresolved gaps; sampling/measurement and stock uncertainty; shared drivers and complete asset lifecycle assumptions; omitted coverage; independent range evidence and linked loss accounting |
| update_trigger | Changed supplier/route/gate or grain quality; new drying/processing; changed assets, provider scope, loss coverage, monitoring method, period or data-quality evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes (30 June 2025), division 61 and subclass 61011. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: own-account wholesale is distinguished from agency and commodity production; wheat service is a narrower subset. |
| fao-bulk-storage | official_guidance | FAO, Agricultural engineering in development: Bulk storage. https://www.fao.org/4/t0522e/t0522e0d.htm | Commercial bulk receipt/handling, silo storage monitoring and dispatch roles; qualitative route evidence, not a numeric recipe or mandatory treatment. |
| fao-grain-aeration | official_guidance | FAO, Grain storage techniques: Bulk storage, Aeration. https://www.fao.org/4/t1838e/T1838E1b.htm | Ambient aeration and moisture/temperature monitoring; cooling and moisture changes differ. No airflow, hours, temperature or loss factor transferred as default. |
| fao-wheat-storage | official_guidance | T. S. Payne, Harvest and storage management of wheat, FAO Bread wheat improvement and production. https://www.fao.org/4/y4011e/y4011e0u.htm | Wheat storage deterioration depends on physical, biological and technical conditions; no reported historical loss rate is a universal guardrail. |
