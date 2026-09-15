---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.rangefinders-theodolites-and-tachymeters-tacheometers-and-levels
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rangefinders, theodolites and tachymeters (tacheometers) and levels

## 1. Scope and Applicability

This PCR covers factory-gate production of complete rangefinders, theodolites, electronic tacheometers/total stations, and optical, compensator, digital, or laser levels used for distance, angle, coordinate, or elevation measurement. The product is a complete tested instrument in its saleable packaging. Tripods, staffs, prisms sold separately, GNSS receivers, photogrammetric instruments, handheld tapes and callipers, and surveying services are excluded. Use and end-of-life are outside the default gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.rangefinders-theodolites-and-tachymeters-tacheometers-and-levels |
| classification_refs | CPC 3.0 `48212`, Rangefinders, theodolites and tachymeters (tacheometers) and levels |
| covered_products | complete rangefinders; theodolites; tacheometers/electronic tacheometers/total stations; spirit, compensator, digital and laser surveying levels |
| excluded_products | separately sold tripods, staffs and prisms; GNSS receivers; photogrammetric instruments; handheld length gauges; surveying services |
| representative_product | one complete total station with its installed battery when supplied and its corrugated-board sales box |
| production_route | receipt of specified materials and components; housing fabrication where performed; optical/electronic integration; assembly; calibration and functional test; packaging |
| market_state | accepted, calibrated, saleable instrument at the manufacturing site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provision of a complete surveying instrument capable of the declared distance, angle, coordinate, or elevation measurement function |
| How much | one saleable instrument |
| How well | accepted against the manufacturer's declared model specification and applicable precision verification procedure |
| How long or cycle | one production output at the factory gate; service life is declared metadata and is not normalized by this cradle-to-gate PCR |
| reference_flow_link | `finished_surveying_instrument` |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | Rangefinder, theodolite, tacheometer/total station, or level |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | instrument family; manufacturer and model; measurement function; optical/digital/laser configuration; declared precision or uncertainty; included battery and accessories; net instrument mass; packaging configuration; manufacturing site and geography; production period; factory gate |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The reference-product UUID remains unresolved and must not be replaced by a broader surveying-instrument flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | accepted finished surveying instrument | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Normalize the dataset to exactly one accepted saleable instrument; rejected or reworked units are not reference output. |
| `material_mass_measurement` | aluminium alloy, optical components, printed wire board and corrugated-board box inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net mass crossing the foreground boundary and exclude reusable transport packaging unless it is transferred with the product. |
| `electricity_energy_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity quantity and convert kWh to MJ using 1 kWh = 3.6 MJ; do not add upstream generation emissions as foreground elementary flows. |
| `battery_item_count` | installed lithium-ion battery | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only batteries transferred with the reference product and disclose rated capacity, chemistry and pack configuration. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include receipt and issue of listed materials and components, directly controlled housing work, optical/electronic integration, assembly, calibration, functional testing and saleable packaging through the manufacturing-site gate. | `un-cpc-3-0-structure-2025` |
| `boundary_upstream_inputs` | purchased inputs | Link each purchased material, component, battery, electricity and packaging input to a geographically and technologically representative upstream dataset; do not restate upstream emissions as foreground exchanges. |  |
| `boundary_quality_test` | calibration and functional testing | Retain model-specific calibration, functional-test, precision-test and acceptance evidence; identify the applied test procedure and do not represent a partial precision check as comprehensive product acceptance. |  |
| `boundary_exclusions` | default study boundary | Exclude capital equipment, buildings, employee travel, product use, maintenance and end-of-life unless the declared study scope explicitly includes them. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | specified materials and components received at the instrument manufacturing site |
| starting_condition_role | foreground manufacturing input condition |
| product_classification_scope | complete goods in CPC 3.0 `48212`; separately supplied parts and accessories remain outside this product identity |
| recursive_input_rule | a complete CPC 48212 instrument received for integration or resale is recorded as a same-category product input with its upstream dataset and is not recursively decomposed inside this foreground process |
| upstream_dataset_requirement | each purchased input requires a supplier-specific dataset when available, otherwise a documented representative dataset matching material/component state, geography and technology |
| disclosure | declare make-or-buy boundary, model and instrument family, manufacturing geography, production period, included battery/accessories, packaging configuration, test procedure, allocation and data coverage |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| instrument_fabrication_assembly_test_packaging | Instrument fabrication, assembly, testing and packaging | required |  | foreground production | one accepted saleable surveying instrument |

### Process: Instrument fabrication, assembly, testing and packaging (`instrument_fabrication_assembly_test_packaging`)

#### Inputs

##### Product flows

###### Aluminium alloy for structural instrument parts (`aluminium_alloy_input`)

Record aluminium alloy consumed in housings, frames or structural parts made within the declared foreground boundary.

- Selected flow: Aluminium alloy `d2335464-e0fd-574c-b56f-83fdf8c65b0c`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus verified returned reusable stock, normalized to accepted instrument output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted saleable surveying instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_component_issue`
- Sources:

