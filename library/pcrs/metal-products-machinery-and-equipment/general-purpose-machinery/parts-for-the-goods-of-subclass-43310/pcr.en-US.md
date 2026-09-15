---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43310
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclass 43310

## 1. Scope and Applicability

This PCR covers separately supplied, market-ready parts identifiable for ball or roller bearings: inner and outer rings or races, balls, needles, rollers, cages, shields, seals, and equivalent dedicated rolling-bearing parts. It applies to steel and non-steel variants when material, part type, manufacturing route, technical specification, and market state are declared.

Complete bearings, bearing units, bearing housings, plain bearings, shafts, gears, clutches, generic fasteners, general-purpose stock, lubricants sold as products, services, and parts belonging to goods of subclass 43320 are excluded. An integrated component is covered only when its foreground exchanges and delivered mass can be separated from the complete bearing.

The default data-production boundary is gate-to-gate manufacture from purchased stock, semi-finished parts, auxiliaries, and energy at the controlled site through inspection, preservation, and packaging of one finished part at the factory gate. Purchased inputs use linked upstream datasets. Installation, use, maintenance, and end-of-life are outside this foreground boundary unless explicitly added by the study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43310 |
| classification_refs | CPC 3.0: 43331, Parts for the goods of subclass 43310; product family: parts for ball or roller bearings |
| covered_products | Separately supplied rolling elements, rings or races, cages, shields, seals, and other dedicated parts for ball or roller bearings |
| excluded_products | Complete bearings and units; housings and plain bearings; goods or parts of subclass 43320; generic stock and undedicated hardware |
| representative_product | One specified finished rolling-bearing part conforming to its declared drawing or product specification |
| production_route | Purchased stock or semi-finished part; route-specific forming or machining; conditional heat treatment; precision finishing and inspection; conditional cleaning and protection; packaging |
| market_state | Finished, inspected, preserved where required, and packaged for transfer at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one specified, market-ready part dedicated to a ball or roller bearing |
| How much | One finished part |
| How well | Conforming to declared drawing, material grade, dimensions, tolerances, surface condition, hardness or heat-treatment condition, and inspection criteria |
| How long or cycle | One factory-gate delivery; service life is declared only when a downstream functional study includes the final application |
| reference_flow_link | Output row `reference_product` from `packaging_and_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) of finished rolling-bearing part |
| Reference product flow | Finished rolling-bearing part |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | part type; bearing application or interface; material and grade; net part mass; dimensions and tolerances; hardness or heat-treatment state; surface finish or coating; preservation state; packaging; manufacturing site and geography; reporting period; included route steps |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only inspected, accepted parts in the declared market state; rejects, pending rework, and packaging pieces are not reference items. |
| `part_and_material_mass` | part, material, waste, and packaging mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net part mass separately from packaging, retain weigh-ticket precision, and normalize batch totals by accepted item count. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh and convert with 1 kWh = 3.6 MJ; disclose grid geography, voltage, contractual mix, and included losses. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record meter reference temperature and pressure, composition or billing calorific value, and any volume correction. |
| `aqueous_solution_mass` | sodium-hydroxide solution and water-miscible fluids | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record solution mass and concentration separately; calculate dry substance only with a declared concentration basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased alloy-steel bar or rod, alloy-steel wire, steel plate, other declared stock, or a supplier-provided semi-finished bearing part is received with auxiliaries, packaging, and energy. |
| starting_condition_role | Foreground manufacturing gate; production before receipt remains in linked upstream datasets. |
| product_classification_scope | Separately supplied, dedicated parts for ball or roller bearings; part type and material determine applicable route steps. |
| recursive_input_rule | A purchased finished input in this PCR category is recorded once with its supplier dataset and is not recursively reconstructed inside the receiving process. |
| upstream_dataset_requirement | Link supplier-specific data where available for principal stock, main semi-finished parts, electricity, fuel, auxiliaries, and packaging; otherwise use representative current attributional datasets and disclose proxy use. |
| disclosure | Declare stock form and grade, input geography, site, controlled route, exclusions, allocation, electricity mix, gas reference conditions, waste state, and packaging boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_core_operations` | foreground manufacturing | Include all controlled forming, machining, heat treatment, finishing, cleaning, inspection, protection, packaging, direct emissions, and manufacturing-waste handling that apply to the declared route. | `international-epd-pcr-2023-03-v1` |
| `boundary_route_conditionals` | route applicability | Include a conditional process only when the declared route uses it; document why each non-applicable step is absent. | `international-epd-pcr-2023-03-v1` |
| `boundary_upstream_links` | purchased inputs | Represent extraction, primary production, supplier processing, purchased energy, packaging production, and inbound transport through linked upstream datasets. | `international-epd-pcr-2023-03-v1` |
| `boundary_cutoff` | inventory completeness | Avoid cut-off; if exclusions remain, document sensitivity and demonstrate at least 95% coverage of product mass, life-cycle energy use, and each reported impact result within the study boundary. | `international-epd-pcr-2023-03-v1` |
| `boundary_default_exclusions` | organizational and capital activities | Exclude commuting, business travel, research and development, and machinery maintenance occurring less often than once in three years unless explicitly included by the study. | `international-epd-pcr-2023-03-v1` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `primary_forming_and_machining` | Primary forming and machining | required | Apply the actual route: ring blanking, forging or turning; rolling-element cutting or cold heading; cage stamping or machining; or equivalent forming. | foreground production | Per accepted finished part, traced by batch |
| `heat_treatment` | Heat treatment | conditional | Include when annealing, hardening, carburizing, nitriding, tempering, stress relief, or another thermal treatment occurs under site control. | foreground conditioning | Per accepted treated part |
| `precision_finishing_and_inspection` | Precision finishing and inspection | required | Include applicable grinding, honing, lapping, polishing, deburring, dimensional inspection, and acceptance. | foreground finishing | Per accepted finished part |
| `cleaning_and_surface_protection` | Cleaning and surface protection | conditional | Include when aqueous or alkaline cleaning, corrosion protection, oiling, coating, or equivalent preparation occurs under site control. | foreground conditioning | Per accepted treated part |
| `packaging_and_release` | Packaging and factory-gate release | required | Include actual consumer or distribution packaging and release operations for the declared market state. | foreground release | One accepted packaged part |

