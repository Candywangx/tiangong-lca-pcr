---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-hydraulic-locomotive
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Diesel-hydraulic locomotive manufacture

## 1. Scope and Applicability

This candidate PCR governs new complete diesel-hydraulic rail locomotives with diesel engine power transferred through hydrodynamic torque-converter transmission and mechanical final drive to wheelsets. It is narrower than CPC49519. Exclude tenders, steam, electric, diesel-electric and battery/hybrid traction locomotives, pure hydrostatic traction, railcars/multiple units, incomplete frames or engines sold separately, reconstruction/repair and transport/maintenance services. One accepted finished unit is one complete locomotive.

Manufacturing foreground starts at actual received stock and supplier modules and ends at documented complete-vehicle acceptance/delivery. Producer fabrication, assembly, conditional coating, drivetrain/outfitting, attributable construction tests and actual protection are included once; operation and lifetime hauling fuel are excluded. Public manufacturer examples support architecture and possible process stages, not a universal BOM, test cycle or mass. Scientific review is pending. [Sources: zagro-production; gmeinder-model; voith-rail; voith-gears]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-hydraulic-locomotive |
| classification_refs | CPC3.0 49519; narrower context, no accepted mapping |
| covered_products | New complete diesel-hydraulic locomotive with hydrodynamic transmission and mechanical axle drive |
| excluded_products | Tenders and other traction architectures, railcars, incomplete modules and operation/repair services |
| representative_product | One serial-linked accepted complete locomotive of declared gauge, bogies, engine, converter and outfitting |
| production_route | Actual stock/frame fabrication; running-gear integration; diesel hydrodynamic drivetrain installation; conditional coating; controls/auxiliaries; commissioning/acceptance |
| market_state | New complete accepted locomotive, defined retained service-fluid and ballast state, excluding operating fuel/sand and loose delivery items |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the declared complete diesel-hydraulic rail locomotive |
| How much | 1 kg accepted net locomotive output, per-unit records divided by actual M |
| How well | Meet documented configuration-specific geometry, gauge/wheel, drivetrain alignment, brakes/control/safety and actual release criteria. Equal mass does not imply equal tractive effort, speed or transport service; no universal model acceptance limits adopted. |
| How long or cycle | One manufacture and construction-acceptance cycle; no assumed operating lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete diesel-hydraulic rail locomotive |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | producer/model and serial; drawing/BOM revision; gauge, axle arrangement, wheelsets/bogies, axle gears and installed ballast; diesel engine number/type/serial and supplier inclusions; hydrodynamic converter/transmission, cardan shafts, final drive, cooling, brakes and controls; cab/coupler/safety/aftertreatment configuration and actual coatings; net delivery fluid state; accepted positive measured M kg and cp_mass, calibrated weighing evidence and signed corrections; exclude fuel, operational sand, persons, temporary test loads, packaging and loose spares; actual factory/site/period and gate, supplier completion and test coverage |

