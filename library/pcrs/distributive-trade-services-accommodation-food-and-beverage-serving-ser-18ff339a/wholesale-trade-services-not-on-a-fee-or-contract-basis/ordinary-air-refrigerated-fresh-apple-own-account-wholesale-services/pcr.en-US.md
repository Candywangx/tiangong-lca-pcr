---
pcr_id: pcr.ordinary-air-refrigerated-fresh-apple-own-account-wholesale-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ordinary-air refrigerated fresh apple own-account wholesale services

## 1. Scope and Applicability

This PCR describes an own-account merchant's physical wholesale service for already harvested and sorted intact fresh Malus domestica apples, using an operated ordinary-air mechanically refrigerated room before accepted resale to a business buyer. Receipt condition and ownership, actual room cooling/holding, temperature/humidity monitoring, handling, inherited-package tracking, actual reject/return fates and commercial handover are one bounded preservation/wholesale responsibility. The usable before-state is received intact apples at recorded cultivar/grade, thermal and quality state; the maintained after-state is still-intact fruit meeting the actually agreed buyer gate after the declared room interval.

It excludes orchard production/harvest, primary sorting or packhouse manufacture, controlled/modified-atmosphere storage, waxing or chemical fruit treatment, fruit washing/hydrocooling, slicing, juice manufacture, forced ripening, retail, fee/commission agency and independently sold storage-only services. Actual required processing or different atmosphere changes the route and requires a reviewed boundary; it cannot be hidden as ordinary cooling. No temperature, humidity, residence limit, future shelf life, energy intensity or loss percentage is prescribed here.

This is a service add-on, not a delivered-apple footprint. All upstream manufacture of successfully sold AND lost apple merchandise is excluded from service exchanges. Actual original-gate quantity and loss/state-change demand must be reconciled once in the separately linked commodity system before complete-chain use. Actual sorting out of nonconforming received lots for rejection, loss handling and declared receiving treatment remain service responsibilities; that does not authorize a primary sorting/processing product route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.ordinary-air-refrigerated-fresh-apple-own-account-wholesale-services` |
| classification_refs | CPC 3.0 `61021`; narrower ordinary-air refrigerated intact fresh apple wholesale service |
| covered_products | Completed own-account B2B consignment service for already-harvested/sorted intact fresh apples via an operated ordinary-air cold room |
| excluded_products | Other fruit/vegetables; orchard or primary packhouse production; CA/MA storage, chemical/wax treatment, fruit washing, slicing, juice, forced ripening; retail/agency/storage-only service |
| representative_product | One actual accepted refrigerated apple wholesale consignment with cultivar/grade/quantity/state/thermal-time qualifiers |
| production_route | Ownership receipt of usable intact apples -> actual ordinary-air room cooling/holding and monitored preservation -> accepted B2B resale handover |
| market_state | Counted wholesale service, with separate fruit/packaging throughflow and original-gate commodity ledgers |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed ordinary-air refrigerated fresh apple wholesale consignment service |
| How much | 1 actually completed accepted wholesale consignment service |
| How well | Actual cultivar/grade, intact quality and ordinary-air preserved thermal/moisture state accepted at the declared commercial gate; no inferred guaranteed future shelf life |
| How long or cycle | Actual intake/cooling/holding-to-handover intervals, with reporting-stock and asset service periods separately attributed |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed ordinary-air refrigerated fresh apple wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | consignment_id; ownership_resale_risk; business_buyer; cultivar_and_grade; actual_net_fruit_mass; mass_and_moisture_state; intake_quality_temperature; room_route_and_id; actual_temperature_humidity_history; actual_start_end_duration_unit; accepted_quality_gate; inherited_and_new_packaging; origin_geography_period; freight_and_treatment_coverage; refrigerant_system_scope; original_gate_commodity_adjustment |

N > 0 counts actual unique accepted commercial consignments after actual cancellation/reversal, not boxes, pallets, trucks or invoice lines. Each actual quantity/state/room interval is retained; one counted service does not imply equal fruit mass, thermal load or duration. Do not split paperwork to dilute burden. All qualifiers must be declared in actual package metadata or equivalent fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_reference | reference product | Number of items | Item(s) | Use actual accepted commercial consignments and N > 0; fruit mass/state and actual cooling quality/time are qualifiers, not a default conversion from Count to kg. |
| fruit_state | fruit memorandum and discarded_apples | Mass and actual moisture/quality state | kg; actual temperature and duration units | Measure net fruit excluding packaging/tare at each actual state. Reconcile returns/closing/dispatch and independently evidenced physiology/water/handling effects; a wet-mass deficit cannot prove irrecoverable dry matter, CO2, water vapour or waste. |
| native_unit | all inventory rows | Actual compatible native property | Actual native unit | Preserve actual Count/Area/Volume/Mass/Time supplies and provider/service identities. Any conversion needs actual state, factor/unit/source and density/composition/temperature if relevant; non-additive audit views do not create another exchange. |
| refrigerant_boundary | refrigerant_supply, recovered_refrigerant, spent_refrigerant and refrigerant_releases | Mass by actual chemical/blend | kg | Use one explicit installed-system plus applicable container-stock boundary and actual interval. External net supply, internal charge/recovery, closing inventory, contained external exits and measured release are distinct; no top-up=leak assumption. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already harvested/sorted usable intact merchant-owned apples with actual supplier gate, cultivar/grade, net mass/moisture/temperature/quality and inherited package state |
| starting_condition_role | Merchandise throughflow fact and pre-preservation state, not an apple production input or claim of zero whole-chain burden |
| product_classification_scope | Own-account refrigerated apple consignment wholesale subset of CPC61021 |
| recursive_input_rule | Do not recurse traded fruit or the same consignment into wholesale service production. Actual upstream contracted preservation/support may be an input only with distinct physical responsibility and non-overlapping resources. |
| upstream_dataset_requirement | Verified actual supplies, provider scopes, refrigeration and reusable-asset full lifecycle data; separately matched original-gate fruit production and quantified commodity adjustment before full-chain use |
| disclosure | All actual fruit/packaging states, inherited and new burdens, rooms/time/temperature, storage/return/reject/waste and receiving treatment, refrigeration fates, transport and commodity-adjustment owner/coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_boundary | apple_cold_wholesale | Exclude all apple commodity production including actual lost merchandise from service exchanges; keep actual service operation, direct exchanges and declared loss treatment/disposal once. A whole-chain package must separately quantify and link original-gate commodity input/loss demand and existing coverage. |  |
| preservation_boundary | apple_cold_wholesale | Declare received usable intact state, actual ordinary-air room cooling/holding and maintained still-intact state at buyer gate, including actual rejects and thermal excursions. Use actual cultivar and conditions; no universal safe temperature or shelf-life rate. | fao-temperature-humidity |
| compatibility_boundary | apple_cold_wholesale | Collect actual room humidity/circulation, lot separation and co-stored-product compatibility/ethylene observations where relevant. Ordinary-air refrigeration is not CA/MA or fruit chemical treatment; source examples do not prescribe a numeric regime. | fao-horticultural-storage |
| actual_fates | all real resources/outlets | Inherited packages are memorandum flows unless an actual additional service burden is proven. Distinguish fruit disposal, supply returns, recovered refrigerant, contained wastes/water, actual environmental inputs and identified species outputs; unknown fates require evidence, not assumed absence. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| apple_cold_wholesale | Integrated ordinary-air apple preservation and merchant wholesale | required | Actual own-account apple purchase/resale with operated ordinary-air room preservation | Bounded preservation responsibility: received usable state -> actual cooled/held state -> accepted B2B consignment; actual rejects/loss/returns retained | `accepted_service` |

This distinct node owns both the actual preservation intervention and wholesale handover. Do not invent a second fruit-production output or an unmeasured internal cooling service merely to split activities. Room cooling may run continuously across overlapping lots; dispatch/reject/return/cleaning is consignment/campaign-linked. Track actual pre/post state and loss/residue exits. Failure to meet acceptance does not create accepted N, while actual energy and care of that stock remain attributed.

### Process: Integrated ordinary-air apple preservation and merchant wholesale (`apple_cold_wholesale`)

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

Range evidence need: Need actual intervals, room/lot load and duration, thermal state and all-consumer allocation. Independent energy guards need comparable cultivar/load/climate/room scope; no kWh-per-kg or per-day default.

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

Range evidence need: Require actual stock/receipt/return records, grade, density/temperature conversion if used and disjoint burn/nonburned fates. No purchased-fuel-equals-combustion rule.

###### Actual liquid treated tap-water supply (`water_supply_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed water supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/purpose/period and supplier coverage, any actual humidification/cleaning fate and allocation. Do not infer fruit water uptake/loss from a facility bill.

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

