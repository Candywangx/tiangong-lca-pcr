---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-principally-used-in-an-automatic-data-processing-system
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Monitors and projectors principally used in an automatic data processing system

## 1. Scope and Applicability

This PCR applies to finished computer monitors and data projectors whose principal intended function is to present visual output from an automatic data processing (ADP) system. It covers products used in offices, industrial control and engineering, data centres, network operations, digital infrastructure, and comparable professional or institutional settings. A product is in scope only when its product documentation, interfaces, and normal market use establish ADP display as the principal purpose.

Computer monitors and projectors are distinct technology families under this PCR. A monitor presents an image on an integral direct-view panel; a projector uses an imaging device, projection optics, and a lamp, LED, laser, or hybrid light source to form an image on a separate surface. A conforming dataset shall declare the family and shall not average monitor and projector technologies into one foreground product unless a reviewed product-family study supplies transparent model weights and separate technology inventories.

The PCR covers final assembly, integration, functional and power testing, calibration, packaging, and factory-gate output. It also provides conditional rules for vertically integrated display-panel, optical-engine, light-source, electronics, enclosure, stand or mounting-hardware production, and for distribution, use, maintenance, replacement parts, and end-of-life when those stages are included in a lifecycle model.

Television receivers, products principally intended for broadcast or entertainment display independent of an ADP system, digital signage whose principal function is public or commercial signage, cinema projectors, photographic projectors, projection screens, virtual-reality headsets, integrated notebook or all-in-one computer displays, display panels or optical engines sold only as components, and monitors or projectors principally used for a non-ADP purpose are excluded. The presence or absence of a tuner alone is not sufficient evidence of scope; principal intended use shall be demonstrated.

