---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.electric-golf-car
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Battery-electric golf car manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete two-seat off-road battery-electric golf-course golf cars, narrower than CPC3.0 49116. Exclude snow vehicles, gasoline and hybrid golf cars, cargo/utility variants, multi-seat passenger shuttles, road-registered low-speed vehicles, passenger cars, spare parts, refurbishment and conversion. Include actual site fabrication, conditional finishing, assembly, factory charging, short driving/steering/braking and electrical acceptance, attributable rework and wastes. Exclude customer charging, golf rounds, passenger transport service, customer maintenance, assumed mileage/lifetime and end of life. No operating-service functional equivalence is established. Throughout this PCR one accepted finished unit means one whole configured golf car; Chinese 设备 has the same meaning.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.electric-golf-car |
| classification_refs | CPC3.0 49116; narrower product context, not an accepted classification mapping |
| covered_products | Complete two-seat off-road battery-electric golf cars, each actual battery/frame/braking configuration separately modelled |
| excluded_products | Snow vehicles, combustion/hybrid cars, public-road cars, cargo/utility and multi-seat shuttles, spares, refurbishments and conversions |
| representative_product | One new complete accepted clean empty configured golf car |
| production_route | Receive declared stock and finished modules; actual chassis fabrication or purchased chassis; conditional surface preparation/powder finishing; battery/drive/body/chassis assembly; metered factory charging, configuration-specific trials and acceptance |
| market_state | New accepted empty vehicle at factory gate; installed battery and declared retained fluids included, shipping protection separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared complete accepted two-seat off-road battery-electric golf car |
| How much | 1 kg of the same complete accepted configured unit using measured net mass M |
| How well | Meet actual drawings and configuration-specific signed acceptance criteria for battery installation/charge state, wiring/polarity/insulation, controller setup, steering and brake checks, short factory driving, fluid leaks and delivered guards/accessories. Record instruments, conditions, duration and measured results; catalogue speed, range, capacity or rated power are not generic manufacturing acceptance or energy factors. |
| How long or cycle | One manufacturing delivery; no assumed golf-car driving lifetime or service cycle |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Motor vehicles, for the transport of persons, specially designed for travelling on snow, golf cars and similar vehicles `2eafcec4-e441-447e-9ef9-40c4722c9ec9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/serial/batch; two-seat off-road battery-electric status; actual chassis material and stock/finished-module boundary; battery chemistry/model/count/mass/charge state and filled condition; motor/transaxle/controller/harness inclusion; body, seat, wheels/tyres, steering, brakes and suspension; installed canopy/bag support and accessories; retained fluids; empty clean state; measured M; off-board charger excluded; manufacturer/site/period; supplier gates, actual routes, factory tests and packaging scope |

Weigh the same complete accepted clean empty unit using calibrated scales. Include installed battery, actual delivered installed accessories and declared retained fluids; exclude passengers, golf clubs, payload, handling fixtures, loose spares and shipping protection. Catalogue approximate curb, dry or gross weight is not M. Battery capacity is not consumed factory electricity. Kilogram normalization does not equate driving range, payload or golf service; the broad public reference name is restricted to this actual golf-car configuration, excluding snow and other variants.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `energy_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter unit; convert kWh to MJ using exactly 1 kWh = 3.6 MJ. Do not interpret the electricity property name as a combustion inventory. |
| `volume_units` | groundwater rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain measured volume and its conditions; do not invent gas density, water density or calorific value to switch to mass or energy. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `tyre_count_units` | tyre | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count actual installed finished tyres per accepted unit using cp_assembly; preserve public count property and normalize q_item/M without converting the exchange to kg. Separately weigh tyres only for physical installed-mass reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials and configured components received at declared supplier gates, with no implicit upstream steelmaking or component fabrication in foreground |
| starting_condition_role | Manufacturing input boundary for an accepted complete unit |
| product_classification_scope | Complete two-seat off-road battery-electric golf cars within broader CPC49116 context |
| recursive_input_rule | A purchased complete unit used as an input is a separately declared upstream product. Do not recursively regenerate this category; distinguish new production from refurbishment. |
| upstream_dataset_requirement | Link input-specific upstream datasets matching material, finished-component gate, geography, voltage and treatment state. Missing links remain disclosed coverage gaps. |
| disclosure | Report foreground factory stages, outsourced operations, component content, incoming transport coverage, protective packaging gate, capital-equipment policy and every exclusion; no complete cradle-to-gate claim without verified upstream and logistics closure. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | Include every actual operation and attributable rework from declared received inputs through factory acceptance; distinguish purchased parts from site fabrication to prevent duplication. Use documented route records. |  |
| `conditional_finish` | finishing | Activate only documented finishing operations and chemical recipes. Manufacturer examples establish possible routes, not universal requirements or recipes. |  |
| `exclude_customer_use` | golf_service | Exclude customer charging, driving and golf service, maintenance and disposal. Include actual factory charging and short acceptance trials with their measured materials, AC-input energy and identified wastes/emissions. No passenger transport or golf service is included. |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `charger_delivery_boundary` | reference | Declare actual installed accessories and retained fluids in M. Off-board charger and loose equipment are separate products outside M, even if invoiced together. Only an actually installed on-board charger is included as its own physical input and in M. Transport disassembly requires part-level reconciliation and a calibrated summed net mass for the same completed acceptance configuration; no catalogue mass substitution. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Stock cutting, forming and machining | conditional | Only when the site fabricates these parts; otherwise record purchased finished parts separately | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `joining` | Structural welding and dressing | conditional | Only when the site joins structural parts by welding | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `wet_surface` | Aqueous cleaning and preparation | conditional | Only when aqueous cleaning or conversion treatment is actually performed; activate individual rows from the documented recipe | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `powder_finish` | Powder application and curing | conditional | Only when actual finishing uses powder; electrical curing rows only for actual electrically cured powder | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `assembly` | Configured golf-car assembly | required | Every accepted complete unit; activate component rows only when actually installed | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `acceptance` | Factory acceptance and net-mass determination | required | Every accepted complete unit | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |
| `packaging` | Shipment protection at factory gate | conditional | Only when shipment protection is inside the declared delivery gate; disclose its exclusion otherwise | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished unit |

