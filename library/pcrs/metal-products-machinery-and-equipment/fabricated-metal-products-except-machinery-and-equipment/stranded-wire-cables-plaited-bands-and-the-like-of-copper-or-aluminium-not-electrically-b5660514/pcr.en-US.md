---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stranded-wire-cables-plaited-bands-and-the-like-of-copper-or-aluminium-not-electrically-b5660514
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Stranded wire, cables, plaited bands and the like, of copper or aluminium, not electrically insulated

## 1. Scope and Applicability

This PCR applies to factory-gate production of bare, electrically uninsulated stranded wire, single-conductor cable, plaited or braided band, and like flexible assemblies made wholly from copper/copper-alloy wire or wholly from aluminium/aluminium-alloy wire. It covers bunch, concentric-lay, rope-lay, braid, and compacted constructions when their constituent wires are not electrically insulated from one another.

The foreground begins with received wire or wire rod. Drawing, intermediate annealing, degreasing, and cleaning are included only when performed by the reporting facility; stranding, bunching, braiding or equivalent assembly and final inspection are required. Metal production and purchased-wire manufacture remain upstream and require representative supplier datasets.

The PCR excludes solid single wire sold without stranding, insulated wire or multi-conductor insulated cable, optical-fibre cable, iron or steel wire rope, and products with a steel, polymer-composite, fibre or other non-copper/non-aluminium core. It also excludes installation, use, maintenance, and end-of-life. Reusable reels, drums, pallets, and other transport packaging are outside the reference product; if consumed or transferred with the product, each actual component must be added as a separate foreground exchange.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stranded-wire-cables-plaited-bands-and-the-like-of-copper-or-aluminium-not-electrically-b5660514 |
| classification_refs | CPC 3.0: 42942, exact classification context |
| covered_products | Bare stranded wire, bare single-conductor cable, plaited or braided band, and like assemblies made wholly from copper/copper-alloy wire or wholly from aluminium/aluminium-alloy wire |
| excluded_products | Solid single wire; electrically insulated wire or cable; optical-fibre cable; iron or steel wire rope; products with non-copper/non-aluminium cores; installation, use, and end-of-life |
| representative_product | Factory-gate bare stranded conductor supplied in a coil or on a reusable reel, with declared conductor metal and construction |
| production_route | Purchased ready-to-strand wire followed by stranding/bunching/braiding and inspection; integrated drawing, annealing, degreasing, cleaning and compaction are declared when performed |
| market_state | Bare, electrically uninsulated, dry, accepted product at the factory gate before non-reusable delivery packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A bare flexible conductor or band formed by twisting, laying, bunching or braiding copper or aluminium wires into one uninsulated assembly |
| How much | 1,000 kg accepted reference product at the factory gate |
| How well | Meets the declared drawing, strand-count, lay/braid, cross-sectional area, alloy, temper, coating, electrical-resistance, mechanical and dimensional specification |
| How long or cycle | One production lot through acceptance and factory-gate release; no use duration is represented |
| reference_flow_link | `st_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Stranded wire, cable or plaited band of copper or aluminium, not electrically insulated |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | conductor metal and alloy; temper; wire coating if any; strand count and nominal strand diameter; construction type and lay/braid direction and length; compacted or uncompacted state; nominal cross-sectional area; mass per unit length; electrical-resistance test basis; factory and geography; reporting period; starting stock form and supplier boundary; integrated preparation steps; accepted-product and scrap accounting; delivery form |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

No exact public Tiangong mass flow represents the combined copper-or-aluminium reference-product boundary. The reference-product UUID therefore remains unresolved; an aluminium-only cable UUID was not used as a proxy for copper products.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry metal-product mass on calibrated scales after acceptance. Exclude reusable carrier tare and non-reusable packaging. Normalize every reported exchange to 1,000 kg accepted product. |
| `metal_mass_balance` | copper or aluminium stock, product, scrap, work in progress and unexplained loss | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep copper and aluminium balances separate. Reconcile opening stock plus inputs against accepted product, recoverable scrap, other measured outputs, closing stock and quantified loss for the reporting period. |
| `electricity_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the meter record in kWh and convert to the Tiangong reference unit using 3.6 MJ per kWh; state whether auxiliaries and internal distribution losses are included. |
| `water_mass_conversion` | process water and aqueous wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass measurement. If volume is metered, convert with a measured or documented density at declared temperature and retain the source volume, density, and conversion record. |
| `gas_reference_conditions` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report volume at the supplier or meter reference temperature and pressure and disclose gross/net calorific-value convention; do not combine gas and electricity as one energy flow. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground physical boundary | Include all on-site drawing, annealing, degreasing, cleaning, stranding, bunching, braiding, compaction, inspection, rework, internal handling and directly associated pollution-control operations performed before accepted bare product leaves the factory gate. | `us-epa-nonferrous-forming-guidance-1989`; `aluminum-association-processing-101` |
| `boundary_upstream_stock` | purchased metal stock and utilities | Model received copper wire, aluminium wire, energy, water and chemicals as individual inputs with upstream datasets representative of their declared geography, technology and delivery boundary; do not recreate primary metal production inside the foreground. | `us-epa-nonferrous-forming-guidance-1989` |
| `boundary_no_insulation` | insulation, sheathing and non-metal cores | Exclude insulation, sheathing, optical-fibre operations and non-copper/non-aluminium cores. A product using any such component is outside this PCR rather than a conditional route of this inventory. | `un-cpc-3-0-structure-2025`; `nist-wire-cable-terminology-circular-37` |
| `boundary_site_specific_additions` | site-specific exchanges | If the facility uses another concrete chemical, fuel, coating, packaging component, waste treatment input, waste output or elementary emission, add that one atomic exchange and its measured amount; never report an umbrella utility, chemical, waste or emissions row. | `us-epa-nonferrous-forming-guidance-1989` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received copper/copper-alloy wire or wire rod, or received aluminium/aluminium-alloy wire or wire rod, with metal, alloy, temper, diameter, coating, supplier, recycled-content claim and delivery boundary declared |
| starting_condition_role | Upstream product input to conditional preparation or directly to required stranding/braiding |
| product_classification_scope | Bare copper- or aluminium-wire stranded assemblies corresponding to the semantic boundary above; classification codes locate but do not define the PCR identity |
| recursive_input_rule | A purchased pre-stranded item in this same product category is recorded once as an external product input with its own upstream dataset and declared mass; its production is not recursively unfolded inside this foreground record |
| upstream_dataset_requirement | Use supplier-specific data where available; otherwise use a geographically and technologically representative dataset for each concrete wire, utility and chemical input, without double-counting processes performed on site |
| disclosure | Declare starting-stock form and gauge, preparation ownership, conductor construction, included auxiliaries, internal recycle loops, metal-scrap destination, water discharge route, reusable carrier treatment and any excluded shared services |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wire_preparation` | Wire drawing, annealing and cleaning | conditional | Include only the drawing, intermediate annealing, degreasing or cleaning operations performed by the reporting facility; omit when certified ready-to-strand wire is received | Foreground conductor-wire preparation | Exchanges attributable to wire used in 1,000 kg accepted reference product |
| `stranding_and_finishing` | Stranding, bunching, braiding, compaction and final inspection | required | Always include the actual assembly route and associated inspection, rework and directly associated auxiliaries | Foreground formation of accepted bare stranded product | 1,000 kg accepted reference product at factory gate |

### Process: Wire drawing, annealing and cleaning (`wire_preparation`)

#### Inputs

##### Product flows

###### Copper wire stock entering preparation (`dr_copper_wire_input`)

Record this exchange only for a copper route when purchased copper wire crosses the facility boundary into on-site drawing, annealing or cleaning.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net copper-wire receipt consumed by the included preparation operations, adjusted for opening and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_materials`
- Sources: `us-epa-nonferrous-forming-guidance-1989`

