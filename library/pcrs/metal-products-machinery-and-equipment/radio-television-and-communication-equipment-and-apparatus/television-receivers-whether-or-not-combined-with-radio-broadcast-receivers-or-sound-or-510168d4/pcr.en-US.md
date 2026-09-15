---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-receivers-whether-or-not-combined-with-radio-broadcast-receivers-or-sound-or-510168d4
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Television receivers, whether or not combined with radio-broadcast receivers or sound or video recording or reproducing apparatus

## 1. Scope and Applicability

This PCR applies to foreground data packages for mass-market consumer television receivers that incorporate a television broadcast receiver or tuner, including smart or network-connected televisions and televisions combined with radio reception or sound or video recording or reproducing functions. It covers category-level manufacturing models across declared display technologies and size classes; it is not a rule for one commercial model.

The practitioner shall declare the display technology, viewable diagonal and screen area, native resolution, receiving and smart/network functions, measured power states, and the panel, backlight where present, electronic boards, enclosure and stand, loudspeakers, and packaging composition. Professional or broadcast reference displays, computer monitors or digital-signage displays without the defining television receiver, projectors, stand-alone display panels, and other components are outside the scope.

The minimum foreground boundary is component and material inputs through television assembly, software/firmware loading where part of production, product testing, manufacturing waste, and the finished receiver at the final assembly factory gate. Distribution, use, and end-of-life modules are conditional and shall be added only when the study goal and scope require them. This boundary follows the life-cycle and manufacturing principles of `epd-international-pcr-2024-06`; power-state and product qualification conventions are informed by `eu-2019-2021-electronic-displays` and `energy-star-tv-9-1`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-receivers-whether-or-not-combined-with-radio-broadcast-receivers-or-sound-or-510168d4 |
| classification_refs | CPC 3.0: 47313 (exact) |
| covered_products | Consumer television receivers with an integral television tuner/receiver, including smart/network televisions and units combined with radio-broadcast reception or sound/video recording or reproducing functions |
| excluded_products | Professional, broadcast, medical, mastering, or reference displays; computer monitors and digital signage without the defining television receiver; projectors; projection screens; stand-alone panels, backlights, tuner boards, electronic boards, loudspeakers, enclosures, and other components; a dataset presented as a category average when it represents only one model |
| representative_product | A finished mass-market consumer television receiver, qualified by display architecture, size or screen-area class, native resolution, receiver and smart functions, and market |
| production_route | Purchased display panel or module, backlight where applicable, electronic assemblies, enclosure/stand, loudspeakers, hardware, and packaging are assembled, programmed, tested, packed, and released at a television final-assembly site |
| market_state | Finished, functional, packaged-for-distribution television receiver; reference mass is net product mass before distribution packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished consumer television receiver within this PCR scope at the final assembly factory gate |
| How much | 1 kg net finished television receiver, excluding distribution packaging |
| How well | Conforms to the declared display technology, viewable screen dimensions, native resolution, receiver/smart functions, included accessories, and power-state test configuration |
| How long or cycle | One production output at factory gate; service life and use pattern shall be declared separately when the use module is included |
| reference_flow_link | Output of `television_final_assembly_and_test` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Television receivers, whether or not combined with radio-broadcast receivers or sound or video recording or reproducing apparatus `7ee7acef-9633-4d5f-9b53-20641c3b9b65` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | display technology and emissive/backlit architecture; viewable diagonal and screen area; native horizontal and vertical resolution; television reception/tuner configuration; smart operating system and network functions; supported power-state profile (on / standby / off / networked standby); panel/module and backlight types; electronic board and power-supply scope; enclosure/stand materials; loudspeaker configuration; included accessories; net product mass; packaging mass and material composition; geography/market; production period; model-family and sales-weighting method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished television receiver | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass of the functional receiver and normally supplied removable parts/accessories; exclude distribution packaging and report packaging separately. Normalize all manufacturing exchanges to 1 kg net receiver output. |
| `screen_geometry` | Active/viewable screen | Length and area | cm; m2 | Record viewable diagonal and horizontal/vertical dimensions; calculate viewable area from the active screen dimensions and disclose the geometry method. Do not substitute nominal cabinet size for viewable dimensions. |
| `native_resolution` | Display panel/module | Pixel count | pixels | Record native horizontal and vertical pixel counts and the declared resolution class; do not treat an accepted input signal format as native resolution. |
| `power_state_measurement` | Finished receiver electricity demand | Power | W | Measure on mode, standby, off, and networked standby separately where the state exists, using the declared normal/home configuration, signal/source, automatic brightness control condition, quick-start or wake features, network ports, software version, and test method. Do not combine these states into one unqualified value. |
| `component_mass_balance` | Product bill of materials | Mass | kg | Reconcile panel/module, backlight where applicable, electronic boards and power supply, enclosure/stand/hardware, loudspeakers, wiring, accessories, and other product materials to net finished-product mass, with moisture-free and scrap boundaries stated. |
| `packaging_separation` | Distribution packaging | Mass | kg | Record packaging by material and component separately from net product mass; reusable packaging shall be identified and its reuse or allocation assumption disclosed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components delivered to the television final-assembly site, including the display panel/module, backlight where present, electronic assemblies, enclosure/stand, loudspeakers, hardware, accessories, and packaging |
| starting_condition_role | These are foreground assembly inputs; their upstream manufacture is represented by supplier-specific or suitable secondary product datasets rather than recursively reconstructed inside the assembly process |
| product_classification_scope | Finished consumer television receivers defined by the product function, not professional displays, monitors, projectors, or individual television components |
| recursive_input_rule | If a complete television receiver is consumed as an input, record it as an externally supplied product flow with its own upstream dataset and disclose the reuse, refurbishment, or integration purpose; do not recursively apply this PCR inside the same assembly record |
| upstream_dataset_requirement | Prefer supplier-specific data for the panel/module, backlight, electronic boards, power supply, enclosure/stand, loudspeakers, and packaging; otherwise use technology-, geography-, and period-representative secondary datasets and disclose substitutions |
| disclosure | Declare included manufacturing sites and processes, component dataset provenance, display architecture, packaging boundary, electricity mixes, transport assumptions, allocation, cut-offs, and any excluded accessories or modules |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `include_manufacturing_chain` | Cradle-to-gate manufacturing model | Include raw-material and component supply through transport to final assembly, assembly/programming/testing, manufacturing energy and waste, packaging supply, and the finished receiver; state any life-cycle modules omitted from the declared study. | `epd-international-pcr-2024-06` |
| `declare_display_architecture` | Product and inventory boundary | Declare whether the display is LCD with LED or other backlight, OLED or another emissive technology, or another documented architecture; include the technology-specific panel/module, optical layers, drivers, and backlight components that are physically present. | `eu-2019-2021-electronic-displays`; `us-epa-display-lca-vol1-ch1` |
| `model_use_when_in_scope` | Conditional use module | When use is included, calculate electricity from separately declared power states, duty cycles, service life, and market electricity; preserve on, standby, off, and networked-standby measurements and disclose automatic state transitions. | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1`; `epd-international-pcr-2024-06` |
| `model_end_of_life_when_in_scope` | Conditional end-of-life module | When end of life is included, model collection, dismantling, treatment, recycling, recovery, and disposal scenarios for the declared market, maintaining explicit treatment of the display module, electronic boards, enclosure, speakers, and packaging. | `eu-2019-2021-electronic-displays`; `epd-international-pcr-2024-06` |
| `exclude_adjacent_display_products` | Dataset eligibility | Reject projectors and any professional display, monitor, digital-signage unit, panel, or component that lacks the defining consumer television receiver scope; do not combine those products into the category average. | `energy-star-tv-9-1` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `television_final_assembly_and_test` | Television final assembly, programming, testing, and packing | required | Always | Foreground gate-to-gate process linking purchased components and materials to the finished receiver | 1 kg net finished television receiver |
| `distribution` | Distribution to market | conditional | Include when the declared study extends beyond the factory gate | Transport and warehousing module | Per 1 kg net receiver plus separately recorded packaging |
| `use` | Television use | conditional | Include when the study includes consumer use | Electricity by measured operating state and declared duty cycle | Per declared service life and market use pattern |
| `end_of_life` | End-of-life treatment | conditional | Include when the study includes disposal/recovery | Collection, dismantling, recycling, recovery, and disposal module | Per 1 kg net receiver and separately treated packaging |

### Process: Television final assembly, programming, testing, and packing (`television_final_assembly_and_test`)

#### Inputs

##### Product flows

###### Display panel or display module (`display_panel_or_module`)

Record the complete supplied display panel/module by technology, size, native resolution, and included driver or optical parts. Its technology-specific upstream dataset crosses the assembly boundary as a purchased product input.

- Selected flow: Display panel or module, technology-specific supplier product flow
- Flow property / unit: Mass / kg
- Amount rule: Supplier BOM or receiving mass allocated to conforming television output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `epd-international-pcr-2024-06`; `us-epa-display-lca-vol1-ch1`

###### Backlight system (`backlight_system`)

Record LED or other backlight sources, light guides, diffuser and optical films, reflectors, wiring, and associated driver components when they are not included in the supplied panel/module. For emissive displays with no backlight, record zero and declare not applicable.

- Selected flow: Backlight system, technology-specific supplier product flow
- Flow property / unit: Mass / kg
- Amount rule: Supplier BOM mass; avoid double counting parts already included in the display module
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `eu-2019-2021-electronic-displays`; `us-epa-display-lca-vol1-ch1`

###### Electronic boards, tuner, power supply, and wiring (`electronic_boards_and_power`)

Record the main board, television tuner/receiver, smart-system electronics, timing/controller and driver boards not included with the panel, power-supply boards or units, connectors, cables, antennas, and other electronic assemblies without combining their masses with the enclosure.

- Selected flow: Electronic board and power assemblies, supplier product flows
- Flow property / unit: Mass / kg
- Amount rule: Supplier BOM or verified disassembly mass per conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `epd-international-pcr-2024-06`; `us-epa-display-lca-vol1-ch1`

###### Enclosure, stand, fasteners, and thermal hardware (`enclosure_stand_and_hardware`)

Record front and rear enclosure parts, stand or feet, wall-mount hardware supplied with the receiver, internal frames, heat sinks, shields, fasteners, and material grades. Keep enclosure/stand mass distinct from the display and electronic assemblies.

- Selected flow: Enclosure, stand, and hardware supplier product flows
- Flow property / unit: Mass / kg
- Amount rule: BOM mass by component and material grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `eu-2019-2021-electronic-displays`; `us-epa-display-lca-vol1-ch1`

###### Loudspeakers and audio assemblies (`loudspeaker_and_audio_assemblies`)

Record built-in loudspeaker drivers, cabinets, acoustic parts, amplifiers not already counted on an electronic board, and wiring. Separately disclose bundled external sound apparatus when included in the sale configuration.

- Selected flow: Loudspeaker and audio assembly supplier product flows
- Flow property / unit: Mass / kg
- Amount rule: Supplier BOM mass per conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `eu-2019-2021-electronic-displays`; `epd-international-pcr-2024-06`

###### Distribution packaging materials (`packaging_materials`)

Record cartons, moulded fibre or plastic cushioning, films, bags, tapes, labels, pallets, and reusable transport packaging by material and component. Packaging is an assembly input but is not included in the net reference-product mass.

- Selected flow: Packaging materials by material-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: Packaging BOM and receiving records per packed conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_mass`
- Sources: `epd-international-pcr-2024-06`

