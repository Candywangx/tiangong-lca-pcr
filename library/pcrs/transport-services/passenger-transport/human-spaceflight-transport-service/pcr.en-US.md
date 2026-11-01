---
pcr_id: pcr.human-spaceflight-transport-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Human spaceflight transport service

## 1. Scope and Applicability

This PCR covers one actual person receiving fulfilled transport to,from or in outer space. Declare actual endpoint/state,trajectory/orbit,duration and quality,a transport segment or one integrated transport itinerary,and included safety/return/recovery responsibilities. Actual capsule chemical-liquid/solid rocket and winged air-launched hybrid branches are assessed; other actual same-function configurations require their own complete physical/native evidence,not exclusion merely for missing UUID/data. Vehicle structure alone does not create another transport function,and capsule parameters cannot be copied into other routes.

Astronauts called crew by NASA can be the transported recipients. Piloting,monitoring,research duties,employment or a crew label do not automatically remove them from completions. Evidence actual recipient,operation-only support and dual roles; count the same fulfilled person-transport function once. Carrier-only pilots do not automatically become space-transport recipients.

Before aggregation fix the actual transport segment or whole transport itinerary and compatible endpoint/quality grouping. Launch,an altitude crossing,stage separations,coast,docking,return and recovery may be internal duties,not each another completed person unit. Separate real segment/loop completion rules or justify a transparent observed mix. No universal100km boundary,occupancy,success probability,duration,propellant ratio,metabolic rate,reuse lifetime or emission range is supplied. N=0 gives no finite reference intensity while retaining causal burdens.

Exclude seat/ticket/booking-only products,uncrewed freight,vehicle availability/rental,ground/air-only transport,and whole station-stay,science/exploration or tourist/hospitality packages. Extract this transport component from a whole package only with real product subdivision and coverage evidence; actual included training,medical,ECLSS,hospitality or keepsakes cannot be erased. Complete actual carrier/launcher/stage/capsule/ECLSS/ground/recovery manufacture and full life. Owned internal stages are not purchased results; actual completed external results replace only exact covered cells.

Preserve phase-specific chemical/particle identity and known atmospheric-layer,outerspace,water or soil receiver. Do not rebind known high-altitude/space releases to ground-air-unspecified to obtain LCIA characterization. Unknown physical quantity/fate and missing characterization factors remain separate disclosed gaps,not zero.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.human-spaceflight-transport-service |
| classification_refs | CPC3.0 64250;exact actual human-space passenger transport |
| covered_products | Actual fulfilled person transport to/from/in outerspace,including actual capsule,winged/airlaunch and evidenced other same-function configurations |
| excluded_products | Ticket/seat/availability only,uncrewed freight,ground/air-only carriage,whole station/science/exploration/tourist-hospitality package |
| representative_product | Completed declared human spaceflight transport |
| production_route | Actual transport fulfilment;carrier/stage propulsion;ECLSS/ground/recovery;all-asset life and phase-specific species/fates |
| market_state | Completed transport with actual recipient-role,endpoint,quality and included-scope evidence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed declared human spaceflight transport |
| How much | 1 actual recipient completing declared human-space transport |
| How well | Actual endpoint/state/trajectory/orbit/duration/quality,recipient role and included return/recovery/safety provisions |
| How long or cycle | Declared transport beginning through agreed completed handover,all required internal stages included;asset life separate |
| reference_flow_link | completed_person_transport |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed declared human spaceflight transport |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_transport_function;recipient_roles_dualroles;endpoint_state;trajectory_orbit_phase_altitude;duration_quality;segment_or_integrated_itinerary_grouping;actual_completion_attempt_abort;mission_period;carrier_launcher_stages_capsule_winged_configuration;included_training_ECLSS_medical_hospitality_return_recovery;cargo_research_otherfunctions;provider_native_gate_coverage;actual_propellant_formulation_phase_stocks_burn_vent_return;asset_native_manufacture_alluser_life;actual_species_particle_form_receiver_known_compartment;physical_inventory_and_LCIA_gaps |

