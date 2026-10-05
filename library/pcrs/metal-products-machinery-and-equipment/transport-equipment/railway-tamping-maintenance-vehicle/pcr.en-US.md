---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.railway-tamping-maintenance-vehicle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Diesel-hydraulic plain-line railway tamping vehicle manufacture

## 1. Scope and Applicability

Manufacture of new complete self-propelled diesel-hydraulic plain-line railway ballast tamping vehicles with integrated lifting/lining and measured configured running gear, work units, hydraulic power and control. The boundary runs from declared stock or received assemblies to manufacturing acceptance/handover, including attributable component and vehicle tests. This narrower product route is within CPC 49531; the reference product does not provide a track-maintenance service.

Exclude turnout-specialist, road-rail attachment or road compactor routes, non-self-propelled service wagons, inspection-only/ballast-cleaning/rail-grinding or welding vehicles, combined extra work services, battery/contact-wire hybrid or all-electric drives, rebuilt/resold used machines and post-handover transport, track work, training, maintenance and end of life. A hydraulic work unit alone does not identify diesel-only power: Plasser E3 hybrid is an explicit excluded counterexample.

The Plasser production page supports separate cutting/welding, mechanical parts/work-unit manufacture, assembly and commissioning. MATISA B45D provides plain-line tamp/lift/line configuration context. The 1996 CSM used-machine listing is historical design evidence only, not manufacture of a current new unit. No source supplies this factory inventory or actual net vehicle mass. Receipt-to-handover foreground alone is not complete cradle-to-gate; link compatible supplier upstream and disclose omissions. Scientific review is pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.railway-tamping-maintenance-vehicle |
| classification_refs | CPC 3.0 49531; narrower self-propelled diesel-hydraulic plain-line tamping route; context only |
| covered_products | Manufacture of new complete self-propelled diesel-hydraulic plain-line railway ballast tamping vehicles with integrated lifting/lining and measured configured running gear, work units, hydraulic power and control. The boundary runs from declared stock or received assemblies to manufacturing acceptance/handover, including attributable component and vehicle tests. This narrower product route is within CPC 49531; the reference product does not provide a track-maintenance service. |
| excluded_products | Exclude turnout-specialist, road-rail attachment or road compactor routes, non-self-propelled service wagons, inspection-only/ballast-cleaning/rail-grinding or welding vehicles, combined extra work services, battery/contact-wire hybrid or all-electric drives, rebuilt/resold used machines and post-handover transport, track work, training, maintenance and end of life. A hydraulic work unit alone does not identify diesel-only power: Plasser E3 hybrid is an explicit excluded counterexample. |
| representative_product | One serial/configuration-linked accepted complete railway tamper with actual measured net M |
| production_route | Conditional frame/component manufacture and coating; running-gear/drivetrain assembly; tamp/lift/line hydraulic integration; control outfitting; commissioning/acceptance and conditional protection |
| market_state | New complete accepted configured rail maintenance vehicle at declared manufacturing gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured diesel-hydraulic plain-line tamping/lifting/lining vehicle |
| How much | 1 kg accepted complete fuel-excluded net vehicle mass; per-unit records normalized with positive measured M |
| How well | Actual documented structural, hydraulic, brake, control/geometry and tamp/lift/line release criteria; equal mass does not establish track-work output equivalence |
| How long or cycle | One manufacture and manufacturing-acceptance cycle; no working lifetime or treated track length assumed |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Railway or tramway maintenance or service vehicles, whether or not self-propelled `e3e65962-deae-4dbd-ae36-6ff10a584514` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model/serial/drawing revision; plain-line and track gauge/sleeper compatibility; tamping-head/tine material/tip/count and vibration/squeeze configuration; lifting/lining clamp and geometry control; frame/bogie/wheelset/drive/brake scope; diesel engine/transmission and hydraulic pump/actuator/fluid formulation; cab/electronics/starter battery and actual safety/AC options; supplier assembly inclusions/prefills; actual installed service-fluid/fixed-ballast state; accepted complete fuel-excluded net M in kg from traceable actual same-vehicle weighing; excluded persons/loose ballast/spares/packaging/test loads, separately measured fuel at gate and integral detached delivered fittings; manufacturing/commissioning gate/site/period; upstream linkage and resource allocation |

