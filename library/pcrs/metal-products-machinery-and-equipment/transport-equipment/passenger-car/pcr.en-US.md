---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.passenger-car
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Battery-electric passenger car manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete configured battery-electric passenger cars. It is narrower than CPC49113: exclude combustion-engine, hybrid and range-extender vehicles, public-transport vehicles, snow vehicles, golf cars, goods vehicles, spare parts and customer transport services. Identify model, VIN/options, body, installed traction-battery chemistry and constituent gate, drive layout, charging/control, wheels, seats, glazing, safety equipment and retained fluids. Include actual factory charging, dynamometer or short acceptance driving, leak tests, adjustments and rework with their attributable exchanges. Exclude customer driving, charging infrastructure delivery, maintenance, assumed service life and end of life. In measurement tables, unit means one complete accepted battery-electric passenger car; it is not a component, passenger-kilometre or payload unit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.passenger-car |
| classification_refs | CPC 3.0 49113; narrower context, no accepted mapping asserted |
| covered_products | New complete configured battery-electric passenger cars |
| excluded_products | Combustion, hybrid/range-extender, public-transport, snow, golf and goods vehicles; spares and transport services |
| representative_product | One accepted complete clean empty battery-electric passenger car of declared configuration |
| production_route | Receive stock and finished modules; actual body blanking/stamping, joining, aqueous preparation and liquid coating when inside gate; complete battery/drive/control/interior/chassis integration; factory charging, inspection and acceptance |
| market_state | New accepted complete vehicle at factory gate, no driver/passengers/payload; retained fluid and charge states declared; shipment protection separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared complete battery-electric passenger car |
| How much | 1 kg of the same complete accepted configured unit using measured net mass M |
| How well | Meet actual configuration-specific drawings and factory acceptance criteria; record battery/drive identity, insulation and electrical safety, charge function, steering/braking, installed restraint/control checks, glazing/closures and fluid/refrigerant leak checks as actually required, with calibrated instruments, test duration and results. Neither catalogue capacity nor historical plant announcements establish a generic test limit or manufacturing intensity. |
| How long or cycle | One manufacturing delivery; no assumed driving lifetime or transport-service cycle |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete configured battery-electric passenger car |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and VIN/batch; options; installed traction-battery chemistry, capacity, serial and constituent gate; drive/charger/converter and control configuration; seats/wheels/glazing/safety equipment; installed and declared delivered accessories; empty clean state without driver/passengers/payload; retained coolant/brake fluid/refrigerant and charge state; measured M; site/reporting period; supplier and outsource gates; covered stages; acceptance criteria, charging meter and test duration |

