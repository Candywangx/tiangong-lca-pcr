---
pcr_id: pcr.interurban-rail-passenger-leg-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Interurban railway passenger leg service

## 1. Scope and Applicability

This dedicated PCR covers actual railway passenger transportation between non-contiguous cities,available to all users,regardless of the distance covered or class used. Ordinary,express,high-speed and every other actual qualifying railway service remain included. Establish actual origin/destination city geography and non-contiguity,public availability,service function,class/quality and operating arrangement. No universal kilometre threshold or mandatory predetermined route/schedule is imported from urban64111;an actual timetable is recorded where supplied.

One reference is one actually completed boarding-to-alighting passenger leg of this interurban railway function. N is the positive actual number of functionally compatible completed person-legs for the same origin/destination,service configuration,class/quality and cohort period. Actual distance,route,speed profile and duration are mandatory descriptors rather than alternative denominators. A ticket,pass,reserved seat/train capacity,train movement,each track segment,passenger-kilometre or whole multimodal itinerary is not automatically one completed leg. Transfers to another supplied train service create actual separate legs,without a second combined-journey output here.

All actual qualifying railway support/propulsion technologies and energy routes remain semantic scope:wheel-on-rail,tyre/monorail,rack,linear motors,electromagnetic or superconducting levitation and other real railway mechanisms,electricity/diesel/steam,storage,hydrogen or other actual carriers. Native source,engineering,provider,asset and fate obligations below apply to each actual route. Missing UUID,quantity,technical/factor evidence or an unrepresented configuration blocks complete data production,not inclusion of a genuine64210product. A city-metro case source is physical-interface evidence only,not proof of an actual interurban route or identical hardware.

Exclude railway transportation within one city or contiguous cities64111 and distinct sightseeing/mixed-mode final functions. CPC64210 explicitly excludes sleeping-car services63290 and dining-car services63310:these are distinct actual output/provider interfaces,not permission to erase their shared carriage,traction,climate/sanitation,safety,station,maintenance or capital responsibilities. Identify the actual sold/supplied functions even within a bundled fare,subdivide dedicated cells and allocate residual shared resources with evidenced physical drivers and native quantities. A fare label or separate invoice alone does not determine physical coverage.

Retain transport of actual accompanying vehicles,luggage,animals and other carried items with their real mass/space/handling and restrictions. They are not extra passenger outputs or assumed zero loads. Independently supplied freight,vehicle carriage,sleeping,dining or other outputs keep their native reference and allocation/coverage ledger. Actual passenger-service amenities,accessible facilities and included support remain covered exactly once. Crew are operating roles;children/infants have no assumed adult/seat equivalent.

Include the actual complete boarding-to-alighting interurban leg and its attributable upstream supply/conditioning,loaded/empty/shunting/coasting/waiting/standby,test/rescue/cancelled/failed duties,stations/depots/controls,rolling stock/guideway/civil/power assets,maintenance/refit/replacements and retirement. Cross-border or source-jurisdiction changes retain each actual segment/supplier/medium without arbitrary national-inventory truncation. N=0 has no finite per-leg intensity. The expanded lifecycle and detailed allocation/normalization rules are explicit PCR choices,not universal source-prescribed factors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.interurban-rail-passenger-leg-service |
| classification_refs | CPC3.0 64210;exact;public railway between noncontiguouscities,anydistance/class |
| covered_products | All actual public interurban railway passenger legs between noncontiguouscities,ordinary/express/highspeed and every qualifying technology/energy,class or distance |
| excluded_products | Singlecity/contiguouscity transport64111;sleeping63290/dining63310 as independent services;sightseeing or mixedmode final product;standalonefreight/manufacture/assetavailability |
| representative_product | Completed public interurban railway passenger leg |
| production_route | Actual public interurban railway route/cohort/class with all native support-propulsion sources,independent ancillary ownership and full lifecycle |
| market_state | Actually completed interurban passenger boarding-alighting leg with actual noncontiguouscity extent,service/class/time/quality and coverage |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed public interurban railway passenger leg |
| How much | 1 completed passenger rail leg |
| How well | Declared actual origin/destination, rail type, class, quality, route distance and completion |
| How long or cycle | Actual boarding-to-alighting leg; full supporting duty period and asset life separately disclosed |
| reference_flow_link | completed_interurban_rail_leg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed public interurban railway passenger leg |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | origin_destination_city_noncontiguity; public_availability; actual_operation_arrangement_and_timetable_if_supplied; actual_support_propulsion_mechanism; service_type; origin; destination; actual_segment_distance; completed_person_leg_definition; N; train_service_and_configuration; class_and_quality; timetable_and_period; actual_energy_state_and_supplier; empty_and_cancelled_duty; accompanying_loads_and_coproducts; station_depot_provider_coverage; asset_lifetime_and_duty; geography_and_border_scope; direct_emission_medium |

All inventory is per reference flow. N is the number of actually completed person-legs of the same cohort and period; N must be positive. Required qualifiers must be supplied in dataset metadata, service notes or equivalent package fields. The statistical passenger-km definition informs a separate physical-distance ledger; it does not change this Count denominator or impose a national-border cut-off.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| journey_count | reference product | Number of items | Item(s) | N is the positive number of actually completed person-legs in the same declared cohort; cp_journeys reconciles board/alight evidence, transfers, passes and cancellations. A ticket or reserved capacity does not establish N. |
| distance_basis | all inventory rows | Native compatible property | Actual native unit | Collect actual route distance and passenger loads by segment. Record passenger-distance and train-distance separately; do not relabel the Count reference as passenger-km, divide by nominal seats, or import national territorial distance truncation into a complete declared cross-border leg. |
| energy_state | electricity_ac,regeneration_ac,diesel | Native compatible property | Actual native unit | Keep AC and DC, gross import and external regeneration export, fuel mass and volume distinct. Only a verified compatible density/state converts litres to kg; only a documented fuel heating value converts mass to thermal energy. Electrical kWh uses the verified 3.6 MJ/kWh unit relation, never a fuel heating value. |
| species_basis | co2_fossil,ch4_fossil,n2o | Mass | kg | Emissions are substance mass in the actual receiving medium; distinguish kg CO2 from kg C, kg N2O from kg N, fossil from biogenic carbon and direct release from upstream/provider burdens. Any conversion requires a recorded equation, input basis and source. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual rail service roster, supplied carriers, maintained operating assets and separately identified upstream provider gates |
| starting_condition_role | Declared physical/service starting facts, not zero-burden historical capital or fuel |
| product_classification_scope | CPC3.0 64210;exact;noncontiguouscity public railway anydistance/class |
| recursive_input_rule | A purchased rail subservice is a separately owned input only if its duties are outside the directly modelled train boundary; no self-recursion or duplicate reference output |
| upstream_dataset_requirement | Compatible actual fuel/electricity, provider, manufacture/renewal and treatment datasets with explicit native quantity and non-overlap matrix |
| disclosure | Cohort, leg/timetable/distance, scope ownership, lifetime/capital, co-products, exclusions and unresolved data; no complete-service claim with mandatory gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | all inventory rows | Include all actual activities supporting the declared completed cohort, including attributable empty positioning, shunting, coasting, layover/standby, cancelled or failed duty and maintenance. Coasting does not establish zero auxiliary power or zero assigned supporting burden. No new output count arises from these duties. Supporting-node quantitative references use the same final completed-leg denominator and do not create additional product outputs. Keep unserved demand and cancelled tickets outside N while assigning their actual supporting burdens through a documented causal driver. |  |
| boundary_ownership | all inventory rows | For each provider, meter, station, depot, rolling-stock unit and track asset, declare an input/output gate and coverage matrix. Buy either a complete provider result with its included duties or the disaggregated constituents for that duty; never both. Generic transport or infrastructure dataset names do not prove scope compatibility. | ghg-product-standard-2011 |
| boundary_power | all inventory rows | Do not record power-station emissions again as train tailpipe emissions. Internal regenerated electricity reused within the model boundary is an internal transfer, not another service or exported product. A measured external export crosses its actual gate once and cannot simultaneously be subtracted from a net import and receive an additional credit. | ipcc-mobile-combustion-rail |
| boundary_assets | all inventory rows | Require asset-specific manufacture, renewal, maintenance and retirement coverage over the complete physical service life, allocated once to all users and reporting periods. Manufacture-demand rows below are conditional concrete examples; they do not replace the complete asset register. Already operated or leased assets are not zero-burden, and supplier-embedded capital cannot be added again. | ghg-product-standard-2011 |
| boundary_fates | all inventory rows | Independently identify actual materials, refrigerants, wastewater, maintenance waste, wear particles and exhaust species. Unknown occurrence, species, medium or receiver gate blocks completion. Do not mix captured dust or oily liquid with airborne particles, evaporated water or a treatment activity. |  |

