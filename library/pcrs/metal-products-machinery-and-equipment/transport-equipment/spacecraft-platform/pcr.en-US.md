---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.spacecraft-platform
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dry nonpropulsive small-spacecraft platform manufacture

## 1. Scope and Applicability

New complete dry uncrewed Earth-orbiting small-spacecraft bus/platform with aluminium-alloy primary frame, solar photovoltaic generation, filled rechargeable lithium-ion storage, power management, passive thermal hardware and configured avionics/communications/attitude control, without installed propulsion. The declared delivered flight platform excludes mission payload but includes its bus-side mechanical/electrical interfaces. Manufacture covers declared stock/received subsystems to same-configuration factory acceptance/handover. This narrower platform route is context within CPC 49630, not all spacecraft and launch vehicles.

Exclude complete payload-bearing spacecraft, launch vehicles/upper stages, propulsion/thrusters/propellant, crewed/deep-space/nuclear/fuel-cell platforms, composite-primary-frame and other undeclared power/structure routes, ground station/dispenser/launch adapter, payload instruments and integration after the platform gate, qualification-only engineering models, spares/repair/refurbishment, software R&D/training services, launch transport/ascent/deployment/in-orbit operation and end of life. Model operational lifetime or mission output separately.

ISISPACE separates platform and payload and offers optional propulsion; NASA documents aluminium modular structures and photovoltaic/Li-ion subsystems. Those examples motivate this narrower manufactured product, not a universal recipe, CubeSat dimensions or certified mission lifetime. GSFC-STD-7000B (2021) is historical mission-tailored environmental/mass-property verification context, not a universal test schedule or evidence of actual platform M. Scientific review is pending. Receipt-to-acceptance foreground is not complete cradle-to-gate without compatible disclosed upstream links.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.spacecraft-platform |
| classification_refs | CPC 3.0 49630; narrower nonpropulsive dry uncrewed small-spacecraft bus, context only |
| covered_products | New complete dry uncrewed Earth-orbiting small-spacecraft bus/platform with aluminium-alloy primary frame, solar photovoltaic generation, filled rechargeable lithium-ion storage, power management, passive thermal hardware and configured avionics/communications/attitude control, without installed propulsion. The declared delivered flight platform excludes mission payload but includes its bus-side mechanical/electrical interfaces. Manufacture covers declared stock/received subsystems to same-configuration factory acceptance/handover. This narrower platform route is context within CPC 49630, not all spacecraft and launch vehicles. |
| excluded_products | Exclude complete payload-bearing spacecraft, launch vehicles/upper stages, propulsion/thrusters/propellant, crewed/deep-space/nuclear/fuel-cell platforms, composite-primary-frame and other undeclared power/structure routes, ground station/dispenser/launch adapter, payload instruments and integration after the platform gate, qualification-only engineering models, spares/repair/refurbishment, software R&D/training services, launch transport/ascent/deployment/in-orbit operation and end of life. Model operational lifetime or mission output separately. |
| representative_product | One serial/configuration-linked accepted complete dry flight bus excluding payload, with measured positive M |
| production_route | Conditional aluminium fabrication/cleaning/bonding; frame/thermal, power, avionics/attitude integration; configured mass/functional/tailored environmental acceptance; conditional protection |
| market_state | New accepted complete configured dry platform at declared manufacturing gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured nonpropulsive spacecraft bus excluding payload |
| How much | 1 kg accepted complete configured dry platform net mass; per-unit records divided by measured M |
| How well | Actual delivered flight-platform configuration with documented mass, electrical/mechanical/software interface, functional and tailored acceptance; no equal-mass mission performance or flight certification equivalence |
| How long or cycle | One manufacturing/acceptance cycle; no orbit duration, lifetime or launch-service functional unit |
| reference_flow_link | finished_platform |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete dry nonpropulsive photovoltaic lithium-ion spacecraft platform |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model/serial and controlled configuration/drawings/BOM; flight hardware versus engineering model; aluminium alloy/temper and stock-versus-received-frame scope; bus-side payload interface with payload excluded; solar semiconductor technology/panel completeness/stowed delivery; filled Li-ion pack chemistry, BMS, state of charge and safety records; exact computer/radio/antenna/ADCS component part numbers and containment; actual thermal layers/pads and installed fittings; no propulsion/propellant; actual dry net M kg from calibrated complete-bus weighing with measured fixture tare and same-serial acceptance record; integral detached flight parts reconciled, no payload simulators/packaging/GSE; actual functional/environmental acceptance plan and tailored test levels/utility meters; manufacturing site/period/gate, outsourced services, allocation, upstream linkage, uncertainty and omissions |

