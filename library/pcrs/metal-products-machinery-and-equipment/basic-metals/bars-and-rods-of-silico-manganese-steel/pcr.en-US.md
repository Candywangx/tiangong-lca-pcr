---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-silico-manganese-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bars and rods of silico-manganese steel

## 1. Scope and Applicability

This PCR applies to foreground conversion of reheated silico-manganese-steel billets or blooms into saleable solid bars and rods. The gate-to-gate boundary begins when reheated, grade-identified semi-finished steel enters the rolling or forming line and ends with inspected, cut or otherwise finished bars and rods ready to leave the mill. Upstream alloy-steel production and feedstock reheating are represented by linked supplier datasets.

The category covers straight or cut-length solid silico-manganese-steel bars and rods, including route-specific hot forming and any declared subsequent straightening, heat treatment, cold finishing or surface conditioning that remains within the sold product specification. It excludes irregularly wound hot-rolled wire rod, steel wire, high-speed-steel bars and rods, hollow drill bars and rods, generic other-alloy-steel products without a verified silico-manganese grade, fabricated articles, use and end-of-life. Official CPC and Chinese tariff sources distinguish this product from irregularly wound silico-manganese wire rod.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-silico-manganese-steel |
| classification_refs | CPC 3.0: 41272, exact semantic reference |
| covered_products | Solid, straight or cut-length bars and rods whose declared steel grade is silico-manganese steel; hot-formed products and declared subsequent finishing remain covered |
| excluded_products | Irregularly wound wire rod; wire; hollow drill bars or rods; high-speed steel; stainless steel; other alloy-steel grades without verified silico-manganese composition; tubes, sections, flat products, fabricated articles and coated downstream products |
| representative_product | Inspected silico-manganese-steel bar or rod in the declared grade, section, dimensions, surface and delivery condition |
| production_route | Rolling or other declared bar/rod forming from reheated silico-manganese-steel billet or bloom, followed by route-specific cooling, straightening, cutting, heat treatment, cold finishing and surface conditioning |
| market_state | Solid bar or rod ready for dispatch at the mill gate; net steel mass excludes transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of specification-conforming silico-manganese-steel bars or rods at the mill gate |
| How much | 1,000 kg net saleable product |
| How well | Conforms to the declared silico-manganese steel grade, composition, mechanical properties, dimensions, tolerances, surface condition and delivery specification |
| How long or cycle | One reporting-period production aggregate, traceable to heats, lots or campaigns and normalized to 1,000 kg saleable output |
| reference_flow_link | The functional unit is realized by the single reference product flow below; no packaging or upstream semi-finished steel is part of the reference amount |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Bars and rods of silico-manganese steel `41d463a0-f0b7-42cd-a183-f69f39a31b01` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | silico-manganese steel grade and governing specification; heat or lot identity; bar or rod form; solid cross-section and nominal dimensions; forming route; any cold finishing, heat treatment or surface conditioning; mechanical properties and tolerances; surface and delivery condition; site and geography; reporting period; upstream billet-or-bloom and reheating datasets; electricity voltage and supply geography; gas and oxygen reference conditions; water recirculation boundary; scrap and scale destination; net product mass; packaging exclusion; mill-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all steel-bearing inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry steel mass at the declared weighing point. Exclude packaging from the 1,000 kg reference amount and report scale, crop scrap and rejects separately. |
| `energy_basis` | Purchased electricity and fuel energy | Energy | MJ | Preserve the meter unit and conversion factor. Convert kWh to MJ with 1 kWh = 3.6 MJ; do not mix fuel volume and energy without a documented reference condition and heating value. |
| `gas_reference_conditions` | Natural gas and industrial oxygen | Volume | m3 | Record the temperature, pressure, dry/wet basis and meter correction used for each gas volume; do not compare or aggregate volumes at different reference conditions. |
| `period_normalization` | All variable inventory exchanges | Row-specific property | Row-specific unit | Aggregate records over the same representative period, then normalize each exchange to 1,000 kg conforming reference product. Keep non-conforming output and downtime records in the reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Reheated silico-manganese-steel billet or bloom, identified by grade, heat or lot, mass, dimensions, temperature state, supplier and upstream dataset |
| starting_condition_role | Upstream product input at the rolling/forming-line gate |
| product_classification_scope | Solid bars and rods of silico-manganese steel; irregularly wound wire rod, wire, hollow drill products and other alloy grades are outside the category |
| recursive_input_rule | A purchased input already meeting this PCR's bar-or-rod product identity is recorded as an upstream product input with its supplier dataset and is not recursively remodelled as foreground production |
| upstream_dataset_requirement | Link grade- and geography-representative datasets for alloy-steel billet or bloom production and feedstock reheating; disclose technology, recycled-content accounting, allocation method and any gap between supplier and foreground gates |
| disclosure | Declare forming and finishing routes, included equipment, cold-finishing or heat-treatment steps, site and period, upstream dataset links, internal recirculation, exported energy, water reuse, scrap/scale recovery, wastewater treatment, packaging exclusion and any process excluded from the foreground boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | Foreground conversion | Begin at receipt of reheated, grade-identified billet or bloom and end at mill-gate release of conforming bars or rods; represent earlier steelmaking and reheating with linked upstream datasets. | `worldsteel-lci-methodology-2017` |
| `boundary_route_disclosure` | Route-dependent operations | Include every on-site rolling, forming, cooling, straightening, cutting, heat-treatment, cold-finishing, conditioning, emission-control and wastewater-treatment operation used for the declared product; explicitly mark absent operations. | `eu-ferrous-metals-bat-2022` |
| `boundary_direct_exchanges` | Direct releases and recovered residues | Record each direct emission, wastewater stream, scrap stream and mill-scale stream as an individual exchange at the point it crosses the foreground boundary; do not hide internal recycling or net unlike streams together. | `eu-ferrous-metals-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bar_rod_conversion` | Bar and rod rolling, finishing and dispatch | `required` | Always; route-specific unit operations and their atomic exchanges are marked applicable or not applicable from production records | Foreground conversion of reheated silico-manganese-steel billet or bloom to saleable bar or rod | 1,000 kg conforming net product |