Range evidence need: Need SKU/formulation/concentration, net stock/return and actual waste/release fates with conversion sources. No safety-limit or applied-product quantity becomes an emission factor.

###### Actual separately recorded polyethylene packaging film (`additional_packaging_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed additional packaging per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need inherited/new/replaced identity, actual SKU native count/mass/area, state, receiver and matching unit conversion. Reusable crates require measured lifecycle service, not full new manufacture every trip.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed ordinary-air refrigerated fresh apple wholesale consignment service (`accepted_service`)

One actual own-account B2B resale consignment with ordinary-air cooling/holding, intact apple condition/quality and agreed accepted commercial handover. Apple merchandise is not this service-flow identity.

- Selected flow: Completed ordinary-air refrigerated fresh apple wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Count is normalization only. Actual cultivar/grade/net fruit mass/state, temperature/humidity/time history, ownership and accepted gate are mandatory; no universal kg, storage life or temperature per count.

##### Waste flows

###### Actual discarded intact apples and fruit residues (`discarded_apples`)

Measure actual rejected/spoiled/handling-damaged fruit sent to a documented waste receiver, with actual state/mass. A rejected quality grade may still have a usable commercial exit, not automatically waste.

This fixed identity covers actual discarded human-food apple material across the distribution chain. Retain actual as-received fruit mass, moisture/state and receiver; exclude packaging tare and non-food cleanup carriers. A whole mixed package must use its own matching identity rather than treating gross mixture mass as apples. Commercially usable returns are not waste and no spoilage, disposal, treatment or loss factor is inferred.