M includes installed frame/cab, running gear, engine, hydrodynamic drivetrain, controls/outfitting, integral operational ballast and retained working lubricating/transmission/cooling fluids. Exclude fuel, operational sanding stock, persons, temporary trial loads, fixtures, removable protection and loose spares. Record actual same-configuration net accepted mass: a catalogue total weight, axle-load rating, installed power or nominal fill capacity is not M. [Source: gmeinder-model]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_origin` | cp_mass | Mass | kg | Require actual calibrated rail weighing or wheel-load measurements, original serial/configuration-linked instrument and calibration records, all wheels/supports and tare, measured fuel/sand/temporary-load corrections, installed ballast and retained service fluids. Sum independently measured wheel loads only with all supports covered and declared static condition, simultaneous/sequential procedure, calibration and repeatability checks. Signed mass reconciliation establishes net delivery scope. Never infer M from catalogue or an invented per-unit weight. |
| `engine_count` | engine | Number of items | Item(s) | Retain public item-count reference for complete supplied diesel engines. Collect accepted installed engine serial count per locomotive; normalize q_item counts by the same measured M. Record independent actual engine/module mass for configuration and total mass reconciliation, not to rewrite the engine flow property as Mass. |
| `energy_conversion` | electricity | Net calorific value | MJ | Meter attributable intake electricity; actual kWh converts with verified unit identity3.6 MJ/kWh. Record voltage/geography and provider route; nameplate kW is not energy. |
| `fluid_scope` | first fill and trial fuel | Mass | kg | Measure actual net fills and supplier-prefilled contents once, retained versus consumed/discharged. For a volume record require measured same-composition/state density and temperature; nominal tank/oil capacity and generic calorific value are not conversion evidence. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified stock, fabricated frame/bogies and engine/transmission/outfitting modules with actual supplier inclusions |
| starting_condition_role | Foreground receipt-to-accepted-complete-locomotive manufacture |
| product_classification_scope | Complete hydrodynamic diesel-hydraulic locomotive, not tenders or diesel-electric/hydrostatic traction |
| recursive_input_rule | Do not recursively manufacture a complete locomotive as its own input. A bought complete intermediate/module replaces included operations and constituents once. |
| upstream_dataset_requirement | Link actual provider/grade/module completeness, property, route, period/geography; disclose missing upstream and outsourcing |
| disclosure | producer/model and serial; drawing/BOM revision; gauge, axle arrangement, wheelsets/bogies, axle gears and installed ballast; diesel engine number/type/serial and supplier inclusions; hydrodynamic converter/transmission, cardan shafts, final drive, cooling, brakes and controls; cab/coupler/safety/aftertreatment configuration and actual coatings; net delivery fluid state; accepted positive measured M kg and cp_mass, calibrated weighing evidence and signed corrections; exclude fuel, operational sand, persons, temporary test loads, packaging and loose spares; actual factory/site/period and gate, supplier completion and test coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all stages | Include actual producer operations and attributable rework/test and first-fill resources once through the declared gate. Supplier-completed fabrication/assembly is represented by its bought intermediate, not duplicated local resources. Report missing stages and conditional absences explicitly. | `zagro-production` |
| `boundary_operations` | trials and downstream | Construction-acceptance testing belongs to manufacture only for demonstrated represented units and actual protocol. Exclude revenue shunting/hauling, maintenance, spare replacement, operation fuel/sand, infrastructure and lifetime transport service. A supplier development endurance run is not automatically a per-locomotive factory burden. | `voith-gears` |
| `boundary_upstream` | bought inputs | Expose each actual received exchange and supplier manufacturing scope; missing upstream datasets prevent a complete cradle-to-gate claim. Declare outsourcing and actual transport/service links separately with physical measured basis; no unspecified service collection is an inventory flow. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame` | Frame and cab fabrication | conditional | Actual stock fabrication occurs inside the reporting manufacturer boundary. | foreground | one accepted configured locomotive, normalized with M |
| `running_gear` | Bogie, wheelset and brake integration | required | Every complete declared locomotive configuration. | foreground | one accepted configured locomotive, normalized with M |
| `powertrain` | Diesel hydrodynamic drivetrain installation | required | Complete diesel engine and hydrodynamic transmission with mechanical axle drive. | foreground | one accepted configured locomotive, normalized with M |
| `coating` | Conditional surface preparation and painting | conditional | Actual preparation/painting occurs in the manufacturer foreground. | foreground | one accepted configured locomotive, normalized with M |
| `outfit` | Controls and auxiliary outfitting | required | Each complete configuration released by the producer. | foreground | one accepted configured locomotive, normalized with M |
| `acceptance` | Construction commissioning and locomotive acceptance | required | Each accepted complete locomotive and any attributable sampled factory tests. | foreground | one accepted configured locomotive, normalized with M |
| `packing` | Conditional delivery protection | conditional | Actual removable protection supplied at the declared gate. | foreground | one accepted configured locomotive, normalized with M |

Frame fabrication feeds running-gear and drivetrain integration with conditional coating, controls/outfitting and construction acceptance, then conditional protection. Actual station sequence and supplier modules govern attribution. Required assembly stages do not make every listed exchange mandatory: each card requires actual matching composition/state and independent supplier scope. Add every omitted actual component/formulation/species separately before completing a quantitative dataset. Unknown is a gap.

### Process: Frame and cab fabrication (`frame`)

