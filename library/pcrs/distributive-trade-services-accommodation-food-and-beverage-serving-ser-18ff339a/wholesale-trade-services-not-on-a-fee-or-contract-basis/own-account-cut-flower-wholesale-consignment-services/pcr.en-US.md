---
pcr_id: pcr.own-account-cut-flower-wholesale-consignment-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account cut-flower wholesale consignment services

## 1. Scope and Applicability

This PCR defines a modular physical wholesale-service add-on for fresh cut flowers bought and resold on own account to business buyers through an operated refrigerated holding and handling location. One completed commercial consignment is the declared counted service. Intake checks, species-specific preservation, actual hydration/recutting where performed, order assembly without manufacturing floral articles, handling, cleaning, relevant physical overhead and agreed logistics are included.

Exclude growing/harvest, live potted plants, planting material, manufactured bouquets/wreaths, retail display, final consumer care, commission-only agency, separately sold storage without purchase/resale and purely financial title transfer. A provider with no physical responsibility cannot use this PCR. Bulk mixed species require lot-resolved records; no common temperature, life, chemical recipe or loss percentage is prescribed. UMass handling guidance and UC Davis gladiolus examples support species-dependent preservation questions, not universal quantitative factors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-cut-flower-wholesale-consignment-services |
| classification_refs | CPC 3.0:61012; narrower: refrigerated own-account cut-flower wholesaling, excluding live plants |
| covered_products | Completed B2B own-account cut-flower consignment service with documented intake/preservation and accepted resale handover |
| excluded_products | Cultivated flowers themselves; live potted plants; floral-article manufacture; fee agency; retail; storage-only service |
| representative_product | One accepted commercial consignment of declared species/cultivar, stem grade, physical quantity and cold/hydration state |
| production_route | Owned-stock receipt and quality check -> species-specific refrigerated holding with actual wet/dry treatment -> order handling and B2B acceptance; actual rejects and returns tracked |
| market_state | Completed service at buyer acceptance; flowers remain declared merchandise throughflow, with actual thermal/hydration and quality gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed physical own-account cut-flower wholesale consignment service |
| How much | 1 Item(s), one uniquely completed and accepted consignment; no universal stems, kg, order price or margin equivalence |
| How well | Actual declared species/cultivar, maturity/grade/stem length, damage/disease and temperature/hydration requirements accepted by the business buyer; no guaranteed future vase life from this PCR |
| How long or cycle | Actual intake-to-acceptance consignment period plus attributed idle, cleaning, asset-life and reporting-cutoff burdens |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed own-account cut-flower wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | ownership_resale_gate; consignment_id; business_buyer; species_cultivar; stem_count; stem_length_grade; net_flower_mass_and_hydration_state; intake_and_acceptance_dates; temperature_and_humidity_records; ethylene_exposure_control; hydration_or_dry_route; treatment_identity_and_actual_use; room_and_transport_scope; reporting_period; loss_adjustment_link |

N is the positive count of unique accepted commercial consignments in the cohort, after documented reversals and allocation. Do not split one order into artificial deliveries to dilute burdens; retain the actual contract/handover unit. Merchandise stem/count/mass and moisture state are comparability qualifiers, not an automatic conversion of one service into one tonne.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count unique actually accepted consignments; completed-service amount is 1 Item(s) per reference flow. Failed/cancelled orders are not additional accepted outputs; their attributed operations remain in cohort burdens. |
| merchandise_basis | merchandise audit and residues | Count and Mass | stems; kg | Preserve stems, measured net mass, hydration/drainage state, species/grade and time. Recut fragments change mass but do not automatically change whole-stem count; no fixed stem-to-mass conversion. |
| native_supply | all supplied resources | Actual exchange property | actual native unit | Native Count/Area/Length/Volume/Time supplies or providers require actual corresponding exchanges and verified support; a mass view needs compatible actual measurement and is nonadditive. |
| cold_water_state | water and flower records | Volume, Mass and temperature | m3; kg; declared temperature unit | Distinguish hydration uptake, retained liquid, direct intake/discharge, contained wastewater and actual evaporation. Record conversions with state/temperature/density evidence; no residual species release. |


## 5. System Boundary

