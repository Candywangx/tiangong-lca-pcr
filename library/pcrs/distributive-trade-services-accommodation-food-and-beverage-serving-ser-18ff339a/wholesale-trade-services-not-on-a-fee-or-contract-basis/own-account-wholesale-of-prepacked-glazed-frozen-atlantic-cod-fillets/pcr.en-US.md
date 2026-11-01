---
pcr_id: pcr.own-account-wholesale-of-prepacked-glazed-frozen-atlantic-cod-fillets
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of prepacked glazed frozen Atlantic cod fillets

## 1. Scope and Applicability

This PCR defines a merchant-owned physical wholesale consignment service for Gadus morhua (Atlantic cod) fillets that the actual supplier has already fully frozen, glazed, primary-sealed/packed and released before the declared receipt gate. The merchant takes ownership and resale risk, preserves the received usable frozen state in operated freezer storage, handles intact packs and completes accepted resale to a business buyer. Actual thermal records, seal/package condition and agreed product acceptance define the maintained after-state and commercial handover.

Exclude live/caught whole-fish production, slaughter/filleting, primary freezing, new glazing, opening/repacking primary packs, thawing/refreezing, cutting, ingredient treatment, retail, agency fees and independently sold storage-only service. An actual thawing/damage event requires recorded quarantine, return, disposal or a separately reviewed processing responsibility, not assumed re-release as normal frozen stock. Do not infer that a live whole-cod producer dataset includes filleting, freezing, glaze or primary-pack manufacture.