Every foreground data package shall declare product family, model or representative-model set, diagonal display size or declared projected-image size, native resolution, rated luminance for monitors or rated light output for projectors, panel technology or projector imaging and light-source technology, electronic assemblies, power supply, enclosure and stand or mounting configuration, thermal-management components, measured mass, power-test configuration and results, expected service life, packaging bill of materials, production geography, reference year, and included life-cycle stages.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-principally-used-in-an-automatic-data-processing-system |
| classification_refs | CPC 3.0: 47315, exact classification context |
| covered_products | Direct-view computer monitors and data projectors principally used to display output from an ADP system, including office, industrial, data-centre, network-operations, and digital-infrastructure applications |
| excluded_products | Television receivers; non-ADP-principal-use displays and projectors; digital signage principally intended for public or commercial signage; cinema and photographic projectors; projection screens; integrated notebook and all-in-one displays; head-mounted displays; separately sold display panels, optical engines, light sources, and other components |
| representative_product | A finished, tested monitor or data projector configured for connection to an ADP system and ready for packaging at the manufacturing site |
| production_route | Purchased or internally produced display panel or projector optical engine and light source, electronics and power assemblies, enclosure and stand or mounting parts; final integration; firmware loading and calibration; functional and power testing; packaging |
| market_state | Finished, tested, specification-conforming ADP display device at factory gate; packaging is recorded separately from product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished monitor or data projector whose principal intended use is visual output from an ADP system |
| How much | 1 kg of finished display device at factory gate, excluding packaging mass |
| How well | Meets the declared model specification for product family, size, native resolution, luminance or light output, panel or projection technology, interfaces, power states, and included stand or mounting hardware |
| How long or cycle | The declared expected service life in years and operating hours, with projector light-source life and replacement assumptions stated separately |
| reference_flow_link | Product mass measured after final assembly and acceptance testing and before packaging; package, manuals, detached cables, and separately supplied accessories are separate inventory inputs unless physically integrated in the device |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Monitors and projectors, principally used in an automatic data processing system `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family: monitor or projector; principal ADP use evidence; model or weighted model set; device mass; diagonal panel size or projected-image size; native resolution; monitor luminance or projector light output; panel technology or imaging and light-source technology; electronics and power-supply configuration; enclosure and stand or mounting materials; test voltage and frequency; on, sleep, off, and networked-mode power where present; expected service life in years and operating hours; projector light-source life and replacement count; packaging materials and masses; production geography and reference year; included life-cycle stages |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete. The same record shall not substitute a television receiver, a non-ADP display, or a component-only flow for the verified CPC 47315 product flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_device_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted finished-device mass after final assembly and testing and before packaging. Normalize all manufacturing inventory to 1 kg of accepted device output; do not include package mass in the reference amount. |
| `component_mass_basis` | Display subsystem, electronics, power supply, enclosure, stand or mounting hardware, thermal parts, cables, and integrated accessories | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured or supplier-declared component mass by material or subassembly and reconcile it with finished-device mass, manufacturing scrap, and inventory change. |
| `monitor_geometry_performance` | Monitor products | Screen size, area, native resolution, and luminance | inch or cm; dm2 or m2; pixels; cd/m2 | Report visible diagonal and area, horizontal and vertical native pixels, panel technology, and measured or declared luminance together; preserve test configuration and do not infer one parameter from another. |
| `projector_geometry_performance` | Projector products | Projected-image size, native resolution, and light output | inch or m; pixels; lumen | Report imaging technology, light-source technology, native pixel matrix, declared image-size range, and measured or declared light output under the cited test method; do not express projector light output as monitor luminance. |
| `power_state_measurement` | Finished-device power testing and use modelling | Power and energy | W; kWh | Record test method, input voltage, frequency, picture or signal condition, brightness setting, automatic-brightness setting, network and peripheral state, stabilization, and measured on, sleep, off, and networked-mode power where available. Convert energy only from the retained power and time records. |
| `service_life_measurement` | Use and maintenance scenarios | Time and operating duration | year; h | Declare product service life, annual operating hours by power state, duty profile, failure or replacement assumptions, and projector light-source rated and realized life. Do not apply one lifetime to both technology families without evidence. |
| `packaging_mass_separation` | Packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record primary, secondary, and tertiary packaging by material and reuse count; keep packaging mass outside the reference product mass and normalize it separately to 1 kg of accepted device output. |

## 5. System Boundary

The default foreground boundary begins with receipt of components, materials, and packaging at the manufacturing site and ends with an accepted device and its separately inventoried packaging at factory gate. Upstream production of panels, optical engines, light sources, printed circuit assemblies, semiconductors, power supplies, structural materials, and packaging shall be represented by documented upstream datasets. Include those manufacturing processes directly only when they occur within the declared foreground system.

Distribution, use, maintenance, and end-of-life are conditional downstream stages. A lifecycle model that includes use shall retain product-family-specific power tests, operating profiles, service life, geography-specific electricity, and projector light-source replacement. Monitor performance rules and evidence shall not be applied to projector power or optical performance without a projector-specific method.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Display panel or projector imaging and light-source subsystem, electronic and power assemblies, enclosure, stand or mounting hardware, thermal components, cables, assembly consumables, and packaging received at the declared manufacturing boundary |
| starting_condition_role | Upstream product and material inputs to foreground final assembly and test |
| product_classification_scope | Finished monitors and data projectors principally used in an ADP system; component-only and non-ADP display products are outside the canonical product scope |
| recursive_input_rule | An input that is already a finished in-scope monitor or projector shall be recorded as an upstream product flow and shall not be decomposed again inside the receiving foreground process; component panels, optics, light sources, boards, and housings are not finished in-scope products and shall retain their own upstream datasets. |
| upstream_dataset_requirement | Use technology-, material-, supplier-, geography-, and time-representative upstream datasets for display panels or optical engines and light sources, electronics, semiconductors, power supplies, metals, plastics, glass, cables, packaging, energy, transport, and waste treatment; disclose every proxy. |
| disclosure | Declare monitor or projector family; component sourcing versus internal production; included assembly, test, calibration, packaging, distribution, use, maintenance, and end-of-life stages; treatment of capital equipment; cut-offs and proxies; and the exact terminal boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_technology_split` | All datasets | Keep monitor and projector technologies separate through product identity, bill of materials, manufacturing route, performance measures, power testing, service life, and downstream scenarios. A weighted product-family average shall preserve model weights and technology-specific inventory before aggregation. | epd-ies-pcr-2024-06; epa-desktop-display-lca-2001; cheung-projector-lca-2018 |
| `boundary_manufacturing_stages` | Cradle-to-gate and gate-to-gate datasets | Include or link upstream datasets for display or projection subsystem, electronic components and printed circuit assemblies, power supply, enclosure, stand or mounting hardware, thermal management, cables, final assembly, firmware or calibration, acceptance and power testing, packaging, manufacturing waste, wastewater, and direct emissions. | epd-ies-pcr-2024-06; epa-desktop-display-lca-2001 |
| `boundary_monitor_test_scope` | Monitor testing and use modelling | Apply a declared monitor test method and preserve screen area, native resolution, luminance, picture configuration, automatic brightness, network functions, input voltage and frequency, and measured power states. EU electronic-display rules may support monitor methods but explicitly do not govern projectors. | energy-star-displays-v8-2021; eu-electronic-displays-2019-2021 |
| `boundary_projector_test_scope` | Projector testing and use modelling | Apply projector-specific performance and optical-safety methods; preserve imaging device, projection optics, light-source technology, native resolution, light output, power states, thermal management, and light-source replacement. | iec-61947-1-2002; iec-62471-5-2015; cheung-projector-lca-2018 |
| `boundary_downstream_stages` | Lifecycle models | When distribution, use, maintenance, reuse, or end-of-life is included, use declared route, operating profile, service life, repair and replacement records, electricity geography, and treatment scenarios. Do not claim cradle-to-grave coverage when any included stage lacks a dataset or disclosed proxy. | ec-pef-2021; epd-ies-pcr-2024-06; cheung-projector-lca-2018 |
| `boundary_missing_data` | All known flows | Do not omit a known material, energy, water, transport, waste, wastewater, or direct-emission flow merely because a value or UUID is unavailable. Collect it, flag it unresolved, or use a documented proxy and disclose the effect on completeness. | ec-pef-2021; epd-ies-pcr-2024-06 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_assembly` | Component integration and final assembly | required | Always | Foreground device assembly | Accepted assembled devices before functional testing |
| `functional_test` | Firmware loading, calibration, functional and power testing | required | Always | Foreground acceptance and performance test | Tested conforming devices |
| `packaging_dispatch` | Packaging and factory-gate dispatch preparation | required | Always | Foreground packaging and dispatch | 1 kg accepted device output plus separately measured packaging |
| `use_maintenance` | Use, maintenance, and replacement parts | conditional | Include when the declared boundary extends beyond factory gate | Downstream display service | Declared lifetime service delivered by 1 kg of device |
| `end_of_life` | Device and packaging end-of-life | conditional | Include for cradle-to-grave datasets or lifecycle models | Downstream collection and treatment | Waste arising from 1 kg of device and its packaging |

### Process: Component integration and final assembly (`final_assembly`)

#### Inputs

##### Product flows

###### Monitor panel and backlight subsystem (`monitor_panel_subsystem`)

For a monitor, record the complete direct-view panel subsystem, including panel, backlight or emissive display, driver electronics, glass, polarizers and films where supplied as a module. This row is not used for projectors.

- Selected flow: Select the technology- and supplier-specific Tiangong display-panel or module product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared panel-subsystem mass consumed in accepted monitor output, adjusted for stock change and rejected assemblies
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted monitor output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_receipts`
- Sources: `epa-desktop-display-lca-2001`

