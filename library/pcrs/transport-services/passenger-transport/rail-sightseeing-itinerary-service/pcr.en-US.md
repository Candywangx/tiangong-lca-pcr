---
pcr_id: pcr.rail-sightseeing-itinerary-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rail sightseeing itinerary service

## 1. Scope and Applicability

This PCR covers one actual participant completing the declared rail sightseeing itinerary or programme. The supplied function is the actual scenic/observation/interpretation experience delivered through passenger rail conveyance,with its real route,sequence/stops,duration,quality,contents and fulfilment criterion. A scenic landscape,heritage vehicle or marketing word alone does not establish the function. Ordinary A–B transport,bare rail-bike/vehicle rental or availability,admission/standalone guiding and a primarily active adventure are not automatically rail sightseeing. Actual supplier/participant/operator responsibility and offered function must be reviewed.

The full actual qualifying rail sightseeing function remains included,without a powered-wheel-on-rail-only limit:actual powered,human,animal,cable,rack,linear-motor,magnetic-levitation and other qualifying railway mechanisms use their own native duties below. A technical example does not automatically belong to64131. Missing UUID,quantity,species/engineering or source evidence blocks complete foreground production,not inclusion of a genuine product. No missing-data or identity convenience narrows the scope.

Count one actual participant once per independently fulfilled declared itinerary/programme and compatible quality/content/time cohort. Constituent train legs,return travel,reboarding,vehicle changes and internal transfers do not add completed sightseeing outputs. For a genuinely flexible programme declare actual activation/use,service window,route/content and acceptance instead of inventing a mandatory full circuit. Tickets/day-pass validity,unused rights,capacity,train movements,parties,hours and passenger-kilometres are distinct quantities. Actual materially changed,partial or failed products retain their resources and separate function/acceptance treatment;N=0 has no finite per-participant intensity.

Keep all actually included guides,interpretation/audio/observation support,stops,food/drink,accommodation and other supplied components or connections with their real ownership and native quantities. Do not universally assume these inclusions or remove them by importing64210sleeping/dining exclusions into the whole sightseeing function. An unrelated complete multimode holiday is not relabelled wholly rail sightseeing;identify the actual supplied rail programme and real component interfaces. Independently fulfilled products require subdivision or justified shared allocation,not deletion of their common transport/support burden.

The complete native lifecycle covers actual source supply/conditioning,loaded/empty/start/shunting/coasting/wait/rest/standby/test/rescue/failed duty,participants/staff/handlers/animals,stations/depots/observation support,vehicle/guideway/rope/drive/power/civil assets or animal prior rearing,current care,restoration/refit/renewal and retirement. Historical age,human work,no rail contact or a complete provider invoice is not evidence of zero burden. Same-asset all-user duty allocates only actual covered supply phases;whole-life service identity is not inferred. All actual materials/species/waste/receiver/provider gaps remain mandatory completion obligations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.rail-sightseeing-itinerary-service |
| classification_refs | CPC3.0 64131;exact;fullactualqualifyingpassengerrailsightseeingfunction |
| covered_products | Allactualparticipant railway sightseeing itineraries/programmes with actualnativepowered/human/animal/cable/rack/linear/maglev/otherqualifyingmechanisms,quality/content/lifecycle |
| excluded_products | Ordinarytransport,barevehicle/railbikerental/admission/availability,pureguiding orprimaryactiveadventure notprovedactualpassengerrailsightseeing;unrelatedwholeholiday relabelled |
| representative_product | One participant completes the declared scenic/heritage rail itinerary |
| production_route | Actualwholeparticipant rail sightseeing programme with realnative mechanism/work/care/sources,includedbundle/providers andalluserlifecycle |
| market_state | Actually fulfilled itinerary with declared quality, duration, content and completion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed participant rail sightseeing itinerary |
| How much | 1 actual participant completing the declared whole itinerary |
| How well | Actual scenic/interpretation quality, rail sequence/stops, class and included contents |
| How long or cycle | Actual agreed beginning to fulfilled itinerary end; whole duty/lifecycle attribution separately retained |
| reference_flow_link | completed_sightseeing |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed participant rail sightseeing itinerary |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_supplier_participant_operator_responsibility; actual_native_support_propulsion_and_work_care; sightseeing_function; actual_whole_itinerary_and_stops; rail_technology_and_consist; route_distances; duration_period; observation_interpretation_quality; class; actual_included_content; completion_and_N; actual_participant_staff_roles; empty_failed_standby_duty; fuel_and_water_state; boiler_ash_steam_fates; provider_coverage; same_asset_all_user_life; actual_species_medium; geography_and_uncertainty |

N is actual participants completing the same declared itinerary/class/content cohort in the complete period, N>0. Required qualifiers enter the actual data package. Reconcile altered/partial/cancelled duties, stocks and all-user shares before normalization once.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| participant_count | all inventory rows | Native compatible property | Actual native unit | Keep participant itineraries, ordinary rail legs, ticket/pass validity, train trips, capacity and person-distance distinct. One tour may include multiple rail segments without multiple tour outputs. |
| native_energy_material | all inventory rows | Native compatible property | Actual native unit | Retain actual native property/unit/state. Compatible kWh converts by verified 3.6 MJ/kWh only; mass/volume, moisture/ash/dry-received, carbon/sulfur/nitrogen/compound conversions need explicit supported physical relationships. |
| actual_gates | all inventory rows | Native compatible property | Actual native unit | Electricity gross import/export and internal recovery differ; fuel supply/withdrawal/burn/spill/recovery and boiler water/steam/condensate/blowdown differ. No silent universal factor or residual-to-emission conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual sightseeing contract/itinerary, train roster/technology, providers and installed assets |
| starting_condition_role | Actual interfaces, not zero-burden historical capital, free labour or fuels |
| product_classification_scope | CPC3.0 64131;exact;fullrealpassengerrail sightseeingfunction,not a technology-limitedsubset |
| recursive_input_rule | Actual rail-leg/tour/provider result replaces exact documented cells only; no added self-recursive completed tour |
| upstream_dataset_requirement | Actual specific native identity, quality, technology/geography/period, provider stage and uncovered duties for every supply |
| disclosure | Actual itinerary/completion, rail branch/boiler/native quantities, included content, all-user duty/life, provider and release gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_experience | rail_sightseeing_service | The reference is the actually completed sightseeing experience, including its full agreed rail sequence, required observation/interpretation and included ancillary support. Do not reduce it to an ordinary A-to-B train leg or double-count its return/constituent legs as more tours. | unsd-cpc3-sightseeing |
| complete_duty | rail_sightseeing_service | Include actual empty positioning/shunting, startups, layovers/heating, standby, failed/cancelled/partial duties and all required support. Cancelled tickets and no-shows do not establish N; actual zero-output burdens remain in their causally justified pool. No finite per-participant result exists for N=0. | nps-rail-excursions-2026 |
| steam_route | rail_sightseeing_service | Actual steam propulsion needs independently evidenced fuel rank/mixture, received and dry bases, water/treatment/steam/condensate/blowdown, ash/unburned-carbon/controls and actual starts/hot standby. Boiler-like gas methodology does not turn this into a stationary corporate inventory or make ash/non-GHG releases optional. | ipcc-rail-2006; ipcc-boiler-2006 |
| provider_and_capital | rail_sightseeing_service | Assign every manufacture/restoration/refit/install/use/maintenance/renewal/retirement and included-tour cell to one compatible provider or foreground owner. Delivered manufacture flows do not supply operation/EoL by implication; inclusive provider coverage replaces the exact matching foreground cells. Heritage age, lease, donation or restoration fee does not prove zero physical burden. | ghg-product-2011 |
| energy_and_fates | rail_sightseeing_service | Retain gross energy import/export, internal generation/regeneration, storage and losses separately; do not duplicate upstream electricity exhaust. Every real material/waste/substance/medium remains independent, including steam water, captured ash, boiler liquid and wheel/rail/brake fates. Unknown required records block completeness rather than becoming zero. | ghg-product-2011 |

