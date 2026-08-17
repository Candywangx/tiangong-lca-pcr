---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-synthetic-staple-fibres-containing-less-than-85-by-wei-6a02e796
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Yarn (other than sewing thread) of synthetic staple fibres, containing less than 85% by weight of such fibres

## 1. Scope and Applicability

This PCR covers spun yarn other than sewing thread in which synthetic staple fibres account for less than 85% of product mass. The synthetic polymer, co-fibre, blend fraction, yarn count, twist, moisture condition, colour or treatment state, production technology, geography, and plant gate shall be declared. Filament yarn, sewing thread, yarn containing 85% or more synthetic staple fibre, and artificial-cellulosic yarn without a synthetic staple-fibre component are outside this PCR.

The representative foreground route begins with a cotton/synthetic blended staple-fibre sliver and covers drawing, roving where used, ring or compact spinning, twisting where specified, and winding. A dataset for another conforming polymer/co-fibre formulation shall use equally specific atomic material and waste-flow identities and shall not reuse the representative sliver identity unless its semantics match.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-synthetic-staple-fibres-containing-less-than-85-by-wei-6a02e796 |
| classification_refs | CPC 3.0: 26440 (exact) |
| covered_products | Spun yarn other than sewing thread with a declared synthetic staple-fibre share below 85% by mass, blended with one or more declared non-synthetic co-fibres |
| excluded_products | Sewing thread; continuous-filament yarn; yarn with synthetic staple-fibre content of 85% or more by mass; yarn without synthetic staple fibre |
| representative_product | Undyed, unsized polyester-cotton staple-fibre blend yarn wound at the spinning-mill gate |
| production_route | Blended staple-fibre sliver; drawing; roving when used; ring or compact spinning; twisting when specified; winding |
| market_state | Finished spun yarn on a winding package, before weaving, knitting, dyeing, sizing, retail packaging, and transport from the spinning mill |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of conforming blended spun yarn for subsequent textile manufacture |
| How much | 1 kg of net yarn product |
| How well | Synthetic staple-fibre share below 85% by mass, with polymer, co-fibre, yarn count, twist, moisture condition, colour/treatment state, and winding form declared |
| How long or cycle | One accepted production lot at the spinning-mill gate |
| reference_flow_link | `finished_blended_yarn` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Yarn (other than sewing thread) of synthetic staple fibres, containing less than 85% by weight of such fibres `914fcc34-ead6-4938-af63-b4ffa94e0a99` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | synthetic polymer; synthetic staple-fibre mass share; co-fibre and mass share; yarn count; twist; spinning technology; moisture condition; colour/treatment state; winding form; geography; plant gate; production period |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference yarn and material mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net mass on one declared moisture/conditioning basis; tare winding packages and apply the same basis to input-output reconciliation. |
| `synthetic_fraction` | Product composition | Mass fraction | kg/kg | Demonstrate that synthetic staple fibres contribute less than 0.85 kg per kg of total fibre mass; identify each polymer and co-fibre from supplier specification or a composition test. |
| `electricity_metering` | Low-voltage electricity input | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve process-meter or allocated submeter records in kWh; document any conversion factor and retain the original meter unit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Blended staple-fibre sliver received at the spinning process, with synthetic polymer, co-fibre, blend fractions, supplier, moisture condition, and upstream dataset references declared |
| starting_condition_role | Foreground material input to secondary spinning |
| product_classification_scope | Spun yarn other than sewing thread with synthetic staple-fibre content below 85% by mass |
| recursive_input_rule | If conforming yarn re-enters the process, record that yarn once as a separate atomic input and do not reproduce its upstream spinning inventory inside the current foreground process. |
| upstream_dataset_requirement | Link separate upstream datasets for fibre production and sliver preparation that match polymer, co-fibre, recycled/virgin status, geography, and time. |
| disclosure | Disclose the starting sliver composition and conditioning state, included spinning stages, technology, any omitted stage, treatment state, gate, and whether utilities are directly metered or allocated. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | Foreground process | Begin at receipt of composition-declared blended staple-fibre sliver; fibre production, opening, blending, carding, and sliver formation remain upstream. | `jrc-textiles-bref-2023` |
| `boundary_spinning_gate` | Foreground process | Include drawing, roving when used, spinning, twisting when specified, winding, directly consumed electricity and lubricant, conforming yarn output, and separately measured captured fibre waste. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_downstream` | Downstream activities | Exclude dyeing, sizing, weaving, knitting, retail packaging, outbound transport, use, and end-of-life unless a broader study adds separately identified processes. | `jrc-textiles-bref-2023` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sliver_to_yarn_spinning` | Drawing, roving, spinning, twisting, and winding of blended staple-fibre yarn | required | Always included; roving and twisting are present only when documented by the product route | Foreground yarn production | 1 kg accepted conforming yarn output |

### Process: Drawing, roving, spinning, twisting, and winding of blended staple-fibre yarn (`sliver_to_yarn_spinning`)

#### Inputs

##### Product flows

###### Composition-declared blended staple-fibre sliver (`blended_staple_fibre_sliver`)