Declare all qualifiers. Narrow the broad public manufactured maintenance-vehicle identity to the actual diesel-hydraulic plain-line configuration. M includes installed frame/cabs, running gear/engine/transmission, tamp/lift/line tools and hydraulic/control assemblies, declared working-fluid fills and fixed ballast. Exclude diesel fuel, people, loose ballast, spares, packaging and temporary test/transport fixtures. Fuel retained at gate is independently measured and recorded as separate product output; physically measured integral detached delivery fittings are included once. No catalogue weight, axle rating multiplied by axle count, fuel-tank capacity or operating working weight substitutes for net M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Obtain current calibrated actual complete-vehicle or documented wheel/axle-load weighing covering all wheels of the same vehicle and stated level method. Retain instrument calibration, zero/tare, repeatability, serial/date/operator and uncertainty. Sum actual appropriate wheel/axle measurements; reconcile installed units/fluid state/fixed ballast and physically measured integral detached parts. Deduct separately measured fuel, persons, protection and temporary loads from the weighed state with item-level signed balance. Working-order mass without traceable corrections is insufficient. |
| `property_conversion` | components and utilities | original property | actual row unit | Preserve engine Number of items/Item(s), not kg. Record received item count and independently weighed installed engine mass for net-M balance; no fixed engine-mass factor is supplied. Keep energy and volume distinct from mass. Meter electricity kWh and convert 1 kWh = 3.6 MJ within the verified energy unit group. Convert liquid volume only with actual same-formulation density/temperature and source records; no presumed oil/fuel density. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified steel stock, actual blanks and finished frames/bogies/work/power/control assemblies with supplier inclusions |
| starting_condition_role | Foreground manufacture from receipt to complete configured acceptance/handover |
| product_classification_scope | Self-propelled diesel-hydraulic plain-line tamping/lifting/lining vehicle; not track-work service |
| recursive_input_rule | Do not generate the complete vehicle as its own input. Bought-in frames/bogies/work units replace contained manufacturing and constituents; in-house manufacture uses measured component processes |
| upstream_dataset_requirement | Match actual grade/chemistry, power/work-unit design, supplier completeness, reference property and site/period; disclose unlinked supplier production |
| disclosure | builder/model/serial/drawing revision; plain-line and track gauge/sleeper compatibility; tamping-head/tine material/tip/count and vibration/squeeze configuration; lifting/lining clamp and geometry control; frame/bogie/wheelset/drive/brake scope; diesel engine/transmission and hydraulic pump/actuator/fluid formulation; cab/electronics/starter battery and actual safety/AC options; supplier assembly inclusions/prefills; actual installed service-fluid/fixed-ballast state; accepted complete fuel-excluded net M in kg from traceable actual same-vehicle weighing; excluded persons/loose ballast/spares/packaging/test loads, separately measured fuel at gate and integral detached delivered fittings; manufacturing/commissioning gate/site/period; upstream linkage and resource allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all stages | Include actual fabrication/component manufacture, measured rework, assembly and attributable pre-gate commissioning track tests. Record test medium, consumed/retained fuel and support resources. Exclude research/endurance development or training unless explicitly separately justified, and post-handover track work. Outsourced fabrication or trial service requires a separate exchange with service boundary, unit and allocation. | `plasser-production` |
| `boundary_modules` | assemblies and actual BOM | Count each purchased assembly and contained parts/prefills once; suppress duplicate engine inside powerpack, wheelset inside bogie and pump/tines/fluid inside work/hydraulic unit. Complete received frames replace fabrication stock. Complete all actual components, chemistries, gases/refrigerants, filters and measured releases before completed dataset release; candidate cards are not an exhaustive universal BOM. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame_fabrication` | Frame stock preparation, machining and joining | conditional | Actual in-house vehicle or work-unit frame manufacture. | foreground | one accepted configured tamping vehicle, normalized using M |
| `component_fabrication` | Work-unit and hydraulic component machining/assembly | conditional | Actual in-house component manufacture. | foreground | one accepted configured tamping vehicle, normalized using M |
| `surface_finish` | Surface preparation and protective coating | conditional | Actual foreground cleaning, blasting or coating. | foreground | one accepted configured tamping vehicle, normalized using M |
| `mechanical_assembly` | Running gear and diesel drivetrain assembly | required | Every covered complete vehicle. | foreground | one accepted configured tamping vehicle, normalized using M |
| `work_hydraulics` | Tamping, lifting/lining and hydraulic integration | required | Covered plain-line diesel-hydraulic tamping configuration. | foreground | one accepted configured tamping vehicle, normalized using M |
| `outfitting` | Cab, measurement, control and auxiliary outfitting | required | Complete declared accepted configuration. | foreground | one accepted configured tamping vehicle, normalized using M |
| `acceptance` | Hydraulic calibration, functional trial and complete-vehicle acceptance | required | Before declared manufacturing handover gate. | foreground | one accepted configured tamping vehicle, normalized using M |
| `packing` | Delivery protection and detached integral tools | conditional | Actual removable protection or integral fittings detached for delivery. | foreground | one accepted configured tamping vehicle, normalized using M |

Frame and component manufacture feed conditional surface finishing and running-gear/work-unit/outfit integration, followed by complete-configuration acceptance and conditional protection. Stages may overlap; resources are assigned once. All exchange cards are conditional on actual composition/configuration, even within required stages. Each is one physical or chemical exchange; no emission or welding/coating recipe is compulsory.

### Process: Frame stock preparation, machining and joining (`frame_fabrication`)

Cut/form steel plate and sections; machine interfaces; weld actual main frame, tamping carrier and bogie frames to documented procedures and inspect joints. Purchased complete frame modules replace contained stock/processing. Add actual cutting gas, coolant, consumables and forging/heat-treatment exchanges when performed; no mandatory universal grade or welding recipe.

#### Inputs

##### Product flows

###### Hot-rolled low-alloy steel tamping-vehicle frame plate (`frame_plate`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Hot-rolled low-alloy steel tamping-vehicle frame plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_fabrication`
- Sources: `plasser-production`