### Actual native mechanism obligations

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| native_human | rail_sightseeing_service | For actual human propulsion distinguish who supplies the vehicle,human driving/guidance and assistance,who is a passenger/participant,and the real work/rest/task and provider boundary. A pedal vehicle or self-powered activity does not itself prove passenger-sightseeing function. Record actual dedicated work food/drink,PPE,safety,accessibility and support,and actual electrical assistance/storage if present. Disclose ordinary human subsistence/respiration boundary and sensitivity;do not assert human work/metabolism is zero or invent employee-labour fuel,wage/calorie-to-fossil-fuel factors. If attributable metabolic inputs/releases are included,require independently applicable actual intake/exertion/respiratory mass,origin and receiver evidence without duplicating provider/participant food. |  |
| native_animal | rail_sightseeing_service | For every actual animal species and physical cohort collect age/body history,prior rearing/acquisition gate,current feed/grazing/water/care/health/housing/bedding,work/rest/retired support periods and all real users. Examplehorse/hay cards do not cover all species/rations. Prior rearing/delivered-animal and current care/manure phases are exclusive;inclusive providers replace matching phases. Use independently applicable species physiology and actual as-received/wet/dry ration,C/N/moisture,body-stock change and water balance to reconcile respiration,enteric/manure substances,faeces/urine and actual receiver/treatment. Do not apply cattle/equid factors to another species,erase physical respiration through a national netCO2 convention,or create emissions from residuals. Separately collected faeces/urine are not a fictitious mixture;actual co-collected bedding/manure requires its real native composition/row and replaces those same constituents once. | animal-physiology-2019 |
| native_cable_rack | rail_sightseeing_service | For an actual rail-guided cable/rack or coupled mechanism establish its supplied sightseeing function separately from ordinary cable transport. Record the whole coupled route,directions,carriages/counterweights/loads,rope/winding/drive/brake/control,station/standby/rescue/test/empty operation and actual gross source energy across all users. A shared drive is not charged independently once per carriage,direction or participant. No nominal power,mgh,load proportion or assumed regenerative credit supplies energy. Rope/guide/support/contact/rack/gear lubrication/wear,construction and original/replacement phases have real native identities and cycles;whole installed systems and contained components are exclusive. Actual external export has one gate/owner without another avoided-energy credit. | cable-native-interfaces-2016 |
| native_linear_maglev | rail_sightseeing_service | Separate actual wheel/rack/tyre contact,linear primary-coil/reaction-plate and electromagnetic/superconducting support/propulsion/guidance,low-speed/emergency contact,power electronics and cooling. Meter complete actual duty including stationary levitation and auxiliaries where applicable;no stopped/coasting or noncontact=zero-energy/wear assumption. Inductive guidance does not invent a second external power supply;persistent magnet current does not erase refrigeration/control. Cryostat original firstfill not included in whole manufacture is long-term delivered inventory allocated by compatible same-asset cohort duty/positive complete-life all-user duty then/N,with retention/recovery/fate closure. Actual period top-up is attributed from stock/use/fates;circulation,recondensation,pure transfer and retained stock are not fresh consumption. Other actual coolants/cryogen-free designs require real evidence,not universalhelium. Technical cases/test projects do not establish actual eligible sightseeing output. | rail-native-mechanisms |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rail_sightseeing_service | Participant rail sightseeing fulfilment and attributed lifecycle | required | Actual declared eligible whole sightseeing itinerary | foreground | completed_sightseeing |

### Process: Participant rail sightseeing fulfilment and attributed lifecycle (`rail_sightseeing_service`)

#### Inputs

##### Product flows

###### Actual externally supplied rail AC (`traction_ac`)

Only actual AC at the declared rail delivery/converter gate. Retain gate losses; onboard diesel-generated electricity, internal regeneration and battery discharge are transfers within that actual train system, not another purchased supply. Actual DC needs a different identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_traction_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: ipcc-rail-2006

###### Actual uncovered tour/site AC (`site_ac`)

Actual station/depot or included interpretation/visitor/food-support AC after excluding traction/provider coverage. Identify metering gates, all users and actual task shares; no whole museum or attraction load is automatically assigned to the train tour.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_uncovered_site_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: ghg-product-2011

###### Actual diesel fuel supply (`diesel_supply`)

Actual compatible diesel engine/generator/support duty only. Record grade/blend, provider and stock-adjusted withdrawal independently from actual burned, spilled, recovered or transferred fuel. Whole delivered blend plus composition/origin ledger OR replacing physical component supplies is exclusive. No universal rail factor or all-diesel train assumption.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_diesel_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: ipcc-rail-2006

###### Actual as-received bituminous locomotive coal (`bituminous_coal`)

Conditional actual bituminous-coal-fired steam route only. Preserve measured received moisture, ash, carbon, sulfur, heating basis and batch/provider. Anthracite, lignite, coke, briquettes, biomass, oil firing and ignition fuel are separate actual identities. Coal supplied or withdrawn does not equal coal burned or fully oxidized.

- Selected flow: Bituminous coal, as received for locomotive firing
- Flow property / unit: Mass / kg
- Amount rule: attributed_bituminous_coal_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_boiler`
- Sources: ipcc-rail-2006; ipcc-boiler-2006

###### Actual boiler make-up tap water (`boiler_tap_water`)

Only actual municipal/potable tap water supplied to the steam route, not assumed raw river water, demineralized product or condensate recycle. Record actual treatment, tank/boiler stocks and separate feed, steam, condensate return, leaks and blowdown. Other water/chemical supplies require independent actual rows.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: attributed_boiler_tap_water_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_boiler`
- Sources: ipcc-boiler-2006

###### Actual complete unpowered steel passenger coach supply (`steel_passenger_coach`)

Only the actual complete steel coach with actual observation/seating/service fittings and manufacturing gate declared. It is not a locomotive, powered railcar, generic steel mass or entire train. Inclusive complete-vehicle initial components are not added again; independently cover uncaptured restoration/refit, maintenance and retirement.

- Selected flow: Complete unpowered steel passenger rail coach, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_complete_coach_manufacture_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Actual complete coal steam locomotive supply (`coal_steam_locomotive`)

Conditional actual coal-fired steam locomotive with actual tender/boiler/running-gear inclusions declared. This delivered manufacturing identity is not a complete-life tour, fuel, boiler water or restoration result. Other locomotive technologies and actual replacement boilers require independent records. Heritage age does not make a vehicle or restoration zero.

- Selected flow: Complete coal-fired steam locomotive, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_complete_steam_locomotive_manufacture_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ipcc-rail-2006; ghg-product-2011

###### Actual finished steel rail supply (`finished_steel_rail`)

Actual finished rail section/grade/length and manufacturing supply only, not raw steel, track assembly or ballast. Complete track supply and its same initial components are exclusive; actual sleepers, fasteners, ballast, bridges, signalling, land and renewal fates remain separately owned.

- Selected flow: Finished steel railway rail, delivered
- Flow property / unit: Mass / kg
- Amount rule: attributed_finished_steel_rail_supply_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Tap water (`animal_tap_water`)

Only actual compatible separately supplied animal drinking tap water,measured/reconciled as native mass. It is distinct from support cleaning water. Other sources need independent identities;do not infer intake,body retention,urine or evaporation from supply alone or apply a guessed volume-density conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: animal-physiology-2019

###### Reared live working horse at service-entry handover (`working_horse`)

