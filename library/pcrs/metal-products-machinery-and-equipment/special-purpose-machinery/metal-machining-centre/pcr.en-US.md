---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.metal-machining-centre
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured metal machining centres

## 1. Scope and Applicability

Factory manufacture of a new complete CNC metal chip-removing machining centre, numerically controlled in at least three axes and equipped with automatic tool changing and a tool magazine. DMG MORI supports this category distinction (PDF physical p.5, printed pp.8–9). Declare one horizontal or vertical spindle design and one configuration, including actual additional rotary axes. This narrower boundary excludes single-station unit-construction machines, multi-station transfer machines, milling machines without automatic tool changing, turning-centred lathes, grinding, beam machining, non-removal forming, separately sold components and remanufacture. Installed rotary tables, chip conveyors or internal coolant equipment belong only if explicitly included in the machine BOM; external robot cells, pallet lines and separate machines are outside. Customer metal-part production, workpiece yield, use-phase energy/coolant, later maintenance, lifetime and end of life are excluded. This methodology models manufacturing, not a machining service.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.metal-machining-centre |
| classification_refs | CPC 3.0 44212; narrower candidate boundary; no accepted mapping asserted |
| covered_products | Complete configured CNC metal machining centres with automatic tool changing |
| excluded_products | Unit-construction/transfer machines; stand-alone mills, lathes, components and customer machining service |
| representative_product | One declared vertical three-axis CNC centre; five-axis or horizontal variants require their own configuration and M |
| production_route | Receipt and make-or-buy reconciliation; actual structural machining/cover fabrication; optional finishing; spindle/axis/tool-changer/CNC integration; geometric and functional acceptance; optional packout |
| market_state | Accepted complete machine at declared factory gate with declared retained fluid and installed options |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one complete declared metal machining-centre configuration |
| How much | 1 kg accepted net configured machine; measured M kg represents one actual machine |
| How well | Meet the actual model-specific dimensional/geometric, spindle/axis, tool-change, electrical, guarding and functional acceptance plan; retain tolerances and results, without universal accuracy or production-capacity thresholds |
| How long or cycle | One manufacturing delivery; no service life or operating cycle imposed |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete configured CNC metal machining centre |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; serial number; single configuration and BOM revision; spindle orientation/taper and motor inclusion; controlled linear/rotary axes and travels; tool-changer/magazine design and capacity; worktable; CNC/drive/control completeness; guards/interlocks; internal coolant/lubrication; installed options and external equipment exclusions; supplier assembly inclusion; actual acceptance plan/results; retained fluid/drain state; net measured M; site; period; starting/ending gates; packaging and loose-spare exclusions |