###### Optical components incorporated in the instrument (`optical_components_input`)

Record the mass of optical component blanks or finished optical components transferred into the instrument; declare the supplied state.

- Selected flow: Optical components `1b76ef84-1faf-4be8-9f8a-0dbc2b56a030`
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-declared net mass incorporated in accepted instruments
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted saleable surveying instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_component_issue`
- Sources:

###### Printed wire board incorporated in the instrument (`printed_wire_board_input`)

Record the mass of each printed wire board crossing the foreground boundary, aggregated for the reference model.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: supplier-declared or measured net board mass multiplied by boards installed in accepted instruments
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted saleable surveying instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_component_issue`
- Sources:

###### Lithium-ion battery transferred with the instrument (`lithium_ion_battery_input`)

Include this flow only for a model delivered with a rechargeable lithium-ion battery; models without such a battery record the row as not applicable in the produced dataset.

- Selected flow: Lithium Ion Battery `5554faa4-1ae2-459a-959a-b2180ab3cedc`
- Flow property / unit: Number of items / Item(s)
- Amount rule: count batteries installed in or packaged with accepted instruments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted saleable surveying instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_issue`
- Sources:

###### Purchased electricity used in foreground manufacturing (`electricity_input`)

Record purchased electricity used for machining, assembly, environmental control, charging, calibration, testing and packaging inside the declared foreground boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered kWh attributable to the process multiplied by 3.6 and normalized to accepted instrument output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted saleable surveying instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_metering`
- Sources:

###### Corrugated-board sales box transferred with the instrument (`corrugated_board_box_input`)

