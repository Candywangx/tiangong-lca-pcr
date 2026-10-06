---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.self-propelled-road-roller
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Diesel-hydrostatic self-propelled drum road-roller manufacture

## 1. Scope and Applicability

This PCR covers manufacture of complete ride-on diesel-hydrostatic self-propelled drum road rollers. Separate single-drum, tandem-drum, smooth/padfoot and actual drum/tyre combination configurations; include declared vibration mechanism, diesel engine/aftertreatment, hydraulic travel/steering, operator station, guards and delivered integral sprinkling equipment. The public examples document tandem machines and do not establish universal specifications for other layouts. Exclude railway tampers, walk-behind rammers/plates, towed rollers, pneumatic-tyre-only rollers, battery-electric/hybrid drives, separately sold parts, field installation and road-compaction services. Factory functional testing belongs to manufacture and must be distinguished from operation on customer soil/asphalt. Road material, routine field fuel/water, achieved density, field emissions, maintenance and end-of-life are outside this manufacturing inventory. No operating lifetime or complete construction-site model is included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.self-propelled-road-roller |
| classification_refs | CPC 3.0 44424; narrower category context, not an accepted mapping |
| covered_products | Configured diesel-hydrostatic self-propelled drum road rollers with declared installed equipment |
| excluded_products | Rail tampers, walk-behind compactors, towed/tyre-only rollers, electric/hybrid drives, separate parts and compaction services |
| representative_product | One complete accepted empty configured factory-delivered roller |
| production_route | Received stock/modules; actual site chassis/drum fabrication, joining and conditional finishing; propulsion, vibration, steering and operator-system integration; factory testing |
| market_state | New accepted complete roller at factory gate, without service water/test ballast; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a machine for the declared diesel-hydrostatic drum-rolling function |
| How much | 1 kg of the same complete accepted configured machine using measured net mass M |
| How well | Meet the actual drawings, drum/drive configuration and factory acceptance specification. Record rotation/balance, hydraulic leaks, travel/steering/braking, installed vibration, sprinkler, controls and guard checks where applicable, with calibrated instruments and test duration. Declared rated emission stage, nominal vibration frequency and field density are not generic factory emission amounts or acceptance thresholds. |
| How long or cycle | One manufacturing delivery; no assumed service life or area-compaction cycle |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tamping machines and road rollers, self-propelled `cfdba1d0-b123-4fb3-8c75-2fc7c6f9b9c1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/serial or lot; self-propelled diesel-hydrostatic configuration; drum count/surface and installed exciter; drive/steering/brake assemblies; engine and exhaust treatment; tyre and operator-seat/cab/ROPS inclusion; integral sprinkling system; clean empty state without service water or temporary ballast; retained fuel/oil/coolant/reductant state; measured M; factory/site, period, purchased gates, actual test conditions and covered stages |

Use calibrated net-machine weighing for the exact delivery configuration. Manufacturer operating, maximum or catalogue empty weights with different cab/fluid options do not replace M. Kilogram results do not establish equivalent compaction service across configurations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `energy_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter unit; convert kWh to MJ using exactly 1 kWh = 3.6 MJ. Do not interpret the electricity property name as a combustion inventory. |
| `volume_units` | groundwater rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain measured volume and its conditions; do not invent gas density, water density or calorific value to switch to mass or energy. |
| `tyre_count` | `tyre` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count accepted installed pneumatic tyres. This exchange numerator is a count; net-machine mass is separately weighed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials and configured components received at declared supplier gates, with no implicit upstream steelmaking or component fabrication in foreground |
| starting_condition_role | Manufacturing input boundary for an accepted complete machine |
| product_classification_scope | Diesel-hydrostatic self-propelled drum road rollers within CPC 44424 context |
| recursive_input_rule | A purchased complete machine used as an input is a separately declared upstream product. Do not recursively regenerate this category; distinguish new production from refurbishment. |
| upstream_dataset_requirement | Link input-specific upstream datasets matching material, finished-component gate, geography, voltage and treatment state. Missing links remain disclosed coverage gaps. |
| disclosure | Report foreground factory stages, outsourced operations, component content, incoming transport coverage, protective packaging gate, capital-equipment policy and every exclusion; no complete cradle-to-gate claim without verified upstream and logistics closure. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | Include every actual operation and attributable rework from declared received inputs through factory acceptance; distinguish purchased parts from site fabrication to prevent duplication. Use documented route records. |  |
| `conditional_finish` | finishing | Activate only documented finishing operations and chemical recipes. Manufacturer examples establish possible routes, not universal requirements or recipes. |  |
| `exclude_site_compaction` | road_use | Keep site soil/asphalt inputs, road-compaction fuel, sprinkling water, compaction performance and operation emissions outside manufacture. Actual factory testing and its emissions remain inside the declared factory boundary. |  |

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

