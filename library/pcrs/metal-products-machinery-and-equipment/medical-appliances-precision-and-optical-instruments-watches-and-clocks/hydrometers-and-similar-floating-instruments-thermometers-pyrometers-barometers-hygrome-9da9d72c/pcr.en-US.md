---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hydrometers-and-similar-floating-instruments-thermometers-pyrometers-barometers-hygrome-9da9d72c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hydrometers and similar floating instruments, thermometers, pyrometers, barometers, hygrometers and psychrometers

## 1. Scope and Applicability

This PCR governs foreground manufacturing data packages for finished hydrometers and similar floating instruments, thermometers, pyrometers, barometers, hygrometers, and psychrometers. It covers analogue, liquid-in-glass, mechanical, electrical, and electronic variants when the declared product is within this semantic category. The data package shall identify the instrument family and sensing principle rather than treating the category-level production mix as a claim that all variants have the same bill of materials or manufacturing route.

The default foreground boundary ends at the manufacturing-plant gate after assembly, calibration or performance testing, and packaging. Distribution, installation, use, maintenance, and end-of-life are excluded from this foreground package unless a study explicitly extends the boundary. Upstream production of purchased materials, components, energy carriers, packaging, and treatment services is represented by linked upstream datasets.

This PCR excludes instruments for measuring or checking flow, level, pressure, or other variables of liquids or gases that fall outside the named instrument families; physical or chemical analysis instruments; medical sphygmomanometers; automatic regulating or controlling equipment; and separately supplied parts and accessories. A product crossing one of those boundaries requires a separately reviewed PCR or explicit proxy disclosure.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hydrometers-and-similar-floating-instruments-thermometers-pyrometers-barometers-hygrome-9da9d72c |
| classification_refs | CPC 3.0: 48251 (exact classification reference; mapping acceptance is governed separately) |
| covered_products | Hydrometers and similar floating instruments; contact and non-contact thermometers; pyrometers; barometers; hygrometers; psychrometers; analogue, mechanical, electrical, and electronic variants within this semantic category |
| excluded_products | Flow, level, and general pressure measuring instruments outside the named families; physical or chemical analysis instruments; medical sphygmomanometers; automatic controllers; navigational instruments; parts and accessories sold separately |
| representative_product | Declared production mix of finished instruments in the covered families, with product-family and sensing-principle composition reported |
| production_route | Purchased or on-site fabricated sensing elements, housings, displays, electronics, glass or metal bodies, and filling media; assembly; calibration and performance testing; finishing where applicable; packaging |
| market_state | Finished product, manufactured; production mix, at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished instrument within the covered category, at the manufacturing-plant gate |
| How much | 1 kg net mass of conforming finished instrument, excluding separately inventoried packaging |
| How well | Declared instrument family, sensing principle, measuring interval, accuracy or maximum permissible error, resolution, calibration or verification status, and applicable product specification |
| How long or cycle | Production represented by the declared reporting period or production campaign; use-stage service life is outside the default foreground boundary |
| reference_flow_link | 1 kg of the declared reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Hydrometers and similar floating instruments, thermometers, pyrometers, barometers, hygrometers and psychrometers `7d4fdf4e-5846-4fc5-b373-e360c312974b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument family; sensing principle and measuring medium; analogue or electrical/electronic design; measuring interval; declared accuracy or maximum permissible error and resolution; calibration or verification status; mercury-added status; net product mass; production geography and reporting period; packaging inclusion status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to 1 kg net mass of conforming finished instruments. Exclude separately inventoried packaging from the reference-product mass. |
| `item_to_mass_conversion` | production and shipment records stated in pieces | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts using measured net mass by product family and lot. Retain count, sampling method, weighed sample, and conversion factor; do not use an uncited category-average item mass. |
| `energy_conversion` | purchased electricity and fuels | Energy | kWh or MJ | Preserve the metered or invoiced unit and conversion factor. Use 1 kWh = 3.6 MJ only when a common energy unit is required, and do not mix fuel mass or volume with energy without a documented factor. |
| `calibration_result_identity` | calibration and performance-test records | Declared measurand and measurement unit | product-specific | Record the measurand, measuring interval, test points, reference standard, indication or error result, measurement uncertainty where reported, acceptance criterion, and pass/rework/reject decision for the tested instrument family. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | foreground manufacturing system | Include on-site component fabrication when performed, instrument assembly, filling or charging where applicable, cleaning and finishing where applicable, calibration and performance testing, rework, packaging, on-site utilities, direct emissions, and waste handling through transfer at the manufacturing-plant gate. | `eu-pef-2021` |
| `boundary_upstream_inputs` | purchased products and services | Link purchased materials, components, energy carriers, packaging, calibration media, and waste-treatment services to upstream datasets with technology, geography, and time representativeness disclosed. Do not absorb their upstream burdens into an undocumented cut-off. | `eu-pef-2021` |
| `boundary_completeness` | all foreground processes | Record all material and energy inputs, product and co-product outputs, waste, wastewater, and measured or reportable direct emissions that cross each foreground process boundary. Document exclusions and their justification. | `eu-pef-2021` |
| `boundary_mercury` | mercury-added instruments or components | Identify intentionally added mercury and mercury compounds. Include mercury input, contained product output, spills or losses, and mercury-containing waste as separate records where such manufacture is lawful and applicable; this PCR does not authorize manufacture, import, export, or an exemption. | `minamata-mercury-2024` |
| `boundary_electronic_variants` | electrical or electronic instruments | For electrical or electronic variants, retain a bill of materials and applicable restricted-substance or exemption declarations for monitoring and control instruments; record actual material masses rather than treating legal concentration limits as inventory amounts. | `eu-rohs-2011-65` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components at the manufacturing-site receiving gate, plus on-site fabricated components whose upstream material inputs enter the foreground boundary |
| starting_condition_role | Upstream product inputs to foreground instrument manufacturing |
| product_classification_scope | Finished hydrometers and similar floating instruments, thermometers, pyrometers, barometers, hygrometers, and psychrometers within the declared product-family mix |
| recursive_input_rule | A purchased finished or partly finished instrument within the same semantic category is recorded as a product input with its own upstream dataset and declared processing state; do not recursively reconstruct it as another instance of this foreground package. |
| upstream_dataset_requirement | Use specific upstream datasets for major materials, sensing elements, electronics, batteries where included, glass or metal bodies, filling media, packaging, energy, transport to site when in scope, and treatment services; disclose any proxy. |
| disclosure | Declare product-family shares, sensing principles, on-site versus purchased component scope, mercury-added status, electronic content, calibration basis, reporting period, geography, packaging treatment, exclusions, and allocation choices. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_component_fabrication` | On-site component fabrication and finishing | conditional | Include when sensing elements, glass or metal bodies, housings, scales, electronic assemblies, filling operations, coatings, or other components are fabricated or finished on site. | foreground component production | mass of accepted components transferred to assembly |
| `p_instrument_assembly` | Instrument assembly | required | Always include final mechanical, glass, electrical, or electronic assembly and any associated cleaning or filling operation. | foreground product assembly | mass of assembled instruments transferred to calibration and testing |
| `p_calibration_testing` | Calibration, verification, and performance testing | required | Always include the product-specific calibration or verification and final acceptance testing used to release conforming products. | foreground quality assurance | net mass of conforming instruments released |
| `p_packaging` | Product packaging and factory-gate release | required | Always include primary, secondary, and transport packaging applied before the declared plant gate. | foreground packaging and release | 1 kg net finished instrument output, with packaging reported separately |

