---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.photovoltaic-ac-dc-generators
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Photovoltaic AC/DC generators

## 1. Scope and Applicability

This PCR guides factory-gate foreground data packages for finished photovoltaic generators that are sold as one product and convert solar radiation into direct-current electricity or into alternating-current electricity through electronics incorporated in the sold product. The covered product may be a framed or unframed photovoltaic module, a generator assembled from one or more modules, or module-integrated equipment, provided that its exact architecture and included components are declared.

The category is intentionally technology-neutral. Crystalline-silicon, thin-film and other commercially deployed photovoltaic conversion technologies may use this PCR, but one technology dataset must not be presented as a generic category average without a documented mixing model. A DC product contains the photovoltaic conversion assembly and integral connection hardware needed for its declared DC output. An AC product additionally contains the inverter or other power-conversion electronics sold as part of the same generator. A separately sold photovoltaic cell, wafer, inverter, battery, mounting structure, cable set or other balance-of-system component is not the reference product. An installed photovoltaic power station, construction service, electricity-generation process, electricity flow, use-phase service and end-of-life treatment are outside this factory-gate data package.

The foreground boundary begins when declared photovoltaic cells, modules or laminates, carrier and connection materials, electrical/electronic components, process aids, utilities and packaging are accepted by the reporting manufacturing facility. It ends when one conforming, tested and packaged photovoltaic generator is released at the factory gate. Purchased inputs require upstream datasets. A producer that begins with semiconductor feedstocks rather than purchased cells or modules must include the additional ingot, wafer, cell or thin-film deposition processes in separate foreground unit processes and disclose that extended route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.photovoltaic-ac-dc-generators |
| classification_refs | CPC 3.0: 46113, Photovoltaic AC/DC generators (exact semantic reference; acceptance in the shared mapping is outside this PCR record) |
| covered_products | Finished factory-gate photovoltaic DC generators and finished photovoltaic AC generators whose inverter or power-conversion electronics are incorporated in the product sold as one item; framed modules, laminates and module-integrated equipment are covered when the exact architecture is declared |
| excluded_products | Separate cells and wafers; separately sold inverters, optimisers, batteries, mounting systems, cabling and other balance-of-system parts; generator sets using non-photovoltaic prime movers; installed PV stations; construction, operation, electricity production and end-of-life services |
| representative_product | One tested and packaged photovoltaic generator item with declared photovoltaic technology, rated DC power, output form and included-component list |
| production_route | Route-specific receipt or manufacture of photovoltaic conversion components, generator assembly, conditional integration of AC power electronics, electrical qualification, packing and factory-gate release |
| market_state | Finished durable electrical product at the manufacturing facility gate, before distribution and installation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery at the factory gate of one finished, conforming photovoltaic generator sold as one product |
| How much | 1 generator item; rated DC power in Wp or kWp is a mandatory parallel qualifier and intensity denominator, not a replacement for the Tiangong reference property |
| How well | The product meets the declared nameplate performance, output configuration and applicable design-qualification and safety-conformity specifications; the included component list and test evidence are retained |
| How long or cycle | One manufacturing and release cycle for one durable product item; service life and degradation assumptions are disclosed for downstream use but no electricity-generation service is included |
| reference_flow_link | One released product item equals the declared reference amount; all foreground inventory is normalized to that item and also reported per declared kWp where capacity comparison is needed |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | PV system `3f66ec10-aedd-4032-baff-5f7764c1670e` |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | photovoltaic conversion technology; product architecture and module count or active area; rated DC power at the declared rating condition; DC-only or AC-output configuration; nominal voltage and current; integrated inverter, optimiser, transformer, storage and other balance-of-system inclusion or exclusion; total product mass; factory geography and production period; applicable qualification and safety specifications; declared service life and degradation assumption for downstream modelling |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item` | released reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Normalize the foreground package to exactly one released generator item. Count only complete products passing release criteria; do not count cells, subassemblies or unpackaged rejects. |
| `rated_power_disclosure` | reference product and capacity-normalized intensities | Declared rated DC power | Wp or kWp | Retain the measured or nameplate rated DC power and its rating condition. Convert Wp to kWp by division by 1,000. Do not infer capacity from module count, area or a different technology. |
| `item_capacity_bridge` | comparison of differently sized products | Number of items and declared rated DC power | Item(s) and kWp | Report both per-item and per-kWp results when products of different capacity are compared. The item-to-kWp factor must come from the tested or nameplate value for the represented product configuration. |
| `mass_composition` | product and incoming material balance | Mass | kg | Measure total product mass and the bill-of-material mass by declared component group. Reconcile the component sum with the released-product mass and recorded manufacturing losses. |
| `energy_units` | purchased electricity and test energy | Energy | kWh | Preserve meter units and convert only with an explicit dimensional factor. Report electricity separately by supply contract, geography and production period when these differ materially. |
| `water_balance` | process water | Volume | m3 | Record withdrawal and discharge or consumption consistently; state whether water is recirculated and avoid counting the same recirculated volume as repeated fresh withdrawal. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted photovoltaic conversion components or their declared upstream feedstocks, carrier and connection materials, integrated electronics when applicable, process aids, utilities and packaging at the reporting facility gate |
| starting_condition_role | Foreground manufacturing input condition; the exact make-or-buy boundary is declared for each component group |
| product_classification_scope | Finished photovoltaic AC/DC generator goods corresponding semantically to CPC 3.0 code 46113, not electricity, installation services or separately traded components |
| recursive_input_rule | A purchased input already meeting this product-category definition is recorded once as a same-category product input with an upstream dataset; do not reopen its internal production in the consuming process unless subdivision is explicit and double counting is prevented |
| upstream_dataset_requirement | Every purchased cell, module, laminate, inverter, electronic assembly, frame, glass, encapsulant, cable, junction component, process aid, utility and packaging input requires a geographically, temporally and technologically representative upstream dataset or a disclosed proxy |
| disclosure | Declare technology, architecture, AC/DC configuration, rated power, included components, make-or-buy boundary, factory geography, production period, allocation choices, recycled-content modelling, excluded stages and all proxy datasets |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground package | Include receiving, generator assembly, conditional integrated power electronics, electrical qualification, internal material handling, on-site utilities, direct emissions, on-site waste handling, packing and factory-gate release. Exclude distribution after the gate, installation, operation, electricity production and end of life. | `jrc-2025-pv-carbon-footprint`; `iea-pvps-t12-18-2020` |
| `boundary_route_expansion` | upstream photovoltaic conversion route | If the reporting organization manufactures ingots, wafers, cells or thin-film layers, model those stages as separate foreground processes; otherwise represent them through upstream product datasets. | `jrc-2025-pv-carbon-footprint` |
| `boundary_ac_configuration` | AC-output product | Include only inverter or conversion electronics incorporated in and sold with the generator. A separately traded inverter remains a separate product input and does not by itself make the reference product an AC generator. | `iec-62109-2-2011`; `iec-62109-3-2020` |
| `boundary_no_power_station_substitution` | reference product | Do not substitute an installed power station, construction service, photovoltaic electricity process or electricity flow for the factory-gate generator item. | `unsd-cpc-v3-photovoltaic-generators`; `iea-pvps-t12-18-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_receipt` | Component receipt, inspection and kitting | required | Always | Establish the declared make-or-buy boundary and accepted component inventory | Accepted kit for one released generator item |
| `generator_assembly` | Photovoltaic generator assembly | required | Always; subdivide upstream cell or module production when performed by the reporting organization | Join and integrate photovoltaic conversion, carrier, connection and enclosure components | One assembled generator before final qualification |
| `ac_electronics_integration` | Integrated AC power-conversion assembly | conditional | Include when the sold generator provides AC output or contains module-integrated power electronics | Integrate inverter, control, protection and related electronics into the sold product | One AC-capable generator assembly |
| `electrical_qualification` | Electrical qualification and safety testing | required | Always; apply product-specific test plan | Verify declared output, construction and release criteria | One tested conforming generator |
| `packing_release` | Packing and factory-gate release | required | Always | Package, label and release the reference product | 1 released photovoltaic generator item |

### Process: Component receipt, inspection and kitting (`component_receipt`)

#### Inputs

##### Product flows

###### Photovoltaic conversion components (`conversion_components_received`)

Record the received cells, modules, laminates or declared semiconductor feedstocks at the exact make-or-buy boundary, separated by technology and supplier dataset.

- Selected flow: Route-specific photovoltaic cells, modules, laminates or semiconductor feedstocks
- Flow property / unit: Mass or number of items / kg or Item(s), consistent with the selected upstream flow
- Amount rule: measured accepted quantity consumed for one released generator item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 released photovoltaic generator item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `jrc-2025-pv-carbon-footprint`

###### Carrier, connection and enclosure components (`carrier_connection_components`)

Record glass, frames, encapsulants, backsheets, junction components, conductors, connectors, enclosure parts and other included hardware as separately traceable component groups.

- Selected flow: Route-specific carrier, connection and enclosure product flows
- Flow property / unit: Mass / kg
- Amount rule: measured issued quantity minus returned unused quantity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 released photovoltaic generator item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `jrc-2025-pv-carbon-footprint`

###### Integrated electronics received (`integrated_electronics_received`)

Record inverter, optimiser, control, protection, transformer or other electronics only when incorporated in and sold with the reference product.

- Selected flow: Route-specific power-electronic and electrical components
- Flow property / unit: Mass or number of items / kg or Item(s)
- Amount rule: measured accepted quantity incorporated in one released product; zero for a DC-only product without integrated electronics
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 released photovoltaic generator item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `iec-62109-2-2011`; `iec-62109-3-2020`

##### Waste flows

###### Rejected incoming components and transport packaging (`incoming_rejects`)

Record rejected or damaged components and incoming packaging by treatment route; returned supplier property is disclosed separately from waste crossing the facility boundary.

- Selected flow: Route-specific rejected component and packaging waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured waste dispatched by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 released photovoltaic generator item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

No generic elementary input is prescribed for receipt and kitting. Record any direct withdrawal that crosses the environment boundary with a route-specific Tiangong elementary flow.

#### Outputs

##### Product flows

###### Accepted production kit (`accepted_component_kit`)

This internal intermediate preserves the item-level component configuration issued to assembly.

- Selected flow: Internal accepted photovoltaic generator component kit
- Flow property / unit: Number of items / Item(s)
- Amount rule: one complete accepted kit issued for each assembly start, adjusted for documented substitutions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly start
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources:

##### Waste flows

No additional generic waste output is prescribed beyond `incoming_rejects`; avoid duplicate recording.

##### Elementary flows

Record direct releases only when measured and when they cross the environment boundary.

### Process: Photovoltaic generator assembly (`generator_assembly`)

#### Inputs

##### Product flows

###### Accepted component kit (`assembly_component_kit`)

Record the internal kit transferred from receipt and any route-specific additional materials introduced during assembly.

- Selected flow: Internal accepted photovoltaic generator component kit
- Flow property / unit: Number of items / Item(s)
- Amount rule: measured kit issues to generator assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 assembled generator
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `jrc-2025-pv-carbon-footprint`

###### Assembly electricity (`assembly_electricity`)

Include metered assembly-line electricity, climate control, ventilation and allocated common-facility electricity for the declared production period.

- Selected flow: Site electricity supply product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered assembly electricity plus allocated common-facility electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared kWp of released generator capacity and convertible to one item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `jrc-2025-pv-carbon-footprint`; `iea-pvps-t12-18-2020`
- Range: Provisional assembly-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10000
  - Unit: kWh/kWp
  - Basis: broad candidate-stage screen per declared kWp of released generator capacity across make-or-buy boundaries
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Assembly water and process aids (`assembly_water_aids`)

Include fresh water and route-specific process aids used for cleaning, lamination, sealing, joining or other on-site assembly steps; keep chemicals as separate rows when material.

- Selected flow: Route-specific water and process-aid product flows
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: metered withdrawal and measured material issues less returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared kWp of released generator capacity and convertible to one item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_aid_records`
- Sources: `jrc-2025-pv-carbon-footprint`; `iea-pvps-t12-18-2020`
- Range: Provisional water-withdrawal screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: m3/kWp
  - Basis: broad candidate-stage screen per declared kWp; zero is possible for a dry assembly boundary using purchased modules
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed. Rework returned from later processes must be recorded as an internal product transfer, not as an external waste input.