Dry M includes the complete installed bus structure/thermal, solar panels, filled battery electrolyte, wiring, electronics and all declared integral flight components. Dry does not mean an emptied battery. Exclude payload, propellant, launch adapter/dispenser, packaging, ground/test fixtures and removable simulated payload. Actual integral delivered detached panels/fittings must be physically weighed and reconciled once to the same accepted serial. No catalogue bus mass, CubeSat mass cap, launch wet mass or mass from U-size establishes M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Physically weigh the actual complete dry accepted platform on calibrated suitable equipment with measured fixture/tare correction, controlled installed equipment list and serial/configuration release. Record stowed/detached integral parts, filled battery and actual included thermal/electronic state; remove measured temporary loads, payload simulators and ground fixtures. Reconcile component mass sum to actual whole-bus reading, uncertainty, scale resolution/calibration, date/operator and positive net M. Catalogue estimates, component sum alone or launcher limits do not replace weighing. |
| `energy_units` | each electricity row | Net calorific value | MJ | Use verified energy unit-group conversion 1 kWh = 3.6 MJ; keep electrical intake energy distinct from semiconductor area, battery capacity, mass and generated orbit power. No heating-value or fuel density factor supplied. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified aluminium stock and received completed bus structure/subsystem units |
| starting_condition_role | Declared foreground receipt-to-flight-platform manufacturing acceptance |
| product_classification_scope | Configured spacecraft bus excluding payload and launch vehicle |
| recursive_input_rule | Never input the same finished bus to its own manufacture. Purchased completed units replace their contained stock/components/processing; in-house steps require their own measured exchanges |
| upstream_dataset_requirement | Link actual alloy/temper/finish, panel semiconductor, battery formulation and pack completeness, computer/ADCS supply, site/period/provider and compatible unit. Disclose supplier gaps |
| disclosure | manufacturer/model/serial and controlled configuration/drawings/BOM; flight hardware versus engineering model; aluminium alloy/temper and stock-versus-received-frame scope; bus-side payload interface with payload excluded; solar semiconductor technology/panel completeness/stowed delivery; filled Li-ion pack chemistry, BMS, state of charge and safety records; exact computer/radio/antenna/ADCS component part numbers and containment; actual thermal layers/pads and installed fittings; no propulsion/propellant; actual dry net M kg from calibrated complete-bus weighing with measured fixture tare and same-serial acceptance record; integral detached flight parts reconciled, no payload simulators/packaging/GSE; actual functional/environmental acceptance plan and tailored test levels/utility meters; manufacturing site/period/gate, outsourced services, allocation, upstream linkage, uncertainty and omissions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all stages | Include actual fabrication/integration, attributable rework, programming, pre-gate acceptance and attributable test/cleanroom utilities. Outsourced tests/processing are separate actual services with scope and unit. Exclude platform-independent software development, payload manufacture/integration after gate and launch/mission service. | `isispace-platform` |
| `boundary_completeness` | received assemblies and BOM | Count each complete received frame/panel/battery/avionics unit once with included fittings, cells, electrolyte and wiring. Match hardware installed at accepted configuration; physical removal for shipment does not remove integral flight parts. Complete actual missing switches, connectors, sensors, adhesives, gases, waste/emissions and utilities before quantitative data completion. These candidate cards are not an exhaustive universal bus BOM. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `structure_fabrication` | Aluminium frame and panel fabrication | conditional | Actual in-house manufacture of the declared aluminium platform structure. | foreground | one accepted configured dry spacecraft platform, normalized using M |
| `clean_bond` | Precision cleaning and adhesive joining | conditional | Actual foreground solvent/water cleaning or epoxy bonding. | foreground | one accepted configured dry spacecraft platform, normalized using M |
| `mechanical_thermal` | Structure and passive thermal hardware integration | required | Every covered platform; particular thermal hardware only as configured. | foreground | one accepted configured dry spacecraft platform, normalized using M |
| `power_integration` | Photovoltaic power and battery integration | required | Every covered solar photovoltaic and lithium-ion powered bus. | foreground | one accepted configured dry spacecraft platform, normalized using M |
| `avionics_attitude` | Computer, communications and attitude subsystem integration | required | Every covered configured nonpropulsive bus. | foreground | one accepted configured dry spacecraft platform, normalized using M |
| `acceptance` | Mass, functional and tailored environmental acceptance | required | Every flight platform; particular environmental tests follow its actual approved plan. | foreground | one accepted configured dry spacecraft platform, normalized using M |
| `protection` | Protective delivery preparation | conditional | Actual temporary protective film for delivery. | foreground | one accepted configured dry spacecraft platform, normalized using M |

