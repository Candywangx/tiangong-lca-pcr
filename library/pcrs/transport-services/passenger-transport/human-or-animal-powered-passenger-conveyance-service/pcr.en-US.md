---
pcr_id: pcr.human-or-animal-powered-passenger-conveyance-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Human- or animal-powered passenger conveyance with operator

## 1. Scope and Applicability

This PCR covers the actual operator-provided urban or suburban road passenger transportation function delivered by man- or animal-drawn vehicles or conveyances, including pulled or pedalled rickshaws and passenger-carrying pack animals. It covers every actual qualifying animal species and actual human-powered configuration, not only equids or wheeled carts. Declare the actual urban/suburban service extent and geographic responsibility with supporting evidence. No arbitrary distance threshold, fixed schedule, ticket form or universal occupancy is imposed. A technical example, animal name or leisure label alone does not establish this passenger transportation function.

One reference item delivers one actual passenger's completed declared conveyance, with actual origin/destination, stops/return boundary, content, service quality, distance and duration. Operator, vehicle and animal may supply several passengers or mixed activities; they are not the counted passenger output. An accompanying helper/operator is not a passenger merely because carried. Declare any genuine dual role. Internal changes of conveyance, animal teams or intermediate boarding do not multiply the same declared completed service. Different actual service scopes must be distinguished before aggregation. Waiting, positioning, rest, cancellations and interrupted or failed duty retain their causally attributable resources even when producing no eligible completion; N=0 permits no finite per-item result.

Exclude bare vehicle or animal rental without operator, including the no-driver passenger vehicle rental interface identified as73114; pure animal sale/rearing, labour hiring, stand-alone freight, ticket-only activity and ordinary animal encounters/admission or primary active-sport/adventure experience without the actual passenger transport function. Other rail/water, sightseeing-programme, motor-only or interurban products require their actual functional/classification decision. Actual supplementary assistance does not by itself remove a qualifying human/animal-powered service: identify its real role, energy, drive equipment and uncovered burdens, rather than hiding it or excluding a real product for missing data. Pack-animal passenger service does not require a cart. Freight or other genuine independent outputs share only evidenced common resources and do not become passenger completions.

