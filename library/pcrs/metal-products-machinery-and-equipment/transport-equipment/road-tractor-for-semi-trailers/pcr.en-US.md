---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.road-tractor-for-semi-trailers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Diesel road tractor for semi-trailers manufacture

## 1. Scope and Applicability

This PCR covers manufacture of new complete diesel road tractors equipped with a fifth-wheel coupling to tow semi-trailers. Start at documented material/component receipt at the reporting manufacturing site and stop after configuration-specific factory acceptance at the declared dispatch gate. It is a foreground receipt-to-dispatch manufacturing module; matching upstream production links and explicit coverage are necessary before a complete cradle-to-gate claim. [Sources: `scania-production`, `volvo-spec`, `jost-fifth`]

Exclude semi-trailers, cargo, rigid trucks, agricultural/terminal tractors, buses, battery-electric, hybrid and gas-powered tractors, bare engine-fitted chassis sold as incomplete vehicles, repairs/refurbishment, dealer installation, freight operation, maintenance and end of life. The narrower diesel boundary is deliberate: different propulsion architectures require different component and testing rules. Existing motor-vehicle body methodology addresses a component, not this complete tractor. A fitted bought-in cab is counted once; if manufactured on site, explicitly include body/fitting operations and omit that purchase. No transport service or tonne-kilometre reference is covered.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.road-tractor-for-semi-trailers |
| classification_refs | CPC 3.0 49111 Road tractors for semi-trailers; narrower diesel manufacture scope, classification context only |
| covered_products | New complete diesel fifth-wheel-equipped road tractors, with axle/cab/powertrain configuration declared |
| excluded_products | Trailers, rigid trucks, incomplete chassis, alternative propulsion tractors and transport services |
| representative_product | One VIN-linked accepted complete configured tractor, measured M, no assumed catalogue mass |
| production_route | Actual conditional frame/finishing, rolling-chassis and coupling assembly, diesel/cab and electrical integration, first fill and acceptance |
| market_state | Accepted complete tractor at declared factory dispatch gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the configured complete diesel tractor |
| How much | 1 kg net accepted complete tractor; convert actual per-machine records with measured M |
| How well | Producer configuration-specific dimensional, installation, functional and release acceptance; equal mass does not imply equal towing capacity |
| How long or cycle | One manufacture and factory acceptance cycle; no imposed vehicle lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted configured complete diesel road tractor for semi-trailers |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model; VIN and configuration/drawing revision; diesel engine family and fuel compatibility; gearbox type and supplier prefill; axle arrangement, wheelbase and suspension; cab type and fitted completeness; fifth-wheel material, mounting and lock interface; braking/steering architecture; tyre/rim specification; installed battery/controller/harness; cooling and exhaust-aftertreatment completeness; installed options; actual retained fuel, urea and service fluids; measured net M and scale calibration/tare; separately weighed detached integral components; actual make-or-buy route, site/period, gate and upstream coverage |

