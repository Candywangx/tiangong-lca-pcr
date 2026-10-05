---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.civil-unmanned-aircraft
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured civil battery-electric quadrotor aircraft

## 1. Scope and Applicability

Manufacturing foreground of a new complete configured civil battery-electric quadrotor assembled from supplier-complete carbon-composite body/arm/gear, brushless propulsion, onboard control/power/radio modules and one declared supplied flight battery. The selected bolted/preconnectorized modular route is narrower than all CPC49624 aircraft. Existing battery, motor, wiring and camera PCRs concern upstream products, not complete aircraft integration and net acceptance. No existing material complete civil quadrotor PCR was identified. The Holybro X500v2 manufacturer and version-pinned PX4 build guide supply an assembly example, not an observed current plant inventory or finished-aircraft weight. The kit itself is not the complete accepted output; actual completion, battery and equipment must be established independently. Exclude military products, fixed-wing/hybrid/combustion/fuel-cell/other rotor-count routes, airframe/component manufacture performed by suppliers, incomplete kits, loose parts, repair-service products and refurbishment. Customer missions, agriculture/crop output, mapping services, flight-hour/payload-distance function, ground infrastructure, lifetime and disposal are outside; actual manufacturing tests/rework are inside their measured boundary. Candidate authored methodology awaits independent scientific review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.civil-unmanned-aircraft |
| classification_refs | CPC 3.0 49624; narrower semantic candidate; no accepted mapping |
| covered_products | Complete accepted configured modular civil battery-electric quadrotor with supplied installed flight pack |
| excluded_products | Other aircraft routes, military products, kit/loose parts, ground equipment and use/service/repair |
| representative_product | X500v2 prewired four-arm architecture with actual complete configuration and battery separately established; no catalogue weight adopted |
| production_route | Mechanical module assembly; onboard electronic integration/configuration; conditional local repair; supplied-pack installation/testing; complete calibration/mass acceptance; actual packaging |
| market_state | New complete accepted civil aircraft at declared factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of one complete configured civil battery-electric quadrotor |
| How much | 1 kg accepted net complete unit; actual verified M kg per accepted aircraft |
| How well | Meet current approved mechanical fastening/rotor match, wiring/power polarity, firmware/sensor orientation/calibration, control/radio and battery acceptance plan, preserving actual inspection/test results. No invented tolerances, flight endurance or legal conformity |
| How long or cycle | One manufacturing delivery; no mission/flight-hour/battery-cycle lifetime unit |
| reference_flow_link | `finished_aircraft` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unmanned aircraft `295f8826-57a5-481c-8214-909e14c5a14b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model/serial; four-rotor geometry/rotation and actual body/arm/gear/module drawings; complete BOM/make-or-buy inclusion; motor/ESC/propeller matching; controller/firmware/actuator mapping and communication equipment; flight-pack chemistry/cell format/series count/capacity/connector/protection, actual supplied and installed mass/state of charge; declared installed payload; site/period/test plan; calibrated complete net M kg and independent module balance; excluded ground controller/charger/spares/packaging; matched upstream/transport/receiver links |

Declare all qualifiers in metadata or equivalent notes. Broad public Mass aircraft identity is narrowed to the actual configured civil quadrotor and supplies no flight-function equivalence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `electric_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Read actual stage AC energy;1kWh=3.6MJ. Charger input already contains actual conversion/test losses; do not add theoretical battery capacity or unmeasured recharge cycles. |

## 5. System Boundary