The specific animal/conveyance/feed examples below are atomic exchange examples, never scope limits or substitute identities for other species. Complete every actual needed identity, native quantity, state and fate by separate row. Human ordinary subsistence/metabolism and full working-animal support follow the explicit boundary choice and comparison sensitivity below; neither implies zero physical metabolism or a zero-burden route. No universal ration, emission factor, body mass, water balance, occupancy, life or numerical range is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.human-or-animal-powered-passenger-conveyance-service |
| classification_refs | CPC3.0 64117; exact dedicated whole-subclass scope within actual urban/suburban parent-group context |
| covered_products | Actual operator-provided urban/suburban man- or animal-drawn road passenger conveyances and passenger-carrying pack animals, all qualifying species/configurations |
| excluded_products | Bare no-operator rental73114; stand-alone rearing/animal sale/freight/labour; ticket-only; non-transport animal encounters or primary sport/adventure; other functional/geographic transport products |
| representative_product | Completed urban or suburban human- or animal-powered passenger conveyance with operator |
| production_route | Actual passenger conveyance and operator work; conditional species-specific animal care/biology and manure; complete animal/conveyance/support lifecycle; actual auxiliary mechanisms and uncovered provider stages |
| market_state | Actual fulfilled passenger transportation service evidenced by compatible completion and actual passenger records |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Operator-provided urban/suburban human- or animal-powered road passenger conveyance, including actual pack-animal carriage |
| How much | One actual passenger completes one independently defined conveyance service |
| How well | Actual operator responsibility, OD/stops/return scope, mode, species/team/configuration, passenger role, assistance, safety/accessibility and declared service quality are evidenced |
| How long or cycle | Actual declared conveyance extent and service time/window from accepted start to evidenced completion; operating/support period and animal/asset lives are recorded separately |
| reference_flow_link | completed_conveyance |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed urban or suburban human- or animal-powered passenger conveyance with operator |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual passenger-transport function;operator and passenger roles;actual urban/suburban service extent and geographic responsibility;OD;route and return boundary;stops/changes;actual person completions;duration/time window;quality/accessibility;human work or actual species/team/pack-or-drawn configuration;actual assistance and sources;distance/occupancy per segment;empty/waiting/failed/support duty;period;animal identity/body-state/cohort;work/rest and all-user shares;rearing/training/service-entry/retirement provider stages;feed wet-dry/C/N/water/body retention;all actual emissions and receiving subcompartment;vehicle/animal/asset whole life;human subsistence/metabolic boundary and sensitivity |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | completed_conveyance | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N is the actual completed person-service count of the same scope,not animal-days,tickets,seats or vehicles; it must be positive. |
| feed_moisture | grass_hay;collected_donkey_manure | Mass | kg | Preserve as-fed,wet-stream and dry-matter bases; convert only with actual moisture and compatible state. |
| native_life | cycle_rickshaw;equid_cart;working_donkey_entry | Number of items | Item(s) | Multiply native delivered count by the supported same-unit lifetime share; do not substitute mass,rental money or lifecycle service. |
| species_unit | enteric_ch4;respired_biogenic_co2;manure_ch4;manure_n2o;manure_nh3 | Mass | kg | Species mass retains carbon origin and receiving subcompartment; N and C bases cannot masquerade as molecule mass; actual conversions require evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual fulfilment,operator,conveyance and animal records plus evidenced supplier gates |
| starting_condition_role | Accountability interface,not a zero-burden starting point for historical animals or vehicles |
| product_classification_scope | Full actual64117 road human/animal conveyance and pack-animal passenger function within urban/suburban group6411 context; no species or physical-route exclusion for missing data |
| recursive_input_rule | Use a same-category completed subservice once at its own supplier gate; expand only uncovered responsibilities,without another final service output |
| upstream_dataset_requirement | Verify native units,boundary and actual applicability of energy,feed,animal entry,vehicle,care and treatment results |
| disclosure | Disclose actual function,human/animal boundary differences,provider coverage,whole lifecycle,manure fates,allocation,uncertainty and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| delivered_scope | completed_conveyance | Include the actual operator-provided human/animal passenger conveyance, attributable positioning, waiting, interrupted or failed service, support and allocated vehicle/animal lifecycle. Record real passenger number, OD, stops, mode, period and completion; sold tickets alone prove no delivery. | un-cpc3-2025 |
| provider_coverage | all_processes | Assign every provider/activity/burden/period cell to one compatible complete result or explicit physical expansion. A provider replaces its exact included inputs, releases, animal care or assets; missing stages are mandatory additions, never duplicate supplier burdens. A native provider intensity q_u is first multiplied by actual compatible service demand A_u and the evidenced cohort/all-user share, then divided by positive N once. Retain the provider's actual native hour, animal-day, distance or passenger-distance basis and coverage; these are not interchangeable with completed person-services. Only a provider result already exactly equivalent to one whole declared reference service requires no further normalization. Its exact covered activity/stage cells replace the matching foreground cells only. |  |
| human_boundary | conveyance_delivery;service_support | Ordinary human subsistence, personal diet, housing, reproduction and ordinary metabolic releases are excluded as an explicitly disclosed service-boundary convention, not measured zero metabolism. Record actual operator/assistant/passenger roles, tasks, exertion, assistance, work/rest and dedicated support. Include actual causal service-specific food/drink, facilities, PPE/safety and business travel with justified attribution. Incremental work nutrition or attributable metabolic releases, if included under an extended boundary, require independent physiology/intake/exertion/counterfactual evidence, native C/N/water/substance bases and receiving media, consistent upstream food coverage and sensitivity. Never invent an employee labour-fuel exchange or convert wages/hours/calories into a fossil-energy or universal food factor. |  |
| animal_support | animal_husbandry;animal_lifecycle | Every actual working-animal species is maintained to supply the studied service. Include attributable breeding/rearing/training before entry, daily maintenance feed/water, rest and nonworking periods, shelter, health, species-appropriate hoof/skin/equipment care, retirement and mortality fates. Actual body/age/state/cohort, work/task/environment and all supported functions determine evidence needs; a pack animal has actual carrying and saddle/load interfaces, not assumed cart traction. Pre-entry provider coverage and post-entry care are distinct; only extra pulling feed or treating existing/leased animals as free is invalid. WOAH supplies context only for its actual working-equid scope, not other-species numerical/welfare certification. | woah-working-equids |
| manufacture_gate | vehicle_lifecycle;animal_lifecycle | Delivered vehicle manufacture and live-animal first-entry products cover their verified supply gates only. Lifetime duty allocates their actual native quantity and does not create a fictitious full-life service identity. Complete uncovered replacements, veterinary/farriery tasks, maintenance, facilities and retirement separately; never count original components twice. |  |
| feed_state | grass_hay;animal_tap_water | Track actual supplied, grazed, consumed, lost and stored feed/water separately by species and body cohort. Preserve feed ingredients/formulation/moisture, as-fed/dry matter, C/N, actual body retention/growth/lactation or other transfers, water intake/stores/urine/faecal moisture/respiratory-evaporative release and actual independent fates. Stocks and retention are not consumption or emissions. No unexplained wet/dry, carbon, nitrogen or water deficit may be fabricated as residual gas, wastewater or manure. |  |
| biogenic_carbon | enteric_ch4;respired_biogenic_co2;manure_ch4 | Keep actual enteric, respiratory, manure and upstream feed-carbon accounts consistent. The IPCC national-inventory net-CO2 convention is not a general lifecycle zero-impact rule. Declare the lifecycle biogenic-carbon convention, actual physical releases and upstream uptake/retention coverage, with no invented sequestration or duplicated feed carbon. | ipcc-livestock-2019 |
| manure_fate | manure_handling | Keep excretion, collection, storage, treatment, product/waste transfer and actual deposition/application gates explicit. Separate retained manure, wastewater and atmospheric species. Document downstream responsibility and the product/waste allocation convention: required waste treatment is completed, while a genuine useful product needs its own output identity and supported allocation. Do not silently drop land-deposition or indirect nitrogen pathways, count the same emission twice, or give automatic fertilizer/biogas credits. | ipcc-livestock-2019 |
| actual_expansion | all_processes | Every actual unrepresented material, native conveyance/pack equipment/animal species and entry gate, feed/grazing/soil uptake, energy/fuel, provider result, waste/stream, emitted compound/particle or receiving fate requires a unique atomic row. One existing process, direction/type, single actual identity/state, UUID or explicit unresolved status, native property/unit/quantity/raw source, same-parent CP, evidenced calculation/provider gate/receiver/uncertainty and triggering DQ id are mandatory. Known subcompartments must be retained. Missing occurrence, identity, quantity or fate blocks completed data, not product scope and not zero. |  |
| actual_mechanism | all_processes | Record actual human tasks, animal carrying/drawing and all supplementary assistance as a coherent transport system. Identify harness/saddle/body contact, load/distance/terrain, coupled teams and recovery/waiting support. Assistance energy, drive, charging/refuelling, maintenance, wear, incident/rescue and life burdens are actual atomic exchanges. If an actual motor/cell/blend exists, whole formulated input with origin ledger OR physical constituent inputs replacing the same coverage is exclusive; net supply/withdrawal, stock, burned, vented, spilt and recovered quantities are distinct, and supply is not automatically combustion activity. Purely motorized or primary adventure function requires its own product decision. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| conveyance_delivery | Actual passenger conveyance delivery | required | All actual declared services | reference_process | completed_conveyance |
| animal_husbandry | Post-entry actual working-animal husbandry and biology | conditional | Any actual qualifying working-animal species supports this service | support_process | completed_conveyance |
| manure_handling | Owned manure pathways and handover | conditional | Actual working-animal excretion and associated responsibilities | support_process | completed_conveyance |
| vehicle_lifecycle | Conveyance and facility lifecycle | conditional | Actual attributable conveyance or support assets | support_process | completed_conveyance |
| animal_lifecycle | Animal service-entry and retirement lifecycle | conditional | Actual owned or uncovered working-animal supply/lifecycle | support_process | completed_conveyance |
| service_support | Uncaptured service maintenance and support | conditional | Actual necessary support outside linked provider coverage | support_process | completed_conveyance |