### Process: On-site component fabrication and finishing (`p_component_fabrication`)

#### Inputs

##### Product flows

###### Materials and purchased component inputs (`component_material_inputs`)

Record each material or purchased component separately by product family, including glass, metals, polymers, sensing elements, electronics, displays, wiring, batteries where included, filling media, coatings, adhesives, and fasteners that cross this process boundary.

- Selected flow: Select the matching Tiangong product flow for each recorded material or component; no category-wide UUID is fixed by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured issue minus documented return for accepted production, with inventory change reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources: `eu-rohs-2011-65` when restricted-substance declarations apply

###### Mercury or mercury-added component input (`mercury_input`)

Record intentionally added mercury or a mercury-containing component separately only for an applicable and lawful product route. Do not infer zero mercury from the absence of a purchasing line.

- Selected flow: Select the matching Tiangong mercury or mercury-containing component product flow after identity review; no UUID is fixed by this PCR
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-certified mercury mass entering the process, reconciled to product, loss, and waste records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources: `minamata-mercury-2024`

###### Fabrication electricity (`component_fabrication_electricity`)

Record metered electricity used by forming, machining, glass working, electronics manufacture, cleaning, filling, finishing, and local auxiliaries included in this process.

- Selected flow: Select the matching location- and voltage-specific electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: process-metered electricity or a documented allocation from facility meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Process water and fabrication chemicals (`component_fabrication_water_chemicals`)