Conditional aluminium fabrication/cleaning supplies frame/thermal, power and avionics/attitude integration; actual flight-platform acceptance precedes protection. Stages may overlap; assign resources once. All exchange cards require actual configuration/composition even within required stages. One physical or chemical exchange per card; no emission or fabrication recipe is compulsory.

### Process: Aluminium frame and panel fabrication (`structure_fabrication`)

Cut and machine actual alloy/temper frame/panel stock under controlled drawings, segregate alloy chips, inspect geometry and join separately supplied fasteners. Purchased completed frames replace stock and contained fabrication. Actual anodizing, heat treatment, welding and outsourced operations require their own measured exchanges; none is universally assumed.

#### Inputs

##### Product flows

###### Wrought 6061-T6 aluminium-alloy structural plate (`aluminium_plate`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Wrought 6061-T6 aluminium-alloy structural plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure_fabrication`
- Sources: `nasa-structures`

###### Solid aluminium-alloy structural rivet (`aluminium_fastener`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Solid aluminium-alloy structural rivet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure_fabrication`
- Sources: `nasa-structures`

###### Water-miscible semi-synthetic metalworking-fluid concentrate (`machining_fluid`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Water-miscible semi-synthetic metalworking-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure_fabrication`
- Sources: `nasa-structures`

###### Process Water (`machining_water`)

Actual treated supplied process water for dilution/cleaning; exclude internal circulating water and natural withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure_fabrication`
- Sources: `nasa-structures`

###### Alternating-current electricity at factory intake (`structure_fabrication_electricity`)

Meter attributable factory/test kWh and convert 1 kWh = 3.6 MJ using verified unit group. Retain actual region/provider/voltage; ground test loads and cleanroom utilities are allocated by measured resource use, not satellite photovoltaic generation during orbit. Each actual supplied heat, compressed air or other carrier/service needs a separate row.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure_fabrication`
- Sources: `nasa-structures`

#### Outputs

##### Waste flows

###### Segregated untreated 6061 aluminium-alloy machining chips (`aluminium_chips`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Segregated untreated 6061 aluminium-alloy machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure_fabrication`
- Sources: `nasa-structures`

### Process: Precision cleaning and adhesive joining (`clean_bond`)

Record each actual solvent, supplied water, wipe and identified adhesive formulation/curing component; retain cleaning, cure and inspection originals. Epoxy examples apply only to matching real formulations and release state. Captured cleaning effluent/wipes differ from direct solvent air emission; each actual waste/emission has its own record. Supplier bonded assemblies replace contained bonds. No universal cleanroom class, cure schedule, outgassing limit or solvent emission factor assumed.

#### Inputs

##### Product flows

###### Anhydrous isopropanol cleaning solvent (`isopropanol_solvent`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Anhydrous isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

###### Process Water (`clean_water`)

Actual supplied treated process cleaning water, separate from effluent.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

###### Dry nonwoven polyester cleaning wipe (`polyester_wipe`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Dry nonwoven polyester cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

###### Bisphenol-A epoxy structural adhesive base formulation (`epoxy_adhesive`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Bisphenol-A epoxy structural adhesive base formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

###### Polyamine epoxy structural-adhesive hardener formulation (`epoxy_hardener`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Polyamine epoxy structural-adhesive hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

###### Alternating-current electricity at factory intake (`clean_bond_electricity`)

Meter attributable factory/test kWh and convert 1 kWh = 3.6 MJ using verified unit group. Retain actual region/provider/voltage; ground test loads and cleanroom utilities are allocated by measured resource use, not satellite photovoltaic generation during orbit. Each actual supplied heat, compressed air or other carrier/service needs a separate row.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

#### Outputs

##### Waste flows

###### Spent polyester cleaning wipe contaminated with isopropanol (`spent_wipe`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Spent polyester cleaning wipe contaminated with isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

###### Aqueous aluminium-part cleaning effluent transferred to treatment (`clean_effluent`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Aqueous aluminium-part cleaning effluent transferred to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

#### Outputs

##### Elementary flows

###### isopropanol (`ipa_release`)

