---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.small-displacement-motorcycle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Small-displacement four-stroke scooter manufacturing

## 1. Scope and Applicability

Manufacture of a new complete two-wheel petrol scooter with single-cylinder reciprocating spark-ignition four-stroke piston engine of actual total cylinder capacity not exceeding50cm3, welded steel frame and one externally supplied complete engine-CVT-clutch-final-drive power unit; local manufacturing is frame fabrication/finishing, followed by unit mounting, running-gear/equipment integration and factory acceptance, not engine or CVT manufacture. The actual released frame cutting/forming/joining, conditional surface treatment/coating, installed power unit/running gear/body/electrical equipment and bounded factory acceptance define this foreground route. Frame stock grade/cross-section, joining method and supplied package configuration must be declared; no universal alloy, shielding gas or coating recipe imposed. This route is narrower than CPC49911.

Exclude >50cc scooters/motorcycles, two-stroke engines, electric/hybrid and non-reciprocating propulsion, horizontally opposed twin-cylinder motorcycles, external longitudinal shaft-drive/final-drive assembly manufacture or alignment, in-house engine/CVT manufacture, auxiliary-motor bicycles, sidecars, tricycles, primarily aluminium/composite frames, complete kits/parts sold separately, repair/overhaul and transport service. Exclude customer riding, passenger-km, fuel economy during use, maintenance, road infrastructure and end of life. Actual factory engine/roller and bounded acceptance movement belong to the manufacturing endpoint only with measured support inputs. Foreground alone is not complete cradle-to-gate or a lifetime mobility comparison.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.small-displacement-motorcycle |
| classification_refs | CPC:3.0:49911; narrower |
| covered_products | Manufacture of a new complete two-wheel petrol scooter with single-cylinder reciprocating spark-ignition four-stroke piston engine of actual total cylinder capacity not exceeding50cm3, welded steel frame and one externally supplied complete engine-CVT-clutch-final-drive power unit; local manufacturing is frame fabrication/finishing, followed by unit mounting, running-gear/equipment integration and factory acceptance, not engine or CVT manufacture. The actual released frame cutting/forming/joining, conditional surface treatment/coating, installed power unit/running gear/body/electrical equipment and bounded factory acceptance define this foreground route. Frame stock grade/cross-section, joining method and supplied package configuration must be declared; no universal alloy, shielding gas or coating recipe imposed. This route is narrower than CPC49911. |
| excluded_products | Exclude >50cc scooters/motorcycles, two-stroke engines, electric/hybrid and non-reciprocating propulsion, horizontally opposed twin-cylinder motorcycles, external longitudinal shaft-drive/final-drive assembly manufacture or alignment, in-house engine/CVT manufacture, auxiliary-motor bicycles, sidecars, tricycles, primarily aluminium/composite frames, complete kits/parts sold separately, repair/overhaul and transport service. Exclude customer riding, passenger-km, fuel economy during use, maintenance, road infrastructure and end of life. Actual factory engine/roller and bounded acceptance movement belong to the manufacturing endpoint only with measured support inputs. Foreground alone is not complete cradle-to-gate or a lifetime mobility comparison. |
| representative_product | One complete accepted two-wheel four-stroke <=50cc automatic petrol scooter with welded steel frame and actual supplied engine-CVT unit. Honda2022 Giorno49cm3/CVT is a historical configuration illustration, not compulsory model or proof of its frame recipe. |
| production_route | Steel-frame fabrication and joining; Surface preparation and frame finishing; Power-unit, running-gear and equipment installation; Bounded factory tests, weighing and dispatch acceptance |
| market_state | Complete assembled accepted vehicle with installed fit-list and retained technical lubricant/coolant/damper oil/electrolyte once. All fuel, rider/baggage, packaging/transport cage, detached tools/spares and temporary fixtures excluded from net M. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of the complete declared <=50cc four-stroke petrol scooter. |
| How much | 1kg accepted net manufacturing output from actual measured M kg per one complete accepted same-configuration scooter. |
| How well | Actual released drawings/supplier fit-list and current applicable contract/authority conformity and factory acceptance records. No generic speed/power/emission-limit requirement inferred. |
| How long or cycle | One recorded manufacture/acceptance cycle, not lifetime mobility service. No service life invented. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Motorcycles and cycles fitted with an auxiliary motor, with reciprocating internal combustion piston engine of a cylinder capacity not exceeding 50 cc `535b67cb-a95b-466a-afa5-ea295294b3e2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/released drawing revision/serial; two-wheel scooter, actual <=50cm3 total displacement, single cylinder and four-stroke spark ignition; frame grade/tube-sheet geometry and joining/finish; received power-unit supplier/engine-CVT-clutch-final-drive scope and independent installed kg/prefill; wheel/tyre/suspension/brake/body/saddle/tank/electrical fit-list; oil/coolant/battery chemistry and supplier wet/dry condition; site/period/accepted count/rework; current actual conformity and bounded factory-test plans/results; actual regular test-petrol grade/biogenic share and stock closure; calibrated complete-scooter weighing originals/tare/configuration/net fuel and temporary-stock corrections; independently measured installed BOM mass and uncertainty; net M kg distinct from catalogue vehicle/curb mass and rated payload; upstream utility/transport/treatment coverage and gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_energy | frame_power; coat_power; assembly_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual kWh, multiply by3.6MJ/kWh; no rated motor power times presumed duty cycle. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received actual welded circular frame tubes/declared bracket stock and finished supplied engine-CVT/wheel/body/electrical modules at fabrication and assembly sites. Smelting, supplied engine manufacture and contained modules are upstream, not automatically foreground. |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC:3.0:49911; narrower |
| recursive_input_rule | Purchased completed frame or glider has identified supplied equipment/coating scope; only actual added work/acceptance enters foreground, no stock-fabrication duplication into already complete modules. |
| upstream_dataset_requirement | Compatible actual stock, power-unit, tyres/body/electrical, utility, transport and treatment modules with property/grade/package/prefill declared before extending beyond foreground. |
| disclosure | Actual make-or-buy start/site/period, supplied package contents, subprocesses/rework, contracted manufacturing/test support, fluid/fuel stock state, exclusions and upstream gaps. No default complete cradle-to-gate label. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_package | assembly | One supplied engine-CVT-clutch/final-drive assembly contains only documented scope. Record module installed supplied kg and contained prefill once, independently reconcile scooter fit-list and net M. Do not also add contained engine/transmission/starter or lubricant as purchased exchanges. In-house engine/CVT manufacture and external shaft-drive fabrication/alignment are outside this boundary; those routes need independent methodological applicability review. Actual wheel/tyre manufacture requires its atomic stock/process records. |  |
| boundary_coating | coat | Actual supplier-coated panel/frame contains upstream coating; additional plant cleaning/primer/powder/cure needs actual chemical/meter cards. General manufacturer process descriptions do not establish exact formulation or mandatory operations for this model. | yamaha-mc-process |
| boundary_trials | acceptance | Include attributable factory checks/roller/engine runs and actual bounded movements, including rework and support equipment. Road riding/fuel economy during use remains excluded. Keep issued/returned/recovered/retained test fuel and technical-fluid balances; all fuel removed from M, not automatically counted consumed. |  |
| boundary_complete | finished_machine | Reference represents the complete current installed configured vehicle, not bodyless glider, frame, engine or transported knock-down kit. Document final reassembly/acceptance before net M; transport dismantling and separate delivered items disclosed. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame` | Steel-frame fabrication and joining | required | Actual received stock cut/press/bend/join to released frame drawings, qualified work orders and dimensional/joint inspection; supplier-complete frame replaces contained work. | foreground_manufacturing | 1kg accepted output; conditional exchanges only where actually used |
| `coat` | Surface preparation and frame finishing | conditional | Only actually performed cleaning/coating/cure and rework; supplied coated frame contains its upstream finish. Each actual chemical has its own card. | foreground_manufacturing | 1kg accepted output; conditional exchanges only where actually used |
| `assembly` | Power-unit, running-gear and equipment installation | required | Actual externally supplied complete single-cylinder engine-CVT module receipt/scope check and mounting-interface/clearance/torque verification, wheels/tyres/suspension/brakes/body/tank/seat/harness and complete configured fit-list, separately added technical fluids and torque/function checks. | foreground_manufacturing | 1kg accepted output; conditional exchanges only where actually used |
| `acceptance` | Bounded factory tests, weighing and dispatch acceptance | required | Actual brake/light/electrical/function/engine or roller checks as applicable, bounded movements, rework and calibrated same-configuration net weighing. | foreground_manufacturing | 1kg accepted output; conditional exchanges only where actually used |