Weigh the same complete accepted clean empty unit on calibrated scales, including the installed battery, declared retained fluids and delivered accessories but excluding people, payload, transport protection and handling fixtures. M is this measured physical mass, not a catalogue value, legal curb-mass convention including a driver, or maximum gross vehicle mass. Kilogram normalization does not establish equivalent range, capacity, passenger transport performance or impacts across different configurations. The reference UUID remains unresolved because retrieved vehicle records have incompatible classification, route or reference property.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `vehicle_delivery_state` | delivery configuration | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Bind cp_mass to the same VIN/options, installed battery and retained-fluid/charge state. No driver, passengers, payload or handling tare enters M. Document removed transport protection separately; do not infer M from a legal curb-mass convention or catalogue weight. |
| `energy_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter unit; convert kWh to MJ using exactly 1 kWh = 3.6 MJ. Do not interpret the electricity property name as a combustion inventory. |
| `volume_units` | groundwater rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain measured volume and its conditions; do not invent gas density, water density or calorific value to switch to mass or energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials and configured components received at declared supplier gates, with no implicit upstream steelmaking or component fabrication in foreground |
| starting_condition_role | Manufacturing input boundary for an accepted complete vehicle |
| product_classification_scope | Complete battery-electric passenger cars within broader CPC49113 context |
| recursive_input_rule | A purchased complete unit used as an input is a separately declared upstream product. Do not recursively regenerate this category; distinguish new production from refurbishment. |
| upstream_dataset_requirement | Link input-specific upstream datasets matching material, finished-component gate, geography, voltage and treatment state. Missing links remain disclosed coverage gaps. |
| disclosure | Report foreground factory stages, outsourced operations, component content, incoming transport coverage, protective packaging gate, capital-equipment policy and every exclusion; no complete cradle-to-gate claim without verified upstream and logistics closure. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | Include every actual operation and attributable rework from declared received inputs through factory acceptance; distinguish purchased parts from site fabrication to prevent duplication. Use documented route records. |  |
| `conditional_finish` | finishing | Activate only documented finishing operations and chemical recipes. Manufacturer examples establish possible routes, not universal requirements or recipes. |  |
| `exclude_customer_driving` | vehicle_use | Exclude customer driving/charging, maintenance and disposal. Include actual factory trials, charging and acceptance driving with separately identified inputs and wastes. No passenger transport service or customer charging infrastructure is delivered by this reference. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Stock cutting, forming and machining | conditional | Only when the site fabricates these parts; otherwise record purchased finished parts separately | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `joining` | Body joining and dressing | conditional | Only when the site joins body parts by a documented route | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `wet_surface` | Aqueous cleaning and preparation | conditional | Only when aqueous cleaning or conversion treatment is actually performed; activate individual rows from the documented recipe | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `paint` | Liquid automotive coating and drying/curing | conditional | Only for documented liquid electrocoat or spray coating; electrical curing input only where actually electric | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `assembly` | Configured battery-electric vehicle assembly | required | Every accepted complete unit; activate component rows only when actually installed | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `acceptance` | Factory acceptance and net-mass determination | required | Every accepted complete unit | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `packaging` | Shipment protection at factory gate | conditional | Only when shipment protection is inside the declared delivery gate; disclose its exclusion otherwise | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |

Process records are separate contributors to one final accepted output, not seven separately traded reference products. Retain traceable internal-part transfer and bill-of-material records; internal transfers cancel within this foreground and do not receive duplicated upstream burdens. The cards below are explicit route-conditioned exchanges. Add each actual additional part, chemical, fuel, packaging piece, wastewater stream or measured elementary substance as its own identified row; absence of a card is not a cut-off permission. For outsourced finishing, replace site chemistry and energy with the exact purchased service or finished-part record and disclose its coverage.

### Process: Stock cutting, forming and machining (`forming`)

#### Inputs

##### Product flows

###### Hot-dip-zinc-coated cold-rolled automotive steel sheet (`steel_sheet`)

Only actual body stock issued, with steel grade, zinc coating, dimensions and delivered surface declared. Weigh net issued stock less returns and stock changes. Galvanized corrugated roof sheet and a galvanizing service are not this incoming automotive stock.

- Selected flow: Hot-dip-zinc-coated cold-rolled automotive steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Alternating current (`forming_electricity`)

Meter actual body-stock blanking, stamping, trimming and machining inside the declared site, including attributable extraction and handling. This UUID applies only to grid-average user-side 1–35 kV supply at the purchased gate; internal low-voltage use is not another purchased input. Other supply conditions require another verified identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Aluminium alloy 6016 body-panel sheet (`aluminium_sheet`)

Only actual AA6016 sheet issued to site body stamping; record temper, thickness, surface and issue less unused returns. This grade is not required for every vehicle. A purchased finished panel replaces raw sheet and site forming; another alloy requires another row.

- Selected flow: Aluminium alloy 6016 body-panel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Waste AA6016 body-sheet offcut (`aluminium_offcut`)

Only segregated untreated AA6016 offcuts exported as waste; weigh and characterize coatings and contamination, with receiving route. Internal return to forming or sold finished panels are not this waste.

- Selected flow: Waste AA6016 body-sheet offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

### Process: Body joining and dressing (`joining`)

#### Inputs

##### Product flows

###### Copper-coated solid carbon-steel welding wire (`solid_wire`)

Only for the documented solid-wire route. Record wire designation and consumed mass; do not apply the flux-cored wire UUID.

- Selected flow: Copper-coated solid carbon-steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Alternating current (`joining_electricity`)

Meter actual resistance, laser or arc joining, dressing and extraction equipment; apply the same purchased supply condition as forming_electricity. Do not count the common factory meter twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Epoxy structural body adhesive, supplied formulation declared (`body_adhesive`)

Only the actual supplied formulated adhesive with resin, hardener inclusion, fillers and concentration declared; weigh issue less unused returns. Separately supplied hardener is separately inventoried, not silently included. Do not prescribe structural adhesive for every joining route.

- Selected flow: Epoxy structural body adhesive, supplied formulation declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Steel self-piercing body rivet (`body_rivet`)

Only actually installed steel self-piercing rivets with grade, coating and batch mass; collect installed counts and measured batch mass without a fabricated piece weight. Other fastening techniques need their own rows.

- Selected flow: Steel self-piercing body rivet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Finished CuCrZr resistance-welding electrode (`spot_electrode`)

Only net consumed/replaced electrodes attributable to actual resistance welding under the declared tooling policy. Record alloy, dressing losses, remaining stock and recovered metal separately. Capital welding equipment is not a per-car electrode input.

- Selected flow: Finished CuCrZr resistance-welding electrode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

###### Zinc-phosphate conversion-coating concentrate (`phosphate`)

Only when the actual pretreatment recipe uses this supplier-defined concentrate; record all supplied constituents, concentration, consumed solution mass, bath returns and drag-out. Other conversion chemistries require independent rows; no universal phosphating recipe is prescribed.

- Selected flow: Zinc-phosphate conversion-coating concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

### Process: Liquid automotive coating and drying/curing (`paint`)

#### Inputs

##### Product flows

###### Cathodic epoxy electrocoat dispersion (`electrocoat`)

Only actual supplied epoxy dispersion, with solids, additives and water/solvent composition declared. Record net fresh issue, returns, bath stock and internal ultrafiltration recovery without double counting circulation. Other resin systems need separate rows.

- Selected flow: Cathodic epoxy electrocoat dispersion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paint`