Only actually demonstrated immediate isopropanol release to air, unspecified, from attributable wet cleaning. Indoor air, water/soil and long-term identities are distinct. Use actual solvent balance or measured speciated releases; do not assume all issued IPA evaporates or fabricate an emission factor.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean_bond.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_bond`
- Sources: `nasa-structures`

### Process: Structure and passive thermal hardware integration (`mechanical_thermal`)

Integrate the received or in-house aluminium frame, actual brackets and payload mechanical interface, then actual passive thermal films/radiator/contact pads. Each physical film or formulated pad is a distinct exchange. Keep modular subsystem contained structure/fasteners and separately supplied structure distinct. Installed passive thermal hardware and payload electrical/mechanical interface belong to bus M; payload and launch dispenser do not. Each deployable hinge/release mechanism needs a separate actual component record.

#### Inputs

##### Product flows

###### Complete aluminium-alloy satellite-bus structural frame assembly (`frame_received`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete aluminium-alloy satellite-bus structural frame assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_thermal`
- Sources: `nasa-structures`

###### Aluminized polyimide passive-thermal-control film (`thermal_film`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Aluminized polyimide passive-thermal-control film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_thermal`
- Sources: `nasa-structures`

###### Finished aluminium-alloy passive spacecraft radiator plate (`radiator_plate`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Finished aluminium-alloy passive spacecraft radiator plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_thermal`
- Sources: `nasa-structures`

###### Filled silicone thermal-interface pad sheet (`thermal_pad`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Filled silicone thermal-interface pad sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_thermal`
- Sources: `nasa-structures`

###### Alternating-current electricity at factory intake (`mechanical_thermal_electricity`)

Meter attributable factory/test kWh and convert 1 kWh = 3.6 MJ using verified unit group. Retain actual region/provider/voltage; ground test loads and cleanroom utilities are allocated by measured resource use, not satellite photovoltaic generation during orbit. Each actual supplied heat, compressed air or other carrier/service needs a separate row.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_thermal`
- Sources: `nasa-structures`

### Process: Photovoltaic power and battery integration (`power_integration`)

Install actual photovoltaic panel assemblies, complete filled lithium-ion battery pack, power management/distribution board and wiring. Retain cell technology, panel/battery supplier completeness and actual installed state; do not duplicate contained cells, laminate, controller or electrolyte. Triple-junction panel card is conditional on actual InGaP/GaAs/Ge technology; silicon/other arrays require their own explicit rows. Record attributable charging, functional checks and test loads; stored charge is not a second manufacturing electricity input.

#### Inputs

##### Product flows

###### Complete InGaP/GaAs/Ge triple-junction spacecraft photovoltaic panel assembly (`solar_panel`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete InGaP/GaAs/Ge triple-junction spacecraft photovoltaic panel assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_integration`
- Sources: `nasa-power`

###### Complete filled rechargeable lithium-ion spacecraft battery pack (`battery_pack`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete filled rechargeable lithium-ion spacecraft battery pack
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_integration`
- Sources: `nasa-power`

###### Complete spacecraft power-management and distribution circuit-board assembly (`power_board`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete spacecraft power-management and distribution circuit-board assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_integration`
- Sources: `nasa-power`

###### Insulated copper satellite-bus wiring-harness assembly (`copper_harness`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Insulated copper satellite-bus wiring-harness assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_integration`
- Sources: `nasa-power`

###### Alternating-current electricity at factory intake (`power_integration_electricity`)

Meter attributable factory/test kWh and convert 1 kWh = 3.6 MJ using verified unit group. Retain actual region/provider/voltage; ground test loads and cleanroom utilities are allocated by measured resource use, not satellite photovoltaic generation during orbit. Each actual supplied heat, compressed air or other carrier/service needs a separate row.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_integration`
- Sources: `nasa-power`

### Process: Computer, communications and attitude subsystem integration (`avionics_attitude`)

Install each actual on-board computer, RF transceiver and antenna, and separately received reaction-wheel, magnetic actuator and sensor units. Retain part numbers, installed firmware/interface verification and mass; one row never stands for a set of interchangeable electronics. Particular sensors/actuators are conditional on real configuration; alternative units need separate rows. Software development and mission ground station are excluded services; assembly programming and attributable acceptance loads are included manufacturing. No aircraft avionics, wind rotor or propulsion substitute.

#### Inputs

##### Product flows

###### Complete satellite on-board computer assembly (`onboard_computer`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete satellite on-board computer assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_avionics_attitude.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_avionics_attitude`
- Sources: `isispace-platform`