Declare required qualifiers in package metadata,process notes,reference-flow comment or equivalent; missing qualifiers make the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| person_count | completed_person_transport | Number of items | Item(s) | N counts actual compatible fulfilled transported-person functions,not crew-label exclusion,stage/launch count or an altitude threshold. |
| native_asset_count | launcher_first_stage;launcher_upper_stage;transport_capsule;service_trunk;carrier_aircraft;winged_spaceplane | Number of items | Item(s) | Actual delivered native manufacture count times same-asset useful-life share;no mass-to-count relabel or full-life service fiction. |
| chemical_native_mass | rocket_kerosene;liquid_oxygen;liquid_hydrogen;hybrid_fuel_grain;n2o_oxidizer;mmh_fuel;nto_oxidizer;release_fates | Mass | kg | Preserve substance/mixture,phase,molecule/element and receiving stage/medium;kgN/kgC is not compoundkg,and density/heating value needs real compatible support. |
| native_energy_water | ground_ac;ground_tap_water | Energy;Volume | kWh;m3 | Use actual attached native kWh/tapwaterm3 support;AC/DC/internal transfers separate,no other-liquid density or universalrocket-energy assumption. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual transport agreement/recipient roles and supply/asset/stage handovers |
| starting_condition_role | Accountability interface,not zero upstream/manufacture history |
| product_classification_scope | 64250 actual to/from/in-space person transport;physical branch evidence gates do not make missing data a semantic exclusion |
| recursive_input_rule | Link only actual externally completed concrete functions at native demand/exact coverage;owned internal stage/carrier/ECLSS duties are not extra purchases |
| upstream_dataset_requirement | Verify native state/grade/quantity/stages/provider coverage for each real chemical,energy,material,asset,support and recovery input |
| disclosure | Endpoint/quality/role/mission/segment-itinerary,all actual inclusions/stages/vehicles/providers/life/allocation,species/layer/fate and characterization gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| function_and_role | transport_delivery | Include actual completed transport function and its agreed endpoints,quality,duration and safety/recovery inclusions. NASA astronauts labelled crew can be the delivered recipients even when monitoring/piloting or conducting research. Evidence actual recipient,operation-only and dual roles; salary/crew label alone cannot remove all astronauts from N or create two outputs for one person. Carrier-only pilots are not automatically transported space recipients. | nasa-crew-kit;virgin-performed |
| segment_and_package | transport_delivery;life_support;ground_support | Fix actual segment or one integrated transport itinerary and compatible endpoint/quality before aggregation. Ascent,coast,dock,return and recovery may be constituent duties,not extra completions. Transport-required standby/docking,ECLSS,training,medical and actual included amenities remain complete. A whole station stay,research/exploration or tourist/hospitality package is a distinct function; separate a transport component only with real subdivision/coverage,not by erasing inclusions. | nasa-crew-kit;virgin-brochure |
| native_stage_coverage | all_processes | Close recipient-to-mission-to-stage/vehicle/site/provider/phase coverage. Use actual completed compatible external transport/launch/support result plus only uncaptured cells OR owned physical inputs and uncovered external stages. Provider-included propellant,use release,asset manufacture or recovery replaces that exact foreground cell,never coexists. Internal stage separation,mated carrier release and energy transfers are not extra purchased functions. |  |
| actual_route_branches | stage_operation;carrier_operation;recovery | For capsule branches own actual booster/upperstage/capsule/trunk,abort,docking,standby,parachute/splashdown or land recovery. For winged air launch own mated climb/release,carrier return,hybrid motor,feather/glide/runway/taxi and ground duties. Actual other same-function configurations need complete route-specific physical/native/owner evidence,not copied capsule factors or a product exclusion caused by missing data. | nasa-crew-kit;virgin-facts;virgin-brochure;blue-engines |
| whole_lifecycle | vehicle_lifecycle;ground_support;recovery | This PCR requires native manufacture plus actual delivery,qualification/refit,maintenance,consumables/replacements,recovery and retirement for all attributable stages/capsule/carrier/spaceplane/suits,ECLSS,pad/runway/hangar/missioncontrol and recovery assets. Manufacture-only UUID cannot become a full-life service. Verify whole-object/original component coverage; actual expended stage/trunk/fuel-cartridge and replaced heatshield are owned once. |  |
| conditioning_and_provisions | stage_operation;life_support;ground_support | Include actual fuel/oxidizer/pressurant/purge/cryogenic conditioning,ground deluge/cleaning,air/cabin/suit/food/water/hygiene and thermal/CO2-control resources and all fates. Personal off-duty ordinary subsistence outside this delivered system is an explicit disclosed PCR convention with sensitivity; this does not delete training,onboard/included hospitality or operational provisions,or treat food as labour fuel by default. | nasa-eclss-2017;nasa-reactive;virgin-brochure |
| receiving_environments | release_fates;recovery | Keep actual chemical species/particle form,phase,trajectory/time and receiving troposphere,stratosphere,other atmospheric layers,outer space,water or soil. No blanket ground-air-unspecified binding,no kg alloy-as-emitted compound or collected waste-as-atmospheric-release. Actual plume/vent/ablation/debris mass and chemical conversion/fates require evidence; uncharacterized physical flows stay inventoried with explicit LCIA limitations. | noaa-reentry-2023 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| transport_delivery | Transport fulfilment and recipient roles | required | actual delivered compatible human-spaceflight function | reference_process | completed_person_transport |
| stage_operation | Stage propulsion and spacecraft manoeuvre | conditional | actual owned/uncovered launcher or spacecraft physical duties | support_process | completed_person_transport |
| carrier_operation | Air-launch carrier operation | conditional | actual air-launched branch and carrier support | support_process | completed_person_transport |
| life_support | Cabin,suit and transport life support | required | actual attributable recipient/support provisions | support_process | completed_person_transport |
| ground_support | Ground,site,control and programme support | required | actual uncovered ground/organisation/site responsibilities | support_process | completed_person_transport |
| vehicle_lifecycle | Transport vehicles and full remaining asset lifecycle | required | actual attributable vehicles,stages and other assets | support_process | completed_person_transport |
| recovery | Landing,recovery and collected residues | conditional | actual return/landing/recovery and residue ownership | support_process | completed_person_transport |
| release_fates | Phase-specific direct releases and external fates | required | actual species/medium/trajectory inventory and characterization limits | support_process | completed_person_transport |

All nodes share the final actual person-transport reference;internal stages/carrier do not create extra completions. Use each card only when actually occurring and not covered by a complete provider;other real objects require mandatory section8 atomic expansion.

### Process: Transport fulfilment and recipient roles (`transport_delivery`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed declared human spaceflight transport (`completed_person_transport`)

One actual person receiving the completed declared transport function to,from or in outer space,under actual endpoints,trajectory/orbit,state,quality and included safety/recovery obligations. Declare a segment or one evidenced integrated transport itinerary before aggregation; constituent launch/coast/dock/return phases are not extra final units. Tickets,seats,launches,crew labels,payload mass,station days or an altitude crossing alone are not this fulfilment.

- Selected flow: Completed declared human spaceflight transport
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `un-cpc3-2025`, `nasa-crew-kit`

##### Waste flows

##### Elementary flows

### Process: Stage propulsion and spacecraft manoeuvre (`stage_operation`)

#### Inputs

##### Product flows

###### Rocket-grade kerosene supplied before stage loading (`rocket_kerosene`)

Actual documented rocket-grade kerosene before loading; retain formulation,grade,provider gate and carbon origin. Road diesel/jet fuel/refinery intermediate is not proof of this supply. Use actual whole delivered formulation plus composition ledger OR substituting component supplies replacing exact supply/upstream cells,never both.

- Selected flow: Rocket-grade kerosene supplied before stage loading
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual required net supplied kg after delivered/loaded/stock/use/loss/recovery closure /N; cp_stage. No purchased=burned,perfect combustion or universal stoichiometric emission assumption.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stage`
- Sources: `nasa-crew-kit`

###### Liquid oxygen supplied at cryogenic loading handover (`liquid_oxygen`)

Actual oxygen in liquid cryogenic state for a declared stage; actual purity,temperature,conditioning/loading gate and upstream liquefaction/transport/loss coverage. Not gaseous cabin oxygen or atmospheric uptake. Use actual whole delivered formulation plus composition ledger OR substituting component supplies replacing exact supply/upstream cells,never both.

- Selected flow: Liquid oxygen supplied at cryogenic loading handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual required net supplied kg after delivered/loaded/stock/use/loss/recovery closure /N; cp_stage. No purchased=burned,perfect combustion or universal stoichiometric emission assumption.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stage`
- Sources: `nasa-crew-kit`, `blue-engines`, `nasa-reactive`

###### Liquid hydrogen supplied at cryogenic loading handover (`liquid_hydrogen`)

Actual cryogenic liquid hydrogen with purity,production pathway,liquefaction/loading gate and boil-off ownership; not generic gaseous hydrogen. Hydrogen fuel does not imply zero upstream,water,other emissions or lifecycle burden. Use actual whole delivered formulation plus composition ledger OR substituting component supplies replacing exact supply/upstream cells,never both.

