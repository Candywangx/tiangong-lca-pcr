---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.electric-motorcycle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured battery-electric road motorcycles

## 1. Scope and Applicability

This PCR covers final manufacturing integration of complete battery-electric two-wheel road motorcycles, including scooter-form motorcycles, using declared completed component gates. The representative architecture has a tubular-steel frame, belt/reduction drive, permanent-magnet motor, lithium-ion traction pack, onboard charger and hydraulic brakes. It excludes pedal-assisted bicycles, side-cars, combustion/hybrid motorcycles, three-wheel vehicles, isolated batteries/motors, charging infrastructure and incomplete kits. Different structures or chemistries require an expressly supported route.

The manufacturing unit ends at configured factory acceptance. Customer riding, vehicle-km, passenger transport, charging in use, maintenance and end-of-life are outside scope. This is an integration foreground, not a complete cradle-to-gate inventory. The historical BMW example documents both final assembly and local motor/pack work: declaring completed module gates abstracts that earlier work and never proves that the whole BMW factory outsourced it. Link actual upstream component processes, including on-site earlier stages, before a broader claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.electric-motorcycle |
| classification_refs | CPC 3.0:49913; narrower |
| covered_products | Complete configured battery-electric two-wheel road motorcycles of the declared component-gate architecture |
| excluded_products | Pedal-assisted bicycles; side-cars; combustion/hybrid or three-wheel vehicles; standalone parts; charging equipment; riding/repair services |
| representative_product | A scooter-form road motorcycle with steel frame, belt/reduction drive and liquid-cooled motor; historical CE04 structure example, not a default recipe |
| production_route | Finished component receipt; chassis assembly; drive/electrical/body integration; conditional fluid fill and cleaning; actual commissioning and net-mass release; conditional packing |
| market_state | New complete accepted motorcycle with declared installed pack and retained fluids |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of the accepted complete configured battery-electric motorcycle |
| How much | 1 kg |
| How well | Declared model, installed battery and equipment with actual signed assembly/acceptance evidence; no implied riding-performance equivalence |
| How long or cycle | One manufacturing campaign; no assumed service life, mileage or battery cycles |
| reference_flow_link | finished_motorcycle |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Motorcycles and cycles fitted with an auxiliary motor, other than those with reciprocating internal combustion piston engines, side-cars `26a257ab-4c71-475b-9059-73b4689fe8c8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/serial; two-wheel road configuration; component gates/make-or-buy; frame/drive/brakes; motor/inverter; full installed pack chemistry/voltage/containment and measured kg; auxiliaries/charger; prefill/retained fluids; complete net M kg; factory tests; site/period; supplied accessories and packaging exclusions |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `physical_component_mass` | component rows | Mass | kg | Collect independent actual supplied installed component kg with original weight/tare/inclusion and count trace. Do not use nominal battery kWh, power rating or catalogue vehicle weight as kg. Preserve public Number/Energy when a valid matching identity and actual conversion exist; never rewrite it as Mass. |
| `electricity_units` | electricity rows | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Measure actual kWh at the declared supply interface and convert1kWh=3.6MJ. Retain imports/exports separately and charging meter boundary. |
| `fluid_state` | fluid rows | Mass | kg | Wet supplied formulation mass, actual concentration and retained net fill; precharged modules counted once. Volume needs measured batch density and temperature, never an assumed water density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Completed supplied chassis, powertrain, battery/electrical and body components at their documented gates; actual separately received fluids and utilities |
| starting_condition_role | Integration foreground; earlier material production, welding/coating, motor/cell/pack manufacture are abstracted upstream even if on-site before this gate |
| product_classification_scope | CPC3.0:49913 narrower complete battery-electric two-wheel road motorcycle |
| recursive_input_rule | A same-category purchased complete motorcycle remains one visible input to a separately declared operation; do not recursively duplicate its manufacture or hide it as parts |
| upstream_dataset_requirement | Match each actual component/chemical/electricity/packaging and receiver/transport service to actual technology, geography and time or disclose specific gaps |
| disclosure | Module inclusions and prefill; same-site abstracted stages; actual tests/repair/idle; missing BOM and links; packaging, return and recovery destinations |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | all_processes | Record actual received finished-module scope and chronological operations. Do not simultaneously count finished frame and its steel/coating upstream, or finished battery and its cells/electrolyte. Separate receipts only when outside supplied scope. Extend locally made modules with their actual atomic operations before completeness claims. | bmw-ce04-architecture-2021; bmw-ce04-production-2021 |
| `boundary_terminal` | finished_motorcycle | End at accepted configured vehicle factory gate; external charger, customer use, maintenance, lifetime disposal and riding distance are excluded. Manufacture1kg cannot compare transport services without an independent functional model. |  |
| `boundary_exchanges` | all_processes | Add every missing physical BOM item, actual utility, packaging and observed waste/release as a separate card before complete inventory claims. No generic parts/materials/VOC/waste exchange and no presumed mandatory emission. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `chassis` | Chassis running-gear and brake assembly | required | Received finished frame, fork, swingarm, wheels, tyres and brakes | foreground | 1 kg accepted complete configured motorcycle |
| `powertrain` | Electric powertrain mechanical integration | required | Received finished motor, inverter, reduction gearbox, belt and cooling radiator | foreground | 1 kg accepted complete configured motorcycle |
| `electrical` | Traction pack and onboard electrical integration | required | Completed supplied pack and matched harness, onboard charger and controls | foreground | 1 kg accepted complete configured motorcycle |
| `finishing` | Body seat lamp and instrument installation | required | Actual installed finished body and equipment; expand full model BOM | foreground | 1 kg accepted complete configured motorcycle |
| `fluids` | Conditional separate fluid filling and leak check | conditional | Actual separately supplied coolant/brake fluid not already included in prefilled modules | foreground | 1 kg accepted complete configured motorcycle |
| `acceptance` | Configuration commissioning tests and net-mass acceptance | required | Actual approved tests, charger input and complete physically weighed configuration | final_product | 1 kg accepted complete configured motorcycle |
| `cleaning` | Conditional final IPA cleaning | conditional | Only actual approved performed isopropanol cleaning | foreground | 1 kg accepted complete configured motorcycle |
| `packing` | Conditional dispatch packaging | conditional | Only actual separately supplied dispatch packaging | foreground | 1 kg accepted complete configured motorcycle |

### Process: Chassis running-gear and brake assembly (`chassis`)

#### Inputs

##### Product flows

###### Finished coated tubular-steel motorcycle main frame (`frame`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Finished coated tubular-steel motorcycle main frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete telescopic motorcycle front fork (`front_fork`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete telescopic motorcycle front fork
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete single-sided motorcycle rear swingarm (`swingarm`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete single-sided motorcycle rear swingarm
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete motorcycle rear spring strut (`rear_strut`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle rear spring strut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Finished motorcycle front cast-alloy wheel (`front_wheel`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Finished motorcycle front cast-alloy wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Finished motorcycle rear cast-alloy wheel (`rear_wheel`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Finished motorcycle rear cast-alloy wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Finished pneumatic motorcycle front tyre (`front_tyre`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Finished pneumatic motorcycle front tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Finished pneumatic motorcycle rear tyre (`rear_tyre`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Finished pneumatic motorcycle rear tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete motorcycle front hydraulic disc-brake assembly (`front_brake`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle front hydraulic disc-brake assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete motorcycle rear hydraulic disc-brake assembly (`rear_brake`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle rear hydraulic disc-brake assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Finished steel assembly bolt of one declared grade (`steel_bolt`)

Record one certified steel bolt design separately supplied for this configuration, measured kg and installed count. Split different designs/grades and exclude bolts already included in supplied assemblies; public generic fastener identity supplies no default mass or roadworthiness approval.

- Selected flow: Steel fasteners `cad280ce-7850-46a1-9060-4f8b68bf5532`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### User-side low-voltage AC factory electricity (`electricity_chassis`)

Measure attributable stage equipment, commissioning, idle and rework electricity at the user-side meter. Keep the actual geography, voltage and provider interface; current German35–330kV public grid identity is not a low-voltage factory supply. Renewable procurement is not grid average merely because voltage matches. Verify a matching actual supplier identity before linking. Meter charger AC input once; rated pack capacity and recovered test energy are not duplicate manufactured product inputs.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Electric powertrain mechanical integration (`powertrain`)

#### Inputs

##### Product flows

###### Complete liquid-cooled permanent-magnet motorcycle traction motor (`motor`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete liquid-cooled permanent-magnet motorcycle traction motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete enclosed motorcycle traction inverter (`inverter`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete enclosed motorcycle traction inverter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete single-stage motorcycle reduction gearbox (`gearbox`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete single-stage motorcycle reduction gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Finished toothed motorcycle drive belt (`drive_belt`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Finished toothed motorcycle drive belt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete motorcycle motor-cooling radiator (`radiator`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle motor-cooling radiator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### User-side low-voltage AC factory electricity (`electricity_powertrain`)

Measure attributable stage equipment, commissioning, idle and rework electricity at the user-side meter. Keep the actual geography, voltage and provider interface; current German35–330kV public grid identity is not a low-voltage factory supply. Renewable procurement is not grid average merely because voltage matches. Verify a matching actual supplier identity before linking. Meter charger AC input once; rated pack capacity and recovered test energy are not duplicate manufactured product inputs.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Traction pack and onboard electrical integration (`electrical`)

#### Inputs

##### Product flows

###### Complete enclosed lithium-ion motorcycle traction battery pack (`battery_pack`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete enclosed lithium-ion motorcycle traction battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete supplied low-voltage motorcycle auxiliary battery (`aux_battery`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete supplied low-voltage motorcycle auxiliary battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete finished motorcycle high-voltage wiring harness (`harness`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete finished motorcycle high-voltage wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete motorcycle onboard battery charger (`charger`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle onboard battery charger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete motorcycle high-to-low-voltage DC converter (`converter`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle high-to-low-voltage DC converter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete motorcycle hydraulic ABS control module (`abs_controller`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle hydraulic ABS control module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### User-side low-voltage AC factory electricity (`electricity_electrical`)

Measure attributable stage equipment, commissioning, idle and rework electricity at the user-side meter. Keep the actual geography, voltage and provider interface; current German35–330kV public grid identity is not a low-voltage factory supply. Renewable procurement is not grid average merely because voltage matches. Verify a matching actual supplier identity before linking. Meter charger AC input once; rated pack capacity and recovered test energy are not duplicate manufactured product inputs.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Irreparable complete lithium-ion motorcycle traction pack for disposal (`rejected_pack`)

Only actual irreparable factory rejects exported to identified receiver with chemistry, included containment, residual charge, serial and measured net kg. Repairable supplier returns and service end-of-life packs are separate boundaries; no default reject fraction or recovery credit.

- Selected flow: Irreparable complete lithium-ion motorcycle traction pack for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Body seat lamp and instrument installation (`finishing`)

#### Inputs

##### Product flows

###### Complete motorcycle LED headlamp (`headlamp`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle LED headlamp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete motorcycle instrument display (`display`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete motorcycle instrument display
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Complete upholstered motorcycle seat (`seat`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Complete upholstered motorcycle seat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Finished motorcycle front body panel (`body_panel`)

One finished physical assembly of the stated design crossing the declared module gate; independently measure supplied installed net kg and retain drawing, serial/lot, actual material/chemistry, count and supplied inclusions. Exclude separately supplied parts on other cards. Fork/strut includes supplied internal lubricant; brake assembly includes only actual supplied discs, calipers, lines and mounts with its prefill state recorded. Motor excludes separately received inverter, gearbox and radiator; battery pack includes its cells, electrolyte, casing and internal protection once. Locally manufacturing a component requires its actual stock and operation inventory instead of simultaneous complete-component receipts.

- Selected flow: Finished motorcycle front body panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parts`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### User-side low-voltage AC factory electricity (`electricity_finishing`)