This is the single incoming fibre intermediate for the representative cotton/synthetic route. Its lot composition and issued mass cross the foreground boundary at the spinning mill.

- Selected flow: Blended staple fibre sliver; cotton and man-made fibres blend, at plant, CN `0d57947b-b2f9-4a30-8a2c-7f648fd0ee55`
- Flow property / unit: Mass / kg
- Amount rule: Record the issued sliver mass by production lot and normalize it to accepted conforming yarn output; do not apply a default yield.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted conforming yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sliver_mass`
- Sources: `jrc-textiles-bref-2023`

###### Low-voltage alternating-current consumption mix (`low_voltage_electricity`)

This card covers the one declared Chinese user-side low-voltage electricity scenario used by motors, suction and winding equipment. Electricity for any separately modelled heat treatment is not combined here.

- Selected flow: Alternating current; less than 1 kV; consumption mix, at user, CN `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Record process-meter electricity or a documented submeter allocation for the included stages and normalize it to accepted conforming yarn output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conforming yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Synthetic ester spinning lubricant (`synthetic_ester_spinning_lubricant`)

This is the single lubricant product applied to staple fibres or spinning equipment and attributable to the yarn lot. Its Tiangong identity remains unresolved because the retrieved POY and FDY oils are filament-yarn products.

- Selected flow: Synthetic ester spinning lubricant
- Flow property / unit: Mass / kg
- Amount rule: Record lubricant issued to the included spinning stages minus measured return to stock, normalized to accepted conforming yarn output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conforming yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_mass`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished blended staple-fibre yarn (`finished_blended_yarn`)

This is the accepted reference product after winding and quality release at the spinning-mill gate.

- Selected flow: Yarn (other than sewing thread) of synthetic staple fibres, containing less than 85% by weight of such fibres `914fcc34-ead6-4938-af63-b4ffa94e0a99`
- Flow property / unit: Mass / kg
- Amount rule: Record net accepted yarn mass after package tare and rejection accounting on the declared moisture basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted conforming yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass`
- Sources: `unsd-cpc-3-2025`

##### Waste flows

###### Captured polyester-cotton staple-fibre waste (`captured_blended_fibre_waste`)

This is the single separately collected loose-fibre waste stream captured from the representative drawing, spinning and winding route. It excludes fabric waste and generic particulate waste.