### Process: Steel-frame fabrication and joining (`frame`)

Actual received stock cut/press/bend/join to released frame drawings, qualified work orders and dimensional/joint inspection; supplier-complete frame replaces contained work.

#### Inputs

##### Product flows

###### Steel Pipe (`steel_tube`)

Actual received circular welded non-stainless steel frame tube, released grade/heat/diameter/wall, issued minus returned kg. Seamless/noncircular stock requires a different identity; formed supplier tube contents declared.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Cold-rolled low-carbon steel frame-bracket sheet (`bracket_sheet`)

Conditional actual grade/thickness sheet for cut/press/bend brackets; supplied finished bracket replaces contained stock/work.

- Selected flow: Cold-rolled low-carbon steel frame-bracket sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Solid carbon-steel gas-shielded welding wire (`weld_wire`)

Conditional actual qualified procedure uses this solid-wire chemistry/diameter; consumed issued/returned kg recorded, resistance welding does not consume this wire by default.

- Selected flow: Solid carbon-steel gas-shielded welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Pure argon welding shielding gas (`shield_argon`)

Conditional actual procedure uses pure argon CAS7440-37-1 with metered kg or actual state-specific measured conversion. A mixture is not pure argon and must have its own identity.

- Selected flow: Pure argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Alternating current (`frame_power`)

