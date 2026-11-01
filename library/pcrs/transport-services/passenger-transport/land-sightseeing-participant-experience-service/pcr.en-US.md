---
pcr_id: pcr.land-sightseeing-participant-experience-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Land sightseeing participant experience service

## 1. Scope and Applicability

This PCR covers actual sightseeing passenger transport experiences by land except rail,including fixed itineraries and actual flexible participant service windows. The actual function is scenic/interpretive sightseeing delivered with passenger conveyance,not merely travel to a tourist destination. Bus is an example,not the whole scope;actual motor vehicles,human effort,animal conveyance and non-rail cable mechanisms retain their native branches. Actual other land configurations remain in scope with independently applicable evidence before data use.

The reference is one actual participant receiving one fulfilled declared sightseeing itinerary/service window. Declare the real activation,use,fulfilment,dates/days/routes/loops/stops,duration,quality and inclusions before counting. A flexible hop-on/off experience does not require an invented full circuit:actual repeated boardings,vehicles or legs are constituents,not extra final experiences. Tickets sold,unused passes,capacity and each boarding are not automatic completed-person counts.

All actual non-rail land sightseeing passenger products are retained;missing UUID,quantity,technology/species evidence or physical branch data is a readiness gap,not a silent product exclusion. Exclude rail,water and air sightseeing,ordinary A–B conveyance or whole-party transport-only charter,pure booking/assembly,standalone guiding/walking or bare rental/availability as final function. Actual guided/self-operated arrangements require their real provider/participant roles and passenger-sightseeing function review;do not classify by a marketing word or mechanically copy a bus-rental rule.

CPC64132 describes sightseeing land passenger transport except rail and gives buses as an example. This method retains that complete actual function and proposes exact mapping,subject to independent semantic review. A cable drive does not make a rail-guided funicular non-rail,and a scenic marketing name does not establish sightseeing classification. Pure guide/tour-assembly functions in adjacent CPC context remain distinct. Count and all algorithms here are authored PCR choices,not units prescribed by classification or product advertisements.

Keep actual included guides/commentary,digital/audio/headphone equipment,food/drinks,attraction entry,connections,safety and accessibility. Do not assume all tours include food/entry or exclude a real inclusion. Operating driver/guide/handler/attendant roles do not add participant outputs;children/infants have no assumed adult/seat equivalence. A complete purchased tour/guide/support result replaces its exact covered foreground once.

Include attributable supply,loaded/empty/positioning,waiting,unused-pass/unfulfilled,standby/test/rescue/failed duties,work support and all real vehicle/installation/path/site manufacture,rearing,maintenance,renewal and retirement gates. Animal resting/care periods and coupled cable system duties are not zero-load by assumption. No generic occupancy,tour duration,ration,calorie/labour fuel,animal species factor,asset life or emission/range factor is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.land-sightseeing-participant-experience-service |
| classification_refs | CPC3.0 64132;exact;actual land-except-rail passenger sightseeing function |
| covered_products | All actual land-except-rail sightseeing passenger experiences,fixed itinerary or flexible fulfilled participant service window,with actual mode/inclusions |
| excluded_products | Rail/water/air;ordinary transport-only charter or A-B conveyance;pure booking/assembly,standalone guide/walking or bare rental/availability function |
| representative_product | Fulfilled land sightseeing experience for one participant |
| production_route | Actual participant sightseeing fulfilment with motor/human/animal/nonrailcable duty,commentary/support/providers and lifecycle |
| market_state | Actual fulfilled itinerary/window with declared use/quality/inclusions,not simply a ticket sold |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fulfilled land sightseeing experience for one participant |
| How much | 1 actual participant fulfilment of the declared itinerary or service window |
| How well | Actual mode/route/window/activation/use/stops/commentary/quality/inclusions and fulfilment criterion |
| How long or cycle | Actual declared dates/days/loops/window and itinerary duration;not an assumed full loop or default tour hours |
| reference_flow_link | fulfilled_sightseeing_participant |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fulfilled land sightseeing experience for one participant |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual supplied sightseeing function and provider responsibilities; non-rail land mode/mechanism; fixed itinerary or actual flexible participant service window; activation/use/fulfilment criterion; actual dates/days/loops/stops/duration/quality; actual participants,drivers,guides,handlers and animal roles; actual included commentary/audio/food/attractions/connections; native carriers/vehicle/animal species/configuration and receiving gates; cohort/period and provider phase coverage; unused/empty/standby/failed duties; same-asset all-user lifetime; actual chemical/wetdry/CN/source/receiver/fates |