### Process: Bar and rod rolling, finishing and dispatch (`bar_rod_conversion`)

This integrated foreground process covers the actual forming line and all on-site route operations used for the declared product. The producer must add any material direct exchange not represented below as another atomic row; the listed rows are the common minimum, not permission to omit measured site exchanges.

#### Inputs

##### Product flows

###### Reheated silico-manganese-steel billet or bloom (`received_reheated_billet`)

Record grade-matched reheated semi-finished steel entering the forming line. Reconcile received mass, return material and stock change to the same reporting period.

- Selected flow: Reheated billet or bloom for rolling, silico-manganese steel `6a4763f3-b854-41b4-9780-6e06eedeb322`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass entering the foreground forming line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming silico-manganese-steel bars or rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `worldsteel-lci-methodology-2017`

###### Purchased electricity (`purchased_electricity`)

Record delivered medium-voltage electrical energy consumed by rolling, drives, cooling, cutting, finishing, controls and allocated auxiliaries. The exact Tiangong UUID remains unresolved; declare voltage, grid geography, supplier and metering boundary.

- Selected flow: Medium-voltage electricity
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased electricity less separately metered exports, converted without changing the recorded supply attributes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming silico-manganese-steel bars or rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gases`
- Sources: `eu-ferrous-metals-bat-2022`

###### Gaseous natural gas (`natural_gas`)

Include natural gas only when it crosses the boundary for post-heating, heat treatment, direct-fired conditioning or another declared on-site operation. Do not include upstream electricity-generation fuel.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume at the declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming product for routes using natural gas
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gases`
- Sources: `eu-ferrous-metals-bat-2022`

###### Industrial oxygen (`industrial_oxygen`)

Include purchased or boundary-crossing industrial oxygen only for declared oxy-fuel heating, oxygen-assisted scarfing or another measured route operation. Exclude oxygen already embodied in an upstream dataset.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered oxygen volume at the declared purity and reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming product for routes using industrial oxygen
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gases`
- Sources: `eu-ferrous-metals-bat-2022`

###### Process water (`process_water`)

Record make-up process water entering wet descaling, roll cooling, product cooling, quenching, cleaning or emission control. Measure make-up separately from recirculated internal water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming silico-manganese-steel bars or rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-ferrous-metals-bat-2022`

##### Waste flows

No waste input is required by this PCR. If a declared site consumes a waste-derived material or fuel, add it as one chemically and physically specific waste exchange with its own collection record and identity review.

##### Elementary flows

No elementary input is prescribed. Add any measured resource withdrawal that crosses the foreground boundary as an individual elementary flow rather than embedding it in process water or an upstream product dataset.

#### Outputs

##### Product flows

###### Conforming silico-manganese-steel bars or rods (`reference_product`)

Record net saleable output passing the declared specification and inspection criteria. Packaging is excluded from this mass.

