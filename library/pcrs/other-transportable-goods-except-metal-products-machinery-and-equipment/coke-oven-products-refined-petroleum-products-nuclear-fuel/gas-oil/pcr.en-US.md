---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gas-oil
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gas oil

## 1. Scope and Applicability

This PCR covers the production of gas oil / diesel oil as the CPC 3.0 category of petroleum middle distillates, including fossil gas oil and blends in which diesel oil remains the base constituent. It supports foreground data packages for gas oil used as diesel fuel, industrial or heating fuel, power-generation fuel, or another declared middle-distillate use. The data package shall state the crude-oil and other feedstock origin, refinery configuration, atmospheric and vacuum fraction contribution, conversion and hydrotreating route, sulphur content, density and reference temperature, whether biogenic components are included and on what basis, refinery allocation method, and terminal delivery state.

The category does not authorize one regional road-diesel grade, marine-gas-oil grade, supplier formulation, or neat biodiesel dataset to represent all gas oil. Neat biodiesel is outside this PCR. A blended product may use this PCR only when the fossil gas-oil base, biogenic component identity and share, intended market, applicable product specification, and component-specific upstream datasets are disclosed. The default gate is loaded product at the declared refinery or connected terminal; downstream distribution, storage outside that gate, and fuel combustion are excluded unless a study explicitly adds them as separate processes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gas-oil |
| classification_refs | CPC 3.0 `33360`, Gas oil |
| covered_products | Gas oil / diesel oil middle distillates; straight-run, cracked, hydrotreated, or blended gas oil; gas oil containing a declared biodiesel or other biogenic blend component |
| excluded_products | Crude petroleum; kerosene and jet fuel; residual fuel oil; marine fuel represented without a matching gas-oil grade declaration; neat biodiesel; a regional diesel grade extrapolated beyond its declared specification and market |
| representative_product | Generic petroleum-refinery gas oil / diesel oil production mix meeting a declared intended-market specification |
| production_route | Crude or other refinery feed receipt and preparation; atmospheric and/or vacuum distillation; applicable conversion and hydrotreating; blending and product finishing; storage and loading |
| market_state | Finished liquid fuel, at the declared refinery or connected terminal delivery gate, with batch or production-period quality and composition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Gas oil / diesel oil meeting the declared intended-market product specification and delivery state |
| How much | 1 kg net delivered product |
| How well | Measured delivered mass with product grade and intended use, origin and refinery route, sulphur content, density and reference temperature, biogenic component identity and share, and delivery gate declared |
| How long or cycle | One representative production campaign or reporting period with reconciled feed, production, stock-change, and delivery records |
| reference_flow_link | The reference flow is the loaded gas-oil product output from `storage_and_terminal_delivery` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | intended market and product grade; applicable specification and geography; fossil feedstock and crude-origin basis; refinery configuration; atmospheric and vacuum fraction contribution; conversion route; hydrotreating status; sulphur content and test basis; density and reference temperature; biogenic component identity and share on a declared mass-or-volume basis; additive content where material; refinery allocation method; delivery gate and loaded state; reporting period |