### Process: Primary forming and machining (`primary_forming_and_machining`)

#### Inputs

##### Product flows

###### Alloy-steel bar or rod for rings or rollers (`forming_alloy_steel_bar`)

Record this stock only for a declared ring or roller route.

- Selected flow: Bars and rods of alloy steel, further worked than hot- or cold-processed `f72c06a2-f974-4d85-9308-b31cbb1d1b9a`
- Flow property / unit: Mass / kg
- Amount rule: delivery mass issued to the batch, net of unchanged stock returned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Alloy-steel wire for cold-formed rolling elements (`forming_alloy_steel_wire`)

Record this stock only when balls, needles, or rollers are cut or cold headed from wire.

- Selected flow: Wire drawing, steel `461d98b3-a825-41bb-9b16-056331873326`
- Flow property / unit: Mass / kg
- Amount rule: delivery mass issued to the batch, net of unchanged wire returned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Steel plate for stamped cages (`forming_steel_plate`)

Record steel plate only when the declared cage or shield is stamped or cut from plate.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: delivery mass issued to the batch, net of unchanged plate returned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Electricity for forming and machining (`forming_electricity`)

Record metered or defensibly sub-metered electricity for forming, machining, controls, and directly associated extraction.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity for the traced batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Process water for forming-fluid make-up (`forming_process_water`)

Record water only when added to cutting, forming, washing, or cooling circuits in this process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water allocated to the traced batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated steel offcuts and machining chips (`forming_steel_scrap`)

Record steel offcuts, chips, and rejected stock leaving for recovery or treatment; disclose contamination and end-of-waste status.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap leaving the traced batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Spent water-miscible metalworking fluid (`forming_spent_metalworking_fluid`)

Record the spent emulsion separately from scrap and cleaning wastewater.

- Selected flow: Spent water-miscible metalworking fluid
- Flow property / unit: Mass / kg
- Amount rule: weighed or volume-and-density-calculated waste fluid leaving the batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Elementary flows

### Process: Heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Gaseous natural gas for the furnace (`heat_natural_gas`)

Record gas only for a directly fired furnace or on-site heat generator serving this process.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: corrected meter volume consumed for the traced batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted treated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Electricity for heat treatment (`heat_electricity`)

Record electricity for electric furnaces, controls, atmosphere equipment, quench circulation, and extraction.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity for the traced batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted treated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Mineral quenching oil make-up (`heat_quenching_oil`)