Process records are separate contributors to one final accepted output, not seven separately traded reference products. Retain traceable internal-part transfer and bill-of-material records; internal transfers cancel within this foreground and do not receive duplicated upstream burdens. The cards below are explicit route-conditioned exchanges. Add each actual additional part, chemical, fuel, packaging piece, wastewater stream or measured elementary substance as its own identified row; absence of a card is not a cut-off permission. For outsourced finishing, replace site chemistry and energy with the exact purchased service or finished-part record and disclose its coverage.

### Process: Stock cutting, forming and machining (`forming`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy steel sheet (`steel_sheet`)

Include only sheet stock actually issued for the actual steel chassis bracket. Record grade, width, thickness and incoming surface treatment; weigh issued stock less unopened returns. The confirmed stock identity remains unresolved; do not substitute contradictory alloy/non-alloy records.

- Selected flow: Hot-rolled non-alloy steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### Extruded 6061-T6 aluminium-alloy rectangular chassis tube (`al_tube`)

Only actual drawing- and supplier-confirmed 6061-T6 rectangular tube fabricated on site; record section, temper and mass issued less returns. Club Car supports an aluminium frame only, not this alloy/temper. The public wire-profile identity is not a tube. Purchased complete chassis constituents are excluded here.

- Selected flow: Extruded 6061-T6 aluminium-alloy rectangular chassis tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `clubcar-tempo-2022`

###### Cold-formed non-alloy steel rectangular chassis tube (`steel_tube`)

Only actual specified steel-tube stock fabricated on site, with grade, wall thickness, surface and measured mass. E-Z-GO supports welded steel frames, not a universal stock grade or plant route; the candidate shape has conflicting forming/classification context and is not forced onto this tube.

- Selected flow: Cold-formed non-alloy steel rectangular chassis tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `ezgo-rxv-2024`

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

###### Segregated dry aluminium-alloy chassis-tube offcut (`al_offcut`)

Only actual segregated untreated aluminium offcuts exported; weigh kg and record alloy, contamination and destination. The candidate loose scrap reference property is bulk Volume; its default bulk-density factor is not evidence for this weighed batch. Keep UUID unresolved unless the real property and measured conversion are reconciled.

- Selected flow: Segregated dry aluminium-alloy chassis-tube offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

### Process: Structural welding and dressing (`joining`)

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

Meter welding, weld dressing and extraction equipment; apply the same purchased supply condition as forming_electricity. Do not count the common factory meter twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### ER4043 aluminium-silicon welding filler wire (`al_wire`)

Only actual supplier-confirmed ER4043 wire used in the qualified aluminium joint; collect spool issue less return and declared filler chemistry. Do not infer filler from frame material or apply a carbon-steel wire identity.