All processes share the final completed person-service reference,without creating extra conditional-node products. Use each card only at its actual occurring,uncovered corresponding gate.

### Process: Actual passenger conveyance delivery (`conveyance_delivery`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed urban or suburban human- or animal-powered passenger conveyance with operator (`completed_conveyance`)

One actual passenger completes the independently declared urban/suburban operator-provided human- or animal-powered road conveyance, including actual pack-animal carriage. Verify actual function, operator/passenger roles, OD/stops/return boundary, service extent, quality, time and completion. Intermediate animals/teams/vehicle changes, positioning and wait are not additional completed outputs.

One actual passenger completes the independently declared urban/suburban operator-provided human- or animal-powered road conveyance, including actual pack-animal carriage. Verify actual function, operator/passenger roles, OD/stops/return boundary, service extent, quality, time and completion. Intermediate animals/teams/vehicle changes, positioning and wait are not additional completed outputs.

- Selected flow: Completed urban or suburban human- or animal-powered passenger conveyance with operator
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_journeys`
- Sources: `un-cpc3-2025`

##### Waste flows

##### Elementary flows

### Process: Post-entry actual working-animal husbandry and biology (`animal_husbandry`)

#### Inputs

##### Product flows

###### Dried grass hay supplied as animal feed, as-fed (`grass_hay`)

Conditional actual grass hay supplied after the service-entry gate. Preserve plant/specification, moisture, as-fed versus dry-matter basis, stocks, consumption and losses. Fresh grazing, legume hay, grain, compound feed and bedding are different exchanges. No fixed ration or feed-per-passenger amount is prescribed.

- Selected flow: Dried grass hay supplied as animal feed, as-fed
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual kg as-fed hay supply including accounted losses / N; daily maintenance and nonworking support assigned using cp_husbandry, not only incremental pulling feed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_husbandry`
- Sources: `woah-working-equids`

###### Tap water (`animal_tap_water`)

Actual compatible supplied tap water for owned animal drinking/care after service entry. It is a product supply, not direct environmental abstraction. Water given, consumed, spilt, evaporated and discharged are distinct records; other water sources need actual separate identities.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual native kg supplied / N; cp_husbandry. Volume meter records require independently evidenced actual water state/density conversion, not an assumed numeric density.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_husbandry`
- Sources: `woah-working-equids`

###### Alternating current (`stable_ac`)

Only actual compatible AC for attributable stable lighting, ventilation, water pumping or care inside this process and absent from other supplied results. This is facility energy, not animal metabolic energy or evidence that every animal route uses electricity. Split actual other carriers.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: Attributed actual native gross compatible AC import in MJ / N; cp_husbandry. Compatible electrical meter kWh converts using the exact relation1 kWh=3.6 MJ; no source energy, animal metabolic or net-export substitution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_husbandry`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### methane (biogenic) (`enteric_ch4`)

Actual enteric biological-source methane emitted by the declared working-animal subgroup. Match species, diet, animal-days and actual method applicability; do not copy a cattle factor or infer this amount from manure production. These verified identities are air, unspecified only. Use only with documentary justification for the actual reporting scope; known urban/non-urban or another specific receiving subcompartment requires a separately verified identity and atomic expansion. Unknown scope blocks completion.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual measured or traceably modelled kg of this species / N; cp_animal_emissions. No universal numerical factor is supplied.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal_emissions`
- Sources: `ipcc-livestock-2019`

###### carbon dioxide (biogenic) (`respired_biogenic_co2`)

Actual biogenic respiratory CO2, where the declared lifecycle carbon convention requires explicit release accounting. Reconcile feed upstream uptake, retained carbon and releases; the IPCC national-inventory convention omitting net livestock CO2 is not evidence that actual physical respiration is zero or that every LCA method gives zero impact. These verified identities are air, unspecified only. Use only with documentary justification for the actual reporting scope; known urban/non-urban or another specific receiving subcompartment requires a separately verified identity and atomic expansion. Unknown scope blocks completion.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual measured or traceably modelled kg of this species / N; cp_animal_emissions. No universal numerical factor is supplied.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal_emissions`
- Sources: `ipcc-livestock-2019`