Declare every qualifier in dataset metadata or reference comments. M is physically measured complete accepted configuration including fitted modules, fifth wheel and measured retained first fills, with detached integral delivery parts separately weighed and reconciled. Exclude driver, trailer, cargo, removable protection and separately sold spares. Record dispatch fuel/urea state explicitly so empty and filled configurations cannot be pooled. Catalogue curb/shipping/gross combination weights, rated load and tank/oil-change capacities are not substitutes for this measured M. Manufactured reference UUID remains unresolved; freight service candidates cannot replace this product.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `engine_mass` | diesel_engine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect net installed supplied engine-assembly mass in kg using cp_engine_mass; this mass is the engine q_item numerator per accepted finished machine. Keep engine count/serial for traceability only. Independently reconcile engine body, supplier-included components and retained prefilled fluids with the complete vehicle M; exclude duplicated component/first-fill inputs. No fixed kg per engine is assumed. |
| `energy_conversion` | electricity | Net calorific value | MJ | Convert actual measured kWh with verified unit-group factor 3.6 MJ/kWh; record intake supply/voltage. Rated engine kW is not test energy. |
| `liquid_mass` | liquid exchanges | Mass | kg | Weigh the actual supplied formulation or use measured density at declared composition/concentration/temperature for volume conversion; catalogue capacity is not fill amount. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received stock and finished component modules, with supplier completeness declared |
| starting_condition_role | Foreground receipt-to-dispatch manufacture |
| product_classification_scope | Complete diesel road tractor with fifth wheel; no semi-trailer or transport service |
| recursive_input_rule | Do not recursively generate a supplied complete tractor from its same reference output; bought-in complete modules bypass their performed internal stages |
| upstream_dataset_requirement | Match actual stock/module scope, propulsion, finish, formulation, geography and properties; disclose unmatched supplier production |
| disclosure | VIN configuration, actual manufacturing/outsourcing, first fills, M, factory testing, gate/period/site and upstream omissions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory` | all processes | Include actual manufacturing, assembly, filling, rework and attributable release tests. Exclude freight operation and research/durability programmes not attributable to production batches; document any shared manufacturing development costs separately. | `scania-production` |
| `boundary_modules` | supplier parts | Count complete supplied cab, engine/gearbox, axle and filled battery once with included constituents/prefills; replace component cards if a complete rolling chassis is supplied. Add actual missing BOM components before dataset completion. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame_prepare` | Frame preparation | conditional | The frame is fabricated in the reporting foreground. | foreground | one accepted configured tractor, normalized with M |
| `surface_finish` | Conditional surface preparation and finishing | conditional | Frame or cab parts undergo finishing within the declared foreground. | foreground | one accepted configured tractor, normalized with M |
| `chassis` | Rolling chassis and fifth-wheel assembly | required | Every complete road tractor. | foreground | one accepted configured tractor, normalized with M |
| `powertrain` | Diesel powertrain and cab integration | required | Every declared diesel tractor configuration. | foreground | one accepted configured tractor, normalized with M |
| `electrical` | Vehicle electrical installation | required | Every complete configured diesel tractor. | foreground | one accepted configured tractor, normalized with M |
| `acceptance` | First fill and factory acceptance | required | Every accepted finished tractor. | foreground | one accepted configured tractor, normalized with M |
| `packing` | Dispatch protection | conditional | Actual protection materials cross the dispatch gate. | foreground | one accepted configured tractor, normalized with M |

Actual frame/finishing feed chassis/coupling assembly, diesel/cab and electrical integration, then fill/acceptance and conditional protection. Every card is conditional on its exact material and supplier scope even in a required stage. No card implies a universal recipe, unavoidable emission or exhaustive BOM. Trace the complete actual configuration and add each omitted material, part, fuel, chemical, utility and demonstrated waste/emission separately.

### Process: Frame preparation (`frame_prepare`)

Cut and form actual grade-specific rails/cross-members, drill interfaces and join by the documented bolted/riveted/welded route. Do not assume all truck frames are welded or cast. Add each actual rivet, weld wire and shielding gas separately. A purchased finished frame bypasses these operations.

#### Inputs

##### Product flows

###### Steel Plate (`frame_plate`)

Only documented hot-rolled low-alloy high-strength thick plate for actual frame parts; not generic high-strength sheet or galvanized cab sheet. Retain grade/thickness and weighed stock.

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

### Process: Rolling chassis and fifth-wheel assembly (`chassis`)

Install the actual frame, steering axle, driven axle, suspension, wheels/tyres, steering and braking circuit, fifth wheel and its mounting. Declare axle arrangement, wheelbase, suspension type and coupling mounting/lock interface. Fifth-wheel cast-steel and pressed-sheet versions are distinct supplier configurations; trailer kingpin and trailer landing legs remain outside. Bought-in rolling chassis replaces its included frame/axles/brakes once. Add actual further axles, spring assemblies, brake actuators, reservoirs and lines as separate precisely specified components.

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
- Sources: `jost-fifth`

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
- Sources: `jost-fifth`

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
- Sources: `jost-fifth`

###### Finished steel road-tractor wheel rim (`rim`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished steel road-tractor wheel rim
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `jost-fifth`

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
- Sources: `jost-fifth`

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
- Sources: `jost-fifth`

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
- Sources: `jost-fifth`

###### Finished cast-steel tractor fifth-wheel coupling assembly (`fifth_wheel`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished cast-steel tractor fifth-wheel coupling assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `jost-fifth`

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
- Sources: `jost-fifth`

### Process: Diesel powertrain and cab integration (`powertrain`)