Start at actual supplied independently scoped body/arm/gear and electronic/flight-pack module receipts at plant. End at complete configured manufacturing acceptance, including actual associated packaging work while excluding its mass from M. Include actual bolting/rotor installation, module wiring/configuration, battery installation and measured testing, sensor/control checks, trial/rework and conditional localized repair. Supplied prewired arms include motor/ESC/wiring once: simultaneous separate arm/motor/ESC/raw carbon inputs or upstream resin cure would duplicate the supply boundary. Local PCB/SMT, motor winding, cell/pack manufacture, composite fabrication or extensive fabrication would require another explicitly expanded boundary, not a claim that these occur here. Base example requires no local soldering; optional repair consumptions/emissions need actual approved records. Expand actual missing retaining straps, mounts, radio antennas, vibration pads, companion computer, protection equipment, test fixtures/service, return shipments, charging interfaces and each packaging component before claiming complete coverage. External suppliers, extraction, inbound transport and receiving waste treatment are covered only through independently matched datasets; no complete cradle-to-gate claim without links. Customer flight/agricultural output/service and ground systems remain outside.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | At-plant supplied prewired structural/propulsion and onboard electronic/battery modules |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | Complete modular civil battery-electric quadrotor; narrower CPC49624 |
| recursive_input_rule | Purchased complete aircraft is a distinct receipt and changes the final-manufacturing boundary; do not recursively duplicate its contained modules or supplier operations |
| upstream_dataset_requirement | Match actual module geometry/material/chemistry/complete gate, wiring/voltage/provider geography, battery state/protection and receiver route |
| disclosure | Manufacturing integration foreground only; disclose actual supply inclusion, unresolved identities, current BOM/measurement/test and missing links |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_supplied` | assemblies | Document supplied completeness and independently measured module kg, included fluid/charge/hardware and installed count. The actual preassembled arm replaces its internal motor/ESC/lead receipts. Separate any supplier-complete frame/gear/holder inclusions before counting those split cards. | holybro-x500-v2 |
| `boundary_tests` | acceptance | Include actual ordered factory firmware/calibration/actuator/radio/charge and performed acceptance flight work with measured supply energy, fixture/service and rework. Actual rotor removal/test payload must be recorded and corrected physically for complete M; no customer mission or nominal flight-time proxy. | px4-x500-v114 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `structure` | Mechanical airframe propulsion-module and rotor assembly | required | Actual supplied central body, prewired arms, gear/holder and matched rotors | foreground | same accepted aircraft; q_item / M |
| `electronics` | Onboard control power and communication integration | required | Install actual controller, power/GNSS/radio/harness and conditional declared payload; load/configure firmware | foreground | same accepted aircraft; q_item / M |
| `repair` | Conditional localized solder repair and cleaning | conditional | Only performed approved local connector repair or documented cleaning; prewired base assembly requires neither | foreground | same accepted aircraft; q_item / M |
| `battery` | Flight-pack installation and actual charge testing | required | Actual matched supplied installed flight pack with separately measured charger energy and state | foreground | same accepted aircraft; q_item / M |
| `acceptance` | Configuration calibration tests and net-mass acceptance | required | Complete delivered configuration, actual current sensor/actuator/radio/power tests and calibrated physical M | final_product | finished_aircraft; 1 kg |
| `packing` | Conditional dispatch packaging | conditional | Only actual separate dispatch box/packaging work | foreground | same accepted aircraft; q_item / M |

### Process: Mechanical airframe propulsion-module and rotor assembly (`structure`)

#### Inputs

##### Product flows

###### Complete carbon-fibre-composite quadrotor central-body plate assembly (`body`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete carbon-fibre-composite quadrotor central-body plate assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete prewired carbon-composite arm with brushless motor and ESC (`arm`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete prewired carbon-composite arm with brushless motor and ESC
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete fixed carbon-composite tube landing-gear assembly (`landing_gear`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete fixed carbon-composite tube landing-gear assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete adjustable aircraft battery mounting board (`battery_holder`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete adjustable aircraft battery mounting board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete matched quadrotor propeller and retaining hub (`propeller`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete matched quadrotor propeller and retaining hub
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### One grade of finished steel assembly bolt (`steel_bolt`)

Actual single certified grade/design steel bolts received separately, net measured kg and installed count. Split unlike bolt grades, and exclude hardware included in supplied modules. Broad fastener identity supplies no aircraft approval or actual fastener mass.

- Selected flow: Steel fasteners `cad280ce-7850-46a1-9060-4f8b68bf5532`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_structure`)