### Process: Owned manure pathways and handover (`manure_handling`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Fresh collected donkey manure without bedding at waste handover (`collected_donkey_manure`)

Only an actual separately collected donkey dung/urine manure stream, without bedding or other livestock residues, in evidenced waste status at handover. Record actual contents, moisture, stocks, collection losses and receiver. Different mixtures require independent identities. Fertilizer/product status, deposited manure, wastewater and treatment service are not this waste exchange; retain their actual separate pathways.

- Selected flow: Fresh collected donkey manure without bedding at waste handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual wet stream mass excluding container tare / N; cp_manure. Generated, stored, released and handed-over quantities must reconcile; no residual-by-difference fabrication.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`

##### Elementary flows

###### methane (biogenic) (`manure_ch4`)

Only actual biogenic CH4 at the owned excretion/storage/treatment gate, separate from enteric methane and supplier-included manure treatment. Match actual manure system, climate and duration; no default manure management share is assumed. These verified identities are air, unspecified only. Use only with documentary justification for the actual reporting scope; known urban/non-urban or another specific receiving subcompartment requires a separately verified identity and atomic expansion. Unknown scope blocks completion.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual measured or traceably modelled kg of this species / N; cp_manure. No universal numerical factor is supplied.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`

###### nitrous oxide (`manure_n2o`)

Only actual N2O species mass released from an explicitly owned manure pathway. Track excreted/retained/volatilized/leached/transferred nitrogen; kg N2O is not kg N. Direct and indirect soil or downstream emissions require their own scope/method and cannot duplicate this event. These verified identities are air, unspecified only. Use only with documentary justification for the actual reporting scope; known urban/non-urban or another specific receiving subcompartment requires a separately verified identity and atomic expansion. Unknown scope blocks completion.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual measured or traceably modelled kg of this species / N; cp_manure. No universal numerical factor is supplied.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`

###### ammonia (`manure_nh3`)

Only actual ammonia species mass released at its documented manure gate. Preserve kg NH3 versus kg NH3-N and the nitrogen transfer into downstream indirect emissions; an emission factor already inclusive of indirect N2O cannot be counted a second time. These verified identities are air, unspecified only. Use only with documentary justification for the actual reporting scope; known urban/non-urban or another specific receiving subcompartment requires a separately verified identity and atomic expansion. Unknown scope blocks completion.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual measured or traceably modelled kg of this species / N; cp_manure. No universal numerical factor is supplied.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`

### Process: Conveyance and facility lifecycle (`vehicle_lifecycle`)

#### Inputs

##### Product flows

###### Complete unassisted pedal passenger rickshaw at manufacture gate (`cycle_rickshaw`)

Conditional on the actual unassisted pedal vehicle. This is manufacture-only delivery of a complete configuration, not human labour, annual vehicle service or electricity. Record included original parts; replacement tyres, repairs and disposal remain separate unless demonstrably included by their actual provider. Other human-drawn conveyances need their own concrete identity.

- Selected flow: Complete unassisted pedal passenger rickshaw at manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Sum delivered native manufacture Item(s) times the same vehicle/cohort attributable duty / documented total compatible useful duty, then divide by N; cp_vehicle_life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_vehicle_life`

###### Complete two-wheeled equid passenger cart at manufacture gate (`equid_cart`)

Only the actual complete two-wheeled passenger cart; neither the live animal nor harness is included unless the verified delivered-product boundary proves that exact component inclusion. A pack ride without this cart has no cart demand. Other carriages are separately identified, never relabelled as this configuration.

- Selected flow: Complete two-wheeled equid passenger cart at manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered cart manufacture quantity times same-asset supported all-user lifetime duty share / N; cp_vehicle_life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_vehicle_life`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Animal service-entry and retirement lifecycle (`animal_lifecycle`)

#### Inputs

##### Product flows

###### Live trained working donkey at first service entry (`working_donkey_entry`)

Only an actual donkey supplied alive and trained at the documented first-service gate. Verify upstream breeding, rearing, feed, veterinary and training coverage; complete missing pre-entry burdens without repeating included ones. This live-animal product is not a full-life traction service. Post-entry husbandry, rest days, retirement and actual mortality remain explicitly owned. Every different actual species, body/training state or entry gate requires its own native identity, prior-rearing scope and compatible all-user life attribution. No common animal-head equivalent is permitted.