###### Assembly auxiliaries (`assembly_auxiliaries`)

Record solders, adhesives, cleaning agents, protective materials, inks, lubricants, and other process auxiliaries that cross the assembly boundary. Materially relevant substances shall not be hidden in an unqualified aggregate.

- Selected flow: Assembly auxiliary product flows by material or substance
- Flow property / unit: Mass / kg
- Amount rule: Purchase/issue records adjusted for stock change and manufacturing waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `epd-international-pcr-2024-06`

###### Assembly and facility electricity (`assembly_electricity`)

Record metered electricity for assembly, programming, material handling, environmental control, and allocable supporting operations; exclude product test electricity when separately metered below.

- Selected flow: Electricity, site- and market-specific supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to conforming production using documented subdivision or allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `epd-international-pcr-2024-06`

###### Product testing electricity (`product_test_electricity`)

Record electricity consumed during burn-in, functional checks, display calibration, and other release tests. Preserve measured test duration and operating configuration.

- Selected flow: Electricity, site- and market-specific supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered tester/product demand or validated power multiplied by logged test duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_test_energy`
- Sources: `epd-international-pcr-2024-06`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished television receiver (`finished_television_receiver`)

Record only conforming finished consumer television receivers meeting the declared category and qualifier set. The output amount is net product mass before distribution packaging.

- Selected flow: Television receivers, whether or not combined with radio-broadcast receivers or sound or video recording or reproducing apparatus `7ee7acef-9633-4d5f-9b53-20641c3b9b65`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass of conforming receiver output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_mass`
- Sources:

##### Waste flows

###### Manufacturing scrap and rejected assemblies (`manufacturing_waste`)

Record panel/module rejects, electronic scrap, metals, plastics, glass, packaging scrap, hazardous residues, and mixed waste by treatment route. Do not net recycled scrap against material inputs without applying and disclosing the waste allocation rule.

- Selected flow: Manufacturing waste flows by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured waste dispatch and internal scrap records reconciled to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished television receiver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_waste`
- Sources: `epd-international-pcr-2024-06`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation_by_subdivision` | Shared manufacturing operations | Avoid allocation by separating lines, process steps, meters, batches, and records wherever technically feasible; preserve directly measured relationships. | `epd-international-pcr-2024-06` |
| `physical_allocation` | Residual shared inputs, energy, emissions, and waste | If subdivision is not possible and a physical relationship represents causality, allocate using a documented physical driver such as machine time, test time, units, or mass; justify the selected driver and test sensitivity where it affects results. | `epd-international-pcr-2024-06` |
| `economic_allocation_last_resort` | Residual multifunctional operations without a defensible physical driver | Use economic allocation only as a last resort, based on representative market values for the same period; disclose price sources and perform a sensitivity check for material results. | `epd-international-pcr-2024-06` |
| `waste_point_of_substitution` | Manufacturing and end-of-life wastes | Treat material as waste at the documented point of substitution or loss of product status; state the cut-off/recycling convention and do not double count recycling benefits or recycled inputs. | `epd-international-pcr-2024-06` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom_mass` | `television_final_assembly_and_test` | Display module, backlight, electronic assemblies, enclosure/stand/hardware, loudspeakers, accessories, and auxiliaries | BOM, supplier specification, receiving record, verified disassembly | part number; supplier; quantity; unit mass; material; display technology; included subassemblies; effective dates | Export the released BOM for each included model family, verify high-mass and critical electronic/display assemblies against supplier or receiving data, and reconcile substitutions | kg | Each BOM revision and at least annually | Representative production period, normally 12 consecutive months | Each included final-assembly site and supplier configuration | Production- or sales-weight included model families; retain model-level records and avoid unweighted averaging | Approved BOM; supplier declarations; receiving measurements; mass reconciliation |
| `cp_packaging_bom_mass` | `television_final_assembly_and_test` | Packaging by material and component | Packaging specification, receiving and reuse records | component; material; unit mass; units per product; recycled content if evidenced; reuse cycles; loss rate | Weigh or obtain supplier mass for each packaging component and reconcile to packed units; document reusable packaging circulation | kg | Each packaging revision and at least annually | Same period as product output | Each packaging configuration and site | Production- or sales-weight configurations; allocate reusable packaging over evidenced cycles | Packaging drawing/BOM; scale records; supplier specification; reuse logs |
| `cp_assembly_energy` | `television_final_assembly_and_test` | Assembly and facility electricity | Revenue-grade or calibrated meter, invoice with submeter allocation | meter start/end; kWh; line/site; products; output mass; downtime; allocation driver; electricity supplier/mix | Prefer line/process submeters; otherwise reconcile site invoices and exclude or allocate unrelated operations using the declared rule | kWh | Monthly or finer | At least 12 consecutive representative months | Each included assembly site | Sum period energy and divide by conforming net output after documented allocation | Meter calibration; invoices; production logs; reconciliation |
| `cp_product_test_energy` | `television_final_assembly_and_test` | Burn-in and release-test electricity | Test-station meter or validated power-time record | test type; power; duration; configuration; units tested; retests | Measure representative test stations or multiply validated configuration-specific power by logged duration; include retests and rejects consistently | kWh | Continuous logs or representative campaign per configuration | Same period as product output | Each test route | Sum test energy for conforming and consistently assigned rejected output, then normalize to net output | Meter record; test log; sampling plan; instrument calibration |
| `cp_finished_product_mass` | `television_final_assembly_and_test` | Conforming net receiver output | Production release and calibrated scale record | model; units; net unit mass; included accessories; packaging excluded; date; site | Weigh representative finished units and reconcile unit counts to released production | kg | Per model introduction/change and monthly output | Same period as inventory inputs | Each included site and model family | Sum conforming net output mass; production- or sales-weight category aggregation | Scale calibration; release records; output reconciliation |
| `cp_manufacturing_waste` | `television_final_assembly_and_test` | Scrap and rejected assemblies by material and route | Waste dispatch, recycler receipt, internal scrap ledger | material; mass; hazardous status; origin; treatment route; recovered quantity; date | Reconcile dispatched and internally reused waste with stock changes and production rejects; preserve treatment route | kg | Monthly or finer | Same period as product output | Each included site | Sum by material and treatment route; no netting against inputs without allocation disclosure | Weighbridge tickets; recycler certificates; scrap ledger; balance check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | All manufacturing exchanges | Divide the exchange total assigned to conforming production by net finished-receiver output mass for the same sites and period. | Assigned exchange; conforming units; model net masses | Exchange per 1 kg net finished receiver | `epd-international-pcr-2024-06` |
| `screen_area` | Viewable display | Calculate viewable screen area from measured active horizontal width multiplied by active vertical height; convert to m2 and retain dimensions. For non-rectangular active areas, use documented active-area geometry. | Active width; active height; geometry | Viewable screen area in m2 | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1` |
| `component_mass_reconciliation` | Product BOM | Sum product-component masses, excluding distribution packaging, and compare with measured net finished-product mass. Investigate and disclose residual mass rather than forcing an unexplained balancing item. | Component masses; net product mass | Reconciled BOM and residual | `epd-international-pcr-2024-06` |
| `packaging_intensity` | Packaging | Sum packaging component masses after applying evidenced reuse cycles and divide by net finished-product output mass; report material totals separately. | Packaging component mass; units; reuse cycles; output mass | kg packaging per kg net receiver by material | `epd-international-pcr-2024-06` |
| `use_energy_by_power_state` | Conditional use module | Sum power in each supported state multiplied by its declared annual time, include automatic transitions consistently, convert Wh to kWh, and multiply by declared service life; apply the market electricity mix separately. | On/standby/off/networked-standby power; state hours; service life | Lifetime electricity by state and total | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Included model families | Demonstrate that every included product is a consumer television receiver with the declared tuner/receiver and functions; maintain an exclusion review for professional displays, monitors, signage, and projectors. | Product specification, tuner declaration, model list, exclusion log |
| `dq_category_representativeness` | Category aggregation | Cover the declared market, technology, size, and resolution mix using production or sales weights; disclose coverage share and never label a single model as a category average. | Model-level production/sales data, weighting workbook, coverage statement |
| `dq_bom_completeness` | Components and materials | Reconcile the panel/module, backlight, boards/power supply, enclosure/stand, loudspeakers, accessories, and other materials to net product mass; document supplier dataset substitutions. | Released BOM, supplier data, scale/disassembly checks, residual analysis |
| `dq_power_states` | Product qualification and use module | Preserve test configuration and separate measurements for every supported power state, including network and automatic-brightness settings; use measurements representative of included models. | Test report, instrument calibration, software/configuration record, model weights |
| `dq_packaging` | Packaging | Report packaging separately by material, configuration, and reuse status and reconcile it to packed production. | Packaging BOM, receiving/weighing data, reuse records |
| `dq_temporal_geographic_technology` | Foreground and upstream datasets | Use a representative production period and geography; match upstream data to the declared display architecture and major component technology, and disclose temporal, geographic, or technological proxies. | Data-quality assessment, supplier/site dates, dataset metadata, proxy log |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_scope` | Dataset identity | Confirm CPC 3.0 47313 semantics and the presence of a television receiver/tuner; fail eligibility if professional displays, monitors, digital signage, projectors, or components are mixed into the declared product average. | `energy-star-tv-9-1` |
| `validate_reference_mass` | Quantitative reference | Confirm the reference product uses UUID `7ee7acef-9633-4d5f-9b53-20641c3b9b65`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, and that packaging is excluded from the net reference mass. |  |
| `validate_required_qualifiers` | Dataset metadata | Confirm display technology, diagonal/area, native resolution, receiver/smart functions, power states, panel/backlight, electronic boards/power supply, enclosure/stand, loudspeakers, packaging, accessories, market, period, and aggregation method are declared. | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1` |
| `validate_bom_reconciliation` | Product inventory | Confirm component/material totals reconcile to measured net product mass and that display, backlight, electronic boards, enclosure/stand, and loudspeakers are explicit rather than hidden in one unsupported aggregate. | `epd-international-pcr-2024-06`; `us-epa-display-lca-vol1-ch1` |
| `validate_power_states` | Power and conditional use modelling | Confirm each supported state is separately measured with configuration, method, and automatic transition assumptions; reject an unqualified single power value as the use profile. | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1` |
| `validate_packaging` | Packaging inventory | Confirm packaging is separate from net product mass, material-resolved, and reconciled to packed output, with reuse assumptions evidenced. | `epd-international-pcr-2024-06` |
| `validate_boundary_and_sources` | System model | Confirm component supply, assembly/programming/testing, energy, waste, packaging supply, and output are covered, and that technology-, geography-, and time-representative upstream datasets or disclosed proxies are used. | `epd-international-pcr-2024-06` |
| `validate_allocation` | Shared operations and waste | Confirm subdivision was attempted before allocation, the residual driver is justified, economic allocation is last resort, and waste/recycling conventions do not double count burdens or benefits. | `epd-international-pcr-2024-06` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process dataset for final assembly, programming, testing, and packing of consumer television receivers, with optional linked distribution, use, and end-of-life modules |
| downstream_use | Product carbon footprint, EPD, ecodesign, procurement, hotspot, circularity, and life-cycle model construction when the declared goal and scope are compatible |
| allowed_use | Category or model-family television manufacturing datasets with declared technology, size/area, resolution, receiver/smart functions, component structure, packaging, geography, period, and weighting |
| excluded_use | Professional or broadcast display, computer monitor, digital-signage display, projector, panel/component, or a single-model result represented as a broad category average |
| required_metadata | PCR id/version; reference UUID/property/unit; CPC reference; display technology; viewable diagonal/area; native resolution; tuner/receiver and smart/network functions; power-state configuration; panel/backlight/boards/enclosure/speakers/accessories; packaging; sites; market; period; model coverage and weights; system boundary; electricity mixes; allocation; cut-offs; data sources |
| required_quality_disclosure | Foreground primary-data share and period; model/market coverage; supplier-specific coverage for display and electronics; proxy datasets; BOM residual; meter and test representativeness; packaging reuse evidence; allocation and recycling assumptions; excluded stages or accessories |
| update_trigger | Material change in display architecture, panel or backlight supply, screen-size/resolution or model mix, tuner/smart platform, power supply or measured power states, enclosure/stand or loudspeaker design, packaging, assembly site/energy mix, market mix, regulation/test method, allocation, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-international-pcr-2024-06` | standard | EPD International, PCR 2024:06, *Electrical, electronic and electro-mechanical products*, version 1.0.1, 2025. https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f | Manufacturing and life-cycle boundary, component/PCB and packaging inventory coverage, primary/supplier data expectations, allocation hierarchy, electricity/transport/waste data quality, and conditional use/end-of-life modules |
| `eu-2019-2021-electronic-displays` | official_guidance | European Commission, Commission Regulation (EU) 2019/2021 laying down ecodesign requirements for electronic displays, consolidated text. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019R2021 | Electronic-display definitions, OLED/microLED and backlit architectures, on/off/standby/networked-standby states, automatic state transitions, screen/product declarations, material and dismantling considerations |
| `energy-star-tv-9-1` | official_guidance | U.S. Environmental Protection Agency, *ENERGY STAR Program Requirements Product Specification for Televisions, Eligibility Criteria Version 9.1*, 2024. https://www.energystar.gov/sites/default/files/2024-03/ENERGY%20STAR%20Version%209.1%20Televisions%20Specification_0.pdf | Consumer television eligibility, integral tuner/receiver scope, exclusions for monitors/projectors, native resolution and screen area terminology, power-state qualification and test configuration |
| `us-epa-display-lca-vol1-ch1` | official_guidance | U.S. Environmental Protection Agency, *Desktop Computer Displays: A Life-Cycle Assessment, Volume 1, Chapter 1*, 2001. https://19january2021snapshot.epa.gov/sites/static/files/2015-04/documents/ch-1.pdf | Qualitative, technology-specific decomposition of LCD panel/module, backlight, controller/electronic boards, power supply, enclosure, and stand manufacturing; not used as a quantitative television profile |