The selected TianGong flow is a public generic product identity classified exactly to CPC 3.0 `33360` and described as a refinery production mix. Its database name, “Diesel oil,” is treated here as the CPC gas-oil / diesel-oil synonym, not as permission to substitute a location-specific automotive diesel dataset. Missing required qualifiers make a foreground data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and product intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass and normalize all inventory results to 1 kg of gas oil loaded at the declared delivery gate. |
| `volume_to_mass` | volume-based feed, blend, stock, or delivery records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass only with the measured or specification-supported density for the same batch and a stated reference temperature; do not apply an undeclared generic diesel density. |
| `sulphur_measurement` | feed streams, treated streams, blend components, and finished gas oil | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | mg/kg or declared mass fraction | Record sampling point, analytical method, reporting basis, and measured sulphur content; a jurisdiction-specific limit is a qualifier, not a category-wide default. |
| `biogenic_share` | gas oil containing biodiesel or another biogenic component | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg or explicitly declared volume fraction | State component identity, renewable feedstock route, measured blend quantity, and whether the reported share is mass- or volume-based; keep fossil and biogenic upstream burdens separately traceable. |
| `energy_conversion` | optional energy-based reporting | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ/kg | Use a batch-, grade-, or supplier-specific net calorific value and state its source and measurement basis; retain mass as the PCR reference property. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_operations` | foreground refinery production | Include feedstock receipt and preparation, atmospheric and vacuum distillation as applicable, conversion and hydrotreating used for the represented streams, blending and finishing, storage, stock changes, and loading at the declared terminal gate. | `eu-refining-bat-2014-738` |
| `boundary_upstream_links` | purchased crude, secondary feedstocks, hydrogen, electricity, fuels, steam, water, additives, and blend components | Record each purchased input as an explicit product flow and link it to an upstream dataset matching its origin, technology, and delivery state; do not replace upstream supply with unreferenced elementary flows. | `eu-refining-bat-2014-738` |
| `boundary_direct_releases` | controlled refinery units and storage | Include measured or reconciled direct emissions to air and water, process off-gases, sour water, wastewater, spent catalysts, sludges, and other wastes attributable to the represented operations. | `eu-refining-bat-2014-738` |
| `boundary_delivery_gate` | reference product | End the default foreground boundary when net gas-oil mass is loaded at the declared refinery or connected terminal; model downstream distribution and combustion separately when required by the study. | `eu-refining-bat-2014-738` |
| `boundary_category_integrity` | dataset applicability | Do not use a single regional road-diesel, marine-gas-oil, supplier, or neat-biodiesel dataset as the complete category; disclose the intended market and blend composition and select only matching datasets. | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | refinery feedstocks received at the represented refinery boundary |
| starting_condition_role | upstream-linked product inputs with origin, assay or grade, and delivery state declared |
| product_classification_scope | CPC 3.0 `33360`, gas oil / diesel oil middle distillates and declared diesel-oil-based blends |
| recursive_input_rule | a purchased or transferred gas-oil input in the same category remains an explicit product input with its own upstream dataset and is not recursively reconstructed inside this foreground package |
| upstream_dataset_requirement | match crude or secondary feed origin, production route, geography, quality, and delivery state; separately match hydrogen, utilities, additives, and biogenic components |
| disclosure | state crude/feedstock source, refinery configuration, atmospheric and vacuum stream contribution, conversion and hydrotreating route, sulphur, density, blend composition, allocation, stock change, and delivery gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt_and_preparation` | Feedstock receipt and preparation | required | Always; include desalting or equivalent preparation when operated | foreground | prepared refinery feed |
| `primary_distillation` | Atmospheric and vacuum distillation | required | Atmospheric distillation is required; include vacuum distillation when a vacuum fraction contributes to represented gas oil or its conversion feed | foreground | gas-oil-range streams leaving distillation |
| `conversion_and_hydrotreating` | Conversion and hydrotreating | conditional | Include every cracking, hydrocracking, hydrotreating, sweetening, or other treatment unit whose stream contributes to the final gas oil | foreground | treated gas-oil blend components |
| `blending_and_product_finishing` | Blending and product finishing | required | Always; include all fossil and biogenic blend components and additives | foreground | finished gas oil sent to storage |
| `storage_and_terminal_delivery` | Storage and terminal delivery | required | Always to the declared loaded-product gate | foreground | net loaded reference product |

### Process: Feedstock receipt and preparation (`feedstock_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Crude oil and other refinery feedstocks received (`received_refinery_feedstocks`)

Record every crude slate component, condensate, secondary feedstock, and imported intermediate crossing the refinery boundary. Preserve supplier or origin, assay or grade, fossil or biogenic nature, delivered mass, density basis, and upstream provider.

- Selected flow: Select origin- and grade-specific crude petroleum or refinery-feed product flows
- Flow property / unit: Mass / kg
- Amount rule: measured received mass corrected for transfers, water, sediment, and stock change on a consistent basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared refinery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources:

###### Preparation utilities and materials (`feedstock_preparation_inputs`)

Record electricity, steam, fuels, water, chemicals, and other material inputs used for receiving, heating, desalting, and preparation.

