---
pcr_id: pcr.integrated-urban-multimodal-passenger-journey-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Integrated scheduled urban and suburban mixed-mode passenger journey service

## 1. Scope and Applicability

This PCR covers one actual accountable completed mixed-mode passenger journey on predetermined urban/suburban routes and schedules. It covers actual rail,land and water combinations rather than only heavy rail plus bus. Each delivered journey must use more than one evidenced distinct transport mode; it need not contain all three broad families or a default one leg of each. Declare actual mode taxonomy,membership,OD,route/schedule,transfer/connection responsibility,quality and completion before aggregation. A network offering multiple modes or an unused transfer entitlement alone is not evidence a particular completed journey is mixed-mode.

One actual passenger reaching the declared one-way integrated destination counts once. Boardings,transfers,temporary reboarding,boat/vehicle changes and constituent legs are physical activities,not extra final outputs or co-products. Keep actual leg multiplicities,passenger/segment membership,distances,access/egress interface,in-boundary waiting and actual disruptions; failed/empty/standby/recovery duties remain causally attributed. N=0 has no finite intensity. A return is another actual declared journey,not an assumed included unit.

Actual rail branches,scheduled land branches including bus,trolleybus/tram and other real land modes,and actual scheduled water legs retain their own route-specific technology/native interfaces. Include owned or uncaptured vessels,rail/road vehicles,stations/piers/ramps/guideway/roads,transfer/IT support and full manufacture/use/maintenance/replacements/retirement. Marine fuel is not road diesel by relabelling. Observe actual waterbody/sea-state,wave/wake,manoeuvre/hotel/idle duties,boat architecture,fuel/shore power and bilge/sewage/direct fates; absence of a particular input requires evidence,not a universal factor.

Exclude single-mode fulfilment,unrelated ticket bundles,booking/broker/price aggregation without physical end-to-end responsibility,non-scheduled charter/sightseeing products and nonurban/interurban products as such. A common fare,transfer time limit or route-planner suggestion is not actual completed integrated service. No universal transfer window,occupancy,trip-to-km conversion,emission/energy factor,asset life or quantity range is supplied. Missing actual identities,quantities,coverage or fates block completed use,not semantic inclusion of a real qualifying route.

The official mode examples are not an exhaustive list. Do not exclude another actually qualifying urban/suburban predetermined mixed-mode component merely by its mode label. Determine its actual delivered function and membership; complete its own native provider demand,technology,operations,terminal/support,full asset life and species/phase/receiving-altitude responsibilities before use. An independent ordinary air/nonurban service does not automatically become this integrated product,and no technical example is asserted to belong to this code. Access/transfer walking or waiting alone does not automatically supply a second delivered transport mode.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.integrated-urban-multimodal-passenger-journey-service |
| classification_refs | CPC3.0 64113;exact |
| covered_products | Actual accountable scheduled urban/suburban mixed-mode journeys over predetermined routes/schedules,including real rail/land/water combinations with more than one actual mode |
| excluded_products | Single-mode or booking/broker/ticket-only,unrelated bundles,non-scheduled charter,sightseeing,nonurban/interurban products |
| representative_product | Completed integrated scheduled urban and suburban mixed-mode passenger journey |
| production_route | Actual journey linkage and provider-cell closure;owned/purchased rail/land/water legs;transfer/support/assets/residues;one final linked completion |
| market_state | Completed integrated service with fulfilment records; unused tickets are not completed output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed integrated scheduled urban and suburban mixed-mode passenger journey |
| How much | 1 completed linked person-journey; 1 Item(s) |
| How well | Completed against declared route/schedule/transfer and service quality; retain actual deviations and disruptions |
| How long or cycle | Declared first service commencement to final destination completion, including in-boundary transfers/waiting; matched reporting period |
| reference_flow_link | completed_integrated_journey |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed integrated scheduled urban and suburban mixed-mode passenger journey |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual accountable network/operator; urban/suburban extent; actual OD; predetermined routes/schedules; actual mode taxonomy and more-than-one-mode membership; all actual legs/providers/native quantities; one-way completion and reference quality; actual passenger and segment membership; transfer/connection/access/egress interfaces and in-boundary waiting; period and failures/empty/standby duties; owned/purchased phase/provider coverage; land/rail/boat architecture and power/fuel state; actual waterbody/sea-state/wave/wake responsibility; stations/piers/ramps/road/guideway/charging/transfer full asset life; actual material/species/medium/known subcompartment/fates; native units and all-user allocation uncertainty; actual eligibility and native interfaces of any other qualifying mode;examples are nonexhaustive; walking/transfer/waiting is not automatically a second delivered mode |

Required qualifiers must be declared in package metadata,process notes,reference-flow comments or equivalent;missing qualifiers make the definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | completed_integrated_journey | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N counts actual completed linked person-journeys; tickets, boardings, legs, capacity and vehicle runs are different quantities. |
| native_count | purchased_bus_leg;purchased_rail_leg;battery_bus_manufacture | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Preserve the individual service or vehicle native unit. Incompatible supplier bases need a separately appropriate exchange and verified equivalence, never inheritance of this card. |
| mass_basis | road_diesel;road_fossil_co2;paper_ticket_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve actual product/species and native composition basis. Litres become kg only with actual compatible density/state; no default is supplied. |
| electrical_basis | road_electricity;rail_electricity;rail_ac_export;support_electricity | Energy | kWh | Use 1 kWh = 3.6 MJ only for verified compatible electrical energy; its ILCD reference-property label does not permit a fuel heating-value factor. |
| water_basis | support_tap_water | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use compatible supplied-water volume only; supplied volume does not directly establish wastewater, evaporation or environmental abstraction. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual journey/operation/provider/asset records and purchased results with explicit upstream coverage |
| starting_condition_role | Coverage interface for supplied and physical operation results, not permission to ignore upstream burdens |
| product_classification_scope | Full actual64113 scheduled urban/suburban mixed-mode function with rail,land and water combinations;at least two actual distinct modes,not allthree mandatory;one code-specific integrated output |
| recursive_input_rule | Use a same-category completed subchain once and expand only uncovered cells; no new final output or duplicated supplied result |
| upstream_dataset_requirement | Each energy/material/provider/lifecycle component requires native unit, boundary, geography, technology, period and quality evidence; gaps must be completed |
| disclosure | Disclose owned/purchased matrix, full lifecycle coverage, period/denominator, allocation/exclusion rationale, uncertainty and gaps; an operational GHG result is not a complete multi-impact lifecycle result |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | journey_integration | This PCR covers one actual accountable completed mixed-mode passenger journey on predetermined urban/suburban routes and schedules. It covers actual rail,land and water combinations rather than only heavy rail plus bus. Each delivered journey must use more than one evidenced distinct transport mode; it need not contain all three broad families or a default one leg of each. Declare actual mode taxonomy,membership,OD,route/schedule,transfer/connection responsibility,quality and completion before aggregation. A network offering multiple modes or an unused transfer entitlement alone is not evidence a particular completed journey is mixed-mode. |  |
| coverage_cells | all_processes | Before quantities, assign each provider/asset/activity/burden/period cell either to a compatible linked result or to explicit foreground expansion. Mixed ownership may coexist across cells; no cell may be duplicated or left ownerless. |  |
| provider_completeness | journey_integration | Purchased legs must disclose reference unit, occupancy attribution, energy upstream and operation, maintenance, terminals, capital and disposal coverage. Collect and model each missing part before a complete-chain claim; contract payment alone proves no physical coverage. |  |
| same_category_recursion | journey_integration | A purchased same-category integrated journey is an alternative completed subchain, not an extra output. Use its disclosed completed scope once and expand only uncovered cells; stop recursive inclusion at the documented delivery gate. |  |
| physical_activity_complete | owned_road_leg;owned_rail_leg | Retain attributable empty repositioning, standby, layover, interrupted trips, maintenance tests and required support even when passenger boardings are zero. Reporting metrics such as revenue distance may omit activity and cannot replace complete activity records. | fta-ntd-glossary |
| capital_boundary | asset_completion | This PCR requires disclosed allocated vehicle, battery, equipment, station and guideway manufacture, replacement, maintenance and end-of-life where attributable and not already covered. This is a PCR life-cycle choice; the public ISO 14083 operations scope is not evidence that capital is included or excluded from a supplied result. |  |
| native_unit_gate | journey_integration | The Count provider-input cards apply only to compatible completed person-leg results. Other native units require their own verified flow, property, unit and measured equivalence; do not put a pkm, vehicle-km, vehicle-hour or money-based UUID into a Count card. |  |
| direct_release_gate | owned_road_leg;owned_rail_leg;uncaptured_support | Record actual substance, carbon origin, native basis and receiving compartment for direct emissions. Contained wastewater and recovered material are not ambient releases; water loss is not automatically wastewater or water-vapour emission. |  |
| unknown_not_zero | all_processes | Unknown occurrence, quantity, identity, provider boundary, loss or fate blocks completion of the affected foreground package; it is neither zero nor permission to omit a needed exchange. Absence requires affirmative evidence. |  |
| capital_complete | asset_completion;water_terminal_support | This PCR explicitly requires attributable vessel and shore-asset manufacture, original/replacement equipment, maintenance, dry-dock, charging/mooring/quay/terminal assets and retirement/end-of-life. Verify actual delivery gates and coverage before lifetime allocation. A manufacture-only ship identity does not cover the other stages; no lifetime service fiction or unsupported universal life. |  |
| chemical_fates | owned_water_leg;owned_water_residues | Keep actual fuel, lubricant, refrigerant, cooling, cleaning and coating supply/stock/use/recovery/fates separate. Assess each actual bilge, black/graywater, scrubber washwater/sludge, ballast intake/discharge/sediment, garbage, antifoulant leachate and hull-cleaning residue. Actual species, receiving freshwater/seawater/soil/air and subcompartment must be identified; waste handover and direct environmental release are different exchanges. | imo-pollution |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| journey_integration | Integrated service completion and purchased legs | required | Always; purchased inputs only where actually present | reference_process | completed_integrated_journey |
| owned_road_leg | Owned land-leg physical operation | conditional | actual owned/uncovered scheduled bus,trolleybus/tram or other land-mode cells | foreground_process | completed_integrated_journey |
| owned_rail_leg | Owned rail-leg physical operation | conditional | actual owned/uncovered rail-mode cells with true traction/configuration | foreground_process | completed_integrated_journey |
| uncaptured_support | Uncaptured integration and transfer support | conditional | Actual necessary support remains outside linked results | support_process | completed_integrated_journey |
| asset_completion | Uncaptured asset lifecycle completion | conditional | Actual attributable lifecycle components remain outside linked results | support_process | completed_integrated_journey |
| owned_water_leg | Owned or uncaptured water-leg physical operation | conditional | actual waterborne responsibility cells | support_process | completed_integrated_journey |
| owned_water_residues | Owned or uncaptured shipboard residues | conditional | actual separate shipboard generation/holding/handover/directfates | support_process | completed_integrated_journey |
| water_terminal_support | Uncaptured water-terminal and shore support | conditional | actual uncaptured pier/shore/charging/transfer cells | support_process | completed_integrated_journey |