###### Hot-rolled steel tamping-vehicle structural profile (`frame_profile`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Hot-rolled steel tamping-vehicle structural profile
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_fabrication`
- Sources: `plasser-production`

###### Solid low-alloy steel gas-shielded welding wire (`solid_wire`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Solid low-alloy steel gas-shielded welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_fabrication`
- Sources: `plasser-production`

###### Carbon dioxide (`co2_shield`)

Only actual supplied pure CO2 shielding gas matching the public Chinese plant route; not premix or assumed fossil elementary exhaust.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_fabrication`
- Sources: `plasser-production`

###### Argon/carbon-dioxide premixed welding shielding gas (`argon_mix`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Argon/carbon-dioxide premixed welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_fabrication`
- Sources: `plasser-production`

###### Alternating-current electricity at factory intake (`frame_fabrication_electricity`)

Meter attributable kWh and convert 1 kWh = 3.6 MJ using the verified energy unit group; retain actual supply/intake context and separately measured onsite generation.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_fabrication`
- Sources: `plasser-production`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Weigh segregated untreated steel offcuts transferred after internal reuse; retain recipient, no downstream treatment or automatic recycling credit.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_fabrication`
- Sources: `plasser-production`

###### Captured iron-oxide-rich welding filter dust (`weld_dust`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Captured iron-oxide-rich welding filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame_fabrication`
- Sources: `plasser-production`

### Process: Work-unit and hydraulic component machining/assembly (`component_fabrication`)

Machine actual tine blanks, cylinder tubes and hydraulic/bogie interfaces, fit seals/bearings and assemble work units; record deburring, cleaning, measured scrap and actual test-rig resources. Forging, hardening or carbide tipping applies only to recorded actual route and requires separate measured process exchanges. Bought-in finished work units replace included manufacture. Trace actual unit performance/leak tests without imposing manufacturer temperatures, pressures or endurance cycles.

#### Inputs

##### Product flows

###### Forged low-alloy steel ballast-tamping tine blank (`tine_blank`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Forged low-alloy steel ballast-tamping tine blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_component_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_fabrication`
- Sources: `plasser-production`

###### Cold-drawn seamless low-alloy steel hydraulic-cylinder tube (`cylinder_tube`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Cold-drawn seamless low-alloy steel hydraulic-cylinder tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_component_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_fabrication`
- Sources: `plasser-production`

###### Water-miscible semi-synthetic metalworking-fluid concentrate formulation (`metalworking_fluid`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Water-miscible semi-synthetic metalworking-fluid concentrate formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_component_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_fabrication`
- Sources: `plasser-production`

###### Process Water (`machining_water`)

Actual treated supplied dilution/cleaning water, not internal loop or resource withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_component_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_fabrication`
- Sources: `plasser-production`

###### Alternating-current electricity at factory intake (`component_fabrication_electricity`)

Meter attributable kWh and convert 1 kWh = 3.6 MJ using the verified energy unit group; retain actual supply/intake context and separately measured onsite generation.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_component_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_fabrication`
- Sources: `plasser-production`

#### Outputs

##### Waste flows

###### Steel chips (`steel_chips`)

Only actual segregated untreated low-alloy steel chips/swarf generated during documented CNC milling or drilling, matching the public route; collect oil contamination and recipient. Other chip-generation routes require separate identity review. No buy-to-fly value or recycling credit is inferred.