The single foreground responsibility preserves received usable cut flowers under a documented species-specific refrigerated/wet-or-dry regime and hands over an accepted wholesale consignment. Its before-state is purchased fresh cut flowers at intake, its maintained after-state is flowers meeting the declared buyer gate. Intake condition failures, cold-chain excursions, treatment events, cleaning/changeovers and all actual reject/return exits stay attributed to this responsibility. Asset manufacture, maintenance, replacements and end-of-life span the actual service periods.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already grown/cut, purchased merchandise with supplier gate, species/grade, physical quantities and quality/temperature/hydration state declared |
| starting_condition_role | Merchandise audit throughflow, not consumed commodity input or a duplicate cultivation burden in this service add-on |
| product_classification_scope | Own-account B2B refrigerated cut-flower wholesale service, a semantic subset of CPC61012 |
| recursive_input_rule | A same-category provider service may enter only with an actual contracted upstream responsibility/gate and disjoint resource coverage; never recurse through the same consignment |
| upstream_dataset_requirement | Compatible resource/provider/asset/treatment datasets with actual unit and lifecycle scope; commodity production and lost-commodity adjustment are separate linked datasets |
| disclosure | All intake-to-handover and reporting periods, ownership/resale evidence, accepted cohort N, merchandise/loss/return ledger, upstream loss-adjustment link, cold/hydration/treatment scope, provider and logistics overlap |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_service | all inventory | This is a service add-on. Exclude upstream production of saleable AND lost merchandise. Keep all actual service resources, direct releases and loss-handling/treatment burdens. Before a whole-chain package is complete, quantify and link lost-commodity upstream burdens exactly once in the separate commodity system; this service alone is not a full cut-flower footprint. |  |
| boundary_preservation | preserved_wholesale | Declare actual species-specific preserved state, room and lot temperature/humidity records, ethylene control, hydration/dry route and actual chemical identity. Source examples do not impose a universal temperature, concentration, shelf life or treatment permission. | umass-cutflower-handling; ucdavis-gladiolus-2004 |
| boundary_coverage | all actual responsibilities | Register the owner of each on-site, provider, freight, refrigeration, maintenance and disposal burden; include each actual resource exactly once. Unknown provider or direct environmental scope blocks final data completeness. |  |
| boundary_outlets | all outlets | Track saleable/downgraded/returned merchandise only in the merchandise ledger; neither returns nor discards generate a second wholesale-service output. Actual uncontained water/chemical/fuel losses require dedicated actual medium/substance exchanges and evidence, not silence or assumed zero. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preserved_wholesale | Integrated refrigerated preservation and own-account wholesale | required | Actual ownership-resale plus refrigerated holding responsibility | Preservation node from intake usable flower state to accepted B2B handover; batch/period indexed, actual returns/rejects owned here | `accepted_service` |

One integrated node owns these acts; no duplicate preservation/packing/grading node is inferred merely from a verb. Cleaning and treatment may run by species/room campaign, while refrigeration serves overlapping consignments continuously; link every run/changeover and consumer period. A separately contracted upstream service is an input with explicit coverage, not repeated own activity. Conditional cards are expanded only when actual records prove concrete material/service/species, native unit and receiving gate; missing actual environmental water or gas roles must be expanded, not treated as zero.

### Process: Integrated refrigerated preservation and own-account wholesale (`preserved_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable kWh / N; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Require room/ambient temperature, occupancy and period-resolved metering with allocation evidence, including idle/changeover energy; no universal kWh per stem.

###### Diesel supplied for on-site handling equipment (`diesel_supply`)

Conditional on actual diesel equipment; record upstream diesel supply and actual burn separately. Other fuels require separate native-unit exchanges.

The fixed identity represents generic supplied diesel on a Mass/kg reference basis; actual grade, formulation, supplier and heating value remain recorded attributes, not presets. Retain the native litre record and actual compatible density with temperature/state, mass-per-volume unit and source for any final kg conversion; the catalogue defines no default density. Missing density leaves final volume-to-mass conversion incomplete, never zero or an assumed value. Supplied diesel is not burned diesel, transport service or a direct emission.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Attributable diesel supply L / N; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`

Range evidence need: Require measured stocks, deliveries, burn and mutually exclusive returns/nonburned wastes/losses; spills are not inferred burn.

###### Actual liquid treated tap-water supply (`water_supply_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable supplied water m3 / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Require intake/use/outlet records, holding and drainage times and water state; plant uptake, wastewater and evaporation are not one residual.

###### Actual separately recorded polyethylene packaging film (`packaging_supplies_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Attributable packaging supply kg / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require item/material/native-unit and stock/return evidence; measured item mass or geometry/density for a separate mass view, with no duplicate exchange.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account cut-flower wholesale consignment service (`accepted_service`)

One uniquely accepted B2B commercial consignment after documented preservation/handling and ownership-resale gate. Flowers are merchandise audit throughflow, not this service output identity.