Every node shares the final integrated-journey reference;conditional modes/legs/support do not create extra final output. Use a card only for its real occurring compatible object and uncovered cell;all other actual objects need mandatory atomic expansion.

### Process: Integrated service completion and purchased legs (`journey_integration`)

#### Inputs

##### Product flows

###### Completed scheduled urban bus passenger journey (`purchased_bus_leg`)

Only a purchased, fully scoped, single-mode bus person-leg result compatible with this Count reference. Each compatible supplier/route/cohort is an independent exchange. A result per passenger-km, vehicle-km, hour or fare is not interchangeable; native-unit adoption requires its own verified exchange and measured equivalence. Do not add owned-operation or supplier-included fuel, emissions, terminals or capital for the same coverage cell.

- Selected flow: Completed scheduled urban bus passenger journey
- Flow property / unit: Count / Item(s)
- Amount rule: Sum of actually delivered compatible purchased bus person-legs assigned to the declared integrated journeys / N; cp_legs. Never set one bus leg per integrated journey by default.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_legs`
- Sources: `ghg-product-standard`

###### Completed scheduled urban heavy-rail passenger journey (`purchased_rail_leg`)

Only a purchased urban/suburban heavy-rail person-leg result with the actual route, provider and boundary. Tramway is not silently treated as this heavy-rail exchange. Split incompatible supplier, configuration or boundary records; terminal or vehicle burdens already included by the provider cannot be added again.

- Selected flow: Completed scheduled urban heavy-rail passenger journey
- Flow property / unit: Count / Item(s)
- Amount rule: Sum of actually delivered compatible purchased heavy-rail person-legs assigned to the declared integrated journeys / N; cp_legs. A boarding record alone does not prove a completed integrated journey.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_legs`
- Sources: `ghg-product-standard`

###### Completed scheduled urban tram passenger leg (`purchased_tram_leg`)

Only an actual externally handed-over completed tram person-leg result at its true provider nativeCount/service-quality gate,assigned to the declared integrated journey set. One concrete provider/route/cohort per exchange; no heterogeneous mode bundle. Verify actual upstream energy,use,terminal/transfer,vehicle/boat/infrastructure maintenance/manufacture/retirement and waste coverage. Other native units require a separately verified exchange and measured equivalence;never put pkm,vehiclekm,hour orfare into thisCountcard. Owned physical legs are internal,not another purchased result.

- Selected flow: Completed scheduled urban tram passenger leg
- Flow property / unit: Count / Item(s)
- Amount rule: Sum actual delivered compatible provider-native person-leg counts assigned to journey cohort /N;cp_legs. Keep actual multiplicity andall users;no one-leg-per-journey/mode default or second occupancy division. Covered cells replace exact physical cells;missing cells separately mandatory.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_legs`

###### Completed scheduled urban trolleybus passenger leg (`purchased_trolleybus_leg`)

Only an actual externally handed-over completed trolleybus person-leg result at its true provider nativeCount/service-quality gate,assigned to the declared integrated journey set. One concrete provider/route/cohort per exchange; no heterogeneous mode bundle. Verify actual upstream energy,use,terminal/transfer,vehicle/boat/infrastructure maintenance/manufacture/retirement and waste coverage. Other native units require a separately verified exchange and measured equivalence;never put pkm,vehiclekm,hour orfare into thisCountcard. Owned physical legs are internal,not another purchased result.

- Selected flow: Completed scheduled urban trolleybus passenger leg
- Flow property / unit: Count / Item(s)
- Amount rule: Sum actual delivered compatible provider-native person-leg counts assigned to journey cohort /N;cp_legs. Keep actual multiplicity andall users;no one-leg-per-journey/mode default or second occupancy division. Covered cells replace exact physical cells;missing cells separately mandatory.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_legs`
- Sources: `translink-schedules`

###### Completed scheduled urban or suburban ferry passenger leg (`purchased_ferry_leg`)

Only an actual externally handed-over completed ferry person-leg result at its true provider nativeCount/service-quality gate,assigned to the declared integrated journey set. One concrete provider/route/cohort per exchange; no heterogeneous mode bundle. Verify actual upstream energy,use,terminal/transfer,vehicle/boat/infrastructure maintenance/manufacture/retirement and waste coverage. Other native units require a separately verified exchange and measured equivalence;never put pkm,vehiclekm,hour orfare into thisCountcard. Owned physical legs are internal,not another purchased result.

- Selected flow: Completed scheduled urban or suburban ferry passenger leg
- Flow property / unit: Count / Item(s)
- Amount rule: Sum actual delivered compatible provider-native person-leg counts assigned to journey cohort /N;cp_legs. Keep actual multiplicity andall users;no one-leg-per-journey/mode default or second occupancy division. Covered cells replace exact physical cells;missing cells separately mandatory.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_legs`
- Sources: `translink-schedules`, `translink-seabus`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed integrated scheduled urban and suburban mixed-mode passenger journey (`completed_integrated_journey`)

One real passenger receiving the accountable completed scheduled urban/suburban end-to-end mixed-mode journey on its actual predetermined route/schedule. Actual rail,land and/or water legs form a declared itinerary with more than one real distinct mode; their transfer/boarding/leg records are constituents,not extra final products. Actual members,completion and coverage proved by cp_journeys.

- Selected flow: Completed integrated scheduled urban and suburban mixed-mode passenger journey
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_journeys`
- Sources: `dft-nts-2025`

##### Waste flows

##### Elementary flows

### Process: Owned land-leg physical operation (`owned_road_leg`)

#### Inputs

##### Product flows

###### Diesel fuel (`road_diesel`)

Conditional on actual compatible diesel use in owned or explicitly uncaptured bus operation. Collect mass consumed, opening/closing stocks and transfers. Purchased litres require actual compatible density/state and documented conversion before kg; no default density, heating value, fuel blend or fossil share is supplied.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Actual kg diesel consumed for the causally assigned bus operations, including attributable empty and disrupted service activity, divided by N; cp_owned_road_activity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_owned_road_activity`
- Sources: `ghg-product-standard`

###### Alternating current (`road_electricity`)

Only actual compatible AC supplied to the selected owned charging interface, including recorded charging losses inside that interface. Battery discharge is not a second purchased energy input. Keep DC, other carriers and energy already included in a supplier result separate.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Assigned gross compatible AC import in kWh / N; cp_owned_road_activity. The verified electrical-energy unit group gives 1 kWh = 3.6 MJ; this is not a fuel heating-value factor.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_owned_road_activity`
- Sources: `ghg-product-standard`

###### Direct current at land traction supply interface (`land_external_dc`)

Conditional actual externally imported DC at the documented traction/contact-wire/substation/charging supply gate for the actual mode. Verify real voltage,provider,geography and upstream rectifier/line/storage loss coverage. It is not internal rectified DC,battery discharge,regeneration or AC relabelledDC. Select actual externalAC chain ORDCchain across an exclusive native gate; complete uncovered conversion/loss/asset cells once.

- Selected flow: Direct current at land traction supply interface
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable native gross imported DC kWh at the same measured gate /N;cp_owned_road_activity. No universalrectification factor or counterflow netting; internal transfers are not extra purchases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_owned_road_activity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`road_fossil_co2`)

Only actual fossil-source CO2 reaching compatible ambient air from the owned bus coverage cell. Use a measured or traceably calculated species mass with documented fuel carbon origin, factors, controls and release gate. CO2-equivalent, total carbon and biogenic CO2 cannot be put in this row. No universal emission factor is introduced. This UUID is verified only for Emissions to air, unspecified (1.3.4). Use it only where the documented actual reporting scope justifies that unspecified subcompartment. Known urban, non-urban or another specific receiving subcompartment requires its own separately verified native identity and atomic expansion; preserve that specificity rather than binding this generic-air UUID. Unknown receiving scope blocks completion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual kg fossil CO2 released to air / N; cp_road_residues. Include only the uncovered direct release; never repeat provider emissions or an upstream fuel-production result.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_road_residues`
- Sources: `ghg-product-standard`

### Process: Owned rail-leg physical operation (`owned_rail_leg`)

#### Inputs

##### Product flows

###### Alternating current (`rail_electricity`)

Conditional on the actual compatible AC boundary for owned heavy-rail operation. Include traction, attributable empty movements and required auxiliary use in the metered scope. Separate upstream grid supply, rectification, line losses and terminal use according to actual meter/provider coverage rather than adding a generic percentage.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Assigned gross compatible AC import kWh / N; cp_owned_rail_activity. Retained braking energy reduces metered import only once; it is not simultaneously a product export or an avoided-grid credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_owned_rail_activity`
- Sources: `ghg-product-standard`