###### Waterborne acrylic automotive basecoat (`basecoat`)

Only this confirmed formulated colour coat, with resin, pigment, solvent/water and supplied solids specified. Weigh net applied/issued formulation; do not use a dry powder-coating identity. Other formulation needs an independent row.

- Selected flow: Waterborne acrylic automotive basecoat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paint`

###### Hydroxyl-functional acrylic clearcoat component A (`clearcoat_A`)

Only actual supplied A component, with resin, solvent and additives declared. Record consumed formulation mass independently from the HDI hardener; the manufacturer mixing ratio must be the actual recorded recipe, not a generic assumption.

- Selected flow: Hydroxyl-functional acrylic clearcoat component A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paint`

###### HDI-polyisocyanate clearcoat hardener (`clearcoat_B`)

Only actual supplied hexamethylene-diisocyanate-based polyisocyanate hardener, with oligomer, solvent and concentration identified. Record B-component mass separately from clearcoat_A; other isocyanate chemistry is a separate exchange.

- Selected flow: HDI-polyisocyanate clearcoat hardener
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paint`

###### n-Butyl acetate paint-line solvent (`butyl_acetate`)

Only actual n-butyl acetate supplied separately for dilution or cleaning; weigh net issue and record purity. Solvent already in a formulated coat is not another purchase. Other solvents and mixed cleaning formulations have distinct rows.

- Selected flow: n-Butyl acetate paint-line solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paint`

###### Alternating current (`paint_electricity`)

Meter electrocoat deposition, spray/ventilation, attributable compressed air and electric drying/curing only when actually used. Apply stated purchased supply gate. Gas ovens, purchased heat, thermal oxidation and other utilities require their own measured inputs and actual emissions; electrical curing is not universal.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paint`

#### Outputs

##### Waste flows

###### Aqueous automotive paint-booth sludge waste (`paint_sludge`)

Only the characterized wet sludge actually transferred as waste, with dry solids, water, solvent and treatment route measured. It is not dry powder overspray, wastewater or a VOC air emission. Internal recovered coating is separately reconciled.

- Selected flow: Aqueous automotive paint-booth sludge waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paint`

