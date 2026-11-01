---
pcr_id: pcr.short-stay-live-cattle-own-account-wholesale-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Short-stay live cattle own-account wholesale services

## 1. Scope and Applicability

This PCR is a service add-on for a merchant that takes ownership and resale risk of live domestic cattle of genus Bos, temporarily assembles/holds them in an actual dealer depot and resells an accepted consignment to a business buyer. The route includes identity and arrival-condition checks, short-stay care, actual feed/drinking/cleaning, fitness and segregation/quarantine events, handling and commercial handover. "Short-stay" describes a transitional trade purpose, not an assumed number of hours; actual arrival/exit time is mandatory. It is not a rearing or weight-gain production system.

Exclude breeding, rearing, fattening, pasture production, slaughter, animal-product manufacturing, auction/fee/commission agency, retail and independently sold storage-only care. Separately required animal production or prolonged grow-out changes the boundary and requires a reviewed production dataset, not silent extension of this service. The animal stock remains an individually traceable memorandum, not a consumed live-animal production input or the wholesale-service output.

All upstream production of successfully traded, returned and subsequently dead cattle is outside this service add-on. The linked cattle commodity system must reconcile original-production-gate loss demand and existing coverage once before a complete-chain claim. Actual depot care, actual disposal and declared downstream receiving treatment remain inside this service once. This does not certify health, welfare or legal compliance: actual competent assessment, applicable requirements, acceptance and movement records must be supplied.
The default scope has no planned milking, calving or deliberate growth production. Lactation/pregnancy/health state must be declared at admission. Any actual birth, milk extraction or separate production output triggers an explicit revised boundary and additional actual-ID/output/fate records before final data; it must not be forced into the original-animal head ledger or assumed absent because this candidate excludes planned production.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.short-stay-live-cattle-own-account-wholesale-services` |
| classification_refs | CPC 3.0 `61014`; narrower cattle dealer-depot service subset |
| covered_products | Own-account wholesale consignment service for live Bos cattle via short-stay assembly/depot |
| excluded_products | Other live animal species; animal production, growth or slaughter; agency/auction fees; retail and standalone storage/care |
| representative_product | Completed live cattle wholesale consignment service with animal identity, actual headcount/class/state and accepted commercial handover |
| production_route | Merchant ownership receipt; temporary secure holding and actual care/segregation; business-buyer resale handover |
| market_state | Counted commercial service, with separate individual-animal stock, welfare and original-gate commodity ledgers |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed short-stay live cattle own-account wholesale consignment service |
| How much | 1 completed accepted wholesale consignment service |
| How well | Individual animal identities, actual cattle class/count/state and measured liveweight basis, competent welfare/fitness evidence and ownership resale/commercial acceptance |
| How long or cycle | Actual arrival-to-exit holding intervals and handover period; animal-days and reporting/asset periods are recorded separately |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed short-stay live cattle own-account wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | consignment_id; animal_ids; actual_head_count; cattle_class; sex_age_condition; actual_liveweight_basis; ownership_and_resale_risk; buyer_business_role; origin_and_destination; actual_arrival_exit; duration_unit; welfare_fitness_acceptance; contract_handover_gate; geography_and_period; transport_treatment_coverage; linked_original_gate_loss |

N > 0 is the number of unique actual accepted commercial consignments net of actual cancellations, not animal head count, trucks, invoice lines or animal-days. Each consignment retains its actual animal set. Splitting paperwork does not create services. Different animal classes, counts, weights and care duration are not equivalent just because each service counts as one. All qualifiers must be declared in the concrete data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | reference product | Number of items | Item(s) | Use actual accepted consignment IDs and N > 0, distinct from head count and animal-time. Actual animal set, care/fitness/state and commercial gate are mandatory qualifiers. |
| animal_time | enteric_methane and other_species; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | Animal occupancy activity | Actual head-time | Record each identified animal arrival/exit/death and custody boundary; partition non-overlapping occupancy intervals by actual cattle class/diet/state and reporting period. Translate duration units explicitly; throughput is not average population. |
| animal_stock | animal memorandum and carcasses; carcasses_atomic_case | Count and separate measured mass | Head count; kg if actually measured | Reconcile IDs and actual head counts. Liveweight changes, shrink/gut fill and water intake cannot establish death, growth, feed intake, manure mass or species release. Carcass kg requires actual independent measurement/receiver record. |
| feed_and_fates | feed, bedding and manure | Actual compatible mass/volume | Native unit and stated moisture/composition basis | Preserve as-fed/dry-matter basis, actual stock and offered/refused/intake evidence. Manure mixture, VS, N and emitted species are different quantities requiring separate measured or method-supported operands. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified live cattle received in actual declared class/state at merchant ownership/custody gate; origin, prior transport and commodity-production coverage stated |
| starting_condition_role | Merchandise starting-state fact; animal upstream production remains outside service and is not treated as burden-free complete supply |
| product_classification_scope | CPC 61014 own-account live cattle wholesale via temporary dealer depot, excluding agency and animal production |
| recursive_input_rule | Do not treat each live animal sale or transfer as recursive service production. Keep animal stock memorandum and original-gate commodity linkage separate; outsourced actual care/provider results use explicit non-overlapping coverage. |
| upstream_dataset_requirement | Concrete feed, energy, supplies, provider and complete asset lifecycle inputs; separate original-gate animal production and attributable mortality/loss adjustment before full-chain use |
| disclosure | Animal ID/class/count/state, actual time/ownership, welfare/fitness/acceptance, origins/destinations, quarantine/death/cull/return fates, manure/wastewater/transport coverage and all unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_service | depot_wholesale | Include actual temporary-care, feed/water, sanitation, loading, shared support, actual treatment/disposal and declared transport responsibilities once. Exclude all traded-animal upstream production including subsequent mortality; retain the linked original-gate loss adjustment obligation. |  |
| boundary_welfare | depot_wholesale | Record actual arrival condition, secure holding, care/fitness assessment, compatible segregation, necessary actual feed/water/rest and emergency response, with competent records and applicable local criteria. This PCR does not supply universal welfare thresholds or medical instructions. | woah-land-transport |
| boundary_identity | depot_wholesale | Track each animal through actual origin, arrival, movement, ownership, exit/return and death event. Use actual applicable identification and recording requirements; the cited England/Wales record example is not a universal legal timetable. | govuk-cattle-holding-register |
| boundary_emissions | depot_wholesale | Animal occupancy, diet and actual manure system determine the data needed for enteric and manure emission methods. Short stays do not imply zero emissions and yearly throughput is not a full-year animal population. Method/source/time/unit and current applicable factors require specific evidence. | ipcc-livestock-2019 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| depot_wholesale | Integrated merchant-owned cattle depot wholesale operation | required | Actual merchant-owned cattle receipt, temporary holding and accepted B2B resale | Integrated wholesale responsibility; animal stock memorandum, care, rejects/quarantine and residual fates all event-linked | `accepted_service` |

All events use animal ID, consignment, pen/cohort and campaign/period keys. Temporary feeding/care is not a separate growth output. Quarantined or rejected animals remain in actual care/occupancy records until their real exit or death; actual return transfers pair with origin and cancellation where applicable. Within-yard pen movements and duplicate manifests never create another purchase, death or accepted consignment. Manure and usable residual outlets are actual fates, not intended manure co-production by default.

### Process: Integrated merchant-owned cattle depot wholesale operation (`depot_wholesale`)

#### Inputs

##### Product flows

###### Actual liquid treated tap-water supply (`drinking_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed drinking water per reference flow; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Use actual drinking supply, trough/cleaning separation, leakage/dumping and head-time records. Missing drinking evidence is a gap, not zero or a universal litres-per-head benchmark.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed cleaning water per reference flow; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Actual meter/issue volume and cleaning events, premises/vehicle responsibility, period and provider coverage are needed. Do not set wastewater equal to purchased cleaning water.

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

