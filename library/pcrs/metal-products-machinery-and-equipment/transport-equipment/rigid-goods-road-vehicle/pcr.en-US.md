---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.rigid-goods-road-vehicle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Diesel rigid goods road vehicle with steel flatbed manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete diesel rigid goods road vehicles with a permanently mounted steel flatbed cargo body. Its foreground starts at documented stock/component receipt and stops at the declared final manufacturer/bodybuilder gate after whole-vehicle acceptance. A chassis-cab maker and separate bodybuilder require linked supplier modules or an explicitly collected multi-site foreground. Supplier upstream gaps prevent a complete cradle-to-gate claim. [Sources: `scania-production`, `volvo-fm`, `body-mount`]

Exclude tractor units, trailers, cargo, incomplete chassis, box/tank/refrigerated/tipping vehicles, off-road dumpers, agricultural vehicles, buses, special work machinery, electric/hybrid/gas propulsion, repairs, dealer options, road freight use, maintenance and end of life. The material-specific steel-flatbed boundary is narrower than CPC 49114 and requires cargo-body manufacture/mounting and complete vehicle acceptance. Existing motor-vehicle body PCR covers only body manufacture; integrate it once for applicable cab/body scope with fittings added, or replace purchased modules by actually collected on-site operations. No transport-service or tonne-kilometre reference is covered. Scientific review remains pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.rigid-goods-road-vehicle |
| classification_refs | CPC 3.0 49114 Motor vehicles n.e.c. for the transport of goods; narrower diesel manufacture scope, classification context only |
| covered_products | New complete diesel rigid goods trucks with fixed steel flatbed, declaring cargo-body/chassis/cab/powertrain configuration |
| excluded_products | Tractor units, trailers, incomplete chassis, other body types, alternative propulsion and transport services |
| representative_product | One VIN-linked accepted complete configured truck, measured M, no assumed catalogue mass |
| production_route | Actual conditional frame/finishing, rolling-chassis assembly, conditional flatbed fabrication and cargo-body mounting, diesel/cab and electrical integration, first fill and acceptance |
| market_state | Accepted complete truck at declared factory dispatch gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the configured complete diesel truck |
| How much | 1 kg net accepted complete truck; convert actual per-machine records with measured M |
| How well | Producer configuration-specific dimensional, installation, functional and release acceptance; equal mass does not imply equal payload/service capability |
| How long or cycle | One manufacture and factory acceptance cycle; no imposed vehicle lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted configured complete diesel rigid goods vehicle with steel flatbed |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model; VIN and configuration/drawing revision; diesel engine family and fuel compatibility; gearbox type and supplier prefill; axle arrangement, wheelbase and suspension; cab type and fitted completeness; steel flatbed grade/deck construction, dimensions, mounting/subframe/attachment interface; braking/steering architecture; tyre/rim specification; installed battery/controller/harness; cooling and exhaust-aftertreatment completeness; installed options; actual retained fuel, urea and service fluids; measured net M and scale calibration/tare; separately weighed detached integral components; actual make-or-buy route, site/period, gate and upstream coverage |