##### Elementary flows

###### Direct water withdrawal (`direct_water_withdrawal`)

Use an elementary water input only for direct environmental withdrawal; purchased municipal or treated water remains a product input.

- Selected flow: Route- and geography-specific water elementary flow
- Flow property / unit: Volume / m3
- Amount rule: measured direct withdrawal not already represented in a purchased water dataset
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 released photovoltaic generator item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_aid_records`
- Sources: `iea-pvps-t12-18-2020`

#### Outputs

##### Product flows

###### Assembled photovoltaic generator (`assembled_generator`)

Record the route-specific assembled DC generator or the photovoltaic conversion assembly awaiting integrated AC electronics.

- Selected flow: Internal assembled photovoltaic generator
- Flow property / unit: Number of items / Item(s)
- Amount rule: measured assembly completions transferred to the next process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_release`
- Sources:

##### Waste flows

###### Assembly scrap and rejects (`assembly_scrap`)

Record broken cells or modules, conductor and frame offcuts, encapsulant and sealant losses, electronic rejects and other manufacturing waste separately by material and treatment route.

- Selected flow: Route-specific photovoltaic manufacturing waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched waste plus documented inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per declared kWp of released generator capacity and convertible to one item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `jrc-2025-pv-carbon-footprint`
- Range: Provisional manufacturing-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kWp
  - Basis: broad candidate-stage screen per declared kWp across heterogeneous technologies and make-or-buy boundaries
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct assembly emissions (`assembly_direct_emissions`)