- Selected flow: Food Debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed discarded apples per reference flow; cp_apples.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_apples`

Range evidence need: Need actual lot-linked waste mass/tare/state and receiver/treatment coverage, original-gate trace for commodity adjustment and independently resolved water/respiration effects. No mass deficit or FAO historic loss range substitutes.

##### Elementary flows

###### Actual separately evidenced biogenic carbon dioxide to air (`respiration_releases_biogenic_co2_air`)

Only actual apple-respiration biogenic CO2 directly emitted to air on a supported species/source/time basis, in kgCO2 rather than kgC. Fruit stock loss does not determine CO2 and no respiration factor or occurrence is assumed. Unspecified-air identity is used only when a finer receiving subcompartment is not established; keep fossil/unknown-origin carbon separate. Oxygen intake and vapour remain separate independently evidenced quantities.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed respiration releases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need compatible actual state, temperature/time series, substrate/basis and full model/measurement operands, uncertainty and receiving compartment. Unexplained wet-mass change is not CO2, water vapour or dry-matter loss by default.


###### Actual independently evidenced water vapour released to air (`respiration_releases_vapour_air`)

Only actual independently evidenced H2O vapour directly released to air, with actual source, state and native kgH2O. A mass deficit, liquid melt, contained wastewater, pollutant-in-water or unexplained stock imbalance is not vapour evidence. Preserve inherited commodity provenance and non-additive audits; no new water supply, default evaporation or upstream/provider duplicate. Other receiving media retain separate identities.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed respiration releases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need compatible actual state, temperature/time series, substrate/basis and full model/measurement operands, uncertainty and receiving compartment. Unexplained wet-mass change is not CO2, water vapour or dry-matter loss by default.

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

Range evidence need: Need measured species or compatible actual activity/species factor with composition/fate sources as required. Do not convert total cleaning product, safety limit or missing stock into an emission.


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

Range evidence need: Need measured species or compatible actual activity/species factor with composition/fate sources as required. Do not convert total cleaning product, safety limit or missing stock into an emission.


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

Range evidence need: Need measured species or compatible actual activity/species factor with composition/fate sources as required. Do not convert total cleaning product, safety limit or missing stock into an emission.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_operation | apple_cold_wholesale | Use direct lot/room/event meters first. Allocate documented shared refrigeration and premises/support across all actual consumers by evidenced compatible thermal/load/occupied-volume-time drivers as applicable; explain idle/defrost/cleaning and failed/rejected stock. No automatic equal-consignment, revenue or kg-only driver independent of duration/load. Divide attributable totals by N once. |  |
| allocate_assets | shared_assets | Enumerate all actual asset/crate/pallet consumers and periods; use full manufacture, maintenance, replacements and end-of-life with actual used driver / lifetime driver. Lifetime driver is observed or observed history plus evidenced remaining use/termination, with uncertainty and sensitivity. Use one asset-equivalent fraction / N OR lifecycle-complete provider-native quantity / N, not both. Inherited reusable package stock alone does not prove full new manufacture during service. |  |
| allocate_supplies | actual service supplies | For each actual native SKU/state S = attributed opening stock + net external receipts - closing. Choose gross-with-outlets S / N with usable external return, OR consumed-only (S - matched usable external return) / N, in which case OMIT that matched usable-return exchange from the actual dataset rather than emitting it as another credit. Closing includes usable recovered closing; waste or uncontained loss retains upstream supply burden. Internal package circulation and inherited merchandise packages do not create new supply. Refrigerant installed/storage scope is reconciled separately. |  |
| allocate_commodity | fruit memorandum | Keep all fruit production outside service. Link actual traced original-gate quantity assigned to this consignment/cohort, including its evidenced irrecoverable-fruit or physiological-state-change share, to a compatible commodity dataset. Preserve original-gate state/unit, closing stock, usable returns/other exits, actual accepted net dispatch and existing loss coverage. Current apple mass deficit is not the original-gate loss quantity. Add only any original-gate demand not already in the commodity baseline; do not add a second generic yield multiplier. Actual disposal/treatment already in this service stays excluded from that production-only adjustment. Missing trace/state conversion/attribution blocks full-chain claims. |  |
| allocate_outlets | recovered_refrigerant and all residues | Actual usable recovery/returns and usable downgraded apple exits require actual state, quantity and receiver; no automatic avoided virgin refrigerant, new box, fruit or waste-treatment credit. Fruit remains memorandum, not a second wholesale output. If intentional processing/co-production appears, review a separate boundary/attribution before final data. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |

Refrigerant manufacture or factory-installed original charge already included in an asset dataset has one owner there; only actual service-owned additional/makeup supply not already covered enters refrigerant_supply. Check manufacture, original charge, recovered charge and operating maintenance coverage explicitly rather than counting the same gas again.

The received merchandise gate is already harvested/sorted with actual packaging. A comparator orchard-gate dataset alone may omit intervening sorting, packing, losses and transport: assemble any missing actual predecessor scopes outside this add-on, with explicit owners and no duplicate stage. Match original-gate commodity quantities to the actual declared predecessor state before attributing loss/state-change demand.
Refrigerant netting is origin- and scope-specific. A usable external recovery may originate from factory-installed charge whose production is already owned by the asset dataset, rather than the current standalone operating-makeup purchase. NEVER subtract such recovery from unrelated/current makeup or create negative makeup supply. Consumed-only subtraction is allowed only for a physically matched same-scope standalone supply-stock quantity with evidenced charge/supply provenance, and the matched return exchange is then omitted. Otherwise retain the actual recovered Product transfer without automatic credit, preserve the original asset/charge upstream owner and use the actual nonnegative operating supply stock convention. Recovery mass, inherited charge and current makeup are separate physical and burden views.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | apple_cold_wholesale | accepted_service | Actual ownership and accepted consignment ledger | site_id; campaign_id; period_id; consignment_id; contract_id; seller; business_buyer; ownership_start; resale_risk; source_lot_ids; cultivar; grade; fruit_net_mass; mass_unit; moisture_state; intake_quality; intake_temperature; temperature_unit; actual_start; actual_end; time_zone; duration; duration_unit; commercial_gate; accepted_quality; acceptance_record; cancellation_id; N | Reconcile actual ownership-based B2B consignment, acceptance/cancellation and lot/state records. Keep actual gate and thermal/time qualifiers; no invoice/pallet splitting creates another service. | Item(s) | Each actual consignment/reversal | Actual intake-to-handover interval and relevant periods | Merchant cold room and agreed business-buyer gate | per reference flow | Commercial/ownership/quality and actual thermal/time evidence |
| cp_apples | apple_cold_wholesale | fruit memorandum and discarded_apples | State-linked fruit and package stock ledger | site_id; room_id; campaign_id; period_id; consignment_id; lot_id; cultivar; grade; event_id; state; event_time; time_zone; gross_mass; tare_mass; net_fruit_mass; mass_unit; moisture_value; moisture_basis; moisture_method; moisture_source; temperature; temperature_unit; humidity; humidity_unit; occupancy_start; occupancy_end; duration; duration_unit; opening_stock; external_receipts; buyer_return; physical_dispatch; net_accepted_dispatch; supplier_return; usable_other_exit; closing_stock; measured_discard; measured_water_change; measured_physiological_change; state_change_method; state_change_source; unexplained_residual; receiver; treatment_coverage; inherited_package_id; package_state; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_source; original_gate_dataset; predecessor_boundary; inherited_sorting_packing_scope; missing_predepot_stage; upstream_stage_owner; original_gate_attribution; baseline_loss_coverage; commodity_adjustment_owner; commodity_adjustment_status; uncertainty; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual net fruit and state at events, preserve original lot and inherited packaging; reconcile physical stocks/returns/exits and independently evidenced water/physiology rather than forcing missing kg into a waste or species. Trace original-gate commodity demand and actual waste receiver. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg and actual state/temperature/duration units | Each stock/dispatch/return/waste and relevant thermal interval | All fruit stock/room/commodity-link periods | Actual lot, room and original/receiving gate | per reference flow | Calibrated weighing/tare, actual quality/thermal records and proven original-gate/fate links |
| cp_energy | apple_cold_wholesale | electricity and actual fuel burn | Room and support energy ledger | site_id; room_id; campaign_id; period_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; energy_carrier; meter_id; reading_start; reading_end; reading_unit; compressor_fan_defrost_scope; thermal_load_evidence; ambient_temperature; temperature_unit; occupied_volume; volume_unit; occupancy_time; occupancy_unit; all_consumer_driver; driver_used; driver_unit; idle_cleaning_scope; actual_burn; burn_unit; burn_method; carried_closing; usable_nonburned_return; contained_nonburned_waste; unrecovered_nonburned_loss; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual refrigeration/handling/support and measured burn; reconcile room loads, all consumer time and actual idle/defrost. Reconstruct burn only with complete disjoint native fates and unknown-loss investigation; do not duplicate provider energy. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy or fuel unit | Each actual meter/operation interval | Actual attributed room/campaign and relevant periods | All included refrigeration/handling/support consumers | per reference flow | Meter calibration, thermal/use driver and complete coverage/burn evidence |
| cp_refrigerant | apple_cold_wholesale | refrigerant_supply, recovered_refrigerant, spent_refrigerant and refrigerant_releases | Chemical-specific installed and stored fluid ledger | site_id; system_id; period_id; consignment_id; event_id; event_time; time_zone; boundary_scope; refrigerant_identity; blend_composition; composition_basis; composition_source; native_mass_unit; installed_opening; container_opening; external_net_receipts; receipt_gross; receipt_tare; installed_closing; container_closing; internal_charge; internal_recovery; usable_external_recovery; contained_external_waste; other_external_handoff; measured_release; measurement_method; release_species; receiving_medium; release_interval; factor; factor_unit; factor_basis; factor_source; unresolved_balance; uncertainty; actual_receiver; treatment_coverage; supplier_coverage; factory_charge_coverage; asset_manufacture_coverage; original_charge_owner; operating_makeup_owner; charge_origin_id; charge_origin_type; charge_upstream_owner; factory_charge_dataset; recovered_charge_provenance; matched_standalone_supply_lot; matched_standalone_supply_quantity; recovery_netting_eligibility; unrelated_makeup_netting_prohibited; attribution_driver; all_consumer_driver | Weigh actual chemical/blend on a common explicitly bounded system-plus-applicable-container interval, separately registering internal charge/recovery and external supply/exits. Use direct release measurement or fully evidenced physical fates with uncertainty; any unexplained balance remains a gap, not an automatic leak. | kg of actual chemical/blend and separately identified species | Every charge/recovery/maintenance/release and stock boundary | Actual installed/storage service intervals | Actual refrigeration boundary and external receiver | per reference flow | Chemical detail, actual weighing/charge/recovery/receiver and full-fate coverage |
| cp_supplies | apple_cold_wholesale | fuel, water, operating supplies, additional_packaging and usable_supply_returns | Native SKU and inherited/new boundary ledger | site_id; campaign_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; material_state; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening_quantity; receipt_gross; receipt_tare; receipt_net; closing_quantity; recovered_closing; usable_external_return; contained_waste; uncontained_loss; inherited_or_new; inherited_package_id; new_or_replacement_scope; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_source; gross_or_consumed_view; matched_stock_input_id; external_return_id; return_input_match; omit_matched_return_exchange; supply_scope; actual_water_purpose; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual net external receipts after tare and matched native stock/returns; keep inherited packages out of new input unless actual new/replacement service responsibility is proven. Record actual water/chemical/fuel fates separately, not supply-as-emission. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native SKU unit | Every external event and stocktake | All actual attributed periods | Actual supply SKU/state and service responsibility | per reference flow | Actual stock/receipt/return and inherited/new coverage with conversion provenance |
| cp_assets | apple_cold_wholesale | shared_assets | Full-life room/equipment/crate service ledger | site_id; room_id; period_id; consignment_id; asset_id; package_asset_id; configuration; consumer_id; phase_id; event_date; manufacture_dataset; maintenance_record; replacement_record; end_of_life_record; driver_used; driver_unit; driver_used_unit; driver_lifetime; driver_lifetime_unit; observed_history; evidenced_remaining_use; remaining_source; termination_assumption; attribution_view; uncertainty; sensitivity; update_trigger | Enumerate all actual users and periods including reusable packaging; match complete lifecycle scope to one physical driver with observed/evidenced remaining use and one attribution view. | Item(s) or actual lifecycle-service native unit | Every actual asset event and period review | Actual and evidenced remaining service life | All consumers/periods of actual room/handling/crate assets | per reference flow | Complete asset lifecycle and actual/evidenced service assumptions |
| cp_providers | apple_cold_wholesale | provider_services | Physical result and upstream coverage ledger | site_id; room_id; period_id; consignment_id; provider_id; service_id; event_date; actual_result; physical_quantity; native_unit; duration; duration_unit; completion_record; upstream_dataset; energy_coverage; refrigerant_coverage; material_coverage; asset_lifecycle_coverage; transport_coverage; waste_treatment_coverage; emission_coverage; attribution_driver; driver_unit; all_consumer_driver; missing_coverage | Verify actual completed physical result and provider-native quantity/thermal/service scope, then reconcile all direct/upstream resource and treatment responsibilities once. Unknown necessary coverage remains a gap. | Actual provider-native unit | Each actual completed result | Actual provider service intervals | All included provider responsibilities | per reference flow | Completion, physical unit and complete coverage matrix |
| cp_freight | apple_cold_wholesale | freight | Actual load/route/cold-chain leg ledger | site_id; period_id; consignment_id; leg_id; event_date; route; mode; provider_id; net_load; load_unit; load_tare; load_conversion_factor; load_conversion_unit; load_conversion_source; distance; distance_unit; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; refrigerated_scope; actual_temperature; temperature_unit; transport_energy_coverage; transport_refrigerant_coverage; provider_native_unit; empty_return_method; attribution_driver; driver_unit; all_consumer_driver; upstream_coverage; duplicate_leg_check | Record actual native provider result or net load times distance with compatible explicit unit conversions, full refrigeration scope and empty-return responsibility; exclude overlapping delivered-product or provider operation. | kg*km or actual provider-native unit | Each actual freight leg | All included inbound/outbound/return/waste legs | Declared actual transport responsibility | per reference flow | Actual load/distance/cold-chain and provider coverage evidence |
| cp_fates | apple_cold_wholesale | environmental_water, other_wastes, contained_wastewater and water_outfalls | Actual native quantity, receiver and water-fate ledger | site_id; period_id; consignment_id; event_id; event_time; time_zone; actual_material; state; native_unit; measured_mass; mass_unit; collected_volume; received_volume; volume_unit; water_source; water_role; purchased_or_direct; density; density_unit; temperature; temperature_unit; composition; concentration; concentration_unit; concentration_basis; composition_source; receiving_medium; receiver; treatment_dataset; treatment_coverage; direct_outfall_id; inherited_or_service_waste; uncertainty | Measure actual source and fate, native amount and composition/receiver; distinguish direct abstraction, collected wastewater, direct outfall, residual material and treatment scope. Do not infer water or waste from fruit mass deficit or duplicate inherited package waste. | Actual native material/water unit | Each actual intake/waste transfer/outfall | Whole actual responsibility and collection intervals | Actual direct boundary and external receiving treatment | per reference flow | Meter/collection/receiver and composition/coverage evidence |
| cp_releases | apple_cold_wholesale | environmental_gases, respiration_releases and other_releases | Actual chemical/medium measurement or physical-model ledger | site_id; room_id; period_id; consignment_id; lot_id; event_id; start_time; end_time; time_zone; duration; duration_unit; cultivar; fruit_state; actual_fruit_quantity; fruit_quantity_unit; temperature_series; temperature_unit; humidity_series; humidity_unit; species; receiving_medium; intake_or_release_role; measured_quantity; measurement_unit; measurement_method; actual_activity; activity_unit; substrate_basis; physical_model; model_version; model_operands; operand_units; operand_sources; oxygen_intake_if_required; water_role; emission_factor; factor_unit; factor_basis; factor_source; actual_burn; burn_unit; composition_fraction; composition_basis; composition_source; release_fraction; fate_basis; fate_source; molecular_conversion; conversion_source; upstream_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual species and medium measurements or fully validated matching fruit-state/cultivar/thermal-time physical methods with every required operand/unit/source; distinguish environmental intake and different releases, and do not assign any unexplained stock difference to a species. Complete factors are applied once without extra composition/fate multiplication. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual species kg and compatible activity/model units | Every measured/model interval and actual state change | Actual in-boundary fruit/room/operation periods | Each actual source and receiving medium | per reference flow | Actual measurements/model validity/operands and uncertainty with no double coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_normalization | all inventory rows | Assign actual direct and evidenced shared quantities to actual consignments and periods using compatible all-consumer physical drivers. Divide attributable total by positive accepted N once; failed/rejected/cancelled attempts retain actual responsibility without adding accepted counts. | cp_consignment; cp_apples; cp_energy; cp_refrigerant; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual operational quantity per reference flow |  |
| fruit_state_reconciliation | fruit memorandum | Reconcile actual same-state net fruit and physical stock events: opening + external receipts + buyer returns - closing - physical dispatch - supplier returns - useful other exits - measured discarded fruit, with independently evidenced water/physiological/state changes kept as their own compatible physical views and unexplained residual investigated. Internal transfers cancel. Different wet-state masses cannot form a dry-matter or CO2 balance; gas uptake and substance fate require their own model if used. | cp_apples; cp_releases | Actual fruit stock/state reconciliation, not inferred species or production loss |  |
| original_gate_demand | fruit memorandum | Trace actual original-gate quantities from each lot to accepted consignments, closing stock, supplier/useful exits and actual attributed irrecoverable/state-change shares, using explicit original-state conversion evidence. Link the actual attributable original-gate quantity to the commodity dataset outside service; reconcile any identical loss already embedded in that baseline, adding missing demand only once. Do not set original-gate loss equal to present mass deficit, prescribe a generic multiplier or duplicate service waste treatment. | cp_apples; cp_consignment | Original-gate commodity quantity/loss interface outside service exchanges |  |
| refrigerant_fates | refrigerant_supply, recovered_refrigerant, spent_refrigerant and refrigerant_releases | On an explicitly common installed-system plus applicable-container boundary, opening inventory + actual external net receipts - closing inventory - usable external recovery - contained external waste - other documented external exits = balance requiring measured/evidenced release and uncertainty investigation. Internal charge/recovery cancels. Do not automatically label an unexplained balance leakage or use recharge alone as release. Exact blend-to-species conversion requires actual composition/fate evidence and is applied once; a complete species factor is not multiplied again. | cp_refrigerant | Actual supplied/recovered/waste/released fluid views per reference flow |  |
| physical_species | environmental_gases, respiration_releases and other_releases; respiration_releases_biogenic_co2_air; respiration_releases_vapour_air; other_releases_co2_fossil_air; other_releases_methane_fossil_air; other_releases_nitrous_oxide_air | Use actual species/medium measurement or a validated actual cultivar/state/temperature/time physical model with explicit substrate, intake/release roles, all operands and uncertainty. Fruit water loss and respiration are separate state effects, not mass-deficit labels. Actual combustion species use measured or fully reconciled burn and a compatible source-specific factor; do not turn total supply, cleaning chemistry or safety limit into emission quantity. | cp_apples; cp_energy; cp_releases | Actual identified intake and release quantities without overlap |  |
| freight_quantity | freight | For each actual kg*km leg multiply net load converted to kg by actual distance converted to km; preserve exact unit factors/sources, cold-chain resource scope and empty returns. If the actual provider uses another physical unit, retain its matching quantity and burden instead; no count/price proxy. | cp_freight | Actual compatible freight quantity per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | Verify actual service/material/chemical/species identity and property/unit support before final exchanges; Count support and semantic role do not establish product UUIDs. | Concrete flow/detail/support proof |
| thermal_quality | apple_cold_wholesale | Keep actual cultivar/grade, received/maintained state and calibrated temperature/humidity/time evidence with quality gate and excursions. No universal coldness or guaranteed shelf life; source tables are not defaults. | cp_apples; cp_energy; actual buyer acceptance |
| stock_loss_quality | fruit memorandum | Resolve actual mass/tare/state/returns/fates, original-gate quantity and existing loss coverage. Unknown fruit deficit cannot become CO2, waste or original-gate loss by assumption. | cp_apples; original-state conversion and uncertainty |
| refrigerant_quality | all refrigeration roles | Record exact chemical/blend, bounded stock/charge/recovery/external receiver and actual release evidence; unknown balance or nameplate capacity is not leakage. | cp_refrigerant and complete physical ledger |
| coverage_quality | apple_cold_wholesale | Reconcile inherited/new packaging, complete lifecycle assets and direct/provider/freight/treatment/commodity boundaries once. Unknown quantities or missing methods stay gaps; empirical ranges require independent comparable data. | Full coverage and missing-data register |
| period_quality | shared_assets and all stock | Link all actual room/lot/stock and asset phases, replacements/termination and consumers across periods; keep failed consignment burdens and avoid double opening/closing attribution. | cp_assets; cp_apples; actual phase/period records |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| refrigerant_supply | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_supply` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| fuel_supply | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| water_supply | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| additional_packaging | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `additional_packaging` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| environmental_gases | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_gases` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |
| usable_supply_returns | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| recovered_refrigerant | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `recovered_refrigerant` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| spent_refrigerant | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `spent_refrigerant` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| other_wastes | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| refrigerant_releases | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_releases` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| respiration_releases | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `respiration_releases` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |
| other_releases | apple_cold_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_releases` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Meter actual compressors, circulation/defrost, handling, lighting and business support; include failed lots and actual idle/cleaning scope, not only successful sales.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual electricity for apple room refrigeration and wholesale
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed electricity per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual intervals, room/lot load and duration, thermal state and all-consumer allocation. Independent energy guards need comparable cultivar/load/climate/room scope; no kWh-per-kg or per-day default.

#### refrigerant_supply

Expand the actual chemical/blend identity, measured external makeup and installed/bottle stock scope. New charge, reusable recovery and subsequent release are distinct events; no refrigerant type or annual leakage fraction is assumed.

- Identity requirement: Actual supplied refrigeration working-fluid makeup
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed refrigerant supply per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need exact chemical/blend composition, actual purchased net mass, installed and stored stocks, charge/recovery/retained/transferred fates and uncertainty. Top-up alone does not establish emitted mass.

#### fuel_supply

Record actual grade/native quantity and stock-adjusted supply, with measured burn separate. Do not add fuel already covered in complete hired transport/handling services.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual fuel supplied for owned handling and support
- Flow property / unit: Volume / L
- Amount rule: Actual attributed fuel supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual stock/receipt/return records, grade, density/temperature conversion if used and disjoint burn/nonburned fates. No purchased-fuel-equals-combustion rule.

#### water_supply

Include only actual facility support within ordinary-air room operation. Fruit washing/hydrocooling is outside this route; water purchased is not measured wastewater, respiration water or direct abstraction.

Residual inventory requirement after the independently identified cases `water_supply_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased facility cleaning or humidity-support water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed water supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/purpose/period and supplier coverage, any actual humidification/cleaning fate and allocation. Do not infer fruit water uptake/loss from a facility bill.

