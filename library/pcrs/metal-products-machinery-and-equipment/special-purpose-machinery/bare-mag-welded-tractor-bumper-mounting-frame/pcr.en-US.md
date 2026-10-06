---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bare-mag-welded-tractor-bumper-mounting-frame
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bare MAG-welded bent-steel tractor-bumper mounting-frame manufacture

## 1. Scope and Applicability

This candidate covers complete bare welded bent-plate mounting-frame components for a specifically identified agricultural tractor and bumper module, manufactured from received uncoated non-alloy hot-rolled steel sheet by nitrogen-assisted laser cutting, press-brake bending and solid-wire MAG with purchased82vol%argon18vol%CO2 premix. The OEM drawing must identify both the tractor-side attachment and bumper-side support interfaces; this is not a generic building or support frame. GMI names tractor-bumper brackets and agricultural frames and offers these process options. The selected combined route and bare transfer state require an actual order, not inference that every manufacturer product follows it.

Generic cutting/forming/welding techniques reuse structural-metal methodology. The material supplement is dual machine-specific interface control, tractor/bumper part-and-drawing compatibility, weld-map traceability, complete configured-component release and same-configuration net mass, rather than a new identity merely for CPC44199. Exclude bumper itself, complete tractor/implement, buildings/scaffolding, other agricultural parts, cast/forged/machined-only components, tubes, gears/drives, repair, field installation/use, downstream permanent coating and other cutting/joining/gas routes. Scientific review is pending; the declared gate is received sheet to bare accepted weldment, not a complete cradle-to-gate inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bare-mag-welded-tractor-bumper-mounting-frame |
| classification_refs | CPC3.0 44199, narrower; no accepted mapping claimed |
| covered_products | Complete bare bent-plate MAG-welded tractor-bumper mounting-frame component for one declared OEM drawing and interface configuration |
| excluded_products | Generic structural metal products; other machinery parts, complete bumper/tractor, tube/cast/forged routes, permanent coating, field use and repair |
| representative_product | Evidence-selected welded mounting-frame subset of GMI tractor-bumper bracket and frame supply; actual same-drawing order required, no invented model |
| production_route | Received steel sheet → nitrogen-assisted laser cutting/edge preparation → press-brake bent members → fixture-controlled solid-wire MAG82/18 assembly → weld/interface geometry inspection → complete net weighing and bare release |
| market_state | New accepted bare welded mounting component transferred before coating and before integration; all drawing-required welded members complete |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted bare MAG-welded bent-steel tractor-bumper mounting frame |
| How much | 1 kg net accepted complete mounting-frame component |
| How well | Actual OEM drawing/BOM, both dedicated attachment interfaces and weld acceptance records; no universal load capacity or hole tolerance |
| How long or cycle | One manufacturing acceptance cycle; no assumed tractor use, crop yield, service life or use-stage function |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted bare MAG-welded bent-steel tractor-bumper mounting frame |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | specific agricultural tractor model and bumper module; OEM part number, drawing revision and BOM; tractor-side and bumper-side attachment patterns, mounting-hole positions, datums and load/clearance interfaces under actual controlled drawings; all delivered welded plate members, excluded loose fasteners/bumper and bare uncoated state; received non-alloy hot-rolled uncoated sheet grade/thickness/certificate; actual nitrogen cutting and press-brake programme; approved solid Mn-Si wire MAG procedure, fixture, weld map/qualifications and actual82vol%Ar18vol%CO2 supply certificate; dimensional/weld acceptance criteria and records; complete net measured M kg of the same drawing/configuration, calibrated scale/tare/uncertainty; site/period/count/rework/allocation, actual supply links, measured conditional release medium and carbon provenance |