One actual live horse at documented age/health/service-entry gate with actual prior rearing coverage,native head count and compatible lifetime records. Not horse meat,horse transport or a complete lifetime animal-service result. Actual prehandover rearing and current feed/care/manure periods cannot overlap;inclusive provider phases replace matching local amounts. Other species remain in scope with their own identities/physiology evidence,not equid factors.

- Selected flow: Reared live working horse at service-entry handover
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`

###### Grass hay at animal-feed delivery gate (`horse_grass_hay`)

Only actual separately supplied grass hay with plant composition,state,moisture/C/N and as-received native mass documented. Not all ration or kgdrymatter by assumption;actual grains/minerals/other feeds,grazing/own-feed production and losses need separate records/identities. No generic ration or species conversion.

- Selected flow: Grass hay at animal-feed delivery gate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: animal-physiology-2019

###### Finished linear-motor secondary reaction plate at manufacture gate (`linear_reaction_plate`)

Only the actual finished configured reaction-plate product at native mass,with composition,installed extent and supplier phases. Not pure aluminium,ordinary running rail or an entire linear motor. Whole-guideway/vehicle coverage replaces contained initial plate once;actual delivery,installation,replacements and retirement missing from atplant scope complete separately.

- Selected flow: Finished linear-motor secondary reaction plate at manufacture gate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: rail-native-mechanisms

###### Electromagnetic-suspension railway guideway module at manufacture gate (`maglev_guideway_module`)

Only an actual configured delivered module with defined length/BOM/native count and verified manufacture scope. Not an entire route,a metre relabelled Item or a superconducting/general guideway. Magnets/coils,control,electrical/civil interfaces and stations not proved included require actual separate phases;contained parts and wholemodule are exclusive. Missing transport/install/use/renewal/EoL completed once.

- Selected flow: Electromagnetic-suspension railway guideway module at manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: rail-native-mechanisms

###### Nitrogen gas (`nitrogen_inflation`)

Only actual separately supplied gaseous nitrogen with purity,state and supply gate. Record actual native supplied mass,beginning/end contents,inflate/recover/vent and conditioning energy;pressure is not gas mass. Air and other actual inflation gases are separate identities,not universally nitrogen. Supply does not establish elemental release;actual receiving medium/species/fate separately. Generic verified gaseousN2 doesnotcertify actualpurity/productionroute/delivery/conditioning;complete missing provider phases independently.No supply=vent assumption.

- Selected flow: Nitrogen gas `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: rail-native-mechanisms

###### Liquid helium at cryostat-fill handover (`liquid_helium_supply`)

Only actual separately supplied liquid helium with purity,cryogenic state,native delivered mass and provider/supply/conditioning coverage proved. Gaseous helium,closedloop circulation or cryostat capacity is not this liquid supply. Initial charge included inside manufactured equipment/provider is not added twice;actual top-up/refill,stock,recondensation,recovery/transfer and vent/leak/fate remain distinct. No presumed daily loss,make-up ratio or zero cryocooler electricity. Otheractualcoolants/cryogen-free systems require actual separate native records,not automatic helium.

- Selected flow: Liquid helium at cryostat-fill handover
- Flow property / unit: Mass / kg
- Amount rule: If an actual original cryostat fill is independently modelled and not already included in manufactured equipment/provider coverage,it is a long-term initial inventory/delivered phase:attribute actual native first-fill mass by studied compatible same-asset duty divided by positive complete-life all-user duty,then/N,with initial-stock retention and eventual recovery/fate closure. Do not charge the entire first fill as current maintenance consumption. Actual operating top-up is assigned from actual period stock/use/fate records and causal user shares,then/N. Retained stock,pure transfer,circulation and recondensation are not consumption or fresh purchases. Keep these phases distinct within the actual supplier/asset ledger.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_native`
- Sources: rail-native-mechanisms

###### Complete pedal-propelled passenger rail trolley at manufacture gate (`human_rail_trolley`)

Only an actual complete configured human-pedal passenger rail vehicle with native delivered count and manufacturing gate. Not a rental/adventure result,ordinary bicycle,pedicab,unpowered coach or entire track. Actual electric/other assistance,original parts and uncovered transport/install/use/maintenance/retirement are identified;whole vehicle and contained initial components exclusive. Eligibility as the actual sightseeing passenger programme must be proved separately from vehicle type.

- Selected flow: Complete pedal-propelled passenger rail trolley at manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

###### Complete rail-guided cable-drawn passenger carriage at manufacture gate (`cable_rail_carriage`)

Only actual complete configured rail-guided cable-drawn passenger carriage/nativecount and verified manufacturing scope,not ropeway cabin alone,entire installed route,drive/rope or a completed cable sightseeing result. Whole-object/contained-parts coverage exclusive;actual delivery,installation,controls/drive/civil/support,maintenance/renewal/retirement missing from supply complete independently. Actual passenger-sightseeing function is separate from this hardware identity.

- Selected flow: Complete rail-guided cable-drawn passenger carriage at manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: cable-native-interfaces-2016

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed participant rail sightseeing itinerary (`completed_sightseeing`)

One actual participant completing the declared rail sightseeing experience, including its contracted train segments, observation/interpretation quality, stops and included incidentals. A return or reboarding inside that same itinerary is not another completed tour. Tickets, passes, train movements, party bookings and passenger-km do not establish this output.

- Selected flow: Completed participant rail sightseeing itinerary
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion`
- Sources: unsd-cpc3-sightseeing; nps-rail-excursions-2026

###### Actual external AC electricity export (`export_ac`)

Only separately metered compatible AC crossing an actual external gate. Internal recovered traction electricity, battery storage, coasting and avoided imports are not automatically exported products. Use gross imports and separate exports; do not reduce net import and add a second credit for the same recovery.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_external_export_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: ghg-product-2011

##### Waste flows

###### Actual separately collected locomotive bottom ash (`coal_bottom_ash`)

Actual independently collected firebox/grate bottom residue at generation, with moisture, retained unburned carbon, contamination and receiver measured. Not collected fly ash, airborne PM, clean coal product or a treatment result; no supplied-coal-minus-gas residual formula or default recycling credit.

- Selected flow: Collected coal locomotive firebox bottom ash
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_bottom_ash_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_boiler`
- Sources: ipcc-boiler-2006

###### Actual separately captured locomotive fly ash (`coal_fly_ash`)

Only actual fly ash captured and collected separately from the flue/smokebox system, with real collection/generation gate and composition. Do not require capture where absent or count captured material again as released particles. Different co-collected residues need their actual mixture identity.

- Selected flow: Separately captured coal locomotive fly ash
- Flow property / unit: Mass / kg
- Amount rule: attributed_captured_fly_ash_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_boiler`
- Sources: ipcc-boiler-2006

###### Actual collected boiler blowdown liquid (`boiler_blowdown`)

Only actual aqueous blowdown collected for a declared receiver, with real water/dissolved chemicals/solids state and temperature where material. Steam to atmosphere is not this waste. Direct discharge needs actual substance/receiving-medium rows; tanked blowdown and its treatment/transport are separate responsibilities.