- Selected flow: Completed own-account cut-flower wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: One reference is a normalization identity only. Require accepted IDs, actual stems, grades, lot mass and timing; a consignment has no universal flower count or mass.

##### Waste flows

###### Discarded cut-flower stem (`flower_residues_atomic_case`)

Conditional on independently recorded actual Discarded cut-flower stem. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `flower_residues`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded cut-flower stem
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable flower residues kg / N; cp_lots.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Require actual wet state, drainage and destination; match discarded merchandise to upstream lot amount for separate commodity loss adjustment, not discard wet mass as cultivated biomass.

###### Actual separately collected paper packaging waste (`packaging_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable packaging waste kg / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require weighed segregated stream, contamination and receiver records; exclude intact returnable containers and carried closing stocks.


###### Actual separately collected metal packaging waste (`packaging_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable packaging waste kg / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require weighed segregated stream, contamination and receiver records; exclude intact returnable containers and carried closing stocks.


###### Actual separately collected plastic packaging waste (`packaging_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable packaging waste kg / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require weighed segregated stream, contamination and receiver records; exclude intact returnable containers and carried closing stocks.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or valid activity-factor species release kg / N; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Require substance/basis/medium and measured release or matched actual activity factor; whole formulation and component species views are nonadditive, no hazard limit used as emission amount.


###### Actual separately evidenced fossil methane emitted to air (`direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or valid activity-factor species release kg / N; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Require substance/basis/medium and measured release or matched actual activity factor; whole formulation and component species views are nonadditive, no hazard limit used as emission amount.


