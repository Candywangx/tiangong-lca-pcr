---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-or-rotary-internal-combustion-piston-engines-for-aircraft
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Spark-ignition reciprocating or rotary internal combustion piston engines for aircraft

## 1. Scope and Applicability

This PCR governs foreground production of completed spark-ignition reciprocating or rotary internal-combustion piston engines intended for aircraft, from purchased materials, components, consumables, utilities, and water entering the reporting site to an accepted engine at the factory gate. It supports a mass-based product flow and foreground `process` or `lifecyclemodel` projections.

The scope includes declared onsite component manufacture and machining, assembly, chemical or electrolytic surface treatment when performed, and engine run-in or acceptance testing when performed. Purchased castings, forgings, finished parts, electronics, ignition equipment, and other components cross the boundary as individual upstream product inputs in a concrete data package, even when this compact PCR does not prescribe a category-wide UUID for each model-specific part.

The scope excludes loose replacement parts, aircraft, propellers, turbine and reaction engines, compression-ignition engines, non-aircraft engines, maintenance and overhaul, use-phase combustion, infrastructure, research and development, and certification tests not attributable to the reporting period. Packaging, transport, organic coating, heat treatment, or other route-specific operations are included only when the factory-gate system performs or procures them; the data package must then add their individual atomic exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-or-rotary-internal-combustion-piston-engines-for-aircraft |
| classification_refs | CPC 3.0: 43131, exact classification context |
| covered_products | Completed spark-ignition reciprocating or rotary internal-combustion piston engines intended for aircraft propulsion or aircraft-installed power |
| excluded_products | Engine parts; compression-ignition or non-aircraft engines; turbine and reaction engines; aircraft and propellers; repaired, overhauled, or remanufactured engines without a reviewed extension |
| representative_product | One declared model of completed, accepted aircraft spark-ignition piston engine in its stated net-dry factory-gate configuration |
| production_route | Model-specific receipt of materials and parts, onsite manufacture and machining as applicable, assembly, conditional chemical/electrolytic treatment, and conditional run-in or acceptance testing |
| market_state | Accepted finished engine at the factory gate, unpackaged, with included accessories, preservation state, and net-dry mass exclusions declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A completed spark-ignition reciprocating or rotary internal-combustion piston engine intended for aircraft |
| How much | 1 kg net dry mass of the accepted engine at the factory gate |
| How well | Conforms to the declared engine model or type design, release requirements, configuration, rated power, and fuel, oil, cooling, and ignition specifications |
| How long or cycle | One completed manufacturing and factory-release cycle; use, maintenance, overhaul, and service life are outside this factory-gate functional unit |
| reference_flow_link | The reference flow is exactly 1 kg of the declared accepted engine configuration; every inventory amount is normalized to that mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Spark-ignition reciprocating or rotary internal combustion piston engines for aircraft `c2f3c29e-d5cd-4267-a518-74b0131a7914` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer and model; reciprocating or rotary architecture; cylinder arrangement or rotor configuration; ignition and fuel-system type; cooling method; displacement; supercharging status; rated power and conditions; approved fuel and oil specifications; included accessories; net-dry mass method and exclusions; certification or release basis; production route; site and geography; reporting period; factory-gate state |

All `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_dry_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the accepted engine in the declared net-dry configuration. Include integral accessories; exclude test fuel, removable shipping fixtures, and fluids excluded by the declared dry-mass convention. State every inclusion and exclusion. |
| `inventory_mass_normalization` | mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg reference product | Divide the reporting-period exchange by conforming reference-engine net dry mass from the same allocation pool. Do not normalize by packaged mass. |
| `energy_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered energy and convert kWh to MJ using 1 kWh = 3.6 MJ. Do not treat the Mass property UUID attached to the TianGong electricity identity as a mass unit. |
| `gas_volume_conditions` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volume at the supplier or meter reference temperature and pressure and disclose those conditions. |
| `wastewater_mass_conversion` | wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass or flow-meter records. Convert volume only with recorded density or a documented water-like-density assumption for the measured stream. |

## 5. System Boundary

