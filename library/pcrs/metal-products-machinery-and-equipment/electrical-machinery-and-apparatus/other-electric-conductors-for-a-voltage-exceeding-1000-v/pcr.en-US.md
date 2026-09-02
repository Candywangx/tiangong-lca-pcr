---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-conductors-for-a-voltage-exceeding-1000-v
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other electric conductors, for a voltage exceeding 1000 V

## 1. Scope and Applicability

This PCR governs foreground data packages for manufacturing finished insulated electric conductors whose rated voltage exceeds 1,000 V. It covers a mass-weighted plant production mix only when every included product remains inside this semantic category and the mix, voltage classes, constructions, and production routes are disclosed. It is not a rule for one narrow cable design.

The foreground boundary ends with the tested, saleable product at the manufacturing plant gate. Upstream supply-chain datasets for purchased metals, polymer compounds, components, energy carriers, water, and packaging are required, but installation, operation, maintenance, and end-of-life are outside this foreground dataset. A downstream declaration covering those stages must apply the applicable programme PCR and product-specific scenario rules.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-conductors-for-a-voltage-exceeding-1000-v |
| classification_refs | CPC 3.0 `46350`, Other electric conductors, for a voltage exceeding 1000 V (exact classification context) |
| covered_products | Finished insulated electric conductors and power cables rated above 1,000 V, including site-specific medium-, high-, and extra-high-voltage constructions when their product specification and manufacturing route are declared. |
| excluded_products | Conductors rated at or below 1,000 V; winding wire; coaxial cable; vehicle ignition wiring sets; optical-fibre cable; bare stranded metal conductors classified outside this category; separately supplied joints, terminations, and accessories; installation or construction work; electricity transmission service; waste and recycling-treatment flows. |
| representative_product | A mass-weighted production mix of finished in-scope conductors at one declared manufacturing site and reporting period. A copper-only, aluminium-only, voltage-band-specific, submarine, overhead, or other special design is not category-representative unless the dataset is explicitly qualified as that narrower product. |
| production_route | Product-specific combination of conductor preparation or purchased conductor core, insulation and semiconductive layers where applicable, screening, laying-up, filling, water blocking, armouring, sheathing, curing, finishing, electrical testing, and packaging. Only steps actually performed by the declared facility are foreground processes; purchased intermediates require upstream datasets. |
| market_state | Finished product, manufactured; production mix, at plant. Packaging is inventoried separately and is not included in net product mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture finished electric conductors rated above 1,000 V and deliver them at the declared manufacturing plant gate. |
| How much | 1,000 kg net saleable finished product, excluding reels, drums, pallets, wrapping, and other packaging. |
| How well | The product meets the declared applicable product specification. Rated voltage, conductor metal and class, nominal cross-section, core count, insulation system, screen, sheath, armour or water barrier where present, linear mass, and conductor resistance at 20 °C must be declared. |
| How long or cycle | One representative manufacturing reporting period, normally a continuous 12-month period; shorter periods require a seasonality and representativeness justification. This is not a cable service-life duration. |
| reference_flow_link | The functional unit is implemented by the exact Tiangong product flow, Mass property, mass unit group, and reference amount below. |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other electric conductors, for a voltage exceeding 1000 V `0280d152-5bda-4dde-be8f-2bbb8df73a05` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | rated voltage expressed as U0/U (Um) or an equivalent declared system; applicable product standard; conductor metal and IEC 60228 class or equivalent; nominal conductor cross-section; number of cores; insulation material; metallic screen construction; sheath material; armour and water barrier status; installation or application class; linear mass in kg/m; conductor resistance at 20 °C; site and geography; production route; reporting period; net-product-mass basis; recycled-content accounting method; declared plant gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The mass reference flow supports production inventory and aggregation across genuinely comparable products. It does not by itself represent cable transmission service. Comparative service studies must convert the declared mass to length and electrical service using product-specific linear mass, current, resistance, operating time, service life, and use scenario; the PEP ecopassport wire-and-cable PSR defines a service functional unit based on amperes, kilometres, use duration, and use rate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | net finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1,000 kg of tested, saleable conductor at plant gate. Exclude drums, reels, pallets, wrapping, and other packaging from product mass and record them as separate inputs. |
| `linear_mass_conversion` | records collected by length | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and kg/m | Convert length to mass only with measured or product-design-specific linear mass for the same construction. Retain source length, linear mass, calculation, and product specification; do not use one generic conversion across voltage classes or constructions. |
| `rated_voltage_identity` | category eligibility | product specification | V or kV | Confirm the rated-voltage designation from the product specification and require it to exceed 1,000 V. A marketing label such as “high voltage” is not sufficient evidence. |
| `conductor_resistance_disclosure` | downstream use-stage modelling | electrical resistance | Ω/km at 20 °C | Record the tested or specification value and the applicable test standard. If a value measured at another temperature is converted to 20 °C, retain the measured temperature, correction method, and result. |