Actual stage-attributed user-side electricity below1kV, including actual tool/fixture/configuration or test equipment, idle and rework. Selected public identity requires a matching CN grid-average supplier; another geography/voltage/provider requires separate verified flow. Meter kWh and convert to MJ; battery charging energy is included at its AC charger input once, not again as a theoretical stored-energy exchange. Equipment ratings and nominal pack capacity are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

### Process: Onboard control power and communication integration (`electronics`)

#### Inputs

##### Product flows

###### Complete enclosed quadrotor flight-controller module (`flight_controller`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete enclosed quadrotor flight-controller module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete preconnectorized aircraft power-distribution board (`power_board`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete preconnectorized aircraft power-distribution board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete battery voltage-and-current sensing power module (`power_module`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete battery voltage-and-current sensing power module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete aircraft GNSS receiver and antenna module (`gnss`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete aircraft GNSS receiver and antenna module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete onboard bidirectional telemetry radio module (`telemetry`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete onboard bidirectional telemetry radio module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete onboard command radio receiver module (`command_receiver`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete onboard command radio receiver module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete depth-sensing camera payload module (`camera`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete depth-sensing camera payload module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Finished nylon insulating board standoff (`nylon_standoff`)

One actual supplier-certified nylon standoff design used to mount this board; measure net installed kg and retain polymer grade, drawing and count. Generic nylon pellets are not this supplied finished part; other polymers require a distinct card.

- Selected flow: Finished nylon insulating board standoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete low-voltage aircraft control wiring harness (`control_harness`)

One actual preassembled low-voltage control harness with defined conductor/insulation, connectors, length, drawing and installed supplied net kg. The selected broad connectorized lead identity is narrowed to this single supplied design. Exclude prewired arm/power/module included leads; bare cable length and material receipts are not simultaneously counted.

- Selected flow: Connectorized leads and subassemblies `129c1da2-5e1c-4aa0-acac-06756737fde3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_electronics`)

Actual stage-attributed user-side electricity below1kV, including actual tool/fixture/configuration or test equipment, idle and rework. Selected public identity requires a matching CN grid-average supplier; another geography/voltage/provider requires separate verified flow. Meter kWh and convert to MJ; battery charging energy is included at its AC charger input once, not again as a theoretical stored-energy exchange. Equipment ratings and nominal pack capacity are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Nonconforming complete enclosed flight-controller module for disposal (`rejected_controller`)

Only actual unrecoverable nonconforming complete controller leaving plant for a documented disposal receiver. Record defect/order/serial, net kg, state and included housing/electronics. Returned-to-supplier reparable modules are not automatically disposed waste; actual return is separately modelled.

- Selected flow: Nonconforming complete enclosed flight-controller module for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Conditional localized solder repair and cleaning (`repair`)

#### Inputs

##### Product flows

###### Flux-cored lead-free tin-silver-copper solder wire (`solder_wire`)

Only actually performed approved localized connector solder repair uses this single supplied flux-cored Sn-Ag-Cu wire. Retain actual alloy certificate and included flux formulation, net issue/return kg, joint record and retained/residue balance. The generic lead-free solder-with-flux identity provides neither alloy fractions nor a mandatory repair step. Included flux is not another input; flux-free optical-assembly solder is not this exchange. Prewired no-soldering assembly remains the base route.

- Selected flow: Lead-free solder + flux `4fbe5177-aa26-4ea6-b034-b59ad19f587e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Liquid isopropyl-alcohol electronic-cleaning solvent (`ipa_cleaner`)

Conditional on actual approved cleaning with one supplier-certified isopropanol formulation CAS67-63-0. Weigh wet supplied net kg and retain actual purity/water concentration, recovered solvent and residues; no default100% purity, mandatory cleaning or all-solvent evaporation. A chemical-specific emission flow is not a purchased solvent.

- Selected flow: Liquid isopropyl-alcohol electronic-cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_repair`)

