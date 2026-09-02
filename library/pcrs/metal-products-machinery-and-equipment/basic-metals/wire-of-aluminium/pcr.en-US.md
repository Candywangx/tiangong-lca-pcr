---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-aluminium
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wire of aluminium

## 1. Scope and Applicability

This PCR governs foreground data packages for the manufacture of uninsulated aluminium or aluminium-alloy wire delivered at the producing factory gate. It covers drawn or otherwise formed single wire for general engineering, electrical, welding, fastening, and comparable applications when the delivered product remains wire. The rules are alloy-, temper-, diameter-, cross-section-, coating-, and route-neutral; those characteristics are mandatory product qualifiers rather than reasons to select a narrower reference flow.

The PCR excludes drawing stock or wire rod sold without conversion to finished wire, bars, rods, profiles, strip, foil, powder, tubes, insulated winding wire, finished insulated cable, stranded wire, cable, plaited bands, fabricated wire articles, and construction-site delivery or installation. Upstream primary or secondary aluminium production, remelting, casting, and wire-rod production are represented by linked upstream datasets unless they are physically integrated into and reported within the foreground facility. Downstream stranding, insulation, cable assembly, use, installation, and end-of-life remain outside the factory-gate foreground boundary.

ASTM B211/B211M-19 provides product-property context for rolled or cold-finished aluminium and aluminium-alloy wire, while ASTM B230/B230M-22 confirms that electrical-purpose aluminium wire is a legitimate but qualified subcategory. The EPD International PCR for basic aluminium products and special alloys covers the parent UN CPC 4153 category. The EU ferrous-metals BREF is used only as a generic technical analogue for the sequence of wire drawing operations; its ferrous scope must not be treated as aluminium-specific operating evidence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-aluminium |
| classification_refs | CPC 3.0: 41533, Wire of aluminium, exact scope reference |
| covered_products | Uninsulated single wire of aluminium or aluminium alloy, including general-engineering, electrical-purpose, welding-grade, rivet/cold-heading, and comparable wire when delivered as wire |
| excluded_products | Drawing stock or wire rod not yet converted to finished wire; bars, rods, profiles, strip, foil, powder, tubes; insulated wire; stranded conductors, cables, plaited bands; fabricated wire articles; installed or construction-site-delivered systems |
| representative_product | Saleable uninsulated aluminium or aluminium-alloy wire, with declared alloy, temper, cross-section and dimensions |
| production_route | Receipt or integrated production of aluminium drawing stock; optional pretreatment; one or more drawing/forming passes; optional heat treatment; finishing, inspection and release |
| market_state | Net finished wire mass at the producing factory gate, before downstream insulation, stranding, cable assembly, installation or use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of conformity-declared, uninsulated aluminium or aluminium-alloy wire at the producing factory gate |
| How much | 1,000 kg net saleable finished wire |
| How well | Meets the declared alloy, temper, cross-sectional shape, dimensions and tolerances, surface condition or coating, and application-specific mechanical or electrical requirements |
| How long or cycle | One declared production lot or reporting-period production mix, consistently applied to all foreground records |
| reference_flow_link | `aluminium_wire_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Aluminum wire `89db8507-09bd-45f8-ba96-4e459058412c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | aluminium or alloy designation; temper; round or other cross-sectional shape; nominal diameter or cross-sectional dimensions and tolerance; bare or declared coating/surface treatment; intended grade/application class; drawing/forming route; heat-treatment route; production geography; reporting period; primary and recycled aluminium shares; factory-gate market state |