Record fresh mineral quenching oil only when added during the reporting period.

- Selected flow: Mineral quenching oil
- Flow property / unit: Mass / kg
- Amount rule: purchased issue minus unchanged returns, allocated to the traced batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted treated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent mineral quenching oil (`heat_spent_quenching_oil`)

Record contaminated quenching oil leaving site control for recovery or treatment.

- Selected flow: Spent mineral quenching oil
- Flow property / unit: Mass / kg
- Amount rule: weighed waste oil leaving the traced system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted treated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Elementary flows

###### Direct fossil carbon dioxide from furnace combustion (`heat_fossil_co2`)

Record only direct fossil carbon dioxide from metered on-site gas combustion; exclude upstream energy emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or mass calculated from metered gas and a documented site fuel carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted treated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `international-epd-pcr-2023-03-v1`

### Process: Precision finishing and inspection (`precision_finishing_and_inspection`)

#### Inputs

##### Product flows

###### Electricity for finishing and inspection (`finishing_electricity`)

Record electricity for applicable grinding, honing, lapping, polishing, deburring, extraction, and inspection equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity for the traced finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Process water for grinding-fluid make-up (`finishing_process_water`)

Record water only when used as make-up for an aqueous finishing circuit.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water allocated to the traced finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Water-miscible grinding-fluid concentrate (`finishing_grinding_fluid`)

Record purchased concentrate separately from its water diluent.

- Selected flow: Water-miscible grinding-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: concentrate issued minus unchanged returns, allocated to the traced batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel grinding sludge (`finishing_grinding_sludge`)

Record captured steel fines and grinding fluid as one characterized waste stream and retain its water, oil, and metal fractions.

- Selected flow: Steel grinding sludge
- Flow property / unit: Mass / kg
- Amount rule: wet mass weighed at removal, with dry-solids fraction retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Elementary flows

### Process: Cleaning and surface protection (`cleaning_and_surface_protection`)

#### Inputs

##### Product flows

###### Process water for aqueous cleaning (`surface_process_water`)

Record bath make-up and final-rinse water crossing the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up and rinse water for the traced batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted cleaned part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Sodium hydroxide for alkaline cleaning (`surface_sodium_hydroxide`)

Record sodium hydroxide only for the declared alkaline-cleaning route; preserve delivered concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: dry sodium-hydroxide mass calculated from issued solution mass and declared concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted cleaned part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Mineral rust-preventive oil (`surface_rust_preventive_oil`)

Record fresh rust-preventive oil only when applied to the market-ready part.

- Selected flow: Mineral rust-preventive oil
- Flow property / unit: Mass / kg
- Amount rule: purchased issue minus recovered unchanged oil, allocated to accepted parts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted protected part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Aqueous wastewater from bearing-part cleaning (`surface_industrial_wastewater`)

Record wastewater leaving for on-site or off-site treatment and retain bath identity and analytical composition.

- Selected flow: Aqueous wastewater from bearing-part cleaning
- Flow property / unit: Mass / kg
- Amount rule: metered discharge mass or volume converted with measured density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted cleaned part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Elementary flows

### Process: Packaging and factory-gate release (`packaging_and_release`)

#### Inputs

##### Product flows

###### Corrugated fibreboard packaging (`packaging_corrugated_board`)

Record fibreboard boxes, partitions, or pads separately from polymer film.

- Selected flow: Corrugated fibreboard packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill-of-material mass allocated to accepted packed parts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted packaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Low-density polyethylene packaging film (`packaging_polyethylene_film`)

Record low-density polyethylene bag or wrapping film separately from fibreboard.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: packaging bill-of-material mass allocated to accepted packed parts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted packaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `international-epd-pcr-2023-03-v1`

###### Electricity for packaging and release (`packaging_electricity`)

Record electricity for packing, labelling, and final release handling.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured or defensibly sub-metered electricity for accepted packed parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted packaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished rolling-bearing part (`reference_product`)

Record the part only after inspection acceptance and completion of declared preservation and packaging.

