---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.forestry-harvester
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wheeled diesel-hydraulic forestry harvester manufacture

## 1. Scope and Applicability

New complete self-propelled wheeled diesel-hydraulic single-grip cut-to-length forestry harvesters with a matched boom and harvester head. Cover actual component fabrication when done in scope, supplier-complete assemblies, hydraulic/powertrain/control and head integration, actual factory commissioning and acceptance, net-mass verification and conditional shipping protection. The selected configuration must be explicit; this is a narrower methodology within CPC 44198, not coverage of every agricultural machine.

Exclude forwarders and skidders, crop harvesters, complete agricultural tractors, stand-alone heads and replacement parts, excavator-only attachment carriers, tracked feller-bunchers, chippers, battery/electric or undeclared power routes, refurbished machinery, forest harvesting/log yield, use-phase fuel/emissions, transport services, maintenance and end of life. Purchased finished subassemblies are inputs, not a claim to have measured their manufacturing foreground.

Public manufacturer descriptions constrain product and supply-state interpretation, not factory quantities or universal acceptance thresholds. PONSSE brochure is historical configuration/manufacturing context only; Komatsu catalogue options and approximate weights are not a measured net M. Actual production/BOM, acceptance/weighing, SDS and supplier originals remain required. Candidate scientific review is pending. Receipt-to-acceptance operating foreground is not complete cradle-to-gate without compatible verified upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.forestry-harvester |
| classification_refs | CPC 3.0 44198 Other agricultural machinery n.e.c.; narrower selected forestry route; context only |
| covered_products | New complete self-propelled wheeled diesel-hydraulic single-grip cut-to-length forestry harvesters with a matched boom and harvester head. Cover actual component fabrication when done in scope, supplier-complete assemblies, hydraulic/powertrain/control and head integration, actual factory commissioning and acceptance, net-mass verification and conditional shipping protection. The selected configuration must be explicit; this is a narrower methodology within CPC 44198, not coverage of every agricultural machine. |
| excluded_products | Exclude forwarders and skidders, crop harvesters, complete agricultural tractors, stand-alone heads and replacement parts, excavator-only attachment carriers, tracked feller-bunchers, chippers, battery/electric or undeclared power routes, refurbished machinery, forest harvesting/log yield, use-phase fuel/emissions, transport services, maintenance and end of life. Purchased finished subassemblies are inputs, not a claim to have measured their manufacturing foreground. |
| representative_product | One accepted complete configured single-grip wheeled diesel-hydraulic forestry harvester |
| production_route | Conditional structure fabrication; carrier/boom/hydraulic/control assembly; matched head integration; conditional cleaning; factory functional/mass acceptance; conditional protection |
| market_state | New accepted complete configured machine at declared factory gate, no timber payload |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a specified complete configured forestry harvester |
| How much | 1 kg accepted machine net mass; normalize per-unit records using measured M |
| How well | Actual matching head/boom, power/hydraulic/control configuration and producer release criteria; equal mass does not establish equal cutting capability or safety |
| How long or cycle | One manufacturing/acceptance cycle; no forest-use life, log volume or operating-hour service |
| reference_flow_link | finished_harvester |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete wheeled diesel-hydraulic single-grip forestry harvester |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model/site/period; machine serial and BOM revision; wheel/axle/tyre configuration and optional tracks; engine fuel/power route and supplied auxiliaries; chassis/boom/head/rotator revision and supplied completeness; actual hydraulics, cab, controls, installed fluid grades and charges; fabrication versus received components and subcontractor gates; actual acceptance and calibration; measured same-configuration net M kg, scale/tare/uncertainty and fuel/payload/protection exclusions; stock/meter/test/waste balances; actual allocation drivers and upstream-link gaps |