Declare every qualifier in dataset metadata or reference comments. M is physically measured complete accepted configuration including fitted modules, cargo body and measured retained first fills, with detached integral delivery parts separately weighed and reconciled. Exclude driver, trailer, cargo, removable protection and separately sold spares. Record dispatch fuel/urea state explicitly so empty and filled configurations cannot be pooled. Catalogue curb/shipping/gross combination weights, rated load and tank/oil-change capacities are not substitutes for this measured M. Manufactured reference UUID remains unresolved; freight service candidates cannot replace this product.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `engine_mass` | diesel_engine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect installed supplied engine mass in kg by calibrated weighing or traceable same-configuration net weighing records; declare hardware and contained prefill, excluding packaging/supports/separate parts. Counts are serial traceability only. Reconcile hardware/fluid masses independently to vehicle M and prevent duplicate first fill. |
| `energy_conversion` | electricity | Net calorific value | MJ | Convert actual measured kWh with verified unit-group factor 3.6 MJ/kWh; record intake supply/voltage. Rated engine kW is not test energy. |
| `liquid_mass` | liquid exchanges | Mass | kg | Weigh the actual supplied formulation or use measured density at declared composition/concentration/temperature for volume conversion; catalogue capacity is not fill amount. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received stock and finished component modules, with supplier completeness declared |
| starting_condition_role | Foreground receipt-to-dispatch manufacture |
| product_classification_scope | Complete diesel rigid truck with cargo body; no semi-trailer or transport service |
| recursive_input_rule | Do not recursively generate a supplied complete truck from its same reference output; bought-in complete modules bypass their performed internal stages |
| upstream_dataset_requirement | Match actual stock/module scope, propulsion, finish, formulation, geography and properties; disclose unmatched supplier production |
| disclosure | VIN configuration, actual manufacturing/outsourcing, first fills, M, factory testing, gate/period/site and upstream omissions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory` | all processes | Include actual manufacturing, assembly, filling, rework and attributable release tests. Exclude freight operation and research/durability programmes not attributable to production batches; document any shared manufacturing development costs separately. | `scania-production` |
| `boundary_modules` | supplier parts | Count complete supplied flatbed/subframe, cab, engine/gearbox, axle and filled battery once with included constituents/prefills; replace component cards if a complete rolling chassis is supplied. Add actual missing BOM components before dataset completion. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame_prepare` | Frame preparation | conditional | The frame is fabricated in the reporting foreground. | foreground | one accepted configured truck, normalized with M |
| `surface_finish` | Conditional surface preparation and finishing | conditional | Frame, cab or flatbed parts undergo finishing within the declared foreground. | foreground | one accepted configured truck, normalized with M |
| `chassis` | Rolling chassis assembly | required | Every complete configured rigid truck. | foreground | one accepted configured truck, normalized with M |
| `cargo_fabrication` | Conditional steel flatbed fabrication | conditional | The steel flatbed is fabricated within the reporting foreground. | foreground | one accepted configured truck, normalized with M |
| `cargo_mount` | Cargo-body mounting and integration | required | Every complete steel-flatbed rigid goods vehicle. | foreground | one accepted configured truck, normalized with M |
| `powertrain` | Diesel powertrain and cab integration | required | Every declared diesel truck configuration. | foreground | one accepted configured truck, normalized with M |
| `electrical` | Vehicle electrical installation | required | Every complete configured diesel truck. | foreground | one accepted configured truck, normalized with M |
| `acceptance` | First fill and factory acceptance | required | Every accepted finished truck. | foreground | one accepted configured truck, normalized with M |
| `packing` | Dispatch protection | conditional | Actual protection materials cross the dispatch gate. | foreground | one accepted configured truck, normalized with M |

Actual frame/finishing feed chassis assembly, flatbed fabrication and body mounting, diesel/cab and electrical integration, then fill/acceptance and conditional protection. Every card is conditional on its exact material and supplier scope even in a required stage. No card implies a universal recipe, unavoidable emission or exhaustive BOM. Trace the complete actual configuration and add each omitted material, part, fuel, chemical, utility and demonstrated waste/emission separately.

### Process: Frame preparation (`frame_prepare`)

Cut and form actual grade-specific rails/cross-members, drill interfaces and join by the documented bolted/riveted/welded route. Do not assume all truck frames are welded or cast. Add each actual rivet, weld wire and shielding gas separately. A purchased finished frame bypasses these operations.

#### Inputs

##### Product flows

###### Steel Plate (`frame_plate`)