##### Elementary flows

###### n-Butyl acetate emission to air, unspecified subcompartment (`butyl_acetate_air`)

Only when actual speciated outlet monitoring identifies n-butyl acetate released after capture/treatment, with air subcompartment and attributable kg documented. Do not convert total VOC, captured solvent or a toluene/xylene identity to this exchange; no emission is assumed from solvent purchase alone.

- Selected flow: n-Butyl acetate emission to air, unspecified subcompartment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paint`

### Process: Configured battery-electric vehicle assembly (`assembly`)

#### Inputs

##### Product flows

###### Steel radial ball bearing (`ball_bearing`)

Record only this specific installed bearing type and mass; do not use a wind-turbine pitch bearing or a bearing cage identity.

- Selected flow: Steel radial ball bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_electricity`)

Meter assembly tools, lifts and attributable local utilities, with the stated purchased supply condition. Include rework attributable to accepted units.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete NMC lithium-ion traction battery pack (`battery_nmc`)

Only actual delivered nickel-manganese-cobalt cathode pack with supplier chemistry, capacity, cell/module/BMS/enclosure/cooling inclusion, serial, mass and state of charge declared. The historical BMW source supports installation only; NMC chemistry comes from actual supplier evidence. Finished pack is one physical assembly; do not also input its cells, electrolyte or included coolant. Capacity is metadata, not energy consumed at the vehicle factory.

- Selected flow: Complete NMC lithium-ion traction battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `bmw-i4-plant-2020`

###### Complete LFP lithium-ion traction battery pack (`battery_lfp`)

Only actual delivered lithium-iron-phosphate cathode pack; declare the same constituent gate, capacity, mass, serial and charge state. This is a separate chemistry/configuration from battery_nmc. Activate only the actual pack configuration; mixtures or other chemistries need their own identified rows.

- Selected flow: Complete LFP lithium-ion traction battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete electric passenger-car drive axle (`drive_axle`)

One actually supplied motor/reduction/differential physical assembly; specify included inverter, housing and fluids and measured mass. Do not duplicate constituent motors, magnets, gears or inverter already included. A separately supplied drive technology requires its own component row.

- Selected flow: Complete electric passenger-car drive axle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete automotive traction inverter (`traction_inverter`)

Only a separately supplied installed inverter with housing, power modules, control and coolant gate declared. Exclude inverter already included in drive_axle. Record supplier rating and measured mass; rating is not factory energy.

- Selected flow: Complete automotive traction inverter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete passenger-car onboard charger (`onboard_charger`)

Record actual finished charger and included converter/control/cooling, supplier rating, voltage and mass. A combined charger/converter replaces separate constituent inputs; external charging station is outside vehicle delivery.

- Selected flow: Complete passenger-car onboard charger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete automotive DC-DC converter (`dc_converter`)

Only actual separately supplied converter outside the charger/inverter gate; record board, casing and cooling inclusion and measured mass. Do not duplicate integrated electronics.

- Selected flow: Complete automotive DC-DC converter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships (`wire_harness`)

Only one complete tested non-ignition automotive copper-conductor harness of the other vehicle wiring-set category; specify circuit, voltage, conductor, insulation, connector gate and measured mass. The official broad Chinese label is preserved; it does not prescribe an ignition circuit for this BEV. Do not model complete harness as pure copper; aluminium-conductor or mixed gate requires a distinct physical definition.

- Selected flow: Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete upholstered passenger-car seat (`seat`)

One actual seat assembly with frame, foam/textile composition, adjustment motor, sensor and airbag inclusion declared. Record installed count and measured assembly mass; do not separately input included modules.

- Selected flow: Complete upholstered passenger-car seat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished laminated-glass passenger-car windscreen (`windscreen`)