Declare qualifiers in actual dataset metadata or notes; missing qualifiers make reference incomplete. M includes matched head/boom, wheels, powertrain/cab/controls and recorded installed fluids in the accepted state. Exclude timber, free test fuel, racks, packaging, temporary fixtures and loose spares. Catalogue operating weight, shipping gross mass or fuel-tank capacity cannot replace net M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Physically weigh the accepted complete configured machine with head/boom on a suitable calibrated vehicle/platform weighing system; retain actual readouts, calibration, uncertainty, measured tare, serial/BOM, installed fluids and signed release. If detached head/boom is separately weighed for delivery, retain each actual physical measurement and a non-overlapping mass reconciliation to the same accepted complete unit. Remove free test fuel or quantify actual separately measured tare; do not subtract catalogue capacity times guessed density. Same-configuration aggregation needs actual accepted counts and traceable unit mass originals. |
| `energy_units` | each electricity row | Net calorific value | MJ | Use verified energy-unit conversion 1 kWh = 3.6 MJ. Retain actual supply/provider and meter boundary for assembly, machining and commissioning; no nameplate power or guessed utilization substitutes for measurement. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received traceable stock and specified supplier-complete subassemblies |
| starting_condition_role | Receipt-to-acceptance operating manufacturing foreground |
| product_classification_scope | New complete self-propelled wheeled diesel-hydraulic single-grip cut-to-length forestry harvesters with a matched boom and harvester head. Cover actual component fabrication when done in scope, supplier-complete assemblies, hydraulic/powertrain/control and head integration, actual factory commissioning and acceptance, net-mass verification and conditional shipping protection. The selected configuration must be explicit; this is a narrower methodology within CPC 44198, not coverage of every agricultural machine. |
| recursive_input_rule | No same complete harvester as input to its own manufacture. Finished chassis/boom/head inputs replace their contained stock and upstream fabrication; internal transfer is not a second purchase |
| upstream_dataset_requirement | Match actual assembly completeness, material grade, engine/off-road route, head/rotator configuration, oil/chemical state, site/period and original flow property/unit. Missing or incompatible links remain gaps |
| disclosure | manufacturer/model/site/period; machine serial and BOM revision; wheel/axle/tyre configuration and optional tracks; engine fuel/power route and supplied auxiliaries; chassis/boom/head/rotator revision and supplied completeness; actual hydraulics, cab, controls, installed fluid grades and charges; fabrication versus received components and subcontractor gates; actual acceptance and calibration; measured same-configuration net M kg, scale/tare/uncertainty and fuel/payload/protection exclusions; stock/meter/test/waste balances; actual allocation drivers and upstream-link gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all processes | Include actual receipt, in-scope fabrication, subcontractor gates, assembly/fills/flush, commissioning/acceptance, rework and protection. Declare actual excluded long-lived factory infrastructure and tooling; separately traced capital contribution may be added transparently. Forest use, timber production, subsequent delivery and maintenance are excluded. Outsourced service and its contained exchanges cannot be counted twice. |  |
| `boundary_actual_exchanges` | actual route inventory | Cards are specific conditional starting exchanges, not a complete universal bill. Add each actual machining coolant, coating ingredient, shield-gas constituent, installed coolant/lubricant, refrigerant, battery, hose/fastener, test timber species and destination, cutting-tool wear, filter residue and measured emission when applicable. Separate chemicals and environmental media. Record evidenced not_applicable versus missing; no automatic welding fume, exhaust species or VOC emission. Do not claim complete LCI until actual full BOM and operations reconcile. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `structure` | Conditional structural fabrication | conditional | Only actual in-house chassis/boom fabrication | foreground | one accepted same-configuration finished unit, normalized using M |
| `assembly` | Carrier powertrain, cab and hydraulic assembly | required | Complete wheeled diesel-hydraulic carrier | foreground | one accepted same-configuration finished unit, normalized using M |
| `head` | Matched single-grip head integration | required | Actual matched head on complete machine | foreground | one accepted same-configuration finished unit, normalized using M |
| `cleaning` | Conditional assembly cleaning | conditional | Only actual cleaning of assembly surfaces | foreground | one accepted same-configuration finished unit, normalized using M |
| `acceptance` | Configured machine functional and mass acceptance | required | Each accepted complete configured harvester | foreground | one accepted same-configuration finished unit, normalized using M |
| `packing` | Conditional factory-gate protection | conditional | Only actual supplied shipping protection | foreground | one accepted same-configuration finished unit, normalized using M |

Conditional structural fabrication or received complete structures feed carrier assembly, then matched head integration and actual cleaning, commissioning and acceptance. Protection is conditional. No finished component and its contained stock double counting. Each conditional card needs actual route/SDS/measurement evidence.

### Process: Conditional structural fabrication (`structure`)

Declare received versus made steel structures. Actual cutting, forming, machining, fixture joining, weld inspection and rework follow producer drawings and procedures. Finished purchased structures replace contained stock and fabrication. Catalogue factory descriptions do not prescribe universal steel grades, welding recipes or heat treatment.

#### Inputs

