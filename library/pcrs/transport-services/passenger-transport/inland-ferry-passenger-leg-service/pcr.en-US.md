---
pcr_id: pcr.inland-ferry-passenger-leg-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Inland ferry passenger transport leg service

## 1. Scope and Applicability

This PCR covers actual passenger transportation by ferries on rivers, canals and other inland waters, scheduled or non-scheduled, including hydrofoil and hovercraft services and actual transport of accompanying vehicles, luggage, animals and other items. Determine the real ferry transport function, boarding/alighting points or ports, actual inland waterbody and service responsibility. A vessel, manufacturer example, marketing name, ticket, route distance or shore proximity alone does not establish inland ferry classification. This is not all waterborne carriage: other non-ferry water taxis/passenger vessels, inclusive cruises and sightseeing/excursion fulfilment have distinct functions; a scenic ferry crossing is not automatically sightseeing.

One reference item delivers one actual passenger through the declared completed inland ferry boarding-to-alighting transport leg with actual OD, calls, duration, quality and service inclusions. Count actual vehicle occupants once as people; accompanying vehicles, animals and luggage are not extra people. Tickets, reservations, parties, vehicle crossings, vessel voyages/hours, capacity and working crew are not the completed-person denominator. Intermediate calls or temporary reboarding do not repeat the same declared leg. Actual vessel changes need explicit leg/recipient/endpoint linkage and completion rules, not automatic duplicate completion of the original promised crossing; rescue, diversion or unfinished duty does not become successful transport by retrospective endpoint changes. An independently defined compatible completed leg has its own actual record.

N is the positive number of actual completed compatible passenger legs in the same declared inland ferry cohort/period; N=0 has no finite per-person intensity. Retain attributable empty/repositioning, waiting, interrupted/failed/rescue/recovery and port duties in an evidenced causal pool. Actual operating crew are support; genuinely separately transported off-duty persons need passenger-role evidence. Declare actual recipient/vehicle membership, segment populations/distances, quality, accessibility, included accompaniment and period. No default occupancy, car/person equivalence, fuel use, wave factor or asset life is prescribed.

Cover actual displacement, hydrofoil and air-cushion configurations with their engineering modes and native quantities. Hydrofoils require actual displacement/transition/foilborne energy, controls/actuators, foil/strut structure and repair/replacement/material fates. Hovercraft require actual lift-fan and thrust energy, skirt inflation/deflation/idle, water/shore/beach approach, skirt/fan wear and replacements; lift is not omitted or a fabricated pollutant. Actual cable/towed or other qualifying ferry geometry needs real towing/provider/rope/shore mechanism, native external energy, wear and lifecycle ownership, not assumed onboard propulsion. Conditional complete displacement, battery-electric hydrofoil and hovercraft manufacture cards are specific actual assemblies, not all hull/drive configurations. Every other actual energy/asset architecture needs its own atomic native expansion; missing data/UUIDs block completed use, not ferry-product applicability.

Include actual ship and shore fuel/energy supply, propulsion/lift/hotel/auxiliary loads, mooring/ramp/terminal/charging support, crew/actual included amenities, all attributable duties and full vessel/site manufacture, maintenance/refit/components/replacements/dry-dock/retirement. Marine bunker grade/formulation is not proved by a generic road-diesel UUID. External AC/DC/shore power gates, conversion/cable/storage losses, backup supply and internal recovery are distinct. Native provider intensity times actual compatible demand and supported all-user share is normalized by N once, replacing exact covered cells. A manufactured vessel is not a full-life service. Each actual bilge, black/graywater, ballast/sediment, scrubber/coating/antifoulant, waste and species/known receiver has independent identity/quantity/fate; water vapour is not collected waste and used lubricating oil is not oily bilge mixture.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.inland-ferry-passenger-leg-service |
| classification_refs | CPC3.0 64121 Inland water transport services of passengers by ferries; dedicated full scope, exact |
| covered_products | Actual inland river/canal/other-inland-water ferry passenger legs, any schedule, including hydrofoils/hovercraft and accompanying vehicles/luggage/animals/items |
| excluded_products | Coastal/ocean ferry as such; other non-ferry water transport; inclusive cruise/sightseeing/excursion; booking-only; no-operator rental or standalone vessel/crew availability; independent freight function |
| representative_product | Completed inland ferry passenger transport leg |
| production_route | Actual inland ferry fulfilment, ship/shore propulsion/lift/hotel, accompanied load and provider interfaces, independent fates and complete lifecycle |
| market_state | Actually completed qualified inland ferry passenger leg with actual inclusion/quality/period evidence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed inland ferry passenger transport leg |
| How much | 1 actual completed inland ferry passenger leg |
| How well | Actual ferry function/inland waterbody, OD/ports/calls, vessel/drive/lift configuration, accompaniment and accepted quality/accessibility |
| How long or cycle | Actual completed boarding-to-alighting interval and declared operating cohort/period; full supporting/asset duty separately attributed |
| reference_flow_link | completed_inland_ferry_leg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed inland ferry passenger transport leg |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_inland_ferry_function_any_schedule; river_canal_or_other_inland_waterbody_and_known_receiver; boarding_alighting_ports_OD_calls_and_leg_completion; actual_persons_vehicle_occupants_roles_and_membership; actual_vessel_architecture_propulsion_lift_controls; actual_duration_quality_accessibility_and_period; included_or_independently_sold_vehicles_luggage_animals_items; actual_load_segment_exposure_and_causal_all_user_allocation; ship_shore_empty_failed_rescue_and_support_duties; actual_native_fuel_grade_blend_state_stock_burn_fates; external_AC_DC_gate_losses_internal_recovery; provider_intensity_native_activity_exact_covered_cells; same_asset_all_user_useful_duty_and_full_lifecycle; each_actual_waste_species_receiver_known_subcompartment_uncertainty |