- Selected flow: Select utility- and material-specific product flows
- Flow property / unit: Native flow property and unit, converted to the declared process basis
- Amount rule: metered or purchase-reconciled quantity attributable to feedstock preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared refinery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_unit_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared refinery feed (`prepared_refinery_feed`)

Record the mass passed to primary distillation and identify the preparation steps performed.

- Selected flow: Prepared refinery feed, internal refinery transfer
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to feed receipts, recovered hydrocarbons, water removal, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources:

##### Waste flows

###### Desalter sludge and preparation waste (`preparation_waste`)

Record sludge, solids, and other preparation wastes by destination and treatment route.

- Selected flow: Select waste-specific flows
- Flow property / unit: Mass / kg
- Amount rule: measured or shipment-reconciled waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared refinery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_water_records`
- Sources:

##### Elementary flows

### Process: Atmospheric and vacuum distillation (`primary_distillation`)

#### Inputs

##### Product flows

###### Prepared refinery feed to distillation (`distillation_feed`)

Record atmospheric and vacuum unit feed separately so the origin of each gas-oil-range fraction remains traceable.

- Selected flow: Prepared refinery feed, internal refinery transfer
- Flow property / unit: Mass / kg
- Amount rule: measured unit feed by atmospheric or vacuum train
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg gas-oil-range stream leaving distillation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_streams`
- Sources: `eu-refining-bat-2014-738`

###### Distillation utilities (`distillation_utilities`)

Record furnace fuel, electricity, steam, cooling water, and other utilities assigned to atmospheric and vacuum distillation.

- Selected flow: Select utility-specific product flows
- Flow property / unit: Native flow property and unit
- Amount rule: metered unit consumption or documented unit-level engineering balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg gas-oil-range stream leaving distillation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_unit_utilities`
- Sources: `eu-refining-bat-2014-738`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Atmospheric and vacuum gas-oil-range streams (`distilled_gas_oil_streams`)

Record each atmospheric or vacuum fraction separately with its measured mass, distillation identity, destination, sulphur content, and density basis.

- Selected flow: Gas-oil-range intermediate, internal refinery transfer
- Flow property / unit: Mass / kg
- Amount rule: measured stream mass reconciled to unit feed and all distillation outputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_streams`
- Sources: `unsd-cpc-3-33360`, `eu-refining-bat-2014-738`

###### Other distillation products (`other_distillation_products`)

Record gases, naphtha, kerosene, residues, and other co-products required to close the unit mass balance and support allocation.

- Selected flow: Select co-product-specific product flows
- Flow property / unit: Mass / kg
- Amount rule: measured co-product mass by stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refinery_yield_balance`
- Sources:

##### Waste flows

###### Sour water and distillation wastes (`distillation_waste_streams`)

Record sour water and other waste streams routed to treatment or disposal.

- Selected flow: Select waste-specific flows
- Flow property / unit: Mass / kg
- Amount rule: measured transfer or treatment-reconciled quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg gas-oil-range stream leaving distillation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_water_records`
- Sources: `eu-refining-bat-2014-738`

##### Elementary flows

###### Direct distillation emissions to air (`distillation_air_emissions`)

Record combustion and process emissions released to air after treatment, including the applicable monitored pollutants and reporting basis.

- Selected flow: Select pollutant-specific elementary flows to air
- Flow property / unit: Mass / kg
- Amount rule: monitored or mass-balance-derived release attributable to distillation units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg gas-oil-range stream leaving distillation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-refining-bat-2014-738`

### Process: Conversion and hydrotreating (`conversion_and_hydrotreating`)

#### Inputs

##### Product flows

###### Gas-oil streams sent to conversion or treatment (`treatment_feed_streams`)

Record each straight-run, cracked, vacuum, or imported gas-oil stream entering conversion, hydrotreating, sweetening, or other product treatment.

- Selected flow: Gas-oil-range intermediate, internal or purchased product flow
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by treatment unit and stream origin
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated gas-oil component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_operation`
- Sources: `eu-refining-bat-2014-738`