##### Product flows

###### Uncoated low-alloy structural steel plate (`steel_plate`)

Only actual drawing-grade plate consumed for in-house chassis/boom fabrication; supplier state and net issues/returns required. Exclude plate contained in finished assemblies.

- Selected flow: Uncoated low-alloy structural steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `ponsse`

###### ER70S-6 carbon-steel welding wire (`welding_wire`)

Only if actual qualified weld procedure uses this specification; exact net issue/return. Other filler specifications need separate rows.

- Selected flow: ER70S-6 carbon-steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `ponsse`

###### Gaseous argon welding shielding supply (`argon`)

Only actual gaseous argon supply measured net consumption; each blend constituent separate, no default gas density or liquid-argon substitution.

- Selected flow: Gaseous argon welding shielding supply
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `ponsse`

###### Factory-intake alternating-current electricity (`structure_electricity`)

Actual metered attributed supply, kWh converted to MJ; identify voltage/provider and causal active/idle driver, no rated-power times guessed hours.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `ponsse`

#### Outputs

##### Waste flows

###### Low-alloy steel fabrication offcut waste (`steel_scrap`)

Only actual weighed segregated offcuts to documented destination; no automatic recycling credit.

- Selected flow: Low-alloy steel fabrication offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `ponsse`

### Process: Carrier powertrain, cab and hydraulic assembly (`assembly`)

Install actual matched engine, transmission, axles, wheels, cab, boom, hydraulics and controls to the configured bill of materials. Record supplied assembled states and integrated contents; avoid adding materials already contained in assemblies. Actual fill/flush, hose connections, fastening and subcontracted assembly are in scope. Do not confuse engines for road vehicles or aircraft with this off-road powertrain.

#### Inputs

##### Product flows

###### Finished wheeled forestry-harvester chassis assembly (`chassis`)

Only received configured finished chassis; suppress contained fabrication inputs, record supplier gate and net mass.

- Selected flow: Finished wheeled forestry-harvester chassis assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Finished forestry-harvester hydraulic boom assembly (`boom`)

Only actual matched received boom including its specified integral cylinders; exclude duplicate contained steel/cylinders.

- Selected flow: Finished forestry-harvester hydraulic boom assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Off-road compression-ignition diesel engine assembly (`engine`)

Actual forestry carrier diesel engine supply state and auxiliaries. Do not substitute road/aircraft engines, propulsion turbines or a generic excluded classification. No default displacement or installed mass.

- Selected flow: Off-road compression-ignition diesel engine assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Forestry-harvester hydrostatic transmission assembly (`transmission`)

Actual matched supplied transmission; count included pump/motor once, no generic gearbox substitution.

- Selected flow: Forestry-harvester hydrostatic transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Forestry-harvester drive axle assembly (`axle`)

Actual specified drive axle assembly net mass and number, including declared integral contents.

- Selected flow: Forestry-harvester drive axle assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Pneumatic forestry wheel assembly (`wheel`)

One specified rim and mounted pneumatic forestry tyre, recorded actual number/dimensions; omit separate tyre/rim if contained. Optional bogie tracks require separate exchange and matching configuration M.

- Selected flow: Pneumatic forestry wheel assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Finished enclosed forestry-harvester cab assembly (`cab`)

Actual supplied cab completeness including declared glazing, seat and controls; no redundant component input. Actual refrigerant charge only if separately installed, exact species required.

- Selected flow: Finished enclosed forestry-harvester cab assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Axial-piston forestry working-hydraulic pump assembly (`pump`)

Only separately supplied working pump not contained in transmission/boom/head; actual pressure/flow compatibility.

- Selected flow: Axial-piston forestry working-hydraulic pump assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Forestry-harvester electronic controller module (`controller`)

Actual installed hardware module, not software service or a generic electrical collection.

- Selected flow: Forestry-harvester electronic controller module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Insulated copper machine wiring harness (`harness`)

Only separately installed specified harness; preserve connector/insulation and supplier fabrication state.

- Selected flow: Insulated copper machine wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Mineral hydraulic oil formulated fill (`hydraulic_oil`)

Actual supplier grade/viscosity/additive formulation and net fill/flush balance; lubricant mass inside accepted unit distinguished from test consumption and discarded flush oil.

- Selected flow: Mineral hydraulic oil formulated fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

###### Factory-intake alternating-current electricity (`assembly_electricity`)