#### operating_supplies

Expand actual cleaning formulations, filters, lubricants and test consumables by native unit and state. No wax, fungicide treatment or other apple chemical-processing input is authorized by this card.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual room cleaning and maintenance supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed operating supplies per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need SKU/formulation/concentration, net stock/return and actual waste/release fates with conversion sources. No safety-limit or applied-product quantity becomes an emission factor.

#### additional_packaging

Record only actual additional/replacement wrapping, seals, labels or damaged-container replacements owned by this service; inherited boxes/crates are an audit throughflow, not automatically new manufacture.

Residual inventory requirement after the independently identified cases `additional_packaging_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual new or replacement service packaging supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed additional packaging per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need inherited/new/replaced identity, actual SKU native count/mass/area, state, receiver and matching unit conversion. Reusable crates require measured lifecycle service, not full new manufacture every trip.

#### provider_services

Expand actual refrigeration maintenance, testing, hired handling, hygiene, business support and any contracted cold holding in provider-native units. Direct-room work and complete hired services must not overlap.

- Identity requirement: Actual external cold-room and wholesale support results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed provider services per reference flow; cp_providers.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual completed result and native physical quantity, full energy/refrigerant/assets/transport/waste scope and missing coverage. Hours/price are not automatically counted service Item(s).

#### shared_assets

Include attributable complete lifecycle service of actual cold rooms, refrigeration equipment, handling plant, scales, returnable crates/pallets and ICT. Fruit production assets remain outside.

- Identity requirement: Lifecycle-attributed cold-room, handling and reusable assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed shared assets per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need manufacture/maintenance/replacements/end-of-life, all consumers and observed plus evidenced remaining service drivers. Compatible occupied volume-time/handling-cycle evidence is needed, not a default crate life or fixed years.

#### freight

Record actual responsibility-owned inbound/outbound/return/waste legs with loads, distance, refrigerated-service energy coverage and empty returns. Do not count the same delivered-goods freight or vehicle energy twice.

- Identity requirement: Actual non-overlapping apple and service-supply freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual attributed freight per reference flow; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual net load/tare, route/mode/distance and explicit unit conversions, complete refrigerated leg/provider scope and all-consumer driver if shared. No presumed kilometres or tonne equivalence to one consignment.

#### environmental_water

Expand only actual direct abstraction with source/location and use. Purchased water, condensate collection and apple moisture are separate physical roles.

- Identity requirement: Actual source-specific direct environmental water intake
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed environmental water per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual source meter or independently evidenced native quantity and purpose. Unknown direct-intake scope is not a default zero or a duplicate purchased-water input.

#### environmental_gases

Expand an actual identified intake such as oxygen only when the selected respiration/material model explicitly requires and evidences it. Ordinary air circulation is not an automatic purchased-gas exchange; no unexplained fruit mass is an oxygen quantity.

- Identity requirement: Actual identified environmental gas intake if required by the physical model
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed environmental gases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual gas identity, intake role/medium and compatible measurement or full physical-model operands/source; missing evidence stays unresolved rather than creating a stoichiometric default.

#### usable_supply_returns

Match unused supplies to actual input SKU/native state and chosen stock convention. Inherited apple packages and fruit supplier/buyer returns remain in their own throughflow audit, not new supply returns here. Under consumed-only accounting of a proven matched return, omit that matched concrete return exchange; retaining this semantic card does not authorize a second credit.

- Identity requirement: Actual usable operating-supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed usable supply returns per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual external recipient/transfer, native quantity and matched input; retained stock, discarded material and internal reusable-crate circulation are not usable outward returns.

#### recovered_refrigerant

Record actual recovered usable chemical/blend crossing to a documented receiver. Recovered gas still in the system/bottle boundary is closing stock; no automatic virgin-gas substitution credit. A recovered factory-charge quantity must never reduce unrelated current makeup; retain its actual asset/charge origin and upstream burden owner.

- Identity requirement: Actual usable recovered refrigerant transferred externally
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed recovered refrigerant per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need actual recovery weighing, purity/blend/state, receiver and common installed/storage boundary. Do not call every evacuation recovered mass or every recovered kilogram avoided production.

#### spent_refrigerant

Record actual contaminated/unusable recovered fluid and its receiving treatment, separate from usable recovery, internal stock and direct chemical releases.

- Identity requirement: Actual unusable contained refrigeration fluid sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed spent refrigerant per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need actual contained net weight, chemical/blend/composition, receiver and treatment scope. Evacuated system capacity or a service invoice is not measured waste or leakage.

#### other_wastes

Expand actual damaged packing, spent filters, maintenance oils and cleaning wastes by state/native unit/receiver; avoid fruit and refrigerant rows already owning their quantities.

- Identity requirement: Actual non-fruit and non-refrigerant contained wastes
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other wastes per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual material fraction, weight/count/volume conversion and treatment receipt coverage. A replacement package is not proof the inherited whole package was discarded during this service.

#### contained_wastewater

Record actual cleaning/maintenance/condensate mixtures sent to treatment with measured aqueous state and receiver. This route does not wash fruit; contained wastewater is not a second direct outfall.

- Identity requirement: Actual collected facility wastewater sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed contained wastewater per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual collected/received volume, composition/concentration basis and treatment owner; purchased water and lost apple moisture do not directly establish this volume.

#### water_outfalls

Expand actual direct outfall/receiving medium with measured quality. Do not classify contained treatment transfer or inferred fruit transpiration as this water-discharge flow.

- Identity requirement: Actual direct facility water discharge to environment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed water outfalls per reference flow; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual outfall volume/interval, receiver and quality; carrier water and separate pollutant mass views must not be added as one equivalent material flow.

#### refrigerant_releases

Expand exact chemical/species and medium from actual measured leakage or complete audited physical-fate evidence, with blend composition and uncertainty where applicable. Unknown charge balance is not automatically release.

- Identity requirement: Actual identified refrigeration-fluid species releases to declared media
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed refrigerant releases per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Require actual chemical/charge/recovery/retained/waste/other-transfer operands on one boundary and interval, measurement method or compatible full factor. Do not use nameplate charge times generic annual leak rate or equate top-up to leakage.

#### respiration_releases

Only actual species/medium-specific measurement or a validated matching cultivar/state/temperature/time model establishes a release. Biogenic CO2, water vapour and intake oxygen are different physical roles; no generic conversion from fruit weight loss.

Residual inventory requirement after the independently identified cases `respiration_releases_biogenic_co2_air`; `respiration_releases_vapour_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual identified fruit respiration or water-vapour releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed respiration releases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need compatible actual state, temperature/time series, substrate/basis and full model/measurement operands, uncertainty and receiving compartment. Unexplained wet-mass change is not CO2, water vapour or dry-matter loss by default.

