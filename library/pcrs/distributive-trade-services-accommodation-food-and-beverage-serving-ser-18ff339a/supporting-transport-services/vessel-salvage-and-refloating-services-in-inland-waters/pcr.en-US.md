---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.vessel-salvage-and-refloating-services-in-inland-waters
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Vessel salvage and refloating in inland waters: recovery tasks

## 1. Scope and Applicability

Recovery of distressed/sunken vessels and their identified cargo in inland rivers, lakes, canals and comparable inland waters, including raising, righting a capsized vessel and refloating a stranded vessel. Define the actual recovery endpoint and custody handoff. Mobilization, surveys, stabilization, conditional cargo removal, diving, lift/buoyancy, dewatering and cutting are included only where part of that actual recovery scope; no single equipment route is mandatory. [Source: `un-cpc-67532`; `usace-mcalpine-salvage`]

This methodology covers the defined non-standalone-towing recovery subset. Independently delivered transport towing/pushing, coastal/ocean salvage (67531), lifeboat/search-and-rescue, marine firefighting, policing/public-order functions, ordinary transport and independently sold shipbreaking or pollution clean-up are excluded. A movement necessary to the actual recovery/handoff is an identified support stage or purchased process counted once; it does not establish classification of a separately sold tow.

The original vessel/cargo is a customer asset under recovery, not newly manufactured output. Preserve its identity, initial condition, quantities and handoff in a custody ledger. Its prior manufacture is not repeated as an input to this service, and recovery does not automatically create avoided pollution, avoided manufacture or scrap substitution credits.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.vessel-salvage-and-refloating-services-in-inland-waters |
| classification_refs | CPC3.0 67532; narrower non-standalone-tow recovery scope |
| covered_products | Inland vessel/cargo salvage, raising, righting and stranded-vessel refloating with identified recovery handoff |
| excluded_products | Standalone towing/pushing; coastal salvage; life rescue/fire/police; ordinary transport; standalone shipbreaking/clean-up |
| representative_product | One accepted inland recovery task for the named vessel/cargo and declared success endpoint |
| production_route | Survey and establish initial condition → actual stabilization/recovery stages → verified state/custody handoff → attributable site clearance/return |
| market_state | Completed defined recovery service; recovered original property separately accounted |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Recover, raise, right or refloat the identified inland casualty to the agreed state/handoff |
| How much | One accepted task, declaring vessel/cargo identity, initial state and exact completion extent |
| How well | Documented stability/floatation/recovery/hand-over acceptance criteria appropriate to the actual plan, not a universal success percentage |
| How long or cycle | Full assigned task through accepted endpoint including actual standby, failed attempts, weather/high-water delay, mobilization and return |
| reference_flow_link | `recovery_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed qualified inland vessel or cargo recovery task |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | task/object IDs; vessel type/dimensions/displacement and cargo identity/mass; distress/sunken/capsized/stranded initial condition; depth/current/water-level/visibility; freshwater or actual salinity; riverbed/contamination baseline; bridge/lock/access constraints; stage plan and actual route; craft/crane/pump/diving/cutting equipment; real power/load/time; standby/failed attempts; success endpoint/custody handoff; support movement and supplier boundary |

item is the singular alias of formal Item(s); export Item(s). A named recovery task is not a generic vessel, tonne, tow or crane lift. Cargo-only, whole-vessel, righting and refloating tasks retain distinct extent/condition scenarios. Count contracted whole-task completion once, not every lift, pump hour, recovered component or retry. Preserve partial/failed work as burden with disclosed endpoint; do not invent a successful complete output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `task_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_task binds initial state, recovery stages and accepted endpoint/custody handoff; tasks of different physical extent are not equivalent by count alone. |
| `fuel_mass` | diesel; petrol | Mass | kg | Measure fuel by actual engine/pump/crane duty and record corresponding load/time; nameplate power or casualty mass is not measured fuel or energy. |
| `water_origin` | oily_water; sediment; benzene_water | Mass; Volume | kg; m3 | Separate initial casualty contamination/background, recovered contaminant and incremental recovery release; preserve wet/dry and concentration bases. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed inland casualty and documented pre-operation pollution/riverbed condition; actual available recovery assets |
| starting_condition_role | foreground_start |
| product_classification_scope | Defined inland salvage/recovery/refloating subset; independent towing and public rescue functions excluded |
| recursive_input_rule | Purchased recovery stages and necessary support movements enter once with exact endpoint; no duplicate full-project and subcontractor activity |
| upstream_dataset_requirement | Actual fuel/electricity/gases/material supply, working craft/equipment life shares, reception/treatment and support transport |
| disclosure | Initial casualty/pollution and river conditions; actual stages/equipment; completion interfaces; old-property custody; new release; supplier/upstream gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_recovery` | Include actual survey, mobilization, stabilization, cargo removal/lightening, lift/righting/refloating, dewatering, necessary supporting movement, custody handoff and site clearance/return. Select from real staged plan, not a universal recipe. | usace-mcalpine-salvage |
| `boundary_diving` | Include professional diving resources only when actually used and record actual project/equipment/gas/energy/time conditions; this inventory does not prescribe a diving or cutting procedure. | hse-inland-diving |
| `boundary_casualty` | Keep initial ship/cargo/oil as a separately identified custody/contamination ledger, not new manufactured co-products. Track recovered amounts, residual condition, receiver and actual incremental environmental releases separately. |  |
| `boundary_actual` | Screen all actual energy, lifting/diving/cutting gas and materials, support movements, rigging/boom/asset shares, water/soil disturbance, each waste and species release. Add each present exchange atomically; never substitute marine seawater recipients for inland freshwater. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery | Survey, support and complete identified inland recovery | required | Actual recovery project and handoff, including shared resources and whole-task accounting | foreground_production | per reference flow |
| lifting | Lift, right, buoy or dewater as actually planned | conditional | Actual equipment route; not all tasks need every step | foreground_production | per reference flow |
| diving | Perform actual professional dive contribution | conditional | Actual diving stage only | foreground_production | per reference flow |
| cutting | Perform actual documented cutting contribution | conditional | Actual specified cutting route; surface and underwater methods not assumed interchangeable | foreground_production | per reference flow |

### Process: Lift, right, buoy or dewater as actually planned (`lifting`)

#### Inputs

##### Product flows

###### Steel wire lifting sling (`steel_sling`)

Actual rigging material/lifetime share; keep rated configuration records without assuming generic lifting capacity.

- Selected flow: Steel wire lifting sling
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Reinforced-rubber inflatable lifting bag (`lift_bag`)

Conditional actual buoyancy-assist route; record actual bag construction and gas/air supply separately; no assumed lifting volume.

- Selected flow: Reinforced-rubber inflatable lifting bag
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Floating salvage crane (`floating_crane`)

Conditional actual crane route; declare crane/pontoon/prime-mover aggregate boundary and avoid adding included vessel components again.

- Selected flow: Floating salvage crane
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Submersible dewatering pump (`pump`)

Conditional actual dewatering; retain pump capacity/duty records and upstream production share; power/fuel is measured separately.

- Selected flow: Submersible dewatering pump
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

### Process: Perform actual professional dive contribution (`diving`)

#### Inputs

##### Product flows

###### Compressed air, breathing quality (`breathing_air`)

Only externally supplied breathing air; document composition/quality and cylinder mass balance. Internally compressed air is not purchased again beside its compressor energy. Other actual blends need separate specific rows.

- Selected flow: Compressed air, breathing quality
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Commercial surface-supplied diving system (`diving_system`)

Conditional actual professional diving; record configuration, compressor/chamber coverage and supported utilization; no default gas or depth.

- Selected flow: Commercial surface-supplied diving system
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

### Process: Perform actual documented cutting contribution (`cutting`)

#### Inputs

##### Product flows

###### Oxygen, industrial gas (`oxygen`)

Conditional actual recorded cutting gas; distinguish it from breathing gas and record returned cylinder stock.

- Selected flow: Oxygen, industrial gas
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Acetylene (`acetylene`)

Only an actual above-water oxyacetylene cutting route recorded in the work plan; do not prescribe this gas for underwater cutting. Other tools/gases require their own actual rows.

- Selected flow: Acetylene
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Above-water oxyacetylene cutting set (`cutting_rig`)

Conditional actual cutting equipment; record actual duty/lifetime share; no assumption that every wreck must be cut.

- Selected flow: Above-water oxyacetylene cutting set
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

### Process: Survey, support and complete identified inland recovery (`recovery`)

#### Inputs

##### Product flows

###### Diesel fuel, petroleum-derived (`diesel`)

Actual salvage support vessels, cranes, generators or pumps only; distinguish each engine/duty and fuel specification in records. Original casualty fuel is not a purchased operating input.

- Selected flow: Diesel fuel, petroleum-derived
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Petrol, petroleum-derived (`petrol`)

Conditional actual petrol pump/support craft operation; separate from diesel and recovered casualty fuel.

- Selected flow: Petrol, petroleum-derived
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Electricity, alternating current (`electricity`)

Actual purchased shore/charging/support electricity; internally generated diesel electricity is not another purchased input.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Tap water (`water`)

Actual fresh cleaning/process supply only; river water pumped from the casualty has separate source/volume records.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Mineral hydraulic oil (`hydraulic_oil`)

Actual crane/winch/pump hydraulic-oil net consumption; distinguish original wreck oil and supplier-covered maintenance.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Polypropylene oil-sorbent pad (`sorbent`)

Conditional actual pads used in salvage containment; measure issued/recovered amounts and captured contaminant separately.

- Selected flow: Polypropylene oil-sorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Floating oil containment boom (`boom`)

Conditional actual boom deployed; specify composite design, deployment duration and supported lifetime-use share rather than assuming disposable use.

- Selected flow: Floating oil containment boom
- Flow property / unit: Length / m
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Inland salvage support workboat (`workboat`)

Actual working craft manufacturing/overhaul/retirement share with hull, engine and fit-out boundary; excludes casualty vessel manufacture.

- Selected flow: Inland salvage support workboat
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

#### Outputs

##### Product flows

###### Completed inland recovery task (`recovery_service`)

One task accepted at its declared recovered-state/custody interface. Whole-project waste and release rows retain the actual generating stage/source, not a claim that releases happen only on completion.

- Selected flow: Completed qualified inland vessel or cargo recovery task
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_task`
- Sources:

##### Waste flows

###### Salvage dewatering wastewater containing oil (`oily_water`)

Actual collected dewatering stream with original/new pollutant origin, composition and treatment. Do not equate all pumped river water with hazardous waste or a pollutant release.

- Selected flow: Salvage dewatering wastewater containing oil
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Recovered riverbed sediment sludge (`sediment`)

Conditional material physically removed during recovery; document wet/dry basis, contamination and receiver, distinct from in-situ resuspension.

- Selected flow: Recovered riverbed sediment sludge
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral hydraulic oil (`spent_oil`)

Actual salvage-equipment maintenance waste only, with custody/treatment separate from casualty oil.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Oil-saturated polypropylene sorbent pad (`oily_sorbent`)

Actual discarded pad plus captured liquid; record component balance and receiver without duplicating recovered oil.

- Selected flow: Oil-saturated polypropylene sorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded steel wire lifting sling (`waste_sling`)

Actual retired rigging material with actual recycling/treatment; no automatic steel substitution credit.

- Selected flow: Discarded steel wire lifting sling
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded carbon-steel cutting offcut (`cut_offcut`)

Only an actual discarded cutting residue within contract; original recovered hull sections handed over as customer property are not new steel co-products.

- Selected flow: Discarded carbon-steel cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2_air`)

Actual operator fuel/cutting-carbon oxidation only; no negative avoided-casualty emission credit.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Carbon monoxide, to air (`co_air`)

Actual species from operator engines/cutting with measurement or explicitly justified activity-specific factors.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen monoxide, to air (`no_air`)

Species-resolved operator release; aggregate NOx-as-NO2 needs justified speciation first.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen dioxide, to air (`no2_air`)

Actual NO2 separately from NO; retain source engine/tool and receiving-air compartment.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Sulfur dioxide, to air (`so2_air`)

Actual fuel sulfur/oxidation or exhaust evidence; no assumed sulfur content.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Particulate matter, aerodynamic diameter below 2.5 micrometres, to air (`pm25_air`)

Actual size-resolved operator combustion/cutting fraction; separate metal species and avoid overlapping total-PM accounting.

- Selected flow: Particulate matter, aerodynamic diameter below 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Benzene, to freshwater (`benzene_water`)

Conditional measured incremental benzene release attributable to recovery after background/casualty distinction. No inference that every wreck contains benzene or all recovered oil is benzene.

- Selected flow: Benzene, to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_project` | Prefer stage/equipment-specific meters and logs; assign shared mobilization, standby, high-water delays and retries by documented actual project activity, then accepted task extent. Do not allocate by salvage award or cargo value. |  |
| `allocate_assets` | Allocate working craft, crane/pontoon, pump, diving/cutting rig, sling and lift bags by supported lifetime utilization and actual task use; aggregate supplier assets and included components cannot both be charged. |  |
| `allocate_custody` | Recovered vessel/cargo is original property, not a newly produced co-product. Keep recovery amounts/fate outside an automatic revenue allocation or avoided-manufacture credit; independently model any further recycling/dismantling study boundary. |  |
| `allocate_pollution` | Record pre-existing casualty pollution separately from operator combustion, new spills and disturbance-induced releases. A removed pollutant mass is not a negative emission; no default avoided future release. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | recovery | recovery_service | foreground record | task/object/cargo IDs; initial state/mass; depth/current/water level; bridge/lock limits; plan/stages; equipment; actual activity; attempts; acceptance/handoff | Reconcile survey, actual recovery plan, equipment/stage logs and signed recovered-state/custody handoff; retain incomplete/failed scope explicitly. | item | each stage/task | same declared task/reporting period | actual inland recovery site and assigned equipment | per reference flow | survey; photographs; stage records; signed handoff |
| cp_energy | recovery | diesel; petrol; electricity | foreground record | engine/tool ID; fuel/stock; delivery/return; shore meter; actual power/load/duration; standby/retry/travel; share | Measure actual operator fuel and purchased electricity by source; reconcile full task cycle without reusing casualty fuel as purchased supply. | kg; kWh | duty interval/task | same declared task/reporting period | actual inland recovery site and assigned equipment | per reference flow | meter calibration; fuel balance; duty logs |
| cp_material | recovery | water; hydraulic_oil; sorbent; steel_sling; breathing_air; oxygen; acetylene | foreground record | specific substance/product; composition; cylinder/stock mass; issued/returned; consumed/retired; task/stage source | Use actual stock/cylinder weighing or traceable delivered quantity; keep breathing/cutting gases and internally generated supply distinct; record material service-life shares. | kg; m3 | issue/event and period | same declared task/reporting period | actual inland recovery site and assigned equipment | per reference flow | stock/cylinder records; composition; supplier boundary |
| cp_asset | recovery | boom; workboat; lift_bag; floating_crane; pump; diving_system; cutting_rig | foreground record | asset ID/configuration; upstream boundary; actual use; maintenance/retirement; lifetime evidence; task share | Bind working equipment to upstream manufacture and retirement; document physical lifetime and actual stage utilization without double-counting included components. | item; m | asset event/period | same declared task/reporting period | actual inland recovery site and assigned equipment | per reference flow | asset/maintenance registers; utilization/life evidence |
| cp_waste | recovery | oily_water; sediment; spent_oil; oily_sorbent; waste_sling; cut_offcut | foreground record | specific waste; original/new source; amount; water/oil/solids composition; wet/dry basis; receiver; treatment; share | Measure each collected stream and custody; distinguish recovered customer property, retained original pollutant, operator waste and treated discharge. | kg; m3 | each collection/transfer | same declared task/reporting period | actual inland recovery site and assigned equipment | per reference flow | waste manifests; sampling; receiver records |
| cp_release | recovery | co2_air; co_air; no_air; no2_air; so2_air; pm25_air; benzene_water | foreground record | source/stage; baseline; actual species/fraction; fuel/exhaust or concentration/flow; receiver; retained/removed pollutant; evidence/factor units | Measure actual operator/incremental release or use explicit justified source/activity factors; separate pre-existing pollution and freshwater receptor; unresolved difference remains a gap. | kg | event/duty and task | same declared task/reporting period | actual inland recovery site and assigned equipment | per reference flow | baseline/discharge tests; mass balance; factor applicability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_denominator | recovery_service | N = accepted completed recovery tasks of the exact initial-state/endpoint scope; require N positive. Component lifts and recovered tonnes do not increase task count. | cp_task | N |  |
| exchange_allocation | all inventory rows | Assign each measured numerator to actual stages/equipment and full task activity using documented physical drivers, then divide by N. Preserve failed attempts, standby and return. | cp_task; cp_energy; cp_material; cp_waste | exchange per reference flow |  |
| asset_allocation | boom; workboat; lift_bag; floating_crane; pump; diving_system; cutting_rig | Allocate production/maintenance/retirement by supported lifetime utilization and actual task share; keep shared pontoon/crane/boat boundaries and divide attributable quantity by N. | cp_asset; cp_task | asset share per reference flow |  |
| source_release | co2_air; co_air; no_air; no2_air; so2_air; pm25_air; benzene_water | Resolve each actual operator or incremental species/fraction release using source-specific measurement/balance or justified factors, separate background/casualty origin and captured mass, then divide attributable quantity by N. Do not turn recovered contamination into negative emissions. | cp_release; cp_waste; cp_task | species per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_object | recovery_service | Initial vessel/cargo identity and condition, inland geography and accepted recovery endpoint/custody are complete; standalone towing not silently selected. | cp_task |
| dq_route | all inventory rows | Actual lifting/dewatering/diving/cutting route and energy/gas/equipment logs, not a universal salvage bill of materials or lifespan. | cp_energy; cp_material; cp_asset |
| dq_pollution | oily_water; sediment; benzene_water | Pre-operation baseline and actual collected/released pollutant/species with receiving freshwater compartments; distinguish unknown from zero. | cp_waste; cp_release |
| dq_identity | all inventory rows | Flow/property/unit support must be verified before linked data production; archive count support is not fresh flow confirmation. | direct identity verification |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_scope` | Require identified inland vessel/cargo recovery, raising/righting/refloating endpoint; reject coastal scope, independent transport tow, public life rescue/police/fire and standalone shipbreaking/clean-up. | un-cpc-67532 |
| `validate_reference` | Require unique recovery_service at 1 item and positive N with actual initial condition/stages/equipment and signed handoff; no duplicate stage/whole-task or recovered-property production outputs. |  |
| `validate_release` | Require separate old-contamination and new-release evidence, specific freshwater species/receiver and actual waste destination. Reject assumed avoided-pollution, scrap substitution and whole-oil-as-one-species shortcuts. |  |
| `validate_coverage` | Require actual source-linked fuel/gas/assets and full task-cycle allocation; unknown baseline, stage or treatment coverage is disclosed. A target check pass is not a safe salvage/diving/cutting approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process inland vessel/cargo recovery task; narrower non-standalone-tow scope |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same actual recovery subtype, initial state, inland site conditions, equipment and accepted endpoint/custody boundary |
| excluded_use | Independent towing; coastal/public rescue; generic per-vessel/tonne recovery factor; avoided pollution/steel credit; unqualified recycling |
| required_metadata | All task qualifiers; N; stage duty/gases/energy; asset life; custody original ship/cargo; contamination baseline; waste receivers; freshwater release evidence |
| required_quality_disclosure | Narrower scope and standalone-tow exclusion; UUID gaps; actual route/extent; baseline/new-release uncertainty; treatment and upstream omissions |
| update_trigger | Initial casualty/river condition, recovery success endpoint, method/equipment, pollution baseline, supplier boundary or material data-quality change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-67532 | official_guidance | UNSD CPC3.0 67532. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67532 | Unambiguous inland recovery/raising/righting/refloating scope and public-rescue exclusions; standalone towing not selected. |
| usace-mcalpine-salvage | official_guidance | USACE Louisville District, Salvage efforts to retrieve sunken barges continue at McAlpine Dam (2019). https://www.lrd.usace.army.mil/Media/News/Article/3637047/salvage-efforts-to-retrieve-sunken-barges-continue-at-mcalpine-dam/ | Observed inland staged recovery, cargo lightening, crane/cutting and variable river levels; case evidence only, no generic machinery count, fuel, yield or duration. |
| hse-inland-diving | official_guidance | HSE, Commercial diving projects inland/inshore, L104 second edition2014, official scope description. https://www.hse.gov.uk/pubns/books/l104.htm | Inland commercial-diving applicability screening only; full code procedures, legal compliance and numeric gas/depth requirements not inferred. |
