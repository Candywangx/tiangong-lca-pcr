---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-instruments-and-appliances-except-syringes-needles-and-the-like-used-in-dental-sciences
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other instruments and appliances (except syringes, needles and the like), used in dental sciences

## 1. Scope and Applicability

This PCR applies to the factory-gate production of physical instruments and appliances whose intended product identity is dental-science use within the stated category. It covers single-use or reusable and powered or non-powered products when their identity falls within that boundary. The foreground package shall identify the concrete product model and manufacturing route.

Syringes, needles and like injection articles are excluded. Dental services, manufacturing services performed on materials owned by others, dental furniture, sterilizers, diagnostic imaging equipment, dental materials and preparations, and use-phase clinical activity are outside this PCR unless a study brings them into a separately disclosed system boundary. The representative route is a reusable stainless-steel dental hand instrument because stainless steel is commonly used for dental instruments; this representative route does not assert that every covered product is stainless steel. Products with a materially different bill of materials or powered architecture shall declare that difference and include their actual atomic exchanges.

The default boundary starts with purchased materials, components, packaging and energy carriers at the manufacturing-site gate and ends with an accepted, packaged product at the manufacturer gate. Upstream production is represented by linked background datasets; distribution, clinical use, reprocessing by users, and end-of-life are excluded from the default foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-instruments-and-appliances-except-syringes-needles-and-the-like-used-in-dental-sciences |
| classification_refs | CPC 3.0: 48130 |
| covered_products | Finished instruments and appliances intended for dental-science use within CPC 3.0 code 48130, including single-use or reusable and powered or non-powered products when they meet the declared category boundary |
| excluded_products | Syringes, needles and like injection articles; products classified as dental furniture, sterilizers, diagnostic imaging equipment, dental materials or preparations; dental and manufacturing services |
| representative_product | Reusable stainless-steel dental hand instrument, supplied at the manufacturer gate |
| production_route | Purchased stainless steel; forming or machining; conditional aqueous cleaning or surface treatment; final assembly or inspection; packaging |
| market_state | Accepted finished product in its declared saleable packaging, with sterility state and reusable or single-use status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a finished dental instrument or appliance that performs the manufacturer-declared dental function |
| How much | 1 kg net mass of accepted finished product, excluding packaging, with item count also reported |
| How well | Conforms to the declared model, material, performance, surface-finish, cleanliness and sterility specifications |
| How long or cycle | At the manufacturer gate; reusable life or single-use status is declared but no use cycle is included in the reference amount |
| reference_flow_link | One kilogram of the accepted output row `finished_dental_instrument` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Dental instrument or appliance; Tiangong UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type and model; intended dental function; powered or non-powered; single-use or reusable; bill of materials and stainless-steel grade when applicable; net mass and item count; manufacturing route; surface treatment; cleanliness and sterility state; packaging configuration; manufacturing geography; reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and all mass-normalized rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg of accepted net product mass after final inspection; exclude packaging mass and rejected units from the denominator and report item count separately. |
| `electricity_energy` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered kWh record and convert to MJ using 1 kWh = 3.6 MJ; do not include upstream electricity-generation emissions as direct foreground emissions. |
| `water_mass` | Process-water and wastewater rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass measurement; when only volume is measured, use a documented, temperature-appropriate density and retain the original volume record. |
| `gas_volume` | Natural-gas row | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | State the metering reference temperature, pressure and dry or wet basis and use one consistent volume basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, components, packaging and energy carriers delivered to the manufacturing-site gate |
| starting_condition_role | Foreground manufacturing input boundary |
| product_classification_scope | Dental instruments and appliances within the reviewed semantic boundary; CPC 3.0 code 48130 is mapping context, not canonical identity |
| recursive_input_rule | A purchased instrument or appliance in the same category is recorded as one product input with supplier-stage completion and quantity disclosed; do not recursively recreate its manufacturing inventory inside this foreground package. |
| upstream_dataset_requirement | Link each purchased material, component, energy carrier and packaging input to a geography-, technology- and product-state-appropriate upstream dataset. |
| disclosure | Declare which fabrication, surface-treatment, cleaning, assembly, inspection, sterilization and packaging operations occur on site; identify outsourced operations and cut-offs. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground manufacturing package | Include on-site fabrication, aqueous cleaning or surface treatment when performed, assembly, inspection, packaging, direct utilities, wastes and direct emissions through release of the accepted product at the manufacturer gate. | `un-cpc-3-0-structure-2025`, `ec-jrc-stm-bref-2006` |
| `boundary_conditional_routes` | Route-specific operations | Include an operation only when it occurs for the declared product; identify outsourced treatment or sterilization as a purchased service or upstream process and do not silently omit it. | `ec-jrc-stm-bref-2006` |
| `boundary_direct_emissions` | Foreground elementary flows | Report only emissions that cross directly from the foreground site to the environment; keep upstream emissions in linked product or energy datasets. | `ec-jrc-stm-bref-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_fabrication` | Material forming and machining | conditional | Include when raw material is formed, cut, ground or machined at the reporting site; otherwise disclose purchased finished components. | Foreground fabrication | Accepted product mass and material balance |
| `surface_treatment_cleaning` | Aqueous cleaning and surface treatment | conditional | Include when aqueous cleaning, passivation, electrochemical treatment, coating, rinsing or heated drying occurs at the reporting site. | Foreground finishing | Treated product mass or treated surface area, reconciled to accepted product |
| `final_inspection_packaging` | Final inspection and packaging | required | Always include the final acceptance decision and saleable packaging performed before the manufacturer gate. | Foreground release | 1 kg accepted net finished product |