###### Complete UHF satellite telemetry and command transceiver unit (`uhf_transceiver`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete UHF satellite telemetry and command transceiver unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_avionics_attitude.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_avionics_attitude`
- Sources: `isispace-platform`

###### Complete deployable UHF satellite antenna assembly (`uhf_antenna`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete deployable UHF satellite antenna assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_avionics_attitude.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_avionics_attitude`
- Sources: `isispace-platform`

###### Complete spacecraft reaction-wheel actuator assembly (`reaction_wheel`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete spacecraft reaction-wheel actuator assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_avionics_attitude.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_avionics_attitude`
- Sources: `isispace-platform`

###### Complete satellite magnetorquer rod assembly (`magnetorquer`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete satellite magnetorquer rod assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_avionics_attitude.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_avionics_attitude`
- Sources: `isispace-platform`

###### Complete spacecraft optical sun-sensor unit (`sun_sensor`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete spacecraft optical sun-sensor unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_avionics_attitude.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_avionics_attitude`
- Sources: `isispace-platform`

###### Complete satellite three-axis magnetometer unit (`magnetometer`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Complete satellite three-axis magnetometer unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_avionics_attitude.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_avionics_attitude`
- Sources: `isispace-platform`

###### Alternating-current electricity at factory intake (`avionics_attitude_electricity`)

Meter attributable factory/test kWh and convert 1 kWh = 3.6 MJ using verified unit group. Retain actual region/provider/voltage; ground test loads and cleanroom utilities are allocated by measured resource use, not satellite photovoltaic generation during orbit. Each actual supplied heat, compressed air or other carrier/service needs a separate row.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_avionics_attitude.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_avionics_attitude`
- Sources: `isispace-platform`

### Process: Mass, functional and tailored environmental acceptance (`acceptance`)

Weigh the accepted complete dry platform with calibrated equipment and actual fixture/tare correction; reconcile configuration and release. Collect unit-specific functional/interface checks and actually required vibration, thermal cycling/thermal vacuum or other environmental tests with their equipment resources and subcontract boundaries. Acceptance flight units differ from qualification/prototype/destructive samples; allocate their attributable common development/test burden only with explicit records. Dry nitrogen purge and liquid nitrogen cold shroud are separate conditional purchased carriers, not automatic vent emissions. Test support hardware/simulated payload is excluded from M. No universal GEVS test level, duration, sample count or temperature adopted.

#### Inputs

##### Product flows

###### Nitrogen (`nitrogen_gas`)

Only actual purchased dry gaseous molecular nitrogen from air separation matching the public supplied route. Retain supplier moisture/purity/pressure and measured net supplied gas mass; no standard-density conversion or atmospheric resource/emission substitution.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `gsfc-gevs-2021`

###### Nitrogen, liquid (`liquid_nitrogen`)

Only actual purchased cryogenic air-separated liquid nitrogen for a real cold-shroud test, with documented matching supplier product/specification and liquid delivery state. Weigh actual net consumption and record boil-off and return; public GJB route is an identity condition, not universal test requirement. No temperature, density or automatic nitrogen-release amount assumed.

- Selected flow: Nitrogen, liquid `febfc973-1eca-4a08-8ffb-7f8c7f4b797b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `gsfc-gevs-2021`

###### Alternating-current electricity at factory intake (`acceptance_electricity`)

Meter attributable factory/test kWh and convert 1 kWh = 3.6 MJ using verified unit group. Retain actual region/provider/voltage; ground test loads and cleanroom utilities are allocated by measured resource use, not satellite photovoltaic generation during orbit. Each actual supplied heat, compressed air or other carrier/service needs a separate row.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `gsfc-gevs-2021`

#### Outputs

##### Product flows

###### Accepted complete dry nonpropulsive photovoltaic lithium-ion spacecraft platform (`finished_platform`)

Only this actual specific material/formulation or complete physical component; record exact supplier specification, supplied completeness, measured net issues and transfer. Demonstrated absence is not_applicable; unknown is a gap. Split different actual identities into separate rows.

- Selected flow: Accepted complete dry nonpropulsive photovoltaic lithium-ion spacecraft platform
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `gsfc-gevs-2021`

### Process: Protective delivery preparation (`protection`)

Separately record and weigh removable protection. Dry platform includes its integral delivered flight parts and retained solid/filled components in declared configuration, never packaging, ground fixtures, ground software kits, simulated/real payload, launch adapter or propellant. Delivered detached integral panels need physically measured same-serial reconciliation. Post-gate payload integration, transport and launch are separate boundaries.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`pe_protection`)

