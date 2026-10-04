---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.animal-feed-preparation-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farm-type animal feed preparation machinery manufacture

## 1. Scope and Applicability

This PCR covers manufacture of complete farm-type animal feed grinding, rolling and mixing machinery: stationary or tractor-driven grinders, grinder-mixers and non-self-propelled TMR mixer wagons. Include delivered integral dosing, weighing, dust collection and discharge mechanisms. Distinguish grinding, rolling and mixing configurations, drives, chamber and wear-contact construction. Exclude non-farm industrial cereal milling machines covered by the existing milling-industry PCR; industrial steam conditioning, pelleting or extrusion machines/lines; whole feed plants; stand-alone transport trailers, harvesters, bedding equipment and distributors without a preparation function; self-propelled carriers, tractors and separately sold parts. Feed manufacture and animal feeding are different life cycles: ingredients, routine farm energy, ration delivery, feed yield, livestock emissions, maintenance and disposal are outside this machinery manufacturing inventory. No feed-preparation service is included. This bounded synthesis is narrower than the classification title and does not assert industrial feed-line coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.animal-feed-preparation-machinery |
| classification_refs | CPC 3.0 44192; narrower category context, not an accepted mapping |
| covered_products | Farm-type grinding, rolling and mixing machines; stationary, tractor-driven or trailed configurations |
| excluded_products | Non-farm cereal milling; industrial thermal/pelleting/extrusion lines; carriers, tractors, transport trailers, sold parts and feed products/services |
| representative_product | One complete accepted empty configured farm feed preparation machine |
| production_route | Purchased stock and components; actual site forming, joining, conditional finishing, assembly and factory functional acceptance |
| market_state | New empty complete machine at factory gate; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide machinery for the declared feed grinding, rolling or mixing function |
| How much | 1 kg of a complete accepted configured machine using measured net mass M |
| How well | Meet declared drawings, drive, chamber, wear-parts and installed guard/control specifications. Record factory rotation, interlock, hydraulic leak, auger clearance and calibrated weighing checks where applicable. Loaded trials require declared feed/tracer, sampling, recovery and model-specific acceptance criteria; no universal mixing coefficient, throughput or particle size. |
| How long or cycle | One manufacturing delivery; no assumed operating lifetime, feed throughput or animal-production cycle |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machinery for preparing animal feeding stuffs `5c609027-b680-42b7-8e43-7191da721074` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and serial/lot; farm-type grinding/rolling/mixing function; stationary or trailed; chamber capacity and empty dry state; auger/hammer/roller/screen configuration; wear-contact grades; electric or PTO drive; installed dust collector, dosing, hydraulic, weighing and discharge options; included guards, axle and tyres; retained fluids; M; site, period, supplier gates and stage coverage |

Feed payload, catalogue shipping mass and maximum loaded mass cannot substitute for measured net machine mass. Results per kilogram do not establish equivalent grinding or mixing service across configurations.

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
| product_classification_scope | Farm-type grinding, rolling and mixing machinery within CPC 44192 context |
| recursive_input_rule | A purchased complete machine used as an input is a separately declared upstream product. Do not recursively regenerate this category; distinguish new production from refurbishment. |
| upstream_dataset_requirement | Link input-specific upstream datasets matching material, finished-component gate, geography, voltage and treatment state. Missing links remain disclosed coverage gaps. |
| disclosure | Report foreground factory stages, outsourced operations, component content, incoming transport coverage, protective packaging gate, capital-equipment policy and every exclusion; no complete cradle-to-gate claim without verified upstream and logistics closure. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | Include every actual operation and attributable rework from declared received inputs through factory acceptance; distinguish purchased parts from site fabrication to prevent duplication. Use documented route records. |  |
| `conditional_finish` | finishing | Activate only documented finishing operations and chemical recipes. Manufacturer examples establish possible routes, not universal requirements or recipes. |  |
| `exclude_field` | farm_use | Keep feed ingredients and routine grinding/mixing operation, farm fuel, livestock emissions, ration delivery and disposal outside this manufacturing inventory. No feed-preparation service is included. |  |

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

Include only sheet stock actually issued for the frame, box or hopper. Record grade, width, thickness and incoming surface treatment; weigh issued stock less unopened returns. The confirmed stock identity remains unresolved; do not substitute contradictory alloy/non-alloy records.

- Selected flow: Hot-rolled non-alloy steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Cold-rolled stainless steel sheet (`stainless_sheet`)

Only when the bill of materials specifies this stock for feed-contact tub or auger parts. Record alloy grade and delivered state; a further-worked product identity cannot replace ordinary cold-rolled stock.

- Selected flow: Cold-rolled stainless steel sheet
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

###### Wear-resistant steel plate (`wear_plate`)

Only actual tub lining or auger stock with supplier-confirmed grade, alloy and delivered state. The KUHN wear-resistance description does not specify a generic chemistry. Distinguish fabricated stock from a bought-in completed auger to avoid double counting.

- Selected flow: Wear-resistant steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `kuhn-profile-configuration`

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

###### Farm feed-mixer mechanical gearbox (`gearbox`)

Only when installed as one purchased gearbox. Record ratio, casing, lubricant delivery state and measured mass. A wind-turbine gearbox is not an applicable identity.

- Selected flow: Farm feed-mixer mechanical gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete hydraulic cylinder (`hydraulic_cylinder`)

Only when installed. Weigh the accepted purchased cylinder with its specified seals and fittings; incomplete machined cylinder parts do not identify the complete assembly.

- Selected flow: Complete hydraulic cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Guarded agricultural power-take-off shaft (`pto_shaft`)

Only when included in delivered configuration. Record length, coupling and guard inclusion and mass; exclude the tractor itself.

- Selected flow: Guarded agricultural power-take-off shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

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