When constructing a foreground data package, every required qualifier must appear in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. The selected Tiangong row is state_code 100 and carries the full CPC 41533 classification path; no diameter, cable, installation, or narrow-use qualifier may be added to the canonical reference identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1,000 kg net saleable finished wire. Exclude pallets, reels, returnable carriers and separately modelled packaging from reference-product mass. |
| `intermediate_mass` | drawing stock and in-plant wire intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure transfers on a consistent dry/net mass basis and prevent the same in-plant intermediate from being counted as an external input or output. |
| `length_mass_conversion` | records supplied by length | declared mass and length support | kg and m | Convert length to mass only from measured lot mass or from declared cross-sectional dimensions and alloy density; retain the dimensions, density basis, formula and uncertainty. |
| `energy_units` | electricity and fuels | energy or fuel-specific property | kWh or MJ | Preserve metered source units. Convert between kWh and MJ only with 1 kWh = 3.6 MJ and do not use calorific-value conversion to replace fuel mass without a documented fuel property. |
| `solution_mass` | lubricants, cleaners, pickling agents and coatings | supplied-product mass and, when relevant, active content | kg | Record supplied-product mass and concentration separately when active substance or dry solids determine the inventory. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground aluminium-wire production | Include directly controlled stock preparation, drawing/forming, in-line or batch heat treatment, finishing, inspection, on-site material handling, waste handling to the first off-site transfer, and release at the producing factory gate. | `eu-fmp-bref-2022`; `astm-b211-b211m-19`; `astm-b230-b230m-22` |
| `boundary_upstream_link` | purchased or separately produced aluminium inputs | Link primary aluminium, secondary aluminium, alloying, remelting, casting and wire-rod/drawing-stock production to traceable upstream datasets; include them in the foreground only when physically integrated and supported by facility records. | `environdec-basic-aluminium-pcr-1-0-2` |
| `boundary_direct_flows` | all foreground processes | Record electricity, fuels, water, lubricants, treatment chemicals, coating materials, packaging, process scrap, spent consumables, wastewater, solid wastes and direct elementary flows when they cross the foreground boundary; disclose every omitted or unavailable material flow. | `iai-aluminium-scrap-carbon-footprint-2025` |
| `boundary_downstream_exclusion` | product use after factory release | Exclude insulation, stranding, cable or conductor assembly, installation, use, maintenance and end-of-life from this factory-gate package unless a separately declared downstream model adds them. |  |
| `boundary_analogue_limit` | process-map interpretation | Use the EU FMP BREF only for the generic drawing sequence of pretreatment, drawing, optional heat treatment and finishing; confirm the actual aluminium route, chemicals and emission points from foreground records. | `eu-fmp-bref-2022` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Aluminium or aluminium-alloy drawing stock or wire rod is received at the foreground gate with declared alloy, temper/state, mass, supplier, recycled-content claim and upstream dataset; an integrated facility instead declares the first included melting, casting or rolling step. |
| starting_condition_role | Prevents upstream aluminium production and drawing-stock preparation from being silently omitted or double counted. |
| product_classification_scope | CPC 3.0 subclass 41533, limited to finished uninsulated single aluminium wire and explicitly separated from drawing stock, insulated wire, stranded conductors and cable. |
| recursive_input_rule | If an input is itself finished aluminium wire within this PCR scope, record it as a visible product input with a distinct upstream dataset and do not recursively expand the same PCR inside the foreground package. |
| upstream_dataset_requirement | Each external aluminium-bearing input, alloying material, electricity/fuel supply, treatment chemical, packaging input and off-site treatment service requires a geographically and temporally appropriate upstream dataset or a documented unresolved data gap. |
| disclosure | Declare starting material form, alloy and temper; primary/recycled shares and chain-of-custody basis; drawing and heat-treatment route; surface treatment/coating; geography and period; scrap destination and allocation method; integration with melting/casting/rolling; and excluded downstream operations. |

## 6. Process Inventory Structure

