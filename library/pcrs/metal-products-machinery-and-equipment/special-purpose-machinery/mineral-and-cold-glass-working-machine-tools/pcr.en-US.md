---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-and-cold-glass-working-machine-tools
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mineral and cold-glass mechanical machine-tool manufacture

## 1. Scope and Applicability

This PCR covers manufacture of complete stationary machine tools for conventional mechanical cutting, drilling, milling, grinding or edging of stone, ceramics, cured concrete and similar mineral solids, or cold machining of flat glass. It includes the declared installed bed/frame, spindle and axis drives, controls, guards, workholding and delivered integral water/vacuum systems. Declare one material-working configuration and its delivery gate. Exclude laser, water-jet and other non-conventional material-removal machines already covered by their material PCR, metal-working machines, mineral crushing/mixing plant, glass melting or hot forming, portable hand tools, separately sold tooling and components, optical-glass finishing and asbestos-cement-specific configurations. Evidence here does not establish those specialized methods. Installation, routine customer workpieces, water, sludge, dust, tool replacement, maintenance and end-of-life are outside machinery manufacture. Factory acceptance trials are included when actually performed and recorded. No machining service or complete factory-line model is included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-and-cold-glass-working-machine-tools |
| classification_refs | CPC 3.0 44221; narrower category context, not an accepted mapping |
| covered_products | Configured mineral-solid mechanical saws and machining machines; cold flat-glass drilling, grinding and edging machines |
| excluded_products | Non-conventional removal machines; metal-working machine tools; crushing plant; hot-glass forming; optical or asbestos-specific configurations; hand tools, separate tools and services |
| representative_product | One accepted complete stationary machine in its specified factory-shipped configuration |
| production_route | Received stock or finished cast/frame modules; conditional site forming, joining and finishing; motion/spindle/water/control integration; factory acceptance |
| market_state | New accepted empty machine at factory delivery gate; transport packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared conventional mineral or cold-flat-glass machining machine |
| How much | 1 kg of the same complete accepted configured machine using measured net mass M |
| How well | Meet declared drawings and configuration-specific acceptance specifications. Record axis alignment/positioning, spindle rotation/runout, guards and interlocks, water leaks and vacuum hold where applicable. Declare loaded-test coupon material, geometry, tool and sampling when trials occur. Use the actual manufacturer acceptance criteria and measuring instruments; no universal accuracy, throughput or wheel life is prescribed. |
| How long or cycle | One manufacturing delivery; no assumed operating lifetime or workpiece-production cycle |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machine-tools for working stone, ceramics, concrete, asbestos-cement or like mineral materials or for cold working glass `0ff1d868-5d04-4e5e-9c92-0118f4e2172b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and serial/lot; target material and cold mechanical operation; bed/frame and table; axis count and travel; spindle/drive and electrical class; installed tool and wear-part state; controls and guards; workholding/vacuum/wet system; supplied versus site-fitted modules; empty clean state and retained delivery fluids; measured M; factory/site, period, upstream supplier gates and covered stages |

Weigh the same factory-delivered configuration, including its declared installed tool and retained fluids, without workpieces, spent trial slurry or packaging. Catalogue shipping mass cannot substitute for M. A kilogram result does not establish equivalent cutting or edging service between machines.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `energy_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter unit; convert kWh to MJ using exactly 1 kWh = 3.6 MJ. Do not interpret the electricity property name as a combustion inventory. |
| `volume_units` | groundwater rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain measured volume and its conditions; do not invent gas density, water density or calorific value to switch to mass or energy. |
| `area_units` | `granite_coupon` | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Preserve measured slab area as the exchange numerator. Net-machine M remains kg; area and mass are not interchangeable, and granite coupon mass is collected separately for balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials and configured components received at declared supplier gates, with no implicit upstream steelmaking or component fabrication in foreground |
| starting_condition_role | Manufacturing input boundary for an accepted complete machine |
| product_classification_scope | Conventional mechanical machine tools for mineral solids and cold glass within CPC 44221 context |
| recursive_input_rule | A purchased complete machine used as an input is a separately declared upstream product. Do not recursively regenerate this category; distinguish new production from refurbishment. |
| upstream_dataset_requirement | Link input-specific upstream datasets matching material, finished-component gate, geography, voltage and treatment state. Missing links remain disclosed coverage gaps. |
| disclosure | Report foreground factory stages, outsourced operations, component content, incoming transport coverage, protective packaging gate, capital-equipment policy and every exclusion; no complete cradle-to-gate claim without verified upstream and logistics closure. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | Include every actual operation and attributable rework from declared received inputs through factory acceptance; distinguish purchased parts from site fabrication to prevent duplication. Use documented route records. |  |
| `conditional_finish` | finishing | Activate only documented finishing operations and chemical recipes. Manufacturer examples establish possible routes, not universal requirements or recipes. |  |
| `exclude_customer_use` | customer_use | Keep customer workpieces, operating water, cutting sludge, replacement tools, installation, maintenance and disposal outside machinery manufacturing. Factory loaded trials remain included when actually performed. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Stock cutting, forming and machining | conditional | Only when the site fabricates these parts; otherwise record purchased finished parts separately | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `joining` | Structural welding and dressing | conditional | Only when the site joins structural parts by welding | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `wet_surface` | Aqueous cleaning and preparation | conditional | Only when aqueous cleaning or conversion treatment is actually performed; activate individual rows from the documented recipe | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `powder_finish` | Powder application and curing | conditional | Only when actual finishing uses powder; electrical curing rows only for actual electrically cured powder | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `assembly` | Configured machinery assembly | required | Every accepted complete machine; activate component rows only when actually installed | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `acceptance` | Factory acceptance and net-mass determination | required | Every accepted complete machine | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `packaging` | Shipment protection at factory gate | conditional | Only when shipment protection is inside the declared delivery gate; disclose its exclusion otherwise | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |

Process records are separate contributors to one final accepted output, not seven separately traded reference products. Retain traceable internal-part transfer and bill-of-material records; internal transfers cancel within this foreground and do not receive duplicated upstream burdens. The cards below are explicit route-conditioned exchanges. Add each actual additional part, chemical, fuel, packaging piece, wastewater stream or measured elementary substance as its own identified row; absence of a card is not a cut-off permission. For outsourced finishing, replace site chemistry and energy with the exact purchased service or finished-part record and disclose its coverage.

### Process: Stock cutting, forming and machining (`forming`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy steel sheet (`steel_sheet`)

Include only sheet stock actually issued for the frame, guard or water tank. Record grade, width, thickness and incoming surface treatment; weigh issued stock less unopened returns. The confirmed stock identity remains unresolved; do not substitute contradictory alloy/non-alloy records.

- Selected flow: Hot-rolled non-alloy steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Alternating current (`forming_electricity`)

Meter cutting, drilling, bending and machining performed on site, including attributable extraction equipment. This UUID applies only to grid-average user-side 1–35 kV supply at the purchased gate; internal low-voltage use is not another purchased input. Other supply conditions require another verified identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Grey cast-iron machine bed casting (`bed_casting`)

Only a supplier-finished bed casting actually received for the configured machine. Record grade, stress-relief and machining state, dimensions and mass; generic primary cast iron does not establish this finished casting. Site machining is inventoried separately, and no foreground foundry is assumed.