Actual stage-attributed user-side electricity below1kV, including actual tool/fixture/configuration or test equipment, idle and rework. Selected public identity requires a matching CN grid-average supplier; another geography/voltage/provider requires separate verified flow. Meter kWh and convert to MJ; battery charging energy is included at its AC charger input once, not again as a theoretical stored-energy exchange. Equipment ratings and nominal pack capacity are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected tin-silver-copper solder dross (`solder_residue`)

Only actual segregated solder dross from performed Sn-Ag-Cu repair exported to an identified receiver; weigh net kg excluding container and analyse residual flux/oxide state. Do not classify collected dross as an atmospheric metal emission or assume a dross yield.

- Selected flow: Collected tin-silver-copper solder dross
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Collected spent isopropyl-alcohol cleaning solution (`spent_ipa`)

Actual separately collected IPA-bearing cleaning liquid exported from conditional repair, measured wet net kg with IPA/water/resin/flux analysis and receiver. Internal solvent recovery, captured wipes and atmospheric release are separate destinations. It is not resource water, purchased IPA or a pure elementary water release.

- Selected flow: Collected spent isopropyl-alcohol cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Immediate isopropanol emission to unspecified air (`ipa_air`)

Only an observed compound-specific post-control residual CAS67-63-0 release to outdoor unspecified air from actually performed IPA cleaning. Use matched sampled concentration/airflow/duration or a documented closed solvent balance resolving recovery, residue and retention; preserve uncertainty/detection limits. Reject chloropropanol, n-propanol, indoor-air, soil and long-term flows. No generic VOC or assumed complete evaporation.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Flight-pack installation and actual charge testing (`battery`)

#### Inputs

##### Product flows

###### Complete supplied lithium-ion-polymer flight battery pack (`battery_pack`)

One actual approved supplied physical assembly of the stated design, measured installed supplied net kg with drawing/material/serial/count and included hardware recorded. Each prewired arm includes its motor, ESC, connectors and wiring once and excludes its separately received propeller; do not duplicate those constituents. The central body excludes separately supplied arms/gear/battery holder. Flight pack includes its supplied cells, containment, internal wiring and actually supplied protection only once. Command receiver and depth camera are conditional on the declared actual installed configuration; a camera mount alone is not a camera. Components fabricated locally require their own actual stock/operation cards instead of simultaneous complete-module receipts.

- Selected flow: Complete supplied lithium-ion-polymer flight battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_battery`)

Actual stage-attributed user-side electricity below1kV, including actual tool/fixture/configuration or test equipment, idle and rework. Selected public identity requires a matching CN grid-average supplier; another geography/voltage/provider requires separate verified flow. Meter kWh and convert to MJ; battery charging energy is included at its AC charger input once, not again as a theoretical stored-energy exchange. Equipment ratings and nominal pack capacity are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Nonconforming complete lithium-ion-polymer flight battery pack for disposal (`rejected_pack`)

Only actual irreparable rejected supplied flight pack exported to an identified qualified receiver, with actual cell chemistry, containment, residual charge and net pack kg recorded. Do not assume cycle life, disposal rate or reuse credit. Supplier returns, recovered cells and service end-of-life packs are different boundaries.

- Selected flow: Nonconforming complete lithium-ion-polymer flight battery pack for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Configuration calibration tests and net-mass acceptance (`acceptance`)

#### Inputs

##### Product flows

###### User-side low-voltage AC factory electricity (`electricity_acceptance`)

Actual stage-attributed user-side electricity below1kV, including actual tool/fixture/configuration or test equipment, idle and rework. Selected public identity requires a matching CN grid-average supplier; another geography/voltage/provider requires separate verified flow. Meter kWh and convert to MJ; battery charging energy is included at its AC charger input once, not again as a theoretical stored-energy exchange. Equipment ratings and nominal pack capacity are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete configured civil battery-electric quadrotor (`finished_aircraft`)

One complete accepted civil quadrotor of the declared configuration, including installed rotors/gear/control/radio and supplied installed flight battery once; optional permanently delivered camera is included only when declared and physically reconciled. Loose spare batteries/propellers, ground control station, charger, test fixtures and packaging are excluded from M and require separate product scopes if supplied. Scale its manufacture to1kg actual net M; broad public aircraft identity supplies no performance or catalogue weight.

- Selected flow: Unmanned aircraft `295f8826-57a5-481c-8214-909e14c5a14b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

