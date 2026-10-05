---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-produce-cleaning-sorting-and-grading-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Agricultural produce cleaning, sorting and grading machinery manufacture

## 1. Scope and Applicability

This rule covers manufacture of complete machines for cleaning, sorting or grading eggs, fruit and other agricultural produce except seed, grain and dried leguminous vegetables. Separate wet washing, mechanical size/weight grading and optical defect inspection by declared configuration. Include only transfer and ejection mechanisms integral to the delivered machine. Exclude standalone produce conveyors, container cleaning/filling/packing machines, detached packing lines, separately sold parts, food cooking or extraction, farm production, packhouse operation, produce losses, yield, maintenance and end of life. The existing seed/grain/dried-legume machinery PCR explicitly excludes these products; this record supplies wet-module and optical/weighing-specific manufacturing rules. No cleaning or grading service is included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-produce-cleaning-sorting-and-grading-machinery |
| classification_refs | CPC 3.0 44127; category context, not an accepted mapping |
| covered_products | Complete egg, fruit and other non-seed/grain/dried-legume produce cleaning, sorting and grading machines |
| excluded_products | Seed/grain/dried-legume equipment; standalone conveyors and packing machines; produce products and services |
| representative_product | One accepted empty configured wet washer or mechanical/optical grader |
| production_route | Declared purchased stock and components; actual site fabrication, joining, preparation, assembly, control integration and factory acceptance |
| market_state | New, drained complete accepted machine at factory gate; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared produce-cleaning, sorting or grading machinery function |
| How much | 1 kg of an accepted complete configured machine using measured net mass M |
| How well | Meet declared drawing, food-contact construction specification and factory functional acceptance. Washer: leakage and circulation checks; grader: reference-size or calibrated-weight challenges; optical configuration: documented labelled defect samples and interlocks. Actual acceptance criteria must be supplied; no universal accuracy or throughput threshold. |
| How long or cycle | One manufacturing delivery; no assumed operating life or kilograms of produce processed |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machines for cleaning, sorting or grading eggs, fruits or other agricultural produce `36b20b75-5f43-46ab-9e96-d8018f4c75f4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model, serial/lot, produce family; wash/size/weight/optical function; lane and installed module configuration; food-contact grades and finish; rated capacity as descriptive metadata only; empty/drained tanks; installed drives, pumps, controls, integrated conveyors and guards; retained lubricant; M; site and period; supplier gates and stage coverage |

Do not infer a food-contact certification, resin, machine mass, lifetime or factory consumption from manufacturer examples. Equal kilogram reference flows do not establish functional equivalence across washer and grader configurations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `energy_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter unit; convert kWh to MJ using exactly 1 kWh = 3.6 MJ. Do not interpret the electricity property name as a combustion inventory. |
| `volume_units` | groundwater rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain measured volume and its conditions; do not invent gas density, water density or calorific value to switch to mass or energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials and configured components received at declared supplier gates, with no implicit upstream steelmaking or component fabrication in foreground |
| starting_condition_role | Manufacturing input boundary for an accepted complete machine |
| product_classification_scope | Configured agricultural produce cleaning and grading machines within CPC 44127 context |
| recursive_input_rule | A purchased complete machine used as an input is a separately declared upstream product. Do not recursively regenerate this category; distinguish new production from refurbishment. |
| upstream_dataset_requirement | Link input-specific upstream datasets matching material, finished-component gate, geography, voltage and treatment state. Missing links remain disclosed coverage gaps. |
| disclosure | Report foreground factory stages, outsourced operations, component content, incoming transport coverage, protective packaging gate, capital-equipment policy and every exclusion; no complete cradle-to-gate claim without verified upstream and logistics closure. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | Include every actual operation and attributable rework from declared received inputs through factory acceptance; distinguish purchased parts from site fabrication to prevent duplication. Use documented route records. |  |
| `conditional_finish` | finishing | Activate only documented finishing operations and chemical recipes. Manufacturer examples establish possible routes, not universal requirements or recipes. | `sormac-sw50-2026` |
| `exclude_field` | farm_use | Keep produce cultivation, packhouse operation, runtime water and sanitation, rejected produce, food yield and machine disposal outside this manufacturing inventory. No grading service is included. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Stock cutting, forming and machining | conditional | Only onsite fabricated parts; purchased finished parts replace stock inputs | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `joining` | Hygienic fabrication joining and dressing | conditional | Only the actual onsite joining route; no universal welding requirement | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `wet_surface` | Route-specific aqueous cleaning and passivation | conditional | Only documented aqueous preparation and its actual chemical recipe | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `assembly` | Mechanical and wet-module assembly | required | Every complete accepted machine; activate installed components only | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `controls` | Weighing and optical-control integration | conditional | Only configurations containing weighing, optical inspection or PLC hardware | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `acceptance` | Factory functional acceptance and net-mass determination | required | Every complete accepted machine; water exchanges only for documented wet tests | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| `packaging` | Shipment protection at factory gate | conditional | Only protection inside declared delivery gate; otherwise disclose exclusion | foreground manufacturing | per 1 kg reference flow; collected per one accepted finished machine |