### Actual railway mechanism and extent methods

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| native_interurban_extent | all inventory rows | Prove actual origin/destination non-contiguous cities and availability to all users,regardless distance/class. Record actual ordinary/express/highspeed or other service,operation arrangements/timetable if supplied,route/speed/gradient/stops,duration,train/seat-class configuration,cohort segment passenger/accompanying loads and completion. Material function/class/quality differences require strata. A through train may carry urban and interurban users;record their real separate service outputs and shared physical duty rather than relabel all users interurban,truncate the final leg at a border or use an arbitrary kilometre threshold. | unsd-cpc3-passenger-rail-2025 |
| native_wheels_tyres_rack | all inventory rows | For actual wheel/rack/tyre support identify the complete bogie,traction/brake,rail/beam/rack and guide interfaces. Collect actual tyre type,gas,pressure-state stocks,inflation/recovery/venting,replacement cycles and physical wear. Rubber running/guide/stabilizing tyres and concrete guideway cannot inherit steel wheel/rail wear rates. Rack gear/toothed rail lubrication,cleaning,renewals and test duties remain actual separate phases. No universal gradient,tyre life,friction,wear or traction efficiency is supplied. | hitachi-urban-monorail-2005;sytral-rack-metro-2026 |
| native_linear_levitation | all inventory rows | Identify independently support,propulsion and braking:wheel-supported linear motors retain wheel contact plus primary coil/secondary reaction plate;levitation retains actual magnets/coils/guidance,power electronics and guideway. Collect gross supply separately for propulsion,levitation/gap control,stationary levitation,auxiliaries,conditioning/cooling,standby and rescue with reconciled meter coverage. No assertion that a stopped/coasting train uses zero energy or that lack of rail contact makes all wear/maintenance zero. Actual superconducting or other systems require their own cryogenic/cooling/consumable and engineering evidence,not Linimo values. | jametro-linear-mechanism;aichi-linimo-2019 |
| native_other_energy | all inventory rows | For every actual carrier follow its physical chain. External AC/DC and storage charge are not interchangeable;internal battery/fuel-cell/generator output and regenerated reuse are internal transfers,not extra imports. Battery initial installation/replacement and charging losses have separate covered gates. A fuel-cell route keeps actual delivered hydrogen state/purity/pressure,compression/liquefaction/conditioning,air/oxygen supply,water production,purge/leak/recovery and upstream route;hydrogen supplied is not assumed reacted or emitted,and no stoichiometric inventory substitutes actual quantities. A steam route retains actual fuel grade/carbon origin,boiler feed/makeup/condensate stock,pressure/temperature,heat/steam generation and use,blowdown,ash and actual releases;do not add internally made steam to its own fuel/boiler load or infer kg steam from kg fuel without independent evidence. Missing actual engineering/source data blocks completion,not the qualifying railway product. | ipcc-mobile-combustion-rail |
| native_station_provider_life | all inventory rows | Keep actual underground ventilation/drainage,station climate/escalators/lifts/platform/control/signal,power conversion and depot/test/emergency sources with physical meter/asset scope. Ground-level,elevated and underground civil works and shared users have actual engineering quantities/life;no generic infrastructure intensity. Complete traction/station/depot/construction/repair/treatment providers replace exact covered fuel,power,materials,capital and releases;uncaptured collection transport/conditioning/current maintenance/EoL remain separately completed once. Native manufacture demand times compatible same-asset cohort duty/positive total all-user useful duty,then/N,is a covered delivered-phase allocation,not a full-life rail-service identity. | ghg-product-standard-2011 |

### Interurban cryogenic and ancillary interfaces

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| native_superconducting_scope | all inventory rows | For each actual superconducting/other maglev identify real support,propulsion,guidance,power collection and low-speed/emergency contact states. Inductively energized levitation/guidance coils are not an invented second externally powered source;attribute actual coupled propulsion/guidance supply through measured engineering coverage. Persistent magnet current does not make cooling,controls,propulsion or standby energy zero. Record actual cryostat/cryocooler electricity,helium or other coolant initial charge/top-up/stock,circulation/recondensation,recovery,transfer and measured vent/loss,fate and maintenance phases. Do not count recirculating helium as fresh supply each pass;initial charge already included in manufactured equipment is not added again. Actual cryogen-free or other configurations retain independently evidenced cooling/consumable and lifecycle obligations;no universal liquid-helium consumption or imported speed/temperature/efficiency. Technical demonstrations or future project pages do not prove completed public interurban commercial service;actual supplied service must satisfy the reference. If an actual original cryostat fill is independently modelled and not already included in manufactured equipment/provider coverage,it is a long-term initial inventory/delivered phase:attribute actual native first-fill mass by studied compatible same-asset duty divided by positive complete-life all-user duty,then/N,with initial-stock retention and eventual recovery/fate closure. Do not charge the entire first fill as current maintenance consumption. Actual operating top-up is assigned from actual period stock/use/fate records and causal user shares,then/N. Retained stock,pure transfer,circulation and recondensation are not consumption or fresh purchases. Keep these phases distinct within the actual supplier/asset ledger. | jr-scmaglev-native |
| native_ancillary_scope | all inventory rows | For sleeping63290/dining63310 and every actual independent ancillary output record function,provider/owner,native actual quantity/quality/time,persons or occupied berth/room-night or prepared serving only as actually defined,and a stage/resource ownership matrix. These units are not transport person-legs and are never invented from ticket price or adult/seat equivalents. Dedicated linen/laundry/bed fitout,food/galley service and their actual ingredients/energy/wastes belong to their real service owner;common carriage/traction,climate/sanitation,safety and capital require subdivision or justified physical allocation across real outputs/all users. A complete purchased ancillary/transport result replaces its exactly included local cells once;expand uncovered cells only. Incidental support actually part of the passenger-transport function stays inside that function;no automatic food,hotel,linen or whole sleeping-car deletion merely from a classification cross-reference. Missing actual allocation/provider/native data blocks a complete transport result. | unsd-cpc3-passenger-rail-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rail_operation | Actual train operation and passenger delivery | required | All declared completed journeys | foreground | completed_interurban_rail_leg |
| rail_maintenance | Allocated station/depot and maintenance tasks | required | Actual supporting activities including outsourced coverage | supporting | completed_interurban_rail_leg |
| rail_capital | Complete-life rolling-stock and infrastructure demand | required | All actual assigned assets, with period/user attribution | supporting | completed_interurban_rail_leg |