The process sequence follows the generic wire-drawing topology documented by the EU FMP BREF, but every aluminium-specific operation and flow remains foreground-confirmed. Internal intermediate transfers are retained for mass-balance checks and are not external technosphere exchanges.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_pretreatment` | Drawing-stock receipt and pretreatment | conditional | Include when received or integrated stock is mechanically cleaned, degreased, pickled, rinsed, coated with carrier or otherwise prepared before drawing; otherwise document the bypass. | foreground preparation | kg prepared stock transferred to drawing |
| `wire_drawing` | Wire drawing and forming | required | Always include the drawing/forming passes that establish the delivered wire cross-section. | foreground production | kg drawn wire transferred onward |
| `heat_treatment` | Intermediate or final heat treatment | conditional | Include when annealing or another thermal treatment is used to reach the declared temper or properties. | foreground conditioning | kg heat-treated wire transferred onward |
| `finishing_and_release` | Finishing, inspection, packaging and factory-gate release | required | Always include final cleaning/straightening/cutting or spooling as performed, inspection, reject handling, non-returnable packaging and release. | foreground finishing and release | 1,000 kg net saleable finished wire |

### Process: Drawing-stock receipt and pretreatment (`stock_pretreatment`)

#### Inputs

##### Product flows

###### Aluminium or aluminium-alloy drawing stock received (`drawing_stock_input`)

Record each received or integrated lot of aluminium wire rod/drawing stock by alloy, state, supplier or internal source and upstream dataset. Do not use an unspecified-metal or construction-profile candidate as a default aluminium input.

- Selected flow: Site-specific aluminium or aluminium-alloy wire rod/drawing stock; Tiangong UUID required during foreground package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net stock mass entering the foreground route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `astm-b211-b211m-19`; `astm-b230-b230m-22`
- Range: Provisional drawing-stock mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1150
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pretreatment water and process solutions supplied (`pretreatment_consumables`)

Record water, cleaners, pickling agents, rinses, carrier coatings and other preparations as separate facility flows in the foreground package; this card defines their shared collection rule without authorizing aggregation in the final inventory.

- Selected flow: Individual site-specific water and treatment-product flows; Tiangong UUIDs required during foreground package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered water plus invoice, batch-sheet or tank-makeup records for each supplied product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eu-fmp-bref-2022`
- Range: Provisional combined pretreatment-consumables screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20100
  - Unit: kg
  - Basis: combined water and supplied treatment products per 1,000 kg net saleable finished wire; disaggregate before publication
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared drawing stock transferred internally (`prepared_stock_output`)

Record the measured intermediate mass after pretreatment. This internal transfer closes the pretreatment balance and is not an external coproduct.

- Selected flow: Prepared aluminium drawing stock, internal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass or calculated input mass less measured pretreatment removals
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Sources: `mass-balance-identity`
- Range: Provisional prepared-stock mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1150
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pretreatment wastewater and removed residues (`pretreatment_waste_output`)

Represent wastewater, spent bath, scale, sludge and captured residues as separate waste or elementary flows according to their actual destination and composition.

- Selected flow: Site-specific pretreatment wastewater, spent bath and residue flows; Tiangong UUIDs required during foreground package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharge/treatment records plus collected residue mass, disaggregated by waste route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-fmp-bref-2022`
- Range: Provisional pretreatment-waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20200
  - Unit: kg
  - Basis: combined aqueous and solid pretreatment outputs per 1,000 kg net saleable finished wire; disaggregate before publication
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Wire drawing and forming (`wire_drawing`)

#### Inputs

##### Product flows

###### Prepared or bypassed drawing stock supplied to drawing (`drawing_feedstock_input`)

Use the prepared-stock transfer when pretreatment is included; otherwise use the measured received drawing stock. The two paths are mutually exclusive for the same mass.

- Selected flow: Prepared aluminium drawing stock, internal intermediate, or received stock on documented bypass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass entering the first drawing pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-fmp-bref-2022`; `mass-balance-identity`
- Range: Provisional drawing-feed mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1150
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to drawing equipment (`drawing_electricity_input`)

Record electricity from meters or an allocation of facility meters to drawing lines. Select the geographically and voltage-appropriate Tiangong supply flow during package construction.

- Selected flow: Site-specific electricity supply; Tiangong UUID required during foreground package construction
- Flow property / unit: Energy / kWh
- Amount rule: metered drawing-line electricity or documented allocation from facility electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional drawing-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2500
  - Unit: kWh
  - Basis: broad authoring screen per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drawing lubricants and die-treatment products supplied (`drawing_lubricant_input`)

Record each lubricant, soap, emulsion and die-treatment product separately, including make-up and documented recirculation.

- Selected flow: Site-specific drawing lubricant or die-treatment product; Tiangong UUID required during foreground package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased plus opening inventory minus closing inventory, adjusted for recovered product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `eu-fmp-bref-2022`
- Range: Provisional lubricant-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Drawn wire transferred to the next included step (`drawn_wire_intermediate`)

Record the mass after the final drawing pass and before any separately metered heat treatment or finishing step.