Install purchased diesel engine, gearbox, propeller shaft, cooling, fuel tank, exhaust treatment and complete cab as actually supplied. Record manual/automated gearbox, engine family and emissions equipment inclusion. Finished powertrain supplier operations remain upstream; in-house engine/gearbox manufacture needs its own measured component module. Cab shell alone is not a complete fitted cab; add trim, glazing, seat, mounts, controls and HVAC when not supplier-included. Record actual refrigerant as its own chemical exchange if charged on site.

#### Inputs

##### Product flows

###### Diesel engine (`diesel_engine`)

One individually supplied assembled compression-ignition piston engine for propulsion of the declared road tractor, narrowed from the public motor-vehicle engine category; excludes railway/tramway, non-propulsion and non-motor-vehicle engines. Collect net installed supplied engine-assembly mass in kg with cp_engine_mass: q_item is that measured mass per accepted finished machine, normalized by the same M. Count and serial identify the actual supplied design, not its exchange unit. Record engine body, included accessories and actual retained prefilled fluids; independently reconcile their masses with installed assembly and vehicle M. Supplier-included components and prefilled fluid are counted within this engine input, without second component/first-fill inputs; actual separately added fluid is a separate exchange. No catalogue or assumed per-engine mass.

- Selected flow: Compression-ignition internal combustion piston engines, of a kind used for the propulsion of vehicles other than railway or tramway rolling stock `2bc283a7-36f3-40f7-9e15-54851b888d33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_engine_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_engine_mass`
- Sources: `volvo-spec`

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
- Sources: `volvo-spec`

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
- Sources: `volvo-spec`

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
- Sources: `volvo-spec`

###### Finished aluminium road-tractor diesel tank (`fuel_tank`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished aluminium road-tractor diesel tank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `volvo-spec`

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
- Sources: `volvo-spec`

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
- Sources: `volvo-spec`

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
- Sources: `volvo-spec`

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

###### Finished road-tractor electronic engine controller (`vehicle_ecu`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Finished road-tractor electronic engine controller
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

Record actual first fills, leak checks, brake/steering and coupling-lock tests, engine runs and rework against producer configuration-specific release criteria. No invented universal test distance, homologation threshold or lifetime. Fuel issue, return, consumed test fuel and measured retained dispatch fuel must balance; retained fuel/urea and installed service fluids belong in declared net M, with their masses explicitly identified. A fossil CO2 card applies only to attributable measured fossil test combustion at air-unspecified, not assumed for every fuel origin; other measured substances need separate cards.

#### Inputs

##### Product flows

###### Lubricating oil (`mineral_oil`)

Only actual petroleum-derived lubricating oil first fill matching formulation and independently supplied scope; not PAO synthetic oil. Weigh retained amount and net issue; descriptive calorific value is not a quantity factor. Different engine/gear oils require distinct formulation cards.

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

###### Lithium-soap mineral-oil fifth-wheel grease (`lithium_grease`)

Only the specifically declared actual exchange; collect measured issue-return balance, exact state/composition and supplier/outlet completeness.

- Selected flow: Lithium-soap mineral-oil fifth-wheel grease
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

###### Accepted configured complete diesel road tractor for semi-trailers (`finished_machine`)

Reference output: complete declared tractor including fifth wheel, cab, drivetrain, installed equipment and documented retained first fills; net 1 kg after normalization with measured M.

- Selected flow: Accepted configured complete diesel road tractor for semi-trailers
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