###### Aluminium wire stock entering preparation (`dr_aluminium_wire_input`)

Record this exchange only for an aluminium route when purchased aluminium wire crosses the facility boundary into on-site drawing, annealing or cleaning.

- Selected flow: Aluminum wire `89db8507-09bd-45f8-ba96-4e459058412c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net aluminium-wire receipt consumed by the included preparation operations, adjusted for opening and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_materials`
- Sources: `us-epa-nonferrous-forming-guidance-1989`; `aluminum-association-processing-101`

###### Electricity for preparation equipment (`dr_electricity`)

Include separately metered or allocated electricity for drawing drives, annealing when electric, cleaning, pumps, filtration, exhaust and preparation-area auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: measured preparation-area electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_utilities`
- Sources:

###### Process water for drawing or cleaning (`dr_process_water`)

Record water entering a water-based drawing-lubricant make-up, cleaning, rinsing or directly associated closed-loop system; exclude non-contact water that does not cross the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net process-water input after separately quantified internal recirculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_utilities`
- Sources: `us-epa-nonferrous-forming-guidance-1989`

###### Wire-drawing lubricant (`dr_drawing_lubricant`)

Record the specific neat oil, oil-in-water emulsion, soap solution or other lubricant actually introduced to on-site drawing. Internal recirculation is not a new input.

