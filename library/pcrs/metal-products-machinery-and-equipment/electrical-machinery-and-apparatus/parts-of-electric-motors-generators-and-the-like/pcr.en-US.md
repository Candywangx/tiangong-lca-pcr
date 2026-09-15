---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electric-motors-generators-and-the-like
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Parts of electric motors, generators and the like

## 1. Scope and Applicability

This PCR applies to separately supplied parts whose principal and declared function is in an electric motor, generator, alternator, or comparable rotating electrical machine. Covered parts include declared stator, rotor, armature, shaft, laminated core, winding, commutator, end shield, and other part configurations when they meet that boundary. The data package shall identify one actual part, not report a basket of different parts.

Complete motors, complete generators, generating sets, rotary converters, transformers, static converters, inductors, bearings sold as general-purpose bearings, control electronics, and installation or repair services are outside the product boundary. The reference product is an unpackaged, conforming part at the manufacturing site gate; customer-specific packaging, downstream transport, installation, use, repair, and end-of-life are excluded unless a study explicitly adds them as separate processes.

Every dataset shall declare the part type, machine application, construction or mounting interface, material composition, manufacturing route, insulation system where applicable, magnet type where applicable, net mass, geography, technology, and whether supplied new, remanufactured, or reclaimed. It shall not average unlike part types unless the declared product group, production shares, and representativeness are documented.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electric-motors-generators-and-the-like |
| classification_refs | CPC 3.0:46131, Parts of electric motors, generators and the like |
| covered_products | Separately supplied stators, rotors, armatures, shafts, laminated cores, windings, commutators, end shields, and other declared parts principally for electric motors, generators, alternators, or comparable rotating electrical machines |
| excluded_products | Complete rotating machines; generating sets; rotary converters; transformer, static-converter, or inductor parts; general-purpose bearings; control electronics; packaging as a reference product; repair and installation services |
| representative_product | One unpackaged, conforming, separately supplied electric-motor or generator part with the exact part type declared |
| production_route | As actually manufactured, including only applicable material preparation, forming, stamping, casting, machining, winding, insulation, impregnation, joining, cleaning, finishing, balancing, and testing operations |
| market_state | New, unpackaged, quality-released part at the manufacturing site gate; remanufactured or reclaimed state requires a separate declared scenario |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A separately supplied part that performs its declared mechanical, magnetic, conductive, insulating, or structural function in an electric motor, generator, or comparable rotating electrical machine |
| How much | 1 kg net mass of the unpackaged, conforming declared part |
| How well | Conforms to the declared drawing, material specification, dimensional tolerances, electrical or magnetic requirements, balancing status, and quality-release criteria applicable to the part |
| How long or cycle | One factory-gate delivery; no service life or operating cycle is assigned to the part-level reference flow |
| reference_flow_link | The 1 kg reference amount is output row `reference_product` from process `part_manufacture` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Parts of electric motors, generators and the like |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact part type; target machine application; drawing or part number; construction and mounting interface; material composition; electrical-steel grade and coating when applicable; conductor and insulation system when applicable; magnet chemistry, grade, coating, and magnetization state when applicable; manufacturing route; quality-release criteria; net mass; manufacturing geography; technology; new, remanufactured, or reclaimed state; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to measured net mass of conforming, unpackaged parts. Exclude shipping packaging, reusable carriers, and rejected parts from the denominator. |
| `count_to_mass` | records available only by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts using a product- and reporting-period-specific measured mean net mass; retain the count, sampled masses, sample size, and calculation. |
| `electricity_energy` | purchased and on-site electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered energy basis. When source records use kWh, apply the exact conversion 1 kWh = 3.6 MJ and do not treat electricity as a mass flow. |
| `gas_volume` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record supplier or meter volume with stated pressure, temperature, and reference conditions; convert only with documented conditions. |
| `wet_stream_mass` | process water, sodium hydroxide solution, and waste alkaline liquor | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered or discharged wet mass and declare concentration, solids content, or pH where relevant; do not substitute dry-solute mass without a documented conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, process chemicals, water, fuels, and electricity as received at the manufacturing site gate |
| starting_condition_role | Start of foreground part manufacture; upstream production and inbound transport are represented by linked supplier or background datasets rather than duplicated inside the foreground process |
| product_classification_scope | One declared separately supplied part within CPC 3.0:46131; complete rotating machines and parts for transformers, static converters, and inductors are excluded |
| recursive_input_rule | A purchased input that itself meets this PCR is recorded once as a product input with its supplier dataset; do not recursively re-create its upstream part manufacture unless the reporting site performs additional processing |
| upstream_dataset_requirement | Link each purchased material, component, chemical, fuel, electricity supply, and treatment service to a geography-, technology-, composition-, and delivery-state-appropriate dataset, or disclose the unresolved background gap |
| disclosure | Declare site, reporting period, part type, route, included unit operations, outsourced operations, upstream dataset choices, allocation, recycled-content and scrap treatment, direct-emission determination, exclusions, and any departures from this boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground boundary | Include all on-site operations required to convert received inputs into the declared unpackaged, quality-released part, including applicable forming, winding, insulation, impregnation, joining, cleaning, finishing, balancing, testing, and internal material handling. | `iec-ts-63573-1-2026` |
| `sb_material_identity` | material and process-chemical inputs | Record each material and process chemical as a separate atomic flow with composition, grade, delivered state, supplier geography, and quantity; do not collapse them into an unspecified material total. | `iec-82474-1-2025` |
| `sb_conditional_operations` | route-dependent operations | Include a route-dependent exchange only when the declared part route uses it; document absence as not applicable rather than inserting a generic proxy flow. |  |
| `sb_direct_releases` | direct site emissions and wastes | Include direct fossil carbon dioxide, NMVOC, PM10, waste alkaline liquor, and metal scrap when generated; use the actual measured or permitted emission compartment and actual waste destination. |  |
| `sb_downstream_exclusion` | downstream stages | End the default boundary at the site gate before customer-specific packaging. Downstream transport, installation, operation, maintenance, repair, and end-of-life are separate scenarios and shall not be embedded in the reference flow. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_manufacture` | Part manufacture and factory-gate preparation | required | Always include; individual exchanges apply only when used or generated by the declared part route | Foreground manufacture, finishing, quality control, and release of the declared unpackaged part | 1 kg net mass of conforming reference product |

### Process: Part manufacture and factory-gate preparation (`part_manufacture`)

#### Inputs

##### Product flows

###### Electrical-steel core stock (`electrical_steel_sheet`)

Record non-grain-oriented electrical steel sheet when the declared part contains a laminated stator or rotor core. Declare grade, thickness, coating, supplier, and whether annealing occurs at the reporting site.

- Selected flow: Non-grain-oriented electrical steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured received mass charged to the declared product, adjusted for opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `iec-ts-63573-1-2026`

###### Insulated winding conductor (`magnet_wire`)

Record magnet wire when the declared part contains a wound conductor. Declare conductor material, cross-section, insulation chemistry and class, grade, supplier, and delivered state.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: measured received mass charged to the declared product, adjusted for opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Aluminium casting stock (`aluminium_alloy_ingot`)

Record aluminium alloy ingot when aluminium is melted or cast on site for a rotor, housing, end shield, or other declared part. Declare alloy, primary or secondary content, physical state, and supplier geography.

- Selected flow: Aluminium alloy ingot
- Flow property / unit: Mass / kg
- Amount rule: measured received mass charged to the declared product, adjusted for opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Shaft-grade alloy-steel stock (`alloy_steel_bar`)

Record alloy-steel bar or rod when it is machined into the declared shaft or another load-bearing part. Declare alloy grade, dimensions, heat-treatment state, and supplier geography.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: measured received mass charged to the declared product, adjusted for opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Permanent-magnet input (`ndfeb_magnet`)

Record finished NdFeB magnets when installed in the declared permanent-magnet rotor or assembly. Declare magnet grade, coating, dimensions, magnetization state, supplier geography, and recycled content.

- Selected flow: NdFeB magnet `a598b760-108c-4d70-93f9-59098959141e`
- Flow property / unit: Mass / kg
- Amount rule: measured installed mass plus separately measured route loss attributable to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Slot and winding insulation (`electrical_insulation_paper`)

Record electrical insulation paper when installed in slots, phase barriers, or winding assemblies. Declare material construction, thickness, thermal class, grade, and supplier.

- Selected flow: Electrical insulation paper
- Flow property / unit: Mass / kg
- Amount rule: measured received mass charged to the declared product, adjusted for opening and closing inventory and separately recorded offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Winding impregnation resin (`impregnation_varnish`)

Record electrical winding impregnation varnish when the declared route impregnates or encapsulates a winding. Declare resin chemistry, solids content, solvent content, curing route, and supplier.

- Selected flow: Electrical winding impregnation varnish
- Flow property / unit: Mass / kg
- Amount rule: measured wet product mass consumed, adjusted for opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `iec-82474-1-2025`

###### Electricity supply (`electricity`)

Record electricity delivered to manufacturing, finishing, testing, abatement, and allocated auxiliaries. Declare grid or supplier mix, voltage, geography, on-site generation, and treatment of losses.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or invoice-reconciled electricity attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Natural-gas supply (`natural_gas`)

Record gaseous natural gas only when used on site for furnaces, ovens, heat treatment, curing, or other declared thermal operations. Declare composition, supply geography, pressure, and volume reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-invoiced gas volume attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Industrial-oxygen supply (`industrial_oxygen`)

Record industrial oxygen only when the declared cutting, brazing, welding, or thermal route consumes supplied oxygen. Declare purity, pressure, reference conditions, supply route, and on-site generation boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered cylinder, bulk-tank, or on-site-generation output volume attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Wet-process water (`process_water`)

Record process water only when it enters cleaning, rinsing, machining-fluid preparation, cooling make-up, or another declared manufacturing operation. Declare source, quality, delivery boundary, and any density conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balanced process-water mass attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources:

###### Alkaline-cleaning reagent (`sodium_hydroxide`)

Record sodium hydroxide only when used in an on-site alkaline cleaning bath. Declare delivered state, concentration, solution density where converted, supplier, and bath make-up or replenishment basis.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered product mass consumed by make-up and replenishment, adjusted for inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources: `iec-82474-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming declared part (`reference_product`)