Process records are separate contributors to one final accepted output, not seven separately traded reference products. Retain traceable internal-part transfer and bill-of-material records; internal transfers cancel within this foreground and do not receive duplicated upstream burdens. The cards below are explicit route-conditioned exchanges. Add each actual additional part, chemical, fuel, packaging piece, wastewater stream or measured elementary substance as its own identified row; absence of a card is not a cut-off permission. For outsourced finishing, replace site chemistry and energy with the exact purchased service or finished-part record and disclose its coverage.

### Process: Stock cutting, forming and machining (`forming`)

#### Inputs

##### Product flows

###### Cold-rolled stainless steel sheet (`stainless_sheet`)

Only stock actually issued for food-contact basin, deck, pipe or frame fabrication. Record alloy grade, thickness, food-contact specification and finish. A further-worked flat product does not establish ordinary cold-rolled sheet identity.

- Selected flow: Cold-rolled stainless steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `sormac-sw50-2026`

###### Alternating current (`forming_electricity`)

Meter this operation and attributable tools, extraction or test rigs without overlapping factory meters. UUID only for grid-average user-side 1–35 kV purchased supply. Other voltage, origin or supplier gate requires another verified identity; internal transformed electricity is not another purchase.

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

###### Post-industrial stainless steel sheet offcut (`stainless_offcut`)

Segregated clean sheet trim exported untreated. Weigh by alloy grade and identify receiver; generic steel scrap does not establish stainless composition. Internal reuse cancels and oily swarf requires a separate characterized row.

- Selected flow: Post-industrial stainless steel sheet offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

### Process: Hygienic fabrication joining and dressing (`joining`)

#### Inputs

##### Product flows

###### Solid stainless steel welding wire (`stainless_wire`)

Only when the site uses this actual welding route. Record alloy designation and consumed spool mass; carbon-steel flux-cored wire is incompatible.

- Selected flow: Solid stainless steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Pure argon welding shielding gas (`argon`)

Only documented pure-argon supply; determine consumed mass from cylinder issue and return. Carbon dioxide shielding gas or composition-unspecified welding gas is not substituted.

- Selected flow: Pure argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

###### Alternating current (`joining_electricity`)

Meter this operation and attributable tools, extraction or test rigs without overlapping factory meters. UUID only for grid-average user-side 1–35 kV purchased supply. Other voltage, origin or supplier gate requires another verified identity; internal transformed electricity is not another purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

### Process: Route-specific aqueous cleaning and passivation (`wet_surface`)

#### Inputs

##### Product flows

###### Citric acid aqueous passivation reagent, concentration declared (`citric_acid`)