- Selected flow: Live trained working donkey at first service entry
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native live-animal entry quantity times same-animal documented attributable lifetime service share / N; cp_animal_life. Never divide a daily feed quantity by lifetime duty again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal_life`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Uncaptured service maintenance and support (`service_support`)

#### Inputs

##### Product flows

###### Tap water (`service_tap_water`)

Actual compatible tap water for attributable conveyance cleaning or operator-provided support, excluding the animal-water meter and any supplier-included water. Passenger drinking products, environmental abstractions and wastewater are independently identified. Ordinary operator personal consumption is subject to the explicit human boundary rule, not silently added as metabolic fuel.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual native kg supplied / N; cp_support. Volume meter records require independently evidenced actual water state/density conversion, not an assumed numeric density.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used lubricating oil (`maintenance_used_oil`)

Conditional actual separately collected petroleum-based spent lubricating oil from conveyance maintenance at generation before treatment. This is not fresh lubricant, oily water, grease mixture, animal fat or an oil-treatment service. Verify retained contents and actual waste gate; transport and treatment remain separately completed responsibilities.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual kg waste oil excluding container tare / N; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| subdivide | all_processes | Subdivide dedicated journey, animal, vehicle, stable and support records before allocation. Where shared, justify an actual causal driver for that burden and all served users/functions; there is no universal passenger/freight/agricultural-duty share. | ghg-product-standard |
| actual_occupancy | conveyance_delivery | Assign loaded-segment burdens using actual persons, distance and resource use with class/configuration where relevant; distinguish accompanying luggage from separately supplied freight. Normalize the attributed cohort numerator by actual completed N once. Do not divide an already per-person provider result again by occupancy. |  |
| rest_and_failure | all_processes | Keep attributable empty, waiting, failed and nonworking support burdens inside the appropriate service pool. Animal rest/maintenance is not absent because passenger delivery is zero that day. N=0 has no finite per-reference intensity; preserve the pool and resolve period/boundary with evidence. |  |
| animal_maintenance_share | animal_husbandry;manure_handling | Allocate actual whole animal-day care and emissions across all supported functions using justified availability/time/resource evidence, including rest support; do not assign only incremental feed. Reconcile any breeding, milk, meat, manure or agricultural/freight outputs. Animal mass, passenger-distance, tonne-distance and food output cannot be added as one denominator. |  |
| supply_lifetime_share | vehicle_lifecycle;animal_lifecycle | For each delivered supply unit/cohort, multiply actual native quantity by attributable compatible duty divided by supported total all-user lifetime duty, then normalize by N. Match quantity, numerator and denominator to the same supply unit/cohort; current daily care uses its period share and is not again divided by lifetime duty. |  |
| useful_products | manure_handling;animal_lifecycle | Use actual product/waste status, handover and function to select and disclose allocation. Subdivide first; if physical relationships cannot be established, justify another relationship with sensitivity. No assumed value share or avoided fertilizer/feed/vehicle credit. Retired animal products and recovered materials cannot repeat the original live-animal output or its full burden. | ghg-product-standard |
| species_teams_other_functions | animal_husbandry;animal_lifecycle;conveyance_delivery | Use actual animal identities and complete supported functions, including work, rest and care. A team is not a default multiple of one animal and passenger count is not animal-head count. Subdivide dedicated duties/inputs first, then use an evidenced compatible physical relationship with sensitivity where necessary. Passenger transport, freight and genuine independent animal products share common resources once; no fixed bodyweight, head, fare or equal-share rule is prescribed. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The completion,attribution and bookkeeping rules below are explicitly PCR-designed methods. External sources provide their stated classification,care or emission-pathway context; WOAH,IPCC and GHG guidance do not prescribe these specific service-allocation formulas or the human subsistence boundary.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_journeys | conveyance_delivery | completed passenger conveyance | actual_record | journey_id;actual_persons;operator;OD;mode;species;conveyance;actual_segment_km;loaded_empty_waiting_failed_duty;completion;period;all_users;actual_passenger_transport_function;urban_suburban_extent;operator_assistant_passenger_roles;service_quality;actual_duration_window;drawn_pedalled_pack_configuration;team_animals;assistance_mechanism;shared_freight_other_outputs | Reconcile actual dispatch, passenger/OD and completion evidence, linked stops and sampling errors. Define one-way/multi-stop/return scope before aggregation; no ticket-count substitution. Aggregation algorithm: N=sum actual eligible persons completing the declared conveyance; actual duty assigned to the same cohort; divide attributed totals once by N. | Item(s);km;h | actual event and period closure | same declared service period and explicit lifecycle interfaces | actual conveyance services and all users in the declared period | per declared reference flow | raw records,provider coverage,all-user closure,source applicability and uncertainty |
| cp_husbandry | animal_husbandry | post-entry animal feed water and stable support | actual_record | animal_id;species;age;body_state;entry_date;animal_days;all_functions;maintenance_rest_work;feed_SKU;moisture;as_fed_DM;stock;given_consumed_lost;water_source;meters;provider_scope;health_tasks;body_cohort_start_end;growth_lactation_retention;feed_C_N_moisture;grazing_native_intake;water_body_stores;work_rest_retirement_support;species_digestive_system;team_and_all_function_share | Read actual ration/stock/meter/health and duty logs; separate each feed, grazing, water, bedding and energy identity. Retain animal-day maintenance/rest and actual veterinarian/farrier/housing records; no default ration or service load. Aggregation algorithm: Assign each actual native period supply/consumption quantity using supported all-function care share, including rest; divide the cohort numerator by N once. Keep native moisture/unit conversion evidenced. For every actual species independently close opening stocks + purchases + actual grazing against consumption, closing stocks and evidenced losses; retain actual body/cohort changes, C/N/wetdry and water stores/fates. Actual team, rest and nontransport output shares require evidence, not a borrowed equid/cattle ratio. | kg;kWh;m3;animal-day | actual event and period closure | same declared service period and explicit lifecycle interfaces | actual post-entry species-specific working-animal care in this process, all supported functions | per declared reference flow | raw records,provider coverage,all-user closure,source applicability and uncertainty |
| cp_animal_emissions | animal_husbandry | actual enteric and respiratory release | actual_record | animal_id;species;subgroup;animal_days;diet;feed_intake_basis;method;source_version;factor_basis;actual_species_mass;carbon_origin;air_subcompartment;upstream_carbon;retention;attribution;actual_body_feed_C_N_water_balance;respiration_water;actual_compound_mass;method_validity_species_state;no_residual_emission | Use actual monitoring or an independently supported species/diet/subgroup-compatible model, with input basis and uncertainty. Record actual respiration and chosen lifecycle carbon convention separately from any characterization effect. Aggregation algorithm: Attribute actual post-entry species masses across supported animal functions with the same care/duty scope; divide by N once. Do not combine enteric and manure events or treat national net-CO2 omission as physical zero. Reconcile feed intake and body/growth/product/other carbon-nitrogen-water retention with independently evidenced actual respiratory/enteric releases, excreta and other fates. National netCO2 omission or missing species model never proves zero physical emissions; approximate unusual-species significance factors are not production factors. | kg species;animal-day | actual event and period closure | same declared service period and explicit lifecycle interfaces | actual owned animal biological release gates and documented receiving subcompartments | per declared reference flow | raw records,provider coverage,all-user closure,source applicability and uncertainty |
| cp_manure | manure_handling | actual manure streams and releases | actual_record | animal_id;species;excretion;dung_urine;water;wet_mass;DM;VS;carbon;nitrogen;stock;collection;deposition;storage_system;climate;duration;treatment;recipient;product_waste_status;air_water_soil_subcompartment;factor_basis;source;provider_scope | Use independently measured stream/stock/receiver records and supported actual species/system emission methods. Track contents through collection, storage and terminal responsibility; separately identify every actual product, waste, wastewater and elementary release. Aggregation algorithm: Close actual wet/dry,carbon and nitrogen quantities across fates, preserving documented losses and uncertainties. Allocate owned events with same-animal care share and divide by N once; linked downstream results replace included events. Treat actual faeces, urine and mixtures at their real gates: separately collected streams versus a genuine mixed manure stream replace matching contents once. Actual bedding/soil-deposited/washed/stored streams retain individual identity and boundary; do not force all species into the donkey example. | kg wet stream;kg species;kg N;kg C | actual event and period closure | same declared service period and explicit lifecycle interfaces | owned manure generation,storage,treatment and evidenced transfer/deposition gates | per declared reference flow | raw records,provider coverage,all-user closure,source applicability and uncertainty |
| cp_vehicle_life | vehicle_lifecycle | actual conveyance manufacture and lifecycle | actual_record | asset_id;configuration;manufacture_native_quantity;included_original_parts;entry;replacement;maintenance;retirement;total_compatible_lifetime_duty;period_cohort_duty;all_users;provider_coverage;forecast_source | Read actual bills of quantities and configuration-specific supply datasets, lifetime duty/engineering evidence and fate records. A rental fee/depreciation is not physical count; identify missing phases individually. Aggregation algorithm: Actual delivered quantity times same-asset cohort duty/positive total all-user lifetime duty, then /N; separate original and replacement components and uncovered maintenance/retirement. | Item(s);native component units;km;h | actual event and period closure | same declared service period and explicit lifecycle interfaces | actual human/animal conveyances and harness/road/support assets assigned to this lifecycle process | per declared reference flow | raw records,provider coverage,all-user closure,source applicability and uncertainty |
| cp_animal_life | animal_lifecycle | actual service-entry animal and life allocation | actual_record | animal_id;species;training_state;first_service_gate;native_entry_count;breeding_rearing_training_coverage;pre_entry_feed;service_dates;retirement;death;all_functions;total_lifetime_duty;cohort_duty;care_provider_scope;uncertainty;pack_drawn_role;animal_id_cohort;body_state;all_functions_work_rest_retirement;included_provider_stage_cells | Read animal-specific acquisition/rearing/training and lifetime duty records; distinguish observed life and justified forecast. Verify first-entry supply coverage and complete missing upstream phases, retirement care and actual terminal fates separately. Aggregation algorithm: Actual delivered live-animal entry quantity times same-animal attributable lifetime service share, then /N. Daily post-entry feed/emissions remain in their actual periods, not a second lifetime amortization. A live animal is a biological delivered/rearing product, not a manufactured machine or a lifecycle transport result. Match same animal/cohort body/training/entry state, compatible whole-life all-user duty and native supply unit; missing pre-entry rearing/training and later care/retirement completed independently. | Item(s);animal-day;h | actual event and period closure | same declared service period and explicit lifecycle interfaces | actual service-entry animal and uncovered pre-entry/retirement lifecycle gates | per declared reference flow | raw records,provider coverage,all-user closure,source applicability and uncertainty |
| cp_support | service_support | actual cleaning maintenance and operator support | actual_record | task_id;actual_material;native_quantity;stock;work_specific_food_water;ordinary_subsistence_exclusion;water_meter;waste_composition;receiver;species_medium;provider_scope;all_users;attribution;human_roles_work_rest_exertion;dedicated_food_PPE_safety;incremental_metabolic_inclusion_boundary;physiology_intake_counterfactual;actual_assistance_carrier;net_withdrawal_burn_spill_recovery | Read service-specific procurement/work orders, meter/stock and independent receiver records. Separate each actual consumable, provider and residue. Distinguish ordinary personal diet from evidenced dedicated support; no generic labor-energy conversion. Aggregation algorithm: Assign actual non-overlapping native task/supply/fate quantities using justified all-user drivers and divide by N once; do not infer wastewater from water use or waste oil from virgin oil issues. Record actual human task/rest/role and work-specific food/safety/support. If an extended metabolic boundary is chosen, independently document actual intake, exertion/counterfactual, C/N/water/compound quantities and receiving media with consistent upstream food scope; disclose sensitivity, never assign fictitious labour fuel. Supplementary assistance actual energy/fuel/drive inputs and supplied/stock/burn/spill/recovery quantities remain distinct. | native kg;m3;kWh;actual service units | actual event and period closure | same declared service period and explicit lifecycle interfaces | only attributable uncaptured service-support tasks and their actual fates | per declared reference flow | raw records,provider coverage,all-user closure,source applicability and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | completed_conveyance | N=sum actual persons completing the same declared operator-conveyance scope; preserve interrupted/no-output duty separately. | cp_journeys | Item(s) |  |
| normalize_once | all_processes | Assign actual compatible native quantities to the declared passenger cohort and divide by positive N once. Keep period,scope and all-user shares aligned. | cp_journeys;cp_husbandry;cp_animal_emissions;cp_manure;cp_vehicle_life;cp_animal_life;cp_support | native amount per Item(s) |  |
| manufacture_and_entry | cycle_rickshaw;equid_cart;working_donkey_entry | Allocated supply=sum actual delivered native supply quantity times same-unit cohort duty/total compatible all-user lifetime duty. Divide that numerator by N; other lifecycle phases keep independent native quantities. | cp_vehicle_life;cp_animal_life | native supply per Item(s) |  |
| animal_period_share | grass_hay;animal_tap_water;stable_ac;enteric_ch4;respired_biogenic_co2 | Allocated animal-period amount=actual complete period amount times justified all-function support share, retaining maintenance/rest. It is not an assumed marginal work ration and is not divided by lifetime duty again. | cp_husbandry;cp_animal_emissions | native amount before /N |  |
| manure_species | manure_ch4;manure_n2o;manure_nh3;collected_donkey_manure | Use recorded species/system/source equations and native-unit conversions only. Keep generated wet stream,retained solids,carbon/nitrogen transfer and each actual release as distinct quantities; document stoichiometry where N or C is converted to molecule mass. | cp_manure | kg stream or native species |  |
| supplemental_distance | completed_conveyance | Supplemental passenger-distance=sum actual persons on each segment times actual segment km. This measured disclosure neither changes the Count reference nor fixes distance per journey. | cp_journeys | supplemental passenger-distance |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_service | completed_conveyance | Preserve actual persons, OD, operator, route state, stops, completion, period and occupancy. Missing completion or unknown service mode blocks production; animal/vehicle/ticket counts are not person-service counts. | cp_journeys |
| actual_feed_care | grass_hay;animal_tap_water;stable_ac | Expand every actual grazing source, hay specification, grain, compound feed, salt/mineral, bedding, water source, heat/energy carrier, veterinary/farriery supply or provider in its exact native identity/state and amount. The hay card is not a universal ration; animal rest support and husbandry are mandatory. | cp_husbandry |
| actual_animal_sources | enteric_ch4;respired_biogenic_co2 | Match actual species, digestive system, age/state, diet, animal-days, method and uncertainty. Independently expand each required actual release with substance, carbon origin, receiving medium/subcompartment and native species mass. Preserve known subcompartments and support any unspecified identity; missing releases are not zero. | cp_animal_emissions |
| actual_manure_fates | collected_donkey_manure;manure_ch4;manure_n2o;manure_nh3 | Expand every actual retained manure composition, bedding mixture, wastewater, useful manure product, direct deposition, collection/storage/treatment/soil pathway and actual species. Record wet/dry,VS,C,N and receiving gates, downstream responsibility and source factor scope. A single manure card or gas set is not exhaustive; unknown collection or fate blocks completion. | cp_manure |
| actual_conveyances | cycle_rickshaw;equid_cart | Every actual pulled/pedalled conveyance, seat, harness, shelter, road/stable/workshop asset, replacement part and retirement material needs its own configuration/gate-native supply or fate exchange and supported all-user duty. Do not substitute generic motor vehicle, mass or rental fee for a complete native Count product. | cp_vehicle_life |
| actual_animal_lifecycle | working_donkey_entry | Expand every actual species and different body/training/entry state as a concrete native live-animal/rearing identity. Actual pack rides need saddle/load/support but no fictitious cart. Complete documented breeding/rearing/training, all-user life/work/rest support, uncovered retirement care/mortality and genuine products without repeating current feed or supplier coverage; data gaps block completion, not animal scope. | cp_animal_life |
| actual_support | service_tap_water;maintenance_used_oil | Expand every actual work-specific consumable, repair, hygiene/digital facility, food/drink supply, business repositioning provider and waste/direct release separately. Preserve explicit human subsistence exclusions with reasons and sensitivity. Each real lubricant/grease/chemical/water/waste needs its own identity/native amount and receiver; unknown is not absence. | cp_support |
| identity_coverage | completed_conveyance;cycle_rickshaw;equid_cart;working_donkey_entry;grass_hay;animal_tap_water;stable_ac;enteric_ch4;respired_biogenic_co2;manure_ch4;manure_n2o;manure_nh3;collected_donkey_manure;service_tap_water;maintenance_used_oil | Each actual added exchange carries a unique row_id, one parent process, direction/type, specific identity, UUID or explicit unresolved state, native property/unit, amount, collection protocol, source and recipient/medium/subcompartment. Link its triggering requirement_id and provider cell; missing identity/quantity blocks final completion. No invented factors or universal ranges. | cp_journeys;cp_husbandry;cp_animal_emissions;cp_manure;cp_vehicle_life;cp_animal_life;cp_support |
| species_body_balance | animal_husbandry;manure_handling;animal_lifecycle | Require actual each-species/subgroup/body-state/diet/work-rest physiology and independently supported source/method. Reconcile wet/dry C/N and water with actual stock/body/product retention and independently evidenced respiratory/enteric/excreta/soil/air/water fates. No cattle-to-camel/equid-to-other scaling or residual gas/waste closure without validated actual applicability. National net-CO2 convention is not physical-zero proof. | cp_husbandry;cp_animal_emissions;cp_manure;cp_animal_life |
| actual_human_mechanism | conveyance_delivery;service_support;vehicle_lifecycle | Preserve human operator/assistant/passenger roles, actual task/work-rest/dedicated support, ordinary subsistence/metabolism boundary and sensitivity. Pack/drawn/hand/pedal and real supplementary assistance require actual native equipment/source/care/wear/fate expansion with correct same-parent CP. Missing example cards never waive real obligations. | cp_journeys;cp_support;cp_vehicle_life |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference | completed_conveyance | Verify one actual completed-person output,1 Item(s),positive N, operator, actual OD/route/stops and human/animal mode; tickets, passenger bodies, vehicle counts or animal counts cannot substitute. |  |
| coverage | all_processes | Close provider/pre-entry/post-entry/maintenance/retirement coverage once; manufacture or animal entry quantity must not be relabelled as full-life service. Each collection protocol references one existing process and every card uses a protocol from its own process. |  |
| human_animal_boundary | all_processes | Disclose ordinary human subsistence exclusions and animal full-support inclusion explicitly. Do not compare route labels without functional/boundary equivalence and sensitivity, infer zero animal burden, or convert food directly into labour-energy input. |  |
| mass_and_state | animal_husbandry;manure_handling | Reconcile feed moisture/stocks/consumption/loss and animal/manure water/carbon/nitrogen with independent fates; kg NH3,NH3-N,N2O,N2O-N,CO2 and C are different bases. Unknown balances require resolution, never invented residual releases. |  |
| manure_emissions | manure_handling | Keep enteric and manure sources separate; verify system/climate/time/species applicability, air subcompartment, direct/indirect/soil/downstream ownership and no double counted emission-factor scope. Complete actual deposited/uncollected manure pathways too. |  |
| lifetime | vehicle_lifecycle;animal_lifecycle | Require supported positive lifetime duty and all-user closure, actual delivered quantity and separate component/rearing/care/retirement gates. Active-life projections disclose source and uncertainty and update when observed evidence changes. |  |
| completion | all_processes | Every applicable identity and quantity/fate gap is a mandatory production gate. Missing generic ranges alone are not a zero exchange or a demand to invent factors. Bilingual/projected rules and verified native identities must agree. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only after all mandatory identity,quantity,coverage and fate requirements are completed and reviewed |
| allowed_use | Actual operator-provided urban/suburban human/animal conveyance or pack-animal passenger function, species/configuration, OD, distance, time/quality, completion period and full declared lifecycle boundary |
| excluded_use | Bare no-operator rental, interurban or unrelated functional products, generic pkm/zero-emission/zero-metabolism labels, human food as universal fuel, unverified species factors or incomplete actual care/fates |
| required_metadata | Actual function/completed N;operator;mode/species/configuration;OD/distance/occupancy;period;animal-days/rest;human exclusions;whole-life/provider matrix;manure fate and air subcompartment;actual allocation |
| required_quality_disclosure | Identity/quantity gaps;diet or animal-day estimates;feed moisture;species-method applicability;life projections;carbon/nitrogen fates;boundary comparison sensitivity |
| update_trigger | Changes in service function,species,husbandry,provider coverage,configuration/life,manure management/receiving compartment,human boundary or allocation |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD,CPC Version3.0 Explanatory Notes,30 June2025,actual parent-group6411 p358 and subclass64117 p360. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full operator-provided human/animal road conveyances and pack-animal passenger transport, within urban/suburban parent context; no equid-only scope or numerical service/physiology prescription. |
| woah-working-equids | official_guidance | WOAH/OIE,Terrestrial Animal Health Code,Chapter7.12,Welfare of working equids,actual19July2021 edition,Articles7.12.2 and7.12.6–7.12.13. https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en/chapitre_aw_working_equids.pdf | Qualitative care context for actual covered working horses/donkeys/mules; scope excludes sports/leisure/research/sole meat-biopharmaceutical equids. Not universal animal or tourism welfare certification, other-species physiology, numerical ration/life or LCA allocation rule. Other actual species remain in PCR scope with independent collection/physiology requirements. |
| ipcc-livestock-2019 | official_guidance | IPCC,2019 Refinement to2006 Guidelines,Volume4,Chapter10,sections10.1–10.5,especially actualpp10.10–10.11,10.33–10.34,10.50 and10.74–10.75. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Species/feed, separate enteric/manure/C/N pathways and method applicability questions. No default factor/animal mass/ration/moisture adopted; unusual-species rough significance-screening extrapolation not treated as accurate production emission factor. No human metabolic model or physical CO2-zero claim. |
| ghg-product-standard | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,chapters6,7 and9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Functional/boundary disclosure and subdivision/justified allocation principles. Human subsistence exclusion,working-animal life inclusion and custom formulas are disclosed PCR choices,not prescriptions or numerical factors from this standard. |
