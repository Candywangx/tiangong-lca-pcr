---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bookbinding-machinery-machinery-for-type-setting-and-the-like-printing-machinery-and-ma-1de7f354
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bookbinding machinery, machinery for type-setting and the like, printing machinery and machines for uses ancillary to printing (except office type sheet-fed offset printing machinery)

## 1. Scope and Applicability

This candidate governs manufacture of complete industrial printing, type-setting/plate-preparation and bookbinding machinery, supplied after factory acceptance. Covered families include reel/non-office sheet offset, letterpress, flexographic, gravure, screen and industrial electrostatic/digital printing, plus plate/cylinder-making and booksewing/gluing equipment. Each dataset selects one actual configuration, not a fleet-average machine. No common steel grade, roller, drive, UV dryer, ink or adhesive recipe is assumed.

Exclude office-type sheet-fed offset machines, textile/yarn printing equipment, standalone office photocopier/printer/fax interfaces and data-processing peripherals; digitization alone does not decide the boundary. Separately sold parts/accessories and paper-making/converting machines are outside the finished-machine reference. Books, printed paper, plates, printing services and customer use are not outputs here. Generic cutters/folders require a functional-boundary review rather than automatic inclusion.

The full scope also retains mechanical typography/type-setting, container/object and dial printing, label printing, numbering and rotary printing families listed by CPC. Actual screen, flexographic and gravure systems require their own frame, metering/cylinder, feeder, drive, drying and control BOM; specimen variants below do not narrow this scope. Add actual family-specific atomic parts and test formulations without inferring them from offset, LEP or EVA/PUR examples.

The CPC notes both name “warp printing machines for repetitive printing” and explicitly exclude textile/yarn printing machinery. Retain this source ambiguity: that named case requires review of the delivered function and classification evidence; do not blanket-admit or exclude a machine from its label alone or claim the source boundary is unambiguous.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bookbinding-machinery-machinery-for-type-setting-and-the-like-printing-machinery-and-ma-1de7f354 |
| classification_refs | CPC 3.0 44914 |
| covered_products | Bookbinding machinery, machinery for type-setting and the like, printing machinery and machines for uses ancillary to printing (except office type sheet-fed offset printing machinery) |
| excluded_products | Office sheet-fed offset; textile printing; office/peripheral printers; separate parts; paper-making equipment; printed products and services |
| representative_product | Horizon BQ-500 binder; HEIDELBERG industrial offset press/Suprasetter CtP; HP Indigo 120K digital press, each individually configured |
| production_route | Make/buy-specific manufacture, assembly, acceptance and dispatch |
| market_state | Factory accepted finished machine, including declared modules and factory fills |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an accepted machine with declared printing, imaging or binding function |
| How much | 1 kg of accepted complete machine; also disclose one-machine accepted net mass M |
| How well | Actual contracted model, safety/functional acceptance and configuration; no cross-family performance equivalence |
| How long or cycle | One manufacturing and factory acceptance cycle; no lifetime or customer-use duration assumed |
| reference_flow_link | final_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bookbinding machinery, machinery for type-setting and the like, printing machinery and machines for uses ancillary to printing (except office type sheet-fed offset printing machinery) `b31260db-89a4-4b18-a5b2-90f54a2f9936` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | machine family and model; serial/configuration and BOM revision; sheet/web/object substrate interface and format; offset/letterpress/flexographic/gravure/screen/electrostatic or digital imaging technology; colour-unit count and feeder/delivery architecture; plate/cylinder preparation method; binder sewing/gluing mechanism and selected tank; drive/control and hydraulic/pneumatic circuits; dryer/UV/laser options; accepted net mass and test configuration; factory gate state and included modules; geography, supplier interface and reporting period |