Only a site-confirmed citric-acid passivation recipe. Record supplied concentration, hydration state and makeup mass. Manufacturer stainless construction does not require chemical passivation or establish a recipe; nitric acid, alkali and formulated cleaner each need their own actual row if used.

- Selected flow: Citric acid aqueous passivation reagent, concentration declared
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

###### Process Water (`surface_water`)

Treated purchased process water for actual cleaning or rinsing. Collect supplied mass; preserve treatment and supplier gate. Supplier water extraction is not repeated as a foreground resource.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

###### Alternating current (`wet_surface_electricity`)

Meter this operation and attributable tools, extraction or test rigs without overlapping factory meters. UUID only for grid-average user-side 1–35 kV purchased supply. Other voltage, origin or supplier gate requires another verified identity; internal transformed electricity is not another purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

#### Outputs

##### Waste flows

###### Spent aqueous citric-acid passivation solution (`passivation_effluent`)

Only this segregated liquid stream if exported for treatment. Weigh actual solution, measure pH and composition and record receiver. This waste transfer is not an elementary water emission.

- Selected flow: Spent aqueous citric-acid passivation solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wet_surface.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet_surface`

### Process: Mechanical and wet-module assembly (`assembly`)

#### Inputs

##### Product flows

###### Electric motor (`motor`)

Each installed purchased motor for a conveyor, drive or washing module; record model and net component mass. Use identity only, never the database expert-estimated quantity; exclude motors already included in purchased pump modules.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Pump (`pump`)

One purchased pump type per record, only if installed in the wet configuration. Declare centrifugal water-circulation route, casing, motor inclusion and mass; no pumping service or upstream extraction is represented.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `sormac-sw50-2026`

###### Food-contact polyurethane conveyor belt (`conveyor_belt`)

Only when supplier BOM confirms polyurethane finished belt and its contact specification. A polymer film, leather or rubber belt is not this finished component; generic food-grade plastic evidence alone does not establish polyurethane.

- Selected flow: Food-contact polyurethane conveyor belt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Polypropylene fruit carrier roller (`carrier_roller`)

Only supplier-confirmed polypropylene roller; weigh finished rollers and record food-contact grade. Do not infer resin from blue colour or manufacturer polymer wording.

- Selected flow: Polypropylene fruit carrier roller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Stainless steel bolt (`stainless_bolt`)

Only installed bolts with declared alloy grade, dimensions and mass. Generic steel fasteners or bearing identities are not equivalent; nuts, bearings and guards require separate BOM rows.

- Selected flow: Stainless steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_electricity`)

Meter this operation and attributable tools, extraction or test rigs without overlapping factory meters. UUID only for grid-average user-side 1–35 kV purchased supply. Other voltage, origin or supplier gate requires another verified identity; internal transformed electricity is not another purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

### Process: Weighing and optical-control integration (`controls`)

#### Inputs

##### Product flows

###### Industrial machine-vision camera (`camera`)

Only installed optical inspection hardware; record model, spectral channels, housing, lenses included and net mass. A still-image digital consumer camera is not a verified industrial camera. Optical lighting and computers require individual records if installed.

- Selected flow: Industrial machine-vision camera
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controls.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_controls`
- Sources: `tomra-apples-historical`

###### Load cell (`loadcell`)

Only installed weighing force transducer. Record calibration class, model and measured component mass. Reject a candidate with ecosystem-toxicity reference property; do not transfer its assumed unit count or aggregated quantity. Use the separately verified generic purchased-component mass identity with the actual strain-gauge model declared.

- Selected flow: Load cell `5f7f1e13-97fb-48bc-99db-4b3a6736610e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controls.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_controls`

###### Programmable logic controller (`plc`)

Only an actual purchased PLC hardware component supplied at a China plant gate matching this identity; record model, I/O configuration and mass. Other supply locations or generic control cabinets require separately verified identity; do not count cabinet contents twice.

- Selected flow: Programmable logic controller `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controls.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_controls`

###### Alternating current (`controls_electricity`)

Meter this operation and attributable tools, extraction or test rigs without overlapping factory meters. UUID only for grid-average user-side 1–35 kV purchased supply. Other voltage, origin or supplier gate requires another verified identity; internal transformed electricity is not another purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controls.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_controls`