Declare all qualifiers in dataset metadata or equivalent notes. M is the accepted installed configuration after the declared fill/drain condition, excluding transport packaging, shipping fixtures, workpieces, loose tools and separately delivered spares. Record factory retained oil/coolant and included chip conveyor or rotary table explicitly. Equal machine mass does not establish equal machining capability. Manufacturer brochure mass, motor rating, axis travel and envelope are not measured-M conversion factors.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain metered kWh and the exact conversion 1 kWh = 3.6 MJ. Match supply below1kV and grid-average sourcing; electricity is not mass. |
| `liquid_mass` | coolant_concentrate_fabrication; coolant_concentrate_factory_test; tap_water_fabrication; tap_water_factory_test; guideway_oil; spent_emulsion_fabrication; spent_emulsion_factory_test; spent_guideway_oil | Mass | kg | Weigh as-delivered formulation or exported solution. Volume records require evidenced density, temperature and explicit conversion; concentrate, dilution water, retained fill and spent solution remain distinct. |
| `groundwater_volume` | groundwater_fabrication | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter freshwater well abstraction in cp_water_resource; normalized numerator remains m3 and denominator kg machine. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified stock/blanks and separately specified finished assemblies received at the machine factory |
| starting_condition_role | Foreground manufacturing-module inputs, with supplier production and incoming transport separately linked |
| product_classification_scope | Machining-centre subset of CPC44212; excludes unit-construction and transfer machines |
| recursive_input_rule | A purchased complete machining centre is supplier-gated input, not a repeated factory module. Bought finished base, spindle or cabinet replaces its local blank/component manufacture |
| upstream_dataset_requirement | Match grade, blank treatment, component completeness, coolant chemistry/state, voltage/source, geography, transport and waste-treatment gates; disclose unlinked activities |
| disclosure | Foreground manufacture alone is not complete cradle-to-gate. Declare actual operations, make-or-buy alternatives, outsourced gates, overhead attribution, packaging and missing upstream/transport/treatment links |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | Include receipt/configuration control, actual datum machining, sheet cutting/bending, actual joining/deburring/cleaning/coating, configured alignment and wiring, acceptance, attributable rework/rejects and packout. Purchasing stress-relieved castings does not establish an on-site foundry or heat-treatment furnace. If performed or outsourced, expand their specific flows and gates. |  |
| `boundary_bom` | all inventory rows | Crosswalk every actual BOM item and operation to one atomic exchange or justified exclusion. Add separate installed covers, seals, wipers, hoses, fittings, couplings, nuts/washers, cables, sensors, interlocks, filters, chip conveyor or rotary-axis modules where present. Add actual welding filler/gas, cleaners/rinse water, pneumatic air, hydraulic oil, grease, fuel, treatment chemicals and each waste/release as separate rows when used. Initial cards are conditional designs, not a universal complete BOM. |  |
| `boundary_test` | factory_test | Include actual geometry/positioning, spindle rotation, tool-change, controller/interlock and acceptance work with measured factory energy, fill/drain, test stock and waste. Record dry/wet proof-cut scope only if performed. Expand cutting-test chips and measured releases as distinct exchanges if generated. No customer workpiece production, idle-use profile, universal test duration or lifetime. |  |
| `boundary_semantic` | reference_product | At least three CNC axes plus automatic tool changing and magazine distinguish the selected machining-centre boundary. Existing drilling/boring/milling and lathe PCRs exclude this centre boundary. Do not normalize an entire transfer line or robot cell by one machine M. | dmg-machining-centre-whitepaper |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Precision structural fabrication | conditional | Actual site machining of blanks or cover fabrication | Foreground stage; internal WIP stays within module | per 1 kg reference flow; collected per one accepted finished machine |
| `finishing` | Declared surface finishing | conditional | Only actual deburring, preparation or coating | Foreground stage; internal WIP stays within module | per 1 kg reference flow; collected per one accepted finished machine |
| `assembly` | Configured machining-centre integration | required | Each complete declared configuration | Foreground stage; internal WIP stays within module | per 1 kg reference flow; collected per one accepted finished machine |
| `factory_test` | Factory inspection and acceptance | required | Each finished machine; powered or proof-cut tests only as actually specified | Foreground stage; internal WIP stays within module | per 1 kg reference flow; collected per one accepted finished machine |
| `packout` | Dispatch protection | conditional | Actual factory packaging | Foreground stage; internal WIP stays within module | per 1 kg reference flow; collected per one accepted finished machine |

| Operation | Stage | Required actual route record |
| --- | --- | --- |
| Incoming inspection | assembly | BOM/serial; cast-blank grade and supplier treatment; spindle/axis/control completeness; make-or-buy and installed options |
| Structural precision machining | fabrication | Only actual blank route: datum milling/drilling, bearing/guide-seat machining, settings, measured material removal, tool consumption, coolant recipe and wastes; outsourced machining separately gated |
| Cover preparation | fabrication | Actual cutting/bending/joining; one sheet grade and thickness, net issue, offcuts, settings and work hours; actual weld consumables separate |
| Surface preparation and finish | finishing | Actual burr/cleanliness checks, abrasive design, wet-cleaning recipe if used, coating formulation and cure settings, recovery, each waste and measured release; no mandatory powder coating |
| Axis and spindle integration | assembly | Guide-rail mounting, ball-screw alignment/preload, worktable mounting, spindle seating, motor connections, lubrication and torque/geometry records; historical Haas illustrates separated guide/ball-screw/lube hardware |
| Control and automatic tool changing | assembly | CNC/cabinet and drive wiring, grounding, installed changer/magazine, sensors/guards/interlocks, actual actuation medium and internal coolant connections |
| Factory acceptance | factory_test | Actual geometry, backlash/positioning, spindle runout, tool-change and safety/functional plan; laser/ballbar only if used, instrument calibration, stated tolerances/results, measured powered/test-cut quantities, retests and net M after declared fill/drain |
| Dispatch | packout | Separate packaging and transport fixtures from installed machine; protect datum/spindle surfaces with actual individual materials |