Declare every qualifier in metadata or source-addressable records. Equal mass is not equal interface compatibility, bumper load capacity or fatigue life. A change of drawing revision, welded members, steel thickness or transfer completion is a distinct configuration, not an averaged interchangeable item.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `physical_mass` | all kg inventory rows | Mass | kg | Measure each net exchange separately, with issue/return and stock changes. Gas volume to mass requires real temperature/pressure/composition and measured or verified conversion; volumetric blend percentages are not mass fractions and no guessed density is allowed. |
| `oil_volume` | hydraulic_oil | Volume | m3 | Measure net replacement/top-up oil with calibrated dispenser at recorded temperature;1 L =0.001 m3. A separate mass reconciliation requires actual batch density, not a public-property rewrite or assumed value. |
| `electric_energy` | cutting_electricity; forming_electricity; welding_electricity; release_electricity | Net calorific value | MJ | Meter actual attributable AC use;1 kWh =3.6 MJ. State supplier, voltage, delivery losses and extraction/support attribution separately. |
| `mass_configuration` | cp_mass | Mass | kg | Weigh the complete accepted bare welded frame under the same OEM part number/drawing revision/BOM, including all joined plate members and retained weld metal. Exclude tractor, bumper body, loose fasteners, jig, racks and removable packaging; no generic vehicle weight or theoretical steel-volume substitute. |
| `mass_original` | cp_mass | Mass | kg | Retain same-configuration calibrated scale readings, zero/tare, capacity appropriate to actual component, uncertainty and acceptance linkage. Reconcile received plate, offcuts, retained wire, captured residues and rejected/reworked pieces; explain imbalance without invented closure tolerance. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received uncoated hot-rolled non-alloy steel sheet and separately supplied consumables at the fabrication plant |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Specific tractor-bumper mounting-frame component subset, not all44199 machinery parts |
| recursive_input_rule | Purchased finished frames are separate supplier products, not sheet inputs; do not rebuild upstream steelmaking/rolling or duplicate internal cut/bent intermediates |
| upstream_dataset_requirement | Link compatible actual sheet, wire, supplied gas, electricity, consumables and waste-treatment datasets before any extended supply-chain claim |
| disclosure | Received-sheet to accepted complete bare weldment only. Actual on-site and subcontract scope, support loads, supplier states and missing links disclosed |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | dataset | Include actual dry nitrogen laser/edge preparation, bent plate members, MAG fit-up/weld/extraction/rework, controlled interface and weld inspection and net weighing. Bare release stops before permanent coating and agricultural-machine integration. Actual outsourced included operations need explicit datasets and no duplicate local burden. | `gmi-weldments`; `gsm-agriculture` |
| `boundary_species` | all inventory rows | No fuel, water, wastewater, combustion emission or mandatory air-release amount is inferred from electric fabrication. Conditional Mn and fossil CO2 require actual species/balance evidence; collected dust is waste, not atmospheric release. If actual site data establish other utilities or releases, add chemically specific exchanges with medium/submedium and measured quantity before quantitative completeness. | `hse-welding`; `hse-extraction` |
| `boundary_limits` | dataset | Upstream steel production and gas/consumable/electricity supply, installation, tractor/bumper use, maintenance and post-release transport are outside this foreground gate. Missing upstream links are not zero burdens and this is not complete cradle-to-gate. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cutting` | Nitrogen-assisted steel sheet laser cutting and edge preparation | required | Received uncoated hot-rolled non-alloy steel sheet cut for a drawing-defined agricultural mounting frame; nitrogen assist only. | foreground | one accepted complete unit normalized with M |
| `forming` | Controlled press-brake bending of mounting-frame plate members | required | The chosen frame drawing contains bent plate members; their actual in-gate press-brake forming is included. | foreground | one accepted complete unit normalized with M |
| `welding` | Solid-wire MAG welding and controlled frame fit-up | required | Uncoated non-alloy steel bent plate mounting frame joined by solid Mn-Si steel wire MAG and purchased 82vol% argon/18vol% carbon-dioxide premixed shielding gas. | foreground | one accepted complete unit normalized with M |
| `release` | Bare mounting-frame dimensional and weld acceptance, net weighing and release | required | Drawing-defined welded bare plate frame released before paint and before installation on agricultural equipment. | foreground | one accepted complete unit normalized with M |

All processes apply to the same declared tractor-bumper mounting-frame drawing/BOM; part and lot genealogy connect the two dedicated interfaces through cut blanks, bends, weld map and final release. Required stages do not make optional abrasive, oil, packaging or species release universal. Rejects consume attributable resources but never increase accepted output count.

### Process: Nitrogen-assisted steel sheet laser cutting and edge preparation (`cutting`)

Retain sheet grade, thickness, mill certificate and nesting file. Measure blanks, skeleton/offcuts and actual dross/filter collection separately. Include dry edge deburring only when used. Oxygen/air cutting, tube input, wet sawing, bought precut blanks and any coating removal change this route and are outside this candidate. GMI lists nitrogen-assisted sheet cutting; it does not specify this order or a universal nesting yield.

#### Inputs

##### Product flows

###### Uncoated hot-rolled non-alloy structural steel sheet (`steel_sheet`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Uncoated hot-rolled non-alloy structural steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cutting`
- Sources: `gmi-weldments`

