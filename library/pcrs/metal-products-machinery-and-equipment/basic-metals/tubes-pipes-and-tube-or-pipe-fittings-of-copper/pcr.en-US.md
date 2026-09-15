---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-copper
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tubes, pipes and tube or pipe fittings, of copper

## 1. Scope and Applicability

This PCR applies to factory-gate production of semi-finished copper or copper-alloy tubes and pipes, in straight lengths or coils, and copper tube or pipe fittings. It covers seamless routes based on billet extrusion or hot piercing followed by rolling and/or drawing, welded-tube routes based on copper strip, fitting fabrication from copper tube or declared copper stock, and conditional heat treatment, degreasing, pickling, rinsing, and on-site effluent treatment.

The foreground boundary starts with received, specification-qualified copper billet, copper strip, or copper tubing and ends with net saleable product at the manufacturing gate. Copper mining, concentration, smelting, refining, production of purchased feedstock, capital goods, distribution, installation, use, maintenance, and end-of-life are outside the foreground boundary. Upstream datasets remain mandatory for all purchased inputs. Finished assemblies, installed pipe systems, valves, taps, flexible hoses, products of aluminium, nickel, iron or steel, and unrelated copper sheet, foil, wire, bar, or powder are excluded.

Each dataset shall represent one declared product form and route. Route-dependent cards below are conditional; they are not a requirement to model every route or multiply product variants by every process option.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-copper |
| classification_refs | CPC 3.0: 41516, exact classification context |
| covered_products | Semi-finished copper or copper-alloy tubes and pipes in straight lengths or coils; copper tube or pipe fittings |
| excluded_products | Unwrought copper; copper sheet, foil, wire, bars, powders; installed piping systems; valves and taps; hoses; tubes, pipes, or fittings of other metals |
| representative_product | Copper tubing in a declared alloy grade, dimension, wall thickness, temper, surface condition, and saleable factory-gate state |
| production_route | Declare exactly the applicable route: extrusion and drawing; extrusion, breakdown rolling and drawing; hot piercing, breakdown rolling and drawing; strip welding; or fitting fabrication; also declare any annealing and surface-treatment steps |
| market_state | Net saleable product at the manufacturing gate; product form, straight length or coil, alloy grade, dimensions, temper, finish, inspection status, geography, and packaging boundary declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one declared specification-qualified copper or copper-alloy tube, pipe, or tube/pipe fitting at the manufacturing gate |
| How much | 1,000 kg net saleable product, excluding offcuts, rejects, reusable carriers, and distribution packaging unless the study explicitly extends the gate |
| How well | Conforms to the declared purchase specification for alloy grade, geometry, dimensional tolerances, temper, surface condition, and inspection status |
| How long or cycle | Production-based reference; service life and use cycles are outside this factory-gate PCR |
| reference_flow_link | `ref_copper_tubing` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form: tube, pipe, or fitting; alloy designation and composition basis; seamless, welded, or fitting route; outside diameter or nominal size; wall thickness or fitting geometry; straight length or coil; temper; surface condition and coating; net product mass basis; manufacturing geography; reference period; factory-gate and packaging boundary |

