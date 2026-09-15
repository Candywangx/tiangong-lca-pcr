---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.liquid-crystal-devices-n-e-c-lasers-except-laser-diodes-other-optical-appliances-and-in-0cb52f2d
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Liquid crystal devices n.e.c.; lasers, except laser diodes; other optical appliances and instruments n.e.c.

## 1. Scope and Applicability

This PCR covers factory-gate production of finished products within the reviewed semantic boundary of liquid-crystal devices not elsewhere classified, lasers other than laser diodes, and other optical appliances and instruments not elsewhere classified. It supports three mutually exclusive foreground routes: a liquid-crystal-device route, a non-diode-laser route, and an other-optical-instrument route. A data package shall select exactly one route and shall disclose the actual product function, architecture, performance specification, included accessories, and market state.

The PCR excludes laser diodes as products; separately supplied optical fibres, lenses, prisms, mirrors, and other optical elements that are products of another category; cameras and photographic equipment classified elsewhere; parts and accessories supplied as separate products; upstream production of purchased materials and components; capital equipment unless the study explicitly includes it; distribution, use, maintenance, and end-of-life after the factory gate. Purchased laser diodes may be recorded as components of a non-diode laser, but the finished reference product cannot itself be a laser diode.

The category is heterogeneous. The inventory cards are a minimum route-specific set grounded in verified product and process evidence. A foreground package shall add further atomic exchange rows for its actual bill of materials, process chemicals, gases, wastes, and direct emissions when they cross the declared boundary; it shall not aggregate them into umbrella flows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.liquid-crystal-devices-n-e-c-lasers-except-laser-diodes-other-optical-appliances-and-in-0cb52f2d |
| classification_refs | CPC 3.0: 48315 |
| covered_products | Finished liquid-crystal devices n.e.c.; finished lasers other than laser diodes; finished optical appliances and instruments n.e.c. |
| excluded_products | Laser diodes as products; separately supplied optical elements classified elsewhere; photographic equipment classified elsewhere; separately supplied parts and accessories; incomplete prototypes not placed at the declared factory gate |
| representative_product | A finished, accepted device within CPC 48315 whose mass, optical function, architecture, performance grade, included accessories, and route are declared |
| production_route | Exactly one of `lcd_device_manufacturing`, `non_diode_laser_manufacturing`, or `other_optical_instrument_manufacturing` |
| market_state | Finished and acceptance-tested at the factory gate; packaging inclusion or exclusion declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of a finished CPC 48315 device that provides the declared liquid-crystal, laser, or other optical function |
| How much | 1 kg net mass of accepted finished product at the factory gate |
| How well | Meets the declared optical function, architecture, wavelength or spectral range where relevant, performance grade, dimensional configuration, safety class where relevant, and acceptance-test criteria |
| How long or cycle | One factory-gate delivery; no use-life equivalence is asserted |
| reference_flow_link | The reference product flow below is the accepted net product mass produced by the selected route |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Liquid crystal devices n.e.c., lasers, except laser diodes, other optical appliances and instruments n.e.c. `e2494992-0c4a-4d0f-9ef2-34c4eeedce96` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | selected route; product subtype and intended optical function; laser architecture and gain medium or LCD technology where applicable; wavelength or spectral range where applicable; performance grade and acceptance criteria; included components and accessories; net-product mass basis; packaging inclusion; manufacturing geography; technology period; factory-gate condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | accepted finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net accepted product mass on a calibrated balance. Exclude packaging unless the reference-flow qualifiers explicitly include it. Normalize all route inventory quantities to 1 kg net accepted product. |
| `electricity_energy_conversion` | purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered electricity record and convert kWh to MJ using 1 kWh = 3.6 MJ. Do not add upstream grid emissions as foreground elementary flows. |
| `water_mass_conversion` | product-water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records. When water is metered by volume, convert using a documented density applicable to the measured temperature and water quality; retain the source volume and density evidence. |
| `gas_reference_conditions` | gaseous natural gas and carbon-dioxide product rows | Volume or Mass as specified by the selected Tiangong flow | m3 or kg | For volume records disclose temperature, pressure, and whether the reading is actual or normalized volume. Do not substitute volume and mass without a composition- and condition-specific conversion. |