Range evidence need: Need actual meter intervals, animal occupancy/handling support drivers and all-consumer denominator. No fixed electricity per head or consignment; generic electrical Energy support remains separate from identity.

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

Range evidence need: Need grade, opening/receipts/closing, net/tare and usable-return evidence, any density/temperature conversion, actual burn and disjoint nonburned fates. No generic combustion fraction.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed short-stay live cattle own-account wholesale consignment service (`accepted_service`)

One actual accepted ownership-based resale consignment to a business buyer, with animal IDs, head count, class/state and agreed commercial/welfare handover. Live cattle are merchandise audit objects, not this service-flow identity.

- Selected flow: Completed short-stay live cattle own-account wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: The count defines normalization only; actual number/class/state/weight basis, dwell time, fitness and commercial acceptance remain required qualifiers. No typical herd, truckload or liveweight per service count.

##### Waste flows

###### Dead bovine carcass (`carcasses_atomic_case`)

Conditional on independently recorded actual Dead bovine carcass. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `carcasses`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Dead bovine carcass
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed carcasses per reference flow; cp_animals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_animals`

Range evidence need: Need individual-ID death evidence, actual measurement/receiver quantity, period and disposal route. Head-count mortality and carcass kg are separate auditable views; no generic carcass yield or loss factor.

##### Elementary flows

###### Methane from cattle enteric fermentation to air (`enteric_methane`)

Quantify CH4 for actual cattle classes and their actual in-boundary holding time, including quarantined, returned and subsequently dead animals until exit/death. Use compatible measurement or a documented method with its own activity/time basis; not a lifetime animal-production inventory.

The existing actual cattle-enteric CH4 row is non-fossil methane directly to air; retain actual animal class, diet, residence-time, compatible method/tier and kgCH4 basis. No annual-headcount-as-year multiplication, default factor or lifetime livestock burden. Unspecified-air identity does not override a finer evidenced receiving subcompartment. Manure methane remains separate and must not duplicate this row.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed enteric methane per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need actual class/condition/diet and occupancy time, method/tier, factor activity/time basis/source and uncertainty. Annual per-head factors cannot be multiplied by annual through-traded head count as if each stayed a year; no uniform factor is selected here.

###### Actual separately evidenced fossil carbon dioxide emitted to air (`other_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other species per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need actual species/medium and measured emission or compatible activity with system/storage-time/climate, factor basis, composition/fate and molecular conversion source. Manure wet mass, liveweight residual and a safety limit are not emission quantities.