- Selected flow: Finished rolling-bearing part
- Flow property / unit: Number of items / Item(s)
- Amount rule: exactly one accepted finished part
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one declared reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `international-epd-pcr-2023-03-v1`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared operations | Avoid allocation by sub-metering, batch tracing, machine-time records, material issues, and separate waste weighing. | `international-epd-pcr-2023-03-v1` |
| `allocation_physical` | unavoidable shared operations | Allocate by the physical driver: processed mass for material loss and bulk treatment, machine or furnace time for energy, bath loading for shared fluids, and item count only for demonstrably equivalent parts. | `international-epd-pcr-2023-03-v1` |
| `allocation_economic_fallback` | co-products without a physical relationship | Use economic allocation only when no physical relationship can be established; disclose price basis and period and perform sensitivity analysis. | `international-epd-pcr-2023-03-v1` |
| `allocation_waste_boundary` | waste and recovered material | Assign collection, conditioning, and treatment burdens to the generator until documented end-of-waste; benefits after that point remain outside unless separately reported. | `international-epd-pcr-2023-03-v1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_records` | `primary_forming_and_machining` | materials, electricity, water, scrap, spent fluid | issues, meters, weigh tickets, batch traveller | stock identity and grade; issued and returned mass; electricity; water; accepted count; scrap; spent fluid | reconcile stores, meters, batch and waste records to one batch | kg; MJ; Item(s) | each batch, monthly aggregation | representative year or declared campaign | all controlled forming lines | sum allocated exchanges and divide by accepted parts | calibrated records; certificates; batch traveller; waste record |
| `cp_heat_treatment_records` | `heat_treatment` | gas, electricity, oil, waste oil, direct CO2 | meters, furnace log, issues, waste and emissions records | treated count; recipe; gas conditions; electricity; oil; CO2 or factor | link furnace loads and meters to batches | m3; MJ; kg; Item(s) | each load, monthly aggregation | representative year or campaign | all controlled heat-treatment equipment | allocate by treated mass or furnace occupancy and divide by accepted parts | meters; furnace log; fuel specification; emissions evidence |
| `cp_finishing_records` | `precision_finishing_and_inspection` | electricity, water, fluid, sludge, accepted count | meters, issues, sludge ticket, inspection | line; batch; electricity; water; concentrate; sludge and dry fraction; counts | reconcile line records to inspection batch | MJ; kg; Item(s) | each batch, monthly aggregation | representative year or campaign | all controlled finishing lines | divide allocated exchanges by accepted parts | meters; issues; sludge analysis; inspection release |
| `cp_surface_records` | `cleaning_and_surface_protection` | water, sodium hydroxide, oil, wastewater | meters, bath log, issues, discharge, traveller | bath; water; solution mass and concentration; oil; wastewater and analysis; count | reconcile bath additions and discharge to parts processed | kg; Item(s) | each addition/discharge, monthly aggregation | representative year or campaign | all controlled cleaning lines | calculate dry chemical, allocate by treated mass or area, divide by accepted parts | meters; supplier certificate; bath and wastewater analysis |
| `cp_packaging_records` | `packaging_and_release` | packaging, electricity, reference product | bill of materials, meter, release record | packaging identity and mass; recycled content; electricity; packed count; net mass; release | link packaging specification and energy to released lot | kg; MJ; Item(s) | each released lot, monthly aggregation | representative year or campaign | all controlled packaging operations | divide packaging and energy by accepted released parts | specification; declaration; scale; release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_normalization` | all exchanges | normalized exchange = allocated batch exchange / accepted finished-part count; exclude rejects from the denominator and disclose rework | allocated exchange; accepted count | exchange per Item(s) | `international-epd-pcr-2023-03-v1` |
| `calc_electricity_conversion` | electricity | MJ = metered kWh × 3.6; retain original meter unit and reading | kWh | MJ |  |
| `calc_solution_dry_mass` | sodium hydroxide and concentrates | dry or concentrate mass = solution mass × declared mass fraction; density is not concentration | solution mass; mass fraction | kg dry substance |  |
| `calc_direct_fossil_co2` | `heat_fossil_co2` | prefer measured stack mass; otherwise multiply corrected gas by documented site fuel carbon factor and oxidation basis, excluding upstream emissions | gas; carbon factor; oxidation basis | kg direct fossil CO2 | `international-epd-pcr-2023-03-v1` |
| `calc_wastewater_mass` | `surface_industrial_wastewater` | wastewater mass = metered volume × measured representative density | volume; density | kg wastewater |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | product and stock | Retain part specification, material certificate, stock form, net mass, route, heat-treatment state, surface state, and inspection release. | drawing; certificate; traveller; inspection record |
| `dq_specific_core_data` | controlled operations | Use site-specific data for energy, auxiliaries, main-part manufacture, finishing, and manufacturing waste. | meters; purchase, production, and waste records |
| `dq_temporal_alignment` | foreground records | Use one declared representative period, normally a year; identify campaigns, shutdowns, outsourcing, and abnormalities. | period register; production volume; meter coverage |
| `dq_meter_and_mass_balance` | material, water, energy, product, waste | Document calibration, missing-data treatment, and reconciliation; investigate imbalance before publication. | calibration; reconciliation; corrective action |
| `dq_electricity_disclosure` | electricity | Declare grid, voltage, supplier or residual/consumption mix, contractual instruments, and losses; prevent renewable-attribute double counting. | invoice; supplier declaration; dataset metadata |
| `dq_generic_data` | upstream datasets | Use current attributional data representative of technology, geography, and time; disclose proxies and test completeness limits. | dataset metadata; representativeness and proxy assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | product identity | Fail if part type, bearing use, material, net mass, dimensions or tolerances, route, market state, site, geography, or period is missing. | `un-cpc-3-0-structure-2025`; `international-epd-pcr-2023-03-v1` |
| `validation_reference_flow` | reference flow | Require exactly one accepted `reference_product` item and normalize all exchanges to its denominator and packaging boundary. | `international-epd-pcr-2023-03-v1` |
| `validation_route_completeness` | process map | Require an applicability decision for every conditional process and conditional stock, fuel, fluid, chemical, emission, and packaging row; unexplained zero values fail. | `international-epd-pcr-2023-03-v1` |
| `validation_mass_and_waste` | material and waste balance | Reconcile stock, accepted-part mass, scrap, sludge, spent fluids, wastewater, and declared losses for the same batch. | `international-epd-pcr-2023-03-v1` |
| `validation_energy_and_emissions` | energy and emissions | Verify meter coverage, kWh-to-MJ conversion, gas conditions, electricity mix, and separation of direct fossil CO2 from upstream emissions. | `international-epd-pcr-2023-03-v1` |
| `validation_allocation_and_cutoff` | allocation and completeness | Require allocation drivers, economic-allocation sensitivity when used, and evidence for 95% mass, energy, and impact coverage when cut-off is claimed. | `international-epd-pcr-2023-03-v1` |
| `validation_source_traceability` | evidence | Require stable sources or retained records for non-default rules, factors, and proxies; UUID identity evidence is not quantity evidence. | `international-epd-pcr-2023-03-v1` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for one declared rolling-bearing part |
| downstream_use | secondary_dataset or background_dataset for matching complete bearings, machinery, maintenance parts, or life-cycle models |
| allowed_use | Attributional modelling with matching part identity, material, specification, route, geography, technology, period, preservation, and packaging |
| excluded_use | Generic proxy for complete bearings, housings, gears, or all parts; substitution across materially different parts or grades; unmodelled use-stage friction or service life |
| required_metadata | PCR id and status; part specification and type; bearing application; material and net mass; dimensions; heat-treatment and surface state; route and outsourcing; site and geography; period; allocation; electricity mix; sources; unresolved UUIDs and range needs |
| required_quality_disclosure | Primary-data coverage; calibration; balances; accepted/reject/rework counts; proxies; cut-off; allocation; waste treatment and end-of-waste; packaging |
| update_trigger | Recalculate when drawing, material, route, supplier, site, energy mix, packaging, or allocation changes materially, or any reported impact indicator changes by 10% or more |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-05 | CPC 43331 identity and hierarchy |
| `international-epd-pcr-2023-03-v1` | Standard (`standard`) | International EPD System, PCR 2023:03 Bearings, bearing units and parts thereof, version 1.0.0, https://www.environdec.com/pcr-library/pcr_c8639225-b509-4a82-6b78-08d9caad768c, retrieved 2026-09-05 | Boundary, declared unit, process decomposition, operations, emissions and waste, cut-off, allocation, quality, packaging, and update rules |
| `prc-mof-2026-tariff` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, 2026 tariff adjustment table, https://m.mof.gov.cn/czxw/202604/P020260428407579725260.pdf, retrieved 2026-09-05 | Chinese terminology cross-check for HS 84829100 rolling elements and HS 84829900 other rolling-bearing parts |