## 5. System Boundary

The foreground boundary begins when purchased materials, components, chemicals, gases, water, and energy cross the manufacturing-site gate. It includes the selected route's in-house forming, coating or patterning, cleaning, assembly, optical alignment, testing, rework, and on-site waste handling up to accepted finished product at the factory gate. Upstream production is represented by linked product datasets. Downstream distribution, use, maintenance, and end-of-life are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, chemicals, gases, water, and energy at the manufacturing-site gate, with incoming product state and supplier geography declared |
| starting_condition_role | Gate-to-gate foreground starting condition linked to upstream product datasets |
| product_classification_scope | Finished CPC 48315 products only; the selected route and product subtype are mandatory qualifiers |
| recursive_input_rule | A purchased input that itself falls within this PCR category is recorded once as an atomic product input with an upstream dataset; it is not recursively reconstructed inside the same foreground process |
| upstream_dataset_requirement | Use geography-, technology-, product-state-, and time-representative upstream datasets for every purchased input; disclose proxies and missing component coverage |
| disclosure | Declare route, product architecture, optical performance, included components and accessories, packaging treatment, manufacturing geography, technology period, allocation, cut-offs, rework, rejects, wastewater destination, and all omitted capital or downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_selection` | foreground model | Select exactly one of the three process routes. Do not average across liquid-crystal, non-diode-laser, and other-optical-instrument products. | `un-cpc-3-0-structure-2025` |
| `sb_atomic_bom_completion` | purchased inputs and outputs | Add an individual row for every additional material, component, process chemical, gas, waste, or direct emission in the actual route; do not use aggregated labels such as optical materials, utilities, chemicals, or wastes. | `us-epa-2001-computer-display-lca`; `janssen-et-al-2024-mosaic-instrument-lca` |
| `sb_upstream_separation` | purchased inputs | Model upstream production through linked product datasets and keep supplier production burdens outside the foreground gate-to-gate inventory. | `us-epa-2001-computer-display-lca`; `janssen-et-al-2024-mosaic-instrument-lca` |
| `sb_testing_and_rework` | selected manufacturing route | Include acceptance testing, optical alignment, failed tests, rework energy and materials, and resulting rejects when controlled by the reporting site. | `nasa-cr-95573-1968`; `janssen-et-al-2024-mosaic-instrument-lca` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `lcd_device_manufacturing` | Liquid-crystal-device manufacturing | `conditional` | Include only when the reference product is a liquid-crystal device within CPC 48315 | Foreground panel/device fabrication, cleaning, assembly, testing, rework, and reject handling | 1 kg accepted finished liquid-crystal device |
| `non_diode_laser_manufacturing` | Non-diode-laser manufacturing | `conditional` | Include only when the reference product is a laser other than a laser diode | Foreground laser-head/system assembly, alignment, cooling integration, testing, rework, and reject handling | 1 kg accepted finished non-diode laser |
| `other_optical_instrument_manufacturing` | Other optical-instrument manufacturing | `conditional` | Include only when the reference product is another optical appliance or instrument n.e.c. | Foreground optical-component preparation, electronics integration, assembly, alignment, testing, rework, and reject handling | 1 kg accepted finished other optical instrument |

Exactly one process in the Process Map applies to a conforming foreground data package.

### Process: Liquid-crystal-device manufacturing (`lcd_device_manufacturing`)

#### Inputs

##### Product flows

###### Indium-tin-oxide coated glass (`lcd_ito_coated_glass`)

Record the coated glass sheets consumed by the liquid-crystal-device route.

- Selected flow: Indium tin oxide coated glass `8b595156-1e52-4615-aebf-2e9f72658a27`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming mass issued to the route, net of returned unused sheets
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_inputs`
- Sources: `us-epa-2001-computer-display-lca`

###### Display-panel liquid-crystal mixture (`lcd_liquid_crystal_mixture`)

Record the specific formulated liquid-crystal mixture charged to cells; disclose formulation identity without exposing confidential composition where prohibited.