- Selected flow: Bars and rods of silico-manganese steel `41d463a0-f0b7-42cd-a183-f69f39a31b01`
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output after period normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_product`
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record crop ends, cobbles, test pieces and rejected steel leaving the product system as post-industrial scrap. Keep internally recirculated steel visible in the mass balance and disclose its treatment separately.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap crossing the foreground boundary, net of documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming silico-manganese-steel bars or rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_and_wastewater`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Rolling mill scale (`mill_scale`)

Record iron-oxide scale removed from the product or recovered from water treatment. Declare oil content, collection point and reuse or disposal destination.

- Selected flow: Mill scale `763bdad1-b443-428a-89b6-371a6807fc6c`
- Flow property / unit: Mass / kg
- Amount rule: Weighed recovered scale crossing the foreground boundary, corrected for declared moisture only when the correction is documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming silico-manganese-steel bars or rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_and_wastewater`
- Sources: `eu-ferrous-metals-bat-2022`

###### Treated steel-rolling wastewater (`rolling_wastewater`)

Include treated wastewater only when it leaves the foreground boundary. Keep process-water recirculation internal and declare treatment level, destination and monitored characteristics; the exact Tiangong UUID remains unresolved.

- Selected flow: Treated steel-rolling wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered wastewater discharged across the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming silico-manganese-steel bars or rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_and_wastewater`
- Sources: `eu-ferrous-metals-bat-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_to_air`)

Record direct fossil carbon dioxide from on-site natural-gas combustion used within this foreground process. Exclude emissions already represented in purchased electricity or upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured direct stack mass or a disclosed site calculation from metered fuel and verified carbon data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming product for routes using fossil fuel on site
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

###### Particulate matter to air, particle size unspecified (`particulate_matter_to_air`)

Record total direct particulate matter of unspecified size emitted from in-scope mechanical processing, scarfing, descaling, rolling or finishing after installed controls. Do not double count a separately reported size fraction.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Source-resolved measured or mass-flow-calculated direct emission after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming silico-manganese-steel bars or rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

###### Nitrogen oxides to air (`nox_to_air`)

