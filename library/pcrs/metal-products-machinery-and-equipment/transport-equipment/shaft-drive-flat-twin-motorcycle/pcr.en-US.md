---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.shaft-drive-flat-twin-motorcycle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Shaft-drive four-stroke flat-twin petrol motorcycle final assembly

## 1. Scope and Applicability

Candidate authored methodology for final assembly of a new complete two-wheeled, four-stroke flat-twin spark-ignition petrol motorcycle above50cc, with a load-bearing engine/two-section frame, six-speed constant-mesh gearbox, oil-lubricated clutch and articulated shaft/final-drive transmission. The evidence-selected suspension is Telelever front and Paralever single-sided aluminium rear with cast-aluminium wheels and disc brakes. Receive supplier-completed modules, integrate and outfit the declared configuration, perform actual serial production acceptance and net weighing, and release with actual conditional protection. R1250GS technical data defines an architecture example; current Berlin multi-model production is process context, not proof of current R1250GS availability or a universal recipe.

Exclude CVT/belt-drive step-through scooters, chain-driven motorcycles, single-cylinder/in-line engine families, electric vehicles, auxiliary-motor cycles, three-wheelers/sidecars, unfinished kits, repairs, engine manufacture and operating riding/road transport. This boundary is materially narrower than CPC49912. Unlike a welded-steel-frame scooter assembled with a purchased engine/CVT module, this gate integrates the load-bearing flat-twin engine and separate declared gearbox/shaft/final-drive interfaces; it contains no frame welding or CVT manufacture. Supplier cold engine/gearbox checks are upstream; actual complete-vehicle roller/brake/electrical checks and configured net weighing belong to this gate. Do not create identity solely from a displacement cutoff. Scientific review is pending; bilingual alignment and automated checks are not methodology approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.shaft-drive-flat-twin-motorcycle |
| classification_refs | CPC3.0 49912; narrower, no accepted mapping asserted |
| covered_products | New complete shaft-drive flat-twin motorcycle of the declared architecture and accepted customer configuration |
| excluded_products | CVT scooters, other engine/drivetrain/suspension architectures, parts, unfinished kits and operating riding |
| representative_product | BMW R1250GS manufacturer architecture example; no model weight/intensity or current availability assumed |
| production_route | Completed module receipt → frame/engine and shaft-drive integration → suspension/wheel/brake/electrical outfitting → actual serial roller/system acceptance and net weighing → conditional packaging and release |
| market_state | New complete accepted net-configured vehicle at declared final-assembly gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted complete shaft-drive four-stroke flat-twin petrol motorcycle |
| How much | 1 kg accepted complete configured motorcycle net mass |
| How well | Complete drawing/BOM and installed option list, actual approved manufacturing acceptance; no universal test/emission threshold invented |
| How long or cycle | One manufacturing acceptance cycle; no lifetime or riding-km reference |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete shaft-drive four-stroke flat-twin petrol motorcycle |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual producer/model/serial, displacement above50cc, spark-ignition four-stroke flat-twin route and air/liquid cooling; complete two-section frame/load-bearing engine; six-speed constant-mesh gearbox, oil clutch, shaft/final-drive supply inclusion; declared Telelever front and Paralever single-sided aluminium rear suspension, cast wheels/disc brakes/ABS, catalyst, electrical and installed customer options; supplier completed module boundaries; accepted complete measured net mass M kg and cp_mass calibration, configuration/fuel/fluid reconciliation; include required installed engine, transmission, battery, safety equipment and retained operating oil/coolant/brake fluid; exclude usable fuel, rider, luggage, temporary test load/fixtures, packaging and loose spares; actual site/period/gate, fuel grade and fossil share, hot versus cold test, upstream supply coverage |