Only actual unlaminated non-adhesive LDPE protection foil, separately weighed and excluded from dry bus M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_protection`
- Sources: `isispace-platform`

###### Alternating-current electricity at factory intake (`protection_electricity`)

Meter attributable factory/test kWh and convert 1 kWh = 3.6 MJ using verified unit group. Retain actual region/provider/voltage; ground test loads and cleanroom utilities are allocated by measured resource use, not satellite photovoltaic generation during orbit. Each actual supplied heat, compressed air or other carrier/service needs a separate row.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_protection`
- Sources: `isispace-platform`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacturing utilities | Directly attribute serial/configuration-linked material net issues, submeters, assembly/test jobs and rework first. For inseparable shared resources use a measured causal occupied fixture/chamber time and actual electrical load or other documented actual driver: share = order driver / sum of covered order drivers. Retain full period and denominator. Equal bus counts, U-size, nameplate test power, launch payload capacity or mission lifetime are not defaults. |  |
| `allocation_tests` | acceptance and shared qualification | Keep flight-unit acceptance, qualification/prototype/destructive hardware and payload-interface test simulators distinguishable. Direct unit acceptance resources to the tested unit; document actual programme applicability and reviewed causal denominator before attributing shared qualification resources. Do not count destroyed/prototype mass as accepted platform output or charge independent R&D to this manufacturing foreground. Outsourced test resources and purchased services cannot both represent the same test twice. | `gsfc-gevs-2021` |
| `allocation_recovery` | chips, rework and rejects | Document measured waste versus saleable output and actual scrap collection route. Internal rework remains in accepted production without making another product. Do not grant avoided-primary-aluminium or landfill credits solely because chips are recyclable. Disclose any actual co-product allocation method, causal evidence, alternatives and sensitivity before use; mass transfer alone is not economic/substitution evidence. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | accepted physical weighing record | model; configuration; serial number; accepted net mass M; actual equipment/BOM; all scale readings and fixture tare; detached integral parts; battery state; payload/GSE exclusions; calibration/uncertainty; signed mass reconciliation | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | actual manufacturing/acceptance period | declared platform acceptance gate | accepted net mass per unit | original calibrated physical weighing with measured tare and controlled dry flight configuration |
| `cp_structure_fabrication` | `structure_fabrication` | inventory | actual stage exchange records | serial/configuration; exact physical/chemical exchange; issue/return/stock; supplied assembly scope; net mass; kWh; transfer destination; test phase; waste/emission method; shared resource driver | Collect same serial/configuration drawings, supplier scope/receipts, issue/return/stock records, measured net material/component masses, meter logs, actual assembly and acceptance records. | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual batch/test cycle | actual manufacturing/acceptance period | declared factory and subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original calibrations, supplier specifications, net issues and acceptance/transfer originals |
| `cp_clean_bond` | `clean_bond` | inventory | actual stage exchange records | serial/configuration; exact physical/chemical exchange; issue/return/stock; supplied assembly scope; net mass; kWh; transfer destination; test phase; waste/emission method; shared resource driver | Collect same serial/configuration drawings, supplier scope/receipts, issue/return/stock records, measured net material/component masses, meter logs, actual assembly and acceptance records. | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual batch/test cycle | actual manufacturing/acceptance period | declared factory and subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original calibrations, supplier specifications, net issues and acceptance/transfer originals |
| `cp_mechanical_thermal` | `mechanical_thermal` | inventory | actual stage exchange records | serial/configuration; exact physical/chemical exchange; issue/return/stock; supplied assembly scope; net mass; kWh; transfer destination; test phase; waste/emission method; shared resource driver | Collect same serial/configuration drawings, supplier scope/receipts, issue/return/stock records, measured net material/component masses, meter logs, actual assembly and acceptance records. | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual batch/test cycle | actual manufacturing/acceptance period | declared factory and subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original calibrations, supplier specifications, net issues and acceptance/transfer originals |
| `cp_power_integration` | `power_integration` | inventory | actual stage exchange records | serial/configuration; exact physical/chemical exchange; issue/return/stock; supplied assembly scope; net mass; kWh; transfer destination; test phase; waste/emission method; shared resource driver | Collect same serial/configuration drawings, supplier scope/receipts, issue/return/stock records, measured net material/component masses, meter logs, actual assembly and acceptance records. | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual batch/test cycle | actual manufacturing/acceptance period | declared factory and subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original calibrations, supplier specifications, net issues and acceptance/transfer originals |
| `cp_avionics_attitude` | `avionics_attitude` | inventory | actual stage exchange records | serial/configuration; exact physical/chemical exchange; issue/return/stock; supplied assembly scope; net mass; kWh; transfer destination; test phase; waste/emission method; shared resource driver | Collect same serial/configuration drawings, supplier scope/receipts, issue/return/stock records, measured net material/component masses, meter logs, actual assembly and acceptance records. | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual batch/test cycle | actual manufacturing/acceptance period | declared factory and subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original calibrations, supplier specifications, net issues and acceptance/transfer originals |
| `cp_acceptance` | `acceptance` | inventory | actual stage exchange records | serial/configuration; exact physical/chemical exchange; issue/return/stock; supplied assembly scope; net mass; kWh; transfer destination; test phase; waste/emission method; shared resource driver | Collect same serial/configuration drawings, supplier scope/receipts, issue/return/stock records, measured net material/component masses, meter logs, actual assembly and acceptance records. | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual batch/test cycle | actual manufacturing/acceptance period | declared factory and subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original calibrations, supplier specifications, net issues and acceptance/transfer originals |
| `cp_protection` | `protection` | inventory | actual stage exchange records | serial/configuration; exact physical/chemical exchange; issue/return/stock; supplied assembly scope; net mass; kWh; transfer destination; test phase; waste/emission method; shared resource driver | Collect same serial/configuration drawings, supplier scope/receipts, issue/return/stock records, measured net material/component masses, meter logs, actual assembly and acceptance records. | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual batch/test cycle | actual manufacturing/acceptance period | declared factory and subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original calibrations, supplier specifications, net issues and acceptance/transfer originals |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_provenance using current actual calibrated whole-platform readings, measured tare/temporary loads and same-serial dry flight BOM. Independently reconcile battery electrolyte, integrated thermal/power/attitude components and physically measured detached integral panels. No launcher limit, catalogue mass, U-size or inferred part sum substitutes for M. Missing physical originals or uncertainty blocks quantitative completion and requires scientific/data review. | actual weighing/calibration/BOM/release; GEVS 2.4.7 mission-dependent context only |
| `quality_atomic` | all exchanges | One physical/formulated identity per row. Match actual public reference property/unit group, chemistry/state, supplied completeness and route. Space photovoltaic III-V panels differ from silicon terrestrial cells; Li-ion pack differs from lead-acid/NiCd; spacecraft computer differs from aircraft avionics; gas differs from liquid nitrogen and elementary nitrogen. Preserve blank identities with reasons. | supplier spec/SDS/receipt and public identity records |
| `quality_tests` | cp_acceptance | Retain actual tailored serial-linked test plan/reports, functional and interface pass criteria, chamber/shaker/cleanroom resources, calibration, test fixtures and outsourcing. Qualification versus acceptance and thermal cycling versus thermal vacuum are different cases. Neither manufacturer tables nor historical GEVS makes every test or fixed level universal; disclose failed tests and attributable rework. | actual acceptance plan, meter/job/outsourcing originals |
| `quality_balance` | material, solvent and utilities | Close input, accepted incorporation, measured returns/stock and waste/release balances on same period/configuration. Separate supplied process water, wastewater transfer and natural withdrawal; no mandatory natural-water flow. IPA releases require actually evidenced species/medium, not all solvent issue. Measure actual kWh and gas mass/state rather than nameplate power or nominal gas-volume conversion. | period balances, calibrated meters and transfer/release originals |
| `quality_completeness` | dataset and upstream links | Separate measured, calculated, missing and demonstrated not_applicable. Disclose all omitted actual components/processes, supplier boundary mismatch, unresolved identities/ranges, uncertainty and shared test burden. No candidate completeness or cradle-to-gate claim until actual foreground and compatible upstream coverage are verified. | actual complete BOM/process map, quality and gap register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Check positive actual complete dry bus M and mass/acceptance protocol. Reference name exactly matches finished_platform, excluding payload/launch vehicle/propellant and temporary fixtures. Actual missing weighing or supplied completeness requires review; no complete-spacecraft identity forced onto a bus. |  |
| `validate_basis` | all inventory rows | Check same lower-case row/rule/protocol ids, q_item per accepted unit, measured M kg, explicit normalize_mass application and identical EN/ZH bases. Preserve actual public properties rather than relabeling counts/area/energy as Mass. |  |
| `validate_boundary` | test and BOM | Audit actual acceptance versus qualification, outsourced versus in-house test resource, received versus fabricated assembly and detached integral versus simulator/packaging. Expand all actual exchanges beyond candidate cards; never count a whole purchased battery and its contained cells/electrolyte again. |  |
| `validate_profile` | dataset and intended use | Require scope/configuration, measurement and test provenance, omitted/unresolved data, allocation and compatible upstream unit disclosure. Finite measurement-check pass is not scientific approval, certification or mission-lifetime validation. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset and background_dataset after actual-data completion and review |
| downstream_use | Configured bus manufacturing input to a separately bounded complete-spacecraft model |
| allowed_use | Compare compatible actual manufacturing gates, configurations, test coverage and upstream linkage per kg; no mission equivalence from equal mass |
| excluded_use | Exclude complete payload-bearing spacecraft, launch vehicles/upper stages, propulsion/thrusters/propellant, crewed/deep-space/nuclear/fuel-cell platforms, composite-primary-frame and other undeclared power/structure routes, ground station/dispenser/launch adapter, payload instruments and integration after the platform gate, qualification-only engineering models, spares/repair/refurbishment, software R&D/training services, launch transport/ascent/deployment/in-orbit operation and end of life. Model operational lifetime or mission output separately. |
| required_metadata | manufacturer/model/serial and controlled configuration/drawings/BOM; flight hardware versus engineering model; aluminium alloy/temper and stock-versus-received-frame scope; bus-side payload interface with payload excluded; solar semiconductor technology/panel completeness/stowed delivery; filled Li-ion pack chemistry, BMS, state of charge and safety records; exact computer/radio/antenna/ADCS component part numbers and containment; actual thermal layers/pads and installed fittings; no propulsion/propellant; actual dry net M kg from calibrated complete-bus weighing with measured fixture tare and same-serial acceptance record; integral detached flight parts reconciled, no payload simulators/packaging/GSE; actual functional/environmental acceptance plan and tailored test levels/utility meters; manufacturing site/period/gate, outsourced services, allocation, upstream linkage, uncertainty and omissions |
| required_quality_disclosure | Foreground measured/calculated/missing status, actual mass/test evidence, unresolved identities/ranges, omission and upstream mismatch, allocation and uncertainties; candidate status and pending scientific review |
| update_trigger | Actual bus configuration/component chemistry or supplied scope, manufacturer acceptance/test plan, mass method, factory utilities or upstream data change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `isispace-platform` | literature | [ISISPACE Platforms](https://www.isispace.nl/product/platforms/) | Product Specification, Qualification and Acceptance Testing and platform FAQ: platform/payload interfaces and optional propulsion, integrated subsystem positioning/interface verification. Acceptance and qualification tables have distinct checks; thermal cycling does not establish universal thermal-vacuum test. No U-size, power/data rate, quoted lifetime, mass or acceptance threshold adopted. |
| `nasa-power` | official_guidance | [NASA Small Spacecraft Technology: 3.0 Power](https://www.nasa.gov/smallsat-institute/sst-soa/power-subsystems/) | 2026 online chapter: 3.2 current photovoltaic III-V junction architecture, 3.4 batteries and PMAD context. Technology identity and solar/battery configuration only; no efficiency, cell/pack mass, Wh/kg, lifetime or mandatory supplier choice used. Actual supplied chemistry and scope govern. |
| `nasa-structures` | official_guidance | [NASA Small Spacecraft Technology: 6.0 Structures, Materials, and Mechanisms](https://www.nasa.gov/smallsat-institute/sst-soa/structures-materials-and-mechanisms/) | 2026 online chapter, 6.1/6.2 structure material/modular-frame discussion and CubeSat primary structures: metallic/nonmetallic route differences, machined 6061/7075 examples and attached secondary thermal/power components. No nominal spacecraft weight limit, volume, universal alloy/temper or machining intensity adopted. 6061-T6 stock and thermal cards remain conditional actual foreground specifications. |
| `gsfc-gevs-2021` | standard | [GSFC-STD-7000B (2021): General Environmental Verification Standard](https://standards.nasa.gov/sites/default/files/standards/GSFC/B/0/gsfc-std-7000b_signature_cycle_04_28_2021_fixed_links.pdf) | Sections 2.1 general verification, 2.4.7 mass properties and 2.6 thermal verification: mission-dependent configuration, analytical/measurement distinction and verification planning context. Historical Goddard standard, not current universal requirement or method approval. Physical net-M weighing is this declared foreground protocol and needs actual records; GEVS analysis allowance does not establish actual measured M. No test levels, tolerance, duration, cycles or temperature imposed. |