Only documented hot-rolled low-alloy high-strength thick plate for actual frame parts; not generic high-strength sheet or galvanized cab sheet. Retain grade/thickness and weighed stock.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_prepare.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_prepare`
- Sources:

###### Grid alternating-current electricity at the factory intake (`electricity_frame_prepare`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_prepare.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_prepare`
- Sources:

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Only segregated untreated steel cutting offcuts exported after internal reuse, with measured mass and destination.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_prepare.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_prepare`
- Sources:

### Process: Conditional surface preparation and finishing (`surface_finish`)

Document actual cleaning, pretreatment, primer, basecoat, clearcoat and curing as performed; each formulation and actual curing fuel needs a distinct exchange. Waterborne basecoat is a conditional card, not a universal recipe. Captured residues are waste, not automatic environmental emissions. Bought-in painted cab or finished frame bypasses their completed operations. In-house cab-sheet forming/joining requires a linked body manufacturing module and its measured exchanges, with no second complete cab purchase.

#### Inputs

##### Product flows

###### Process Water (`cleaning_water`)

Only treated supplied industrial process water actually used; internal circulation is not fresh resource withdrawal.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `scania-production`

###### Waterborne automotive cab basecoat formulation (`waterborne_basecoat`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Waterborne automotive cab basecoat formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `scania-production`

###### Grid alternating-current electricity at the factory intake (`electricity_surface_finish`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `scania-production`

#### Outputs

##### Waste flows

###### Aqueous metal-part cleaning effluent transferred for treatment (`cleaning_effluent`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Aqueous metal-part cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `scania-production`

### Process: Rolling chassis assembly (`chassis`)

Install actual frame, steering/driven axles, suspension, wheels/tyres, steering and pneumatic braking. Declare axle arrangement, wheelbase, spring type and brake design; air-spring and disc-brake cards are conditional variants. Bought-in rolling chassis replaces included constituents once; incomplete chassis receipt is an intermediate, not the reference output. Add each actual separate reservoir, actuator, line and fastener.

#### Inputs

##### Product flows

###### Finished steel ladder-frame assembly (`frame`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished steel ladder-frame assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-fm`

###### Finished truck steering-axle assembly (`front_axle`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished truck steering-axle assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-fm`

###### Finished truck driven-axle assembly (`rear_axle`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished truck driven-axle assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-fm`

###### Finished steel rigid-truck wheel rim (`rim`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished steel rigid-truck wheel rim
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-fm`

###### New radial pneumatic rubber heavy-truck tyre (`tyre`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: New radial pneumatic rubber heavy-truck tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-fm`

###### Truck pneumatic air-spring suspension module (`suspension`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Truck pneumatic air-spring suspension module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-fm`

###### Truck pneumatic disc-brake caliper assembly (`disc_brake`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Truck pneumatic disc-brake caliper assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-fm`

###### Grid alternating-current electricity at the factory intake (`electricity_chassis`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-fm`

### Process: Conditional steel flatbed fabrication (`cargo_fabrication`)

Cut/form declared grade and thickness deck/support parts, machine interfaces and join by the actual supported welded/bolted route. Track deck geometry, structural drawings and weighed offcuts. A finished purchased body bypasses its performed fabrication. Each actual filler wire, shielding gas, abrasive or fastener must be separate; no universal welding recipe is asserted. Surface finish joins the declared finishing stage only for actual uncoated parts.

#### Inputs

##### Product flows

###### Grid alternating-current electricity at the factory intake (`electricity_cargo_fabrication`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_fabrication`
- Sources:

###### Steel Plate (`flatbed_plate`)

Only actual hot-rolled low-alloy high-strength thick steel plate matching the public identity; not ordinary thin deck sheet. Otherwise add exact grade/form card unresolved.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_fabrication`
- Sources:

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`flatbed_offcut`)

Measured segregated untreated steel cutting offcuts exported after reuse; retain outlet.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_fabrication`
- Sources:

### Process: Cargo-body mounting and integration (`cargo_mount`)

Mount the finished flatbed to the chassis by its declared subframe/bracket/attachment design. Collect actual bracket grade, fastener specification/quantity, torque, alignment and mounting acceptance; do not adopt example bolt dimensions as a category requirement. Subframe welded attachment and chassis bolted attachment are distinct routes. If supplier body includes its subframe/brackets, omit second purchase. Preserve body/chassis interface and final axle/load-distribution checks without counting cargo as product mass.

#### Inputs

##### Product flows

###### Grid alternating-current electricity at the factory intake (`electricity_cargo_mount`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_mount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_mount`
- Sources: `body-mount`