The foreground boundary begins when purchased materials, components, consumables, energy, and water cross the reporting-site gate and ends when a conforming finished engine in the declared net-dry state is released. Upstream production is represented by linked supplier-specific or suitable secondary datasets.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material and component state at the reporting-site gate, including alloy designation, supplied form, recycled-content claim when used, completion level, supplier geography, and embodied casting, forging, heat treatment, coating, or other upstream work |
| starting_condition_role | Prevents double counting or omission between supplier datasets and onsite shaping, machining, treatment, assembly, and testing |
| product_classification_scope | Completed CPC 43131 aircraft spark-ignition reciprocating or rotary piston engines; classification is contextual and does not replace the semantic boundary |
| recursive_input_rule | If a complete same-category engine enters for integration, testing, or another declared operation, record it as an external input with its upstream dataset; internal work-in-progress is a process link, not a second reference product |
| upstream_dataset_requirement | Every purchased material, part, consumable, fuel, electricity supply, water supply, and external treatment requires a state-matched, representative upstream dataset |
| disclosure | Declare sites and operations, outsourced work, cut-offs, allocation pools, treatment and test routes, engine configuration, net-dry convention, period, geography, and deviations from this boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground system | Include attributable onsite handling, component manufacture, machining, cleaning, assembly, surface treatment, testing, rework, direct emissions, and waste generation between the declared start and release. | `ec-pef-method-2021` |
| `sb_supplier_boundary` | purchased inputs | Link each purchased input or outsourced operation to an upstream dataset matching the received state; do not duplicate embodied operations onsite. | `ec-pef-method-2021` |
| `sb_conditional_routes` | conditional processes | Include chemical/electrolytic surface treatment and engine testing only when performed within or attributable to the boundary; record each actual chemical, fuel, waste, and emission as an atomic exchange. | `ec-jrc-stm-bref-2006`, `faa-ac-33-2b` |
| `sb_completeness` | all foreground exchanges | A cut-off is not permitted merely because this compact pattern lacks a row. Add model- and route-specific atomic rows for all material exchanges and direct elementary emissions that occur. | `ec-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `engine_manufacturing_and_assembly` | Engine component manufacture, machining, assembly, and release | `required` | Always include; distinguish onsite from embodied supplier operations | Foreground production and reference-product release | Per 1 kg net dry mass released |
| `chemical_surface_treatment` | Chemical or electrolytic surface treatment | `conditional` | Include when chemical/electrolytic cleaning, conversion coating, anodizing, plating, or related water-based treatment is attributable | Foreground conditioning | Per 1 kg net dry mass released |
| `engine_test` | Engine run-in or acceptance testing | `conditional` | Include when a fueled or electrically driven run-in, functional, detonation, calibration, or acceptance test is attributable | Foreground quality release | Per 1 kg net dry mass released |

### Process: Engine component manufacture, machining, assembly, and release (`engine_manufacturing_and_assembly`)

#### Inputs

##### Product flows

###### Aluminium alloy input (`mfg_aluminium_alloy`)

Record unwrought aluminium alloy only when that state crosses the site boundary; other supplied forms require state-matched flows.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to conforming-engine production, net of returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ec-pef-method-2021`

###### Alloy-steel bars and rods input (`mfg_alloy_steel`)

Record the declared hot-worked alloy-steel bar or rod grade; other forms require separate rows.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to conforming-engine production, net of returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ec-pef-method-2021`

###### Purchased electricity for manufacture and assembly (`mfg_electricity`)

Record electrical energy metered or allocated to manufacture, machining, assembly, inspection, and release.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered energy after documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_utilities`
- Sources:

###### Cutting fluid consumed in machining (`mfg_cutting_fluid`)

Record make-up cutting fluid and disclose formulation, concentration, water addition, recovery, and return.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: issued make-up mass less documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_consumables`
- Sources:

###### Lubricating oil consumed in manufacture and assembly (`mfg_lubricating_oil`)

Record oil consumed by product-dedicated operations; exclude oil reported again in testing.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: issued mass less documented recovered or returned mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_consumables`
- Sources: `faa-ac-33-2b`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted aircraft engine (`reference_aircraft_engine`)

Record only engines meeting the declared release state and net-dry convention.

- Selected flow: Spark-ignition reciprocating or rotary internal combustion piston engines for aircraft `c2f3c29e-d5cd-4267-a518-74b0131a7914`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg after normalization from measured conforming-engine net dry mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ec-pef-method-2021`, `faa-ac-33-2b`

##### Waste flows

###### Aluminium scrap from manufacture (`mfg_aluminium_scrap`)

Keep aluminium scrap separate from ferrous and mixed scrap; disclose contamination and destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured aluminium scrap transferred out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_wastes`
- Sources:

###### Steel scrap from manufacture (`mfg_steel_scrap`)