### Process: Material forming and machining (`material_fabrication`)

#### Inputs

##### Product flows

###### Stainless-steel stock (`stainless_steel_input`)

Record stainless steel that crosses the site boundary into products manufactured on the representative route. Declare grade, stock form, supplier, recycled content when known, and delivered mass.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass / kg
- Amount rule: Purchased stainless-steel mass consumed in accepted and rejected production, net of documented unchanged returns to supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources: `us-fda-iso-21850-1-recognition-2026`

###### Fabrication electricity (`fabrication_electricity`)

Record electrical energy used by forming, machining, grinding, extraction and directly supporting fabrication equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered fabrication electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources:

###### Fabrication process water (`fabrication_process_water`)

Record process water used directly for machining coolant make-up or in-process washing when those uses occur in fabrication.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered fabrication process-water input, excluding sanitary water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated steel fabrication scrap (`post_industrial_steel_scrap`)

Record steel offcuts, swarf and rejected steel pieces leaving the fabrication process as one segregated post-industrial scrap flow. Declare alloy grade, contamination, internal recycling and destination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap leaving the foreground fabrication process, excluding material internally returned within the same measured balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources:

##### Elementary flows

### Process: Aqueous cleaning and surface treatment (`surface_treatment_cleaning`)

#### Inputs

##### Product flows

###### Sodium hydroxide for alkaline cleaning (`surface_sodium_hydroxide`)

Record sodium hydroxide consumed in alkaline cleaning or treatment baths only when that chemical is used for the declared product route. Declare supplied concentration and active mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Supplied sodium-hydroxide product mass added to the foreground baths
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `ec-jrc-stm-bref-2006`

###### Surface-treatment process water (`surface_process_water`)

Record process water used for bath make-up and rinsing in the on-site cleaning or surface-treatment route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered bath make-up and rinse-water input, excluding sanitary water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `ec-jrc-stm-bref-2006`

###### Surface-treatment electricity (`surface_electricity`)

Record electricity used by bath circulation, electrochemical treatment, pumps, extraction, drying and directly supporting surface-treatment equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered surface-treatment electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `ec-jrc-stm-bref-2006`

###### Natural gas for bath heating or drying (`surface_natural_gas`)

Record gaseous natural gas consumed on site only when it directly heats treatment solutions or dries treated product. Declare metering reference conditions and exclude upstream gas-supply emissions from direct emissions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume attributable to bath heating or drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `ec-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Surface-treatment wastewater (`surface_wastewater`)

Record the single aqueous waste stream sent to on-site discharge control or off-site treatment. Declare pH, measured metals or other relevant contaminants, treatment state, and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: Measured wastewater mass leaving the surface-treatment process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `ec-jrc-stm-bref-2006`

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`surface_fossil_co2`)

Record only fossil carbon dioxide released directly by on-site combustion of the natural gas in `surface_natural_gas`. Do not add power-sector or upstream fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Directly measured emission or natural-gas use multiplied by a documented site-specific fossil-carbon emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_co2`
- Sources:

### Process: Final inspection and packaging (`final_inspection_packaging`)

#### Inputs

##### Product flows

###### Final inspection and packaging electricity (`packaging_electricity`)

Record electricity used by final inspection, cleaning verification, assembly where present, labelling and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or defensibly submeter-allocated electricity for final inspection and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated outer boxes (`corrugated_board_boxes`)