###### Actual separately evidenced nitrous oxide emitted to air (`other_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other species per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need actual species/medium and measured emission or compatible activity with system/storage-time/climate, factor basis, composition/fate and molecular conversion source. Manure wet mass, liveweight residual and a safety limit are not emission quantities.


###### Actual separately evidenced ammonia emitted to air (`other_species_ammonia_air`)

Only actual directly released ammonia CAS7664-41-7 to air, with measured or independently supported species-specific amount, source and medium. Native mass is kgNH3, not kgN or ammonium; no default volatility, dose, manure factor or whole-fluid release. The unspecified-air identity does not replace a known finer compartment. Exclude upstream/provider emissions and contained transfers.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other species per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need actual species/medium and measured emission or compatible activity with system/storage-time/climate, factor basis, composition/fate and molecular conversion source. Manure wet mass, liveweight residual and a safety limit are not emission quantities.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_operations | depot_wholesale | Assign direct event/submeter resources first. Allocate actual remaining shared care/pen/utility burdens by documented compatible drivers such as class-specific occupied pen area-time or observed animal-days; handling may require actual head/mass/events. Keep all actual consumers including quarantined/dead/returned animals, idle treatment and failed consignments. Choose causal drivers, not default price or equal jobs; divide attributable total by N once. |  |
| allocate_assets | shared_assets | Enumerate actual asset consumers and periods. Attribute complete manufacture, maintenance, replacements and end-of-life by actual used driver / lifetime driver from observed service or observed history plus evidenced remaining use/termination. State source, uncertainty, sensitivity and update. Use either asset-equivalent fraction / N or full-lifecycle provider-native service / N, never both or normalized twice. |  |
| allocate_supplies | feed, bedding, care supplies and fuel | For each native SKU/state S = attributed opening + net external receipts - closing. Choose gross-with-outlets S / N with usable external return output OR consumed-only (S - usable external return) / N without a second return credit. Closing includes recovered retained stock; waste/leakage retains supply burden. Internal feed returns are transfers and must not increase purchases. Feed supplied, feed ingested and manure excreted are distinct measurements. |  |
| allocate_original_gate | animal memorandum | All animal production remains outside service. For each actual original-gate animal class/cohort, send uniquely identified attributable unrecovered mortality/loss heads, their original production-state quantity and existing baseline loss coverage to the linked commodity model. If a head-based baseline excludes those exact losses, add actual attributable lost-head demand to its accepted-animal demand once; retain original-gate measured weight if the baseline is mass-based, never current carcass or generic head-to-weight conversion. Do not treat live culls, supplier returns, theft with unknown fate or unsold closing stock automatically as death/loss. Unknown attribution or baseline coverage blocks complete-chain claims. Actual disposal/treatment already in this service is excluded from that production-only adjustment. |  |
| allocate_residuals | manure_waste and usable_manure | Record actual manure waste or genuine usable handover and native quantity once. No avoided-fertilizer or disposal substitution credit is automatic; no zero-burden coproduct by label. If material intentional manure/animal co-production appears, review intended outputs and attribution boundary before final dataset, instead of silently extending short-stay wholesale. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | depot_wholesale | accepted_service | Commercial ownership and acceptance ledger | site_id; period_id; campaign_id; consignment_id; contract_id; seller_id; buyer_id; buyer_business_role; animal_id_list; actual_heads; head_unit; class; age; sex; condition; lactation_state; pregnancy_state; liveweight; liveweight_unit; liveweight_method; ownership_start; resale_risk; commercial_gate; welfare_assessment; fitness_record; accepted_at; time_zone; cancellation_id; N | Reconcile actual commercial animal sets, ownership and accepted handovers against animal movement/fitness records; reject invoice/truck duplication. | Item(s) | Each consignment and cancellation | Actual receipt-to-handover periods | Merchant depot and agreed B2B gate | per reference flow | Commercial/ownership and competent actual acceptance evidence |
| cp_animals | depot_wholesale | animal memorandum and carcasses | Individual-ID head and residence ledger | site_id; period_id; campaign_id; consignment_id; animal_id; original_id; class; origin; destination; pen_id; event_id; event_type; arrival_time; exit_time; time_zone; duration; duration_unit; ownership_boundary; head_count; head_unit; quarantine_state; lactation_state; pregnancy_state; birth_or_milk_event; fitness_state; rejection_reason; return_transfer_id; death_time; death_evidence; carcass_mass; carcass_mass_unit; carcass_receiver; carcass_treatment_coverage; original_gate; original_gate_dataset; original_gate_quantity; original_gate_unit; original_gate_weight_method; baseline_loss_coverage; attribution_owner; unexplained_id_gap; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Reconcile individual animals through actual heads and movement/death/return/custody records. Partition non-overlapping residence and report actual original-gate commodity coverage; carcass quantity uses independent actual receiver/scale evidence. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Head count, actual duration; actual carcass native unit | Each animal event and period boundary | All actual holding including quarantine, rejection and death | One identified animal and real origin/destination | per reference flow | Individual ID, origin/movement/competent-death proof, head reconciliation and receiver quantity |
| cp_feed | depot_wholesale | feed and bedding | Native supply, offered and residual ledger | site_id; period_id; campaign_id; consignment_id; pen_id; animal_class; animal_id_group; event_id; event_time; time_zone; feed_or_bedding_SKU; composition; native_unit; opening_quantity; receipt_gross; receipt_tare; receipt_net; closing_quantity; usable_external_return; offered_quantity; refused_quantity; recovered_internal_quantity; measured_intake; intake_method; as_fed_or_dry_basis; moisture_fraction; moisture_method; moisture_source; dry_matter_source; actual_animal_time; animal_time_unit; actual_waste; receiver; uncertainty | Measure actual feed/bedding supply and its stock/animal-time attribution. Retain offered, refused/recovered and measured-intake evidence separately; never infer intake or waste from animal liveweight. | Actual native unit and declared moisture basis | Each feed/bedding event and stocktake | Actual holding and relevant stock periods | Actual feed/bedding SKU and pen/animal group | per reference flow | Weighing, moisture/state, stock/fate and actual animal-time records |
| cp_water | depot_wholesale | drinking_water, cleaning_water and environmental_water | Source and purpose water ledger | site_id; period_id; consignment_id; event_id; meter_id; water_source; water_role; purchased_or_direct; start_time; end_time; time_zone; quantity; native_unit; trough_supply; leakage; dumped_water; cleaning_quantity; other_use; retained_or_consumed_view; attribution_driver; driver_unit; all_consumer_driver; supplier_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual source-specific supply and distinguish drinking provision, ingestion if actually measured, washing, leakage and other uses. Water balance requires actual fates; direct withdrawal is separate from purchased supply. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3 or actual source-native unit | Each event/meter interval | Full actual holding/support period | Actual source and use responsibility | per reference flow | Meter calibration, source/purpose split and documented attribution |
| cp_supplies | depot_wholesale | care_supplies, fuel_supply and usable_returns | Native SKU stock and care-event ledger | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening_quantity; receipt_gross; receipt_tare; receipt_net; closing_quantity; recovered_closing; usable_external_return; actual_administered; care_record; nonburned_waste; unrecovered_loss; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_source; gross_or_consumed_view; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Reconcile net external receipts after tare, actual stock and usable returns in native units; retain care/application and complete chemical/fuel fates, without prescribing actual treatment. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual SKU native unit | Each supply/care event and stocktake | All attributed periods | Actual SKU and actual depot activity | per reference flow | Matched stock/care/return and state-specific conversion evidence |
| cp_energy | depot_wholesale | electricity and actual fuel burn | Meter and combustion ledger | site_id; period_id; campaign_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; energy_type; reading_start; reading_end; reading_unit; actual_burn; burn_unit; burn_method; carried_closing; nonburned_return; nonburned_waste; unrecovered_nonburned_loss; attribution_driver; driver_unit; all_consumer_driver; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual operation and actual burn; reconstruct burn only with complete disjoint native fates and unknown-loss investigation. Reconcile direct/provider energy and actual animal/handling-time attribution. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy or fuel unit | Each meter interval and burn event | Whole actual attributed operation | All included direct depot/support assets | per reference flow | Calibration, burn/fate evidence and complete coverage |
| cp_providers | depot_wholesale | provider_services | Actual completed-result and coverage ledger | site_id; period_id; consignment_id; provider_id; service_id; event_date; actual_result; physical_quantity; native_unit; duration; duration_unit; completion_proof; upstream_dataset; energy_coverage; feed_water_coverage; material_coverage; asset_lifecycle_coverage; transport_coverage; disposal_treatment_coverage; emission_coverage; attribution_driver; all_consumer_driver; missing_coverage | Verify actual delivered veterinary/testing/cleaning/handling/business result, physical unit and full upstream scope; reconcile with direct rows and treatment/freight so each burden has one owner. | Actual provider-native unit | Each actual result | Actual provider period | All included provider responsibilities | per reference flow | Completion, unit and coverage matrix including emergencies |
| cp_assets | depot_wholesale | shared_assets | Full-life shared-driver ledger | site_id; period_id; consignment_id; asset_id; configuration; consumer_id; phase_id; event_date; manufacture_dataset; maintenance_record; replacement_record; end_of_life_record; driver_used; driver_unit; driver_lifetime; observed_history; evidenced_remaining_use; remaining_source; termination_assumption; attribution_view; uncertainty; sensitivity; update_trigger | Enumerate all asset consumers/periods, actual observed service and evidenced remainder; match complete lifecycle burden to one compatible driver and attribution view. | Item(s) or actual lifecycle-service native unit | Every asset event/period review | Actual and evidenced remaining asset life | All consumers and service periods | per reference flow | Lifecycle completeness and observed/evidenced driver assumptions |
| cp_freight | depot_wholesale | freight | Actual journey and leg ledger | site_id; period_id; consignment_id; animal_id_list; leg_id; event_date; origin; destination; route; mode; provider_id; actual_load; load_unit; load_tare; load_conversion_factor; load_conversion_unit; load_conversion_source; distance; distance_unit; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; provider_native_unit; empty_return_method; welfare_journey_scope; attribution_driver; driver_unit; all_consumer_driver; upstream_coverage; duplicate_leg_check | Use actual net load and route distance with explicit compatible unit conversions, or the exact actual provider-native result. Retain animal journey, empty return, responsibility and non-overlap evidence. | kg*km or actual provider-native unit | Each actual leg | All included inbound/outbound/return/disposal journeys | Declared transport responsibility | per reference flow | Load/distance/journey documents and complete provider coverage |
| cp_environment | depot_wholesale | manure_waste, usable_manure, other_wastes, contained_wastewater and water_outfalls | Actual collected/received fate and treatment ledger | site_id; period_id; consignment_id; event_id; event_date; start_time; end_time; time_zone; duration; duration_unit; material_id; material_state; manure_system; initial_manure_stock; final_manure_stock; actual_collected_mass; mass_unit; actual_collected_volume; received_volume; volume_unit; density; density_unit; temperature; temperature_unit; moisture_basis; solids_fraction; N_quantity; N_unit; N_basis; VS_quantity; VS_unit; VS_basis; composition_source; concentration; concentration_unit; concentration_basis; source; receiver; product_quality; usable_handover; treatment_dataset; treatment_coverage; receiving_medium; outfall_id; uncertainty | Measure actual native mass/volume and composition at collection/receiver, distinguishing manure/liquid mixtures, usable products, discarded residuals and direct outfalls. Identify treatment responsibility, previous/carried manure and storage interval; do not duplicate a physical mixture or infer its amount from headcount/water supply. | Actual native material unit | Each collection, transfer or direct outfall | Actual holding and manure/waste storage interval | Actual depot/receiver boundary | per reference flow | Actual mass/volume/composition and receiver/treatment evidence |
| cp_emissions | depot_wholesale | enteric_methane and other_species | Actual activity and species-method ledger | site_id; period_id; consignment_id; event_id; animal_class; age_condition; diet_id; animal_id_group; occupancy_start; occupancy_end; time_zone; animal_count; animal_time; animal_time_unit; factor_time_unit; days_per_factor_year; factor_year_basis_source; method_tier; method_version; actual_method_operands; operand_units; operand_basis; operand_sources; factor_category_match; diet_characterization; species; species_or_N_basis; molecular_conversion; molecular_conversion_source; receiving_medium; actual_activity; activity_unit; manure_system; manure_storage_start; manure_storage_end; storage_duration; storage_duration_unit; temperature; temperature_unit; climate_basis; actual_VS; VS_unit; actual_N; N_unit; source_scope; emission_factor; factor_unit; factor_basis; factor_source; measurement; measurement_unit; actual_burn; burn_unit; composition_fraction; composition_basis; composition_source; release_fraction; fate_basis; fate_source; upstream_emission_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual identified animal-time/diet and actual manure-system activity for a compatible method; retain all required raw operands, species/N basis and time conversions. Distinguish enteric, on-site manure, fuel and off-site provider scopes; no automatic factor or species quantity from unexplained stock/weight changes. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg species with actual compatible activity/time units | Each modeled/measured interval and system change | Actual in-boundary animal occupancy and manure-storage periods | Each actual source and receiving medium | per reference flow | Actual occupancy/activity and method/factor/measurement provenance with uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_quantities | all inventory rows | Assign actual direct and shared quantities using consignment, animal, care, pen and period evidence with the documented all-consumer driver. Divide actual attributable totals by N once; unsuccessful consignments retain resources without increasing accepted N. | cp_consignment; cp_animals; cp_feed; cp_water; cp_supplies; cp_energy; cp_providers; cp_assets; cp_freight; cp_environment; cp_emissions | Actual operational exchange per reference flow |  |
| animal_identity_time | animal memorandum and enteric_methane | For individual IDs, opening heads + external arrivals + actual return arrivals - closing heads - actual external live exits - actual deaths = unexplained identity/head gap. Internal pen transfers cancel. Investigate every gap, never infer death or emission. Sum actual non-overlapping in-boundary intervals by cattle class and convert recorded duration to method activity units; dead/rejected/returned cattle contribute only their actual time. | cp_animals | Actual head reconciliation and class-specific animal-time |  |
| original_gate_link | animal memorandum | Provide per original-gate cohort the actual attributable unrecovered mortality/loss identities and original-gate quantity to the commodity system, together with accepted-original-animal demand and baseline loss coverage. Add missing original-gate demand once only; if baseline already covers it, reconcile instead. Use original measured head/mass basis, not liveweight change/current carcass yield; live culls/returns/closing stock are actual live exits/stocks, not automatic lost heads. Disposal/treatment already in service is excluded from the production-only adjustment. | cp_animals; cp_consignment | Original-gate commodity adjustment outside service inventory |  |
| enteric_method | enteric_methane | Use either compatible actual CH4 measurement or an evidenced category/diet method over actual in-boundary animal-time. If a factor is kg CH4 per head per year, multiply class-specific animal-days by that factor divided by the source-defined days per factor year, then attribute to consignments and divide by N once. A daily activity factor uses its own compatible unit without another annualization. Preserve method/tier, factor source, uncertainty and any required diet/intake operands. This does not adopt a default factor or infer CH4 from head turnover or liveweight residual. | cp_animals; cp_feed; cp_emissions | kg enteric CH4 to air per reference flow | ipcc-livestock-2019 |
| manure_species | other_species; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | Choose actual direct measurement or an evidenced actual-system manure method requiring compatible actual N, VS, system share, retention/storage interval and temperature/climate as applicable. Retain species/N basis; if N2O-N must become N2O, apply the documented molecular conversion once. A provider/full species factor already covering composition/fate is not multiplied by those fractions again. Do not infer species from wet manure, missing liveweight or all water purchased. | cp_environment; cp_emissions | Actual identified species and media with complete method coverage | ipcc-livestock-2019 |
| fuel_freight | fuel_supply, freight and other_species; fuel_supply_diesel_supply; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | Fuel supply follows actual stock convention; burn is measured or reconstructed from complete disjoint carried closing, usable external return, contained nonburned waste, unrecovered nonburned loss and actual burn. Total spill is audit-only if its resolved fates already appear. Each freight leg uses actual kg load times km, with explicit unit conversions and non-overlapping provider/empty-return coverage; species use actual compatible activity and factor. | cp_supplies; cp_energy; cp_freight; cp_emissions | Actual supply, burn, kg*km and species views without duplication |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | Verify actual product/service/species and support chain before final exchange binding. Semantic labels and reference Count support do not verify animal/service/CH4 UUIDs. | Concrete flow-detail and support evidence |
| trace_time_quality | animal memorandum | Every original/changed animal ID, actual custody/movement/fitness/return/death event and interval requires traceable evidence. No unknown head gap, static head snapshot or generic weight substitutes for actual occupancy. | cp_animals and competent actual welfare/identity records |
| method_quality | enteric_methane and other_species; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | Use actual class/diet/manure system, activity/time/source coverage, method/tier and compatible factor/species basis; quantify uncertainty and state all missing operands. No universal short-stay emission factor. | cp_emissions; actual factor/measurement provenance |
| coverage_quality | depot_wholesale | Reconcile service/commodity, animal stock/feed input, water/manure/wastewater, direct/provider and asset/transport/treatment responsibilities. Unknown quantity/coverage cannot become zero; independent ranges need comparable actual care and residence. | Full coverage matrix and missing-data register |
| period_quality | shared_assets and depot_wholesale | Link all periods and phases including unfinished care/consignments, stock carry, replacements and termination with one event/asset owner. | cp_assets; cp_animals; phase-period reconciliation |