Record actual formed laminated window with glass/interlayer/coating composition, dimensions and net mass. Tempered side windows and roof glazing are different physical products requiring separate rows. Mounting adhesive is separately recorded if actually supplied outside the window gate.

- Selected flow: Finished laminated-glass passenger-car windscreen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished cast-aluminium-alloy passenger-car wheel (`wheel`)

Only actual wheel with alloy, cast route, finish and net mass confirmed. Record installed count, including declared delivered spare; tyre/rim assembly bought complete replaces duplicated wheel and tyre inputs. Forged or steel wheels require independent rows.

- Selected flow: Finished cast-aluminium-alloy passenger-car wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### New pneumatic tyres, of rubber, of a kind used on motor cars (`tyre`)

Only finished new pneumatic rubber radial motor-car tyres; record actual compound, reinforcement, tyre dimensions and measured mass, without rim. Installed and declared delivered spare tyres only; internal supplier tyre ingredients are not also foreground raw materials.

- Selected flow: New pneumatic tyres, of rubber, of a kind used on motor cars `8229da31-81e7-4fa4-8d3e-4ed5bcb8a575`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete hydraulic passenger-car disc-brake caliper (`brake_caliper`)

One actual caliper assembly with body, piston, seals and pad inclusion declared; record type and measured mass. Discs, separate pads and brake fluid outside the supplied gate need their own inputs.

- Selected flow: Complete hydraulic passenger-car disc-brake caliper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete passenger-car suspension strut (`suspension_strut`)

Record one actual delivered strut with spring, damper, mount and filled-fluid gate specified and measured mass. Arms and other separately supplied suspension parts are distinct rows; factory-filled oil is not added twice.

- Selected flow: Complete passenger-car suspension strut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete lead-acid 12 V automotive auxiliary battery (`auxiliary_battery`)

Only actual installed lead-acid auxiliary battery, with casing/electrolyte inclusion, capacity, mass and charge state declared. Lithium auxiliary systems require a distinct row; do not also input included lead or acid.

- Selected flow: Complete lead-acid 12 V automotive auxiliary battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Aqueous ethylene-glycol automotive coolant, supplied concentration declared (`vehicle_coolant`)

Only actual separately filled solution, with glycol, water, additives and concentration documented. Weigh fresh issue/return and retained fill; prefilled bought modules are excluded. Pure glycol or wind-farm coolant is not this formulation.

- Selected flow: Aqueous ethylene-glycol automotive coolant, supplied concentration declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### DOT 4 glycol-ether brake fluid (`brake_fluid`)

Only actual supplier-confirmed glycol-ether/borate formulation with composition and net fill mass declared. Silicone DOT5 and mineral hydraulic oil are different exchanges. Do not count fluid already included in purchased filled modules.

- Selected flow: DOT 4 glycol-ether brake fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### HFO-1234yf refrigerant for vehicle thermal management (`hfo_charge`)

Only actual separately charged 2,3,3,3-tetrafluoropropene with purity, fill/return and retained mass documented. Other refrigerants require their own row. Factory-filled complete module contains its charge and is not charged again in inventory.

- Selected flow: HFO-1234yf refrigerant for vehicle thermal management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Bodies for motor vehicles (`purchased_body`)

Only an actually purchased complete body shell for this declared passenger-car model. Declare closures, coated/uncoated state, supplier gate, inspections and measured mass. This input replaces the body-stock and fabrication burdens already inside its supplier gate; activate only further real site operations, with no repeated blanking/joining/painting. It does not represent the complete vehicle.

- Selected flow: Bodies for motor vehicles `68dcb7da-bb57-4730-94f3-ace5817da287`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

#### Outputs

##### Elementary flows

###### HFO-1234yf emission to air, unspecified subcompartment (`hfo_air`)

Only actual measured foreground release during charging/leak-test/rework, with substance, kg and air subcompartment established. Do not assume every charged kilogram leaks or prescribe an operating leakage factor. Captured returned refrigerant is not an air emission.