The Tiangong reference identity is the CPC 41516 mass-based `Copper tubing` flow. For a fitting dataset, retain this PCR normalization but do not mislabel the product as tubing: disclose that the exact fitting UUID remains unresolved and create or select a reviewed exact fitting flow before publication of a fitting-specific dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all copper-bearing material balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report dry or as-delivered mass consistently, state the basis, and normalize net accepted product to 1,000 kg. Exclude offcuts, rejects, and packaging from reference-product mass. |
| `gas_volume_conditions` | Natural gas, nitrogen gas, and any later verified hydrogen-gas row | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume and disclose pressure, temperature, and standard/base conditions; convert all gas records to one declared reference condition before aggregation. |
| `electricity_energy` | Electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh in raw records and convert to MJ with the disclosed exact conversion; do not add upstream generation emissions as direct foreground emissions. |
| `water_mass` | Process-water inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If water is metered by volume, convert with a documented density and temperature basis; report only fresh makeup crossing the site boundary, not internal recirculation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received copper billet for seamless forming, received copper strip for welded tube, or received copper tubing for fitting fabrication; each input has declared alloy grade, mass, supplier geography, and upstream dataset |
| starting_condition_role | Gate-to-gate foreground entry condition for semi-finished copper-product fabrication |
| product_classification_scope | CPC 3.0 group 4151 and exact product context 41516; the classification ref does not replace the declared physical product form |
| recursive_input_rule | When CPC 41516 copper tubing enters fitting fabrication, record it once as `input_copper_tubing_for_fittings`, attach an upstream dataset, and stop recursive application of this PCR at that input |
| upstream_dataset_requirement | Every purchased billet, strip, tubing, chemical, gas, fuel, electricity, water, and off-site treatment service requires a geographically and technologically representative upstream dataset or an explicit data gap |
| disclosure | Declare route, starting material, recycled-content claim and method, included unit operations, internal recycling loops, treatment boundary, product mass basis, packaging boundary, geography, reference period, and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_operations` | foreground fabrication | Include only unit operations actually used for the declared product: preheating, extrusion or piercing, breakdown rolling, drawing, welding, fitting forming or machining, annealing, degreasing, pickling, rinsing, drying, inspection, and on-site waste treatment as applicable. | `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | purchased inputs | Stop foreground tracing at the declared received material state and link each purchased input to an upstream dataset; do not silently absorb copper production, electricity generation, fuel supply, or chemical production into foreground exchanges. |  |
| `boundary_internal_recycling` | internal copper and liquid loops | Do not report internally recirculated copper, water, pickling solution, or emulsion as repeated external inputs or outputs. Report only net boundary crossings and disclose the loop. | `eu-jrc-nfm-bref-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming_and_fabrication` | Tube, pipe, or fitting forming and fabrication | `required` | Always include; activate only the material and output cards that correspond to the declared seamless, welded, or fitting route. | Foreground conversion of received copper feedstock to saleable geometry | Net accepted copper tube, pipe, or fitting mass |
| `annealing_and_surface_treatment` | Annealing, degreasing, pickling, rinsing, and treatment | `conditional` | Include each operation only when performed within the reporting organization for the declared product; record only the corresponding atomic exchanges. | Foreground heat treatment, surface finishing, and on-site effluent treatment | Mass of net product treated |

### Process: Tube, pipe, or fitting forming and fabrication (`forming_and_fabrication`)

#### Inputs

##### Product flows

###### Copper billet for seamless forming (`input_copper_billet`)

Record specification-qualified copper billet only for extrusion or hot-piercing routes. Alloy designation, billet dimensions, supplier, recycled-content claim, and received mass are required.

- Selected flow: Copper billet
- Flow property / unit: Mass / kg
- Amount rule: measured received billet mass consumed by the declared seamless route, net of unchanged returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net accepted copper tube or pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Copper strip for welded tube (`input_copper_strip`)

Record uncoated copper strip only when a welded-tube route is used. Declare alloy grade, strip dimensions, edge preparation, supplier, and received mass.

- Selected flow: Copper strip
- Flow property / unit: Mass / kg
- Amount rule: measured copper-strip mass consumed by the declared welded-tube route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net accepted welded copper tube or pipe output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Copper tubing input for fitting fabrication (`input_copper_tubing_for_fittings`)

Record copper tubing only when it is transformed into a fitting. Apply the same-category recursive-input rule and attach the upstream tubing dataset once.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: measured copper-tubing mass consumed in fitting fabrication
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net accepted copper fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_records`
- Sources: `un-cpc-3-0-2025`

###### Electricity for forming equipment (`forming_electricity`)

Record purchased electricity delivered to extrusion, piercing, rolling, drawing, welding, forming, machining, and directly attributable auxiliaries used by the declared route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: route-attributed metered electricity, with documented allocation where a meter is shared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_electricity_meter`
- Sources: `eu-jrc-nfm-bref-2017`

###### Natural gas for billet or tool heating (`forming_natural_gas`)

Record gaseous natural gas only when gas-fired preheating or directly attributable thermal equipment is used in forming.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or invoice-reconciled natural-gas volume attributed to the declared forming route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_gas_meter`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process-water makeup for forming (`forming_process_water`)

Record fresh process-water makeup crossing the site boundary for tool cooling, rolling-emulsion preparation, or forming-line use. Exclude internally recirculated water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh makeup water attributed to forming after subtracting documented returned or recirculated volumes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_water_meter`
- Sources: `eu-jrc-nfm-bref-2017`

###### Drawing lubricant (`drawing_lubricant`)