The animal head reconciliation is an original-animal movement/death audit, not a growth or material-balance model. Any actual birth or milk event requires explicit additional identity/output/fate records and reviewed boundary amendment before final data. A mass-based upstream mortality interface requires the actual original-gate production reference weight/unit and predecessor coverage, not the terminal liveweight or carcass receiver quantity.

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| feed | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `feed` under `cp_feed`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_feed`; actual source-linked native records |
| drinking_water | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `drinking_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| cleaning_water | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| bedding | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `bedding` under `cp_feed`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_feed`; actual source-linked native records |
| care_supplies | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `care_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| electricity | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| fuel_supply | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| usable_returns | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| usable_manure | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_manure` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| manure_waste | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `manure_waste` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| carcasses | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `carcasses` under `cp_animals`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `carcasses_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_animals`; actual source-linked native records |
| other_wastes | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| contained_wastewater | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| water_outfalls | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |
| other_species | depot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_species` under `cp_emissions`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_emissions`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### feed

Only actual depot feed, by feed identity and as-fed/dry-matter state; not the lifetime ration embodied in traded animals. Include stock-adjusted unconsumed feed lost or wasted, with fate and one upstream owner.

- Identity requirement: Actual feed supplied for temporary cattle care
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed feed per reference flow; cp_feed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`