Record water and each material process chemical separately when used for cleaning, etching, plating, coating, glass working, filling, or other on-site component operations.

- Selected flow: Select the matching Tiangong product flow for water and for each process chemical
- Flow property / unit: Mass or volume / kg or m3, preserving the source record unit
- Amount rule: metered, weighed, or purchasing-and-inventory-reconciled consumption by process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

##### Waste flows

###### Fabrication scrap and hazardous residues (`component_fabrication_waste`)

Record metal, glass, polymer, electronic, coating, chemical, and mercury-containing wastes separately by treatment route. Mercury-containing waste shall not be combined with ordinary scrap.

- Selected flow: Select the matching Tiangong waste flow for each material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured transferred waste plus documented inventory change, split by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `minamata-mercury-2024` for mercury-containing waste segregation

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fabricated components (`accepted_components`)

Record the measured mass of accepted components transferred to assembly, split by component family when internal mass balance requires it.

- Selected flow: Internal intermediate product flow matching the fabricated component identity
- Flow property / unit: Mass / kg
- Amount rule: measured accepted component mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources:

##### Waste flows

##### Elementary flows

###### Reportable fabrication emissions (`component_fabrication_emissions`)

Record measured, monitored, or permit-reported emissions from on-site combustion, coating, plating, glass working, filling, and cleaning operations. Keep pollutant identities and measurement bases separate.

- Selected flow: Select the matching Tiangong elementary flow for each emitted substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured or calculation-supported site emission attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`
- Sources:

### Process: Instrument assembly (`p_instrument_assembly`)

#### Inputs

##### Product flows

###### Fabricated and purchased components for assembly (`assembly_component_inputs`)

Record accepted on-site components and purchased components entering final assembly, split by product family and component identity.

- Selected flow: Select the matching Tiangong product flow for each component; use the internal accepted-component flow for on-site transfers
- Flow property / unit: Mass / kg
- Amount rule: measured component issue minus documented returns, reconciled to assembled product and assembly waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of assembled instruments transferred to calibration and testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Assembly electricity and consumables (`assembly_energy_consumables`)

Record assembly electricity and material consumables such as solders, adhesives, seals, fasteners, cleaning agents, and protective gases separately when they cross the process boundary.

- Selected flow: Select the matching Tiangong product flow for electricity and each consumable
- Flow property / unit: Energy or mass / kWh or kg
- Amount rule: metered electricity and measured or inventory-reconciled consumable use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of assembled instruments transferred to calibration and testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled instruments awaiting calibration (`assembled_instruments`)

Record the net instrument mass transferred to calibration and testing, excluding packaging.

- Selected flow: Internal assembled-instrument product flow
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of assembled instruments transferred to calibration and testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of assembled instruments transferred to calibration and testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources:

##### Waste flows

###### Assembly rejects and scrap (`assembly_waste`)

Record rejected components, spilled filling media, offcuts, cleaning residues, and failed assemblies separately by material and treatment destination.

- Selected flow: Select the matching Tiangong waste flow for each waste identity and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste transferred from assembly, net of documented internal rework returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of assembled instruments transferred to calibration and testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`
- Sources:

##### Elementary flows

### Process: Calibration, verification, and performance testing (`p_calibration_testing`)

#### Inputs

##### Product flows

###### Assembled instruments for testing (`instruments_for_testing`)

Record the net mass and item count by product family entering calibration, verification, and final performance testing.

- Selected flow: Internal assembled-instrument product flow
- Flow property / unit: Mass / kg
- Amount rule: measured net mass entering testing, with item counts retained by product family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming instruments released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_test_records`
- Sources: `wmo-no-8`; `ilac-p10-2020`

###### Calibration and test energy and media (`calibration_test_inputs`)

Record electricity, controlled-temperature or humidity utilities, calibration liquids, reference media, and consumed test materials when they cross the process boundary.

- Selected flow: Select the matching Tiangong product flow for each energy or material input
- Flow property / unit: Energy, mass, or volume / kWh, kg, or m3
- Amount rule: metered or measured use attributable to calibration and testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of conforming instruments released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_test_records`
- Sources: `wmo-no-8`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming calibrated or verified instruments (`conforming_instruments`)

Record instruments released after product-specific acceptance testing. Retain test points, reference standards, results, uncertainty where reported, and the acceptance decision.

- Selected flow: Internal conforming-instrument product flow
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of instruments with a documented pass decision
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming instruments released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_calibration_test_records`
- Sources: `wmo-no-8`; `ilac-p10-2020`

##### Waste flows

###### Test rejects and non-recoverable failures (`calibration_test_rejects`)

Record failed units sent to waste treatment separately from units returned to a documented rework loop.

- Selected flow: Select the matching Tiangong waste flow by failed product material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of failed units transferred to waste treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming instruments released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_test_records`
- Sources:

##### Elementary flows

### Process: Product packaging and factory-gate release (`p_packaging`)

#### Inputs

##### Product flows

###### Conforming instruments to packaging (`conforming_instruments_to_packaging`)

Record the net mass of conforming instruments transferred from final acceptance to packaging.

- Selected flow: Internal conforming-instrument product flow
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of finished reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources:

###### Packaging material inputs (`packaging_material_inputs`)

Record primary, secondary, and transport packaging separately by material and reusable status. Packaging mass is not included in the 1 kg reference-product mass.

- Selected flow: Select the matching Tiangong packaging material product flow
- Flow property / unit: Mass / kg
- Amount rule: measured or purchasing-and-inventory-reconciled packaging consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of finished reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished instruments at plant gate (`finished_instrument_output`)

This is the reference product output. Report net instrument mass excluding separately inventoried packaging and retain the product-family mix and required qualifiers.