Record the specific purchased drawing lubricant only when drawing is used. Declare product name, formulation class, supplier, and whether lubricant leaves with the product or treatment stream.

- Selected flow: Copper-tube drawing lubricant
- Flow property / unit: Mass / kg
- Amount rule: measured net lubricant consumption, equal to purchases plus opening stock minus closing stock and verified returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted drawn product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Breakdown-rolling emulsion (`rolling_emulsion`)

Record the specific emulsion concentrate or prepared emulsion crossing the process boundary only when breakdown rolling is used. Exclude internally recirculated solution and disclose water accounting.

- Selected flow: Copper-tube breakdown-rolling emulsion
- Flow property / unit: Mass / kg
- Amount rule: measured net fresh emulsion makeup after inventory change and verified recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted rolled product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable copper tube or pipe (`product_copper_tubing`)

Record this output only for a tube or pipe dataset. Product form, alloy grade, dimensions, temper, surface condition, inspection status, and net mass shall match the reference-flow qualifiers.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: net accepted saleable tube or pipe mass after rejection and rework, normalized to the reference amount
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_output_records`
- Sources: `un-cpc-3-0-2025`

###### Saleable copper fitting (`product_copper_fitting`)

Record this output only for a fitting dataset. Keep the UUID blank until an exact fitting flow is reviewed; do not substitute the copper-tubing UUID.

- Selected flow: Copper tube fitting
- Flow property / unit: Mass / kg
- Amount rule: net accepted saleable fitting mass after rejection and rework, normalized to the reference amount
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_output_records`
- Sources: `un-cpc-3-0-2025`

##### Waste flows

###### Segregated copper offcuts and rejects (`copper_scrap`)

Record net copper offcuts, sawn ends, drawing rejects, and fitting rejects that leave the foreground boundary as segregated copper scrap. Material returned internally to forming is not an output.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: weighed segregated copper scrap exported from the site, net of internal remelt or direct reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_waste_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide from forming fuel (`forming_fossil_co2`)

Record only direct fossil carbon dioxide from on-site forming fuel combustion. Exclude upstream fuel-supply and electricity-generation emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured forming natural gas and a documented site-specific carbon balance or verified combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_gas_meter`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Annealing, degreasing, pickling, rinsing, and treatment (`annealing_and_surface_treatment`)

#### Inputs

##### Product flows

###### Electricity for finishing equipment (`finishing_electricity`)

Record electricity for annealing auxiliaries, degreasing, pickling, rinsing, drying, pumping, extraction, and on-site treatment only when these operations are in scope.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributed to included finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_electricity_meter`
- Sources: `eu-jrc-nfm-bref-2017`

###### Natural gas for annealing (`finishing_natural_gas`)

Record gaseous natural gas only when an included annealing, drying, or treatment unit burns natural gas on site.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or invoice-reconciled natural-gas volume attributed to included finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net product treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_gas_meter`
- Sources: `eu-jrc-nfm-bref-2017`

###### Hydrogen protection gas (`protective_hydrogen`)

Record industrial hydrogen gas only when it is purchased and used in an annealing protection-gas mixture. Keep the UUID blank until an exact public flow is reviewed.

- Selected flow: Industrial hydrogen gas
- Flow property / unit: Volume / m3
- Amount rule: measured net hydrogen volume consumed, corrected to the declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net product annealed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nitrogen protection gas (`protective_nitrogen`)

Record gaseous nitrogen only when it is purchased and used in an annealing protection-gas mixture.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: measured net nitrogen volume consumed, corrected to the declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net product annealed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sulfuric acid for pickling (`sulfuric_acid`)

Record fresh sulfuric acid only when sulfuric-acid pickling is used. Declare concentration, grade, solution preparation, reuse loop, and supplier.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: net fresh sulfuric-acid mass added after inventory change, recovered acid, and returned solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net product pickled
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sodium hydroxide for neutralization (`sodium_hydroxide`)

Record sodium hydroxide only when purchased and consumed in on-site neutralization. Declare solution concentration and whether consumption is reported as solution or pure NaOH mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: net purchased sodium-hydroxide mass consumed in treatment, on the declared concentration basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process-water makeup for rinsing and treatment (`finishing_process_water`)

Record fresh process-water makeup for degreasing, rinsing, solution preparation, and treatment. Exclude water internally cascaded or recirculated.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh makeup water crossing the site boundary, net of documented return and recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_water_meter`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Acidic copper-bearing rinse wastewater (`acidic_copper_wastewater`)