- Selected flow: Liquid hydrogen supplied at cryogenic loading handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual required net supplied kg after delivered/loaded/stock/use/loss/recovery closure /N; cp_stage. No purchased=burned,perfect combustion or universal stoichiometric emission assumption.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stage`
- Sources: `blue-engines`

###### Formulated HTPB solid hybrid-rocket fuel grain at supply handover (`hybrid_fuel_grain`)

Actual supplied formulated hydroxyl-terminated-polybutadiene fuel grain,with measured composition/additives and cured state. Not generic polymer resin or whole motor/cartridge. A completed fueled cartridge OR replacing fuel-grain/casing/manufacture cells must be exclusive with mass/provider closure. Use actual whole delivered formulation plus composition ledger OR substituting component supplies replacing exact supply/upstream cells,never both.

- Selected flow: Formulated HTPB solid hybrid-rocket fuel grain at supply handover
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual required net supplied kg after delivered/loaded/stock/use/loss/recovery closure /N; cp_stage. No purchased=burned,perfect combustion or universal stoichiometric emission assumption.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stage`
- Sources: `virgin-facts`

###### Dinitrogen monoxide (`n2o_oxidizer`)

Actual N2O oxidizer product before motor loading,with actual phase,purity,temperature,pressure and gate verified; not nitrogen tetroxide or nitrogen-mass basis. Product kg does not equal atmospheric N2O release: burned,decomposed,vented,recovered and residual stocks differ. Use actual whole delivered formulation plus composition ledger OR substituting component supplies replacing exact supply/upstream cells,never both. The selected native N2O product is production mix at plant,with compressed/liquefied supply described and a named standard in its record. This is not proof of actual oxidizer-grade certification,formulation or loading conditions. Verify actual compatible pure chemical,phase,purity,pressure/temperature and supplier scope; bridge actual receipt/loading to the manufacturing gate,owning separate transport,storage,conditioning/loading losses and missing stages. Incompatible grade/formulation requires its own identity. N2Oproduct never substitutes the atmospheric N2Orow.

- Selected flow: Dinitrogen monoxide `ccc8e2c1-73c9-4d97-b7ef-67197790abd5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual required net supplied kg after delivered/loaded/stock/use/loss/recovery closure /N; cp_stage. No purchased=burned,perfect combustion or universal stoichiometric emission assumption.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stage`
- Sources: `virgin-facts`, `nasa-reactive`

###### Monomethylhydrazine propellant supplied before spacecraft loading (`mmh_fuel`)

Conditional actual MMH chemical propellant with documented actual grade/composition and loading handover. NASA compatibility-source listing is not proof a particular mission uses this grade. Hydrazine,UDMH,Aerozine mixtures and fuel-containing cartridge are different identities. Use actual whole delivered formulation plus composition ledger OR substituting component supplies replacing exact supply/upstream cells,never both.

- Selected flow: Monomethylhydrazine propellant supplied before spacecraft loading
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual required net supplied kg after delivered/loaded/stock/use/loss/recovery closure /N; cp_stage. No purchased=burned,perfect combustion or universal stoichiometric emission assumption.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stage`
- Sources: `nasa-reactive`

###### Nitrogen tetroxide oxidizer supplied before spacecraft loading (`nto_oxidizer`)

Conditional actual nitrogen tetroxide product with actual chemical formulation,phase and loading gate. Mixed oxides of nitrogen MON formulations require their own identity; do not treat every oxidizer as pureN2O4 or as N2O. Actual spacecraft use must be independently evidenced. Use actual whole delivered formulation plus composition ledger OR substituting component supplies replacing exact supply/upstream cells,never both.

- Selected flow: Nitrogen tetroxide oxidizer supplied before spacecraft loading
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual required net supplied kg after delivered/loaded/stock/use/loss/recovery closure /N; cp_stage. No purchased=burned,perfect combustion or universal stoichiometric emission assumption.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stage`
- Sources: `nasa-reactive`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Air-launch carrier operation (`carrier_operation`)

#### Inputs

##### Product flows

###### Kerosene-type jet fuel (`carrier_turbine_fuel`)

Conditional actual compatible aviation turbine kerosene supplied to the carrier,with actual grade,blend,carbon origins and supplier gate. Carrier turbofans do not establish a universal fuel grade or fossil fraction; noncompatible real fuel needs its own identity. Use actual whole delivered formulation plus composition ledger OR substituting component supplies replacing exact supply/upstream cells,never both. The selected native identity is finished manufactured kerosene-type jet fuel at plant,not delivered-to-aircraft service. Bridge actual carrier receipt/loading to that plant gate; separately own every missing transport,storage,loading/conditioning loss and provider stage. Actual grade,blend and carbon-origin compatibility must be verified; it is not rocket-grade kerosene or an approval/certification claim.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual required net supplied kg after delivered/loaded/stock/use/loss/recovery closure /N; cp_carrier. No purchased=burned,perfect combustion or universal stoichiometric emission assumption.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carrier`
- Sources: `virgin-facts`, `virgin-brochure`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Cabin,suit and transport life support (`life_support`)

#### Inputs

##### Product flows

###### Gaseous oxygen supplied to the cabin-life-support interface (`eclss_oxygen`)

Actual compatible gaseous oxygen supply with actual breathing quality,pressure and delivery/ECLSS gate; liquid oxygen,compressed mixed breathing air and internal recycled oxygen are distinct. Supplier quantities,loaded stock,recycle,consumption,wastewater/vent/recovered/residual fates must close; no universal metabolic or loss rate.

- Selected flow: Gaseous oxygen supplied to the cabin-life-support interface
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable required supplied kg after ECLSS stock/recycle/fate balance /N; cp_eclss. Internal circulation/recycling is not another purchased input or avoided-product credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_eclss`
- Sources: `nasa-eclss-2017`

###### Gaseous nitrogen supplied to cabin conditioning (`eclss_nitrogen`)

Actual compatible gaseous nitrogen supply with actual purity,pressure and cabin/ECLSS gate; mixed breathing air and internal circulation are not extra pure nitrogen purchases. Supplier quantities,loaded stock,recycle,consumption,wastewater/vent/recovered/residual fates must close; no universal metabolic or loss rate.

- Selected flow: Gaseous nitrogen supplied to cabin conditioning
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable required supplied kg after ECLSS stock/recycle/fate balance /N; cp_eclss. Internal circulation/recycling is not another purchased input or avoided-product credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_eclss`
- Sources: `nasa-eclss-2017`

###### Potable water supplied at crew-flight loading handover (`flight_potable_water`)

Conditional actual flight potable water at documented quality/loading gate. It is not automatically plant tap water,environmental abstraction or an unspecified packaged beverage; actual packaging,treatment and delivery ownership separate. Supplier quantities,loaded stock,recycle,consumption,wastewater/vent/recovered/residual fates must close; no universal metabolic or loss rate.

- Selected flow: Potable water supplied at crew-flight loading handover
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable required supplied kg after ECLSS stock/recycle/fate balance /N; cp_eclss. Internal circulation/recycling is not another purchased input or avoided-product credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_eclss`
- Sources: `nasa-eclss-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Ground,site,control and programme support (`ground_support`)

#### Inputs

##### Product flows

###### Alternating current (`ground_ac`)

Actual compatible externally imported AC at its documented ground/site/missioncontrol point of use,voltage/provider and losses. Internal battery discharge,solar/DC transfers and regeneration are not this imported supply; actual external DC needs its own verified native identity. Provider-included electricity replaces exact cells.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed gross imported native kWh at the actual measured gate /N; cp_ground; complete upstream/downstream losses once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ground`