Declare all qualifiers. Weigh every accepted net machine of the SAME configuration and BOM/test scope, excluding packaging/rejects/test substrate; sum to period accepted net mass D, count N, and derive M = D/N. Attribute period exchange Q including reject and rework burdens: q_item = Q/N then q_ref = Q/D. Do not average across different machine configurations or substitute shipping gross weight.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| energy_basis | electricity, natural_gas | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the electricity interface reference property despite its label: metered kWh × 3.6 = MJ using verified unit linkage. Gas volume requires actual temperature/pressure and supplier net calorific value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received actual raw materials, semi-finished castings and completed components with supplier operations disclosed |
| starting_condition_role | Supplier product inputs linked to complete upstream burdens |
| product_classification_scope | Bookbinding machinery, machinery for type-setting and the like, printing machinery and machines for uses ancillary to printing (except office type sheet-fed offset printing machinery) |
| recursive_input_rule | Purchased same-category modules carry their supplier burdens once; cancel internal returns and never give automatic substitution credits |
| upstream_dataset_requirement | Link actual material/component manufacture, transport, electricity/provider, each chemical/fuel and actual waste treatment; missing coverage is disclosed |
| disclosure | machine family and model; serial/configuration and BOM revision; sheet/web/object substrate interface and format; offset/letterpress/flexographic/gravure/screen/electrostatic or digital imaging technology; colour-unit count and feeder/delivery architecture; plate/cylinder preparation method; binder sewing/gluing mechanism and selected tank; drive/control and hydraulic/pneumatic circuits; dryer/UV/laser options; accepted net mass and test configuration; factory gate state and included modules; geography, supplier interface and reporting period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_machine | all processes | Include actual machine manufacture through accepted factory gate. Factory-test substrate, ink, adhesive, washing solvent and test power are included only before this gate; subsequent commercial printing/binding, customer utilities, installation, maintenance and end of life are separate scenarios. | `un-cpc3-2025`; `heidelberg-manufacture-2007` |
| boundary_makebuy | receipt, foundry, fabrication, assembly | Maintain a BOM make/buy matrix with supplied state, operations and provider. A purchased finished motor/cabinet/cylinder includes its embedded materials and manufacture once; never additionally enter its embedded steel, copper, electronics, oil or supplier energy as new assembly inputs. When manufactured in house replace that purchased interface with actual raw inputs and operations. Outsourced casting/plating/coating must not disappear. | `heidelberg-production` |
| boundary_atomic | all rows | These conditional cards are candidate exchanges, not a universal BOM. Add each actual grade, formulation, plating chemical, fuel, refrigerant, packaging item, waste and emission separately after site audit. Record integrated compressed air as its actual upstream electricity/fuel service, without simultaneously counting purchased air and its full generating electricity. Justify proportional infrastructure/capital and maintenance coverage. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Purchased component receipt | required | Trace purchased parts, actual state and supplier operations. | foreground_manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| foundry | Conditional in-house casting | conditional | Only for cast parts actually made within the foreground boundary; otherwise supplier burdens stay upstream. | foreground_manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| fabrication | Mechanical fabrication and precision machining | conditional | Actual cutting/forming/welding/machining/grinding/heat treatment of frames, cylinders, shafts or binder mechanisms made in house. | foreground_manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| surface | Surface preparation and coating | conditional | Only actual cleaning, blast preparation, plating or coating/cure; outsourced treatment carries processing and transport upstream. | foreground_manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| assembly | Configuration-specific mechanical and electrical assembly | required | Assemble actual machine architecture; lubricate/fill circuits, align, connect and verify interlocks. | foreground_manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| acceptance | Factory functional testing and release | required | Run actual imaging/printing/binding acceptance test, clean, record rejects/rework and conserve before dispatch. | foreground_manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| dispatch | Packing and factory-gate dispatch | required | Include measured shipping packaging; a disassembled tested press is one declared accepted configuration. | foreground_manufacturing | per 1 kg reference flow; collected per one accepted finished machine |
| utilities | Attributable utilities and pollution controls | required | Meter shared electricity, air compression, water, exhaust capture and wastewater treatment once. | foreground_manufacturing | per 1 kg reference flow; collected per one accepted finished machine |

### Process: Purchased component receipt (`receipt`)

#### Inputs

##### Product flows

###### Purchased machined cast-iron press side frame (`frame`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased machined cast-iron press side frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_frame.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame`
- Sources: `heidelberg-manufacture-2007`

###### Purchased precision steel printing cylinder (`cylinder`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased precision steel printing cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_cylinder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cylinder`
- Sources: `heidelberg-manufacture-2007`

