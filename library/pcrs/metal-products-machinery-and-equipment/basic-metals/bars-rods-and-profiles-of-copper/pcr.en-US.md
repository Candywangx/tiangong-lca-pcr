---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-and-profiles-of-copper
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bars, rods and profiles, of copper

## 1. Scope and Applicability

This PCR covers factory-gate production of wrought copper or copper-alloy bars, rods and profiles with a uniform solid cross-section. It covers integrated or purchased-precursor routes using melting and casting, extrusion, rolling, drawing, heat treatment, surface cleaning, straightening and sawing when those operations occur within the reporting facility.

Wire supplied in coils, plates, sheets, strip, foil, hollow tubes and pipes, unwrought cathodes or billets sold without the working needed to become a bar, rod or profile, and fabricated articles that have acquired a more specific function are excluded. Transport after the factory gate, customer machining, use and end-of-life are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-and-profiles-of-copper |
| classification_refs | CPC 3.0: 41512, Bars, rods and profiles, of copper |
| covered_products | Solid copper and copper-alloy bars and rods supplied in straight lengths; solid constant-cross-section copper and copper-alloy profiles, whether coiled or straight, that do not meet the definitions of wire, flat products, foil, tubes or pipes |
| excluded_products | Copper wire in coils; wire-bars and billets that remain unwrought feed; plates, sheets, strip and foil; tubes, pipes and fittings; powder and flakes; castings or fabricated articles with a more specific product function |
| representative_product | Copper rod, with bar and profile form variants governed by the same mass-based rules and mandatory form disclosure |
| production_route | Integrated or purchased-precursor manufacture by casting where applicable, hot extrusion or rolling, optional cold drawing, optional heat treatment and surface treatment, and final straightening/cutting |
| market_state | Factory-gate saleable straight-length bar, rod or profile, or a coiled profile only when it is not wire; declared alloy grade, temper, dimensions and surface condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable copper or copper-alloy bar, rod or profile meeting the declared grade, form, dimensions, temper and surface specification |
| How much | 1 kg net conforming product at the factory gate |
| How well | Conforming to the declared product specification, with nonconforming offcuts and rejects excluded from net product mass |
| How long or cycle | One production reporting period, normally 12 consecutive months, covering representative campaigns for the declared product mix |
| reference_flow_link | The normalized output row `copper_rod_output` provides the representative reference product; datasets for bar or profile variants must retain the same mass basis and declare the different form. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Copper rod `d5e5708d-dac7-4278-b2a0-068ed90df983` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form: bar, rod or profile; refined-copper or alloy designation and composition; temper; cross-section and nominal dimensions; straight length or permitted profile coil state; surface treatment; recycled-content accounting method; manufacturing route; facility geography; reporting period |