###### Finished steel flatbed goods-truck cargo-body assembly (`flatbed_body`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished steel flatbed goods-truck cargo-body assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_mount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_mount`
- Sources: `body-mount`

###### Finished steel truck flatbed mounting subframe (`body_subframe`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished steel truck flatbed mounting subframe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_mount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_mount`
- Sources: `body-mount`

###### Finished steel flatbed-to-chassis attachment bracket (`mounting_bracket`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished steel flatbed-to-chassis attachment bracket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_mount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_mount`
- Sources: `body-mount`

###### Steel body-mounting threaded bolt (`mounting_bolt`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Steel body-mounting threaded bolt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_mount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_mount`
- Sources: `body-mount`

### Process: Diesel powertrain and cab integration (`powertrain`)

Install purchased diesel engine, gearbox, propeller shaft, cooling, fuel tank, exhaust treatment and complete cab as actually supplied. Record manual/automated gearbox, engine family and emissions equipment inclusion. Finished powertrain supplier operations remain upstream; in-house engine/gearbox manufacture needs its own measured component module. Cab shell alone is not a complete fitted cab; add trim, glazing, seat, mounts, controls and HVAC when not supplier-included. Record actual refrigerant as its own chemical exchange if charged on site.

#### Inputs

##### Product flows

###### Compression-ignition internal combustion piston engines, of a kind used for the propulsion of vehicles other than railway or tramway rolling stock (`diesel_engine`)

One independently supplied complete assembled compression-ignition diesel engine for propulsion of the declared road truck, linked by engine model/serial number and vehicle VIN. The original quantity collected for q_item is actual weighed installed supplied engine mass in kg; item count is traceability only, not the quantity numerator. Use calibrated weighing or traceable same-configuration net weighing records for supplied state, excluding shipping supports/packaging and separately supplied parts; reconcile engine hardware and actual supplier-prefilled fluid masses independently to complete vehicle M. Actual supply records establish prefill state/composition/retention; the public category identity assumes no prefill. Supplier-prefilled fluids contained in engine supplied mass are not additional first-fill purchases; only actual separately supplied top-up is another exchange. Record removed/recovered/drained fluid and retained delivery state, reconciling hardware, supply-state fluid and installed state without duplicate mass.

- Selected flow: Compression-ignition internal combustion piston engines, of a kind used for the propulsion of vehicles other than railway or tramway rolling stock `2bc283a7-36f3-40f7-9e15-54851b888d33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-fm`

###### Finished truck automated mechanical gearbox assembly (`gearbox`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished truck automated mechanical gearbox assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-fm`

###### Finished steel truck propeller-shaft assembly (`shaft`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished steel truck propeller-shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-fm`

###### Finished painted and fitted truck cab assembly (`cab`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished painted and fitted truck cab assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-fm`

###### Finished aluminium rigid-truck diesel tank (`fuel_tank`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished aluminium rigid-truck diesel tank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-fm`

###### Finished truck engine-cooling radiator assembly (`radiator`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished truck engine-cooling radiator assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-fm`

###### Finished diesel-truck SCR exhaust-aftertreatment assembly (`exhaust`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished diesel-truck SCR exhaust-aftertreatment assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-fm`

###### Grid alternating-current electricity at the factory intake (`electricity_powertrain`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-fm`

### Process: Vehicle electrical installation (`electrical`)

Install the declared harness, starter battery and vehicle controllers, lighting and sensors. Avoid counting copper/insulation again inside a finished harness or electrolyte again inside a filled battery. Lead-acid starter battery is a conditional technology-specific row, not traction storage. Installed options require independent specified cards where supplied separately.

#### Inputs

##### Product flows

###### Finished insulated-copper vehicle wiring harness (`harness`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished insulated-copper vehicle wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrical`
- Sources: `scania-spii`

###### Filled lead-acid truck starter battery (`starter_battery`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Filled lead-acid truck starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrical`
- Sources: `scania-spii`

###### Finished rigid-truck electronic engine controller (`vehicle_ecu`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished rigid-truck electronic engine controller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrical`
- Sources: `scania-spii`