Record measured volatile organic compounds, particulates or other direct releases by substance and compartment; do not use this composite role as the published elementary-flow identity.

- Selected flow: Substance- and compartment-specific elementary flows
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from captured material and a documented method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 released photovoltaic generator item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `iea-pvps-t12-18-2020`

### Process: Integrated AC power-conversion assembly (`ac_electronics_integration`)

#### Inputs

##### Product flows

###### DC photovoltaic generator assembly (`dc_generator_for_ac_integration`)

Record the tested or assembly-stage DC generator entering integrated electronics assembly.

- Selected flow: Internal DC photovoltaic generator assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: measured units transferred into AC integration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 AC-output generator assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ac_integration_records`
- Sources: `iec-62109-3-2020`

###### Power-conversion and protection electronics (`ac_power_electronics`)

Record the exact inverter, control, protection, wiring and optional transformer configuration incorporated in the sold product.

- Selected flow: Route-specific power-conversion and protection electronics product flows
- Flow property / unit: Mass or number of items / kg or Item(s)
- Amount rule: measured component issues incorporated in one AC-output generator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 AC-output generator assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ac_integration_records`
- Sources: `iec-62109-2-2011`; `iec-62109-3-2020`

###### Electronics-integration electricity (`ac_integration_electricity`)