### Process: Precision structural fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Stress-relieved grey-cast-iron machine-base blank (`base_blank`)

Only if the actual supplier declares this grey-iron blank and stress-relieved delivery state and the factory machines it. Record grade, treatment, net received mass and machining allowance; finished purchased structure replaces this blank route. Haas does not establish the alloy or treatment.

- Selected flow: Stress-relieved grey-cast-iron machine-base blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Stress-relieved grey-cast-iron machine-column blank (`column_blank`)

Only if the actual supplier declares this grey-iron blank and stress-relieved delivery state and the factory machines it. Record grade, treatment, net received mass and machining allowance; finished purchased structure replaces this blank route. Haas does not establish the alloy or treatment.

- Selected flow: Stress-relieved grey-cast-iron machine-column blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Cold-rolled non-alloy steel enclosure sheet (`cover_sheet`)

Only for actual site cutting and bending of one declared grade and thickness. Weigh net stock issues and returns; do not count stock for a bought finished enclosure. Keep other alloys and thicknesses separate.

- Selected flow: Cold-rolled non-alloy steel enclosure sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Low-voltage grid electricity (`electricity_fabrication`)

Meter the actual stage including attributable rework. This identity is grid-average AC supplied below 1 kV; another voltage or sourcing route needs a distinct matching exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Finished solid cemented-carbide end mill (`carbide_tool_fabrication`)

Only for actual use of one supplier-declared WC-Co end-mill design in this stage. Allocate measured replacement/consumption mass to the orders it served using documented tool-life records and a causal cutting-work driver. It is a factory consumable, excluded from machine M; no universal wear factor or complete-tool charge per machine.

- Selected flow: Finished solid cemented-carbide end mill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tool.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_tool`
- Sources:

###### Water-miscible mineral-oil metalworking-fluid concentrate (`coolant_concentrate_fabrication`)

Only if the actual wet-machining recipe purchases this specified mineral-oil concentrate. Retain SDS, formulation, concentration, net concentrate mass and added water; do not count a ready-mixed purchased emulsion again as concentrate plus water. No universal dilution ratio.

- Selected flow: Water-miscible mineral-oil metalworking-fluid concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Supplied drinking-quality tap water (`tap_water_fabrication`)

Only for actual factory coolant dilution or testing with supplied drinking-quality water. Weigh kg or retain density and temperature for volume conversion; exclude water contained in a purchased ready-mixed fluid and later customer operating water.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

##### Elementary flows

###### Abstracted freshwater groundwater (`groundwater_fabrication`)

Only if this factory actually abstracts freshwater from its own well. Meter m3 and retain country/location; add actual pumping and treatment exchanges. Do not also count supplied tap water for the same withdrawal or internal circulation as new abstraction.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water_resource.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water_resource`
- Sources:

#### Outputs

##### Waste flows

###### Spent mineral-oil aqueous metalworking emulsion (`spent_emulsion_fabrication`)

Only for actual spent emulsion exported to external treatment from this stage. Weigh solution mass and record composition, oil fraction, contamination, recovery and receiver gate; this is not an elementary water discharge. Internal circulation is not a new export.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Untreated clean non-alloy steel enclosure offcut (`clean_steel_offcut`)

Weigh segregated clean sheet offcuts exported without processing from the declared enclosure fabrication. Internal reused stock is not an export; oily machining chips need another specific waste.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Unprocessed grey-cast-iron machining chips (`grey_iron_chip`)