###### Grid alternating-current electricity at the factory intake (`electricity_electrical`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electrical`
- Sources: `scania-spii`

### Process: First fill and factory acceptance (`acceptance`)

Record actual first fills, leak checks, brake/steering and cargo-mounting acceptance tests, engine runs and rework against producer configuration-specific release criteria. No invented universal test distance, homologation threshold or lifetime. Fuel issue, return, consumed test fuel and measured retained dispatch fuel must balance; retained fuel/urea and installed service fluids belong in declared net M, with their masses explicitly identified. A fossil CO2 card applies only to attributable measured fossil test combustion at air-unspecified, not assumed for every fuel origin; other measured substances need separate cards.

#### Inputs

##### Product flows

###### Lubricating oil (`mineral_oil`)

Only actual petroleum-derived lubricating oil first fill matching formulation and independently supplied scope; not PAO synthetic oil. Weigh retained amount and net issue; descriptive calorific value is not a quantity factor. Different engine/gear oils require distinct formulation cards.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `scania-production`

###### Formulated inhibited ethylene-glycol/water engine coolant premix (`glycol_coolant`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Formulated inhibited ethylene-glycol/water engine coolant premix
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `scania-production`

###### Lithium-soap mineral-oil chassis grease (`lithium_grease`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Lithium-soap mineral-oil chassis grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `scania-production`

###### Fossil low-sulphur diesel fuel supplied for factory testing (`test_diesel`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Fossil low-sulphur diesel fuel supplied for factory testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `scania-production`

###### Aqueous automotive urea solution, 32.5 mass percent (`urea_solution`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Aqueous automotive urea solution, 32.5 mass percent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `scania-production`

###### Grid alternating-current electricity at the factory intake (`electricity_acceptance`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `scania-production`

#### Outputs

##### Product flows

###### Accepted configured complete diesel rigid goods vehicle with steel flatbed (`finished_machine`)

Reference output: complete declared truck including cargo body, cab, drivetrain, installed equipment and documented retained first fills; net 1 kg after normalization with measured M.

- Selected flow: Accepted configured complete diesel rigid goods vehicle with steel flatbed
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `scania-production`

#### Outputs

##### Waste flows

###### Spent ethylene-glycol/water engine coolant sent to treatment (`spent_coolant`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Spent ethylene-glycol/water engine coolant sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `scania-production`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only measured attributable fossil CO2 from actual factory fuel combustion released to air, unspecified subcompartment. Separate fossil and biogenic origins; do not infer universal emissions or apply an invented factor.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `scania-production`

### Process: Dispatch protection (`packing`)

Weigh each actual removable protection film and other material separately and exclude it from M. Integral components detached for delivery remain in configured machine completeness with separate measured mass; separately sold spares, trailers and transport fixtures are excluded.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only actual removable LDPE protection foil dispatched with the truck; measured separately and excluded from M.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Grid alternating-current electricity at the factory intake (`electricity_packing`)

Only actual attributable measured stage electricity, including rework; record intake voltage, geography/provider and kWh-to-MJ conversion.