Record metered joining, firmware loading, configuration and inspection electricity attributable to integrated electronics.

- Selected flow: Site electricity supply product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered or submetered electricity allocated to AC integration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 AC-output generator assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `iea-pvps-t12-18-2020`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

Record only measured direct elementary inputs specific to the integration operation.

#### Outputs

##### Product flows

###### AC-capable photovoltaic generator assembly (`ac_generator_assembly`)

This internal intermediate is the complete product configuration before final electrical qualification.

- Selected flow: Internal AC-capable photovoltaic generator assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: measured completed assemblies transferred to qualification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per AC-integration process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ac_integration_records`
- Sources: `iec-62109-3-2020`

##### Waste flows

###### Electronics rejects (`electronics_rejects`)

Record irreparable boards, wiring, protection devices and other electronic scrap by material and treatment route.

- Selected flow: Route-specific electronic waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured waste dispatched by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 AC-output generator assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

Record direct releases only when measured and when they cross the environment boundary.

### Process: Electrical qualification and safety testing (`electrical_qualification`)

#### Inputs

##### Product flows

###### Generator submitted for qualification (`generator_test_input`)

Record the exact DC or AC product configuration submitted to the release test plan.

- Selected flow: Internal assembled photovoltaic generator
- Flow property / unit: Number of items / Item(s)
- Amount rule: measured units entering qualification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per qualification process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_records`
- Sources: `iec-61215-1-2021`; `iec-61730-1-2023`; `iec-62109-2-2011`; `iec-62109-3-2020`

###### Qualification electricity (`test_electricity`)

Include energy consumed by flash testing, electrical safety tests, burn-in, climate conditioning and other tests performed within the declared production package.

- Selected flow: Site electricity supply product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered test-bench energy plus allocated conditioning energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per tested generator item
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `iec-61215-1-2021`; `iec-61730-1-2023`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