Only for actual machining of the declared blank. Weigh the segregated exported chips and retain grade, moisture/oil contamination and receiver route. Dry and oil-laden streams require distinct rows; no generic chip yield.

- Selected flow: Unprocessed grey-cast-iron machining chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Collected dry grey-cast-iron machining dust (`collected_iron_dust`)

Only for measured collected dust exported to a receiver. Retain grade and abrasive contamination; collected solid is separate from an airborne release and from metal powder sold as a product.

- Selected flow: Collected dry grey-cast-iron machining dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Particulate emitted to air, unspecified size (`air_particulate`)

Only when actual post-control monitoring establishes particulate to air with unspecified size and air subcompartment. Retain outlet concentration, exhaust volume and sampling basis. A specific particle fraction or subcompartment needs a matching identity; do not infer release from machining alone.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

###### Mineral-oil aerosol emitted to air (`air_oil_mist`)

Only if actual monitoring distinguishes mineral-oil aerosol mass from water droplets and collected oil waste. Retain composition, post-control concentration, exhaust volume and actual air subcompartment; no mandatory mist release or total-aerosol-to-oil factor.

- Selected flow: Mineral-oil aerosol emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

### Process: Declared surface finishing (`finishing`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_finishing`)

Meter the actual stage including attributable rework. This identity is grid-average AC supplied below 1 kV; another voltage or sourcing route needs a distinct matching exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Dry powder paint (`powder_paint`)

Only for actual enclosure coating using one declared dry-powder formulation. Weigh net issue after returned/recovered powder and meter actual curing; this does not prescribe powder coating for every design. Wet paint or a different cure heat source needs its own individual exchanges.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Finished aluminium-oxide abrasive disc (`abrasive_disc`)

Only if the actual finishing route consumes this one specified disc design. Record binder, grade and attributable replaced disc mass; raw alumina does not represent a finished abrasive.

- Selected flow: Finished aluminium-oxide abrasive disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Waste flows

###### Spent aluminium-oxide abrasive disc (`spent_abrasive_disc`)

Weigh the actual exported spent disc separately from dust, retaining abrasive, binder and adherent metal composition. Narrow the public polishing-media category to this single disc design.

- Selected flow: Waste polishing media `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Unrecovered solid powder-paint overspray (`powder_overspray`)

Weigh actual exported unrecovered overspray after internal recovery and retain formulation and receiver route. Do not impose a universal coating loss rate.

- Selected flow: Unrecovered solid powder-paint overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Configured machining-centre integration (`assembly`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_assembly`)

