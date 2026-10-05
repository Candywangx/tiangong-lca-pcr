---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.sugarcane-harvester
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured tracked sugarcane billet harvesters

## 1. Scope and Applicability

This narrower manufacturing PCR covers new complete configured tracked non-road diesel sugarcane billet harvesters. The representative crop path comprises crop division, base cutting, feeding, chopping, primary extraction and elevator unloading; actual topper and other optional equipment are declared. This is completed-component integration to configured factory acceptance. Earlier chassis cutting/welding/coating, engine production, hydraulic-module and crop-module manufacturing require matching upstream processes even if done at the same plant. This foreground is not complete cradle-to-gate coverage.

Exclude grain combine threshers, root/tuber harvesting machinery, hay machinery, independent tractors, isolated parts, whole-stalk or wheeled variants without a supported route extension, and field harvesting/cultivation/crop yield/use fuel, repair and end-of-life service. Manufacturer architecture descriptions support distinct modules and alternative designs; they do not prescribe this plant bill of materials, universal factory operations, weight, lifetime, yield or acceptance thresholds.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.sugarcane-harvester |
| classification_refs | CPC 3.0:44129; narrower |
| covered_products | New complete configured tracked non-road diesel sugarcane billet harvesters |
| excluded_products | Grain threshers, root/tuber harvesters, tractors, hay equipment, separate parts and harvesting services; unsupported wheeled/whole-stalk routes |
| representative_product | Configured tracked diesel billet harvester at complete factory acceptance |
| production_route | Finished chassis/running gear and engine/hydraulic/crop/cab/electrical component receipt; integration; actual filling and commissioning; net mass and acceptance; conditional clean/dispatch |
| market_state | New accepted configured complete machine, declared retained fills and separate delivery accessories |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of one accepted configured complete sugarcane billet harvester |
| How much | 1 kg |
| How well | Current configuration-specific factory mechanical/hydraulic/electrical conformity and signed actual acceptance; no field-productivity equivalence |
| How long or cycle | One manufacturing campaign, no assumed crop cycles or service life |
| reference_flow_link | finished_harvester |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete tracked diesel sugarcane billet harvester |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/serial/configuration; tracked non-road diesel propulsion; engine model/emissions and supplier inclusions; crop-divider/basecutter/chopper/extractor/elevator geometry and blade/drive scope; topper/cab/HVAC/refrigerant/controls/installed battery; all permanent components and actual retained fuel/oil/coolant; actual complete net M kg and weighing record; factory acceptance plan/results; plant/period/provider; upstream gates, loose accessory and packaging exclusions |