Record corrugated board boxes supplied as the paper-based outer packaging component. Other packaging components shall be added as separate atomic rows rather than aggregated into this row.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Purchased corrugated-box mass incorporated in saleable packaged output, including attributable damaged boxes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished dental instrument or appliance (`finished_dental_instrument`)

Record the net mass and item count of accepted finished product released at the manufacturer gate. The Tiangong product-flow UUID remains unresolved; do not substitute a metal, scrap or generic medical-device proxy.

- Selected flow: Dental instrument or appliance; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Accepted net product mass, normalized to exactly 1 kg; report item count as a required companion quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | Shared manufacturing operations | Avoid allocation by separately metering route-specific operations and assigning material, energy, water, waste and emissions to the product family or batch that caused them. | |
| `allocation_shared_loads` | Unseparated shared utilities | When direct metering is unavailable, allocate a shared load using a measured causal driver such as machine time, treated surface area, bath throughput or accepted product mass; disclose the driver and test sensitivity when it materially affects results. | `ec-jrc-stm-bref-2006` |
| `allocation_scrap` | Steel scrap and recovered treatment materials | Report scrap and recovered material quantities and destinations explicitly. Do not credit avoided primary production inside the foreground inventory unless the selected downstream system model requires that substitution and the method is disclosed. | `ec-jrc-stm-bref-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_records` | `material_fabrication` | `stainless_steel_input`; `fabrication_electricity`; `fabrication_process_water`; `post_industrial_steel_scrap` | Purchase, meter, production and waste records | material UUID or grade, received mass, returns, electricity kWh, water mass or volume, scrap mass, accepted product mass, batch and date | Reconcile invoices and stock movement to calibrated meters or scales for the same production period | kg; kWh; m3 | Per batch or monthly, with annual reconciliation | At least 12 consecutive months or the full campaign for shorter production | Reporting site and declared product family | Sum attributable quantities, subtract documented unchanged returns, then normalize by accepted net product mass | Purchase records, meter IDs, calibration status, batch records and mass-balance reconciliation |
| `cp_surface_records` | `surface_treatment_cleaning` | `surface_sodium_hydroxide`; `surface_process_water`; `surface_electricity`; `surface_natural_gas`; `surface_wastewater` | Bath, meter, chemical and discharge records | chemical product mass and concentration, water input, electricity kWh, gas volume and reference conditions, wastewater mass or volume, contaminant results, treated mass or area | Read dedicated meters where available; reconcile bath make-up and discharge logs to the declared route | kg; kWh; m3; m2 | Per batch or shift, aggregated monthly | At least 12 consecutive months or the full campaign | On-site treatment line serving the declared product | Assign by direct batch record; otherwise use treated area or mass and disclose the driver | Meter calibration, bath log, laboratory result, waste transfer note and route record |
| `cp_combustion_co2` | `surface_treatment_cleaning` | `surface_fossil_co2` | Fuel and emission-factor record | gas volume, reference conditions, fossil carbon content or approved factor, oxidation basis, measured CO2 when available | Prefer direct measurement; otherwise multiply normalized collected fuel by a documented site-specific or jurisdiction-approved factor | kg CO2; m3 gas | Same period as gas consumption | Same period as `cp_surface_records` | On-site combustion serving the declared route | Sum direct fossil CO2 and normalize by accepted net product mass | Fuel certificate, factor source, calculation sheet and meter calibration |
| `cp_packaging_records` | `final_inspection_packaging` | `packaging_electricity`; `corrugated_board_boxes`; `finished_dental_instrument` | Packaging purchase, meter and release records | electricity kWh, box mass, damaged boxes, accepted net product mass, item count, rejected units, model, packaging and sterility state | Reconcile packaging specifications and issues to released production lots and final inspection records | kg; count; kWh | Per released lot, aggregated monthly | At least 12 consecutive months or full campaign | Final inspection and packaging area | Sum attributable inputs and normalize by accepted net product mass; keep item count as companion data | Release record, packaging specification, scale calibration, meter allocation and rejection log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = attributable period amount / accepted net product mass for the same period | Attributable flow amount; accepted net product mass | Flow amount per 1 kg accepted net finished product | |
| `calc_electricity_mj` | Electricity rows | electricity_MJ = metered_kWh × 3.6 | Metered kWh | MJ of Electricity | |
| `calc_water_mass` | Water and wastewater rows measured by volume | mass_kg = measured_volume × documented density at the declared temperature | Volume; density; temperature | kg water or wastewater | |
| `calc_direct_fossil_co2` | `surface_fossil_co2` | direct fossil CO2 = normalized gas quantity × documented fossil-carbon emission factor, or normalized direct measurement | Collected natural-gas use and verified factor, or direct CO2 measurement | kg carbon dioxide (fossil) per kg accepted product | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain model, intended dental function, powered status, single-use or reusable status, material specification, net mass, count, surface state, sterility state and packaging configuration. | Product specification, bill of materials and lot-release record |
| `dq_route_completeness` | Process map | Reconcile the declared site route to the three process-map stages and state why each conditional stage is included or absent; disclose outsourced treatment and sterilization. | Process flow diagram, traveller or routing record |
| `dq_mass_balance` | Stainless steel, accepted product and steel scrap | Reconcile received and returned stainless steel, accepted product, rejects, scrap and material retained in work in progress for the same period; explain material gaps. | Stock ledger, batch record, scale records and reconciliation |
| `dq_temporal` | All foreground rows | Use one consistent period of at least 12 consecutive months where production is continuous, or the complete declared campaign; disclose abnormal downtime and rework. | Date-bounded source records and production log |
| `dq_measurement` | Metered and weighed rows | Record meter or scale identity, calibration status, allocation method and missing-data treatment; preserve original units before conversion. | Calibration certificates, raw readings and calculation workbook |
| `dq_surface_effluent` | Surface-treatment wastewater | Retain treatment state, destination and measurements for route-relevant contaminants; do not infer direct environmental emissions from wastewater composition without a discharge boundary. | Laboratory results, discharge permit records or waste transfer notes |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Product category and reference flow | Confirm the product is a dental instrument or appliance within the stated boundary and is not a syringe, needle or like injection article; verify that all required qualifiers are present. | `un-cpc-3-0-structure-2025`, `us-fda-iso-21850-1-recognition-2026` |
| `validate_reference_amount` | Reference product | Confirm the output is exactly 1 kg accepted net product after normalization, packaging mass is excluded, and item count is reported. | |
| `validate_atomic_inventory` | Inventory rows | Confirm every row is one atomic exchange, every conditional row matches the declared route, and no generic material, energy, packaging, waste or emission collection substitutes for concrete rows. | |
| `validate_uuid_semantics` | UUID-bearing rows | Confirm selected flow name, flow type, property, unit group and product state match the current public Tiangong state-100 identity; the unresolved reference product must remain without a proxy UUID. | |
| `validate_balance_and_boundary` | Material, energy, waste and emissions | Check period alignment, stainless-steel mass balance, energy conversion, wastewater destination, and that upstream electricity and fuel emissions are not duplicated as direct foreground emissions. | `ec-jrc-stm-bref-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Product carbon-footprint, life-cycle inventory and lifecycle-model construction for the declared dental instrument or appliance |
| allowed_use | Comparisons or modelling within the declared product type, material route, manufacturing geography, technology, time period, sterility state and packaging boundary |
| excluded_use | Clinical service impacts, user reprocessing, distribution, use-phase energy or consumables, and end-of-life unless separately modelled; proxying unrelated medical devices or dental materials |
| required_metadata | PCR id and version; product model and function; net mass and item count; powered and use-cycle status; bill of materials; route and outsourced operations; geography; technology; reference period; sterility and packaging state; allocation and cut-off choices |
| required_quality_disclosure | Source coverage; measured versus allocated shares; meter and scale quality; missing-data treatment; material-balance gap; surface-treatment and wastewater route; unresolved reference-product UUID |
| update_trigger | Material change in product design, bill of materials, manufacturing route, surface chemistry, energy mix, site, supplier boundary, sterility or packaging configuration, allocation driver, or a new exact Tiangong reference-product identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, code 48130, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official classification identity and explicit exclusion of syringes, needles and like articles |
| `us-fda-iso-21850-1-recognition-2026` | official_guidance | U.S. FDA Recognized Consensus Standards, recognition 4-395 for ISO 21850-1:2020, Dentistry — Materials for dental instruments — Part 1: Stainless steel, https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfstandards/detail.cfm?standard__identification_no=46977 (retrieved 2026-09-06) | Stainless steel representative route and applicability to single-use, reusable, powered and non-powered dental instruments |
| `ec-jrc-stm-bref-2006` | official_guidance | European Commission Joint Research Centre, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, Executive Summary pp. i–v, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-06) | Conditional surface-treatment decomposition; collection of electricity, fuel, water, acids or alkalis, wastewater, wastes and direct emissions |