###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or valid activity-factor species release kg / N; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Require substance/basis/medium and measured release or matched actual activity factor; whole formulation and component species views are nonadditive, no hazard limit used as emission amount.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_cohort | all inventory | Assign actual failed-order, rejected-lot and cleaning/idle burdens to the contemporaneous positive accepted cohort N using documented causality. Preserve supplier lot and sales links; accepted services never include unresolved rejects. |  |
| allocation_merchandise | merchandise and loss ledger | Do not allocate service by currency/margin or book the full traded flower purchase as consumed input. Reconcile opening, receipts, buyer returns, closing, accepted sales, supplier returns, downgrades and whole-stem discards in compatible units. Trimmings and water/respiration change require their own mass evidence. Link quantified original-gate lost-commodity amount and upstream burden once outside this service; wet discard mass is not automatically original grown-flower mass. |  |
| allocation_stock | supply rows and usable_supply_returns | For each actual supply let S be attributed opening stock plus external receipts minus closing stock including recovered closing. Internal issue is not a new purchase. Use either gross-with-outlets supply S/N plus matched usable outward returns, or consumed-only (S-usable_return)/N with matching usable return omitted from exchange totals. Never deduct a return twice, deduct waste from upstream supply or treat closing stock as an outward return. |  |
| allocation_assets | shared_assets | Attribute full asset manufacture, maintenance, replacements and end-of-life by cohort actual driver / complete lifetime driver across all consignments/nodes/periods, then divide by N once. Evidence is observed lifetime use or observed history plus evidenced remaining use and termination/EOL. State uncertainty/sensitivity and update when use changes. A complete lifecycle per-driver service is an alternative native exchange, never added to asset-equivalent quantities for the same asset. |  |
| allocation_period | all shared resources | Index periods, overlapping lots, room occupancy and service phases; sum measured burden times cohort driver / all-consumer driver for the same period. Include startup/idle/changeovers, carry stocks between periods and count replacement events once. Period sums must close to measured scope. |  |
| allocation_rejects | flower_residues; packaging_waste; wastewater; packaging_waste_paper_pack; packaging_waste_metal_pack; packaging_waste_plastic_pack; flower_residues_atomic_case | Use actual reject, supplier-return, downgrade, recovery or discard route and matched receiver. Keep physical treatment burdens once, no automatic avoided-product credit or automatic coproduct allocation for useful outlets. Complete supply-return and waste routes retain nonreturned upstream resource burdens. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | preserved_wholesale | service acceptance and merchandise audit | sales, lot and residue records | site_id; node_id; period_id; consignment_id; source_lot_id; supplier_id; ownership_evidence; buyer_id; intake_time; acceptance_time; reversal_id; species; cultivar; grade; stem_length; stem_count; net_flower_mass; mass_unit; hydration_state; drainage_time; temperature; temperature_unit; humidity; ethylene_control; opening_stems; received_stems; buyer_return_stems; closing_stems; accepted_sold_stems; supplier_return_stems; downgraded_stems; rejected_whole_stems; trimming_mass; discard_mass; loss_adjustment_link; conversion_source; receiver_id; N; commodity_dataset_id; upstream_reference_gate; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_state; original_gate_loss_basis; yield_or_conversion_evidence; yield_or_conversion_source; loss_burden_owner; already_included_scope; integration_result; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Count accepted unique B2B consignments and reconcile supplier lots, reversals, stems, measured masses and actual discard routes; no generic per-stem mass.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); stems; kg | each consignment and waste event | intake to acceptance and reporting cutoffs | all included room and handover areas | per reference flow | Ownership and acceptance documents, calibrated weighing/count audit, temperature/state logs, matched loss-adjustment integration record |
| cp_energy | preserved_wholesale | purchased electricity | meters and allocation record | site_id; node_id; period_id; consignment_id; room_id; meter_id; start_reading; end_reading; energy_unit; temperature; temperature_unit; occupancy_driver; all_consumers_driver; attributed_energy; provider_scope; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read calibrated period meters; attribute refrigeration/lighting/handling and idle/cleaning by evidenced driver including every consuming lot; reconcile provider coverage. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each meter period | receipt through handover, idle and cleanup periods | all included electrical equipment | per reference flow | Meter calibration, whole-room reconciliation and driver completeness |
| cp_fuel | preserved_wholesale | diesel supply and actual combustion | tank/equipment fuel records | site_id; node_id; period_id; consignment_id; equipment_id; fuel_id; native_unit; opening; receipts; closing_including_recovered_stock; outward_usable_return; nonburned_waste; uncontained_loss; actual_burn; burn_method; uncertainty; driver; all_consumers_driver; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure native stocks and receipts; use actual measured burn or audited exhaustive disjoint fates; link actual engine and valid species factors separately. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | L | each receipt/use/stock cutoff | all attributed handling periods | actual on-site diesel equipment only | per reference flow | Stock readings, engine/use logs, mutually exclusive fate proof and unexplained-balance investigation |
| cp_water | preserved_wholesale | supplied water and contained aqueous wastes | water meters, preparation and receiver records | site_id; node_id; period_id; consignment_id; event_id; use_id; water_source; supplied_volume; volume_unit; hydration_or_dry_state; holding_duration; collected_waste_volume; direct_discharge_volume; uptake_measurement; evaporation_measurement; composition; composition_basis; composition_source; density; density_unit; temperature; temperature_unit; receiving_medium; receiver_id; provider_scope; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual water use and distinct contained outlets. Record direct abstraction/discharge only with actual source/medium and expand exchanges; do not infer evaporation or uptake by unmatched residual. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3 | each hydration/cleaning/discharge event | intake to acceptance plus cleanup | actual preparation, buckets and cleaning points | per reference flow | Meters, preparation/quality records and containment/receiver evidence |
| cp_supplies | preserved_wholesale | treatment/packaging supplies and usable returns | SKU stock and outbound-return records | site_id; node_id; period_id; consignment_id; event_id; sku_id; material; native_unit; opening; receipts; closing_including_recovered_stock; outward_usable_return; waste; measured_native_quantity; measured_mass; unit_mass; density; density_unit; temperature; temperature_unit; active_fraction; carrier; dilution; composition_basis; composition_source; conversion_source; representation; supplier_id; receiver_id; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect native stock/issue/return evidence per SKU. Retain native upstream exchange; make any mass conversion only with actual compatible measured data, never add both views. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native SKU unit | each receipt/use/return and stock cutoff | relevant holding, packaging and cleaning periods | all actual preparation and handling points | per reference flow | SKU labels, native supplier-unit records, conversion proof and matching usable returns |
| cp_refrigerant | preserved_wholesale | fluid supply and actual component releases | equipment charge, leak, recovery and service records | site_id; node_id; period_id; consignment_id; equipment_id; event_id; fluid_id; component_id; component_mass_fraction; composition_source; opening_stock; fluid_receipts; closing_stock; initial_charge; final_charge; recovered_fluid; contained_waste; measured_release; uncertainty; driver; all_consumers_driver; N; component_fraction_basis; wholefluid_release; release_fate; release_fate_basis; release_fate_source; fluid_quantity_unit; fluid_quantity_basis; fluid_quantity_method; fluid_quantity_state; fluid_quantity_sample_time; fluid_quantity_source; retained_recovery; usable_outward_transfer; outward_recipient; contained_waste_receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; initial_charge_upstream_owner; initial_charge_dataset_coverage; makeup_supply_provenance; gross_or_consumed_view; matched_unused_supply_return; origin_substock_id; period_opening_scope; new_factory_charge_entry; factory_entry_source; opening_entry_exclusion_check; substock_matched_return | Reconcile stocks/equipment charge, supplied make-up, actual recovery and evidenced release; investigate unknown differences and expand each actual atmospheric component.  Reconcile retained recovery, usable outward transfer, contained waste and atmospheric species as exclusive actual fates; expand Product usablefluid and Waste containedfluid independently by actual mixture/state/receiver. Initial-charge production already in complete asset dataset retains that upstream owner, not a second make-up supply. Recovery from factory charge cannot reduce unrelated current make-up. Consumed-only subtraction/omitted matched outlet applies only to same-scope standalone unused supply, never negative input. Declare shared or independent native unit/basis/method/state/sample-time/source for every fluid quantity. Initial charge enters as period-opening OR new-equipment factory-charge entry, mutually exclusive without duplicate entry; consumed-only unused-supply subtraction matches an origin-tagged standalone substock and its return, never crosses factory-charge/opening/make-up provenance. | kg | each service/leak/recovery event and cutoff | whole assigned equipment periods | all relevant refrigeration equipment | per reference flow | Service reports, weighing/charge records, recovery certificates and mixture evidence |
| cp_provider | preserved_wholesale | complete external service jobs | contract and physical-completion records | site_id; node_id; period_id; consignment_id; provider_id; contract_id; completed_job_id; completion_gate; quantity; native_unit; upstream_scope; included_resources; excluded_resources; overlap_owner; driver; all_consumers_driver; N | Verify actually completed provider job and full resource scope; noncounted providers require actual native exchange unit and separate support. | Item(s); actual provider native unit | each completed contract event | actual service reporting period | declared external/onsite responsibility | per reference flow | Contract scope, actual physical delivery and no-overlap checklist |
| cp_assets | preserved_wholesale | complete-life assets | asset inventory and lifetime driver record | site_id; node_id; period_id; consignment_id; asset_id; asset_native_unit; manufacturing_dataset; maintenance; replacements; end_of_life; observed_history_driver; evidenced_remaining_driver; lifetime_driver; cohort_driver; all_consumers; termination_state; remainder_source; uncertainty; provider_overlap; N; driver_id; cohort_driver_unit; lifetime_driver_unit; observed_history_driver_unit; evidenced_remaining_driver_unit; sensitivity_evidence; update_evidence | For each asset collect complete manufacture/maintenance/replacement/end-of-life scope; allocate cohort driver over full lifetime driver across all consumers/periods, then divide by N once. | Item(s); native asset/service unit | each acquisition/maintenance/replacement and period | observed history plus evidenced remainder to termination | all included shared cold-room and handling assets | per reference flow | Asset registers and lifespan/remainder sources, sensitivity, replacement/EOL and provider coverage |
| cp_freight | preserved_wholesale | covered goods/supply/waste transport | trip and provider scope records | site_id; node_id; period_id; consignment_id; transfer_id; mode; load_mass; mass_unit; distance; distance_unit; actual_route; refrigeration_scope; empty_return_scope; provider_id; provider_dataset; overlap_owner; N; load_mass_conversion_factor; load_mass_conversion_unit; load_mass_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; attribution_share; cohort_driver; all_consumers_driver; driver_unit | Use actual compatible load mass and distance by assigned leg; reconcile embedded refrigeration, carrier service and commodity transport ownership. | kg*km | each actual leg | declared intake-to-handover and waste logistics responsibility | only explicitly included legs | per reference flow | Delivery weights, route proof, mode and carrier coverage statements |
| cp_waste | preserved_wholesale | packaging and other actual wastes | weighing and receiving treatment records | site_id; node_id; period_id; consignment_id; waste_id; material; quantity; native_unit; wet_state; contamination; receiver_id; treatment_gate; treatment_dataset; transport_owner; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure segregated actual outputs and verify receiving treatment and transport ownership; expand other chemical/container/fluid wastes by actual state. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual stream native unit | each transfer | all attributed holding/cleanup periods | actual collection and receiving treatment boundary | per reference flow | Weighbridge/container evidence and receiving treatment confirmations |
| cp_emissions | preserved_wholesale | identified direct environmental species | measurement or matched activity-factor record | site_id; node_id; period_id; consignment_id; source_event_id; species; medium; measured_release; release_unit; actual_activity; activity_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_source; uncertainty; N; fate_basis; factor_complete; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Identify actual substance and medium, use measured release or valid matched-activity species factor. A complete species factor is not multiplied by composition/fate a second time. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg | each actual source/release event | all attributed preservation/handling/cleanup periods | only actual direct sources, excluding provider-embedded releases | per reference flow | Measurement or justified factor source, activity match and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | all inventory rows | Divide the measured or justified attributed physical quantity of each exchange by N once; fixed accepted_service is 1 Item(s). | attributed quantity; N; row collection protocol | quantity per reference flow |  |
| period_share | electricity; provider_services; freight; electricity_ac | Per period assign measured complete scope times cohort compatible driver divided by all-consumer driver; sum periods without overlap, then apply normalize_service. | period measured quantity; cohort driver; all-consumer driver; scope ownership | attributed period quantity |  |
| asset_share | shared_assets | Complete-asset-equivalent cohort amount equals cohort lifetime-compatible driver divided by total lifetime driver; apply normalize_service once. A lifecycle-complete per-driver provider quantity is an alternative view only. | asset life cycle; cohort driver; full-life driver; replacements; EOL; cp_assets | attributed asset equivalents |  |
| stock_supply | diesel_supply; treatment_supplies; packaging_supplies; usable_supply_returns; packaging_supplies_pe_film | S = attributed opening + external receipts - closing including recovered closing. Record gross-with-outlets S and matched usable outward return OR consumed-only S minus matched usable return, never both. Fuel burn remains a separate measured/audited fate. | opening; receipts; closing; usable outward return; representation; actual burn; cp_fuel; cp_supplies | attributed supply and nonadditive return representation |  |
| merchandise_loss_link | flower_residues; flower_residues_atomic_case | Use lot genealogy and compatible original-gate stem/physical amounts to quantify excluded lost-merchandise upstream adjustment in the linked commodity system. Record whole-stem versus recut/water states and proof of exactly-once integration; do not use hydrated waste mass as original biomass. | source lot; opening; receipts; closing; sold; returns; downgrade; rejected stems; trims; hydration state; upstream dataset; loss-adjustment record; cp_lots | merchandise loss audit and separately linked commodity burden |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all concrete exchanges | Verify actual flow UUID, property/unit group and gate before final dataset publication; preserve actual unresolved gaps without a substitute. | Full actual detail/support and compatibility evidence |
| quality_merchandise | cp_lots | Reconcile stems and compatible measured masses with hydration/state/trim differences; positive accepted N and individual ownership/resale evidence. | Lot genealogy, weighing/count logs and buyer acceptance |
| quality_coldchain | preserved_wholesale | Document actual species/grade conditions, excursions and agreed acceptance action; no source-example threshold treated as a universal compliance guarantee. | Time-temperature/humidity and inspection/treatment records |
| quality_complete | all inventory | Actual utilities, supplies, assets, providers, freight, waste and actual environmental intakes/outlets accounted once; absence claims need observed scope evidence. | Scope ledger and period/driver reconciliation |
| quality_chain | whole-chain integration | Complete linked original-gate commodity production/loss adjustment and treatment-boundary matching exactly once; stand-alone service cannot claim the full flower footprint. | Downstream integration and receiving dataset checks |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| water_supply | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_supply` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| treatment_supplies | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `treatment_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| packaging_supplies | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packaging_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| refrigerant_supply | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_supply` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| provider_services | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_assets | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| usable_supply_returns | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| usable_recovered_refrigerant | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_recovered_refrigerant` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| flower_residues | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `flower_residues` under `cp_lots`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `flower_residues_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_lots`; actual source-linked native records |
| packaging_waste | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packaging_waste` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| wastewater | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `wastewater` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| contained_refrigerant_waste | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_refrigerant_waste` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| direct_species | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_emissions`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_emissions`; actual source-linked native records |
| refrigerant_release | preserved_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_release` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Metered room, lighting and handling electricity attributable to the accepted consignment cohort; exclude electricity already inside a complete provider service.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased electricity for refrigerated wholesale handling
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable kWh / N; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Require room/ambient temperature, occupancy and period-resolved metering with allocation evidence, including idle/changeover energy; no universal kWh per stem.

#### water_supply

Only actual supplied product water, separately metered by use; no assumed hydration for dry-held species. Environmental abstraction requires a separate actual source exchange.

Residual inventory requirement after the independently identified cases `water_supply_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased water for actual hydration and cleaning
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable supplied water m3 / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Require intake/use/outlet records, holding and drainage times and water state; plant uptake, wastewater and evaporation are not one residual.