- Selected flow: Grey cast-iron machine bed casting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_offcut`)

Weigh segregated steel offcuts leaving the factory untreated. Record alloy fractions and destination; internal reuse is not an exported waste and oily swarf needs its own row.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

### Process: Structural welding and dressing (`joining`)

#### Inputs

##### Product flows

###### Flux Cored Wire (`flux_wire`)

Only for documented self-shielded flux-cored carbon-steel welding consistent with this identity. Weigh consumed wire by spool issue and return; other welding consumables are separately identified, not substituted into this row.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Copper-coated solid carbon-steel welding wire (`solid_wire`)

Only for the documented solid-wire route. Record wire designation and consumed mass; do not apply the flux-cored wire UUID.

- Selected flow: Copper-coated solid carbon-steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Argon gas for welding (`argon`)

Only when pure argon is actually supplied and consumed; cylinder net mass records establish quantity. An argon/carbon-dioxide blend is a different formulated gas and must be a separate row with its composition.

- Selected flow: Argon gas for welding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Alternating current (`joining_electricity`)

Meter welding, weld dressing and extraction equipment; apply the same purchased supply condition as forming_electricity. Do not count the common factory meter twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

### Process: Aqueous cleaning and preparation (`wet_surface`)

#### Inputs

##### Product flows

###### Sodium hydroxide cleaning reagent, supplied concentration declared (`caustic`)

Only if the actual cleaning recipe uses sodium hydroxide. Collect supplied solution mass and concentration without treating it as pure substance mass; 95–98% grade identity is not applied to unknown-concentration baths. Each additional cleaning chemical needs its own atomic row.

- Selected flow: Sodium hydroxide cleaning reagent, supplied concentration declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

###### Process Water (`supplied_water`)

Purchased process water for washing and rinsing only; weigh or obtain supplier water mass records. Record treatment state and supplier gate; never identify this technosphere input as a water resource or count the supplier extraction again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

###### Alternating current (`wet_electricity`)

Meter bath circulation, rinsing and water treatment within the declared boundary, under the purchased supply condition already stated.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

##### Elementary flows

###### ground water (`well_water`)

Only for groundwater abstracted directly by this foreground site for its baths and rinses. Meter gross abstraction in m3 and identify country and well; Resources / Resources from water / Renewable material resources from water. No scarcity class is asserted. Do not also record the same water as purchased process water.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

#### Outputs

##### Waste flows

###### Spent aqueous alkaline cleaning solution (`alkaline_effluent`)

Only when this single liquid waste stream leaves the boundary. Measure solution mass, pH and constituents and identify receiving treatment; it is a waste transfer, not an elementary water emission.

- Selected flow: Spent aqueous alkaline cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

### Process: Powder application and curing (`powder_finish`)

#### Inputs

##### Product flows

###### Powder Coating (`powder`)

For the actual dry powder formulation only. Reconcile fresh powder and external returns with recovered powder circulation; do not count internal recirculation as another purchased input. Record binder and colour, without assuming polyester.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powder_finish.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powder_finish`

###### Alternating current (`powder_electricity`)

Meter powder application, compressed-air generation attributable to this operation and electrically heated curing when present, with the stated purchased supply condition.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powder_finish.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powder_finish`

#### Outputs

##### Waste flows

###### Powder coating waste (`powder_residue`)

This identity applies only to dry overspray at a Chinese plant; other geography needs a separately verified identity. Weigh only collected dry overspray exported as waste; reclaimed powder reused internally is excluded. Keep solid powder separate from wastewater or liquid primer sludge.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powder_finish.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powder_finish`

### Process: Configured machinery assembly (`assembly`)

#### Inputs

##### Product flows

###### Steel radial ball bearing (`ball_bearing`)

Record only this specific installed bearing type and mass; do not use a wind-turbine pitch bearing or a bearing cage identity.

- Selected flow: Steel radial ball bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Carbon-steel bolt (`fastener`)

Record grade, coating and mass of installed bolts; nuts and washers are separately recorded if present and must not be merged into this bolt row.

- Selected flow: Carbon-steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Hydraulic Fluid (`hydraulic_oil`)

Only for the actual finished hydraulic oil compatible with the confirmed distilled/hydrogenated/refined supply route. Record grade and base-oil origin; collect new fill plus unrecovered testing consumption, excluding fluid already supplied in a purchased hydraulic module.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_electricity`)

Meter assembly tools, lifts and attributable local utilities, with the stated purchased supply condition. Include rework attributable to accepted machines.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete mechanical machining spindle assembly (`spindle`)

Record accepted bought-in spindle, speed range, cooling feed, bearings and drive inclusion and measured mass. Separate site-fabricated spindle parts; do not count bearings or motor again if included in this assembly.

- Selected flow: Complete mechanical machining spindle assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Electric motor (`ac_motor`)

Only an installed purchased AC motor for special-purpose machinery assembly in China matching the verified product class. Record motor type, rating, delivered mass and included parts; other countries or DC configurations require another identity.

- Selected flow: Electric motor `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Electric drive, servo motor (`servo_motor`)

Only when a Chinese assembly uses a purchased brushless AC axis servo matching the verified class. Other geography or DC drives need a separate identity. Record electrical type, torque, encoder and measured mass; an entire pitch drive or a servo intended for another machine is not substituted.

- Selected flow: Electric drive, servo motor `89a4fdf2-5cce-4df3-b372-14407f92dd28`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Hardened steel linear guide rail (`guide_rail`)