### Process: Actual train operation and passenger delivery (`rail_operation`)

#### Inputs

##### Product flows

###### Actual AC rail-operation electricity (`electricity_ac`)

Only actual AC entering the declared train/station supply boundary, with supplier, location, voltage interface, period and conversion losses recorded. Match an actual AC import; DC supply, battery charging results and other carriers require their own actual identity. The generic energy support label is Net calorific value, but this verified flow expresses electrical energy; it is not a fuel factor.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed native quantity / N; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `ipcc-mobile-combustion-rail`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### Actual diesel supply for the diesel route (`diesel`)

Conditional on actual diesel consumption in the declared duty, including attributable shunting, positioning and standby. Record fuel grade/blend, stock changes and all losses; measure mass or support a native-volume conversion. For an actual blend, use one compatible whole-blend input with its measured composition/carbon-origin ledger, or replace its overlapping supply by actual component inputs with mass and provider-coverage closure; never count a whole blend plus its contained component supplies. Another actual fuel needs its own compatible identity. Do not infer a fossil proportion or fuel consumption merely because the service is rail.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity / N; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `ipcc-mobile-combustion-rail`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### Compressed gaseous hydrogen at railway fuelling handover (`hydrogen_supply`)

Only actual compressed gaseous hydrogen with purity/pressure/temperature/native mass,upstream production and included delivery/compression identified. Liquidhydrogen or an unspecified hydrogensource is not interchangeable. Supplier scope replaces matching conditioning once;actual unprovided compression,distribution and stock/vent/purge/recovery remain covered. Supply/withdrawal/reaction/leak/fate distinct;no assumed electrolysis or zero carbon.

- Selected flow: Compressed gaseous hydrogen at railway fuelling handover
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`

###### Bituminous coal at steam-locomotive fuel supply gate (`coal_supply`)

Only actual documented bituminous coal grade/as-received moisture,carbon origin and native supply mass at compatible gate. Other solid/liquid/biogenic boiler fuels require their own rows;no assumption that steam means coal. Fuel supply/stock/actualburn/spill/ash differ;no heating value,boiler efficiency or steam yield is guessed. Wholeblend and replacing components exclusive.

- Selected flow: Bituminous coal at steam-locomotive fuel supply gate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `ipcc-mobile-combustion-rail`

###### Deionised boiler make-up water at supply gate (`boiler_makeup_water`)

Only actual supplied deionised liquid makeup water at documented quality/temperature/native volume. Not tap water,all boilerfeed or total steam:recirculated condensate is internal,otherwatergrades separate. Supply,retention,steam/condensate,blowdown,evaporation and actual released species/receiver independently reconcile;no supplydifference=waste or universal density/steamconversion. Treatmentincludedprovider replaces its own inputs once.

- Selected flow: Deionised boiler make-up water at supply gate
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed compatible native quantity / N; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `ipcc-mobile-combustion-rail`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed rail passenger service (`completed_interurban_rail_leg`)

One actually completed boarding-to-alighting person-leg on the declared public rail service. Journey/segment identifiers, actual distance and class are qualifiers, not extra output products. This is the transport service, not a passenger body, vehicle, ticket, generic freight activity or passenger-kilometre.

- Selected flow: Completed public interurban railway passenger leg
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_journeys`
- Sources: `eurostat-rail-manual-2025`; `unsd-cpc3-passenger-rail-2025`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### Actual external regenerated AC electricity export (`regeneration_ac`)

Conditional on a separately metered actual AC energy delivery beyond the declared foreground boundary, using a gross-import/separate-export account. Internal traction recovery, DC energy, avoided consumption or an already-netted billing balance is not this output. Retain actual transfer gate, losses and compatible energy quality; no assumed displacement credit.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed native quantity / N; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `ghg-product-standard-2011`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

##### Waste flows

##### Elementary flows

###### Actual CO2 released directly to air (`co2_fossil`)

This bound identity is Emissions to air, unspecified. Use it only when the actual record explicitly retains that unspecified subcompartment with documented justification. Do not collapse known urban, non-urban, near-ground or other specific receiving information; expand a separately verified compatible substance/subcompartment row instead, without also counting this row.

Conditional on actual direct release of this substance to air. Use compatible measured species data or a documented fuel/technology-specific emissions method; no numeric factor is supplied here. Fossil-carbon cards require demonstrated fossil origin, and N2O is reported as kg N2O, not kg nitrogen. Other origins, substances or media are mandatory separate expansion records. Purchased electricity and complete upstream/provider emissions are not train tailpipe releases.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity / N; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion-rail`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### Actual CH4 released directly to air (`ch4_fossil`)

This bound identity is Emissions to air, unspecified. Use it only when the actual record explicitly retains that unspecified subcompartment with documented justification. Do not collapse known urban, non-urban, near-ground or other specific receiving information; expand a separately verified compatible substance/subcompartment row instead, without also counting this row.

Conditional on actual direct release of this substance to air. Use compatible measured species data or a documented fuel/technology-specific emissions method; no numeric factor is supplied here. Fossil-carbon cards require demonstrated fossil origin, and N2O is reported as kg N2O, not kg nitrogen. Other origins, substances or media are mandatory separate expansion records. Purchased electricity and complete upstream/provider emissions are not train tailpipe releases.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity / N; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion-rail`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### Actual N2O released directly to air (`n2o`)

This bound identity is Emissions to air, unspecified. Use it only when the actual record explicitly retains that unspecified subcompartment with documented justification. Do not collapse known urban, non-urban, near-ground or other specific receiving information; expand a separately verified compatible substance/subcompartment row instead, without also counting this row.