This service add-on excludes all upstream commodity production, inherited glaze and primary packaging, including their lost fraction. Actual assigned source-gate demand and existing loss/state coverage are linked separately once before a whole-chain claim. Actual service handling and declared waste receiving/treatment remain here once. Historical Codex and FAO documents support physical product/state distinctions; current actual supplier release, applicable requirements and buyer criteria must be supplied. No universal numeric storage regime, glaze percentage, AQL, automatic histamine criterion or testing-every-pack duty is imposed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.own-account-wholesale-of-prepacked-glazed-frozen-atlantic-cod-fillets` |
| classification_refs | CPC3 `61024`; narrower supplier-released frozen/glazed/primary-prepacked Gadus morhua fillet wholesale service |
| covered_products | Own-account B2B consignment service maintaining already supplier-released glazed sealed frozen Atlantic cod fillets |
| excluded_products | Other species/live whole fish; slaughter/filleting/freezing/glazing/repacking/thaw-refreeze/processing; retail/agency/storage-only services |
| representative_product | Completed wholesale service for an actual sealed frozen cod-fillet consignment with net-fish/glaze/package and thermal-time qualifiers |
| production_route | Ownership receipt at complete frozen/glazed/primary-packed supplier gate -> maintained-frozen storage/handling -> accepted B2B resale handover |
| market_state | Counted service; net fish, inherited glaze, primary/outer packaging and actual transported load remain separate merchandise audit quantities |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account wholesale consignment of prepacked glazed frozen Atlantic cod fillets |
| How much | 1 actually completed accepted commercial consignment service |
| How well | Actual supplier-released species/fillet/glaze/primary-seal state maintained frozen and accepted at the real commercial gate; no safety or future shelf-life guarantee inferred |
| How long or cycle | Actual receipt-to-accepted resale freezer/handling intervals with separate stock, reporting and asset service periods |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed own-account wholesale consignment of prepacked glazed frozen Atlantic cod fillets |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | consignment_id; ownership_resale_risk; business_buyer; species_Gadus_morhua; supplier_release_and_gate; net_fish_mass_method; glaze_identity_mass_basis; primary_seal_pack_state; outer_pack_and_transport_load; actual_frozen_temperature_history; actual_start_end_duration_unit; quality_acceptance_gate; origin_site_period; provider_freight_treatment_scope; refrigerant_boundary_owner; source_gate_commodity_adjustment |

N > 0 counts actual unique commercially accepted consignments after actual reversals. Packs, trucks, invoice lines, net fish kg and glaze percentage are not interchangeable with this service count. Preserve real contract/handover unit, actual quantity/state/time and all required qualifiers in actual package metadata; no artificial paperwork splits dilute burden.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | reference product | Number of items | Item(s) | Count actual accepted consignment IDs and positive N, distinct from packs/net-fish mass/transport load and freezer-time. |
| fish_glaze_pack | merchandise audit and discarded_food_packs; discarded_food_packs_atomic_case | Mass and actual pack count/state | kg; actual pack count | Keep net fish excluding glaze and packaging separate from glaze ice, primary packaging, secondary/tertiary material and actual cargo load. Use traceable supplier evidence and applicable representative verification, not universal fractions or destructive testing of every pack. |
| state_change | fish/glaze/stock audit | Actual state-specific mass | kg and actual thermal-time units | Glaze sublimation, tissue dehydration, broken seal, fish discard, analytical sample removal and pack return are different events. Same-state/lot evidence and uncertainty are required; missing gross kg cannot be assigned to any one fate by assumption. |
| native_units | all inventory rows | Actual compatible property | Actual native unit | Preserve actual native provider/material/asset units; count/area/volume/mass conversions require state-specific factor/unit/basis/source and density/temperature if applicable. Component views remain non-additive. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-released already frozen/glazed/primary-sealed cod fillets, species, net-fish/glaze/package composition, complete inherited source-gate coverage and thermal/quality evidence |
| starting_condition_role | Complete received commodity state for a service add-on, not a new primary-freezing/glazing step or burden-free fish origin |
| product_classification_scope | Own-account frozen Gadus morhua fillet wholesale subset of CPC61024; not live-fish production |
| recursive_input_rule | Do not create consumed fish/glaze/primary-pack production exchanges in this service or recurse the same consignment into itself. Actual outsourced storage/support requires a separate non-overlapping responsibility and gate. |
| upstream_dataset_requirement | Actual service supplies/providers/asset full life plus separately matched complete frozen/glazed/primary-packed commodity gate; assemble any missing capture/farm/slaughter/fillet/freezing/glazing/packing stage outside service once |
| disclosure | Supplier release/state and stage coverage, actual netfish/glaze/pack/load basis, sample evidence, thermal/stock/return/discard events, refrigeration/asset/provider/transport/treatment scope, unknowns and commodity owner/adjustment |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_only | frozen_cod_wholesale | All commodity fish production, inherited glaze and primary packaging including their lost upstream burden remain outside service exchanges; link actual assigned source-gate quantity/loss coverage separately before whole-chain use. Include actual service fates and declared receiving treatment/disposal once. |  |
| frozen_preservation | frozen_cod_wholesale | Before-state is the actual complete supplier-released frozen/glazed/sealed fillet lot; preserve usable frozen/seal/quality state through actual freezer operation to buyer acceptance. Any actual thaw/damage needs real quarantine/return/disposal or reviewed processing, not silently assumed ordinary release. | codex-frozen-fillets-190 |
| net_and_glaze | merchandise audit | Distinguish food net contents from external glaze and packaging using actual supplier/lot evidence and appropriate verification. Intrinsic fish-tissue water remains part of fish net mass; net fish is not dry solids. Analytical deglazing sample preparation is not a service-wide re-glazing/thaw/refreeze process. No universal sampling or quantitative quality threshold is copied from the historical source. | codex-frozen-fillets-190 |
| inherited_protection | frozen_cod_wholesale | Inherited ice glaze can sublimate while protecting tissue; packaging barrier and transport levels have distinct roles. Actual mass/state evidence must distinguish tissue dehydration, ice loss and packaging change; inherited glaze is not new utility water. | fao-frozen-fish-after-freezing |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| frozen_cod_wholesale | Maintained-frozen cod fillet preservation and own-account wholesale | required | Actual merchant ownership/resale and freezer responsibility for complete supplier-released cod fillet packs | Bounded maintained-frozen preservation node; usable supplier state -> actual storage/handling -> accepted B2B consignment, actual rejects/returns/fates retained | `accepted_service` |

The node owns real preservation without manufacturing another fillet or fictional cooling-service reference. Freezer operation can serve overlapping lot periods; actual unloading/loading, inspection/sample activity, cleaning/defrost and failed/rejected stock retain event/lot/period IDs. No accepted count arises from a rejected pack, internal location change or duplicate invoice. A sampled opened pack and any sample waste are separately recorded actual events, not a transformation of every sealed sale pack.

### Process: Maintained-frozen cod fillet preservation and own-account wholesale (`frozen_cod_wholesale`)

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

Range evidence need: Need actual meter intervals, incoming frozen state, room/lot load, thermal history and all-consumer drivers. Independent guards require matching freezer/load/climate/period scope, not a fixed kWh per net-fish kg.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed facility water per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/issue purpose and interval, sample scope if applicable, supplier coverage and water fates. Inherited glaze loss, fish moisture and wastewater are not measured utility water supply.

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

Range evidence need: Need actual SKU/formulation/concentration, stock/return and conversion evidence plus receiver/release state. Applied formulation or safety limit is not a direct emission quantity.

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

Range evidence need: Need actual grade, opening/receipts/closing and usable returns, density/temperature conversions if used, and disjoint burn/nonburned fates. No delivered-fuel-equals-burn default.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wholesale consignment of prepacked glazed frozen Atlantic cod fillets (`accepted_service`)

One actual accepted B2B resale consignment maintained frozen from complete supplier-released glazed/sealed fillet gate. Net fish, glaze, primary/outer packaging and transport load are distinct qualifiers, not the identity of this counted service.

- Selected flow: Completed own-account wholesale consignment of prepacked glazed frozen Atlantic cod fillets
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Count defines normalization only; require actual species Gadus morhua, supplier release/gate, net-fish/glaze/pack basis, thermal/time/seal state and commercial acceptance. No fixed kg, glaze fraction or storage duration per count.

##### Waste flows

###### Discarded sealed glazed frozen Atlantic cod-fillet pack (`discarded_food_packs_atomic_case`)

Conditional on independently recorded actual Discarded sealed glazed frozen Atlantic cod-fillet pack. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_food_packs`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded sealed glazed frozen Atlantic cod-fillet pack
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed discarded food packs per reference flow; cp_fish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fish`

Range evidence need: Need actual receiver/native amount and constituent basis, actual supplier-gate equivalent and treatment scope. A thaw alarm, quality reject or gross-mass deficit does not prove a discarded net-fish kg amount.

###### Actual separately collected paper packaging waste (`other_wastes_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other wastes per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual fraction, quantity/conversion and treatment receipt; inherited primary-pack production is not a new service input just because that pack ultimately becomes waste.


###### Actual separately collected metal packaging waste (`other_wastes_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other wastes per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual fraction, quantity/conversion and treatment receipt; inherited primary-pack production is not a new service input just because that pack ultimately becomes waste.


###### Actual separately collected plastic packaging waste (`other_wastes_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other wastes per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual fraction, quantity/conversion and treatment receipt; inherited primary-pack production is not a new service input just because that pack ultimately becomes waste.

##### Elementary flows

###### Actual water-vapour release from identified inherited or facility sources (`water_vapour_releases`)

Only actual compatible measurement/model establishes vapour and source. Glaze-ice sublimation, fish-tissue dehydration, room frost/defrost and utility-water evaporation are different roles; no gross deficit is automatically water vapour or lost fish.

