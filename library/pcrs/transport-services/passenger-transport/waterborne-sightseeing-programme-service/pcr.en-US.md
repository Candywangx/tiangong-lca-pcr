---
pcr_id: pcr.waterborne-sightseeing-programme-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Waterborne sightseeing programme service

## 1. Scope and Applicability

This PCR covers one actual participant completing a declared waterborne sightseeing programme. The delivered function is the agreed observation/interpretation experience through its actual boat sequence,itinerary,stops,viewing content and included amenities,rather than mere movement between points. A programme may be a loop,A-B excursion or evidenced selected flexible multi-leg programme; its return legs,boat changes and temporary reboarding do not create extra completions. Guide,narration,food and other amenities remain mandatory when actually included,but are not universal assumptions from the examples.

Before aggregation declare the reproducible fixed-itinerary or flexible-selection grouping rule,compatible quality class and completion evidence. Pass validity,ticket sales,booking parties,boat voyages,each boarding,physical legs,landmarks/wildlife sightings and passenger-km cannot replace actual participant-programme count. Distinguish an agreed viewing opportunity from any actual guaranteed condition; wildlife presence and every advertised landmark are not default guaranteed outcomes. Keep actual unsuccessful,interrupted,retry and compensatory duties in their evidenced causal service pool. Attempts jointly fulfilling one obligation count one completion while retaining all burdens.

Exclude ordinary waterborne transport even with scenic views or a tourist destination,ticket/access-entitlement sale alone,admission alone,vessel-and-crew availability/rental,and full inclusive cruise or multimode holiday packages. Product identity follows actual contracted fulfilment and inclusions,not the marketing word cruise,price,duration or an arbitrary waterbody threshold. CPC64133 describes sightseeing passenger water transport,and the proposed method relation is exact; missing evidence/UUIDs affect readiness rather than set relation and do not imply completed data for every application.

Sightseeing and ordinary waterborne transport share actual ship/shore,energy,asset-maintenance and material-fate interfaces,but the programme additionally owns actual viewing loiter/detours,guide/audio/content/devices and included services. Owned physical boat legs are internal operation,not another purchased transport input. Actual completed external boat/guide/food results replace only their native demand and genuinely included cells. Complete every actual propulsion/hull,ship/shore lifecycle,waste/species/medium obligation; missing identity,quantity,quality,attribution or fate requires atomic expansion,not zero. No universal occupancy,duration,lifetime,food amount,emission factor or range is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.waterborne-sightseeing-programme-service |
| classification_refs | CPC3.0 64133;exact;actual waterborne sightseeing passenger programme |
| covered_products | Actual fixed or flexibly selected participant waterborne sightseeing programme with agreed viewing quality and actual completion evidence |
| excluded_products | Ordinary scenic transport,booking/access/admission alone,vessel/crew availability or rental,full inclusive cruise/holiday package |
| representative_product | Completed participant waterborne sightseeing programme |
| production_route | Actual programme fulfilment;onboard propulsion/hotel/all duties;guide and included amenities;ship/shore whole lifecycle and fates |
| market_state | Completed participant sightseeing programme with actual itinerary,quality,inclusions and fulfilment evidenced |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed participant waterborne sightseeing programme |
| How much | 1 actual completed participant waterborne sightseeing programme |
| How well | Actual fixed/flexible grouping,viewing or guaranteed quality,itinerary/boats/calls/waterbody,included guide/amenities and fulfilment evidence |
| How long or cycle | Declared programme beginning to fulfilled completion,all internal legs/attempts included;supply period and asset life separate |
| reference_flow_link | completed_sightseeing_programme |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed participant waterborne sightseeing programme |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | programme_id;actual sightseeing_function_not_ordinary_transport_cruise_or_access;fixed_or_flexible_grouping_rule;compatible_quality;viewing_opportunity_or_actual_guarantee;actual_participant_completion;attempt_retry_obligation;actual_itinerary_waterbody_boats_calls_transfers_reboarding;actual_duration_distance;included_or_sold_narration_audio_content_device_map_food_amenities_admission;guide_crew_role;period;viewing_loiter_detour_approach_empty_failed_compensatory_duties;fuel_grade_blend_carbon;external_AC_DC_native_gates_losses;programme_leg_provider_cells;all_function_shares;ship_shore_support_useful_life;actual_waste_species_media_known_subcompartments |