## 5. System Boundary

The foreground boundary includes the on-site operations that transform accepted materials or intermediates into the tested finished product, plus on-site material handling, utilities, treatment of on-site emissions and wastes up to their hand-off, and product packaging. Upstream datasets represent purchased inputs. Off-site distribution, installation, use-stage electrical losses, maintenance, removal, and end-of-life are excluded from this plant-gate dataset.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted conductor metal, rod, wire, conductor core, compounds, components, or other purchased intermediates at the manufacturing site gate, identified by product specification and supplier record. |
| starting_condition_role | Explicit foreground input with an upstream dataset; it is not a zero-burden starting point. |
| product_classification_scope | Semantic category of finished insulated electric conductors rated above 1,000 V; CPC 3.0 `46350` is classification context and does not replace product specifications. |
| recursive_input_rule | If a purchased intermediate can itself be described by this product category, record it once as an explicit product input with its own upstream dataset and declared gate. Do not recursively apply the whole finished-product route or treat it as burden-free. |
| upstream_dataset_requirement | Use geographically, technologically, and temporally representative datasets for conductor metals, insulation and semiconductive compounds, screens, sheaths, armour, fillers, water-blocking materials, energy carriers, water, packaging, and purchased intermediates. Document dataset identity, version, geography, reference year, and substitution decisions. |
| disclosure | Declare facility and geography, reporting period, covered product specifications and output shares, starting intermediates, on-site process route, excluded or outsourced steps, packaging boundary, recycled-content method, allocation, cut-off decisions, data coverage, and plant gate. |