Actual below1kV grid-user cutting/bending/pressing/welding/jigging and extraction electricity, compressed-air generation included once; released procedure determines actual technique.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Actual segregated dry untreated non-stainless steel offcuts leaving plant; internal reusable stock not waste; oily/painted streams separately identified.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

##### Elementary flows

###### Particulate matter, particle size unspecified (`particle_air`)

Only actual post-control particles to immediate air unspecified submedium/size, original sampling/exhaust flow/time. Captured grinding/welding dust is waste; measured size fractions use separate compatible flows.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

### Process: Surface preparation and frame finishing (`coat`)

Only actually performed cleaning/coating/cure and rework; supplied coated frame contains its upstream finish. Each actual chemical has its own card.

#### Inputs

##### Product flows

###### Formulated epoxy steel-frame anticorrosion primer (`epoxy_primer`)

Conditional actual supplied formulation/SDS wet kg, solids/retained film and curing; no mandatory electrocoat or chromate route.

- Selected flow: Formulated epoxy steel-frame anticorrosion primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

###### Formulated polyester thermosetting frame-coating powder (`powder_finish`)

Conditional actual one supplied powder formulation kg; issued/returned/reclaimed/retained and cure energy. Solvent topcoat must be a different chemistry card, not this powder.

- Selected flow: Formulated polyester thermosetting frame-coating powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

###### Tap water (`coat_water`)

Conditional actual municipal product water for cleaning makeup; recycle transfers distinguished; actual cleaner chemistry/wastewater/treatment separately characterised.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

###### Alternating current (`coat_power`)