###### Direct current at rail traction supply interface (`rail_external_dc`)

Conditional actual externally imported DC at the documented traction/contact-wire/substation/charging supply gate for the actual mode. Verify real voltage,provider,geography and upstream rectifier/line/storage loss coverage. It is not internal rectified DC,battery discharge,regeneration or AC relabelledDC. Select actual externalAC chain ORDCchain across an exclusive native gate; complete uncovered conversion/loss/asset cells once.

- Selected flow: Direct current at rail traction supply interface
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable native gross imported DC kWh at the same measured gate /N;cp_owned_rail_activity. No universalrectification factor or counterflow netting; internal transfers are not extra purchases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_owned_rail_activity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Alternating current (`rail_ac_export`)

Only separately metered, technically compatible electricity actually crossing the owned rail boundary to an external recipient. Internal regeneration and a net-meter saving are not export. Record recipient and provider coverage; an export does not by itself authorize a substitution credit.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Assigned actual gross AC export kWh / N; cp_owned_rail_activity. Reconcile import, internal recovery, storage change and export before using this row.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_owned_rail_activity`
- Sources: `ghg-product-standard`

##### Waste flows

##### Elementary flows

### Process: Uncaptured integration and transfer support (`uncaptured_support`)

#### Inputs

##### Product flows

###### Alternating current (`support_electricity`)

Actual compatible AC for integration, transfer assistance, stations or administrative equipment causally serving this product and absent from provider/traction datasets. Keep scope separately metered or causally allocated. A fare-revenue share or one energy-per-ticket assumption is insufficient.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Assigned uncovered actual AC kWh / N; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `ghg-product-standard`

###### Tap water (`support_tap_water`)

Only actually supplied compatible tap water for owned cleaning or transfer facilities outside upstream coverage. It is a product input, not an elementary abstraction. Rainwater, self-abstracted water and differently treated supplies need their own actual identities; no assumed water demand is required for every network.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Assigned actual supplied m3 tap water / N; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `ghg-product-standard`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### waste paper (unspecified) (`paper_ticket_waste`)

Only actual separately collected, compatible non-hazardous paper tickets at the declared receiver gate. Verify composition and receiver acceptance: thermal-coated, magnetic, laminated or plastic tickets cannot be silently merged with this identity. Do not use paper production or a treatment activity as the waste flow.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual kg compatible discarded ticket paper / N; cp_support_residues.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_residues`
- Sources: `ghg-product-standard`

##### Elementary flows

### Process: Uncaptured asset lifecycle completion (`asset_completion`)

#### Inputs

##### Product flows

###### Complete low-floor battery-electric urban bus (`battery_bus_manufacture`)

Conditional manufacture-only provision of the actual complete vehicle configuration used by owned operation, including its originally installed battery only when the linked production result includes it. This is not a full-life asset-service result. Replacement batteries, maintenance, infrastructure and end-of-life must be separately completed and must not repeat any included burden.

- Selected flow: Complete low-floor battery-electric urban bus
- Flow property / unit: Count / Item(s)
- Amount rule: For each actual vehicle b, multiply its delivered manufacture quantity in Item(s) by attributed compatible duty / documented total compatible lifetime duty for that same vehicle, then sum and divide by N; cp_assets. A cohort uses its actual delivered count and a consistently defined cohort share. No invented mass or default lifetime.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard`

###### Complete conventional displacement passenger ferry at manufacture handover (`ferry_manufacture`)

Conditional actual self-propelled displacement ferry delivered in its evidenced complete configuration. This is manufacture-only supply, not vessel rental, a voyage, annual availability or a full-life transport service. Verify the actual hull, engine/motor, original battery and equipment included; no second manufacture input for components already contained. If a candidate provider includes use-phase burdens,it cannot be silently treated as manufacture-only: isolate verified manufacture coverage or identify its actual completed result and replace exactly the covered foreground cells.

- Selected flow: Complete conventional displacement passenger ferry at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Sum actual delivered native manufacture Item(s) times the same vessel/cohort attributable compatible duty / supported total all-user useful duty, then divide by N; cp_assets. Maintenance, replacement batteries, dry-docking and retirement missing from this supply are separately completed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

###### Complete battery-electric hydrofoil passenger ferry at manufacture handover (`hydrofoil_manufacture`)

Conditional actual complete battery-electric hydrofoil craft delivered at manufacture handover, with evidenced foil structure, controls, motor, original battery and fittings coverage. It is not the conventional displacement ferry card and not a lifetime flying/transport service. Other hydrofoil configurations need their own actual identities; replacement foil/control/battery components and retirement absent from this provider remain separately owned.

- Selected flow: Complete battery-electric hydrofoil passenger ferry at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native manufacture Item(s) times same-craft supported attributable / total all-user useful duty, then /N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `hydrofoil-case`

###### Complete passenger air-cushion hovercraft at manufacture handover (`hovercraft_manufacture`)

Conditional actual complete passenger hovercraft at manufacture handover with evidenced hull, lift fans, thrust propellers, original flexible skirt, engines/motors and fittings. This is manufacture-only craft supply, not a generic boat or full-life transport result. Keep actual original/replacement skirt and fan coverage exclusive and complete all maintenance/retirement missing from the delivered result.

- Selected flow: Complete passenger air-cushion hovercraft at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native manufacture Item(s) times same-craft supported attributable / total all-user useful duty, then /N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `hovercraft-architecture`

###### Complete self-propelled passenger water-taxi launch at manufacture handover (`water_taxi_launch_manufacture`)

Conditional actual complete self-propelled passenger water-taxi launch at manufacture handover,with actual hull,engine/motor,original battery and fittings coverage documented. It is neither a conventional ferry nor a hired-boat/crew-availability service. Other actual propulsion or hull configurations use their own concrete identities. Complete missing manufacture components,maintenance,replacements,delivery and retirement once; original equipment already in the whole launch is not purchased again.

- Selected flow: Complete self-propelled passenger water-taxi launch at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered native manufacture Item(s) times same-launch/cohort attributable compatible duty / supported total all-user useful duty,then /N; cp_assets. Include actual commercial and noncommercial supported uses,not passenger tickets or charged hours as a default lifetime.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `water-taxi-operator-case`

###### Complete cargo-passenger ship at manufacture handover (`cargo_passenger_ship_manufacture`)

Conditional actual complete ship supplying non-cruise port-to-port passenger and freight functions at manufacture handover. Verify actual cargo gear,passenger cabin/sanitary/hotel equipment,hull,drive and original battery inclusion. This is manufacture-only supply,not a cruise package,freight tonne-km or lifetime passenger service. Do not substitute the ferry or water-taxi whole-object identity; separate every missing part/stage and subsequent replacement from the covered whole ship.

- Selected flow: Complete cargo-passenger ship at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native manufacture Item(s) times the same ship/cohort attributable compatible duty / supported total all-user useful duty,then /N; cp_assets. Shared hull/propulsion and dedicated passenger/cargo equipment use actual subdivision/all-function shares,not an invented passenger-versus-tonne conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `cargo-passenger-operator-case`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Owned or uncaptured water-leg physical operation (`owned_water_leg`)

#### Inputs

##### Product flows

###### Marine distillate gas oil at bunker handover (`marine_distillate`)

Only actual documented marine distillate gas oil supplied to the vessel before onboard handling; retain grade, specification, blend, carbon origins, supplier gate and stocks. Generic road diesel identity is insufficient. Other residual oils, lubricants and chemical fuels are separate identities. Use one whole delivered blend plus composition/carbon ledger OR component supplies replacing the matching whole-blend supply and upstream coverage with mass/native/provider closure; never both.

- Selected flow: Marine distillate gas oil at bunker handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual kg bunker supply required by the stock/use/fate balance / N; cp_water_activity. Supplied, consumed, combusted, leaked, recovered and retained stocks are distinct; do not use purchased fuel as burned activity without reconciliation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_activity`
- Sources: `imo-fuel-lca-2024`, `iso8217-abstract`

###### Alternating current (`vessel_shore_ac`)

Only actual external AC imported at the compatible documented point-of-use shore connection supplying attributable onboard propulsion, battery charging or hotel load. Verify voltage, provider and upstream cable/charger/storage losses. Internal DC buses, motor output, battery discharge and regenerated energy are internal transfers, not this imported supply. Actual DC-only external supply needs a separately verified native identity; do not relabel it as AC.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed gross imported kWh at the same measured AC gate / N; cp_water_activity. Account separately for losses upstream/downstream of that gate without counting them twice.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_activity`
- Sources: `imo-fuel-lca-2024`, `damen-ferry-cases`

###### Tap water (`vessel_tap_water`)

Actual compatible supplied tap water loaded for attributable onboard sanitary, cleaning and included passenger/crew service. Environmental abstraction, desalinated water and packaged drinks are different supplies. Record onboard tank opening/closing stocks, generation, use and fates; do not equate the supply with wastewater discharge.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Attributed actual supplied m3 after stock reconciliation / N; cp_water_activity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_activity`

###### Detergent (`vessel_detergent`)