Keep steel scrap separate from aluminium and mixed scrap; disclose alloy family, contamination, and destination.

- Selected flow: Steel scrap `db39c2c0-61a0-4dde-8d68-db5777fe25a8`
- Flow property / unit: Mass / kg
- Amount rule: measured steel scrap transferred out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_wastes`
- Sources:

###### Waste cutting oil (`mfg_waste_cutting_oil`)

Record spent cutting oil leaving for recovery or treatment; do not combine it with other oils or coolants.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured spent cutting-oil mass transferred out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_wastes`
- Sources:

##### Elementary flows

### Process: Chemical or electrolytic surface treatment (`chemical_surface_treatment`)

#### Inputs

##### Product flows

###### Purchased electricity for surface treatment (`surface_electricity`)

Record electrical energy for treatment baths, rectifiers, pumps, ventilation, rinsing, and drying.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered energy attributable to included treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-jrc-stm-bref-2006`

###### Process water for surface treatment (`surface_process_water`)

Record treatment, cleaning, and rinsing water; cooling water requires a separate row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-jrc-stm-bref-2006`

###### Sodium hydroxide for alkaline treatment (`surface_sodium_hydroxide`)

Record only when an alkaline cleaning, etching, or treatment step uses it; state solution concentration and mass basis.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass on the declared concentration basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-jrc-stm-bref-2006`

###### Gaseous natural gas for bath heating or drying (`surface_natural_gas`)

Record only direct foreground combustion for included bath heating or drying.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater from surface treatment (`surface_wastewater`)

Record wastewater leaving treatment or rinsing before offsite treatment; state composition, treatment state, destination, and density conversion.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured mass or converted metered volume transferred out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-jrc-stm-bref-2006`

##### Elementary flows

###### Fossil carbon dioxide from direct natural-gas combustion (`surface_carbon_dioxide_fossil`)

Record only direct foreground fossil carbon dioxide; exclude upstream supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or carbon-balance calculation from metered fuel
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

### Process: Engine run-in or acceptance testing (`engine_test`)

#### Inputs

##### Product flows

###### Aviation gasoline consumed in engine testing (`test_aviation_gasoline`)

Record only when the test uses aviation gasoline; state grade, lead status, schedule, and fuel return.

- Selected flow: Aviation gasoline `60324705-7a75-4213-82e6-30e7b9a24bc9`
- Flow property / unit: Mass / kg
- Amount rule: measured fuel supplied minus unused fuel returned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_engine_test_records`
- Sources: `faa-ac-33-2b`

###### Purchased electricity for engine testing (`test_electricity`)

Record test-cell controls, instruments, ventilation, pumps, and dynamometer loads.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered test-cell electricity after documented allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_engine_test_records`
- Sources:

###### Lubricating oil consumed in engine testing (`test_lubricating_oil`)

Record oil consumed or removed from the balance; exclude oil retained when the reference state includes it.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: oil charged minus recovered oil and oil retained in the declared product state
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine_test_records`
- Sources: `faa-ac-33-2b`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from engine testing (`test_carbon_dioxide_fossil`)

Record direct test-cell fossil carbon dioxide; exclude upstream fuel production emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured exhaust mass or carbon-balance calculation from consumed fossil carbon
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine_test_records`
- Sources:

###### Fossil carbon monoxide from engine testing (`test_carbon_monoxide_fossil`)