Declare required qualifiers in metadata or equivalent fields. Count actual fulfilled compatible participants once under actual fixed/flexible function;native guide/group/time/head/asset/feed quantities remain separate. N and numerator share actual cohort/period;no guessed activation,full-route requirement or free-child exclusion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| participant_count | reference product | Number of items | Item(s) | N is the positive actual fulfilled participant count for functionally compatible declared itineraries/service windows and period. Require actual activation/use/fulfilment evidence;do not force full-loop use or multiply N by repeated boardings. Materially different function,quality,days/window or inclusions require strata. Unused/unknown tickets are not guessed completed people. |
| native_interfaces | all inventory rows | Native compatible property | Actual native unit | Keep actual carrier,provider function,asset/reared animal count and biological quantities native. A guide session,group tour,vehicle-hour,installed system,head-day or kgfeed is not one participant experience. Convert only with independently proved actual equivalence;volume/mass requires compatible actual state/density;kWh uses verified3.6MJ/kWh. |
| biological_chemistry | all inventory rows | Native compatible property | Actual native unit | Preserve as-received/wet/dry feed and faeces/urine state,actual moisture and C/N composition,body stock and species mass versus kgC/kgN/CO2-equivalent. Keep actual origin,particle class and air/water/soil subcompartment;unknown receiver is not unspecified by default. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied passenger sightseeing function and native own/provider handover gates |
| starting_condition_role | Collection/coverage interface,not zero upstream,historic assets or animal care |
| product_classification_scope | CPC3.0 64132;exact;actual nonrail land passenger sightseeing |
| recursive_input_rule | Complete same-function purchased experience replaces covered constituents,expand missing cells only without extra final output |
| upstream_dataset_requirement | Actual compatible native function/quantity,state,technology/species,quality,period/geography,lifecycle and provider coverage;missing phase mandatory |
| disclosure | actual supplied sightseeing function and provider responsibilities; non-rail land mode/mechanism; fixed itinerary or actual flexible participant service window; activation/use/fulfilment criterion; actual dates/days/loops/stops/duration/quality; actual participants,drivers,guides,handlers and animal roles; actual included commentary/audio/food/attractions/connections; native carriers/vehicle/animal species/configuration and receiving gates; cohort/period and provider phase coverage; unused/empty/standby/failed duties; same-asset all-user lifetime; actual chemical/wetdry/CN/source/receiver/fates |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_experience | sightseeing_land | Start from the actual supplied passenger sightseeing itinerary/window and its activation/use/fulfilment,quality,inclusions and operator/participant roles. A scenic destination alone does not turn ordinary transport into sightseeing;actual included commentary/food/entry/connections remain in their real function. Separate merely arranged bookings,standalone guides and bare rental only at actual product boundaries. | unsd-land-sightseeing-2025 |
| provider_phases | sightseeing_land | Assign every actual activity,source,provider,body/asset,period and stage one owner. Complete purchased tour,transport,guide,audio/IT,food,attraction,animal-care,repair or treatment results replace their exact included foreground inputs/releases/capital once;expand missing cells only. Preserve native supplied units and supplied function,not invoice money or an internal transfer treated as a new purchase. | ghg-product-standard-2011 |
| motor_energy | sightseeing_land | Collect real fuel/grade/blend and traction/auxiliary source duties. Wholeblend input+composition/origin ledger OR actual physical components replacing matching blend coverage,never both. Supply,withdrawal,burn,spill,recovery/stock/transfer differ;emissions use evidenced actual source activity. Internal battery/regeneration and recovered heat are not new external supply;actual exports have one gate/owner and no second avoided-energy credit. | ipcc-mobile-combustion-2006 |
| human_roles | sightseeing_land | Actual human effort is not animal feed or fuel. Ordinary human subsistence is a disclosed method boundary,not a measured zero or a calorie/wage-to-emission factor. Assess actual dedicated work food/drink,PPE,safety and other support;participant food actually supplied in the experience remains included. Record actual human/electrical assistance rather than assume a pedicab name establishes propulsion. |  |
| animal_lifecycle | sightseeing_land | Actual animal species/age,working and resting head-time,ration/water,health/stabling/bedding and all users require records. Keep prior rearing/delivered animal coverage and current feed/care/manure periods exclusive:an inclusive lifetime provider replaces matching local care/releases,not another full-life load. Feed C/N/moisture,body stock,respiration/enteric releases,faeces/urine and actual fate must close physically;stocks/loss residuals are not invented emissions. Equid guidance and livestock context do not supply a generic all-species or cattle conversion. | ipcc-livestock-2019 |
| cable_coupling | sightseeing_land | For actual non-rail cable mechanisms collect the complete coupled system,directions,carriers,loads,station/drive/control/heating/standby/rescue/test and actual gross source energy across all users. Do not infer energy from nominal power,mgh,load proportion or net avoided electricity. Rope,gear/vehicles,towers/stations/site,controls/rescue,renewals and actual manufacture/operation/retirement gates remain independent. Rail-guided systems need their actual rail method rather than a name-based non-rail classification. | eu-cableway-interfaces-2016 |
| capital_and_fates | sightseeing_land | Delivered manufactured assets/installed systems cover only verified manufacture/installation/supply;reared-animal demand covers only evidenced rearing/delivery phases. Compatible same-asset all-user life allocates that native demand,not a full-life sightseeing identity. Complete uncovered original/replacement components/batteries/harness,path/site/infrastructure,repair and retirement once. Independently identify actual water,oil,animal/wash residues and each air/water/soil species/receiver;actual recycling/disposal/treatment,not regulatory permission or assumed zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sightseeing_land | Actual land sightseeing experience and assigned native lifecycle | required | Actual fulfilled participant function;physical route/provider examples only where actual | foreground | fulfilled_sightseeing_participant |

### Process: Land sightseeing experience (`sightseeing_land`)

#### Inputs

##### Product flows

###### Conditional actual diesel supply (`motor_diesel`)

Only actual compatible documented diesel grade/blend at supply gate. Wholeblend+origin ledger OR replacing physical component inputs are exclusive. Supplied/netwithdrawn/burned/spilled/recovered/transferred masses differ;other actual fuels need independent identities,not assumed diesel use.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_motor.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_motor`
- Sources: `ipcc-mobile-combustion-2006`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional supplied unleaded gasoline (`motor_gasoline`)

Only actual separately supplied unleaded motor gasoline with documented formulation/blend/carbon origin and gate. Not an assumption from car/Jeep branding. Apply wholeblend/component exclusivity and separate supply/withdrawal/burn/spill/recovery;actual leaded/other formulations need their own exchanges. Verified generic Gasoline identity is Mass-based and explicitly leaves grade/formulation/provider unspecified;it does not certify unleaded composition or a specific supply route,which actual foreground records must prove.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_motor.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_motor`
- Sources: `ipcc-mobile-combustion-2006`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual imported charging AC (`charging_ac`)