### Normative Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_eligibility` | reference product and production mix | Include only finished products with documented rated voltage above 1,000 V and category-consistent construction. Keep narrow designs explicitly qualified and do not use them as the universal category identity. | `iec-60228-2023`; `iec-60502-2-2014-amd1-2024`; `iec-60840-2020-amd1-2023`; `iec-62067-2022` |
| `boundary_foreground_operations` | manufacturing site | Include all on-site material transformation, assembly, curing where applicable, finishing, routine testing, internal handling, utility consumption, direct releases, waste generation and on-site treatment, and packaging needed for the declared finished product. | `pep-pcr-ed4-2021`; `pep-psr-wires-cables-ed4-2022` |
| `boundary_purchased_inputs` | purchased materials and intermediates | Connect every purchased material, component, energy carrier, water input, packaging item, and same-category intermediate to an appropriate upstream dataset; no purchased product input is burden-free. | `pep-pcr-ed4-2021` |
| `boundary_cutoff` | inventory completeness | Identify all assessable flows. Any omission must be documented and must not conceal a potentially significant impact; the PEP PCR default intermediate-flow mass, energy, and environmental-impact omission thresholds are each at most 5%, and copper must be included systematically. | `pep-pcr-ed4-2021` |
| `boundary_downstream_exclusion` | plant-gate dataset | Exclude off-site distribution, installation, use-stage losses, maintenance, removal, and end-of-life from this foreground dataset, and disclose that a complete declaration requires separate downstream scenarios. Do not record installation or construction delivery as conductor manufacturing. | `pep-psr-wires-cables-ed4-2022`; `environdec-cpcr-004-2024` |
| `boundary_special_designs` | overhead, submarine, mining, nuclear, shipboard, fire-performance, or other special products | Include a special product only with its own applicable specification and product-specific route. Do not extrapolate fixed-installation standard requirements or generic amounts to special designs. | `iec-60502-2-2014-amd1-2024`; `iec-60840-2020-amd1-2023`; `iec-62067-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| conductor_cable_manufacturing | Conductor and Cable Manufacturing | required | Represent every on-site step actually used; where conductor cores or other intermediates are purchased, omit the corresponding on-site transformation and record the purchased intermediate with an upstream dataset. | foreground unit process or documented aggregation of metered unit processes | measured unfinished conductor output transferred to finishing |
| finishing_testing_packaging | Finishing, Testing, and Packaging | required | Include the final finishing, routine electrical testing, rejection handling, and packaging steps used for the declared saleable product. | final foreground unit process | 1,000 kg net saleable finished product |

### Process: Conductor and Cable Manufacturing (`conductor_cable_manufacturing`)

#### Inputs

##### Product flows

###### Conductor metals or purchased conductor cores (`conductor_metal_or_core_input`)

Record copper, aluminium, aluminium alloy, or another specified conductor material, including purchased rod, wire, or conductor core, when it crosses the site boundary. Quantity is taken from accepted material records and reconciled to the declared product mix.

- Selected flow: Product- and supplier-specific Tiangong product flow matching the declared conductor metal or intermediate; UUID selection is required in the foreground data package
- Flow property / unit: Mass / kg
- Amount rule: accepted net mass from receiving, warehouse issue, or bill-of-material records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `pep-pcr-ed4-2021`; `iec-60228-2023`

###### Insulation, screening, sheath, armour, fillers, and auxiliaries (`cable_material_inputs`)

Record all polymer compounds, semiconductive compounds, metallic screens, sheaths, armour, fillers, binders, water-blocking materials, lubricants, and process auxiliaries actually consumed. Do not assume one construction across the category.

- Selected flow: Product- and material-specific Tiangong product flows selected for the declared construction; UUIDs are required in the foreground data package
- Flow property / unit: Mass / kg
- Amount rule: net issued or metered mass by material and product specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `pep-pcr-ed4-2021`; `pep-psr-wires-cables-ed4-2022`

###### Electricity and fuels for manufacturing (`manufacturing_energy_inputs`)

Record metered electricity and fuels for drawing, annealing, stranding, extrusion, crosslinking or curing, cabling, screening, armouring, sheathing, compressed air, ventilation, and pollution-control equipment. Shared utilities require the allocation rule in section 7.

- Selected flow: Geography-, voltage-level-, and energy-carrier-specific Tiangong product flows; UUIDs are required in the foreground data package
- Flow property / unit: Energy / kWh for electricity; carrier-appropriate property and unit for fuels
- Amount rule: site meter, submeter, invoice, or equipment log reconciled to the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `pep-pcr-ed4-2021`

###### Process water and consumable auxiliaries (`process_water_auxiliary_inputs`)

Record water and consumable auxiliaries that cross the process boundary for cooling, cleaning, testing, lubrication, or treatment. Internal recirculation is not counted again as an external input.

- Selected flow: Site-appropriate water and auxiliary product flows; UUIDs are required in the foreground data package
- Flow property / unit: Volume / m3 for water; material-appropriate property and unit for auxiliaries
- Amount rule: meter, purchase, tank, or batch records net of documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_auxiliaries`
- Sources: `pep-pcr-ed4-2021`

##### Waste flows

_No waste input is assumed. Recycled feedstock entering as a purchased product remains a product flow and must carry its upstream dataset and recycled-content accounting method._

##### Elementary flows

_Record direct resource uptake only when it crosses the site boundary as an elementary flow and is not already represented by a purchased product flow._

#### Outputs

##### Product flows

###### Unfinished conductor transferred to final operations (`unfinished_conductor_output`)

Record the net mass of product transferred to final finishing and testing. Its specification and product-mix linkage must permit reconciliation with the finished reference product.