Range evidence need: Actual offered, refused/recovered, stock and moisture records are needed by animal class and holding interval. Do not infer intake from liveweight change or set a typical daily ration; empirical guards need the same actual diet, class and residence.

#### drinking_water

Record actual drinking-water supply and its source, meter or evidenced allocation independently of cleaning water. A meter supply total can include leakage or trough dumping; do not label all supplied water as ingested.

Residual inventory requirement after the independently identified cases `drinking_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased drinking water supplied to cattle
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed drinking water per reference flow; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Use actual drinking supply, trough/cleaning separation, leakage/dumping and head-time records. Missing drinking evidence is a gap, not zero or a universal litres-per-head benchmark.

#### cleaning_water

Record actual pen/vehicle washing, sanitation and ancillary water. It is not animal intake or a measured wastewater/discharge quantity; retain collection and receiver scope.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased water for depot washing and site support
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed cleaning water per reference flow; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Actual meter/issue volume and cleaning events, premises/vehicle responsibility, period and provider coverage are needed. Do not set wastewater equal to purchased cleaning water.

#### bedding

Expand actual straw, wood or other bedding identity and moisture/native quantity. It is an operating input, not additional grain/feed by default; retain spent bedding and manure mixture fate.

- Identity requirement: Actual bedding and animal-contact consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed bedding per reference flow; cp_feed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed`