Actual compatible external AC at its charging meter,with losses only inside that gate. Record actual human/electrical assistance,conditioning and auxiliaries;internal battery discharge/regeneration is not another supply or nominal capacity consumption.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_motor.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_motor`
- Sources: `ipcc-mobile-combustion-2006`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual non-rail cable drive AC (`cable_drive_ac`)

Actual compatible gross imported AC for the complete coupled non-rail installation at the real supply boundary. Include actual all-user directions/carriers,drive/control/stations/standby as metered;do not split another gross total among directions or treat regeneration as second import/export credit.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_cable.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cable`
- Sources: `eu-cableway-interfaces-2016`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Uncovered tour/site support AC (`support_ac`)

Only actual compatible support/site/audio/dispatch electricity outside traction,charging,cable and complete-provider coverage. Meter before supported shared allocation;do not repeat provider-included power.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `ghg-product-standard-2011`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual supplied tour/support tap water (`support_tap_water`)

Only actual compatible supplied tap water for support/cleaning or actually supplied use. Not a bottled drink,river withdrawal or assumed washwater/evaporation;retain quality,state,stock/reuse and actual fate.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional actual animal drinking tap water (`animal_tap_water`)

Only actual compatible separately supplied animal drinking tap water,measured/reconciled as native mass. It is distinct from support cleaning water. Other sources need independent identities;do not infer intake,body retention,urine or evaporation from supply alone or apply a guessed volume-density conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: `woah-working-equids-2021`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional supplied synthetic detergent (`detergent`)

Actual compatible documented synthetic surfactant formulation only. Disinfectants,soaps,solvents,toiletries and other real chemicals are separate exchanges. A complete cleaning/maintenance provider replaces its included chemicals,water,energy and fates.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional supplied R134a (`r134a_supply`)

Only actual separately supplied single R134a with matching supplier composition/purity/native gate;no inferred purity threshold or virgin/reclaimed content. Original charge owned once;recharge is not leakage. Other refrigerants/blends/recovered mixtures need actual identities.

- Selected flow: Refrigerant, R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional reared working horse delivery (`working_horse`)

One actual live horse at documented age/health/service-entry gate with actual prior rearing coverage,native head count and compatible lifetime records. Not horse meat,horse transport or a complete lifetime animal-service result. Actual prehandover rearing and current feed/care/manure periods cannot overlap;inclusive provider phases replace matching local amounts. Other species remain in scope with their own identities/physiology evidence,not equid factors.

- Selected flow: Reared live working horse at service-entry handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `woah-working-equids-2021`; `ipcc-livestock-2019`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional actual supplied grass hay (`horse_grass_hay`)

Only actual separately supplied grass hay with plant composition,state,moisture/C/N and as-received native mass documented. Not all ration or kgdrymatter by assumption;actual grains/minerals/other feeds,grazing/own-feed production and losses need separate records/identities. No generic ration or species conversion.

- Selected flow: Grass hay at animal-feed delivery gate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: `woah-working-equids-2021`; `ipcc-livestock-2019`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional complete motor-coach manufacture (`motor_coach_supply`)

Only the actual complete configured asset/system with native delivered count and verified manufacture/installation/supply gate. It is not a full-life sightseeing/transport result. Match original components/battery/gear/civil works once,then same-asset all-user lifetime duty;independently complete uncovered operation,replacements,maintenance and retirement. A provider including fuel/direct emissions or other phases replaces matching local quantities. Other actual configurations have mandatory native expansion,not scope exclusion.

- Selected flow: Complete sightseeing motor coach at delivered manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard-2011`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional complete touring-car manufacture (`motor_car_supply`)

Only the actual complete configured asset/system with native delivered count and verified manufacture/installation/supply gate. It is not a full-life sightseeing/transport result. Match original components/battery/gear/civil works once,then same-asset all-user lifetime duty;independently complete uncovered operation,replacements,maintenance and retirement. A provider including fuel/direct emissions or other phases replaces matching local quantities. Other actual configurations have mandatory native expansion,not scope exclusion.

- Selected flow: Complete passenger touring car at delivered manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard-2011`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional complete passenger pedicab manufacture (`pedicab_supply`)

Only the actual complete configured asset/system with native delivered count and verified manufacture/installation/supply gate. It is not a full-life sightseeing/transport result. Match original components/battery/gear/civil works once,then same-asset all-user lifetime duty;independently complete uncovered operation,replacements,maintenance and retirement. A provider including fuel/direct emissions or other phases replaces matching local quantities. Other actual configurations have mandatory native expansion,not scope exclusion.

- Selected flow: Complete passenger pedicab at delivered manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard-2011`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional complete horse-drawn passenger carriage (`horse_carriage_supply`)

Only the actual complete configured asset/system with native delivered count and verified manufacture/installation/supply gate. It is not a full-life sightseeing/transport result. Match original components/battery/gear/civil works once,then same-asset all-user lifetime duty;independently complete uncovered operation,replacements,maintenance and retirement. A provider including fuel/direct emissions or other phases replaces matching local quantities. Other actual configurations have mandatory native expansion,not scope exclusion.

- Selected flow: Complete horse-drawn passenger carriage at delivered manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard-2011`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional complete non-rail aerial ropeway supply (`nonrail_cable_installation`)

Only the actual complete configured asset/system with native delivered count and verified manufacture/installation/supply gate. It is not a full-life sightseeing/transport result. Match original components/battery/gear/civil works once,then same-asset all-user lifetime duty;independently complete uncovered operation,replacements,maintenance and retirement. A provider including fuel/direct emissions or other phases replaces matching local quantities. Other actual configurations have mandatory native expansion,not scope exclusion.