Meter the actual stage including attributable rework. This identity is grid-average AC supplied below 1 kV; another voltage or sourcing route needs a distinct matching exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Finished motorised machining-centre spindle cartridge (`spindle_cartridge`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Record taper, bearings, motor inclusion, cooling and supplier completeness; exclude separately counted internals.

- Selected flow: Finished motorised machining-centre spindle cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished ball-screw and nut assembly (`ball_screw`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Record one axis design, stroke, accuracy and included support bearings; Haas is a historical assembly example only.

- Selected flow: Finished ball-screw and nut assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: haas-base-assembly-2013

###### Finished steel linear-guide rail (`linear_rail`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Record one rail design, length, finish and mass; rail is separate from a separately supplied carriage.

- Selected flow: Finished steel linear-guide rail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: haas-base-assembly-2013

###### Finished recirculating-ball linear-guide carriage (`guide_carriage`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Record one compatible carriage design, preload and lubrication state, without duplicating balls inside it.

- Selected flow: Finished recirculating-ball linear-guide carriage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: haas-base-assembly-2013

###### Finished AC axis servomotor (`axis_servo`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Record supply, rated output, encoder, brake and supplied drive exclusions. China supply-mix candidate is not assumed applicable to an unspecified site.

- Selected flow: Finished AC axis servomotor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished machined cast-iron worktable (`worktable`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Only where supplier declares this material and finished state; record mounting, rotary-axis inclusion and measured mass. Raw steel billet is not the table.

- Selected flow: Finished machined cast-iron worktable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished automatic tool-changer and magazine assembly (`tool_changer`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Record one supplied integrated changer/magazine assembly, tool capacity, actuation and motor inclusion. Its installation supports the category boundary; no universal capacity or pneumatic route.

- Selected flow: Finished automatic tool-changer and magazine assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: dmg-machining-centre-whitepaper

###### Finished wired CNC control cabinet (`cnc_cabinet`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Record cabinet, CNC controller, drives, power electronics and wiring inclusion in one supplied assembly; avoid duplicate pooled controls or included drives.

- Selected flow: Finished wired CNC control cabinet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel machining-centre coolant tank (`coolant_tank`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Record steel grade, finish, volume as a configuration qualifier, fittings and supplied pump exclusions; volume is not a mass conversion factor.

- Selected flow: Finished steel machining-centre coolant tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished polycarbonate machine-guard window (`guard_window`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Only for an actual supplier-declared polycarbonate design; retain thickness, coating, mounting and mass. Another glazing material needs another row.

- Selected flow: Finished polycarbonate machine-guard window
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel hexagon-head bolt (`hex_bolt`)

Only for a separately purchased component installed in the single declared configuration. Weigh actual delivered mass or use verified lot count-to-mass records. Weigh one specified bolt grade, size and coating; separately supplied nuts and washers require separate rows. Haas illustrates separate fasteners, not category-wide counts.

- Selected flow: Finished steel hexagon-head bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: haas-base-assembly-2013

###### Finished centrifugal coolant pump (`coolant_pump`)

Only for one separately purchased centrifugal liquid pump fitted to the declared internal coolant circuit. Record motor inclusion, wetted material, operating specification and measured complete mass; do not also count a supplied motor separately.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished ball bearing (`ball_bearing`)

Only for one separately supplied specified ball-bearing design. Weigh net installed mass and exclude bearings already inside the bought spindle, motor, ball-screw support or pump.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished mineral-oil guideway lubricant (`guideway_oil`)

Only if the actual machine uses this declared formulated oil. Record grade, additives and installed factory fill mass; grease and hydraulic oil need distinct exchanges. Declare remaining fill in M and exclude later customer replacements.

- Selected flow: Finished mineral-oil guideway lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

### Process: Factory inspection and acceptance (`factory_test`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_factory_test`)

Meter the actual stage including attributable rework. This identity is grid-average AC supplied below 1 kV; another voltage or sourcing route needs a distinct matching exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Finished solid cemented-carbide end mill (`carbide_tool_factory_test`)

Only for actual use of one supplier-declared WC-Co end-mill design in this stage. Allocate measured replacement/consumption mass to the orders it served using documented tool-life records and a causal cutting-work driver. It is a factory consumable, excluded from machine M; no universal wear factor or complete-tool charge per machine.

- Selected flow: Finished solid cemented-carbide end mill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tool.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_tool`
- Sources:

###### Water-miscible mineral-oil metalworking-fluid concentrate (`coolant_concentrate_factory_test`)

Only if the actual wet-machining recipe purchases this specified mineral-oil concentrate. Retain SDS, formulation, concentration, net concentrate mass and added water; do not count a ready-mixed purchased emulsion again as concentrate plus water. No universal dilution ratio.

- Selected flow: Water-miscible mineral-oil metalworking-fluid concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Supplied drinking-quality tap water (`tap_water_factory_test`)

Only for actual factory coolant dilution or testing with supplied drinking-quality water. Weigh kg or retain density and temperature for volume conversion; exclude water contained in a purchased ready-mixed fluid and later customer operating water.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Finished low-carbon steel proof-cut test block (`proof_cut_block`)

Only if the actual acceptance plan performs a cutting test on this specified grade and prepared block. Record issued mass, reused fixtures/stock, machining geometry and returns; do not presume every machine cuts a test block. It is not installed machine mass.

- Selected flow: Finished low-carbon steel proof-cut test block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete configured CNC metal machining centre (`finished_machine`)

Reference output after configuration-specific dimensional, geometric, safety and functional acceptance. Net installed mass includes only the declared delivered machine and retained fill; packaging, workpieces, loose cutting tools, fixtures and separate spares are excluded.

- Selected flow: Accepted complete configured CNC metal machining centre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Spent mineral-oil aqueous metalworking emulsion (`spent_emulsion_factory_test`)

Only for actual spent emulsion exported to external treatment from this stage. Weigh solution mass and record composition, oil fraction, contamination, recovery and receiver gate; this is not an elementary water discharge. Internal circulation is not a new export.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Untreated clean low-carbon steel test-block remainder (`test_steel_residue`)

Only for actual exported clean steel remainder after the proof-cut test, excluding retained or reused blocks. Weigh one declared grade without oil contamination and retain unprocessed receiver route.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral-oil guideway lubricant (`spent_guideway_oil`)

Only for actual drained factory-test oil sent to external treatment. Record composition, mass, drain/retained-fill balance and receiver gate; do not presume mandatory drain or include later in-use oil changes.

- Selected flow: Waste oil `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Dispatch protection (`packout`)

#### Inputs

##### Product flows

###### C-flute corrugated cardboard (`cardboard`)

Only for actual C-flute dispatch protection containing recycled fibre and at least80% fibre. Weigh net issue and exclude packaging from M; other specifications need another row.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### LDPE protective foil (`ldpe_film`)

Only for actual non-cellular, non-adhesive, unreinforced LDPE foil. Retain net mass and grade; do not infer fossil origin or recycled fraction. Packaging is excluded from M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared_operations | Subdivide by actual work order, stage and configuration first. Assign traceable component/stock issues, machining, rework and acceptance directly. Three-axis and five-axis configurations cannot share an assumed per-machine quantity. |  |
| `allocation_physical` | shared_energy_tools_support | Collect a causal physical driver from measured records: actual power profile with machining/assembly/test hours, tool cutting-work served, curing-batch load or coolant change/use. Reconcile assignments to measured shared totals and accepted configuration counts. Unsupported drivers remain unresolved with sensitivity; no generic mass split, equal-count split or economic percentage. |  |
| `allocation_rejects` | waste_and_rework | Include attributable rejected parts, failed tests and rework in quantities per accepted same-configuration output and period. Net internal stock returns/recovery. Classify exported scrap and receiver treatment explicitly without automatic avoided-primary-metal credits. Genuine co-products require documented market and boundary decisions, not scrap presence alone. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | factory_test | finished_machine | calibrated weighing and acceptance | model; configuration; serial number; accepted net mass M; installed options; fluid/drain state; excluded spares/packaging | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each unit or justified configuration-specific sample | same declared production period; gaps disclosed | declared manufacturing site | accepted net mass per machine | calibration; installed BOM; fluid state; acceptance; sampling |
| cp_configuration | all processes | actual route | BOM and route review | model; axes; spindle; changer/magazine; BOM revision; supplier completeness; make-or-buy; work orders; rework; accepted count; gates | Crosswalk every actual item and operation to one row or justified exclusion. Reconcile installed options, blank or finished-base alternatives, included motors/drives and factory fluid condition. Record model-specific geometric and functional acceptance tolerances/results without assuming universal accuracy. | record | each configuration change and batch | same declared production period; gaps disclosed | declared manufacturing site | one coherent configured route record | BOM; suppliers; routing; acceptance; outsourced gates |
| cp_material | fabrication; finishing; assembly; factory_test; packout | individual stock/formulation | stock issue and weighing | single product; grade/state; formulation; issue/return; stock/WIP; volume/density/temperature; accepted count | Weigh net attributable issues and reconcile returns, WIP and recovery. Retain supplier blank treatment and coolant/oil formulation. Concentrate and dilution water are separate; ready-mixed fluid is not counted twice. Volume conversion needs actual evidenced density/temperature. | kg | each issue and batch balance | same declared production period; gaps disclosed | declared manufacturing site | attributable net material mass / accepted machines of the same configuration | scale; ledger; SDS; recipe; supplier declaration; density |
| cp_parts | assembly | single finished component | receipt/weighing/build list | part number; one design; supplier; count; mass; included subparts; installed status; accepted count | Use actual delivered mass or verified lot-specific count-to-mass records. Identify complete spindle, changer, cabinet, pump, guide and axis interfaces, included motors/bearings and installed options; prevent duplicate stock or included internals. No power/travel/capacity-to-mass factor. | kg | each supply lot and build batch | same declared production period; gaps disclosed | declared manufacturing site | attributable installed component mass / accepted machines of the same configuration | scale; supplier inclusion; installed BOM; verified lot mass |
| cp_tool | fabrication; factory_test | single carbide end mill | tool replacement and serviced-order ledger | one WC-Co design; measured replacement/consumption mass; reuse; orders served; causal cutting-work driver; accepted count | Track actual tool consumption across served work orders and allocate measured mass using an evidenced causal cutting-work driver. Reconcile reused tool stock, replaced exported tools and wear; no assumed wear factor or full new tool per machine. | kg | each replacement and serviced batch | same declared production period; gaps disclosed | declared manufacturing site | attributable tool consumption mass / accepted machines of the same configuration | tool scale; replacements; served orders; driver reconciliation |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | meter and causal driver ledger | stage; voltage/source; meter kWh; interval; shared total; driver; idle/rework; accepted count | Meter each actual stage; convert kWh to MJ using 1 kWh = 3.6 MJ. Retain measured allocation-driver totals and reconcile shared meters, idle, rejected work and retests. Factory test duty is not customer use duty. | MJ | each meter interval and batch | same declared production period; gaps disclosed | declared manufacturing site | attributable electrical energy / accepted machines of the same configuration | calibration; bills; stage/driver records |
| cp_waste | fabrication; finishing; factory_test | single exported waste | container/weighbridge balance | individual waste; composition; wet/dry; contamination; mass; recovery; receiver; accepted count | Weigh segregated exports and reconcile internal recovery and stock. Keep grey-iron chips, collected dust, clean steel offcuts, spent emulsion, spent oil and abrasive disc separate. Retain receiver/treatment evidence; volume-only waste records need evidenced mass conversion. | kg | each export and batch balance | same declared production period; gaps disclosed | declared manufacturing site | attributable exported waste mass / accepted machines of the same configuration | scale; composition; receiver receipts; treatment boundary |
| cp_emission | fabrication | single air substance | post-control outlet monitoring | substance; composition; concentration/unit; exhaust volume; interval; moisture/temperature/pressure; control; size; medium/submedium; accepted count | Calculate one substance mass from post-control concentration and exhaust volume measured on the same interval, retaining conversion and sampling basis. Distinguish mineral oil from water aerosol, size fraction, collected solids and actual air subcompartment; no mandatory release or zero from missing monitoring. | kg | representative actual emitting intervals | same declared production period; gaps disclosed | declared manufacturing site | attributable measured substance mass / accepted machines of the same configuration | monitoring; calibration; sampling; speciation and conversion |
| cp_water_resource | fabrication | groundwater abstraction | well meter and site record | well; freshwater origin; country/location; m3; interval; stage use; reuse; accepted count | Read calibrated well volume meter for actual factory freshwater groundwater abstraction. Reconcile stage withdrawals without treating recirculation as new abstraction; retain location and separately account for pumping/treatment. | m3 | each interval and batch | same declared production period; gaps disclosed | declared manufacturing site | attributable abstracted water volume / accepted machines of the same configuration | meter; well/source; location; stage water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | M, stock/component quantities, energy and accepted count share one configuration and period. Reconcile supplier inclusion, installed options, blanks versus bought structures, internal WIP, test stock, fill/drain, waste, rejects and returns. Retain instrument uncertainty and justified mass-sampling representativeness. | cp_mass; cp_configuration; cp_material; cp_parts; cp_waste |
| `quality_coverage` | inventory_and_links | Disclose missing UUIDs, BOM items, foreground measurements, causal allocation and upstream/transport/treatment links. Report non-applicable operations with a route reason; missing data are not zero. No universal manufacturing amount, machine mass, lifetime, coolant ratio, chip yield or emission factor is adopted. | cp_configuration; cp_energy; cp_tool; cp_emission; cp_water_resource |
| `quality_sources` | design_evidence | DMG MORI defines the category, not factory manufacturing quantities. The URL filename mentions2024 while verified PDF metadata indicates2023 creation; printed edition is not established. Haas November2013 sheet1 is a historical base-assembly example only, not proof of current BOM, alloy/treatment, universal hardware counts or production amounts. Verify actual suppliers and factory records. | dmg-machining-centre-whitepaper; haas-base-assembly-2013 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require positive measured M, one declared accepted configuration, retained-fill and installed-option boundary, and 1kg finished_machine. Every other row explicitly uses normalize_mass with its own kg, MJ or m3 numerator. |  |
| `validation_bom` | inventory | Reconcile the full actual base/column, spindle, axes, guide/table, changer/magazine, CNC/drives, guard/interlock and fluid systems. Verify make-or-buy, included subparts, actual acceptance, tool attribution, rejects/rework and receiver gates. Incomplete initial cards or missing links require disclosed expansion, never a completeness claim. |  |
| `validation_identity` | all inventory rows | Check public flow type, grade/state/concentration, geography/route, environmental medium/submedium, actual reference property/unit group and official localization. Keep collected oil waste separate from elementary oil mist, tap water from freshwater abstraction, and Aluminium content from total waste mass. |  |
| `validation_claims` | dataset_claims | No complete cradle-to-gate claim until supplier/transport/treatment and actual route coverage are established. Manufacturing mass cannot establish machining-service equivalence, customer part yield, lifetime, statutory compliance or scientific methodology approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground metal machining-centre manufacturing module; this profile heading does not assert PCR publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete declared configuration manufacturing, scaled by measured M with separately disclosed supplier, transport and treatment links |
| excluded_use | Customer machining service/part yield, use energy/coolant, maintenance, lifetime, transfer-line manufacture, separately delivered spare bundles or methodology approval |
| required_metadata | All reference qualifiers; configuration/BOM; axes/spindle/changer/control; installed options; purchased assembly completeness; fluid/packaging/spare boundary; measured M; site/period/gates; acceptance; measurement/allocation; supplier/receiver links |
| required_quality_disclosure | Sampling/measurement uncertainty; actual BOM/route coverage; unresolved identities, allocation and upstream; monitoring gaps; historical source limits; rejects/rework inclusion |
| update_trigger | Axis/spindle/changer/control, supplier completeness, make-or-buy, alloy/treatment, option, fluid state, acceptance plan, site/period/route, energy source or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| dmg-machining-centre-whitepaper | handbook | DMG MORI, WHITEPAPER: 5-AXIS MACHINING CENTERS: FASTER, HIGHER QUALITY AND LOWER COST MACHINING, physical PDF p.5, printed pp.8–9; edition not verified. https://us.dmgmori.com/resource/blob/817950/facbcc1fbf9e40b2e2a47fc21b0583f0/dmg-mori-whitepaper-5-axis-machining-centers-2024-en-data.pdf | Category distinction: at least three CNC axes, automatic tool changing and tool magazine; vertical/horizontal examples. No operating savings, generic factory quantities, machine mass or lifetime adopted. |
| haas-base-assembly-2013 | handbook | Haas Automation, VF-1YT/VF-2YT/VF-2SSYT/VM-2 BASE ASSEMBLY, EFFECTIVE NOV-2013, physical PDF p.1, SHEET1OF2 (historical). https://www.haascnc.com/content/dam/haascnc/en/service/diagrams/exploded-view-diagrams/vf-1yt---vf-2yt---vf-2ssyt---vm-2-base-assembly.pdf | Historical separated base, ball-screw, guide and lubrication/fastener assembly illustration. Not current production, material-grade/treatment proof, universal BOM/counts or manufacturing amounts. |
