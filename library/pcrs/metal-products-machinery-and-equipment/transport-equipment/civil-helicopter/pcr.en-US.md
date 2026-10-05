---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.civil-helicopter
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Civil single-turboshaft conventional-rotor helicopter manufacture

## 1. Scope and Applicability

Manufacture of new complete civil manned single-turboshaft helicopters with a conventional main rotor and anti-torque tail rotor, skid landing gear, declared metallic/composite airframe and installed control/electrical/fuel systems. Scope runs from declared stock/received assemblies to configuration-specific manufacturing acceptance/handover, including attributable production ground and flight tests. It is a narrower route within CPC 49621. The reference supplies a configured product, not flight or mission service.

Exclude military/unmanned, piston/twin-turboshaft/electric/hybrid, coaxial/tandem/multirotor, ducted-tail-rotor/Fenestron, wheeled/amphibious/float-only and incomplete aircraft or spare-component routes, retrofit/repair/resale, development endurance and training, post-gate ferry, passenger/cargo/mission operation, maintenance and end of life. Additional civil mission equipment requires a separate explicit complete configuration/inventory. Manufacturer examples are not universal type certification.

Airbus describes supplier/component manufacture, assembly and production flight acceptance. Its 2025 H125 description supports a specific conventional-rotor/single-turbine/skid configuration with composite blades; Robinson R66 supplies an independent turboshaft/fuel-system civil example with different mission options. Neither is a manufacturing recipe or actual serial aircraft mass. FAA 2016 guidance supports physical weighing and configuration/fuel/oil distinctions only; current aircraft-specific manufacturer procedures and original measurements govern. Scientific review remains pending. Receipt-to-acceptance foreground alone is not complete cradle-to-gate: compatible disclosed supplier upstream linkage is required.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.civil-helicopter |
| classification_refs | CPC 3.0 49621; narrower civil single-turboshaft conventional-rotor skid route, context only |
| covered_products | Manufacture of new complete civil manned single-turboshaft helicopters with a conventional main rotor and anti-torque tail rotor, skid landing gear, declared metallic/composite airframe and installed control/electrical/fuel systems. Scope runs from declared stock/received assemblies to configuration-specific manufacturing acceptance/handover, including attributable production ground and flight tests. It is a narrower route within CPC 49621. The reference supplies a configured product, not flight or mission service. |
| excluded_products | Exclude military/unmanned, piston/twin-turboshaft/electric/hybrid, coaxial/tandem/multirotor, ducted-tail-rotor/Fenestron, wheeled/amphibious/float-only and incomplete aircraft or spare-component routes, retrofit/repair/resale, development endurance and training, post-gate ferry, passenger/cargo/mission operation, maintenance and end of life. Additional civil mission equipment requires a separate explicit complete configuration/inventory. Manufacturer examples are not universal type certification. |
| representative_product | One serial/configuration-linked accepted complete civil helicopter with measured positive basic-empty product net M |
| production_route | Conditional metallic/composite fabrication and finishing; airframe, dynamic and systems integration; actual manufacture acceptance; conditional protection |
| market_state | New accepted complete configured civil helicopter at declared manufacturing gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one complete configured civil single-turboshaft conventional-rotor skid helicopter |
| How much | 1 kg of accepted complete configured basic-empty product net mass; actual per-aircraft records divided by measured M |
| How well | Same actual complete configuration with documented structural/rotor/control/ground-flight acceptance and release scope; no equal-mass flight performance or universal airworthiness approval |
| How long or cycle | One manufacturing and production-acceptance cycle; no flight-hour lifetime or maintenance interval assumed |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Helicopters, except unmanned aircraft `cb74ed41-c415-43c1-a2d5-01d2ba04aff2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model/serial/drawing revision and civil acceptance basis; engine type/control and supplier completeness; main/tail rotor type/blade material/count, transmission/shafts; skid gear; airframe alloy/temper/composite architecture, supplied/prefinished scope; avionics unit part numbers, cabin/seat/window, battery chemistry and actual mission options; supplier contained parts/prefills; installed operating oil/hydraulic fluid and permanent ballast; actual measured unusable fuel included in M and usable retained fuel excluded; actual positive configured basic-empty net M in kg with original calibrated weighing, rotor/aircraft position and tare; persons, payload, packaging, temporary loads, loose ground kits/spares excluded; physically measured integral detached delivery parts; serial-linked test phases/release, emission medium/height, manufacturing gate/site/period, allocation and upstream linkage |

M includes the actual complete airframe, engine, installed rotor/drive/control/cabin systems, declared operational oil/hydraulic fills, permanent design ballast and verified actually retained unusable fuel in this declared basic-empty product state. Exclude usable delivery fuel, occupants, cargo, test payloads, temporary fixtures, packaging, spares and loose ground/airborne kits. This chosen manufacturing mass is not MTOW, payload capacity or a quoted empty-weight catalogue value. Do not automatically equate an approved empty-weight convention with M: retain its oil/fuel/equipment inclusions and reconcile physically measured differences. Integral delivered detached blades/fittings require actual weighing and same-serial completeness reconciliation, without duplication.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Use current same-serial complete-aircraft calibrated physical weighing with manufacturer-specified support points, rotor/aircraft position and actual equipment list. Retain each simultaneous support reading, zero/tare, calibration, date/operator, environment and uncertainty; sum readings net of measured fixtures. Document actual installed oil/hydraulic fluid, permanent ballast and measured unusable fuel, subtract actually measured usable fuel/persons/test loads and add physically measured integral detached delivered parts only when absent from the weighing. Fuel correction uses actual grade/density/temperature or direct mass, never tank capacity or nominal standard-weight tables. Missing actual method or mass balance requires scientific/data review. |
| `unit_conversion` | individual exchanges | original measured property | actual row unit | Preserve Mass, Volume, Area, energy and count. Electricity: actual kWh to MJ using verified 1 kWh = 3.6 MJ. For purchased units or liquid volume, use traceable actual same-configuration part masses or same-grade density/temperature to convert to kg, retaining the original unit/readings. No assumed per-engine/blade mass, fuel density or advertised heat value. |

mass_record_provenance is supported by FAA 2016 Chapter 3 physical scale, configuration, fuel/oil and tare guidance; its airplane-specific oil conventions and example numbers are not applied as helicopter rules. Follow the current actual helicopter weighing procedure and document the declared manufacturing net state independently.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified metal/prepreg stock and purchased airframe, rotor/engine/transmission/system modules with supplier inclusions/prefills |
| starting_condition_role | Foreground receipt-to-complete manufacturing acceptance/handover |
| product_classification_scope | Complete covered civil helicopter product, not passenger/mission service |
| recursive_input_rule | Do not model a finished helicopter as its own input. Complete supplier parts/assemblies replace included fabrication; actual in-house components require measured process inventories |
| upstream_dataset_requirement | Match actual alloy/temper, fibre/resin/finished-component state, turboshaft/rotor configuration, module completeness and provider/site/period. Disclose unlinked supplier manufacture |
| disclosure | manufacturer/model/serial/drawing revision and civil acceptance basis; engine type/control and supplier completeness; main/tail rotor type/blade material/count, transmission/shafts; skid gear; airframe alloy/temper/composite architecture, supplied/prefinished scope; avionics unit part numbers, cabin/seat/window, battery chemistry and actual mission options; supplier contained parts/prefills; installed operating oil/hydraulic fluid and permanent ballast; actual measured unusable fuel included in M and usable retained fuel excluded; actual positive configured basic-empty net M in kg with original calibrated weighing, rotor/aircraft position and tare; persons, payload, packaging, temporary loads, loose ground kits/spares excluded; physically measured integral detached delivery parts; serial-linked test phases/release, emission medium/height, manufacturing gate/site/period, allocation and upstream linkage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all stages | Include actual received-stock/component processing, assembly, rework and attributable pre-gate production ground/flight tests, weighing and release. Add actual outsourced manufacture/trial/support services separately with declared boundary and unit. Distinguish gate and production-acceptance flights from customer training, commercial missions, development endurance and post-gate ferry. | `airbus-production` |
| `boundary_completeness` | assemblies and actual BOM | Count each received assembly and contained parts/prefills once: rotor hub/blades, engine controls, fuel tank/pump and hydraulic/electronic units are not duplicated. Received finished blades/panels replace contained prepreg manufacture; complete fuselage replaces contained metal/fastening/finish. Complete all actual fittings, adhesives/gases/refrigerants, heat, trial services, wastes and releases before quantitative dataset completion. These candidate cards are not an exhaustive universal helicopter BOM. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_fabrication` | Metallic airframe part fabrication | conditional | Actual in-house metallic airframe/landing-gear component manufacture. | foreground | one accepted configured helicopter, normalized using M |
| `composite_fabrication` | Composite panel and rotor-blade manufacture | conditional | Actual in-house fibre/epoxy laminate or sandwich components. | foreground | one accepted configured helicopter, normalized using M |
| `surface_finish` | Surface preparation, primer and topcoat | conditional | Actual foreground cleaning or protective/decorative coating. | foreground | one accepted configured helicopter, normalized using M |
| `airframe_assembly` | Fuselage, skid gear and cabin integration | required | Every covered complete helicopter. | foreground | one accepted configured helicopter, normalized using M |
| `dynamic_assembly` | Turboshaft, transmission and rotor installation | required | Every covered complete helicopter. | foreground | one accepted configured helicopter, normalized using M |
| `systems_integration` | Flight controls, electrical and fuel systems | required | Every covered complete helicopter. | foreground | one accepted configured helicopter, normalized using M |
| `acceptance` | Configuration weighing, ground and production-flight acceptance | required | Every covered complete helicopter; specific tests follow actual release scope. | foreground | one accepted configured helicopter, normalized using M |
| `protection` | Delivery protection and detached integral fittings | conditional | Actual removable protection or integral parts detached for delivery. | foreground | one accepted configured helicopter, normalized using M |