- Selected flow: Liquid crystal mixture for display panel
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued minus documented recoverable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_inputs`
- Sources: `us-epa-2001-computer-display-lca`

###### LCD polarizer film (`lcd_polarizer_film`)

Record the mass of polarizer film laminated into the device, including route-controlled cutting losses in the issued quantity.

- Selected flow: Polarizer film for liquid crystal display
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to lamination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_inputs`
- Sources: `us-epa-2001-computer-display-lca`

###### Sodium hydroxide (`lcd_sodium_hydroxide`)

Record sodium hydroxide crossing the site boundary for route-controlled cleaning or etching; disclose solution concentration and report active-product mass consistently.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured sodium-hydroxide product mass issued to the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_inputs`
- Sources: `us-epa-2001-computer-display-lca`

###### Purchased electricity (`lcd_electricity`)

Record metered electricity for panel/device processing, clean-room support allocated to the route, assembly, testing, and rework.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: route-attributed metered electricity converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_inputs`
- Sources: `us-epa-2001-computer-display-lca`

###### Process water (`lcd_process_water`)

Record process water supplied for cleaning, rinsing, and other route-controlled operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured supplied process-water mass, or converted volume under `water_mass_conversion`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_inputs`
- Sources: `us-epa-2001-computer-display-lca`

###### Gaseous natural gas (`lcd_natural_gas`)

Record gaseous natural gas only when it crosses the foreground boundary as fuel or process gas for the selected LCD route; disclose role and reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured delivered volume at disclosed reference conditions; record not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_inputs`
- Sources: `us-epa-2001-computer-display-lca`

##### Waste flows

##### Elementary flows

No default elementary input is prescribed. Add each directly withdrawn resource as an atomic row when it crosses the selected foreground boundary.

#### Outputs

##### Product flows

###### Accepted finished liquid-crystal device (`lcd_reference_product`)

Record the net mass of acceptance-tested finished liquid-crystal devices leaving the process.

- Selected flow: Liquid crystal devices n.e.c., lasers, except laser diodes, other optical appliances and instruments n.e.c. `e2494992-0c4a-4d0f-9ef2-34c4eeedce96`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass before normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: normalized to 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_outputs`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Glass-production waste (`lcd_glass_production_waste`)

Record discarded coated or uncoated glass generated by cutting, patterning, breakage, or quality rejection; disclose contamination and destination.

- Selected flow: waste from glass production `9e75655e-039d-421e-abec-bbe625491bc6`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_outputs`
- Sources: `us-epa-2001-computer-display-lca`

###### Spent liquid-crystal mixture (`lcd_spent_liquid_crystal_mixture`)

Record spent or off-specification liquid-crystal mixture separately from aqueous wastewater and other solvents.

- Selected flow: Spent liquid crystal mixture
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_outputs`
- Sources: `us-epa-2001-computer-display-lca`

###### LCD-process wastewater (`lcd_process_wastewater`)

Record the aqueous wastewater leaving the LCD foreground process before off-site treatment; disclose whether internally recycled water has been netted out.

- Selected flow: Liquid crystal device process wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume to the next treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lcd_outputs`
- Sources: `us-epa-2001-computer-display-lca`

##### Elementary flows

Add each measured direct emission as a separate elementary-flow card when it crosses the site boundary. Upstream grid emissions are not foreground outputs.

### Process: Non-diode-laser manufacturing (`non_diode_laser_manufacturing`)

#### Inputs

##### Product flows

###### Nd:YAG laser crystal (`laser_nd_yag_crystal`)

Record the finished Nd:YAG gain crystal only for a solid-state-laser architecture that uses it. Other gain media require their own atomic product-flow cards.

- Selected flow: Nd:YAG laser crystal gain medium
- Flow property / unit: Mass / kg
- Amount rule: measured incoming crystal mass issued to accepted and rejected laser heads; record not applicable when the architecture does not use Nd:YAG
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_laser_inputs`
- Sources: `nasa-cr-95573-1968`

###### Carbon dioxide laser gas (`laser_carbon_dioxide`)

Record supplied carbon dioxide only for a carbon-dioxide-laser architecture; other laser gases require separate atomic rows.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: measured supplied carbon-dioxide product mass; record not applicable when the architecture does not use carbon dioxide
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_laser_inputs`
- Sources: `nasa-cr-95573-1968`