All required qualifiers accompany the data package. M is measured physical net mass of the same accepted configuration, never catalogue operating/gross weight, loaded crop weight or a sum of invented part weights.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `engine_count` | diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Preserve actual counted supplied installed engine q_item per accepted unit. Engine kg is independently measured for inclusion reconciliation, not a relabelled public property. Apply normalize_mass for Item(s) per kg complete reference. |
| `hydraulic_volume` | hydraulic_oil | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter actual net supplied volume q_item m3 per accepted unit at declared temperature; use actual matched density or separate weighing to reconcile retained oil kg in M, never a default density. Apply normalize_mass. |
| `electric_energy` | electricity rows | Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert actual metered kWh to MJ using3.6 MJ/kWh before per-unit collection and normalize_mass; rated engine/pump power is not manufacturing energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished supplied chassis and individual configured components at their actual integration supply gates |
| starting_condition_role | upstream_abstraction |
| product_classification_scope | CPC 3.0:44129; narrower |
| recursive_input_rule | A complete same-category harvester is not an assembly input for itself. Internal rework/returned components remain internal; use actual constituent components and link earlier same-site manufacture rather than duplicate final mass. |
| upstream_dataset_requirement | Match actual steel chassis finish, tracked modules, non-road engine, hydraulic/crop/cab/electrical supplier inclusions and fluid formulation/provider/geography/year. Earlier local fabrication/coating and supply transport require distinct linked burdens. |
| disclosure | Final integration foreground only; disclose all unlinked earlier stages, missing real BOM/utility items, extra factory test routes and off-site receiver processes. No complete cradle-to-gate or upstream outsourcing assumption. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | all_processes | Include actual receipt, staged chassis/power/crop/cab/control integration, filling/leak checks, actual factory commissioning and final complete acceptance, including attributable setup/idle/reject/rework. Optional washing, solvent cleaning and crating require actual operation evidence. Designs in cited sources justify module distinctions, not mandatory manufacturing recipes. | deere-cane-architecture; case-austoft-architecture |
| `boundary_exclusions` | use and earlier manufacture | Keep earlier component production linked upstream and actual field harvesting, crop yield, farm diesel, cultivation, transport service and service end-of-life outside this manufacturing reference. Factory commissioning is a manufacturing operation only when actually performed before release; any actual test cane and resulting residues need their own measured crop/waste exchanges before coverage can be complete. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `running` | Chassis receipt and tracked running-gear integration | required | Actual performed stage in declared configuration; optional consumables require positive work records | foreground | 1 kg finished_harvester |
| `power` | Non-road engine and hydraulic-power integration | required | Actual performed stage in declared configuration; optional consumables require positive work records | foreground | 1 kg finished_harvester |
| `crop` | Crop-path cab and electrical integration | required | Actual performed stage in declared configuration; optional consumables require positive work records | foreground | 1 kg finished_harvester |
| `filling` | Actual plant fluid filling and leak checks | required | Actual performed stage in declared configuration; optional consumables require positive work records | foreground | 1 kg finished_harvester |
| `testing` | Controlled factory commissioning | required | Actual performed stage in declared configuration; optional consumables require positive work records | foreground | 1 kg finished_harvester |
| `acceptance` | Configured net-mass and final release | required | Actual performed stage in declared configuration; optional consumables require positive work records | foreground | 1 kg finished_harvester |
| `cleaning` | Conditional final water or IPA cleaning | conditional | Actual performed stage in declared configuration; optional consumables require positive work records | foreground | 1 kg finished_harvester |
| `dispatch` | Conditional dispatch crating | conditional | Actual performed stage in declared configuration; optional consumables require positive work records | foreground | 1 kg finished_harvester |

### Process: Chassis receipt and tracked running-gear integration (`running`)

#### Inputs

##### Product flows

###### Finished steel sugarcane-harvester main chassis (`chassis`)

Actual declared steel main chassis, with current welded/bolted section geometry and supplied finish. Earlier fabrication and coating are upstream gates; supplied chassis excludes engine, tracks and crop modules listed separately. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished steel sugarcane-harvester main chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel crawler-track shoe chain (`crawler_track`)

Tracked representative route only: one actual shoe-chain specification and measured installed mass; record handedness and number. Does not include separately supplied undercarriage drive or frame. Wheeled designs require a separate supported inventory. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished steel crawler-track shoe chain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel crawler undercarriage frame (`track_frame`)

One actual supplied undercarriage frame, with its declared rollers/idlers inclusion. Exclude track chain and separately supplied final drive; supplier BOM prevents duplicate component mass. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished steel crawler undercarriage frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished hydrostatic harvester final-drive gearbox (`final_drive`)