Record only direct elementary inputs required by the declared test method.

#### Outputs

##### Product flows

###### Conforming tested generator (`tested_generator`)

Record only items satisfying the declared release criteria; reworked units re-enter the appropriate process and are not double-counted.

- Selected flow: Internal conforming tested photovoltaic generator
- Flow property / unit: Number of items / Item(s)
- Amount rule: counted conforming units released from qualification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per qualification process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_records`
- Sources: `iec-61215-1-2021`; `iec-61730-1-2023`; `iec-62109-2-2011`; `iec-62109-3-2020`

##### Waste flows

###### Irreparable test rejects (`test_rejects`)

Record items failing final qualification and not returned to rework, separated by material and treatment route.

- Selected flow: Route-specific photovoltaic generator reject waste flows
- Flow property / unit: Mass or number of items / kg or Item(s)
- Amount rule: measured irreparable rejects dispatched for treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per tested generator item
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

Record measured test-related direct releases by substance and compartment when applicable.

### Process: Packing and factory-gate release (`packing_release`)

#### Inputs

##### Product flows

###### Conforming generator for packing (`tested_generator_for_packing`)

Record the conforming product transferred from qualification without changing its declared configuration.

- Selected flow: Internal conforming tested photovoltaic generator
- Flow property / unit: Number of items / Item(s)
- Amount rule: counted conforming units entering packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_release`
- Sources:

###### Packaging materials (`outbound_packaging`)

Record pallets, crates, cartons, films, protective materials, labels and reusable packaging at actual issued mass and reuse rate.