#### other_releases

Expand actual species and medium from actual burn, cleaning or other operation, separate from refrigerant and fruit respiration rows and upstream provider treatment.

Residual inventory requirement after the independently identified cases `other_releases_co2_fossil_air`; `other_releases_methane_fossil_air`; `other_releases_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual identified combustion, cleaning and other direct releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other releases per reference flow; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or compatible actual activity/species factor with composition/fate sources as required. Do not convert total cleaning product, safety limit or missing stock into an emission.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_service | Verify actual ownership resale, business buyer, unique accepted consignment N > 0 and all actual cultivar/grade/net mass/state/thermal-time/commercial qualifiers. Boxes, trucks and cancelled attempts cannot increase count. |  |
| validate_preservation | apple_cold_wholesale | Check usable before-state, actual ordinary-air cold-room intervention, maintained still-intact accepted after-state and all reject/loss/return exits with actual input roles. No CA/MA, chemical treatment, washing, processing or numeric regime inferred. |  |
| validate_fruit | fruit memorandum | Reconcile physical fruit/packaging states and actual original-gate assigned demand/loss coverage; resolve unexplained differences with compatible methods, never mass-deficit species. A missing commodity link blocks complete-chain readiness. |  |
| validate_refrigerant | refrigerant_supply, recovered_refrigerant, spent_refrigerant and refrigerant_releases | Check one installed/storage boundary, actual chemical/blend and every supply/stock/recovery/waste/transfer/release fate with uncertainty. No top-up or nameplate times default annual rate; no extra species fractions on complete factors. |  |
| validate_real_exchanges | all inventory rows | Every actual expanded native-unit exchange needs node-owned protocol and identity/state/receiver evidence; do not count inherited boxes as new supplies, reusable assets as new per-trip manufacture, or contained waste/water as direct emissions. Actual environmental input/gas/species roles require separate evidence, never silent zero. |  |
| validate_allocation_period | shared_assets and apple_cold_wholesale | Check all actual consumers/periods, actual lot campaigns/continuous room operation, idle/failed/cleaning attribution and full asset lifecycle/observed plus evidenced remaining service. One physical resource has one owner and one per-N normalization. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after concrete identity and actual foreground completeness review |
| downstream_use | Ordinary-air refrigerated apple wholesale-service add-on linked to separately matched commodity production/original-gate adjustment |
| allowed_use | Actual merchant-owned intact fresh apple room-cooled/held consignment with matching cultivar/quantity/state/thermal-time and accepted commercial gate |
| excluded_use | Standalone apple footprint or orchard production; all-fruit average; CA/MA/fruit treatment/processing/retail/agency; monetary service proxy; full-chain claim without actual commodity adjustment |
| required_metadata | Actual merchant/site/room/period/lot/consignment, ownership, cultivar/grade, net fruit/tare/moisture/state, received/maintained temperature/humidity/time/quality, actual package/refrigeration/provider/freight/treatment scope and commodity-link owner/status |
| required_quality_disclosure | Concrete identities/support and unresolved actual data, stock/state/physiology and refrigeration uncertainty, all-consumer/full-life asset assumptions, missing coverage/methods and independent range limits |
| update_trigger | Changed actual cultivar/grade/room/atmosphere/route/gate, cooling/quality evidence, refrigerant/asset/provider scope, packaging, loss-state/commodity coverage or recording method |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-fruit-wholesale | official_guidance | UNSD CPC Version 3.0 explanatory notes, division61/subclass61021 (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Own-account fruit/vegetable wholesale classification only; this intact refrigerated apple service is a narrower subset. |
| fao-temperature-humidity | official_guidance | FAO, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, section6 Temperature and relative humidity control. https://www.fao.org/4/x5403e/x5403e08.htm | Qualitative room refrigeration, respiration/water-loss and cultivar/chilling-state questions; no temperature, energy, duration, physiological factor or shelf-life value adopted. |
| fao-horticultural-storage | official_guidance | FAO, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, section7 Storage of horticultural crops. https://www.fao.org/4/x5403e/x5403e09.htm | Actual received quality, circulation/humidity and co-storage compatibility questions; numeric storage tables and CA examples are not this route defaults. |