- Selected flow: Drawn aluminium wire, internal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass or calculation from feed mass less measured drawing scrap and retained samples
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Sources: `mass-balance-identity`
- Range: Provisional drawn-intermediate mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1100
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Drawing scrap, wire ends and rejected wire (`drawing_scrap_output`)

Record clean and contaminated aluminium scrap separately by destination, internal return, external recycler, sale, disposal and measured mass.

- Selected flow: Site-specific aluminium drawing scrap; Tiangong waste-flow UUID required during foreground package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured scrap mass leaving the process or returned to an integrated remelting step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `iai-aluminium-scrap-carbon-footprint-2025`
- Range: Provisional drawing-scrap screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent drawing lubricant and contaminated residues (`spent_lubricant_output`)

Record spent lubricant, filter cake and contaminated residues separately by treatment route and prevent recovered lubricant from being counted as both avoided input and waste output.

- Selected flow: Site-specific spent lubricant and contaminated-residue waste flows; Tiangong UUIDs required during foreground package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collection and treatment-transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Range: Provisional spent-lubricant screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Intermediate or final heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Drawn wire supplied to heat treatment (`heat_treatment_wire_input`)

Record only the mass routed through annealing or another heat treatment; bypassed product is transferred directly to finishing.

- Selected flow: Drawn aluminium wire, internal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured routed mass by alloy, temper target, furnace and campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-fmp-bref-2022`
- Range: Provisional heat-treatment routing screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1100
  - Unit: kg
  - Basis: routed heat-treated mass per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Heat-treatment electricity and fuels supplied (`heat_treatment_energy_input`)

Create separate inventory flows for each metered electricity or fuel supply. This collection card must not be published as an aggregated mixed-energy flow.

- Selected flow: Individual site-specific electricity and fuel supplies; Tiangong UUIDs required during foreground package construction
- Flow property / unit: Energy / MJ, preserving kWh meter records where applicable
- Amount rule: furnace- or campaign-metered energy, or a documented allocation of facility energy to treated mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-fmp-bref-2022`
- Range: Provisional heat-treatment energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: total supplied heat-treatment energy per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated wire transferred internally (`heat_treated_wire_output`)

Record measured accepted wire after heat treatment plus separately measured heat-treatment rejects.

- Selected flow: Heat-treated aluminium wire, internal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `mass-balance-identity`
- Range: Provisional heat-treated-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1050
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Finishing, inspection, packaging and factory-gate release (`finishing_and_release`)

#### Inputs

##### Product flows

###### Drawn or heat-treated wire supplied to finishing (`finishing_wire_input`)

Record exactly one routed intermediate for each lot: heat-treated wire when heat treatment applies, otherwise drawn wire on the documented bypass.

- Selected flow: Drawn or heat-treated aluminium wire, internal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured finishing-line input mass with mutually exclusive route flag
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `mass-balance-identity`
- Range: Provisional finishing-input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1050
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing consumables and non-returnable packaging supplied (`finishing_consumables_input`)

Record each coating, cleaner, marking material, reel, spool, wrapping and other non-returnable packaging flow separately. Returnable carriers remain outside product mass and are modelled according to the study convention.

- Selected flow: Individual site-specific finishing and packaging product flows; Tiangong UUIDs required during foreground package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: batch records and packaging issue records, net of documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Range: Provisional finishing-and-packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: combined finishing consumables and non-returnable packaging per 1,000 kg net saleable finished wire; disaggregate before publication
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable aluminium or aluminium-alloy wire (`aluminium_wire_output`)

This is the only reference product output. It represents the full category without fixing a diameter, alloy, temper or end use; all such characteristics are required qualifiers.

- Selected flow: Aluminum wire `89db8507-09bd-45f8-ba96-4e459058412c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1,000 kg net saleable finished wire
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`; `astm-b211-b211m-19`; `astm-b230-b230m-22`
- Range: Required reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: PCR reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Finishing rejects, samples and packaging wastes (`finishing_waste_output`)

Record aluminium rejects separately from packaging and treatment wastes, with mass, destination and any internal return to remelting.