###### Gaseous nitrogen for dry laser cutting assist (`nitrogen`)

Only actual gaseous nitrogen from documented air-separation supply for dry laser assist, CAS7727-37-9. Not liquid nitrogen, N2O or an elementary resource. Weigh delivered net consumption; a real volume reading requires actual gas temperature/pressure/composition and a verified conversion, not the public property meanValue as a guessed density.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cutting`
- Sources: `gmi-weldments`

###### Bonded aluminium-oxide abrasive deburring disc (`abrasive_disc`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Bonded aluminium-oxide abrasive deburring disc
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cutting`
- Sources: `gmi-weldments`

###### Actual alternating-current electricity use (`cutting_electricity`)

Actual process-attributable AC electricity including declared extraction/support loads;1 kWh =3.6 MJ. No public electricity identity establishes voltage, grid, generation route or upstream geography; actual supply link required.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cutting`
- Sources: `gmi-weldments`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated non-alloy steel laser-cutting skeleton and offcuts (`steel_offcuts`)

Actual segregated unprocessed steel production scrap transferred from cutting/forming at the plant. Record skeleton/offcut net steel mass and recipient; no used-vehicle scrap, mixed nonferrous/battery waste or assumed downstream recycling benefit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cutting`
- Sources: `gmi-weldments`

###### Solid non-alloy steel laser-cutting dross (`cutting_residue`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Solid non-alloy steel laser-cutting dross
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cutting`
- Sources: `gmi-weldments`

###### Collected non-alloy steel laser-cutting filter dust (`cutting_dust`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Collected non-alloy steel laser-cutting filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cutting`
- Sources: `gmi-weldments`