- Selected flow: ER4043 aluminium-silicon welding filler wire
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_powder_finish`

### Process: Configured golf-car assembly (`assembly`)

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

###### Finished aluminium-alloy golf-car chassis (`al_chassis`)

One actual purchased complete chassis with drawing, alloy, finishing and installed component boundary and net mass declared. This replaces its constituent stock, welding and finishing within this foreground; the brochure does not require site fabrication. A photovoltaic mounting frame is not a vehicle chassis.

- Selected flow: Finished aluminium-alloy golf-car chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `clubcar-tempo-2022`

###### Finished powder-coated steel golf-car chassis (`steel_chassis`)

Only the actual supplied welded steel chassis with coating composition, mass and content declared. Do not repeat supplier welding, powder and curing utilities as on-site inputs. A special-purpose truck frame is not automatically a golf-car chassis.

- Selected flow: Finished powder-coated steel golf-car chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `ezgo-rxv-2024`

###### Finished flooded deep-cycle lead-acid golf-car traction battery (`lead_pack`)

Only supplier-confirmed flooded deep-cycle units for this configuration; record model, voltage, installed count, electrolyte state, delivered mass and battery-box boundary. This finished electrochemical product includes its filled electrolyte; do not count lead or sulfuric acid again. Starter/general lead-battery classification contradictions and energy-reference industrial battery candidates remain unresolved.

- Selected flow: Finished flooded deep-cycle lead-acid golf-car traction battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished lithium-ion golf-car traction battery pack (`li_pack`)

Only one actual configured purchased finished traction pack, with supplier-confirmed cathode/anode chemistry, cells, enclosure, BMS, wiring, capacity and net mass recorded. Lithium-ion marketing does not specify NMC or LFP chemistry; do not infer it. Do not duplicate included cells or electrolyte. The count-property public candidate has contradictory doped-chemical classification and no complete traction-pack boundary, so no forced UUID is supplied.

- Selected flow: Finished lithium-ion golf-car traction battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `ezgo-rxv-2024`

###### Complete AC induction golf-car traction motor (`ac_motor`)

Only nameplate-confirmed AC induction motors outside a purchased complete drive module. Record model, measured mass and controller/brake inclusion. E-Z-GO supports AC architecture; induction technology must be verified in the actual foreground. The candidate rail/tram traction motor is not this golf-car motor.

- Selected flow: Complete AC induction golf-car traction motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `ezgo-rxv-2024`

###### Complete brushed DC golf-car traction motor (`dc_motor`)

Only actual separately supplied nameplate-confirmed brushed DC motors; record winding, housing, mass and module boundary. This is a conditional actual-product variant, not a universal OEM requirement; do not mix it with AC motors in one exchange.

- Selected flow: Complete brushed DC golf-car traction motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete electric-golf-car geared transaxle (`transaxle`)

One actual purchased geared axle and differential assembly; declare housing, gearing, bearings, retained gear oil and included motor/brake. Record delivered mass; included parts and fluids must not be counted again.

- Selected flow: Complete electric-golf-car geared transaxle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete golf-car traction power controller (`controller`)

Record the actual supplied drive controller, power stage, enclosure, circuit-board/wiring boundary and measured mass. A generic ECU does not establish the voltage, traction inverter or chopper route. Included harness and electronics are not counted twice.

- Selected flow: Complete golf-car traction power controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships (`harness`)

Use only the other-vehicle-wiring part of this broad public identity: one actual finished non-ignition electric-golf-car wiring harness. Declare conductor, insulation, connectors, circuit, supplier gate and measured mass; do not require an ignition system or duplicate wiring already in a purchased module. Preserve the official Chinese baseName despite its repeated ignition wording.

- Selected flow: Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished injection-moulded TPO golf-car front cowl (`front_cowl`)

One actual supplied thermoplastic-polyolefin front body panel with polymer/elastomer blend, fillers, colour, moulded state and measured mass specified. E-Z-GO supports TPO body construction only; do not infer polypropylene grade or on-site injection moulding. A rear panel requires its own row.

- Selected flow: Finished injection-moulded TPO golf-car front cowl
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `ezgo-rxv-2024`

###### Finished polypropylene golf-car canopy (`canopy`)

Only an actually installed canopy whose polypropylene compound, reinforcement, geometry and measured mass are confirmed by supplier evidence. OEM accessory listings do not establish its polymer. Other canopy materials and supporting posts need separate physical rows.

- Selected flow: Finished polypropylene golf-car canopy
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete upholstered two-seat golf-car bench (`seat`)

One actual complete finished two-seat bench; declare cover, foam, base, mounting and backrest inclusion, measured mass and supplier gate. Do not duplicate covered polymer or fabric as foreground raw inputs.

- Selected flow: Complete upholstered two-seat golf-car bench
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished polycarbonate fold-down golf-car windscreen (`windscreen`)

Only actually installed supplier-confirmed polycarbonate windscreen with coating, thickness, hinges and measured mass. The optional OEM windshield listing does not establish polycarbonate chemistry or universal installation; other glazing needs a distinct row.

- Selected flow: Finished polycarbonate fold-down golf-car windscreen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Tire (`tyre`)

Only actual finished new pneumatic rubber turf tyres compatible with this public non-road tyre class; record formulation, reinforcement, size and installed count. Quantity is counted in Item(s), retaining the public Number of items reference property. Measure each tyre mass separately for BOM reconciliation; do not substitute kg for the public count property. Rim is separate. Count q_item per accepted unit and normalize q_item/M; the result is Item(s) per kg of car.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Finished steel golf-car wheel rim (`wheel`)

Only actual specified steel rims, with coating, dimensions, measured mass and valve inclusion. Tyres and complete tyre-wheel modules are different exchange boundaries; do not duplicate.

- Selected flow: Finished steel golf-car wheel rim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete golf-car rack-and-pinion steering gear (`steering`)

One actual supplied gear with housing, rack, pinion and tie-rod inclusion declared; record mass and drawing. Steering wheel and column outside the module need separate rows.

- Selected flow: Complete golf-car rack-and-pinion steering gear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `clubcar-tempo-2022`

###### Complete hydraulic coil-over golf-car shock strut (`strut`)

Only actually supplied installed coil-over struts; record steel spring, hydraulic damper, retained fluid, mass and count. E-Z-GO supports this front architecture; a separate leaf-spring architecture is not forced into this module.

- Selected flow: Complete hydraulic coil-over golf-car shock strut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `ezgo-rxv-2024`

###### Finished steel golf-car suspension leaf spring (`leafspring`)

Only actual installed separately supplied leaf springs with grade, geometry, coating and mass. A damper or complete suspension module is different; no universal count is imposed.

- Selected flow: Finished steel golf-car suspension leaf spring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `clubcar-tempo-2022`

###### Complete mechanical golf-car drum brake (`drum_brake`)

Only actual installed mechanical drum assemblies; declare drum, shoe/friction compound, adjustment and parking-linkage boundary and mass. Club Car electric specifications support this route; the E-Z-GO gasoline column does not prove electric-vehicle drum installation.

- Selected flow: Complete mechanical golf-car drum brake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `clubcar-tempo-2022`

###### Complete electromagnetic golf-car parking brake (`magnetic_brake`)

Only the actually delivered electromagnetic parking-brake assembly outside the purchased motor/transaxle. E-Z-GO supports this electric parking route and motor service braking; they do not establish mandatory mechanical service drums. Record mass and inclusion to prevent double counting.

- Selected flow: Complete electromagnetic golf-car parking brake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `ezgo-rxv-2024`

###### Finished mineral golf-car transaxle lubricating oil (`gear_oil`)

Only actual supplier-graded mineral gear lubricant with additive composition and origin confirmed; weigh fresh issue less unused returns, distinguishing retained delivery oil from discarded oil. A prefilled purchased transaxle already includes its oil; no duplicate input.

- Selected flow: Finished mineral golf-car transaxle lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Complete on-board golf-car battery charger (`onboard_charger`)

Only actually installed on-board chargers; record enclosure, wiring, rated input, mass and module boundary. An off-board charging unit used for factory acceptance is equipment, outside vehicle M; a separately supplied off-board charger requires a separate product model. Do not assume a brochure charger is installed.

- Selected flow: Complete on-board golf-car battery charger
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

Meter factory battery charging at the AC input, including actual charger losses, short driving/braking/steering checks and attributable lifts, ventilation, controller setup and rework. Record initial/final state of charge and test conditions. Do not also count energy discharged from the already charged battery as purchased electricity. Customer charging and golf rounds are excluded; brochure kW, kWh capacity and speed are not factory consumption.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

###### Purchased deionized water for flooded traction-battery topping (`battery_water`)

Only actual separately issued deionized battery water with conductivity and mass recorded. Exclude water already in the purchased filled battery and unused returns; distinguish retained mass in M and discarded liquid. This treated technosphere product is neither directly abstracted groundwater nor wastewater.

- Selected flow: Purchased deionized water for flooded traction-battery topping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Motor vehicles, for the transport of persons, specially designed for travelling on snow, golf cars and similar vehicles (`finished_machine`)

One kilogram of the same complete accepted two-seat off-road battery-electric golf car. The broad public title also covers snow vehicles; those vehicles and other variants are outside this PCR. Include actual installed chassis, traction battery, motor, transaxle, controller, harness, body, two-seat bench, steering, wheels/tyres, brakes, suspension, delivered installed canopy/bag support and retained fluids. Exclude passengers, golf clubs, payload, fixtures, shipping protection, loose spares and a separately supplied off-board charger.

- Selected flow: Motor vehicles, for the transport of persons, specially designed for travelling on snow, golf cars and similar vehicles `2eafcec4-e441-447e-9ef9-40c4722c9ec9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`

##### Elementary flows

###### hydrogen (`hydrogen_air`)

Only when actual foreground factory charging or rework releases measured hydrogen, CAS1333-74-0, to air without a defensible more specific receiving subcompartment: Emissions / Emissions to air / unspecified. Collect substance-specific mass from a calibrated concentration plus measured gas-flow/time protocol with documented composition, temperature, pressure and actual conversion. Do not invent electrolysis, charger-efficiency or ventilation factors, and do not substitute hydrogen sulfide. Not a mandatory lithium-battery emission; absent evidence is unknown, not zero.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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
| `direct_attribution` | shared_operations | Use job tickets and submetering before allocation. Where a common meter remains, require a measured causal driver such as machine-hours for the identified operation, with all participating jobs and idle load disclosed; divide the attributable quantity by accepted units of the same configuration before mass normalization. | `ghg-product-allocation-2011` |
| `coproduct_decision` | saleable_outputs | Do not assume scrap is a co-product. Disclose destination and legal/product status. If multiple saleable co-products actually occur, seek subdivision; justify a physical relation or, when unavailable, documented economic/other allocation with sensitivity. No universal mass share or avoided-steel credit is prescribed. | `ghg-product-allocation-2011` |
| `rework_scrap` | manufacturing_losses | Retain rework and rejected-unit burdens attributable to the accepted reporting batch. Record recovered internal material once and exported wastes separately. Disclose upstream recycled-content method and any downstream treatment separately to prevent double credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | accepted net mass | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each acceptance | complete reporting batch | same model and configuration | accepted net mass per unit | calibration, weighing and signed acceptance records |
| `cp_forming` | `forming` | Stock cutting, forming and machining | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, and Item(s) for physically counted finished tyres. Record installed tyre count from issue/return and BOM/acceptance inspection; measure tyre mass separately only for material reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_joining` | `joining` | Structural welding and dressing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, and Item(s) for physically counted finished tyres. Record installed tyre count from issue/return and BOM/acceptance inspection; measure tyre mass separately only for material reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_wet_surface` | `wet_surface` | Aqueous cleaning and preparation | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, and Item(s) for physically counted finished tyres. Record installed tyre count from issue/return and BOM/acceptance inspection; measure tyre mass separately only for material reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_powder_finish` | `powder_finish` | Powder application and curing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, and Item(s) for physically counted finished tyres. Record installed tyre count from issue/return and BOM/acceptance inspection; measure tyre mass separately only for material reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_assembly` | `assembly` | Configured golf-car assembly | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, and Item(s) for physically counted finished tyres. Record installed tyre count from issue/return and BOM/acceptance inspection; measure tyre mass separately only for material reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_acceptance` | `acceptance` | Factory acceptance and net-mass determination | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions; battery supplier/chemistry/count, initial/final charge state, actual AC-input charger meter and on-/off-board boundary; driving duration/distance and load; steering/brake/insulation/leak criteria and results; topping-water retention; actual hydrogen concentration/gas flow/time, medium and conversion conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, and Item(s) for physically counted finished tyres. Record installed tyre count from issue/return and BOM/acceptance inspection; measure tyre mass separately only for material reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. Record signed configuration-specific tests and measured energy/fluids; no brochure operating range, current, weight or speed becomes a manufacturing factor. Measure emitted hydrogen only when a release actually occurs; do not prescribe a generic emission or infer a gas-to-mass factor. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_packaging` | `packaging` | Shipment protection at factory gate | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater, and Item(s) for physically counted finished tyres. Record installed tyre count from issue/return and BOM/acceptance inspection; measure tyre mass separately only for material reconciliation. Purchased-water mass is not converted to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3, Item(s) | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted units of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |

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
| `chemistry_quality` | wet_surface; powder_finish | Verify recipe, concentration and SDS for each supplied formulated chemical; characterize each outgoing waste stream and identify treatment separately from environmental emissions. | recipe, SDS, analyses and transfer tickets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Reject missing qualifiers, passenger/payload-loaded, battery-excluded or shipping-gross mass substitution, non-positive M or mismatch between configuration, cp_mass and finished_machine. Require 1 kg output and explicit normalize_mass on every non-reference applicable row. |  |
| `validate_atomic` | inventory | Require one physical exchange per row, verified public identity when supplied, correct property/unit, localized display and medium. Unresolved UUIDs do not authorize proxy substitution or mixed rows. |  |
| `validate_balance` | coverage | Reconcile installed mass, stock, waste, retained fluids and purchased parts using the actual BOM; independently reconcile installed battery, chassis, drive, body and wheel/brake/suspension module content with measured BOM mass; count-property tyres retain Item(s), with separately measured tyre mass used only in the physical balance. Reconcile battery water issue, retention, waste and measured charging emissions without a default hydrogen factor. Reconcile utilities by stage; internal transfers cancel. Explain differences against recorded measurement uncertainty, without a fabricated numerical tolerance. |  |
| `validate_completeness` | dataset | Check every conditional stage against route evidence. Require missing chemicals, parts, test media and actual emissions to be split and collected before claiming a complete inventory; prohibit cradle-to-gate or service comparisons while upstream or functional coverage is incomplete. |  |
| `validate_allocation` | shared_operations | Require complete driver records and justification for allocation and scrap treatment; document sensitivity where another defensible allocation may change results. | `ghg-product-allocation-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground process for a configured accepted unit |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to a declared golf-car supply model with identical configuration and disclosed upstream coverage |
| excluded_use | Customer charging, golf rounds or passenger transport service; performance comparison across battery/frame/brake configurations without separate functional modelling |
| required_metadata | Model, configuration, empty state, M, retained fluids, manufacturer/site, reporting period, process route, voltage/geography, supplier gates, transport/packaging scope and allocation |
| required_quality_disclosure | Measured versus estimated quantities; unresolved identities; unmeasured emissions and components; upstream linkage completeness; uncertainty, data age and configuration limitations |
| update_trigger | Changed battery chemistry/model/count/pack boundary, chassis or body material, motor/controller/charger, braking/suspension, installed accessories, BOM, fluid/cleaner/coating recipe, purchased component, energy mix, acceptance or net-mass protocol |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `clubcar-tempo-2022` | handbook | Club Car, Tempo brochure GLF0003, copyright2022, imprint042822, PDF p.3 electric and lithium-ion specification columns, frame/steering/suspension/brakes and weight footnote; PDF p.2 optional equipment. https://storage.clubcar.com/-/media/project/milky-way/clubcar/clubcar-documents/pdf/literature/golf-fleet/golf-cars/tempo/glf0003-tempo-brochure---lr.pdf | Historical qualitative golf-car architecture: aluminium frame, rack-and-pinion steering, leaf suspension and mechanical electric-vehicle rear drum brakes. Approximate brochure curb weight explicitly unsuitable for official documentation is not M. No manufacturing intensity, material grade, lifetime, battery chemistry or universal process inferred. |
| `ezgo-rxv-2024` | handbook | E-Z-GO/Textron, RXV spec sheet822013-G18, Rev.06/2024, copyright2024, PDF p.2 ELiTE and EX1-Gas columns, lithium/AC drive, seating, steering/suspension, service/parking brakes, welded powder-coated steel frame and injection-moulded TPO body; p.2 optional accessories. https://ezgo.txtsv.com/sites/default/files/2024-08/GOF-0524_RXV_SS_822013-G18.pdf | Historical qualitative electric variant and alternative steel/TPO construction. Electric column has induction-motor service braking and electromagnetic parking braking; gasoline drum-brake column is not applied to electric. No numerical weight, capacity, current, power, speed, warranty, energy saving or factory acceptance threshold adopted. |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy only; actual causal allocation drivers required, no current comprehensive standards-conformance claim. |