Only actual compatible supplied detergent mixture for attributable onboard cleaning, before use; verify composition/formulation and provider coverage. Disinfectant, antifoulant coating, scrubber reagent, solvent and individual chemicals are not automatically this detergent. Its actual residues and emissions require separately identified pathways.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual native kg supplied after stock closure / N; cp_water_activity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_activity`

###### Direct current at vessel charging inlet (`vessel_shore_dc`)

Conditional actual external DC delivered at the measured vessel charging inlet, distinct from an AC supply gate upstream of the charger. Verify conversion/storage/cable losses and provider scope. Represent the actual chain once: a completed DC supply including upstream AC replaces that same AC supply; owning upstream AC and charger instead makes downstream DC an internal transfer. Never count both as purchased energy. An internal DC main bus alone proves no external DC supply.

- Selected flow: Direct current at vessel charging inlet
- Flow property / unit: Energy / kWh
- Amount rule: Attributed actual gross imported kWh at verified external DC inlet / N; cp_water_activity, exclusive of upstream AC representation of the same chain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_activity`
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
- Amount rule: Attributed actual species kg from monitoring or an independently supported engine/fuel/load-compatible model / N; cp_water_releases. Use combusted activity and molecule basis; do not turn kg C or kg N into molecule mass by relabelling.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_releases`
- Sources: `imo-fuel-lca-2024`

###### carbon dioxide (biogenic) (`exhaust_biogenic_co2`)

Conditional actual named chemical species emitted to air by attributable onboard combustion; retain fossil/biogenic origin where applicable, engine/load/aftertreatment and actual receiving subcompartment. The bound identity is air unspecified and is allowed only where documented reporting scope justifies unspecified air; known urban/nonurban/specific air requires its own verified native identity or mandatory replacement row. No assumed zero or generic marine factor.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual species kg from monitoring or an independently supported engine/fuel/load-compatible model / N; cp_water_releases. Use combusted activity and molecule basis; do not turn kg C or kg N into molecule mass by relabelling.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_releases`
- Sources: `imo-fuel-lca-2024`

###### methane (fossil) (`exhaust_fossil_ch4`)

Conditional actual named chemical species emitted to air by attributable onboard combustion; retain fossil/biogenic origin where applicable, engine/load/aftertreatment and actual receiving subcompartment. The bound identity is air unspecified and is allowed only where documented reporting scope justifies unspecified air; known urban/nonurban/specific air requires its own verified native identity or mandatory replacement row. No assumed zero or generic marine factor.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual species kg from monitoring or an independently supported engine/fuel/load-compatible model / N; cp_water_releases. Use combusted activity and molecule basis; do not turn kg C or kg N into molecule mass by relabelling.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_releases`
- Sources: `imo-fuel-lca-2024`

###### nitrous oxide (`exhaust_n2o`)

Conditional actual named chemical species emitted to air by attributable onboard combustion; retain fossil/biogenic origin where applicable, engine/load/aftertreatment and actual receiving subcompartment. The bound identity is air unspecified and is allowed only where documented reporting scope justifies unspecified air; known urban/nonurban/specific air requires its own verified native identity or mandatory replacement row. No assumed zero or generic marine factor.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual species kg from monitoring or an independently supported engine/fuel/load-compatible model / N; cp_water_releases. Use combusted activity and molecule basis; do not turn kg C or kg N into molecule mass by relabelling.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_releases`
- Sources: `imo-fuel-lca-2024`

###### HFC-134a (`refrigerant_hfc134a`)

Only actual HFC-134a (CAS811-97-2) released from attributable shipboard cooling/air-conditioning. It is the emitted substance, not new refrigerant product or a mixed coolant. Bound air-unspecified identity requires documented unspecified-air scope; known subcompartment needs verified replacement. Platform provides no Chinese baseName for this record, so the official name is retained.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual released kg from charge/top-up/recovery/stock/equipment balance or monitoring / N; cp_water_releases. Purchases/top-ups are not automatically leakage; upstream new refrigerant and recovered waste remain separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_releases`
- Sources: `imo-fuel-lca-2024`

### Process: Owned or uncaptured shipboard residues (`owned_water_residues`)

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
- Amount rule: Attributed actual waste kg at generation excluding container tare / N; cp_water_residues.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_residues`
- Sources: `imo-pollution`

###### Collected oily engine-room bilgewater at reception handover (`collected_bilgewater`)

Only actual collected engine-room oily bilgewater mixture handed over in waste status, with measured water/oil/solids composition and wet-mass basis. Not fresh fuel, spent pure lubricant, cargo washwater, separated sludge, ballast or direct seawater discharge. Treatment/reception boundaries and any prior onboard separation must be explicit.

- Selected flow: Collected oily engine-room bilgewater at reception handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual wet kg handed over, excluding container tare / N; cp_water_residues. Generated, onboard-treated, stored, recycled, emitted and handed-over quantities require separate closure; receiver-treated fractions cannot also be counted as untreated direct releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_residues`
- Sources: `imo-pollution`

###### Collected shipboard toilet blackwater at reception handover (`held_blackwater`)

Only actual separately held toilet sewage mixture in waste status at reception handover, with water/solids basis and composition. Graywater, combined black/graywater, scrubber washwater and ballast have independent identities. If actual onboard treatment or direct discharge occurs, collect its separate inputs, residuals and species/receiving water; absence of this handover does not remove that obligation.

- Selected flow: Collected shipboard toilet blackwater at reception handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual wet kg handed over / N; cp_water_residues. Reconcile tank stocks, sanitary water, actual sewage generation and all separate fates, without using water supply as an assumed discharge.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_residues`
- Sources: `imo-pollution`

###### packaging waste (plastic) (`vessel_plastic_packaging`)