Cut/form/machine specified steel stock, assemble and weld frame/cab and inspect actual joints. Record drawings, actual plate grade, filler/shielding composition, rework and machining fluid. A bought finished frame/cab bypasses its included fabrication; casting, forging or heat treatment are not presumed in-house.

#### Inputs

##### Product flows

###### Hot-rolled carbon-steel locomotive frame plate (`steel_plate`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Hot-rolled carbon-steel locomotive frame plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_frame`
- Sources: `zagro-production`

###### Complete welded steel locomotive frame assembly (`frame_module`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Complete welded steel locomotive frame assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_frame`
- Sources: `zagro-production`

###### Solid carbon-steel arc-welding filler wire (`weld_wire`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Solid carbon-steel arc-welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_frame`
- Sources: `zagro-production`

###### Gaseous carbon-dioxide steel-welding shielding supply (`shield_co2`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Gaseous carbon-dioxide steel-welding shielding supply
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_frame`
- Sources: `zagro-production`

###### Alternating current (`electricity_frame`)

Only actual metered China grid-average user-side1–35kV AC supply matching public identity at this process intake. Different region/voltage/mix/self-generation needs a distinct compatible flow. European manufacturer examples do not locate the reporting plant in China; internal distribution is not repeated supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_frame`
- Sources: `zagro-production`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_offcut`)

Only actual post-industrial carbon-steel forming/cutting scrap leaving the factory untreated, matching public scope, weighed net with recipient. Distinguish oily machining chips, processed secondary steel and internal reuse; no recovery credit is assumed.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_frame`
- Sources: `zagro-production`

###### Segregated carbon-steel machining chips (`steel_chips`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Segregated carbon-steel machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_frame`
- Sources: `zagro-production`

### Process: Bogie, wheelset and brake integration (`running_gear`)

Record actual gauge/axle arrangement, bogie frame, wheelsets, axle gear integration, suspension, brakes and couplers. Purchased complete bogies may include wheelsets/gears/brakes: substitute included constituents once. Any producer wheel machining or alignment uses actual drawings/process records. Pneumatic versus vacuum equipment is configuration-specific; no universal dual brake system is imposed.

#### Inputs

##### Product flows

###### Complete locomotive bogie with declared included wheelsets (`bogie`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Complete locomotive bogie with declared included wheelsets
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `gmeinder-model`

###### Finished steel locomotive wheelset assembly (`wheelset`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Finished steel locomotive wheelset assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `gmeinder-model`

###### Complete pneumatic locomotive brake-control assembly (`brake`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Complete pneumatic locomotive brake-control assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `gmeinder-model`

###### Finished steel rail-locomotive coupler assembly (`coupler`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Finished steel rail-locomotive coupler assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `gmeinder-model`

###### Alternating current (`electricity_running_gear`)

Only actual metered China grid-average user-side1–35kV AC supply matching public identity at this process intake. Different region/voltage/mix/self-generation needs a distinct compatible flow. European manufacturer examples do not locate the reporting plant in China; internal distribution is not repeated supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `gmeinder-model`

### Process: Diesel hydrodynamic drivetrain installation (`powertrain`)

Install actual diesel engine, hydrodynamic converter/transmission, cardan shafts and axle gear units; record mounting, shaft alignment, cooling, fuel and controls interfaces. This scope uses fluid-dynamic torque conversion with mechanical final drive, not diesel-electric traction motors or pure hydrostatic traction. Bought powerpack/transmission contents replace included constituents. Retarders and auxiliary takeoffs only follow actual configuration. No supplier dry mass or oil capacity substitutes measured installed mass or fills.

#### Inputs

##### Product flows

###### Diesel engine (`engine`)

Only actual complete assembled railway-propulsion diesel engines with supplier scope compatible with the public non-road/non-aircraft engine category; record each accepted installed serial and net count. Retain independent measured installed module mass and inclusions for net M, but preserve public Count reference; a bought powerpack replaces its contained engine once. No universal engine count, power, cycle or emission certification is inferred.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powertrain`
- Sources: `voith-rail`; `voith-gears`

###### Complete hydrodynamic locomotive transmission with torque converter (`transmission`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Complete hydrodynamic locomotive transmission with torque converter
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powertrain`
- Sources: `voith-rail`; `voith-gears`