###### Purchased elastomer-covered ink distributor roller (`roller`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased elastomer-covered ink distributor roller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_roller.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_roller`
- Sources: `heidelberg-manufacture-2007`

###### Purchased ceramic-coated anilox roller (`anilox`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased ceramic-coated anilox roller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_anilox.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anilox`
- Sources: `heidelberg-manufacture-2007`

###### Purchased electric servo motor (`motor`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased electric servo motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_motor.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_motor`
- Sources: `heidelberg-manufacture-2007`

###### Purchased assembled electrical control cabinet (`cabinet`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased assembled electrical control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_cabinet.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cabinet`
- Sources: `heidelberg-manufacture-2007`

###### Purchased platesetter laser imaging head (`laser`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased platesetter laser imaging head
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_laser.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_laser`
- Sources: `heidelberg-manufacture-2007`

###### Purchased industrial inkjet printhead (`printhead`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased industrial inkjet printhead
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_printhead.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_printhead`
- Sources: `heidelberg-manufacture-2007`

###### Purchased heated binder glue-tank assembly (`glue_tank`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased heated binder glue-tank assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_glue_tank.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_glue_tank`
- Sources: `heidelberg-manufacture-2007`

###### Purchased booksewing needle (`needle`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased booksewing needle
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_needle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_needle`
- Sources: `heidelberg-manufacture-2007`

###### Purchased steel rolling bearing (`bearing`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased steel rolling bearing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_bearing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bearing`
- Sources: `heidelberg-manufacture-2007`

###### Purchased hydraulic pump (`pump`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased hydraulic pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_pump.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pump`
- Sources: `heidelberg-manufacture-2007`

###### Purchased pneumatic control valve (`valve`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased pneumatic control valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_valve.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_valve`
- Sources: `heidelberg-manufacture-2007`

###### Purchased insulated copper power cable (`cable`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased insulated copper power cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_cable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cable`
- Sources: `heidelberg-manufacture-2007`

### Process: Conditional in-house casting (`foundry`)

#### Inputs

##### Product flows

###### Pig iron charge for in-house casting (`iron_charge`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Pig iron charge for in-house casting
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_iron_charge.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_iron_charge`
- Sources:

###### Silica sand for casting moulds (`silica_sand`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Silica sand for casting moulds
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_silica_sand.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_silica_sand`
- Sources:

###### Phenolic resin casting binder (`phenolic_binder`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Phenolic resin casting binder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_phenolic_binder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_phenolic_binder`
- Sources:

#### Outputs

##### Waste flows

###### Iron-bearing foundry slag (`slag`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Iron-bearing foundry slag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_slag.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_slag`
- Sources:

###### Spent silica casting sand (`spent_sand`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Spent silica casting sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_spent_sand.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_sand`
- Sources:

### Process: Mechanical fabrication and precision machining (`fabrication`)

#### Inputs

##### Product flows

###### Steel plate for fabricated machine frame (`steel_plate`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Steel plate for fabricated machine frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_steel_plate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_plate`
- Sources:

###### Steel bar for machined shaft (`steel_bar`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Steel bar for machined shaft
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_steel_bar.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_bar`
- Sources:

###### Aluminium alloy sheet for machine guard (`aluminium`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Aluminium alloy sheet for machine guard
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_aluminium.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminium`
- Sources:

###### Steel arc-welding wire (`wire`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Steel arc-welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_wire.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wire`
- Sources:

###### Argon welding shielding gas (`argon`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_argon.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_argon`
- Sources:

###### Mineral-oil machining lubricant (`cutting_oil`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Mineral-oil machining lubricant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_cutting_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cutting_oil`
- Sources:

#### Outputs

##### Waste flows

###### Steel machining chips (`steel_chips`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Steel machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_steel_chips.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_chips`
- Sources:

###### Aluminium alloy sheet offcuts (`aluminium_offcuts`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Aluminium alloy sheet offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_aluminium_offcuts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminium_offcuts`
- Sources:

###### Spent mineral-oil machining lubricant (`spent_oil`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Spent mineral-oil machining lubricant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_spent_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_oil`
- Sources:

### Process: Surface preparation and coating (`surface`)

#### Inputs

##### Product flows

###### Sodium hydroxide cleaning solution (`naoh`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_naoh.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_naoh`
- Sources:

###### Steel grit blasting abrasive (`steel_grit`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Steel grit blasting abrasive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_steel_grit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_grit`
- Sources:

###### Polyester coating powder (`powder`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Polyester coating powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_powder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powder`
- Sources:

###### Xylene solvent for coating application (`xylene`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Xylene solvent for coating application
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_xylene.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_xylene`
- Sources:

#### Outputs

##### Waste flows

###### Waste polyester coating powder (`powder_waste`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Waste polyester coating powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_powder_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powder_waste`
- Sources:

###### Spent steel blasting grit (`spent_grit`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Spent steel blasting grit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_spent_grit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_grit`
- Sources:

##### Elementary flows

###### Xylene to air (`xylene_air`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Xylene to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_xylene_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_xylene_air`
- Sources:

### Process: Configuration-specific mechanical and electrical assembly (`assembly`)

#### Inputs

##### Product flows

###### Mineral hydraulic oil factory fill (`hydraulic_oil`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Mineral hydraulic oil factory fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_hydraulic_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulic_oil`
- Sources:

###### Lithium-soap lubricating grease (`grease`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Lithium-soap lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_grease.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grease`
- Sources:

### Process: Factory functional testing and release (`acceptance`)

#### Inputs

##### Product flows

###### Uncoated paper for factory print testing (`paper`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Uncoated paper for factory print testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_paper.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paper`
- Sources:

###### Aluminium offset plate for factory acceptance test (`plate`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Aluminium offset plate for factory acceptance test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_plate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plate`
- Sources:

###### Black lithographic offset printing ink for factory testing (`offset_ink`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Black lithographic offset printing ink for factory testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_offset_ink.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offset_ink`
- Sources:

###### Black liquid electrophotographic ink for factory testing (`lep_ink`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Black liquid electrophotographic ink for factory testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_lep_ink.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lep_ink`
- Sources:

###### Black electrophotographic toner for factory testing (`toner`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Black electrophotographic toner for factory testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_toner.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_toner`
- Sources:

###### EVA hotmelt bookbinding adhesive for factory testing (`eva`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: EVA hotmelt bookbinding adhesive for factory testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_eva.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_eva`
- Sources: `horizon-bq500`

###### PUR reactive hotmelt bookbinding adhesive for factory testing (`pur`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: PUR reactive hotmelt bookbinding adhesive for factory testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_pur.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pur`
- Sources: `horizon-bq500`

###### Isopropanol for factory cleaning (`ipa`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Isopropanol for factory cleaning
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_ipa.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ipa`
- Sources:

###### Unbound printed book sections for factory binding testing (`book_sections`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Unbound printed book sections for factory binding testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_book_sections.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_book_sections`
- Sources: `horizon-bq500`

#### Outputs

##### Waste flows

###### Discarded bound factory-test book (`test_book_waste`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Discarded bound factory-test book
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_book_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_book_waste`
- Sources:

###### Rejected industrial printing press sent for dismantling (`rejected_press`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Rejected industrial printing press sent for dismantling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_rejected_press.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_press`
- Sources:

###### Rejected bookbinding machine sent for dismantling (`rejected_binder`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Rejected bookbinding machine sent for dismantling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_rejected_binder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_binder`
- Sources:

###### Rejected platesetter machine sent for dismantling (`rejected_platesetter`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Rejected platesetter machine sent for dismantling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_rejected_platesetter.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_platesetter`
- Sources:

###### Discarded printed factory-test paper (`test_paper_waste`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Discarded printed factory-test paper
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_paper_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_paper_waste`
- Sources:

###### Waste EVA hotmelt adhesive (`test_eva_waste`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Waste EVA hotmelt adhesive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_eva_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_eva_waste`
- Sources:

###### Waste cured PUR adhesive (`test_pur_waste`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Waste cured PUR adhesive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pur_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_pur_waste`
- Sources:

##### Elementary flows

###### Isopropanol to air (`ipa_air`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Isopropanol to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_ipa_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ipa_air`
- Sources:

### Process: Packing and factory-gate dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Wooden machine shipping crate (`wood`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Wooden machine shipping crate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_wood.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`
- Sources:

###### Polyethylene machine wrapping film (`film`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Polyethylene machine wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_film.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_film`
- Sources:

###### Steel shipping strap (`strap`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Steel shipping strap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_strap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_strap`
- Sources:

#### Outputs

##### Product flows

###### Bookbinding machinery, machinery for type-setting and the like, printing machinery and machines for uses ancillary to printing (except office type sheet-fed offset printing machinery) (`final_product`)

Accepted complete declared machine configuration; excludes transport packaging, rejected equipment and free factory-test materials. Factory-fill lubricants remain only when included in the delivered BOM.

- Selected flow: Bookbinding machinery, machinery for type-setting and the like, printing machinery and machines for uses ancillary to printing (except office type sheet-fed offset printing machinery) `b31260db-89a4-4b18-a5b2-90f54a2f9936`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

### Process: Attributable utilities and pollution controls (`utilities`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Only CN grid consumption mix to user at 1–35 kV with a matched supply provider/year. Other voltage, geography and on-site generation require separately resolved interfaces; this flow is not generic incineration electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources:

###### Natural gas for factory combustion (`natural_gas`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Natural gas for factory combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_natural_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas`
- Sources:

###### Purchased industrial process water (`purchased_water`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Purchased industrial process water
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_purchased_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_water`
- Sources:

#### Outputs

##### Waste flows

###### Aqueous alkaline cleaning wastewater sent to treatment (`wastewater`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Aqueous alkaline cleaning wastewater sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_wastewater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources:

###### Iron-bearing aqueous treatment sludge (`sludge`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Iron-bearing aqueous treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_sludge.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sludge`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air (`co2`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Fossil carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_co2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2`
- Sources:

###### Carbon monoxide to air (`co`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_co.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co`
- Sources:

###### Nitrogen dioxide to air (`no2`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_no2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_no2`
- Sources:

###### Particulate matter smaller than 2.5 micrometres to air (`pm`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Particulate matter smaller than 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_pm.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm`
- Sources:

###### Water evaporated to air (`water_vapour`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Water evaporated to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_water_vapour.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_vapour`
- Sources:

###### Dissolved iron discharged to freshwater (`iron_water`)

Conditional on the actual BOM, route and external exchange. Record exact grade, formulation or assembly specification; absence is not unknown and no universal recipe is prescribed.

- Selected flow: Dissolved iron discharged to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_iron_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_iron_water`
- Sources:

The utilities card is the attributable site total distributed once across processes. If separate process/test submeter exchanges are added, the shared-services row contains only the residual unassigned site load after those amounts are deducted for the same period, units and configuration allocation. Investigate negative residuals against meter boundaries, period, units and uncertainty; never clip them to zero or add a whole-factory meter above process totals.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_causality | shared manufacturing | First subdivide configuration and process records; otherwise justify measured physical-causality drivers such as loaded machine hours, energy meters, coating area or furnace load and cycle. Mass allocation must explain different configuration/process burdens. Economic fallback requires consistent prices/period and sensitivity. Retain unallocated totals and reconcile allocations to them. |  |
| allocation_rework | rejects, scrap and internal returns | Accepted net output denominator excludes rejects but attributable production includes their material, repeated work and treatment burdens. Paired internal return quantities cancel; energy and losses do not. Measure external scrap/fate separately; sale is not alone co-product proof, and no avoided-metal credit is assumed. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | final_product | measurement_record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted machine | Same reporting period as exchanges | Same machine configuration and BOM/test scope | accepted net mass per machine | Scale calibration; matched module sum and acceptance |
| cp_frame | receipt | frame | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_cylinder | receipt | cylinder | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_roller | receipt | roller | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_anilox | receipt | anilox | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_motor | receipt | motor | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_cabinet | receipt | cabinet | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_laser | receipt | laser | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_printhead | receipt | printhead | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_glue_tank | receipt | glue_tank | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_needle | receipt | needle | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_bearing | receipt | bearing | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_pump | receipt | pump | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_valve | receipt | valve | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_cable | receipt | cable | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_iron_charge | foundry | iron_charge | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_silica_sand | foundry | silica_sand | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_phenolic_binder | foundry | phenolic_binder | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_slag | foundry | slag | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_spent_sand | foundry | spent_sand | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_steel_plate | fabrication | steel_plate | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_steel_bar | fabrication | steel_bar | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_aluminium | fabrication | aluminium | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_wire | fabrication | wire | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_argon | fabrication | argon | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_cutting_oil | fabrication | cutting_oil | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_steel_chips | fabrication | steel_chips | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_aluminium_offcuts | fabrication | aluminium_offcuts | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_spent_oil | fabrication | spent_oil | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_naoh | surface | naoh | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_steel_grit | surface | steel_grit | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_powder | surface | powder | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_xylene | surface | xylene | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_powder_waste | surface | powder_waste | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_spent_grit | surface | spent_grit | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_xylene_air | surface | xylene_air | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Species-specific solvent stock/retention/recovery/capture/destruction balance with matched formulation assays; cross-check actual air monitoring after controls. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_hydraulic_oil | assembly | hydraulic_oil | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_grease | assembly | grease | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_paper | acceptance | paper | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_plate | acceptance | plate | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_offset_ink | acceptance | offset_ink | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_lep_ink | acceptance | lep_ink | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_toner | acceptance | toner | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_eva | acceptance | eva | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_pur | acceptance | pur | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_ipa | acceptance | ipa | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_book_sections | acceptance | book_sections | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_test_book_waste | acceptance | test_book_waste | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_rejected_press | acceptance | rejected_press | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_rejected_binder | acceptance | rejected_binder | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_rejected_platesetter | acceptance | rejected_platesetter | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_test_paper_waste | acceptance | test_paper_waste | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_test_eva_waste | acceptance | test_eva_waste | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_test_pur_waste | acceptance | test_pur_waste | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_ipa_air | acceptance | ipa_air | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Matched species-specific purchased concentration, retained/returned/recovered solvent, destruction and measured exhaust/fugitive release; distinguish wet wipes and aqueous residuals. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_wood | dispatch | wood | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_film | dispatch | film | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_strap | dispatch | strap | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_electricity | utilities | electricity | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Process submeters and grid invoices, raw kWh converted by 3.6 to MJ; reconcile machining, curing, assembly, testing, compressors and pollution controls to purchased total without duplicate allocation. | MJ | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_natural_gas | utilities | natural_gas | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Meter temperature/pressure-qualified gas volume and actual supplier net calorific value; retain combustion process allocation and gas composition. | MJ | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_purchased_water | utilities | purchased_water | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Meter external makeup; record water density for mass balance, stock changes, inlet moisture, evaporation, reaction and effluent. Internal air/water service outputs are paired transfers. | m3 | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_wastewater | utilities | wastewater | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | m3 | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_sludge | utilities | sludge | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_co2 | utilities | co2 | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Measured actual species concentration, dry/wet basis, exhaust flow and operating duration after controls. Fuel carbon balance may support fossil CO2, never alone CO, nitrogen dioxide or particles; mixed NOx needs speciation before mapping. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_co | utilities | co | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Measured actual species concentration, dry/wet basis, exhaust flow and operating duration after controls. Fuel carbon balance may support fossil CO2, never alone CO, nitrogen dioxide or particles; mixed NOx needs speciation before mapping. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_no2 | utilities | no2 | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Measured actual species concentration, dry/wet basis, exhaust flow and operating duration after controls. Fuel carbon balance may support fossil CO2, never alone CO, nitrogen dioxide or particles; mixed NOx needs speciation before mapping. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_pm | utilities | pm | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Measured actual species concentration, dry/wet basis, exhaust flow and operating duration after controls. Fuel carbon balance may support fossil CO2, never alone CO, nitrogen dioxide or particles; mixed NOx needs speciation before mapping. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_water_vapour | utilities | water_vapour | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Calibrated weighing plus opening stock, receipts, transfers and closing stock; retain actual grade/formulation, supplier and configuration attribution. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |
| cp_iron_water | utilities | iron_water | measurement_record | site; period; configuration; BOM; actual species/grade; raw amount/unit; stock; paired returns; reject/rework; allocation; calibration; uncertainty | Actual receiving compartment and matched effluent flow times dissolved iron assay; external treatment transfers are not direct elementary releases. | kg | Each lot or metered interval; reconcile period totals | Complete representative period including startup, shutdown, rejects and rework | Declared machine manufacturing line and attributable shared services | attributable exchange / accepted machines | Retained measurements, invoices, assay and destination evidence |

Collect Q for the matched configuration and period including reject/rework burdens, and N only for accepted complete machines. cp_mass retains every accepted measured net mass; use D as their sum and M = D/N. No estimated factory energy, component yield, emissions or machine lifetime is supplied here. Where a row is absent document not_applicable; missing amount remains unknown and cannot be entered as zero.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | frame, cylinder, roller, anilox, motor, cabinet, laser, printhead, glue_tank, needle, bearing, pump, valve, cable, iron_charge, silica_sand, phenolic_binder, slag, spent_sand, steel_plate, steel_bar, aluminium, wire, argon, cutting_oil, steel_chips, aluminium_offcuts, spent_oil, naoh, steel_grit, powder, xylene, powder_waste, spent_grit, xylene_air, hydraulic_oil, grease, paper, plate, offset_ink, lep_ink, toner, eva, pur, ipa, book_sections, test_book_waste, rejected_press, rejected_binder, rejected_platesetter, test_paper_waste, test_eva_waste, test_pur_waste, ipa_air, wood, film, strap, electricity, natural_gas, purchased_water, wastewater, sludge, co2, co, no2, pm, water_vapour, iron_water | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | machine | machine family and model; serial/configuration and BOM revision; sheet/web/object substrate interface and format; offset/letterpress/flexographic/gravure/screen/electrostatic or digital imaging technology; colour-unit count and feeder/delivery architecture; plate/cylinder preparation method; binder sewing/gluing mechanism and selected tank; drive/control and hydraulic/pneumatic circuits; dryer/UV/laser options; accepted net mass and test configuration; factory gate state and included modules; geography, supplier interface and reporting period | BOM; supplier state; drawings; test/acceptance records |
| physical_closure | physical materials/species only | For each physical material and contained species, reconcile external input and opening stocks with accepted product, closing stocks, external scrap, slag, sludge, wastewater and air/water releases; apply the matched species assay and wet/dry basis to EVERY term, including product and purchased inputs. Never equate wet waste, oxide or alloy mass to contained metal. Include reaction production/consumption, sample uncertainty and paired return transfers. Close actual water using external makeup, inlet moisture, opening/closing storage, retained product moisture, evaporation, discharge, transfers and reaction water; density conversions must be measured or sourced. Close each solvent separately including retained coating/product, recovered solvent, capture-media loading, verified destruction, wastewater and solid residues. Internal paired returns cancel across the chosen boundary while rework energy and losses remain. Investigate residuals against actual combined measurement, sampling and allocation uncertainty; no universal tolerance. | Matched assays and measurement/sampling/allocation uncertainty |
| provider_identity | all exchanges | Resolve actual atomic flow, chemical species/state, property/unit, provider geography/year and release compartment. Candidate guidance does not complete private factory evidence or resolve unverified UUIDs. | manifest review_metadata |
| empirical_ranges | all inputs and outputs | No universal intensity, mass, yield or empirical range established; collect actual records, disclose uncertainty and obtain independent compatible evidence before adopting a guardrail. | Site records and reviewed public evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | machine | Check function and excluded countercategories, actual configuration, accepted net output, all required qualifiers and correct reference UUID; industrial digital press is not an office peripheral by assumption. | `un-cpc3-2025` |
| validate_normalization | all rows | Check positive N, D and M for same BOM/test configuration; verify every conversion against accepted output including rejects/rework only in numerator. |  |
| validate_balances | physical material/species records | For each physical material and contained species, reconcile external input and opening stocks with accepted product, closing stocks, external scrap, slag, sludge, wastewater and air/water releases; apply the matched species assay and wet/dry basis to EVERY term, including product and purchased inputs. Never equate wet waste, oxide or alloy mass to contained metal. Include reaction production/consumption, sample uncertainty and paired return transfers. Close actual water using external makeup, inlet moisture, opening/closing storage, retained product moisture, evaporation, discharge, transfers and reaction water; density conversions must be measured or sourced. Close each solvent separately including retained coating/product, recovered solvent, capture-media loading, verified destruction, wastewater and solid residues. Internal paired returns cancel across the chosen boundary while rework energy and losses remain. Investigate residuals against actual combined measurement, sampling and allocation uncertainty; no universal tolerance. |  |
| validate_completion | dataset | Check conditional make/buy routes, every external atomic exchange, upstream component coverage once, utilities without duplication, waste fate and species-specific post-control emissions. Unresolved mandatory UUID, quantity, supplier coverage or unit conversion blocks a complete dataset. Unknown is not zero and machinery methodology is not a conformance certificate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | process; lifecyclemodel |
| allowed_use | Manufacturing one declared machine configuration with linked upstream burdens |
| excluded_use | Printed products, customer operation, office/textile equipment, standalone spare-parts datasets or unqualified cross-family comparison |
| required_metadata | machine family and model; serial/configuration and BOM revision; sheet/web/object substrate interface and format; offset/letterpress/flexographic/gravure/screen/electrostatic or digital imaging technology; colour-unit count and feeder/delivery architecture; plate/cylinder preparation method; binder sewing/gluing mechanism and selected tank; drive/control and hydraulic/pneumatic circuits; dryer/UV/laser options; accepted net mass and test configuration; factory gate state and included modules; geography, supplier interface and reporting period |
| required_quality_disclosure | Make/buy scope, provider and source limitations, unresolved identities/quantities/ranges, uncertainty, allocation and waste destination |
| update_trigger | Machine function/configuration/BOM, production route, acceptance, supplier or gate-state change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, 44914, 44942, 45150, 44917 and 4526. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Machine-family inclusion and countercategories; classification is not a factory recipe. |
| horizon-bq500 | extension_guidance | Horizon BQ-500 Perfect Binder brochure, pages 3–6, retrieved 2 October 2026. https://www.horizon.co.jp/products/catalog/e_pdf/e002bi/02bq4_pdf/bq500_e.pdf | Independent binding-machine architecture and interchangeable EVA/PUR tank alternatives; no universal adhesive or consumption. |
| hp-digital-2024 | extension_guidance | HP, Analog to Digital Transformation, 24 March 2024. https://www.hp.com/us-en/newsroom/blogs/2024/hp-accelerates-the-analog-to-digital-transformation.html | Indigo 120K commercial digital press/LEP counterexample to analogue-only architecture; claims about customer productivity are not manufacturing factors. |
| heidelberg-production | extension_guidance | HEIDELBERG Company profile, International production network, retrieved 2 October 2026. https://www.heidelberg.com/global/en/about_heidelberg/company/company_profile/company_profile_1/company_profile_1.jsp | Conditional casting, mechanical parts, electronics and assembly in a geographically distributed network; no compulsory vertical integration. |
| heidelberg-manufacture-2007 | extension_guidance | HEIDELBERG, A printing press is born, 2007, PDF pages 24–31. https://www.heidelberg.com/global/media/en/global_media/company___about_us/history/historical_documents/2007_heidelberg_a_printing_press_is_born.pdf | Historical offset-specific purchased parts, assembly, factory test printing, cleaning and dispatch. Text reviewed; direct PDF acquisition/render unavailable. No historical numerical weights, shares or times adopted. |
| heidelberg-ctp | extension_guidance | HEIDELBERG USA, Offset Computer-to-Plate overview, Suprasetter A75 and A106/106, retrieved 2 October 2026. https://www.heidelberg.com/us/en/products/computer_to_plate_1/prepress_overview.jsp | Inspected official overview describes plate-imaging equipment and manual/automated loading alternatives, distinct from printing presses; no numeric specification adopted. The separate brochure download/render remains unavailable. |