When constructing a foreground data package, every required qualifier must be declared. The Tiangong Copper rod identity is the representative reference object and does not replace product-form disclosure for bar or profile datasets.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all copper-bearing inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize net conforming output to exactly 1 kg. Measure gross output, offcuts, rejects and returned internal scrap separately; do not count internally recycled copper twice as a new external input. |
| `gas_reference_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume with temperature, pressure and whether the reading is standard, normal or actual volume; convert only with documented reference conditions. |
| `electricity_energy` | electricity crossing the foreground boundary | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered energy record and document any kWh-to-MJ conversion; do not include upstream grid emissions as direct site emissions. |
| `solution_mass` | sodium-hydroxide solution | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered solution mass and active-ingredient concentration separately so solution mass is not confused with dry NaOH mass. |

## 5. System Boundary

The foreground boundary begins with externally supplied copper-bearing feed and other products crossing the facility gate and ends with net conforming bar, rod or profile released at the factory gate. For an integrated facility it includes relevant melting, holding, casting, extrusion or rolling, drawing, annealing, surface treatment, straightening, sawing, recirculation and on-site treatment operations. A purchased billet or other precursor is represented by its upstream product dataset; upstream mining, concentration, smelting, refining and off-site recycling are not recreated inside this foreground inventory.

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_form` | product category boundary | Include only worked products with a uniform solid cross-section that meet the declared bar, rod or profile form; exclude coiled wire and hollow tube or pipe. | `un-cpc-3-0-2025`; `cjeu-hydro-energo-2020` |
| `boundary_integrated_operations` | foreground operations | Include every manufacturing and on-site treatment operation controlled by the reporting facility that materially serves the reference product, and disclose which melting, casting, forming, heat-treatment and cleaning steps are present. | `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_products` | supplied feed, energy and chemicals | Link supplied cathode, billet, scrap accepted as a product or waste, energy, gases, water and chemicals to separate upstream datasets; do not place their upstream burdens in direct site exchanges. | `eu-jrc-nfm-bref-2017` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Externally supplied copper cathode, billet, or segregated copper-bearing feed entering the controlled manufacturing site; the selected starting condition and copper grade must be declared |
| starting_condition_role | Upstream product or waste input whose prior production or recovery is represented by a separate dataset |
| product_classification_scope | Solid worked copper and copper-alloy bars, rods and profiles corresponding to CPC 3.0 code 41512, subject to the physical form boundary above |
| recursive_input_rule | A same-category bar, rod or profile received for further drawing, annealing or finishing is recorded once as a product input with its own upstream dataset; its embedded production is not recursively rebuilt in the receiving process. |
| upstream_dataset_requirement | Use product- and geography-appropriate datasets for externally supplied copper feed, alloying content, electricity, fuel, gases, water and treatment reagents; disclose missing or proxy datasets. |
| disclosure | Declare the starting copper state, refined-copper or alloy grade, recycled-content accounting, included process sequence, internal copper recirculation, surface-treatment route, energy supply, water recirculation and factory-gate product state. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_manufacture` | Integrated manufacture and finishing of copper bar, rod or profile | required | Always; disclose which melting/casting, extrusion/rolling/drawing, annealing, cleaning, straightening and cutting operations are present and retain submetered records where available. | Foreground production from declared copper feed to factory-gate conforming product | Net kg of conforming bar, rod or profile released at the factory gate |

### Process: Integrated manufacture and finishing of copper bar, rod or profile (`integrated_manufacture`)

#### Inputs

##### Product flows

###### Copper feed (`cathode_copper_input`)

Record externally supplied cathode copper. A site receiving billet or same-category worked stock must preserve that specific identity in its foreground record and disclose the different starting condition; unlike copper-bearing feeds are not combined in one measured record.

- Selected flow: Cathode copper
- Flow property / unit: Mass / kg
- Amount rule: measured mass of externally supplied cathode copper charged to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copper_feed`
- Sources:

###### Electricity (`electricity_input`)

Record electricity for all included production and treatment operations. Exclude electricity embedded in upstream product datasets.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to the reference-product production system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

###### Natural gas (`natural_gas_input`)

Record gaseous natural gas combusted in melting, billet heating, holding, annealing or drying. Mark not applicable only when no natural gas crosses the foreground boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume attributable to the reference-product production system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas`
- Sources:

###### Industrial oxygen (`industrial_oxygen_input`)

Record delivered industrial oxygen used for fire refining or another declared on-site metallurgical operation, only when that route is present.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered industrial-oxygen volume consumed by applicable on-site operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product for a route using supplied oxygen
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_industrial_oxygen`
- Sources:

###### Process water (`process_water_input`)

Record process-water intake for casting cooling, equipment cooling, cleaning, rinsing and on-site treatment. Report recirculation separately and do not count the same closed-loop water repeatedly as external intake.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured gross process-water intake crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources:

###### Sodium hydroxide (`sodium_hydroxide_input`)

Record sodium-hydroxide solution used to neutralize spent pickling or rinsing water when treatment occurs within the foreground boundary. Retain solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered sodium-hydroxide solution mass used for attributable wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product for a route with on-site neutralisation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sodium_hydroxide`
- Sources:

##### Waste flows

No incoming waste row is prescribed. If copper-bearing waste is accepted as feed, add one foreground row for each specific waste identity and keep it separate from cathode copper and purchased product feed.

##### Elementary flows

No elementary input is prescribed. Direct environmental water abstraction, if present, must use its specific elementary-flow identity.

#### Outputs

##### Product flows

###### Net conforming copper rod (`copper_rod_output`)

Record net conforming factory-gate product after subtracting offcuts, rejects and work in progress. Copper rod is the representative Tiangong flow; bar and profile datasets retain the mass basis and declare their actual form.

- Selected flow: Copper rod `d5e5708d-dac7-4278-b2a0-068ed90df983`
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming product mass used as the normalization denominator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg net conforming reference product after normalization
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources:

##### Waste flows

Every externally transferred dross, filter dust, spent refractory, sludge, spent solution, offcut or reject must be added as its own specific waste flow in the completed foreground dataset. Internally returned copper is recorded in the mass-balance ledger and is not an external waste output.

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide_output`)