Measure attributable stage equipment, commissioning, idle and rework electricity at the user-side meter. Keep the actual geography, voltage and provider interface; current German35–330kV public grid identity is not a low-voltage factory supply. Renewable procurement is not grid average merely because voltage matches. Verify a matching actual supplier identity before linking. Meter charger AC input once; rated pack capacity and recovered test energy are not duplicate manufactured product inputs.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Conditional separate fluid filling and leak check (`fluids`)

#### Inputs

##### Product flows

###### Supplied inhibited aqueous ethylene-glycol motor coolant (`coolant`)

Only actual separately received certified motor-loop coolant is counted; weigh supplied mixture kg and record glycol/water/additive concentration, fill/return/spill and retained mass. Battery in the example is air-cooled; motor coolant is not automatically battery coolant. Precharged module fluid is included once in its module receipt and excluded from additional fill. Other actual coolant formulations require a separate named card.

- Selected flow: Supplied inhibited aqueous ethylene-glycol motor coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### Supplied glycol-ether hydraulic brake-fluid formulation (`brake_fluid`)

Only actual separate fill of one approved glycol-ether formulation; retain SDS/specification, measured net fill kg, wet chemistry, bleed recovery and retained kg. Do not prescribe this chemistry where the actual approved fluid differs. Supplied prefilled hydraulic module mass is reconciled without duplicate fill; no assumed air emission from brake-fluid input.