Include only sheet stock actually issued for the chassis, drum shell or hood. Record grade, width, thickness and incoming surface treatment; weigh issued stock less unopened returns. The confirmed stock identity remains unresolved; do not substitute contradictory alloy/non-alloy records.

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

Meter cutting, drilling, bending, drum-shell rolling and machining actually performed on site, including attributable extraction equipment. This UUID applies only to grid-average user-side 1–35 kV supply at the purchased gate; internal low-voltage use is not another purchased input. Other supply conditions require another verified identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
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

Only for documented all-position, single-pass self-shielded flux-cored carbon-steel welding consistent with this identity. Weigh consumed wire by spool issue and return; other welding consumables are separately identified, not substituted into this row.

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

###### Tire (`tyre`)

Only for combination configurations with new pneumatic rubber tyres in the stated product class. Collect number installed, size and load/speed specification; reference property is Number of items, so this row remains Item(s), not kg. Collect tyre mass separately for bill-of-material reconciliation.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
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

###### Complete steel compaction drum assembly (`drum`)

Record each bought-in complete drum, smooth or padfoot configuration, shell, hubs and included bearing/drive/exciter content and mass. Site rolled/welded drum manufacture uses its own stock and operations, not this purchased module too. Do not transfer catalogue shell thickness into material quantity.

- Selected flow: Complete steel compaction drum assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `hamm-hd120ivv-2023`

###### Complete eccentric-mass drum vibration exciter (`exciter`)

Only installed vibration configuration. Record shaft, eccentric masses, bearings and drive inclusion, balance evidence and mass. Static rollers have no assumed exciter; a wind-turbine rotor is not this mechanism.

- Selected flow: Complete eccentric-mass drum vibration exciter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bomag-bw120ad5-configuration`

###### Complete compression-ignition diesel engine (`diesel_engine`)

Record accepted bought-in engine model, rated state, aftertreatment/accessory and delivered-fluid inclusion and measured mass. Installed complete engines do not also receive foreground cast/forged engine-part inputs. Manufacturer emission certification is metadata, not a factory exhaust quantity.

- Selected flow: Complete compression-ignition diesel engine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `hamm-hd120ivv-2023`

###### Complete axial-piston hydrostatic drive pump (`hydraulic_pump`)

Only actual drive pump, with displacement/control type, delivered-fluid state and mass. A purchased power unit containing tank, pump and valves is a different finished assembly; avoid duplicated content.

- Selected flow: Complete axial-piston hydrostatic drive pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bomag-bw120ad5-configuration`

###### Complete rotary hydraulic travel motor (`hydraulic_motor`)

Only the installed travel motor; record displacement, casing, reduction inclusion and mass. Linear cylinders and pneumatic motors are not substitutes. Exciter-drive motors are separate identified installed components if present.

- Selected flow: Complete rotary hydraulic travel motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bomag-bw120ad5-configuration`

###### Complete planetary travel reduction gearbox (`reduction_gear`)

Only when separately purchased and installed, with ratio, lubricant delivery state and mass. Do not count one already included in a hydraulic motor or drum; wind-turbine gearboxes do not establish roller reduction identity.

- Selected flow: Complete planetary travel reduction gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete hydraulic steering cylinder (`steering_cylinder`)

Only installed articulated-steering cylinders. Record bore/rod, seals/fittings and mass; incomplete machined cylinder parts are not the complete assembly.

- Selected flow: Complete hydraulic steering cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `hamm-hd120ivv-2023`

###### Steel-wire-reinforced rubber hydraulic hose assembly (`hydraulic_hose`)

Record the actual finished hose with fittings, pressure grade, rubber formulation, length and measured mass. Raw rubber, bare tubing and a combined purchased hydraulic-parts set do not identify this exchange.

- Selected flow: Steel-wire-reinforced rubber hydraulic hose assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete lead-acid starter battery (`starter_battery`)

Only actual installed lead-acid starting battery. Record voltage, charge state, electrolyte and housing inclusion and mass; do not impose a stored-energy basis or count battery acid again when included. Other chemistries require different atomic rows.

- Selected flow: Complete lead-acid starter battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete roller operator seat (`operator_seat`)

Record one bought-in installed seat, suspension, belt inclusion and mass. Purchased cab content is not counted again; office furniture does not establish operator-seat identity.

- Selected flow: Complete roller operator seat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bomag-bw120ad5-configuration`

###### Complete steel roll-over protective frame (`rops`)