Declare required qualifiers in package metadata,process notes,reference-flow comment or equivalent; missing qualifiers make the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | completed_sightseeing_programme | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N is actual completed participant-programmes in the same declared quality/grouping and must be positive; not tickets,passes,boardings,physical legs,crew,capacity or sightings. |
| native_energy | vessel_shore_ac;vessel_shore_dc;port_ac;programme_support_ac | Energy | kWh | Distinguish external AC,external DC and internal transfers; kWh/MJ conversion follows supported native relation,not assumed fuel heating value. |
| native_asset | sightseeing_vessel_manufacture | Number of items | Item(s) | Native delivered manufacture count times same-asset compatible lifetime share; no relabelling as full-life service or substitution of ship mass for count. |
| native_material_species | marine_distillate;collected_bilgewater;held_blackwater;exhaust_n2o | Mass | kg | Preserve actual fuel,mixture,moisture,molecule and C/N basis; wet/dry or mass/volume conversion requires actual compatible support. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual programme agreement/fulfilment,boat/shore/guide/amenity records and evidenced supplier gates |
| starting_condition_role | Accountability interface,not a zero-burden start for vessel/upstream history |
| product_classification_scope | Actual CPC64133 waterborne sightseeing passenger function,proposed exact;no default guide,loop,duration or wildlife guarantee,evidence gaps affect readiness |
| recursive_input_rule | Link a concrete completed external subservice only at real handover with verified identity,native quantity/coverage;owned internal legs are not purchases or extra programme outputs |
| upstream_dataset_requirement | Verify native gate,stages,quantity,quality and coverage for each actual fuel,energy,material,asset and treatment service |
| disclosure | Actual programme function,fixed/flexible grouping,quality/attempts,itinerary/waterbody/boats,inclusions,all duties/coverage/lifecycle/allocation and species/media gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| programme_start | programme_delivery | Include the actual agreed viewing/interpretation programme from its documented beginning to completion,all constituent boat legs/stops/transfers and included narration/amenities. Same-boat reboarding,return legs and supplier subactivities are internal to the declared programme,not extra final outputs. Ordinary scenic travel,booking/access entitlement or attraction admission alone is not this fulfilled product. | un-cpc3-2025,circleline-programme,citycruises-programme |
| duty_pool | vessel_operation;port_support | Include attributable manoeuvring, waiting, hotelling, empty/repositioning, charging, maintenance/test and failed/interrupted duties within the evidenced service pool. Their lack of completed passengers is not evidence of zero burden. Preserve period/cohort causality. |  |
| provider_cells | all_processes | Use an explicit provider-by-vessel/voyage/port/stage/period coverage ledger. Either consume a completed compatible supplier result plus only uncaptured integrator burdens, or own physical inputs and link uncovered external stages. A provider-included fuel supply, use-phase release, vessel manufacture or waste treatment replaces that exact foreground cell, never coexists with it; gaps require mandatory expansion. |  |
| capital_complete | vessel_lifecycle;port_support | This PCR explicitly requires attributable vessel and shore-asset manufacture, original/replacement equipment, maintenance, dry-dock, charging/mooring/quay/terminal assets and retirement/end-of-life. Verify actual delivery gates and coverage before lifetime allocation. A manufacture-only ship identity does not cover the other stages; no lifetime service fiction or unsupported universal life. | ghg-product-2011 |
| chemical_fates | vessel_operation;onboard_residues | Keep actual fuel, lubricant, refrigerant, cooling, cleaning and coating supply/stock/use/recovery/fates separate. Assess each actual bilge, black/graywater, scrubber washwater/sludge, ballast intake/discharge/sediment, garbage, antifoulant leachate and hull-cleaning residue. Actual species, receiving freshwater/seawater/soil/air and subcompartment must be identified; waste handover and direct environmental release are different exchanges. | imo-pollution |
| crew_and_inclusions | programme_delivery;vessel_operation | Working crew are operational support, not passenger output. Include actual attributable crew accommodation, sanitation and operator-provided meals/support and any included passenger amenities. Ordinary off-duty personal subsistence is excluded as an explicit PCR choice, disclosed for comparison; this does not remove onboard operational provisions or justify zero emissions. Actual separately transported off-duty passengers require evidenced passenger status. |  |
| architecture_duties | vessel_operation;vessel_lifecycle;port_support | Select actual displacement, hydrofoil or air-cushion architecture from vessel evidence. For hydrofoils include displacement/transition/foilborne periods, foil controls/actuators, actual foil/strut repairs and materials. For hovercraft include lift-fan and thrust energy, inflate/deflate/idle operation, shore/beach approach and actual skirt wear/replacements/residues; never omit lift energy or assume a propeller-only fuel profile. Whole-craft original parts replace their exact component manufacture cells. Actual fan/propeller air movement is internal physical operation, not a fabricated pollutant flow. Other architectures or chemical-energy routes require documented specific completion/review, not an assumed generic efficiency. | hydrofoil-case,hovercraft-architecture |
| fixed_flexible_quality | programme_delivery | Before normalization define actual fixed itinerary or flexible selected programme and compatible quality class,viewing opportunity versus any guaranteed performance,scope of narration and completion evidence. A flexible pass needs observed programme/leg/person records and a declared reproducible grouping rule,not one tour per ticket/day/boarding or a post-hoc shortest path. Unknown completed programme units block completed use. Wildlife presence,weather/visibility and all published landmarks are not universal guaranteed outputs. | citycruises-programme,captaincook-programme |
| tour_and_supplier_ownership | all_processes | A compatible completed external boat/guide/food result replaces only its actual native demand and covered stage cells; add only uncaptured organiser/guide/shore/amenity responsibilities. Owned boat legs are internal physical operations,not another purchased transport result. Keep actual programme-to-leg-to-vessel/provider coverage closed; no full transport result plus the same fuel/assets/releases. Include actual viewing detours,slow/loiter/photo/wildlife approaches,empty/reposition,waiting,failed and compensatory duties under their true owner. |  |
| included_extras | programme_delivery;programme_support;vessel_operation;port_support | Actual included commentary,guide/audio/content,required device/network,printed maps,refreshments or shore activities stay complete in the programme. Additional-charge independent food,bar,admission or other services require actual subdivision/shared-duty allocation and their own native output rows. Do not infer a full inclusive cruise from the word cruise or a supplied snack; a whole cruise/holiday function is a different product. Employed crew/guide work is support,not participant output or fictitious purchased labour fuel. | circleline-programme,citycruises-programme,captaincook-programme |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| programme_delivery | Sightseeing programme fulfilment | required | actual completed fixed/flexible waterborne sightseeing programmes | reference_process | completed_sightseeing_programme |
| vessel_operation | Vessel propulsion,lift,hotel and consumables | conditional | actual owned or uncovered onboard responsibilities | support_process | completed_sightseeing_programme |
| onboard_residues | Onboard residue and direct-fate handling | conditional | actual generation,holding,treatment or release | support_process | completed_sightseeing_programme |
| port_support | Port,shore and organizer support | required | all actual attributable uncovered port/shore/organization cells | support_process | completed_sightseeing_programme |
| vessel_lifecycle | Vessel manufacture and remaining lifecycle | required | actual attributable native vessel/parts supply and uncovered stages | support_process | completed_sightseeing_programme |
| programme_support | Guide,interpretation and programme support | conditional | actual included/attributable programme support not already covered by vessel,port or provider cells | support_process | completed_sightseeing_programme |