Required qualifiers must be declared in package metadata,process notes,reference-flow comments or equivalent;missing qualifiers make the definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | completed_inland_ferry_leg | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N is actual completed persons at the same leg boundary and must be positive; not voyages,tickets,crew,vehicles or capacity. |
| native_energy | vessel_shore_ac;vessel_shore_dc;port_ac | Energy | kWh | Distinguish external AC,external DC and internal transfers; kWh/MJ conversion follows supported native relation,not assumed fuel heating value. |
| native_asset | ferry_manufacture;hydrofoil_manufacture;hovercraft_manufacture | Number of items | Item(s) | Native delivered manufacture count times same-asset compatible lifetime share; no relabelling as full-life service or substitution of ship mass for count. |
| native_material_species | marine_distillate;collected_bilgewater;held_blackwater;exhaust_n2o | Mass | kg | Preserve actual fuel,mixture,moisture,molecule and C/N basis; wet/dry or mass/volume conversion requires actual compatible support. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual fulfilment,vessel/port records and evidenced supplier gates |
| starting_condition_role | Accountability interface,not a zero-burden start for vessel/upstream history |
| product_classification_scope | 64121 only, actual river/canal/other inland ferry with any schedule, hydrofoil/hovercraft and actual accompaniment; no distance or marketing threshold |
| recursive_input_rule | Link one concrete completed supplier subservice only after identity,native quantity and coverage verification; no extra final-leg output |
| upstream_dataset_requirement | Verify native gate,stages,quantity,quality and coverage for each actual fuel,energy,material,asset and treatment service |
| disclosure | Actual function,waterbody,architecture,bundle,period,all duties,coverage,lifecycle,allocation,species/media and evidence gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_start | ferry_delivery | Include actual completed passenger leg, covered accompaniment and unavoidable attributable embarkation/disembarkation, voyage, hotel and port support. Record actual waterbody/OD, vessel configuration and included service; no arbitrary distance divides inland from coastal/ocean. | un-cpc3-2025 |
| duty_pool | vessel_operation;port_support | Include attributable manoeuvring, waiting, hotelling, empty/repositioning, charging, maintenance/test and failed/interrupted duties within the evidenced service pool. Their lack of completed passengers is not evidence of zero burden. Preserve period/cohort causality. |  |
| provider_cells | all_processes | Use an explicit provider-by-vessel/voyage/port/stage/period coverage ledger. Either consume a completed compatible supplier result plus only uncaptured integrator burdens, or own physical inputs and link uncovered external stages. A provider-included fuel supply, use-phase release, vessel manufacture or waste treatment replaces that exact foreground cell, never coexists with it; gaps require mandatory expansion. |  |
| capital_complete | vessel_lifecycle;port_support | This PCR explicitly requires attributable vessel and shore-asset manufacture, original/replacement equipment, maintenance, dry-dock, charging/mooring/quay/terminal assets and retirement/end-of-life. Verify actual delivery gates and coverage before lifetime allocation. A manufacture-only ship identity does not cover the other stages; no lifetime service fiction or unsupported universal life. | ghg-product-2011 |
| chemical_fates | vessel_operation;onboard_residues | Keep actual fuel, lubricant, refrigerant, cooling, cleaning and coating supply/stock/use/recovery/fates separate. Assess each actual bilge, black/graywater, scrubber washwater/sludge, ballast intake/discharge/sediment, garbage, antifoulant leachate and hull-cleaning residue. Actual species, receiving freshwater/seawater/soil/air and subcompartment must be identified; waste handover and direct environmental release are different exchanges. | imo-pollution |
| crew_and_inclusions | ferry_delivery;vessel_operation | Working crew are operational support, not passenger output. Include actual attributable crew accommodation, sanitation and operator-provided meals/support and any included passenger amenities. Ordinary off-duty personal subsistence is excluded as an explicit PCR choice, disclosed for comparison; this does not remove onboard operational provisions or justify zero emissions. Actual separately transported off-duty passengers require evidenced passenger status. |  |
| architecture_duties | vessel_operation;vessel_lifecycle;port_support | Select actual displacement, hydrofoil or air-cushion architecture from vessel evidence. For hydrofoils include displacement/transition/foilborne periods, foil controls/actuators, actual foil/strut repairs and materials. For hovercraft include lift-fan and thrust energy, inflate/deflate/idle operation, shore/beach approach and actual skirt wear/replacements/residues; never omit lift energy or assume a propeller-only fuel profile. Whole-craft original parts replace their exact component manufacture cells. Actual fan/propeller air movement is internal physical operation, not a fabricated pollutant flow. Other architectures or chemical-energy routes require documented specific completion/review, not an assumed generic efficiency. | hydrofoil-case;hovercraft-architecture |
| native_provider_activity | purchased_inland_ferry_leg | For actual provider result q_u per verified native unit u, apply measured compatible demand A_u times supported cohort/all-user share and /N once. This Count card is only one completed matching inland ferry person-leg with its real accompaniment/quality/OD scope. Native voyage/hour/vehicle-distance/pkm/other supplier outputs need their own concrete identity and evidenced conversion/demand, not a relabelled Count. Provider-covered ship/shore manufacture,use,emission,support and treatment cells replace only exact local cells; own physical legs are not purchased from oneself. |  |
| inland_ferry_and_accompaniment | ferry_delivery | Confirm actual inland waterbody and ferry function, not every boat or a nominal route length. Record each actual person including every vehicle occupant once; link each actual accompanying vehicle/item crossing once with trip/party/segment records rather than multiplying it by occupants. Separate included accompaniment from independent vehicle-deck/cargo outputs, preserving all real responsibilities and their own native output rows. Real inland/brackish/freshwater/other receiving specificity follows measured location and releases, not code-derived convenience. |  |
| transported_objects_and_actual_outputs | ferry_delivery;vessel_operation;port_support;vessel_lifecycle | An accompanying vehicle,animal,luggage or item is the transported object,not automatically a ferry production asset/input. Do not add its own manufacture,rearing or complete lifetime merely because it accompanies a passenger. Real transport-time handling,care,provision,sanitation,loading/support assets and releases/fates remain included at actual owners/native quantities. A fee line or separately priced accompaniment does not alone prove an independent co-product; subdivide/allocate only genuinely distinct delivered output functions,with their actual native output rows and no repeated passengers or objects. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ferry_delivery | Inland ferry passenger-leg fulfilment | required | Actual completed river/canal/other inland ferry passenger legs,scheduled or non-scheduled | reference_process | completed_inland_ferry_leg |
| vessel_operation | Vessel propulsion,lift,hotel and consumables | conditional | actual owned or uncovered onboard responsibilities | support_process | completed_inland_ferry_leg |
| onboard_residues | Onboard residue and direct-fate handling | conditional | actual generation,holding,treatment or release | support_process | completed_inland_ferry_leg |
| port_support | Port,shore and organizer support | required | all actual attributable uncovered port/shore/organization cells | support_process | completed_inland_ferry_leg |
| vessel_lifecycle | Vessel manufacture and remaining lifecycle | required | actual attributable native vessel/parts supply and uncovered stages | support_process | completed_inland_ferry_leg |

All actual ship/shore/provider/support duties share the final completed inland ferry person-leg reference; they are not extra final outputs or purchased self-services. Conditional cards apply only to actual compatible identities/coverage; every other actual exchange requires mandatory atomic expansion.

### Process: Inland ferry passenger-leg fulfilment (`ferry_delivery`)

#### Inputs

##### Product flows

###### Completed inland ferry passenger transport leg (`purchased_inland_ferry_leg`)

One actual completed supplier inland ferry person-leg matching the precise OD,waterbody,quality,period,accompaniment and accountable physical function at its verified native Count handover. Only actual supplier demand with exclusive covered cells is used. Not an aggregate of all legs, vehicle/voyage/hour capacity, another mode, rented vessel availability or self-purchased owned leg. Other native supplier functions require their own actual concrete rows and measured compatible demand before use.