#### treatment_supplies

Conditional actual formulated preparations, each SKU/composition/state as a separate concrete exchange; no universal preservative or silver treatment is prescribed.

- Identity requirement: Actual commercial hydration or sanitation preparations
- Flow property / unit: Mass / kg
- Amount rule: Attributable supplied preparation kg / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual label-approved use, active fraction, carrier, dilution, native purchase unit and measured mass/density conversion; ingredient and whole formulation views are nonadditive.

#### packaging_supplies

Actual mass-accounted sleeves, paper and cartons supplied to this operation. If the upstream exchange uses Count/Area/Length, expand that native-unit exchange rather than assume a mass conversion.

Residual inventory requirement after the independently identified cases `packaging_supplies_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Mass-accounted disposable floral wrapping and cartons
- Flow property / unit: Mass / kg
- Amount rule: Attributable packaging supply kg / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require item/material/native-unit and stock/return evidence; measured item mass or geometry/density for a separate mass view, with no duplicate exchange.

#### refrigerant_supply

Record only attributable purchased/make-up fluid by actual mixture and composition; this supply is not an estimate of atmospheric release.

- Identity requirement: Actual refrigeration fluid make-up supplied
- Flow property / unit: Mass / kg
- Amount rule: Attributable refrigerant supplied kg / N; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Require stock, charging, recovery, equipment charge and service records with component mass fractions; no generic annual leakage factor.

#### provider_services

Only a contractually defined completed counted job with disclosed full upstream coverage; time, electricity, freight or mass-based contracts require their actual native-unit exchanges.

- Identity requirement: Complete counted external wholesale-support service jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Attributable completed provider jobs / N; cp_provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Require provider scope and physical completion, boundary, unit and coverage overlaps; price, invoices or labor hours alone do not establish one complete service.

#### shared_assets

Cold rooms, refrigeration plant, buckets, trolleys and IT/handling assets shared across consignments and periods; each actual asset requires its native full-life inventory.

- Identity requirement: Attributed complete-life wholesale asset equivalents
- Flow property / unit: Count / Item(s)
- Amount rule: Attributed complete asset equivalents / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Require manufacture, maintenance, replacements and end-of-life with observed lifetime driver or observed history plus evidenced remainder; no assumed life or double-counted rental.

#### freight

Conditional actual inbound/outbound and return legs assigned once by agreed provider/commodity/service boundaries. Cold transport must cover its energy and refrigeration burdens once.

- Identity requirement: Actual freight activity within wholesale responsibility
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Attributable actual kg*km / N; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Require mass including actual load basis, distance and transport mode, refrigeration/empty-return scope and provider coverage; not order count times guessed distance.

#### usable_supply_returns

Only actual unused supplies returned to an outside owner; closing stock and internal recirculation are not outward returns. Native-count reusable container movements remain in the asset ledger, expanded if independently transferred.

- Identity requirement: Usable unconsumed mass-accounted supplies returned outward
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable outward unused supply kg / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require matched original supply and receiving owner/state with selected gross-with-outlets or consumed-only representation; never subtract twice.

#### usable_recovered_refrigerant

Only real usable fluid transferred outward: expand separate Product exchanges by actual mixture/state, initial-charge or standalone make-up provenance and recipient. Retained recovery is closing stock, not an outlet; no automatic substitution credit.

- Identity requirement: Actual usable recovered refrigerant transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed mass / N; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Require measured outward mass, mixture composition, charge provenance/coverage and recipient. Consumed-only omission applies only to matched same-scope standalone unused supply; factory-charge recovery cannot reduce unrelated make-up or produce negative input.

#### flower_residues

Separate whole rejected stems from trimming residues by lot and actual receiving route; saleable downgrades and supplier returns are merchandise audit exits, not automatically Waste.

- Identity requirement: Discarded flowers and cut-stem residues at actual treatment handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable flower residues kg / N; cp_lots.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Require actual wet state, drainage and destination; match discarded merchandise to upstream lot amount for separate commodity loss adjustment, not discard wet mass as cultivated biomass.

#### packaging_waste

Expand actual material and receiving treatment; no avoided-material credit from mere collection, and no automatic treatment identity from bin color.

Residual inventory requirement after the independently identified cases `packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Separated used packaging at actual waste handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable packaging waste kg / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require weighed segregated stream, contamination and receiver records; exclude intact returnable containers and carried closing stocks.