Actual metered attributed supply, kWh converted to MJ; identify voltage/provider and causal active/idle driver, no rated-power times guessed hours.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

#### Outputs

##### Waste flows

###### Spent mineral hydraulic flushing oil waste (`flush_oil_waste`)

Only actual separately transferred used flushing oil with documented contamination and destination; not inevitable leak.

- Selected flow: Spent mineral hydraulic flushing oil waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `komatsu`

### Process: Matched single-grip head integration (`head`)

Include the specified single-grip head with rotator, feed rollers, delimbing knives, saw unit and measurement/control interfaces. Install received head as one physical assembly; its contained saw chain, motors and steel are not additional upstream inputs. Actual separately installed items require distinct identity. Head dry catalogue weight is not complete-machine M.

#### Inputs

##### Product flows

###### Finished single-grip forestry harvester head assembly (`harvester_head`)

One matched received head including configured rotator, feed rollers, knives, saw and controls; suppress already-contained metal, motors and saw chain. Actual separately supplied rotator changes this identity.

- Selected flow: Finished single-grip forestry harvester head assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_head.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_head`
- Sources: `ponsse`

###### Factory-intake alternating-current electricity (`head_electricity`)

Actual metered attributed supply, kWh converted to MJ; identify voltage/provider and causal active/idle driver, no rated-power times guessed hours.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_head.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_head`
- Sources: `ponsse`

### Process: Conditional assembly cleaning (`cleaning`)

Record actual aqueous or solvent cleaning separately with recipe/SDS, net issues, recovery and residues. Water and IPA rows are independent conditional examples, not required universal recipes. Actual outsourced coating or factory painting must be added with ingredient-specific measured exchanges when performed; no unidentified paint or obligatory VOC row.

#### Inputs

##### Product flows

###### Process Water (`cleaning_water`)

Only actual supplied technosphere process water measured in kg; natural withdrawal and treatment wastewater distinct.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources:

###### Anhydrous isopropanol cleaning solvent (`isopropanol`)

Only actual CAS67-63-0 anhydrous IPA net issues/recovery, not diluted disinfectant.

- Selected flow: Anhydrous isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources:

###### Factory-intake alternating-current electricity (`cleaning_electricity`)

Actual metered attributed supply, kWh converted to MJ; identify voltage/provider and causal active/idle driver, no rated-power times guessed hours.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources:

#### Outputs

##### Waste flows

###### Oily aqueous machine-cleaning wastewater (`effluent`)

Only actual treatment transfer with measured composition/destination; not environmental water flow.

- Selected flow: Oily aqueous machine-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources:

#### Outputs

##### Elementary flows

###### isopropanol (`isopropanol_air`)

Only CAS67-63-0 species-specific measured emission or closed solvent balance, immediate air/unspecified; not all solvent issues, water/soil/indoor/long-term release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources:

### Process: Configured machine functional and mass acceptance (`acceptance`)

Record producer release criteria and actual steering/brake/drive, hydraulic leakage and boom/head-control checks, measurement calibration and applicable guarding/safety inspections. Factory running fuel and exhaust belong here only when actually consumed/released. Trials for calibration stay distinct from forest operation; no log-yield functional unit. Weigh the complete configured unit with matched head and boom using calibrated physical metrology.

#### Inputs

##### Product flows

###### B0 fossil diesel factory-test fuel (`diesel`)

Only actual documented B0 fossil test fuel, net consumption after measured returns/stocks. Biofuel blends require individual identity and fossil/biogenic accounting. No forest-use fuel included.

- Selected flow: B0 fossil diesel factory-test fuel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `komatsu`

###### Factory-intake alternating-current electricity (`acceptance_electricity`)

Actual metered attributed supply, kWh converted to MJ; identify voltage/provider and causal active/idle driver, no rated-power times guessed hours.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `komatsu`

#### Outputs

##### Product flows

###### Accepted complete wheeled diesel-hydraulic single-grip forestry harvester (`finished_harvester`)

One configured complete new machine including matched head, boom, carrier wheels, powertrain, cab, controls and installed fluids; exclude free test fuel, timber payload, shipping protection, fixtures and loose spares.

- Selected flow: Accepted complete wheeled diesel-hydraulic single-grip forestry harvester
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `komatsu`

### Process: Conditional factory-gate protection (`packing`)

Record actual protection items separately; exclude protection and transport racks from net M. No assumed pallet quantity or reusable rack life. Subsequent road/forest transport and service are excluded.