- Selected flow: Completed inland ferry passenger transport leg
- Flow property / unit: Count / Item(s)
- Amount rule: actual_matched_completed_provider_inland_ferry_person_legs_attributed_to_cohort / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_provider`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed inland ferry passenger transport leg (`completed_inland_ferry_leg`)

One actual passenger completing the declared qualified inland ferry leg from evidenced boarding to alighting points/ports with actual OD/calls/duration/quality and accompaniment. Vehicle occupants count once as persons; vehicles/animals/luggage, tickets, voyages, seats, working crew and failed/unfinished/rescue duties are not automatic completed-person output. Temporary reboarding or intermediate calls do not repeat the same leg. Preserve explicit actual transfer/completion linkage rather than retroactive endpoint changes to convert failed crossings into success.

- Selected flow: Completed inland ferry passenger transport leg
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `un-cpc3-2025`

##### Waste flows

##### Elementary flows

### Process: Vessel propulsion,lift,hotel and consumables (`vessel_operation`)

#### Inputs

##### Product flows

###### Marine distillate gas oil at bunker handover (`marine_distillate`)

Only actual documented marine distillate gas oil supplied to the vessel before onboard handling; retain grade, specification, blend, carbon origins, supplier gate and stocks. Generic road diesel identity is insufficient. Other residual oils, lubricants and chemical fuels are separate identities. Use one whole delivered blend plus composition/carbon ledger OR component supplies replacing the matching whole-blend supply and upstream coverage with mass/native/provider closure; never both.

- Selected flow: Marine distillate gas oil at bunker handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual kg bunker supply required by the stock/use/fate balance / N; cp_operation. Supplied, consumed, combusted, leaked, recovered and retained stocks are distinct; do not use purchased fuel as burned activity without reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `imo-fuel-lca-2024`, `iso8217-abstract`

###### Alternating current (`vessel_shore_ac`)

Only actual external AC imported at the compatible documented point-of-use shore connection supplying attributable onboard propulsion, battery charging or hotel load. Verify voltage, provider and upstream cable/charger/storage losses. Internal DC buses, motor output, battery discharge and regenerated energy are internal transfers, not this imported supply. Actual DC-only external supply needs a separately verified native identity; do not relabel it as AC.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed gross imported kWh at the same measured AC gate / N; cp_operation. Account separately for losses upstream/downstream of that gate without counting them twice.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `imo-fuel-lca-2024`, `damen-ferry-cases`

###### Tap water (`vessel_tap_water`)

Actual compatible supplied tap water loaded for attributable onboard sanitary, cleaning and included passenger/crew service. Environmental abstraction, desalinated water and packaged drinks are different supplies. Record onboard tank opening/closing stocks, generation, use and fates; do not equate the supply with wastewater discharge.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Attributed actual supplied m3 after stock reconciliation / N; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`

###### Detergent (`vessel_detergent`)

Only actual compatible supplied detergent mixture for attributable onboard cleaning, before use; verify composition/formulation and provider coverage. Disinfectant, antifoulant coating, scrubber reagent, solvent and individual chemicals are not automatically this detergent. Its actual residues and emissions require separately identified pathways.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual native kg supplied after stock closure / N; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`

###### Direct current at vessel charging inlet (`vessel_shore_dc`)

Conditional actual external DC delivered at the measured vessel charging inlet, distinct from an AC supply gate upstream of the charger. Verify conversion/storage/cable losses and provider scope. Represent the actual chain once: a completed DC supply including upstream AC replaces that same AC supply; owning upstream AC and charger instead makes downstream DC an internal transfer. Never count both as purchased energy. An internal DC main bus alone proves no external DC supply.

- Selected flow: Direct current at vessel charging inlet
- Flow property / unit: Energy / kWh
- Amount rule: Attributed actual gross imported kWh at verified external DC inlet / N; cp_operation, exclusive of upstream AC representation of the same chain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `hydrofoil-case`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`exhaust_fossil_co2`)

Conditional actual named chemical species emitted to air by attributable onboard combustion; retain fossil/biogenic origin where applicable, engine/load/aftertreatment and actual receiving subcompartment. The bound identity is air unspecified and is allowed only where documented reporting scope justifies unspecified air; known urban/nonurban/specific air requires its own verified native identity or mandatory replacement row. No assumed zero or generic marine factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual species kg from monitoring or an independently supported engine/fuel/load-compatible model / N; cp_air. Use combusted activity and molecule basis; do not turn kg C or kg N into molecule mass by relabelling.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `imo-fuel-lca-2024`

###### carbon dioxide (biogenic) (`exhaust_biogenic_co2`)

Conditional actual named chemical species emitted to air by attributable onboard combustion; retain fossil/biogenic origin where applicable, engine/load/aftertreatment and actual receiving subcompartment. The bound identity is air unspecified and is allowed only where documented reporting scope justifies unspecified air; known urban/nonurban/specific air requires its own verified native identity or mandatory replacement row. No assumed zero or generic marine factor.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual species kg from monitoring or an independently supported engine/fuel/load-compatible model / N; cp_air. Use combusted activity and molecule basis; do not turn kg C or kg N into molecule mass by relabelling.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `imo-fuel-lca-2024`

###### methane (fossil) (`exhaust_fossil_ch4`)

Conditional actual named chemical species emitted to air by attributable onboard combustion; retain fossil/biogenic origin where applicable, engine/load/aftertreatment and actual receiving subcompartment. The bound identity is air unspecified and is allowed only where documented reporting scope justifies unspecified air; known urban/nonurban/specific air requires its own verified native identity or mandatory replacement row. No assumed zero or generic marine factor.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual species kg from monitoring or an independently supported engine/fuel/load-compatible model / N; cp_air. Use combusted activity and molecule basis; do not turn kg C or kg N into molecule mass by relabelling.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `imo-fuel-lca-2024`

###### nitrous oxide (`exhaust_n2o`)

Conditional actual named chemical species emitted to air by attributable onboard combustion; retain fossil/biogenic origin where applicable, engine/load/aftertreatment and actual receiving subcompartment. The bound identity is air unspecified and is allowed only where documented reporting scope justifies unspecified air; known urban/nonurban/specific air requires its own verified native identity or mandatory replacement row. No assumed zero or generic marine factor.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual species kg from monitoring or an independently supported engine/fuel/load-compatible model / N; cp_air. Use combusted activity and molecule basis; do not turn kg C or kg N into molecule mass by relabelling.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `imo-fuel-lca-2024`

###### HFC-134a (`refrigerant_hfc134a`)

Only actual HFC-134a (CAS811-97-2) released from attributable shipboard cooling/air-conditioning. It is the emitted substance, not new refrigerant product or a mixed coolant. Bound air-unspecified identity requires documented unspecified-air scope; known subcompartment needs verified replacement. Platform provides no Chinese baseName for this record, so the official name is retained.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual released kg from charge/top-up/recovery/stock/equipment balance or monitoring / N; cp_air. Purchases/top-ups are not automatically leakage; upstream new refrigerant and recovered waste remain separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `imo-fuel-lca-2024`

### Process: Onboard residue and direct-fate handling (`onboard_residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used lubricating oil (`vessel_used_oil`)