Range evidence need: Collect actual bedding SKU, opening/receipt/closing, usable return and contaminated spent fraction. A bedding guardrail requires actual pen condition, cleaning cycle and animal-time, not generic housing assumptions.

#### care_supplies

Expand actual formulation, concentration, native unit and application under actual competent-care records; do not prescribe medicines, dosages or disinfection recipes. Record unused returns and actual waste/release paths.

- Identity requirement: Actual veterinary, disinfection and maintenance supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed care supplies per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual medicine/formulation/SKU quantity, concentration basis, care-event and native conversion evidence are required. A safety limit or administered-product mass is not an elementary emission factor.

#### electricity

Record metered handling, lighting, pumps, ventilation, welfare-support and office electricity once, including quarantine and unsuccessful consignments; reconcile direct and provider coverage.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Electricity supplied to actual depot operations
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed electricity per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter intervals, animal occupancy/handling support drivers and all-consumer denominator. No fixed electricity per head or consignment; generic electrical Energy support remains separate from identity.

#### fuel_supply

Retain actual fuel grade/native supply quantity and stock-adjusted amount. Direct combustion uses separately measured or completely reconciled burn, not fuel bought or total spillage.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual site-vehicle and support fuel supply
- Flow property / unit: Volume / L
- Amount rule: Actual attributed fuel supply per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need grade, opening/receipts/closing, net/tare and usable-return evidence, any density/temperature conversion, actual burn and disjoint nonburned fates. No generic combustion fraction.