- Selected flow: Captured polyester-cotton staple fibre waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh the captured loose-fibre waste removed from the included stages by lot or reporting period and normalize it to accepted conforming yarn output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted conforming yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_waste_mass`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_measurement` | Product-specific material, energy, lubricant, and waste records | Prefer lot-, machine-, or product-line measurement and assign each record directly before any allocation. | `eu-textiles-bat-2022` |
| `allocation_shared_operations` | Shared spinning and winding operations | If direct separation is not feasible, allocate shared input and waste records by accepted product mass on the same moisture basis; disclose the allocation period, products, masses, and rationale. | `eu-textiles-bat-2022` |
| `allocation_recovered_fibre` | Captured fibre waste | Treat captured fibre as waste unless documented end-of-waste or co-product criteria are met. If it becomes a co-product, report the physical mass split and a sensitivity result without subtracting an assumed recycling credit inside the foreground inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_sliver_mass` | `sliver_to_yarn_spinning` | Blended staple-fibre sliver input | Material issue and supplier composition records | lot_id; issued_mass_kg; returned_mass_kg; polymer; synthetic_fraction; co_fibre; co_fibre_fraction; moisture_basis; supplier | Reconciled warehouse issue records and supplier specification or composition test | kg | Each production lot | Dataset reporting period | Included spinning line and product | Sum issued minus returned mass, then divide by accepted yarn mass on the same basis | Calibrated scale record; lot trace; composition certificate or test |
| `cp_electricity_meter` | `sliver_to_yarn_spinning` | Low-voltage electricity input | Meter record | meter_id; start_reading_kWh; end_reading_kWh; included_equipment; allocation_key; downtime | Dedicated meter preferred; otherwise documented submeter allocation | kWh | Each meter interval | Dataset reporting period | Included drawing, roving, spinning, suction and winding equipment | Net kWh divided by accepted yarn mass for the same interval | Meter identifier; reading images or export; allocation worksheet |
| `cp_lubricant_mass` | `sliver_to_yarn_spinning` | Synthetic ester spinning lubricant input | Material issue record | product_name; safety_data_sheet; lot_id; issued_mass_kg; returned_mass_kg | Reconciled issue and return records | kg | Each issue or production lot | Dataset reporting period | Included spinning equipment and yarn product | Sum issued minus returned mass, then divide by accepted yarn mass | Issue record; return record; safety data sheet |
| `cp_yarn_mass` | `sliver_to_yarn_spinning` | Finished conforming yarn output | Production and quality release record | lot_id; gross_mass_kg; package_tare_kg; rejected_mass_kg; accepted_mass_kg; moisture_basis; yarn_count; twist | Calibrated scale and quality-release system | kg | Each production lot | Dataset reporting period | Included product and spinning line | Sum accepted net yarn mass after tare and rejection accounting | Scale calibration; quality-release record; lot trace |
| `cp_fibre_waste_mass` | `sliver_to_yarn_spinning` | Captured blended fibre waste output | Waste weighing record | lot_or_period; container_gross_mass_kg; container_tare_kg; fibre_composition; destination | Dedicated labelled container and calibrated scale | kg | Each container removal | Dataset reporting period | Included drawing, spinning, suction and winding equipment | Sum net captured-fibre waste and divide by accepted yarn mass for the matched period | Scale record; container label; waste transfer or reuse record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_inventory` | Every foreground inventory row | Divide the matched-period net flow quantity by accepted net yarn mass on the same moisture basis; retain raw quantities and period links. | net flow quantity; accepted yarn mass | flow quantity per kg accepted yarn | `eu-textiles-bat-2022` |
| `calc_material_reconciliation` | Material inputs and outputs | Compare net sliver plus net lubricant against accepted yarn plus captured fibre waste. Disclose the unreconciled difference and add separately identified atomic flows when records show another material output. | sliver mass; lubricant mass; yarn mass; captured fibre waste mass | material reconciliation and disclosed difference | `eu-textiles-bat-2022` |
| `calc_synthetic_fraction` | Product composition | Divide the dry or equivalently conditioned mass of synthetic staple fibre by total fibre mass using one consistent basis. | synthetic staple-fibre mass; total fibre mass | synthetic staple-fibre mass fraction | `unsd-cpc-3-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_composition` | Reference product and incoming sliver | Trace polymer, co-fibre, blend fractions and moisture basis from supplier records to each yarn lot and demonstrate synthetic staple-fibre content below 85% by mass. | Supplier specification or composition test; lot trace; quality release |
| `dq_process_completeness` | Foreground inventory | Cover every included stage and separately record each material, electricity, lubricant, product and waste exchange that crosses the boundary; explain any material reconciliation difference. | Process flow sheet; meter map; issue records; waste records; reconciliation |
| `dq_temporal_representativeness` | Dataset reporting period | Use a period representative of normal production and include significant changes, downtime and atypical lots; annual monitoring records are preferred, and any shorter period shall be justified. | Production calendar; BAT monitoring record; downtime log |
| `dq_technology_geography` | Electricity and spinning operation | Declare country, voltage level, consumption-mix scenario, spinning technology, included equipment and meter/allocation method. | Meter metadata; equipment list; dataset metadata |
| `dq_unresolved_uuid` | Lubricant and captured fibre waste | Retain the specific atomic names and manifest review records until direct Tiangong reads confirm semantically exact public identities. | Manifest unresolved-identity entries and subsequent lookup evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Foreground data package | Confirm exactly 1 kg net accepted yarn, the reference product UUID, Mass property UUID, Units of mass UUID, kg unit, and all required qualifiers. | `unsd-cpc-3-2025` |
| `validate_category_composition` | Product identity | Reject the package if the product is sewing thread, a filament yarn, lacks synthetic staple fibre, or has a synthetic staple-fibre mass fraction of 0.85 or greater. | `unsd-cpc-3-2025` |
| `validate_atomic_inventory` | Process inventory | Reject combined or selector flows; each exchange shall have one specific name, one direction, one flow type, one amount record and one applicable collection protocol. |  |
| `validate_material_reconciliation` | Material mass balance | Recalculate the matched-period material reconciliation and require the dataset to disclose and explain every difference rather than silently balancing it. | `eu-textiles-bat-2022` |
| `validate_foreground_records` | Quantity evidence | Reject default or AI-estimated quantities; require raw foreground records, matched temporal coverage, units, normalization and retained quality evidence for all five rows. | `eu-textiles-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for blended synthetic staple-fibre yarn at the spinning-mill gate |
| downstream_use | Secondary dataset and background dataset for textile products using a composition- and technology-matched yarn input |
| allowed_use | Product and process modelling when product composition, yarn specification, technology, geography, time and gate match or are transparently adapted |
| excluded_use | Sewing thread; continuous-filament yarn; yarn with at least 85% synthetic staple fibre; dyed, sized, woven or knitted product without added downstream processes; unresolved publication blockers |
| required_metadata | PCR id; product and input UUIDs; polymer and co-fibre fractions; yarn count; twist; moisture basis; colour/treatment state; winding form; technology; geography; voltage and electricity scenario; period; allocation; upstream dataset links |
| required_quality_disclosure | Primary-data share; meter and scale coverage; composition evidence; temporal coverage; allocation method; material reconciliation difference; unresolved UUID status; deviations from the representative route |
| update_trigger | New product formulation or technology; changed electricity scenario; material process change; new exact Tiangong identity; evidence or regulatory update; material reconciliation or validation failure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 26440, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product-category boundary, exclusions and synthetic-fibre mass-share validation |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, EUR 31392 EN, JRC131874, 2023, DOI 10.2760/355887. https://publications.jrc.ec.europa.eu/repository/handle/JRC131874 | Yarn-manufacturing process decomposition, electricity, lubricant and captured-fibre inventory inclusion |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, 9 December 2022. http://data.europa.eu/eli/dec_impl/2022/2508/oj | Input-output inventory, process-level monitoring, synthetic/ester lubricant choice, energy and waste records |