Conditional actual separately collected used petroleum/synthetic lubricating oil at generation before treatment, matching the native waste gate and contents. Bilgewater, oily absorbents, fuel sludge and mixed cleaning liquids are separate streams. Actual transport/treatment service and its included burdens must be completed once, not inferred from the waste identity.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual waste kg at generation excluding container tare / N; cp_residues.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `imo-pollution`

###### Collected oily engine-room bilgewater at reception handover (`collected_bilgewater`)

Only actual collected engine-room oily bilgewater mixture handed over in waste status, with measured water/oil/solids composition and wet-mass basis. Not fresh fuel, spent pure lubricant, cargo washwater, separated sludge, ballast or direct seawater discharge. Treatment/reception boundaries and any prior onboard separation must be explicit.

- Selected flow: Collected oily engine-room bilgewater at reception handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual wet kg handed over, excluding container tare / N; cp_residues. Generated, onboard-treated, stored, recycled, emitted and handed-over quantities require separate closure; receiver-treated fractions cannot also be counted as untreated direct releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `imo-pollution`

###### Collected shipboard toilet blackwater at reception handover (`held_blackwater`)

Only actual separately held toilet sewage mixture in waste status at reception handover, with water/solids basis and composition. Graywater, combined black/graywater, scrubber washwater and ballast have independent identities. If actual onboard treatment or direct discharge occurs, collect its separate inputs, residuals and species/receiving water; absence of this handover does not remove that obligation.

- Selected flow: Collected shipboard toilet blackwater at reception handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual wet kg handed over / N; cp_residues. Reconcile tank stocks, sanitary water, actual sewage generation and all separate fates, without using water supply as an assumed discharge.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `imo-pollution`

###### packaging waste (plastic) (`vessel_plastic_packaging`)

Only actual separately collected plastic packaging waste of compatible contents, before its treatment; not all ship garbage, composite packaging, food-contaminated mixtures or an incineration service. Specify polymers/contamination and actual receiver; different unrepresented mixtures require their own rows.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual net waste kg / N; cp_residues.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `imo-pollution`

##### Elementary flows

### Process: Port,shore and organizer support (`port_support`)

#### Inputs

##### Product flows

###### Alternating current (`port_ac`)

Actual compatible imported AC at port point of use for attributable boarding ramps, terminal, booking/control, lighting or shore equipment, excluding metered vessel_shore_ac and supplier-included electricity. Shore buffer/charger losses belong to their actual gate owner; do not assign the same purchase once to port and again to the vessel.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed gross port kWh / N; cp_port.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_port`
- Sources: `damen-ferry-cases`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Vessel manufacture and remaining lifecycle (`vessel_lifecycle`)

#### Inputs

##### Product flows

###### Complete conventional displacement passenger ferry at manufacture handover (`ferry_manufacture`)

Conditional actual self-propelled displacement ferry delivered in its evidenced complete configuration. This is manufacture-only supply, not vessel rental, a voyage, annual availability or a full-life transport service. Verify the actual hull, engine/motor, original battery and equipment included; no second manufacture input for components already contained. If a candidate provider includes use-phase burdens,it cannot be silently treated as manufacture-only: isolate verified manufacture coverage or identify its actual completed result and replace exactly the covered foreground cells.

- Selected flow: Complete conventional displacement passenger ferry at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Sum actual delivered native manufacture Item(s) times the same vessel/cohort attributable compatible duty / supported total all-user useful duty, then divide by N; cp_vessel_life. Maintenance, replacement batteries, dry-docking and retirement missing from this supply are separately completed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_vessel_life`

###### Complete battery-electric hydrofoil passenger ferry at manufacture handover (`hydrofoil_manufacture`)

Conditional actual complete battery-electric hydrofoil craft delivered at manufacture handover, with evidenced foil structure, controls, motor, original battery and fittings coverage. It is not the conventional displacement ferry card and not a lifetime flying/transport service. Other hydrofoil configurations need their own actual identities; replacement foil/control/battery components and retirement absent from this provider remain separately owned.