Actual below1kV cleaning/coating/ventilation/electric curing and rework demand; gas-fired curing separately adds exact fuel and evidenced species.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste paint (`wet_paint_residue`)

Conditional actual wet primer overspray/residue sent to treatment; powder reclaim remains internal, spent powder/filter media require separate actual waste cards.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Only actual CAS1330-20-7 xylene post-control release to immediate unspecified air from actual solvent-containing work. Powder finish does not imply xylene, totalVOC not this species.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

### Process: Power-unit, running-gear and equipment installation (`assembly`)

Actual externally supplied complete single-cylinder engine-CVT module receipt/scope check and mounting-interface/clearance/torque verification, wheels/tyres/suspension/brakes/body/tank/seat/harness and complete configured fit-list, separately added technical fluids and torque/function checks.

#### Inputs

##### Product flows

###### Finished single-cylinder four-stroke <=50cc scooter engine-CVT power-unit assembly (`power_unit`)

One actual externally supplied complete <=50cc single-cylinder reciprocating spark-ignition engine/CVT/clutch/final-drive module, installed supplied kg, serial/displacement and contained accessory/prefill scope. No duplicate contained engine/CVT/oil rows; independent module mass reconciles M.

- Selected flow: Finished single-cylinder four-stroke <=50cc scooter engine-CVT power-unit assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished injection-moulded polypropylene scooter leg-shield panel (`body_panel`)

Conditional actual supplied one PP panel drawing/resin/filler/finish and installed kg; other body panels/resins separately recorded, not aggregate plastic parts.

- Selected flow: Finished injection-moulded polypropylene scooter leg-shield panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished cast-aluminium scooter road wheel (`wheel`)

Actual supplied one cast wheel model/diameter and installed kg excluding tyre/brake not contained; steel pressed rim uses another physical card.

- Selected flow: Finished cast-aluminium scooter road wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### New pneumatic tyres, of rubber, of a kind used on motorcycles or bicycles (`tyre`)

Actual one new scooter tyre type with size/load/speed/tube state and measured supplied installed kg; count retained. Distinct front/rear specification must split, inner tube not automatically included.

- Selected flow: New pneumatic tyres, of rubber, of a kind used on motorcycles or bicycles `433f8624-3103-4661-918b-2093658bda5f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished scooter telescopic front-fork assembly (`front_fork`)

One actual supplied front-fork kg including declared damper oil/seals once, steering stem/bearings only if supplier scope includes.

- Selected flow: Finished scooter telescopic front-fork assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished scooter rear spring-damper unit (`rear_shock`)

One actual supplied spring/damper kg containing declared damper oil; mounting and rework demands recorded, no universal count.

- Selected flow: Finished scooter rear spring-damper unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished mechanically actuated scooter drum-brake unit (`drum_brake`)

Conditional actual one drum-brake unit kg and supplied drum/shoes/actuator scope; already in wheel/module omit. Actual disc/cable/hydraulic variants need their exact rows.

- Selected flow: Finished mechanically actuated scooter drum-brake unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished upholstered scooter saddle assembly (`seat`)

Actual supplied one saddle kg with base/foam/cover and hinge/latch scope; separate storage box outside unless contained.

- Selected flow: Finished upholstered scooter saddle assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished scooter exhaust silencer with catalyst (`exhaust`)

Conditional actual supplied one complete silencer/catalyst model kg beyond power-unit package; catalyst chemistry/scope documented, not mandated for every product.

- Selected flow: Finished scooter exhaust silencer with catalyst
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished steel scooter petrol tank (`fuel_tank`)

Actual supplied tank kg with stated pump/sender/coating content; fuel excluded from tank and M. Plastic tank uses different physical row.

- Selected flow: Finished steel scooter petrol tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships (`harness`)

One actual finished supplied scooter main harness model/connector/insulation kg, not separately supplied raw cable nor already contained power-unit ignition wires.

- Selected flow: Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished lead-acid scooter starter battery (`starter_battery`)

Conditional actual supplied installed model kg with electrolyte once, actual rating and wet/dry delivery; other chemistry uses separate card.

- Selected flow: Finished lead-acid scooter starter battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Formulated mineral four-stroke petrol-engine lubricating oil (`engine_oil`)

Conditional actual applicable one formulated mineral oil added beyond power-unit prefill; independently measured issued/returned/removed/retained kg. No two-stroke premix assumption.

- Selected flow: Formulated mineral four-stroke petrol-engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Formulated ethylene-glycol scooter engine coolant (`coolant`)

Conditional actual liquid-cooled engine uses declared glycol/water/additive concentration, separately added beyond supplier prefill kg; air-cooled configuration not charged by default.

- Selected flow: Formulated ethylene-glycol scooter engine coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Alternating current (`assembly_power`)

Actual below1kV module mounting/wheel installation/torque/electrical fluid-filling and function checks; compressed air generation and battery charging included once.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Bounded factory tests, weighing and dispatch acceptance (`acceptance`)

Actual brake/light/electrical/function/engine or roller checks as applicable, bounded movements, rework and calibrated same-configuration net weighing.

#### Inputs

##### Product flows

###### gasoline (regular) (`test_petrol`)

Conditional actual regular petroleum motor gasoline for bounded factory engine/roller acceptance run; actual grade/composition and issue-return-retained stock measured. Declare bio-component share if present and choose matching fuel/biogenic flows; no catalogue fuel-economy factor.

- Selected flow: gasoline (regular) `4f19a2f9-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### Alternating current (`test_power`)