All nodes share the final participant sightseeing-programme reference;internal legs or conditional nodes create no extra outputs. Use each card only when it actually occurs and remains uncovered by providers; other actual flows require mandatory section8 row expansion.

### Process: Sightseeing programme fulfilment (`programme_delivery`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed participant waterborne sightseeing programme (`completed_sightseeing_programme`)

One actual participant completing the declared fixed or flexible waterborne sightseeing programme under its documented performance/quality rule. Declare the viewing/interpretation function,itinerary,actual boat sequence/calls,boarding-to-programme-end boundary and included guide/audio/amenities. A programme may be a loop,A-B excursion or evidenced selected multi-leg programme. Tickets,passes,parties,boat movements,temporary reboarding,each physical leg and wildlife/landmark sightings are not extra completed programmes.

- Selected flow: Completed participant waterborne sightseeing programme
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_programme`
- Sources: `un-cpc3-2025`, `circleline-programme`, `citycruises-programme`

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

###### Complete displacement passenger sightseeing excursion vessel at manufacture handover (`sightseeing_vessel_manufacture`)

Conditional actual complete displacement sightseeing passenger vessel delivered at manufacture handover,with actual hull,drive,viewing decks/windows,climate control,original equipment/battery and fittings coverage verified. It is a manufactured craft,not a tour,boat hire or full-life service. Refitted/historic or other actual craft configurations need their own native identities and actual restoration/refit burden,not a ferry UUID relabelled by end use. Original equipment and subsequent replacements remain exclusive.

- Selected flow: Complete displacement passenger sightseeing excursion vessel at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered native manufacture Item(s) times the same vessel/cohort attributable compatible duty / supported total all-user useful duty,then /N; cp_vessel_life. Complete missing delivery,restoration/refit,maintenance,drydock,replacements and retirement separately once; age alone is not zero burden.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_vessel_life`
- Sources: `circleline-fleet`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Guide,interpretation and programme support (`programme_support`)

#### Inputs

##### Product flows

###### Completed externally supplied onboard live sightseeing narration programme (`external_live_narration`)

Only an actual externally handed-over completed live onboard narration service for one documented boat/programme session,with actual language,content,duration,quality and provider coverage. It is not a passenger count,wage,guide-hour or every guide activity pooled together. An employed captain/guide performing owned work is an internal activity,not this purchased service. Recorded audio,content licensing and equipment have distinct actual identities if required.

- Selected flow: Completed externally supplied onboard live sightseeing narration programme
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native completed provider sessions times supported attributable share across their actual users/functions /N; cp_support. One boat-session may serve many participants; do not purchase one full provider session again for every person or duplicate provider-included guide travel/equipment/energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `circleline-programme`, `citycruises-programme`

###### Maps and hydrographic or similar charts of all kinds, including atlases, wall maps, topographical plans and globes, printed other than book form (`printed_route_map`)

Conditional actual printed paper route/commentary map supplied for the programme,with actual paper/ink/finish,net mass,printing and delivery coverage. It is not a generic map app,plastic board or collection of all promotional materials. Use completed printed-map supply OR actual paper/ink/printing inputs replacing its exact coverage,never both. Retained/reused copies and maps taken away by participants need actual stock and downstream-fate ownership. This identity is limited to an actual compatible finished geographical non-book-form printed paper map at its manufacturing-plant handover; verify actual paper/ink/finish and provider coverage. General promotional leaflets or purely textual instruction sheets are not this geographical map. Bridge the actual supplier/receipt gate to the manufacturing-plant gate and separately include delivery and every missing stage beyond that gate. Book-form products,digital maps,composites or other forms require their own verified identity/mandatory expansion; no generic mapping of the entire printed-matter family.

- Selected flow: Maps and hydrographic or similar charts of all kinds, including atlases, wall maps, topographical plans and globes, printed other than book form `ffbb7718-2cb6-4962-8dd4-93ef71ac9e0c`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual net kg of supplied/consumed printed maps after stock/reuse reconciliation /N; cp_support. No assumed map per ticket or map mass; supplier native property/gate must match the actual object.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `captaincook-programme`

###### Alternating current (`programme_support_ac`)

Actual compatible externally imported AC at a separately documented programme-support point of use for attributable guide/content preparation,booking/admin or owned audio/device support. Exclude vessel/port meters already counted and supplier-included electricity; onboard PA supplied by the vessel hotel meter stays there once. Required user-device/network activity needs its own evidenced scope/ownership rather than an assumed universal phone factor.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed actual gross imported support kWh /N; cp_support,exclusive of vessel_shore_ac,port_ac and covered provider cells.
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

###### waste paper (unspecified) (`programme_waste_paper`)