- Selected flow: Supplied glycol-ether hydraulic brake-fluid formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### User-side low-voltage AC factory electricity (`electricity_fluids`)

Measure attributable stage equipment, commissioning, idle and rework electricity at the user-side meter. Keep the actual geography, voltage and provider interface; current German35–330kV public grid identity is not a low-voltage factory supply. Renewable procurement is not grid average merely because voltage matches. Verify a matching actual supplier identity before linking. Meter charger AC input once; rated pack capacity and recovered test energy are not duplicate manufactured product inputs.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected spent aqueous ethylene-glycol motor coolant (`spent_coolant`)

Only actual contaminated drained/bleed coolant exported to a specified receiver; measure wet net kg and analyse glycol/water/contaminants. Internal reuse is retained within process, not waste export; no invented loss or replacement rate.

- Selected flow: Collected spent aqueous ethylene-glycol motor coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Configuration commissioning tests and net-mass acceptance (`acceptance`)

#### Inputs

##### Product flows

###### User-side low-voltage AC factory electricity (`electricity_acceptance`)

Measure attributable stage equipment, commissioning, idle and rework electricity at the user-side meter. Keep the actual geography, voltage and provider interface; current German35–330kV public grid identity is not a low-voltage factory supply. Renewable procurement is not grid average merely because voltage matches. Verify a matching actual supplier identity before linking. Meter charger AC input once; rated pack capacity and recovered test energy are not duplicate manufactured product inputs.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete battery-electric road motorcycle (`finished_motorcycle`)