- Selected flow: Wire-drawing lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fresh lubricant and concentrate additions net of documented returns to supplier
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_utilities`
- Sources: `us-epa-nonferrous-forming-guidance-1989`

###### Natural gas for fuel-fired annealing (`dr_natural_gas`)

Record only natural gas combusted on site for annealing or directly associated thermal cleaning; do not use this row for purchased heat or another fuel.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered natural-gas volume at declared reference conditions allocated to included preparation operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_utilities`
- Sources: `us-epa-nonferrous-forming-guidance-1989`

###### Sodium hydroxide for alkaline degreasing (`dr_sodium_hydroxide`)

Record only sodium hydroxide introduced when an alkaline degreasing or cleaning bath is used. Declare supplied concentration and report as-delivered mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-delivered sodium-hydroxide product added to the included bath
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_utilities`
- Sources: `us-epa-nonferrous-forming-guidance-1989`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared copper wire (`dr_copper_wire_output`)

Record only for the copper route. This is the mass of copper wire released from included preparation to stranding, not accepted final stranded product.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured copper wire transferred to stranding, adjusted for preparation work in progress
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_materials`
- Sources: `us-epa-nonferrous-forming-guidance-1989`

###### Prepared aluminium wire (`dr_aluminium_wire_output`)

Record only for the aluminium route. This is the mass of aluminium wire released from included preparation to stranding, not accepted final stranded product.

- Selected flow: Aluminum wire `89db8507-09bd-45f8-ba96-4e459058412c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured aluminium wire transferred to stranding, adjusted for preparation work in progress
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_materials`
- Sources: `us-epa-nonferrous-forming-guidance-1989`; `aluminum-association-processing-101`

##### Waste flows

###### Segregated copper wire scrap from preparation (`dr_copper_scrap`)

Record copper offcuts, breakage and rejected prepared wire leaving the process for internal or external recovery; record only for the copper route.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net copper scrap leaving preparation, excluding material returned directly to the same work-in-progress balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_wastes`
- Sources:

###### Segregated aluminium wire scrap from preparation (`dr_aluminium_scrap`)

Record aluminium offcuts, breakage and rejected prepared wire leaving the process for internal or external recovery; record only for the aluminium route.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net aluminium scrap leaving preparation, excluding material returned directly to the same work-in-progress balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_wastes`
- Sources:

###### Spent wire-drawing lubricant (`dr_spent_lubricant`)

Record spent lubricant removed as a separate waste after filtration, centrifuging or other internal recycle; do not include aqueous wastewater in this row.

- Selected flow: Waste lubricating oil `9c1267ee-ba26-4c53-9643-89ae0c5764c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass of separately removed spent lubricant sent to treatment, recovery or disposal
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_wastes`
- Sources: `us-epa-nonferrous-forming-guidance-1989`

###### Oily wire-drawing wastewater (`dr_oily_wastewater`)

Record aqueous effluent leaving the foreground after contact with drawing lubricant, metal or cleaning operations. Exclude water retained and reused internally.

- Selected flow: Oily wire-drawing wastewater containing suspended copper or aluminium solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharged mass, or measured discharge volume converted with documented density, before off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_wastes`
- Sources: `us-epa-nonferrous-forming-guidance-1989`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`dr_fossil_co2`)

Record direct fossil carbon dioxide emitted to air only when fuel is combusted on site and the amount is measured by an emissions-monitoring or accepted site carbon-accounting record. Upstream electricity emissions are excluded.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or accepted site-record fossil CO2 attributable to included preparation operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_emissions`
- Sources:

### Process: Stranding, bunching, braiding, compaction and final inspection (`stranding_and_finishing`)

#### Inputs

##### Product flows

###### Copper wire entering stranding (`st_copper_wire`)