- Selected flow: Complete battery-electric hydrofoil passenger ferry at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native manufacture Item(s) times same-craft supported attributable / total all-user useful duty, then /N; cp_vessel_life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_vessel_life`
- Sources: `hydrofoil-case`

###### Complete passenger air-cushion hovercraft at manufacture handover (`hovercraft_manufacture`)

Conditional actual complete passenger hovercraft at manufacture handover with evidenced hull, lift fans, thrust propellers, original flexible skirt, engines/motors and fittings. This is manufacture-only craft supply, not a generic boat or full-life transport result. Keep actual original/replacement skirt and fan coverage exclusive and complete all maintenance/retirement missing from the delivered result.

- Selected flow: Complete passenger air-cushion hovercraft at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native manufacture Item(s) times same-craft supported attributable / total all-user useful duty, then /N; cp_vessel_life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_vessel_life`
- Sources: `hovercraft-architecture`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| subdivide_then_allocate | all_processes | Separate dedicated passenger, separately sold vehicle/deck/cargo and other services wherever actual measurements permit. Allocate remaining shared propulsion/hotel/port/capital using supported physical relationships and compatible all-user duty; justify alternatives and sensitivity if no physical relationship is established. Fare/ticket revenue is not a physical allocation driver. | ghg-product-2011 |
| accompanying_bundle | ferry_delivery | Disclose whether vehicles, luggage, animals, cabin or other inclusions are part of the actual declared passenger bundle or separately sold outputs. Do not count accompanying objects or their occupants twice; measure actual persons including vehicle occupants once. No universal car-to-person, weight, deck-area or fare equivalence is prescribed. Separate freight cannot disappear as free accompaniment. Every independently sold cargo,vehicle-deck or other product requires its own actual atomic output row with native quantity and all section8 expansion fields; do not force it into the passenger Count reference. | un-cpc3-2025 |
| segment_person_closure | ferry_delivery;vessel_operation | Use actual person-leg completion and onboard segment populations/distances and resource use. Stops do not create repeated completed service for the same declared leg. Allocate actual jointly used segments consistently with the declared cohort and other services; do not divide an already per-person supplier result again by occupancy. |  |
| native_supply_life | vessel_lifecycle;port_support | For each actual delivered asset/cohort, use native manufacture quantity times attributable same-asset compatible duty / supported total all-user useful duty, then /N. Duty may be justified hours, voyages or other compatible physical use; it is allocation, not a new flow identity. Support all-user denominator, second-hand/refit histories and prospective uncertainty. Period fuel/use emissions are not divided by lifetime duty again. |  |
| no_mixed_denominator | all_processes | Passenger Count, person-distance, vehicle count, occupied area-time and cargo tonne-distance are distinct measures and cannot be summed. Supported engineering/resource models may relate outputs only with explicit dimensions, observations and sensitivity. N=0 yields no finite reference intensity; retain and resolve the causal duty pool, not zero its numerator. |  |
| recovery_and_export | all_processes | Use evidenced waste/product status, receiver and allocation for recovered material/energy. Internal battery discharge, regenerative energy, recirculated water and other transfers are not extra purchased inputs or avoided-product credits. Genuine external export requires a separate native gate, actual quantity and disclosed allocation without netting incompatible imports. |  |
| vehicle_and_person_membership_closure | all_processes | Collect actual vessel-segment passenger/vehicle/cargo/deck loads and measured or engineering-supported resource duties across all users. Count people once and physical vehicle crossings once; neither passenger Count plus vehicle Count plus cargo tonne-km nor assumed car-to-person/price shares is a denominator. Subdivide dedicated functions first and justify residual hull/propulsion/lift/hotel/port/capital shares with compatible physical drivers,complete all-user totals and sensitivity. Included actual accompaniment remains within its declared passenger bundle without duplication; independently sold actual products require atomic native output rows and shared burden allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The completion,coverage,native scaling,allocation and bookkeeping equations are explicit PCR-designed methods;external sources support only their stated actual definitions/physical contexts. No claim UN,IMO,ISO,BTS,manufacturers orGHGProtocol prescribes these full-life or inland ferry person-leg formulas. Missing generic ranges do not waive mandatory actual quantities.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | ferry_delivery | completed_inland_ferry_leg | actual_record | operator;vessel;architecture;voyage;person_leg_id;boarding_port;alighting_port;calls;actual_waterbody;completion;persons;vehicle_occupants;crew_role;included_bundle;separately_sold_outputs;output_identity_property_unit_quantity;segment_distance;quality;period;provider_cells;transport_kind;contract_function;booking_party_id;temporary_reboarding;included_or_separate_cabin_meals;cargo_native_outputs;actual_inland_ferry_function;river_canal_waterbody;vehicle_crossing_ID;vehicle_occupant_links;included_vs_sold_accompaniment;actual_transfer_rescue_completion | Reconcile actual boarding/alighting and fulfilment records by person leg and vessel; link intermediate calls without duplicating the same declared leg. Evidence actual persons including vehicle occupants once, distinguish on-duty crew, uncompleted services and sold capacity. Record included/separate accompaniment and cargo; provider cells define actual stage responsibility. Declare actual transport versus vessel/crew availability or inclusive experience. Link actual persons to bookings/parties without using party or payment as N; temporary reboarding before final destination does not duplicate the same leg. Record optional or included accommodation/meals as actual functions/native outputs. Aggregation algorithm: N=sum completed persons for the declared leg cohort; require N>0, count each actual person-leg once. Assign actual joint voyage/segment burdens using supported all-user shares, then normalize once by N. Verify actual inland ferry function/geography and all included vehicles/items;actual vehicle crossing once,each occupant once,other cargo output separately. Rescue/transfer/temporary reboarding does not prove repeated successful declared leg;retain actual accepted endpoints/completion and failed duty. | Item(s);kg;tonne-km;km;hour | actual event and period closure | same service period and evidenced life interfaces | declared vessel-leg cohort and associated actual service pool | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_operation | vessel_operation | marine_distillate;vessel_shore_ac;vessel_tap_water;vessel_detergent;vessel_shore_dc | actual_record | vessel;architecture;engine_motor;lift_thrust_foil_control;mode_periods;tow_rope_shore_drive_owners;fuel_grade;blend;carbon_origins;opening_stock;receipts;closing_stock;burned;leaked;recovered;shore_gate_ac_dc;gross_import;conversion_losses;battery_soc;water_stocks;other_supply;provider_cells;all_user_share;dispatch_pickup_cancel_return;commercial_private_other_uses;cargo_hotel_dwell | Obtain bunker/meter/tank/duty records and actual measured configuration. Reconcile voyage,hotel,empty,failed,charging and architecture-specific lift/transition/shore approach duties. Identify each actual fuel,water,chemical and supplied energy gate; distinguish supply,combustion,loss,recovery and stock. A whole blend with composition ledger OR replacement component supplies requires mass and provider closure, never both. Reconcile AC/DC charge boundaries and storage/charger losses; internal battery/discharge/regen is no new external supply. Reconcile actual qualifying ferry dispatch,pickup,waiting,cancellation/failure and return duties,with actual platform/provider owners and all real uses of the same vessel. Where that actual ferry also delivers genuine independent cargo functions,retain actual passenger hotel/food/sanitary and cargo/reefer duties with evidenced separate/shared cells; neither other-use vessels nor cargo functions are presumed and no cargo-primary free ride is assumed. Aggregation algorithm: For each actual native period quantity Q, attribute compatible duty/all-user share a to the cohort and compute sum(Q*a)/N once. Fuel activity is reconciled burned mass, not unreconciled purchase; external energy gate chosen exclusively. | kg;kWh;m3;hour | actual event and period closure | same service period and evidenced life interfaces | owned/uncovered onboard supply and actual all-user duties | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_air | vessel_operation | exhaust_fossil_co2;exhaust_biogenic_co2;exhaust_fossil_ch4;exhaust_n2o;refrigerant_hfc134a | actual_record | vessel;fuel;carbon_origin;engine;load;aftertreatment;duty;burned_activity;monitoring_or_model;factor_basis;source_context;species_mass;air_subcompartment;refrigerant_charge;topup;recovery;stocks;provider_cells;uncertainty | Collect actual species monitoring or independently supported fuel/engine/load/mode-compatible models, including actual lift/propulsion/hotel generators. Separate chemical/carbon/nitrogen bases and receiving compartment. Fuel-LCA GHG-only scope cannot remove other actual species. Determine each refrigerant actual charge/recovery balance; separately expand actual NO/NO2,SO2,CO,NMVOC components,particle sizes,biogenic CH4 and other releases as required,not one NOx/SOx collector identity. Aggregation algorithm: Assign actual molecule/species mass to the cohort using the matching duty share; /N once. Model q=sum compatible burned_activity*evidenced_species_factor, preserving actual factor units/conversion and uncertainty; no generic factor supplied. | kg | actual event and period closure | same service period and evidenced life interfaces | owned/uncovered actual airborne release at actual subcompartment | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_residues | onboard_residues | vessel_used_oil;collected_bilgewater;held_blackwater;vessel_plastic_packaging | actual_record | vessel;stream_id;origin;composition;moisture;phase;mass_volume;density_basis;generated;stocks;onboard_treatment;recovery;handover;receiver;transport_treatment_coverage;direct_species_release;receiving_waterbody_subcompartment;ballast;coating;skirt_or_foil_residues;uncertainty | Use actual tank,maintenance,water,chemical and reception records. Keep bilge,blackwater,graywater,combined sewage,scrubber washwater/sludge,ballast intake/discharge/sediment,food/other garbage,coating/leachate and skirt/foil residues separate by actual composition/gate. Close input/generated-stock-treatment-recovery-handover-release fates. Expand direct water/soil/air species with actual recipient,not waste mass as elementary substance. Actual ballast environmental water intake/discharge is separate from tap-water product; do not invent universal use. Aggregation algorithm: For each actual separate wet/dry/native stream Q and supported service share a, compute sum(Q*a)/N; preserve moisture/density conversion proof. Treatment results replace exactly their included treatment/emission cells,not waste generation or unrelated streams. | kg;m3 | actual event and period closure | same service period and evidenced life interfaces | actual onboard residue generation,holding,treatment and external recipients | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_port | port_support | port_ac | actual_record | port;terminal;boarding;shore_approach;charger_buffer;meter;provider;voltage;upstream_downstream_gate;supplies;wastes;releases;assets;life;all_users;attributable_duty;coverage_cells;remote_organizer;actual_pickup_docks;cargo_loading_reefer_dwell;allocation_causality | Measure or support actual attributable terminal/boarding/control/booking/mooring/charging/shoreapproach services,including shore energy losses not already captured. Inventory each actual input,waste,release and quay/ramp/terminal/charger/storage asset and its maintenance/end-of-life; no omission because owned by a port rather than ferry operator. Use a complete provider result OR its uncovered physical cells with compatible native gate. Include actual private/public pickup docks and dedicated/shared cargo-handling,reefer and cargo-caused waiting infrastructure/energy cells. Evidence causal all-user attribution separately from passenger hotel/boarding; a cargo-call delay is not automatically wholly passenger-caused or wholly free. Aggregation algorithm: Attribute actual native period flows by measured or justified all-user resource/duty shares,then /N; asset manufacture uses same-asset lifetime share before /N. Vessel_shore_ac/DC chain and port purchases must close without double allocation. | kg;kWh;m3;Item(s);hour | actual event and period closure | same service period and evidenced life interfaces | actual uncovered port/shore/organization responsibilities | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_vessel_life | vessel_lifecycle | ferry_manufacture;hydrofoil_manufacture;hovercraft_manufacture | actual_record | vessel_cohort;architecture;delivery_gate;native_quantity;materials;original_parts;battery;foil_fan_skirt;covered_stages;upgrades;replacements;drydock;useful_life;all_user_lifetime_duty;attributable_compatible_duty;retirement;recycling;uncertainty;actual_qualifying_ferry_vessel_configuration;actual_architecture;shared_hull_dedicated_gear;commercial_private_life | Read actual whole-craft manufacture provider boundary and native unit. Reconcile hull/engine/motor/original battery/foil/control/fan/skirt inclusion with each actual replacement or repair. Collect missing upstream manufacture,delivery,maintenance,drydock and retirement/recycling via individually defined physical inputs or compatible completed provider results. Support actual useful-life/all-function duty histories and projections; a supplier manufacture result is not full-life service. Verify the actual qualifying ferry vessel/architecture complete-ship native identity and manufacturing gate,not a name-based substitute. Preserve all real commercial/private/other functions of that same actual asset in its compatible all-user useful-duty denominator and actual dedicated/shared ferry handling equipment. No known new craft type may disappear into a generic asset expansion label. Aggregation algorithm: For each supply unit j, q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N with supported positive compatible Dtotal; separate each missing stage/part and any provider-included use-phase replacement. No repeated lifetime division of period operational quantities. | Item(s);kg;hour;voyage | actual event and period closure | same service period and evidenced life interfaces | same actual craft/part/cohort all-user life and uncovered stages | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_provider | ferry_delivery | purchased_inland_ferry_leg | provider_native_coverage_record | provider_ID;actual_inland_ferry_OD_waterbody_quality_accompaniment;native_unit_u;q_per_u;actual_matched_A_u;actual_conversion;ship_shore_stage_period_cells;uncovered_owner;cohort_all_user_share;already_normalized;uncertainty | Read actual complete supplier result/native unit,matched inland ferry function and person-leg demand,OD/quality/accompaniment and exact covered cells. q_u*real compatible A_u*supported all-user share/N once. Count card only for matching native completed person-leg; other units need independent actual rows/demand evidence. Replace exact physical cells and retain uncaptured obligations; own physical legs/internal energy are not another purchase. | Item(s);actual independently verified provider-native units | actual event and period closure | same service period and evidenced life interfaces | declared vessel-leg cohort and associated actual service pool | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | completed_inland_ferry_leg | N=sum actual completed persons for declared boarding-to-alighting leg cohort. Intermediate calls without disembarking do not increment the same person leg; tickets,voyages,vehicles,crew/capacity are not N. N>0 required. Physical passenger distance=sum actual onboard person-segment distance is secondary disclosure,not a relabelled Count or fixed pkm factor. | actual person-leg completion ledger | N Item(s);separate person-distance |  |
| native_flow_normalization | all_processes | q_r=sum actual compatible native Q_r*a_r /N once,where a is justified same-scope all-user attribution. Q already expressed per completed person is scaled only to actual demanded person count,not divided by occupancy again. Keep own stage/provider cells exclusive. Missing a,Q or identity is incomplete,not zero. | native Q;actual allocation a;N | q_r per declared reference flow |  |
| fuel_blend_ownership | marine_distillate | Per actual fuel: opening_stock+receipts+transfers_in=closing_stock+burned+noncombustion_use+leakage+recoverable_outflow+transfers_out,with measured compatible states. Count internal transfers once. Supply quantity follows the defined upstream demand/stock boundary,not automatic purchased=burned. Represent one whole blend plus component/carbon ledger OR actual component supplies replacing corresponding whole-blend mass and upstream cells with native/provider closure; never duplicate contained biofuel. Reconcile fossil/biogenic carbon in supply,combustion,stocks and fates with actual composition; energy conversion uses actual supported density/heating basis. | bunker receipts;stocks;composition;burned;fates;provider cells | separate actual supply,burned,fates and carbon |  |
| external_energy_gate | vessel_shore_ac;vessel_shore_dc;port_ac | Choose actual external AC or DC supply gate per chain and reconcile gross imports,conversion/storage/cable losses,stored energy changes,owned loads and genuine external exports. Upstream AC+owned charger makes downstream DC an internal transfer; completed external DC supply replaces matching upstream AC coverage. Do not duplicate imports,net incompatible export,add motor output/battery discharge/regen as purchased supply,or infer external DC from an internal DC bus. | external meter;AC_DC gates;losses;storage;export;coverage | exclusive native energy demand and uncovered losses |  |
| asset_share | ferry_manufacture;hydrofoil_manufacture;hovercraft_manufacture;port_support | q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N,matching actual delivered asset/cohort and compatible positive supported lifetime duty. Include other users/functions and all attributable empty/support duties. Complete maintenance,foil/control/fan/skirt/battery replacement,drydock,delivery and retirement missing from manufacture separately once; whole-craft original components are not purchased again. Provider included operating cells replace corresponding foreground cells. | Qnative_j;Dcohort_j;Dtotal_allusers_j;N;covered stages | native manufacture share plus separate missing stages |  |
| species_and_fate_closure | vessel_operation;onboard_residues | Keep each actual substance,mixture,state,carbon/nitrogen basis,medium and known subcompartment. Reconcile material/water generation and stocks with use,onboard treatment,recovery,waste handover and environmental release. kg N-N2O differs from kg N2O; kg C differs from CO2/CH4. Apply only evidenced molecule/element conversions. Fuel/sanitary water purchases are not emissions; no raw waste-mixture mass as a pure elementary species. Recovery and treatment outputs include their actual new identities and provider boundaries. | actual species;chemical basis;water/material stocks;recovery;receiver;provider | separate actual substance/stream/fate quantities |  |
| provider_native_intensity | purchased_inland_ferry_leg | Inventory contribution=q_u*actual compatible native A_u*supported cohort/all-user share/N once,with exact included ship/shore/stage cells replacing corresponding physical cells. A provider already per completed passenger is multiplied by actual matched demanded legs,not divided by occupancy again. Real supplier-native voyage/hour/distance/other outputs require independent identity/dimensional demand evidence. | cp_provider;cp_delivery;actual native supplier activity and coverage ledger | exclusive provider contribution per reference flow |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_fulfilment | completed_inland_ferry_leg | MANDATORY: actual completed inland ferry person-leg with river/canal/other inland waterbody,function,boarding/alighting points,OD/calls/duration/quality,role,actual occupants and accompaniment membership. No capacity/ticket/voyage substitute or repeated temporary reboarding. Accompanying vehicles/luggage/animals/items are explicit responsibilities; link each once and distinguish independent actual native vehicle-deck/cargo outputs with all dq_expand_operation fields and same-parent CP. Actual transfer/rescue/interrupted leg needs real endpoint/accepted completion evidence,not post-hoc relabelling of failure. | person/voyage/port fulfilment and actual-waterbody ledger |
| dq_provider | all_processes | Every actual required stage must have one owner and covered/uncovered status with evidence. A completed supplier result needs its exact product/native quantity,boundary,quality,allocation and upstream/direct/capital/waste coverage; enter one specific service row only after identification. Otherwise mandatory physical expansion remains. Neither a generic all-legs/all-port-services card nor absent external supplier data closes the boundary. | row-linked provider x actual vessel/voyage/port/stage/period matrix |
| dq_expand_operation | vessel_operation | MANDATORY for every actual unrepresented fuel/grade/blend component replacing whole blend,heat,cooling,lubricant,refrigerant make-up,water source,food/catering/crew operational provision,chemical/material and direct substance release: add one actual atomic row per identity/state/gate. Include actual NO/NO2,SO2,CO,NMVOC components,particle sizes,biogenic CH4 and other relevant species; no default factor or zero for an absent card. Each added row must carry unique row_id,existing process_id,direction,flow_type,specific physical/substance identity,verified UUID or honest unresolved status,native property/unit,actual quantity/basis,valid same-parent CP,source/provider scope,actual receiver/medium/known subcompartment and uncertainty. Unknown occurrence requires investigation; absence requires evidence. | cp_operation;cp_air;actual meter,chemical and duty records |
| dq_expand_fates | onboard_residues | MANDATORY actual row-addressable expansion using all fields of dq_expand_operation for bilge/black/gray/combined sewage,scrubber washwater/sludge,ballast intake/discharge/sediment,food/other garbage,cleaning/coating/antifoulant substances and leaching,skirt/foil wear/cleaning residues and every other occurring stream. Actual salt/freshwater/soil/air and subcompartment cannot be selected from convenience UUID. Treatment/transport,inputs,sludges and direct species releases remain separate with one coverage owner; no assumption every vessel has ballast/scrubber or that no listed handover means no discharge. Legal discharge limits are not concentrations or permission inferred for this inventory. | cp_residues;reception,tank,treatment and release records |
| dq_architecture | vessel_operation;vessel_lifecycle;port_support | MANDATORY for each actual architecture: displacement hull/drive; hydrofoil transition/foilborne energy,foil controls/actuators/materials/repairs; hovercraft lift-fan/thrust,skirt inflation/idle,shore/beach phases and actual fan/skirt replacements/wear fates. Add each actual missing input/part/release with dq_expand_operation fields and corresponding same-parent CP; no conventional-vessel factor copied to a different architecture. Actual towed/cable service must add each towing provider or owned physical duty,rope/cable/guide and wear/replacement,shore mechanism/native external energy and covered/uncovered owner using the same atomic fields; no assumed onboard propulsion or simultaneous completed-tow/owned-physical double count. Other chemical fuel or geometry requires actual completed route evidence and review before use; lack of such data blocks that application rather than excluding the ferry product or redefining the reference. | configuration,energy mode and component maintenance records |
| dq_expand_capital_port | vessel_lifecycle;port_support | MANDATORY actual expansion with dq_expand_operation fields for each missing ship/shore asset,part manufacture,battery,foil/control,fan/skirt,charger/buffer,quay/terminal/ramp,delivery,maintenance,drydock and end-of-life. One actual gate/native quantity per row,not a collection of asset services. Support same-asset all-user duty,original versus replacement coverage and projections; missing useful life or provider stage blocks completion,not omission. Actual port/organization input/waste/release expansion is equally mandatory. | cp_vessel_life;cp_port;delivery,life,maintenance,retirement evidence |
| dq_allocation | all_processes | Reconcile actual passengers,accompanying bundle,separately sold vehicles/cargo,other ship/port users and service supports. Use measured subdivision first; justify any compatible physical or alternative relationship and all-user closure. Never sum Count and tonne-km or prescribe car/person equivalence; fare and capacity are not observed resource consumption. Carry uncertainty and boundary comparability,including ordinary off-duty crew subsistence exclusion. | physical resource/engineering/area-time/duty evidence and sensitivity |
| dq_native_source | all_processes | Confirm each bound identity native state/gate/type/property/unit/official name and actual applicability. Generic air-unspecified bindings require a documented unspecified-air scope; known subcompartment requires verified replacement. Mass/volume conversion requires actual compatible density or attached native relation. ISO public abstract supplies no grade values; IMO fuel GHG-only method supplies no full vessel/capital/refrigerant/other-emission completeness. Manufacturer cases supply no universal efficiency,capacity or life; BTS U.S. census scope is not a global service definition. Missing UUID or generic range is disclosed,not fabricated; actual required quantity remains mandatory. | direct flow/property/unitgroup proof and actual source applicability |
| dq_inland_all_actual_routes | all_processes | MANDATORY each actual qualifying inland ferry hull/drive/energy and shore condition,not only three manufacture examples: collect native complete vessel and independently supplied stack/tank/battery/foil/control/fan/skirt/rope/tow mechanism; each actual fuel/grade/phase/blend,heater/cooling/charging supply,river/sea-state/current/wave-wake/navigation duty and maintenance/retirement/material fates with all dq_expand_operation fields. Do not infer river current,load factor,efficiency,emissions,wear or life from geometry or manufacturer claims. Real tow/provider and own physical operation are alternatives for matching covered cells. Preserve every actual unrepresented sanitary/ballast/scrubber/antifoulant/garbage/species pathway,including actual known medium/subcompartment and physical disturbance assessment limits; unknown actual applicability blocks completed data,not the qualifying product. | cp_operation;cp_air;cp_residues;cp_port;cp_vessel_life;actual engineering and receiving records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | completed_inland_ferry_leg | Require exact actual delivered person-leg object,reference amount1 Item(s),all required qualifiers and positive N. Reject ticket,voyage,vehicle,crew/capacity counts or pkm relabelling. Preserve attributable failed/empty pools. |  |
| validate_coverage | all_processes | Require one stage owner and full provider/foreground coverage,including actual port,hotel,architecture,ship/shore lifecycle and treatment. Included supplier cells replace exact owned cells; missing actual supply,fate,life or identity blocks completed downstream use. |  |
| validate_balances | all_processes | Reject duplicate whole-blend/component supply,AC/DC/internal-energy double counts,unreconciled stock/burned mass,kgN/kgC relabelling,mixed wastewater identities or waste-mixture mass as elementary emission. Require actual receiving medium/subcompartment and material/water/fate closure. |  |
| validate_allocation | all_processes | Reject unsupported ratios,capacity-as-occupancy,crew-as-passenger,accompanying-object double count and Count+tonne-km denominators. Verify actual all-user/subdivision evidence and compatible same-asset lifetime shares,without repeated period-quantity lifetime division. |  |
| validate_expansion | all_processes | Each actual unrepresented physical input,waste,emission,component,service or stage must be expanded under section8 with unique native identity/quantity/CP/source/receiver. Unknown is not zero. Every protocol process_id is one real process and every row references a same-parent protocol. |  |
| validate_evidence_languages | all_processes | Require EN/ZH/projection substantive equivalence,identity support and source-limited claims. Candidate checker pass does not resolve unknown UUIDs/quantities or establish a published complete inventory. No invented marine factor,occupancy,range,life,discharge or zero-emission claim. |  |
| validate_inland_scope_native_and_projection | all_processes | Require actual64121ferry/inlandwaterbody with accompanying vehicle/item membership,not generic water transport. Prove all qualifying architecture energy/control/maintenance/fates and native all-user provider/asset closure; no data-readiness exclusions. Check all authored normative table rule_ids survive projection and every CP/card/flow-role parent is real. No repeated people/vehicles or rescue failure relabelled success. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only after all mandatory identity,quantity,coverage and fate obligations are completed and reviewed |
| allowed_use | Actual qualified inland ferry completed person-leg with harmonized waterbody/OD/quality/period/accompaniment,all actual architecture/native provider and full ship/shore lifecycle |
| excluded_use | Non-ferry or coastal/ocean/cruise/sightseeing/rental function relabelled inland ferry;ticket/voyage/vehicle/animal/crew/capacity as persons;default pkm or car-person factor;incomplete actual native lifecycle/fates |
| required_metadata | actual_inland_ferry_function_any_schedule;river_canal_or_other_inland_waterbody_and_known_receiver;boarding_alighting_ports_OD_calls_and_leg_completion;actual_persons_vehicle_occupants_roles_and_membership;actual_vessel_architecture_propulsion_lift_controls;actual_duration_quality_accessibility_and_period;included_or_independently_sold_vehicles_luggage_animals_items;actual_load_segment_exposure_and_causal_all_user_allocation;ship_shore_empty_failed_rescue_and_support_duties;actual_native_fuel_grade_blend_state_stock_burn_fates;external_AC_DC_gate_losses_internal_recovery;provider_intensity_native_activity_exact_covered_cells;same_asset_all_user_useful_duty_and_full_lifecycle;each_actual_waste_species_receiver_known_subcompartment_uncertainty |
| required_quality_disclosure | Identity/quantity gaps,missing stages,model/factor applicability,projected life,actual receiving water/subcompartment,crew subsistence exclusion and allocation sensitivity |
| update_trigger | Changes in bundle,waterbody,architecture,propulsion/lift,fuel,shore gate,provider coverage,assets,release/waste fates or allocation |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,PDF pp360–363 and369. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual64121river/canal/other inland ferry,any schedule,hydrofoil/hovercraft and accompanying vehicles/luggage/animals/items. Classification only,not a Count/vehicle-equivalence formula,waterbody distance threshold or LCA factor. |
| imo-fuel-lca-2024 | official_guidance | IMO Resolution MEPC.391(81),22March2024,2024 marine-fuel LCA Guidelines,annex p3 sections1–2. https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MEPCDocuments/MEPC.391(81).pdf | Fuel-chain and onboard propulsion/power interfaces,including shore electricity; CO2/CH4/N2O only. Explicitly excludes refrigerants and other listed species; not full ship inventory. No default factor adopted. |
| imo-pollution | official_guidance | IMO Pollution Prevention,public page accessed21October2026,opening paragraphs. https://www.imo.org/en/ourwork/environment/pages/pollution-prevention.aspx | Qualitative separate oil,sewage,garbage,air,ballast,antifouling and reception pathways; not factors,actual concentrations,universal occurrence or legal discharge permission. |
| iso8217-abstract | standard | ISO8217:2024,edition7 May2024,public abstract only. https://www.iso.org/standard/80579.html | Marine fuel specification families and before-onboard-handling gate; full normative text not read. No numeric grade,composition,density,sulphur or compliance conclusion. |
| damen-ferry-cases | literature | Damen Road Ferries and Ferry2306 Electric,primary product pages accessed21October2026. https://www.damen.com/vessels/ferries/roro-ferries ; https://www.damen.com/vessels/ferries/city-ferries/ferry-2306-electric | Actual case interfaces: passenger/vehicle ferries,shorecharging/buffer,diesel backup and internalDC. Product cases only; marketing emission savings,capacities and charging performance not generic parameters. |
| hydrofoil-case | literature | Candela P-12 Shuttle,primary technical product page accessed21October2026. https://candela.com/pro-series/p-12-shuttle/ | Actual electric hydrofoil controls,foil structure/transition and external DC charging architecture; no advertised savings,range,capacity or life adopted as a generic factor. |
| hovercraft-architecture | literature | Griffon Hoverwork/Griffon Marine,How Hovercraft Work,public primary technical explanation accessed21October2026. https://www.griffonhoverwork.com/products/hovercraft/how-hovercraft-work/ | Actual lift-fan,flexible-skirt and thrust-propeller functions over water/shore surfaces; not passenger-operation emission,wear or fuel factors. |
| bts-ncfo-2024 | official_guidance | BTS2024 National Census of Ferry Operators printable questionnaire,PDF pp2 and11. https://www.bts.gov/sites/bts.dot.gov/files/2025-02/2024%20NCFO%20Printable%20Questionnaire.pdf | U.S.-scope census context and distinct passenger/vehicle capacities excluding crew; no adoption of capacity or assumed car length as actual occupancy,reference denominator or worldwide service definition. |
| ghg-product-2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011,chapters7 and9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Allocation hierarchy and disclosure context; required ship/shore capital and specific Count/duty formulas are explicit PCR choices,not mandates attributed to this GHG standard. |