Actual below1kV roller/electrical/light/brake/inspection/weighing equipment demand and rework, not customer driving energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`film`)

Conditional actual noncellular nonadhesive protective film kg outside M; actual cardboard/pallet/steel transport cage separately identified.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Motorcycles and cycles fitted with an auxiliary motor, with reciprocating internal combustion piston engine of a cylinder capacity not exceeding 50 cc (`finished_machine`)

1kg share of complete accepted declared two-wheel <=50cc four-stroke petrol scooter, installed equipment and technical prefill once, actual measured corrected net M; all fuel excluded.

- Selected flow: Motorcycles and cycles fitted with an auxiliary motor, with reciprocating internal combustion piston engine of a cylinder capacity not exceeding 50 cc `535b67cb-a95b-466a-afa5-ea295294b3e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Used lubricating oil (`used_oil`)

Only actual segregated spent mineral oil removed in factory testing sent to treatment, not retained lubrication or coolant/solvent mixture.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Only actual fossil CO2 release immediate unspecified air from measured test-fuel carbon balance accounting unburned/recovered carbon or direct species measurement. Biogenic share not assigned to this fossil flow.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### nitrogen monoxide (`no_air`)

Only measured NO CAS10102-43-9 post-control actual factory exhaust to immediate unspecified air; totalNOx, NO2 and N2O cannot substitute without species evidence.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | Prefer actual configuration work orders and metered issue/return/test attribution. Match reporting accepted counts to complete output; include actual reject/rework burdens, no dilution by sales or differing configurations. |  |
| allocation_shared | shared operations | First separate processes. Where inseparable, use actual causal machine occupancy, joint length/work time, conditioned surface and test/support energy as appropriate, reconcile common meter totals, record driver units and compare plausible alternatives. No unmeasured equal-per-scooter or mass share for fixed electrical testing. |  |
| allocation_scrap | waste | No automatic avoided virgin steel, recyclable material or returned fuel credit. Keep internal transfers, outgoing wastes, treatment and real co-products distinct. Economic allocation only for documented genuine co-products when causal physical basis unavailable, retaining actual price period and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | accepted complete output | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | every accepted scooter | matched manufacture/acceptance period | actual acceptance/weighing station | accepted net mass per unit | current scooter-specific method; calibrated all-wheel platform readings/tare; measured fuel-state corrections and fit-list |
| cp_frame | frame | independent atomic exchanges | foreground_record | grade/heat/tube-sheet dimensions; issued-returned stock; qualified join work orders/wire/gas if used; kWh; dry offcuts; actual post-control species sampling | Record each actual exchange independently by supplier issue/return, calibrated installed supplied component mass, utility metering or sampled species with measured exhaust flow/time. Record scooter/configuration work orders, accepted count, stock/rework and destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | certificate/SDS, metering/sampling uncertainty, issue-return-stock and count closure |
| cp_coat | coat | independent atomic exchanges | foreground_record | actual formulation/SDS and treated surface; wet primer/powder issues, returns/reclaim/retained film; cleaning water; cure/extraction demand and residues/wastewater | Record each actual exchange independently by supplier issue/return, calibrated installed supplied component mass, utility metering or sampled species with measured exhaust flow/time. Record scooter/configuration work orders, accepted count, stock/rework and destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | certificate/SDS, metering/sampling uncertainty, issue-return-stock and count closure |
| cp_assembly | assembly | independent atomic exchanges | foreground_record | power-unit model/serial/displacement/stroke; supplied engine/CVT/accessories/prefill; installed independent kg; wheel/tyre/suspension/brake/saddle/panel/tank/electrical fit-list; additional oil/coolant and electricity | Record each actual exchange independently by supplier issue/return, calibrated installed supplied component mass, utility metering or sampled species with measured exhaust flow/time. Record scooter/configuration work orders, accepted count, stock/rework and destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | certificate/SDS, metering/sampling uncertainty, issue-return-stock and count closure |
| cp_acceptance | acceptance | independent atomic exchanges | foreground_record | serial/configuration; actual test work orders/load/duration/endpoints; regular fuel composition/stock closure; sampling species/concentration/exhaust flow; electric meters; calibrated complete weighing/tare/measured net corrections and independent BOM | Record each actual exchange independently by supplier issue/return, calibrated installed supplied component mass, utility metering or sampled species with measured exhaust flow/time. Record scooter/configuration work orders, accepted count, stock/rework and destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | certificate/SDS, metering/sampling uncertainty, issue-return-stock and count closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_tube; bracket_sheet; weld_wire; shield_argon; frame_power; steel_scrap; particle_air; epoxy_primer; powder_finish; coat_water; coat_power; wet_paint_residue; xylene_air; power_unit; body_panel; wheel; tyre; front_fork; rear_shock; drum_brake; seat; exhaust; fuel_tank; harness; starter_battery; engine_oil; coolant; assembly_power; test_petrol; test_power; used_oil; fossil_co2_air; no_air; film | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is actual attributed exchange after measured returns/stock/recovery and rework divided by matched accepted unit count. Preserve kg or MJ numerator, MJ/kg for electricity. Power-unit q_item is installed supplied complete engine-CVT module kg, not Item(s). Separate oil/coolant q_item only additional amounts not contained in module prefill. Any count/volume conversion needs actual same-item mass/geometry/state evidence and uncertainty. Do not use catalogue scooter/engine mass, standard fuel density or rated payload.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | Use a calibrated complete-scooter weighing platform supporting all wheels, with controlled tare and no operator, side support or temporary fixture contribution. Preserve serial/configuration, original readings, instrument/calibration, date, repeat readings and uncertainty. Independently measured installed frame, engine-CVT, running gear, equipment and retained technical fluids reconcile M. Missing physical originals prevent dataset use; no catalogue81kg vehicle weight or payload conversion. | original complete weighing and independent installed component records |
| quality_net | finished_machine | Preserve measured as-weighed state and signed corrections. Exclude all actual fuel including residual fuel, rider/baggage, temporary fixtures, transport cage/packaging, detached spares/tools. Include installed technical lubricant, coolant, damper oil and battery electrolyte once, in actual declared wet/dry supplied state. Trace corrections to actual draining and weighing records; neither zero residual fuel nor infer M from catalogue curb weight or a guessed BOM. | signed fuel/stock corrections and supplier containment |
| quality_classification | finished_machine | Actual released engine identity and displacement documentation must establish reciprocating four-stroke spark-ignition petrol route and single cylinder and total cylinder capacity<=50cm3 for the actual model. The public class49911 flow is broader than this scooter route. Historical Honda49cm3/CVT specifications illustrate configuration only, not current model availability or a mandatory frame/coating recipe. | honda-giorno-2022; actual released model and engine records |
| quality_identity | all flows | One actual grade/model/chemical/state per exchange. A supplied complete engine-CVT-clutch/final-drive module requires its own documented identity and installed supplied kg: engine-only class43121 cannot be assumed to contain transmission, and >50cc powertrain or class43110 excluding motor vehicles cannot substitute. Respect official reference property and bilingual name; installed module kg and complete M independently reconcile. Count tracking is supplementary, never falsely Item(s) against Mass. | actual supplier fit-list, direct public identity/property chain |
| quality_release | elementary | Collect only physically evidenced actual post-control release with chemical/CAS, immediate medium/submedium, species concentration/exhaust flow/time or actual fuel carbon balance. PM unspecified size is not captured dust, xylene not totalVOC, fossil CO2 not biogenic, NO not NO2/N2O/NOx. Expand other actual combustion/coating species separately when evidenced, and separate fuel biogenic carbon. None is assumed unavoidable; four-stroke route does not prescribe two-stroke premix oil. | original sampling, actual fuel/SDS/carbon and control records |
| quality_acceptance | acceptance | Retain actual current released joint/frame alignment, supplied integrated power-unit mount/torque and rear running-gear clearance/interface, CVT clutch/function acceptance, wheel/tyre/suspension, brake/control, fuel/oil/cooling leak, electrical/light and bounded engine/roller function checks and rework. Test endpoints/load/time/fuel return and support inputs are measured. No historical maximum speed, power, fuel economy, tank capacity or regulatory limit establishes a required threshold here. | current model-specific released test plans/results |
| quality_completeness | dataset | Reconcile full installed fit-list with issue/return/supplier/meter totals. Add actual separate fasteners/bearings, stand, lights/mirrors/switches/controls/cables, pump/hoses/cooling system, starter/ignition, additional specific panels, grade-specific finish chemicals, wastewater treatment and packaging if not contained. Different front/rear tyre sizes or physically different modules require separate cards; no miscellaneous parts pool or25% mass assumption. Every added exchange needs its own protocol/quantity basis. State measured/calculated/estimated/missing/excluded/not-applicable status, uncertainty and upstream/support/transport/treatment gaps. | complete fit-list and closed actual stock/meter/package records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Exactly1kg complete accepted declared scooter, measured cp_mass net M and independent component mass balance, same configuration and fuel correction originals. Formula consistency is not physical weighing or methodology approval. |  |
| validation_basis | inventory | All rows link valid lowercase IDs/protocols and normalize_mass; match accepted count/period/numerator units. Reject mixed configurations, invalid quantity enum, Mass/Volume/Energy substitution or catalogue conversion. |  |
| validation_scope | dataset | Require actual independent <=50cm3 four-stroke scooter engine/configuration applicability, bounded manufacturing support/trials and disclosed identities/upstream gaps. No transport function or cradle-to-gate completeness claim from foreground alone. |  |
| validation_release | elementary | Verify chemical/CAS/medium/time and actual conditional quantity; purchased water is product, outgoing wastewater treatment is waste, resource abstraction and direct emissions are separate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of a new complete two-wheel petrol scooter with single-cylinder reciprocating spark-ignition four-stroke piston engine of actual total cylinder capacity not exceeding50cm3, welded steel frame and one externally supplied complete engine-CVT-clutch-final-drive power unit; local manufacturing is frame fabrication/finishing, followed by unit mounting, running-gear/equipment integration and factory acceptance, not engine or CVT manufacture. The actual released frame cutting/forming/joining, conditional surface treatment/coating, installed power unit/running gear/body/electrical equipment and bounded factory acceptance define this foreground route. Frame stock grade/cross-section, joining method and supplied package configuration must be declared; no universal alloy, shielding gas or coating recipe imposed. This route is narrower than CPC49911. |
| excluded_use | Exclude >50cc scooters/motorcycles, two-stroke engines, electric/hybrid and non-reciprocating propulsion, horizontally opposed twin-cylinder motorcycles, external longitudinal shaft-drive/final-drive assembly manufacture or alignment, in-house engine/CVT manufacture, auxiliary-motor bicycles, sidecars, tricycles, primarily aluminium/composite frames, complete kits/parts sold separately, repair/overhaul and transport service. Exclude customer riding, passenger-km, fuel economy during use, maintenance, road infrastructure and end of life. Actual factory engine/roller and bounded acceptance movement belong to the manufacturing endpoint only with measured support inputs. Foreground alone is not complete cradle-to-gate or a lifetime mobility comparison. |
| required_metadata | model/released drawing revision/serial; two-wheel scooter, actual <=50cm3 total displacement, single cylinder and four-stroke spark ignition; frame grade/tube-sheet geometry and joining/finish; received power-unit supplier/engine-CVT-clutch-final-drive scope and independent installed kg/prefill; wheel/tyre/suspension/brake/body/saddle/tank/electrical fit-list; oil/coolant/battery chemistry and supplier wet/dry condition; site/period/accepted count/rework; current actual conformity and bounded factory-test plans/results; actual regular test-petrol grade/biogenic share and stock closure; calibrated complete-scooter weighing originals/tare/configuration/net fuel and temporary-stock corrections; independently measured installed BOM mass and uncertainty; net M kg distinct from catalogue vehicle/curb mass and rated payload; upstream utility/transport/treatment coverage and gaps |
| required_quality_disclosure | Exact scooter fit-list/engine-CVT route/supplier prefill and actual cylinder displacement; actual measured net M/raw corrections and component mass/uncertainty; actual period/site/count/rework/test endpoints; causal allocation/sensitivity; missing identities/physical records and upstream/treatment/support coverage; scientific review pending. |
| update_trigger | Structure/joining/finish or power-unit/running-gear/electrical configuration, supplier/make-or-buy/site/period, fluid/fuel chemistry, trial scope, weighing/delivery state, classification basis and new identity/evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| honda-giorno-2022 | handbook | Honda GIORNO specifications, March2022, one-page manufacturer PDFp1 table and date footnote. https://www.honda.co.jp/content/dam/site/www/50-Scooter/cq_img/pdf/GIORNO_SPEC_SP.pdf | Historical49cm3 liquid-cooled four-stroke/CVT configuration illustration only. No current production claim, compulsory model, steel-frame recipe, net81kg manufacturing M, tank capacity, fuel economy or life adopted. Actual released drawings and physical records govern the chosen route. |
| yamaha-mc-process | handbook | Yamaha Motor, バイク・スクーター・船外機をつくる仕事, undated official HTML, sections プレス、溶接、塗装、ユニット組付 / エンジン組立 / 車体・ユニット組立 / 完成検査 / 工場管理; unpaginated. https://global.yamaha-motor.com/jp/recruit/graduates/highschool/works-mc/ | General motorcycle/scooter pressing/welding/painting/unit assembly, purchased parts and final function/electrical/exterior inspection support decomposition only. Outboard assembly excluded. Not a specific Honda site, compulsory casting/forging/coating recipe or quantity evidence; actual make-or-buy work orders control foreground. |