Only for trailed configurations with new pneumatic rubber tyres in the stated product class. Collect number installed, size and load/speed specification; reference property is Number of items, so this row remains Item(s), not kg. Collect tyre mass separately for bill-of-material reconciliation.

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

Only for the actual finished hydraulic oil compatible with the confirmed distilled/hydrogenated/refined supply route. Record grade and base-oil origin; collect new fill plus unrecovered testing consumption, excluding fluid already supplied in a purchased cylinder.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Farm feed-mixer electronic control unit (`control_unit`)

Only when included in the configuration. Record controller model, housing and mass; no machine-tool or automotive controller UUID is substituted.

- Selected flow: Farm feed-mixer electronic control unit
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

###### Electric motor (`motor`)

Only an installed purchased AC drive motor for a stationary farm feed mixer assembled in China, compatible with the public special-purpose assembly input class. Record motor type, rating, incoming gate, delivered mass and included parts; other country or DC drives require another verified identity. No database amount is adopted; motor inside a purchased drive unit is not counted again.

- Selected flow: Electric motor `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete steel feed-mixing auger (`mixing_auger`)

One supplier-confirmed complete auger type, only if purchased and installed. Record alloy, flights, shaft, knives inclusion and net mass; fabricated augers instead use their site stock and operation records, not another purchased input.

- Selected flow: Complete steel feed-mixing auger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kuhn-profile-configuration`

###### Hardened steel feed-grinder hammer (`hammer`)

Only installed bought-in finished hammers. Record steel grade, heat-treated state, unit mass and installed count; no universal hammer count or wear life. Site-made hammers require a separately documented machining and heat-treatment route.

- Selected flow: Hardened steel feed-grinder hammer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `artsway-6105-configuration`

###### Perforated steel hammermill screen (`mill_screen`)

Only installed supplier-confirmed steel finished screen. Declare aperture, thickness and net mass. Do not treat the general agricultural machine reference UUID as this replacement component.

- Selected flow: Perforated steel hammermill screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `artsway-6105-configuration`

###### Conveyor or transmission belts or belting, of vulcanized rubber (`belt`)

Only installed finished vulcanized-rubber drive belt. Record reinforcement, supplier grade, dimensions and mass; polymer resin, uncured compound and a conveyor service do not represent this component.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Load cell (`weigh_cell`)

Only installed bought-in weighing transducers in the declared configuration; record model, calibration evidence and measured mass. The identity supplies no per-machine quantity; a bare strain gauge is not substituted for an installed weighing transducer.

- Selected flow: Load cell `5f7f1e13-97fb-48bc-99db-4b3a6736610e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kuhn-profile-configuration`

###### Trailer axle (`axle`)

Only trailed configurations with a purchased trailer axle; record brake/hub inclusion, load class and mass. Exclude stationary configurations, tractor axles and already-included running gear.

- Selected flow: Trailer axle `e1bf60f6-8831-49e2-ad46-9bad63ff50a3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

### Process: Factory acceptance and net-mass determination (`acceptance`)

#### Inputs

##### Product flows

###### Alternating current (`test_electricity`)

Meter factory no-load drive, safety-interlock, grinder rotor, auger and weighing-system acceptance tests and test-rig utilities, not farm feed preparation. If factory acceptance uses another fuel or a sacrificial test medium, add each real atomic input and output with actual records. If loaded factory trials are performed, record each actual feed ingredient, tracer and recovered/test waste separately; routine feed-mixing operation is excluded.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Machinery for preparing animal feeding stuffs (`finished_machine`)

One kilogram is a normalization slice of the same complete, accepted configured machine, not a separately traded machine fragment. Declare empty feed chamber, clean dry state and installed retained working fluids. Include delivered drive, augers, grinding/rolling mechanism, integral dust collector, controls and guards; exclude tractor, feed payload, unattached accessories and transport packaging.

- Selected flow: Machinery for preparing animal feeding stuffs `5c609027-b680-42b7-8e43-7191da721074`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`

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
| `cp_acceptance` | `acceptance` | Factory acceptance and net-mass determination | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater and Item(s) for tyres. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
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
| excluded_use | Farm feed preparation intensity, ration quality, livestock output, whole-life feeding or comparisons across different processing functions without additional functional modelling |
| required_metadata | Model, configuration, empty state, M, retained fluids, manufacturer/site, reporting period, process route, voltage/geography, supplier gates, transport/packaging scope and allocation |
| required_quality_disclosure | Measured versus estimated quantities; unresolved identities; unmeasured emissions and components; upstream linkage completeness; uncertainty, data age and configuration limitations |
| update_trigger | Changed mechanism, capacity, BOM, coating chemistry, supplied component, energy mix, acceptance specification or mass protocol |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `artsway-6105-configuration` | handbook | Art’s-Way, Model 6105 and 6105 CATTLEMAXX Grinder Mixer Operator’s Manual, 597300, undated retained edition, PDF pp.16–17 / printed pp.14–15, Introduction and Figure6. https://artsway.com/wp-content/uploads/2024/02/597300-6105-6105-CATTLEMAXX-OPM.pdf | Configured grinder/mixer, screen, PTO, dust collector and auger example only. Historical/model-specific operation facts; no factory intensity, generic mass, lifetime or universal configuration. |
| `kuhn-profile-configuration` | handbook | KUHN, PROFILE 2 CS mixer wagon, Exclusive KUHN mixing auger and Weighing system sections. https://www.kuhn.com/en/livestock/trailed-tmr-mixers/twin-auger-vertical-mixers/profile-2-cs | Configured mixing auger, knives, drive and weighing options; no universal alloy, net mass or manufacturing quantities. Operational mixing test is not adopted as factory acceptance threshold. |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy only; no current comprehensive standard conformance assertion. |