### Process: Factory functional acceptance and net-mass determination (`acceptance`)

#### Inputs

##### Product flows

###### Process Water (`test_water`)

Purchased treated process water consumed only in documented factory wet-function tests. Collect makeup and unrecovered losses, not repeated circulation or catalogue tank capacity. Runtime washing at a packhouse is excluded.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `sormac-sw50-2026`

###### Alternating current (`acceptance_electricity`)

Meter this operation and attributable tools, extraction or test rigs without overlapping factory meters. UUID only for grid-average user-side 1–35 kV purchased supply. Other voltage, origin or supplier gate requires another verified identity; internal transformed electricity is not another purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

##### Elementary flows

###### ground water (`well_water`)

Only onsite groundwater directly abstracted for manufacturing acceptance tests. Meter m3, well and country; Resources / Resources from water / Renewable material resources from water. No scarcity class asserted. Never count the same water as purchased process water.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Machines for cleaning, sorting or grading eggs, fruits or other agricultural produce (`finished_machine`)

One kilogram is a normalized slice of a complete accepted configured machine. Tanks are empty and drained; no produce payload or trial water is included in M. Retained lubricant, declared integrated transfer mechanism, guards and installed controls are included; detachable packing lines and shipment packaging are excluded.

- Selected flow: Machines for cleaning, sorting or grading eggs, fruits or other agricultural produce `36b20b75-5f43-46ab-9e96-d8018f4c75f4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mass`

##### Waste flows

###### Aqueous factory wet-test wastewater (`test_effluent`)

Only discharged to offsite treatment as this single segregated wastewater. Measure mass and actual suspended or dissolved constituents and receiving treatment. Onsite environmental discharge needs separate measured substances and receiving media; do not invent nutrient or organic emissions from operating brochures.

- Selected flow: Aqueous factory wet-test wastewater
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

###### Polyethylene film (`film`)

Only actual polyethylene shipment film; weigh installed packing and exported trim separately. Packaging inventory is separate from accepted net mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

###### Solid wood transport pallet (`wood_pallet`)

Only actual pallet supplied with the machine. Record wood species, treatment, reusable status and mass; do not infer a generic pallet material or recycled content.

- Selected flow: Solid wood transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packaging.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

###### Alternating current (`packaging_electricity`)