Record only this installed rail stock or finished rail with declared grade and heat treatment, length and mass. Carriages are separately identified; a rack is not a guide rail.

- Selected flow: Hardened steel linear guide rail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete steel ball-screw and nut assembly (`ball_screw`)

Conditional positioning route only. Record screw lead, nut inclusion, accuracy class and mass; ordinary steel screws or fasteners do not identify the motion assembly. Rack-and-pinion systems need their own specific rows.

- Selected flow: Complete steel ball-screw and nut assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Machine-tool CNC control cabinet (`cnc_unit`)

Only when delivered as one complete purchased cabinet with declared controller, drives and wiring content. Record mass; a bare electronic unit is not a wired cabinet. Separate drive-motor quantities and avoid duplicated included wiring or drives.

- Selected flow: Machine-tool CNC control cabinet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Pump (`water_pump`)

Only if the delivered wet-working configuration includes this complete pump. Record impeller, casing, motor inclusion, delivered state and mass; no operating water consumption is inferred from rating.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete vacuum pump for workholding (`vacuum_pump`)

Only when delivered with the declared suction-clamping system. Record pump technology, drive and fluid inclusion and mass; vacuum service or refrigeration compressors cannot replace this product.

- Selected flow: Complete vacuum pump for workholding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Vulcanized rubber vacuum suction pad (`vacuum_pad`)

Only actual pads installed for slab workholding. Record rubber formulation, contact size and mass; distinguish pads from the separate vacuum generator and purchased integrated fixtures.

- Selected flow: Vulcanized rubber vacuum suction pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Segmented diamond circular saw blade with steel core (`diamond_blade`)

Only the blade fitted and included in the factory-delivered machine, with actual diameter, segment bond and measured mass. Separately record factory trial wear if measurable; customer spare blades and operating replacement rates are excluded. Diamond wire is a different physical tool.

- Selected flow: Segmented diamond circular saw blade with steel core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Diamond-bonded cup grinding wheel for glass edging (`diamond_wheel`)

Only an installed delivered cup wheel of the declared bond and geometry. Record mass and tool position; ordinary loose abrasives or metal-finishing wheels are not assumed equivalent. Polishing wheels require separate bond-specific rows if included.

- Selected flow: Diamond-bonded cup grinding wheel for glass edging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bavelloni-ve-configuration`

###### Plywood table-top strip (`plywood_top`)

Only when the actual top is plywood, not the alternative composite plastic. Record veneer species, glue specification, dimensions and measured mass; thickness-limited veneer sheets cannot identify plywood.

- Selected flow: Plywood table-top strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Hot-dip-galvanized fabricated steel work-table frame (`galvanized_frame`)

Only when bought in as this complete treated frame. Record steel content, coating state and mass; a galvanizing process name is not an identified frame. Do not also include its stock, weld wire or galvanizing chemicals in site foreground. If finishing is contracted on a site-built frame, separately record a precisely specified galvanizing service.

- Selected flow: Hot-dip-galvanized fabricated steel work-table frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Hardened steel toothed axis rack (`axis_rack`)

Only actual rack-and-pinion axis drive; record grade, pitch, delivered state, length and mass. Do not merge with linear guide rails.

- Selected flow: Hardened steel toothed axis rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

###### Hardened steel axis drive pinion (`axis_pinion`)

Only the installed pinion matched to the rack; record tooth geometry, heat treatment and mass. Avoid counting a pinion contained in a purchased drive assembly twice.

- Selected flow: Hardened steel axis drive pinion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `breton-genya-configuration`

### Process: Factory acceptance and net-mass determination (`acceptance`)

#### Inputs

##### Product flows

###### Alternating current (`test_electricity`)

Meter factory axis motion, spindle runout, guard/interlock, water-leak and vacuum-clamping checks where applicable, with declared test equipment and duration. Loaded cutting or edging trials are conditional factory activities; actual coupons, water and waste are separately inventoried. Customer production is excluded.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Float glass and surface ground or polished glass, in sheets (`glass_coupon`)

Only actual factory trials using finished uncoated annealed soda-lime float-glass plates in this verified product class. Record composition, thickness, issued mass and reusable returns; laminated glass, coated glass and customer production inputs are distinct.

- Selected flow: Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Granite slab product (`granite_coupon`)

Only factory trials using natural architectural granite slabs already cut, ground and polished in the verified delivery state. Collect consumed area in m2 from identified lengths/widths and issue/returns, recording thickness and surface state. Collect mass separately for material balance; no density or area-to-mass factor is assumed. Other raw stone or surface states require a different identity.

- Selected flow: Granite slab product `d85d190e-3c45-46ab-98bb-a3a2c0db4441`
- Flow property / unit: Net calorific value `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Process Water (`trial_water`)