Only actual independently evidenced H2O vapour directly released to air, with actual source, state and native kgH2O. A mass deficit, liquid melt, contained wastewater, pollutant-in-water or unexplained stock imbalance is not vapour evidence. Preserve inherited commodity provenance and non-additive audits; no new water supply, default evaporation or upstream/provider duplicate. Other receiving media retain separate identities.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed water vapour releases per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual source/state/species/medium, interval and complete measurement/model operands with uncertainty. Preserve inherited glaze provenance and non-additive ice/water/pack audit; do not create a new glazing-water input.

###### Actual separately evidenced fossil carbon dioxide emitted to air (`other_releases_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other releases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or actual compatible activity/factor plus composition/fate/unit/source if relevant. Product supply, safety limit, sampling result or unknown fish stock is not an emission amount.


###### Actual separately evidenced fossil methane emitted to air (`other_releases_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other releases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or actual compatible activity/factor plus composition/fate/unit/source if relevant. Product supply, safety limit, sampling result or unknown fish stock is not an emission amount.


###### Actual separately evidenced nitrous oxide emitted to air (`other_releases_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other releases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or actual compatible activity/factor plus composition/fate/unit/source if relevant. Product supply, safety limit, sampling result or unknown fish stock is not an emission amount.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| operating_attribution | frozen_cod_wholesale | Assign actual event/submeter burdens first. Shared refrigeration/room/support requires compatible evidenced thermal/load/occupied-volume-time drivers across ALL real consumers, with idle/defrost/cleaning and rejected/returned stock retained. Explain the driver and divide attributed total by positive accepted N once; net-fish kg alone or equal jobs/revenue are not automatic drivers. |  |
| asset_attribution | shared_assets | Use complete manufacture, maintenance, actual replacements and end-of-life with actual used / compatible lifetime driver across all consumers/periods. Lifetime driver is observed or observed history plus evidenced remaining use/termination, uncertainty and sensitivity. Choose either asset-equivalent fraction / N or lifecycle-complete provider-native service / N, not both or twice-normalized. Factory charge already inside asset scope has its upstream owner there. |  |
| supplies_and_returns | actual operating supplies | For each actual standalone native SKU/state S = attributed opening + net external receipts - closing. Choose gross-with-outlets S / N and actual usable external return, OR consumed-only (S - MATCHED usable external return) / N and OMIT that matched return exchange. Closing includes recovered retained stock; wastes/leaks retain supply burden. Internal transfers/inherited fish glaze/primary packs are not new operating purchases. |  |
| refrigerant_origin | all refrigeration roles | A recovered fluid may originate from factory charge already carried by the asset dataset. NEVER subtract that export from unrelated current makeup or create negative supply. Only proven same-scope standalone stock may use consumed-only subtraction with matched return omitted; otherwise keep actual recovered Product transfer/no automatic credit and retain original asset/charge burden owner. Internal recovery/retained bottles remain inside closing stock. |  |
| commodity_interface | fish/glaze/primary-pack memorandum | Keep complete supplier-released frozen/glazed/primary-packed commodity manufacture outside service. Trace actual source-gate quantity assigned to accepted consignments, closing stock, useful returns/exits and proven discard/state-change shares with original-state/unit/conversion evidence. Net fish, inherited glaze and packaging have different bases: glaze sublimation is not automatically lost net fish and present gross deficit is not a source-gate loss quantity. Reconcile any identical loss/stage coverage already embedded in the commodity baseline, add missing assigned demand only once, and do not duplicate service treatment. A live/caught-fish-only dataset requires missing slaughter/fillet/freezing/glaze/pack stages assembled outside this add-on. |  |
| outlets | all actual outlets | No automatic avoided-product/material/waste-treatment credit from recovered refrigerant, unused supplies, rejected fish or package return. A useful downgraded food exit needs actual state/receiver and remains merchandise audit, not an extra completed wholesale output. Unknown disposal/receiver/commodity attribution blocks full-chain finalization. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | frozen_cod_wholesale | accepted_service | Actual supplier-state and commercial acceptance ledger | site_id; campaign_id; period_id; consignment_id; contract_id; business_buyer; ownership_start; resale_risk; supplier_id; supplier_gate; species; scientific_name; fillet_presentation; supplier_release; supplier_processing_coverage; source_lot_ids; primary_seal_state; actual_net_fish_mass; mass_unit; glaze_identity; glaze_mass; glaze_basis; primary_pack_mass; outer_pack_mass; actual_received_load; intake_temperature; temperature_unit; actual_start; actual_end; time_zone; duration; duration_unit; thermal_records; quality_criteria; acceptance_record; reversal_id; N | Verify actual complete supplier-released frozen/glazed/sealed species/state and merchant resale to B2B acceptance. Retain actual thermal/package/quantity evidence and do not create counts from invoice/pack splits. | Item(s) | Each actual consignment/reversal | Actual receipt-to-accepted handover periods | Actual merchant freezer and commercial buyer gate | per reference flow | Supplier release/stage scope, ownership, measured/verified state and commercial acceptance |
| cp_fish | frozen_cod_wholesale | fish/glaze/pack memorandum and discarded_food_packs | Lot/state/component stock and representative verification ledger | site_id; room_id; campaign_id; period_id; consignment_id; lot_id; event_id; event_time; time_zone; SKU; scientific_species; pack_count; pack_unit; primary_pack_id; seal_state; gross_pack_mass; outer_tare; primary_tare; mass_unit; net_fish_mass_excluding_glaze; net_fish_method; net_fish_evidence_source; glaze_ice_mass; glaze_composition; glaze_mass_basis; inherited_water_origin; tissue_state; temperature; temperature_unit; room_interval_start; room_interval_end; duration; duration_unit; supplier_label_basis; sampling_plan; sample_size; sample_unit; sample_selection; verification_method_version; sampled_net_fish; sampled_glaze; sampled_tare; scale_calibration; sample_uncertainty; analytical_sample_removal; sample_receiver_fate; opening_stock; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; supplier_returns; useful_other_exit; closing_stock; actual_discarded_pack_quantity; discard_native_unit; discard_composition_basis; discard_receiver; discard_treatment_coverage; glaze_state_change; tissue_dehydration; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; source_gate_quantity; source_gate_unit; source_gate_state; source_gate_dataset; source_gate_conversion_method; source_gate_conversion_factor; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_source; predecessor_stage_coverage; missing_prewholesale_stage; stage_owner; baseline_loss_coverage; commodity_adjustment_owner; commodity_adjustment_status; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Reconcile actual intact pack counts and compatible fish/glaze/package states, supplier evidence and appropriate representative verification; preserve sampling provenance and uncertainty without testing every sale pack. Track actual sample removal/waste, all stock/returns/discards and source-gate demand separately; do not infer a component fate from total shortage. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual pack count; kg on declared component/state basis | Each stock/return/dispatch/discard and actual sample/thermal event | All actual stock/freezer and commodity-link periods | Actual supplier/lot/primary pack and actual receiving state | per reference flow | Traceable release, scale/tare/component/sample evidence, actual receiver and original-state supplier coverage |
| cp_energy | frozen_cod_wholesale | electricity and actual fuel burn | Actual freezer and support meter ledger | site_id; room_id; campaign_id; period_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; incoming_product_thermal_state; ambient_temperature; temperature_unit; compressor_fan_defrost_scope; thermal_load_evidence; occupied_volume; volume_unit; occupancy_duration; occupancy_unit; actual_driver_used; driver_used_unit; all_consumer_driver; all_consumer_driver_unit; idle_cleaning_scope; actual_burn; burn_unit; burn_method; carried_closing; usable_nonburned_return; contained_nonburned_waste; unrecovered_nonburned_loss; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual maintained-frozen operation and actual burn. Attribute only actual non-overlapping room/handling scope using documented all-consumer driver; primary freezing/glazing recooling belongs upstream. Burn reconstruction needs complete disjoint native fates and unknown-loss investigation. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy or fuel unit | Each actual meter/operation interval | Whole actual freezer/service reporting intervals | All included room/handling/support consumers | per reference flow | Meter calibration, actual thermal/use evidence and full energy/provider/burn coverage |
| cp_refrigerant | frozen_cod_wholesale | refrigerant_supply, recovered_refrigerant, spent_refrigerant and refrigerant_releases | Original-charge and operating-fluid full-fate ledger | site_id; system_id; period_id; consignment_id; event_id; event_time; time_zone; boundary_scope; chemical_or_blend; composition; composition_basis; composition_source; mass_unit; installed_opening; container_opening; external_net_receipts; receipt_gross; receipt_tare; installed_closing; container_closing; internal_charge; internal_recovery; usable_external_recovery; contained_external_waste; other_external_handoff; measured_release; measurement_method; release_species; receiving_medium; release_interval; factor; factor_unit; factor_basis; factor_source; unresolved_balance; uncertainty; receiver; treatment_coverage; supplier_coverage; factory_charge_dataset; asset_manufacture_coverage; original_charge_owner; operating_makeup_owner; recovered_charge_provenance; matched_standalone_supply_lot; matched_standalone_quantity; recovery_netting_eligibility; omit_matched_return_exchange; actual_driver_used; driver_used_unit; all_consumer_driver; all_consumer_driver_unit | Weigh actual chemical/blend on one explicitly bounded installed-system plus applicable-container interval; internal charge/recovery cancels. Preserve original factory/asset versus standalone makeup origin, all external fates and uncertainty. Unknown balance is investigated, not automatically emitted; recovered factory charge cannot offset unrelated makeup. | kg actual chemical/blend; separately identified species kg | Every charge/recovery/maintenance/release and stock boundary | Actual system/container service intervals | Actual installed/storage boundary and external receiver | per reference flow | Chemical detail, actual charge/recovery/stock/receiver and explicit upstream-owner coverage |
| cp_supplies | frozen_cod_wholesale | facility_water, new_outer_packaging, operating_supplies, fuel_supply and usable_supply_returns | Native SKU/stock and inherited-versus-new ledger | site_id; campaign_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening_quantity; receipt_gross; receipt_tare; receipt_net; closing_quantity; recovered_closing; usable_external_return; contained_waste; uncontained_loss; inherited_or_new; packaging_level; intact_primary_seal; service_owned_outer_scope; matched_input_id; external_return_id; return_match; gross_or_consumed_view; omit_matched_return_exchange; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_water_purpose; analytical_sample_event; supplier_provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual net receipts after tare and matched native stock/returns; do not create inherited glaze/primary-pack manufacture as input. Additional outer supplies and actual analytical-sample support need real events; separate supply, consumption, contained waste and direct-release fate. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native SKU unit | Each actual external event and stocktake | All actual service stock periods | Actual standalone supply/state and owned service scope | per reference flow | Actual receipts/stock/matched returns, scope and native conversion provenance |
| cp_assets | frozen_cod_wholesale | shared_assets | Full-lifecycle freezer/handling/reusable service ledger | site_id; room_id; period_id; consignment_id; asset_id; reusable_container_id; configuration; consumer_id; phase_id; event_date; manufacture_dataset; factory_charge_coverage; maintenance_record; replacement_record; end_of_life_record; driver_used; driver_used_unit; driver_lifetime; driver_lifetime_unit; observed_history; evidenced_remaining_use; remaining_source; termination_assumption; attribution_view; uncertainty; sensitivity; update_trigger | Enumerate every actual asset consumer and period; match full manufacture/maintenance/replacement/end-of-life scope to compatible observed/evidenced lifetime driver and one attribution view. Factory-charge coverage and reusable transport assets require explicit ownership. | Item(s) or actual lifecycle-service native unit | Each actual asset event and period review | Actual and evidenced remaining service life | All actual consumers and periods | per reference flow | Complete lifecycle scope and actual/evidenced compatible service drivers |
| cp_providers | frozen_cod_wholesale | provider_services | Actual physical result and scope ledger | site_id; room_id; period_id; consignment_id; provider_id; service_id; event_date; actual_completed_result; physical_quantity; native_unit; duration; duration_unit; sample_plan; sample_quantity; sample_unit; actual_test_scope; completion_record; upstream_dataset; energy_coverage; refrigerant_coverage; material_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_emission_coverage; actual_driver_used; driver_used_unit; all_consumer_driver; all_consumer_driver_unit; missing_coverage | Verify actual completed provider result/native physical quantity and any real sample/test scope; reconcile direct and provider refrigeration/handling/asset/freight/treatment responsibilities once. Actual supplier release evidence alone is not another laboratory activity. | Actual provider-native unit | Each actual completed result | Actual service intervals | All included contracted responsibilities | per reference flow | Completion/unit/sample scope evidence and full upstream coverage matrix |
| cp_freight | frozen_cod_wholesale | freight | Actual component-load and cold-journey ledger | site_id; period_id; consignment_id; leg_id; event_date; route; mode; provider_id; actual_net_cargo_load; load_unit; fish_component_mass; glaze_component_mass; package_component_mass; loading_asset_tare; included_tare_scope; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; provider_native_unit; cold_leg_scope; thermal_records; temperature_unit; transport_energy_coverage; transport_refrigerant_coverage; empty_return_method; actual_driver_used; driver_used_unit; all_consumer_driver; all_consumer_driver_unit; upstream_delivered_gate_coverage; duplicate_leg_check | Use actual transported cargo net load and distance in compatible units or exact provider-native service. Distinguish net fish from included glaze/pack and actual loading tare, preserving cold-resource/empty-return and supplier delivered-gate scope to prevent double count. | kg*km or actual provider-native unit | Each actual leg | All included inbound/outbound/return/waste legs | Actual declared transport responsibility | per reference flow | Actual load/composition/tare/distance and cold-provider coverage proof |
| cp_fates | frozen_cod_wholesale | environmental_water, other_wastes, contained_wastewater, water_outfalls and water_vapour_releases | Actual source/state/receiver water and waste ledger | site_id; room_id; period_id; consignment_id; event_id; event_time; time_zone; start_time; end_time; duration; duration_unit; material_or_water_source; inherited_glaze_or_fish_or_facility_origin; state; native_unit; measured_mass; mass_unit; collected_volume; received_volume; volume_unit; density; density_unit; temperature; temperature_unit; water_role; purchased_or_direct; glaze_composition; concentration; concentration_unit; concentration_basis; composition_source; receiver; receiving_medium; direct_outfall_id; treatment_dataset; treatment_coverage; vapour_measurement; measurement_unit; physical_model; model_version; model_operands; operand_units; operand_basis; operand_sources; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual native source and fate, composition/receiver and treatment scope; separate inherited ice/tissue water from facility utility and analytical support. Direct intake, contained liquid, outfall, vapour and mixed-pack component views are not interchangeable or additive; unknown stock deficit cannot provide any one amount. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual material/water native unit and measured species kg | Each actual intake/waste/discharge/model interval | Actual complete service/collection intervals | Actual direct boundary and external receiving treatment | per reference flow | Actual measurement/model/source/receiver and full non-overlap coverage |
| cp_releases | frozen_cod_wholesale | other_releases | Actual chemical/medium activity and factor ledger | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; species; receiving_medium; actual_measurement; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; emission_factor; factor_unit; factor_basis; factor_source; composition_fraction; composition_basis; composition_source; release_fraction; fate_basis; fate_source; molecular_conversion; conversion_source; upstream_provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual species/medium measurement or compatible actual activity and source-specific complete factor; retain any required composition/fate basis once, and do not assign fish/glaze/operating-stock residual or safety limit as emission. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg species with actual compatible activity units | Each actual measured/modeled interval | Whole actual attributed operation | Each actual source and receiving medium | per reference flow | Actual measurement/activity/factor/chemical fate provenance with uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_quantities | all inventory rows | Assign actual direct and shared quantities to actual consignment/room/event/period by compatible documented all-consumer driver, including rejected/failed/idle/cleaning scope; divide attributed total by positive accepted N once. | cp_consignment; cp_fish; cp_energy; cp_refrigerant; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual operational quantity per reference flow |  |
| fish_component_stock | fish/glaze/pack memorandum | Reconcile actual same-state intact pack counts: opening + external receipts + buyer returns - closing - physical dispatch - supplier returns - useful other exits - actual discarded packs - actual sample removals = unexplained pack gap. Pair internal movements. Separately reconcile measured net fish excluding glaze/pack, inherited glaze, packaging, actual samples and independently evidenced state changes with uncertainty; gross shortage cannot identify a component or emitted species. Do not force glaze sublimation to be tissue loss. | cp_fish; cp_fates | Actual stock/component/state audit, not an inferred loss or emission |  |
| source_gate_demand | fish/glaze/pack memorandum | Trace actual complete supplier-release-gate quantities by lot to accepted consignments, closing, returns/useful exits and actual proven discard/state-change shares. Preserve source reference basis: per net-fish kg may already include glaze and primary-pack manufacture; per-pack reference requires actual net-fish/glaze/pack evidence. Add only actual assigned source-gate demand not already in baseline loss/stage coverage, outside service. Missing processing/freezing/glazing/packing is assembled once outside this service; do not add a generic yield multiplier, infer lost net fish from missing glaze, or repeat actual service treatment. | cp_fish; cp_consignment | Complete frozen-product source-gate demand and loss coverage outside service exchanges |  |
| refrigerant_fates | refrigerant_supply, recovered_refrigerant, spent_refrigerant and refrigerant_releases | On one actual installed-system plus applicable-container boundary, opening + actual external net supply - closing - usable external recovery - contained external waste - other documented external exits forms a balance requiring actual measured/evidenced release and uncertainty investigation. Internal charge/recovery cancels. Unknown balance and top-up alone are not leakage. Keep factory-charge/asset provenance; do not subtract its exported recovery from unrelated makeup. Only actual matched standalone supply can net with matched return omitted; otherwise record actual recovered Product/no automatic credit. Exact blend-to-species quantities require actual composition/fate once. | cp_refrigerant | Actual chemical supply/recovery/contained waste and species views per reference flow |  |
| water_and_species | water_vapour_releases and other_releases; other_releases_co2_fossil_air; other_releases_methane_fossil_air; other_releases_nitrous_oxide_air | Use actual compatible species/medium measurement or a validated physical method with required source/state/time and complete operands. Inherited glaze sublimation, fish tissue dehydration, utility-water evaporation and defrost/runoff are distinct. Unknown gross shortage never provides vapour, discarded fish or wastewater quantity. Actual fuel species use measured or completely reconciled burn and a compatible species factor; a complete factor is not multiplied again by composition/fate. | cp_fish; cp_energy; cp_fates; cp_releases | Actual measured/modeled water and chemical roles without duplicate or inferred fates |  |
| actual_cargo_freight | freight | For each actual kg*km leg use transported cargo load converted to kg times actual distance converted to km with explicit factors/sources. Net fish, inherited glaze and included packages contribute only where actually part of that cargo; retained loading tare/provider scope is explicit. Record cold-energy/refrigerant/empty-return coverage once; if another actual provider-native unit is used keep its matching burden, no price/Count proxy. | cp_freight | Actual compatible freight quantity per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_gate | all inventory rows | Verify actual scientific species/fillet/supplier-release gate and each concrete service/material/chemical identity with property/unit support before final exchanges; Count support is not fish or service identity. | Supplier state/lineage and exact detail/support evidence |
| net_glaze_package | fish memorandum | Retain actual source/lot net-fish, glaze and pack/tare bases, representative sample selection/method and uncertainty where verification is used. No universal glaze fraction or every-pack destructive test. | cp_fish and actual supplier/verification records |
| thermal_quality | frozen_cod_wholesale | Keep actual maintained-frozen history, seal/pack condition, applicable agreed acceptance and actual excursions/quarantine/return fates. Historical numeric/histamine-family thresholds do not become universal cod defaults. | cp_consignment; cp_fish; actual competent acceptance |
| source_coverage | fish/glaze/pack memorandum | Full supplier frozen/glazed/primary-packed gate and all intervening stage/quantity/loss coverage must match; live/caught fish upstream alone is incomplete. Missing coverage stays explicit before whole-chain use. | Source-gate dataset/stage/adjustment ownership |
| refrigerant_coverage | all refrigeration roles | Preserve actual chemical/common-boundary stock/fates and factory/asset versus standalone makeup ownership. Unknown balances are gaps, not presumed emission; actual recovered export does not offset unrelated input. | cp_refrigerant and actual detail/physical proof |
| period_and_scope | all actual responsibilities | Link real consignments/campaigns/periods, all asset consumers/lifecycles and actual provider/freight/treatment boundaries once. Rejected and failed stock retains resources; empirical guards need independent comparable actual cold storage data. | Complete coverage matrix, period/asset evidence and missing-data register |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| refrigerant_supply | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_supply` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| facility_water | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| new_outer_packaging | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `new_outer_packaging` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| recovered_refrigerant | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `recovered_refrigerant` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| spent_refrigerant | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `spent_refrigerant` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| discarded_food_packs | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_food_packs` under `cp_fish`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_food_packs_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fish`; actual source-linked native records |
| other_wastes | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| refrigerant_releases | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_releases` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| other_releases | frozen_cod_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_releases` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Meter actual refrigeration, circulation/defrost, dock handling, hygiene and business support within the declared service; rejected lots and actual idle intervals retain burdens. Primary freezing and glazing heat removal belong before this service gate.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual electricity for maintained-frozen storage and wholesale
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed electricity per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter intervals, incoming frozen state, room/lot load, thermal history and all-consumer drivers. Independent guards require matching freezer/load/climate/period scope, not a fixed kWh per net-fish kg.

#### refrigerant_supply

Keep actual chemical/blend and nonnegative matched operating-supply stock separate from factory charge already owned by the asset dataset. Internal charging is not a second purchase and top-up is not automatically emitted.

- Identity requirement: Actual standalone operating refrigerant supply
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed refrigerant supply per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need actual supply provenance, charge/container inventories, receipts/tare, recoveries and actual external fates with uncertainty. No chosen refrigerant type, equipment-charge default or universal annual leak rate.

#### facility_water

Record actual facility cleaning and support water, excluding inherited fish glaze, primary processing and deglazing unless an actual documented analytical sample consumes water. Sample-test support is not production re-glazing.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased freezer hygiene and facility water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed facility water per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/issue purpose and interval, sample scope if applicable, supplier coverage and water fates. Inherited glaze loss, fish moisture and wastewater are not measured utility water supply.

#### new_outer_packaging

Include only actual service-owned outer cartons, strapping, labels or other transport protection. Supplier-sealed primary packs and inherited glaze are merchandise attributes, not newly manufactured service inputs; do not open/repack fillets.

- Identity requirement: Actual added outer transport packaging and labels
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed new outer packaging per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need inherited versus new package identity/level, actual native count/area/mass and unit-conversion proof. Returnable pallets/crates use full-life service; no full new manufacture for each trip.

#### operating_supplies

Expand actual cleaners, filters, lubricants and test consumables in native units/state with full fates. This role does not authorize adding food ingredients, new glaze or fillet treatment.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual freezer cleaning and maintenance supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed operating supplies per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual SKU/formulation/concentration, stock/return and conversion evidence plus receiver/release state. Applied formulation or safety limit is not a direct emission quantity.

#### fuel_supply

Record actual fuel grade/native supply and stock convention; actual burn is a separate record. Complete hired cold transport/handling may already cover vehicle fuel, preventing a second direct input.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual fuel supplied to owned handling and support
- Flow property / unit: Volume / L
- Amount rule: Actual attributed fuel supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual grade, opening/receipts/closing and usable returns, density/temperature conversions if used, and disjoint burn/nonburned fates. No delivered-fuel-equals-burn default.

#### provider_services

Expand actual contracted storage, inspection/laboratory samples, refrigeration service, hired handling, hygiene and business support in provider-native physical units. Supplier product release is inherited evidence, not automatically a repeated wholesale test.

- Identity requirement: Actual frozen-storage and wholesale support results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed provider services per reference flow; cp_providers.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual completed result, physical quantity, sample design where used and full energy/refrigerant/assets/freight/treatment coverage. A price or test-every-pack assumption cannot replace actual work.

#### shared_assets

Attribute actual cold-room structures, refrigeration/handling/measurement equipment, returnable pallets/crates and ICT complete lifecycle service across all consumers and periods.

- Identity requirement: Lifecycle-attributed freezer, handling and reusable assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed shared assets per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need manufacture/maintenance/replacement/end-of-life, actual used and compatible lifetime drivers, observed plus evidenced remainder and uncertainty. Factory refrigerant charge already in an asset is not new operating gas.

#### freight

Use actual transported net cargo including fish/glaze and included packaging as applicable, not declared net-fish mass alone. Capture real cold-leg energy/refrigerant and empty-return scope without duplicating supplier delivered-gate transport.

- Identity requirement: Actual non-overlapping frozen-product and service freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual attributed freight per reference flow; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual cargo/tare/load composition, route distance/unit conversion, cold-service coverage and shared all-consumer allocation. Do not infer transport gross from a universal glaze or packaging percentage.

#### environmental_water

Expand actual source/location and withdrawal purpose only when directly drawn. Inherited glaze or recorded water sublimation does not create a new service withdrawal.

- Identity requirement: Actual direct environmental water intake
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed environmental water per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual source-specific meter/quantity and boundary; a purchase invoice, inherited glaze mass or fish moisture does not prove direct intake.

#### usable_supply_returns

Only actual same-SKU/state external returns match operating inputs. Under consumed-only accounting OMIT the matched return exchange; inherited merchandise/package returns stay in stock audit.

- Identity requirement: Actual matched unused operating-supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed usable supply returns per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual recipient/transfer/native quantity and matched standalone supply scope. Closing stock, internal pallet loops and discarded material are not usable external returns or automatic credits.

#### recovered_refrigerant

Record actual usable chemical/blend recovery crossing to receiver; retained recovered bottles are closing stock. Factory-charge recovery must not reduce unrelated current makeup, and no avoided virgin-fluid credit is automatic.

- Identity requirement: Actual usable recovered refrigeration fluid exported
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed recovered refrigerant per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need actual weighing/purity/receiver and original charge/supply upstream owner. Only proven same-scope standalone stock can use consumed-only netting with matched return omitted; no negative makeup.

#### spent_refrigerant

Record actual contaminated/unusable fluid and treatment receiver separately from usable recovery, retained charge and direct species release.

- Identity requirement: Actual unusable contained refrigeration fluid for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed spent refrigerant per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need measured contained mass and chemical/blend/state with receiver coverage. Nameplate system charge or an evacuation invoice is not measured waste or leakage.

#### discarded_food_packs

Record actual rejected/discarded food pack receiver quantity and actual fish/glaze/package composition as compatible audit views. If treatment accepts a whole mixed pack, its fish/glaze/primary-package component views must not generate duplicate waste exchanges or upstream production here.

- Identity requirement: Actual discarded frozen fillet packs and associated contents
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed discarded food packs per reference flow; cp_fish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fish`