Record only the corrugated-board box transferred with the reference product; reusable inbound crates are excluded from this row.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-declared net box mass multiplied by boxes transferred with accepted instruments
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted saleable surveying instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_issue`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted packaged surveying instrument (`finished_surveying_instrument`)

Record each complete instrument only after model-specific calibration, functional test and acceptance; the unresolved Tiangong product-flow UUID remains empty.

- Selected flow: Rangefinder, theodolite, tacheometer/total station, or level
- Flow property / unit: Number of items / Item(s)
- Amount rule: counted accepted packaged instruments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output reconciled to the reference amount of 1 Item(s)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_instrument_acceptance`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_models` | multiple instrument models or product families | Prefer model-, batch- or line-level subdivision using BOM, issue, meter and accepted-output records. |  |
| `allocation_shared_operations` | shared electricity and common operations | When subdivision is not feasible, allocate shared burdens using a documented causal driver such as machine time, test time or occupied production time; disclose the driver and perform a sensitivity check against item-count allocation. |  |
| `allocation_rework_scrap` | rework, rejects and recyclable scrap | Assign rework burdens to the accepted output that required them; record any exported recyclable material as a separate waste or co-product exchange and disclose the applied cut-off or substitution convention without netting it from input quantities. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_issue` | instrument_fabrication_assembly_test_packaging | aluminium alloy, optical component, printed wire board and battery inputs | BOM, supplier specification, receipt and issue records | model; part id; flow identity; supplied state; quantity; net mass where mass-based; return quantity; accepted output count | reconcile approved BOM with calibrated weighing or supplier net-mass data and issue/return records | kg or Item(s) | per lot or production batch | representative continuous 12-month period or full shorter campaign | declared manufacturing site and model | sum net issues by atomic flow and divide by accepted output count | approved BOM revision; supplier specification; scale calibration; issue and return records |
| `cp_electricity_metering` | instrument_fabrication_assembly_test_packaging | purchased electricity | electricity meter and production-time records | meter id; opening and closing reading; kWh; process share; allocation driver; accepted output count | dedicated submeter where available, otherwise reconcile facility meter to documented causal allocation | kWh | monthly and each production campaign | representative continuous 12-month period or full shorter campaign | declared foreground process at the manufacturing site | sum attributable kWh, multiply by 3.6 MJ/kWh and divide by accepted output count | meter calibration or utility invoice reconciliation; allocation worksheet |
| `cp_packaging_issue` | instrument_fabrication_assembly_test_packaging | corrugated-board sales box | packaging BOM and issue records | box specification; quantity issued; net mass per box; returned quantity; accepted output count | reconcile packaging BOM with supplier mass declaration or calibrated weighing and issue records | kg | per packaging lot or batch | representative continuous 12-month period or full shorter campaign | declared packaging operation | net box mass issued divided by accepted output count | packaging specification; scale calibration; issue record |
| `cp_finished_instrument_acceptance` | instrument_fabrication_assembly_test_packaging | accepted packaged surveying instrument | calibration, functional-test and release records | serial number; model; instrument family; test procedure; result; accepted or rejected state; acceptance date; packaging configuration | count unique serial-numbered units passing the declared model acceptance procedure | Item(s) | each unit | representative continuous 12-month period or full shorter campaign | declared assembly and test operation | count accepted units only and reconcile to inventory, sales-release and rework records | signed or electronic test record; calibration status; release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_net_material_per_item` | mass-based material and component inputs | (issued mass - verified returned mass) / accepted finished instruments | `cp_material_component_issue`; `cp_finished_instrument_acceptance` | kg input per Item(s) reference flow |  |
| `calculate_battery_items_per_item` | lithium-ion battery input | batteries transferred with accepted instruments / accepted finished instruments | `cp_material_component_issue`; `cp_finished_instrument_acceptance` | Item(s) battery per Item(s) reference flow |  |
| `calculate_electricity_per_item` | purchased electricity | attributable metered kWh × 3.6 / accepted finished instruments | `cp_electricity_metering`; `cp_finished_instrument_acceptance` | MJ electricity per Item(s) reference flow |  |
| `calculate_box_mass_per_item` | corrugated-board box input | net box mass issued / accepted finished instruments | `cp_packaging_issue`; `cp_finished_instrument_acceptance` | kg box per Item(s) reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Identify instrument family, manufacturer, model, measurement function, included battery/accessories, packaging and serial-number population; do not mix models without disclosed subdivision or allocation. | BOM revision, model specification and release records |
| `dq_temporal_coverage` | foreground inventory | Use a representative continuous 12-month period; a shorter complete production campaign is allowed only when dates, seasonality and representativeness are disclosed. | dated meter, issue, production and acceptance records |
| `dq_mass_energy_traceability` | material, component, packaging and electricity rows | Retain calibrated measurement, supplier specification or invoice evidence and reconcile issue, return and allocation records to the declared site boundary. | calibration certificates, supplier declarations, invoices and reconciliation worksheets |
| `dq_test_traceability` | finished instrument output | Retain the declared test procedure, calibration status, result and acceptance state for each counted output; distinguish a partial precision check from comprehensive acceptance testing. | serial-numbered test and release record; controlled test-procedure identifier and revision |
| `dq_completeness` | all foreground exchanges | Report any additional model-specific atomic material, component, consumable, waste or direct-emission exchange that is material to the declared study even when it is not a predefined row in this PCR. | BOM-to-inventory reconciliation and documented completeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow and finished output | Exactly one accepted saleable instrument must be the normalized reference output; rejected, reworked or incomplete units must not be counted. |  |
| `validate_uuid_identity` | UUID-bearing exchanges | Verify each UUID against the declared flow name, flow type, property and unit group; keep the reference-product UUID empty until an exact CPC 48212 instrument flow is confirmed. |  |
| `validate_bom_completeness` | foreground inventory | Reconcile listed and additional atomic inputs to the approved model BOM, packaging BOM, issue/return records and accepted output population; disclose omitted exchanges and cut-off rationale. |  |
| `validate_electricity` | purchased electricity | Reconcile attributable electricity to meter or invoice totals, preserve the allocation driver and verify the 3.6 MJ/kWh conversion. |  |
| `validate_test_evidence` | finished surveying instrument | Confirm that the declared model-specific acceptance evidence exists, identifies the applied test procedure and covers the instrument functions represented by the declared product specification. |  |
| `validate_range_status` | important flows | Do not substitute an external default range for missing foreground data while the manifest records an unresolved range-evidence need. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | cradle-to-gate datasets for complete CPC 48212 surveying instruments matching the declared family, model, technology, included accessories, packaging, geography and production period |
| excluded_use | separately supplied accessories, other surveying instruments, use-stage services, maintenance or end-of-life without an explicitly extended boundary |
| required_metadata | PCR id; instrument family; manufacturer and model; measurement function; precision or uncertainty declaration; test procedure; included battery/accessories; net mass; packaging; geography; site; production period; make-or-buy boundary; allocation; reference-product UUID status |
| required_quality_disclosure | record coverage; measurement and supplier-data basis; meter allocation; model mixing; additional exchanges; cut-offs; unresolved UUID and range evidence; deviations from the required protocols |
| update_trigger | material change in product identity, technology, BOM, battery or packaging configuration, manufacturing site, allocation, test procedure, source evidence or Tiangong flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | official CPC 3.0 classification identity and category boundary |
| `samr-total-station` | standard | https://std.samr.gov.cn/gb/search/gbDetailed?id=JiO74cSBHwA%3D&mode=p | verified Chinese term 全站仪 |
| `samr-electronic-theodolite` | standard | https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D82B27D3A7E05397BE0A0AB82A | verified Chinese term 电子经纬仪 and national-standard catalogue context |