- Selected flow: Steel chips `7b085ff2-e543-40e3-b293-1322740eabcb`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_component_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_fabrication`
- Sources: `plasser-production`

### Process: Surface preparation and protective coating (`surface_finish`)

Record actual preparation and coating composition/layers. Epoxy base/hardener are conditional formulations; a prefinished supplier frame replaces duplicate finish. Captured shot/dust and cleaning transfer are wastes, not environmental releases.

#### Inputs

##### Product flows

###### Process Water (`clean_water`)

Actual supplied treated process water for cleaning; not environmental withdrawal or internal circulation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `plasser-production`

###### Spherical cast-steel blasting shot (`abrasive`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Spherical cast-steel blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `plasser-production`

###### Formulated epoxy rail-vehicle coating base component (`epoxy_base`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Formulated epoxy rail-vehicle coating base component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `plasser-production`

###### Polyamine epoxy rail-vehicle coating hardener formulation (`epoxy_hardener`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Polyamine epoxy rail-vehicle coating hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `plasser-production`

###### Alternating-current electricity at factory intake (`surface_finish_electricity`)

Meter attributable kWh and convert 1 kWh = 3.6 MJ using the verified energy unit group; retain actual supply/intake context and separately measured onsite generation.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `plasser-production`

#### Outputs

##### Waste flows

###### Spent steel blasting shot with coating residue (`spent_abrasive`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Spent steel blasting shot with coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `plasser-production`

###### Aqueous steel-frame cleaning effluent transferred for treatment (`clean_effluent`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Aqueous steel-frame cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `plasser-production`

### Process: Running gear and diesel drivetrain assembly (`mechanical_assembly`)

Mount actual frame on bogies/wheelsets; install diesel engine and recorded transmission/axle drive, suspension and brakes. Count purchased complete bogies or powerpacks with included parts once. If manufactured in house, record component inventories instead. Mechanical assembly and subsequent hydraulic/electrical integration may overlap; allocate resources once.

#### Inputs

##### Product flows

###### Complete welded steel tamping-vehicle chassis frame (`frame_received`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete welded steel tamping-vehicle chassis frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_assembly`
- Sources: `plasser-production`

###### Bogie assembly (`bogie_received`)

Actual received complete rail bogie with recorded wheelsets, suspension, drive and brake inclusions; exclude duplicate constituent inputs. Public generic bogie identity supplies no axle-layout or manufacturing factor.

- Selected flow: Bogie assembly `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_assembly`
- Sources: `plasser-production`

###### Finished forged-steel rail wheelset with axle and wheels (`wheelset`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Finished forged-steel rail wheelset with axle and wheels
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_assembly`
- Sources: `plasser-production`

###### Diesel engine (`engine_received`)

Actual separately supplied complete compression-ignition diesel engine. Preserve public Number of items reference and collected count; record serial/model and independently measured mass for installed-M reconciliation, not an invented kg-per-engine factor. A purchased powerpack containing the engine replaces this separate input.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_assembly`
- Sources: `plasser-production`

###### Complete hydrodynamic rail-vehicle transmission assembly (`transmission`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete hydrodynamic rail-vehicle transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_assembly`
- Sources: `plasser-production`

###### Lubricating oil (`gear_oil`)

Actual separately issued petroleum-derived formulated gearbox lubricating oil; record grade and exclude supplier prefill already counted in transmission.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_assembly`
- Sources: `plasser-production`

###### Alternating-current electricity at factory intake (`mechanical_assembly_electricity`)

Meter attributable kWh and convert 1 kWh = 3.6 MJ using the verified energy unit group; retain actual supply/intake context and separately measured onsite generation.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_assembly`
- Sources: `plasser-production`

### Process: Tamping, lifting/lining and hydraulic integration (`work_hydraulics`)

Install exact tamping units/tines and lift/line roller clamp, hydraulic pumps/cylinders/valves/hoses and their control. Record squeeze/vibration mechanism, tine material/tip and tool count, tamping heads and sleeper compatibility; no manufacturer example count/frequency is imposed. Complete purchased unit inclusions replace constituent rows. Mineral and synthetic-ester fluids are separate actual variants; historic CSM Panolin naming does not establish chemistry.

#### Inputs

##### Product flows

###### Complete hydraulic ballast tamping work-unit assembly (`tamping_unit`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete hydraulic ballast tamping work-unit assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

###### Finished forged-steel ballast tamping tine (`tamping_tine`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Finished forged-steel ballast tamping tine
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

###### Complete rail lifting-and-lining roller clamp assembly (`lifting_clamp`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete rail lifting-and-lining roller clamp assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