Only actual removable LDPE protection foil dispatched with the tractor; measured separately and excluded from M.

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
| `cp_mass` | acceptance | accepted net machine mass | weighing_record | model; configuration; VIN; accepted net mass M; scale_id; calibration; fifth_wheel; detached_integral_parts; retained_fuel_urea_service_fluids; operator_tare; packaging_tare | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine or representative same-configuration batch | same manufacturing order period | declared factory | accepted net mass per machine | calibration, tare, configuration, release record |
| `cp_frame_prepare` | frame_prepare | Frame preparation | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; installed supplied engine mass kg; engine count for traceability; waste outlet; actual emissions; shared driver/denominator; calibration | Collect rail grade/thickness and drawing revision, weighed issues/returns/offcuts, operation time, dimensional acceptance and station meters. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_surface_finish` | surface_finish | Conditional surface preparation and finishing | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; installed supplied engine mass kg; engine count for traceability; waste outlet; actual emissions; shared driver/denominator; calibration | Retain paint SDS and layer recipe, weighed issues/returns, water/effluent transfers, coated part completeness, curing meter and actual emission measurements if present. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_chassis` | chassis | Rolling chassis and fifth-wheel assembly | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; installed supplied engine mass kg; engine count for traceability; waste outlet; actual emissions; shared driver/denominator; calibration | Trace serial BOM, supplier included parts, independent module masses, bolt torque/alignment, brake circuit and coupling installation acceptance. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_engine_mass` | powertrain | diesel_engine | weighing_record | VIN/order; configuration; engine model/serial; installed supplied engine mass kg; engine-body mass kg; included accessory masses kg; prefill formulations and actual retained kg; actual drained/returned kg; separately added fluid kg; count for traceability; accepted machine count; scale/calibration/tare; supplier gate | Weigh each net supplied engine assembly on a calibrated scale in its declared installed state, excluding shipping fixtures. Use independent traceable engine-body/component and actual retained-prefill weighing records to reconcile assembly scope; verify installed assembly mass against the same VIN BOM and accepted complete-vehicle M. Record actual drained/returned and separately added fluids, without a catalogue/default kg per engine. Exclude duplicate accessory and prefill inputs. | kg | each supply lot and installed configuration | same declared manufacturing period | declared powertrain integrating factory | attributable installed supplied engine mass / accepted machines | calibrated engine weighing; supplier BOM/scope; component/prefill balance; VIN installation and cp_mass record |
| `cp_powertrain` | powertrain | Diesel powertrain and cab integration | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; installed supplied engine mass kg; engine count for traceability; waste outlet; actual emissions; shared driver/denominator; calibration | Use cp_engine_mass for independently weighed installed supplied engine kg, with count/serial only for traceability and prefill/inclusion reconciliation; collect gearbox/cab scope, fittings, exhaust architecture, tank material and station meters. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_electrical` | electrical | Vehicle electrical installation | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; installed supplied engine mass kg; engine count for traceability; waste outlet; actual emissions; shared driver/denominator; calibration | Retain wiring revision, battery chemistry/capacity and supplier condition, independent installed masses, software configuration and wiring test records. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_acceptance` | acceptance | First fill and factory acceptance | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; installed supplied engine mass kg; engine count for traceability; waste outlet; actual emissions; shared driver/denominator; calibration | Record serial-linked fill/return/retained balances, actual fuel origin and test log, calibration, measured emissions, release record and accepted net M with packaging/operator tare. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |
| `cp_packing` | packing | Dispatch protection | foreground_record | VIN/order; configuration; accepted count; exchange name/state/property/unit; issue; return; stock change; supplier included constituents; retained fill; electricity kWh; installed supplied engine mass kg; engine count for traceability; waste outlet; actual emissions; shared driver/denominator; calibration | Weigh material-specific protection, record tare/returns and exact dispatch completeness. | actual unit for each row | each order/batch | declared manufacturing period | declared factory and disclosed subcontractors | attributable exchange amount / accepted machines | BOM, weighing, meters, transfers and acceptance |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For an order of homogeneous configuration, obtain each q_item from actual issues minus returns/stock change and actual utilities/wastes/emissions after direct attribution and justified shared allocation, divided by accepted count. Divide by the same measured M. Keep engine exchange kg/kg: its q_item is the independently measured net installed supplied engine-assembly kg per accepted finished machine, divided by the same M; engine count is traceability only. Reconcile engine body, supplier-included accessories/prefills and actual separate additions with the installed assembly and complete vehicle M without duplicate component/fluid inputs. Keep electricity MJ/kg and other mass exchanges kg/kg. For compatible serial configurations with variable net mass, preserve serial records and divide attributable totals by sum of accepted masses. Separate incompatible fuel/fill/axle/cab configurations. Unknown is a gap, never zero. No supplier 1% hitch estimate, catalogue tank capacity or rated engine power becomes a production factor.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | complete tractor | Reconcile VIN BOM, fifth wheel, frame/axles/wheels/brakes, engine/transmission, fitted cab, electrical installation, cooling/exhaust and retained first fills to measured net M. Resolve supplier module overlap and add omitted actual components. | weighing, configuration and supplier scope |
| `quality_balance` | flows and testing | Retain calibration, issues/returns/stock balances, installed versus consumed fluid and test fuel, measured emission species/origins, waste outlet receipts and actual recipe/density conversions. Set QA limits from site records; no invented universal yield or test consumption. | stock, meters, test and transfers |
| `quality_coverage` | dataset | Disclose geography/period, configurations, conditional absence, outsourcing, identity/quantity uncertainty and missing supplier upstream. Sources support examples of architecture/process, not manufacturer-wide recipes or current completion of old announced investments. | coverage and evidence register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require positive measured M and complete VIN configuration including fifth wheel, drivetrain, fitted cab, installed equipment and retained fills. Reject semi-trailer, cargo, gross train weight and transport service substitutions. |  |
| `validate_identity` | all rows | Verify atomic exchange, public identity, actual reference property/unit group, supply route, material state and medium. Road propulsion must match the motor-vehicle engine category and original Mass/kg reference; class43110 excludes motor vehicles and aircraft. Engine count is not the mass numerator; supplier prefill/components must not be counted twice. Trailer hitch is not a verified fifth wheel; cutting emulsion is not engine coolant; fertiliser as N is not automotive urea solution. Keep incompatible identities blank. |  |
| `validate_measurement` | all rows | Verify collection/conversion against same configuration/period and measured M. Reconcile supplier prefills, retained test fuel and component masses without duplication, with no unknown-to-zero defaults. |  |
| `validate_emissions` | elementary rows | Use only demonstrated attributable factory species and actual medium. Fossil CO2 is air-unspecified and requires fossil provenance; biogenic emissions, NO, NO2, N2O and captured wastes cannot be substituted or merged. Add actual species separately before dataset completion. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete diesel road-tractor foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset following qualified review and declared upstream linkage |
| allowed_use | Supply-chain manufacturing models matching diesel architecture, axle/cab/coupling configuration, first-fill state, gate/site/period |
| excluded_use | Freight service or lifetime comparison, equal-mass towing equivalence, alternative propulsion, trailers and unsupported complete cradle-to-gate claims |
| required_metadata | manufacturer/model; VIN and configuration/drawing revision; diesel engine family and fuel compatibility; gearbox type and supplier prefill; axle arrangement, wheelbase and suspension; cab type and fitted completeness; fifth-wheel material, mounting and lock interface; braking/steering architecture; tyre/rim specification; installed battery/controller/harness; cooling and exhaust-aftertreatment completeness; installed options; actual retained fuel, urea and service fluids; measured net M and scale calibration/tare; separately weighed detached integral components; actual make-or-buy route, site/period, gate and upstream coverage |
| required_quality_disclosure | Identity/quantity gaps, uncertainty, conditional absence, full-BOM completion, source limitations, allocation and unlinked upstream |
| update_trigger | Propulsion/fuel, axle/cab/coupling specification, supplier module scope, fills/M, manufacturing route, site/period and evidence resolution changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `scania-production` | literature | [Scania Asia P&L](https://www.scania.com/asia/en/home/our-business/p_l.html) | Press Shop/BiW/Paint/Cab/Chassis paragraphs: separate cab preparation, component integration and end-flow functional inspection. Retrieved 2026-10-05. Example only, not compulsory automation or recipes. Powertrain future 2025 Q4 statement is not evidence of completed/current production; no quantities adopted. |
| `volvo-spec` | literature | [Volvo FH specifications, UK](https://www.volvotrucks.co.uk/en-gb/trucks/models/volvo-fh/specifications.html) | Diesel engine/powertrain tables; Chassis/Rear suspension/Fuel tanks/AdBlue/Brakes sections. Retrieved 2026-10-05. Configuration alternatives, not universal capacities or material routes. Oil-change volumes, load ratings and maintenance interval are not first-fill amount, net M or life requirements. |
| `jost-fifth` | literature | [JOST truck and trailer fifth-wheel couplings](https://www.jost-world.com/en/products/jost.html) | Truck and Trailer paragraphs identify pressed-sheet and cast-steel coupling alternatives. Retrieved 2026-10-05. No universal casting, net mass, load rating, performance equivalence or lifetime inferred. |
| `scania-spii` | official_guidance | [SPII - Scania Product Individual Information](https://bodybuilder.scania.com/trucks/en/tools-and-services/individual-chassis-information.html) | SPII paragraph describes complete specifications and chassis-number lookup. Retrieved 2026-10-05. Supports serial-specific traceability; no specific vehicle record or certificate has been retrieved or validated. |