Record direct fossil carbon monoxide emitted to air during the included schedule.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured concentration integrated with exhaust flow and test duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine_test_records`
- Sources:

###### Nitrogen oxides from engine testing (`test_nitrogen_oxides_air`)

Record measured nitrogen oxides under the declared reporting convention. No exact TianGong UUID is confirmed; keep the species convention and reported-as basis explicit.

- Selected flow: Nitrogen oxides emitted to air
- Flow property / unit: Mass / kg
- Amount rule: measured concentration integrated with exhaust flow and test duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry mass released
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_engine_test_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision` | shared facilities and processes | First subdivide meters, issue records, test logs, and waste records by model, line, batch, or time so only attributable exchanges remain. | `ec-pef-method-2021` |
| `alloc_physical` | inseparable shared exchanges | When subdivision is not feasible, allocate by a documented causal physical driver such as machine hours, test-cell hours, treated area, or net dry mass. | `ec-pef-method-2021` |
| `alloc_nonphysical` | residual multifunctionality | Use economic or another nonphysical allocation only after documenting why subdivision and a causal physical relation are infeasible; disclose period, basis, sensitivity, and rows. | `ec-pef-method-2021` |
| `alloc_scrap` | aluminium and steel scrap | Report generated scrap as waste at the gate. Do not subtract avoided-primary-material credits; any recycling allocation belongs in a separately declared lifecycle model. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `engine_manufacturing_and_assembly` | aluminium alloy and alloy-steel inputs | ERP issues/returns, receipts, and bill of materials | UUID; specification; state; supplier; lot; issued and returned mass; model; output mass | reconcile net issues to model-specific production orders | kg | each transaction; monthly aggregation | common period, normally at least 12 months | every included site | sum net issues by atomic material and divide by conforming output mass | approved bill; certificates; scale and ERP reconciliation |
| `cp_manufacturing_utilities` | `engine_manufacturing_and_assembly` | electricity | dedicated/shared meters | meter; readings; multiplier; allocation driver; downtime; output mass | dedicated meter or reconciled causal allocation | kWh and MJ | continuous/shift; monthly | full reporting period | included operations | subtract nonproduction loads, allocate, convert, normalize | calibration; invoices; allocation and hours |
| `cp_manufacturing_consumables` | `engine_manufacturing_and_assembly` | cutting fluid and lubricating oil | purchase, issue, make-up, recovery, and return | UUID; formulation; concentration; issued, returned and recovered mass; destination; model | mass balance each named consumable | kg | each transaction; monthly | full reporting period | included machining and assembly | issue minus return and recovery, normalized | stock reconciliation; tickets; specifications; scales |
| `cp_manufacturing_wastes` | `engine_manufacturing_and_assembly` | aluminium scrap, steel scrap, and waste cutting oil | transfer notes and container weights | UUID; material; contamination; gross/tare; destination; route; order | weigh each segregated transfer and reconcile stocks | kg | each transfer; monthly | full period with opening/closing stock | included operations | transfers plus closing minus opening stock, normalized | manifests; scale calibration; inventory; receipt |
| `cp_surface_treatment_records` | `chemical_surface_treatment` | utilities, sodium hydroxide, wastewater, and CO2 | meters, bath sheets, issues, wastewater and fuel records | route; readings; concentration; mass; batch; treated basis; wastewater; density; gas conditions; carbon factor | collect each atomic exchange and reconcile balances | kg, m3, kWh, and MJ | batch/continuous; monthly | every included campaign | each included treatment line | causal treated-area, batch-time, or mass allocation, normalized | calibration; bath logs; analysis; invoices; transfers |
| `cp_engine_test_records` | `engine_test` | fuel, electricity, oil, and exhaust | fuel/oil balances, meters, schedule, exhaust measurements, fuel analysis | serial/model; test; time/load/speed; fuel; mass in/return; electricity; oil; exhaust flow; CO/NOx/CO2; carbon | collect every test with calibrated instruments or approved carbon balance | kg, kWh, MJ, m3, concentration | every test | all included tests | included test cell and engines | sum by model, subtract returns, normalize | test report; calibration; fuel certificate; release; workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized exchange = allocated reporting-period exchange / conforming-engine net dry output mass in the same pool | allocated exchange; output mass | exchange per 1 kg reference product | `ec-pef-method-2021` |
| `calc_electricity_mj` | electricity | MJ = metered kWh × 3.6 | kWh | MJ |  |
| `calc_net_consumable` | cutting fluid and oil | net consumed = issued − unused return − recovered mass crossing back over the boundary | issue, return, recovery | kg consumed |  |
| `calc_waste_stock` | wastes | generated = transferred out + closing stored − opening stored; keep identities separate | transfers and stocks | kg waste |  |
| `calc_direct_co2` | fossil CO2 | use measured mass or consumed fossil carbon balance; document carbon fraction, oxidation, and carbon assigned to CO | fuel and carbon-bearing emissions | kg fossil CO2 |  |
| `calc_exhaust_species` | test CO and NOx | integrate compatible concentration and exhaust flow over each segment; document reference conditions, moisture, molecular conversion, and NOx convention | concentration, flow, time, conditions | kg species |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve model, architecture, ratings, fuel, oil, cooling, ignition, configuration, accessories, dry-mass convention, release state, site, and period. | model definition; release and mass records; `faa-ac-33-2b` |
| `dq_completeness` | inventory | Reconcile bill of materials, utilities, consumables, wastes, and direct emissions; add atomic rows for actual exchanges absent here. | signed reconciliation and exclusions |
| `dq_temporal` | foreground data | Use one common period, normally at least 12 consecutive months; justify shorter campaigns and align stocks. | dated records and production summary |
| `dq_technology` | processes | Identify onsite/outsourced operations, treatment technology, test-cell configuration, and allocation drivers. | process map; supplier and equipment records |
| `dq_geography` | inputs and operations | State sites and supplier geographies and use upstream datasets matching received state and region. | declarations and dataset metadata |
| `dq_measurement` | meters, scales, analyzers | Retain calibration, conditions, detection limits, gaps, replacements, and precision evidence. | calibration and QA records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity` | product and reference flow | Fail when the product is not a completed aircraft spark-ignition reciprocating or rotary piston engine or required model, ratings, configuration, release, and net-dry qualifiers are missing. | `un-cpc-3-0-structure-2025`, `faa-ac-33-2b` |
| `vr_reference_amount` | reference product | Require output to equal exactly 1 kg after normalization and all denominators to use the same conforming net-dry output mass. | `ec-pef-method-2021` |
| `vr_atomic_inventory` | inventory rows | Reject plural collections, combined utilities/fuels, mixed wastes, generic emission groups, or a flow/property/unit mismatch. |  |
| `vr_conditional_processes` | surface treatment and test | Require applicable/not-applicable evidence. If applicable, require complete atomic chemical, utility, waste, fuel, and direct-emission records; a zero needs records. | `ec-jrc-stm-bref-2006`, `faa-ac-33-2b` |
| `vr_uuid_and_localization` | UUID-bearing flows | Require state-100 identity, compatible property/unit, and official TianGong Chinese baseName. Keep `test_nitrogen_oxides_air` unresolved until an exact read is approved. |  |
| `vr_mass_and_stock_reconciliation` | materials, product, waste | Require issue/return, product mass, segregated scrap, waste-oil stock changes, and documented residuals. | `ec-pef-method-2021` |
| `vr_allocation` | shared processes | Require subdivision first, then causal physical allocation; flag nonphysical allocation without infeasibility and sensitivity evidence. | `ec-pef-method-2021` |
| `vr_external_ranges` | quantitative ranges | Reject an externally inferred range lacking two independent, compatible, original-text-verified sources. This PCR supplies none; foreground records remain mandatory. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` only after representativeness and completeness review |
| downstream_use | Factory-gate process data, supplier product footprints, and lifecycle models that separately add installation, use, maintenance, overhaul, and end of life |
| allowed_use | Matching engine model, route, site/geography, period, net-dry configuration, and allocation context |
| excluded_use | Aircraft comparisons without downstream stages; use-phase fuel/emissions; maintenance/overhaul; other ignition types or applications; cross-model substitution without review |
| required_metadata | PCR id; product UUID; manufacturer/model; architecture/configuration; ratings; fuel/oil/cooling/ignition; accessories; net-dry convention; sites; period; routes; upstream datasets; allocation; unresolved UUIDs; cut-offs/deviations |
| required_quality_disclosure | primary-data share; meter/scale/analyzer coverage; calibration/uncertainty; bill and waste reconciliation; test coverage; temporal/geographic/technological representativeness; gaps/substitutions; review status |
| update_trigger | model, configuration, material, supplier state, site, route, treatment/test technology, fuel/oil, allocation, period, material-gap correction, or unresolved-UUID confirmation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-05 | CPC 43131 identity and separation from parts and other engines |
| `faa-ac-33-2b` | `official_guidance` | U.S. Federal Aviation Administration, AC 33-2B, Aircraft Engine Type Certification Handbook, 30 June 1993, https://www.faa.gov/documentlibrary/media/advisory_circular/ac%2033-2b.pdf, retrieved 2026-09-05 | Reciprocating-engine model descriptors, ratings, fuel, oil, coolant, ignition, dimensions, dry weight, and test qualifiers |
| `ec-pef-method-2021` | `official_guidance` | European Commission, Product Environmental Footprint Method, Annexes 1 to 2 to Recommendation (EU) 2021/2279, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf, retrieved 2026-09-05 | Functional unit/reference flow, boundary, company-specific bill of materials and manufacturing inventory, quality, and allocation hierarchy |
| `ec-jrc-stm-bref-2006` | `official_guidance` | European Commission Joint Research Centre, Surface Treatment of Metals and Plastics BREF, adopted August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics, retrieved 2026-09-05 | Conditional chemical/electrolytic treatment boundary, water-based operations, and associated activities |