Meter this operation and attributable tools, extraction or test rigs without overlapping factory meters. UUID only for grid-average user-side 1–35 kV purchased supply. Other voltage, origin or supplier gate requires another verified identity; internal transformed electricity is not another purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
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
| `cp_forming` | `forming` | Stock cutting, forming and machining | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Do not convert purchased-water mass to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_joining` | `joining` | Hygienic fabrication joining and dressing | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Do not convert purchased-water mass to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_wet_surface` | `wet_surface` | Route-specific aqueous cleaning and passivation | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Do not convert purchased-water mass to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_assembly` | `assembly` | Mechanical and wet-module assembly | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Do not convert purchased-water mass to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_controls` | `controls` | Weighing and optical-control integration | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Do not convert purchased-water mass to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_acceptance` | `acceptance` | Factory functional acceptance and net-mass determination | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Do not convert purchased-water mass to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |
| `cp_packaging` | `packaging` | Shipment protection at factory gate | meter_and_issue_records | job and configuration; accepted unit count; each row-specific issued/returned amount and original unit; constituent/grade; meter readings; allocation driver; waste destination; route conditions | For each atomic row, use calibrated meters, weighed issue/returns, supplier receipts and disposal tickets. Preserve property: kg for mass, MJ from electricity meters, m3 for directly abstracted groundwater. Do not convert purchased-water mass to volume without measured density and conditions. Reconcile stage utility totals with the factory bill, and component/retained-fluid inclusion with the net-mass record. | row-specific kg, MJ, m3 | each job and meter interval | complete same-configuration batch in reporting period; disclose seasonality and mixed lines | declared factory, outsourced and purchased gates | attributable row amount / accepted machines of the same configuration | calibration, supplier composition, job, allocation and disposal evidence |

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
| `chemistry_quality` | wet_surface; acceptance | Verify recipe, concentration and SDS for each supplied formulated chemical; characterize each outgoing waste stream and identify treatment separately from environmental emissions. | recipe, SDS, analyses and transfer tickets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Reject missing qualifiers, payload/gross mass substitution, non-positive M or mismatch between configuration, cp_mass and finished_machine. Require 1 kg output and explicit normalize_mass on every non-reference applicable row. |  |
| `validate_atomic` | inventory | Require one physical exchange per row, verified public identity when supplied, correct property/unit, localized display and medium. Unresolved UUIDs do not authorize proxy substitution or mixed rows. |  |
| `validate_balance` | coverage | Reconcile installed mass, stock, waste, retained fluids and purchased parts using the actual BOM. Reconcile utilities by stage; internal transfers cancel. Explain differences against recorded measurement uncertainty, without a fabricated numerical tolerance. |  |
| `validate_completeness` | dataset | Check every conditional stage against route evidence. Require missing chemicals, parts, test media and actual emissions to be split and collected before claiming a complete inventory; prohibit cradle-to-gate or service comparisons while upstream or functional coverage is incomplete. |  |
| `validate_allocation` | shared_operations | Require complete driver records and justification for allocation and scrap treatment; document sensitivity where another defensible allocation may change results. | `ghg-product-allocation-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground process for a configured accepted machine |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to a declared machinery supply model with identical configuration and disclosed upstream coverage |
| excluded_use | Packhouse runtime consumption, produce yield, grade recovery, whole-life cleaning service or comparisons across functions without additional functional modelling |
| required_metadata | Model, configuration, empty state, M, retained fluids, manufacturer/site, reporting period, process route, voltage/geography, supplier gates, transport/packaging scope and allocation |
| required_quality_disclosure | Measured versus estimated quantities; unresolved identities; unmeasured emissions and components; upstream linkage completeness; uncertainty, data age and configuration limitations |
| update_trigger | Changed mechanism, capacity, BOM, coating chemistry, supplied component, energy mix, acceptance specification or mass protocol |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `sormac-sw50-2026` | handbook | Sormac, Spiral washer SW-50 range, SW-50-EN2026/1, PDF pp.1–2 (unnumbered), Product specification, Scope of delivery, Operating principle and Hygienic piping. https://static.sormac.com/a9/4a/a94a0f281b5cfb253829a581a8f035052fdd450a.pdf | Wet-module and stainless/unspecified food-grade plastic configuration; options vary. Operating water capacity is not manufacturing test consumption. |
| `tomra-apples-historical` | handbook | TOMRA, Spotlight Apples, undated brochure, PDF creation metadata 2022-06-08, PDF p.5 (unnumbered), Inspecting, sorting, grading – and protecting. https://www.tomra.com/-/media/project/tomra/tomra/solutions/food/in-the-spotlight-pdf-files/tomra-segment_article-apples-en.pdf | Historical 5S/Spectrim apple grading and contact-area configuration only; no current availability, lifetime, resin chemistry or factory intensity assertion. |
| `moba-omnia-et` | handbook | Moba, Omnia ET, official product page, Highlights and Detection sections. https://moba.net/products-solutions/omnia-et/ | Egg individual handling, weighing and defect detection; optional modules do not prescribe all-machine BOM. |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, printed p.63 / PDF p.65, tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy only; no current comprehensive standard conformance assertion. |