###### Finished steel locomotive cardan-shaft assembly (`cardan`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Finished steel locomotive cardan-shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powertrain`
- Sources: `voith-rail`; `voith-gears`

###### Complete locomotive bevel axle-gear unit (`axle_gear`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Complete locomotive bevel axle-gear unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powertrain`
- Sources: `voith-rail`; `voith-gears`

###### Lubricating oil (`engine_oil`)

Only actual petroleum-fraction formulated lubricating oil matching this identity and independently specified for the fitted diesel engine. Retain grade/additives, net first-fill and retained mass; omit prefills already inside bought engine. Descriptive heat value is not a conversion or test-emission factor. Different synthetic oils need distinct rows.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powertrain`
- Sources: `voith-rail`; `voith-gears`

###### Petroleum-base formulated hydrodynamic transmission operating oil (`trans_oil`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Petroleum-base formulated hydrodynamic transmission operating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powertrain`
- Sources: `voith-rail`; `voith-gears`

###### Aqueous ethylene-glycol diesel-engine coolant formulation (`coolant`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Aqueous ethylene-glycol diesel-engine coolant formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powertrain`
- Sources: `voith-rail`; `voith-gears`

###### Alternating current (`electricity_powertrain`)

Only actual metered China grid-average user-side1–35kV AC supply matching public identity at this process intake. Different region/voltage/mix/self-generation needs a distinct compatible flow. European manufacturer examples do not locate the reporting plant in China; internal distribution is not repeated supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powertrain`
- Sources: `voith-rail`; `voith-gears`

### Process: Conditional surface preparation and painting (`coating`)

Record actual cleaning, layer area and formulated paint base/hardener separately; supplier-coated components bypass already completed layers. Abrasive blasting, oven cure, solvents and their emissions are not automatically required. Add each actual abrasive, chemical formulation and demonstrated released species independently from current SDS and measurements.

#### Inputs

##### Product flows

###### Process Water (`water`)

Only actual supplied treated industrial process water, measured net makeup, excluding internal recirculation. Distinguish resource withdrawal and aqueous treatment-transfer effluent; keep actual supplier geography/state.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `zagro-production`

###### Formulated epoxy steel-primer base component (`epoxy_base`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Formulated epoxy steel-primer base component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `zagro-production`

###### Polyamine epoxy steel-primer hardener formulation (`hardener`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Polyamine epoxy steel-primer hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `zagro-production`

###### Alternating current (`electricity_coating`)

Only actual metered China grid-average user-side1–35kV AC supply matching public identity at this process intake. Different region/voltage/mix/self-generation needs a distinct compatible flow. European manufacturer examples do not locate the reporting plant in China; internal distribution is not repeated supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `zagro-production`

#### Outputs

##### Waste flows

###### Aqueous steel-surface cleaning effluent transferred for treatment (`effluent`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Aqueous steel-surface cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `zagro-production`

### Process: Controls and auxiliary outfitting (`outfit`)

Install actual wiring, control electronics, starter battery, air compressor, fuel tank and fitted cab/safety equipment. Cab glazing, lighting, exhaust aftertreatment and train power supply follow actual BOM and supplier boundaries; a diesel-electric or hybrid traction system cannot be inserted under this scope. Record installed ballast separately from temporary trial loads.

#### Inputs

##### Product flows

###### Filled lead-acid locomotive starter battery (`starter_battery`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Filled lead-acid locomotive starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `gmeinder-model`

###### Insulated copper low-voltage locomotive electrical cable (`cable`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Insulated copper low-voltage locomotive electrical cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `gmeinder-model`

###### Complete piston locomotive compressed-air compressor (`compressor`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Complete piston locomotive compressed-air compressor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `gmeinder-model`

###### Finished welded steel diesel locomotive fuel tank (`fuel_tank`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Finished welded steel diesel locomotive fuel tank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `gmeinder-model`

###### Complete locomotive electronic drivetrain control cabinet (`control`)

Only this exact independent actual exchange; retain supplier composition/grade/state and completed component scope, weighed issues/returns or recipient outlet records. If a supplied assembly includes this constituent, count it once through that assembly. Absence must be documented; unknown quantity is not zero.

- Selected flow: Complete locomotive electronic drivetrain control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `gmeinder-model`

###### Alternating current (`electricity_outfit`)

Only actual metered China grid-average user-side1–35kV AC supply matching public identity at this process intake. Different region/voltage/mix/self-generation needs a distinct compatible flow. European manufacturer examples do not locate the reporting plant in China; internal distribution is not repeated supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `gmeinder-model`

### Process: Construction commissioning and locomotive acceptance (`acceptance`)

Record actual static and dynamic construction tests, brake/drive/control functions, geometry, corrected net weight, rework and release. Test protocol, speeds/load/duration, track or stand conditions and sampled-test share are actual records, not universal values. Supplier gear endurance/development tests are not mandatory per-locomotive factory cycles. Exclude revenue hauling, driver operation, lifetime fuel and maintenance. Separate actual consumed test diesel from fuel retained for owner delivery, and test sanding from retained operational sand.

#### Inputs

##### Product flows

###### Diesel fuel (`test_diesel`)

Only independently established actual supplied fossil diesel on this public mass-based unspecified-grade/provider identity. Record actual refinery/provider, grade, blend, fossil fraction, net trial consumption versus returns/owner-retained fuel, and measured density/temperature for volume conversion. Identity supplies no composition, heat value or emission factor. A biogenic contribution needs a distinct compatible row and carbon accounting.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `voith-gears`

###### Alternating current (`electricity_acceptance`)

Only actual metered China grid-average user-side1–35kV AC supply matching public identity at this process intake. Different region/voltage/mix/self-generation needs a distinct compatible flow. European manufacturer examples do not locate the reporting plant in China; internal distribution is not repeated supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `voith-gears`

#### Outputs

##### Product flows

###### Accepted complete diesel-hydraulic rail locomotive (`finished_machine`)

One kg accepted complete net locomotive including frame, bogies, engine, hydrodynamic drivetrain, outfitting, integral installed ballast and retained lubricating/transmission/cooling fluids. Exclude fuel, operational sand, persons, temporary test loads, removable protection and loose spares.

- Selected flow: Accepted complete diesel-hydraulic rail locomotive
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `voith-gears`

#### Outputs

##### Waste flows

###### Used lubricating oil (`spent_oil`)

Only actual used/contaminated petroleum lubricating oil generated in included commissioning, weighed at generation/transfer with recipient. Public waste identity also permits synthetic oil; this row is restricted to measured petroleum oil. No regeneration, burning or avoided-production service is inferred.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `voith-gears`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only independently measured attributable fossil CO2 exhaust from construction trials. Require measured exhaust integration and demonstrated fossil fuel origin/fraction; no blend factor invented.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `voith-gears`

###### nitrogen monoxide (`nitric_oxide`)

Only independently measured attributable trial NO; total NOx without species split is not NO. No compulsory emission amount or default factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `voith-gears`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only independently measured attributable trial NO2; NO, N2O, nitrogen/nitrite or unsplit NOx cannot substitute. No compulsory emission amount or default factor.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `voith-gears`

### Process: Conditional delivery protection (`packing`)

Record each actual removable protection exchange and exclude it from net M; reconcile delivered detached integral components to the accepted configuration. Exclude transport fixtures, loose spares and temporary loads.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only actual removable non-self-adhesive noncellular unreinforced/unlaminated PE-LD foil matching public identity; net issues/returns are weighed and excluded from M. Laminated protection or different resin needs a distinct row.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packing`
- Sources:

###### Alternating current (`electricity_packing`)

Only actual metered China grid-average user-side1–35kV AC supply matching public identity at this process intake. Different region/voltage/mix/self-generation needs a distinct compatible flow. European manufacturer examples do not locate the reporting plant in China; internal distribution is not repeated supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacturing resources | Separate locomotive orders/configurations and subdivide directly metered stages first. Assign actual stock/module receipts, job/test resources and rework by measured records. An inseparable shared resource uses demonstrated causal operation time/load or layer-area driver: share = order driver / sum of drivers for all covered orders. Retain evidence, period, all orders and denominator. Nominal weight, horsepower or equal-unit shares are not automatically causal. | `ghg-allocation` |
| `allocation_recovery` | scrap and internal transfers | Internal stock/fluid/fuel reuse is a transfer, not repeated fresh input or a credit. Exported scrap/waste retains actual mass and recipient; no assumed avoided-steel/oil benefit. Separate genuine co-products; any residual allocation requires justified consistent driver and documented review. Reconcile rejected/reworked units and work-in-progress to accepted period output. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete-locomotive net mass | controlled_acceptance_record | model; configuration; serial number; accepted net mass M; original measured wheel/rail weight records; instrument/calibration; all supports and tare; retained service-fluid/ballast state; measured fuel/sand/persons/test-load exclusions; delivery corrections; verifier | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted locomotive | actual manufacturing/acceptance period | declared manufacturer gate | accepted net mass per unit | original actual calibrated measurements and signed configuration/mass reconciliation |
| `cp_frame` | frame | Frame and cab fabrication | foreground_record | order/serial; configuration; accepted count; each exchange identity/property/unit; issues/returns/stock change; supplier inclusions; installed engine serial count and independent measured mass; electricity meter/unit/site/voltage; actual fills, test-fuel consumed/retained and blend; species/medium/outlet; shared driver/denominator; instrument/calibration | Collect drawing revisions, stock certificates, weighed issues/returns/offcuts and machining chips, weld/inspection records and actual station utilities. | actual row unit, including Item(s) for engine and MJ for electricity | each order/batch | declared manufacturing period | declared plant and disclosed suppliers | attributable exchange amount / accepted units | original supplier, weighing/counting, meter, test and transfer records |
| `cp_running_gear` | running_gear | Bogie, wheelset and brake integration | foreground_record | order/serial; configuration; accepted count; each exchange identity/property/unit; issues/returns/stock change; supplier inclusions; installed engine serial count and independent measured mass; electricity meter/unit/site/voltage; actual fills, test-fuel consumed/retained and blend; species/medium/outlet; shared driver/denominator; instrument/calibration | Retain serial-linked bogie/wheelset supplier scope, measured masses, gauge/wheel inspection and alignment, brake/coupler fit records and utilities. | actual row unit, including Item(s) for engine and MJ for electricity | each order/batch | declared manufacturing period | declared plant and disclosed suppliers | attributable exchange amount / accepted units | original supplier, weighing/counting, meter, test and transfer records |
| `cp_powertrain` | powertrain | Diesel hydrodynamic drivetrain installation | foreground_record | order/serial; configuration; accepted count; each exchange identity/property/unit; issues/returns/stock change; supplier inclusions; installed engine serial count and independent measured mass; electricity meter/unit/site/voltage; actual fills, test-fuel consumed/retained and blend; species/medium/outlet; shared driver/denominator; instrument/calibration | Retain engine/transmission/gear serials, supplier inclusions, measured independent component masses, drivetrain alignment/inspection, cooling/fuel configuration and net first-fill/retention balances. | actual row unit, including Item(s) for engine and MJ for electricity | each order/batch | declared manufacturing period | declared plant and disclosed suppliers | attributable exchange amount / accepted units | original supplier, weighing/counting, meter, test and transfer records |
| `cp_coating` | coating | Conditional surface preparation and painting | foreground_record | order/serial; configuration; accepted count; each exchange identity/property/unit; issues/returns/stock change; supplier inclusions; installed engine serial count and independent measured mass; electricity meter/unit/site/voltage; actual fills, test-fuel consumed/retained and blend; species/medium/outlet; shared driver/denominator; instrument/calibration | Collect supplier coating inclusions/SDS, net weighed layer components, measured process water, actual preparation/cure utilities and segregated waste or species outlets. | actual row unit, including Item(s) for engine and MJ for electricity | each order/batch | declared manufacturing period | declared plant and disclosed suppliers | attributable exchange amount / accepted units | original supplier, weighing/counting, meter, test and transfer records |
| `cp_outfit` | outfit | Controls and auxiliary outfitting | foreground_record | order/serial; configuration; accepted count; each exchange identity/property/unit; issues/returns/stock change; supplier inclusions; installed engine serial count and independent measured mass; electricity meter/unit/site/voltage; actual fills, test-fuel consumed/retained and blend; species/medium/outlet; shared driver/denominator; instrument/calibration | Collect serial BOM, original supplier completeness, actual fitted masses, wiring/control/brake interfaces and inspection and independent utility meters. | actual row unit, including Item(s) for engine and MJ for electricity | each order/batch | declared manufacturing period | declared plant and disclosed suppliers | attributable exchange amount / accepted units | original supplier, weighing/counting, meter, test and transfer records |
| `cp_acceptance` | acceptance | Construction commissioning and locomotive acceptance | foreground_record | order/serial; configuration; accepted count; each exchange identity/property/unit; issues/returns/stock change; supplier inclusions; installed engine serial count and independent measured mass; electricity meter/unit/site/voltage; actual fills, test-fuel consumed/retained and blend; species/medium/outlet; shared driver/denominator; instrument/calibration | Retain controlled acceptance/weight records tied to actual calibrated wheel-load or rail weighing measurements, configuration and fuel/sand/fluid state; actual test records, measured consumption, independently measured exhaust species and waste recipients. | actual row unit, including Item(s) for engine and MJ for electricity | each order/batch | declared manufacturing period | declared plant and disclosed suppliers | attributable exchange amount / accepted units | original supplier, weighing/counting, meter, test and transfer records |
| `cp_packing` | packing | Conditional delivery protection | foreground_record | order/serial; configuration; accepted count; each exchange identity/property/unit; issues/returns/stock change; supplier inclusions; installed engine serial count and independent measured mass; electricity meter/unit/site/voltage; actual fills, test-fuel consumed/retained and blend; species/medium/outlet; shared driver/denominator; instrument/calibration | Weigh each actual protection issue/return and reconcile integral delivered parts and exclusions. | actual row unit, including Item(s) for engine and MJ for electricity | each order/batch | declared manufacturing period | declared plant and disclosed suppliers | attributable exchange amount / accepted units | original supplier, weighing/counting, meter, test and transfer records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Collect each net exchange for the actual order, subtract recorded returns and stock change, apply any justified shared allocation and divide by accepted locomotive count to obtain q_item. Normalize to the same measured complete configuration M. Mass rows remain kg/kg, engine count Item(s)/kg and electricity MJ/kg. Directly counted supplied complete engines retain Count; independent engine weight only reconciles net configuration. Compatible serial units with observed mass variation may use attributable totals divided by summed measured accepted masses, retaining every serial record. Separate incompatible gauge/drive, bogie, ballast, coating and acceptance configurations. Unknown inputs or untested extrapolations require review.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Acceptance records must implement mass_record_origin; original calibrated physical wheel/rail measurements, serial and all mass-state corrections are required. Missing actual method or unexplained catalogue/axle rating blocks a completed quantitative dataset. | original weight report/calibration/correction balance |
| `quality_bom` | all stages | Reconcile frame/cab, all bogies/wheelsets, engine/transmission/cardans/axle gears, ballast, brakes/control and actual auxiliary/aftertreatment/fluid masses to accepted scope. Retain supplier inclusions and add each omitted actual BOM constituent without double counting. | drawings/BOM/supplier inclusions/measurements |
| `quality_trial` | acceptance | Retain actual test protocol/track/stand, load/duration, sampled-unit coverage and net fuel/fluid returns. Exhaust species require integrated calibrated measurements with detection limits and actual medium; unsplit NOx is not NO/NO2 and biological fraction is not fossil CO2. | test, fuel and species originals |
| `quality_coverage` | dataset | Declare actual site/period, configuration/supplier scope, conditional absence, outsourcing, allocation, identity/quantity gaps, uncertainty, empirical QA limits and missing upstream. Establish actual QA ranges from calibrated records or verified compatible evidence, never invented yields/weights/lifetimes. This PCR check verifies declared relationships, not actual records or scientific approval. | coverage and original-record register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require complete hydrodynamic diesel-hydraulic locomotive and positive measured net M implementing cp_mass and mass_record_origin. Match gauge/axles/bogies, drivetrain, ballast and fluid state; reject catalogue total, rated axle load or nominal fill as weight evidence. Reference output name must match the reference product exactly. |  |
| `validate_identity` | all rows | Verify atomic substance/component, public state100 name, actual reference property/unit group, route/scope and completeness. Preserve engine Count; electricity Energy is not Mass. Hydrodynamic transmission is not hydrostatic hydraulic unit. Unsupported identity stays blank with exact row registration. |  |
| `validate_boundary` | supplier and test scope | Count complete supplier modules and prefills once; do not duplicate engine/bogie constituents. Verify represented acceptance-test coverage and consumed versus retained fuel/sand. Separate manufacturing trials from revenue hauling and supplier development tests. Missing actual quantity or underlying weighing method remains review. |  |
| `validate_species` | elementary rows | Use only demonstrated attributable construction-trial releases to exact medium/submedium. CO2 fossil, NO and NO2 identities here are immediate air-unspecified; not biogenic CO2, N2O, nitrogen/nitrite, soil/water or long-term release. Captured waste is not emitted species. |  |
| `validate_profile` | claimed completeness | Link actual upstream and supplier/period/geography before a cradle-to-gate claim; record original acceptance documentation and applicable actual regime for any certificate claim. Generic manufacturer capability does not approve this locomotive methodology or its specific vehicle. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete diesel-hydraulic locomotive foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and linked upstream scope |
| allowed_use | Manufacturing supply-chain models matching gauge, hydrodynamic drive, bogies/ballast/outfitting/fluid state, accepted net-M scope and gate/site/period |
| excluded_use | Train/shunting transport service, lifetime hauling fuel, equal-mass traction equivalence, other traction architectures or unsupported complete cradle-to-gate claims |
| required_metadata | producer/model and serial; drawing/BOM revision; gauge, axle arrangement, wheelsets/bogies, axle gears and installed ballast; diesel engine number/type/serial and supplier inclusions; hydrodynamic converter/transmission, cardan shafts, final drive, cooling, brakes and controls; cab/coupler/safety/aftertreatment configuration and actual coatings; net delivery fluid state; accepted positive measured M kg and cp_mass, calibrated weighing evidence and signed corrections; exclude fuel, operational sand, persons, temporary test loads, packaging and loose spares; actual factory/site/period and gate, supplier completion and test coverage |
| required_quality_disclosure | Identity/quantity and physical weight-record gaps, conditional stages, full BOM/supplier inclusions, test coverage/allocation, uncertainty, empirical limits and missing upstream |
| update_trigger | Gauge/axles/bogies, drivetrain/supplier modules, ballast/fluid state, coating, actual weight-record correction or acceptance regime, plant/period change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `zagro-production` | literature | [ZAGRO Group production capability](https://www.zagro-group.com/en/our-company/zagro-group) | Production-capability paragraphs: factory machining, sheet processing, welding, painting, subassembly/final assembly and vehicle quality control. Undated group example, not a universal locomotive process or chemical recipe/intensity. |
| `gmeinder-model` | literature | [GMEINDER D75 BB-SE product sheet](https://www.zagro-group.com/fileadmin/media/downloads/gmeinder/GMEINDER_LOKOMOTIVEN_D75_BB_SE_EN.pdf) | PDF1: configuration-specific cab/brake/bogie/coupler variations and separate total-weight/fuel/sand reporting. Undated model example only; catalogue weights, tolerances, capacities, speed, power or certification not adopted. Actual net accepted M and actual fitted scope must be measured. |
| `voith-rail` | literature | [Voith Drive New Ways,VT1570 en BDI2025-07](https://www.voith.com/corp-en/VT_Digest-Rail_25_BDI_VT1570_en_Digital.pdf) | PDF/printed25,30–32,52: longitudinal axle gears, hydrodynamic converter components, dry-mass/oil-capacity fields, cardan drive and edition. Supplier architecture only; no transmission capacity/mass/recipe/lifetime or mandatory retarder adopted; distinguish railcar from locomotive application. |
| `voith-gears` | literature | [Voith gear units](https://www.voith.com/corp-en/drives-transmissions/gear-units.html) | Diesel-hydraulic-locomotive section: outside-bogie hydrodynamic transmission and cardan/axle gear interfaces; supplier testing paragraph concerns product development. Undated configurable supplier example, no universal gear stage or per-locomotive endurance test imposed. |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | Printed63/PDF65 tables9.1–9.2: historical avoid/subdivide and causal allocation hierarchy. Actual measured compatible causal driver required; no nominal locomotive-mass or equal-count allocation factor. |