Only actual separately collected plastic packaging waste of compatible contents, before its treatment; not all ship garbage, composite packaging, food-contaminated mixtures or an incineration service. Specify polymers/contamination and actual receiver; different unrepresented mixtures require their own rows.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual net waste kg / N; cp_water_residues.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_residues`
- Sources: `imo-pollution`

##### Elementary flows

### Process: Uncaptured water-terminal and shore support (`water_terminal_support`)

#### Inputs

##### Product flows

###### Alternating current (`port_ac`)

Actual compatible imported AC at port point of use for attributable boarding ramps, terminal, booking/control, lighting or shore equipment, excluding metered vessel_shore_ac and supplier-included electricity. Shore buffer/charger losses belong to their actual gate owner; do not assign the same purchase once to port and again to the vessel.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed gross port kWh / N; cp_water_terminal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_terminal`
- Sources: `damen-ferry-cases`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | all_processes | Separate metered providers, modes, operations, support and assets before allocating shared burdens. Leg transfers are components of one service, not co-products requiring a second split. | ghg-product-standard |
| allocate_physical | all_processes | Use documented causal physical drivers for the actual resource and all users of its pool. Passenger-distance, vehicle-distance, operating time or occupied area-time may be used only where the resource relationship is supported. Shares must close over all served products; one universal share is prohibited. |  |
| no_fare_proxy | journey_integration | Fare revenue, ticket sales and passenger capacity are not automatic physical drivers. If physical subdivision or drivers cannot be established, justify an alternative relationship and disclose sensitivity before use; do not invent a percentage. | ghg-product-standard |
| avoid_second_division | journey_integration | Use a provider result already expressed per completed passenger leg at its own native basis once. Do not divide it again by vehicle occupancy, seating capacity or passengers. Normalize aggregate assigned burdens once by N. |  |
| empty_and_failure | owned_road_leg;owned_rail_leg | Assign attributable empty and failed-service burdens within the corresponding service pool; failed integrated journeys add no completed output. If N is zero, retain the pool and resolve the aggregation period or boundary with evidence, never divide by zero or declare zero intensity. |  |
| export_no_credit | rail_ac_export | A separately delivered electricity export has its own actual recipient and scope. Internal recovery is not a co-product; use the declared consistent allocation convention for actual joint output and disclose sensitivity, with no automatic avoided-grid credit. |  |
| asset_lifetime_share | asset_completion | Allocate each compatible cohort using documented lifetime activity and the studied share of that activity. Keep original vehicle/battery manufacture, replacements, maintenance and disposal in non-overlapping components across all users and periods; changing lifetime assumptions requires update and uncertainty disclosure. |  |
| actual_mode_and_wave_duties | all_processes | Subdivide actual provider/mode/boat-rail-road resource pools and retain complete actual persons/segment andotherusers. Attribute actual watercondition/wave/wake-relatedspeed/hold/manoeuvre/hotel/empty/failure,transferwait/missedconnection andtest/recovery duties with evidenced causality;no weather factor,occupancy oroneleg-permode default. Failedintegratedfulfilment creates nofinalN;directphysicalwave/wake/disturbance evidence andassessmentlimits stay explicit where relevant. |  |
| whole_blend_and_supply_gate | all_processes | Use the actual whole delivered fuel formulation/blend with composition/carbon-origin ledger OR component supplies replacing its exact supply/upstream coverage with native-mass/provider closure,never both. Distinguish required supplied/net withdrawal from actual burned/vented/spilled/recovered/retained quantities;do not equate purchases to combustion. Bridge an at-plant identity to the actual receipt/use gate and separately own missing delivery/conditioning/storage/loss stages;no grade relabel or invented density. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The completion,coverage,native scaling and bookkeeping equations are explicit PCR-designed methods;external sources support only their stated actual definitions/physical contexts. No claim FTA,DfT,TransLink,IMO orISO prescribe these full-life or linked-journey formulas. Missing generic ranges do not waive mandatory actual quantities.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_journeys | journey_integration | completed linked-person journeys | service_ledger | privacy-preserving journey_id; actual_person_count; origin; destination; route; schedule; actual start/end; mode/vehicle changes; provider leg IDs; group-ticket persons; completion/cancellation; actual stage km; period;actual mode taxonomy;morethanone distinctmode;rail_land_water branch;stage personmembership;transfer/walk/wait boundaries;failed connection | Join actual fulfilment/validation/dispatch/transfer evidence; audit matching errors and sample expansion separately. Never infer a universal transfer window from NTS. Aggregation algorithm: N=sum actual persons on eligible completed linked itineraries; a transfer adds leg/boarding, not a new completed journey; missing completion remains unresolved Confirm each actual completed itinerary includes more than one evidenced mode on predetermined routes/schedules;do not infer physical fulfilment from mode availability,farewindow or ticketpayment. Transfers/vehiclechanges add no final completions. | Item(s); person; km; time | each itinerary; reconciled period | same declared service period | declared integrated network and OD/service class | per declared reference flow | documented linkage and anonymization; completion proof; coverage and uncertainty |
| cp_legs | journey_integration | provider result coverage | provider_ledger | journey_id; leg_id; provider; mode; geography; dataset/version; native unit; quantity; distance; start/end; completion; energy upstream/operation; terminal/capital/maintenance/disposal coverage;actual rail/land/water mode;boat ortram/trolley type;native quantity/activity multiplier;pier/station/transfer/fulllifecycle cells | Reconcile contract with actual provider fulfilment and full dataset boundary; inspect every adopted native result. Confirm compatible Count inputs; other units need separately verified native exchange/equivalence. Aggregation algorithm: Map every provider/activity/burden/period cell once; sum only compatible quantities; actual leg multiplicity retained For every real mode/provider leg use provider-native demand scaled by observed activity then causal share/N once. Countcardsapplyonlycountedcompletedresults;actualpkm/vehiclekm/hour results require separateexactidentityand measured conversion. A wholeprovider resultORmatchingphysicalstagecells,notboth. | native provider units; Item(s); km | each provider/cohort and update | period aligned with journey set | all actually served owned and purchased legs | per declared reference flow | provider source, unit and boundary proof; closed coverage matrix; no double occupancy division |
| cp_owned_road_activity | owned_road_leg | owned physical operations | operating_records | vehicle/train/configuration; owned coverage cell; gross fuel/import/export; meters; opening/closing stocks; storage; empty/revenue/test/standby/disrupted activity; all-user causal driver; factors and sources if calculation needed | Use reconciled meters, stock records, dispatch logs and actual physical allocation evidence; map operations independently of NTD metric exclusions. Split each actual carrier and technical state. Aggregation algorithm: actual consumed quantity = compatible opening + receipts - closing - non-consumption transfers, with explicit adjustment terms; assigned totals divided once by N Complete actual rubbertyre/railwheel,trolley/contactwire/tram propulsion,tractionAC/DC/rectifier/battery,track/road/overheadline/substation,brake/tyrewear,cooling and all actual energy/consumable/fate interfaces. InternalACtoDC/recovery isnot anotherpurchase;actual diesel,whole-blend and replacing component supplies retainexclusive supply/upstreamcoverage andrealburnedstocks. | kg; kWh; km; vehicle-km; h; actual species units | meter/vehicle record and period closure | same operation/allocation period as N | actual owned/uncovered landbranch,including bus/trolleybus/tram under actualmodeownership | per declared reference flow | meter scope, loss/recovery reconciliation, driver rationale and all-user share closure |
| cp_owned_rail_activity | owned_rail_leg | owned physical operations | operating_records | vehicle/train/configuration; owned coverage cell; gross fuel/import/export; meters; opening/closing stocks; storage; empty/revenue/test/standby/disrupted activity; all-user causal driver; factors and sources if calculation needed | Use reconciled meters, stock records, dispatch logs and actual physical allocation evidence; map operations independently of NTD metric exclusions. Split each actual carrier and technical state. Aggregation algorithm: actual consumed quantity = compatible opening + receipts - closing - non-consumption transfers, with explicit adjustment terms; assigned totals divided once by N Own actual railvehicle/bogie/track/guideway,tractionACorDC/rectifiers/charging/regen plus diesel/H2/steam/other actual route inputs and releases. A heavyrailprovidercard isnot proofallrailmodes use thatnativeidentity; otheractualnativeoutputs/vehicles mustbeexpanded. | kg; kWh; km; vehicle-km; h; actual species units | meter/vehicle record and period closure | same operation/allocation period as N | actual owned/uncovered railmode branch with realconfigurations andnativeenergy gates | per declared reference flow | meter scope, loss/recovery reconciliation, driver rationale and all-user share closure |
| cp_support | uncaptured_support | uncaptured integration and terminal support | meter_and_procurement_records | support cell; actual electricity/water/material; station/room/equipment; period; all-user driver; upstream inclusion; stock; actual cleaning/IT/transfer support | Inspect meters, bills, equipment logs and site records. Meter or causally allocate only support absent from linked results. Identify every chemical/material/provider separately before final use. Aggregation algorithm: remove only proven included coverage; assign actual measured amount using justified physical driver; divide once by N Close ownership of actual bus/rail/water interchange access/egress,walking connector,lift/escalator,shelter,waiting,missedconnection,wayfinding/IT andticketmedia;notoneextra passengeroutput. Water_terminal_support covers only its assigned uncaptured cells,not thesame meterorasset again. | kWh; m3; native actual units | actual transactions and closure | matching service period | all uncaptured integration/terminal/support interfaces | per declared reference flow | meter boundary and supplier crosscheck; actual absence proof; mandatory identity/quantity gap register |
| cp_assets | asset_completion | whole-life assets and infrastructure | asset_cohort_ledger | asset_id; actual configuration; original battery coverage; manufacture dataset; replacement/maintenance/disposal; in-service dates; compatible lifetime activity; actual studied and all-user activity; forecast basis and uncertainty;boat/hull/foil/skirt;rail/landvehicles;piers/ramps/shorepower;road/track/overhead;alluserlife | Inspect asset and engineering records plus provider lifecycle coverage; distinguish observed life from documented forecast for active assets. Match native manufacture references and revise forecasts when evidence changes. Aggregation algorithm: manufacture equivalents=delivered native manufacture count times assigned compatible duty/total compatible useful duty, matched to the same vehicle or cohort; other components have independent actual quantities and exclusive coverage; normalize by N Complete each actual ship/rail/road/terminal/interchange/charging/guideway asset native manufacture quantity andsameassetall-user useful-life duty,including owned andsuppliermissing stages. Boat originalhull/drive/battery/foil/fan/skirt andequipment versus subsequentreplacement/drydock/refit/maintenance/retirement exclusive. A manufacturingidentity isnot a full-life service; a single batterybus carddoesnotrepresentothervehicles. | Item(s); compatible vehicle-km; asset-native units | asset/cohort acquisition, replacement and update | whole-life basis with period-specific assigned activity | every attributable vehicle, battery, station, guideway and support asset not already covered | per declared reference flow | configuration/lifetime/source proof; uncertainty; all-user and cross-period non-overlap; no copied default mass/life |
| cp_road_residues | owned_road_leg | actual waste and direct release | fate_and_emission_ledger | source cell; actual material/substance; composition; carbon origin; measured/native mass; calculation factor/source if used; stock; capture/treatment; transport; recipient; medium; upstream inclusion | Read actual monitoring/method and waste-transfer records. Distinguish containment from release, whole stream from separately handled fractions, collection from treatment, and stock change from consumption. Aggregation algorithm: assign actual event quantity and native conversion only with proof; reconcile fates; never fill the residual by invented emission or zero | native species/carrier units; kg; m3 | event or supported monitoring/estimation period | aligned activity and waste/stock closure | Each actual owned or uncovered generation/release gate in the unique parent owned_road_leg,including all real eligible land mechanisms such as bus,trolleybus and tram;only this process exclusive coverage cells. | per declared reference flow | species/medium/unit and method proof; receiver gate; actual occurrence/absence; factor provenance; balance limitations |
| cp_rail_residues | owned_rail_leg | actual waste and direct release | fate_and_emission_ledger | source cell; actual material/substance; composition; carbon origin; measured/native mass; calculation factor/source if used; stock; capture/treatment; transport; recipient; medium; upstream inclusion | Read actual monitoring/method and waste-transfer records. Distinguish containment from release, whole stream from separately handled fractions, collection from treatment, and stock change from consumption. Aggregation algorithm: assign actual event quantity and native conversion only with proof; reconcile fates; never fill the residual by invented emission or zero | native species/carrier units; kg; m3 | event or supported monitoring/estimation period | aligned activity and waste/stock closure | each actual owned or uncovered generation/release gate; this protocol is restricted to owned rail waste and direct releases in this process, with its own exclusive coverage cells | per declared reference flow | species/medium/unit and method proof; receiver gate; actual occurrence/absence; factor provenance; balance limitations |
| cp_support_residues | uncaptured_support | actual waste and direct release | fate_and_emission_ledger | source cell; actual material/substance; composition; carbon origin; measured/native mass; calculation factor/source if used; stock; capture/treatment; transport; recipient; medium; upstream inclusion | Read actual monitoring/method and waste-transfer records. Distinguish containment from release, whole stream from separately handled fractions, collection from treatment, and stock change from consumption. Aggregation algorithm: assign actual event quantity and native conversion only with proof; reconcile fates; never fill the residual by invented emission or zero | native species/carrier units; kg; m3 | event or supported monitoring/estimation period | aligned activity and waste/stock closure | each actual owned or uncovered generation/release gate; this protocol is restricted to uncaptured support waste and direct releases in this process, with its own exclusive coverage cells | per declared reference flow | species/medium/unit and method proof; receiver gate; actual occurrence/absence; factor provenance; balance limitations |
| cp_asset_residues | asset_completion | actual waste and direct release | fate_and_emission_ledger | source cell; actual material/substance; composition; carbon origin; measured/native mass; calculation factor/source if used; stock; capture/treatment; transport; recipient; medium; upstream inclusion | Read actual monitoring/method and waste-transfer records. Distinguish containment from release, whole stream from separately handled fractions, collection from treatment, and stock change from consumption. Aggregation algorithm: assign actual event quantity and native conversion only with proof; reconcile fates; never fill the residual by invented emission or zero | native species/carrier units; kg; m3 | event or supported monitoring/estimation period | aligned activity and waste/stock closure | each actual owned or uncovered generation/release gate; this protocol is restricted to uncovered asset lifecycle waste and direct releases in this process, with its own exclusive coverage cells | per declared reference flow | species/medium/unit and method proof; receiver gate; actual occurrence/absence; factor provenance; balance limitations |
| cp_water_activity | owned_water_leg | actual energy,water and consumable supplies and all duties | actual_record | vessel;architecture;engine_motor;lift_thrust_foil_control;mode_periods;tow_rope_shore_drive_owners;fuel_grade;blend;carbon_origins;opening_stock;receipts;closing_stock;burned;leaked;recovered;shore_gate_ac_dc;gross_import;conversion_losses;battery_soc;water_stocks;other_supply;provider_cells;all_user_share;dispatch_pickup_cancel_return;commercial_private_other_uses;cargo_hotel_dwell | Obtain bunker/meter/tank/duty records and actual measured configuration. Reconcile voyage,hotel,empty,failed,charging and architecture-specific lift/transition/shore approach duties. Identify each actual fuel,water,chemical and supplied energy gate; distinguish supply,combustion,loss,recovery and stock. A whole blend with composition ledger OR replacement component supplies requires mass and provider closure, never both. Reconcile AC/DC charge boundaries and storage/charger losses; internal battery/discharge/regen is no new external supply. Reconcile actual water-taxi dispatch,pickup,waiting,cancellation/failure and return duties across all supported vessel uses,with each platform/provider owner. For cargo-passenger routes retain actual passenger hotel/food/sanitary and cargo/reefer duties and evidence each separate or shared cell; no cargo-primary free-ride assumption. Aggregation algorithm: For each actual native period quantity Q, attribute compatible duty/all-user share a to the cohort and compute sum(Q*a)/N once. Fuel activity is reconciled burned mass, not unreconciled purchase; external energy gate chosen exclusively. Actual quantities are assigned to the integrated journey cohort using closed leg/passenger/phase/provider coverage and all-user resource/duty shares;N is final mixed-mode through-journey completion,not water-leg boardings or voyages. | kg;kWh;m3;hour | actual event and period closure | same service period and evidenced life interfaces | owned/uncovered onboard supply and actual all-user duties | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_water_releases | owned_water_leg | actual separately identified airborne species | actual_record | vessel;fuel;carbon_origin;engine;load;aftertreatment;duty;burned_activity;monitoring_or_model;factor_basis;source_context;species_mass;air_subcompartment;refrigerant_charge;topup;recovery;stocks;provider_cells;uncertainty | Collect actual species monitoring or independently supported fuel/engine/load/mode-compatible models, including actual lift/propulsion/hotel generators. Separate chemical/carbon/nitrogen bases and receiving compartment. Fuel-LCA GHG-only scope cannot remove other actual species. Determine each refrigerant actual charge/recovery balance; separately expand actual NO/NO2,SO2,CO,NMVOC components,particle sizes,biogenic CH4 and other releases as required,not one NOx/SOx collector identity. Aggregation algorithm: Assign actual molecule/species mass to the cohort using the matching duty share; /N once. Model q=sum compatible burned_activity*evidenced_species_factor, preserving actual factor units/conversion and uncertainty; no generic factor supplied. Actual quantities are assigned to the integrated journey cohort using closed leg/passenger/phase/provider coverage and all-user resource/duty shares;N is final mixed-mode through-journey completion,not water-leg boardings or voyages. | kg | actual event and period closure | same service period and evidenced life interfaces | owned/uncovered actual airborne release at actual subcompartment | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_water_residues | owned_water_residues | actual separately identified wastes and water/material fates | actual_record | vessel;stream_id;origin;composition;moisture;phase;mass_volume;density_basis;generated;stocks;onboard_treatment;recovery;handover;receiver;transport_treatment_coverage;direct_species_release;receiving_waterbody_subcompartment;ballast;coating;skirt_or_foil_residues;uncertainty | Use actual tank,maintenance,water,chemical and reception records. Keep bilge,blackwater,graywater,combined sewage,scrubber washwater/sludge,ballast intake/discharge/sediment,food/other garbage,coating/leachate and skirt/foil residues separate by actual composition/gate. Close input/generated-stock-treatment-recovery-handover-release fates. Expand direct water/soil/air species with actual recipient,not waste mass as elementary substance. Actual ballast environmental water intake/discharge is separate from tap-water product; do not invent universal use. Aggregation algorithm: For each actual separate wet/dry/native stream Q and supported service share a, compute sum(Q*a)/N; preserve moisture/density conversion proof. Treatment results replace exactly their included treatment/emission cells,not waste generation or unrelated streams. Actual quantities are assigned to the integrated journey cohort using closed leg/passenger/phase/provider coverage and all-user resource/duty shares;N is final mixed-mode through-journey completion,not water-leg boardings or voyages. | kg;m3 | actual event and period closure | same service period and evidenced life interfaces | actual onboard residue generation,holding,treatment and external recipients | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |
| cp_water_terminal | water_terminal_support | actual terminal/shore/organizer supplies,assets and fates | actual_record | port;terminal;boarding;shore_approach;charger_buffer;meter;provider;voltage;upstream_downstream_gate;supplies;wastes;releases;assets;life;all_users;attributable_duty;coverage_cells;remote_organizer;actual_pickup_docks;cargo_loading_reefer_dwell;allocation_causality | Measure or support actual attributable terminal/boarding/control/booking/mooring/charging/shoreapproach services,including shore energy losses not already captured. Inventory each actual input,waste,release and quay/ramp/terminal/charger/storage asset and its maintenance/end-of-life; no omission because owned by a port rather than ferry operator. Use a complete provider result OR its uncovered physical cells with compatible native gate. Include actual private/public pickup docks and dedicated/shared cargo-handling,reefer and cargo-caused waiting infrastructure/energy cells. Evidence causal all-user attribution separately from passenger hotel/boarding; a cargo-call delay is not automatically wholly passenger-caused or wholly free. Aggregation algorithm: Attribute actual native period flows by measured or justified all-user resource/duty shares,then /N; asset manufacture uses same-asset lifetime share before /N. Vessel_shore_ac/DC chain and port purchases must close without double allocation. Actual quantities are assigned to the integrated journey cohort using closed leg/passenger/phase/provider coverage and all-user resource/duty shares;N is final mixed-mode through-journey completion,not water-leg boardings or voyages. | kg;kWh;m3;Item(s);hour | actual event and period closure | same service period and evidenced life interfaces | actual uncovered port/shore/organization responsibilities | per declared reference flow | raw records,native identity,coverage and all-user closure,uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| count_linked | completed_integrated_journey | N = sum(actual eligible persons on completed linked itineraries); neither tickets nor sum of leg boardings. Eligibility requires actualmorethanone mode,membership andcompletepredeterminedurban/suburbanitinerary atdeclaredquality;actualphysicallegcount isnotfinalN. | cp_journeys | N; Item(s) |  |
| normalize_once | all_processes | q_ref = assigned actual compatible native quantity / N, with N > 0 and matched coverage/period. | cp_journeys;cp_legs;cp_owned_road_activity;cp_owned_rail_activity;cp_support;cp_road_residues;cp_rail_residues;cp_support_residues;cp_asset_residues;cp_water_activity;cp_water_releases;cp_water_residues;cp_water_terminal | native amount per Item(s) |  |
| leg_assignment | purchased_bus_leg;purchased_rail_leg;purchased_tram_leg;purchased_trolleybus_leg;purchased_ferry_leg | Sum actual compatible person-leg results assigned to the integrated journey set; keep actual multiplicity and all provider-specific boundaries. | cp_journeys;cp_legs | provider-native quantities |  |
| energy_units | road_electricity;rail_electricity;rail_ac_export;support_electricity;land_external_dc;rail_external_dc;vessel_shore_ac;vessel_shore_dc;port_ac | For verified compatible electrical energy only, MJ = 3.6 * kWh. Separate gross import/export and storage; no fuel-factor inference. | cp_owned_road_activity;cp_owned_rail_activity;cp_support | MJ or kWh on compatible electrical basis |  |
| asset_equivalents | asset_completion | Vehicle manufacture equivalents = sum_b(delivered manufacture Item(s)_b * assigned compatible duty_b / documented total compatible lifetime duty_b); divide the period total by N. Match the numerator, denominator and delivered count to the same vehicle/cohort; other components require independent quantities. | cp_assets;cp_journeys | Item(s) vehicle per reference journey |  |
| supplemental_distance | journey_integration | Supplemental actual passenger-distance = sum(actual passengers on each stage * actual stage km); it is not the Count reference and supplies no fixed distance per journey. | cp_journeys;cp_legs | supplemental passenger-distance disclosure | dft-nts-2025 |
| water_supply_species_fates | owned_water_leg;owned_water_residues;water_terminal_support | For each actual waterleg/boat/phase close supplied+openingstock+generated=closingstock+used/converted+leaked/vented+recovered/exported andeachfateoncompatiblebasis;internaltransferscancel. Suppliedfuel,actualburnedactivity andchemicalemission differ. Measure/model eachactualspecies withindependentlysupportedcomposition/engine/load model,correctmolecule/origin/receiver,then causalallusercohortshare/Nonce. Wholefuelblend ORreplacingcomponentupstreamcells;externalACorDCchain andlosses exclusive;collectedwetbilge/blackwater aremixtures,notdirectspecies orpureusedoil. | cp_water_activity;cp_water_releases;cp_water_residues;cp_water_terminal;cp_journeys | native assigned material/species/fate perintegratedjourney |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| linked_count | completed_integrated_journey | Maintain actual through-journey completion and person linkage; ticket/boarding/leg totals cannot substitute for N. Missing completion or transfer linkage blocks completion. | cp_journeys |
| provider_matrix | purchased_bus_leg;purchased_rail_leg | Retain a closed provider/activity/burden/period matrix with native-unit and lifecycle coverage proof. Any gap or overlap blocks completion of the affected package. | cp_legs |
| actual_carriers | road_diesel;road_electricity;rail_electricity;support_electricity | Every actual fuel, hydrogen/DC/steam/heat supply, refrigerant and auxiliary chemical not represented by a compatible card must be independently identified, measured and expanded. Missing occurrence, identity or quantity blocks completion; no route is assumed to use them all. | cp_owned_road_activity;cp_owned_rail_activity;cp_support |
| actual_provider_units | purchased_bus_leg;purchased_rail_leg | Expand every incompatible provider, state and native result into its own verified exchange; retain actual distance/occupancy/boundary equivalence and source uncertainty. Missing proof blocks completion; a zero search match is not a zero service. | cp_legs |
| actual_assets | battery_bus_manufacture | Complete each attributable configuration-specific vehicle, battery, equipment, guideway and station lifecycle component not already included. Do not use the EV-bus card for other assets or use depreciation money as physical lifetime. Missing support blocks completion. | cp_assets |
| actual_materials_wastes | support_tap_water;paper_ticket_waste;battery_bus_manufacture | Collect every actual purchased material, consumable, repair item, contained wastewater and waste stream by composition, state, native amount and receiver gate. Expand distinct streams separately. Missing identity, quantity or fate blocks completion. | cp_support;cp_road_residues;cp_rail_residues;cp_support_residues;cp_asset_residues |
| actual_emissions | road_fossil_co2;owned_rail_leg;uncaptured_support | For all actual exhaust, non-exhaust, fugitive or water/soil releases, retain substance/species/particle class, origin, receiving medium and subcompartment, quantity basis and method. A known specific subcompartment cannot be discarded for a generic-air identity; unspecified requires documented scope justification. The CO2 card does not cover other species. Missing required release data blocks completion, never zero. | cp_road_residues;cp_rail_residues;cp_support_residues;cp_asset_residues |
| actual_digital_support | support_electricity;uncaptured_support | Identify actual integration/IT/communication supplier services and their native service/asset/energy coverage; expand each uncaptured service separately and exclude only proven already-included burdens. Missing coverage blocks completion. | cp_support |
| period_uncertainty | purchased_bus_leg;purchased_rail_leg;completed_integrated_journey;road_diesel;road_electricity;road_fossil_co2;rail_electricity;rail_ac_export;support_electricity;support_tap_water;paper_ticket_waste;battery_bus_manufacture | Keep period alignment, stock change, incomplete journeys, active-asset lifetime forecasts and sampled passenger data explicit. Estimates must have method/source/uncertainty and no invented generic range. | cp_journeys;cp_owned_road_activity;cp_owned_rail_activity;cp_assets |
| identity_and_translation | purchased_bus_leg;purchased_rail_leg;completed_integrated_journey;road_diesel;road_electricity;road_fossil_co2;rail_electricity;rail_ac_export;support_electricity;support_tap_water;paper_ticket_waste;battery_bus_manufacture | Match every bound identity and official Chinese display to independent Tiangong detail/support evidence. Unresolved concrete flows remain registered; do not promote candidate status through checker pass alone. | all collection protocols |
| full_mode_membership | completed_integrated_journey | MANDATORY actualwholeintegratedjourney andeligibleurban/suburbanpredeterminedroute/schedule withmorethanone evidencedmode. Retain actualrail/land/watermode taxonomy,membership,allstages/persons/transfers,quality/OD andcompletion,includingactualownedorpurchasednativecoverage. Networkcatalog/farewindow/ticketpayment/boardingdata alone notfulfilledjourney. Incompletemembership orend-to-endlinkage blocksfinishedresult. | cp_journeys;cp_legs |
| water_architecture_wave | owned_water_leg;owned_water_residues;water_terminal_support;asset_completion | MANDATORY actualwaterbody/sea-state/wave/wake/itinerary/boat andpropulsionrecord. Displacement/hydrofoil/hovercraftactualhull/drive/foil/control/liftfan/skirt/shoreapproach/hold/idle/repair wear fates andactualotherchemical,manual,towed/cable orotherconfigurations requirecompletephysical/nativeinterfaces. OwnactualtowproviderORphysicaltowenergy/rope/shoremechanism/life,notassumedonboardfuel. Collect actualwave/wakephysicaldisturbance/intervention evidence/nativeunit/assessmentlimits where relevant;noinvented waveemissionkg orweatherfactor. | cp_water_activity;cp_water_releases;cp_water_residues;cp_water_terminal;cp_assets |
| water_all_fates | owned_water_leg;owned_water_residues;water_terminal_support | MANDATORY everyactualmarinegradefuel/blend/lubricant/refrigerant/cooling/detergent/antifoulant/scrubbersupply;bilge,black/graywater,scrubberwashwater/sludge,ballastintake/discharge/sediment,garbage andcleaning/leachate/directrelease separately byactualcomposition,wetdry/nativequantity andreceiver. Do not substitute roadDiesel,aggregate allwaste,bindairspecies to wastewater ordelete unrepresented mandatoryfate. | cp_water_activity;cp_water_releases;cp_water_residues;cp_water_terminal |
| land_rail_traction_life | owned_road_leg;owned_rail_leg;asset_completion;uncaptured_support | MANDATORY actualtrolley/tram/bus/otherland andrailroute nativeAC/DC/rectifier/charging/regeneration/fuelcell/H2/diesel/steam orotheractualpropulsioninputs,contactwire/substation/bogie/track/road/tyre/brake/railwear/heat/release andfulllife. A concretebusorheavyrailcard cannot standforallactualmodes;eachrealmissingvehicle/provider/input/asset/species/fate mustbeexpanded withthe atomicfields below,not omittedbecauseUUIDunknown. | cp_owned_road_activity;cp_owned_rail_activity;cp_assets;cp_support |
| transfer_and_terminal | uncaptured_support;water_terminal_support;asset_completion | MANDATORY completeactualrail/land/waterinterchange:station/pier/quay/ramp/lift/escalator/walkway/shelter/wayfinding/ticketingIT/charging/mooringassets,waiting/access/egress boundaries andmissedconnection/recoveryduty. Include manufacture/maintenance/retirement andallactualusers;eachnativeprovider/asset/metercelloneowner. Transferusers areactualmembers,notextranewoutputs;commonfare alone notresponsibilityproof. | cp_support;cp_water_terminal;cp_assets |
| atomic_full_expansion | all_processes | MANDATORY every actual unrepresented input/output,provider result,material,asset,waste or directspecies/fate has:unique row_id;oneexisting process_id;direction/product-waste-elementarytype;singleactualidentity/state/formulation;verifiedUUID or explicitunresolved;nativeproperty/unit/actualquantity andmeasured/calculatedbasis;validsameparentCP;rawsource;providerstage/nativegate/coveredcells;receiver/knownsubcompartment/waterbody/phase;uncertainty andnormalization. No pluralcollectionrow,unknownzero orcheckpass-completionclaim. Realnativeproviderquantities scaledbyactualactivity thenallocated/Nonce;eachcoveredcell replacesmatchingphysicalcellonly. | all actual collection protocols and coverage/quantity/fate records |
| other_qualifying_mode_interfaces | all_processes | MANDATORY where another actual mode fulfils the same scheduled urban/suburban integrated service,establish actual endpoint/role/mode eligibility and one concrete provider-native activity per leg. Scale real native quantity by actual measured activity then causal all-user share/N;completed provider covered cells replace exact physical cells only. Expand the full mode-specific vehicle/propulsion/energy/site/terminal/maintenance/retirement and release/receiver interfaces atomically. For an actual air component,this includes actual taxi/takeoff/climb/cruise/holding/diversion/empty/landing phases,cargo/crew roles,airport support and aircraft lifecycle,with actual chemical/particle/altitude quantities;never a generic ground-air or passenger-km factor. No technical example alone proves code membership. Transfer walking/waiting does not automatically establish a second delivered transport mode. Unknown actual native identity,quantity or coverage blocks completion rather than excluding the qualifying product. | all actual native mode/provider/phase/asset/fate records and valid same-parent protocols |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_service | completed_integrated_journey | Every counted record proves one actual passenger completed the declared eligible urban/suburban scheduled mixed-mode itinerary using more than one actual distinct transport mode. Declare actual accountable operator,OD,period,mode membership,predetermined route/schedule,accessibility/service quality and transfer boundaries;boardings or ticket rights alone do not prove this output. |  |
| validate_denominator | cp_journeys | N is the actual completed linked-person-journey count. Reconcile ticket, boarding, transfer, leg, cancellation and completed-trip records without equating them. Group tickets retain actual person counts. |  |
| validate_distance | cp_journeys;cp_legs | Actual stage distances and passenger counts determine supplemental passenger-distance. A 1 Item(s) journey has no fixed km conversion; never relabel the Count reference as passenger-km. |  |
| validate_cells | all_processes | Every mandatory burden cell is covered once by a compatible provider result or explicit foreground data; audit supplier data and own inputs together for both omissions and duplication. |  |
| validate_native | all_processes | Verify UUID identity, reference property/unit chain, technical state, provider/geography, boundary and receiving medium for each adopted exchange. The unresolved reference product does not waive independently verified Count support. |  |
| validate_atoms | all_processes | Expand every actual provider, material, refrigerant, asset, waste and emission into an independently compatible atomic exchange before final data completion; no collection label or inherited UUID is allowed. |  |
| validate_energy | owned_road_leg;owned_rail_leg | Close gross imports, exports, internal recovery and storage change. Do not count battery discharge as supply, infer fuel use from fare, or infer zero life-cycle burden from no tailpipe emissions. |  |
| validate_residues | cp_road_residues;cp_rail_residues;cp_support_residues;cp_asset_residues | Reconcile actual waste carrier, constituent/species, native basis, stock change and destination. Do not combine kg N with kg N2O, kg C with kg CO2, contained liquids with air/water releases, or whole objects with separately counted components. |  |
| validate_temporal | all_processes | Numerators, N, provider activity and physical allocation drivers use compatible service cells and periods; retain incomplete, zero-output and interrupted pools for resolution. |  |
| validate_completion | all_processes | Missing amounts and missing generic ranges are different. Actual quantities and required identities/coverage must be completed with evidence; no guessed range, default emission factor or missing-equals-zero rule may manufacture completeness. |  |
| validate_full_mixed_scope | journey_integration | Requireactual64113urban/suburbanpredeterminedroutes/schedules withmorethanone realdistinctmode andactualend-to-endrecipientcompletion. Fullmethod admits actualrail/land/watercombinations,notrail+busonly orallthreecompulsory. Rejectbooking/broker-only/commonfareascompletion andleg/boarding doubleoutputs. |  |
| validate_water_and_power | owned_water_leg;owned_water_residues;water_terminal_support;owned_road_leg;owned_rail_leg | Requireactualboat/rail/landarchitecture,sea/wave/nativefuelgrade andgross externalAC/DC gates;no roadDieselasmarineproof,noACrelabelledDC orinternaltransferaspurchase. Separatebilge/blackwater/oil/sludge/ballast/antifoulant/cleaningfates andactualspecies/medium/knownsubcompartment;unresolvedactualneednotzero. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only afterallactualrequiredidentities,quantities,coverage,life andfates completed/reviewed |
| allowed_use | Use a completed evidenced service result only at its declared OD, modes, quality, period and boundary; cross-condition comparison requires functional equivalence first |
| excluded_use | Singlemode orbooking/broker-only,unusedrights/farelabels,defaultpkmfactors,legdoublecount,missingwater/land/railbranchresponsibilities oroperationalonly resultasfull lifecycle;incomplete actualpackage |
| required_metadata | Accountable operator/network/OD; itinerary/schedule; modes/providers; completed N; actual distances; native units; coverage matrix; capital/end-of-life boundary; physical allocation; period and uncertainty |
| required_quality_disclosure | Identity/quantity gaps, sampling/linkage errors, provider-boundary gaps, lifecycle coverage, lifetime forecasts, emission method/medium, exclusions and sensitivities; checker pass is not completion evidence |
| update_trigger | Changes in route/function, modes/providers/energy technology, linkage/completion rule, asset configuration/life, release/fate, measurement or applicable boundary guidance |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF page 359, subclass 64113. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full64113scope:scheduledurban/suburban morethanone mode includingrail,land,water; classificationonly,no genericmodecount/quantityfactor. |
| dft-nts-2025 | official_guidance | UK Department for Transport, NTS 2025: Notes and definitions, updated 11 September 2026, Trips, stages and distance. https://www.gov.uk/government/statistics/national-travel-survey-2025/nts-2025-notes-and-definitions | Trip/stage/distance distinctions; this PCR defines its own actual integrated service completion rule. No NTS numerical average or transfer-window rule is adopted. |
| fta-ntd-glossary | official_guidance | US FTA, National Transit Database Glossary, entries Unlinked Passenger Trips, Service Supplied, Service Consumed, Actual Vehicle Miles. https://www.transit.dot.gov/ntd/national-transit-database-ntd-glossary | Boarding-based reporting and supplied-versus-consumed activity distinctions. NTD does not define this PCR linked-journey denominator or its whole-life boundary. |
| ghg-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 6, 7 and 9, especially printed pages 28–29, 34–37 and 63–64. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Functional scope disclosure and allocation hierarchy; no transport factor, asset lifetime or fare allocation percentage is taken from the standard. Capital inclusion here is a disclosed PCR choice. |
| iso14083-scope | standard | ISO 14083:2023 official public abstract/scope, edition 1, 2023-03. https://www.iso.org/standard/78864.html | Public scope establishes passenger/freight transport-chain operations context only. Full normative text was not acquired; no detailed ISO conformity claim, factor or capital rule is inferred. |
| imo-fuel-lca-2024 | official_guidance | IMO Resolution MEPC.391(81),22March2024,2024 marine-fuel LCA Guidelines,annex p3 sections1–2. https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MEPCDocuments/MEPC.391(81).pdf | Fuel-chain and onboard propulsion/power interfaces,including shore electricity; CO2/CH4/N2O only. Explicitly excludes refrigerants and other listed species; not full ship inventory. No default factor adopted. |
| imo-pollution | official_guidance | IMO Pollution Prevention,public page accessed21October2026,opening paragraphs. https://www.imo.org/en/ourwork/environment/pages/pollution-prevention.aspx | Qualitative separate oil,sewage,garbage,air,ballast,antifouling and reception pathways; not factors,actual concentrations,universal occurrence or legal discharge permission. |
| iso8217-abstract | standard | ISO8217:2024,edition7 May2024,public abstract only. https://www.iso.org/standard/80579.html | Marine fuel specification families and before-onboard-handling gate; full normative text not read. No numeric grade,composition,density,sulphur or compliance conclusion. |
| damen-ferry-cases | literature | Damen Road Ferries and Ferry2306 Electric,primary product pages accessed21October2026. https://www.damen.com/vessels/ferries/roro-ferries ; https://www.damen.com/vessels/ferries/city-ferries/ferry-2306-electric | Actual case interfaces: passenger/vehicle ferries,shorecharging/buffer,diesel backup and internalDC. Product cases only; marketing emission savings,capacities and charging performance not generic parameters. |
| hydrofoil-case | literature | Candela P-12 Shuttle,primary technical product page accessed21October2026. https://candela.com/pro-series/p-12-shuttle/ | Actual electric hydrofoil controls,foil structure/transition and external DC charging architecture; no advertised savings,range,capacity or life adopted as a generic factor. |
| hovercraft-architecture | literature | Griffon Hoverwork/Griffon Marine,How Hovercraft Work,public primary technical explanation accessed21October2026. https://www.griffonhoverwork.com/products/hovercraft/how-hovercraft-work/ | Actual lift-fan,flexible-skirt and thrust-propeller functions over water/shore surfaces; not passenger-operation emission,wear or fuel factors. |
| bts-ncfo-2024 | official_guidance | BTS2024 National Census of Ferry Operators printable questionnaire,PDF pp2 and11. https://www.bts.gov/sites/bts.dot.gov/files/2025-02/2024%20NCFO%20Printable%20Questionnaire.pdf | U.S.-scope census context and distinct passenger/vehicle capacities excluding crew; no adoption of capacity or assumed car length as actual occupancy,reference denominator or worldwide service definition. |
| water-taxi-operator-case | literature | Fastrac,Water Taxi Service,primary operator page accessed21October2026. https://fastrac.com/cruises/water-taxi/ | Case-specific on-demand point-to-point,private/shared and dock-out/return duty interfaces; no prices,capacity,occupancy or fuel factor adopted as a general rule. |
| cargo-passenger-operator-case | literature | Relais Nordik,2026–2027 Conditions and rates for carriage of passengers,PDF pp5 and7;actual crossing/cargo versus cruise homepage and optional bed/meal pages. https://relaisnordik.com/wp-content/uploads/2026/03/rni-bella-tg-p-2026-2027-en-final.pdf ; https://relaisnordik.com/en/ ; https://relaisnordik.com/en/lits/ ; https://relaisnordik.com/en/manger-a-bord/ | Case-specific separate port passage,cargo and inclusive-cruise products,optional cabin/meals and intermediate reboarding; no tariff,capacity,food,room-life or general allocation coefficient adopted. |
| translink-schedules | official_guidance | TransLink Schedules and Maps,official public page accessed21October2026. https://www.translink.ca/schedules-and-maps/ | Actualcase rail,bus/trolley/shuttle andSeaBusnetworkconnections/predefinedtimetables;not actualcompletedN or universalquantity/route/eligibility for everyservice. |
| translink-seabus | official_guidance | TransLink SeaBus Schedules,official public page accessed21October2026. https://www.translink.ca/schedules-and-maps/seabus.aspx | Actualscheduledferry/waterbody/terminal andrail-landtransferinterface;no capacity,crossingtime,frequency,occupancy orfactor adopted. |
| translink-transfer | official_guidance | TransLink Transferring and AddFare,official public page accessed21October2026. https://www.translink.ca/transit-fares/transferring-and-addfare | Actualfaremedia-dependenttransferconditions showcommonfare/accessrights arenotphysicalcompletion;no universaltransferwindow,price orallocationadopted. |