- Selected flow: Collected locomotive boiler blowdown liquid
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_boiler_blowdown_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_boiler`
- Sources: ghg-product-2011

###### Actual separately collected spent mineral lubricating oil (`spent_mineral_oil`)

Only actual used petroleum lubricating oil at generation before treatment, with contamination and receiver documented. Independently identify actual new oil formulation and quantity; issue-to-use does not equal spent output or emission. Oily water, rags, recovered fuel and materially different mixtures are separate identities.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_spent_mineral_oil_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ghg-product-2011

###### Actual collected rail cleaning wastewater (`wash_wastewater`)

Actual separately collected cleaning liquid with actual composition and receiver at generation. It is not boiler blowdown, sanitary sewage, direct water discharge or a treatment service; water input cannot by itself determine wastewater composition/mass.

- Selected flow: Collected sightseeing-rail maintenance-wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_wash_wastewater_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ghg-product-2011

###### Separately collected horse faeces at stable handover (`horse_faeces`)

Only actual independently collected horse faeces at measured wet mass/moisture/C/N and handover gate. It is not faeces+urine+bedding or assumed fertilizer/product/treatment;actual mixed manure stream needs its own real composition/native row without repeating these constituents.

- Selected flow: Separately collected horse faeces at stable handover
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: animal-physiology-2019

###### Separately collected horse urine at holding handover (`horse_urine`)

Only actual distinct held horse urine liquid with native wet mass,water/C/N contents and real receiver. Not all animal wastewater or kgN alone. Actual co-collected manure,bedding,runoff or treatment are independently specified and replace matching constituents once.

- Selected flow: Separately collected horse urine at holding handover
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: animal-physiology-2019

##### Elementary flows

###### Actual direct fossil CO2 to air (`fossil_co2_air`)

Actual fossil-origin CO2 substance mass and compatible air compartment only. Actual burned fuel, unburned carbon in ash and other carbon fates require independent evidence; no complete oxidation assumption or upstream grid exhaust duplication.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban, non-urban or near-ground state to fit it; represent a known state independently with its verified compatible identity and no duplicate exchange.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_direct_fossil_CO2_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-rail-2006; ipcc-boiler-2006

###### Actual direct fossil CH4 to air (`fossil_ch4_air`)

Actual fossil methane in the actual air state; monitoring or a compatible source/technology/activity-specific method is mandatory. Other hydrocarbons, biogenic methane, fuel leakage or CO2-equivalent totals are not this substance by default.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban, non-urban or near-ground state to fit it; represent a known state independently with its verified compatible identity and no duplicate exchange.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_direct_fossil_CH4_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-rail-2006; ipcc-boiler-2006

###### Actual direct N2O to air (`n2o_air`)

Actual kg N2O in compatible air state, not kg N, unspecified NOx or CO2-equivalent. Distinguish locomotive boiler, diesel and supporting sources; no default factor is prescribed.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban, non-urban or near-ground state to fit it; represent a known state independently with its verified compatible identity and no duplicate exchange.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_direct_N2O_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-rail-2006; ipcc-boiler-2006

###### Actual airborne PM2.5 release (`pm25_air`)

Actual independently quantified PM2.5 source and receiving air state, after collection controls. No duplicate PM10/total PM overlap. Captured ash/dust, retained wheel/rail/brake wear, deposits and runoff are actual separate fates; other size/species remain mandatory.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban, non-urban or near-ground state to fit it; represent a known state independently with its verified compatible identity and no duplicate exchange.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_airborne_PM2_5_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ghg-product-2011

###### Actual sulfur dioxide release to air (`so2_air`)

Actual SO2 mass in declared air compartment, not kg S, generic sulfur oxides or all input sulfur by assumption. Retain actual fuel sulfur, retention in ash/liquid, emission controls and independently supported conversion/model.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban, non-urban or near-ground state to fit it; represent a known state independently with its verified compatible identity and no duplicate exchange.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_SO2_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ghg-product-2011

###### Actual steam water released to atmosphere (`steam_water_air`)

Actual water mass released as steam/vapour to the declared air compartment, supported by measurements or a complete documented boiler-water/steam/condensate balance. Not a treatment waste, unexplained inventory deficit, all feedwater by assumption, heat amount or fuel-combustion CO2. Identify recovered condensate/liquid drains and actual fuel moisture separately.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban, non-urban or near-ground state to fit it; represent a known state independently with its verified compatible identity and no duplicate exchange.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_actual_steam_water_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_boiler`
- Sources: ghg-product-2011

###### carbon dioxide (biogenic) (`animal_respiration_co2`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. Preserve actual air medium/subcompartment and biogenic source;the verified biogenic identity is independent of the fossil counterpart. This verified identity is air,unspecified;use only when actual documented receiving scope justifies it.Known urban/nonurban/near-ground or other specific subcompartment requires separately verified compatible atomic identity;unknown receiving scope blocks completion.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: animal-physiology-2019

###### methane (biogenic) (`animal_enteric_ch4`)