Conditional actual separately collected paper waste from programme maps/printed support at generation before treatment,with compatible paper/finish/contamination and actual receiver. It is not all tour garbage,plastic-laminated composite or a paper-recycling service. Participant-taken maps are not simultaneously this onsite waste; their actual fate remains owned separately.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual net waste kg /N; cp_support. Reconcile map stocks,reuse,distribution and separately collected/other fates without assuming all supplied paper immediately becomes onsite waste.
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
| subdivide_then_allocate | all_processes | Separate dedicated passenger, separately sold vehicle/deck/cargo and other services wherever actual measurements permit. Allocate remaining shared propulsion/hotel/port/capital using supported physical relationships and compatible all-user duty; justify alternatives and sensitivity if no physical relationship is established. Fare/ticket revenue is not a physical allocation driver. | ghg-product-2011 |
| accompanying_bundle | programme_delivery | Disclose whether vehicles, luggage, animals, cabin or other inclusions are part of the actual declared sightseeing programme bundle or separately sold outputs. Do not count accompanying objects or their occupants twice; measure actual persons including vehicle occupants once. No universal car-to-person, weight, deck-area or fare equivalence is prescribed. Separate freight cannot disappear as free accompaniment. Every independently sold cargo,vehicle-deck or other product requires its own actual atomic output row with native quantity and all section8 expansion fields; do not force it into the participant-programme Count reference. |  |
| segment_person_closure | programme_delivery;vessel_operation | Use actual programme completion together with onboard segment populations,distances and resource use. Stops,legs,reboarding and transfers do not create repeated completion of the same programme. Attribute jointly used physical segments across actual programme cohorts and other services; do not divide an already per-person provider result again by occupancy. |  |
| native_supply_life | vessel_lifecycle;port_support | For each actual delivered asset/cohort, use native manufacture quantity times attributable same-asset compatible duty / supported total all-user useful duty, then /N. Duty may be justified hours, voyages or other compatible physical use; it is allocation, not a new flow identity. Support all-user denominator, second-hand/refit histories and prospective uncertainty. Period fuel/use emissions are not divided by lifetime duty again. |  |
| no_mixed_denominator | all_processes | Passenger Count, person-distance, vehicle count, occupied area-time and cargo tonne-distance are distinct measures and cannot be summed. Supported engineering/resource models may relate outputs only with explicit dimensions, observations and sensitivity. N=0 yields no finite reference intensity; retain and resolve the causal duty pool, not zero its numerator. |  |
| recovery_and_export | all_processes | Use evidenced waste/product status, receiver and allocation for recovered material/energy. Internal battery discharge, regenerative energy, recirculated water and other transfers are not extra purchased inputs or avoided-product credits. Genuine external export requires a separate native gate, actual quantity and disclosed allocation without netting incompatible imports. |  |
| programme_not_leg | programme_delivery;all_processes | Normalize attributed whole-programme burden by actual completed compatible participant-programmes N once,not each boarding,leg,pass sale,landmark or sighting. Separate incompatible itinerary/quality classes or provide a supported transparent mix; no universal completion/usage distribution. Guide/vessel sessions shared among persons are allocated with actual all-user resource/duty evidence,not purchased once for every participant. |  |
| performance_retry_pool | programme_delivery;all_processes | Declare whether completion supplies an agreed viewing opportunity or fulfilled guaranteed condition. Allocate actual interrupted/unsuccessful/retry/compensatory programme duties to the causally related cohort without erasing them. When attempts jointly satisfy one service obligation,count that completed obligation once; when a genuinely separate completed programme is delivered,record its own compatible function and attribution. Free/replacement tickets do not determine physical zero or an extra fulfilled unit. N=0 remains no finite reference intensity. |  |
| all_function_lifecycle | all_processes | Subdivide actual ordinary transport,sightseeing,events/charters,food/admission/cargo and private/other vessel uses; justify remaining shared hull/propulsion,viewing/guide/shore/equipment and lifecycle shares. Sightseeing slow travel and viewing time are actual duties,not assumed average transport speed. Historical/refitted vessels still require manufacture/restoration/refit/maintenance/retirement ownership and supported all-user life; no zero from age or tourism label. | circleline-fleet |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The following completion,attribution,closure and calculation rules are explicit PCR-designed methodology; sources support only their section11 classification or physical context. No claim is made that IMO,ISO,manufacturers or BTS prescribe these person-count or lifetime formulas. Missing generic ranges do not waive actual collection; incomplete obligations block completed package use.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_programme | programme_delivery | actual completed fixed/flexible participant programmes and closed boat/provider ledger | actual_record | programme_id;contract_function;fixed_or_flexible;selected_itinerary_rule;quality_class;viewing_opportunity_or_guarantee;actual_performance;participant_id;booking_pass_id;actual_boats_legs_calls_transfers;actual_boardings_reboardings;actual_duration_distance;included_guide_audio_amenities;completion;attempt_retry_obligation;separate_outputs;period;provider_cells | Collect actual contracts/programmes and participant fulfilment records,not just sales/boardings. Declare reproducible fixed/flexible grouping and actual itinerary/performance quality; link every boat/leg/guide/amenity and its owner. Preserve unsuccessful/interrupted/retry and separate completed obligations; observe pass use without assumed trips or wildlife success. Count participant-programme completion once across internal legs/transfers. Aggregation algorithm: N=sum actual completed compatible participant-programme obligations in the declared cohort. Multiple attempts fulfilling one obligation contribute all duties but one completion; distinct delivered programmes retain their own compatible attribution. Require N>0; no ticket/pass/boarding/leg/sighting substitution. | Item(s);kg;tonne-km;km;hour | actual event and period closure | same service period and evidenced life interfaces | actual agreed water sightseeing programme and all associated physical/provider/attempt duties | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_operation | vessel_operation | actual energy,water and consumable supplies and all duties | actual_record | vessel;architecture;engine_motor;lift_thrust_foil_control;mode_periods;tow_rope_shore_drive_owners;fuel_grade;blend;carbon_origins;opening_stock;receipts;closing_stock;burned;leaked;recovered;shore_gate_ac_dc;gross_import;conversion_losses;battery_soc;water_stocks;other_supply;provider_cells;all_user_share;programme_leg_links;viewing_loiter_photo_wildlife_approach;failed_retry_duty;other_fleet_functions | Obtain bunker/meter/tank/duty records and actual measured configuration. Reconcile voyage,hotel,empty,failed,charging and architecture-specific lift/transition/shore approach duties. Identify each actual fuel,water,chemical and supplied energy gate; distinguish supply,combustion,loss,recovery and stock. A whole blend with composition ledger OR replacement component supplies requires mass and provider closure, never both. Reconcile AC/DC charge boundaries and storage/charger losses; internal battery/discharge/regen is no new external supply. Record actual sightseeing detours/slow/loiter/approach and programme leg/attempt links; ordinary transport averages are not default sightseeing activity. Actual different propulsion/boiler/shore or nonmotorised configurations require their real input/duty interfaces and evidence; do not force marine distillate or assume all absent fuel rows mean zero lifecycle. Aggregation algorithm: For each actual native period quantity Q, attribute compatible duty/all-user share a to the cohort and compute sum(Q*a)/N once. Fuel activity is reconciled burned mass, not unreconciled purchase; external energy gate chosen exclusively. | kg;kWh;m3;hour | actual event and period closure | same service period and evidenced life interfaces | owned/uncovered onboard supply and actual all-user duties | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_air | vessel_operation | actual separately identified airborne species | actual_record | vessel;fuel;carbon_origin;engine;load;aftertreatment;duty;burned_activity;monitoring_or_model;factor_basis;source_context;species_mass;air_subcompartment;refrigerant_charge;topup;recovery;stocks;provider_cells;uncertainty | Collect actual species monitoring or independently supported fuel/engine/load/mode-compatible models, including actual lift/propulsion/hotel generators. Separate chemical/carbon/nitrogen bases and receiving compartment. Fuel-LCA GHG-only scope cannot remove other actual species. Determine each refrigerant actual charge/recovery balance; separately expand actual NO/NO2,SO2,CO,NMVOC components,particle sizes,biogenic CH4 and other releases as required,not one NOx/SOx collector identity. Aggregation algorithm: Assign actual molecule/species mass to the cohort using the matching duty share; /N once. Model q=sum compatible burned_activity*evidenced_species_factor, preserving actual factor units/conversion and uncertainty; no generic factor supplied. | kg | actual event and period closure | same service period and evidenced life interfaces | owned/uncovered actual airborne release at actual subcompartment | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_residues | onboard_residues | actual separately identified wastes and water/material fates | actual_record | vessel;stream_id;origin;composition;moisture;phase;mass_volume;density_basis;generated;stocks;onboard_treatment;recovery;handover;receiver;transport_treatment_coverage;direct_species_release;receiving_waterbody_subcompartment;ballast;coating;skirt_or_foil_residues;uncertainty | Use actual tank,maintenance,water,chemical and reception records. Keep bilge,blackwater,graywater,combined sewage,scrubber washwater/sludge,ballast intake/discharge/sediment,food/other garbage,coating/leachate and skirt/foil residues separate by actual composition/gate. Close input/generated-stock-treatment-recovery-handover-release fates. Expand direct water/soil/air species with actual recipient,not waste mass as elementary substance. Actual ballast environmental water intake/discharge is separate from tap-water product; do not invent universal use. Aggregation algorithm: For each actual separate wet/dry/native stream Q and supported service share a, compute sum(Q*a)/N; preserve moisture/density conversion proof. Treatment results replace exactly their included treatment/emission cells,not waste generation or unrelated streams. | kg;m3 | actual event and period closure | same service period and evidenced life interfaces | actual onboard residue generation,holding,treatment and external recipients | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_port | port_support | actual terminal/shore/organizer supplies,assets and fates | actual_record | port;terminal;boarding;shore_approach;charger_buffer;meter;provider;voltage;upstream_downstream_gate;supplies;wastes;releases;assets;life;all_users;attributable_duty;coverage_cells;remote_organizer | Measure or support actual attributable terminal/boarding/control/booking/mooring/charging/shoreapproach services,including shore energy losses not already captured. Inventory each actual input,waste,release and quay/ramp/terminal/charger/storage asset and its maintenance/end-of-life; no omission because owned by a port rather than ferry operator. Use a complete provider result OR its uncovered physical cells with compatible native gate. Aggregation algorithm: Attribute actual native period flows by measured or justified all-user resource/duty shares,then /N; asset manufacture uses same-asset lifetime share before /N. Vessel_shore_ac/DC chain and port purchases must close without double allocation. | kg;kWh;m3;Item(s);hour | actual event and period closure | same service period and evidenced life interfaces | actual uncovered port/shore/organization responsibilities | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_vessel_life | vessel_lifecycle | actual native vessel/part manufacture and complete lifecycle duties | actual_record | vessel_cohort;architecture;delivery_gate;native_quantity;materials;original_parts;battery;foil_fan_skirt;covered_stages;upgrades;replacements;drydock;useful_life;all_user_lifetime_duty;attributable_compatible_duty;retirement;recycling;uncertainty;actual_excursion_configuration;viewing_equipment;historical_conversion_restoration;all_tour_transport_event_functions | Read actual whole-craft manufacture provider boundary and native unit. Reconcile hull/engine/motor/original battery/foil/control/fan/skirt inclusion with each actual replacement or repair. Collect missing upstream manufacture,delivery,maintenance,drydock and retirement/recycling via individually defined physical inputs or compatible completed provider results. Support actual useful-life/all-function duty histories and projections; a supplier manufacture result is not full-life service. Verify actual viewing-deck/window/climate/guide equipment and original coverage; restoration/refit/history are not free. Identify each other actual craft/configuration rather than relabelling a ferry/service UUID. Keep actual ordinary transport/tour/event/charter/all-user asset duty denominators. Aggregation algorithm: For each supply unit j, q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N with supported positive compatible Dtotal; separate each missing stage/part and any provider-included use-phase replacement. No repeated lifetime division of period operational quantities. | Item(s);kg;hour;voyage | actual event and period closure | same service period and evidenced life interfaces | same actual craft/part/cohort all-user life and uncovered stages | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_support | programme_support | actual guide/audio/content,printed material,owned support energy/equipment and fates | actual_record | programme;actual_live_or_recorded;guide_owner;employee_activity;external_completed_sessions;language_quality_duration;provider_coverage;PA_device_content;required_user_device_network;native_materials_map;stock_reuse_distribution;meter_owner;asset_supply_lifetime;actual_food_amenities;other_functions;waste_receiver_fates;uncertainty | Record actual included/performed guide/audio/amenity duties and supply gates. External completed session/result is an atomic purchased function only where real handover exists; owned employee work is internal activity with actual support/travel/training/resources,not purchased wage or food-as-fuel by default. Verify content/PA/device/network scopes and lifetime shares where actually required; ordinary personal subsistence exclusion is a disclosed service-boundary choice with comparability sensitivity. Printed completed supply OR replacing paper/ink/printing coverage is exclusive. Separate vessel/port/support meters and supplier-included cells; close stocks/reuse,taken-away maps and all waste/direct fates. Aggregation algorithm: Assign each actual native period supply/completed provider session/resource using supported all-function/cohort shares; sum attributed quantities and /N once. Share guide sessions/assets across actual supported users; native manufacture quantities use same-asset useful-life duty share before /N. No assumed one map/phone/guide-session/meal per participant. | Item(s);kg;kWh;hour | actual event and period closure | same service period and evidenced life interfaces | actual uncaptured programme/guide/material/device/amenity support and fates | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | completed_sightseeing_programme | Define compatible programme class G and fixed/flexible completion rule before aggregation. N_G=sum actual participant obligations completed under that rule. For one obligation satisfied by multiple attempts,include all causal duties once and count final completion once; separately delivered compatible programmes remain distinct. Own legs,transfers/reboarding,pass validity and sightings do not create N. Missing programme grouping/quality/actual completion is incomplete; N_G>0 required. Secondary distance/time/leg counts remain separately measured activity,not relabelled programme output. | actual programme definition,quality,participants,attempts and leg/provider ledger | N_G Item(s);separate measured distance/time/legs |  |
| native_flow_normalization | all_processes | q_r=sum actual compatible native Q_r*a_r /N once,where a is justified same-scope all-user attribution. Q already expressed per completed person is scaled only to actual demanded person count,not divided by occupancy again. Keep own stage/provider cells exclusive. Missing a,Q or identity is incomplete,not zero. | native Q;actual allocation a;N | q_r per declared reference flow |  |
| fuel_blend_ownership | marine_distillate | Per actual fuel: opening_stock+receipts+transfers_in=closing_stock+burned+noncombustion_use+leakage+recoverable_outflow+transfers_out,with measured compatible states. Count internal transfers once. Supply quantity follows the defined upstream demand/stock boundary,not automatic purchased=burned. Represent one whole blend plus component/carbon ledger OR actual component supplies replacing corresponding whole-blend mass and upstream cells with native/provider closure; never duplicate contained biofuel. Reconcile fossil/biogenic carbon in supply,combustion,stocks and fates with actual composition; energy conversion uses actual supported density/heating basis. | bunker receipts;stocks;composition;burned;fates;provider cells | separate actual supply,burned,fates and carbon |  |
| external_energy_gate | vessel_shore_ac;vessel_shore_dc;port_ac | Choose actual external AC or DC supply gate per chain and reconcile gross imports,conversion/storage/cable losses,stored energy changes,owned loads and genuine external exports. Upstream AC+owned charger makes downstream DC an internal transfer; completed external DC supply replaces matching upstream AC coverage. Do not duplicate imports,net incompatible export,add motor output/battery discharge/regen as purchased supply,or infer external DC from an internal DC bus. | external meter;AC_DC gates;losses;storage;export;coverage | exclusive native energy demand and uncovered losses |  |
| asset_share | sightseeing_vessel_manufacture;port_support;programme_support | q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N,matching actual delivered asset/cohort and compatible positive supported lifetime duty. Include other users/functions and all attributable empty/support duties. Complete maintenance,foil/control/fan/skirt/battery replacement,drydock,delivery and retirement missing from manufacture separately once; whole-craft original components are not purchased again. Provider included operating cells replace corresponding foreground cells. | Qnative_j;Dcohort_j;Dtotal_allusers_j;N;covered stages | native manufacture share plus separate missing stages |  |
| species_and_fate_closure | vessel_operation;onboard_residues | Keep each actual substance,mixture,state,carbon/nitrogen basis,medium and known subcompartment. Reconcile material/water generation and stocks with use,onboard treatment,recovery,waste handover and environmental release. kg N-N2O differs from kg N2O; kg C differs from CO2/CH4. Apply only evidenced molecule/element conversions. Fuel/sanitary water purchases are not emissions; no raw waste-mixture mass as a pure elementary species. Recovery and treatment outputs include their actual new identities and provider boundaries. | actual species;chemical basis;water/material stocks;recovery;receiver;provider | separate actual substance/stream/fate quantities |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_programme_completion | completed_sightseeing_programme | MANDATORY declare actual sightseeing fulfilment versus ordinary scenic travel,cruise,availability/admission or booking-only product. Fix actual itinerary/quality/completion grouping for fixed/flexible programmes before normalization; observe actual persons and pass use,no inferred trip count/occupancy or guaranteed wildlife. Trace every programme to all actual legs/boats/guide/amenity and repeated attempt duties. Actual included food/drink/maps/guide are complete; separately sold outputs require their own atomic product-output rows,native quantities and all dq_expand_operation fields with a valid same-parent protocol. Incompatible programme qualities require subdivision or a supported disclosed mix; unknown completion/grouping blocks finished use. | cp_programme;actual programme/contract,usage/participant,quality and attempt ledger |
| dq_provider | all_processes | Every actual required stage must have one owner and covered/uncovered status with evidence. A completed supplier result needs its exact product/native quantity,boundary,quality,allocation and upstream/direct/capital/waste coverage; enter one specific service row only after identification. Otherwise mandatory physical expansion remains. Neither a generic all-legs/all-port-services card nor absent external supplier data closes the boundary. | row-linked provider x actual vessel/voyage/port/stage/period matrix |
| dq_expand_operation | vessel_operation | MANDATORY for every actual unrepresented fuel/grade/blend component replacing whole blend,heat,cooling,lubricant,refrigerant make-up,water source,food/catering/crew operational provision,chemical/material and direct substance release: add one actual atomic row per identity/state/gate. Include actual NO/NO2,SO2,CO,NMVOC components,particle sizes,biogenic CH4 and other relevant species; no default factor or zero for an absent card. Each added row must carry unique row_id,existing process_id,direction,flow_type,specific physical/substance identity,verified UUID or honest unresolved status,native property/unit,actual quantity/basis,valid same-parent CP,source/provider scope,actual receiver/medium/known subcompartment and uncertainty. Unknown occurrence requires investigation; absence requires evidence. | cp_operation;cp_air;actual meter,chemical and duty records |
| dq_expand_fates | onboard_residues | MANDATORY actual row-addressable expansion using all fields of dq_expand_operation for bilge/black/gray/combined sewage,scrubber washwater/sludge,ballast intake/discharge/sediment,food/other garbage,cleaning/coating/antifoulant substances and leaching,skirt/foil wear/cleaning residues and every other occurring stream. Actual salt/freshwater/soil/air and subcompartment cannot be selected from convenience UUID. Treatment/transport,inputs,sludges and direct species releases remain separate with one coverage owner; no assumption every vessel has ballast/scrubber or that no listed handover means no discharge. Legal discharge limits are not concentrations or permission inferred for this inventory. | cp_residues;reception,tank,treatment and release records |
| dq_architecture | vessel_operation;vessel_lifecycle;port_support | MANDATORY for each actual architecture: displacement hull/drive; hydrofoil transition/foilborne energy,foil controls/actuators/materials/repairs; hovercraft lift-fan/thrust,skirt inflation/idle,shore/beach phases and actual fan/skirt replacements/wear fates. Add each actual missing input/part/release with dq_expand_operation fields and corresponding same-parent CP; no conventional-vessel factor copied to a different architecture. Actual towed/cable service must add each towing provider or owned physical duty,rope/cable/guide and wear/replacement,shore mechanism/native external energy and covered/uncovered owner using the same atomic fields; no assumed onboard propulsion or simultaneous completed-tow/owned-physical double count. Other chemical fuel or geometry requires actual completed route evidence and review before use; lack of such data blocks that application rather than excluding the sightseeing product or redefining the reference. | configuration,energy mode and component maintenance records |
| dq_expand_capital_port | vessel_lifecycle;port_support | MANDATORY actual expansion with dq_expand_operation fields for each missing ship/shore asset,part manufacture,battery,foil/control,fan/skirt,charger/buffer,quay/terminal/ramp,delivery,maintenance,drydock and end-of-life. One actual gate/native quantity per row,not a collection of asset services. Support same-asset all-user duty,original versus replacement coverage and projections; missing useful life or provider stage blocks completion,not omission. Actual port/organization input/waste/release expansion is equally mandatory. | cp_vessel_life;cp_port;delivery,life,maintenance,retirement evidence |
| dq_allocation | all_processes | Reconcile actual passengers,accompanying bundle,separately sold vehicles/cargo,other ship/port users and service supports. Use measured subdivision first; justify any compatible physical or alternative relationship and all-user closure. Never sum Count and tonne-km or prescribe car/person equivalence; fare and capacity are not observed resource consumption. Carry uncertainty and boundary comparability,including ordinary off-duty crew subsistence exclusion. | physical resource/engineering/area-time/duty evidence and sensitivity |
| dq_native_source | all_processes | Confirm each bound identity native state/gate/type/property/unit/official name and actual applicability. Generic air-unspecified bindings require a documented unspecified-air scope; known subcompartment requires verified replacement. Mass/volume conversion requires actual compatible density or attached native relation. ISO public abstract supplies no grade values; IMO fuel GHG-only method supplies no full vessel/capital/refrigerant/other-emission completeness. Manufacturer cases supply no universal efficiency,capacity or life; BTS U.S. census scope is not a global service definition. Missing UUID or generic range is disclosed,not fabricated; actual required quantity remains mandatory. | direct flow/property/unitgroup proof and actual source applicability |
| dq_programme_support | programme_support;programme_delivery;vessel_operation;port_support;vessel_lifecycle | MANDATORY actual row-addressable expansion using every dq_expand_operation field for unrepresented live/recorded guide/content/PA,required device/network,printing/paper/ink,food/drink/amenities,shore visits,travel/training,actual sightseeing craft/restoration/refit/equipment,all wastes and direct releases. Each real completed external service needs one specific function/native quantity/provider gate and exact coverage; internal physical legs/employee work are not extra purchased functions. Completed supplier result OR replacing owned physical cells,never both. Actual user-stage/kept maps/device/equipment life and fates cannot be erased because outside operator premises. Acoustic/physical disturbances or wildlife interventions,where actual and relevant,retain their physical evidence/native unit/assessment limits; no fabricated pollutant mass,wildlife-sighting output or unsupported LCIA factor. Unknown occurrence/scope/quantity remains incomplete,not zero. | cp_programme;cp_support;cp_operation;cp_port;cp_vessel_life;actual owner and native supply/fate records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | completed_sightseeing_programme | Require actual compatible completed participant-programme,reference1Item(s),fixed/flexible grouping,quality and all qualifiers with positiveN. Reject ticket/pass/party/boarding/leg/voyage/sighting/pkm substitution; preserve failed and compensatory duty pools. |  |
| validate_coverage | all_processes | Require one stage owner and full provider/foreground coverage,including actual port,hotel,architecture,ship/shore lifecycle and treatment. Included supplier cells replace exact owned cells; missing actual supply,fate,life or identity blocks completed downstream use. |  |
| validate_balances | all_processes | Reject duplicate whole-blend/component supply,AC/DC/internal-energy double counts,unreconciled stock/burned mass,kgN/kgC relabelling,mixed wastewater identities or waste-mixture mass as elementary emission. Require actual receiving medium/subcompartment and material/water/fate closure. |  |
| validate_allocation | all_processes | Reject unsupported ratios,capacity-as-occupancy,crew-as-passenger,accompanying-object double count and Count+tonne-km denominators. Verify actual all-user/subdivision evidence and compatible same-asset lifetime shares,without repeated period-quantity lifetime division. |  |
| validate_expansion | all_processes | Each actual unrepresented physical input,waste,emission,component,service or stage must be expanded under section8 with unique native identity/quantity/CP/source/receiver. Unknown is not zero. Every protocol process_id is one real process and every row references a same-parent protocol. |  |
| validate_evidence_languages | all_processes | Require EN/ZH/projection substantive equivalence,identity support and source-limited claims. Candidate checker pass does not resolve unknown UUIDs/quantities or establish a published complete inventory. No invented marine factor,occupancy,range,life,discharge or zero-emission claim. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only after all mandatory identity,quantity,coverage and fate obligations are completed and reviewed |
| allowed_use | Use for actual declared sightseeing programme/grouping/quality,participants,itinerary/waterbody/boats,inclusions,period and evidenced complete lifecycle |
| excluded_use | Ordinary scenic travel or passes/boardings as programmes,default wildlife guarantee or generic pkm,omitted included amenities,operating GHG-only as full lifecycle |
| required_metadata | All programme qualifiers;actual completion/grouping/quality/attempts;internal leg/boat/provider/guide/amenities;native gates;lifecycle;species/subcompartment and actual allocation |
| required_quality_disclosure | Identity/quantity/quality/completion grouping gaps,attempt/pass use,inclusions/provider gaps,model applicability/life projections,actual subcompartment and human boundary/allocation sensitivity |
| update_trigger | Changes in programme function/quality/fixed-flexible grouping,inclusions,itinerary/boat/energy,guide/devices,provider coverage,lifecycle/fates or allocation |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,PDF pp360–361,64133 and cruise/other-water exclusions. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Sightseeing passenger water transport function and separation from ordinary other-water/cruise categories; no universal guide,loop,duration,quantity or LCA formula. |
| imo-fuel-lca-2024 | official_guidance | IMO Resolution MEPC.391(81),22March2024,2024 marine-fuel LCA Guidelines,annex p3 sections1–2. https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MEPCDocuments/MEPC.391(81).pdf | Fuel-chain and onboard propulsion/power interfaces,including shore electricity; CO2/CH4/N2O only. Explicitly excludes refrigerants and other listed species; not full ship inventory. No default factor adopted. |
| imo-pollution | official_guidance | IMO Pollution Prevention,public page accessed21October2026,opening paragraphs. https://www.imo.org/en/ourwork/environment/pages/pollution-prevention.aspx | Qualitative separate oil,sewage,garbage,air,ballast,antifouling and reception pathways; not factors,actual concentrations,universal occurrence or legal discharge permission. |
| iso8217-abstract | standard | ISO8217:2024,edition7 May2024,public abstract only. https://www.iso.org/standard/80579.html | Marine fuel specification families and before-onboard-handling gate; full normative text not read. No numeric grade,composition,density,sulphur or compliance conclusion. |
| damen-ferry-cases | literature | Damen Road Ferries and Ferry2306 Electric,primary product pages accessed21October2026. https://www.damen.com/vessels/ferries/roro-ferries ; https://www.damen.com/vessels/ferries/city-ferries/ferry-2306-electric | Actual case interfaces: passenger/vehicle ferries,shorecharging/buffer,diesel backup and internalDC. Product cases only; marketing emission savings,capacities and charging performance not generic parameters. |
| hydrofoil-case | literature | Candela P-12 Shuttle,primary technical product page accessed21October2026. https://candela.com/pro-series/p-12-shuttle/ | Actual electric hydrofoil controls,foil structure/transition and external DC charging architecture; no advertised savings,range,capacity or life adopted as a generic factor. |
| hovercraft-architecture | literature | Griffon Hoverwork/Griffon Marine,How Hovercraft Work,public primary technical explanation accessed21October2026. https://www.griffonhoverwork.com/products/hovercraft/how-hovercraft-work/ | Actual lift-fan,flexible-skirt and thrust-propeller functions over water/shore surfaces; not passenger-operation emission,wear or fuel factors. |
| bts-ncfo-2024 | official_guidance | BTS2024 National Census of Ferry Operators printable questionnaire,PDF pp2 and11. https://www.bts.gov/sites/bts.dot.gov/files/2025-02/2024%20NCFO%20Printable%20Questionnaire.pdf | U.S.-scope census context and distinct passenger/vehicle capacities excluding crew; no adoption of capacity or assumed car length as actual occupancy,reference denominator or worldwide service definition. |
| ghg-product-2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011,chapters7 and9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Allocation hierarchy and disclosure context; required ship/shore capital and specific Count/duty formulas are explicit PCR choices,not mandates attributed to this GHG standard. |
| circleline-programme | literature | Circle Line Best of NYC,primary operator programme page accessed21October2026. https://www.circleline.com/sightseeing-cruises/best-of-nyc | Case-specific viewing itinerary,live/audio guide and onboard support,landmark passing without attraction admission; no duration,landmark count,capacity,operating or completion factor adopted. Website offer is not actual performed inventory. |
| citycruises-programme | literature | City Cruises London Sightseeing Cruises,primary operator page accessed21October2026. https://www.cityexperiences.com/london/city-cruises/sightseeing-cruises/ | Case-specific A-B/return sightseeing,commentary,time-pass and possible boat-transfer interfaces,optional concessions/attractions; no default trips,pass completion,occupancy or universal route. |
| captaincook-programme | literature | Captain Cook Sydney Explore Sightseeing,primary operator public programme page accessed21October2026. https://www.captaincook.com.au/explore-sydney-sightseeing/ | Actual offered classic/premium/HOHO/wildlife programme distinctions,commentary/maps,included versus purchased amenities and conditional re-cruise context. No universal sighting,serving,food,price,trip or quality factor. |
| circleline-fleet | literature | Circle Line Our Boats,primary operator fleet page accessed21October2026. https://www.circleline.com/about/our-boats | Case-specific viewing decks/windows,climate facilities,multiple tour/event uses and historic conversions; no current fleet number,age,propulsion,manufacturing mass,capacity or lifetime default. |