###### Optical glass (`laser_optical_glass`)

Record optical glass incorporated into the laser resonator or beam-conditioning assembly; finished mirrors or lenses purchased separately require their own atomic component rows.

- Selected flow: Optical Glass `23ec9229-12c9-4994-b7ec-ccb2220a7b2f`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming optical-glass mass issued to the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_laser_inputs`
- Sources: `nasa-cr-95573-1968`

###### Purchased electricity (`laser_electricity`)

Record metered electricity for assembly, optical alignment, power-conversion tests, cooling tests, acceptance testing, and rework.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: route-attributed metered electricity converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_laser_inputs`
- Sources: `nasa-cr-95573-1968`

###### Process water (`laser_process_water`)

Record process water supplied to route-controlled cooling and cleaning; closed-loop recirculation shall be disclosed without double counting recirculated water as fresh input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up and once-through process-water mass, or converted volume under `water_mass_conversion`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_laser_inputs`
- Sources: `nasa-cr-95573-1968`

##### Waste flows

##### Elementary flows

No default elementary input is prescribed. Add each directly withdrawn resource as an atomic row when it crosses the selected foreground boundary.

#### Outputs

##### Product flows

###### Accepted finished non-diode laser (`laser_reference_product`)

Record the net mass of acceptance-tested finished non-diode lasers leaving the process.

- Selected flow: Liquid crystal devices n.e.c., lasers, except laser diodes, other optical appliances and instruments n.e.c. `e2494992-0c4a-4d0f-9ef2-34c4eeedce96`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass before normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: normalized to 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_laser_outputs`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Rejected Nd:YAG laser crystal (`laser_rejected_nd_yag_crystal`)

Record rejected or broken Nd:YAG gain crystals separately from other glass or electronic waste; record not applicable for architectures without Nd:YAG.

- Selected flow: Rejected Nd:YAG laser crystal
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_laser_outputs`
- Sources: `nasa-cr-95573-1968`

###### Non-diode-laser-process wastewater (`laser_process_wastewater`)

Record aqueous wastewater from cleaning or once-through cooling before off-site treatment, excluding internally recirculated water.

- Selected flow: Non-diode laser process wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume to the next treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_laser_outputs`
- Sources: `nasa-cr-95573-1968`

##### Elementary flows

Add each measured direct release of laser gas, cleaning chemical, combustion product, or other substance as a separate elementary-flow card. Do not copy upstream electricity emissions into the foreground inventory.

### Process: Other optical-instrument manufacturing (`other_optical_instrument_manufacturing`)

#### Inputs

##### Product flows

###### Optical glass (`optical_optical_glass`)

Record optical glass issued to in-house shaping, polishing, or assembly; separately purchased finished optical components require individual component rows.

- Selected flow: Optical Glass `23ec9229-12c9-4994-b7ec-ccb2220a7b2f`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming optical-glass mass issued to the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_inputs`
- Sources: `janssen-et-al-2024-mosaic-instrument-lca`

###### Printed wiring board (`optical_printed_wire_board`)

Record printed wiring boards incorporated into instrument control, sensing, or readout assemblies; disclose populated or unpopulated supply state.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming board mass incorporated into accepted and rejected assemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_inputs`
- Sources: `janssen-et-al-2024-mosaic-instrument-lca`

###### Purchased electricity (`optical_electricity`)

Record metered electricity for optical-component preparation, clean-room or controlled-space support allocated to the route, electronics integration, alignment, acceptance testing, and rework.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: route-attributed metered electricity converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_inputs`
- Sources: `janssen-et-al-2024-mosaic-instrument-lca`

###### Process water (`optical_process_water`)

Record process water supplied for in-house glass preparation, polishing, and cleaning.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water mass, or converted volume under `water_mass_conversion`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_inputs`
- Sources: `janssen-et-al-2024-mosaic-instrument-lca`