Metal/composite fabrication feed conditional finishing and airframe/dynamic/systems integration, followed by complete-configuration acceptance and conditional protection. Stages may overlap; resources are assigned once. All exchange cards are conditional on actual composition/configuration, even within required stages. Each is one physical or chemical exchange; no emission or welding/coating recipe is compulsory.

### Process: Metallic airframe part fabrication (`metal_fabrication`)

Cut/form specified aluminium sheet and steel tube; machine interfaces and rivet/join actual parts under traceable drawings. Purchased completed structures bypass included stock and processing. Record actual welding gas/wire, forging/heat treatment, anodizing and machining operations with separate measured exchanges when performed; none is a universal required route. Segregate aluminium and steel chips.

#### Inputs

##### Product flows

###### Wrought aerospace aluminium-alloy sheet with declared temper (`aluminium_sheet`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Wrought aerospace aluminium-alloy sheet with declared temper
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication`
- Sources: `airbus-production`

###### Seamless chromium-molybdenum steel airframe tube (`chromoly_tube`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Seamless chromium-molybdenum steel airframe tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication`
- Sources: `airbus-production`

###### Solid aluminium-alloy aircraft rivet (`aluminium_rivet`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Solid aluminium-alloy aircraft rivet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication`
- Sources: `airbus-production`