Record only unpackaged parts that pass the declared quality-release criteria. Rejected parts, rework remaining in the reporting period, and customer-specific packaging are not reference product.

- Selected flow: Parts of electric motors, generators and the like
- Flow property / unit: Mass / kg
- Amount rule: 1 kg measured net mass of conforming, unpackaged reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Record steel skeletons, punchings, turnings, and rejected steel pieces leaving the foreground boundary as waste. Declare alloy family, contamination, collection state, and actual treatment destination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass leaving the site, net of documented internal closed-loop return before the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Copper scrap (`copper_scrap`)

Record conductor offcuts, rejected winding pieces, and other copper scrap leaving the foreground boundary. Declare insulation contamination, sorting state, and actual treatment destination.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass leaving the site, net of documented internal closed-loop return before the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Aluminium scrap (`aluminium_scrap`)

Record runners, gates, turnings, rejected castings, and other aluminium scrap leaving the foreground boundary. Declare alloy, contamination, collection state, and actual treatment destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass leaving the site, net of documented internal remelting before the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Spent alkaline-cleaning bath (`waste_alkaline_liquor`)

Record spent alkaline liquor only when an alkaline bath leaves the foreground boundary. Declare wet mass, pH, dissolved and suspended metal content, collection state, hazardous status, and treatment destination.