- Selected flow: HFO-1234yf emission to air, unspecified subcompartment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

### Process: Factory acceptance and net-mass determination (`acceptance`)

#### Inputs

##### Product flows

###### Alternating current (`test_electricity`)

Meter actual factory charging and electrical/insulation, braking/steering, dynamometer or short acceptance-driving, leak and control trials, including charging losses and auxiliaries. Record external AC meter interval, initial/final battery state of charge, duration/distance and rework. Installed capacity is not purchased electricity; do not double count a factory common meter or infer test consumption from customer range data.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Complete configured battery-electric passenger car (`finished_machine`)

One kilogram of the same complete accepted battery-electric passenger car with actual installed battery, drive/charger/control, body/chassis/interior/glazing/safety equipment, declared delivered accessories and retained fluids. Exclude people, payload, fixtures and transport packaging. Installed-pack and drive-module constituents are reconciled to prevent double counting. UUID unresolved: retrieved vehicle identities have mismatched scope or property.

- Selected flow: Complete configured battery-electric passenger car
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`

### Process: Shipment protection at factory gate (`packaging`)

#### Inputs

##### Product flows

###### Polyethylene film (`pack_film`)

Only when polyethylene film actually accompanies shipment. Weigh film applied and waste separately; it contributes to inventory but not accepted net unit mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `direct_attribution` | shared_operations | Use job tickets and submetering before allocation. Where a common meter remains, require a measured causal driver such as unit-hours for the identified operation, with all participating jobs and idle load disclosed; divide the attributable quantity by accepted units of the same configuration before mass normalization. | `ghg-product-allocation-2011` |
| `coproduct_decision` | saleable_outputs | Do not assume scrap is a co-product. Disclose destination and legal/product status. If multiple saleable co-products actually occur, seek subdivision; justify a physical relation or, when unavailable, documented economic/other allocation with sensitivity. No universal mass share or avoided-steel credit is prescribed. | `ghg-product-allocation-2011` |
| `rework_scrap` | manufacturing_losses | Retain rework and rejected-unit burdens attributable to the accepted reporting batch. Record recovered internal material once and exported wastes separately. Disclose upstream recycled-content method and any downstream treatment separately to prevent double credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | accepted net mass | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each acceptance | complete reporting batch | same model and configuration | accepted net mass per unit | calibration, weighing and signed acceptance records |
| `cp_forming` | `forming` | Stock cutting, forming and machining | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_joining` | `joining` | Body joining and dressing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_wet_surface` | `wet_surface` | Aqueous cleaning and preparation | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_paint` | `paint` | Liquid automotive coating and drying/curing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions; supplied resin/solvent composition and solids; A/B issue/return; bath stocks and internal recovery; spray transfer and wet sludge; outlet speciated monitoring after capture/abatement; heating fuel route | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_assembly` | `assembly` | Configured battery-electric vehicle assembly | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_acceptance` | `acceptance` | Factory acceptance and net-mass determination | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions; VIN/options; installed battery chemistry/constituent gate and initial/final charge state; actual acceptance specifications; external AC charging meter intervals and losses; test distance/duration and rework; insulation, charging, steering/braking and restraint/control checks; retained fluid/refrigerant fill, return and release records | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. Preserve actual test criteria and measured results. Capacity in kWh is configuration metadata, not factory electricity. Record losses/refrigerant releases only from measured foreground evidence, not a customer-use or assumed leakage factor. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_packaging` | `packaging` | Shipment protection at factory gate | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

The finished_machine output is fixed at 1 kg and is not divided again. Apply the conversion to each other applicable row using the same configuration and batch; quantity numerator units remain unchanged. Mixed configurations must be separated, not averaged by count with a catalogue mass.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_trace` | all rows | Trace every input to installed BOM, route and accepted unit; supplier finished parts do not also receive raw-stock burdens. Disclose remaining components as missing coverage until separate atomic records are added. | drawings, BOM, supplier receipts |
| `basis_quality` | cp_mass | M must be positive measured net mass, with the same delivered configuration, fluid state and acceptance gate as all collected exchanges. | calibration and weighing records |
| `coverage_quality` | all processes | Document full batch temporal coverage, meter overlap, rejects, rework, stock changes, outsourced stages and unmeasured emissions. A missing record is unknown, not zero or not_applicable. | ledger, coverage matrix and measurement uncertainty |
| `chemistry_quality` | wet_surface; paint | Verify recipe, concentration and SDS for each supplied formulated chemical; characterize each outgoing waste stream and identify treatment separately from environmental emissions. | recipe, SDS, analyses and transfer tickets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Reject missing qualifiers, driver/payload-loaded, legal curb-mass convention or shipping-gross mass substitution, non-positive M or mismatch between configuration, cp_mass and finished_machine. Require 1 kg output and explicit normalize_mass on every non-reference applicable row. |  |
| `validate_atomic` | inventory | Require one physical exchange per row, verified public identity when supplied, correct property/unit, localized display and medium. Unresolved UUIDs do not authorize proxy substitution or mixed rows. |  |
| `validate_balance` | coverage | Reconcile installed mass, stock, waste, retained fluids and purchased parts using the actual BOM; independently reconcile installed pack/drive/charger constituent gates, retained fluids and VIN/options with the weighed vehicle. Reconcile charging losses and initial/final charge state without inventing a capacity credit; reconcile paint stocks, recovered solvent, sludge and actual speciated releases. Reconcile utilities by stage; internal transfers cancel. Explain differences against recorded measurement uncertainty, without a fabricated numerical tolerance. |  |
| `validate_completeness` | dataset | Check every conditional stage against route evidence. Require missing chemicals, parts, test media and actual emissions to be split and collected before claiming a complete inventory; prohibit cradle-to-gate or service comparisons while upstream or functional coverage is incomplete. |  |
| `validate_allocation` | shared_operations | Require complete driver records and justification for allocation and scrap treatment; document sensitivity where another defensible allocation may change results. | `ghg-product-allocation-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground process for a configured accepted unit |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to a declared battery-electric passenger-car manufacturing model with identical configuration and disclosed upstream coverage |
| excluded_use | Driving/transport service, customer charging or life-cycle comparisons across battery chemistries, range, seating and vehicle classes without separate functional modelling |
| required_metadata | Model, configuration, empty state, M, retained fluids, manufacturer/site, reporting period, process route, voltage/geography, supplier gates, transport/packaging scope and allocation |
| required_quality_disclosure | Measured versus estimated quantities; unresolved identities; unmeasured emissions and components; upstream linkage completeness; uncertainty, data age and configuration limitations |
| update_trigger | Changed battery chemistry/capacity/constituent gate, drive/charger/control configuration, VIN/options, retained fluids, body-stock/coating recipe, supplier gate, factory charging/test route, energy supply, acceptance criteria or mass protocol |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `vw-id3-plant-2019` | handbook | Volkswagen AG, Production start of Volkswagen ID.3: The plant (2019), Transformation during normal operation; body production, painting and assembly paragraphs. https://www.volkswagen-newsroom.com/en/production-start-of-volkswagen-id3-6348/the-plant-6351 | Historical qualitative body/paint/assembly and cockpit-module example. Future plans, output capacity, automation ratios, renewable supply and carbon-neutral claims are not adopted as manufacturing amounts, current facts or mandatory routes. |
| `bmw-i4-plant-2020` | handbook | BMW Group, BMW Group Plant Munich gears up for fully electric future (22 July 2020), high-voltage battery body and assembly paragraphs. https://www.press.bmwgroup.com/global/article/detail/T0311207EN/bmw-group-plant-munich-gears-up-for-fully-electric-future | Historical integration of an installed high-voltage battery into vehicle body/assembly. Does not specify NMC/LFP chemistry, present route, cell-production intensity or a universal factory configuration; actual chemistry and supplier gate require foreground receipts. |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy; actual physical-driver evidence needed, no present comprehensive standard-conformance assertion. |