###### Hydrogen and treatment inputs (`hydrogen_and_treatment_inputs`)

Record purchased or refinery-produced hydrogen, catalysts, chemicals, electricity, fuels, steam, and water used by each included unit.

- Selected flow: Select hydrogen, catalyst, chemical, and utility-specific product flows
- Flow property / unit: Native flow property and unit
- Amount rule: metered, issued, or inventory-reconciled quantity by treatment unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated gas-oil component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_operation`
- Sources: `eu-refining-bat-2014-738`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated gas-oil blend components (`treated_gas_oil_components`)

Record treated output by unit with mass, sulphur content, density basis, and routing to blending.

- Selected flow: Treated gas-oil component, internal refinery transfer
- Flow property / unit: Mass / kg
- Amount rule: measured treated-product mass by contributing stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_operation`
- Sources: `eu-refining-bat-2014-738`

###### Recovered sulphur and other treatment co-products (`treatment_coproducts`)

Record recovered sulphur and other saleable outputs only when their product status and destination are documented; otherwise classify them as waste.

- Selected flow: Select co-product-specific product flows
- Flow property / unit: Mass / kg
- Amount rule: measured co-product mass leaving the treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_operation`
- Sources:

##### Waste flows

###### Spent catalysts, spent caustic, and treatment wastes (`treatment_wastes`)

Record each waste with mass, hazardous status where applicable, and treatment destination.

- Selected flow: Select waste-specific flows
- Flow property / unit: Mass / kg
- Amount rule: measured issue, replacement, or shipment mass allocated to the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated gas-oil component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_water_records`
- Sources: `eu-refining-bat-2014-738`

##### Elementary flows

###### Direct treatment emissions and discharged water emissions (`treatment_direct_releases`)

Record pollutant-specific releases after gas and water treatment, without double counting streams transferred internally to treatment.

- Selected flow: Select pollutant-specific elementary flows to air or water
- Flow property / unit: Mass / kg
- Amount rule: monitored, sampled, or reconciled release attributable to included treatment units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated gas-oil component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-refining-bat-2014-738`

### Process: Blending and product finishing (`blending_and_product_finishing`)

#### Inputs

##### Product flows

###### Fossil gas-oil blend components (`fossil_blend_components`)

Record every fossil middle-distillate component by origin, process route, mass, density basis, and sulphur content.

- Selected flow: Select component-specific gas-oil product or internal flows
- Flow property / unit: Mass / kg
- Amount rule: measured batch or continuous-blend component mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished gas oil sent to storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_and_quality`
- Sources:

###### Biogenic components and additives (`biogenic_components_and_additives`)

Record biodiesel or other biogenic components and additives separately, including identity, upstream route, mass or volume, density basis, and blend-share basis. Enter zero only when records demonstrate that no such component was used.

- Selected flow: Select component-specific biodiesel, other biogenic component, and additive product flows
- Flow property / unit: Mass / kg, with any source volume retained and converted using component-specific density
- Amount rule: measured component addition by batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished gas oil sent to storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_and_quality`
- Sources: `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished gas oil before terminal stock adjustment (`finished_gas_oil`)

Record finished product mass and quality by batch or production period, including intended market, grade, specification, sulphur content, density and temperature, biogenic share, and additive disclosure.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: measured blend output passing the declared quality release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_and_quality`
- Sources: `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023`

##### Waste flows

###### Off-specification product and blending waste (`blending_waste`)

Record off-specification material as an internal rework stream, saleable downgraded product, or waste according to its actual destination; do not count the same mass twice.

- Selected flow: Select destination-specific product or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured off-specification quantity by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished gas oil sent to storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_and_quality`
- Sources:

##### Elementary flows

### Process: Storage and terminal delivery (`storage_and_terminal_delivery`)

#### Inputs

##### Product flows

###### Finished gas oil entering storage (`gas_oil_to_storage`)