Conditional on actual direct release of this substance to air. Use compatible measured species data or a documented fuel/technology-specific emissions method; no numeric factor is supplied here. Fossil-carbon cards require demonstrated fossil origin, and N2O is reported as kg N2O, not kg nitrogen. Other origins, substances or media are mandatory separate expansion records. Purchased electricity and complete upstream/provider emissions are not train tailpipe releases.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity / N; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion-rail`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

### Process: Station/depot maintenance and cleaning (`rail_maintenance`)

#### Inputs

##### Product flows

###### Actual tap water for rail maintenance and cleaning (`tap_water`)

Only actual supplied liquid tap water for cleaning or maintenance within the assigned service scope. Keep source quality/state, period and provider coverage. Reclaimed water, direct environmental withdrawal, drinking-water products and other supplies are different identities. Supplied water does not determine wastewater or evaporation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed native quantity / N; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### Gaseous nitrogen supplied for tyre inflation (`nitrogen_inflation`)

Only actual separately supplied gaseous nitrogen with purity,state and supply gate. Record actual native supplied mass,beginning/end contents,inflate/recover/vent and conditioning energy;pressure is not gas mass. Air and other actual inflation gases are separate identities,not universally nitrogen. Supply does not establish elemental release;actual receiving medium/species/fate separately. This generic verified nitrogen-gas identity does not certify actual purity,delivery/conditioning phase or an air-separation production route;require actual supplier evidence and independently complete uncovered transport/compression/conditioning. Not a vented nitrogen emission or assumed inflation factor.

- Selected flow: Nitrogen gas `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `hitachi-urban-monorail-2005`

###### Liquid helium at cryostat-fill handover (`liquid_helium_supply`)

Only actual separately supplied liquid helium with purity,cryogenic state,native delivered mass and provider/supply/conditioning coverage proved. Gaseous helium,closedloop circulation or cryostat capacity is not this liquid supply. Initial charge included inside manufactured equipment/provider is not added twice;actual top-up/refill,stock,recondensation,recovery/transfer and vent/leak/fate remain distinct. No presumed daily loss,make-up ratio or zero cryocooler electricity. Otheractualcoolants/cryogen-free systems require actual separate native records,not automatic helium. If an actual original cryostat fill is independently modelled and not already included in manufactured equipment/provider coverage,it is a long-term initial inventory/delivered phase:attribute actual native first-fill mass by studied compatible same-asset duty divided by positive complete-life all-user duty,then/N,with initial-stock retention and eventual recovery/fate closure. Do not charge the entire first fill as current maintenance consumption. Actual operating top-up is assigned from actual period stock/use/fate records and causal user shares,then/N. Retained stock,pure transfer,circulation and recondensation are not consumption or fresh purchases. Keep these phases distinct within the actual supplier/asset ledger.

- Selected flow: Liquid helium at cryostat-fill handover
- Flow property / unit: Mass / kg
- Amount rule: If an actual original cryostat fill is independently modelled and not already included in manufactured equipment/provider coverage,it is a long-term initial inventory/delivered phase:attribute actual native first-fill mass by studied compatible same-asset duty divided by positive complete-life all-user duty,then/N,with initial-stock retention and eventual recovery/fate closure. Do not charge the entire first fill as current maintenance consumption. Actual operating top-up is assigned from actual period stock/use/fate records and causal user shares,then/N. Retained stock,pure transfer,circulation and recondensation are not consumption or fresh purchases. Keep these phases distinct within the actual supplier/asset ledger. Collection: cp_maintenance with same-asset lifetime records from cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `jr-scmaglev-native`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Separately collected spent mineral lubricating oil (`spent_mineral_oil`)

Conditional on an independently collected actual spent mineral lubricating-oil stream at its generation/handover gate before treatment. Account for any collection transport and treatment as separate actual responsibilities. Record retained contaminants, water and container tare; do not relabel oily wastewater, mixed absorbents, virgin lubricant, recovered fuel or a treatment service as this stream. A materially different co-collected mixture requires its own identity.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity / N; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

##### Elementary flows

### Process: Rolling-stock and infrastructure manufacture demand (`rail_capital`)

#### Inputs

##### Product flows

###### Conditional manufacture demand: Complete steel-bodied unpowered railway passenger coach at manufacture gate (`steel_passenger_coach`)

Only if the actual asset register establishes this exact physical product and manufacture gate. Attribute new/replacement manufacture demand by the declared cohort share of complete service-life duty, with component-specific renewal cycles and compatible native units. It is not an entire train, infrastructure bundle or annual depreciation charge. Other rolling stock/track configurations and their actual end-of-life flows remain mandatory separate records. These rows demand manufacture/supply only. Do not attach a complete rail-service or full-life provider result to this manufacture product. If an actual provider also includes operating fuel, direct emissions, maintenance or retirement, identify that exact native result separately and replace the overlapping local exchanges; never add both. Collect missing maintenance and retirement independently.

- Selected flow: Complete steel-bodied unpowered railway passenger coach at manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed native quantity / N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### Conditional manufacture demand: Finished steel railway track rail at manufacture gate (`finished_steel_rail`)

Only if the actual asset register establishes this exact physical product and manufacture gate. Attribute new/replacement manufacture demand by the declared cohort share of complete service-life duty, with component-specific renewal cycles and compatible native units. It is not an entire train, infrastructure bundle or annual depreciation charge. Other rolling stock/track configurations and their actual end-of-life flows remain mandatory separate records. These rows demand manufacture/supply only. Do not attach a complete rail-service or full-life provider result to this manufacture product. If an actual provider also includes operating fuel, direct emissions, maintenance or retirement, identify that exact native result separately and replace the overlapping local exchanges; never add both. Collect missing maintenance and retirement independently.

- Selected flow: Finished steel railway track rail at manufacture gate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity / N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### Conditional manufacture demand: Prestressed concrete railway sleeper at manufacture gate (`concrete_sleeper`)

Only if the actual asset register establishes this exact physical product and manufacture gate. Attribute new/replacement manufacture demand by the declared cohort share of complete service-life duty, with component-specific renewal cycles and compatible native units. It is not an entire train, infrastructure bundle or annual depreciation charge. Other rolling stock/track configurations and their actual end-of-life flows remain mandatory separate records. These rows demand manufacture/supply only. Do not attach a complete rail-service or full-life provider result to this manufacture product. If an actual provider also includes operating fuel, direct emissions, maintenance or retirement, identify that exact native result separately and replace the overlapping local exchanges; never add both. Collect missing maintenance and retirement independently.

- Selected flow: Prestressed concrete railway sleeper at manufacture gate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity / N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: Actual site/duty/cohort records and applicable upstream or factor evidence are mandatory; no universal quantity, occupancy, lifetime or emission range is supplied.

###### New pneumatic monorail running tyre at manufacture gate (`monorail_running_tyre`)

Only an actual complete specified running tyre,not guide/stabilizing tyres or a whole bogie. Record compound,reinforcement,geometry/configuration and native delivered count. Initial tyres already inside whole-vehicle manufacture are not added again;actual replacements retain their own installed cohort and compatible lifetime. Manufacturing atplant omits actual delivery/conditioning unless proved included;add missing phases once. Not a generic road-tyre identity or a service-life result.