- Selected flow: Site-defined intermediate product flow matching the actual transfer point
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to work-in-process inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process output transferred to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output`
- Sources: `pep-pcr-ed4-2021`

##### Waste flows

###### Manufacturing scrap and rejects (`manufacturing_scrap_rejects`)

Record conductor-metal scrap, polymer scrap, mixed cable scrap, off-specification cores, and other manufacturing losses separately by material and destination. Do not net recycling proceeds or avoided burdens against the foreground input inventory.

- Selected flow: Material- and treatment-destination-specific Tiangong waste flows; UUIDs are required in the foreground data package
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment, internal scrap, rework, and stock-change records without double counting internally returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `pep-pcr-ed4-2021`; `pep-psr-wires-cables-ed4-2022`

##### Elementary flows

###### Direct manufacturing emissions (`direct_manufacturing_emissions`)

Record measured or permitted releases to air, water, and soil from combustion, extrusion or curing, cleaning, and on-site treatment. Do not invent zero emissions when a regulated or technically plausible release lacks a measurement.

- Selected flow: Compartment-specific Tiangong elementary flows selected from monitoring and permit terminology
- Flow property / unit: Emission-appropriate property and unit, normally Mass / kg
- Amount rule: measured release or documented calculation from monitored activity data and an applicable method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `pep-pcr-ed4-2021`

### Process: Finishing, Testing, and Packaging (`finishing_testing_packaging`)

#### Inputs

##### Product flows

###### Unfinished conductor accepted for final operations (`unfinished_conductor_input`)

Record the mass accepted from the preceding process or as a purchased intermediate. The input identity and mass must reconcile with the declared finished-product construction and losses.

- Selected flow: Same site-defined intermediate as `unfinished_conductor_output`, or a supplier-specific purchased intermediate flow with an upstream dataset
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass plus work-in-process adjustment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output`
- Sources: `pep-pcr-ed4-2021`

###### Final-operation energy and test consumables (`finishing_energy_test_inputs`)

Record electricity, fuels, test media, marking materials, and consumables used for final dimensional work, routine electrical tests, inspection, and handling.

- Selected flow: Geography- and carrier-specific energy flows and product-specific consumable flows; UUIDs are required in the foreground data package
- Flow property / unit: Energy / kWh for electricity; material-appropriate property and unit for consumables
- Amount rule: submeter, equipment log, invoice, issue, or batch record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `pep-pcr-ed4-2021`; `pep-psr-wires-cables-ed4-2022`

###### Reels, drums, pallets, wrapping, and other packaging (`packaging_inputs`)

Record reusable and one-way packaging separately by material and disposition. Packaging mass is outside the net finished-product reference amount.

- Selected flow: Packaging-material-specific Tiangong product flows; UUIDs are required in the foreground data package
- Flow property / unit: Mass / kg; count may be retained as supporting activity data
- Amount rule: purchased, issued, returned, and reused quantities reconciled to packed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `pep-pcr-ed4-2021`; `pep-psr-wires-cables-ed4-2022`

##### Waste flows

_No waste input is assumed._

##### Elementary flows

_No elementary input is assumed unless direct natural-resource uptake occurs and is documented._

#### Outputs

##### Product flows

###### Finished conductor reference product (`finished_conductor_reference_output`)

This is the exact reference product. Normalize collected saleable output to 1,000 kg after excluding packaging and products outside the declared category or product mix.

- Selected flow: Other electric conductors, for a voltage exceeding 1000 V `0280d152-5bda-4dde-be8f-2bbb8df73a05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: collected net saleable mass normalized to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_output`
- Sources:

##### Waste flows

###### Final rejects and packaging waste (`final_rejects_packaging_waste`)

Record final-test rejects, cut-offs, damaged product, discarded test materials, and packaging waste separately by material and destination. Distinguish rework returned to production from waste leaving the process.

- Selected flow: Material- and destination-specific Tiangong waste flows; UUIDs are required in the foreground data package
- Flow property / unit: Mass / kg
- Amount rule: measured reject, rework, waste shipment, and stock-change records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `pep-pcr-ed4-2021`

##### Elementary flows