Record product transferred into the represented tank system and retain batch identity and quality status.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net loaded gas oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_delivery`
- Sources:

###### Storage and loading utilities (`storage_loading_utilities`)

Record electricity, fuels, and other utilities used for tank operation, recirculation, pumping, and loading.

- Selected flow: Select utility-specific product flows
- Flow property / unit: Native flow property and unit
- Amount rule: metered or equipment-record-based quantity attributable to represented storage and loading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net loaded gas oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_unit_utilities`
- Sources: `eu-refining-bat-2014-738`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net gas oil loaded at the declared terminal gate (`loaded_gas_oil_reference_product`)

This is the reference product. Reconcile loaded mass to tank stock change, transfers, returns, off-specification disposition, and measured losses for the same reporting period.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: net custody-transfer mass loaded at the declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_delivery`
- Sources: `unsd-cpc-3-33360`

##### Waste flows

###### Tank bottoms and terminal wastes (`terminal_wastes`)

Record tank bottoms, contaminated water, and other terminal wastes by destination.

- Selected flow: Select waste-specific flows
- Flow property / unit: Mass / kg
- Amount rule: measured removal or shipment quantity allocated to the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net loaded gas oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_water_records`
- Sources:

##### Elementary flows

###### Storage and loading releases to air (`terminal_air_releases`)

Record measured or engineering-reconciled pollutant-specific releases from tanks and loading after any recovery or control.