Complete accepted two-wheel road motorcycle of the declared architecture, including one installed traction battery, onboard motor/inverter/charger, chassis/body and actual retained fluids once. Declare ancillary battery and supplied permanent accessories. Exclude rider, luggage, external charger, loose spare battery/cables, fixtures and transport packaging. The broader public49913 identity is narrowed by these qualifiers and supplies no measured weight or use performance.

- Selected flow: Motorcycles and cycles fitted with an auxiliary motor, other than those with reciprocating internal combustion piston engines, side-cars `26a257ab-4c71-475b-9059-73b4689fe8c8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_mass`
- Sources: bmw-ce04-architecture-2021; bmw-ce04-production-2021

##### Waste flows

##### Elementary flows

### Process: Conditional final IPA cleaning (`cleaning`)

#### Inputs

##### Product flows

###### User-side low-voltage AC factory electricity (`electricity_cleaning`)

Measure attributable stage equipment, commissioning, idle and rework electricity at the user-side meter. Keep the actual geography, voltage and provider interface; current German35–330kV public grid identity is not a low-voltage factory supply. Renewable procurement is not grid average merely because voltage matches. Verify a matching actual supplier identity before linking. Meter charger AC input once; rated pack capacity and recovered test energy are not duplicate manufactured product inputs.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Liquid isopropyl-alcohol final-cleaning formulation (`ipa_cleaner`)

Conditional on actually approved performed cleaning using one documented CAS67-63-0 product; record purity/water concentration and actual issue, recovery and retained/residual kg. Cleaning is not necessary for every electric motorcycle and solvent is not automatically fully evaporated.

- Selected flow: Liquid isopropyl-alcohol final-cleaning formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected spent isopropyl-alcohol cleaning solution (`spent_ipa`)