###### Complete axial-piston hydraulic pump for tamping machinery (`hydraulic_pump`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete axial-piston hydraulic pump for tamping machinery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

###### Linear acting (cylinders) hydraulic and pneumatic power engines and motors (`hydraulic_cylinder`)

Actual separately supplied complete hydraulic linear squeeze actuator cylinder, with bore/stroke/pressure/connection and material scope from supplier records. Public broader hydraulic/pneumatic cylinder identity is narrowed to this hydraulic configured part; no pneumatic actuator or universal test pressure implied. Exclude cylinders already inside purchased work unit.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

###### Reinforced synthetic-rubber high-pressure hydraulic hose assembly (`hydraulic_hose`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Reinforced synthetic-rubber high-pressure hydraulic hose assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

###### Petroleum-mineral hydraulic oil formulation (`mineral_hydraulic`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Petroleum-mineral hydraulic oil formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

###### Synthetic-ester biodegradable hydraulic fluid formulation (`ester_hydraulic`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Synthetic-ester biodegradable hydraulic fluid formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

###### Alternating-current electricity at factory intake (`work_hydraulics_electricity`)

Meter attributable kWh and convert 1 kWh = 3.6 MJ using the verified energy unit group; retain actual supply/intake context and separately measured onsite generation.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

#### Outputs

##### Waste flows

###### Spent petroleum-mineral hydraulic oil transferred for treatment (`spent_hydraulic`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Spent petroleum-mineral hydraulic oil transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_work_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_work_hydraulics`
- Sources: `matisa-compact`

### Process: Cab, measurement, control and auxiliary outfitting (`outfitting`)

Install actual cabs, track-geometry measurement, control cabinet, wiring, pneumatic brake compressor and safety systems. Record auxiliary starter battery chemistry separately. Air-conditioning and refrigerant are conditional: each actually filled species, leak and assembly must be added explicitly. Complete all actual omitted fittings, tanks, insulation and fasteners before dataset completion.

#### Inputs

##### Product flows