Record only for a copper product. The wire may be received ready to strand or transferred from `wire_preparation`, but the same mass must not be counted twice at the facility boundary.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured copper-wire mass issued to stranding, adjusted for stranding-area opening and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stranding_materials`
- Sources: `nist-wire-cable-terminology-circular-37`

###### Aluminium wire entering stranding (`st_aluminium_wire`)

Record only for an aluminium product. The wire may be received ready to strand or transferred from `wire_preparation`, but the same mass must not be counted twice at the facility boundary.

- Selected flow: Aluminum wire `89db8507-09bd-45f8-ba96-4e459058412c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured aluminium-wire mass issued to stranding, adjusted for stranding-area opening and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stranding_materials`
- Sources: `nist-wire-cable-terminology-circular-37`; `aluminum-association-processing-101`

###### Electricity for stranding and finishing (`st_electricity`)

Include electricity for stranding, bunching, braiding, compaction, take-up, inspection, rework and directly associated exhaust and controls.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: measured line electricity plus causally allocated directly associated auxiliaries, converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stranding_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted bare stranded reference product (`st_reference_product`)

This is the accepted factory-gate product after the declared dimensional, electrical and mechanical checks. Rework that remains inside the process is not a separate output.

- Selected flow: Stranded wire, cable or plaited band of copper or aluminium, not electrically insulated
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1,000 kg accepted net product by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-structure-2025`; `nist-wire-cable-terminology-circular-37`

##### Waste flows

###### Segregated copper wire scrap from stranding (`st_copper_scrap`)