- Selected flow: Complete non-rail aerial passenger ropeway installation at construction handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `eu-cableway-interfaces-2016`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional externally supplied live commentary session (`purchased_commentary`)

One actual externally supplied live commentary session with duration/language/quality,audience and native provider coverage recorded. It is not each participant,all guiding/audio equipment or the entire tour. A complete guide/transport/support result replaces exact covered constituent stages;own driver-guide work is not another purchased internal session. Actual native hours/group/other units need independently proved compatibility,not a forced Count equivalent.

- Selected flow: Completed live land sightseeing commentary session service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_providers.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_providers`
- Sources: `bigbus-dublin-product`; `centralpark-pedicab-product`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual fulfilled participant sightseeing experience (`fulfilled_sightseeing_participant`)

Exactly one actual participant fulfilment of the declared fixed itinerary or flexible service window with real activation/use/completion and actual quality/inclusions. No invented full-loop condition,repeated-boarding output or automatic sold/unused-pass completion. Actual materially different windows/functions are separate strata;partial/failed duties retain numerator rather than automatically become full fulfilment.

- Selected flow: Fulfilled land sightseeing experience for one participant
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_participants`
- Sources: `unsd-land-sightseeing-2025`; `bigbus-dublin-product`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

##### Waste flows

###### Actual separately collected used lubricating oil (`spent_oil`)

Actual separately collected petroleum-based used oil at generation before treatment. Keep composition/net mass;washwater,filters,grease and treatment are separate identities. Collection proves neither recycling nor disposal.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual collected vehicle/site washwater (`collected_washwater`)

One actual independent collected wash outlet with measured composition/native mass and receiver before treatment. Not supply-water difference or direct water emission;separately quantify recycling,stock,evaporation,oil/sludge and actual treatment coverage. Other actual physical outlets need their own exchanges.

- Selected flow: Collected liquid sightseeing-vehicle washwater at generation handover
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional separately collected horse faeces (`horse_faeces`)

Only actual independently collected horse faeces at measured wet mass/moisture/C/N and handover gate. It is not faeces+urine+bedding or assumed fertilizer/product/treatment;actual mixed manure stream needs its own real composition/native row without repeating these constituents.

- Selected flow: Separately collected horse faeces at stable handover
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: `ipcc-livestock-2019`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Conditional separately held horse urine (`horse_urine`)

Only actual distinct held horse urine liquid with native wet mass,water/C/N contents and real receiver. Not all animal wastewater or kgN alone. Actual co-collected manure,bedding,runoff or treatment are independently specified and replace matching constituents once.

- Selected flow: Separately collected horse urine at holding handover
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: `ipcc-livestock-2019`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

##### Elementary flows

###### Actual carbon dioxide (fossil) to air (`co2_fossil`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. This identity is air,unspecified.Use only with actual documented justification;known urban/nonurban/near-ground or other specific receiver requires separately verified compatible atomic identity,not collapse.Unknown receiver blocks completion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion-2006`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual methane (fossil) to air (`ch4_fossil`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. This identity is air,unspecified.Use only with actual documented justification;known urban/nonurban/near-ground or other specific receiver requires separately verified compatible atomic identity,not collapse.Unknown receiver blocks completion.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion-2006`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual nitrous oxide to air (`n2o`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. This identity is air,unspecified.Use only with actual documented justification;known urban/nonurban/near-ground or other specific receiver requires separately verified compatible atomic identity,not collapse.Unknown receiver blocks completion.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual particles (PM2.5) to air (`pm25`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. This identity is air,unspecified.Use only with actual documented justification;known urban/nonurban/near-ground or other specific receiver requires separately verified compatible atomic identity,not collapse.Unknown receiver blocks completion.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion-2006`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual HFC-134a to air (`r134a_air`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. This identity is air,unspecified.Use only with actual documented justification;known urban/nonurban/near-ground or other specific receiver requires separately verified compatible atomic identity,not collapse.Unknown receiver blocks completion.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `ghg-product-standard-2011`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual Biogenic carbon dioxide from actual animal respiration to air (`animal_respiration_co2`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. Preserve actual air medium/subcompartment and biogenic source;the verified biogenic identity is independent of the fossil counterpart. This verified identity is air,unspecified;use only when actual documented receiving scope justifies it.Known urban/nonurban/near-ground or other specific subcompartment requires separately verified compatible atomic identity;unknown receiving scope blocks completion.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: `ipcc-livestock-2019`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

###### Actual Biogenic methane from actual animal enteric release to air (`animal_enteric_ch4`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. Preserve actual air medium/subcompartment and biogenic source;the verified biogenic identity is independent of the fossil counterpart. This verified identity is air,unspecified;use only when actual documented receiving scope justifies it.Known urban/nonurban/near-ground or other specific subcompartment requires separately verified compatible atomic identity;unknown receiving scope blocks completion.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N fulfilled participants; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: `ipcc-livestock-2019`