###### Water-miscible semi-synthetic metalworking-fluid concentrate (`machining_fluid`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Water-miscible semi-synthetic metalworking-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication`
- Sources: `airbus-production`

###### Process Water (`machining_water`)

Actual supplied treated cleaning/dilution process water crossing the boundary; not circulation or environmental withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication`
- Sources: `airbus-production`

###### Alternating-current electricity at factory intake (`metal_fabrication_electricity`)

Measure attributable kWh, convert 1 kWh = 3.6 MJ using the verified energy unit group and retain actual plant-intake/provider scope. Do not merge electrical ground power, fuel, purchased heat or compressed gas; each actual carrier/service needs a separate exchange.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication`
- Sources: `airbus-production`

#### Outputs

##### Waste flows

###### Segregated untreated aerospace aluminium-alloy machining chips (`aluminium_chips`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Segregated untreated aerospace aluminium-alloy machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication`
- Sources: `airbus-production`

###### Segregated untreated chromoly-steel machining chips (`steel_chips`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Segregated untreated chromoly-steel machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_metal_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication`
- Sources: `airbus-production`

### Process: Composite panel and rotor-blade manufacture (`composite_fabrication`)

Record actual laminate fibre/resin chemistry, prepreg or separately issued fabric/resin route, layup, core, vacuum consumables, cure, trim and inspection. Carbon/epoxy and glass/epoxy prepreg cards are separate conditional formulations; do not duplicate resin/fibre inside prepreg. Supplier finished blades/panels replace contained manufacture. Follow actual approved production drawing and measured cure/NDI records; no Airbus model is proof of a universal autoclave, resin, temperature, pressure or cure yield. Add actual seals/adhesives/heat/gas and mould consumption separately where attributable.

#### Inputs

##### Product flows

###### Uncured carbon-fibre epoxy aerospace prepreg (`carbon_prepreg`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Uncured carbon-fibre epoxy aerospace prepreg
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_composite_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_composite_fabrication`
- Sources: `airbus-h125-2025`

###### Uncured glass-fibre epoxy aerospace prepreg (`glass_prepreg`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Uncured glass-fibre epoxy aerospace prepreg
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_composite_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_composite_fabrication`
- Sources: `airbus-h125-2025`

###### Closed-cell rigid PVC structural sandwich foam core (`pvc_core`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Closed-cell rigid PVC structural sandwich foam core
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_composite_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_composite_fabrication`
- Sources: `airbus-h125-2025`

###### Vacuum bagging film (`vacuum_bag`)

Only actual nylon vacuum-bag film supplied for prepreg hand layup at a Chinese plant matching the public route; weigh actual consumption. No typical areal mass estimate adopted and no film mass included in aircraft M.

- Selected flow: Vacuum bagging film `eb9fdc16-6e58-439b-a41c-ae4f97751868`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_composite_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_composite_fabrication`
- Sources: `airbus-h125-2025`

###### Unlaminated PTFE mould-release film (`ptfe_release`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Unlaminated PTFE mould-release film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_composite_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_composite_fabrication`
- Sources: `airbus-h125-2025`

###### Alternating-current electricity at factory intake (`composite_fabrication_electricity`)

Measure attributable kWh, convert 1 kWh = 3.6 MJ using the verified energy unit group and retain actual plant-intake/provider scope. Do not merge electrical ground power, fuel, purchased heat or compressed gas; each actual carrier/service needs a separate exchange.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_composite_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_composite_fabrication`
- Sources: `airbus-h125-2025`

#### Outputs

##### Waste flows

###### Cured carbon-fibre epoxy laminate trim transferred for treatment (`carbon_trim`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Cured carbon-fibre epoxy laminate trim transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_composite_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_composite_fabrication`
- Sources: `airbus-h125-2025`

###### Cured glass-fibre epoxy laminate trim transferred for treatment (`glass_trim`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Cured glass-fibre epoxy laminate trim transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_composite_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_composite_fabrication`
- Sources: `airbus-h125-2025`

### Process: Surface preparation, primer and topcoat (`surface_finish`)

Record actual cleaning and coating layer/formulation scope; epoxy primer and polyurethane topcoat are examples only when actual materials match. Independently measure base/curing-agent issues, film incorporated, captured overspray and solvent releases. Prefinished supplier modules replace duplicate finishing. Do not treat cleaning effluent transfer or captured coating as elemental emissions.

#### Inputs

##### Product flows

###### Anhydrous isopropanol cleaning solvent (`isopropanol_solvent`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Anhydrous isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

###### Process Water (`clean_water`)

Actual supplied treated cleaning water, not internal circulation or elementary resource.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

###### Formulated epoxy aircraft corrosion-primer base (`epoxy_primer`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Formulated epoxy aircraft corrosion-primer base
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

###### Polyamine epoxy aircraft primer hardener formulation (`primer_hardener`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Polyamine epoxy aircraft primer hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

###### Formulated polyurethane aircraft topcoat base (`pu_base`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Formulated polyurethane aircraft topcoat base
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

###### Polyisocyanate aircraft topcoat hardener formulation (`pu_hardener`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Polyisocyanate aircraft topcoat hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

###### Alternating-current electricity at factory intake (`surface_finish_electricity`)