- Selected flow: New pneumatic monorail running tyre at manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `hitachi-urban-monorail-2005`

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
- Sources: `jametro-linear-mechanism`

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
- Sources: `aichi-linimo-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all inventory rows | First subdivide or submeter dedicated train, station, maintenance and asset activities. Where subdivision is infeasible, document the physical cause, all users and compatible driver for each residual shared burden; GHG Product Standard chapter 9 supports this hierarchy, not a universal rail factor. | ghg-product-standard-2011 |
| allocation_passengers | all inventory rows | Allocate train-segment passenger burdens using measured cohort segment occupancy/distance and class resources, then sum the attributed cohort numerator and divide by its N. Use actual exposed coach-space/time or another evidenced causal driver for amenities/overheads when passenger-distance is unsuitable. Include other actual cohorts in every denominator; nominal seats, ticket revenue, fares or operator-average occupancy are not default shares. | ghg-product-standard-2011 |
| allocation_coproducts | all inventory rows | Passenger-distance and freight tonne-distance have different dimensions and must not be added. For mixed passenger/freight trains, accompanying vehicles or separately sold ancillary products, subdivide first and justify any remaining traction, capacity and infrastructure shares using actual engineering/activity evidence. Do not treat earlier and later legs of one rail service as co-products; do not allocate twice. | ghg-product-standard-2011 |
| allocation_export_waste | all inventory rows | Actual external electricity exports, recovered materials and wastes need their own physical fate and boundary rule. No automatic avoided-grid, avoided-car, avoided-freight or virgin-material credit is allowed. Disclose the selected allocation/recycling method and preserve all required physical exchanges; an internal power transfer or waste handover cannot multiply completed journeys. | ghg-product-standard-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_journeys | rail_operation | completed person-legs | journey_ledger | cohort_id; origin_destination_city_noncontiguity; public_availability; actual_operation_arrangement_and_timetable_if_supplied; actual_support_propulsion_mechanism; service_type; origin; destination; train_service_id; class; date; actual_boardings; actual_alightings; completion; transfers; ticket/pass reconciliation; actual_segment_km; actual_segment_passengers; N; independent_ancillary_function; ancillary_native_output_quantity_unit_quality_time; ancillary_provider_owner; covered_stage_resource_cells; justified_shared_physical_driver | Reconcile actual passenger counts and origin/destination evidence with operation records; validate sampling and expansions when counts are estimated. Exclude crew and reconcile incomplete/cancelled journeys without erasing their activity burdens. N completed person-legs for the declared cohort; preserve each segment load/distance ledger separately. | Item(s) | each service; reconciled reporting period | same stated period and journey cohort | same train services and actual boarding/alighting stations | per declared reference flow | count reconciliation; route records; sampling coverage; cancellations and transfer audit |
| cp_operation | rail_operation | actual traction and auxiliary duty | meter_and_fuel_ledger | train_id; duty_id; segment; propulsion; electricity_state; gross_import; external_export; losses; beginning_fuel; delivered_fuel; ending_fuel; fuel_leaks; fuel_grade; fuel_density_state; loaded_empty_shunting_coasting_standby; allocation_owner; assigned_quantity; independent_ancillary_function; ancillary_native_output_quantity_unit_quality_time; ancillary_provider_owner; covered_stage_resource_cells; justified_shared_physical_driver | Use calibrated boundary meters, dispatch and refuelling/stock records. Resolve gross versus net electricity metering and allocate measured shared duty with the same actual cohort exposure. Keep failed, empty and standby duty visible. actual attributed native quantity / N completed person-legs; internal regenerated energy is not another external input/output. | native kWh or kg | each meter interval and duty; period reconciliation | same cohort period, with cut-off reconciliation | declared trains, power handover points and assigned stations | per declared reference flow | calibration; billing-meter reconciliation; stock closure; route/technology and provider scope |
| cp_emissions | rail_operation | direct species and actual medium | measurement_or_qualified_model | duty_id; substance; origin; receiving_medium; measured_mass; factor_source_version; factor_unit; compatible_activity; fuel_technology; carbon_or_nitrogen_basis; uncertainty; attribution | Use actual compatible monitoring or a fully documented activity/factor method with independently supported units, technology and period. Do not derive non-CO2 gases solely from CO2 or inherit a factor from a vehicle label. actual attributed species mass / N completed person-legs. | kg of each actual substance | each monitored/modelled duty and period | same duty and cohort period | actual operation release sources attributed to the declared rail service | per declared reference flow | monitor/model files; factor applicability; species and carbon/nitrogen basis audit |
| cp_maintenance_emissions | rail_maintenance | direct species and actual medium | measurement_or_qualified_model | duty_id; substance; origin; receiving_medium; measured_mass; factor_source_version; factor_unit; compatible_activity; fuel_technology; carbon_or_nitrogen_basis; uncertainty; attribution | Use actual compatible monitoring or a fully documented activity/factor method with independently supported units, technology and period. Do not derive non-CO2 gases solely from CO2 or inherit a factor from a vehicle label. actual attributed species mass / N completed person-legs. | kg of each actual substance | each monitored/modelled duty and period | same duty and cohort period | actual maintenance release sources attributed to the declared rail service | per declared reference flow | monitor/model files; factor applicability; species and carbon/nitrogen basis audit |
| cp_maintenance | rail_maintenance | actual maintenance and waste fates | maintenance_and_receiver_ledger | asset_id; task; water_source; material_SKU; net_quantity; native_unit; mixture_contents; receiver; treatment_scope; direct_release_medium; provider_coverage; attributed_quantity; independent_ancillary_function; ancillary_native_output_quantity_unit_quality_time; ancillary_provider_owner; covered_stage_resource_cells; justified_shared_physical_driver; charge_phase; physical_asset_id; first_fill_native_mass; initial_stock_retention; topup; beginning_end_stock; recovery_transfer_vent; compatible_cohort_duty; positive_complete_life_all_user_duty | Read maintenance/cleaning orders, calibrated meters, stock issues and receiver records; independently measure each actual stream and retained contents. Separate physical waste from treatment-service inputs and avoid duplicating supplier-covered tasks. actual task quantities assigned to the cohort by compatible maintenance duty / N completed person-legs. If an actual original cryostat fill is independently modelled and not already included in manufactured equipment/provider coverage,it is a long-term initial inventory/delivered phase:attribute actual native first-fill mass by studied compatible same-asset duty divided by positive complete-life all-user duty,then/N,with initial-stock retention and eventual recovery/fate closure. Do not charge the entire first fill as current maintenance consumption. Actual operating top-up is assigned from actual period stock/use/fate records and causal user shares,then/N. Retained stock,pure transfer,circulation and recondensation are not consumption or fresh purchases. Keep these phases distinct within the actual supplier/asset ledger. | native kg or m3 | each actual task and handover | linked maintenance cycles and reporting period | declared depot/stations and receivers | per declared reference flow | work orders; stock and receiver reconciliation; wastewater/evaporation distinction |
| cp_assets | rail_capital | asset manufacture, renewal and retirement demand | complete_lifetime_asset_register | asset_id; physical_configuration; manufacture_gate; provider_coverage; quantity; native_unit; install_date; renewal_scope; complete_life_duty; all_user_duty; cohort_duty; retirement_fate; lifetime_evidence; uncertainty; independent_ancillary_function; ancillary_native_output_quantity_unit_quality_time; ancillary_provider_owner; covered_stage_resource_cells; justified_shared_physical_driver | Use asset bills of quantities and manufacture/renewal records, actual duty logs and supported complete-life engineering projections. Separate each component renewal from whole-asset demand; reconcile all users and periods, financing/lease responsibility and actual retirement pathways. Unproven useful life blocks a complete capital result. actual manufacture/renewal quantity times documented cohort share of complete-life duty / N completed person-legs; retirement is separately owned. | native Item(s) or kg | asset installation/renewal/retirement; duty period | whole physical life with period/cohort shares | all train, station, depot, track and power assets serving the cohort | per declared reference flow | asset configuration; life/duty sensitivity; all-user closure; coverage and retirement records |

Use cp_emissions for rail_operation releases and cp_maintenance_emissions for rail_maintenance releases. Each protocol remains linked to its actual parent process; shared substance methods do not merge emission sources or create duplicate quantities.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mechanism | rail_operation | actual support/propulsion source mechanism | engineering_and_source_ledger | mechanism_id;wheel_tyre_rack_coil_guideway;actual_configuration;source_state;gross_import;propulsion_levitation_stationary_auxiliary;storage_internal_transfer;boiler_fuel_water_pressure_heat_condensate_blowdown_ash;hydrogen_purity_pressure_stock_reaction_purge_vent;source_receiver;providerphase;cohort_share;N | Identify independently support,propulsion and braking:wheel-supported linear motors retain wheel contact plus primary coil/secondary reaction plate;levitation retains actual magnets/coils/guidance,power electronics and guideway. Collect gross supply separately for propulsion,levitation/gap control,stationary levitation,auxiliaries,conditioning/cooling,standby and rescue with reconciled meter coverage. No assertion that a stopped/coasting train uses zero energy or that lack of rail contact makes all wear/maintenance zero. Actual superconducting or other systems require their own cryogenic/cooling/consumable and engineering evidence,not Linimo values. For every actual carrier follow its physical chain. External AC/DC and storage charge are not interchangeable;internal battery/fuel-cell/generator output and regenerated reuse are internal transfers,not extra imports. Battery initial installation/replacement and charging losses have separate covered gates. A fuel-cell route keeps actual delivered hydrogen state/purity/pressure,compression/liquefaction/conditioning,air/oxygen supply,water production,purge/leak/recovery and upstream route;hydrogen supplied is not assumed reacted or emitted,and no stoichiometric inventory substitutes actual quantities. A steam route retains actual fuel grade/carbon origin,boiler feed/makeup/condensate stock,pressure/temperature,heat/steam generation and use,blowdown,ash and actual releases;do not add internally made steam to its own fuel/boiler load or infer kg steam from kg fuel without independent evidence. Missing actual engineering/source data blocks completion,not the qualifying railway product. | actual native source/species/asset units | each actual source/duty/cohort and engineering change | aligned actual duty/cohort period | actual qualifying railway mechanism,all direct and supporting uncovered sources | per declared reference flow | Actual drawings/meters/stock/phase closure,applicability and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | all inventory rows | Attribute actual native quantities to the declared cohort using documented activity and all-user shares, then divide the resulting cohort numerator by N; do not normalize intermediate transfers again. | cp_journeys;cp_operation;cp_mechanism;cp_maintenance;cp_emissions;cp_maintenance_emissions;cp_assets | native quantity per 1 Item(s) completed person-leg |  |
| segment_attribution | rail_operation | Use actual cohort segment loads/distances and compatible class-resource drivers; preserve segment totals and all users before cohort summation. Passenger-distance, vehicle-distance and freight tonne-distance remain separate dimensions. | cp_journeys;cp_operation | auditable cohort activity numerator | eurostat-rail-manual-2025 |
| asset_duty_share | rail_capital | For each physical asset/component, attribute actual manufacture/renewal demand by cohort duty divided by compatible complete-life all-user duty; handle its retirement once under the declared lifecycle coverage. No financial depreciation or universal service years substitute for physical duty. | cp_assets;cp_journeys | cohort-native asset demand before reference normalization | ghg-product-standard-2011 |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| interurban_native_interfaces | all inventory rows | Prove actual origin/destination non-contiguous cities and availability to all users,regardless distance/class. Record actual ordinary/express/highspeed or other service,operation arrangements/timetable if supplied,route/speed/gradient/stops,duration,train/seat-class configuration,cohort segment passenger/accompanying loads and completion. Material function/class/quality differences require strata. A through train may carry urban and interurban users;record their real separate service outputs and shared physical duty rather than relabel all users interurban,truncate the final leg at a border or use an arbitrary kilometre threshold. For sleeping63290/dining63310 and every actual independent ancillary output record function,provider/owner,native actual quantity/quality/time,persons or occupied berth/room-night or prepared serving only as actually defined,and a stage/resource ownership matrix. These units are not transport person-legs and are never invented from ticket price or adult/seat equivalents. Dedicated linen/laundry/bed fitout,food/galley service and their actual ingredients/energy/wastes belong to their real service owner;common carriage/traction,climate/sanitation,safety and capital require subdivision or justified physical allocation across real outputs/all users. A complete purchased ancillary/transport result replaces its exactly included local cells once;expand uncovered cells only. Incidental support actually part of the passenger-transport function stays inside that function;no automatic food,hotel,linen or whole sleeping-car deletion merely from a classification cross-reference. Missing actual allocation/provider/native data blocks a complete transport result. For each actual superconducting/other maglev identify real support,propulsion,guidance,power collection and low-speed/emergency contact states. Inductively energized levitation/guidance coils are not an invented second externally powered source;attribute actual coupled propulsion/guidance supply through measured engineering coverage. Persistent magnet current does not make cooling,controls,propulsion or standby energy zero. Record actual cryostat/cryocooler electricity,helium or other coolant initial charge/top-up/stock,circulation/recondensation,recovery,transfer and measured vent/loss,fate and maintenance phases. Do not count recirculating helium as fresh supply each pass;initial charge already included in manufactured equipment is not added again. Actual cryogen-free or other configurations retain independently evidenced cooling/consumable and lifecycle obligations;no universal liquid-helium consumption or imported speed/temperature/efficiency. Technical demonstrations or future project pages do not prove completed public interurban commercial service;actual supplied service must satisfy the reference. If an actual original cryostat fill is independently modelled and not already included in manufactured equipment/provider coverage,it is a long-term initial inventory/delivered phase:attribute actual native first-fill mass by studied compatible same-asset duty divided by positive complete-life all-user duty,then/N,with initial-stock retention and eventual recovery/fate closure. Do not charge the entire first fill as current maintenance consumption. Actual operating top-up is assigned from actual period stock/use/fate records and causal user shares,then/N. Retained stock,pure transfer,circulation and recondensation are not consumption or fresh purchases. Keep these phases distinct within the actual supplier/asset ledger. | cp_journeys;cp_operation;cp_mechanism;cp_maintenance;cp_assets | Actual interurban cohort/function/native ancillary and cryogenic resource ledger before single /N |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_energy | rail_operation | For every actual carrier, DC interface, battery, alternative fuel, purchased heat or complete power/traction provider not exactly represented above, identify and add one independently verified atomic exchange with its actual native unit, condition and coverage. Establish evidenced non-use where inapplicable; unknown occurrence is not zero. | cp_operation |
| actual_assets | rail_capital | Complete the entire rolling-stock, track, station, depot, signal and power asset register. Expand actual model/configuration/gate-specific manufacturing and renewal demands and their retirement/treatment flows. The example manufacture cards do not cover other materials or whole infrastructure; unknown asset duty, identity or lifespan blocks completion. | cp_assets |
| actual_maintenance | rail_maintenance | Individually expand each actual lubricant, chemical, refrigerant, cleaning material, spare part, water source and complete outsourced task, with supplier composition and actual occurrence. Track all wastewater, retained mixtures and waste destinations independently; a missing record is not an omission permission. | cp_maintenance |
| actual_emissions | rail_operation,rail_maintenance | Require all actual exhaust, refrigerant, brake/wheel/rail wear and other direct species with source, material state, particle size where relevant and receiving compartment. NOx/NMVOC/particulate totals cannot be assigned an arbitrary individual molecule UUID. Separate biogenic carbon and other media; do not use input stock deficits as emissions. | cp_emissions;cp_maintenance_emissions |
| actual_providers | rail_operation,rail_maintenance,rail_capital | For each actual outsourced train, station, depot, maintenance, power, construction or waste-treatment result, retain native provider output, actual quantity and stage-coverage matrix. Expand a concrete provider service only after identifying its real reference flow; do not force a generic freight or asset UUID. Provider-included inputs/emissions/capital cannot also be counted directly. | cp_assets |
| identity_and_factors | all inventory rows | A final foreground package requires verified actual flow and support identity for every applicable exchange and source-supported quantity relationships. Candidate unresolved cards and absent universal ranges are not zero inputs, verified factors or publication readiness. Missing needed quantity or identity blocks final completion. | cp_journeys |

These are mandatory completion obligations, not unresolved exchange cards or declarations that unknown carriers/assets/species are absent. Each actual occurrence needs its own concrete process/direction/type, property/unit, amount, provider and source/medium/fate identity. An evidenced absence is different from an unmeasured value.

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_classification_extent | completed_interurban_rail_leg | Prove actual origin/destination non-contiguous cities and availability to all users,regardless distance/class. Record actual ordinary/express/highspeed or other service,operation arrangements/timetable if supplied,route/speed/gradient/stops,duration,train/seat-class configuration,cohort segment passenger/accompanying loads and completion. Material function/class/quality differences require strata. A through train may carry urban and interurban users;record their real separate service outputs and shared physical duty rather than relabel all users interurban,truncate the final leg at a border or use an arbitrary kilometre threshold. | cp_journeys;cp_operation |
| actual_native_mechanisms | rail_operation;rail_maintenance;rail_capital | For actual wheel/rack/tyre support identify the complete bogie,traction/brake,rail/beam/rack and guide interfaces. Collect actual tyre type,gas,pressure-state stocks,inflation/recovery/venting,replacement cycles and physical wear. Rubber running/guide/stabilizing tyres and concrete guideway cannot inherit steel wheel/rail wear rates. Rack gear/toothed rail lubrication,cleaning,renewals and test duties remain actual separate phases. No universal gradient,tyre life,friction,wear or traction efficiency is supplied. Identify independently support,propulsion and braking:wheel-supported linear motors retain wheel contact plus primary coil/secondary reaction plate;levitation retains actual magnets/coils/guidance,power electronics and guideway. Collect gross supply separately for propulsion,levitation/gap control,stationary levitation,auxiliaries,conditioning/cooling,standby and rescue with reconciled meter coverage. No assertion that a stopped/coasting train uses zero energy or that lack of rail contact makes all wear/maintenance zero. Actual superconducting or other systems require their own cryogenic/cooling/consumable and engineering evidence,not Linimo values. For every actual carrier follow its physical chain. External AC/DC and storage charge are not interchangeable;internal battery/fuel-cell/generator output and regenerated reuse are internal transfers,not extra imports. Battery initial installation/replacement and charging losses have separate covered gates. A fuel-cell route keeps actual delivered hydrogen state/purity/pressure,compression/liquefaction/conditioning,air/oxygen supply,water production,purge/leak/recovery and upstream route;hydrogen supplied is not assumed reacted or emitted,and no stoichiometric inventory substitutes actual quantities. A steam route retains actual fuel grade/carbon origin,boiler feed/makeup/condensate stock,pressure/temperature,heat/steam generation and use,blowdown,ash and actual releases;do not add internally made steam to its own fuel/boiler load or infer kg steam from kg fuel without independent evidence. Missing actual engineering/source data blocks completion,not the qualifying railway product. Keep actual underground ventilation/drainage,station climate/escalators/lifts/platform/control/signal,power conversion and depot/test/emergency sources with physical meter/asset scope. Ground-level,elevated and underground civil works and shared users have actual engineering quantities/life;no generic infrastructure intensity. Complete traction/station/depot/construction/repair/treatment providers replace exact covered fuel,power,materials,capital and releases;uncaptured collection transport/conditioning/current maintenance/EoL remain separately completed once. Native manufacture demand times compatible same-asset cohort duty/positive total all-user useful duty,then/N,is a covered delivered-phase allocation,not a full-life rail-service identity. | cp_mechanism;cp_operation;cp_maintenance;cp_assets |
| atomic_native_completion | all inventory rows | Every actual unrepresented input,asset,provider,waste or released species/fate requires a concrete single identity/state with unique row_id,oneexistingprocess,direction/type,native property/unit/actual quantity,UUID or registered unresolved identity,raw record/source,same-parent CP,evidenced calculation/coverage/source/receiver and uncertainty. Link triggering requirement_id. Unknown occurrence/identity/quantity/fate blocks complete use,not zero or scope exclusion. Explicit affirmative evidence required for non-use or provider-covered omission. | all declared collection protocols |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_interurban_ancillary_interfaces | rail_operation;rail_maintenance;rail_capital | For sleeping63290/dining63310 and every actual independent ancillary output record function,provider/owner,native actual quantity/quality/time,persons or occupied berth/room-night or prepared serving only as actually defined,and a stage/resource ownership matrix. These units are not transport person-legs and are never invented from ticket price or adult/seat equivalents. Dedicated linen/laundry/bed fitout,food/galley service and their actual ingredients/energy/wastes belong to their real service owner;common carriage/traction,climate/sanitation,safety and capital require subdivision or justified physical allocation across real outputs/all users. A complete purchased ancillary/transport result replaces its exactly included local cells once;expand uncovered cells only. Incidental support actually part of the passenger-transport function stays inside that function;no automatic food,hotel,linen or whole sleeping-car deletion merely from a classification cross-reference. Missing actual allocation/provider/native data blocks a complete transport result. | cp_journeys;cp_operation;cp_mechanism;cp_maintenance;cp_assets |
| actual_interurban_cryogenics | liquid_helium_supply | For each actual superconducting/other maglev identify real support,propulsion,guidance,power collection and low-speed/emergency contact states. Inductively energized levitation/guidance coils are not an invented second externally powered source;attribute actual coupled propulsion/guidance supply through measured engineering coverage. Persistent magnet current does not make cooling,controls,propulsion or standby energy zero. Record actual cryostat/cryocooler electricity,helium or other coolant initial charge/top-up/stock,circulation/recondensation,recovery,transfer and measured vent/loss,fate and maintenance phases. Do not count recirculating helium as fresh supply each pass;initial charge already included in manufactured equipment is not added again. Actual cryogen-free or other configurations retain independently evidenced cooling/consumable and lifecycle obligations;no universal liquid-helium consumption or imported speed/temperature/efficiency. Technical demonstrations or future project pages do not prove completed public interurban commercial service;actual supplied service must satisfy the reference. If an actual original cryostat fill is independently modelled and not already included in manufactured equipment/provider coverage,it is a long-term initial inventory/delivered phase:attribute actual native first-fill mass by studied compatible same-asset duty divided by positive complete-life all-user duty,then/N,with initial-stock retention and eventual recovery/fate closure. Do not charge the entire first fill as current maintenance consumption. Actual operating top-up is assigned from actual period stock/use/fate records and causal user shares,then/N. Retained stock,pure transfer,circulation and recondensation are not consumption or fresh purchases. Keep these phases distinct within the actual supplier/asset ledger. | cp_operation;cp_mechanism;cp_maintenance;cp_assets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | all inventory rows | Verify one unique actual product-output reference row, 1 Item(s), N > 0, same cohort/period and required qualifiers in both languages. Reconcile persons, tickets, passes and segment counts; do not convert seats, train departures or itinerary transfers into output without evidence. |  |
| validate_closure | all inventory rows | Reconcile actual duty and energy/fuel/water/material stocks, segment passenger loads, all-user allocation shares and full-life asset duty. A cancelled/empty operation may carry burden without completed output. Missing data, unmeasured exports or uncertain fates are not synthetic residuals or zero. |  |
| validate_scope | all inventory rows | Check provider/foreground/upstream coverage once, internal transfers versus actual outputs, regeneration gross/net exclusivity, combustion origin/species/medium, kg N2O versus kg N and actual wastewater/waste gates. Require actual unresolved items to expand before a complete-service result. |  |
| validate_comparability | all inventory rows | Compare only matching rail service, origin/destination, distance, class, period, geography, energy/asset scope and quality. Disclose allocation and life/duty uncertainty and whether actual data are representative; no universal intensity, occupancy, trip length or asset life is authorized. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only after all actual native identities,quantities,physical branches,provider coverage,fates and functional review are complete |
| allowed_use | Actual64210completedpublicinterurbanrailwaypersonleg,noncontiguouscities regardlessdistance/class,allrealnative mechanisms with complete applicable evidence |
| excluded_use | Urban64111,sleeping/dining finalfunction or otherproduct relabelled;generic ticket/distance/classfactor;unresolved actualmechanism/ancillary/provider/lifecycle gaps |
| required_metadata | origin_destination_city_noncontiguity; public_availability; actual_operation_arrangement_and_timetable_if_supplied; actual_support_propulsion_mechanism; service_type; origin; destination; actual_segment_distance; completed_person_leg_definition; N; train_service_and_configuration; class_and_quality; timetable_and_period; actual_energy_state_and_supplier; empty_and_cancelled_duty; accompanying_loads_and_coproducts; station_depot_provider_coverage; asset_lifetime_and_duty; geography_and_border_scope; direct_emission_medium |
| required_quality_disclosure | Actual identities and mandatory gaps; N and distance quality; allocation/all-user scope; providers and capital life; regeneration accounting; factor applicability; measured versus projected asset duty |
| update_trigger | Changed route, timetable, propulsion, class/load distribution, provider coverage, assets/lifetime, source/medium/fate, allocation or reference-service definition |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-passenger-rail-2025 | official_guidance | United Nations Statistics Division, CPC Ver.3.0 Explanatory Notes,30 June2025, printed/PDF pp358–362; subclasses64111 and64210. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual64210noncontiguouscity/public/anydistance-class and accompanyingitem function;explicit64111urban,sleeping63290,dining63310interfaces. No Countunit,normalization,ancillary allocation or detailed physical algorithm prescribed. |
| eurostat-rail-manual-2025 | official_guidance | Eurostat, Reference Manual on Rail Transport Statistics, version12.0, April2025, pp30–31. https://ec.europa.eu/eurostat/documents/29567/3217334/Reference%2BManual%2Bon%2BRail%2B%2Btransport%2Bstatistics%2C%2BVer%2B12.pdf | Distinct passenger counts, passenger-distance and train-distance concepts. Statistical national-territory truncation is not the boundary of this PCR; actual service-leg definition and attribution are declared here. |
| ipcc-mobile-combustion-rail | official_guidance | IPCC,2006 Guidelines for National Greenhouse Gas Inventories,Vol2,Ch3,§3.4 pp3.39–3.46. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Rail traction/fuel and direct-gas activity/technology distinctions; electricity-generation burdens are separate from train combustion. No default numeric factor or historical deterioration rate adopted. |
| ghg-product-standard-2011 | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,chapters7 and9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary transparency and subdivision/physical-allocation hierarchy. Capital inclusion is an explicit expanded PCR choice, not a requirement attributed to this GHG-only standard; no universal rail allocation share adopted. |
| hitachi-urban-monorail-2005 | handbook | Hitachi Review54(4),2005,China’s First Urban Monorail System in Chongqing,pp193–197,especially bogies/electricalequipment p196. https://www.hitachi.com/ICSFiles/afieldfile/2005/12/26/r2005_04_107.pdf | Actual dated monorail running/guide/auxiliary tyres,nitrogen and beam/electrical interfaces only;no imported numerical tyre count,pressure,capacity,efficiency,wear/life or general factor. |
| jametro-linear-mechanism | handbook | Japan Subway Association,How does a linear motor car work?,actual primary technical page read2026-10-21. https://www.jametro.or.jp/tips/linear/how-linear-motor-works/ | Wheel-supported linear motor,coil/reactionplate propulsion/braking distinction only;not universal maglev assumptions or energyfactor. |
| aichi-linimo-2019 | official_guidance | Aichi Prefecture,TobuKyuryoLine(Linimo),actual page dated21May2019 read2026-10-21. https://www.pref.aichi.jp/soshiki/kotsu/0000006670.html | Actual electromagnetic suspension/linear propulsion,stationary levitation and separate infrastructure interfaces only;no speeds,gaps,capacity,frequencies,maintenancezero or quantitative factor adopted. Full original web content read,native HTML unavailable. |
| sytral-rack-metro-2026 | official_guidance | SYTRAL Mobilités,Le métro C:unique au monde!,28July2026,actual operator article. https://magazine.sytral.fr/le-metro-c-unique-au-monde/ | Actual rack rail/metro and cleaning/renewal/test duties only;no uniqueness,gradient,closure duration or numerical factor adopted. Former funicular history does not change actual rack-drive function. |
| jr-scmaglev-native | handbook | JR Central,SCMAGLEV principles/FAQ/Yamanashi development,actual primary pages read2026-10-22. https://scmaglev.jr-central-global.com/about/ ; https://scmaglev.jr-central-global.com/faq/ ; https://scmaglev.jr-central-global.com/maglevline/about/ | Conditional superconducting propulsion/guidance,cryogenic circulation and low-speed contact interfaces;technical/testproject context,not proof of current completed commercial service. No advertised speed,height,temperature,power,heliumpercentage or numerical consumption factor adopted;no extrapolated zeroenergy/zerohelium for all designs. |