Actual model/ratio and housing scope; measure supplied gearbox kg and prefilled lubricant scope. Hydraulic traction motor is separate only when outside this supplier assembly. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished hydrostatic harvester final-drive gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_running`)

Measure actual stage equipment/hoists/control/metrology, idle and rework electricity at calibrated user-side meters. Retain actual provider geography/voltage and causal shared loads; no high-voltage/generation or CN-specific identity assigned to an unspecified plant. Additional heat/compressed-air services need individual cards.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

### Process: Non-road engine and hydraulic-power integration (`power`)

#### Inputs

##### Product flows

###### Finished hydraulic piston pump (`piston_pump`)

One actual pump model/displacement and supplied mass. Record actual circuits and drive interface, without copying manufacturer rated power into energy. Same-spec pumps may be summed with counts retained. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished hydraulic piston motor (`piston_motor`)

One actual piston-motor specification crossing the supply gate; only motors outside purchased complete crop/traction modules. Different displacement/model classes need separate cards before dataset completion. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished hydraulic piston motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished double-acting hydraulic lift cylinder (`hydraulic_cylinder`)

Actual bore/stroke/model with supplied fluid and mounting scope; retain measured mass and counts. Lift cylinder is not a pneumatic actuator. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished reinforced rubber hydraulic hose assembly (`hydraulic_hose`)

One actual reinforced rubber pressure-hose specification including its end fittings, measured supplied dry kg. Different hose chemistries and sizes need separate actual records; complete module hoses already included are excluded. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished reinforced rubber hydraulic hose assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel hydraulic reservoir (`hydraulic_tank`)

Declared finished steel reservoir geometry, fittings and empty supplied kg; no duplicate oil charge inside a supposedly dry tank. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished steel hydraulic reservoir
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished engine-coolant radiator assembly (`radiator`)

Actual radiator model/material/core/fan inclusion and empty or prefilled supplier state; record assembly kg independently of later coolant charge. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished engine-coolant radiator assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished non-road diesel exhaust aftertreatment module (`exhaust_module`)

Conditional on this actual engine emission configuration, one specified module with its catalysts/filters included. Absent systems need configuration evidence; do not infer SCR reagent consumption or mandatory DPF for all harvesters. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished non-road diesel exhaust aftertreatment module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished flooded lead-acid harvester starting battery (`starter_battery`)

One actual voltage/capacity/model supplied starting battery with lead and electrolyte already included, measured supplied kg and state of charge. Do not add lead or sulfuric acid again. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished flooded lead-acid harvester starting battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Supplied assembled non-road compression-ignition diesel engine (`diesel_engine`)

One actual assembled compression-ignition piston engine for an off-road agricultural machine, outside road motor-vehicle/aircraft propulsion. Preserve public Number of items: q_item is actual installed supplied engines counted per accepted machine in Item(s), not kg. Independently weigh each supplied engine with serial/configuration and prefilled oil/coolant scope, reconcile engine kg to complete M, and do not count those fluids again. Actual model/emissions and powertrain scope must match.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_engine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_engine`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_power`)

Measure actual stage equipment/hoists/control/metrology, idle and rework electricity at calibrated user-side meters. Retain actual provider geography/voltage and causal shared loads; no high-voltage/generation or CN-specific identity assigned to an unspecified plant. Additional heat/compressed-air services need individual cards.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

### Process: Crop-path cab and electrical integration (`crop`)

#### Inputs

##### Product flows

###### Finished steel sugarcane crop-divider scroll (`crop_divider`)

One actual supplied steel crop-divider scroll, declared handedness/model and net kg, excluding separately counted hydraulic drive. Not an agricultural plough or mowing cutter bar. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished steel sugarcane crop-divider scroll
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished sugarcane topper cutting head (`topper`)

One actual assembled topper head with its knives and housing; declared drive inclusion. Optional configurations without topper must be identified, not filled with an assumed mass. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished sugarcane topper cutting head
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished sugarcane basecutter mechanical assembly (`basecutter`)

Actual discs/blades/gear housing assembly and supplied finish kg; declare hydraulic drive inclusion. Separate spare blades are not installed equipment; do not count installed blades again as bought steel stock. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished sugarcane basecutter mechanical assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel sugarcane feed roller (`feedroller`)

One actual roller specification and surface finish, measured installed supplied kg and count. Different roller types require their own detailed dataset cards. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished steel sugarcane feed roller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished sugarcane billet-chopper mechanical assembly (`chopper`)

Actual complete chopper shaft/blade/gear-bearing assembly at supplied gate, excluding separately counted drive. Declare blade configuration from BOM; no billet length or throughput reference functional service is inferred. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished sugarcane billet-chopper mechanical assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished sugarcane primary-extractor fan assembly (`extractor`)

Actual primary fan/hood/support assembly; record material design and motor inclusion. Crop cleaning fan is not factory pollutant-abatement equipment. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished sugarcane primary-extractor fan assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel sugarcane billet-elevator conveyor (`elevator`)

Actual frame/chain/slat conveyor with declared swing-support and extension scope, excluding separate drive if already counted. Do not add chain or slats again when part of supplied complete conveyor. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished steel sugarcane billet-elevator conveyor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished glazed sugarcane-harvester operator cab (`operator_cab`)

Actual supplied glazed cab and fitted seat/controls/HVAC scope; record exact refrigerant and retained charge when HVAC is included. Those prefilled components cross as part of the cab once; any separate plant recharge needs a distinct actual chemical card. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished glazed sugarcane-harvester operator cab
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished insulated copper harvester wiring harness (`harness`)

One drawing-specific completed insulated copper wiring harness with connectors, supplied kg; excludes control modules and loose raw copper. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished sugarcane-harvester electronic control unit (`controller`)

One actual ECU model/hardware/firmware and supply kg, with separately measured software commissioning energy; machine-tool control cabinets do not establish this identity. Trace current complete BOM, supplier inclusions and net issue/return records. Measure this physical assembly independently; missing additional real components must be expanded before a complete factory claim.

- Selected flow: Finished sugarcane-harvester electronic control unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel assembly bolt (`steel_bolt`)

One actual steel-bolt grade/thread/coating across the assembly supply gate, measured net kg and counts. Only loose bolts not included in purchased assemblies; other fastener types need separate specific cards.

- Selected flow: Steel fasteners `cad280ce-7850-46a1-9060-4f8b68bf5532`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_crop`)