#### provider_services

Expand actual competent-care, testing, hired handling, cleaning and administration results in provider-native units with upstream coverage. Count only a truly counted completed result; price and hours are not automatically Item(s).

- Identity requirement: Actual veterinary, handling and business support services
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed provider services per reference flow; cp_providers.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need completed-result evidence and native quantity plus energy/feed/material/assets/transport/waste coverage. Actual emergency care remains included even if the animal or consignment is not accepted.

#### shared_assets

Attribute actual yards, pens, loading equipment, water systems, vehicles, scales and ICT lifecycle service across all users/periods. No assumption that a traded animal is a service asset.

- Identity requirement: Lifecycle-attributed depot and business-support assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed shared assets per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Require complete manufacture/maintenance/replacement/end-of-life coverage and observed plus evidenced remaining driver. Comparisons need actual animal class/occupancy/handling; no universal asset life.

#### freight

Record actual owned animal/supply/return/disposal legs by native provider unit and scope; kg*km uses actual live load and distance, not number of head times a typical weight. Preserve empty returns and welfare journey coverage.

- Identity requirement: Actual non-overlapping cattle and supply freight services
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual attributed freight per reference flow; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Actual route/mode, animal IDs and load/tare mass, distance units/conversions, empty-return treatment and driver coverage are needed. Do not duplicate upstream production-gate transport or provider fuel.

#### environmental_water

Expand actual water source/location and withdrawal role only when directly drawn. Distinguish drinking/washing allocation and the separate purchased-water products.

- Identity requirement: Actual direct environmental water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed environmental water per reference flow; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need actual source-specific abstraction measurement and purpose/period; no default direct withdrawal from cattle occupancy or a purchased-water bill.

#### usable_returns

Match actual unused supply returns to SKU/native unit/state and the chosen gross-with-outlets or consumed-only ledger. Live-animal supplier/buyer returns belong in the individual-animal ledger, not this card.

- Identity requirement: Actual usable operating-supply returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed usable returns per reference flow; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual external recipient, transfer, native quantity and matched input stock. Closing stock, internal feed returns and discarded supplies are not usable external returns.

#### usable_manure

Only an actual usable product handover with specified quality, quantity and recipient justifies Product status. This optional residual outlet does not receive an automatic avoided-fertilizer credit or turn ordinary holding into intended manure production.

- Identity requirement: Actual usable manure transferred as a product
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed usable manure per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual quality/state, moisture/native quantity, receiver/use evidence and one burden owner; no assumed marketability or fertilizer-equivalence factor. If intentional co-production becomes material, review a new attribution boundary.

#### manure_waste

Record actual collected manure, urine or bedding mixtures sent to waste management with native mass or independently evidenced volume/conversion, composition and receiver. Contained mass is not emitted CH4, N2O or NH3.

- Identity requirement: Actual contained discarded manure and spent bedding
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed manure waste per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual collection intervals, mass/volume/density and solids/N/VS evidence appropriate to the actual system, receiver and treatment scope. No headcount-to-manure default; distinguish prior stock and carryover.

#### carcasses

Record actual identified animal death or emergency-killing event and actual carcass mass/native receiving quantity, receiver and treatment burden coverage. A liveweight difference or quarantine status does not establish death.