Measure attributable kWh, convert 1 kWh = 3.6 MJ using the verified energy unit group and retain actual plant-intake/provider scope. Do not merge electrical ground power, fuel, purchased heat or compressed gas; each actual carrier/service needs a separate exchange.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

#### Outputs

##### Waste flows

###### Captured polyurethane aircraft-coating overspray waste (`coat_overspray`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Captured polyurethane aircraft-coating overspray waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

###### Aqueous aluminium-airframe cleaning effluent transferred for treatment (`clean_effluent`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Aqueous aluminium-airframe cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

#### Outputs

##### Elementary flows

###### isopropanol (`ipa_release`)

Only actually demonstrated isopropanol released to air, unspecified, immediately from recorded cleaning/coating; distinguish exhaust from indoor occupational air. Measure outlet/species and residual/waste balance; no mandatory evaporation factor.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `airbus-production`

### Process: Fuselage, skid gear and cabin integration (`airframe_assembly`)

Assemble declared fuselage/tail boom and skid gear, install actual seats/transparencies and reconcile structure and cabin configuration. Received complete airframe includes its contained structure and fasteners once; any separately supplied component has a separate physical exchange. Record actual alignment, attachment and inspection results. Integral delivered detached blades/fittings must be physically reconciled to the same accepted aircraft, unlike spare parts or ground-handling kits.

#### Inputs

##### Product flows

###### Complete specified metallic/composite helicopter fuselage and tail-boom airframe assembly (`fuselage`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete specified metallic/composite helicopter fuselage and tail-boom airframe assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airframe_assembly`
- Sources: `airbus-h125-2025`

###### Complete aluminium helicopter skid landing-gear assembly (`skid_gear`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete aluminium helicopter skid landing-gear assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airframe_assembly`
- Sources: `airbus-h125-2025`

###### Complete civil helicopter pilot seat assembly (`pilot_seat`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete civil helicopter pilot seat assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airframe_assembly`
- Sources: `airbus-h125-2025`

###### Formed PMMA acrylic helicopter windscreen (`windscreen`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Formed PMMA acrylic helicopter windscreen
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airframe_assembly`
- Sources: `airbus-h125-2025`

###### Alternating-current electricity at factory intake (`airframe_assembly_electricity`)

Measure attributable kWh, convert 1 kWh = 3.6 MJ using the verified energy unit group and retain actual plant-intake/provider scope. Do not merge electrical ground power, fuel, purchased heat or compressed gas; each actual carrier/service needs a separate exchange.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airframe_assembly`
- Sources: `airbus-h125-2025`

### Process: Turboshaft, transmission and rotor installation (`dynamic_assembly`)

Install the single turboshaft engine and actual main/tail transmission, main rotor and conventional anti-torque tail rotor with documented part numbers, supply completeness and attachment/balance records. Count complete received rotor assemblies with included blades/hub once; separately supplied blades replace the included portion, not duplicate it. Wind-turbine rotors and piston/diesel engines are outside this route. Record gearbox/cooling/control interfaces and actual ground adjustment.

#### Inputs

##### Product flows

###### Complete single helicopter turboshaft engine assembly (`turboshaft`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete single helicopter turboshaft engine assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dynamic_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dynamic_assembly`
- Sources: `airbus-h125-2025`

###### Helicopter rotor system (`main_rotor`)

Only actual separately purchased complete main helicopter rotor assembly with its hub/blades and declared supplier completeness. Record configuration and measured accepted mass; public generic system identity supplies no blade count/material recipe. Exclude blades already in this assembly; a kit including tail rotor requires separate documented scope and suppresses duplicate tail input.

- Selected flow: Helicopter rotor system `b419d220-cac7-4476-8927-f79a98dbd69e`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dynamic_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dynamic_assembly`
- Sources: `airbus-h125-2025`

###### Finished composite helicopter main-rotor blade (`main_blade`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Finished composite helicopter main-rotor blade
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dynamic_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dynamic_assembly`
- Sources: `airbus-h125-2025`

###### Complete conventional helicopter anti-torque tail-rotor assembly (`tail_rotor`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete conventional helicopter anti-torque tail-rotor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dynamic_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dynamic_assembly`
- Sources: `airbus-h125-2025`

###### Complete helicopter main transmission gearbox (`main_gearbox`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete helicopter main transmission gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dynamic_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dynamic_assembly`
- Sources: `airbus-h125-2025`

###### Complete helicopter tail-rotor transmission gearbox (`tail_gearbox`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete helicopter tail-rotor transmission gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dynamic_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dynamic_assembly`
- Sources: `airbus-h125-2025`

###### Complete helicopter tail-rotor drive-shaft assembly (`tail_shaft`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete helicopter tail-rotor drive-shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dynamic_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dynamic_assembly`
- Sources: `airbus-h125-2025`

###### Alternating-current electricity at factory intake (`dynamic_assembly_electricity`)