- Selected flow: Individual site-specific aluminium scrap and non-metal waste flows; Tiangong UUIDs required during foreground package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reject, retained-sample and waste-transfer mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `iai-aluminium-scrap-carbon-footprint-2025`
- Range: Provisional finishing-waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg net saleable finished wire
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | separately metered lines, lots and optional steps | Subdivide or use direct meter/lot records before allocating shared facility burdens; bypassed pretreatment and heat treatment receive no burden from those steps. |  |
| `allocation_shared_operations` | shared operations producing multiple saleable wire grades or dimensions | When subdivision is not possible and the causal relationship is comparable, allocate shared transformation burdens by measured net saleable wire mass; disclose and justify any different causal basis. | `environdec-basic-aluminium-pcr-1-0-2` |
| `allocation_process_scrap` | drawing and finishing aluminium scrap | Record scrap mass, alloy/contamination state, destination and chosen cut-off, substitution or coproduct approach. The library default includes transformation burdens in the wire dataset and applies no avoided-burden credit; a different programme-required approach must be reported separately and must not count the same recycling benefit twice. | `iai-aluminium-scrap-carbon-footprint-2025`; `environdec-basic-aluminium-pcr-1-0-2` |
| `allocation_internal_recycling` | scrap returned to an integrated remelting step | Keep the internal scrap loop visible in the facility mass balance, include remelting inputs and emissions when integrated, and do not represent the same scrap as an external waste output. | `iai-aluminium-scrap-carbon-footprint-2025`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `stock_pretreatment`; `wire_drawing`; `heat_treatment`; `finishing_and_release` | external stock, internal transfers, saleable product | scale tickets, production-order records, coil/lot weights, inventory movements | timestamp; lot_id; alloy; temper/state; source/destination process; gross_mass; tare_mass; net_mass; route_flag; meter/scale_id | calibrated scales reconciled to production and inventory records | kg | per lot or transfer | complete declared reporting period | every included line and outsourced step under operational control | sum net mass by lot and process; reconcile opening/closing work in progress | calibration records; lot traceability; inventory reconciliation; rejected-lot log |
| `cp_consumables` | `stock_pretreatment`; `wire_drawing`; `finishing_and_release` | water, chemicals, lubricants, coatings, packaging | meters, invoices, tank levels, batch sheets, issue/return records | product_id; supplier; quantity; unit; concentration; opening_stock; purchases; closing_stock; recovered_quantity; process_id | direct meter or mass-balance calculation from auditable stock records | kg, with original m3 retained where metered | per batch or monthly | complete declared reporting period | every included line and shared utility allocation | product-specific quantity = opening + purchases - closing - documented recovery; allocate shared use by measured causal driver | meter calibration; invoices; batch sheets; stock reconciliation; concentration certificate |
| `cp_energy` | `wire_drawing`; `heat_treatment`; `finishing_and_release` | electricity and fuel | submeter, utility invoice, fuel issue, furnace campaign log | meter_id; timestamp; energy_carrier; reading_start; reading_end; unit; line/furnace; treated_mass; allocation_driver | direct submeter preferred; otherwise documented facility-to-line allocation | kWh or MJ, preserving source unit | continuous, batch or monthly | complete declared reporting period | every included line, furnace and shared service | subtract verified non-production use and allocate shared energy by causal meter, operating time or treated mass | meter calibration; invoices; operating-hour log; allocation worksheet |
| `cp_waste_outputs` | `stock_pretreatment`; `wire_drawing`; `finishing_and_release` | scrap, spent bath, lubricant, wastewater, sludge, packaging waste | scales, manifests, recycler receipts, discharge meters, laboratory records | waste_id; composition; alloy; contamination; mass/volume; destination; internal_return; recycler/treatment; date | measured at generation or transfer and reconciled to manifests | kg, with original m3 retained for wastewater | per transfer or batch | complete declared reporting period | all included lines and on-site treatment | sum by waste identity and destination; separately reconcile internal aluminium return | calibrated scales/meters; signed manifests; recycler receipts; analytical results |
| `cp_product_qualification` | `finishing_and_release` | reference-product identity and conformance | certificate of analysis, dimensional inspection, tensile/electrical test, release record | lot_id; alloy; temper; shape; dimensions; tolerance; coating; application_grade; test_method; result; disposition | documented inspection and release against declared product specification | declared test units | per released lot | complete declared reporting period | every reference-product lot | accept only released mass; retain rejected and sampled mass in waste or work-in-progress records | signed certificate; instrument calibration; release authorization; nonconformance log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every foreground inventory amount | normalized amount = reporting-period amount / reporting-period net saleable finished-wire mass × 1,000 kg | collected flow amount; net saleable wire mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_route_weighting` | production-mix datasets | production-mix amount = sum(route amount × route saleable mass) / total saleable mass; retain separate routes when alloy, temper, heat treatment, coating or technology materially changes the inventory | route-specific normalized amounts; route saleable masses | declared production-mix inventory | `mass-balance-identity` |
| `calc_metal_yield` | aluminium mass balance | yield = net saleable wire mass / total external aluminium-bearing drawing-stock mass; report internal returns separately rather than adding them again to external input | external aluminium input; saleable wire; internal return; scrap and rejects | yield and reconciliation table | `mass-balance-identity` |
| `calc_mass_balance` | each process and the complete foreground | residual = inputs + opening work in progress - outputs - closing work in progress; investigate and disclose residual sign, magnitude and cause without forcing it to zero | measured mass flows; work-in-progress inventory | process and facility mass-balance residual | `mass-balance-identity`; `iai-aluminium-scrap-carbon-footprint-2025` |
| `calc_recycled_share` | aluminium input disclosure | recycled share = verified secondary aluminium mass embodied in external aluminium inputs / total aluminium mass in those inputs; do not infer secondary content from scrap output | supplier declarations; aluminium input masses; chain-of-custody evidence | primary and recycled aluminium shares | `iai-aluminium-scrap-carbon-footprint-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | every released product lot | Preserve alloy, temper, cross-section, dimensions/tolerances, finish/coating, application grade and conformance basis; do not collapse materially different products into an undocumented generic average. | certificate of analysis; inspection/test records; product specification; `astm-b211-b211m-19`; `astm-b230-b230m-22` |
| `dq_temporal` | all foreground records | Use one consistent declared reporting period covering normal operations; identify shutdowns, trials, abnormal campaigns and any shorter or non-representative coverage. | timestamps; production calendar; meter/invoice periods; exception log |
| `dq_completeness` | all included processes | Account for all aluminium inputs and outputs, all directly metered energy, and every known treatment, waste and direct-emission flow; list unmeasured or excluded flows and their expected effect. | mass balance; energy reconciliation; waste manifests; omission register |
| `dq_geography_technology` | upstream links and foreground route | Match upstream datasets to supplier geography, primary/secondary route, alloying and drawing-stock form; disclose proxies and technology mismatches. | supplier declarations; upstream dataset metadata; route records |
| `dq_allocation` | shared operations and scrap | Retain allocation drivers, scrap classification, destination and method so a reviewer can reproduce the result and detect double counting. | allocation worksheet; scrap ledger; recycler receipts; `iai-aluminium-scrap-carbon-footprint-2025` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require product UUID `89db8507-09bd-45f8-ba96-4e459058412c`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg and exactly 1,000 kg net saleable output. | `mass-balance-identity` |
| `validate_required_qualifiers` | product metadata | Reject a package that omits alloy, temper, cross-sectional shape/dimensions, finish/coating, intended grade/application, route, geography, period, recycled-content basis or factory-gate state. | `astm-b211-b211m-19`; `astm-b230-b230m-22` |
| `validate_scope_exclusions` | product and boundary | Reject drawing stock, bar/rod/profile, insulated wire, stranded conductor, cable, fabricated wire article, construction-site delivery or installed system as the reference product of this PCR. | `environdec-basic-aluminium-pcr-1-0-2` |
| `validate_route_logic` | process map | Require wire drawing and finishing/release; require an explicit included/bypassed decision for pretreatment and heat treatment; prevent duplicate intermediate input on bypass paths. | `eu-fmp-bref-2022` |
| `validate_inventory_evidence` | inventory rows | Require collected or calculated foreground amounts, linked collection protocols, source units, normalization to the reference flow and distinct Tiangong identities before publication; reasoned-estimate ranges may screen data but may not replace records. |  |
| `validate_mass_scrap_allocation` | facility mass balance and recycling | Require reconciled aluminium inputs, product, work in progress, internal returns, scrap and rejects; require one disclosed scrap-allocation method and prohibit duplicate recycling credit. | `mass-balance-identity`; `iai-aluminium-scrap-carbon-footprint-2025`; `environdec-basic-aluminium-pcr-1-0-2` |
| `validate_source_status` | methodology review | Recheck the current EPD International aluminium PCR and replace or confirm all provisional reasoned-estimate screens before active or published use. | `environdec-basic-aluminium-pcr-1-0-2` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | Foreground aluminium-wire production packages and downstream process or lifecyclemodel projections requiring factory-gate uninsulated wire |
| allowed_use | Product-specific or transparently weighted production-mix datasets whose product lies within the declared uninsulated single-wire scope and whose qualifiers, routes, upstream links and allocation method are complete |
| excluded_use | Generic aluminium metal, drawing stock, bars/rods/profiles, insulated winding wire, stranded conductors, cable, fabricated wire products, construction-site delivery, installation, use or end-of-life without a separate downstream model |
| required_metadata | canonical PCR id; product and support UUIDs; alloy; temper; shape/dimensions/tolerances; finish/coating; application grade; production route and bypass decisions; geography; reporting period; primary/recycled shares and evidence; upstream dataset identities; scrap destinations and allocation method; foreground source and collection-protocol links |
| required_quality_disclosure | temporal and site coverage; meter and scale quality; mass/energy reconciliation; missing flow identities; proxy datasets; provisional ranges used only for QA; allocation drivers; scrap contamination and destination; exclusions and residual mass-balance causes |
| update_trigger | Material change in alloy/product mix, drawing or heat-treatment technology, energy supply, aluminium source or recycled share, coating/finishing, scrap route or allocation method; a newer controlling PCR/standard; or evidence that a provisional range or UUID is no longer appropriate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `environdec-basic-aluminium-pcr-1-0-2` | standard | EPD International, Basic aluminium products and special alloys, version 1.0.2 (being updated), https://www.environdec.com/pcr-library/pcr_040ae46d-0894-4dca-831b-91aa8d2b93b8 (retrieved 2026-08-09) | Parent CPC 4153 applicability, factory-gate PCR context and mandatory disclosure of the selected scrap-allocation method; update status is a review flag |
| `astm-b211-b211m-19` | standard | ASTM B211/B211M-19, Standard Specification for Aluminum and Aluminum-Alloy Rolled or Cold Finished Bar, Rod, and Wire, https://store.astm.org/b0211_b0211m-19.html (retrieved 2026-08-09) | General-engineering aluminium wire scope and alloy/temper/product-property qualifiers |
| `astm-b230-b230m-22` | standard | ASTM B230/B230M-22, Standard Specification for Aluminum 1350-H19 Wire for Electrical Purposes, https://store.astm.org/b0230_b0230m-22.html (retrieved 2026-08-09) | Electrical-purpose wire inclusion and application-specific alloy, temper, shape and conformance qualifiers |
| `eu-fmp-bref-2022` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, 2022, https://eippcb.jrc.ec.europa.eu/sites/default/files/2022-12/FMP_BREF_2022.pdf (retrieved 2026-08-09) | Generic technical analogue for wire-rod pretreatment, dry/wet drawing, optional heat treatment and finishing; not aluminium-specific quantitative evidence |
| `iai-aluminium-scrap-carbon-footprint-2025` | official_guidance | International Aluminium Institute, Aluminium Scrap in Carbon Footprint Calculations, 2025, https://international-aluminium.org/wp-content/uploads/2025/10/Carbon-Footprint-of-Recycled-Aluminium-IAI-Document-Final.pdf (retrieved 2026-08-09) | Aluminium scrap mass balance, cut-off/substitution/coproduct method disclosure and prevention of double-counted recycling benefit |
| `mass-balance-identity` | method_factor | Conservation-of-mass and reference-flow normalization identity | Fixed reference amount, yield, route weighting and process/facility mass-balance calculations |