###### Projector optical engine, imaging device, and light source (`projector_optical_light_subsystem`)

For a projector, record the optical engine, imaging device, projection optics, light source and driver, and associated cooling parts. Preserve lamp, LED, laser, or hybrid identity and replaceable-light-source status. This row is not used for monitors.

- Selected flow: Select the technology- and supplier-specific Tiangong optical-engine, imaging-device, optics, and light-source product flows
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared subsystem mass consumed in accepted projector output, adjusted for stock change and rejected assemblies
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted projector output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_receipts`
- Sources: `iec-61947-1-2002`; `iec-62471-5-2015`; `cheung-projector-lca-2018`

###### Printed circuit assemblies and electronic components (`electronics_assemblies`)

Record main, control, interface, timing, sensor, wireless, and light-source driver boards and integrated electronic components by assembly and supplier.

- Selected flow: Select board-, component-, and supplier-specific Tiangong product flows
- Flow property / unit: Mass / kg
- Amount rule: Purchase and stock reconciliation or measured bill-of-material quantity allocated to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_receipts`
- Sources: `epa-desktop-display-lca-2001`; `cheung-projector-lca-2018`

###### Power supply, cables, and integrated connectors (`power_cable_assemblies`)

Record internal or external power supply, transformers, cables, harnesses, connectors, and any detached cable included with the sold product. Detached accessories remain separate from finished-device reference mass.

- Selected flow: Select component- and supplier-specific Tiangong product flows
- Flow property / unit: Mass / kg; Number of items / Item(s) where procurement is item-based
- Amount rule: Measured bill of materials and purchase or stock reconciliation allocated to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_receipts`
- Sources: `epd-ies-pcr-2024-06`

###### Enclosure, stand or mounting hardware, and thermal parts (`structural_thermal_parts`)

Record plastics, steel, aluminium, glass, fasteners, stand or mounting hardware, heat sinks, fans, filters, and other structural or thermal-management parts by material and recycled-content claim.

- Selected flow: Select material- and component-specific Tiangong product flows
- Flow property / unit: Mass / kg
- Amount rule: Measured component mass and bill of materials allocated to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_receipts`
- Sources: `epa-desktop-display-lca-2001`; `eu-electronic-displays-2019-2021`

###### Assembly consumables and utilities (`assembly_consumables_utilities`)

Record adhesives, solder, cleaning agents, protective films, compressed air, water, electricity, fuels, and other materials or utilities consumed during final integration.

- Selected flow: Select substance-, carrier-, voltage-, and geography-specific Tiangong product flows
- Flow property / unit: Mass / kg; Volume / m3; Energy / kWh or MJ
- Amount rule: Metered or purchase-and-stock-reconciled use allocated by the documented production line rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_utilities`
- Sources: `epd-ies-pcr-2024-06`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled device before acceptance testing (`assembled_device`)

Record assembled monitor or projector mass before acceptance testing, preserving technology family and model.

- Selected flow: Internal intermediate assembled-device flow; select a specific Tiangong flow when available
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of assembled devices transferred to testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted devices needed for 1 kg final output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_scrap_mass_balance`

##### Waste flows

###### Assembly scrap and rejected components (`assembly_scrap`)

Record damaged panels or optics, rejected boards, structural offcuts, consumable residues, and other assembly wastes separately by material and treatment route.