Only the declared delivered frame, with mounting, folding state, certification evidence and mass. Do not invent universal ROPS inclusion or a structural test mass from optional-equipment lists. Cab configurations require their own cab row and inclusions.

- Selected flow: Complete steel roll-over protective frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bomag-bw120ad5-configuration`

###### Complete road-roller electronic control module (`roller_control`)

Only the installed identified module. Record housing, software/configuration, connected safety function and mass. A generic PLC/cabinet-internals set or automotive controller is not assumed equivalent.

- Selected flow: Complete road-roller electronic control module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete roller water-sprinkler pump (`sprinkler_pump`)

Only the delivered pressure-sprinkling configuration. Record pump technology, motor inclusion and mass; tank capacity does not determine delivered or trial water mass.

- Selected flow: Complete roller water-sprinkler pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bomag-bw120ad5-configuration`

###### Polyurethane drum scraper blade (`drum_scraper`)

Only when the actual scraper is polyurethane; record formulation, dimension and mass. Steel or other-polymer scrapers need separate material-specific rows, and spring/hinge content is separately identified.

- Selected flow: Polyurethane drum scraper blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished engine lubricating oil (`engine_oil`)

Only actual supplied grade and base-oil formulation; weigh new fill and unrecovered testing consumption, subtract returned oil, and exclude oil already delivered in the bought-in engine. Hydraulic oil is a distinct exchange.

- Selected flow: Finished engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Aqueous ethylene-glycol engine coolant, concentration declared (`coolant`)

Only if the actual cooling system uses this premixed formulation. Record supplied mass, glycol concentration/additives and retained delivery state; do not treat solution mass as pure glycol or invent density. Supplier-filled coolant is not counted again.

- Selected flow: Aqueous ethylene-glycol engine coolant, concentration declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Aqueous urea SCR reducing solution, concentration declared (`scr_solution`)

Only for actual SCR-equipped delivery and factory testing. Record supplier concentration, mass, consumed/retained/returned quantities; no generic tank-fill amount or concentration is prescribed. Urea production feedstock is not the same finished solution.

- Selected flow: Aqueous urea SCR reducing solution, concentration declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `hamm-hd120ivv-2023`

### Process: Factory acceptance and net-mass determination (`acceptance`)

#### Inputs

##### Product flows

###### Alternating current (`test_electricity`)

Meter factory test stands, battery charging and hydraulic/drum balance, control, brake and sprinkler checks where applicable. Track intervals by configuration, including rework. Engine diesel is a separate input; no site compaction energy is counted.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Diesel fuel, supplier composition declared (`factory_diesel`)

Only actual petroleum-origin distilled/refined diesel with supplier-confirmed composition for factory engine testing and retained delivery fuel. Weigh issue minus unused returns; separately record consumed and retained amounts. Other blends require a verified formulation-specific identity. Volume records require measured batch density/temperature before mass use; no default density or heating value.

- Selected flow: Diesel fuel, supplier composition declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Process Water (`trial_water`)

Only treated purchased water consumed in actual factory sprinkler and leak tests; collect supplier mass or weighing and recovery/discharge records. Delivered net roller reference excludes the service sprinkling-water load. Internal circulation is not another purchased amount.

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

###### Tamping machines and road rollers, self-propelled (`finished_machine`)

One kilogram normalizes the same complete accepted configured roller. Include delivered frame, drums, exciter, diesel engine and aftertreatment, hydrostatic system, steering, controls, seat and specified protection, tyres when fitted, and retained delivery fluids. Exclude temporary test ballast, sprinkling water, road material, loose accessories and transport packaging. Declare retained fuel, oil and coolant state explicitly; operating or catalogue shipping weight is not this mass.

- Selected flow: Tamping machines and road rollers, self-propelled `cfdba1d0-b123-4fb3-8c75-2fc7c6f9b9c1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`

##### Waste flows

###### Waste mineral hydraulic oil from factory tests (`test_oil_waste`)

Only segregated mineral hydraulic oil transferred as waste after factory tests. Weigh and characterize water, solids and destination; do not use a mixed lubricating-oil wastewater formulation or include retained/reused oil. Other used fluids remain separate.

- Selected flow: Waste mineral hydraulic oil from factory tests
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

##### Elementary flows

###### carbon dioxide (fossil) (`factory_co2`)

Only quantified fossil-origin carbon dioxide released by actual factory engine testing to air / unspecified, excluding indoor exposure, water, soil and long-term categories. Obtain integrated released CO2 mass in kg from the calibrated test-laboratory report with its integration method. Preserve species-specific concentration, total exhaust flow, test duration, temperature, pressure and wet/dry sampling basis. Establish fossil-origin evidence for every carbon-contributing input, including fuel, lubricating oil and SCR reductant; unknown or biogenic carbon must not be assigned to this fossil flow. If capture changes the boundary, record actual released quantity. No default combustion factor or field emissions are inferred.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### carbon monoxide (fossil) (`factory_co`)