###### Tap water (`ground_tap_water`)

Conditional actual compatible supplied tap water at ground/site consumption gate,with delivery,treatment and meter coverage verified. Not flight potable-water grade,deluge-water circulation,environmental abstraction or direct wastewater. Collect real deluge/pad wash/conditioning and fates without supply=discharge.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable supplied m3 after tank/stock/reuse closure /N; cp_ground. Use attached native Volume support,not guessed density for other liquids.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ground`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Transport vehicles and full remaining asset lifecycle (`vehicle_lifecycle`)

#### Inputs

##### Product flows

###### Complete liquid-propellant launch-vehicle first stage at manufacture handover (`launcher_first_stage`)

Conditional actual delivered whole manufactured object with actual engine/tanks/landing equipment and original systems; reusable/expendable status is evidenced,not assumed. Manufacture-only identity is not rental,transport or a full-life service. Verify original parts and supplier-covered phases; original parts cannot be purchased again. Other actual vehicles,solid boosters,service modules,suits,ground/recovery assets need their own concrete identities.

- Selected flow: Complete liquid-propellant launch-vehicle first stage at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered native Item(s) * same-asset/cohort attributable compatible duty / supported total all-user useful duty / N; cp_life. Actual expendable share,refit,maintenance,tests,replacement heatshield/motor/battery,recovery and retirement absent from manufacture separately once; advertised reuse ceiling is not actual life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_life`
- Sources: `nasa-crew-kit`

###### Complete launch-vehicle upper stage at manufacture handover (`launcher_upper_stage`)

Conditional actual delivered whole manufactured object with actual upper-stage engines,tanks,structure and original equipment; no first-stage identity or automatic reuse. Manufacture-only identity is not rental,transport or a full-life service. Verify original parts and supplier-covered phases; original parts cannot be purchased again. Other actual vehicles,solid boosters,service modules,suits,ground/recovery assets need their own concrete identities.

- Selected flow: Complete launch-vehicle upper stage at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered native Item(s) * same-asset/cohort attributable compatible duty / supported total all-user useful duty / N; cp_life. Actual expendable share,refit,maintenance,tests,replacement heatshield/motor/battery,recovery and retirement absent from manufacture separately once; advertised reuse ceiling is not actual life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_life`
- Sources: `nasa-crew-kit`

###### Complete human-transport pressure capsule at manufacture handover (`transport_capsule`)

Conditional actual delivered whole manufactured object with actual cabin,ECLSS,original thrusters,heat protection,parachute and equipment coverage; service module/trunk excluded unless actually included. Manufacture-only identity is not rental,transport or a full-life service. Verify original parts and supplier-covered phases; original parts cannot be purchased again. Other actual vehicles,solid boosters,service modules,suits,ground/recovery assets need their own concrete identities.

- Selected flow: Complete human-transport pressure capsule at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered native Item(s) * same-asset/cohort attributable compatible duty / supported total all-user useful duty / N; cp_life. Actual expendable share,refit,maintenance,tests,replacement heatshield/motor/battery,recovery and retirement absent from manufacture separately once; advertised reuse ceiling is not actual life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_life`
- Sources: `nasa-crew-kit`, `nasa-eclss-2017`

###### Complete unpressurized spacecraft service trunk at manufacture handover (`service_trunk`)

Conditional actual delivered whole manufactured object with actual mating structure,solar array,radiator and fittings coverage; jettison fate and actual expendable use separate. Manufacture-only identity is not rental,transport or a full-life service. Verify original parts and supplier-covered phases; original parts cannot be purchased again. Other actual vehicles,solid boosters,service modules,suits,ground/recovery assets need their own concrete identities.

- Selected flow: Complete unpressurized spacecraft service trunk at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered native Item(s) * same-asset/cohort attributable compatible duty / supported total all-user useful duty / N; cp_life. Actual expendable share,refit,maintenance,tests,replacement heatshield/motor/battery,recovery and retirement absent from manufacture separately once; advertised reuse ceiling is not actual life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_life`
- Sources: `nasa-crew-kit`

###### Complete jet carrier aircraft for air launch at manufacture handover (`carrier_aircraft`)

Conditional actual delivered whole manufactured object with actual airframe,turbofans,mating/release equipment and original systems; not the winged spaceship or a completed carriage service. Manufacture-only identity is not rental,transport or a full-life service. Verify original parts and supplier-covered phases; original parts cannot be purchased again. Other actual vehicles,solid boosters,service modules,suits,ground/recovery assets need their own concrete identities.

- Selected flow: Complete jet carrier aircraft for air launch at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered native Item(s) * same-asset/cohort attributable compatible duty / supported total all-user useful duty / N; cp_life. Actual expendable share,refit,maintenance,tests,replacement heatshield/motor/battery,recovery and retirement absent from manufacture separately once; advertised reuse ceiling is not actual life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_life`
- Sources: `virgin-facts`, `virgin-brochure`

###### Complete crewed winged rocket spaceplane at manufacture handover (`winged_spaceplane`)

Conditional actual delivered whole manufactured object with actual wing/feather/control/cabin/original motor coverage; carrier and replaceable fuel grain/cartridge ownership explicit. Manufacture-only identity is not rental,transport or a full-life service. Verify original parts and supplier-covered phases; original parts cannot be purchased again. Other actual vehicles,solid boosters,service modules,suits,ground/recovery assets need their own concrete identities.