Range evidence need: actual native function/quantity,state,provider/source/receiver and applicable method evidence mandatory;no universal range supplied.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_first | sightseeing_land | Subdivide dedicated actual participant/itinerary/provider resources first. Included repeated rides,commentary,entry or food are constituents,not extra final outputs. Native group-guide/session/vehicle services retain actual outputs without Count experience equivalence. Independent real products require real boundaries and reviewed allocation. |  |
| physical_shared | sightseeing_land | For residual common resources use demonstrated actual causal drivers across all products/users and aligned period. Actual distance,time,occupied exposure,animal work/rest support or coupled-system resource records may apply with evidence. Capacity,tickets,fare,equal group shares and assumed occupancy are not defaults;person-distance and tonne-distance cannot be added. | ghg-product-standard-2011 |
| unused_failure | sightseeing_land | Retain actual unused-pass/unfulfilled,empty/positioning,waiting,standby/test/weather/rescue and failed/partial resources in their evidenced causal pool. Unknown activation/use is not guessed completion. N=0 preserves numerator for boundary/period resolution and has no finite per-participant intensity. |  |
| delivered_phase_life | sightseeing_land | For each physical asset/system or animal,attributed delivered-phase demand=actual delivered native quantity times studied compatible duty/positive documented same-asset all-user total-life duty;then/N once. Record phase kind:manufacture/installation or prior rearing,not whole-life service. Life and duty must refer to the same physical cohort/compatible basis;animal resting/support periods and other real uses remain accounted. Independently add uncovered operating/care,renewals and retirement;no annual purchase,depreciation,wages or generic head-year factor. |  |
| recovery | sightseeing_land | Actual reused product,waste/treatment,retired whole object/components and external energy output retain distinct native gates and one ownership method. Do not double recovered oil/manure product and waste/provider treatment. No automatic avoided car,feed,fertilizer,virgin material or grid credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Fulfilment,normalization,capital/rearing allocation and physical bookkeeping below are explicitly authored PCR collection methods. Sources support only limited function/context/general principles in section11,not these exact equations.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_participants | sightseeing_land | Actual participant fulfilment | participant_itinerary_window_ledger | participant/windowID;actualsupplierfunction;mode/nonrailmechanism;fixed/flexitinerary;activation/use/fulfilment;dates/days/loops/stops/actualduration/quality;participants/driverguidehandlerroles;inclusions/providers;unused/partial/failed;period | Reconcile actual offers/activation/use and itinerary/fulfilment records. N=sum actual fulfilled functionally compatible participants for the declared fixed route OR real flexible service window;record actual days/loops/providers without forcing a full circuit. Repeated boardings/tickets/capacity/unused passes do not automatically create N. Unknown use remains unresolved and all unfulfilled resources stay in their causal pool. | Item(s);persons;days;h;km | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_motor | sightseeing_land | Actual powered vehicle energy | motor_fuel_meter_duty_ledger | vehicle/source/duty;actualgrade/blend/chemistry/carbonorigin;whole/componentrepresentation;supplied/stock/withdrawal/burn/spill/recovery/transfers;loading/empty/stops/wait/terrain;auxiliary/charging/ACDC/storage/regeneration/export;allusers/provider | Use actual reconciled fuel receipts/stocks,source meters and duty/terrain records. Wholeblend+origin ledger OR replacing physical components are exclusive;distinguish supply/withdrawal/burn/spill/recovery. Actual source activity—not nominal vehicle branding or supplied mass—supports emissions. Internal generation/storage/regeneration is not another imported supply. Attribute native quantities using evidenced all-user drivers,then/N once. | kg;kWh;nativevolume;km;h | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_cable | sightseeing_land | Actual coupled non-rail cable duty | coupled_nonrail_installation_ledger | actualmechanism/nonrailproof;installation/period;allcarriers/directions/users;grossmeter/drive/control/heat;loadedempty/standby/test/rescue/weather;imports/exports/regeneration;components/maintenance/provider | Collect actual whole coupled-installation supply and duty coverage;submeter only with reconciled total boundaries. All actual directions,emptycarriers,standby/rescue/testing and other users stay accounted. No nominal-power,mgh,load-proportion or automatic regenerative credit. Keep native component/manufacture/maintenance phase scope;assign justified all-user shares and /N once. | kWh;nativeunits;h;km | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_human | sightseeing_land | Actual human role and dedicated support | human_role_work_support_ledger | person/role;actualtask/effort/time;human/electricalassistconfiguration;ordinarysubsistenceboundary;actualdedicatedfood/drink/PPE/safety;includedparticipantfood;provider/phases/uncertainty | Record actual guide/driver/handler/participant roles and mechanism. Disclose ordinary-human-subsistence convention and assess actual dedicated work consumables/support with real supplier/quantity and sensitivity. No wage/calorie-to-fuel/emission factor or automatic equivalence to animal metabolism. Match actual included participant food;complete provider replaces its scope. Assign actual uncovered native quantities and /N once. | h;actualnativefood/supportunits | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_animal | sightseeing_land | Actual animal feed,body and releases | species_feed_body_fate_balance | actualspecies/head/age;working/restingtime/allusers;ration/state/asreceived/drymatter/moisture/CN;waterintake;bodyCNwaterstock;respiration/enteric;faeces/urine/bedding/mixing;health/stabling;receiver/treatment;rearing/currentfeedproviderperiods;uncertainty | Reconcile actual species-specific ration/purchases/grazing/stock,intake/body growth-loss,C/N/water and measured/modelled respiration/enteric/faeces/urine with independently applicable physiology. Retain work/rest/care and all user periods,no default cattle factors. Actual feed and wet/dry residues are not interchangeable;close documented balances without inventing residual releases. Keep prehandover rearing/provider phases exclusive from current feed/care/manure. Actual collected mixed manure replaces its same constituents;receiver/treatment and direct releases remain distinct. Assign evidenced native quantities and /N once. | head;head-time;kgasreceived;kgdrymatter;kgC;kgN;specieskg | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_support | sightseeing_land | Actual included tour support | guide_food_audio_site_support | actualinclusion/quality;commentary/audio/IT/headphones;food/drink/recipe/attraction/entry/connection;safety/accessibility/PPE;nativeproviderunit;water/chemical/energy/stock/waste;allusers/coverage | Read actual offer,inclusion/work/provider and meter/stock records. Each actual supplied food,commentary,audioequipment,attraction,connection,safety or support input retains concrete identity/native quantity and coverage. Included functions cannot be deleted;fees are not physical inputs. Complete provider/ingredient-energy-waste coverage are exclusive. Assign direct then evidenced shared uncovered native resources; /N once. | nativefunctions;kWh;m3;kg;Item(s) | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_providers | sightseeing_land | Actual complete provider scope | native_provider_replacement_matrix | actualprovidedfunction/nativeunit;quantity;session/group/time/participants;duration/language/audience/quality;ownvsprovider;personnel/transport/gear/energy/assets/material/waste/emissioncoverage;missingcells | Verify actual purchased function/native quantity and explicit phase replacement matrix. One live commentary session is not one participant or a complete group-tour output;hours/person-distance/asset services require separately justified exact equivalents,not forced Count. Complete result replaces its exact covered constituents;own driver-guide/internalservice not another purchase. Attribute uncovered native quantities and /N once. | actualnativeunits;Item(s)sessions;h | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_maintenance | sightseeing_land | Actual maintenance,refrigerants and used oil | maintenance_charge_material_ledger | asset/work;actualchemical/formulation/purity;originalfinalcharge;addedremovedrecovered/leakedmethod;lubricants/filters/oil/netwetdry;components/replacements;provider/treatment/receiver | Use actual monitored charge/material balances,work/stock and receiver records. Recharge is not leakage and unexplained loss is not automatically emission. Supplies,recovered products,collected wastes and real releases remain independent. Keep original/replacement and provider phases exclusive;complete actual missing chemicals/components/fates and /N once. | kg;nativeunits | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_assets | sightseeing_land | Actual delivered assets/reared animal phases | same_asset_delivered_phase_life | asset/animalcohort/configuration/age;deliverednativecount/gate/phase;priorrearingvsmanufacture/install;originalgear/battery;studiedcompatibleduty;positivealluserlifeduty;working/restsupport;forecast/otherusers;maintenance/renewal/retirement;providercoverage | Read actual supply/rearing,engineering/body history,duty/life and retirement records for the same physical cohort. Attributed delivered-phase demand=actual native amount times studied compatible duty/positive same-asset all-user complete-life duty;then /N once. Phase is manufacture/install OR documented pre-service rearing,not full-life service. Missing current operating/care/feed/releases,replacements,site/capital and retirement complete independently;inclusive provider phases replace matching local quantities. | Item(s);nativeunits;h;km;head-time | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_waste | sightseeing_land | Actual water,waste and receiver pathways | actual_outlet_receiver_ledger | actualsource/stream;suppliedwater/stock/reuse/evaporation;contents/wetdrymass;washwater/sludge/oil/bedding/residues;recoveredproduct;treatment/collection/directrelease;receiver/medium/subcompartment;provideroverlap | Measure each actual physical outlet and source with stock/receiver records. Supply differences do not establish waste;actual independent streams/fates stay separate. Actual co-collected mixture needs real measured composition,not a collector UUID. Treatment/collection/recovery and direct released species have distinct gates with one owner;unknown fate is not zero. Attribute native quantities and /N once. | m3;kgwet;specieskg;nativeunits | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |
| cp_emissions | sightseeing_land | Actual species and receiving scope | actual_species_source_medium | actualsource/phase;fuel/animal/chemistry/technology/control;actualburn/feedbodyactivity;model/factororiginversion/nativebasis;specieskg/CN/CO2eq;fossilbiogenic;particle;receiver/airwater soilsubcompartment;provider/sizeoverlap;uncertainty | Measure actual releases or use independently supported applicable species/technology/fuel/control/activity methods with explicit scope/basis. Species mass is not C/N/CO2-equivalent,and supplied fuel/feed or recharge does not establish release. Retain known receiver specificity and justify unspecified air;separate nonoverlapping particle/manure/enteric/respiration/provider stages. Aggregate compatible actual quantities and /N once;missing actual species/source/receiver blocks completion. | kgofeachactualspecies | Each actual event/window/provider/meter;cohort reconciliation | Actual aligned cohort/period and same-asset life interfaces | Actual applicable native route/provider/source cells,all users reconciled | per declared reference flow | Original actual records,native identity/method/receiver proof,coverage/calibration,closure and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_participants | all inventory rows | Attribute actual compatible native quantities to the functionally consistent fulfilled participant cohort with direct/justified shared coverage,then divide once by positive actual N. Do not also divide by tickets,boardings,loops,occupancy,guide groups or head-time to invent another reference. | cp_participants;cp_motor;cp_cable;cp_human;cp_animal;cp_support;cp_providers;cp_maintenance;cp_assets;cp_waste;cp_emissions | native quantity per1Item(s) fulfilled participant |  |
| delivered_phase_equivalence | working_horse;motor_coach_supply;motor_car_supply;pedicab_supply;horse_carriage_supply;nonrail_cable_installation | For each physical asset/system or animal,attributed delivered-phase demand=actual delivered native quantity times studied compatible duty/positive documented same-asset all-user total-life duty;then/N once. Record phase kind:manufacture/installation or prior rearing,not whole-life service. Life and duty must refer to the same physical cohort/compatible basis;animal resting/support periods and other real uses remain accounted. Independently add uncovered operating/care,renewals and retirement;no annual purchase,depreciation,wages or generic head-year factor. | cp_assets;cp_participants;cp_animal;cp_cable | actual manufacture/install or prior-rearing native equivalents per reference |  |
| animal_physical_balance | working_horse;horse_grass_hay;animal_tap_water;horse_faeces;horse_urine;animal_respiration_co2;animal_enteric_ch4 | Actual animal species/age,working and resting head-time,ration/water,health/stabling/bedding and all users require records. Keep prior rearing/delivered animal coverage and current feed/care/manure periods exclusive:an inclusive lifetime provider replaces matching local care/releases,not another full-life load. Feed C/N/moisture,body stock,respiration/enteric releases,faeces/urine and actual fate must close physically;stocks/loss residuals are not invented emissions. Equid guidance and livestock context do not supply a generic all-species or cattle conversion. | cp_animal;cp_assets;cp_waste;cp_emissions | actual C/N/water/body/species and source/fate reconciliation before normalization |  |
| supplemental_exposure | sightseeing_land | Record actual dates/window days,loops,participant/vehicle distance,guide sessions/hours,animal head-time and coupled-system duties independently. Supplemental exposure does not replace actual fulfilled participant N or any purchased provider native unit. | cp_participants;cp_motor;cp_cable;cp_human;cp_animal;cp_providers | supplemental actual exposure only |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_fulfilment | fulfilled_sightseeing_participant | Require actual supplied passenger sightseeing function,nonrail mode,itinerary OR real flexible window,activation/use/fulfilment,actual dates/days/loops/quality/inclusions,roles and positive compatible N. No forced full circuit,ticket/boarding/unusedpass=completion or guessed participant data. Unknown actual function/use blocks completed-experience data production. | cp_participants |
| actual_motor | motor_diesel;motor_gasoline;charging_ac | Each actual carrier/grade/blend/traction/auxiliary,ACDC/charging/export needs independent concrete native identity/amount/technology/coverage. Wholeblend+ledger OR replacing components exclusive;supply/withdrawal/burn/spill/recovery distinct;internal storage/regeneration not new supply. Other real motor configurations stay in scope with actual evidence. | cp_motor |
| actual_cable | cable_drive_ac;nonrail_cable_installation | Prove real sightseeing/nonrail mechanism and complete coupled drive/directions/empty/standby/rescue/test/weather/all-user scope. Complete rope/gear/carrier/station/tower/control/rescue/site original/renewal/retirement native exchanges and actual source/receiver quantities. No cable-name classification,mgh/load-proportion/default power or regenerative credit. | cp_cable;cp_assets |
| actual_human | support_tap_water;support_ac;purchased_commentary | Record actual driver/guide/handler/participant roles and human/electrical assistance. Disclose ordinary human subsistence convention,assess real dedicated work food/drink/PPE/safety and included participant food/providers;no wage/calorie-to-fuel factor or presumed zero actual support. Each actual input requires native identity/quantity/coverage. | cp_human;cp_support |
| actual_animal | working_horse;horse_grass_hay;animal_tap_water;horse_faeces;horse_urine;animal_respiration_co2;animal_enteric_ch4 | Every actual animal species/cohort,use/rest,ration/ingredient/state/moisture/CN/water/body-stock and care/stable/bedding/source/receiver needs independent applicable identity/native quantity and physical balance. Examplehorse/hay is not allspecies/feed. Complete prior-rearing/current-feed provider nonoverlap and actual respiration/enteric/manure/urine/treatment states;unknown source/fate is not zero,no cattle factor or drywet/kgN shortcut. | cp_animal;cp_assets;cp_waste;cp_emissions |
| actual_support | purchased_commentary;support_tap_water;detergent;support_ac | Expand each actual included commentary/audio/headphone/digital/IT,food/drink/recipe,entry/attraction/connection,safety/accessibility or work support as concrete native services/inputs. Actual inclusions not deleted,not universally assumed. Complete provider replaces exact personnel/transport/gear/energy/material/waste/capital cells;fees are not activities. | cp_support;cp_providers |
| actual_capital | motor_coach_supply;motor_car_supply;pedicab_supply;horse_carriage_supply;nonrail_cable_installation;working_horse | Complete actual configured manufactured assets/installation and reared-animal delivery phases separately,with positive same-asset all-user complete-life duty and uncertainty. Cover missing original/replacement battery/gear/harness,road/path/site/infrastructure,care/maintenance and retirement once. No full-life UUID or duplicate prior-rearing/current feed/manufacture/wholecomponent coverage. | cp_assets;cp_animal |
| actual_fates_species | spent_oil;collected_washwater;horse_faeces;horse_urine;co2_fossil;ch4_fossil;n2o;pm25;r134a_air;animal_respiration_co2;animal_enteric_ch4 | Every actual waste,wastewater,faeces/urine/bedding mixture,filter,sludge,retired asset/component,food/packaging and chemical/substance/particle/receiver requires separate concrete native state/amount,source/recipient/treatment responsibility. Actual mixtures measured;unrelated wastes never collapsed. Retain actual wetdry/CN/species and known receiving specificity;unknown is not zero or automatic unspecified air. | cp_animal;cp_waste;cp_maintenance;cp_emissions;cp_assets |
| atomic_completion | all inventory rows | Each actual expansion carries unique row_id,one actual process,direction/type,verified concrete UUID or registered unresolved identity,native property/unit/real amount,source/provider/recipient gate and a valid same-parent CP linked to its triggering requirement_id. Actual non-use/provider inclusion needs affirmative evidence. Missing identity/quantity/coverage/fate blocks complete downstream use,no guessed range or optional deletion. | all declared collection protocols |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_and_window | sightseeing_land | One CountItem(s) is one actual fulfilled sightseeing participant under declared itinerary/window,use/fulfilment,quality/inclusions and positive compatible N. No forced full-loop or ticket/boarding/capacity/unusedpass equivalent. |  |
| real_mode_scope | sightseeing_land | Real land-except-rail sightseeing function retains actual motor/human/animal/nonrailcable native branches;not bus-only or name-based. Missing quantities/UUID/source is readiness,not hidden product exclusion. Standalone guiding/booking/availability,rail/water/air or ordinary conveyance is not relabelled. |  |
| closure_and_ownership | sightseeing_land | Wholeblend/components,supply/stock/burn/spill/recovery,internalenergy/export,provider/owned stages,animal feed/body/water/CN/respiration/faeces/urine and actual water/waste/refrigerant/species receivers reconcile without overlap,residual invention or guessed factor. |  |
| lifetime_and_native | sightseeing_land | Manufacture/install and prior rearing are actual delivered-phase gates,not full-life service. Same physical asset/all-user life and study duty match;missing current use/care,renewals/retirement complete once. Native guide-session/group/hour/head-time/persondistance inputs remain distinct from final participant reference. |  |
| unused_and_failure | sightseeing_land | Unused/unfulfilled,empty,positioning,waiting,rest/care,standby/test/rescue/weather/partialfailed resources remain in evidenced all-user pools. N=0 has no finite intensity. Actual participants/guide/driver/handler/animals and human-assist configuration remain real,no capacity/adult-equivalence defaults. |  |
| atomic_projection | sightseeing_land | Every CP process_id equals exactly one existing processInventory.id,and each card CP exists at its own parent. Match bilingual ordered IDs,native units,modes,UUIDs,source rules and projection fingerprints. Actual missing identity/quantity/source/fate blocks complete use;checker pass is not identity proof/publication approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only after mandatory actual native identities,quantities,coverage,fates and functional review are complete |
| allowed_use | Actual land-except-rail sightseeing participant itinerary/service window at declared real use/quality/inclusions and native mode/lifecycle |
| excluded_use | Generic transport/ticket/boarding/availability/full-loop factor;rail/water/air or guide-only/rental relabelled;unmodelled animal/cable/food/guide/provider or native-fate gaps |
| required_metadata | actual supplied sightseeing function and provider responsibilities; non-rail land mode/mechanism; fixed itinerary or actual flexible participant service window; activation/use/fulfilment criterion; actual dates/days/loops/stops/duration/quality; actual participants,drivers,guides,handlers and animal roles; actual included commentary/audio/food/attractions/connections; native carriers/vehicle/animal species/configuration and receiving gates; cohort/period and provider phase coverage; unused/empty/standby/failed duties; same-asset all-user lifetime; actual chemical/wetdry/CN/source/receiver/fates |
| required_quality_disclosure | Actual activation/use/fulfilment uncertainty and strata;mode/roles/provider matrix/native quantities;animal physiology/rearing-currentfeed and all-user life;unused/failed pools;source/receiver/fates and allocation limits |
| update_trigger | Changed actual function/window/use/route/days/loops/quality/inclusions,mode/provider/animal species/mechanism,source/fate/life or fulfilment method |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-land-sightseeing-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,p36164132 and neighbouring modes;p46085961/85962. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual land-except-rail sightseeing passenger function,bus example and standalone guide/arrangement context only;no Count,completion or formula prescribed. |
| bigbus-dublin-product | handbook | Big Bus Tours,Dublin Help and FAQs,actual full official product content read2026-10-21. https://www.bigbustours.com/en/dublin//help | Operator-specific flexible/repeated boarding,commentary,activation/date/inclusion and private-hire distinctions;not a universal full-loop,food,duration/occupancy/factor rule. |
| pinkjeep-scenic-product | handbook | Pink Adventure Tours,Broken Arrow,actual full official product content read2026-10-21. https://www.pinkadventuretours.com/sedona-tours/broken-arrow | Actual guided scenic/offroad car,stops and altered/cancelled duties illustrate route collection;no price,capacity,time,roughness or emission factor adopted. |
| nps-cades-cove-rides | official_guidance | US National Park Service,Cades Cove Riding Stables,actual page read2026-10-21. https://www.nps.gov/places/cades-cove-riding-stables.htm | Actual offered horse/carriage/hayride route examples only,no default animal physiology,ration/life/occupancy or all-species factor. |
| centralpark-pedicab-product | handbook | CentralPark.org,Tours,actual provider/visitor product page read2026-10-21. https://centralpark.org/divi_mega_pro/tours/ | Narrated pedicab tour versus separate bicycle rental illustrates function/role review. Not an official park-authority source or proof of no electric assistance,numerical factors or capacity. |
| woah-working-equids-2021 | official_guidance | WOAH Terrestrial Animal Health Code,Chapter7.12 Welfare of working equids,actual PDFedition19July2021,Articles7.12.2 and7.12.6–13. https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/chapitre_aw_working_equids.pdf | Qualitative equid care/feed/water/rest/workload context,not globally latest-edition claim,welfare certification,numerical diet/life or universal animal factor. |
| ipcc-livestock-2019 | official_guidance | IPCC2019Refinement,Vol4Ch10Livestock and Manure Management,§10.1–10.5. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Species/feed and enteric/manure,C/N distinctions only;no cattle/default headyear/ration factor or national netCO2 convention used to erase physical respiration. |
| eu-cableway-interfaces-2016 | standard | EU2016/424 as adopted9March2016,AnnexI andAnnexII technical interfaces. https://www.legislation.gov.uk/eur/2016/424/annexes/adopted?view=plain | Dated cableway component/drive/standby/rescue interfaces only,not current/extraterritorial legal requirements,automatic sightseeing classification or energy/life factors. |
| ipcc-mobile-combustion-2006 | official_guidance | IPCC2006Guidelines,Vol2Ch3MobileCombustion,§3.2. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Fuel/activity/technology/control/carbon-origin context;no generic road factor or national inventory cutoff transplanted to complete tour lifecycle. |
| ghg-product-standard-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011,Ch6–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General function/boundary/data and subdivision/justified physical allocation;expanded capital,rearing,human boundary and fulfilment/duty equations are explicit PCR methods,not prescribed factors. |