Only treated purchased water consumed for factory wet trials. Measure supplied mass, recovery and retained state; circulating water is not repeatedly counted. Same water supplier abstraction is not a site resource input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Machine-tools for working stone, ceramics, concrete, asbestos-cement or like mineral materials or for cold working glass (`finished_machine`)

One kilogram normalizes the same complete accepted configured machine. Include bed/frame, installed motion and spindle drives, controls, guards and delivered integral water/vacuum units, declared installed tool and retained delivery fluids. Empty the work table and remove test workpieces, slurry, loose replacement tooling and transport packaging. Record factory-shipped versus site-fitted housings without inventing a fully site-installed delivery.

- Selected flow: Machine-tools for working stone, ceramics, concrete, asbestos-cement or like mineral materials or for cold working glass `0ff1d868-5d04-4e5e-9c92-0118f4e2172b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`

##### Waste flows

###### Waste aqueous soda-lime glass machining slurry (`glass_slurry`)

Only a segregated wet glass-trial slurry transferred to treatment. Measure wet mass, solids content, composition and destination; separate dry cullet and stone slurry. It is a waste transfer, not an elementary water emission.

- Selected flow: Waste aqueous soda-lime glass machining slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Dry soda-lime glass test offcuts (`glass_cullet`)

Only actual dry segregated glass trial offcuts exported from the factory. Weigh mass and declare coating/contamination; exclude internally reused test coupons and wet slurry.

- Selected flow: Dry soda-lime glass test offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Dry granite test offcuts (`granite_offcut`)

Only actual dry segregated granite trial offcuts leaving the gate; weigh and declare stone identity. If wet stone sludge is generated, it has a separate composition-specific row.

- Selected flow: Dry granite test offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

### Process: Shipment protection at factory gate (`packaging`)

#### Inputs

##### Product flows

###### Polyethylene film (`pack_film`)

Only when polyethylene film actually accompanies shipment. Weigh film applied and waste separately; it contributes to inventory but not accepted net machine mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

###### Corrugated paperboard protective pad (`pack_board`)

Only where used; record grade, recycled content and mass. A specified fibre-mixture box is not assumed to represent this unspecified protective pad.

- Selected flow: Corrugated paperboard protective pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `direct_attribution` | shared_operations | Use job tickets and submetering before allocation. Where a common meter remains, require a measured causal driver such as machine-hours for the identified operation, with all participating jobs and idle load disclosed; divide the attributable quantity by accepted units of the same configuration before mass normalization. | `ghg-product-allocation-2011` |
| `coproduct_decision` | saleable_outputs | Do not assume scrap is a co-product. Disclose destination and legal/product status. If multiple saleable co-products actually occur, seek subdivision; justify a physical relation or, when unavailable, documented economic/other allocation with sensitivity. No universal mass share or avoided-steel credit is prescribed. | `ghg-product-allocation-2011` |
| `rework_scrap` | manufacturing_losses | Retain rework and rejected-unit burdens attributable to the accepted reporting batch. Record recovered internal material once and exported wastes separately. Disclose upstream recycled-content method and any downstream treatment separately to prevent double credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | accepted net mass | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each acceptance | complete reporting batch | same model and configuration | accepted net mass per machine | calibration, weighing and signed acceptance records |
| `cp_forming` | `forming` | Stock cutting, forming and machining | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater; m2 from measured granite coupon area. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, m2 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_joining` | `joining` | Structural welding and dressing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater; m2 from measured granite coupon area. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, m2 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_wet_surface` | `wet_surface` | Aqueous cleaning and preparation | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater; m2 from measured granite coupon area. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, m2 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_powder_finish` | `powder_finish` | Powder application and curing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater; m2 from measured granite coupon area. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, m2 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_assembly` | `assembly` | Configured machinery assembly | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater; m2 from measured granite coupon area. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, m2 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_acceptance` | `acceptance` | Factory acceptance and net-mass determination | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater; m2 from measured granite coupon area. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, m2 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_packaging` | `packaging` | Shipment protection at factory gate | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater; m2 from measured granite coupon area. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, m2 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