- Selected flow: Complete crewed winged rocket spaceplane at manufacture handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual delivered native Item(s) * same-asset/cohort attributable compatible duty / supported total all-user useful duty / N; cp_life. Actual expendable share,refit,maintenance,tests,replacement heatshield/motor/battery,recovery and retirement absent from manufacture separately once; advertised reuse ceiling is not actual life.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_life`
- Sources: `virgin-facts`, `virgin-brochure`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Landing,recovery and collected residues (`recovery`)

#### Inputs

##### Product flows

###### Completed externally supplied capsule water-recovery operation (`external_capsule_recovery`)

Only an actual externally handed-over completed recovery operation for one documented capsule splashdown,with actual ship/crane,passenger handling,medical/optional helicopter and shore handover scope. It is not generic marine transport,owned recovery work,one person or a completed whole spaceflight. Actual land/winged recovery needs its own true native interfaces.

- Selected flow: Completed externally supplied capsule water-recovery operation
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native completed recovery operations * supported actual programme/person/cargo share /N; cp_recovery. One capsule operation shared by actual recipients,not bought once per person. Provider full covered cells OR owned/replacing physical cells,never both.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `nasa-crew-kit`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Separated discarded capsule heat-shield panel before treatment (`discarded_heatshield_panel`)

Conditional actual separated intact discarded heat-shield panel at collection before treatment,with actual material/composite composition,moisture,contamination and receiver. It is not all spacecraft debris,an ablated atmospheric chemical,or manufacture quantity. Recovered/reused parts and direct lost fragments remain separate fates.

- Selected flow: Separated discarded capsule heat-shield panel before treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed collected wet/dry-basis compatible panel kg /N; cp_recovery. Reconcile supplied shield,remaining/reused panel,ablation,discard and direct losses; unknown fate not zero and no complete shield simultaneously as atmospheric release plus collected waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `nasa-crew-kit`

##### Elementary flows

### Process: Phase-specific direct releases and external fates (`release_fates`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Carbon dioxide of fossil origin emitted to the troposphere (`fossil_co2_troposphere`)

Conditional actual fossil CO2 from attributable launcher/carrier/other combustion in the documented tropospheric phase; not kgC,CO2equivalent or total mission exhaust. Chemical identity and actual layer/receiver require specific native verification. Known high-altitude/space release cannot be bound to ground or unspecified-air identity to obtain characterization. Other actual phases/species get separate mandatory rows; do not pool incompatible compartments.

- Selected flow: Carbon dioxide of fossil origin emitted to the troposphere
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed species kg from phase-specific monitoring or independently supported composition/engine/load/trajectory-compatible mass-balance model /N; cp_release. No complete-combustion/default fuel multiplier. Physical inventory retained even without LCIA factor.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`

###### Water vapour emitted to the stratosphere (`water_vapour_stratosphere`)

Conditional actual molecular H2O emitted in the documented stratospheric propulsion/vent phase; not liquid water,wastewater or universal hydrogen-fuel factor. Chemical identity and actual layer/receiver require specific native verification. Known high-altitude/space release cannot be bound to ground or unspecified-air identity to obtain characterization. Other actual phases/species get separate mandatory rows; do not pool incompatible compartments.

- Selected flow: Water vapour emitted to the stratosphere
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed species kg from phase-specific monitoring or independently supported composition/engine/load/trajectory-compatible mass-balance model /N; cp_release. No complete-combustion/default fuel multiplier. Physical inventory retained even without LCIA factor.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`

###### Unburned nitrous oxide emitted to the stratosphere (`unburned_n2o_stratosphere`)

Conditional actual unburned molecular N2O released in the documented stratospheric hybrid-motor/vent phase; not supplied oxidizer kg,burned nitrogen mass or N2O4. Chemical identity and actual layer/receiver require specific native verification. Known high-altitude/space release cannot be bound to ground or unspecified-air identity to obtain characterization. Other actual phases/species get separate mandatory rows; do not pool incompatible compartments.

- Selected flow: Unburned nitrous oxide emitted to the stratosphere
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed species kg from phase-specific monitoring or independently supported composition/engine/load/trajectory-compatible mass-balance model /N; cp_release. No complete-combustion/default fuel multiplier. Physical inventory retained even without LCIA factor.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`

###### Carbon dioxide of fossil origin released into outer space (`fossil_co2_outer_space`)

Conditional actual fossil-origin molecular CO2 released in the documented outer-space propulsion phase; preserve actual trajectory/time,state and fate/assessment limits. Chemical identity and actual layer/receiver require specific native verification. Known high-altitude/space release cannot be bound to ground or unspecified-air identity to obtain characterization. Other actual phases/species get separate mandatory rows; do not pool incompatible compartments.

- Selected flow: Carbon dioxide of fossil origin released into outer space
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed species kg from phase-specific monitoring or independently supported composition/engine/load/trajectory-compatible mass-balance model /N; cp_release. No complete-combustion/default fuel multiplier. Physical inventory retained even without LCIA factor.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| subdivide_functions | all_processes | Subdivide actual recipient transport,operation-only support,cargo/research payload,station services and separately sold tour/amenity uses before shared allocation. Support causal resource/engineering or compatible duty shares and alternatives/sensitivity. Passenger Count,payload kg,tonne-km,seat capacity and research output cannot be added; fare is not a physical share. |  |
| recipient_completion | transport_delivery | Count each actual fulfilled compatible person transport obligation once across internal vehicles/stages. True recipient/dual roles do not vanish due crew label; operation-only duties are not extra recipients. Split incompatible endpoints/quality or justify an observed mix; no assumed occupancy,one passenger per seat or universal reference-distance conversion. |  |
| failed_and_shared_duty | all_processes | Preserve attributable scrubbed countdown,abort,failed/uncrewed test,qualification,training,standby,reposition and recovery duties in the evidenced causal programme/cohort. An abort may deliver a separately defined rescue/return function without fulfilling planned destination transport; record real outcome,function and attribution,not automatic planned success. No arbitrary success probability. N=0 gives no finite transport intensity,not zero burden. |  |
| native_asset_life | vehicle_lifecycle;ground_support;carrier_operation;recovery | Actual delivered native asset quantity times same-asset/cohort attributable compatible mission/duty divided by supported total all-user useful duty,then /N. Include tests,cargo/other uses,carrier-only duties and actual expended units. Actual/prospective life and reuse evidence with uncertainty required; advertised maximum reuse or generic flight count is not measured lifetime. Period operating flows are not divided by lifetime again. |  |
| whole_components_and_recovery | all_processes | Whole delivered fuel blend/grain-cartridge/motor/vehicle result OR replacing component/process supplies with exact native mass/provider coverage closure,never both. Original parts and replacement/refurbishment stages distinct. Actual recovered material/energy allocation uses native gate,status and receiver; internal recycled air/water,battery discharge,solar/storage transfer and regeneration are not added purchases or automatic avoided credits. |  |

## 8. Foreground Data Collection,Calculation,and Quality Rules