Only separately quantified fossil-origin carbon monoxide from actual factory testing to air / unspecified. Retain analyser calibration, chemical specificity, laboratory-integrated released CO mass in kg, integration method, temperature, pressure and wet/dry reporting basis. Establish fossil-carbon origin for all contributing inputs. Carbon dioxide and aggregated hydrocarbons do not establish CO mass; unknown measurements are not zero.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Nitrogen dioxide emission to unspecified air (`factory_no2`)

Only chemically resolved quantified NO2 at the actual factory release. Record species-specific measurement, exhaust quantity and conditions. NO, N2O, nitrite and an aggregate NOx value reported as NO2-equivalent do not identify NO2 emission; each actual other species needs its own row and identity.

- Selected flow: Nitrogen dioxide emission to unspecified air
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
| `cp_forming` | `forming` | Stock cutting, forming and machining | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater and Item(s) for tyres. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_joining` | `joining` | Structural welding and dressing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater and Item(s) for tyres. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_wet_surface` | `wet_surface` | Aqueous cleaning and preparation | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater and Item(s) for tyres. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_powder_finish` | `powder_finish` | Powder application and curing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater and Item(s) for tyres. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_assembly` | `assembly` | Configured machinery assembly | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater and Item(s) for tyres. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_acceptance` | `acceptance` | Factory acceptance and net-mass determination | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions; test cycle and duration; engine and aftertreatment configuration; fuel/reductant composition and carbon origin; species; temperature, pressure, wet/dry basis; analyser and exhaust-flow calibration; laboratory-integrated released species mass in kg and method; capture/release boundary; fluid issue, return and delivery retention | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater and Item(s) for tyres. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. For exhaust rows use the calibrated laboratory integrated released mass in kg, with chemical specificity, integration method and original sampling basis; no assumed gas-density conversion or generic combustion factor. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_packaging` | `packaging` | Shipment protection at factory gate | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater and Item(s) for tyres. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |

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
| `validate_balance` | coverage | Reconcile installed mass, stock, waste, retained fluids and purchased parts using the actual BOM; independently check tyre counts. Reconcile utilities by stage; internal transfers cancel. Explain differences against recorded measurement uncertainty, without a fabricated numerical tolerance. |  |
| `validate_completeness` | dataset | Check every conditional stage against route evidence. Require missing chemicals, parts, test media and actual emissions to be split and collected before claiming a complete inventory; prohibit cradle-to-gate or service comparisons while upstream or functional coverage is incomplete. |  |
| `validate_allocation` | shared_operations | Require complete driver records and justification for allocation and scrap treatment; document sensitivity where another defensible allocation may change results. | `ghg-product-allocation-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground process for a configured accepted machine |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to a declared machinery supply model with identical configuration and disclosed upstream coverage |
| excluded_use | Road compaction service, achieved density, field fuel/emissions or life-cycle comparisons between different drum/drive configurations without separate functional modelling |
| required_metadata | Model, configuration, empty state, M, retained fluids, manufacturer/site, reporting period, process route, voltage/geography, supplier gates, transport/packaging scope and allocation |
| required_quality_disclosure | Measured versus estimated quantities; unresolved identities; unmeasured emissions and components; upstream linkage completeness; uncertainty, data age and configuration limitations |
| update_trigger | Changed mechanism, capacity, BOM, coating chemistry, supplied component, energy mix, acceptance specification or mass protocol |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `hamm-hd120ivv-2023` | handbook | HAMM, HD+ 120i VV (H304), Technical data, 313954 en-GB V3, copyright 2023, PDF p.2, engine, drum, steering, sprinkling and equipment sections. https://www.hamm.eu/binary/full/o250281v83_HD_120i_VV_H304_enGB.pdf | Historical/model-specific engine, aftertreatment, drum and delivered-option example. Operating/empty catalogue weights, capacities, emission standard and vibration data are not factory amounts or generic acceptance thresholds. |
| `bomag-bw120ad5-configuration` | handbook | BOMAG, BW 120 AD-5 official product page, Specifications: Standards and Options. https://www.bomag.com/apac-en/machinery/categories/asphalt-rollers/light-tandem-rollers/bw-120-ad-5-88042/ | Hydrostatic travel/vibration, scraper, sprinkling, operator-seat and optional protection configuration only. No life, factory intensity or universal fluid grade. |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy only; no current comprehensive standard conformance assertion. |