###### Spent bonded aluminium-oxide disc with steel deburring contamination (`spent_disc`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Spent bonded aluminium-oxide disc with steel deburring contamination
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cutting`
- Sources: `gmi-weldments`

##### Elementary flows


### Process: Controlled press-brake bending of mounting-frame plate members (`forming`)

Record bend programme, tooling, actual bend angles and mounting interfaces. No universal tonnage, material thinning, scrap fraction or heat treatment is prescribed. Hydraulic-oil replenishment and disposal apply only to an actually hydraulic press brake, measured from issues, returns and inventory; an electric brake does not inherit hydraulic consumption.

#### Inputs

##### Product flows

###### Formulated mineral hydraulic oil for actual hydraulic press brake (`hydraulic_oil`)

Only actual mineral formulation with documented at least70% petroleum-oil composition and actual net top-up/replacement volume at recorded temperature. Retain dispenser calibration and tank inventory. This is plant consumption, not steel-frame mass; no universal oil density or per-cycle charge.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `gmi-weldments`

###### Actual alternating-current electricity use (`forming_electricity`)

Actual process-attributable AC electricity including declared extraction/support loads;1 kWh =3.6 MJ. No public electricity identity establishes voltage, grid, generation route or upstream geography; actual supply link required.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `gmi-weldments`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used mineral lubricating oil from hydraulic press brake (`spent_oil`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `gmi-weldments`

##### Elementary flows


### Process: Solid-wire MAG welding and controlled frame fit-up (`welding`)

Use the actual approved weld procedure, wire heat/SDS, gas certificate, weld map, fixture and sequence. This explicitly chosen blend is commercially documented by Linde, not a universal agricultural welding requirement. GMI supports MAG as one offered route. Pure CO2, another mixture, flux-cored wire, stick/TIG/laser joining and brazing are outside this method. Include actual fit-up, tacking, welds, extraction and rework. Do not equate worker exposure or generated fume with an environmental release; capture and final exhaust are distinct.

#### Inputs

##### Product flows

###### Solid manganese-silicon carbon-steel MAG welding wire (`weld_wire`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Solid manganese-silicon carbon-steel MAG welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

###### Compressed premixed welding gas 82vol% argon and18vol% carbon dioxide (`shielding_mix`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Compressed premixed welding gas 82vol% argon and18vol% carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

###### Actual alternating-current electricity use (`welding_electricity`)

Actual process-attributable AC electricity including declared extraction/support loads;1 kWh =3.6 MJ. No public electricity identity establishes voltage, grid, generation route or upstream geography; actual supply link required.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected iron-manganese-bearing solid MAG welding extraction dust (`collected_fume`)

Only the named physical exchange actually used or transferred. Retain exact supplier grade/formulation and state, net issues less returns, stock balance and measured quantity. Document true conditional absence; never replace missing evidence with zero.

- Selected flow: Collected iron-manganese-bearing solid MAG welding extraction dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

##### Elementary flows

###### Manganese released to air, unspecified subcompartment (`manganese_air`)

Conditional on actual measured elemental manganese release to external air, unspecified subcompartment. Retain aerosol speciation as Mn mass, exhaust/fugitive sampling, flow/time and capture disposition; total welding fume, Mn oxide mass and workplace exposure concentrations do not establish this amount. No default release factor.

- Selected flow: manganese `08a91e70-3ddc-11dd-9bc7-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`

###### Carbon dioxide, fossil, released to air, unspecified subcompartment (`co2_air`)

Conditional only on documented fossil carbon provenance of the shielding CO2 and actual released CO2 established by measured gas inventory/composition, retention and transformations. Certified gas blend composition alone does not establish carbon provenance or atmospheric amount. Biogenic/mixed/unknown origin needs separate identity and rows; no blanket fossil assumption or combustion factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `gmi-weldments`; `linde-corgon18`; `hse-welding`; `hse-extraction`


### Process: Bare mounting-frame dimensional and weld acceptance, net weighing and release (`release`)

Verify actual mounting-hole positions, datum geometry, distortion, weld coverage and order-specific acceptance criteria. Record visual inspection and only actual specified additional tests; no mandatory universal NDT, proof load or fatigue test is inferred. Complete net M includes joined steel and retained weld metal, excludes fixtures, packaging, loose fasteners and downstream paint. Protected storage must meet the actual purchaser transfer specification; this bare intermediary is not a complete field-ready agricultural machine.

#### Inputs

##### Product flows

###### Non-adhesive non-cellular unreinforced LDPE packaging foil (`film`)

Only actual nonadhesive noncellular unreinforced unlaminated unsupported LDPE foil used as removable packaging. Supplier composition and net consumed foil mass required; exclude racks/pallets from this exchange and complete net M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `gmi-weldments`; `gsm-agriculture`

###### Actual alternating-current electricity use (`release_electricity`)

Actual process-attributable AC electricity including declared extraction/support loads;1 kWh =3.6 MJ. No public electricity identity establishes voltage, grid, generation route or upstream geography; actual supply link required.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `gmi-weldments`; `gsm-agriculture`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted bare MAG-welded bent-steel tractor-bumper mounting frame (`finished_machine`)

Fixed1 kg of the complete accepted uncoated welded mounting-frame component for one specified tractor/bumper interface configuration. Include all drawing-defined bent plate members and retained weld metal. Exclude the bumper itself, tractor, loose fasteners, paint, jig, rack and removable packaging. M comes from calibrated weighing of this same drawing revision/BOM and acceptance state; count-based production must keep this configuration separate.

- Selected flow: Accepted bare MAG-welded bent-steel tractor-bumper mounting frame
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `gmi-weldments`; `gsm-agriculture`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | Avoid allocation by drawing/order, nesting subdivision and station submeter. Allocate unavoidable shared cutting, brake, weld/extraction and inspection loads using demonstrated measured machine time/load or other actual causal driver. Record numerator, same-configuration accepted count, stock changes, idle/rework attribution and sensitivity. Different material thickness, weld length or mounting designs are not automatically mass-equivalent. | `ghg-allocation` |
| `allocation_scrap` | steel_offcuts; cutting_residue; collected_fume; spent_disc; spent_oil | Separate unused stock return, internally reused pieces, transferred waste and any reviewed genuine co-product. No automatic avoided virgin-steel credit or co-product status from sale value. Weigh scrap/dust without duplicated retained fluids or filter hardware; actual recipient and treatment boundary must be stated. | `ghg-allocation` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | release | reference product | weighing_record | part number; drawing revision; configuration; tractor/bumper models; serial/lot; accepted net mass M; complete joined BOM; scale calibration/zero/tare/uncertainty; acceptance linkage | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration and lot | declared manufacturing period | complete bare-component release station | accepted net mass per unit | raw scale readings and calibration, same drawing/BOM/interface acceptance |
| `cp_cutting` | cutting | individual inventory exchanges | production_record | row_id; drawing/BOM/configuration; order/lot; accepted units; issues/returns/stock; measured quantity/unit; submeter; rejects/rework; supplier/recipient and species observations | Record weighed net sheet issues/returns/stocks, nesting/order genealogy, nitrogen measured mass or actual metered-volume conversion, cut-piece and offcut masses, captured cutting residue and station kWh. Aggregate actual same-configuration order records, reconcile stock, allocate by recorded causal driver and divide attributable totals by the accepted complete units of that same configuration. Keep genuine zero, non-applicability and missing records distinct. | kg for mass; m3 for hydraulic oil at recorded temperature; MJ for electricity after kWh conversion | each order/lot and actual consumable or release observation | complete stated period and inventory dates | actual included station or named subcontract gate | attributable exchange amount / accepted units | original quantities, calibration, actual same-configuration count, supplier certificates/SDS and species/recipient records |
| `cp_forming` | forming | individual inventory exchanges | production_record | row_id; drawing/BOM/configuration; order/lot; accepted units; issues/returns/stock; measured quantity/unit; submeter; rejects/rework; supplier/recipient and species observations | Retain part/order routing, bend setup and dimensional checks, actual oil dispensed volume and temperature, tank balance, weighed waste oil and station electricity. Aggregate actual same-configuration order records, reconcile stock, allocate by recorded causal driver and divide attributable totals by the accepted complete units of that same configuration. Keep genuine zero, non-applicability and missing records distinct. | kg for mass; m3 for hydraulic oil at recorded temperature; MJ for electricity after kWh conversion | each order/lot and actual consumable or release observation | complete stated period and inventory dates | actual included station or named subcontract gate | attributable exchange amount / accepted units | original quantities, calibration, actual same-configuration count, supplier certificates/SDS and species/recipient records |
| `cp_welding` | welding | individual inventory exchanges | production_record | row_id; drawing/BOM/configuration; order/lot; accepted units; issues/returns/stock; measured quantity/unit; submeter; rejects/rework; supplier/recipient and species observations | Record wire net feed/returns/stub mass, gas net consumed mixture mass and certified composition, weld and rework time, extraction energy and weighed collected residue. Actual speciation and exhaust/fugitive tests establish elemental manganese release; actual carbon provenance and gas balance establish fossil CO2 only where justified. Aggregate actual same-configuration order records, reconcile stock, allocate by recorded causal driver and divide attributable totals by the accepted complete units of that same configuration. Keep genuine zero, non-applicability and missing records distinct. | kg for mass; m3 for hydraulic oil at recorded temperature; MJ for electricity after kWh conversion | each order/lot and actual consumable or release observation | complete stated period and inventory dates | actual included station or named subcontract gate | attributable exchange amount / accepted units | original quantities, calibration, actual same-configuration count, supplier certificates/SDS and species/recipient records |
| `cp_release` | release | individual inventory exchanges | production_record | row_id; drawing/BOM/configuration; order/lot; accepted units; issues/returns/stock; measured quantity/unit; submeter; rejects/rework; supplier/recipient and species observations | Retain serial/lot, BOM/drawing revision, accepted count, geometry/weld inspection, calibration and complete net scale reading/tare. Measure only actual removable LDPE packing separately. Aggregate actual same-configuration order records, reconcile stock, allocate by recorded causal driver and divide attributable totals by the accepted complete units of that same configuration. Keep genuine zero, non-applicability and missing records distinct. | kg for mass; m3 for hydraulic oil at recorded temperature; MJ for electricity after kWh conversion | each order/lot and actual consumable or release observation | complete stated period and inventory dates | actual included station or named subcontract gate | attributable exchange amount / accepted units | original quantities, calibration, actual same-configuration count, supplier certificates/SDS and species/recipient records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `electricity_conversion` | cutting_electricity; forming_electricity; welding_electricity; release_electricity | Convert actual kWh to MJ using1 kWh =3.6 MJ before normalize_mass; retain original meter and shared-load records. | meter kWh | q_item in MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `interface_trace` | reference product | Identify tractor/bumper models, part number, both interface datums/attachment holes and clearances under the actual OEM drawing. Inspect specified geometry and correct distortion before release; no inferred universal tolerance or static/fatigue load. | controlled drawing/revision, BOM, actual measurements and sign-off |
| `weld_quality` | welding; release | Retain material certificate, approved procedure, wire/gas certificates, welder/operator competence, weld map, actual visual and specified additional testing, repairs and final weld disposition. Do not import manufacturer certification or every NDT test as this plant acceptance. | actual procedure, qualification and inspection records |
| `mass_and_completion` | cp_mass | Same drawing/configuration and accepted bare completion define M; incomplete kits, separately supplied loose bolts, paint or complete bumper are not the measured output. Retain raw calibrated weighing with actual accepted count. | BOM/order/acceptance and scale records |
| `species_capture` | manganese_air; co2_air; collected_fume | Measure actual final environmental discharge separately from workplace exposure, generated fume and collected residue. Preserve species as Mn rather than oxide/total dust, current air subcompartment, gas carbon provenance and actual release balance; no occupational limit reused as an emission factor. | species analysis, gas source, exhaust/time/flow and residue balances |
| `inventory_period` | all inventory rows | Complete period/lot, net issue/return/stock change, rework/reject attribution and causal allocation are required. Add any actual additional fixture maintenance, grinding waste, utilities or measured species atomically before declaring quantitative completeness. | quantity/stock/recipient ledgers and uncertainties |
| `evidence_gaps` | dataset | No actual M, order inventory, empirical range, supplier data or plant-quality record has been obtained for a particular producer. Require later foreground acquisition and scientific review. Blank UUIDs remain precise physical flows, not evidence of database absence. | future original records and compatible independently reviewed sources |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | dataset | Verify dedicated tractor-bumper double interface, complete bare bent-plate weldment, actual nitrogen laser/bending/solid-wire82/18 MAG route and explicit exclusions; CPC alone is not applicability. | `gmi-weldments`; `linde-corgon18` |
| `validate_measurement` | all inventory rows | Check exact same-drawing/configuration net M, cp_mass raw scale evidence and count denominator. Every non-reference row applies normalize_mass and its actual collection protocol; preserve public property/unit chain and do not invent density/weight. |  |
| `validate_acceptance` | release | Require controlled interface measurements and weld quality disposition linked to the same BOM/lot. Missing drawing tolerances, weld specifications or physical originals are acquisition/scientific gaps even if mechanical checks pass. |  |
| `validate_atomic` | all inventory rows | Check individual gases/formulations/residues/species, true environmental medium, actual conditional applicability, net masses and recipient boundaries; never replace captured dust with emitted Mn or supplied mixed gas with fossil CO2. | `hse-welding`; `hse-extraction` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset only after actual quantitative completion and independent review |
| allowed_use | Supplier input for the declared compatible tractor-bumper mounting-frame part and manufacturing gate |
| excluded_use | All44199 coverage, generic steel structures, complete tractor/bumper, field performance/lifetime claims and unqualified mass-only comparison |
| required_metadata | specific agricultural tractor model and bumper module; OEM part number, drawing revision and BOM; tractor-side and bumper-side attachment patterns, mounting-hole positions, datums and load/clearance interfaces under actual controlled drawings; all delivered welded plate members, excluded loose fasteners/bumper and bare uncoated state; received non-alloy hot-rolled uncoated sheet grade/thickness/certificate; actual nitrogen cutting and press-brake programme; approved solid Mn-Si wire MAG procedure, fixture, weld map/qualifications and actual82vol%Ar18vol%CO2 supply certificate; dimensional/weld acceptance criteria and records; complete net measured M kg of the same drawing/configuration, calibrated scale/tare/uncertainty; site/period/count/rework/allocation, actual supply links, measured conditional release medium and carbon provenance |
| required_quality_disclosure | Measured M/uncertainty and complete same-drawing configuration; period/count/stock/rework/allocation; interface/weld coverage; supplied states, missing upstream links, measured conditional species, unresolved identities and ranges; scientific review status |
| update_trigger | OEM interface/drawing/BOM, grade/thickness, wire/gas/cutting route, procedure/acceptance, completion/coating, site/energy/supply changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| gmi-weldments | literature | Groupe Maillard Industrie, structural welding; https://www.groupgmi.com/en/expertise/metallurgy/machine-welding/ ; unpaginated Introductory workshops, Laser cutting, Cutting/folding/bending, Welding, Analysis and monitoring, Agricultural machinery | Agricultural tractor-bumper brackets/frames and offered fabrication routes; dimensional/weld controls. Selected combination requires actual foreground order; no capacity, weight or carbon claims adopted. |
| gsm-agriculture | literature | GSM, Agricultural Equipment; https://www.gsmwinc.com/agricultural-equipment/ ; unpaginated equipment and component list | Independent agricultural welded frames and mounting-bracket supply context, not a specific drawing or universal fabrication route. |
| linde-corgon18 | literature | Linde Austria CORGON18; https://produkte.linde.at/industriegase/cyl_techgas/schweiss_gas/corgon_18.html ; composition table and applications, unpaginated | Commercial82%argon18%CO2 MAG shielding mixture. Does not prescribe all agricultural welding or fossil gas origin. |
| hse-welding | official_guidance | UK HSE, Health risks from welding; https://www.hse.gov.uk/welding/health-risks-welding.htm ; Neurological effects, unpaginated | Manganese in mild-steel welding fume: conditional species accounting. Occupational limits not reused as environmental emission factors or worldwide regulation. |
| hse-extraction | official_guidance | UK HSE, Welding fume avoid/reduce exposure; https://www.hse.gov.uk/welding/protect-your-workers/avoid-reduce-exposure.htm ; LEV section, unpaginated | Capture versus uncaptured fume distinction; no universal removal efficiency or emission amount inferred. |
| ghg-allocation | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; printed63 PDF65 Tables9.1–9.2 | Historical general allocation hierarchy; actual causal driver from foreground records, not current agricultural regulation. |