##### Waste flows

##### Elementary flows

No default elementary input is prescribed. Add each directly withdrawn resource as an atomic row when it crosses the selected foreground boundary.

#### Outputs

##### Product flows

###### Accepted finished other optical instrument (`optical_reference_product`)

Record the net mass of acceptance-tested finished optical instruments leaving the process.

- Selected flow: Liquid crystal devices n.e.c., lasers, except laser diodes, other optical appliances and instruments n.e.c. `e2494992-0c4a-4d0f-9ef2-34c4eeedce96`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass before normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: normalized to 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_outputs`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Glass polishing sludge (`optical_glass_polishing_sludge`)

Record sludge containing glass fines and polishing medium from in-house optical-glass polishing; disclose water content and treatment destination.

- Selected flow: Glass polishing sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass transferred to recovery, treatment, or disposal, with dry-solids fraction reported
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_outputs`
- Sources: `janssen-et-al-2024-mosaic-instrument-lca`

###### Optical-instrument-process wastewater (`optical_process_wastewater`)

Record aqueous wastewater from polishing and cleaning before off-site treatment, excluding water retained in separately reported sludge.

- Selected flow: Optical instrument process wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume to the next treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_outputs`
- Sources: `janssen-et-al-2024-mosaic-instrument-lca`

##### Elementary flows

Add each measured direct emission from polishing, coating, cleaning, combustion, or testing as a separate elementary-flow card. Upstream electricity emissions are not foreground outputs.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | shared lines, clean rooms, utilities, and test facilities | Subdivide or meter route-specific processes wherever technically feasible before applying allocation. |  |
| `al_physical_driver` | unavoidable shared burdens | Allocate by a documented causal physical driver such as machine time, metered energy, occupied controlled-space time, or processed mass when that driver represents resource use. |  |
| `al_economic_fallback` | shared burdens without defensible physical relation | Use economic allocation only as a disclosed fallback; report the revenue basis, price period, currency, and sensitivity to material price changes. |  |
| `al_recycling_boundary` | recovered glass, metal, boards, or process chemicals | Report waste quantity and recovery destination at the factory gate. Do not claim avoided burden or recycled-content credit inside the foreground inventory unless the downstream modelling method and allocation convention are explicitly declared. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lcd_inputs` | `lcd_device_manufacturing` | each listed atomic product input | purchase, issue, return, meter, and batch records | row_id; supplier flow identity; quantity; unit; concentration or reference conditions; issue and return quantity; meter boundary; batch_id; timestamp | reconcile purchasing and stores records with route meters and production issues | row unit | each batch or continuous meter with monthly reconciliation | representative continuous 12-month period or all batches for shorter campaigns | all site operations serving the selected LCD route | sum net issued quantity by row and divide by accepted net product mass | invoices; material issue and return records; meter calibration; batch genealogy; reconciliation record |
| `cp_lcd_outputs` | `lcd_device_manufacturing` | accepted product and each listed waste output | scale, acceptance, reject, discharge, and waste-transfer records | row_id; quantity; unit; batch_id; acceptance status; contamination; destination; discharge meter; timestamp | reconcile accepted-product scales with reject logs, discharge meters, and waste manifests | kg or m3 | each batch or dispatch, with monthly reconciliation | same period as `cp_lcd_inputs` | same foreground site and route | sum each output by row and divide by accepted net product mass | calibrated scales; acceptance records; waste manifests; discharge-meter records; mass-balance reconciliation |
| `cp_laser_inputs` | `non_diode_laser_manufacturing` | each listed atomic product input | purchase, issue, gas, water, electricity, and test records | row_id; architecture; material or gas identity; quantity; unit; gas conditions; meter boundary; serial_or_batch_id; timestamp | reconcile component issues and utility meters to the declared laser architecture and accepted serial numbers | row unit | each build or continuous meter with monthly reconciliation | representative continuous 12-month period or all builds for shorter campaigns | all site operations serving the selected laser route | sum route-attributed quantity by row and divide by accepted net product mass | supplier records; issue records; meter calibration; architecture bill of materials; serial genealogy |
| `cp_laser_outputs` | `non_diode_laser_manufacturing` | accepted product and each listed waste output | scale, acceptance-test, reject, discharge, and waste-transfer records | row_id; quantity; unit; architecture; serial_or_batch_id; acceptance status; destination; timestamp | reconcile accepted-product scales with test logs, reject records, wastewater meters, and waste manifests | kg or m3 | each build, test, or dispatch, with monthly reconciliation | same period as `cp_laser_inputs` | same foreground site and route | sum each output by row and divide by accepted net product mass | calibrated scales; test records; reject records; waste manifests; discharge-meter records |
| `cp_optical_inputs` | `other_optical_instrument_manufacturing` | each listed atomic product input | purchase, issue, water, electricity, and production records | row_id; component state; quantity; unit; meter boundary; instrument_id_or_batch; timestamp | reconcile bill-of-materials issues and route meters to accepted instrument builds | row unit | each build or continuous meter with monthly reconciliation | representative continuous 12-month period or all builds for shorter campaigns | all site operations serving the selected optical-instrument route | sum route-attributed quantity by row and divide by accepted net product mass | supplier records; issue records; bill of materials; meter calibration; build genealogy |
| `cp_optical_outputs` | `other_optical_instrument_manufacturing` | accepted product and each listed waste output | scale, acceptance-test, sludge, discharge, and waste-transfer records | row_id; quantity; unit; instrument_id_or_batch; acceptance status; sludge solids fraction; destination; timestamp | reconcile accepted-product scales with test logs, sludge records, discharge meters, and waste manifests | kg or m3 | each build or dispatch, with monthly reconciliation | same period as `cp_optical_inputs` | same foreground site and route | sum each output by row and divide by accepted net product mass | calibrated scales; acceptance records; sludge sampling; waste manifests; discharge-meter records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_reference_normalization` | every selected-route inventory row | normalized amount = route-period row quantity / route-period accepted net product mass | reconciled row quantity; accepted net product mass | row amount per 1 kg accepted finished product |  |
| `cr_electricity_mj` | electricity rows | electricity_MJ = metered_electricity_kWh × 3.6 MJ/kWh | route-attributed electricity meter reading in kWh | electricity in MJ per reference flow |  |
| `cr_water_mass` | process-water rows measured by volume | water_mass_kg = measured_volume_m3 × documented_density_kg_per_m3 | measured water volume; applicable measured or supplier density | process-water mass in kg per reference flow |  |
| `cr_route_mass_balance` | each selected route | reconcile total measured incoming mass with accepted product, separately reported waste, direct emissions, inventory change, and a disclosed balance difference; investigate material differences before release | atomic input and output records; opening and closing inventory | route mass-balance check and unresolved difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flows | Preserve supplier product identity, Tiangong UUID where confirmed, and the exact product or waste state; do not substitute broad category flows for unresolved atomic exchanges. | supplier specification; direct-read identity audit; batch or waste record |
| `dq_route` | product and process identity | Demonstrate that exactly one route applies and disclose subtype, architecture, optical function, wavelength or spectral range, performance grade, and acceptance criteria. | product specification; routing; bill of materials; acceptance plan |
| `dq_measurement` | mass, volume, and electricity records | Use calibrated instruments with stated coverage and retain all conversions, concentrations, gas reference conditions, and meter allocation factors. | calibration certificates; raw readings; conversion worksheet |
| `dq_temporal` | foreground dataset period | Prefer a continuous 12-month period; for shorter or campaign production, cover all builds and explain seasonality, utilization, start-up, and rework representativeness. | production calendar; meter period; campaign records |
| `dq_completeness` | selected route | Reconcile purchases, issues, returns, accepted output, rejects, waste transfers, wastewater, direct emissions, and inventory changes; disclose missing electronics, prototypes, testing, and manufacturing losses. | reconciliation; mass balance; omission register; data coverage matrix |
| `dq_source_fit` | linked upstream datasets | Disclose geography, technology, time, product state, and proxy fit for every material upstream dataset. | dataset mapping table and proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity_and_route` | dataset identity | Confirm the reference product is within CPC 48315, is not a laser diode, and selects exactly one process route with all Required qualifiers. | `un-cpc-3-0-structure-2025` |
| `vr_reference_mass` | reference flow and inventory | Confirm accepted net product equals 1 kg after normalization and every included row uses the same accepted-product denominator. |  |
| `vr_uuid_semantics` | UUID-bearing rows | Confirm selected Tiangong UUID, flow type, property, unit group, product state, and official Chinese baseName remain consistent with the direct-read identity; do not accept a proxy UUID. |  |
| `vr_unresolved_atomic_rows` | UUID-empty rows | Confirm each UUID-empty row remains chemically or physically specific, appears in manifest unresolved metadata, and is not replaced by a broad candidate. |  |
| `vr_inventory_completeness` | selected route | Confirm all actual bill-of-materials inputs, utilities, chemicals, gases, wastes, wastewater, direct emissions, testing, rework, and rejects are represented by atomic rows or disclosed as absent. | `us-epa-2001-computer-display-lca`; `nasa-cr-95573-1968`; `janssen-et-al-2024-mosaic-instrument-lca` |
| `vr_balance_and_allocation` | selected route | Confirm mass-balance differences are investigated and all shared burdens use disclosed subdivision or allocation drivers. |  |
| `vr_range_status` | quantitative QA | Confirm no external empirical range is claimed unless at least two independent, original-text-verified, boundary-compatible sources support it; otherwise retain foreground collection and the manifest evidence need. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product-manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and resolution of intended-use completeness |
| allowed_use | Product carbon footprint or LCA modelling for a declared CPC 48315 device when route, function, architecture, performance, geography, technology period, boundary, and data quality match the study |
| excluded_use | Generic averaging across the three routes; laser-diode production; use-phase service comparison; medical or safety-performance equivalence; substitution for separately classified optical components; claims outside the declared product and factory-gate boundary |
| required_metadata | PCR id and version; product subtype; selected route; optical function; architecture and gain medium or LCD technology where applicable; wavelength or spectral range; performance grade; included accessories; net mass; packaging treatment; geography; technology period; data period; allocation; cut-offs; upstream dataset mapping; unresolved UUIDs |
| required_quality_disclosure | primary-data share; meter and scale coverage; temporal and production coverage; mass-balance difference; rework and reject coverage; clean-room or test-facility allocation; missing bill-of-materials items; wastewater and direct-emission coverage; proxy datasets; range-evidence gaps |
| update_trigger | material change in product architecture, LCD or laser technology, optical performance, supplier bill of materials, site, clean-room or test allocation, yield, energy or water system, waste treatment, upstream dataset fit, or resolution of a UUID or range-evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48315 product-category identity and exclusion of laser diodes from the laser product phrase |
| `us-epa-2001-computer-display-lca` | `official_guidance` | U.S. Environmental Protection Agency, *Desktop Computer Displays: A Life-Cycle Assessment, Volume 1*, December 2001, https://www.epa.gov/sites/default/files/2014-01/documents/computer_display_lca.pdf (retrieved 2026-09-07) | LCD process decomposition; glass, panel components, liquid crystals, polarizer, circuit boards, electricity, fuels, water, waste, wastewater, testing, yield, and uncertainty collection needs; not used as a numeric range |
| `nasa-cr-95573-1968` | `official_guidance` | NASA Contractor Report NASA-CR-95573, *Deep Space Communication and Navigation Study, Volume 2: Communication Technology*, 1 May 1968, https://ntrs.nasa.gov/citations/19680019322 (retrieved 2026-09-07) | Non-diode laser architecture, gain medium, power conversion, ancillary components, and cooling boundary; not used as a numeric range |
| `janssen-et-al-2024-mosaic-instrument-lca` | `literature` | Janssen et al., *Estimate of the environmental impact of the ELT instrument MOSAIC*, Proceedings of SPIE 13099, 130990P, 2024, https://doi.org/10.1117/12.3018865 (retrieved 2026-09-07) | Other optical-instrument subsystem and material boundary; electronics, prototyping, testing, manufacturing loss, transport, and uncertainty disclosure; not used as a numeric range |