Record copper wire offcuts, strand breakage and final rejects leaving the process for recovery or disposal; record only for the copper route.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net copper scrap leaving stranding and finishing after internal rework returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stranding_materials`
- Sources:

###### Segregated aluminium wire scrap from stranding (`st_aluminium_scrap`)

Record aluminium wire offcuts, strand breakage and final rejects leaving the process for recovery or disposal; record only for the aluminium route.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net aluminium scrap leaving stranding and finishing after internal rework returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stranding_materials`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | independently metered lines and process steps | Avoid allocation by subdividing preparation and stranding operations and by using line meters, batch records and material issues whenever practicable. |  |
| `allocation_rework` | internal rework | Keep same-period rework circulating within the process inventory. Count only net external inputs, accepted product, waste leaving the foreground and period-end stock change. |  |
| `allocation_scrap` | copper or aluminium scrap | Report segregated scrap as a waste output at the measured foreground boundary. Do not subtract an avoided primary-metal burden or recycling credit inside this foreground inventory; apply any downstream recycling method outside the PCR foreground and disclose it. |  |
| `allocation_shared_services` | shared electricity, water, fuel and auxiliaries | Allocate shared services first by a measured causal driver such as line meter, machine time, throughput or furnace load. If no causal driver is available, use accepted product mass, document the affected share and test sensitivity for materially different conductor constructions. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preparation_materials` | `wire_preparation` | copper/aluminium wire input and prepared-wire transfer | goods receipt, issue, transfer and stock record | metal; alloy; temper; coating; opening stock; receipts; issues; transfers; closing stock; lot; scale id | reconcile weighbridge, scale and enterprise records by metal and lot | kg | each receipt/transfer and monthly reconciliation | representative reporting year or declared campaign | all included preparation lines | net consumed or transferred mass divided by accepted reference-product mass and multiplied by 1,000 | calibration record; supplier certificate; stock reconciliation; lot traceability |
| `cp_preparation_utilities` | `wire_preparation` | electricity, water, lubricant, natural gas and sodium hydroxide | meter, purchase, tank and bath-addition record | meter opening/closing; kWh; water volume/mass; gas volume and reference conditions; product mass; concentration; internal recycle; allocation driver | use dedicated meters where available; otherwise documented causal allocation from facility records | MJ, kg or m3 as applicable | continuous or each batch, reconciled monthly | representative reporting year or declared campaign | included preparation and pollution-control equipment | subtract documented internal returns, apply required unit conversion, divide by accepted reference-product mass and multiply by 1,000 | meter calibration; invoices; batch sheets; allocation worksheet; concentration certificate |
| `cp_preparation_wastes` | `wire_preparation` | segregated metal scrap, spent lubricant and oily wastewater | scrap ticket, waste manifest, tank drawdown and discharge meter | waste identity; metal; mass/volume; density; origin; internal recycle; destination; treatment route; date | weigh each shipment or use calibrated tank/discharge records; keep internal recycle separate | kg | each shipment or discharge, reconciled monthly | representative reporting year or declared campaign | all included preparation lines and directly associated treatment | net mass leaving foreground divided by accepted reference-product mass and multiplied by 1,000 | scale/meter calibration; waste manifest; destination receipt; density record; discharge log |
| `cp_preparation_emissions` | `wire_preparation` | direct fossil carbon dioxide | stack-monitoring or accepted site emissions record | source id; fuel; monitoring period; measured CO2 mass; operating hours; allocation driver; data gaps | use measured site record and allocate only the included source share | kg | continuous or reporting-period record | same period as activity data | on-site fuel combustion serving included preparation | attributable fossil CO2 divided by accepted reference-product mass and multiplied by 1,000 | monitor QA/QC; emissions report; source-to-line allocation record |
| `cp_stranding_materials` | `stranding_and_finishing` | copper/aluminium wire input, accepted product and segregated scrap | material issue, production, inspection, rework, scrap and stock record | metal; alloy; construction; opening stock; issues; accepted mass; rework return; scrap mass; closing stock; lot; scale id | reconcile line and warehouse records by product lot and conductor metal | kg | each lot and monthly reconciliation | representative reporting year or declared campaign | all stranding, braiding, compaction and final-inspection lines | net input, accepted output and net outgoing scrap divided by accepted reference-product mass and multiplied by 1,000 | calibration record; acceptance record; scrap ticket; stock reconciliation; lot traceability |
| `cp_stranding_utilities` | `stranding_and_finishing` | electricity | electricity meter and machine-time record | meter opening/closing; kWh; operating time; product lot; shared auxiliary load; allocation driver | dedicated line meter or documented causal allocation | kWh retained and MJ reported | continuous or per batch, reconciled monthly | representative reporting year or declared campaign | stranding and directly associated finishing equipment | convert kWh to MJ, divide by accepted reference-product mass and multiply by 1,000 | meter calibration; machine log; allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every non-fixed inventory exchange | normalized amount = attributable reporting-period amount / accepted reporting-period product mass × 1,000 | attributable exchange amount; accepted product mass in kg | exchange amount per 1,000 kg accepted reference product |  |
| `calc_stock_adjusted_input` | copper wire, aluminium wire, lubricant and chemicals | consumed amount = opening stock + receipts - returns to supplier - closing stock - documented transfer outside the included process | opening stock; receipts; returns; closing stock; transfers | stock-adjusted consumed mass |  |
| `calc_electricity_mj` | electricity rows | reported MJ = metered kWh × 3.6, followed by reference normalization | attributable kWh; accepted product mass | MJ per 1,000 kg accepted product |  |
| `calc_metal_reconciliation` | each conductor metal separately | unexplained metal difference = opening metal stock + external metal inputs - accepted product - outgoing same-metal scrap - other measured same-metal outputs - closing metal stock | metal-specific stock, input and output records | absolute and percentage unexplained metal difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and metal flows | Retain product specification, alloy/temper certificate, strand geometry, construction, coating status, insulation status and lot link; copper and aluminium routes must not be aggregated into one physical dataset. | specification; certificate of analysis; inspection record; lot genealogy |
| `dq_measurement` | mass, energy, gas and water records | Use calibrated devices within their valid range; retain raw readings, tare treatment, unit conversions, reference conditions and allocation worksheets. | calibration certificate; meter export; weigh ticket; conversion record |
| `dq_temporal` | foreground activity | Cover a representative twelve-month period or disclose a shorter campaign, shutdowns, abnormal lots and seasonal effects. | production calendar; downtime log; reporting-period statement |
| `dq_completeness` | all included processes | Reconcile purchase, meter, production, scrap, waste and stock records; investigate omitted baths, auxiliary systems, pollution controls and direct emissions before release. | reconciliation checklist; variance investigation; signed completeness review |
| `dq_upstream` | purchased wire, utilities and chemicals | Document supplier, geography, technology, delivery boundary, dataset vintage and any recycled-content claim; prevent double-counting on-site drawing or annealing in upstream wire data. | supplier declaration; upstream dataset metadata; boundary comparison |
| `dq_unresolved_identity` | UUID-empty rows | Keep the concrete flow name and foreground record, but do not substitute a proxy UUID. Resolve the reference product, wire-drawing lubricant and oily wastewater identities before publication. | finalized UUID-search review record; reviewer sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | functional unit and reference output | Confirm exactly 1,000 kg accepted bare product, carrier tare and packaging excluded, with every required qualifier declared. | `un-cpc-3-0-structure-2025`; `nist-wire-cable-terminology-circular-37` |
| `validation_scope` | product eligibility | Reject datasets for insulated, optical-fibre, iron/steel-rope or non-copper/non-aluminium-core products and reject solid wire sold without stranding. | `un-cpc-3-0-structure-2025`; `nist-wire-cable-terminology-circular-37` |
| `validation_process_map` | process coverage | Require `stranding_and_finishing`; require `wire_preparation` only when drawing, annealing, degreasing or cleaning is performed on site, and verify that upstream data do not duplicate those steps. | `us-epa-nonferrous-forming-guidance-1989`; `aluminum-association-processing-101` |
| `validation_atomic_flows` | inventory structure | Confirm every selected flow is one product, waste or elementary exchange; reject combined utilities, fuels, chemicals, packaging, wastes or emissions. |  |
| `validation_metal_balance` | copper and aluminium mass balance | Reconcile each conductor metal independently and require the site to define, justify and investigate its material unexplained-loss threshold; never offset a copper difference with aluminium. |  |
| `validation_energy_and_water` | electricity, gas and water | Verify electricity conversion, gas reference conditions, water-density conversion, meter coverage and internal-recycle treatment; reject double-counted recirculation. |  |
| `validation_scrap_allocation` | scrap and rework | Confirm internal rework is netted within the process, outgoing scrap is measured, destinations are disclosed and no avoided burden is subtracted inside the foreground. |  |
| `validation_uuid_and_sources` | identity and evidence | Verify every UUID at public state 100 with matching flow type, property and unit group; require explicit unresolved metadata for UUID-empty rows and original-text evidence for any future external numeric range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared bare copper or aluminium stranded product |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and resolution of publication blockers |
| allowed_use | Product-system studies in which conductor metal, construction, plant geography, production route, starting-stock boundary and delivery state match the declared dataset |
| excluded_use | Solid wire; insulated or optical cable; steel wire rope; composite/reinforced-core conductor; installation, use or end-of-life; substitution between copper and aluminium without a new foreground record |
| required_metadata | PCR id and version; conductor metal/alloy/temper; coating; construction and lay/braid; strand geometry; cross-section; mass per length; electrical test basis; factory/geography; period; starting stock; included preparation; upstream datasets; scrap destination; water route; allocation; delivery form |
| required_quality_disclosure | Meter and scale coverage; calibration; temporal representativeness; metal-balance result; stock adjustments; internal recycle; shared-service allocation; upstream boundary matching; data gaps; unresolved UUIDs; source and range limitations |
| update_trigger | Change in conductor metal/alloy, construction, coating, wire gauge, drawing or annealing technology, lubricant or cleaning system, energy supply, water/discharge route, scrap treatment, facility, upstream wire boundary, or a material change in energy, yield or waste performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure*, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-05 | Official CPC 42942 product identity and the electrically-uninsulated boundary |
| `nist-wire-cable-terminology-circular-37` | official_guidance | U.S. Bureau of Standards, *Electric Wire and Cable Terminology*, Circular No. 37, https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular37.pdf, retrieved 2026-09-05 | Bare conductor, strand, stranded-wire, cable, twisted and braided construction terminology |
| `us-epa-nonferrous-forming-guidance-1989` | official_guidance | U.S. Environmental Protection Agency, *Aluminum, Copper, and Nonferrous Metals Forming and Metal Powders Pretreatment Standards: A Guidance Manual*, 1989, https://www.epa.gov/sites/default/files/2016-08/documents/aluminum-copper-nonferrous-forming_pretreat-guidance_1989.pdf, retrieved 2026-09-05 | Drawing, lubricant use and recycle, conditional annealing/degreasing/cleaning, and oil/metal-bearing waste streams |
| `aluminum-association-processing-101` | extension_guidance | The Aluminum Association, *Processing 101*, https://www.aluminum.org/processing-101, retrieved 2026-09-05 | Aluminium rod-to-wire drawing and formation of electrical conductor by stranding several wires |