- Selected flow: Select material- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg
- Amount rule: Measured waste plus reconciled component rejects minus documented returns to supplier
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_scrap_mass_balance`
- Sources: `epd-ies-pcr-2024-06`

##### Elementary flows

###### Direct assembly emissions (`assembly_direct_emissions`)

Record substance- and compartment-specific releases from soldering, cleaning, coating, adhesive curing, fuel combustion, and other on-site assembly operations when they cross the environment boundary.

- Selected flow: Select substance- and compartment-specific Tiangong elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_emissions`

### Process: Firmware loading, calibration, functional and power testing (`functional_test`)

#### Inputs

##### Product flows

###### Assembled device entering test (`test_device_input`)

Record the internal transfer of assembled devices without duplicating assembly burdens.

- Selected flow: Internal intermediate assembled-device flow
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred to testing, reconciled to accepted output and test rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_scrap_mass_balance`

###### Electricity for calibration and power testing (`test_electricity`)

Record metered electricity used for firmware loading, warm-up, calibration, burn-in when applied, functional tests, and on, sleep, off, and networked-mode power measurements.

- Selected flow: Select voltage-, supplier-, and geography-specific Tiangong electricity flow
- Flow property / unit: Energy / kWh
- Amount rule: Test-station metered electricity divided by accepted device mass, with failed and retested units retained in the numerator
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power_performance_test`
- Sources: `energy-star-displays-v8-2021`; `eu-electronic-displays-2019-2021`; `iec-61947-1-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted tested device (`accepted_tested_device`)

Record conforming devices that pass declared visual, interface, safety, calibration, and power tests.

- Selected flow: Monitors and projectors, principally used in an automatic data processing system `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted-device mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power_performance_test`

##### Waste flows

###### Test rejects and replaced parts (`test_rejects`)

Record rejected units, replaced boards, panels, optics, light sources, cables, and other parts by disposition: rework, supplier return, reuse, recycling, or waste treatment.

- Selected flow: Select material- and treatment-specific Tiangong waste or product flows
- Flow property / unit: Mass / kg; Number of items / Item(s)
- Amount rule: Test-system reject and rework records reconciled to physical scrap and returned parts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power_performance_test`

##### Elementary flows

### Process: Packaging and factory-gate dispatch preparation (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Accepted device entering packaging (`packaging_device_input`)

Record accepted device mass transferred from test without adding packaging to the reference product mass.

- Selected flow: Monitors and projectors, principally used in an automatic data processing system `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted-device mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Primary, secondary, and tertiary packaging (`packaging_materials`)

Record corrugated board, moulded fibre, plastics, foams, films, bags, pallets, labels, inks, manuals, desiccants, and reusable packaging by material and recycled content. Record detached cables and accessories separately from packaging materials.

- Selected flow: Select material-, recycled-content-, and supplier-specific Tiangong product flows
- Flow property / unit: Mass / kg; Number of items / Item(s) for reusable assets
- Amount rule: Measured packaging bill of materials divided by packaged accepted-device mass; reusable items divided by verified reuse count
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `epd-ies-pcr-2024-06`

###### Packaging and dispatch energy (`packaging_energy`)

Record electricity and fuels used for packaging equipment, internal handling, and dispatch staging.

- Selected flow: Select carrier-, voltage-, and geography-specific Tiangong energy flows
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered or allocated packaging-line energy divided by dispatched accepted-device mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished ADP display device at factory gate (`finished_adp_display`)

Record exactly 1 kg of accepted monitor or projector, excluding packaging mass, with all required qualifiers attached.

- Selected flow: Monitors and projectors, principally used in an automatic data processing system `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed reference output of 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg finished device at factory gate, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging-process waste (`packaging_waste`)

Record packaging offcuts, damaged packs, labels, films, foams, pallets, and other wastes by material and treatment route.

- Selected flow: Select material- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging waste divided by dispatched accepted-device mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted device output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

##### Elementary flows

### Process: Use, maintenance, and replacement parts (`use_maintenance`)

#### Inputs

##### Product flows

###### Electricity over the declared service life (`use_electricity`)

Calculate electricity separately for on, sleep, off, networked standby, and other measured states using the declared duty profile and geography-specific supply. Preserve monitor and projector test methods and configurations.

- Selected flow: Select voltage-, supplier-, market-, and geography-specific Tiangong electricity flow
- Flow property / unit: Energy / kWh
- Amount rule: Sum of measured power for each state multiplied by its declared lifetime hours, divided by 1,000 W per kW
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: lifetime service delivered by 1 kg of device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_lifetime_profile`
- Sources: `energy-star-displays-v8-2021`; `eu-electronic-displays-2019-2021`; `cheung-projector-lca-2018`

###### Maintenance and replacement parts (`maintenance_parts`)

Record replaced boards, power supplies, fans, filters, cables, projector lamps or light-source modules, and other parts with repair yield and transport. Do not assume a projector light-source replacement for monitors.

- Selected flow: Select technology-, component-, and supplier-specific Tiangong product flows
- Flow property / unit: Mass / kg; Number of items / Item(s)
- Amount rule: Observed maintenance records or declared scenario count multiplied by measured replacement-part quantity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: lifetime service delivered by 1 kg of device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_lifetime_profile`
- Sources: `cheung-projector-lca-2018`; `iec-62471-5-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Declared display service (`display_service`)

Record the declared service delivered by the monitor or projector over its stated operating profile and lifetime.

- Selected flow: Modelled display service; no generic Tiangong product-flow UUID assigned
- Flow property / unit: Operating time / h, with product mass reference retained
- Amount rule: Declared operating hours by technology family and performance configuration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: lifetime service delivered by 1 kg of device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_lifetime_profile`