- Selected flow: Select pollutant-specific elementary flows to air
- Flow property / unit: Mass / kg
- Amount rule: monitored or documented loss-model result using site-specific throughput, tank, control, and product data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net loaded gas oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-refining-bat-2014-738`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | unit operations and independently metered streams | First avoid allocation by subdividing the refinery into feed preparation, distillation, conversion/treatment, blending, and terminal operations and directly assigning measured inputs and releases where causal records exist. | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | inseparable multifunctional operations | When subdivision or system expansion is not practicable, use a documented, quantifiable physical relationship relevant to the function delivered; explain why the relationship represents the burden driver. | `eu-pef-2021-2279` |
| `allocation_refinery_shared_burdens` | refinery-wide utilities, shared treatment, and upstream crude burdens | State the refinery model, co-product set, allocation basis, time period, prices or physical data where applicable, treatment of negative or zero-value outputs, and a sensitivity case for materially influential choices; do not silently apply mass, energy, or economic allocation. | `jrc-refinery-allocation-2017`, `eu-pef-2021-2279` |
| `allocation_product_or_waste_status` | recovered sulphur, off-specification material, sludges, spent catalysts, and other secondary outputs | Classify each output from its documented legal and market destination; apply the chosen allocation or waste-treatment rule consistently and prevent double counting of rework or recovered products. | `eu-pef-2021-2279` |
| `allocation_biogenic_components` | blended gas oil containing biogenic material | Attach component-specific upstream burdens to the measured fossil and biogenic component quantities before allocating shared blending and terminal burdens; disclose the mass- or volume-share conversion. | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_receipt` | `feedstock_receipt_and_preparation` | received and prepared refinery feed | custody-transfer, assay, and stock record | supplier; origin; crude or feed grade; fossil or biogenic status; mass; volume; density; temperature; water and sediment; receipt date; tank; stock change | calibrated custody meter, weighbridge, laboratory assay, and tank reconciliation | kg; m3; kg/m3 | each receipt and daily tank balance | complete reporting period plus opening and closing stock | represented refinery feed system | reconcile receipts, transfers, removals, and stock change; convert volume only at matched density and temperature | calibration; assay report; supplier document; signed stock reconciliation |
| `cp_distillation_streams` | `primary_distillation` | atmospheric and vacuum feed and product streams | unit operating and laboratory record | unit; stream id; atmospheric or vacuum origin; mass flow; density; temperature; distillation characterization; sulphur; destination; operating hours | calibrated flow meters, laboratory sampling, and data historian | kg; kg/h; kg/m3; mg/kg | continuous with batch or shift quality sample | complete reporting period | every atmospheric and vacuum train contributing to gas oil | time-integrate streams and reconcile all unit inputs, products, internal recycle, water, and losses | meter calibration; sample chain; historian completeness; unit balance sign-off |
| `cp_treatment_operation` | `conversion_and_hydrotreating` | treatment feed, hydrogen, catalysts, utilities, treated product, and co-products | unit operation, issue, and quality record | unit; technology; feed streams; output streams; mass; hydrogen; catalyst; energy; water; inlet and outlet sulphur; density; co-product destination; operating hours | meters, laboratory results, catalyst inventory, and unit historian | kg; kg/h; kWh; MJ; m3; mg/kg | continuous or per batch with period inventory reconciliation | complete reporting period | every contributing conversion or treatment unit | integrate by unit, reconcile feed and outputs, and preserve stream routing to blending | meter calibration; lab QA; catalyst issue records; signed unit balance |
| `cp_blending_and_quality` | `blending_and_product_finishing` | fossil components, biogenic components, additives, finished gas oil, and off-specification material | blend recipe, meter, tank, and certificate-of-analysis record | batch; component identity and origin; mass; volume; density and temperature; fossil or biogenic status; blend-share basis; additives; sulphur; grade; intended market; applicable specification; disposition | calibrated component meters, tank reconciliation, and accredited or controlled laboratory analysis | kg; m3; kg/m3; mg/kg; mass or volume percent | each blend batch or continuous-blend campaign | all released and off-specification production in reporting period | all blending systems contributing to reference product | reconcile component inputs to finished, rework, downgraded, waste, and stock outputs; calculate shares on declared basis | meter calibration; recipe authorization; certificate of analysis; batch release |
| `cp_storage_and_delivery` | `storage_and_terminal_delivery` | storage input, stock change, returns, losses, and loaded reference product | tank gauge and custody-transfer record | tank; batch; opening and closing stock; transfers; returns; loaded mass and volume; density; temperature; loading point; delivery mode; time; grade | calibrated tank gauging and custody-transfer meter | kg; m3; kg/m3 | each transfer and loading; daily stock | complete reporting period plus opening and closing stock | represented refinery or connected terminal | loaded output equals inputs plus net stock withdrawal minus returns, rework, wastes, and losses on a consistent mass basis | meter calibration; tank table; delivery ticket; signed stock balance |
| `cp_unit_utilities` | all included processes | electricity, fuel, steam, water, and material utilities | meter, invoice, and engineering balance | unit; utility identity; quantity; meter; allocation tag; operating hours; provider; delivery state | dedicated meter preferred; documented engineering balance or invoice reconciliation otherwise | native flow unit | continuous or invoice period | complete reporting period | all included units and shared systems | directly assign dedicated use; allocate only documented shared use under section 7 | meter calibration; invoice; balance owner; allocation worksheet |
| `cp_direct_emissions` | all included processes | direct releases to air and water | continuous monitor, sample, flare, vent, and loss-model record | source; pollutant; concentration; flow; duration; control status; detection limit; calculation method; release compartment | continuous monitoring, representative sampling, or documented site-specific engineering calculation | kg; mg/Nm3; mg/L and supporting activity units | continuous or permit/sample frequency; event-specific for flares and incidents | complete reporting period including abnormal events | all included units, tanks, loading points, and final discharges | integrate pollutant mass after controls and prevent double counting internal transfers to treatment | monitor calibration; accredited analysis; event log; calculation review |
| `cp_waste_and_water_records` | all included processes | wastewater, sludge, spent catalyst, tank bottoms, and other waste | transfer, treatment, and shipment record | source unit; material identity; mass or volume; composition; hazardous status; destination; recovery or disposal route; date | meter, scale, manifest, and treatment-plant reconciliation | kg; m3 | each transfer or shipment | complete reporting period | all included units and on-site treatment interfaces | sum by source, material, and destination; reconcile internal transfer against final treatment output | scale calibration; waste manifest; treatment acceptance; mass balance |
| `cp_refinery_yield_balance` | all included processes | refinery products, co-products, internal transfers, and stock | production accounting record | stream; source unit; destination; mass; density; stock change; saleable or waste status; price or physical allocation variable when used | reconciled refinery production accounting | kg; declared allocation variable | daily or accounting period | complete reporting period | represented refinery and product slate | close refinery-wide mass and yield balance before normalization and allocation | signed production balance; allocation dataset; discrepancy explanation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all inventory rows | normalized amount = reporting-period amount divided by net kg of loaded reference gas oil | relevant collection protocol; `cp_storage_and_delivery` | amount per 1 kg loaded gas oil |  |
| `convert_volume_with_density` | volume-based feed, component, stock, and delivery records | mass = observed volume multiplied by density corrected or measured at the same declared reference temperature | `cp_feedstock_receipt`; `cp_blending_and_quality`; `cp_storage_and_delivery` | kg on a consistent temperature basis |  |
| `reconcile_process_mass` | each included unit and the refinery-wide balance | input mass plus opening stock = product, co-product, waste, direct mass release, and closing stock; explain residuals above the facility QA criterion | all process collection protocols; `cp_refinery_yield_balance` | signed unit and refinery mass-balance result |  |
| `calculate_biogenic_share` | finished blended gas oil | biogenic share = measured biogenic component quantity divided by total finished blend quantity on one declared mass or volume basis; apply component-specific density before converting bases | `cp_blending_and_quality` | biogenic component share and component-resolved upstream inventory | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |
| `calculate_sulphur_balance` | distillation, treatment, blending, and final product | reconcile sulphur entering in feed and components with sulphur in products, recovered sulphur, wastes, water, and air releases using measured contents and masses | `cp_distillation_streams`; `cp_treatment_operation`; `cp_blending_and_quality`; `cp_direct_emissions`; `cp_waste_and_water_records` | sulphur balance and unexplained residual | `eu-refining-bat-2014-738` |
| `apply_allocation` | multifunctional refinery operations | allocated burden = unassigned shared burden multiplied by the documented allocation factor after direct assignment; factors across the declared co-product set shall reconcile to one | `cp_refinery_yield_balance`; `cp_unit_utilities`; `cp_direct_emissions` | allocated inventory and sensitivity results per product | `eu-pef-2021-2279`, `jrc-refinery-allocation-2017` |
| `calculate_net_loaded_output` | storage and terminal delivery | net loaded mass = custody-transfer loadings minus documented returns, with tank stock change, rework, wastes, and losses reconciled for the same period | `cp_storage_and_delivery` | kg reference product at declared gate |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and blend components | Product grade, intended market, specification, origin, route, sulphur, density and temperature, biogenic share basis, and delivery gate shall be complete and internally consistent. | batch release, certificate of analysis, blend recipe, and delivery ticket |
| `dq_refinery_configuration` | process map | List every contributing unit, technology, stream connection, operating period, and bypass; justify every conditional exclusion. | current process-flow diagram, unit roster, historian tags, and signed applicability review |
| `dq_measurement` | mass, volume, density, quality, utility, and emission records | Use calibrated instruments or controlled analytical methods; record detection limits, missing periods, substitutions, and corrections. | calibration certificates, laboratory QA, data-completeness report, and correction log |
| `dq_temporal_reconciliation` | production period | Feed, production, utility, emissions, waste, stock, and delivery data shall cover the same period and include opening and closing stock. | period-close reconciliation and timestamp coverage report |
| `dq_allocation` | multi-output refinery burdens | Preserve direct assignment, co-product set, allocation factors and variables, data period, and sensitivity results in an auditable worksheet. | allocation workbook, production balance, price or physical-variable source, and reviewer sign-off |
| `dq_upstream_matching` | purchased product flows | Each provider dataset shall match the declared origin, technology, quality, and delivery state or disclose the mismatch and sensitivity. | provider metadata and applicability assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the selected flow UUID, Mass property UUID, Units of mass UUID, 1 kg reference amount, and all required qualifiers are present. | `unsd-cpc-3-33360` |
| `validate_category_scope` | dataset applicability | Reject use as a category-wide dataset when the package represents only one regional diesel grade, marine grade, supplier formulation, or neat biodiesel without an explicit narrower scope. | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |
| `validate_route_and_boundary` | process coverage | Confirm feed origin, refinery configuration, atmospheric and vacuum contribution, conversion and hydrotreating status, blending, storage, and loaded gate; every omitted conditional unit shall have a documented non-applicability reason. | `eu-refining-bat-2014-738` |
| `validate_quality_measurements` | finished product and contributing streams | Confirm sulphur and density values have sample or record identifiers, methods, units, reference temperature where relevant, and the same product-period basis as the inventory. | `eu-fuel-quality-98-70-consolidated-2023` |
| `validate_biogenic_content` | blended gas oil | Confirm component identity, renewable feedstock route, measured quantity, mass-or-volume basis, density conversion where used, and separate upstream provider; prohibit an undeclared zero assumption. | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |
| `validate_mass_and_sulphur_balance` | unit and refinery balances | Require reconciled mass and sulphur balances, documented residuals, and consistent stock changes before normalization. | `eu-refining-bat-2014-738` |
| `validate_allocation` | multi-output burdens | Confirm direct assignment precedes allocation, the co-product set and factors reconcile, the chosen relationship is justified, and materially influential allocation choices have a sensitivity result. | `eu-pef-2021-2279`, `jrc-refinery-allocation-2017` |
| `validate_releases_and_wastes` | foreground inventory completeness | Confirm direct air and water releases, internal treatment transfers, final discharges, spent catalysts, sludges, and terminal losses are covered without double counting. | `eu-refining-bat-2014-738` |
| `validate_upstream_providers` | purchased inputs | Confirm crude, secondary feed, hydrogen, utilities, additives, and biogenic components have matching provider datasets or an explicit documented data gap. | `eu-refining-bat-2014-738` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process or aggregated refinery-gate production dataset with transparent process and allocation detail |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | gas-oil production and supply studies whose feedstock origin, refinery route, product grade, intended market, blend composition, geography, period, allocation, and terminal gate match the dataset |
| excluded_use | unqualified global gas-oil proxy; substitution for neat biodiesel; automatic substitution for a regional road-diesel or marine-fuel grade; combustion or downstream distribution not modelled as separate stages |
| required_metadata | reference-flow UUIDs; CPC scope; refinery and terminal geography; reporting period; feedstock origin; refinery configuration; atmospheric and vacuum contribution; treatment route; sulphur; density and temperature; biogenic share basis; specification; intended market; allocation; delivery gate |
| required_quality_disclosure | measurement coverage and calibration; mass and sulphur reconciliation; stock treatment; emission and waste coverage; provider matching; allocation factors and sensitivity; data gaps and substitutions |
| update_trigger | material change in crude slate, refinery configuration, contributing stream routes, hydrotreating, product specification, sulphur or blend formulation, allocation method, terminal gate, provider datasets, or reporting-period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-33360` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 33360, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-09) | category identity; middle-distillate scope; gas oil / diesel oil terminology; treatment of diesel-oil and biodiesel mixtures |
| `eu-refining-bat-2014-738` | `standard` | Commission Implementing Decision 2014/738/EU establishing BAT conclusions for refining mineral oil and gas, http://data.europa.eu/eli/dec_impl/2014/738/2014-10-28 (retrieved 2026-08-09) | refinery process decomposition; atmospheric and vacuum distillation; hydrogen-consuming processes; product treatment; storage, blending, loading; emissions and waste coverage |
| `eu-fuel-quality-98-70-consolidated-2023` | `standard` | Directive 98/70/EC consolidated 20 November 2023, https://eur-lex.europa.eu/eli/dir/1998/70/2023-11-20/eng/pdf (retrieved 2026-08-09) | intended-market and specification qualifiers; sulphur and FAME disclosure context; prohibition on treating one jurisdictional specification as universal |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Product Environmental Footprint method, http://data.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-09) | allocation hierarchy; subdivision, system expansion, physical relationship, and fallback relationship requirements |
| `jrc-refinery-allocation-2017` | `literature` | Moretti et al., Analysis of standard and innovative methods for allocating upstream and refinery GHG emissions to oil products, JRC105041, DOI 10.1016/j.apenergy.2017.08.183, https://publications.jrc.ec.europa.eu/repository/handle/JRC105041 (retrieved 2026-08-09) | refinery-product allocation alternatives, transparency, and sensitivity requirements |