Measure attributable kWh, convert 1 kWh = 3.6 MJ using the verified energy unit group and retain actual plant-intake/provider scope. Do not merge electrical ground power, fuel, purchased heat or compressed gas; each actual carrier/service needs a separate exchange.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dynamic_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dynamic_assembly`
- Sources: `airbus-h125-2025`

### Process: Flight controls, electrical and fuel systems (`systems_integration`)

Install actual hydraulic controls/hoses, fuel system, wiring, each identified avionics module and starter battery; fill separately issued specified fluids and record supplier prefills once. Nickel-cadmium and lead-acid battery cards are alternatives only on demonstrated actual configurations; do not treat their chemistries as identical. Separate each actual optional climate refrigerant, mission kit and extra system. Civil mission equipment, if included in accepted M, needs a declared separate configuration/inventory; military equipment and services are excluded.

#### Inputs

##### Product flows

###### Complete helicopter hydraulic flight-control servo actuator (`servo`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete helicopter hydraulic flight-control servo actuator
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Reinforced synthetic-rubber aircraft hydraulic hose assembly (`hydraulic_hose`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Reinforced synthetic-rubber aircraft hydraulic hose assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Petroleum-mineral aircraft hydraulic-fluid formulation (`hydraulic_oil`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Petroleum-mineral aircraft hydraulic-fluid formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Synthetic-ester aircraft turbine lubricating-oil formulation (`turbine_oil`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Synthetic-ester aircraft turbine lubricating-oil formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Synthetic-ester helicopter transmission lubricating-oil formulation (`gear_oil`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Synthetic-ester helicopter transmission lubricating-oil formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Avionics (`avionics_unit`)

Only one actual separately supplied integrated flight navigation/communication avionics physical unit, with part number/functions/completeness and measured mass; split independently supplied radios, displays, transponders and wiring into separate rows. The public Avionics name does not license an aggregate mixed electronic-parts exchange.

- Selected flow: Avionics `f8cff391-8adb-4c50-9225-aa7b822abe47`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Insulated copper aircraft wiring-harness assembly (`copper_harness`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Insulated copper aircraft wiring-harness assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Lead Acid Battery (`lead_battery`)

Only actual separately supplied complete filled lead/dilute-sulfuric-acid starter battery in documented charged/discharged delivered state matching the public route. Record model/capacity/completeness and actual mass; no universal battery choice or kg/item. Exclude battery inside purchased powerplant.

- Selected flow: Lead Acid Battery `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Filled nickel-cadmium aircraft starter battery assembly (`nicd_battery`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Filled nickel-cadmium aircraft starter battery assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Complete flexible aviation-kerosene fuel-bladder tank assembly (`fuel_bladders`)

Record only this specific actual material/formulation or complete physical part with supplier specification, delivered scope and measured net issues/transfer; demonstrated absence is not_applicable and unknown is a gap. Different variants require separate rows.

- Selected flow: Complete flexible aviation-kerosene fuel-bladder tank assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

###### Alternating-current electricity at factory intake (`systems_integration_electricity`)

Measure attributable kWh, convert 1 kWh = 3.6 MJ using the verified energy unit group and retain actual plant-intake/provider scope. Do not merge electrical ground power, fuel, purchased heat or compressed gas; each actual carrier/service needs a separate exchange.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_systems_integration`
- Sources: `airbus-h125-2025`

### Process: Configuration weighing, ground and production-flight acceptance (`acceptance`)

Trace actual structural, rotor/drive/control/electrical inspections, ground run, weighing and attributable production-flight tests with serial-linked release authorization. Separate ground and flight phases, fuel balance, local release medium/height and support resources. Exclude R&D endurance, training, commercial flights, post-gate ferry and maintenance; separately document outsourcing and trial support services. No standard flight duration, engine power, airborne emission factor or universal airworthiness threshold is supplied.

#### Inputs

##### Product flows

###### Kerosene-type jet fuel (`trial_kerosene`)

Actual fossil kerosene-type aviation jet fuel issued for attributable production ground/flight tests and retained delivery fuel. Record actual grade/specification/provider, returns, consumption and unusable versus usable retention; do not infer a blend, lifecycle burn, standard density or heating value.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-production`

###### Alternating-current electricity at factory intake (`acceptance_electricity`)

Measure attributable kWh, convert 1 kWh = 3.6 MJ using the verified energy unit group and retain actual plant-intake/provider scope. Do not merge electrical ground power, fuel, purchased heat or compressed gas; each actual carrier/service needs a separate exchange.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-production`

#### Outputs

##### Product flows

###### Kerosene-type jet fuel (`usable_delivery_fuel`)

Only actual measured usable aviation kerosene retained at delivery, excluded from M and reported separately without avoided-production credit. Document actual unusable fuel included in configured basic-empty M and do not count it again as a separate output.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-production`

###### Helicopters, except unmanned aircraft (`finished_machine`)

Accepted complete configured civil single-turboshaft, conventional-main/tail-rotor, skid-gear helicopter in measured basic-empty product state. Public broader manned helicopter identity is narrowed by actual qualifiers; no passenger/flight-service equivalence.

- Selected flow: Helicopters, except unmanned aircraft `cb74ed41-c415-43c1-a2d5-01d2ba04aff2`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `airbus-production`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`trial_co2`)

Only actually demonstrated attributable production-test fossil CO2 released to air, unspecified, immediately. Separate ground/flight location, height and phase; do not force upper-air/stratospheric or specific urban/nonurban releases into unspecified medium. Measure or justify each exact species from traceable actual foreground records; no compulsory exhaust factor, NOx split or airborne allocation assumed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-production`

###### nitrogen monoxide (`trial_no`)

Only actually demonstrated attributable production-test NO released to air, unspecified, immediately. Separate ground/flight location, height and phase; do not force upper-air/stratospheric or specific urban/nonurban releases into unspecified medium. Measure or justify each exact species from traceable actual foreground records; no compulsory exhaust factor, NOx split or airborne allocation assumed.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-production`

###### nitrogen dioxide (`trial_no2`)