The finished_machine output is fixed at 1 kg and is not divided again. Apply the conversion to each other applicable row using the same configuration and batch; quantity numerator units remain unchanged. Mixed configurations must be separated, not averaged by count with a catalogue mass.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_trace` | all rows | Trace every input to installed BOM, route and accepted unit; supplier finished parts do not also receive raw-stock burdens. Disclose remaining components as missing coverage until separate atomic records are added. | drawings, BOM, supplier receipts |
| `basis_quality` | cp_mass | M must be positive measured net mass, with the same delivered configuration, fluid state and acceptance gate as all collected exchanges. | calibration and weighing records |
| `coverage_quality` | all processes | Document full batch temporal coverage, meter overlap, rejects, rework, stock changes, outsourced stages and unmeasured emissions. A missing record is unknown, not zero or not_applicable. | ledger, coverage matrix and measurement uncertainty |
| `chemistry_quality` | wet_surface; powder_finish | Verify recipe, concentration and SDS for each supplied formulated chemical; characterize each outgoing waste stream and identify treatment separately from environmental emissions. | recipe, SDS, analyses and transfer tickets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Reject missing qualifiers, payload/gross mass substitution, non-positive M or mismatch between configuration, cp_mass and finished_machine. Require 1 kg output and explicit normalize_mass on every non-reference applicable row. |  |
| `validate_atomic` | inventory | Require one physical exchange per row, verified public identity when supplied, correct property/unit, localized display and medium. Unresolved UUIDs do not authorize proxy substitution or mixed rows. |  |
| `validate_balance` | coverage | Reconcile installed mass, stock, waste, retained fluids and purchased parts using the actual BOM; reconcile declared installed tooling and table-top content. Reconcile utilities by stage; internal transfers cancel. Explain differences against recorded measurement uncertainty, without a fabricated numerical tolerance. |  |
| `validate_completeness` | dataset | Check every conditional stage against route evidence. Require missing chemicals, parts, test media and actual emissions to be split and collected before claiming a complete inventory; prohibit cradle-to-gate or service comparisons while upstream or functional coverage is incomplete. |  |
| `validate_allocation` | shared_operations | Require complete driver records and justification for allocation and scrap treatment; document sensitivity where another defensible allocation may change results. | `ghg-product-allocation-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground process for a configured accepted machine |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to a declared machinery supply model with identical configuration and disclosed upstream coverage |
| excluded_use | Customer stone/glass machining service, finished-workpiece quality or whole-life tool performance; comparisons across different machining configurations without additional functional modelling |
| required_metadata | Model, configuration, empty state, M, retained fluids, manufacturer/site, reporting period, process route, voltage/geography, supplier gates, transport/packaging scope and allocation |
| required_quality_disclosure | Measured versus estimated quantities; unresolved identities; unmeasured emissions and components; upstream linkage completeness; uncertainty, data age and configuration limitations |
| update_trigger | Changed mechanism, capacity, BOM, coating chemistry, supplied component, energy mix, acceptance specification or mass protocol |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `breton-genya-configuration` | handbook | Breton, Genya official product page, Technological highlights: delivery fully assembled; work table; bridge and spindle; vacuum cups. https://breton.it/en_eu/products/machines-and-lines/breton-genya | Model configuration only; no mandatory factory route, manufacturing intensity, catalogue mass or lifetime is adopted. |
| `bavelloni-ve-configuration` | handbook | Bavelloni, VE Series straight-line edging machines, undated retained brochure with 2015 PDF creation metadata, PDF p.11 / printed p.11, VE SERIES 11 and Tools Configuration. https://www.bavelloni.com/wp-content/uploads/2016/03/VERTICAL-EDGERS-VE-SERIES-ITA-ENG.pdf | Historical/model-specific float or laminated glass edging, wheel and conveyor configuration only; no universal thickness threshold, factory energy or life is prescribed. |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy only; no current comprehensive standard conformance assertion. |