Measure actual stage equipment/hoists/control/metrology, idle and rework electricity at calibrated user-side meters. Retain actual provider geography/voltage and causal shared loads; no high-voltage/generation or CN-specific identity assigned to an unspecified plant. Additional heat/compressed-air services need individual cards.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected rejected steel basecutter blade (`reject_part`)

Only actual irreparable steel blade discarded at assembly/commissioning; record grade/coating and receiver. Repairable supplier returns are not automatically waste.

- Selected flow: Collected rejected steel basecutter blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Actual plant fluid filling and leak checks (`filling`)

#### Inputs

##### Product flows

###### Supplied formulated mineral hydraulic oil (`hydraulic_oil`)

One actual mineral-base hydraulic-oil grade/SDS crossing supply gate, with public Volume m3 reference preserved. Meter net external issue minus actual return at recorded temperature; record fresh makeup versus internal circulation and separately measured retained kg with actual density at the same temperature. Prefilled module oil is already in its supplied module, not a new fill. No assumed oil capacity or density.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulic.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulic`
- Sources:

###### Supplied premixed ethylene-glycol aqueous antifreeze (`engine_coolant`)

Only one actual supplied premixed ethylene-glycol/water antifreeze with current additive/SDS concentration and net kg; record supplier inclusions. No propylene glycol/glycerol selection or fixed dilution is inferred from the generic public identity. Local dilution instead needs actual concentrate and supplied water separate cards; do not count both constituents and premix.

- Selected flow: Antifreeze `f4d2de8d-01df-42a2-aa65-7f7215606250`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Supplied formulated mineral diesel-engine lubricating oil (`engine_oil`)

Actual single manufacturer-approved formulation and net external issue kg only if filled at this plant outside engine supplier scope; record SDS, grade, retained quantity, return and drain. Engine prefill is not a second plant input.

- Selected flow: Supplied formulated mineral diesel-engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_filling`)

Measure actual stage equipment/hoists/control/metrology, idle and rework electricity at calibrated user-side meters. Retain actual provider geography/voltage and causal shared loads; no high-voltage/generation or CN-specific identity assigned to an unspecified plant. Additional heat/compressed-air services need individual cards.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

### Process: Controlled factory commissioning (`testing`)

#### Inputs

##### Product flows

###### Supplied fossil diesel commissioning fuel (`test_diesel`)

Only actual factory engine commissioning in the declared fossil-diesel route, measured net issue kg with certified fossil/biogenic fraction, grade and supplier. Reconcile consumed, returned, recovered and retained delivery fuel; retained fuel belongs in M once. No field diesel, rated consumption or catalogue tank volume used as a quantity. Actual bio-blend requires separately attributed fossil/biogenic species, not this fossil-only assertion.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_testing`)

Measure actual stage equipment/hoists/control/metrology, idle and rework electricity at calibrated user-side meters. Retain actual provider geography/voltage and causal shared loads; no high-voltage/generation or CN-specific identity assigned to an unspecified plant. Additional heat/compressed-air services need individual cards.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected spent mineral hydraulic oil (`spent_oil`)

Actual drain/export net kg, assay and off-site receiver; returned reusable oil and internal loops are not exported waste. Reconcile oil carried in other discarded components separately.

- Selected flow: Collected spent mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Collected spent aqueous ethylene-glycol engine coolant (`spent_coolant`)

Only actual exported tested EG/water coolant wet kg and concentration/receiver. CNC mineral cutting emulsion is not this spent engine coolant.

- Selected flow: Collected spent aqueous ethylene-glycol engine coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Immediate fossil carbon dioxide to unspecified outdoor air (`co2_fossil`)

Conditional only for an actual observed factory-test outlet to immediate outdoor air, CAS124-38-9, with actual post-control compound-specific mass kg and exhaust/ventilation capture scope. No mandatory emission quantity or fleet factor. Fossil CO2 requires actual fossil carbon attribution; NO, NO2 and N2O are distinct, total NOx is not automatically any one species. Field use is excluded.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exhaust.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exhaust`
- Sources:

###### Immediate nitrogen monoxide to unspecified outdoor air (`nitric_oxide`)

Conditional only for an actual observed factory-test outlet to immediate outdoor air, CAS10102-43-9, with actual post-control compound-specific mass kg and exhaust/ventilation capture scope. No mandatory emission quantity or fleet factor. Fossil CO2 requires actual fossil carbon attribution; NO, NO2 and N2O are distinct, total NOx is not automatically any one species. Field use is excluded.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exhaust.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exhaust`
- Sources:

###### Immediate nitrogen dioxide to unspecified outdoor air (`nitrogen_dioxide`)

Conditional only for an actual observed factory-test outlet to immediate outdoor air, CAS10102-44-0, with actual post-control compound-specific mass kg and exhaust/ventilation capture scope. No mandatory emission quantity or fleet factor. Fossil CO2 requires actual fossil carbon attribution; NO, NO2 and N2O are distinct, total NOx is not automatically any one species. Field use is excluded.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exhaust.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exhaust`
- Sources:

### Process: Configured net-mass and final release (`acceptance`)

#### Inputs

##### Product flows

###### User-side low-voltage AC manufacturing electricity (`electricity_acceptance`)

Measure actual stage equipment/hoists/control/metrology, idle and rework electricity at calibrated user-side meters. Retain actual provider geography/voltage and causal shared loads; no high-voltage/generation or CN-specific identity assigned to an unspecified plant. Additional heat/compressed-air services need individual cards.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete tracked diesel sugarcane billet harvester (`finished_harvester`)

One actual accepted complete configured tracked non-road diesel machine with declared crop path, operator station, permanent equipment and retained fills. M includes only supplied installed components and retained fluids once; excludes crop, operator, payload, temporary test fixtures, spare modules and shipping packaging. Actual full configuration and signed acceptance determine completeness, not brochure operating weight.

- Selected flow: Accepted complete tracked diesel sugarcane billet harvester
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

### Process: Conditional final water or IPA cleaning (`cleaning`)

#### Inputs

##### Product flows

###### Supplied industrial final-washing water (`industrial_water`)

Conditional actual water wash/rinse before acceptance; supplied kg with provider/quality and stock balance, not natural freshwater extraction. Internal recycling is not fresh input. Current actual added detergents require their own named chemical cards.

- Selected flow: Water for industrial use `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Supplied liquid isopropanol cleaning formulation (`ipa_cleaner`)

Only actual approved CAS67-63-0 final cleaning; record exact assay/water concentration and issue/recovery/waste/retention kg. Does not impose universal solvent cleaning.

- Selected flow: Supplied liquid isopropanol cleaning formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_cleaning`)

Measure actual stage equipment/hoists/control/metrology, idle and rework electricity at calibrated user-side meters. Retain actual provider geography/voltage and causal shared loads; no high-voltage/generation or CN-specific identity assigned to an unspecified plant. Additional heat/compressed-air services need individual cards.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected spent additive-free machine rinse water (`wash_effluent`)

Actual additive-free rinse route only, measured wet kg, actual oil/solid contamination and treatment receiver. If chemicals are added record that separate composition; collected technosphere wastewater is not direct river emission.

- Selected flow: Collected spent additive-free machine rinse water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Collected spent aqueous isopropanol cleaning solution (`spent_ipa`)

Actual separately collected spent IPA/water formulation wet kg and concentration/receiver; recovered reusable solvent and air emission separate.

- Selected flow: Collected spent aqueous isopropanol cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Immediate isopropanol release to unspecified outdoor air (`ipa_air`)