Only actual release of this exact substance/origin/particle class from an uncovered source,using actual measurement or independently supported applicable species/technology/fuel/control/activity method. Keep species kg,not C/N or CO2-equivalent;do not infer release from supplied fuel,feed or recharge. Preserve respiration/enteric/manure versus exhaust/nonexhaust/provider scope;no cattle-to-other-species factor or national netCO2 convention to erase physical respiration. PM-size views cannot overlap and R134a leakage needs actual charge/addition/recovery/removal method,not unexplained residual. Preserve actual air medium/subcompartment and biogenic source;the verified biogenic identity is independent of the fossil counterpart. This verified identity is air,unspecified;use only when actual documented receiving scope justifies it.Known urban/nonurban/near-ground or other specific subcompartment requires separately verified compatible atomic identity;unknown receiving scope blocks completion.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_animal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_animal`
- Sources: animal-physiology-2019

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| subdivide_and_share | rail_sightseeing_service | Subdivide dedicated tour/class/provider and separately sold outputs first. For unavoidable shared train/support duty use evidenced compatible physical/activity drivers with all actual users; seats, fares or booked persons are not default shares. Do not add people, cargo mass, meal counts and money as dimensionally equivalent outputs. | ghg-product-2011 |
| asset_life | rail_sightseeing_service | Same-asset delivered manufacturing quantity times actual cohort duty/positive compatible complete-life all-user duty, then/N. Complete initial assets and included components cannot duplicate; restoration/refit, renewals and retirement retain actual separate coverage. Age and financial depreciation are not physical duty. | ghg-product-2011 |
| completed_cohort | rail_sightseeing_service | All constituent movements of a single sightseeing itinerary serve the same participant output. Actual independently fulfilled changed/partial tours, ordinary transport, freight, museum or food outputs need real distinct product boundaries and causal coverage shares. No output is fabricated for idle/empty operation. | ghg-product-2011 |
| recovery | rail_sightseeing_service | Record actual physical recovered products/wastes and destinations. Internal recovered energy/water/material is not a second virgin purchase or external product. Apply one disclosed recycling/allocation method without assumed avoided commute/grid/virgin material credits. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | rail_sightseeing_service | completed_sightseeing | participant_itinerary_fulfilment | itinerary_id; actual_participant_id; whole_rail_sequence; observation_interpretation_quality; class; boarding_alighting; included_stops; agreed_start_end; actual_duration; completion_acceptance; pass_ticket_reconciliation; no_show; altered_partial; cohort_N; period | Define the actual sightseeing service before counting: agreed itinerary, observation/interpretation quality, required rail segments/stops and included content. Reconcile actual attendance and whole-service fulfilment, counting one real participant once per independently fulfilled itinerary, including actual non-paying participants where served. Reboarding/return legs inside one tour do not create additional tours. Pass validity/price or booked capacity is not completion. Disclose materially changed or partial products separately; preserve their actual duties and causal allocation. | Item(s); actual route/time | each actual duty and period/life interface | complete cohort/period and necessary all-life records | all actual train/tour/site/provider users | per declared reference flow | actual contracts/logs/calibration/balances/coverage and uncertainty |
| cp_energy | rail_sightseeing_service | traction_ac; diesel_supply; export_ac | actual_train_duty_energy_stock | train_id; consist; actual_technology; actual_segment_distance; persons_by_segment_and_role; all_user_duty; gross_AC; export_AC; internal_recovery_storage_loss; diesel_supply_stock_withdrawal_burn_spill_recovery_transfer; blend_origin; positioning_shunting_start_idling_heat; failed_cancelled; provider_gate | Measure actual train and supporting duties over the complete attribution period: empty positioning/shunting, starts, layover/heating, auxiliary loads, failed/cancelled duty and actual standby. Separate train-distance, person-distance and whole-tour N. Allocate complete shared train duties before/N with evidenced all-user drivers; never infer occupancy from seats. Net fuel withdrawal=opening+receipts-closing-returns; reconcile burn/spill/recovery/transfer independently. Use whole compatible blend+origin ledger OR replacing components, never both. Internal generated/recovered power is not another purchase; gross external import/export owns losses once. | MJ; actual kWh; kg; actual distance/time | each actual duty and period/life interface | complete cohort/period and necessary all-life records | all actual train/tour/site/provider users | per declared reference flow | actual contracts/logs/calibration/balances/coverage and uncertainty |
| cp_boiler | rail_sightseeing_service | bituminous_coal; boiler_tap_water; coal_bottom_ash; coal_fly_ash; boiler_blowdown; steam_water_air | actual_steam_boiler_fuel_water_residue_balance | locomotive_boiler_id; firing_state; startup_warm_standby; actual_fuel_rank_blend; received_moisture_ash_C_S_heating_basis; actual_burned; ignition_fuel; supplied_water_treatment; tank_boiler_stock; condensate; steam_release; leakage; blowdown_composition; bottom_fly_ash_unburned_carbon; controls; native_mass; receiver; actual_alluser_duty | For actual steam routes retain cold/warm starts, firing, hot standby, auxiliary or ignition fuels, and boiler/steam cycle evidence. Independently meter/weigh fuel, make-up water, ash collections and blowdown; reconcile actual moisture, carbon/ash/sulfur, boiler/tank stocks, steam/condensate and recovered/liquid fates without forcing unexplained residuals to emissions. Water supply is not automatically steam emission; coal issue is not coal burned or fully oxidized. Captured fly ash and bottom residue stay separate from airborne species. Chemical treatment/other water/fuel types require exact separate expansion. Attribute each actual native quantity then/N. | kg of each actual fuel/water/stream/species; supported native units | each actual duty and period/life interface | complete cohort/period and necessary all-life records | all actual train/tour/site/provider users | per declared reference flow | actual contracts/logs/calibration/balances/coverage and uncertainty |
| cp_support | rail_sightseeing_service | site_ac | actual_tour_site_task_provider | station_depot_visitor_site; observation_guide_audio_equipment; task_native_meter_quantity; heating_cooling_cleaning; access_stops; allusers; coverage_cells; actual_shares | Collect actual station/depot, observation, interpretation, visitor and stop-support duties and physical supplies. Subdivide dedicated tasks, then allocate measured shared residual by justified compatible all-user drivers; crew/guides/servers are support roles, not participant outputs. Do not omit supplied interpretation merely because transport provider covers traction, or charge an entire independent museum/holiday to this itinerary. Attribute actual native quantities/N. | actual task/native material/energy/provider units | each actual duty and period/life interface | complete cohort/period and necessary all-life records | all actual train/tour/site/provider users | per declared reference flow | actual contracts/logs/calibration/balances/coverage and uncertainty |
| cp_maintenance | rail_sightseeing_service | spent_mineral_oil; wash_wastewater | actual_rail_component_formulation_fate | asset_task_id; new_oil_grease_chemical_refrigerant; actual_formulation_native_quantity; stock_reuse_recovery; rail_wheel_brake_wear; collected_water_residues; actual_species_medium; receiver; outsourcing_coverage | Retain actual maintenance/restoration/cleaning records and independent component/fluid balances. Identify each real new oil/grease/chemical/coolant/refrigerant/part and physical residue/release by exact state, native quantity and receiver. Oil issue is neither emitted oil nor generated spent oil. Wastes, captured wear, direct emissions and treatment results remain different. An inclusive outsourced maintenance result replaces only its verified covered supplies/tasks/fates once. Divide attributed quantities by N. | kg; actual part/task native units | each actual duty and period/life interface | complete cohort/period and necessary all-life records | all actual train/tour/site/provider users | per declared reference flow | actual contracts/logs/calibration/balances/coverage and uncertainty |
| cp_assets | rail_sightseeing_service | steel_passenger_coach; coal_steam_locomotive; finished_steel_rail | same_asset_complete_life_supply | asset_id; actual_technology_assembly; native_delivered_quantity; initial_component_inclusion; manufacture_restoration_refit_renewal; installation; all_life_duty_users_periods; cohort_duty; museum_otheruse; reuse_relocation; retirement_provider; uncertainty; actualanimal_species_priorrearing_currentcare; work_rest_alluserlife; nativecoupledrope_drive_contact_cooling; original_vsreplacement_phase | Build the complete real rolling-stock/boiler/tender/track/station/depot/observation-support register, not only example cards. Allocate each supplied manufacture quantity by cohort duty/positive compatible same-asset complete-life all-user duty, then/N. Include actual prior/future uses, museum/other functions and restoration/refit/renewal events with disclosed projected-duty uncertainty. A delivered manufacturing UUID covers only its actual supply gate; lifetime is an allocation basis, not whole-life tour coverage. Complete initial assemblies and their included components are exclusive. Independently add uncovered installation, operation, maintenance, restoration, replacements and retirement/treatment once. For animals,delivered/reared native head quantity covers only proved pre-service stages;same-body complete-life alluser compatible duty allocates that phase while actual work/rest/currentfeed/care/retirement remain separately owned. Do not convert a biological body into manufactured machinery or double inclusive rearing/care. | Item(s); kg; compatible actual useful-duty units | each actual duty and period/life interface | complete cohort/period and necessary all-life records | all actual train/tour/site/provider users | per declared reference flow | actual contracts/logs/calibration/balances/coverage and uncertainty |
| cp_emissions | rail_sightseeing_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air; so2_air | source_specific_substance_medium_record | source_id; actual_rail_boiler_engine_support; activity_burn; technology_controls; measured_species; model_source_version_unit; carbon_sulfur_nitrogen_basis; size_fraction_overlap; compartment; uncertainty | Use actual monitoring or fully supported source/technology/activity-specific emission methods; retain exact substance mass/origin, particle size and receiving subcompartment. Steam boiler, diesel engine, auxiliary and upstream/provider sources differ. Do not transplant diesel factors to coal steam, kgN to kgN2O, kgS to kgSO2, CO2e to species or all fuel carbon to oxidized CO2. Captured ash/wear and other media are separate; missing emissions or LCIA characterization are not zero. Attribute non-overlapping native species/N. | kg of each actual substance/size/medium | each actual duty and period/life interface | complete cohort/period and necessary all-life records | all actual train/tour/site/provider users | per declared reference flow | actual contracts/logs/calibration/balances/coverage and uncertainty |
| cp_bundle | rail_sightseeing_service | completed_sightseeing | actual_sightseeing_bundle_and_rail_provider | actual_contract_and_fulfilment; observation_interpretation_quality; guides_audio_stops; included_food_drink_actual_recipe; actual_ingredient_packaging_energy_waste; provider_native_result_and_coverage; separatelysold_products; actual_leg_to_participant_mapping; duplicate_cells | Resolve the actually delivered sightseeing bundle. Included guides, audio/observation support, stop activities, accompanying services and food/drink require their real atomic supplies/provider results, native quantities and fates; no universal meal/guide-hour recipe is prescribed. Unknown included content blocks complete use. Independently sold meals/other outputs require subdivision and justified residual shares, not omission of their shared train/support burden. For purchased results per rail leg/passenger-distance, multiply by actual compatible supplied legs/distance before cohort attribution/N; only an already equivalent per-tour result avoids another division. Purchased rail-leg/provider results may replace their exact covered duty only with actual segment/count/native-unit mapping to participants; they are not the completed sightseeing output and must not duplicate foreground train energy/assets/emissions or other included providers. | actual ingredient/material/provider native units | each actual duty and period/life interface | complete cohort/period and necessary all-life records | all actual train/tour/site/provider users | per declared reference flow | actual contracts/logs/calibration/balances/coverage and uncertainty |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_human | rail_sightseeing_service | actualhumandriveandroles | actual_native_record | function_supplier_participant_operator; actualrailvehicle_assistance; actualroles_work_rest; task_quantity; dedicatedfood_drink_PPE_safety; subsistence_respiration_boundary; actualapplicablephysiology_ifincluded; providercoverage; allusers_share; N | For actual human propulsion distinguish who supplies the vehicle,human driving/guidance and assistance,who is a passenger/participant,and the real work/rest/task and provider boundary. A pedal vehicle or self-powered activity does not itself prove passenger-sightseeing function. Record actual dedicated work food/drink,PPE,safety,accessibility and support,and actual electrical assistance/storage if present. Disclose ordinary human subsistence/respiration boundary and sensitivity;do not assert human work/metabolism is zero or invent employee-labour fuel,wage/calorie-to-fossil-fuel factors. If attributable metabolic inputs/releases are included,require independently applicable actual intake/exertion/respiratory mass,origin and receiver evidence without duplicating provider/participant food. Attribute native quantities once to the actual coherent participant cohort then/N;not a generic work/animal/mechanism factor. | Actualnativeunits | eachactualduty/cohort andlifeinterface | completealignedperiod/life | allactualusers/providers/receivers | per declared reference flow | Originalactualrecords,nativemethod/phase/receiverclosure anduncertainty |
| cp_animal | rail_sightseeing_service | actualanimalspeciescareandfates | actual_native_record | species_body_cohort_age; priorrearing_gate; feed_grazing_state_moisture_C_N; water_supply_intake; body_stock_change; work_rest_care_housing_bedding; actualrespiration_enteric_manure_faeces_urine_species_receiver; alluserlife_cohortduty; providerphase; uncertainty; N | For every actual animal species and physical cohort collect age/body history,prior rearing/acquisition gate,current feed/grazing/water/care/health/housing/bedding,work/rest/retired support periods and all real users. Examplehorse/hay cards do not cover all species/rations. Prior rearing/delivered-animal and current care/manure phases are exclusive;inclusive providers replace matching phases. Use independently applicable species physiology and actual as-received/wet/dry ration,C/N/moisture,body-stock change and water balance to reconcile respiration,enteric/manure substances,faeces/urine and actual receiver/treatment. Do not apply cattle/equid factors to another species,erase physical respiration through a national netCO2 convention,or create emissions from residuals. Separately collected faeces/urine are not a fictitious mixture;actual co-collected bedding/manure requires its real native composition/row and replaces those same constituents once. Attribute native quantities once to the actual coherent participant cohort then/N;not a generic work/animal/mechanism factor. | Actualnativeunits | eachactualduty/cohort andlifeinterface | completealignedperiod/life | allactualusers/providers/receivers | per declared reference flow | Originalactualrecords,nativemethod/phase/receiverclosure anduncertainty |
| cp_native | rail_sightseeing_service | actualcoupledandspecialrailmechanism | actual_native_record | actualfunction_mechanism; support_propulsion_contact_state; wholecoupledroute_directions_loads_allusers; grosssource_drive_auxiliary_standby_test_rescue; rope_gear_controls_guideway; cooling_cryogen_stock; originalfirstfill_phase; sameasset_lifetime_duty; periodtopup_recovery_vent_retention; providercoverage; receiver; N | For an actual rail-guided cable/rack or coupled mechanism establish its supplied sightseeing function separately from ordinary cable transport. Record the whole coupled route,directions,carriages/counterweights/loads,rope/winding/drive/brake/control,station/standby/rescue/test/empty operation and actual gross source energy across all users. A shared drive is not charged independently once per carriage,direction or participant. No nominal power,mgh,load proportion or assumed regenerative credit supplies energy. Rope/guide/support/contact/rack/gear lubrication/wear,construction and original/replacement phases have real native identities and cycles;whole installed systems and contained components are exclusive. Actual external export has one gate/owner without another avoided-energy credit. Separate actual wheel/rack/tyre contact,linear primary-coil/reaction-plate and electromagnetic/superconducting support/propulsion/guidance,low-speed/emergency contact,power electronics and cooling. Meter complete actual duty including stationary levitation and auxiliaries where applicable;no stopped/coasting or noncontact=zero-energy/wear assumption. Inductive guidance does not invent a second external power supply;persistent magnet current does not erase refrigeration/control. Cryostat original firstfill not included in whole manufacture is long-term delivered inventory allocated by compatible same-asset cohort duty/positive complete-life all-user duty then/N,with retention/recovery/fate closure. Actual period top-up is attributed from stock/use/fates;circulation,recondensation,pure transfer and retained stock are not fresh consumption. Other actual coolants/cryogen-free designs require real evidence,not universalhelium. Technical cases/test projects do not establish actual eligible sightseeing output. Attribute native quantities once to the actual coherent participant cohort then/N;not a generic work/animal/mechanism factor. | Actualnativeunits | eachactualduty/cohort andlifeinterface | completealignedperiod/life | allactualusers/providers/receivers | per declared reference flow | Originalactualrecords,nativemethod/phase/receiverclosure anduncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| actual_normalization | rail_sightseeing_service | Actual attributable native quantity to the cohort with complete justified all-user shares, then divide by positive N once. For a per-leg or per-passenger-distance provider result, first multiply by the actual compatible supplied legs/distance to obtain its cohort quantity, then apply the same N once. A result already per one equivalent completed sightseeing itinerary retains that exact basis without another division. Tickets, fares and offered capacity do not substitute for actual supplied legs/distance. | cp_completion; cp_energy; cp_boiler; cp_support; cp_maintenance; cp_emissions; cp_bundle; cp_human; cp_animal; cp_native | attributed native quantity per reference | ghg-product-2011 |
| asset_supply | rail_sightseeing_service | Same-asset actual delivered manufacture quantity times cohort duty/positive compatible complete-life all-user duty, then/N. Lifetime allocates verified manufacture coverage only; uncovered restoration/refit/install/use/replacements/retirement remain independent. | cp_assets | attributed native quantity per reference | ghg-product-2011 |
| fuel_water_fates | rail_sightseeing_service | On compatible boundaries reconcile opening+receipts-closing-returns into actual separately evidenced burn/spill/recovery/transfer fates; independently reconcile boiler water/steam/condensate/blowdown and native ash/carbon/sulfur controls. Do not create species from unexplained residuals, stock deficits or default oxidation. | cp_boiler; cp_energy; cp_emissions | attributed native quantity per reference | ghg-product-2011 |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_work_care_drive | rail_sightseeing_service | For actual human propulsion distinguish who supplies the vehicle,human driving/guidance and assistance,who is a passenger/participant,and the real work/rest/task and provider boundary. A pedal vehicle or self-powered activity does not itself prove passenger-sightseeing function. Record actual dedicated work food/drink,PPE,safety,accessibility and support,and actual electrical assistance/storage if present. Disclose ordinary human subsistence/respiration boundary and sensitivity;do not assert human work/metabolism is zero or invent employee-labour fuel,wage/calorie-to-fossil-fuel factors. If attributable metabolic inputs/releases are included,require independently applicable actual intake/exertion/respiratory mass,origin and receiver evidence without duplicating provider/participant food. For every actual animal species and physical cohort collect age/body history,prior rearing/acquisition gate,current feed/grazing/water/care/health/housing/bedding,work/rest/retired support periods and all real users. Examplehorse/hay cards do not cover all species/rations. Prior rearing/delivered-animal and current care/manure phases are exclusive;inclusive providers replace matching phases. Use independently applicable species physiology and actual as-received/wet/dry ration,C/N/moisture,body-stock change and water balance to reconcile respiration,enteric/manure substances,faeces/urine and actual receiver/treatment. Do not apply cattle/equid factors to another species,erase physical respiration through a national netCO2 convention,or create emissions from residuals. Separately collected faeces/urine are not a fictitious mixture;actual co-collected bedding/manure requires its real native composition/row and replaces those same constituents once. For an actual rail-guided cable/rack or coupled mechanism establish its supplied sightseeing function separately from ordinary cable transport. Record the whole coupled route,directions,carriages/counterweights/loads,rope/winding/drive/brake/control,station/standby/rescue/test/empty operation and actual gross source energy across all users. A shared drive is not charged independently once per carriage,direction or participant. No nominal power,mgh,load proportion or assumed regenerative credit supplies energy. Rope/guide/support/contact/rack/gear lubrication/wear,construction and original/replacement phases have real native identities and cycles;whole installed systems and contained components are exclusive. Actual external export has one gate/owner without another avoided-energy credit. Separate actual wheel/rack/tyre contact,linear primary-coil/reaction-plate and electromagnetic/superconducting support/propulsion/guidance,low-speed/emergency contact,power electronics and cooling. Meter complete actual duty including stationary levitation and auxiliaries where applicable;no stopped/coasting or noncontact=zero-energy/wear assumption. Inductive guidance does not invent a second external power supply;persistent magnet current does not erase refrigeration/control. Cryostat original firstfill not included in whole manufacture is long-term delivered inventory allocated by compatible same-asset cohort duty/positive complete-life all-user duty then/N,with retention/recovery/fate closure. Actual period top-up is attributed from stock/use/fates;circulation,recondensation,pure transfer and retained stock are not fresh consumption. Other actual coolants/cryogen-free designs require real evidence,not universalhelium. Technical cases/test projects do not establish actual eligible sightseeing output. | cp_human;cp_animal;cp_native;cp_assets;cp_energy;cp_maintenance;cp_completion | Actualnativework/care/source/lifetime/fate ledger before one /N |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_completion | rail_sightseeing_service | Require actual sightseeing purpose, whole itinerary/quality/class/duration, participant roles and completion evidence with N>0. Tickets/day passes, nominal capacity or a supplied regional-rail leg are not completion. | cp_completion |
| bundle_contents | rail_sightseeing_service | Resolve each actual included interpretation/guide/observation/stop/food/drink/accompanying service. Expand every real ingredient/formulation, packaging, energy, cleaning and fate independently with native quantity/process/direction/type/identity/protocol/source/gate. Unknown included content blocks use; never add a generic meal or guide default. | cp_bundle |
| actual_traction | rail_sightseeing_service | Identify every actual qualifying railway support/propulsion/work/care configuration and each source/grade. Non-coal steam fuel, ignition/auxiliary fuels, actual DC/charging/batteries/hybrids/H2 or other technologies require separately supported native identities/quantities/coverage before use. Do not force all technologies everywhere or adopt a universal electric/steam/diesel factor. | cp_energy; cp_boiler |
| steam_closure | rail_sightseeing_service | For real steam duty require stock-adjusted fuel and actual burned activity, received moisture/ash/carbon/sulfur bases, water/steam/condensate/blowdown, captured residues/unburned carbon and actual release controls. Every real additional water-treatment chemical, fuel, recovered stream and source/medium is row-addressably expanded; unexplained deficits and missing data are not emissions or zero. | cp_boiler; cp_emissions |
| full_assets | rail_sightseeing_service | Complete all actual rolling stock/boilers/tenders/observation fittings, track/sleepers/ballast/structures/signals/stations/depot/land and relevant restoration/refit/build/renewal/retirement coverage. Examples are not the complete register. Each actual specific assembly/material/provider needs compatible native quantities and same-asset all-user life evidence. | cp_assets |
| other_materials_fates | rail_sightseeing_service | Expand every actual lubricant/grease/chemical/refrigerant/battery/part, sanitary/food/cleaning waste, treatment, direct substance/particle size and air/water/soil/noise/land-related exchange with independently supported native identity and receiver. Uncharacterized releases and LCIA gaps are disclosed; no umbrella waste/emission or default zero. | cp_maintenance; cp_emissions; cp_support |
| provider_coverage | rail_sightseeing_service | Each actual purchased operation/rail-leg/guide/food/site/maintenance/manufacture/treatment result must have specific native output quantity, compatibility, stage boundaries and covered cells. Match leg-to-tour participants explicitly and replace only identical covered foreground exchanges. Unknown provider scope blocks complete use. | cp_bundle; cp_assets |
| identity_and_uncertainty | rail_sightseeing_service | Verify every actual exchange identity/property/unit/gate and actual quantity evidence. Unresolved concrete cards and missing generic ranges are explicit candidate gaps, not substitutes for complete actual inventory, zeros or invented values. Disclose sampling, duty-allocation, future life, provider and characterization uncertainty. | cp_completion; cp_assets; cp_emissions |

These are mandatory collection and independent row expansion obligations, not umbrella exchanges. Establish actual presence or evidenced non-use, then every specific process/direction/type/identity/native quantity/source/protocol/gate. Unknown required data blocks complete use; the concrete examples do not delete other actual inputs or fates.

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| native_human_completion | rail_sightseeing_service | For actual human propulsion distinguish who supplies the vehicle,human driving/guidance and assistance,who is a passenger/participant,and the real work/rest/task and provider boundary. A pedal vehicle or self-powered activity does not itself prove passenger-sightseeing function. Record actual dedicated work food/drink,PPE,safety,accessibility and support,and actual electrical assistance/storage if present. Disclose ordinary human subsistence/respiration boundary and sensitivity;do not assert human work/metabolism is zero or invent employee-labour fuel,wage/calorie-to-fossil-fuel factors. If attributable metabolic inputs/releases are included,require independently applicable actual intake/exertion/respiratory mass,origin and receiver evidence without duplicating provider/participant food. | cp_human;cp_completion;cp_bundle |
| native_animal_completion | rail_sightseeing_service | For every actual animal species and physical cohort collect age/body history,prior rearing/acquisition gate,current feed/grazing/water/care/health/housing/bedding,work/rest/retired support periods and all real users. Examplehorse/hay cards do not cover all species/rations. Prior rearing/delivered-animal and current care/manure phases are exclusive;inclusive providers replace matching phases. Use independently applicable species physiology and actual as-received/wet/dry ration,C/N/moisture,body-stock change and water balance to reconcile respiration,enteric/manure substances,faeces/urine and actual receiver/treatment. Do not apply cattle/equid factors to another species,erase physical respiration through a national netCO2 convention,or create emissions from residuals. Separately collected faeces/urine are not a fictitious mixture;actual co-collected bedding/manure requires its real native composition/row and replaces those same constituents once. | cp_animal;cp_assets;cp_emissions;cp_maintenance |
| native_coupled_and_advanced | rail_sightseeing_service | For an actual rail-guided cable/rack or coupled mechanism establish its supplied sightseeing function separately from ordinary cable transport. Record the whole coupled route,directions,carriages/counterweights/loads,rope/winding/drive/brake/control,station/standby/rescue/test/empty operation and actual gross source energy across all users. A shared drive is not charged independently once per carriage,direction or participant. No nominal power,mgh,load proportion or assumed regenerative credit supplies energy. Rope/guide/support/contact/rack/gear lubrication/wear,construction and original/replacement phases have real native identities and cycles;whole installed systems and contained components are exclusive. Actual external export has one gate/owner without another avoided-energy credit. Separate actual wheel/rack/tyre contact,linear primary-coil/reaction-plate and electromagnetic/superconducting support/propulsion/guidance,low-speed/emergency contact,power electronics and cooling. Meter complete actual duty including stationary levitation and auxiliaries where applicable;no stopped/coasting or noncontact=zero-energy/wear assumption. Inductive guidance does not invent a second external power supply;persistent magnet current does not erase refrigeration/control. Cryostat original firstfill not included in whole manufacture is long-term delivered inventory allocated by compatible same-asset cohort duty/positive complete-life all-user duty then/N,with retention/recovery/fate closure. Actual period top-up is attributed from stock/use/fates;circulation,recondensation,pure transfer and retained stock are not fresh consumption. Other actual coolants/cryogen-free designs require real evidence,not universalhelium. Technical cases/test projects do not establish actual eligible sightseeing output. | cp_native;cp_assets;cp_energy;cp_maintenance |
| atomic_actual_expansion | all inventory rows | Each actual unrepresented material/species/animal/vehicle/site asset,provider,supply,waste/release/fate requires unique row_id,oneexistingprocess,direction/type,single concrete identity/state,UUIDorregisteredunresolved,native property/unit/actualquantity/rawsource,sameparentCP,triggeringrequirement_id,evidencedcalculation/providerphase/receiver anduncertainty. Actualmixturesmeasurednotcollectors. Missingactualoccurrence/identity/quantity/coverage/fate blockscompleteuse,notzero or productexclusion;affirmativenon-use/coveredproviderproofrequired. | all declared collection protocols |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| function_and_N | rail_sightseeing_service | Check actual whole participant sightseeing fulfilment, single pure 1 Item(s) reference, positive same-cohort N and aligned itinerary/class/quality/content. No duplicated constituent/return tour counts, staff-as-participant counts or ticket-as-completion assumption. | ghg-product-2011 |
| native_and_steam | rail_sightseeing_service | Reconcile actual native energy/fuel/moisture/carbon/sulfur/water/ash stocks, burning and physical fates, full train auxiliary/empty/failed duty, regeneration/storage/loss and all-user shares. Whole fuel versus components exclusive; no automatic withdrawal=burn or feedwater=steam release. | ghg-product-2011 |
| coverage | rail_sightseeing_service | Verify complete tour bundle, actual branch/native identities, provider replacement cells, manufacturing-only versus full life scope, capital/restoration/renewal/retirement and independent physical wastes/species/media. Actual mandatory gaps preclude complete-service use. | ghg-product-2011 |
| comparison | rail_sightseeing_service | Compare only equivalent actual sightseeing itinerary/duration/observation and interpretation quality, class/content, traction/duty/geography/period and lifecycle boundaries. Equal counts, distances or seats alone cannot establish comparable experiences or universal intensity/advantage. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset/background_dataset only after actual identities, coverage and quantitative evidence complete |
| allowed_use | Actualeligible participantwhole rail sightseeing itinerary/programme,declaredquality/content/completion andallactualnativebranches/provider/lifecycle |
| excluded_use | Generictransport/technologyfactor;barehire/admission/primaryactiveadventure orwholeunrelatedholiday relabelled;unmodelled actualhuman/animal/cable/otherroute/provider/fates |
| required_metadata | actual_supplier_participant_operator_responsibility; actual_native_support_propulsion_and_work_care; sightseeing_function; actual_whole_itinerary_and_stops; rail_technology_and_consist; route_distances; duration_period; observation_interpretation_quality; class; actual_included_content; completion_and_N; actual_participant_staff_roles; empty_failed_standby_duty; fuel_and_water_state; boiler_ash_steam_fates; provider_coverage; same_asset_all_user_life; actual_species_medium; geography_and_uncertainty |
| required_quality_disclosure | All actual/unresolved identities/quantities; full tour and steam/rail/provider/capital/fate coverage; period/alluser life/duty, sampling/model and LCIA gaps |
| update_trigger | Changed itinerary/experience/class/content/completion, traction/boiler/energy/consist, providers/assets/duty/life or source/medium/fate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-sightseeing | official_guidance | UNSD CPC 3.0 Explanatory Notes,30June2025,p360–361,64131. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Rail sightseeing classification only; no completed-tour unit, traction coverage, duration or quantity factor prescribed. |
| nps-rail-excursions-2026 | official_guidance | NPS Steamtown Train Rides, actual public snapshot21October2026, page updated10October2026. https://www.nps.gov/stea/planyourvisit/trainrides.htm | Actual excursion versus day-valid short-ride ticket and operating-condition distinctions, qualitative case only. No current price/schedule/duration/occupancy or universal service factor adopted. |
| ipcc-rail-2006 | official_guidance | IPCC 2006 Guidelines, Vol.2 Ch.3, §3.4 introduction, pp.3.39–3.40. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Actual electric/diesel/steam rail source/activity distinction and tourist-steam boiler approach. No numerical emission/deterioration/power factor or claim all historical source prevalence remains current. |
| ipcc-boiler-2006 | official_guidance | IPCC 2006 Guidelines, Vol.2 Ch.2, §2.1–2.3, pp.2.6–2.11. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | Source/technology-specific stationary-boiler gas approach and actually burned fuel basis only. No default full oxidation/factors or complete multi-impact steam-tour inventory supplied by this GHG guidance. |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard 2011, chapters 7–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Transparency, actual data and subdivision/physical allocation hierarchy. Complete capital/heritage-restoration/tour-bundle scope and collection formulas are explicit authored PCR choices, not default factors or a capital mandate attributed to the standard. |
| working-equid-context-2021 | official_guidance | WOAH TerrestrialCode7.12,actual19July2021edition,scope7.12.2 andfeeding/care7.12.6–13. https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/chapitre_aw_working_equids.pdf | Limited working-equid care/feed/water/rest context only. The chapter excludes leisure-only equids;not automatic normative welfare certification or all-species/tour applicability.No ration/life/emissionfactor adopted;actual site/species care evidence mandatory. |
| animal-physiology-2019 | official_guidance | IPCC2019RefinementVol4Ch10,actual§10.1–10.5 species/feed,enteric/manure,C/N context. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Actualspecies/foodstate/enteric/manure pathways only,not cattle-equid-others equivalence or a physicalrespirationzero from nationalnetCO2 convention.No defaultfactor/ration adopted. |
| cable-native-interfaces-2016 | standard | EU2016/424 asadopted9March2016 AnnexI/II. https://www.legislation.gov.uk/eur/2016/424/annexes/adopted?view=plain | Dated cable infrastructure/rope/drive/brake/vehicle/control/rescue technical interfaces only;not current/extraterritorial law,automatic sightseeingclassification or actualenergy/life/wear factor. |
| rail-native-mechanisms | handbook | Retained primary technical contexts:HitachiReview54(4)2005 https://www.hitachi.com/ICSFiles/afieldfile/2005/12/26/r2005_04_107.pdf ;JapanSubwayAssociation https://www.jametro.or.jp/tips/linear/how-linear-motor-works/ ;Aichi2019 https://www.pref.aichi.jp/soshiki/kotsu/0000006670.html ;SYTRAL2026 https://magazine.sytral.fr/le-metro-c-unique-au-monde/ ;JRCentralSCMAGLEV https://scmaglev.jr-central-global.com/about/ and https://scmaglev.jr-central-global.com/faq/ | Specific tyre/rack/linear/EMS/SC/cooling/low-speed-contact interfaces only,not proof a case supplies64131 or currentcompletedcommercialtour. Actualspecificconfiguration/source needed.No advertisedperformance,energy/maintenancezero or numericalfactor adopted. |