###### Direct emissions from final operations (`direct_finishing_emissions`)

Record direct releases from testing, marking, handling, or packaging only where monitoring, permits, or a documented calculation establish that they occur.

- Selected flow: Compartment-specific Tiangong elementary flows selected from monitoring and permit terminology
- Flow property / unit: Emission-appropriate property and unit
- Amount rule: measured release or documented calculation from collected activity data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `pep-pcr-ed4-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | separately measurable lines, products, and unit processes | Avoid allocation by subdividing processes and using product- or line-specific material, energy, waste, and output records whenever technically feasible. | `pep-pcr-ed4-2021` |
| `allocation_physical_relationship` | unavoidable shared inputs, emissions, wastes, and infrastructure services | When subdivision is not feasible, use the most relevant causal physical relationship, such as metered machine time, equipment load, processed mass, line length, or another engineering driver. Document the driver and all product totals. Do not default to product mass when it does not represent the causal relationship. | `pep-pcr-ed4-2021` |
| `allocation_economic_fallback` | jointly produced outputs without a defensible physical relationship | Use economic allocation only when no relevant physical relationship can be established. Record price basis, period, currency, data source, shares, and a sensitivity result against the best available physical proxy. | `pep-pcr-ed4-2021` |
| `allocation_scrap_and_rework` | internal rework, scrap, and material sent to recycling | Do not count internal rework as a new external input or a waste output. Record scrap leaving the process by destination and apply the selected end-of-waste or recycling convention consistently; do not subtract recycling revenue or avoided-burden credit from foreground material consumption. | `pep-pcr-ed4-2021`; `pep-psr-wires-cables-ed4-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_specification` | conductor_cable_manufacturing; finishing_testing_packaging | category eligibility and required qualifiers | approved product specification and test record | product code; rated U0/U (Um); standard; conductor material and class; cross-section; cores; insulation; screen; sheath; armour; water barrier; application; kg/m; resistance at 20 °C; output share | controlled extraction from approved drawings, specifications, certificates, and routine-test records | declared engineering units | per product and revision | reporting period | all in-scope products at declared site | retain each product record and calculate mass-weighted mix shares from saleable output | approved revision, test certificate, and traceable product code |
| `cp_material_inputs` | conductor_cable_manufacturing | conductor and cable material inputs | receiving, warehouse issue, batch, and bill-of-material records | material code; supplier; lot; quantity; unit; returned quantity; recycled content; product code; date | reconcile accepted receipts, issues, returns, and stock changes to production orders | kg | per receipt, issue, or batch | normally 12 continuous months | all included lines at declared site | aggregate by exact material and product, then normalize to net saleable output without netting scrap | calibrated scale or supplier mass record, inventory reconciliation, and approved bill of materials |
| `cp_energy_inputs` | conductor_cable_manufacturing; finishing_testing_packaging | electricity and fuel inputs | meters, submeters, invoices, and equipment logs | meter id; carrier; start and end readings; unit; time; line or equipment; production order | use direct submetering where available; reconcile to site invoice and allocate residual shared use under section 7 | kWh and carrier-specific units | continuous or at least monthly | normally 12 continuous months | all included processes and shared utilities | sum by carrier and process; apply documented allocation only to shared residual | meter calibration, invoices, reconciliation, and allocation worksheet |
| `cp_water_auxiliaries` | conductor_cable_manufacturing | process water and auxiliaries | meter, purchase, tank, batch, and recirculation records | material; quantity; unit; process; product; recirculated amount; date | measure external make-up separately from internal recirculation and reconcile purchases or meters | m3 for water and material-appropriate units | per batch or monthly | normally 12 continuous months | all included wet, cooling, cleaning, test, and treatment operations | aggregate external net input by process and product | meter calibration, purchase records, and recirculation balance |
| `cp_intermediate_output` | conductor_cable_manufacturing; finishing_testing_packaging | unfinished conductor transfer | transfer and work-in-process records | product code; lot; gross and net mass; unit; sender; receiver; date; opening and closing work in process | weigh or derive from controlled production records and reconcile both process sides | kg | per lot or shift | reporting period | transfer boundary between included processes | sum accepted transfers and adjust for work-in-process change | calibrated scale, matched transfer records, and stock reconciliation |
| `cp_finished_output` | finishing_testing_packaging | finished reference output | accepted production, test release, and dispatch records | product code; lot; net product mass; packaging mass; length; kg/m; rejected mass; release status; date | use test-released saleable net mass; cross-check length multiplied by product-specific linear mass | kg | per production lot | normally 12 continuous months | all in-scope products at declared plant gate | exclude packaging and out-of-scope products; sum by specification; normalize all exchanges to 1,000 kg | calibrated scale, test release, dispatch reconciliation, and product-specific kg/m |
| `cp_packaging_inputs` | finishing_testing_packaging | packaging inputs | packaging purchase, issue, return, and reuse records | material or item; mass; count; reuse status; returned count; product lot; date | reconcile issued packaging with packed output and returns | kg and count | per packing lot or monthly | reporting period | all in-scope packed outputs | report each material separately and amortize reusable items with documented trips or losses | issue records, tare measurements, and reuse log |
| `cp_waste_outputs` | conductor_cable_manufacturing; finishing_testing_packaging | scrap, rejects, and packaging waste | waste tickets, internal scrap and rework logs, stock records, and treatment certificates | material; mass; process; product; rework status; destination; treatment; date | weigh by material and reconcile generated, internally returned, stored, and shipped quantities | kg | per batch or shipment | normally 12 continuous months | all included processes | do not double count rework; aggregate external waste by material and destination | calibrated weighbridge or ticket, stock reconciliation, and treatment certificate |
| `cp_direct_emissions` | conductor_cable_manufacturing; finishing_testing_packaging | direct releases | continuous or periodic monitoring, permit reports, and calculation records | substance; compartment; concentration; flow rate; operating time; method; detection limit; date | calculate mass release from monitored concentration and flow or use an authorized method tied to collected activity | kg or substance-appropriate unit | as required by permit and process variability | representative of reporting period | all included emitting operations and treatment units | sum by substance and compartment; document non-detect treatment and extrapolation | accredited test, calibration, permit report, and calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_reference_normalization` | every foreground exchange | normalized amount = reporting-period exchange amount / reporting-period net saleable in-scope output kg × 1,000 kg | collected exchange; `cp_finished_output` | exchange amount per 1,000 kg reference product |  |
| `calculate_length_to_mass` | length-based production, dispatch, or material records | mass kg = measured length m × product-specific linear mass kg/m; compare with available scale record and investigate material differences | length; approved product-specific kg/m; scale record where available | reconciled mass and conversion evidence | `iec-60228-2023`; `pep-psr-wires-cables-ed4-2022` |
| `calculate_material_balance` | each process and reporting period | opening stock + external and transferred mass inputs = saleable and intermediate outputs + external waste + closing stock + documented measured releases; report imbalance before normalization | material, intermediate, output, waste, stock, and emission records | material-balance statement and unresolved imbalance | `pep-pcr-ed4-2021` |
| `calculate_shared_allocation` | shared utilities and joint operations | allocated amount = shared measured total × documented causal-driver share; shares across all receiving products must sum to 1 | shared total; driver by receiving product; all-product driver total | allocated exchange and allocation worksheet | `pep-pcr-ed4-2021` |
| `calculate_product_mix` | multi-product dataset | product share = net saleable mass of eligible specification / total net saleable mass of all included eligible specifications; exclude out-of-scope products before calculating shares | `cp_product_specification`; `cp_finished_output` | disclosed mass-weighted product mix |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_scope` | reference product and product mix | Every included product must have a traceable specification proving rated voltage above 1,000 V and all required qualifiers. | approved product specification, test release, exact reference-flow UUID, and mass-weighted mix table |
| `dq_temporal_coverage` | foreground activity data | Prefer a continuous 12-month period that captures normal operating variability. A shorter period must disclose dates, production coverage, shutdowns, campaigns, and why it is representative. | dated raw records and representativeness justification |
| `dq_site_coverage` | manufacturing system | Include every site and line contributing to the declared output or report the exact coverage share and treatment of omitted production. | facility list, line mapping, production totals, and coverage calculation |
| `dq_primary_data` | materials, energy, water, emissions, wastes, and outputs | Use primary foreground records for on-site operations. Document aggregation, transformations, missing data, estimates, and uncertainty; do not silently replace missing site data with generic cable values. | protocol records, calculation workbook, missing-data log, and data-quality review |
| `dq_secondary_datasets` | purchased inputs and external treatment | Select datasets matching material, technology, geography, reference year, and supplier route as closely as available; document substitutions and versions. | dataset selection table with UUID or stable identifier, version, geography, year, and rationale |
| `dq_completeness` | inventory | Demonstrate that all assessable flows were considered, apply the declared cut-off method, include copper systematically, and list every omitted flow with quantitative and impact justification. | completeness checklist, cut-off calculation, mass and energy coverage, and omission register |
| `dq_balance_and_reconciliation` | process and site totals | Reconcile material, energy, output, waste, and stock records. Investigate unexplained discrepancies and disclose unresolved residuals rather than forcing closure. | signed reconciliation and corrective-action or uncertainty record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require product flow `0280d152-5bda-4dde-be8f-2bbb8df73a05`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200b9a66`, unit kg, and exactly 1,000 kg after normalization. |  |
| `validate_voltage_scope` | product and product mix | Fail category eligibility when rated-voltage evidence is absent, ambiguous, or not greater than 1,000 V. | `iec-60502-2-2014-amd1-2024`; `iec-60840-2020-amd1-2023`; `iec-62067-2022` |
| `validate_required_qualifiers` | dataset metadata | Require every section 3 qualifier, including product-specific kg/m and resistance at 20 °C; do not infer missing qualifiers from the CPC code or a narrow Tiangong flow name. | `iec-60228-2023`; `pep-psr-wires-cables-ed4-2022` |
| `validate_product_mix` | aggregated production mix | Require eligible output shares to sum to 100% after excluding out-of-scope products, and retain product-specific records behind the aggregation. |  |
| `validate_boundary_completeness` | foreground inventory | Require collected or explicitly documented not-applicable evidence for conductor materials or purchased cores, insulation and protective materials, energy, water and auxiliaries, intermediate transfers, finished output, packaging, waste, direct emissions, and all actual on-site route steps. | `pep-pcr-ed4-2021` |
| `validate_upstream_datasets` | purchased inputs | Fail completeness if a material purchased product, energy, water, packaging, waste-treatment, or same-category intermediate lacks an upstream dataset identity or a documented justified omission. | `pep-pcr-ed4-2021` |
| `validate_mass_and_energy_reconciliation` | process and site records | Require material-balance and energy reconciliation statements, documented stock and work-in-process changes, and review of unexplained residuals. | `pep-pcr-ed4-2021` |
| `validate_allocation` | shared or joint operations | Require subdivision or an allocation worksheet that identifies the causal physical driver; if economic allocation is used, require prices and physical-proxy sensitivity. | `pep-pcr-ed4-2021` |
| `validate_cutoff` | omitted flows | Require a complete omission register and evidence that the declared thresholds are met without hiding significant impacts; copper cannot be omitted. | `pep-pcr-ed4-2021` |
| `validate_partial_lifecycle_scope` | downstream use | Require an explicit statement that the dataset ends at the manufacturing plant gate and excludes distribution, installation, use-stage electrical losses, maintenance, and end-of-life. Reject use as a complete cable EPD or service comparison without applicable downstream PCR and scenarios. | `pep-psr-wires-cables-ed4-2022`; `environdec-cpcr-004-2024` |
| `validate_special_designs` | special products | Require a design-specific standard, route, and data for submarine, overhead, mining, nuclear, shipboard, fire-performance, or other special products; reject unsupported extrapolation from fixed-installation cable rules. | `iec-60502-2-2014-amd1-2024`; `iec-60840-2020-amd1-2023`; `iec-62067-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Foreground manufacturing dataset for a declared finished conductor or a disclosed mass-weighted plant production mix rated above 1,000 V; component of a broader cradle-to-gate, cradle-to-grave, process, or lifecycle model when downstream stages use applicable scenario rules. |
| excluded_use | Complete cable EPD; installation or construction service; electricity-transmission service comparison; use-stage loss, service-life, or end-of-life result without product-specific scenarios; conductor rated at or below 1,000 V; bare conductor or accessory outside the category; extrapolation from one voltage band, conductor metal, or construction to the whole category. |
| required_metadata | exact reference-flow, flow-property, and unit-group UUIDs; all reference-flow qualifiers; CPC classification as context; facility and geography; reporting dates; product output shares; declared gate; process map; starting intermediates and outsourced steps; upstream dataset identities and versions; net-mass and packaging treatment; recycled-content method; allocation; cut-off; data-quality assessment; uncertainty and missing-data disclosures |
| required_quality_disclosure | protocol coverage by process and flow; share of measured, calculated, estimated, and secondary data; temporal, geographic, and technological representativeness; site and line coverage; material and energy reconciliation; omission register; allocation worksheet; product-mix aggregation; secondary-dataset substitutions; unresolved limitations |
| update_trigger | Change in rated-voltage scope, product construction, conductor metal, insulation or protective system, production route, site, product mix, energy supply, recycled-content method, allocation, cut-off, reporting period, material upstream dataset, applicable standard or PCR, or any change that materially alters inventory or representativeness. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pep-pcr-ed4-2021` | official_guidance | PEP ecopassport, Product Category Rules for Electrical, Electronic and HVAC-R Products, PCR edition 4, `PEP-PCR-ed4-EN-2021-09-06`; official documents register: https://register.pep-ecopassport.org/documents (retrieved 2026-08-09). | manufacturing boundary, inventory completeness and cut-off, allocation hierarchy, primary-data collection, representativeness, and data-quality rules |
| `pep-psr-wires-cables-ed4-2022` | official_guidance | PEP ecopassport, Product Specific Rules for Wires, Cables and Accessories, PSR-0001 edition 4, `PSR-0001-ed4-EN-2022-11-16`; official PDF: https://register.pep-ecopassport.org/documents/public/PSR-0001-EN (retrieved 2026-08-09). | cable product scope, service functional-unit distinction, declared mass or length conversion, manufacturing data expectations, packaging and downstream-stage disclosures |
| `environdec-cpcr-004-2024` | official_guidance | EPD International, `2024:06-c-PCR-004` Wires, cables and accessories, version 1.0.0, valid to 2027-11-16: https://www.environdec.com/pcr-library/pcr_a065bd3e-99bb-4a00-3d52-08ddc3a43c05 (retrieved 2026-08-09). | programme-scope warning that construction-product cables require the applicable construction PCR rather than automatic use of the adopted PEP PSR |
| `iec-60228-2023` | standard | IEC 60228:2023, Conductors of insulated cables: https://webstore.iec.ch/en/publication/71891 (retrieved 2026-08-09). | conductor material and class, nominal cross-section, finished-cable conductor resistance, and temperature-correction evidence |
| `iec-60502-2-2014-amd1-2024` | standard | IEC 60502-2:2014+AMD1:2024 CSV, Power cables with extruded insulation, 6 kV to 30 kV: https://webstore.iec.ch/en/publication/95394 (retrieved 2026-08-09). | medium-voltage fixed-installation scope, construction and testing context, and special-application exclusions |
| `iec-60840-2020-amd1-2023` | standard | IEC 60840:2020+AMD1:2023 CSV, Power cables with extruded insulation, above 30 kV up to 150 kV: https://webstore.iec.ch/en/publication/63025 (retrieved 2026-08-09). | high-voltage fixed-installation scope, test context, and special-cable qualifications |
| `iec-62067-2022` | standard | IEC 62067:2022, Power cables with extruded insulation, above 150 kV up to 500 kV: https://webstore.iec.ch/en/publication/66951 (retrieved 2026-08-09). | extra-high-voltage fixed-installation scope, test context, and special-cable qualifications |