- Selected flow: Waste Alkaline Liquor `ca310225-50c8-4d41-8353-4338b41e19a1`
- Flow property / unit: Mass / kg
- Amount rule: measured wet waste mass transferred off site or to an on-site treatment process outside the declared boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon-dioxide release (`fossil_co2_air`)

Record fossil carbon dioxide emitted directly by on-site combustion or process reactions within the boundary. Exclude upstream electricity emissions and declare the actual source and emission subcompartment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: direct monitored value or documented fuel-carbon mass-balance result attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources:

###### Direct NMVOC release (`nmvoc_air`)

Record non-methane volatile organic compounds released directly from impregnation, coating, cleaning, or curing after capture and abatement. Exclude upstream releases and declare the source operation and emission subcompartment.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: direct monitored value or documented solvent mass-balance result after capture and abatement attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources:

###### Direct PM10 release (`pm10_air`)

Record PM10 released directly from cutting, grinding, machining, finishing, or combustion after capture and abatement. Declare the measurement method, source operation, and site-specific emission subcompartment.

- Selected flow: Particles (PM10), emission to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: direct monitored value or documented particulate mass balance after capture and abatement attributable to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared foreground operations | First subdivide lines, cells, meters, batches, and time records so the declared part receives its measured material, energy, waste, and emission exchanges. |  |
| `allocation_physical` | unavoidable shared operations | When subdivision is not possible, allocate by a documented causal physical driver such as machine time, processed mass, furnace charge, metered energy, or occupied capacity that reflects the operation. |  |
| `allocation_economic_fallback` | shared operations without a defensible physical driver | Use economic allocation only as a disclosed fallback, with reporting-period prices, sensitivity analysis, and an explanation of why subdivision and causal physical allocation were not feasible. |  |
| `allocation_scrap` | metal scrap and recovered outputs | Record scrap at the measured waste boundary and its actual destination. Do not embed an avoided-burden credit in the foreground inventory; any recycling scenario belongs in a separately declared downstream model. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `part_manufacture` | product material inputs and conforming output | weighing, goods-receipt, batch issue, bill-of-material, and inventory records | material identity; grade; supplier; state; opening inventory; receipts; issues; returns; closing inventory; conforming output mass; rejected mass | reconcile calibrated weighing and inventory records to production orders and declared part types | kg | each receipt or batch; aggregate monthly | representative continuous 12-month period or justified shorter campaign | all foreground lines and outsourced operations in scope | adjust for returns and inventory; assign by production order or documented allocation driver; divide by conforming net output mass | calibration records; stock reconciliation; production-order trace; supplier specification; variance review |
| `cp_energy_and_gas_records` | `part_manufacture` | electricity, natural gas, and industrial oxygen | submeter, utility invoice, tank, cylinder, and on-site generation records | meter identifier; readings; delivered quantity; unit; reference conditions; equipment; downtime; production order | reconcile submeter totals with site invoices or supply records and allocate only residual shared use with a declared driver | native energy or m3, converted to PCR unit | continuous or each delivery; aggregate monthly | representative continuous 12-month period or justified shorter campaign | all foreground equipment, auxiliaries, testing, and abatement in scope | subtract out-of-scope use, allocate shared remainder, and divide by conforming net output mass | meter calibration; invoice reconciliation; reference-condition statement; allocation worksheet |
| `cp_water_and_chemical_records` | `part_manufacture` | process water and sodium hydroxide | meter, tank, batch-makeup, concentration, purchase, and inventory records | water source; meter readings; chemical product; concentration; density; receipts; inventory; bath make-up; replenishment | reconcile meters and batch sheets with purchase and stock records | kg wet product | each batch or delivery; aggregate monthly | representative continuous 12-month period or justified shorter campaign | each wet-process line in scope | convert to wet mass with documented density when needed, adjust for inventory, assign to product route, and divide by output mass | meter calibration; supplier certificate; concentration test; bath log; inventory reconciliation |
| `cp_waste_records` | `part_manufacture` | metal scrap and waste alkaline liquor | waste scale ticket, container log, manifest, and treatment receipt | waste identity; wet or dry state; mass; tare; composition; contamination; hazardous status; destination; internal return | reconcile container-level weights and transfer documents with contractor records | kg | each transfer; aggregate monthly | same period as product output | all foreground lines and treatment boundaries in scope | subtract tare and internal return; assign by direct batch trace or declared allocation driver; divide by output mass | scale calibration; waste manifest; contractor receipt; mass reconciliation |
| `cp_air_emission_records` | `part_manufacture` | direct fossil CO2, NMVOC, and PM10 | continuous monitor, stack test, solvent balance, fuel-carbon balance, or permitted engineering record | pollutant; source; concentration; flow; duration; fuel or solvent input; capture; destruction efficiency; subcompartment; method | use monitored mass where available; otherwise use a documented site-specific balance with contemporaneous activity records | kg | frequency required by site method; aggregate to reporting period | same period as product output and representative operating conditions | all direct sources inside foreground boundary after abatement | sum source releases, reconcile with activity records, assign by causal driver, and divide by output mass | instrument calibration; laboratory report; balance worksheet; abatement record; permit or method reference |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | every inventory row | normalized amount = reporting-period exchange attributable to the declared product divided by reporting-period conforming net product mass | attributable exchange; conforming net product mass | exchange per 1 kg reference product |  |
| `calc_inventory_reconciliation` | material and chemical inputs | consumed amount = opening inventory + receipts - returns - closing inventory; reconcile unexplained variance before normalization | inventory and transaction fields | reporting-period consumed mass |  |
| `calc_count_to_mass` | product records by item count | multiply conforming item count by product- and period-specific measured mean net mass; preserve sampling evidence | item count; sampled net masses; sample size | conforming net product mass |  |
| `calc_direct_emissions` | fossil CO2, NMVOC, and PM10 | use measured emitted mass; when a balance is used, subtract documented capture, recovery, and destruction from source mass and retain the full equation | monitoring or balance fields; abatement records | direct emitted mass by substance and subcompartment |  |
| `calc_mass_balance` | material-bearing process | reconcile material inputs with conforming product, separately recorded wastes and emissions, internal returns, and inventory change; investigate rather than allocate unexplained loss | material inputs; product output; wastes; emissions; inventory change | documented mass-balance closure and variance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and material inputs | Trace every record to declared part number, route, material grade, supplier, and delivered state; do not aggregate unlike parts without documented production shares. | drawing; bill of materials; supplier specification; production-order trace |
| `dq_measurement` | measured exchanges | Use calibrated instruments or reconciled commercial records and retain unit, coverage, reference conditions, allocation driver, and uncertainty or variance evidence. | calibration certificate; invoice reconciliation; laboratory or stack-test report |
| `dq_temporal` | reporting period | Prefer a continuous 12-month period covering representative production, maintenance, scrap, and abatement conditions; justify shorter campaigns and disclose seasonal or ramp-up effects. | dated raw records; production calendar; representativeness statement |
| `dq_completeness` | process inventory | Reconcile all identified material, utility, waste, and direct-emission rows; document not-applicable rows and unresolved background or UUID gaps rather than silently omitting them. | signed completeness checklist; mass and energy reconciliation; unresolved-item register |
| `dq_material_declaration` | product composition and process chemicals | Retain composition and process-chemical declarations sufficient to identify substances, applicable process, and life-cycle stage without replacing measured foreground quantities. | supplier declaration; engineering judgment record; sampling or test report; `iec-82474-1-2025` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | reference product | Confirm output row `reference_product` equals 1 kg net mass of one declared, unpackaged, conforming part and carries every required qualifier. | `un-cpc-3-0-structure-2025` |
| `val_scope` | product identity and boundary | Reject complete machines, mixed baskets of unlike parts without production shares, transformer or converter parts, and datasets that include packaging or downstream stages without separate disclosure. |  |
| `val_atomic_flows` | inventory identity | Confirm each row is one product, waste, or elementary exchange with the declared property and unit; reject utility, material, waste, or emission umbrella rows. |  |
| `val_route_conditions` | conditional exchanges | Confirm route-dependent rows are populated only when used or generated and every not-applicable row has route evidence. |  |
| `val_reconciliation` | material, energy, waste, and emissions | Confirm reporting-period reconciliation, common denominator, no double counting of internal returns, and investigation of unexplained mass-balance variance. |  |
| `val_uuid_and_background` | Tiangong identities and linked datasets | Confirm each UUID at public state 100, verify flow type, classification, property, unit group, product state, geography, technology, and comment, and disclose every unresolved exact identity or background dataset. |  |
| `val_bilingual` | bilingual PCR use | Confirm English and Chinese files preserve identical rule, process, row, UUID, controlled-value, and source-id sequences. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product-manufacturing dataset for one declared electric-motor or generator part |
| downstream_use | may be reviewed and published as a secondary_dataset or background_dataset for motor, generator, equipment, and lifecyclemodel construction |
| allowed_use | factory-gate modelling of the exact declared part where product identity, route, composition, geography, technology, allocation, and data quality are compatible |
| excluded_use | proxy for a complete motor or generator; proxy for a different part architecture without representativeness evidence; operational efficiency or service-life comparison; undisclosed inclusion of packaging or downstream stages |
| required_metadata | canonical PCR id; part type and number; target machine application; construction and mounting interface; material composition; route; applicable insulation and magnet details; quality criteria; net mass; site and geography; technology; reporting period; upstream datasets; allocation; scrap and emission treatment; unresolved identities |
| required_quality_disclosure | primary-data share; temporal and technological representativeness; meter and mass reconciliation; allocation drivers; mass-balance variance; outsourced operations; supplier-data gaps; emission methods; exclusions; uncertainty; review status |
| update_trigger | change in part design, material grade or composition, supplier route, site, manufacturing technology, energy supply, abatement, allocation, background dataset, or reporting-period result that materially affects interpretation or comparability |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | CPC 3.0 code 46131 product-classification identity |
| `un-cpc-1-1-chinese-2002` | official_guidance | United Nations, Central Product Classification Version 1.1, Chinese edition, ST/ESA/STAT/SER.M/77/Ver.1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-04) | professional Chinese rendering of the CPC 46131 title |
| `iec-ts-63573-1-2026` | standard | IEC TS 63573-1:2026, Technical requirements for electrical sheet metal and strip metal used in rotating electrical machines, https://webstore.iec.ch/en/publication/67142 (retrieved 2026-09-04) | stator and rotor core material identity, electrical-steel disclosure, and annealing-route qualifier |
| `iec-82474-1-2025` | standard | IEC 82474-1:2025, Material declaration — Part 1: General requirements, https://webstore.iec.ch/en/publication/67763 (retrieved 2026-09-04) | material, substance, process-chemical, material-efficiency, and circularity declarations |
| `iec-60034-7-2020` | standard | IEC 60034-7:2020, Rotating electrical machines — Part 7: Classification of types of construction, mounting arrangements and terminal box position (IM Code), https://webstore.iec.ch/en/publication/64225 (retrieved 2026-09-04) | construction and mounting-arrangement qualifiers for the target rotating machine |