- Selected flow: Hydrometers and similar floating instruments, thermometers, pyrometers, barometers, hygrometers and psychrometers `7d4fdf4e-5846-4fc5-b373-e360c312974b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net mass of conforming finished instrument output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Packaging process waste (`packaging_waste`)

Record offcuts, damaged packaging, and discarded protective materials separately by material and treatment route.

- Selected flow: Select the matching Tiangong waste flow for each packaging waste and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of finished reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared foreground processes and mixed product families | First avoid allocation through process subdivision, separate metering, separate production records, or expansion of the recorded process boundary where justified. | `eu-pef-2021` |
| `allocation_physical` | remaining shared utilities, equipment time, and consumables | When subdivision is not practicable, use a documented causal physical driver such as machine time, metered energy, processed mass, test duration, or item count only when that driver represents resource use. Do not default to mass for calibration or test activities whose burden is driven by time or test protocol. | `eu-pef-2021` |
| `allocation_economic` | multifunctional processes without a defensible physical relation | Use economic allocation only when no defensible physical relation is available. Record prices, currency, geography, time basis, and sensitivity to the allocation choice. | `eu-pef-2021` |
| `allocation_scrap_rework` | scrap, recovered material, and reworked instruments | Report gross material input, internal rework return, externally recovered material output, and treatment separately. Apply one declared recycled-content and end-of-life convention consistently and do not credit internal scrap twice. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `p_component_fabrication`; `p_instrument_assembly` | materials, components, filling media, chemicals, and mercury where applicable | purchasing, BOM, stores issue/return, supplier declaration, batch record | material or component id; product family; lot; issued mass; returned mass; inventory change; supplier; composition; mercury status; restricted-substance status | reconcile BOM and lot records to stores and supplier documents | kg, with original unit retained | each lot; aggregated for the reporting period | full declared reporting period or representative campaign | each included manufacturing site | sum net consumed quantities by material/component and product family, then allocate only under section 7 | approved BOM; weigh records; inventory reconciliation; supplier composition or compliance declaration |
| `cp_energy_records` | `p_component_fabrication`; `p_instrument_assembly`; `p_calibration_testing` | electricity and fuels | meter, submeter, invoice, fuel issue log | meter id; start/end reading; fuel quantity; unit; process; downtime; allocation driver | prefer process meters; otherwise reconcile facility totals and document allocation | kWh, MJ, kg, or m3 as recorded | continuous or each billing period | full declared reporting period or representative campaign | each included site and process | subtract excluded uses and normalize allocated process totals to the applicable process output | meter calibration or invoice; reconciliation to site total; allocation worksheet |
| `cp_production_output_records` | `p_component_fabrication`; `p_instrument_assembly`; `p_packaging` | accepted components, assembled units, and finished output | production, transfer, weighing, and shipment record | product family; sensing principle; lot; item count; gross mass; tare; net mass; accepted, rework, and reject status | weigh by lot or apply a documented lot-specific item-to-mass conversion | kg and item | each lot | full declared reporting period or representative campaign | each included production and release point | sum accepted net mass by product family; exclude packaging from reference-product mass | calibrated scale record; lot genealogy; release and shipment reconciliation |
| `cp_calibration_test_records` | `p_calibration_testing` | calibration, verification, test inputs, releases, rework, and rejects | calibration certificate, test report, equipment log, acceptance record | instrument family; serial/lot; measurand; measuring interval; test points; reference standard; reference certificate; indication/error; uncertainty where reported; criterion; decision; test duration; energy/material use | execute the declared product-specific procedure and retain traceability evidence | measurand-specific unit, kg, item, kWh | each tested unit or statistically justified lot | full declared reporting period or representative campaign | each included calibration/test line | aggregate pass, rework, and reject mass and resource use by product family without averaging incompatible measurands | procedure revision; reference-standard identity; calibration status; traceability chain; reviewer approval |
| `cp_packaging_records` | `p_packaging` | packaging materials | packaging BOM, purchasing, issue/return, reusable-packaging log | packaging material; supplier; lot; issued and returned mass; recycled content where evidenced; reusable cycles; product family | reconcile packaging BOM and inventory to released product | kg | each lot; aggregated for reporting period | full declared reporting period or representative campaign | each included packaging line | sum net packaging consumed by material and reusable status per kg reference product | packaging specification; weigh record; inventory reconciliation |
| `cp_waste_emission_records` | all included processes | waste, wastewater, and direct emissions | waste transfer note, weighbridge, wastewater meter/sample, emission monitor, permit report | waste or pollutant identity; hazardous status; mercury content where applicable; mass/volume; compartment; destination; treatment; date; process | use measured transfer or monitoring data; use a documented calculation only when direct measurement is unavailable | kg, m3, or pollutant-specific unit | each transfer or monitoring interval | full declared reporting period or representative campaign | each included site and process | sum by identity, compartment, hazardous status, and destination; reconcile mercury and major material balances | transfer document; laboratory result; monitor calibration; permit report; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | finished reference product | Sum measured conforming net instrument mass; where item counts are converted, multiply count by the measured lot-specific mean net mass; exclude packaging mass. | conforming item count; lot-specific net mass; direct lot weights; packaging tare | kg net finished reference product |  |
| `calc_normalized_inventory` | every foreground inventory row | Divide the allocated reporting-period quantity by reporting-period kg net finished reference product, preserving the original record and conversion factor. | collected quantity; allocation result where applicable; net reference mass | quantity per kg reference product | `eu-pef-2021` |
| `calc_process_mass_balance` | fabrication, assembly, testing, and packaging | Reconcile opening inventory plus inputs with accepted output, rework transfer, waste, emissions, closing inventory, and documented measurement difference for each material family. Investigate rather than silently distributing an unexplained difference. | inventory; input; output; rework; waste; emission records | disclosed process mass balance and unexplained difference |  |
| `calc_product_family_mix` | category production mix | Divide conforming net output mass for each instrument family and sensing principle by total conforming net output mass; retain zero-production families as out of scope for the period. | family-level conforming net masses | declared production-mix shares |  |
| `calc_allocation` | shared foreground quantities | Apply the declared section 7 hierarchy and driver to the reconciled shared total, then verify allocated quantities sum to that total. | shared quantity; driver values; product-family outputs | allocated foreground quantities and allocation residual | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and product-family mix | Product names, instrument families, sensing principles, UUID references, and CPC context shall be internally consistent; CPC 48252/48253 instruments or separate parts shall not be silently included. | product specifications; BOM; classification review; release records |
| `dq_temporal` | all foreground data | State the reporting period and demonstrate that production, materials, utilities, waste, and output records cover the same period or document reconciled exceptions. | dated source records; production calendar; reconciliation |
| `dq_completeness` | all included processes | Demonstrate process and input/output completeness against the declared boundary, including rework, rejects, packaging, wastewater, direct emissions, and mercury-containing streams where applicable. | process map; mass and energy reconciliation; exclusion log; `eu-pef-2021` |
| `dq_measurement` | meters, scales, and test equipment | Retain equipment identity, unit, calibration status, data gaps, substitutions, and uncertainty information where available. Calibration evidence used to claim metrological traceability shall identify the documented chain and stated uncertainties. | calibration certificates; meter register; uncertainty or data-gap record; `ilac-p10-2020` |
| `dq_calibration_performance` | finished instrument acceptance | Retain product-specific measurand, range, test points, reference standard, result, criterion, and decision; do not merge incompatible instrument families into one performance claim. | calibration/test report; release approval; `wmo-no-8` |
| `dq_supplier_upstream` | purchased materials, components, and services | Record supplier, geography, technology, data period, product state, and proxy rationale for major upstream datasets. | supplier records; dataset metadata; proxy review |
| `dq_mercury_electronics` | mercury-added or electrical/electronic variants | Declare mercury-added status and applicable restricted-substance or exemption evidence. Treat legal applicability as jurisdiction- and date-specific and do not infer inventory mass from a legal limit. | supplier declarations; composition records; legal applicability review; `minamata-mercury-2024`; `eu-rohs-2011-65` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The product flow UUID shall be `7d4fdf4e-5846-4fc5-b373-e360c312974b`, the reference flow property UUID shall be `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group UUID shall be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference unit shall be kg. |  |
| `validate_required_qualifiers` | foreground data package | Reject as incomplete any package that omits instrument family, sensing principle, measuring interval, accuracy or error declaration, calibration or verification status, mercury-added status, net mass basis, geography, reporting period, or packaging inclusion status. | `wmo-no-8` |
| `validate_scope` | product-category identity | Confirm that each included finished product is within the named instrument families. Flag flow/level/general pressure instruments, physical or chemical analysis instruments, medical sphygmomanometers, controllers, and separate parts for manual scope review. | `un-cpc-3-0` |
| `validate_process_coverage` | process inventory | Require assembly, calibration/testing, and packaging records; require component fabrication/finishing records when those operations occur on site; require upstream datasets for purchased components. | `eu-pef-2021` |
| `validate_inventory_reconciliation` | foreground totals | Confirm output mass, material balances, energy totals, waste transfers, and allocation totals reconcile to source records. Report unexplained residuals and data gaps; do not force them to zero. | `eu-pef-2021` |
| `validate_calibration_traceability` | calibration and performance testing | Confirm that claimed metrological traceability is supported by a documented unbroken calibration chain with stated uncertainties and a suitable reference service or documented accepted alternative. | `ilac-p10-2020` |
| `validate_mercury_status` | mercury-relevant products | Require an explicit mercury-added declaration. If mercury is present, require separate input, contained output, loss, waste, treatment, and jurisdiction/date applicability records; do not interpret this PCR as regulatory authorization. | `minamata-mercury-2024` |
| `validate_electronic_variant` | electrical or electronic products | Require the electrical/electronic applicability decision, material or supplier declaration, and any relied-on exemption identifier; do not convert substance limits into foreground quantities. | `eu-rohs-2011-65` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for a declared instrument family or disclosed category production mix |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing-footprint modelling at the declared plant gate; supply-chain inventory for a specified instrument family or disclosed production mix; downstream lifecycle models that add distribution, use, maintenance, and end-of-life explicitly |
| excluded_use | Unsupported comparison between instrument families or sensing principles; performance or legal-conformity certification; use-stage measurement claims; undisclosed proxy for CPC 48252/48253 instruments or parts; regulatory authorization for mercury-added products |
| required_metadata | canonical PCR id; reference UUIDs; instrument family and sensing principle; product-family mix; measuring interval; accuracy/error and resolution; calibration/verification status; mercury-added and electronic status; net mass basis; site geography; reporting period; technology route; packaging treatment; allocation; upstream datasets; exclusions |
| required_quality_disclosure | primary-data coverage; meter and scale status; calibration traceability; BOM and supplier-data completeness; mass, energy, waste, and allocation reconciliation; proxy use; data gaps; uncertainty information where available; legal-applicability date and jurisdiction for mercury or electronic restrictions |
| update_trigger | Change in product-family mix, sensing principle, mercury-added status, electronic architecture, major material or supplier, on-site fabrication scope, calibration/test procedure, energy system, packaging, allocation method, production geography, or applicable substance-control requirements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure and explanatory notes, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-10) | CPC 48251 category identity and exclusions from adjacent product scopes |
| `eu-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-10) | Functional-unit and reference-flow framing; manufacturing boundary; inventory completeness; primary data, allocation, packaging, and data-quality rules |
| `wmo-no-8` | official_guidance | World Meteorological Organization, Guide to Instruments and Methods of Observation (WMO-No. 8), 2021/2018 edition, https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8 (retrieved 2026-08-10) | Temperature, atmospheric-pressure, and humidity instrument qualifiers; testing, calibration, intercomparison, and quality-management records |
| `ilac-p10-2020` | official_guidance | ILAC-P10:07/2020, ILAC Policy on Metrological Traceability of Measurement Results, https://ilac.org/?ddownload=123220 (retrieved 2026-08-10) | Calibration traceability chain, stated uncertainty, suitable calibration service, and retained evidence |
| `minamata-mercury-2024` | standard | Minamata Convention on Mercury, Text and Annexes, October 2024 booklet, https://minamataconvention.org/en/documents/minamata-convention-mercury-text-and-annexes (retrieved 2026-08-10) | Identification and separate accounting of mercury-added barometers, hygrometers, thermometers, and related mercury-containing inputs and wastes; regulatory-applicability disclosure |
| `eu-rohs-2011-65` | standard | Directive 2011/65/EU on restriction of certain hazardous substances in electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0065 (retrieved 2026-08-10) | Conditional BOM, restricted-substance, and exemption declarations for electrical/electronic monitoring and control instrument variants |