Actual exported collected IPA-containing cleaning liquid, net wet kg and analysis of water/IPA/contaminants with receiver evidence; distinguish recovered liquid, wipes and atmospheric residual release.

- Selected flow: Collected spent isopropyl-alcohol cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Immediate isopropanol release to unspecified outdoor air (`ipa_air`)

Only actual compound-specific post-control residual CAS67-63-0 release to unspecified air. Use measured concentration, airflow and time or documented closed solvent balance resolving recovery, residue and retention. Preserve limits/uncertainty; distinguish no operation, not measured and below detection. Reject n-propanol, chloropropanol, indoor air, soil and long-term releases; no generic VOC or assumed complete evaporation.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Conditional dispatch packaging (`packing`)

#### Inputs

##### Product flows

###### User-side low-voltage AC factory electricity (`electricity_packing`)

Measure attributable stage equipment, commissioning, idle and rework electricity at the user-side meter. Keep the actual geography, voltage and provider interface; current German35–330kV public grid identity is not a low-voltage factory supply. Renewable procurement is not grid average merely because voltage matches. Verify a matching actual supplier identity before linking. Meter charger AC input once; rated pack capacity and recovered test energy are not duplicate manufactured product inputs.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Finished corrugated-cardboard motorcycle shipping box (`shipping_box`)

Only actually supplied separate corrugated box is measured as empty net kg outside vehicle M. Actual wooden pallet, ties, films and cushioning each require their own named cards; reusable inbound rack is not assumed single-use outgoing packaging.