- Selected flow: Route-specific packaging product flows
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issued per released product, divided by verified trips for reusable packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared kWp of released generator capacity and convertible to one item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-2025-pv-carbon-footprint`
- Range: Provisional outbound-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kWp
  - Basis: broad candidate-stage screen per declared kWp across product sizes and reusable-packaging systems
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed.

##### Elementary flows

Record direct environmental inputs only when they occur in packing.

#### Outputs

##### Product flows

###### Released photovoltaic generator (`released_photovoltaic_generator`)

This is the quantitative-reference output. It represents one tested, packaged product whose required qualifiers and included components match the dataset description.

- Selected flow: PV system `3f66ec10-aedd-4032-baff-5f7764c1670e`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: exactly 1 released photovoltaic generator item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packing scrap (`packing_scrap`)

Record packaging offcuts, damaged packaging and label waste by material and treatment route.

- Selected flow: Route-specific packaging waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured packing waste dispatched by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 released photovoltaic generator item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

Record direct releases only when measured and when they cross the environment boundary.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all foreground processes | Avoid allocation by subdivision, separate metering and separate material records whenever practical. Same-category intermediates transferred between foreground processes carry burdens without creating a second final product. | `iea-pvps-t12-18-2020` |
| `allocation_shared_facility` | shared electricity, water, climate control and waste handling | Allocate shared facility quantities using a documented causal driver such as machine-hours, metered energy, occupied controlled area-time or processed mass. Production count or revenue may be used only when a causal driver is unavailable and the sensitivity is disclosed. | `iea-pvps-t12-18-2020` |
| `allocation_recycling` | recycled inputs and recyclable manufacturing waste | Use a recycled-content cut-off approach as the default foreground accounting convention. Report any avoided-burden or system-expansion result separately and do not net it silently against factory-gate burdens. | `iea-pvps-t12-18-2020`; `jrc-2025-pv-carbon-footprint` |
| `allocation_bipv` | building-integrated photovoltaic product | When one sold BIPV product also replaces a building element, declare the multifunctionality and allocate only with clearly described physical or functional criteria; avoid unreported credits. | `iea-pvps-t12-18-2020` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_receipt`; `generator_assembly` | received and issued components | approved bill of materials, receiving inspection and material issue/return records | product configuration; supplier; lot; component identity; technology; issued quantity; returned quantity; mass; included-component flag | reconcile engineering BOM with warehouse issues, substitutions and cycle counts | kg and Item(s) | each lot, aggregated monthly | representative production period, normally at least 12 consecutive months | every reporting facility and outsourced stage inside the foreground boundary | net issue equals issued minus unused return; normalize by released conforming items | approved BOM revision, supplier trace, calibration or scale record, substitution approval and inventory reconciliation |
| `cp_energy_records` | `generator_assembly`; `ac_electronics_integration`; `electrical_qualification`; `packing_release` | electricity and other metered energy | meter, submeter, invoice and operating-hour records | meter id; opening and closing reading; energy carrier; process area; operating hours; common-facility share; production count; rated kWp released | collect meter intervals and reconcile with invoices; allocate only residual common use | kWh or carrier-specific unit | monthly or finer | same period as product output | each reporting facility | direct meter use plus documented allocated common use, divided by conforming output | meter calibration, invoice reconciliation, allocation driver and missing-interval log |
| `cp_water_aid_records` | `generator_assembly` | water and process aids | meter, batch sheet and material issue records | withdrawal; discharge; recirculation; aid identity; issued mass; returned mass; batch; process step | reconcile water balance and chemical issues by batch | m3 and kg | each batch or monthly | same period as product output | each wet-process or assembly facility | fresh withdrawal excludes internal recirculation; net aid use equals issue minus return | meter status, batch sheet, purchase reconciliation and discharge record |
| `cp_ac_integration_records` | `ac_electronics_integration` | integrated electronics and completed assemblies | configuration, serial-number and work-order records | generator serial; inverter/control/protection identities; firmware; component quantities; DC/AC rating; completion status | serial-level configuration reconciliation | Item(s) and kg | each unit | same period as product output | every integration line | sum incorporated components and completed assemblies by product configuration | approved configuration, serial trace, work order and nonconformance record |
| `cp_test_records` | `electrical_qualification` | tested units, performance and safety results | calibrated test-bench and release records | serial; test procedure; rating condition; measured power; voltage; current; insulation/safety result; pass, rework or reject status | retain test result linked to product serial and declared specification | Item(s), Wp, V, A and method-specific units | each released unit or justified sampling plan | same period as product output | every release-test location | count only conforming released units; rework is counted once after final pass | calibration certificate, procedure revision, raw result, sampling justification and release signature |
| `cp_packaging_records` | `packing_release` | outbound packaging | packaging BOM, warehouse issues and reusable-packaging logs | packaging material; mass; issued quantity; product count; reuse cycles; losses | reconcile packaging BOM and dispatch records | kg and trips | each lot, aggregated monthly | same period as product output | each packing site | single-use mass plus reusable mass divided by verified reuse count | packaging specification, scale record, reuse log and dispatch record |
| `cp_waste_records` | all foreground processes | rejects, scrap, wastewater sludge and packaging waste | waste manifest, scale ticket and internal scrap log | waste identity; material; mass; source process; treatment route; returned-to-supplier flag; date | reconcile internal scrap generation with dispatched waste and inventory change | kg or Item(s) | each dispatch, aggregated monthly | same period as product output | each reporting facility | dispatched waste plus closing-minus-opening stored waste, separated by treatment | scale calibration, waste manifest, contractor receipt and inventory reconciliation |
| `cp_direct_emissions` | `generator_assembly`; `ac_electronics_integration`; `electrical_qualification` | direct air, water and soil releases | continuous monitor, stack or effluent test, material balance and permit report | substance; compartment; concentration; flow rate; duration; capture; destruction efficiency; method | use measured releases where available; calculations require traceable activity and factor | kg | monitoring interval or batch | same period as product output | each emitting point inside the foreground boundary | integrate concentration and flow over time or apply documented mass balance without double counting captured material | laboratory accreditation, instrument calibration, sampling plan, permit report and calculation worksheet |
| `cp_output_release` | all foreground processes | intermediates and released reference product | production, transfer, warehouse and shipment records | item count; serial or lot; product configuration; total mass; rated DC power; status; process transfer; release date | reconcile process transfers and finished-goods release | Item(s), kg and kWp | each lot or unit | same period as inputs | each reporting facility | final output is conforming releases adjusted for opening and closing finished-goods inventory | ERP reconciliation, release record, test link and stock count |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_item_normalization` | all inventory rows | normalized amount = period process amount / conforming released generator items in the same represented product configuration | period quantity; released item count; inventory change | amount per released item |  |
| `calc_capacity_intensity` | capacity-normalized disclosure | capacity intensity = per-item amount / tested or nameplate rated DC power in kWp for that item configuration | per-item amount; rated DC power in Wp or kWp | amount per kWp | `iea-pvps-t12-18-2020` |
| `calc_net_material_use` | components, process aids and packaging | net material use = issued quantity - unused returns + opening work-in-process - closing work-in-process | issue, return and inventory records | net consumed mass or item count | `jrc-2025-pv-carbon-footprint` |
| `calc_shared_utility` | shared energy and water | allocated quantity = shared measured quantity x causal driver share; direct metered use is not allocated again | shared meter; process driver; total driver | allocated process utility | `iea-pvps-t12-18-2020` |
| `calc_waste_balance` | manufacturing waste | generated waste = dispatched waste + closing stored waste - opening stored waste - documented returned reusable material | dispatch, storage and return records | waste by material and route |  |
| `calc_mass_reconciliation` | product and manufacturing losses | accepted material mass = released product mass + dispatched waste + closing-minus-opening material and work-in-process inventory + measured direct mass releases | BOM, scale, waste, inventory and emission records | reconciliation difference and completeness ratio | `jrc-2025-pv-carbon-footprint` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Product name, technology, architecture, rated power, AC/DC configuration and included components must identify one non-ambiguous sold configuration. | approved specification, BOM revision, nameplate and product serial/lot |
| `dq_temporal` | foreground activity data | Use one representative production period, normally at least 12 consecutive months; disclose start/end dates, shutdowns, ramp-up and substitutions. | dated meters, invoices, production and inventory records |
| `dq_geography` | foreground and upstream data | Identify each manufacturing site and electricity/water supply geography; justify any proxy geography. | site record, supply contract and proxy justification |
| `dq_technology` | route-specific data | Do not average crystalline-silicon, thin-film, emerging, DC-only and AC-integrated routes without weights and separate route evidence. | route map, production volumes and weighted calculation |
| `dq_completeness` | BOM, utilities, waste and emissions | Reconcile material, energy, output, waste and direct release records; explain unresolved balances and omitted flows. | reconciliation worksheets and completeness ratio |
| `dq_secondary_data` | purchased inputs | Select current, geographically and technologically representative upstream datasets; document dataset identity, version used during modelling and proxy limitations outside PCR UUID fields. | dataset selection log and representativeness assessment |
| `dq_testing` | product release | Link performance and safety evidence to the represented configuration and retain calibration and sampling evidence. | test report, calibration certificate and release record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | dataset identity | Fail if the canonical PCR id, product flow UUID, Product flow type, CPC 46113 scope or required product qualifiers are missing or contradictory. | `unsd-cpc-v3-photovoltaic-generators` |
| `validation_reference_amount` | quantitative reference | Require exactly 1 Item(s) of `3f66ec10-aedd-4032-baff-5f7764c1670e` with Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; require a declared rated DC power to enable per-kWp disclosure. |  |
| `validation_boundary` | foreground boundary | Fail if an electricity flow, installed power station, construction service, separately sold inverter or battery is used as the reference product, or if distribution/installation/use/end-of-life burdens are silently mixed into the factory-gate package. | `unsd-cpc-v3-photovoltaic-generators`; `jrc-2025-pv-carbon-footprint` |
| `validation_route` | product technology and configuration | Require separate disclosure and inventory for technology, product architecture, AC/DC output and integrated electronics. Reject an unlabeled single-technology dataset presented as a generic category average. | `jrc-2025-pv-carbon-footprint`; `iea-pvps-t12-18-2020` |
| `validation_bom_mass` | components and outputs | Require BOM-to-product-and-loss mass reconciliation and investigate material differences beyond the producer's documented measurement uncertainty. | `jrc-2025-pv-carbon-footprint` |
| `validation_energy_water` | utilities | Require period-aligned meter or invoice reconciliation, causal allocation of shared utilities and no double counting of recirculated water. | `iea-pvps-t12-18-2020` |
| `validation_test_release` | performance and safety | Require traceable test/release evidence for the represented product configuration; AC-integrated products must identify the applicable inverter or module-integrated electronics test basis. | `iec-61215-1-2021`; `iec-61730-1-2023`; `iec-62109-2-2011`; `iec-62109-3-2020` |
| `validation_recursive_input` | same-category input | Require a separate upstream dataset for a purchased photovoltaic generator input and prevent its burdens from being expanded and counted again in the consuming foreground process. |  |
| `validation_estimate_status` | provisional ranges | Treat all `reasoned_estimate` ranges as candidate-stage screens only; fail publication readiness if a publication-critical allowed range relies on them without explicit review acceptance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground product data package publishable as a `secondary_dataset` or `background_dataset` after methodology and translation review |
| downstream_use | Foreground process construction for photovoltaic generator manufacture; capacity-normalized product comparisons when configuration and rated-power bases match; input to broader PV system, installation, electricity-generation and lifecycle models as a distinct product-stage dataset |
| allowed_use | Use for the declared technology, architecture, factory geography, production period, AC/DC configuration and component boundary; weighted market mixes are allowed only with transparent weights and route-specific source datasets |
| excluded_use | Do not use as photovoltaic electricity, an installed power station, an inverter-only or battery-only dataset, an undeclared generic technology average, or a use/end-of-life dataset |
| required_metadata | canonical PCR id; product flow UUID; product specification; technology; architecture; module count or active area; rated DC power and rating condition; AC/DC output; integrated-component list; total mass; make-or-buy boundary; factory geography; production period; allocation; upstream dataset identities; test basis |
| required_quality_disclosure | foreground coverage and period; metering and allocation methods; BOM and mass reconciliation; missing data; proxies; technology mixing; reasoned estimates; data-quality assessment; direct-emission methods; test sampling and calibration |
| update_trigger | Change in photovoltaic technology, product architecture, rated-power basis, integrated electronics, principal BOM, factory or energy supply; material change in yield, waste or emissions; test specification revision; new representative source evidence; or age beyond the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-photovoltaic-generators` | official_guidance | United Nations Statistics Division, *Overview of the proposed main changes introduced in the revised CPC*, CPC Version 3.0 accompanying note, p. 11, https://unstats.un.org/unsd/classifications/CPC/Documents/4-Accompanying-note-Overview-of-the-proposed-main-changes-introduced-in-the-revised-CPC.pdf (retrieved 2026-08-09) | CPC 46113 identity and separation from non-photovoltaic generators and generating sets |
| `jrc-2025-pv-carbon-footprint` | official_guidance | European Commission Joint Research Centre, Ardente et al., *Harmonised rules for the calculation of the carbon footprint of photovoltaic modules in the context of the EU Ecodesign Directive*, JRC141275, 2025, DOI 10.2760/4062978, https://publications.jrc.ec.europa.eu/repository/handle/JRC141275 (retrieved 2026-08-09) | PV technology scope, BOM, material and energy hotspots, module manufacturing boundary, assembly, packaging and secondary-data quality |
| `iea-pvps-t12-18-2020` | official_guidance | IEA PVPS Task 12, Frischknecht et al., *Methodology Guidelines on Life Cycle Assessment of Photovoltaic Electricity*, 4th edition, report T12-18:2020, https://iea-pvps.org/key-topics/methodology-guidelines-on-life-cycle-assessment-of-photovoltaic-2020/ (retrieved 2026-08-09) | PV system components, facility inventory, kWp disclosure, water balance, allocation, recycling and reporting parameters |
| `iec-61215-1-2021` | standard | IEC 61215-1:2021, *Terrestrial photovoltaic (PV) modules - Design qualification and type approval - Part 1: Test requirements*, https://webstore.iec.ch/en/publication/61345 (retrieved 2026-08-09) | Module design qualification, output measurement and product test evidence |
| `iec-61730-1-2023` | standard | IEC 61730-1:2023, *Photovoltaic (PV) module safety qualification - Part 1: Requirements for construction*, https://webstore.iec.ch/en/publication/59803 (retrieved 2026-08-09) | PV module construction and safety release evidence |
| `iec-62109-2-2011` | standard | IEC 62109-2:2011, *Safety of power converters for use in photovoltaic power systems - Part 2: Particular requirements for inverters*, https://webstore.iec.ch/en/publication/6471 (retrieved 2026-08-09) | Boundary and safety basis for DC-to-AC inverter functions incorporated in an AC-output product |
| `iec-62109-3-2020` | standard | IEC 62109-3:2020, *Safety of power converters for use in photovoltaic power systems - Part 3: Particular requirements for electronic devices in combination with photovoltaic elements*, https://webstore.iec.ch/en/publication/27684 (retrieved 2026-08-09) | Product boundary and testing basis for module-integrated electronics sold with photovoltaic elements as one product |