Only actually demonstrated attributable production-test NO2 released to air, unspecified, immediately. Separate ground/flight location, height and phase; do not force upper-air/stratospheric or specific urban/nonurban releases into unspecified medium. Measure or justify each exact species from traceable actual foreground records; no compulsory exhaust factor, NOx split or airborne allocation assumed.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-production`

### Process: Delivery protection and detached integral fittings (`protection`)

Weigh delivery protection independently and exclude it from M. Account for physically measured integral delivered parts only once against the actual same-aircraft acceptance inventory. Spare blades, ground wheels/covers/kits, loaned test hardware and post-gate logistics are separate excluded products/activities unless a different clearly declared boundary is reviewed.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`pe_protection`)

Only actual unlaminated non-adhesive LDPE protection foil; weigh separately and exclude from M. Other protection requires exact separate exchange.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_protection`
- Sources: `airbus-h125-2025`

###### Alternating-current electricity at factory intake (`protection_electricity`)

Measure attributable kWh, convert 1 kWh = 3.6 MJ using the verified energy unit group and retain actual plant-intake/provider scope. Do not merge electrical ground power, fuel, purchased heat or compressed gas; each actual carrier/service needs a separate exchange.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_protection`
- Sources: `airbus-h125-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | Directly attribute serial/configuration-linked material issues/returns, submetered power, composite cure batch occupancy and production test/rework records first. For inseparable shared utilities demonstrate a measured causal machine-time/load, occupied tooling/cure cycle or coating-area/layer driver: share = order driver / sum of covered order drivers. Retain period, full denominator and causal justification. Equal aircraft counts, advertised turbine power, MTOW, payload or lifetime flight hours are not default allocation drivers. |  |
| `allocation_fuel` | production tests and delivery fuel | Net attributable aviation kerosene issued less measured returns/stock change equals measured consumed fuel plus actual usable and unusable fuel retained at gate. Retained unusable fuel belongs to the declared basic-empty product M once; retained usable fuel is the separate delivery output and excluded from M, without automatic avoided-production credit. Keep ground and flight phases and stock reconciliation; releases use actual consumed fuel/species evidence, not issued total or lifetime operation. Separate any saleable products by actual records before reviewed residual allocation. |  |
| `allocation_recovery` | reuse, rejects and wastes | Internal stock/water reuse is an internal transfer, not fresh input or credit. Exported wastes retain weighed amounts and actual recipients without presumed recycling/substitution benefit. Reconcile rejects, rework and work in progress against accepted serial outputs; neither scrap recovery nor failed acceptance creates an extra complete helicopter output. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete helicopter net mass | traceable_weighing_record | model; configuration; serial; accepted net mass M; current manufacturer procedure; original weighing date/method; all support-point readings; calibration/zero/tare; rotor/aircraft level; actual equipment and oil/hydraulic/unusable fuel state; measured usable-fuel/temporary-load deductions; integral detached parts; signed mass balance; uncertainty | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | each accepted unit | actual manufacturing/acceptance period | declared manufacturing acceptance gate | accepted net mass per unit | original calibrated physical measurements and signed configured-state reconciliation |
| `cp_metal_fabrication` | metal_fabrication | Metallic airframe part fabrication | foreground_record | serial/order/configuration; accepted aircraft count; exact exchange/formulation/property/unit; measured issues/returns/stock; supplier inclusions/prefills; component/fluid masses; kWh/provider; cure/finish work records; test ground/flight phases; actual fuel grade/density/temperature, consumed and usable/unusable retention; species/outlet/medium/height; waste recipient; shared driver/denominator; calibration and release | Collect same serial/configuration drawings, supplier receipt/completeness, actual issue/return and stock records, measured component/fluid masses, calibrated meters, job/test and release originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/receipt/cure/test/release and fuel records |
| `cp_composite_fabrication` | composite_fabrication | Composite panel and rotor-blade manufacture | foreground_record | serial/order/configuration; accepted aircraft count; exact exchange/formulation/property/unit; measured issues/returns/stock; supplier inclusions/prefills; component/fluid masses; kWh/provider; cure/finish work records; test ground/flight phases; actual fuel grade/density/temperature, consumed and usable/unusable retention; species/outlet/medium/height; waste recipient; shared driver/denominator; calibration and release | Collect same serial/configuration drawings, supplier receipt/completeness, actual issue/return and stock records, measured component/fluid masses, calibrated meters, job/test and release originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/receipt/cure/test/release and fuel records |
| `cp_surface_finish` | surface_finish | Surface preparation, primer and topcoat | foreground_record | serial/order/configuration; accepted aircraft count; exact exchange/formulation/property/unit; measured issues/returns/stock; supplier inclusions/prefills; component/fluid masses; kWh/provider; cure/finish work records; test ground/flight phases; actual fuel grade/density/temperature, consumed and usable/unusable retention; species/outlet/medium/height; waste recipient; shared driver/denominator; calibration and release | Collect same serial/configuration drawings, supplier receipt/completeness, actual issue/return and stock records, measured component/fluid masses, calibrated meters, job/test and release originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/receipt/cure/test/release and fuel records |
| `cp_airframe_assembly` | airframe_assembly | Fuselage, skid gear and cabin integration | foreground_record | serial/order/configuration; accepted aircraft count; exact exchange/formulation/property/unit; measured issues/returns/stock; supplier inclusions/prefills; component/fluid masses; kWh/provider; cure/finish work records; test ground/flight phases; actual fuel grade/density/temperature, consumed and usable/unusable retention; species/outlet/medium/height; waste recipient; shared driver/denominator; calibration and release | Collect same serial/configuration drawings, supplier receipt/completeness, actual issue/return and stock records, measured component/fluid masses, calibrated meters, job/test and release originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/receipt/cure/test/release and fuel records |
| `cp_dynamic_assembly` | dynamic_assembly | Turboshaft, transmission and rotor installation | foreground_record | serial/order/configuration; accepted aircraft count; exact exchange/formulation/property/unit; measured issues/returns/stock; supplier inclusions/prefills; component/fluid masses; kWh/provider; cure/finish work records; test ground/flight phases; actual fuel grade/density/temperature, consumed and usable/unusable retention; species/outlet/medium/height; waste recipient; shared driver/denominator; calibration and release | Collect same serial/configuration drawings, supplier receipt/completeness, actual issue/return and stock records, measured component/fluid masses, calibrated meters, job/test and release originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/receipt/cure/test/release and fuel records |
| `cp_systems_integration` | systems_integration | Flight controls, electrical and fuel systems | foreground_record | serial/order/configuration; accepted aircraft count; exact exchange/formulation/property/unit; measured issues/returns/stock; supplier inclusions/prefills; component/fluid masses; kWh/provider; cure/finish work records; test ground/flight phases; actual fuel grade/density/temperature, consumed and usable/unusable retention; species/outlet/medium/height; waste recipient; shared driver/denominator; calibration and release | Collect same serial/configuration drawings, supplier receipt/completeness, actual issue/return and stock records, measured component/fluid masses, calibrated meters, job/test and release originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/receipt/cure/test/release and fuel records |
| `cp_acceptance` | acceptance | Configuration weighing, ground and production-flight acceptance | foreground_record | serial/order/configuration; accepted aircraft count; exact exchange/formulation/property/unit; measured issues/returns/stock; supplier inclusions/prefills; component/fluid masses; kWh/provider; cure/finish work records; test ground/flight phases; actual fuel grade/density/temperature, consumed and usable/unusable retention; species/outlet/medium/height; waste recipient; shared driver/denominator; calibration and release | Collect same serial/configuration drawings, supplier receipt/completeness, actual issue/return and stock records, measured component/fluid masses, calibrated meters, job/test and release originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/receipt/cure/test/release and fuel records |
| `cp_protection` | protection | Delivery protection and detached integral fittings | foreground_record | serial/order/configuration; accepted aircraft count; exact exchange/formulation/property/unit; measured issues/returns/stock; supplier inclusions/prefills; component/fluid masses; kWh/provider; cure/finish work records; test ground/flight phases; actual fuel grade/density/temperature, consumed and usable/unusable retention; species/outlet/medium/height; waste recipient; shared driver/denominator; calibration and release | Collect same serial/configuration drawings, supplier receipt/completeness, actual issue/return and stock records, measured component/fluid masses, calibrated meters, job/test and release originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/receipt/cure/test/release and fuel records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each compatible aircraft configuration, measured net issues/returns/stock and justified allocation give attributable exchange totals; divide by accepted unit count for q_item, then by the same measured M for q_ref. Mass exchanges are kg/kg and electricity MJ/kg. For compatible serial units with different actual M, retain each aircraft record and divide attributable totals by summed accepted net masses. Separate differing airframe/composite, engine/rotor, battery/fluid/mission or supplied-module scope. Unknown quantity is a gap, not zero. No quoted empty mass, density, heating value, standard test time or component share is a substitute.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement independent mass_record_provenance: calibrated actual complete-aircraft support readings, manufacturer positioning, equipment list and measured tare/temporary-load/usable-fuel corrections; retain included oil/hydraulic and unusable fuel evidence. Reconcile integral detached parts and summed mass without duplication. Neither catalogue empty weight, maximum takeoff weight, tank capacity nor standard fluid density establishes M. Missing original measurements or uncertainty requires scientific/data review and blocks quantitative completion. | original actual weighing/equipment-state records and mass balance; FAA 2016 Chapter 3 method support only |
| `quality_bom` | complete configuration | Reconcile actual airframe, skid/seat/window, rotor/blades/gearbox/engine, flight-control/electrical/fuel and declared fluids to accepted M. Trace supply completeness and approved drawings/material batches; do not double count blades in rotor assemblies, controls in engine, battery in powerplant or fluid prefills. Nickel-cadmium is not lead-acid; equipment/loose kit exclusions differ across models. Add every missing actual part/process/exchange before completed dataset release. | complete BOM/drawings/receipt/measurements/SDS and acceptance records |
| `quality_process` | actual manufacture and trials | Retain actual alloy/temper, laminate fibre/resin/cure/trim/NDI, join/finish, attachment/balance, hydraulic leak/electrical and ground/flight acceptance records with serial-linked rework and release. Set empirical QA ranges only from compatible verified measured records or independent source synthesis. No universally required chemical recipe, autoclave cycle, life limit, certification or test duration is supplied. | actual production procedures, measurement uncertainty and original quality records |
| `quality_release` | fuel/species and coverage | Keep actual fuel grade/carbon origin, weighed or measured-density fuel balance, phase location/height, exact species/medium, captured wastes and real recipients. Do not derive NO versus NO2 from a NOx total or apply high-altitude factors to ground tests. Disclose period/site, conditional absence, supplier gaps, unavailable quantitative ranges and missing actual weighing evidence. This candidate specifies future evidence; it certifies no actual helicopter or factory inventory. | fuel/trial/transfer originals and coverage-gap register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require the covered complete civil single-turboshaft conventional-main/tail-rotor skid configuration and positive actual M with cp_mass, mass_record_provenance and basic-empty equipment/fuel/oil reconciliation. Reject MTOW, advertised empty weight, payload and full tank weight as net M. Missing actual evidence requires review before quantitative completion. | `faa-weight-2016` |
| `validate_atomic` | all exchanges | Check exact physical/chemical identity, public reference property/unit group, route/state and delivered completeness. Wind-turbine blade is not helicopter blade; piston/diesel is not turboshaft; cured laminate is not uncured prepreg; pure IPA is not disinfectant mixture; NiCd is not lead-acid; process water is not resource withdrawal or effluent. Public broad avionics/rotor names require one actual unit/system boundary, not a collection of interchangeable parts. Keep unsupported UUID blank. |  |
| `validate_measurement` | all amounts | Verify original unit/property, collected accepted-unit denominator, explicit q_item/M conversion, same serial/configuration/site/period, actual calibration and causal allocation. Correct volume or count using actual grade-density or measured component mass, never by renaming public properties. Unknown is not zero. |  |
| `validate_species` | conditional elementary releases | Require actual measured/traceably justified attributable IPA or exact fossil CO2, NO or NO2 and medium. These selected identities are immediate air-unspecified only. Reject indoor, water/soil, long-term, biogenic, upper-air/stratospheric or total NOx/N2O/nitrogen substitutions. Ground and flight emissions require separate phase/location/height evidence; add matching extra atomic rows if medium differs. Captured dust/coating/trim is waste, not automatic airborne release. |  |
| `validate_acceptance` | manufacturing release | Trace actual structural/material/component, rotor/drive/control and ground/flight procedures/results/rework and release for the same aircraft and claimed applicable civil authority/contract. Manufacturer brochure and FAA 2016 example do not certify this aircraft or impose current legal criteria. Record pre-gate production versus post-gate ferry/training/service boundary. | `airbus-production` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete civil single-turboshaft helicopter foreground manufacture |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared compatible upstream linkage |
| allowed_use | Manufacturing supply models matching complete engine/rotor/skid/mission/equipment configuration, measured basic-empty net scope, supplier boundary and gate/site/period |
| excluded_use | Passenger/mission operation, flight-hour service/lifetime footprint, equal-mass performance comparisons, other power/rotor/gear routes, unsupported certification or complete cradle-to-gate |
| required_metadata | manufacturer/model/serial/drawing revision and civil acceptance basis; engine type/control and supplier completeness; main/tail rotor type/blade material/count, transmission/shafts; skid gear; airframe alloy/temper/composite architecture, supplied/prefinished scope; avionics unit part numbers, cabin/seat/window, battery chemistry and actual mission options; supplier contained parts/prefills; installed operating oil/hydraulic fluid and permanent ballast; actual measured unusable fuel included in M and usable retained fuel excluded; actual positive configured basic-empty net M in kg with original calibrated weighing, rotor/aircraft position and tare; persons, payload, packaging, temporary loads, loose ground kits/spares excluded; physically measured integral detached delivery parts; serial-linked test phases/release, emission medium/height, manufacturing gate/site/period, allocation and upstream linkage |
| required_quality_disclosure | Identity/quantity/range gaps, actual mass/fuel/oil evidence and uncertainty, complete BOM, supplier inclusions, causal allocation and acceptance/upstream limitations |
| update_trigger | Aircraft engine/rotor/airframe/gear/mission configuration, composite/chemical or battery/fluid route, supplier completeness, measured net-state corrections, test phase boundary, manufacturing site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `airbus-production` | literature | [Airbus Helicopters: Production](https://www.airbus.com/en/products-services/helicopters/production) | Headings An end-to-end process, How do we build our helicopters, Production that spans the globe and Safety and innovation: supplier versus in-house component production, assembly and flight acceptance context. No site output, universal fabrication method, recipe or intensity adopted. Foreground records determine actual conditional stages. |
| `airbus-h125-2025` | literature | [Airbus H125 Technical Description (2025)](https://mediaassets.airbus.com/pm_38_379_379561-fmldw2vvut.pdf) | PDF p.3 (printed p.22) standard airframe/skid/cabin; PDF p.4 (printed p.23) powerplant/transmission/composite main and tail rotors/hydraulic controls/NiCd battery and footnote excluding airborne-kit weight from baseline empty weight. Model configuration only, not universal blade counts, chemistry, component mass, tank capacity, power, airworthiness approval, lifetime or test recipe. Declared actual configuration and current aircraft records govern. |
| `robinson-r66` | literature | [Robinson R66 Police](https://www.robinsonheli.com/helicopters/r66-police) | Rolls-Royce RR300 Turbine Engine and Crashworthy Fuel System paragraphs: independent civil turboshaft/bladder tank/installed equipment example. Police imaging and optional auxiliary-tank modules need separately declared scope; no approximate empty mass, gross weight, speed, range, engine rating, generator threshold or lifetime adopted. |
| `faa-weight-2016` | official_guidance | [FAA-H-8083-1B: Aircraft Weight and Balance Handbook (2016)](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-1.pdf) | Chapter 3, PDF pp.34–37 (printed pp.3-2–3-5): calibrated ramp/load-cell scales, manufacturer procedure/zero, equipment/ballast, residual fuel/oil/other-fluid distinctions, rotor position/leveling and tare table. Historical physical-method guidance only; current manufacturer procedure governs. Airplane CAR/14 CFR oil conventions are not helicopter rules, and nominal density, sample weights, calibration interval, warm-up and temperature figures are not imposed. No current legal/certification or actual M claim. |