#### Inputs

##### Product flows

###### Corrugated cardboard box (`carton`)

Only actual supplied measured box excluded from M.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`protective_film`)

Only actual LDPE protective foil net issues, excluded from M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Factory-intake alternating-current electricity (`packing_electricity`)

Actual metered attributed supply, kWh converted to MJ; identify voltage/provider and causal active/idle driver, no rated-power times guessed hours.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | Directly attribute serialized BOM, job issues/returns, stage meters and commissioning including actual rework. Inseparable resources use measured causal station/machine occupation and actual load: share = order driver / sum of covered order drivers. Document covered period, standby and denominator; equal machine counts, catalogue mass or rated hydraulic power are not automatic drivers. |  |
| `allocation_tests` | production commissioning and qualification | Actual unit commissioning is attributed to that accepted unit. Separate independent R&D/prototype or forestry demonstrations from production. Shared qualification requires original applicability, covered orders, actual causal driver and sensitivity. Destroyed units and reject assemblies are not accepted output; no assumed factory test schedule or amortized service life. |  |
| `allocation_recovery` | scrap and rework | Trace each actual scrap, recovered fluid and waste transfer once. Internal rework remains with production and stock balances. No avoided-metal credit solely for recyclability; actual saleable co-product allocation requires original causal/economic evidence and sensitivity. No wood product co-output from forest harvesting is in this manufacturing reference. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | accepted physical weighing record | model; configuration; serial number; accepted net mass M; part number/revision; complete machine scale reading; fixture tare; head/boom/wheel configuration; installed fluid and free fuel state; calibration/uncertainty; drawing; signed release | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | actual manufacturing and acceptance period | declared complete-machine acceptance gate | accepted net mass per unit | actual calibrated physical complete-machine weighing, measured tare and controlled drawing/release |
| `cp_structure` | `structure` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual drawings, stock issues/returns, fabrication orders, qualified joining procedure, meters and segregated waste transfers | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_assembly` | `assembly` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read serialized BOM, supplier configurations, assembly/fill/flush jobs, calibrated issues and meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_head` | `head` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read head/rotator serial and revision, supplier contained BOM, compatibility, connection/calibration and meter records | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_cleaning` | `cleaning` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual cleaning SDS/recipe, net issues/recovery, residue balances, measured species and waste transfers | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_acceptance` | `acceptance` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual test/acceptance and mass records, configured machine serial, calibrated scales/meters, fuel issues/returns and actual exhaust measurement | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_packing` | `packing` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual protection net issues/returns, tare and reusable-rack movements | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Require mass_record_provenance actual physical configured machine weighing with matched head/boom, calibrated suitable scale, measured tare and positive M kg. Reconcile serial/BOM, installed fluids and removed free fuel, timber, protection and fixtures. Detached delivered assemblies need actual non-overlapping physical records. Catalogue minimum/typical weight or operating mass cannot establish this M. Missing actual originals requires scientific/data review. | actual weighing, tare/calibration, serialized configuration and signed acceptance |
| `quality_identity` | all exchanges | Check one precise physical/chemical identity, supplied completeness, route and actual public reference property/unit. Complete head is not generic agricultural machinery; mineral formulated oil is not elementary crude oil; free test fuel is not installed lubricant; technical water is not a natural resource or wastewater. Preserve species/media and actual concentration. Keep unmatched identities specific and unresolved. | actual supplier BOM/specification/SDS and public flow/property/unit originals |
| `quality_configuration` | cp_assembly; cp_head; cp_acceptance | Require matching head/rotator/boom, carrier axle/wheel configuration, power/hydraulic/control compatibility and actual producer release criteria. Preserve inspection and calibration originals and actual rework. A catalogue lists possible equipment, not an accepted BOM; head dry mass and power rating cannot proxy configured net mass or test consumption. No universal safety/load/pressure threshold or test timber demand inferred. | actual configuration/BOM, factory test, calibration and release |
| `quality_balance` | material, fluids, fuel, water and species | Reconcile measured stock and issues/returns with incorporated assemblies, fabrication losses, rework and waste. Separate oil incorporated in M, factory flush waste and operational consumption. Test fuel accounting needs measured stock/returns and declared fossil/biogenic fraction. Actual exhaust carbon dioxide, nitrogen oxides and particles require separate measured chemical species/media before adding identities; no NOx as NO2 or all diesel as emitted CO2. IPA-air requires actual species measurement or closed solvent balance after recovery and retention. Water supply and treatment effluent are separate. | actual stage material/solvent/fuel/species balances and waste destinations |
| `quality_coverage` | dataset and upstream links | Distinguish measured, calculated, missing and evidenced not_applicable. Reconcile actual entire BOM and operations including painting, fills, refrigerants, batteries, tools and exhaust when present, not merely these candidate cards. Disclose capital exclusion, allocation and uncertainties. Full cradle-to-gate requires verified compatible upstream datasets. Contract checking does not establish completed actual factory data or scientific approval. | actual complete BOM/operations and transparent gap register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference and finished_harvester | Exact reference-product name equals finished_harvester output. Positive current same-configuration M kg uses cp_mass and normalize_mass. Blank candidate UUID must register that precise output row in unresolved_flow_identities. Physical net mass records and complete matching head/boom configuration are required; no catalogue mass. |  |
| `validate_basis` | all rows/protocols | Require identical ordered lower-case row/rule/protocol IDs and actual projected references in both languages. Explicit q_item per accepted unit, M kg, same-configuration counts and conversion must agree. Do not rewrite a public Number/Area/Energy property as Mass to force identity. |  |
| `validate_route` | assembly and tests | Require actual supplier-contained BOM and fabrication scope, off-road diesel hydraulic route, matching head/rotator and actual commissioning/release records. Test fuel and individual exhaust exchanges only with evidence. Manufacturer catalogue context is not this factory empirical inventory. Missing route or metrology originals requires review. |  |
| `validate_use` | dataset use | Disclose configuration, net-mass evidence, supply gates, missing actual exchanges, unresolved identities and upstream compatibility. Equal kg does not mean equal cutting capability, forest productivity, safety or service life. Candidate is neither published nor scientifically approved. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset and background_dataset after actual completion and review |
| downstream_use | Configured forestry-harvester manufacturing input to separately bounded lifecycle models |
| allowed_use | Manufacturing comparisons of matching configuration/supply gates with actual M and upstream gaps disclosed |
| excluded_use | Exclude forwarders and skidders, crop harvesters, complete agricultural tractors, stand-alone heads and replacement parts, excavator-only attachment carriers, tracked feller-bunchers, chippers, battery/electric or undeclared power routes, refurbished machinery, forest harvesting/log yield, use-phase fuel/emissions, transport services, maintenance and end of life. Purchased finished subassemblies are inputs, not a claim to have measured their manufacturing foreground. |
| required_metadata | manufacturer/model/site/period; machine serial and BOM revision; wheel/axle/tyre configuration and optional tracks; engine fuel/power route and supplied auxiliaries; chassis/boom/head/rotator revision and supplied completeness; actual hydraulics, cab, controls, installed fluid grades and charges; fabrication versus received components and subcontractor gates; actual acceptance and calibration; measured same-configuration net M kg, scale/tare/uncertainty and fuel/payload/protection exclusions; stock/meter/test/waste balances; actual allocation drivers and upstream-link gaps |
| required_quality_disclosure | Measured/calculated/missing data, actual weighing/acceptance and BOM originals, identity/metrology gaps, capital exclusion, allocation and uncertainty; candidate with scientific review pending |
| update_trigger | Actual chassis/boom/head/rotator/wheel or power route, supplied completeness, oil/fuel recipe, commissioning/mass method, factory gate or upstream changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ponsse` | literature | [PONSSE Product Line](https://cdn-ponsse.contenthub.fi/api/v1/cdn/19280643) | PDF page 3, printed 4–5: factory component manufacture, modular assembly and recorded configurations; PDF page 7, printed 12–13: matched head/crane/control and tyre options. PDF metadata dated February 2023; historical qualitative context only, not current factory requirements or numeric LCI. No catalogue weight, lifetime, power, component ratio or production intensity adopted. |
| `komatsu` | literature | [Komatsu 931-4 wheeled harvester](https://www.komatsuforest.com/forest-machines/our-wheeled-harvesters/931-4) | HTML Engine, Boom, Heads, Hydraulic system, Transmission, Weight and General information: diesel/hydraulic matched machine configuration and explicit market/equipment limitations. Undated current page is descriptive, not universal mandatory equipment or net acceptance weighing. No approximate weight, pressure, fuel capacity, power or emission factor adopted. |