Declare every required qualifier in dataset metadata or equivalent source-addressable fields. Equal mass does not imply equal power, riding performance, carrying service or environmental intensity. No catalogue road-ready mass is substituted for measured net M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `exchange_mass` | frame; engine; gearbox; clutch; shaft; final_drive; bolt; gear_oil; front_suspension; rear_swingarm; rear_strut; front_wheel; rear_wheel; front_tyre; rear_tyre; front_brake; rear_brake; brake_disc; abs; tank; exhaust; harness; battery; saddle; lamp; coolant; engine_oil; brake_fluid; co2_air; no_air; no2_air; co_air; spent_oil; wood; cardboard; film | Mass | kg | Measure each separately received/consumed/returned physical item in kg. Count statistics require actual measured per-item mass and inclusion scope. Public count/area properties, if later suitable, retain their own units and explicit measured conversion; never overwrite them with Mass. |
| `electric_energy` | assembly_electricity; outfit_electricity; acceptance_electricity; protection_electricity | Net calorific value | MJ | Preserve the actual public energy property and meter kWh; 1 kWh =3.6 MJ. Supply technology/provider/voltage remain explicitly disclosed upstream gaps, not inferred from a foreground-use identity. |
| `fuel_volume` | petrol | Volume | m3 | Keep public Volume reference property. Measure actual net consumed unleaded petrol in litres under recorded batch/temperature conditions; 1 litre =0.001 m3. An independent mass/carbon balance requires measured density and fossil carbon composition; no assumed kg/litre conversion. |
| `mass_configuration` | cp_mass | Mass | kg | Measure accepted complete installed configuration after draining/documenting usable fuel. Include required retained operating oil/coolant/brake fluid and battery; exclude rider, luggage, temporary test ballast/fixtures, packaging and loose spares. If a scale reading contains excluded fuel/items, subtract separately measured masses with signed reconciliation, keeping original gross reading. Do not subtract dry-module mass from retained fluids twice. |
| `mass_record_origin` | cp_mass | Mass | kg | Use real calibrated platform-scale readings of the serial complete motorcycle, with calibration/zero/tare, positive net M, BOM/options, fluid/fuel state, measurement uncertainty and acceptance signature. The manufacturer catalogue road-ready value includes at least90% usable fuel; it is neither net M nor an actual serial weighing record. Missing actual records remain a quantitative gap. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received completed frame, flat-twin motorcycle engine and finished declared supplier modules |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Declared shaft-drive flat-twin complete motorcycle subset of CPC49912 |
| recursive_input_rule | Do not recursively place supplier machining, engine assembly, frame welding, plating, casting or pre-receipt coating inside this final-assembly gate |
| upstream_dataset_requirement | Link compatible completed modules, consumables, site-specific electricity/fuel delivery, transport and waste-treatment datasets before broader supply-chain claims |
| disclosure | Foreground final assembly, attributable production acceptance, configured net weighing and actual conditional protection only; supplier inclusions and missing links disclosed |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_trials` | acceptance | Include actual serial roller/system acceptance inside the gate. Electrically driven cold engine tests before receipt are supplier processes; do not count them as petrol combustion here. Development, homologation and operating road-cycle fuel/emissions are excluded. Any extra in-house machining/welding/paint boundary needs separate evidenced atomic inventories, not silent inclusion. | `bmw-production` |
| `boundary_completeness` | dataset | This foreground gate is not complete cradle-to-gate. Required stages do not make every example exchange compulsory: separately supplied modules, actual oil changes, emissions and packing apply only with records. Add omitted actually used components/chemicals, compressed gas, cleaning, heat or outside tests as separate exact exchanges; disclose omissions/unknowns, never categorical rows or invented zero values. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `assembly` | Frame and shaft-drive powertrain integration | required | New declared shaft-drive four-stroke flat-twin petrol motorcycle above50cc. | foreground | one accepted complete unit normalized with M |
| `outfit` | Running gear and complete motorcycle outfitting | required | Same actual complete declared delivery configuration. | foreground | one accepted complete unit normalized with M |
| `acceptance` | Production acceptance and configured net weighing | required | Actual serial motorcycle released at the declared manufacturing gate. | foreground | one accepted complete unit normalized with M |
| `protection` | Factory release and conditional delivery protection | required | Release each complete accepted motorcycle; consumable packing or reusable shipping rack exchanges apply only when actually used at this gate. | foreground | one accepted complete unit normalized with M |

Frame/engine marriage and shaft-drive integration feed complete running gear/outfitting and actual roller/system acceptance and weighing; protection applies only when actually present. Declare real station order, supplier-completed interfaces and subcontract scope. Installed options and module-contained constituents are counted once.

### Process: Frame and shaft-drive powertrain integration (`assembly`)

Receive finished frame and motorcycle engine, bolt the load-bearing engine/frame interface and integrate the actual six-speed gearbox, shaft and final drive. Define engine/clutch/gearbox supply inclusions so a complete engine module is not counted again as separate constituents. Engine machining, frame welding and coatings before receipt are outside this final-assembly gate. BMW factory descriptions illustrate the marriage and interfaces, not a compulsory supplier structure or model-independent recipe.

#### Inputs

##### Product flows

###### Completed motorcycle load-bearing frame assembly (`frame`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle load-bearing frame assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed four-stroke flat-twin spark-ignition motorcycle piston engine (`engine`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed four-stroke flat-twin spark-ignition motorcycle piston engine
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed six-speed constant-mesh motorcycle gearbox (`gearbox`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed six-speed constant-mesh motorcycle gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle oil-lubricated clutch assembly (`clutch`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle oil-lubricated clutch assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle articulated drive-shaft assembly (`shaft`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle articulated drive-shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle shaft-drive final-drive gear assembly (`final_drive`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle shaft-drive final-drive gear assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

###### Steel threaded motorcycle assembly bolt (`bolt`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Steel threaded motorcycle assembly bolt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

###### Formulated hypoid motorcycle final-drive gear oil (`gear_oil`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Formulated hypoid motorcycle final-drive gear oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

###### Purchased alternating-current electricity (`assembly_electricity`)

Actual foreground alternating-current use at the measured point of use. The selected identity leaves supply technology, country, provider, voltage and line losses unspecified, so disclose these and link a compatible upstream supply dataset; it is not a Chinese or German grid-average footprint. Convert meter kWh to MJ with3.6 and retain raw readings.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-production`; `bmw-configuration`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows


### Process: Running gear and complete motorcycle outfitting (`outfit`)

Install the declared front and rear suspension, wheels, tyres and disc brakes, fuel system, exhaust/catalyst, electrical system, controls and saddle. The R1250GS example has aluminium wheels/swing arm, Telelever/Paralever and a maintenance-free12V battery; the source does not establish battery chemistry or fuel-tank polymer/metal. Use actual supplied physical modules without inventing materials. Independently delivered optional luggage is excluded, installed customer options are declared.

#### Inputs

##### Product flows

###### Completed motorcycle Telelever front-suspension assembly (`front_suspension`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle Telelever front-suspension assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Cast aluminium motorcycle single-sided rear swing arm (`rear_swingarm`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Cast aluminium motorcycle single-sided rear swing arm
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle rear suspension spring strut (`rear_strut`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle rear suspension spring strut
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed cast-aluminium motorcycle front wheel without tyre (`front_wheel`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed cast-aluminium motorcycle front wheel without tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed cast-aluminium motorcycle rear wheel without tyre (`rear_wheel`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed cast-aluminium motorcycle rear wheel without tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Pneumatic radial motorcycle front tyre (`front_tyre`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Pneumatic radial motorcycle front tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Pneumatic radial motorcycle rear tyre (`rear_tyre`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Pneumatic radial motorcycle rear tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle front disc-brake caliper assembly (`front_brake`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle front disc-brake caliper assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle rear disc-brake caliper assembly (`rear_brake`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle rear disc-brake caliper assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Finished motorcycle brake disc (`brake_disc`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Finished motorcycle brake disc
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle antilock brake control module (`abs`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle antilock brake control module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle petrol fuel-tank assembly (`tank`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle petrol fuel-tank assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle exhaust assembly with three-way catalyst (`exhaust`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle exhaust assembly with three-way catalyst
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed insulated motorcycle electrical wiring harness (`harness`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed insulated motorcycle electrical wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed 12V maintenance-free motorcycle starter battery (`battery`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed 12V maintenance-free motorcycle starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle rider saddle (`saddle`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle rider saddle
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Completed motorcycle LED headlight assembly (`lamp`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Completed motorcycle LED headlight assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Formulated motorcycle engine liquid coolant (`coolant`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Formulated motorcycle engine liquid coolant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Formulated four-stroke motorcycle engine lubricating oil (`engine_oil`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Formulated four-stroke motorcycle engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Formulated motorcycle hydraulic disc-brake fluid (`brake_fluid`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Formulated motorcycle hydraulic disc-brake fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

###### Purchased alternating-current electricity (`outfit_electricity`)

Actual foreground alternating-current use at the measured point of use. The selected identity leaves supply technology, country, provider, voltage and line losses unspecified, so disclose these and link a compatible upstream supply dataset; it is not a Chinese or German grid-average footprint. Convert meter kWh to MJ with3.6 and retain raw readings.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `bmw-production`; `bmw-configuration`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows


### Process: Production acceptance and configured net weighing (`acceptance`)

Include actual assembly checks and attributable roller test; record any hot petrol-running test separately from electrically driven cold engine tests. Supplier engine acceptance before receipt remains upstream. Capture actual test fuel consumption/returns and species only when relevant; no prescribed duration, emission amount or fuel-fired cold test. Weigh the accepted complete configured vehicle with calibrated equipment after documenting fuel/fluid/option state.

#### Inputs

##### Product flows

###### Motor gasoline supplied for motorcycle production acceptance (`petrol`)

Only actual unleaded refinery petrol for attributable hot roller testing. Preserve its public Volume reference property and collect delivered/returned/consumed litres at recorded temperature, then multiply by0.001 to m3. No generic density is imposed; any mass/fossil-carbon balance independently requires measured batch density/composition and carbon fate. Other fuels or ethanol blends require compatible separate identities. Test fuel retained at delivery is excluded from M and reported separately, not falsely treated as consumed.

- Selected flow: Petrol, unleaded `eba2e8f5-17f1-4fb3-ae36-f41fce378ee6`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `bmw-production`; `bmw-configuration`

###### Purchased alternating-current electricity (`acceptance_electricity`)

Actual foreground alternating-current use at the measured point of use. The selected identity leaves supply technology, country, provider, voltage and line losses unspecified, so disclose these and link a compatible upstream supply dataset; it is not a Chinese or German grid-average footprint. Convert meter kWh to MJ with3.6 and retain raw readings.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `bmw-production`; `bmw-configuration`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used four-stroke motorcycle test lubricating oil transferred for treatment (`spent_oil`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Used four-stroke motorcycle test lubricating oil transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `bmw-production`; `bmw-configuration`

##### Elementary flows

###### Carbon dioxide, fossil, to air, unspecified (`co2_air`)

Only actual separately quantified CO2 CAS124-38-9 release to immediate air, unspecified subcompartment, in attributable production testing. Exclude biogenic share; a carbon-balance alternative requires actual fossil carbon fraction and oxidation/product balance, not an assumed universal petrol factor. Integrate calibrated outlet concentration, exhaust flow and actual period with units, detection limits and uncertainty. Do not infer a compulsory release or use operating road-cycle g/km.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `bmw-production`; `bmw-configuration`

###### Nitrogen monoxide to air, unspecified (`no_air`)

Only actual separately quantified NO CAS10102-43-9 release to immediate air, unspecified subcompartment, in attributable production testing. NO2, N2O and NOx as NO2 equivalents are different. Integrate calibrated outlet concentration, exhaust flow and actual period with units, detection limits and uncertainty. Do not infer a compulsory release or use operating road-cycle g/km.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `bmw-production`; `bmw-configuration`

###### Nitrogen dioxide to air, unspecified (`no2_air`)

Only actual separately quantified NO2 CAS10102-44-0 release to immediate air, unspecified subcompartment, in attributable production testing. NO, N2O and total NOx are different. Integrate calibrated outlet concentration, exhaust flow and actual period with units, detection limits and uncertainty. Do not infer a compulsory release or use operating road-cycle g/km.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `bmw-production`; `bmw-configuration`

###### Carbon monoxide, fossil, to air, unspecified (`co_air`)

Only actual separately quantified CO CAS630-08-0 release to immediate air, unspecified subcompartment, in attributable production testing. Do not substitute CO2 or occupational concentration for emitted mass. Integrate calibrated outlet concentration, exhaust flow and actual period with units, detection limits and uncertainty. Do not infer a compulsory release or use operating road-cycle g/km. Quantify only verified fossil-source CO; separate biogenic share and do not infer fossil origin from total CO alone.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `bmw-production`; `bmw-configuration`


### Process: Factory release and conditional delivery protection (`protection`)

Wood crate and corrugated cardboard apply only to actual overseas-type packing. Reusable steel shipping racks are separately attributed from measured service/use records; do not charge one entire new rack per motorcycle. Film is conditional on actual non-adhesive LDPE specification. Exclude dealer delivery/use and transit beyond the declared gate.

#### Inputs

##### Product flows

###### Finished sawn timber motorcycle shipping-crate plank (`wood`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Finished sawn timber motorcycle shipping-crate plank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_protection`
- Sources: `bmw-production`

###### Finished corrugated-cardboard motorcycle shipping carton (`cardboard`)

Only the actual separately supplied physical item at this interface. Measure net issues less returns and supplier inclusion; omit this separate exchange when already contained in another supplied assembly. Retain actual specifications and add omitted actual constituents atomically.

- Selected flow: Finished corrugated-cardboard motorcycle shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_protection`
- Sources: `bmw-production`

###### Non-adhesive non-cellular LDPE protective packaging film (`film`)

Only actually supplied non-adhesive, non-cellular LDPE foil, not reinforced, laminated or supported; verify supplier grade and weigh net separately consumed film. Other film structures need their own identity.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_protection`
- Sources: `bmw-production`

###### Purchased alternating-current electricity (`protection_electricity`)

Actual foreground alternating-current use at the measured point of use. The selected identity leaves supply technology, country, provider, voltage and line losses unspecified, so disclose these and link a compatible upstream supply dataset; it is not a Chinese or German grid-average footprint. Convert meter kWh to MJ with3.6 and retain raw readings.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_protection`
- Sources: `bmw-production`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete shaft-drive four-stroke flat-twin petrol motorcycle (`finished_machine`)

Fixed1kg of the declared complete accepted net configuration. Installed engine, shaft drive, battery, safety equipment and required operating oil/coolant/brake fluid are included. Exclude usable petrol, rider/luggage, temporary roller ballast/test fixtures, packaging and loose spares; retain measured configuration corrections and no model catalogue mass.

- Selected flow: Accepted complete shaft-drive four-stroke flat-twin petrol motorcycle
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `bmw-production`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | Avoid allocation by serial/order/station separation and submetering. Residual shared electricity or handling uses a demonstrated measured causal driver such as actual powered assembly time/load or roller duration/load, retaining numerator/denominator and sensitivity. Equal-per-bike allocation across CVT and flat-twin/shaft architectures, or catalogue mass allocation, is not presumed. | `ghg-allocation` |
| `allocation_returns` | spent_oil; protection | Distinguish supplier returns, internal reuse and transferred waste. Attribute reusable shipping racks from actual service/use records, not one new rack per vehicle or an invented lifetime. No automatic fuel/recycled-material avoided-burden credit. A genuine co-product requires separate reviewed causal allocation and compatible recipient boundary. | `ghg-allocation` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | reference product | weighing_record | serial; configuration; accepted net mass M; gross/tare/zero; scale/calibration/uncertainty; measured excluded fuel/item correction; retained fluids; acceptance; count | Weigh the accepted complete unit on a calibrated platform scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted serial and changed configuration | actual manufacturing reporting period | declared final-assembly site | accepted net mass per unit | original scale/calibration/BOM/fluid reconciliation and signed acceptance |
| `cp_assembly` | `assembly` | inventory rows | production_record | serial; configuration; item/specification; measured net issue/return/stock; supplier inclusion; raw unit; accepted count; calibration; electricity kWh; petrol litres/temperature; actual species/concentration/exhaust flow/time; causal allocation numerator/denominator | Record supplier part/model/serial and completed supply boundary, measured received and returned net masses, installed bolts and retained specified lubricant; reconcile engine/gearbox/clutch inclusions. Collect each exchange separately in its declared unit: kg for physical items, MJ for electricity using3.6 per kWh, m3 for petrol using0.001 per litre. Calibrate instruments, retain net stock/return adjustments and measured emissions or explicit not-applicable/unknown status; no default factor. | row-specific kg; MJ; m3 | each serial/order and measured actual test period | actual reporting period | declared assembly site and separately disclosed subcontractor | attributable exchange amount / accepted units | original module/SDS/meters/test/stock/waste records and measured allocation |
| `cp_outfit` | `outfit` | inventory rows | production_record | serial; configuration; item/specification; measured net issue/return/stock; supplier inclusion; raw unit; accepted count; calibration; electricity kWh; petrol litres/temperature; actual species/concentration/exhaust flow/time; causal allocation numerator/denominator | Reconcile complete serial BOM, separately supplied modules and already-included subassemblies; measure net module quantities and actual oil/coolant/brake-fluid charge and returns; record installed option configuration. Collect each exchange separately in its declared unit: kg for physical items, MJ for electricity using3.6 per kWh, m3 for petrol using0.001 per litre. Calibrate instruments, retain net stock/return adjustments and measured emissions or explicit not-applicable/unknown status; no default factor. | row-specific kg; MJ; m3 | each serial/order and measured actual test period | actual reporting period | declared assembly site and separately disclosed subcontractor | attributable exchange amount / accepted units | original module/SDS/meters/test/stock/waste records and measured allocation |
| `cp_acceptance` | `acceptance` | inventory rows | production_record | serial; configuration; item/specification; measured net issue/return/stock; supplier inclusion; raw unit; accepted count; calibration; electricity kWh; petrol litres/temperature; actual species/concentration/exhaust flow/time; causal allocation numerator/denominator | Collect serial test/roller records, electric submeter readings, actual fuel grade/fossil share and measured quantity/density, outlet species/flow/time and calibrated scale/configuration records linked to accepted count. Collect each exchange separately in its declared unit: kg for physical items, MJ for electricity using3.6 per kWh, m3 for petrol using0.001 per litre. Calibrate instruments, retain net stock/return adjustments and measured emissions or explicit not-applicable/unknown status; no default factor. | row-specific kg; MJ; m3 | each serial/order and measured actual test period | actual reporting period | declared assembly site and separately disclosed subcontractor | attributable exchange amount / accepted units | original module/SDS/meters/test/stock/waste records and measured allocation |
| `cp_protection` | `protection` | inventory rows | production_record | serial; configuration; item/specification; measured net issue/return/stock; supplier inclusion; raw unit; accepted count; calibration; electricity kWh; petrol litres/temperature; actual species/concentration/exhaust flow/time; causal allocation numerator/denominator | Measure actual separately consumed wood/cardboard/film, return records and reusable rack service attribution; retain release gate and product net mass separate from packaging. Collect each exchange separately in its declared unit: kg for physical items, MJ for electricity using3.6 per kWh, m3 for petrol using0.001 per litre. Calibrate instruments, retain net stock/return adjustments and measured emissions or explicit not-applicable/unknown status; no default factor. | row-specific kg; MJ; m3 | each serial/order and measured actual test period | actual reporting period | declared assembly site and separately disclosed subcontractor | attributable exchange amount / accepted units | original module/SDS/meters/test/stock/waste records and measured allocation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

First derive actual attributable net q_item per accepted serial in each row unit, preserving module inclusions and any measured shared-resource allocation. Then divide by its same measured net M. For equivalent serial configurations aggregate attributable exchanges over the sum of measured net accepted masses, keeping serial evidence. Separate materially different powertrain/suspension/options and gate/test routes. Petrol volume per kg is not petrol mass per kg; any carbon balance needs its independent measured density/composition. Missing actual M/quantity/foreground evidence remains a gap.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_origin and mass_configuration with real calibrated serial complete-motorcycle weighing. Reject catalogue road-ready/fuelled weight, rider/load, packaging or unmeasured deductions. Required actual records are not provided by this methodology. | original serial scale/calibration/configuration/fluid and acceptance records |
| `quality_inclusions` | assembly; outfit | Reconcile engine/clutch/gearbox supplier inclusions, shaft/final drive, suspension, wheels versus tyres/brakes, fuel tank, catalyst, battery chemistry, wiring, lighting and actual options/fluids. Add omitted actual constituents atomically; finished module and contained parts are not double counted. | actual approved BOM, supply completion, model/serial/SDS records |
| `quality_emissions` | petrol; co2_air; no_air; no2_air; co_air | Preserve actual unleaded fuel specification, public Volume unit and temperature; separately establish fossil carbon origin and measured outlet species/subcompartment. NO is not NO2/N2O/totalNOx; CO chemical product is not air release. No operating WMTC factors are used for factory tests. Document abatement, uncertainty and detection limits. | actual fuel/SDS and calibrated speciated test evidence |
| `quality_evidence` | dataset | Disclose actual site/period/gate, sources, supplier completion, conditional absences, measurement/identity/upstream gaps and uncertainty. Empirical QA ranges require compatible actual records or independent verified originals; no mass, yield, test duration or lifetime is invented. All quantitative acquisition remains pending; automated checks do not establish scientific review. | original evidence, scope and gap register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine; cp_mass | Check the flat-twin four-stroke shaft-drive six-speed complete architecture, actual serial above50cc and positive calibrated net M with fuel/fluid/options reconciliation. Fixed output is1kg; it is not a scooter/chain-drive substitution or service-km. | `bmw-configuration` |
| `validate_rows` | all inventory rows | Check one chemical/physical identity and actual direction/type per row, public state/property/unit and official Chinese name, measured normalization and all lowercase rule/protocol references. Preserve fuel Volume, not Mass. Unresolved identities stay declared review gaps; no false mandatory emissions or invented zeros. |  |
| `validate_balance` | all processes | Reconcile module inclusions, net material/fluids, fuel issues/returns/consumption/retention, waste recipient and actual testing/packing. Quantitative data completion requires the real M and all actual exchanges. Complete cradle-to-gate additionally requires compatible upstream supply links beyond this final-assembly gate. | `ghg-allocation` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured shaft-drive flat-twin motorcycle foreground final assembly |
| downstream_use | secondary_dataset; background_dataset only after qualified review and compatible upstream linkage |
| allowed_use | Declared compatible engine/drivetrain/suspension configuration, module supply completion, actual net M and gate manufacture |
| excluded_use | Whole CPC49912, CVT scooter/other architecture, riding transport, equal-mass performance equivalence and unsupported whole lifecycle |
| required_metadata | actual producer/model/serial, displacement above50cc, spark-ignition four-stroke flat-twin route and air/liquid cooling; complete two-section frame/load-bearing engine; six-speed constant-mesh gearbox, oil clutch, shaft/final-drive supply inclusion; declared Telelever front and Paralever single-sided aluminium rear suspension, cast wheels/disc brakes/ABS, catalyst, electrical and installed customer options; supplier completed module boundaries; accepted complete measured net mass M kg and cp_mass calibration, configuration/fuel/fluid reconciliation; include required installed engine, transmission, battery, safety equipment and retained operating oil/coolant/brake fluid; exclude usable fuel, rider, luggage, temporary test load/fixtures, packaging and loose spares; actual site/period/gate, fuel grade and fossil share, hot versus cold test, upstream supply coverage |
| required_quality_disclosure | Actual calibrated M and exchange measurements, module inclusions, fuel-volume/fossil-origin evidence, supply electricity route, empirical QA, identity and upstream gaps |
| update_trigger | Engine/frame/clutch/gearbox/shaft/final-drive/suspension/options, supplier inclusions, fluids/fuel/test or packing route, actual scale/configuration/gate/site/period change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `bmw-configuration` | literature | [BMW Motorrad R1250GS technical data](https://www.bmw-motorrad.com.my/en/models/adventure/r1250gs/technicaldata.html) | HTML Engine, Power transmission, Chassis/brakes and Dimensions/weights with footnote1: flat-twin four-stroke spark-ignition petrol, six-speed gearbox, oil clutch, shaft drive, load-bearing frame, Telelever/Paralever, wheels/disc brakes and battery. Model-specific architecture only. Catalogue mass includes at least90% usable fuel and is rejected as M; no WMTC consumption/CO2, numerical mass or current EU4 acceptance rule adopted. |
| `bmw-production` | literature | [BMW Group Plant Berlin production](https://www.bmwgroup-werke.com/berlin/de.html) | HTML Motorenfertigung, Fahrzeugmontage, Lackiererei, Logistik and Qualitätsmanagement: cold engine/gearbox test, frame/engine marriage, torque/configuration station data, roller/system acceptance, reusable European steel racks and overseas wood/cardboard packing. Multi-model factory context; machining/welding/coating are outside this receipt gate. R1300 aluminium tank not asserted for R1250. No cycle time, component count, packaging-saving or emission factor used. |
| `yamaha-production` | literature | [Yamaha manufacturing work](https://global.yamaha-motor.com/jp/recruit/graduates/highschool/works-mc/) | HTML エンジン組立, 車体・ユニット組立, 完成検査 and 工場管理: independent context for supplier/in-house module assembly, electrical/function/appearance acceptance and shipment. Mixed motorcycle/scooter/outboard jobs do not establish this flat-twin shaft architecture, mandatory in-house casting or per-bike quantities. |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | Printed63/PDF65 tables9.1–9.2: historical avoid/subdivide and underlying physical allocation hierarchy. Actual foreground measured causal drivers remain required; no motorcycle quantity factor or current regulatory obligation inferred. |