#### wastewater

Actual collected aqueous wastes to a verified treatment provider, with composition including any treatment chemistry; not a direct environmental release.

- Identity requirement: Contained spent hydration and cleaning water to treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable contained aqueous waste m3 / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Require measured volume, composition, density where converting, containment and receiver. Direct discharge needs actual receiving medium and dedicated water/species exchanges.

#### contained_refrigerant_waste

Expand actual discarded contained fluid as separate Waste exchanges by actual mixture/state and receiving-treatment path; mutually exclusive with usable transfer, retained recovery and atmospheric component releases.

- Identity requirement: Actual contained refrigerant waste to receiving treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed mass / N; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Require measured handed-over mass/composition, receiver transport/treatment and provider coverage once; recovered quantity or charge imbalance is not automatically waste or atmospheric release.

#### direct_species

Conditional expansion by actual species and air/water/soil medium for verified combustion, flower respiration, treatment or spill releases; no generic VOC/CO2 default from flowers or diesel supply.

Residual inventory requirement after the independently identified cases `direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual identified non-refrigerant species released to declared medium
- Flow property / unit: Mass / kg
- Amount rule: Measured or valid activity-factor species release kg / N; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Require substance/basis/medium and measured release or matched actual activity factor; whole formulation and component species views are nonadditive, no hazard limit used as emission amount.

#### refrigerant_release

Expand each measured released component, not a generic refrigerant mixture or charged amount; recovered fluid and contained waste are separate actual fates.

- Identity requirement: Actual refrigerant component released to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or audited component release kg / N; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Require full charge/recovery/stocks/remaining charge reconciliation and uncertainty; unexplained imbalance must be investigated, not automatically called atmospheric leakage.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_service | Require positive unique accepted N, actual B2B ownership-resale gate and full reference qualifiers; no failed/cancelled consignment counted as accepted output. |  |
| validate_preservation | preserved_wholesale | Require actual intake usable state, maintained condition, species-specific route, acceptance gate and declared excursion/reject decisions, with source scope respected. | umass-cutflower-handling; ucdavis-gladiolus-2004 |
| validate_units | all inventory | Native exchange units, measured conversions and same N must align; no count=kg, order=tonne, price=service, energy/Time property substitution or implicit mixture species identity. |  |
| validate_paths | all returns/rejects | Every rejected/downgraded/returned/discarded lot has a producing responsibility and actual receiver/path; no duplicate accepted service, automatic waste classification or substitution credit. |  |
| validate_scope | all shared resources | Close period driver totals and provider/native-unit/full-life asset coverage including maintenance/replacement/EOL; missing life/remainder/owner prevents final package completeness. |  |
| validate_water_release | actual environmental exchanges | Containment, direct medium, actual substance, activity/factor/composition/fate basis and uncertainty must be known. No supplier SDS, added water, charged refrigerant or unexplained imbalance alone proves emitted quantity. |  |
| validate_chain | service and linked commodity system | No cultivation burden for any merchandise in this add-on; require separately quantified upstream lost-commodity burden plus saleable-product burden exactly once and disjoint logistics/treatment before whole-chain completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual exchange identities and quantitative evidence are verified |
| downstream_use | Physical wholesale-service add-on to a compatible cut-flower commodity chain, referenced to a declared accepted consignment |
| allowed_use | Declared own-account B2B refrigerated cut-flower route and recorded quality/quantity/time stratum with transparent unresolved limitations |
| excluded_use | Whole cut-flower footprint by itself; retail or cultivation; potted plants; fee agency; currency trade margins; universal stem/tonne/vase-life conversion |
| required_metadata | All required reference qualifiers; service and supplier gates; positive N; periods/room/site; native exchanges; loss-adjustment and overlap ownership; complete asset life evidence |
| required_quality_disclosure | Identity and support gaps; measurements/conversions; conditional omissions; Range evidence needs; species-specific condition/acceptance limits; provider/commodity loss and uncertainty coverage |
| update_trigger | Changed species/route, room energy mix or equipment, treatment/packaging, provider or disposal scope, asset lifetime/usage, measured loss structure, reference gate or evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | UNSD. CPC Version 3.0 explanatory notes, division 61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Own-account wholesale/B2B service classification, not physical inventory or emissions factors. |
| umass-cutflower-handling | extension_guidance | UMass Amherst Extension. Harvesting and Handling Cut Flowers; https://www.umass.edu/agriculture-food-environment/greenhouse-floriculture/fact-sheets/harvesting-handling-cut-flowers | Species-dependent temperature/hydration and ethylene/sanitation/condensation quality considerations only; no universal recipe, regulatory claim or loss/energy default. |
| ucdavis-gladiolus-2004 | extension_guidance | Reid, M. S. (2004). Gladiolus. UC Davis Postharvest Research and Extension Center; https://postharvest.ucdavis.edu/produce-facts-sheets/gladiolus | Limited gladiolus example of maturity, mechanical condition, orientation, cold-chain and cultivar sensitivity; no transfer of thresholds to all flowers. |