Include nitrogen oxides from in-scope natural-gas combustion or other declared combustion only when emitted directly by the foreground process. The exact Tiangong UUID remains unresolved; state whether measurements and factors are reported as NO2-equivalent.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Source-resolved measured emission or disclosed calculation from monitored concentration and gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming product for routes with in-scope combustion
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Multi-product mill records | Prefer direct metering, heat/lot tracing and subdivision. Assign grade-specific billet, energy, gases, water, residues and emissions to the declared silico-manganese-steel product before any allocation. | `worldsteel-lci-methodology-2017` |
| `allocation_remaining_shared` | Shared utilities and auxiliaries | If subdivision is not practicable, allocate a shared exchange by the physical driver that causes it, such as metered operating time, processed mass or equipment energy; document the driver and test material alternatives. Do not default to revenue. | `worldsteel-lci-methodology-2017` |
| `allocation_scrap_scale` | Scrap, mill scale and other recovered residues | Report gross residue mass and destination. Do not subtract an avoided-production credit inside this gate-to-gate inventory; any recycling extension or system-expansion credit must be reported separately with its method and assumptions. | `worldsteel-lci-methodology-2017`; `eu-ferrous-metals-bat-2022` |
| `allocation_internal_recycling` | Internally returned steel and scale | Keep internal returns visible in the process mass balance but do not count an internal transfer as a second boundary output or an external scrap input. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `bar_rod_conversion` | reheated billet input and steel mass reconciliation | weighbridge, scale, heat and stock records | heat_or_lot_id; grade; input_mass; return_mass; stock_open; stock_close; timestamp; meter_id | reconcile calibrated scales to heat/lot and reporting-period stock movement | kg | each receipt or heat; monthly close | full representative reporting period | all lines producing declared product | sum grade-specific boundary input and reconcile stock change before normalization | calibration certificates; heat genealogy; stock reconciliation; exception log |
| `cp_energy_and_gases` | `bar_rod_conversion` | electricity, natural gas and industrial oxygen | utility meters, invoices and equipment sub-meters | carrier; meter_id; opening; closing; export; unit; voltage; supplier; geography; temperature; pressure; heating_value; purity; operating_route | read boundary and sub-meters and reconcile to invoices; separate route and non-production loads | MJ, kWh, m3 | shift or daily meter; monthly invoice close | same period as product mass | all in-scope equipment and allocated auxiliaries | aggregate by carrier and route, deduct separately metered exports only, then normalize | meter calibration; invoices; conversion sheet; outage and allocation log |
| `cp_water_balance` | `bar_rod_conversion` | process-water make-up and internal recirculation | inlet meters and water-balance records | inlet_mass_or_volume; source; recirculated_volume; blowdown; leak; meter_id; timestamp | meter boundary make-up and reconcile closed or semi-closed circuits | kg or m3 | daily or shift; monthly balance | same period as product mass | all in-scope water circuits | count only boundary-crossing make-up as input; retain recirculation as a disclosed internal metric | meter calibration; annual water audit; balance closure; maintenance log |
| `cp_finished_product` | `bar_rod_conversion` | conforming reference product | certified product scale, inspection and dispatch records | heat_or_lot_id; grade; product_form; dimensions; net_mass; disposition; inspection_status; timestamp | sum only specification-conforming net product mass; exclude packaging and rejected output | kg | each lot or dispatch; monthly close | full representative reporting period | all in-scope lines | aggregate conforming mass by declared product and normalize inventory to 1,000 kg | calibration; inspection certificate; dispatch record; rejection log |
| `cp_residues_and_wastewater` | `bar_rod_conversion` | scrap, mill scale and wastewater | waste scales, transfer notes, treatment logs and outlet meters | stream_id; material_or_water_identity; gross_mass; tare; moisture; oil_content; treatment; destination; outlet_reading; timestamp | weigh each solid stream and meter each liquid discharge separately; reconcile storage change | kg | each transfer or continuous meter; monthly close | same period as product mass | all residue stores and wastewater outlets serving in-scope operations | aggregate without netting unlike streams; separate internal return, external recovery and disposal | calibrated scale/meter; transfer manifest; laboratory result; treatment and stock log |
| `cp_direct_air_emissions` | `bar_rod_conversion` | fossil CO2, particulate matter and nitrogen oxides | continuous monitor, stack test, fuel meter and operating log | source_id; pollutant; concentration; gas_flow; duration; measured_mass; fuel_use; factor; factor_basis; control_status; timestamp | calculate source-specific mass from validated monitors or a documented fuel/emission calculation; exclude upstream emissions | kg | continuous where available or representative campaign; monthly aggregation | captures normal and documented abnormal operation in the reporting period | every in-scope direct emission source | sum pollutant mass by source, avoid overlap between total particulate and size fractions, then normalize | monitor QA/QC; accredited stack test; fuel analysis; factor provenance; control downtime log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_period_normalization` | Every variable inventory row | normalized amount = reporting-period boundary exchange / reporting-period conforming net product mass × 1,000 kg | reconciled row total; conforming net product mass | row amount per 1,000 kg reference product |  |
| `calc_steel_mass_balance` | Steel-bearing flows | mass-balance difference = reheated billet input - conforming product - external scrap - recovered mill scale - other separately measured steel-bearing outputs - stock change; investigate rather than force the balance to zero | mass records from `cp_material_mass_balance`, `cp_finished_product`, and `cp_residues_and_wastewater` | disclosed reconciliation difference and percentage of billet input | `eu-ferrous-metals-bat-2022` |
| `calc_energy_conversion` | Purchased electricity | MJ = metered kWh × 3.6; retain original kWh and voltage/supply metadata | metered kWh | purchased electricity in MJ |  |
| `calc_stack_mass` | Particulate matter and nitrogen oxides | source mass = validated concentration × standardized dry gas flow × operating duration, with unit, oxygen and moisture corrections documented; sum only non-overlapping pollutant definitions | monitor or test data; gas flow; duration; correction basis | direct pollutant mass by source | `eu-ferrous-metals-bat-2022` |
| `calc_fossil_co2` | Fossil carbon dioxide | Prefer measured source mass; otherwise calculate from metered fossil fuel and a site-verified carbon or emission factor and disclose oxidation, heating-value and reference-condition bases | fuel record; verified factor or carbon data | direct fossil CO2 mass | `eu-ferrous-metals-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and billet input | Preserve grade, heat/lot genealogy, form, dimensions, surface and delivery condition from feedstock receipt through finished inspection. | supplier certificate; heat record; inspection certificate |
| `dq_representativeness` | All foreground records | Use one common representative period and all in-scope production lines; disclose shutdowns, abnormal operation, outsourced finishing and any excluded campaign. | production calendar; line list; exception log |
| `dq_meter_control` | Mass, energy, gas and water | Use calibrated meters or documented invoice reconciliation and retain original readings, units, reference conditions and conversion factors. | calibration certificate; invoice; meter extract; conversion sheet |
| `dq_completeness` | Materials, waste, water and direct emissions | Reconcile process flow sheets with inventories of chemicals, wastewater and waste-gas streams; add each material direct exchange as an atomic row. | process flow sheet; chemical inventory; wastewater map; emission-source register |
| `dq_upstream_links` | Billet/bloom and reheating datasets | Use supplier- and geography-representative upstream datasets and disclose technology, recycled-content and allocation gaps. | supplier dataset metadata; gap assessment |
| `dq_unresolved_identity` | Electricity, wastewater and NOx rows | Keep the human-readable atomic flow and foreground measurement, but do not assign a Tiangong UUID until an exact state-100 identity with matching property and unit is confirmed. | unresolved manifest entry; future finalized search receipt |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Product category | Reject a dataset that does not establish silico-manganese steel grade and solid bar-or-rod form, or that represents irregularly wound wire rod, wire, hollow drill product or another alloy family. | `unsd-cpc-3-0-structure-2025`; `china-serbia-tariff-2024` |
| `validation_reference_flow` | Functional unit | Require exactly 1,000 kg net conforming reference product, with packaging excluded and all required qualifiers declared. |  |
| `validation_boundary` | Starting and ending gates | Require a grade-identified reheated billet-or-bloom input, explicit upstream billet and reheating datasets, and disclosure of every included forming and finishing operation. | `worldsteel-lci-methodology-2017` |
| `validation_atomic_inventory` | Inventory rows | Reject combined carriers, utilities, waste collections or emission groups. Each boundary exchange must have one physical or chemical identity, direction, flow type, property, unit, amount rule and applicability condition. | `eu-ferrous-metals-bat-2022` |
| `validation_mass_balance` | Steel-bearing flows | Require reported conforming product, scrap, mill scale, other steel-bearing outputs and stock change to reconcile with billet input; investigate and disclose the residual. | `eu-ferrous-metals-bat-2022` |
| `validation_no_double_count` | Energy, water, residues and emissions | Reject upstream emissions reported again as direct emissions, recirculated water counted as make-up, internal scrap counted as a boundary output, or particulate totals overlapping reported size fractions. | `worldsteel-lci-methodology-2017`; `eu-ferrous-metals-bat-2022` |
| `validation_data_period` | Foreground records | Require the same representative period and site scope for numerator exchanges and conforming product denominator, with abnormal-operation treatment disclosed. | `eu-ferrous-metals-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` and `background_dataset` after review and publication |
| downstream_use | Foreground packages for product LCIs and downstream process or lifecyclemodel construction requiring mill-gate silico-manganese-steel bar or rod supply |
| allowed_use | Grade-, route-, geography-, technology- and period-compatible modelling when the user preserves the declared starting condition, upstream links and allocation method |
| excluded_use | Irregularly wound wire rod, wire, high-speed steel, hollow drill bars, generic alloy steel without verified grade, fabricated products, cradle-to-gate claims without upstream links, or public comparative assertions without harmonized functional equivalence and review |
| required_metadata | PCR id and version; product UUID; grade/specification; heat/lot coverage; dimensions and delivery condition; forming and finishing route; site/geography; period; upstream billet and reheating datasets; voltage/supply mix; gas reference conditions; water boundary; allocation; scrap/scale/wastewater destinations; direct-emission methods; unresolved UUIDs |
| required_quality_disclosure | Data coverage and exclusions; meter and laboratory QA/QC; mass-balance residual; representativeness; supplier-data gaps; allocation sensitivity; abnormal-operation treatment; exact-versus-unresolved flow identities |
| update_trigger | Change in grade family, starting feed state, forming or finishing route, equipment, site, energy supply, water system, emission controls, allocation method, upstream datasets, or a material shift in mass/energy balance; confirmation of any unresolved UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, code 41272. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official classification identity and reference-product category |
| `china-serbia-tariff-2024` | `official_guidance` | Ministry of Finance of the People's Republic of China, 2024 China-Serbia preferential tariff schedule, tariff lines 72272000 and 72282000. https://m.mof.gov.cn/zcfb/202406/P020240625320768010766.pdf (retrieved 2026-09-04) | Professional Chinese product terminology and distinction from irregularly wound silico-manganese wire rod |
| `eu-ferrous-metals-bat-2022` | `standard` | European Commission, Commission Implementing Decision (EU) 2022/2110 establishing BAT conclusions for the ferrous metals processing industry. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110 (retrieved 2026-09-04) | Hot-rolling process decomposition; energy, water, chemical, wastewater, residue and direct-emission monitoring requirements; no BAT level is used as an empirical PCR range |
| `worldsteel-lci-methodology-2017` | `method_factor` | World Steel Association, Life Cycle Inventory Methodology Report, 2017. https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-04) | Steel-product factory-gate boundary, long-product applicability, technology/geography disclosure, allocation and scrap-accounting principles |