The following completion,attribution,native quantity,stock/species/fate and lifetime calculations are explicit PCR-designed methods. Sources support only their section11 actual classification/physical context;no claim NASA,operators or NOAA prescribe these quantitative formulas. Generic ranges are not supplied;actual required quantities and all unknown responsibilities must be completed before finished package use.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_transport | transport_delivery | actual fulfilled transport and roles | actual_record | contract;person;role;dual_role;mission;endpoint_state;trajectory_orbit;quality;duration;segment_itinerary_rule;attempt;completion;provider_cells;other_outputs | Read actual service agreement,recipient/role and phase/handover records. Distinguish actual to/from/in-space function,compatible segment/roundtrip grouping and endpoint quality before counting; real transported NASAcrew may count. Trace all mission/stage/provider/attempt duties and included support,not just sales or launch success. Aggregation algorithm: N_G=sum actual recipient transport obligations completed in compatible function/endpoint/quality groupG. Internal stages/vehicles count no extra final units. Unknown role/endpoint/completion makes use incomplete; N_G>0 required. | Item(s) | actual event and mission-period closure | same declared mission period and supported assetlife | actual transport_delivery responsibilities | per declared reference flow | raw records,roles,native gate,all-user/provider coverage and uncertainty |
| cp_stage | stage_operation | actual stage fuel/oxidizer/native operation | actual_record | stage;mission;provider;fuel_oxidizer_grade_phase_composition;loaded;delivered;opening_closing_stock;burned;vented;boiloff;spill;recovered;conditioning;abort_test;coverage | Measure each actual stage and chemical supply/gate separately; close purchase/loading/storage/conditioning/use/fates. Include actual powered landing,abort,test,standby,solid/hybrid grain leftovers,cryogenic losses,pressurant and purges. Whole formulation/cartridge OR replacing components exclusive; missing real formulation or path is not zero. Aggregation algorithm: Attribute each native required supply by supported actual all-function stage duty/resource shares and /N once. Burned activity comes from mass balance,not purchases; species/phase model handled in cp_release. | kg;Item(s);kWh | actual event and mission-period closure | same declared mission period and supported assetlife | actual stage_operation responsibilities | per declared reference flow | raw records,roles,native gate,all-user/provider coverage and uncertainty |
| cp_carrier | carrier_operation | actual mated-climb/release/carrier-return duties | actual_record | carrier;spaceplane;mission;recipient_role;pilot;aircraft_configuration;fuel_grade;flight_phase_altitude;taxi;climb;release;return;holding;training;ground_use;stock_burn;all_users;provider_cells | Observe actual carrier whole sortie,taxi/mated climb/release/return and training/failure duties; spaceplane release is internal,not extra final transport. Reconcile native jet fuel,altitude-phase emissions/resources and all-use shares; aircraft/engine/gear life via cp_life,ground responsibilities via cp_ground. Actual completed external carriage replaces exact owned cells only. Aggregation algorithm: Native period resources * supported actual cohort/all-user resource or duty share /N. Do not turn carrier pilots into space recipients or charge the full mated sortie separately for every person. | kg;kWh;hour;Item(s) | actual event and mission-period closure | same declared mission period and supported assetlife | actual carrier_operation responsibilities | per declared reference flow | raw records,roles,native gate,all-user/provider coverage and uncertainty |
| cp_eclss | life_support | actual cabin/suit provisions and fates | actual_record | vehicle;person_roles;phase_duration;air_quality;oxygen_nitrogen_water_food;loading;recycle;consumption;humidity;CO2_removal;thermal;energy;sorbent;hygiene;waste_vent_receiver;stocks;included_support | Collect actual cabin/suit operating configuration and supplies through actual transport/standby/abort/return boundary. Reconcile oxygen,nitrogen,water,food,CO2-control medium,thermal energy and all actual waste/recycle/vent fates separately. Ventilation/recycle is not an external supply; CO2 removal is not automatically storage or avoided emission. No standard metabolic/meal/water rate adopted. Aggregation algorithm: Actual native supply needed after stock/recycle/fate balance * supported function/cohort share /N. Same real recipient counted once; actual operation support and co-functions remain attributed. | kg;kWh;Item(s);hour | actual event and mission-period closure | same declared mission period and supported assetlife | actual life_support responsibilities | per declared reference flow | raw records,roles,native gate,all-user/provider coverage and uncertainty |
| cp_ground | ground_support | actual site/control/training/support resources and assets | actual_record | site;pad_runway_hangar;missioncontrol;training_medical;hospitality_inclusions;meters;voltage;water_deluge;fuel_handling;loss;assets;life;native_gate;all_functions;provider_coverage;waste_receiver | Collect actual site/pad/runway/GSE,missioncontrol,qualification/training/medical,loading/cleaning/deluge and organiser resources,assets/maintenance/retirement and fates. Actual included hospitality/keepsakes travel must be owned or transparently subdivided from a real distinct package; do not erase because outside spacecraft. Verify external AC/DC supply gates/internal transfers and provider-included cells. Aggregation algorithm: Actual native period flows * supported all-function resource/duty share /N; same-asset manufacture uses useful-life share via cp_life,not repeated life division of current inputs. | kg;m3;kWh;Item(s);hour | actual event and mission-period closure | same declared mission period and supported assetlife | actual ground_support responsibilities | per declared reference flow | raw records,roles,native gate,all-user/provider coverage and uncertainty |
| cp_life | vehicle_lifecycle | actual delivered assets and all-user useful-life coverage | actual_record | asset_serial_cohort;native_quantity;manufacture_gate;original_parts;delivery;qualification_test;reuse;all_users_flights_duty;remaining_life;refurbish;replacement;expended;jettison;retirement;provider_included_phases;uncertainty | Verify actual complete manufactured object and native quantity/coverage. Collect same-asset/cohort compatible all-user useful duty including cargo/tests/other functions,actual expended units and reuse/refit history. Inventory each missing stage,heatshield,cartridge/casing,battery,solar/thermal/suit/pad/runway/recovery asset separately once. Full provider use cells replace matching operation cells; no manufactured asset relabelled full-life service. Aggregation algorithm: q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N; compatible positive supported life denominator. Expended actual use and other stages recorded separately,no blanket published reuse count. | Item(s);kg;hour;flight | actual event and mission-period closure | same declared mission period and supported assetlife | actual vehicle_lifecycle responsibilities | per declared reference flow | raw records,roles,native gate,all-user/provider coverage and uncertainty |
| cp_recovery | recovery | actual landing/recovery and collected-material handover | actual_record | mission;landing_mode;capsule_spaceplane;recipient;ship_crane_helicopter_land_team;provider_scope;actual_native_operations;assets;resources;heatshield;remaining_reused;ablation;fragments;waste_collection;receiver;coverage | Collect actual splashdown,parachute/airbag/winged runway,ship/crane/medical/optional helicopter or land recovery and return handover. External complete recovery operation only at real provider handover; otherwise own physical assets/resources/releases,including marine/air/land routes and support. Close shield/debris remaining,reuse,atmospheric ablation,direct loss and collected waste without collapsing fates. Aggregation algorithm: Actual native completed provider operations OR uncovered owned native resources * supported programme/function shares /N. Collected material kg is separate from emitted chemical mass; no double one recovery per person. | Item(s);kg;kWh;m3;hour | actual event and mission-period closure | same declared mission period and supported assetlife | actual recovery responsibilities | per declared reference flow | raw records,roles,native gate,all-user/provider coverage and uncertainty |
| cp_release | release_fates | actual chemical/particle release by phase and receiver | actual_record | mission_stage;phase_time;altitude_layer_or_space;actual_fuel_composition;burned_vented;engine_load;species_molecule_particle;mass_basis;ablation_alloy_vs_compound;receiver;monitoring_model;LCIA_coverage;uncertainty | Measure or independently support each actual phase-specific species/particle and receiver. Loaded N2Ooxidizer is not unburned emission; alloyAl is not automaticallyAl2O3 or airborneAlmetal. Retain actual plume/vent/ablation/debris chemistry/native mass and trajectory,including all real C/H/N species,soot/metal/other particles. Known high altitude/space not ground-air-unspecified. Missing species/quantity/fate is incomplete; missing characterization is disclosed separately without deleting physical flow. Aggregation algorithm: For each phase/species q=sum actual measured mass or supported actual burned/vented/ablated activity * applicable source-backed chemical/engine/trajectory model,then native-basis conversion,causal share and /N once. No generic rocket factor or stoichiometric perfect-combustion assumption. | kg species;native particle mass;phase;trajectory | actual event and mission-period closure | same declared mission period and supported assetlife | actual release_fates responsibilities | per declared reference flow | raw records,roles,native gate,all-user/provider coverage and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completion | completed_person_transport | N_G=sum actual fulfilled transported-person obligations in predeclared compatible groupG; internal stages/vehicle changes do not add N. For a whole contracted transport itinerary count once; separately fulfilled segments require their own real function/quality. N_G>0; unknown counts incomplete,failed planned destination is not automatically fulfilled. | actual role/contract/endpoint/quality and mission-stage ledger | N_G Item(s) |  |
| native_supply | stage_operation;carrier_operation;life_support;ground_support | Reconcile actual delivered+opening stock+external additions=closing stock+used/converted+vented/spilled+returned/exported,with internal transfers cancelling across the same boundary. Actual required supply and burned activity differ; normalize attributed native supply/N once,whole formulation OR replacing components exclusive. | actual supply/loaded/stock/use/return/loss records | native required quantity/N |  |
| species_phase | release_fates | Compute each actual chemical/particle mass on its own molecule/native basis from monitoring or supported phase-specific engine/composition/trajectory model. Keep N2Oproduct versus unburnedN2O,N2O4 versusN2O,kgN/kgC versus compound,water liquid/vapour and altitude/space receiver separate. Unsupported conversion/LCIA factor remains gap,not zero or a ground proxy. | actual species/phase/model/receiver and applicable raw activity | phase-specific native species quantity/N |  |
| asset_life | vehicle_lifecycle;ground_support;recovery | q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N for the same actual delivered asset/cohort with compatible positive supported useful duty and all users/functions. Preserve actual expendable units,refit/replacement/qualification/retirement and uncertainty separately. Do not redivide period operating inputs or turn asset manufacture into full-life service. | Qnative_j;Dcohort_j;Dtotal_allusers_j;N;provider coverage | native asset share plus missing stages |  |
| shared_provider | all_processes | Actual completed supplier native demand * supported actual cohort/function share /N replaces only exact included cells. Session/launch/recovery serving multiple people is not procured once per person. Owned internal stage/carrier/employee duty is not another purchased result. Check mass/native/provider closure before removing replaced cells; missing cells remain mandatory. | native provider result quantity;true coverage;actual resource/duty shares;N | exclusive native supplier and foreground inventory |  |
| material_fate | life_support;recovery;release_fates;ground_support | Close every actual water/chemical/asset-part fate on compatible measured basis; distinguish recovered material,disposed waste,direct liquid/air/space species and remaining stock. Whole heatshield mass cannot simultaneously be intact collected waste and all ablated release. Elemental alloy budget is evidence for separately identified chemical species,not automatic emission identity or unsupported compound mass. | actual stock;reused;recovered;converted;vented;ablated;collected;direct-loss receiver | closed native material/species/fate ledger |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_expansion | all_processes | MANDATORY add one atomic row for each actual unrepresented input,output,asset,provider result,waste or direct species: unique row_id;one existing process_id;direction and product/waste/elementary type;single actual chemical/material/function and state/formulation;UUID or explicit unresolved identity;native property/unit;actual quantity and measured/calculated basis;valid same-parent collection_protocol_id;raw evidence/source;provider gate/stage coverage;receiver/phase/altitude/known subcompartment;uncertainty and applicable normalization. No plural category collector. Unknown occurrence,identity,amount,scope or fate is incomplete,not zero; actual included obligations cannot be omitted. | all actual collection protocols and source/provider/fate evidence |
| dq_recipient | transport_delivery | MANDATORY actual fulfilled person-space transport,role/dualrole,endpoint/state/trajectory,duration,quality and segment/itinerary grouping. Distinguish carrier-only pilots and operation support from transported astronauts even when called crew; no crew-label-only removal or duplicate same person. Tickets,seatcapacity,launchcount,stationdays or altitude alone do not establishN. Unknown role/completion blocks finisheduse. | cp_transport;actual contract,role,endpoint and completion evidence |
| dq_routes | stage_operation;carrier_operation;vehicle_lifecycle;recovery | MANDATORY complete actual capsule,liquid/solid/hybrid stage,carrier and winged branches. Add actual solid boosters/formulated propellant,cryogenic storage/conditioning/purge,MMH/NTO/MONorother actual formulation,stage motors/interstage/fairings,feather/flight-control/gear and separate actual land/sea recovery as required using every dq_expansion field. No generic launcher/carrier factor or automatic copied propellant grade. Missing data blocks application,not product membership. | cp_stage;cp_carrier;cp_life;cp_recovery;actual configured physical route |
| dq_eclss_inclusions | life_support;ground_support | MANDATORY each actual cabin/suit air,food/water,hygiene,CO2-removal,sorbent,thermal/power,packaging,waste/recycle/vent and transport-required training/medical/standby supply/native asset/fate with dq_expansion fields. Actual included lodging/hospitality/keepsakes/user devices cannot disappear as offvehicle or personal food; demonstrate real separate package subdivision or retain completeness gap. No universal person-day ration,oxygen/water rate or assumed one device/meal. | cp_eclss;cp_ground;actual operating and inclusion records |
| dq_lifecycle | vehicle_lifecycle;ground_support;recovery | MANDATORY all attributable launcher/stage/capsule/trunk/carrier/spaceplane,groundpad/runway/control/training,ECLSS/suit and recoveryship/crane/helicopter/landassets manufacture native quantities,actual original coverage,same-asset all-user life,qualification/refit/maintenance/replacements and retirement. Each actual missing asset/stage gets dq_expansion fields; a completed external result replaces only true coverage. No lifetime-as-service identity or advertisedreuse lifetime default. | cp_life;cp_ground;cp_recovery;actual asset/provider records |
| dq_releases_lcia | release_fates;recovery | MANDATORY actual phase/altitude/outerspace chemical and particle identity,molecule/element basis,quantity and receiving compartment for all exhaust/vent/ablation/debris/direct liquid fates. Add every actual C/H/Ncompound,soot/metal/other particle separately using dq_expansion fields. Measured alloyelement budget cannot assign chemical form; neither all loadedN2O emitted nor all heatshield ablated. Physical identity/quantity/fate gaps and missing LCIA characterization are separately disclosed; no groundair-unspecified proxy or deletion of uncharacterized flow. | cp_release;cp_recovery;actual monitoring/material-fate/trajectory evidence |
| dq_failed_cofunctions | all_processes | MANDATORY retain all causal abort/failure/test/training/standby/reposition/recovery and cargo/research/other-user burdens; evidence shares and uncertainty. Real abort/rescue/return function may differ from planned destination completion. No fabricated success probability,lifetime,occupancy,allocation range or zero missing activity. Unknown causal attribution remains gap before completeduse. | all protocols;actual programme and all-function duty ledger |
| dq_evidence | all_processes | MANDATORY verify direct actual native type,state,grade/gate,property/unit and official names beforeUUID binding; known altitude/space receiver cannot be collapsed to airunspecified. Source cases support only described configurations; NASA2017ECLSS is qualitative,VG2021/undated2023factsheet is historical,BlueOrigin publicweb self-report not full original,NOAA2023 gives no perflight mass or characterization. OwnPCRCount/allocation/lifecycle formulas are not source mandates; actual required quantities remain mandatory even without generic ranges. | actual native records and source-specific scope |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | completed_person_transport | Require1Item(s),actual compatible fulfilled person-space transport,all endpoint/quality/role qualifiers andpositiveN; reject sales/capacity/launch/altitude-only,crew-label exclusion and repeatedinternalphase count. |  |
| validate_native_coverage | all_processes | Require actual single-owner stage/provider and native supply/asset/lifecycle coverage; no whole/components,cartridge/grain,completed provider/physical stage or external/internalenergy duplication. Missing required real cells blocks finisheduse. |  |
| validate_balances | all_processes | Require actual supplied/loaded/stock/burned/vented/recovered/materialfate closure,molecule/element and liquid/gas bases. N2Ooxidizer product is not N2Oemission; NTO/MON/hydrazines distinct; ablated/collected/reused shield/debris not doublecounted. |  |
| validate_environment | release_fates;recovery | Require actual phase/altitude/space/chemical-form receiver and uncharacterizedphysicalflow disclosure. Do not bind known highaltitude/space to groundair-unspecified or infer all emitted chemical mass from manufactured alloy. MissingLCIA factor does not imply0inventory or complete impactcoverage. |  |
| validate_completeness | all_processes | Require every actual omitted material/function/asset/species/fate atomic dq_expansion row and valid same-parent protocol,source/nativequantity and uncertainty; no unknown=zero. True included provisions retained; N0no finite intensity; candidate/checkpass is not completedpackage/publicationreadiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only after all required role,identity,quantity,coverage,life,fate and physical inventory obligations are completed/reviewed |
| allowed_use | Actual declared to/from/in-space transport endpoints,quality,roles,route,period and evidenced full lifecycle;uncharacterized flows require impact-coverage disclosure |
| excluded_use | Crew-label blanket exclusion,tickets/capacity/launch/altitude as completion,omitted inclusions,groundair as highaltitude/space,operatingCO2 as whole lifecycle |
| required_metadata | All reference qualifiers;actual recipient-role/endpoint/mission-stage/provider/ECLSS/recovery;native supplies/asset life;species/phase/altitude/medium and LCIAcoverage |
| required_quality_disclosure | Role/completion/chemical/nativequantity/provider/fate/lifeprojection/allocation and characterization gaps;personal-subsistence boundary sensitivity |
| update_trigger | Changes in actual function/endpoint/quality/role/route/vehicle/propellant/ECLSS/inclusions/provider/life/fate or characterization applicability |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,PDFp364. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 64250 actual passenger transport to/from/in outerspace by anymeans; classification only,no universal altitude,functional unit or crew exclusion. |
| nasa-crew-kit | official_guidance | NASA Commercial Crew Program Press Kit,actual HTML snapshot21October2026,SpaceX/Boeing Operations. https://www.nasa.gov/commercial-crew-program-press-kit/ | Actual astronaut-recipient,stage/capsule/trunk/propulsion/docking/return/recovery interfaces. No currentmission schedule,capacity,thrust,mass,success/life or numericfactor default; not allspacecraft rule. |
| nasa-eclss-2017 | official_guidance | NASA,ECLSS Put to the Test for Commercial Crew Missions,8March2017. https://www.nasa.gov/humans-in-space/eclss-put-to-the-test-for-commercial-crew-missions/ | Qualitative actual cabin/suit air/O2/N2/pressure,CO2control,temperature/humidity and abort support through countdown-to-splashdown; no generic consumption,metabolism,life or fullflight inventory. |
| blue-engines | literature | Blue Origin Engines,BE3PM official public webpage accessed21October2026. https://www.blueorigin.com/engines | Case-specific liquidoxygen/liquidhydrogen human-flight propulsion and powered recovery/reignition interface only. No currentflightcount,thrust,life,zero lifecycle or fuel factor adopted. |
| virgin-facts | literature | Virgin Galactic Company Overview,undated fact sheet with2023upcoming context,PDFpp4–6. https://bynder.virgingalactic.com/m/6b6bc9547042ed2c/original/Virgin-Galactic-Company-Fact-Sheet.pdf | Historical actual carrier/winged feather-glide architecture and HTPB/N2O hybrid fuel/oxidizer identity; no currentfleet,thrust,geometry,life,actual formulation/quantity or genericemission default. |
| virgin-brochure | literature | Virgin Galactic Brochure,official public page accessed21October2026. https://www.virgingalactic.com/virgin-galactic-brochure | Actual advertised mated climb/release/hybrid boost/feather/glide/runway and training/hospitality/keepsake interfaces; offers not measured inventory or actual currentflight readiness. No altitude/time/speed/default inclusions for everyoperator. |
| virgin-performed | literature | Virgin Galactic Successfully Completes First Fully Crewed Spaceflight,11July2021,official report. https://investors.virgingalactic.com/news/news-details/2021/Virgin-Galactic-Successfully-Completes-First-Fully-Crewed-Spaceflight/default.aspx | Historical actual mothership release and winged runway return with distinct pilot/mission-specialist roles; no numerictrajectory,crewcount,current certification or genericfactor adopted. |
| noaa-reentry-2023 | official_guidance | NOAA CSL,NOAA scientists link exotic metal particles in the upper atmosphere to rockets,satellites,16October2023. https://www.csl.noaa.gov/news/2023/388_1016.html | Actual distinct-metal reentry/stratospheric aerosol pathway; no perflightmass,universal species/form,fraction,allalloy oxidized or LCIA characterization factor. |
| nasa-reactive | official_guidance | NASA White Sands Reactive Fluids,15June2016. https://www.nasa.gov/centers-and-facilities/white-sands/reactive-fluids/ | Actual spacecraft material-compatibility chemical families including MMH,NTO/MON,O2 and N2O; not proof a mission uses a particular grade,composition,quantity or emissionfactor. |