- Selected flow: Grid alternating-current electricity at the factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | Separate orders by VIN configuration and directly assign measured issues, returns, station meters and rework first. Inseparable shared resources use a measured causal driver such as station time/load: share = order driver / sum of drivers for all covered orders. Retain denominator, period and demonstrated causality; equal count between different cab/axle/powertrain configurations requires justification. |  |
| `allocation_scrap` | recoveries and rejects | Internal reusable stock or test fluids are transfers, not repeated new inputs or automatic credits. Exported waste retains its measured amount and outlet with no assumed avoided-product benefit. Separate saleable co-products before documented reviewed residual allocation. Attribute rejected/reworked unit burdens to accepted output in the covered period and reconcile work in progress. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted net machine mass | weighing_record | model; configuration; VIN; accepted net mass M; scale_id; calibration; cargo_body; detached_integral_parts; retained_fuel_urea_service_fluids; operator_tare; packaging_tare | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine or representative same-configuration batch | same manufacturing order period | declared factory | accepted net mass per machine | calibration, tare, configuration, release record |
| `cp_frame_prepare` | frame_prepare | Frame preparation | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration | Collect rail grade/thickness and drawing revision, weighed issues/returns/offcuts, operation time, dimensional acceptance and station meters. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_surface_finish` | surface_finish | Conditional surface preparation and finishing | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration | Retain paint SDS and layer recipe, weighed issues/returns, water/effluent transfers, coated part completeness, curing meter and actual emission measurements if present. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_chassis` | chassis | Rolling chassis assembly | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration | Trace VIN BOM, supplier constituent scope, independent module masses, alignment/torque and brake tests. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_cargo_fabrication` | cargo_fabrication | Conditional steel flatbed fabrication | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration | Collect grade/thickness and drawing revision, measured steel issues/returns, offcuts and station meters; reconcile supplier-completed scope. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_cargo_mount` | cargo_mount | Cargo-body mounting and integration | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration | Retain body-maker drawing/interface approval, measured body/subframe/bracket masses, supplier completeness, bolt issue/return and mounting acceptance. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_powertrain` | powertrain | Diesel powertrain and cab integration | foreground_record |VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration ; actual installed supplied engine mass kg; independent engine hardware mass kg; supplier prefill composition/mass/retention/drainage; engine model/serial/VIN| Measure installed supplied engine mass in kg, binding model/engine serial/VIN; independently record hardware mass and supplier-contained prefill composition/mass/retention/drainage, excluding packaging/supports/separate parts. Counts are traceability only. Reconcile supplied to installed state and vehicle M, without counting separate top-up and contained prefill twice; collect gearbox/cab scope, fittings, exhaust architecture, tank material and station meters. | kg; MJ | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_electrical` | electrical | Vehicle electrical installation | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration | Retain wiring revision, battery chemistry/capacity and supplier condition, independent installed masses, software configuration and wiring test records. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_acceptance` | acceptance | First fill and factory acceptance | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration | Record serial-linked fill/return/retained balances, actual fuel origin and test log, calibration, measured emissions, release record and accepted net M with packaging/operator tare. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_packing` | packing | Dispatch protection | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; engine count and independent mass; waste outlet; actual emissions; shared driver/denominator; calibration | Weigh material-specific protection, record tare/returns and exact dispatch completeness. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For an order of homogeneous configuration, obtain each q_item from actual issues minus returns/stock change and actual utilities/wastes/emissions after direct attribution and justified shared allocation, divided by accepted count. Divide by the same measured M. Keep engine q_item as measured installed supplied engine mass in kg, normalized by the same measured M to kg/kg; counts are traceability only, not the numerator. Independently reconcile engine hardware and contained prefill to installed state and complete vehicle M without duplicate first-fill purchases; electricity is MJ/kg and other mass exchanges kg/kg. For compatible serial configurations with variable net mass, preserve serial records and divide attributable totals by sum of accepted masses. Separate incompatible fuel/fill/axle/cab configurations. Unknown is a gap, never zero. No catalogue load, tank capacity or rated engine power becomes a production factor.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | complete truck | Reconcile VIN BOM, cargo body, frame/axles/wheels/brakes, engine/transmission, fitted cab, electrical installation, cooling/exhaust and retained first fills to measured net M. Resolve supplier module overlap and add omitted actual components. | weighing, configuration and supplier scope |
| `quality_balance` | flows and testing | Retain calibration, issues/returns/stock balances, installed versus consumed fluid and test fuel, measured emission species/origins, waste outlet receipts and actual recipe/density conversions. Set QA limits from site records; no invented universal yield or test consumption. | stock, meters, test and transfers |
| `quality_coverage` | dataset | Disclose geography/period, configurations, conditional absence, outsourcing, identity/quantity uncertainty and missing supplier upstream. Sources support examples of architecture/process, not manufacturer-wide recipes or current completion of old announced investments. | coverage and evidence register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require positive measured M and complete VIN configuration including cargo body, drivetrain, fitted cab, installed equipment and retained fills. Reject semi-trailer, cargo, gross train weight and transport service substitutions. |  |
| `validate_identity` | all rows | Verify atomic exchange, public identity, actual reference property/unit group, supply route, material state and medium. Engine exchange must use measured installed supplied engine kg normalized by vehicle M; item count is traceability only and cannot substitute for mass; an incomplete chassis is not a completed flatbed truck; cutting emulsion is not engine coolant; fertiliser as N is not automotive urea solution. Keep incompatible identities blank. |  |
| `validate_measurement` | all rows | Verify collection/conversion against same configuration/period and measured M. Reconcile supplier prefills, retained test fuel and component masses without duplication, with no unknown-to-zero defaults. |  |
| `validate_emissions` | elementary rows | Use only demonstrated attributable factory species and actual medium. Fossil CO2 is air-unspecified and requires fossil provenance; biogenic emissions, NO, NO2, N2O and captured wastes cannot be substituted or merged. Add actual species separately before dataset completion. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete diesel rigid-truck foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset following qualified review and declared upstream linkage |
| allowed_use | Supply-chain manufacturing models matching diesel architecture, axle/cab/body configuration, first-fill state, gate/site/period |
| excluded_use | Freight service or lifetime comparison, equal-mass payload equivalence, alternative propulsion, trailers and unsupported complete cradle-to-gate claims |
| required_metadata | manufacturer/model; VIN and configuration/drawing revision; diesel engine family and fuel compatibility; gearbox type and supplier prefill; axle arrangement, wheelbase and suspension; cab type and fitted completeness; steel flatbed grade/deck construction, dimensions, mounting/subframe/attachment interface; braking/steering architecture; tyre/rim specification; installed battery/controller/harness; cooling and exhaust-aftertreatment completeness; installed options; actual retained fuel, urea and service fluids; measured net M and scale calibration/tare; separately weighed detached integral components; actual make-or-buy route, site/period, gate and upstream coverage |
| required_quality_disclosure | Identity/quantity gaps, uncertainty, conditional absence, full-BOM completion, source limitations, allocation and unlinked upstream |
| update_trigger | Propulsion/fuel, axle/cab/body specification, supplier module scope, fills/M, manufacturing route, site/period and evidence resolution changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `scania-production` | literature | [Scania Asia P&L](https://www.scania.com/asia/en/home/our-business/p_l.html) | Press Shop/BiW/Paint/Cab/Chassis paragraphs: separate cab preparation, component integration and end-flow functional inspection. Retrieved 2026-10-05. Example only, not compulsory automation or recipes. Powertrain future 2025 Q4 statement is not evidence of completed/current production; no quantities adopted. |
| `volvo-fm` | literature | [Volvo FM. The flexible specialist.](https://www.volvotrucks.com.au/en-au/trucks/models/volvo-fm.html) | Opening product paragraph and Help for body builders: rigid diesel architecture and distinct bodybuilder integration, electrical interface, configuration-specific cab choices. Retrieved 2026-10-05. Model example only; electric variants, rated capacities and marketing performance are excluded from rules/factors. |
| `body-mount` | official_guidance | [Scania Parts for Bodybuilding: Chassis frame and subframe](https://truckbodybuilder.scania.com/content/dam/bodybuilder/tbb-files/scania-parts-for-bodybuilding/Chassis_frame_and_subframe.pdf) | PDF page 1, bodywork attachment table/diagram (historical PDF metadata modified October 2021; no printed edition): chassis/subframe brackets, bolted and welded attachment alternatives. Retrieved 2026-10-05; no edition date visible. Historical interface examples only, not current part availability; bolt sizes are not universal requirements and no mass/loading factor is adopted. |
| `scania-spii` | official_guidance | [SPII - Scania Product Individual Information](https://bodybuilder.scania.com/trucks/en/tools-and-services/individual-chassis-information.html) | SPII paragraph describes complete specifications and chassis-number lookup. Retrieved 2026-10-05. Supports serial-specific traceability; no specific vehicle record or certificate has been retrieved or validated. |