###### Complete rail track-geometry measurement sensor module (`track_sensor`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete rail track-geometry measurement sensor module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Complete steel tamping-machine electronic control cabinet (`control_cabinet`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete steel tamping-machine electronic control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Complete rail brake-air compressor unit (`air_compressor`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete rail brake-air compressor unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Complete pneumatic rail brake-control valve block (`brake_valve`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Complete pneumatic rail brake-control valve block
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Laminated safety-glass rail vehicle windscreen (`cab_glass`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Laminated safety-glass rail vehicle windscreen
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Lead Acid Battery (`aux_battery`)

Only actual separately supplied complete filled lead/dilute-sulfuric-acid starter battery with recorded charge/discharge treatment and accepted delivered state matching the public route. Record model/capacity/completeness without inventing kg per battery; exclude battery already inside bought-in powerpack. Different chemistry/state requires separate row.

- Selected flow: Lead Acid Battery `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Insulated copper rail-machine cable harness (`copper_cable`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Insulated copper rail-machine cable harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Inhibited ethylene-glycol/water diesel-engine cooling fluid formulation (`coolant`)

Record only this exact physical/formulated exchange when actually present, with supplier specification/completeness and measured net issue or transfer. Demonstrated absence is not_applicable; unknown amount is a gap. Different variants require separate cards.

- Selected flow: Inhibited ethylene-glycol/water diesel-engine cooling fluid formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Lubricating oil (`engine_oil`)

Actual separately issued petroleum-derived formulated engine oil first fill; record grade and exclude already counted engine prefill.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

###### Alternating-current electricity at factory intake (`outfitting_electricity`)

Meter attributable kWh and convert 1 kWh = 3.6 MJ using the verified energy unit group; retain actual supply/intake context and separately measured onsite generation.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `plasser-production`

### Process: Hydraulic calibration, functional trial and complete-vehicle acceptance (`acceptance`)

Commission actual electrical/mechanical/hydraulic systems, fill documented service fluids, calibrate geometry/control and test braking, travel and tamp/lift/line functions to the actual release plan. Include attributable factory/commissioning track tests and rework; distinguish optional development/endurance tests and training from unit acceptance. Trial diesel and measured exhaust apply only where demonstrated. Track work performed after handover is excluded, irrespective of use of the same tamping mechanisms.

#### Inputs

##### Product flows

###### Diesel fuel (`trial_diesel`)

Actual fossil petroleum diesel issued for attributable commissioning; reconcile returned, consumed and fuel retained at gate separately. No blend or lifetime usage inferred.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `plasser-production`

###### Alternating-current electricity at factory intake (`acceptance_electricity`)

Meter attributable kWh and convert 1 kWh = 3.6 MJ using the verified energy unit group; retain actual supply/intake context and separately measured onsite generation.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `plasser-production`

#### Outputs

##### Product flows

###### Diesel fuel (`delivery_diesel`)

Only actual separately measured diesel remaining in the delivered tank and excluded from net M; record as a separate product output without avoided-production credit, reconciling trial fuel balance.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `plasser-production`

###### Railway or tramway maintenance or service vehicles, whether or not self-propelled (`finished_machine`)

Accepted complete self-propelled diesel-hydraulic plain-line tamping/lifting/lining vehicle, with configuration-specific positive measured net M. Public broader maintenance-vehicle identity is constrained by required qualifiers.

- Selected flow: Railway or tramway maintenance or service vehicles, whether or not self-propelled `e3e65962-deae-4dbd-ae36-6ff10a584514`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `plasser-production`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`trial_co2`)

Only demonstrated attributable commissioning fossil CO2 emitted to air, unspecified, immediate release. Record actual measured species/outlet/method; do not replace total NOx or imply a mandatory emission amount.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `plasser-production`

###### nitrogen monoxide (`trial_no`)

Only demonstrated attributable commissioning NO emitted to air, unspecified, immediate release. Record actual measured species/outlet/method; do not replace total NOx or imply a mandatory emission amount.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `plasser-production`

###### nitrogen dioxide (`trial_no2`)

Only demonstrated attributable commissioning NO2 emitted to air, unspecified, immediate release. Record actual measured species/outlet/method; do not replace total NOx or imply a mandatory emission amount.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `plasser-production`

### Process: Delivery protection and detached integral tools (`packing`)

Measure protection separately and exclude from M. Integral delivered tools/fittings detached for transport require physical measurements and reconciliation to the same accepted configuration. Separately sold spare tines, tools, transport fixtures and post-gate logistics are excluded.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`pe_protection`)

Only actual unlaminated non-adhesive LDPE protective film; weigh separately and exclude from M. Other packaging requires independent exact exchanges.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `plasser-production`

###### Alternating-current electricity at factory intake (`packing_electricity`)

Meter attributable kWh and convert 1 kWh = 3.6 MJ using the verified energy unit group; retain actual supply/intake context and separately measured onsite generation.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `plasser-production`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | Directly attribute serial/configuration-linked net issues, meters, work-unit test time and rework first. Allocate inseparable shared utilities by demonstrated measured causal machine time/load or coated area/layer demand: share = order driver / sum of covered order drivers. Retain period, denominator and causality. Equal vehicle count, engine rating, axle-load limits or metres of track tamped are not default drivers. |  |
| `allocation_fuel` | commissioning and retained diesel | Reconcile actual diesel issued less measured returns/stock change with actual consumed fuel and separately measured fuel retained at the gate. Trial-diesel input covers attributable consumption plus retained delivery fuel; the separate fuel output receives no avoided-production credit and is excluded from M. Allocate any separately saleable product only after direct separation using justified actual records. Emissions use actual consumed trial fuel/species measurements, not the issued total or lifetime fuel. |  |
| `allocation_recovery` | reuse, wastes and rejects | Internal steel/water/fluid reuse is a transfer, not fresh input or automatic credit. Exported waste retains measured amount and recipient without presumed avoided production. Reconcile rejected/reworked units and work in progress to accepted output; document resource attribution and no repeated accepted-output count. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete tamping vehicle net mass | traceable_weighing_record | model; configuration; serial; accepted net mass M; original weighing record/date/method; calibrated instrument; wheel/axle measurements if used; measured fills/fixed ballast; measured additions/deductions; excluded persons/loose ballast/fuel/test fixtures/packaging; detached integral parts; signed reconciliation; uncertainty | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | each accepted unit | actual manufacturing/acceptance period | declared manufacturing acceptance gate | accepted net mass per unit | original calibrated physical measurements and signed configuration mass balance |
| `cp_frame_fabrication` | frame_fabrication | Frame stock preparation, machining and joining | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh/intake; engine item count; diesel issued/returned/consumed/retained at gate; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect same serial/configuration drawings, supplier completeness, measured issues/returns, component masses, calibrated meters, job and test originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_component_fabrication` | component_fabrication | Work-unit and hydraulic component machining/assembly | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh/intake; engine item count; diesel issued/returned/consumed/retained at gate; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect same serial/configuration drawings, supplier completeness, measured issues/returns, component masses, calibrated meters, job and test originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_surface_finish` | surface_finish | Surface preparation and protective coating | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh/intake; engine item count; diesel issued/returned/consumed/retained at gate; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect same serial/configuration drawings, supplier completeness, measured issues/returns, component masses, calibrated meters, job and test originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_mechanical_assembly` | mechanical_assembly | Running gear and diesel drivetrain assembly | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh/intake; engine item count; diesel issued/returned/consumed/retained at gate; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect same serial/configuration drawings, supplier completeness, measured issues/returns, component masses, calibrated meters, job and test originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_work_hydraulics` | work_hydraulics | Tamping, lifting/lining and hydraulic integration | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh/intake; engine item count; diesel issued/returned/consumed/retained at gate; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect same serial/configuration drawings, supplier completeness, measured issues/returns, component masses, calibrated meters, job and test originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_outfitting` | outfitting | Cab, measurement, control and auxiliary outfitting | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh/intake; engine item count; diesel issued/returned/consumed/retained at gate; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect same serial/configuration drawings, supplier completeness, measured issues/returns, component masses, calibrated meters, job and test originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_acceptance` | acceptance | Hydraulic calibration, functional trial and complete-vehicle acceptance | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh/intake; engine item count; diesel issued/returned/consumed/retained at gate; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect same serial/configuration drawings, supplier completeness, measured issues/returns, component masses, calibrated meters, job and test originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_packing` | packing | Delivery protection and detached integral tools | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh/intake; engine item count; diesel issued/returned/consumed/retained at gate; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect same serial/configuration drawings, supplier completeness, measured issues/returns, component masses, calibrated meters, job and test originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each compatible configuration, net issues minus recorded returns/inventory change and justified shared allocation give attributable totals; divide by accepted unit count for q_item, then by the same measured net M for q_ref. Keep mass exchanges kg/kg, engine count Item(s)/kg and electricity MJ/kg. For mass-varying compatible serial units use attributable totals divided by summed measured accepted net masses with all serial records retained. Separate different diesel/drivetrain and hydraulic/cooling formulations, tamping/lifting configurations, gauge/bogie layout, frame/finish and supplier completeness. Unknown amount is a gap, never zero; no engine-power, tamping-productivity, nominal axle-load or catalogue-mass conversion is inferred.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_provenance using actual current traceable physical weighing and itemized net-configuration reconciliation. Every included wheel/axle belongs to the same unit and state; reconcile measured detachable fittings/fills and ensure no omitted/double-counted weight. Missing original method, calibration, state correction or positive M blocks a complete quantitative dataset and requires review/new measurement. | original weighing and configuration correction ledger |
| `quality_bom` | complete configuration | Reconcile all actual frame, bogie/wheelset, diesel drivetrain, tamping/lifting/hydraulic, brake, auxiliary/cab/control and service-fluid masses to accepted net M. Record purchased assembly inclusions; no duplicate wheelsets/engines/work units inside purchased assemblies or prefilled hydraulic/engine oils; installed tools versus spares and retained diesel are reconciled separately. Add actual omitted parts and exchanges before completion. | complete drawings/BOM/receipts/weighing/SDS |
| `quality_balance` | amounts and species | Retain calibration, energy meters, issues/returns/reuse, measured fluid composition/density, waste manifests and actual emission method/species/medium. Define empirical QA limits from applicable measured records or verified comparable sources. No universal manufacturing intensity, vehicle mass or burner emission factor is supplied. | actual meter/stock/mass balances and uncertainty |
| `quality_coverage` | dataset | Disclose period/site/configurations, conditional absence, subcontracting, identity/quantity uncertainty, range gaps and missing supplier upstream. Historical product/production examples do not establish present product certification or this tamping vehicle M. This PCR specifies future record requirements; no actual tamping vehicle weighing or plant inventory has been certified. | coverage and evidence limitations register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require the covered complete self-propelled diesel-hydraulic plain-line tamping/lifting/lining configuration, positive measured net M, cp_mass and independent mass_record_provenance. Reject catalogue weight, nominal axle-load multiplication, loose ballast/train weight or filled fuel tank as net M. Missing actual measurements or state reconciliation requires scientific/data review before quantitative dataset completion. |  |
| `validate_atomic` | all exchanges | Verify exact physical/chemical identity, public reference property/unit group, formulation/state and supplier completeness. Rail tamping unit is not a road compactor; tine is not rebar; hydraulic mineral and ester formulations differ; engine public item count is not Mass; filled assemblies do not create duplicate prefills. Supplied process water is not environmental resource or effluent. Keep unsupported UUID blank. |  |
| `validate_measurement` | all quantities | Verify original property/unit, actual collection, q_item/M conversion, same serial/configuration/site/period, accepted count, calibration, fuel balance and causal allocation denominator. Energy, volume and item count must not be renamed Mass. Unknown amount is not zero. |  |
| `validate_species` | conditional trial releases | Require measured attributable species/outlet and exact medium. Selected fossil CO2, NO and NO2 describe immediate releases to air, unspecified; verify fossil fuel provenance. Do not substitute total NOx, N2O, nitrogen/nitrite, biogenic CO2, water/soil or long-term releases. Captured oxidized filter dust is a waste, not elemental airborne iron. No emission quantity is mandatory. |  |
| `validate_acceptance` | work units and complete vehicle | Trace actual component performance/leak tests, complete structural/electrical/hydraulic/brake checks, measuring-system calibration and attributable factory track-trial results/rework/release for the same configuration. Document applicable contract/jurisdiction when claimed; public historical example does not certify this vehicle. No universal pressure, vibration frequency, cycle count or productivity threshold is imposed. | `plasser-production` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete diesel-hydraulic plain-line tamping vehicle foreground manufacture |
| downstream_use | secondary_dataset; background_dataset after qualified review and compatible upstream linkage |
| allowed_use | Manufacturing supply-chain models matching diesel/hydraulic route, gauge/work-unit/configuration, complete measured net scope, supplier boundary, gate/site/period |
| excluded_use | Track-maintenance or passenger/freight service, lifetime footprint, equal-mass tamping performance, other power/maintenance routes and unsupported complete cradle-to-gate |
| required_metadata | builder/model/serial/drawing revision; plain-line and track gauge/sleeper compatibility; tamping-head/tine material/tip/count and vibration/squeeze configuration; lifting/lining clamp and geometry control; frame/bogie/wheelset/drive/brake scope; diesel engine/transmission and hydraulic pump/actuator/fluid formulation; cab/electronics/starter battery and actual safety/AC options; supplier assembly inclusions/prefills; actual installed service-fluid/fixed-ballast state; accepted complete fuel-excluded net M in kg from traceable actual same-vehicle weighing; excluded persons/loose ballast/spares/packaging/test loads, separately measured fuel at gate and integral detached delivered fittings; manufacturing/commissioning gate/site/period; upstream linkage and resource allocation |
| required_quality_disclosure | Identity/quantity/mass-provenance gaps, uncertainty, absent optional stages, complete actual BOM, causal allocation, fuel balance, acceptance and unlinked supplier upstream |
| update_trigger | Diesel/transmission, hydraulic/cooling chemistry, tamping/lifting/gauge/brake configuration, frame/finish, supplier completeness, measured M corrections, trial boundary or manufacturing site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `plasser-production` | literature | [Plasser & Theurer: Production](https://www.plassertheurer.com/en/company/production) | Manufacturer headings Cutting Shop, Welding Shops, Part Production, Complex Cylinders, Work Unit Production Shop, Bogie and Gearbox Production Shop, Electrical Pre-Assembly, (Final) Assembly and Commissioning. Supports stage distinctions and manufacturer-specific pre-installation test/commissioning context, not universal stock quantities, chemistry, pressures, temperatures or trial cycles. Actual site records govern included processes. |
| `matisa-compact` | literature | [MATISA: Compact tamping machines](https://www.matisa.ch/brochures_pdf/en/bourreuses_compactes_en.pdf) | Undated model brochure, PDF p.3 (printed pp.4–5) B 45 D: plain-line vehicle, bogies, cabs and independent tamping units. Configuration example only; model-specific tool count, frequency, productivity, weight and numerical performance are not adopted. Other turnout models are outside scope. |
| `plasser-csm-case` | literature | [Plasser & Theurer: used 09-32 CSM](https://www.plassertheurer.com/en/fleet/used-machines/09-32-csm) | Technical Specifications and Description identify a 1996 machine with diesel drive, hydraulic tamping/lifting/lining and pneumatic brakes. Historical configuration fact only; resale product itself is excluded. No published mass, engine rating, vibration frequency, tank capacity, geometry or named-oil chemistry is adopted as a present requirement or quantity. |
| `plasser-hybrid` | literature | [Plasser & Theurer: Unimat 09-32/4S Dynamic E3](https://www.plassertheurer.com/en/machine/universal-tamping-machines/unimat-09-32-4s-dynamic-e3) | Hybrid drive paragraph: diesel or overhead-electric motor can power hydraulic work units. Excluded counterexample prevents treating hydraulic actuation as proof of diesel-only supply. No operating noise, emissions saving, battery benefit or production factor is adopted. |