- Identity requirement: Actual dead cattle carcasses sent to disposal
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed carcasses per reference flow; cp_animals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_animals`

Range evidence need: Need individual-ID death evidence, actual measurement/receiver quantity, period and disposal route. Head-count mortality and carcass kg are separate auditable views; no generic carcass yield or loss factor.

#### other_wastes

Expand actual feed refusals no longer usable, clinical/sharps/medicine residues and other operating wastes by identity, state, native unit and receiver. Exclude manure and carcasses already owned by their own rows.

- Identity requirement: Actual discarded feed, clinical and operating wastes
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other wastes per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual rejected-feed/chemical/clinical fraction and receipt/treatment coverage. A purchase invoice, drug dose or hazard label alone cannot establish waste mass/composition.

#### contained_wastewater

Record actual collected wastewater with aqueous composition and receiving treatment system; distinguish liquid manure storage and direct outfalls by actual system ownership and no duplicated physical quantity.

- Identity requirement: Actual contained washing and sanitary wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed contained wastewater per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Actual collected/received volume, concentration basis, collection interval and treatment coverage are needed. Do not assume all drinking/washing water becomes this waste flow or double count a slurry mixture.

#### water_outfalls

Expand actual direct outfall by receiving medium and quality. Collected wastewater sent to treatment is a Waste transfer, not a second elementary outfall.

- Identity requirement: Actual direct water discharge to declared environment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed water outfalls per reference flow; cp_environment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual outfall measurement, water source/period and receiving medium; composition-specific pollutant masses are separate non-additive views, never inferred from total water purchased.

#### other_species

Expand each actual species and medium from actual manure system, fuel burn, chemical use or leakage. Distinguish CH4, N2O/N2O-N, NH3/NH3-N and their source bases; do not repeat enteric CH4 or count off-site treatment emissions already in a provider dataset.

Residual inventory requirement after the independently identified cases `other_species_co2_fossil_air`; `other_species_nitrous_oxide_air`; `other_species_ammonia_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual identified manure, combustion and chemical releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed other species per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need actual species/medium and measured emission or compatible activity with system/storage-time/climate, factor basis, composition/fate and molecular conversion source. Manure wet mass, liveweight residual and a safety limit are not emission quantities.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_service | Confirm actual ownership-based business-buyer resale with accepted consignment animal set, count/class/state/time and competent actual fitness/commercial records. No invoice split, animal head or cancelled transfer may inflate N. |  |
| validate_animals | animal memorandum | Reconcile every individual ID and head event separately from measured liveweight/carcass mass. Retain all actual quarantine/return/death residence, investigate unknown gaps and link original-gate commodity loss coverage without duplicating disposal. |  |
| validate_care | feed and drinking_water; drinking_water_liquid_tap | Use actual stock-adjusted feed, bedding, water and care records by animal class/holding interval; no prescribed ration, medicine, weight-gain conversion or inferred manure yield. Rejected/dead animals retain actual service care burdens. |  |
| validate_fates | all inventory rows | Every actual native-unit exchange must have its own-node protocol and state/receiver evidence. Separate usable returns, manure product/waste, carcasses, clinical waste, contained wastewater, direct withdrawal and outfalls. Unknown fates/coverage block final data; one mixture and provider treatment counted once. |  |
| validate_species | enteric_methane and other_species; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | Verify actual species/receiving medium and time/activity basis, class/diet/manure method/tier, N versus species mass and sourced conversions. No annual factor times full-year throughput, no enteric/manure duplication, no residual-to-emission rule. |  |
| validate_assets | shared_assets | Check all consumers, actual periods, full-lifecycle manufacture/maintenance/replacement/end-of-life and observed/evidenced remaining driver with uncertainty, one attribution view and no default life. |  |
| validate_mode_period | depot_wholesale | Link all batches/consignments, care/cleaning/quarantine/reject/return events and actual stocks to real animals and periods. Avoid shared-campaign duplication; failed/cancelled attempts keep actual resources without accepted counts. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after concrete identity and foreground completeness review |
| downstream_use | Temporary live cattle wholesale-service add-on with separate matched original-gate commodity production and loss coverage |
| allowed_use | Actual own-account Bos cattle dealer-depot consignment with matching care/fitness/time/quantity and commercial handover qualifiers |
| excluded_use | Animal-production or delivered-cattle full footprint alone; farm rearing/fattening/slaughter; all-live-species average; agency/auction-fee or monetary factor; complete-chain claims without original-gate loss linkage |
| required_metadata | Actual animal/consignment/site/period, class/state/head count/liveweight basis, origins/destinations, ownership, actual occupancy/care/fitness/acceptance, feed/manure methods, transport/treatment/asset coverage and commodity-loss owner/status |
| required_quality_disclosure | Actual ID/time/stock/method uncertainty, concrete UUID gaps, class/diet/system-specific factor coverage, all-consumer asset drivers, incomplete care or receiver data and independent range limitations |
| update_trigger | Changed animal class/route/stay purpose, ownership/gate/care/welfare criteria, manure or emission method, feed/water/provider coverage, assets, original-gate loss coverage or recording evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-live-animal-wholesale | official_guidance | UNSD, CPC Version 3.0 explanatory notes (30 June 2025), division61/subclass61014. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: own-account live-animal wholesale, narrower cattle dealer-depot route; not a physical inventory recipe. |
| woah-land-transport | official_guidance | WOAH, Terrestrial Animal Health Code, Chapter7.3 Transport of animals by land. https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_land_transpt.htm | Qualitative assembly/temporary-holding, care and fitness responsibilities and journey records; not a universal maximum stay, dose or legal certificate. |
| govuk-cattle-holding-register | official_guidance | GOV.UK, Keep a holding register for cattle to record births, movements and deaths. https://www.gov.uk/guidance/keep-a-holding-register-for-cattle | Individual cattle identity, origin/destination movement and death records as a jurisdiction-specific primary example; no England/Wales timetable applied globally. |
| ipcc-livestock-2019 | official_guidance | IPCC, 2019 Refinement to the 2006 Guidelines, Volume4 Chapter10, Emissions from Livestock and Manure Management, with applicable corrigenda. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Activity/population/time and enteric/manure method distinctions; actual method applicability and operands required. No default emission, excretion or methane-conversion factor selected. |