##### Waste flows

###### Failed or replaced parts during use (`maintenance_waste`)

Record replaced parts and failed light sources by material and treatment route.

- Selected flow: Select material- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg; Number of items / Item(s)
- Amount rule: Maintenance and replacement records reconciled to installed replacement parts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: lifetime service delivered by 1 kg of device
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_lifetime_profile`

##### Elementary flows

### Process: Device and packaging end-of-life (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### End-of-life device and packaging (`eol_device_packaging`)

Record collection of the device, replaced parts, and packaging as separate waste streams with geography- and technology-specific collection, preparation for reuse, recycling, recovery, and disposal shares.

- Selected flow: Select material-, product-, and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg
- Amount rule: Device and packaging masses multiplied by documented collection and treatment shares, with reuse and refurbishment kept distinct from recycling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: 1 kg device at end of declared life plus its separately inventoried packaging and replacement parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `ec-pef-2021`; `epd-ies-pcr-2024-06`; `cheung-projector-lca-2018`

##### Elementary flows

#### Outputs

##### Product flows

###### Reused products and recovered materials (`recovered_outputs`)

Record verified reused devices, reusable components, and recovered material outputs without embedding an avoided-burden credit in the foreground quantity.

- Selected flow: Select reuse- and material-specific Tiangong product flows
- Flow property / unit: Mass / kg; Number of items / Item(s)
- Amount rule: Measured treatment output or scenario-specific recovery yield applied to collected waste input
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg device entering end-of-life
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `ec-pef-2021`; `epd-ies-pcr-2024-06`

##### Waste flows

###### Treatment residues (`eol_residues`)

Record residues sent to further recycling, recovery, incineration, hazardous treatment, or landfill by material and route.

- Selected flow: Select material- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg
- Amount rule: Treatment mass balance from measured outputs or a documented scenario
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg device entering end-of-life
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `ec-pef-2021`; `epd-ies-pcr-2024-06`

##### Elementary flows

###### Direct treatment emissions (`eol_direct_emissions`)

Record substance- and compartment-specific direct emissions from end-of-life treatment when included in the selected treatment dataset boundary.

- Selected flow: Select substance- and compartment-specific Tiangong elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculation from collected treatment activity and documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg device entering end-of-life
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared manufacturing processes | Avoid allocation by sub-metering, batch tracing, or subdivision of panel or optical-engine production, electronics assembly, final assembly, testing, and packaging whenever product-specific records can be obtained. | ec-pef-2021; epa-desktop-display-lca-2001 |
| `allocation_shared_line` | Shared production lines and utilities | When subdivision is not practical, allocate utilities and common wastes using a documented physical driver that reflects causation, such as machine time, tested unit time, throughput mass, or occupied production time. Do not use revenue unless physical causation cannot be established and the choice is justified. | ec-pef-2021; epd-ies-pcr-2024-06 |
| `allocation_model_family` | Multiple monitor or projector models | Use model-specific bills of materials and tests. A family average shall use disclosed production weights and retain separate monitor and projector technology strata before any aggregation. | energy-star-displays-v8-2021; epd-ies-pcr-2024-06 |
| `allocation_rework_scrap` | Rework, rejects, supplier returns, and recovered materials | Keep the burdens of internal rework and test repeats with accepted output; subtract documented supplier returns from site waste; report recovered material outputs separately and apply any recycling credit only in a declared downstream method. | ec-pef-2021; epd-ies-pcr-2024-06 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_receipts` | `final_assembly` | Display or projection subsystem, electronics, power, enclosure, stand or mounting, thermal parts, cables, and accessories | Bill of materials, supplier specification, receipt, stock, and reject record | model_id; family; component_id; supplier; material; technology; quantity; unit_mass; opening_stock; purchases; closing_stock; rejects; returned_quantity; recycled_content | Approved BOM joined to measured component mass and inventory reconciliation | kg; Item(s) | Per model revision and production period | Same representative production period as the dataset | Every included manufacturing site and model | Calculate consumed quantity from opening stock plus receipts minus closing stock and documented returns; divide by accepted device mass | Approved BOM, calibrated scale record, supplier declaration, inventory reconciliation, and model-revision control |
| `cp_manufacturing_utilities` | `final_assembly` | Assembly consumables and utilities | Meter, invoice, batch issue, and stock record | carrier_or_material; meter_id; opening_reading; closing_reading; purchase; opening_stock; closing_stock; batch; line_time; accepted_mass | Sub-metering preferred; otherwise documented line allocation | kg; m3; kWh; MJ | Per batch or monthly | At least one representative continuous production period, with seasonality disclosed | Every included manufacturing site | Net measured or reconciled consumption allocated by a causal line driver and divided by accepted device mass | Meter calibration, invoices, stock records, allocation worksheet, and completeness reconciliation |
| `cp_output_scrap_mass_balance` | `final_assembly` | Assembled output, rejects, supplier returns, scrap, and inventory change | Scale, production, quality, rework, return, and waste-transfer record | input_mass; assembled_mass; accepted_mass; reject_mass; rework_mass; returned_mass; waste_mass; stock_change; treatment_route | Batch or period mass balance by technology family and model | kg | Per batch, reconciled monthly | Same production period as component and utility records | Every included site and line | Reconcile input components to assembled and accepted outputs, returns, wastes, and stock changes without double counting rework | Calibrated scales, production counts, quality logs, supplier-return records, waste tickets, and signed reconciliation |
| `cp_manufacturing_emissions` | `final_assembly` | Direct emissions | Stack, wastewater, solvent, fuel, and abatement record | substance; compartment; measured_concentration; flow_rate; duration; fuel_quantity; factor; capture_efficiency | Direct measurement preferred; otherwise calculation from collected activity data and cited factor | kg; m3; MJ | Per measurement campaign and reporting period | Representative production period | Every included emitting site | Calculate substance-specific release and allocate using the same causal driver as the associated operation | Laboratory report, monitor calibration, fuel record, factor reference, and abatement operation log |
| `cp_power_performance_test` | `functional_test` | Device acceptance, performance, power states, test electricity, rework, and rejects | Test-station result and meter record | model_id; family; serial_or_batch; screen_or_image_size; native_resolution; luminance_or_light_output; panel_or_imaging_technology; light_source; voltage; frequency; signal; picture_mode; brightness; ABC_state; network_state; stabilization; on_W; sleep_W; off_W; networked_W; test_duration; station_kWh; pass_fail; rework | Apply the declared monitor or projector test method using calibrated instruments and retain raw measurements | inch or m; pixels; cd/m2 or lumen; V; Hz; W; h; kWh | Per representative model and test batch | Same model revision and production period as the dataset | Every included test site | Preserve unrounded readings; calculate test energy from meter difference and accepted mass; aggregate power results only within the same family and configuration | Test method and revision, calibration certificates, configuration record, raw meter file, pass/fail log, and representative-model justification |
| `cp_packaging_records` | `packaging_dispatch` | Packaging materials, detached accessories, packaging energy, and waste | Packaging BOM, scale, purchase, reuse, meter, and waste record | material; component; recycled_content; unit_mass; quantity; reuse_count; detached_accessory; energy; dispatched_device_mass; waste_mass; treatment_route | Weigh representative packaging and reconcile purchases, dispatch, reuse, and waste | kg; Item(s); kWh; MJ | Per packaging configuration and monthly reconciliation | Same production period as dispatch output | Every included packaging site | Divide one-way packaging by dispatched device mass; divide reusable assets by verified reuse count; keep detached accessories separate | Approved packaging specification, calibrated scale, supplier statement, reuse log, meter or invoice, and waste ticket |
| `cp_use_lifetime_profile` | `use_maintenance` | Power-state hours, service life, maintenance, and projector light-source replacement | Metered or verified test, fleet log, warranty, repair, and scenario record | family; model; geography; service_years; annual_hours_by_state; power_W_by_state; utilization; network_state; lifetime_hours; failure; part_id; replacement_count; light_source_rated_life; realized_life; repair_transport | Use representative field records when available; otherwise a declared scenario based on measured product power and documented lifetime assumptions | year; h; W; kWh; kg; Item(s) | Per model and scenario review | Declared service life | Declared market and use setting | Sum state power times hours; add maintenance and replacements; keep scenario alternatives separate | Power-test record, fleet or user log, warranty and repair data, product documentation, and scenario approval |
| `cp_end_of_life_scenario` | `end_of_life` | Collection, reuse, refurbishment, recycling, recovery, disposal, and emissions | Treatment operator, official statistics, mass balance, and scenario record | geography; device_family; collected_mass; reused_mass; refurbished_mass; recovered_material; residue; treatment_route; direct_emission; reference_year | Prefer operator-specific measured data; otherwise use a documented geography- and technology-specific scenario | kg; Item(s) | Per scenario update | Reference year stated for scenario | Declared end-of-life geography | Apply mutually exclusive route shares to device, packaging, and replacement-part masses and close treatment mass balance | Operator records, official statistics, permits, treatment certificates, scenario source, and mass-balance check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All manufacturing rows | normalized amount = period flow amount / accepted finished-device mass in the same period | period flow amount; accepted finished-device mass excluding packaging | flow amount per 1 kg accepted device |  |
| `calc_component_consumption` | BOM and component inputs | consumed quantity = opening stock + receipts - closing stock - documented supplier returns; reconcile to BOM issues and rejects | stock and receipt records; returns; BOM; reject records | consumed component mass or count | epa-desktop-display-lca-2001 |
| `calc_mass_balance` | Final assembly and testing | component and consumable input mass + opening work-in-progress = accepted output + returned components + waste + closing work-in-progress + documented mass loss | measured inputs, outputs, returns, wastes, and stock changes | closed mass balance and unexplained residual | epd-ies-pcr-2024-06 |
| `calc_test_energy` | Functional and power testing | test energy per kg = measured test-station kWh including retests / accepted device mass | station meter readings; accepted mass; retest log | kWh per kg accepted device | energy-star-displays-v8-2021; iec-61947-1-2002 |
| `calc_use_energy` | Use stage | lifetime kWh = sum over power states of measured power in W multiplied by declared state hours divided by 1,000; calculate each geography and scenario separately | measured W by state; hours by state; service life; geography | lifetime electricity by state and total | energy-star-displays-v8-2021; eu-electronic-displays-2019-2021; cheung-projector-lca-2018 |
| `calc_packaging_normalization` | Packaging | packaging kg per reference kg = packaging material mass / accepted device mass; reusable packaging mass is additionally divided by verified reuse count | packaging BOM and weights; device mass; reuse count | material-specific packaging kg per reference kg | epd-ies-pcr-2024-06 |
| `calc_projector_replacements` | Projector use | replacement quantity = declared scenario count or observed maintenance count; retain rated and realized light-source life and do not derive replacements from rated life alone when observed records exist | service hours; rated and realized light-source life; maintenance records | replacement parts per reference kg and service life | cheung-projector-lca-2018; iec-62471-5-2015 |
| `calc_family_average` | Product-family datasets | weighted amount = sum of model-specific amount multiplied by verified production share; aggregate only after monitor and projector strata remain separately reviewable | model results; production quantities; technology family | disclosed weighted family result | epd-ies-pcr-2024-06 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all model averages | Demonstrate principal ADP use and preserve monitor or projector family, model scope, size, resolution, brightness measure, display or projection technology, interfaces, power supply, stand or mount, and product mass. | Product specification, model list, intended-use documentation, photographs or technical drawings, and reference-flow record |
| `dq_technology_separation` | BOM, test, lifetime, and downstream data | Do not transfer monitor panel, luminance, or lifetime values to projectors, or projector optical-engine, light-output, light-source, or replacement values to monitors. | Technology-stratified BOM, process map, test record, and scenario record |
| `dq_temporal_geographic` | Foreground activity data and upstream datasets | State reference year, production period, sites, suppliers, market, electricity geography, and data age; justify any older or non-local proxy. | Dataset metadata, invoices, meter periods, supplier dataset metadata, and proxy justification |
| `dq_measurement_traceability` | Mass, power, energy, luminance, light output, and waste measurements | Retain instrument identity, calibration status, raw unrounded results, test configuration, aggregation, and unit conversion. | Calibration certificate, raw file, method revision, calculation workbook, and review sign-off |
| `dq_completeness` | All known inputs and outputs | Reconcile BOM, accepted output, returns, inventory change, packaging, utilities, wastes, wastewater, and direct emissions. List unresolved known flows rather than silently cutting them off. | Mass and energy reconciliation, missing-data register, proxy list, and completeness review |
| `dq_lifetime_scenario` | Use, maintenance, and replacement | State whether lifetime and operating hours are observed, warranted, specified, or scenario-based; show sensitivity when use or replacement assumptions materially affect results. | Fleet or warranty data, product specification, scenario approval, and sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require product flow `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg finished-device output excluding packaging. |  |
| `validate_adp_scope` | Product identity | Require documentary evidence that ADP visual output is the principal intended purpose. Reject television receivers, non-ADP-principal-use displays or projectors, component-only products, and the narrower CPC 47314 product flow. | epd-ies-pcr-2024-06 |
| `validate_technology_fields` | Required qualifiers | Require monitor or projector family and the matching size, resolution, luminance or light output, panel or imaging technology, light source, electronics, enclosure, stand or mount, power, lifetime, and packaging fields. Reject cross-family units such as projector lumen used as monitor cd/m2. | energy-star-displays-v8-2021; iec-61947-1-2002 |
| `validate_bom_mass_balance` | Manufacturing inventory | Require a component and material BOM, measured accepted device mass, packaging separated from product mass, and a reconciled record of returns, work-in-progress, scrap, and unexplained residual. | epa-desktop-display-lca-2001; epd-ies-pcr-2024-06 |
| `validate_power_test` | Power testing and use model | Require declared test method, voltage, frequency, signal, picture or brightness settings, ABC and network state, stabilization, raw readings, and measured power for every applicable state. Do not use monitor regulation values as projector test results. | energy-star-displays-v8-2021; eu-electronic-displays-2019-2021; iec-61947-1-2002 |
| `validate_lifetime_replacement` | Lifecycle models | Require service years, operating hours by power state, repair and replacement scenario, and projector light-source life and replacement count where applicable. Flag any unsupported shared lifetime across monitors and projectors. | cheung-projector-lca-2018; ec-pef-2021 |
| `validate_sources_proxies` | All rules and rows | Require every external source id to resolve in Data Sources and every proxy, missing UUID, omission, allocation, and scenario assumption to be disclosed with its effect on completeness. | ec-pef-2021; epd-ies-pcr-2024-06 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Construction of process and lifecyclemodel datasets for monitors or data projectors principally used in ADP systems, including office, industrial, data-centre, network-operations, and digital-infrastructure applications |
| allowed_use | Product- and technology-specific manufacturing inventories; transparent weighted model-family datasets; downstream distribution, use, maintenance, and end-of-life scenarios when all required qualifiers and stage data are supplied |
| excluded_use | Television receivers; non-ADP-principal-use displays or projectors; comparison of monitor and projector results that do not share functional performance and boundary; component-only inventories presented as finished devices; undisclosed substitution of CPC 47314 or other proxy flows |
| required_metadata | Canonical PCR id; CPC context; reference flow UUID and mass basis; product family; principal ADP use evidence; model scope and weights; size; native resolution; luminance or light output; panel, imaging, and light-source technology; electronics and power supply; enclosure and stand or mount; device mass; test method and power states; service life and operating hours; projector light-source replacement; packaging BOM; geography; reference year; system boundary; allocation; data sources and proxies |
| required_quality_disclosure | Site and supplier coverage; foreground period; measurement and calibration; BOM and mass-balance closure; test configuration; model-family weighting; data age; missing UUIDs and flows; proxy use; power and lifetime scenario; packaging separation; allocation; uncertainty and sensitivity; review status |
| update_trigger | Product-family or principal-use change; panel, imaging, light-source, electronics, power-supply, enclosure, stand, or packaging redesign; material or supplier change; new manufacturing site; changed test method or power management; changed service-life or repair evidence; material shift in electricity, yield, waste, allocation, or end-of-life route; replacement of a provisional proxy or unresolved UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-ies-pcr-2024-06` | standard | International EPD System, PCR 2024:06, Electronic and electric equipment, and electronic components (non-construction), version 1.0.1, valid through 2029-10-28, https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f (retrieved 2026-08-09) | Electronics-sector scope, life-cycle stages, declared-unit and data-production structure, allocation, packaging, use, and end-of-life disclosure |
| `ec-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, ELI http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-09) | Life-cycle boundary, data quality, allocation, scenario, proxy, verification, and disclosure rules |
| `epa-desktop-display-lca-2001` | official_guidance | U.S. EPA, Desktop Computer Displays: A Life-Cycle Assessment, Volume 1, EPA/744-R-01-004a, December 2001, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=200016BC.TXT (retrieved 2026-08-09) | Monitor component and manufacturing-process decomposition, panel/module, printed wiring board, power supply, enclosure and stand, data collection, use electricity, allocation, and data-quality structure |
| `energy-star-displays-v8-2021` | official_guidance | U.S. EPA ENERGY STAR Program Requirements for Displays, Version 8.0, Rev. November 2021, https://www.energystar.gov/sites/default/files/Displays%20Version%208.0%20Program%20Requirements%20Rev.%20Nov-2021.pdf (retrieved 2026-08-09) | Monitor definitions, representative-model testing, power states, power management, luminance, native resolution, configuration, voltage and frequency, and reporting requirements |
| `eu-electronic-displays-2019-2021` | official_guidance | Commission Regulation (EU) 2019/2021 of 1 October 2019 laying down ecodesign requirements for electronic displays, ELI http://data.europa.eu/eli/reg/2019/2021/oj (retrieved 2026-08-09) | Monitor-only screen area, resolution, luminance, on/sleep/off/networked power, test conditions, material efficiency, repair and dismantling; explicit evidence that projectors require a different method |
| `iec-61947-1-2002` | standard | IEC 61947-1:2002, Electronic projection - Measurement and documentation of key performance criteria - Part 1: Fixed resolution projectors, https://webstore.iec.ch/en/publication/6147 (retrieved 2026-08-09) | Projector-specific imaging technologies and measurement and documentation of performance parameters |
| `iec-62471-5-2015` | standard | IEC 62471-5:2015, Photobiological safety of lamps and lamp systems - Part 5: Image projectors, https://webstore.iec.ch/en/publication/22639 (retrieved 2026-08-09) | Projector light-source identity, optical-radiation test conditions, safety-related manufacturing and replacement disclosure |
| `cheung-projector-lca-2018` | literature | Cheung, C. W.; Berger, M.; Finkbeiner, M. Comparative life cycle assessment of re-use and replacement for video projectors. International Journal of Life Cycle Assessment 23, 82-94 (2018). DOI: 10.1007/s11367-017-1301-3 | Projector component importance, printed wiring boards and integrated circuits, use-stage electricity, service-life extension, replacement and reuse scenarios |