Record the net liquid wastewater exported to off-site treatment only when acidic copper-bearing rinse water leaves the foreground boundary. Disclose pH, dissolved copper, suspended solids, destination, and whether neutralization occurred on site.

- Selected flow: Acidic copper-bearing rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured net wastewater mass exported after internal cascade reuse, evaporation, recovery, and on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Copper-bearing pickling-treatment sludge (`copper_pickling_sludge`)

Record dewatered copper-bearing sludge exported from pickling-solution or rinse-water treatment. Do not substitute electrorefining anode sludge.

- Selected flow: Copper-bearing pickling-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: weighed wet or dry sludge exported, with moisture basis and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide from finishing fuel (`finishing_fossil_co2`)

Record only direct fossil carbon dioxide from on-site natural-gas combustion in annealing, drying, or treatment. Exclude upstream fuel-supply and electricity-generation emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured finishing natural gas and a documented site-specific carbon balance or verified combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_gas_meter`
- Sources: `eu-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared forming and finishing equipment | Prefer subdivision, route-specific meters, production orders, and operating-time or engineering-causality records before allocation. |  |
| `allocation_internal_scrap` | copper returned internally | Treat copper returned to the same foreground system as an internal loop: neither co-product nor exported waste; carry only documented reprocessing burdens. | `eu-jrc-nfm-bref-2017` |
| `allocation_exported_scrap` | copper scrap leaving the site | Record exported copper scrap as a separate waste output. If avoided-burden or recycled-content modelling is applied downstream, disclose the method and keep it outside the unallocated foreground inventory. |  |
| `allocation_shared_residual` | unavoidable shared burdens | If causal subdivision is impossible, allocate by measured mass throughput for operations whose burden follows mass; use another parameter only with a documented causal justification and sensitivity check. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_material_records` | `forming_and_fabrication` | billet, strip, tubing, lubricant, emulsion | receiving, issue, return, and stock records | product identity; supplier; batch; alloy/formulation; opening stock; purchases; issues; returns; closing stock; mass | reconcile calibrated scales, warehouse records, and invoices by product and route | kg | per batch, reconciled monthly | representative continuous 12-month period or all batches in a shorter campaign | all foreground forming lines included in the dataset | purchases + opening stock - closing stock - verified returns, attributed to declared route | scale calibration, invoices, stock reconciliation, product specifications |
| `cp_forming_electricity_meter` | `forming_and_fabrication` | electricity | interval meter and production-order records | meter id; opening/closing reading; kWh; line; route; operating time; product mass | read dedicated meter or allocate a verified shared meter using causal operating records | kWh | interval or shift, aggregated monthly | same reference period as production | all included forming equipment and auxiliaries | sum attributable kWh, convert to MJ, divide by net accepted product mass, multiply by 1,000 kg | meter calibration, bills, allocation reconciliation |
| `cp_forming_gas_meter` | `forming_and_fabrication` | natural gas and direct fossil CO2 | gas meter, invoice, fuel quality, and emissions calculation records | volume; pressure; temperature; base conditions; carbon content or factor identity; oxidation basis; equipment; route | reconcile submeter readings with invoices and retain the verified direct-emission calculation | m3 and kg CO2 | shift or monthly | same reference period as production | all included forming combustion units | normalize gas volume; attribute by causal operation; calculate direct CO2 without upstream emissions | meter calibration, invoice reconciliation, factor or carbon-balance record |
| `cp_forming_water_meter` | `forming_and_fabrication` | process-water makeup | water meter and loop-balance records | fresh intake; returns; recirculation; purge; density basis; line; route | read boundary makeup meter and reconcile internal loop balances | kg or m3 | shift or monthly | same reference period as production | all included forming water systems | report fresh boundary makeup only; convert to kg and normalize by net product | meter calibration, water balance, density basis |
| `cp_forming_output_records` | `forming_and_fabrication` | accepted product | scale, inspection, and production-order records | product form; alloy; dimensions; temper; finish; gross output; rejects; rework; net accepted mass | reconcile certified scales with final inspection release and production orders | kg | per batch | same reference period as inputs | every product line represented | sum net accepted mass by declared product and normalize to 1,000 kg | scale calibration, inspection release, mass reconciliation |
| `cp_forming_waste_records` | `forming_and_fabrication` | segregated copper scrap | waste scale tickets and internal-return records | mass; alloy; contamination; source line; internal return; destination | reconcile scrap scales with internal remelt or reuse logs and shipment tickets | kg | per shipment, reconciled monthly | same reference period as production | all included forming lines | exported scrap = generated segregated scrap - verified internal return | scale calibration, shipment tickets, material balance |
| `cp_finishing_material_records` | `annealing_and_surface_treatment` | hydrogen, nitrogen, sulfuric acid, sodium hydroxide | delivery, tank, cylinder, stock, concentration, and issue records | identity; supplier; concentration/purity; opening stock; receipts; closing stock; returns; reference conditions | reconcile calibrated tank/cylinder/scale readings with purchase and issue records | kg or m3 | per delivery and batch, reconciled monthly | same reference period as treated product | all included finishing lines | net consumption = receipts + opening stock - closing stock - verified returns or recovery | calibration, supplier specification, stock and concentration reconciliation |
| `cp_finishing_electricity_meter` | `annealing_and_surface_treatment` | electricity | interval meter and production records | meter id; kWh; equipment; operation; treated product mass | read dedicated meter or allocate shared meter using causal operating records | kWh | interval or shift, aggregated monthly | same reference period as treated product | all included finishing and treatment equipment | sum attributable kWh, convert to MJ, normalize by treated product mass | meter calibration, bills, allocation reconciliation |
| `cp_finishing_gas_meter` | `annealing_and_surface_treatment` | natural gas and direct fossil CO2 | gas meter, invoice, fuel quality, and emissions calculation records | volume; pressure; temperature; base conditions; factor identity or carbon content; equipment | reconcile submeter readings with invoices and retain verified direct-emission calculation | m3 and kg CO2 | shift or monthly | same reference period as treated product | all included finishing combustion units | normalize gas volume; attribute by causal operation; calculate direct CO2 without upstream emissions | meter calibration, invoice reconciliation, factor or carbon-balance record |
| `cp_finishing_water_meter` | `annealing_and_surface_treatment` | fresh process-water makeup | intake meter and cascade/recirculation balance | fresh intake; cascade reuse; recirculation; purge; evaporation; density basis | read site-boundary makeup and reconcile the finishing-water balance | kg or m3 | shift or monthly | same reference period as treated product | all included surface-treatment and treatment lines | report fresh boundary makeup only and normalize by treated product mass | meter calibration, water balance, density basis |
| `cp_finishing_waste_records` | `annealing_and_surface_treatment` | wastewater and sludge | effluent meter, laboratory, dewatering, and shipment records | wastewater volume/mass; pH; dissolved copper; suspended solids; sludge mass; moisture; destination | combine calibrated flow/scale records with representative laboratory results and shipment manifests | kg | per discharge or shipment, reconciled monthly | same reference period as treated product | all included pickling and treatment lines | report net boundary exports after internal reuse, recovery, evaporation, and on-site treatment | instrument calibration, laboratory QA, manifests, treatment balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period amount / net accepted mass for the same product and route × 1,000 kg | aligned period exchange amount; net accepted product mass | exchange amount per 1,000 kg reference product |  |
| `calc_stock_consumption` | lubricants, emulsion, acids, alkali, and protection gases | net consumption = opening stock + receipts - closing stock - verified returns or recovered quantity; use consistent concentration and reference-condition bases | stock, receipt, return, recovery, concentration, and gas-condition records | net consumed mass or volume |  |
| `calc_direct_fossil_co2` | `forming_fossil_co2`; `finishing_fossil_co2` | calculate direct fossil CO2 from normalized measured fuel and a documented site-specific carbon balance or verified combustion factor; identify factor source, oxidation basis, and units; never include upstream emissions | normalized natural-gas record; documented carbon content or verified factor; oxidation basis | kg direct fossil CO2 per 1,000 kg product |  |
| `calc_copper_mass_balance` | forming route | input copper mass = net accepted copper product + exported copper scrap + measured copper-bearing losses + inventory change; investigate rather than force-close unexplained difference | billet/strip/tubing mass; accepted product; scrap; copper-bearing waste; work-in-process change | disclosed copper mass-balance closure | `eu-jrc-nfm-bref-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and copper inputs | Retain product form, alloy designation, composition basis, dimensions, wall thickness or fitting geometry, temper, surface condition, route, supplier, and lot linkage. | purchase specification, certificate, production order, inspection release |
| `dq_temporal_alignment` | all foreground exchanges | Use one representative continuous 12-month period where available; for shorter campaigns include all batches and disclose duration, seasonality, downtime, startup, shutdown, and representativeness. | meter timestamps, production calendar, batch register |
| `dq_completeness` | process map and inventory | Reconcile every included line and operation to the declared route; explain missing meters, estimated allocations, excluded operations, zero records, and data gaps. | line map, meter map, reconciliation log, gap register |
| `dq_measurement` | mass, energy, gas, water, wastewater, and sludge | Use calibrated instruments or reconciled invoices; retain original units, conversion factors, gas reference conditions, water density basis, chemical concentration, and sludge moisture basis. | calibration records, bills, laboratory QA, conversion worksheet |
| `dq_upstream_linkage` | purchased inputs and off-site treatment | Link each boundary-crossing input and treatment output to a dataset matched for identity, geography, technology, and reference period, or disclose an explicit unresolved data gap. | dataset mapping table and representativeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference flow | Confirm exactly 1,000 kg net accepted product, Mass property, kg unit, and all required qualifiers; reject gross output or packaging-inclusive mass presented as the reference product. |  |
| `validate_route_logic` | process map and inventory | Confirm one declared product form and route; route-inapplicable cards must be absent rather than populated with zero or another route's exchange. | `eu-jrc-nfm-bref-2017` |
| `validate_atomic_flows` | inventory | Confirm every selected flow is one physical, chemical, waste, or energy exchange with the stated direction, flow type, property, and unit; reject collection labels or combined alternatives. |  |
| `validate_uuid_identity` | UUID-bearing rows | Recheck public state 100, English and Chinese baseNames, flow type, classification, property, unit group, and reference unit; an exact fitting UUID remains required before publishing a fitting-specific dataset. |  |
| `validate_copper_balance` | forming | Check the disclosed copper mass balance and investigate unexplained differences; do not close the balance by changing measured product or scrap. |  |
| `validate_energy_emissions` | natural gas and fossil CO2 | Confirm direct fossil CO2 uses only on-site fuel combustion, cites the retained factor or carbon-balance record, and excludes upstream electricity and fuel-supply emissions. |  |
| `validate_internal_loops` | water, emulsion, acid, and copper recirculation | Confirm internal recirculation is not duplicated as external input or output and only net boundary crossings are normalized. | `eu-jrc-nfm-bref-2017` |
| `validate_bilingual_alignment` | bilingual PCR rendering | Confirm ordered process ids, row ids, UUIDs, controlled tokens, rule ids, amounts, range status, and source ids are identical in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for one declared copper tube, pipe, or fitting product and route |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and unresolved identities |
| allowed_use | Product-footprint, process, and lifecyclemodel studies needing mass-normalized factory-gate copper tube, pipe, or fitting production, provided product and route qualifiers match |
| excluded_use | Copper mining or refining; generic unwrought copper; installed piping systems; use-stage service; end-of-life; other metals; fitting-specific publication while the fitting UUID is unresolved |
| required_metadata | PCR id and version; product form; alloy; dimensions; temper; finish; route; starting material; recycled-content method; site geography; reference period; technology; included operations; internal loops; allocation; upstream datasets; packaging boundary |
| required_quality_disclosure | Meter and scale coverage; calibration; batch and temporal coverage; mass-balance closure; shared-meter allocation; gas reference conditions; chemical concentration; sludge moisture; representativeness; unresolved UUID and range evidence |
| update_trigger | Material change in product form, alloy, feedstock, route, furnace, drawing or rolling technology, surface treatment, treatment boundary, energy supply, site geography, allocation, reference period, exact flow identity, or source-backed evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23) | CPC 41516 identity and hierarchy |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries, 2017, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf (retrieved 2026-09-04) | Copper-tube process decomposition, forming and annealing inputs, pickling, internal recycling, and treatment outputs |
| `un-cpc-1-1-chinese` | `official_guidance` | United Nations Statistics Division, CPC Version 1.1 Chinese edition, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/cpc_v1_1_complete%28pdf%29_chinese.zip (retrieved 2026-09-04) | Professional Chinese product terminology for code 41516 |