Range evidence need: Need actual receiver/native amount and constituent basis, actual supplier-gate equivalent and treatment scope. A thaw alarm, quality reject or gross-mass deficit does not prove a discarded net-fish kg amount.

#### other_wastes

Expand actual service-generated wrapping, filters, oils and cleaning residues by native state/receiver. Exclude discarded whole food-pack composition already owned by its waste row.

Residual inventory requirement after the independently identified cases `other_wastes_paper_pack`; `other_wastes_metal_pack`; `other_wastes_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual non-food operating and outer-packaging wastes
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other wastes per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual fraction, quantity/conversion and treatment receipt; inherited primary-pack production is not a new service input just because that pack ultimately becomes waste.

#### contained_wastewater

Record actual cleaning/maintenance/defrost or analytical-sample wastewater collected to treatment, with composition and receiver. Inherited ice and fish water must retain their actual origin/fate, not become purchased utility by relabelling.

- Identity requirement: Actual collected facility or analytical wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed contained wastewater per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual collected/received volume and composition/basis, origin, interval and treatment owner. Avoid equating all glaze loss to this volume or counting a direct outfall for the same contained transfer.

#### water_outfalls

Expand only actual direct outfall and receiving quality/medium. Collected wastewater sent to a provider is Waste, not another environmental discharge; same water cannot be duplicated.

- Identity requirement: Actual direct water discharge to environment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed water outfalls per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual direct volume, source, interval and receiver/quality; fish moisture and inherited glaze do not by themselves establish an outfall.

#### refrigerant_releases

Use measured release or fully evidenced common-boundary physical fates with exact chemical/blend composition and uncertainty. Internal recovery is not emission; unexplained stock balance is not automatically leakage.

- Identity requirement: Actual identified refrigerant-species releases to declared media
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed refrigerant releases per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need common installed/container stock and all external receipt/recovery/waste/other-exit operands plus method/unit/source. No recharge-only or factory-charge-times-default-leak factor; complete species factors get no duplicate composition/fate fraction.

#### other_releases

Expand actual species and receiving medium from actual burn, cleaning or maintenance, excluding refrigerant/vapour rows and upstream provider emissions already counted.

Residual inventory requirement after the independently identified cases `other_releases_co2_fossil_air`; `other_releases_methane_fossil_air`; `other_releases_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual identified combustion and facility chemical releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other releases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or actual compatible activity/factor plus composition/fate/unit/source if relevant. Product supply, safety limit, sampling result or unknown fish stock is not an emission amount.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_service | Verify actual ownership resale and unique positive accepted consignment count with scientific species, complete frozen/glazed/sealed supplier gate, netfish/glaze/pack/time and actual buyer acceptance. Duplicate packs/invoices and cancelled attempts never add accepted count. |  |
| frozen_node | frozen_cod_wholesale | Check the usable before-state, actual freezer intervention, maintained still-frozen/sealed accepted after-state and all actual reject/return/disposal exits. No new glazing/repacking/thaw-refreeze/cutting or automatic normal release after thermal/seal failure. |  |
| component_and_loss | fish/glaze/pack memorandum | Reconcile actual same-state packs, sampled/verified components, stock/return/discard and original supplier-gate demand with existing loss/stage coverage. No glaze loss=lost net fish, no mass deficit=waste/species, no inherited glaze=new utility. |  |
| fluid_and_returns | all refrigerant and usable-return roles | Check common stock boundary and every actual fluid fate/receiver, original upstream owner and matched same-scope supply; no factory recovery against unrelated makeup, no negative input and no extra return exchange under consumed-only. |  |
| real_exchanges | all inventory rows | Require actual native-unit identity/state/protocol/receiver for each expanded exchange. Separate whole food-pack waste from component audit, vapour from outfall/contained water and new service packaging from inherited primary product pack; each physical burden has one owner. |  |
| asset_provider_period | shared_assets and frozen_cod_wholesale | Verify all actual consumers/periods, continuous cold room versus consignment/campaign events, complete asset manufacture/maintenance/replacement/EOL and compatible used/lifetime drivers with observed/evidenced remainder. Direct/provider cold/freight/treatment scopes and single per-N normalization must not overlap. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after concrete exchange identity and actual foreground completeness review |
| downstream_use | Frozen cod-fillet wholesale-service add-on linked to separately complete supplier-gate frozen/glazed/primary-packed commodity and actual assigned demand/loss coverage |
| allowed_use | Actual maintained-frozen sealed Gadus morhua fillet wholesale consignment with matching netfish/glaze/package/thermal-time/commercial gate |
| excluded_use | Standalone fillet footprint; live/caught fish or primary processing/freezing/glazing/repacking; all-seafood average; retail/agency/storage-only; universal fish-safety testing factor or whole-chain claim with missing supplier stages |
| required_metadata | Actual species/fillet/lot/merchant/freezer/period/consignment/ownership, supplier release and complete gate, actual netfish/glaze/pack/sample bases, thermal/seal/acceptance, refrigeration/assets/provider/freight/treatment scope and commodity-adjustment owner/status |
| required_quality_disclosure | Actual identity/support gaps, supplier and component sampling/state uncertainty, unresolved thermal/fate/receiver/method coverage, all-consumer full-asset assumptions and independent range limitations |
| update_trigger | Changed species/presentation/supplier gate/glaze/pack/frozen state, thermal/acceptance criteria, processing/repacking need, source-stage/loss coverage, refrigeration/assets/provider scope or measurement/sample method |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-seafood-wholesale | official_guidance | UNSD CPC3 explanatory notes, division61/subclass61024 (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: frozen prepared/preserved fish can be wholesaled in this leaf; selected cod fillet route is narrower, not live-fish production. |
| codex-frozen-fillets-190 | standard | Codex Standard for Quick Frozen Fish Fillets, CODEX STAN190-1995, source amendments2011/2013/2014, §§6.2 and7.3/7.3.1. https://www.fao.org/input/download/standards/115/CXS_190e.pdf | Net food versus glaze/packaging and representative sample/physical state distinctions; historical source, no copied numeric temperature/AQL/histamine/testing-every-pack default. |
| fao-frozen-fish-after-freezing | official_guidance | FAO, Freezing and refrigerated storage in fisheries, chapter6 Treatment of fish after freezing, §§6.1/6.2. https://www.fao.org/4/v3630e/v3630e07.htm | Inherited glaze protection/sublimation versus tissue dehydration and primary/secondary/tertiary packaging; glazing heat/removal is upstream here, no glaze percentage or universal storage rate adopted. |