Record direct fossil carbon dioxide from foreground fuel combustion or a documented on-site carbon balance. Do not copy upstream electricity or supplied-material emissions into this direct output.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct stack emission or site-specific calculation from foreground fossil-carbon records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_co2`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared operations and treatment systems | Subdivide or meter product lines and stages before allocation whenever records permit. |  |
| `allocation_internal_copper` | internally returned copper-bearing material | Treat internal recirculation as an internal loop: record its mass for balance and quality control, but assign neither a new upstream burden nor an external co-product credit. | `eu-jrc-nfm-bref-2017` |
| `allocation_external_outputs` | externally transferred co-products and wastes | Where subdivision is infeasible, apply declared physical allocation when a causal physical relation exists; otherwise use justified economic allocation. Do not apply avoided-burden credit unless a separate consequential study is declared. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_copper_feed` | `integrated_manufacture` | cathode copper feed | weighbridge, invoice and charge record | identity; supplier; grade; recycled-content claim; gross mass; returns; charge mass | reconcile receipts to charge records | kg | each delivery and charge | complete reporting period | all product-serving lines | sum external charged mass by specific feed identity | calibrated scales, invoices, stock reconciliation and supplier specification |
| `cp_electricity` | `integrated_manufacture` | electricity input | meter and production log | meter id; readings; generated electricity; exports; allocation driver; downtime | read submeters or reconcile facility meter to equipment | MJ | at least monthly | complete reporting period | all included operations | net imports plus attributable generation less exports, after subdivision | meter calibration, bills and meter map |
| `cp_natural_gas` | `integrated_manufacture` | natural-gas input | fuel meter and invoice | volume; temperature; pressure; reference condition; heating value; equipment; hours | reconcile meters and invoices to operating logs | m3 | at least monthly | complete reporting period | all included gas-fired equipment | sum attributable gas at one documented reference condition | calibration, invoice reconciliation and fuel specification |
| `cp_industrial_oxygen` | `integrated_manufacture` | industrial-oxygen input | flow meter or delivery record | source; purity; pressure; reference condition; volume; operation | reconcile delivery or generation meter with route logs | m3 | each delivery or campaign | applicable campaigns | oxygen-using operations | sum attributable supplied volume at one reference condition | delivery tickets, meter checks and route logs |
| `cp_process_water` | `integrated_manufacture` | process-water intake | water meter and balance | source; intake; makeup; recirculation; blowdown; discharge | meter external intake and construct a water balance | kg | at least monthly | complete reporting period | all included water systems | sum external intake once; report recirculation separately | calibrated meters and water-balance reconciliation |
| `cp_sodium_hydroxide` | `integrated_manufacture` | sodium-hydroxide solution | delivery and dosing record | solution mass; concentration; batch; dosing point; treated-water volume | reconcile inventory with dosing logs | kg solution | each delivery and batch | applicable campaigns | on-site treatment | sum attributable solution mass and retain concentration | analysis certificates, stock reconciliation and dosing calibration |
| `cp_product_output` | `integrated_manufacture` | conforming product output | certified scale and release record | form; alloy; temper; dimensions; surface; gross output; offcuts; rejects; net mass | reconcile line output to release records | kg | each batch | complete reporting period | all covered products | sum released conforming mass by specification | scale calibration, release certificate and mass balance |
| `cp_direct_co2` | `integrated_manufacture` | direct fossil carbon dioxide | stack measurement or carbon ledger | equipment; measured emission; fuel carbon; fuel use; oxidation basis; biogenic fraction | monitor directly or retain a documented facility calculation | kg | each monitoring period or monthly | complete reporting period | all included direct fossil sources | sum direct foreground fossil CO2 only | monitoring QA or traceable carbon calculation and fuel records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory exchange | normalized amount = attributable reporting-period exchange / reporting-period net conforming product mass | exchange record; `cp_product_output` net mass | exchange per 1 kg reference product |  |
| `calc_copper_mass_balance` | copper-bearing feed, product, internal returns and external losses | Reconcile external copper-bearing inputs with conforming product, work-in-progress change, internal-loop inventory change and each specific external copper-bearing output; investigate unexplained loss. | `cp_copper_feed`; `cp_product_output`; site mass-balance ledger | documented copper mass-balance closure | `eu-jrc-nfm-bref-2017` |
| `calc_solution_active_mass` | sodium-hydroxide solution | active NaOH mass = delivered solution mass × measured mass fraction; retain both values | `cp_sodium_hydroxide` mass and concentration | kg active NaOH and kg delivered solution |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Report form, copper or alloy designation, composition, temper, dimensions, surface condition and route for each aggregated product group. | specification, analysis certificate and release record |
| `dq_process_coverage` | foreground system | Document the actual sequence and demonstrate that all product-serving melting, casting, forming, heat-treatment, cleaning, extraction and treatment operations are included or justified as excluded. | flow diagram, equipment list and meter map |
| `dq_atomic_outputs` | waste and elementary exchanges | Add each actual external waste and direct elementary emission as a separate specific flow; a collective label is not an acceptable dataset exchange. | manifests, treatment records, permits and monitoring reports |
| `dq_temporal_representativeness` | all records | Cover a representative reporting period and material campaigns for the declared product mix; explain shutdowns, trials and abnormal campaigns. | dated production, meter, maintenance and quality records |
| `dq_reconciliation` | material, water and energy | Reconcile supplier records, meters, inventories and product output; document allocation where shared meters remain. | signed reconciliation, calibration records and retained source documents |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm exactly 1 kg net conforming bar, rod or profile and all required qualifiers. | `un-cpc-3-0-2025`; `cjeu-hydro-energo-2020` |
| `validate_boundary` | foreground system | Confirm that the starting condition and actual integrated process sequence match included meters, records and upstream links. | `eu-jrc-nfm-bref-2017` |
| `validate_no_double_count` | copper and utilities | Confirm internal copper recirculation is not a new external input and upstream product burdens are not repeated as direct foreground emissions. |  |
| `validate_completeness` | waste and elementary outputs | Require each actual dross, dust, refractory, sludge, spent solution, offcut, reject, wastewater discharge and direct air emission to be a specific atomic exchange or demonstrated absent. | `eu-jrc-nfm-bref-2017` |
| `validate_ranges` | important flows | Treat absent external benchmark ranges as evidence gaps; retain foreground measurement and review unresolved range-evidence needs before publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after independent review and publication |
| downstream_use | Attributional modelling of factory-gate copper or copper-alloy bar, rod or profile |
| allowed_use | Use for the declared form, alloy, route, geography, time and factory-gate boundary; aggregate only representative disclosed variants. |
| excluded_use | Wire, flat products, foil, tubes, unwrought copper, fabricated components, materially different undisclosed alloys or routes, and cradle-to-grave results |
| required_metadata | PCR id and version; form; alloy and composition; temper; dimensions; surface treatment; starting state; recycled-content accounting; sequence; geography; technology; period; allocation; cut-offs; upstream dataset identities; data quality |
| required_quality_disclosure | Meter coverage; mass, water and energy reconciliation; shared-meter allocation; missing atomic outputs; unresolved cathode-flow UUID; absent external benchmark ranges; proxies; abnormal operations; review status |
| update_trigger | Material change in product mix, copper feed, recycled-content method, forming or treatment route, energy or water system, controls, allocation, geography, or a new exact UUID or independently supported range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, code 41512, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official classification identity and hierarchy |
| `cjeu-hydro-energo-2020` | official_guidance | Court of Justice of the European Union, Judgment of 18 June 2020, Case C-340/19, Hydro Energo, ECLI:EU:C:2020:488, paragraphs 37-44 and Chapter 74 definitions reproduced in the judgment, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62019CJ0340 (retrieved 2026-09-04) | Physical distinction among bars/rods, profiles, wire, tubes and unwrought precursors |
| `eu-jrc-nfm-bref-2017` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, 2017, Sections 3.1.3, 3.1.4 and 3.3.5.2, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf (retrieved 2026-09-04) | Process sequence, boundary, water recirculation, surface treatment, residue and emission completeness |