### Process: Conditional dispatch packaging (`packing`)

#### Inputs

##### Product flows

###### User-side low-voltage AC factory electricity (`electricity_packing`)

Actual stage-attributed user-side electricity below1kV, including actual tool/fixture/configuration or test equipment, idle and rework. Selected public identity requires a matching CN grid-average supplier; another geography/voltage/provider requires separate verified flow. Meter kWh and convert to MJ; battery charging energy is included at its AC charger input once, not again as a theoretical stored-energy exchange. Equipment ratings and nominal pack capacity are not consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Finished corrugated-cardboard shipping box (`box`)

Only actual separately supplied cardboard box around the accepted aircraft, measured empty net kg with box design/fibre specification recorded. Box mass is an input and excluded from net aircraft M; an incoming reused box is not automatically a new box receipt. Actual cushioning/labels/tape and loose accessories need separate cards if supplied.

- Selected flow: Finished corrugated-cardboard shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

#### Outputs

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared assembly/test | Subdivide orders/configurations and meters before allocation. Demonstrated actual station/test occupancy, measured tool/test/charger demand and causal time records may attribute shared work; aircraft count or kg alone is not a universal driver. Retain idle/rework/rejected trials, raw period totals and accepted same-configuration denominator with sensitivity. Source build-time claims are not labour/energy allocation factors. |  |
| `allocation_recovery` | returns/waste | Track supplier returns, repair/reuse, solvent recovery and measured disposal as separate destinations. For actual valuable co-products use subdivision/causal relations first and disclose alternative allocation and sensitivity when unavailable. Do not infer recycled-battery/fibre credits, recovered-IPA yield or avoided electronics production. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | reference product | calibrated complete-aircraft weighing | model; configuration; serial; accepted net mass M; calibration/zero/tare; installed battery/payload/rotors; state corrections and independent module balance | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted aircraft/configuration change | declared representative current production period | named actual manufacturing site | accepted net mass per unit | calibration/raw net readings and independent installed module mass |
| `cp_parts` | all_processes | single supplied assembly | receipt and installed component record | one assembly/design/material/chemistry/serial/count; supplied and installed net kg; inclusions; return/reject; accepted count | Measure separately supplied/installed module kg, preserving count/serial and supplier inclusions. Reconcile preassembled arm, motor/ESC and battery internals once with whole-aircraft M; do not replace kg with item counts or catalogue weights. | kg | each lot/design and accepted order | declared representative current production period | named actual manufacturing site | actual installed supplied kg / accepted units of the same configuration | supplier BOM/serial, calibrated net receipt/installed weights and closure |
| `cp_stock` | all_processes | single formulation or box | issue/return and repair/packing record | single chemical/alloy/formulation or box design; lot/SDS; issues/returns; retained amount; residue/recovery; accepted count | Weigh actual net issues/returns and retention for each one defined repair formulation or shipping box. Preserve solder alloy/flux scope and cleaner actual concentration; box and loose accessories are outside net M. No nominal mix/yield or implied repair occurrence. | kg | each lot/repair/dispatch period | declared representative current production period | named actual manufacturing site | actual attributable stock kg / accepted units of the same configuration | scale/tare, SDS/alloy certificate and joint/packing balance |
| `cp_energy` | all_processes | single AC supply interface | meter and causal stage attribution | meter/site/provider/voltage; actual imported kWh; stage/charger/test/idle/rework; accepted count | Read calibrated meters and attribute actual assembly/configuration/repair/charge/test/packing demand with causal records. Convert kWh to MJ using1kWh=3.6MJ. Preserve charger interface, initial/final pack charge and actual test energy; nominal capacity is not metered input. | MJ | each stage/test batch and period | declared representative current production period | named actual manufacturing site | actual attributed stage MJ / accepted units of the same configuration | meter calibration, cycle records/provider boundary and energy reconciliation |
| `cp_waste` | all_processes | one physical waste stream | segregated receiver shipment | single waste chemistry/complete module/serial/state; actual net kg/tare; source and receiver; recovery/return; accepted count | Weigh actually exported segregated waste excluding containers and retain receiver and analysed state. Separate solder residue, spent cleaner, complete controller and complete rejected flight pack; supplier repair return is not assumed disposal. | kg | each shipment/period | declared representative current production period | named actual manufacturing site | actual exported net waste kg / accepted units of the same configuration | scale/tare, analytical/serial and receiver/source balance |
| `cp_emission` | repair | single residual IPA air release | compound-specific measurement | CAS67-63-0; actual air submedium; post-control concentration/flow/time; limits/uncertainty; solvent balance; accepted count | Quantify actual post-control residual isopropanol by matched sampling or documented closed solvent balance resolving recovery/residue/retention. Distinguish absent, not measured and below detection; none automatically means zero or complete evaporation. | kg | representative actual repair/control period | declared representative current production period | named actual manufacturing site | actual released kg / accepted units of the same configuration | sampling/lab calibration, actual operation and solvent mass balance |
| `cp_configuration` | all_processes | complete delivered aircraft | as-built/firmware/test acceptance record | serial/model; full BOM/module inclusions; battery/payload and rotor state; firmware/calibration/actuator mapping; performed tests/repair; delivery exclusions | Trace actual controlled as-built drawings/BOM, supplied completeness, wiring/firmware/configuration and ordered inspection/test/repair results. Declare ground systems/spares/packaging separately and preserve all measured test-state corrections for M. | kg | each aircraft/configuration and change | declared representative current production period | named actual manufacturing site | qualifiers accompany each same-configuration accepted unit | signed BOM/drawing/supplier/firmware/calibration/test and physical-state evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | order records | Attribute measured period totals to one same accepted configuration using documented causal records, then obtain q_item from attributed exchange / accepted aircraft. Retain raw totals, accepted denominator and rework/reject burden; do not pool unlike battery/payload/module configurations without an explicit weighted physical model. | cp_parts; cp_stock; cp_energy; cp_mass | q_item |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | Positive M must originate in current actual calibrated net weighing of the accepted same-serial complete configuration, with original readings, scale capacity/resolution/calibration, zero/tare, supports and uncertainty. Reconcile independently measured installed module/retained consumable mass with complete-aircraft M. If the actual safe test/weighing state removes battery or rotors, retain the actual original state and separately measured signed same-unit add/remove corrections; no guessed correction. No kit/frame weight, takeoff/payload limit, shipping weight or battery capacity-to-kg estimate establishes M. | cp_mass; cp_parts; cp_configuration |
| `net_configuration` | accepted aircraft | M includes the actual complete accepted airframe, four installed rotor/propulsion assemblies, permanent onboard power/controller/GNSS/radio/harness and the specified supplied installed flight battery once; declare and reconcile actual payload/protection equipment. Exclude ground controller, external charger, test leads/fixtures, loose spare battery/propeller, transport packaging and temporary test payload. Supplied battery cell electrolyte/hardware and arm motor/ESC/wiring are included once, without duplicate separate receipts. Record charge state and actual delivery configuration, not nominal endurance. | cp_mass; cp_parts; cp_configuration |
| `route_and_balance` | all exchanges | Current full as-built BOM, make-or-buy inclusion and controlled assembly/firmware/acceptance plan determine observed exchanges. Prewired base route does not require local solder/flux/cleaner; optional repair requires actual joint/SDS records. Expand all missing specific mounts/straps/antennas/pads/protection/payload/computing, supplied interfaces, packaging and receiver/transport/test-service links before completeness claims. Check stock-to-installed/return/reject/residue balances, charger energy and chemistry-specific emissions, with limits/uncertainty and allocation sensitivity. Do not infer battery cycle life, rejection fractions, composition or charging efficiency. | cp_parts; cp_stock; cp_energy; cp_waste; cp_emission; cp_configuration |
| `source_limits` | external evidence | Holybro manufacturer snapshot describes a kit with preinstalled arm motors/ESCs and optional payloads, not a finished measured aircraft or a complete production inventory. PX4 v1.14 guide documents mechanical/electrical integration and model-specific setup; it shares the Holybro hardware and does not constitute independent quantitative observations. Do not adopt advertised build time, frame mass, hover time, battery capacity/voltage, software defaults or screw counts as manufacturing factors, universal acceptance criteria, lifetime or current legal mandates. Collect current actual plant and product records independently. | holybro-x500-v2; px4-x500-v114 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify complete configured civil electric quadrotor, actually installed supplied battery/payload scope, positive physical M kg and independent mass_provenance/net_configuration. Reference selected flow equals finished_aircraft; generic aircraft identity supplies no battery weight or payload-function equivalence. |  |
| `validation_route` | all_processes | Check actual supplied arm/frame/gear/module inclusion, matched rotor/ESC/controller and real wiring/firmware/calibration/charge/test records. Preserve order and performed optional repair/cleaning state; compare full BOM/physical weights and stage stock/energy/waste balances. Current lawful civil/type requirements are a separate actual compliance question, not inferred from this example. | holybro-x500-v2; px4-x500-v114 |
| `validation_identity` | all flow rows | Verify actual type/substance/reference property/unit group, supplied module completeness, chemistry/voltage/state/medium and official bilingual names. Collection-category purchased UAV parts/avionics do not replace atomic modules; industrial robot drive is not a preassembled drone arm. Preserve battery Number/Energy identities rather than rewriting them as Mass; a valid conversion would require actual matching pack and physical records. IPA is not chloropropanol or n-propanol; contained solvent/PCB residue is not an elementary air release. Keep exact unresolved row_ids. |  |
| `validation_claims` | claims | PCR mechanical pass is not independent scientific approval, current civil-aircraft legal/type conformity, observed complete factory inventory, actual measured weight or mission/lifetime equivalence. Broader claims require complete current supplier/BOM/measurement/test/linked evidence and disclosed remaining gaps. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured modular civil electric quadrotor manufacturing integration foreground; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete accepted configured aircraft manufacturing scaled by actual net M with matched upstream/transport/receiver links |
| excluded_use | Agricultural crop output/mapping/flight-hour/payload missions, military/other aircraft routes, incomplete kit, ground equipment, use/repair/lifetime/disposal and approval |
| required_metadata | Serial/complete geometry/BOM/module make-or-buy inclusion, motor/ESC/rotor/controller/firmware/calibration mapping, chemistry/format/charge and installed supplied flight-pack kg, payload, plant/period/actual tests, calibrated original net weights/tare/state corrections and independent module balance, net M kg, allocation and matched links |
| required_quality_disclosure | Identity/configuration/BOM/measurement/link gaps, version/snapshot applicability, rework/reject/return/recovery/exports, uncertainty/limits and allocation sensitivity |
| update_trigger | Rotor/airframe/module/pack chemistry or supplied inclusion, payload/firmware/calibration/test/repair, measurement/delivery state, site/period/provider interface change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| holybro-x500-v2 | handbook | Holybro, PX4 Development Kit - X500 v2, undated manufacturer product/build page, retained2026-10-05 snapshot; Description, Features, kit contents and Frame Kit Details sections. https://holybro.com/products/px4-development-kit-x500-v2 | Model-specific prewired arm/motor/ESC, carbon frame/gear and optional payload architecture; no soldering required for base kit assembly. No advertised weights/time/endurance or universal production factor adopted. |
| px4-x500-v114 | handbook | PX4 User Guide v1.14, Holybro X500 V2 + Pixhawk6C build guide, Assembly and Install/Configure PX4 sections, page-displayed last update7/9/2025; retained2026-10-05 HTML snapshot. https://docs.px4.io/v1.14/en/frames_multicopter/holybro_x500v2_pixhawk6c | Specific mechanical/power/controller/GNSS/propeller integration and model-specific firmware/actuator/sensor setup example. Kit guide shares hardware evidence with manufacturer, not independent quantitative factory observations or universal legal criteria. |