- Selected flow: Finished corrugated-cardboard motorcycle shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | all_processes | First subdivide model-specific orders/meters/operations. Assign actual material and test energy directly where traceable. Retain repair/reject burden with accepted output; do not drop failed vehicles from the period numerator. |  |
| `allocation_shared` | shared operations | Where subdivision is unavailable use actual causal machine-time, metered cycles or documented occupied line-time for the relevant stage, supported by current foreground measurements. Declare formula, driver totals and residual shared loads; compare an alternative defensible driver. Do not allocate unlike battery variants merely by assumed catalogue mass. |  |
| `allocation_waste` | waste and returns | Track actual stock returns, internal recovery and exported receiver states. Waste exports are not motorcycle co-products. No avoided-production credit, arbitrary recovered-material substitution or unobserved scrap yield; any separate recovery model must declare actual receiver route and allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | complete motorcycle | calibrated physical net weighing | model; configuration; serial; accepted net mass M; scale/tare; installed battery and fluid state | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted vehicle/configuration | actual declared representative production period | declared plant and attributable line/module gates | accepted net mass per unit | original scale readings, calibration, tare and signed complete state |
| `cp_parts` | all_processes | single finished assembly | supplier/drawing and component weighing | one part design/serial/material/chemistry; receipt/return/installed/rejected net kg; actual supplied installed weight; count; prefill/included hardware; accepted count | Independently weigh actual supplied installed assemblies with calibrated scales or traceable original same-lot weights; record counts only for trace. Verify installed pack kg independently of vehicle M and module supply inclusions. For the input numerator retain actual receipts less supplier returns, including consumed rejected/reworked components, separately from installed kg; reconcile destinations and allocate to accepted output. Do not infer kg from capacity, power or a parts mass share. | kg | each lot/order/configuration | actual declared representative production period | declared plant and attributable line/module gates | actual attributable component kg / accepted units of the same configuration | signed drawings, inclusion certificate and independent weights/count reconciliation |
| `cp_stock` | all_processes | single chemical or packaging product | actual issue/return/fill records | one formulation/SDS/concentration or box design; actual net supplied/issue/return/retained kg; fill/spill; prefill; accepted count | Measure actual net stock using calibrated weighing, subtract recorded returns and separate retained/collected/released destinations. Preserve wet composition; use measured batch density/temperature only when original volume requires kg conversion. Avoid duplicate prefill. | kg | each issue/fill/batch | actual declared representative production period | declared plant and attributable line/module gates | actual attributable stock kg / accepted units of the same configuration | scale/tare, SDS, fill/return and material balance |
| `cp_energy` | all_processes | single stage electricity | metered electricity and actual commissioning logs | stage/meter/voltage/provider/geography; raw kWh; charging import/export; initial/final charge; test cycles; idle/rework; accepted count | Read calibrated user-side meters and causally attribute actual stage totals, including charging and test equipment once. Convert1kWh=3.6MJ and keep exported recovered energy separate. Nominal pack kWh and motor ratings do not establish input. | MJ | each stage/test and reporting period | actual declared representative production period | declared plant and attributable line/module gates | actual attributable stage MJ / accepted units of the same configuration | meter calibration and actual charge/test/idle reconciliation |
| `cp_waste` | all_processes | one exported waste stream | segregated receiver shipment | one waste chemistry/module serial/state; net wet kg/tare; source/receiver; return/recovery; accepted count | Weigh actually exported separately collected waste excluding containers and record analysed wet chemistry or complete module scope. Distinguish irreparable pack disposal from repairable supplier return and service end-of-life. | kg | each shipment/period | actual declared representative production period | declared plant and attributable line/module gates | actual exported net waste kg / accepted units of the same configuration | weighing/analysis/charge-state and source-receiver balance |
| `cp_emission` | cleaning | single residual IPA air release | compound-specific measurement | CAS67-63-0; air submedium; post-control concentration/flow/time; solvent balance; limits/uncertainty; accepted count | Quantify actual residual release by matched sampling or a closed documented balance of IPA issue, recovery, residue and retention. No assumed complete evaporation or generic VOC factor; preserve absent/unmeasured/below-detection distinctions. | kg | representative actual cleaning/control period | actual declared representative production period | declared plant and attributable line/module gates | actual released kg / accepted units of the same configuration | sampling/calibration lab records and solvent balance |
| `cp_configuration` | all_processes | complete configured motorcycle | as-built and factory acceptance records | model/serial; complete BOM; make-or-buy/gate/inclusions; firmware; actual electrical/brake/leak/charge/drive tests; pack/fluid/delivery state | Trace current approved as-built drawings and supplier inclusions. Record actually performed commissioning, electrical safety, brake/drive function and relevant fluid leak tests against the actual factory plan and disposition; source examples do not prescribe universal thresholds. Declare all optional equipment and net delivery state. | kg | each vehicle/configuration change | actual declared representative production period | declared plant and attributable line/module gates | qualifiers accompany each accepted same-configuration unit | signed complete BOM, supplier, configuration/test/disposition records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | period records | Attribute actual period exchange totals to one accepted configuration using current causal records; divide attributable amount by accepted unit count to obtain q_item. Retain rejects/rework in the numerator and reconcile stock, returned material and measured retained component mass. Do not pool different pack/drive configurations without a declared physical weighted model. | cp_parts; cp_stock; cp_energy; cp_mass | q_item |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | Positive M requires current actual calibrated complete net weighing with scale capacity/resolution, calibration, zero/tare, original readings and signed serial/configuration. Independently measure installed traction/auxiliary packs and supplied motor/module kg; reconcile all permanent hardware and retained fluids against complete M. No catalogue unladen/gross weight, allowable load, battery energy-to-mass estimate or invented per-unit mass. If safe weighing removes a part, retain actual original state and independently measured same-unit add/remove correction. | cp_mass; cp_parts; cp_configuration |
| `net_configuration` | finished_motorcycle | M includes the actual complete vehicle, installed specified traction and auxiliary batteries, motor, inverter, gearbox/belt, onboard charger/converter, chassis/body/lights and retained fluid fills once. Exclude rider, luggage, temporary test equipment, external charger, loose charging cable/spare pack and shipping packaging; declare separate delivery products. Pack cell electrolyte and module prefilled lubricants/fluids are not duplicate separate inputs. Actual permanent accessories and all missing BOM items must be reconciled. | cp_mass; cp_parts; cp_stock; cp_configuration |
| `completeness_balance` | all exchanges | Expand the controlled complete as-built BOM and real operating records: missing rear lights/indicators, controls, cables/hoses, mounts, mirrors, stand, secondary panels, lubricant, packaging and services each need their own specific exchange. This starting inventory cannot claim complete factory coverage without that expansion and matched upstream/transport/receiver links. Reconcile stock-to-installed/returned/rejected/waste balances, wet fluids and observed compound-specific emissions; report uncertainty, limits, cut-offs and allocation sensitivity. | cp_parts; cp_stock; cp_energy; cp_waste; cp_emission |
| `source_limits` | external sources | 2021 BMW documents are historical structure/plant examples, not independent quantitative factory observations or current universal recipes. They distinguish air-cooled traction battery from liquid-cooled motor and include local motor and pack-housing/module work before this declared completed-component gate. Do not transfer catalogue mass, range, charging time, green-power marketing, dimensions, pack chemistry fractions or production layout into default quantities or compliance claims. Collect current actual plant/provider/test evidence and independent measurement records. | bmw-ce04-architecture-2021; bmw-ce04-production-2021 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify complete declared battery-electric two-wheel road motorcycle, positive physical net M kg and independent pack/module measurements. Reference product name/UUID equals finished_motorcycle exactly; broader49913 identity does not imply side-car coverage, service equivalence or complete supplier inventory. |  |
| `validation_supply` | all_processes | Verify actual gates, module inclusions and prefilled fluid status, chronological assembly/test disposition, firmware/battery/drive compatibility and complete BOM. Supply gates cannot silently remove local motor/cell/pack manufacturing from broader claims. Apply actual approved factory acceptance and lawful product requirements independently of historical source examples. | bmw-ce04-architecture-2021; bmw-ce04-production-2021 |
| `validation_identity` | all flow rows | Verify actual public type, chemical/state/reference property/group/unit, route/supply scope and official bilingual names. Rail traction motor, robot inverter, wind-farm coolant, grouped miscellaneous motorcycle parts and lead-input-to-harness are not these finished individual modules. Preserve public Number/Energy rather than relabel Mass; leave specific unresolved row_ids when identity or conversion is unsupported. IPA air release is not purchased IPA or spent solution. |  |
| `validation_claims` | claims | A mechanical PCR pass does not establish scientific approval, actual measured quantities, full cradle-to-gate coverage, current homologation or kilometre/lifetime equivalence. Report remaining identity, independent evidence, BOM, measurement and link gaps. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured battery-electric motorcycle completed-component integration manufacturing foreground; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete configured motorcycle manufacture scaled by actual net M with matching upstream components and declared operations |
| excluded_use | Passenger/vehicle-km service, use-phase charging, battery lifetime, repair/disposal service, combustion/other vehicle architectures and approval |
| required_metadata | Full model/serial/as-built BOM and component gates; installed pack chemistry/voltage/charge/net kg and motor/inverter scope; actual prefill/fluid state; net complete M kg original weights and independent module balance; optional accessories; current plant/period/provider/test/firmware records; allocation and upstream/receiver links |
| required_quality_disclosure | Configuration/BOM/identity/measurement/link and independent evidence gaps; historical source applicability, actual returns/rejects/recovery/exports; limits/uncertainty and allocation sensitivity |
| update_trigger | Battery chemistry/installed scope, frame/drive/module supply, fluid/prefill, firmware/acceptance, net weighing state, plant/provider/period or packaging changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bmw-ce04-architecture-2021 | handbook | BMW Motorrad USA, The new BMW CE 04,7July2021, Electric Drivetrain Technology; Innovative Electric Drive; Charging; ABS; One-piece Tubular Steel Frame; LED lighting. https://www.press.bmwgroup.com/usa/article/detail/T0337286EN_US/the-new-bmw-ce-04?language=en_US | Historical model architecture only: steel frame, separate electric drive/pack/cooling/charging and running gear; no numerical mass/recipe/range/factor adopted. |
| bmw-ce04-production-2021 | handbook | BMW Group, Start der Serienfertigung BMW CE 04 im BMW Group Werk Berlin,8November2021, Elektromobilitaet und Segmentvielfalt aus der Hauptstadt; Technologiekompetenz und Digitalisierung. https://www.press.bmwgroup.com/deutschland/article/detail/T0356512DE/start-der-serienfertigung-bmw-ce-04-im-bmw-group-werk-berlin?language=de | Historical plant observation: local motor assembly and battery-housing/module work precede final assembly. Defines why completed-component gates need explicit upstream disclosure; same publisher as architecture, not independent quantities. |