Conditional actual approved IPA cleaning and measured residual CAS67-63-0 outdoor release after controls; no full-evaporation assumption. Indoor/long-term/soil/water release is outside this identity.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent`
- Sources:

### Process: Conditional dispatch crating (`dispatch`)

#### Inputs

##### Product flows

###### Finished solid-wood machine dispatch crate (`transport_crate`)

Conditional actual single solid-wood crate specification, empty net kg outside M. Identify treatment/geometry and actual reuse; separate protection film/ties/rack rather than a packaging basket. Oversize transport without a crate requires actual absence evidence.

- Selected flow: Finished solid-wood machine dispatch crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_dispatch`)

Measure actual stage equipment/hoists/control/metrology, idle and rework electricity at calibrated user-side meters. Retain actual provider geography/voltage and causal shared loads; no high-voltage/generation or CN-specific identity assigned to an unspecified plant. Additional heat/compressed-air services need individual cards.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared operations | First subdivide actual BOM/job/meter/supplier records by configuration. Attribute shared hoist/integration/test loads using observed operation time and measured load/setup/idle records; wash/fill services use actual batch and formulation records. Any alternative physical or economic share requires actual causal evidence, documented basis and sensitivity; no universal mass share. |  |
| `allocation_rejects` | returns rework and waste | Retain consumed rejects/rework and actual test resources in the campaign numerator divided by accepted same-configuration units. Supplier returns and reusable drained fluid are stock/return, not automatic waste. Actual saleable scrap requires contract/state evidence and documented co-product treatment; no simultaneous scrap sale benefit and avoided-production credit for the same mass. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete machine | calibrated complete-machine weighing | model; configuration; serial; accepted net mass M; calibration; gross/tare; retained fills; acceptance signature | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted complete machine | actual declared representative production period | declared plant and attributable integration supply gates | accepted net mass per unit | original readings/calibration and signed configuration balance |
| `cp_parts` | all_processes | specific supplied assembly | supplier and net mass records | one part model/drawing/serial; counts; supplied net kg; issue/return/stock; supplier included parts/fluids; accepted count | Weigh actual net supplied or installed assembly kg and reconcile issued/returned/stock and supplied inclusion boundary with current BOM. Measure engine kg independently even though engine exchange uses item count. Same-spec parts may be summed, not unlike modules. | kg | each receipt/issue/return and campaign | actual declared representative production period | declared plant and attributable integration supply gates | actual attributable component kg / accepted units of the same configuration | original weighing, signed BOM/supplier inclusion and stock records |
| `cp_engine` | power | supplied non-road engine count | serial-controlled engine issue | engine model/serial/emissions; supplied installed count Item(s); actual independent engine kg; prefilled oil/coolant; issue/return; accepted count | Count actual supplied installed same-model engine units with serial reconciliation and supplier assembly/prefill boundary; returned reusable engines excluded from net issue. Retain separate calibrated supplied engine kg for M reconciliation, not a count-to-mass default factor. | Item(s) | each supplied engine and campaign | actual declared representative production period | declared plant and attributable integration supply gates | actual attributable engine Item(s) / accepted units of the same configuration | engine serial/count originals and independent calibrated weighing |
| `cp_hydraulic` | filling | external hydraulic oil volume | calibrated oil volume and retention records | SDS/grade; temperature; supplied/returned m3; measured density at same temperature; retained kg; module prefill; accepted count | Meter actual net external oil supply m3 with calibrated volume instrument at recorded temperature; reconcile returns, internal circulation and supplier prefill. Retained oil kg is independently weighed or calculated from actual matching measured volume and density for physical inclusion only. | m3 | each actual fill/return and campaign | actual declared representative production period | declared plant and attributable integration supply gates | actual attributable oil m3 / accepted units of the same configuration | original calibrated volume/density/weighing and SDS balance |
| `cp_stock` | all_processes | specific fluid or crate | net issue/return records | named formulation/crate; supplier/SDS/assay; net kg; issue/return/retention/waste; prefill; accepted count | Weigh each actual named external product net kg excluding containers, reconcile stock/issues/returns and actual retained supply. Actual fuel fossil fraction and coolant chemistry require supplier evidence, not assumed density or generic mixture. | kg | each issue/return and campaign | actual declared representative production period | declared plant and attributable integration supply gates | actual attributable input kg / accepted units of the same configuration | actual stock/calibration/SDS and issue/return balances |
| `cp_energy` | all_processes | stage electricity | calibrated user-side meters | stage; kWh; voltage/provider/geography; actual work/test/idle/rework; causal shared loads; accepted count | Read calibrated stage user-side electricity meters and actual causal load records, including assembly/hoists/control/test equipment once. Convert kWh by3.6 MJ/kWh before per-unit collection; hydraulic output/engine rating is not electricity input. | MJ | actual representative campaign | actual declared representative production period | declared plant and attributable integration supply gates | actual attributable electricity MJ / accepted units of the same configuration | meter calibration, work logs and actual provider evidence |
| `cp_waste` | all_processes | specific exported waste | receiver weighing and analysis | one waste; kg/tare; wet/dry composition; actual receiver; returns/recovery; accepted count | Weigh each actually exported segregated waste net kg, with own assay/state and receiver. Distinguish internal reuse, supplier return and retained fluids; collected wastewater is a technosphere transfer, not direct freshwater release. | kg | each export/campaign | actual declared representative production period | declared plant and attributable integration supply gates | actual exported waste kg / accepted units of the same configuration | net weighing/analysis and receiver manifests |
| `cp_exhaust` | testing | individual observed exhaust species | compound-specific post-control outlet measurements | test fuel fossil fraction; CAS; air submedium; post-control concentration; exhaust flow/time; collected/retained carbon; uncertainty; accepted count | Measure actual post-control outdoor exhaust species kg from matched compound concentration, calibrated flow and actual test time; trace fossil carbon separately. Record actual exhaust capture/aftertreatment and detection/unknown/absence distinctions. No total NOx assigned to NO or NO2, no fuel-carbon-only NO factor. | kg | actual representative test/control period | actual declared representative production period | declared plant and attributable integration supply gates | actual released species kg / accepted units of the same configuration | original sampling/lab/calibration, actual test/fuel carbon records |
| `cp_solvent` | cleaning | observed IPA release | compound measurement or closed IPA balance | CAS67-63-0; concentration/airflow/time; actual submedium; issue/recovery/residue/retention; detection/uncertainty; accepted count | Measure actual residual outdoor IPA by matched sampling or documented closed issue/recovery/residue/retention balance. No unexplained residual automatically becomes air emission or full evaporation. | kg | actual representative cleaning period | actual declared representative production period | declared plant and attributable integration supply gates | actual released kg / accepted units of the same configuration | sampling/calibration and solvent balance |
| `cp_configuration` | all_processes | as-built complete harvester | controlled BOM and actual factory acceptance | model/serial/configuration; full BOM and supplier prefill scope; crop/drive/cab/HVAC/controls; actual leak/function/commissioning results; net delivery state | Trace current approved drawings and actual component inclusions, chronological assembly and factory inspection/test disposition. Record actual safeguards, crop-drive/brake/steering/hydraulic/electrical functions checked under current approved acceptance plan; no universal threshold, duration or load test is inferred from brochures. | kg | each machine/configuration change | actual declared representative production period | declared plant and attributable integration supply gates | qualifiers accompany each accepted same-configuration unit | signed drawing/BOM/test/disposition records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | Use a current calibrated vehicle/platform scale or weighbridge suitable for the complete machine actual mass/footprint with traceable capacity/resolution/calibration, original zero/tare/net readings and signed same-serial configuration. No imaginary bench scale. Weigh after actual delivered fills; any removed part needs independently measured same-unit add/remove corrections and original configuration state. Independently reconcile engine kg, supplied module kg and retained fuel/oil/coolant kg to complete positive M. No brochure operating weight, rated capacity, inferred density or invented average machine mass substitutes. | cp_mass; cp_parts; cp_engine; cp_hydraulic; cp_stock |
| `net_configuration` | finished_harvester | M includes all actual installed permanent components and retained delivery fluids exactly once; installed engine/gearbox/cab/HVAC/battery prefill is within its supplied mass. Separate plant makeup enters only outside that supply boundary. Exclude operator, crop, payload, temporary test fixtures, packaging, loose spares/tools and separately delivered accessories. Record retained fuel state explicitly, not arbitrary full-tank mass. | cp_configuration; cp_parts; cp_engine; cp_stock; cp_mass |
| `period_collection` | all protocols | For each same-configuration actual campaign, attribute actual exchange total using primary causal records and divide by actual accepted unit count to collect q_item in its original kg, MJ, m3 or Item(s). Retain consumed rejects/rework in numerator; never silently pool different engine/track/crop/HVAC or delivered-fluid configurations. Complete accepted M corresponds to the same population/state. | cp_configuration; actual counts; original records |
| `completeness_balance` | all exchanges | Expand the full actual BOM and operation register before claiming complete plant coverage: additional roller/drive specifications, air intake, exhaust, lights, brackets, grease, gear oil, HVAC recharge, compressed air/heat, test crop and its residues, wipe/packaging fractions each need their own physically specific exchanges. Match all upstream/transport/receiver links. Close stock-to-installed/returned/rejected/waste and fluid issue/retention/drain/recovery/emission balances with actual uncertainty, no default yield or unexplained-residual emission. | all collection protocols and actual job/supplier/receiver records |
| `source_limits` | external sources | Deere page currently has a CH750 heading and CH570 descriptive text; retain it only as publisher-retained CH570 crop-module examples, not verified contemporary CH750 specifications. Case offers bolted modular chassis and wheeled/tracked alternatives, showing that welding and one running gear are not universal necessities. Both are promotional architecture evidence only, not plant quantities or independently audited factory production. Current controlled foreground drawings, work records and independent scientific review remain required. | deere-cane-architecture; case-austoft-architecture |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify exact reference name equals finished_harvester, complete declared tracked non-road diesel billet configuration and physically measured positive net M kg. Generic44129 machinery-and-parts identity does not independently establish this complete configuration. |  |
| `validation_configuration` | all_processes | Verify actual supplier boundaries, engine serial and count/independent kg, hydraulic actual m3/temperature/density retention, prefilled versus plant added fluids, complete permanent BOM and actual chronological commissioning/acceptance. Reject duplicated motors/blades/cab refrigerant or engine oil within complete modules. Actual engine classification must be non-road agricultural, not road-vehicle or aircraft propulsion. |  |
| `validation_identity` | all flow rows | Verify public state100 type, actual reference property/group/unit, route/state and exact official bilingual names. Preserve Number, Volume and Energy; do not relabel Mass. Match each emission chemical/fossil fraction and immediate actual air submedium; NO/NO2/N2O, direct resource water and collected effluent remain distinct. Retain specific blank identity gaps until resolved. |  |
| `validation_claims` | claims | Mechanical PCR pass verifies declared consistency only, not actual factory measurements, complete cradle-to-gate coverage, scientific approval or field performance. Declare remaining BOM/identity/measurement/link/independent evidence gaps and actual unknown/not-applicable/below-detection status. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete tracked sugarcane-harvester final integration manufacturing foreground; heading implies no publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same declared configured complete machine manufacturing scaled by actual M with actual linked component and supply gates |
| excluded_use | Harvest services, crop yields, farm use fuel, lifetime comparisons, unrelated harvesters/tractors/parts and unsupported configurations |
| required_metadata | Full as-built BOM/model/serial, tracked route, engine/emission/serial/count and independent kg, crop/drive/cab/HVAC/electrical configuration, module fluid inclusions and actual retained fills, complete calibrated M and original weights, actual plant/period/provider/work/acceptance records, allocation, upstream/receiver links |
| required_quality_disclosure | Identity/measurement/BOM/source/link gaps, actual returns/rejects/rework and fluid recovery; detection/uncertainty/cutoffs and allocation sensitivity |
| update_trigger | Engine/emission, chassis/track/crop module, supply/prefill, actual fluid/formulation, control/HVAC/acceptance, delivery state or plant/provider/period changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| deere-cane-architecture | handbook | John Deere Australia, CH750 Track Cane Harvester (page title retains CH570 wording), undated official page, Hydrostatic basecutter and chopper; Elevator and cleaning system. https://www.deere.com.au/en/harvesting/sugar-cane-harvester/ch750-track-sugar-cane-harvester/ | Publisher-retained CH570 example: distinct hydraulic basecutter/chopper, extractor and elevator modules. No numerical weight, productivity, lifetime or universal factory recipe transferred. |
| case-austoft-architecture | handbook | Case IH, Austoft 9000 Sugar Cane Harvester, undated official page, Chassis; New optimized hydraulic system; model variants. https://www.caseih.com/en/africamiddleeast/products/harvesting/austoft-9000-sugar-cane-harvester | Bolted modular chassis, controlled piston pumps and different wheeled/tracked configurations; supports explicit supply/design choices, not a welding obligation or measured inventory. |
