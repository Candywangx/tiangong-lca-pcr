---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-oils-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fuel oils n.e.c.

## 1. Scope and Applicability

This PCR governs foreground data packages for marketable fuel oils that fall in CPC 3.0 class 33370 and are not assigned to a more specific CPC fuel category. It covers refinery residual and heavy fuel oils, heavy gas oils sold as fuel, and qualifying blends of refinery residues, distillate cutter stocks, or other declared fuel components. It applies at the refinery or blending-facility gate before downstream transport, distribution, storage at the user, or combustion.

The PCR is route-neutral. A dataset must declare whether the product is obtained from primary separation, conversion residues, treating, blending of purchased components, or a combination. Marine, industrial, power-generation, and other market grades remain in scope only when the product identity satisfies CPC 33370; market-specific standards supplement, but do not replace, this category boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-oils-n-e-c |
| classification_refs | CPC 3.0: 33370, Fuel oils n.e.c. |
| covered_products | Marketable residual fuel oil, heavy fuel oil, heavy gas oil sold as fuel, and fuel-oil blends not elsewhere classified whose declared composition and market identity remain within CPC 33370. |
| excluded_products | Crude petroleum; gasoline; aviation and turbine fuels; kerosene; gas oil or diesel assigned to CPC 33360; lubricants; petroleum gases; bitumen used as a material; pure biofuels or other products outside the declared CPC petroleum-product boundary; refinery intermediates not yet saleable as fuel oil. |
| representative_product | A marketable residual or heavy fuel-oil blend released by quality control at the refinery or blending-facility gate. |
| production_route | Declared combination of refinery separation, residue conversion or treating, component receipt, blending, quality control, storage, and transfer. |
| market_state | Bulk liquid fuel at the producing or blending facility gate, with grade, composition basis, energy content, and applicable quality specification declared. |

Prior CPC explanatory material is used only to interpret the continuing fuel-oil category, not to replace the repository's CPC 3.0 identity. Narrow grades and application-specific specifications must be represented through qualifiers rather than by silently narrowing the PCR.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net calorific energy contained in marketable CPC 33370 fuel oil released at the refinery or blending-facility gate. |
| How much | 1 MJ of net calorific value. |
| How well | The batch or reporting-period output meets its declared fuel-oil grade or contractual specification and reports sulfur content, density, viscosity with test temperature, water and sediment, net calorific value method, and route. |
| How long or cycle | One production batch or one internally consistent reporting period, normally not longer than 12 months. |
| reference_flow_link | The functional unit is realized by the Tiangong product flow `6908344a-d905-4a65-a5e6-9511198fde88`, constrained by the CPC 33370 classification and all Required qualifiers below. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | fuels `6908344a-d905-4a65-a5e6-9511198fde88` |
| Reference flow property | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` |
| Reference unit | MJ |
| Required qualifiers | CPC 33370 product identity; commercial grade or specification; residual, distillate, or blend type; component and feedstock basis; production and treating route; sulfur content; density and reference temperature; kinematic viscosity and test temperature; water and sediment; net calorific value and measurement or calculation method; biogenic, synthetic, recycled, or waste-derived share if present; production geography; facility-gate condition; batch or reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The generic Tiangong flow name does not authorize use for another fuel category.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_energy_ncv` | reference product and all normalized inventory | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Normalize all inventory to 1 MJ of saleable output using the net calorific value for the same product batch or reporting-period weighted average. |
| `product_mass_energy_link` | saleable product and fuel components | Net calorific value and mass | MJ and kg | Record product mass and net calorific value separately; calculate output energy as saleable mass multiplied by batch-matched net calorific value. Do not substitute gross calorific value without a documented conversion. |
| `volume_mass_conversion` | volume-metered liquid inputs and outputs | Volume, density, and mass | reported volume unit, kg/m3, and kg | Convert volume to mass only with density measured or contractually reported for the same material and reference temperature; retain the raw volume, density, temperature, and conversion record. |
| `quality_test_conditions` | viscosity, density, water, sediment, sulfur, and other grade properties | Property-specific test result | declared test unit | Report the test method, sample or batch identity, test temperature where applicable, detection limit for censored results, and whether the value is measured or supplier-reported. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identify every starting feed or purchased component as crude or unfinished oil, refinery intermediate, residual stream, distillate cutter stock, additive, or market fuel component; state whether it is produced on site or received across the foreground boundary. |
| starting_condition_role | The starting condition determines which separation, conversion, treating, and upstream supplier processes are foreground and which are linked upstream product systems. |
| product_classification_scope | CPC 3.0:33370 only; another fuel category, unfinished intermediate, or non-fuel petroleum product must not be relabelled to use this PCR. |
| recursive_input_rule | A purchased input that itself qualifies as CPC 33370 is recorded as a product input with its own upstream dataset and declared grade; its production is not recreated inside the receiving blending process. |
| upstream_dataset_requirement | Link crude oil, refinery intermediates, hydrogen, electricity, heat, water, chemicals, additives, and transport to representative upstream datasets, preserving supplier-specific data when available. |
| disclosure | Declare facility and geography, reporting period, product grade, feed and component basis, route units used, allocation approach, storage and transfer boundary, and any excluded refinery infrastructure or shared operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_completeness` | foreground route | Include every on-site operation needed to convert the declared starting condition into released fuel oil: applicable separation, conversion, treating, blending, quality control, storage, transfer, utilities, direct emissions, wastewater, and wastes. | `us-epa-ap42-petroleum-refining` |
| `boundary_purchased_components` | received refinery streams and fuel components | Treat received components as product inputs with upstream datasets; do not claim cradle-to-gate coverage when their production is omitted. | `unsd-cpc-33370` |
| `boundary_recursive_fuel_oil` | CPC 33370 input used in blending | Stop recursion at the received product input, retain its upstream dataset, and disclose the input and output grades so blending does not duplicate upstream production. | `mass-balance-identity` |
| `boundary_downstream_exclusion` | downstream life cycle | Exclude transport beyond the facility gate, distributor or user storage, combustion, ash management, and end-use equipment unless the study explicitly extends the boundary and reports those stages separately. | `unsd-cpc-33370` |
| `boundary_market_specification` | marine and other regulated grades | Apply market-specific quality and sulfur requirements only to the relevant declared grade; do not use a marine or heating-fuel specification to narrow the entire CPC category. | `iso-8217-2024`; `imo-sulphur-2020`; `astm-d396-21` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `primary_refining` | Primary separation and residue production | conditional | Include when crude oil or unfinished feed is processed within the foreground facility. | foreground production | mass and net calorific energy of separated refinery streams |
| `conversion_and_treating` | Residue conversion and treating | conditional | Include each visbreaking, cracking, coking, hydrotreating, desulfurization, sweetening, or equivalent unit that supplies or conditions the product components. | foreground production and conditioning | mass of treated blend component |
| `blending_and_quality_control` | Component blending and product release | required | Always include the operations that formulate and release the saleable CPC 33370 product. | foreground production | 1 MJ net calorific value of released fuel oil |
| `storage_and_transfer` | Product storage and transfer to facility gate | required | Always include storage, circulation, pumping, inventory change, and loading up to the declared facility gate. | foreground storage and delivery to gate | 1 MJ net calorific value transferred at gate |
| `onsite_utilities_and_treatment` | On-site utilities and residual treatment | conditional | Include attributable boilers, furnaces, steam, electricity generation, hydrogen production, sulfur recovery, flaring, wastewater treatment, or waste treatment when inside the foreground boundary. | foreground support and treatment | service delivered to foreground processes |

### Process: Primary separation and residue production (`primary_refining`)

#### Inputs

##### Product flows

###### Crude oil or unfinished refinery feed (`crude_or_unfinished_feed`)

Record each feed crossing into the foreground separation system by source, grade, mass, density, and energy-content record where relevant.

- Selected flow: Feed-specific Tiangong product flow selected for the declared crude oil or unfinished refinery stream
- Flow property / unit: Mass / kg
- Amount rule: measured receipt plus opening inventory minus closing inventory for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 MJ net calorific value of released fuel oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_refining_records`
- Sources: `us-epa-ap42-petroleum-refining`

###### Primary-refining utilities (`primary_refining_utilities`)

Record metered electricity, steam, process fuel, and water attributable to separation and residue production; do not include a shared utility twice.

- Selected flow: Utility-specific Tiangong product flow selected for each metered utility
- Flow property / unit: utility-specific property / metered unit
- Amount rule: measured or invoice-reconciled utility use allocated to the included unit operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per process output, subsequently normalized to 1 MJ released fuel oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_refining_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Residual and heavy blend components (`residual_heavy_components`)

Record each separated residue or heavy gas-oil component by batch or tank transfer, including disposition to the reference product, another product, or inventory.

- Selected flow: Component-specific Tiangong product flow selected from the declared refinery stream identity
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to feed, co-products, inventory change, wastes, and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per primary-refining process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_refining_records`
- Sources: `mass-balance-identity`; `unsd-cpc-33370`

##### Waste flows

###### Primary-refining wastewater and residues (`primary_refining_wastes`)

Record oily water, sludges, tank or desalter residues, and other wastes leaving the process by named waste stream and destination.

- Selected flow: Waste-specific Tiangong waste flow selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: measured transfer, treatment log, or documented mass-balance calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per process output, subsequently normalized to 1 MJ released fuel oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_refining_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Elementary flows

### Process: Residue conversion and treating (`conversion_and_treating`)

#### Inputs

##### Product flows

###### Conversion or treating feed (`conversion_feed`)

Record each residue, heavy fraction, or intermediate entering an included conversion or treating unit, preserving its source process and transfer mass.

- Selected flow: Feed-specific Tiangong product flow selected for the declared refinery intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured unit feed reconciled to transfer and tank records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treated blend-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `us-epa-ap42-petroleum-refining`

###### Hydrogen, chemicals, catalysts, and utilities (`conversion_auxiliaries`)

Record hydrogen, treating chemicals, catalyst make-up, electricity, steam, and process fuel separately for every included unit.

- Selected flow: Substance- or utility-specific Tiangong product flow selected during dataset construction
- Flow property / unit: material- or energy-specific property / recorded unit
- Amount rule: measured consumption, purchasing reconciliation, or catalyst make-up record attributable to the unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treated blend-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated fuel-oil blend component (`treated_blend_component`)

Record the treated or converted component, its measured mass, sulfur and relevant quality changes, and the quantity transferred to blending.

- Selected flow: Component-specific Tiangong product flow selected for the declared treated refinery stream
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled by unit mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conversion or treating process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `mass-balance-identity`; `us-epa-ap42-petroleum-refining`

###### Recovered sulfur and other co-products (`conversion_coproducts`)

Record saleable sulfur, gases, distillates, coke, or other co-products separately; retain measured quantities and the allocation decision.

- Selected flow: Co-product-specific Tiangong product flow selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: measured co-product output and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treated blend-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Waste flows

###### Spent catalysts, sludges, and treatment wastes (`conversion_wastes`)

Record spent catalysts, sludges, spent caustic, and other named treatment wastes with treatment or recovery destination.

- Selected flow: Waste-specific Tiangong waste flow selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch or treatment record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treated blend-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Elementary flows

###### Fossil carbon dioxide from included conversion units (`conversion_fossil_co2`)

Record direct fossil carbon dioxide from unit-specific monitoring or a documented carbon and fuel calculation; upstream electricity emissions remain upstream.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from collected fuel and carbon records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treated blend-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `us-epa-ap42-petroleum-refining`

###### Sulfur dioxide from included conversion units (`conversion_sulfur_dioxide`)

Record direct sulfur dioxide by emission point, distinguishing monitored releases from calculations and retaining sulfur-balance inputs.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from collected sulfur and control records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treated blend-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `us-epa-ap42-petroleum-refining`

###### Nitrogen oxides from included conversion units (`conversion_nitrogen_oxides`)

Record direct nitrogen oxides from monitored points or documented unit-specific calculations.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from collected operating and emission-control records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treated blend-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conversion_treating_records`
- Sources: `us-epa-ap42-petroleum-refining`

### Process: Component blending and product release (`blending_and_quality_control`)

#### Inputs

##### Product flows

###### Fuel-oil blend components (`blend_components`)

Record every on-site or purchased component by tank or batch, mass, density, net calorific value where used, and sulfur and viscosity contribution.

- Selected flow: Component-specific Tiangong product flow selected for each declared blend component
- Flow property / unit: Mass / kg
- Amount rule: measured batch charge or transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blending batch, subsequently normalized to 1 MJ released fuel oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_release_records`
- Sources: `unsd-cpc-33370`; `mass-balance-identity`

###### Cutter stocks, additives, and blending energy (`blend_auxiliaries`)

Record cutter stocks separately from additives and record metered heating, circulation, and pumping energy for the batch or reporting period.

- Selected flow: Material- or utility-specific Tiangong product flow selected during dataset construction
- Flow property / unit: material- or energy-specific property / recorded unit
- Amount rule: measured batch charge, purchasing reconciliation, or metered utility use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blending batch, subsequently normalized to 1 MJ released fuel oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_release_records`
- Sources: `astm-d396-21`; `iso-8217-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference fuel oil (`released_reference_fuel_oil`)

Only saleable output passing the declared release specification is normalized to the reference flow. Off-specification material retained for rework is not saleable output.

- Selected flow: fuels `6908344a-d905-4a65-a5e6-9511198fde88`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: exactly 1 MJ after batch-matched saleable mass and net calorific value normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 MJ net calorific value of released fuel oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blending_release_records`
- Sources: `mass-balance-identity`; `astm-d396-21`; `iso-8217-2024`

###### Off-specification material returned to rework (`off_spec_rework`)

Record material returned to blending or another process as an internal transfer; material leaving the product system must instead be recorded as a waste or co-product according to its disposition.

- Selected flow: Product-specific internal flow selected for the declared off-specification material
- Flow property / unit: Mass / kg
- Amount rule: measured rework transfer mass and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blending batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_release_records`
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Product storage and transfer to facility gate (`storage_and_transfer`)

#### Inputs

##### Product flows

###### Released fuel oil entering storage (`released_fuel_to_storage`)

Record the released batch transferred to saleable storage and retain tank identity, mass or volume, density, and energy content.

- Selected flow: fuels `6908344a-d905-4a65-a5e6-9511198fde88`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: measured transfer energy calculated from batch mass and net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per storage and transfer process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_transfer_records`
- Sources: `mass-balance-identity`

###### Storage heating and transfer electricity (`storage_energy`)

Record tank heating, circulation, pumping, and loading energy attributable to the included product tanks and transfer period.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163` for purchased electricity; route-specific product flow for other energy carriers
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ or kWh within Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: submetered use or documented equipment-level allocation from collected operating records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 MJ fuel oil transferred at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_transfer_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fuel oil transferred at facility gate (`fuel_oil_at_gate`)

Record net saleable energy transferred at the gate after inventory reconciliation, excluding downstream transport and user storage.

- Selected flow: fuels `6908344a-d905-4a65-a5e6-9511198fde88`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: exactly 1 MJ after gate-transfer and inventory-loss normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 MJ net calorific value transferred at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_transfer_records`
- Sources: `mass-balance-identity`

##### Waste flows

###### Tank bottoms, drainage, and contaminated material (`storage_wastes`)

Record tank bottoms, drainage, oily water, spill recovery, and contaminated absorbents by measured quantity and destination.

- Selected flow: Waste-specific Tiangong waste flow selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: measured removal or documented inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 MJ fuel oil transferred at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_transfer_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Elementary flows

###### Storage and transfer air releases (`storage_air_releases`)

Record substance-specific measured or modelled breathing, working, loading, and fugitive emissions. Do not report one unidentified aggregate VOC flow when substance-resolved data are available.

- Selected flow: Substance-specific Tiangong elementary flow selected for each reported air emission
- Flow property / unit: Mass / kg
- Amount rule: measured release or documented tank and transfer model calculated from collected throughput, tank, product, and control data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 MJ fuel oil transferred at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_transfer_records`
- Sources: `us-epa-ap42-petroleum-refining`

### Process: On-site utilities and residual treatment (`onsite_utilities_and_treatment`)

#### Inputs

##### Product flows

###### Utility fuels, electricity, water, and treatment chemicals (`onsite_utility_inputs`)

Record all inputs to included on-site utility and treatment systems, then allocate only the attributable service share to the foreground fuel-oil route.

- Selected flow: Input-specific Tiangong product flow selected for each utility or treatment input
- Flow property / unit: material- or energy-specific property / recorded unit
- Amount rule: metered, purchased, or stock-reconciled input assigned to delivered service
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per unit of utility or treatment service delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_utility_treatment_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Utility and treatment services delivered (`onsite_services`)

Record steam, heat, electricity, hydrogen, sulfur-recovery, wastewater-treatment, or other service delivered to each foreground process without double counting purchased supply.

- Selected flow: Service-specific Tiangong product flow selected during dataset construction
- Flow property / unit: service-specific property / service unit
- Amount rule: metered service delivery or engineering calculation from collected operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per unit of service delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_utility_treatment_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Waste flows

###### Wastewater, sludge, ash, and treatment residues (`onsite_treatment_outputs`)

Record treated or untreated wastewater, sludge, ash, recovered residues, and final disposal flows separately with destination and treatment status.

- Selected flow: Waste-specific Tiangong waste flow selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: measured discharge, dispatch, or documented treatment mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per delivered utility or treatment service, then allocated to 1 MJ released fuel oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_utility_treatment_records`
- Sources: `us-epa-ap42-petroleum-refining`

##### Elementary flows

###### Fossil carbon dioxide from included on-site utility systems (`onsite_fossil_co2`)

Record attributable direct fossil carbon dioxide from measured releases or calculations based on collected fuel and carbon records.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from collected fuel and carbon records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per delivered utility service, then allocated to 1 MJ released fuel oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_utility_treatment_records`
- Sources: `us-epa-ap42-petroleum-refining`

###### Sulfur dioxide from included on-site utility systems (`onsite_sulfur_dioxide`)

Record attributable direct sulfur dioxide using monitored emissions or a documented sulfur and control calculation.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from collected sulfur and control records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per delivered utility service, then allocated to 1 MJ released fuel oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_utility_treatment_records`
- Sources: `us-epa-ap42-petroleum-refining`

###### Nitrogen oxides from included on-site utility systems (`onsite_nitrogen_oxides`)

Record attributable direct nitrogen oxides from monitoring or a documented unit-specific calculation.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from collected operating and emission-control records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per delivered utility service, then allocated to 1 MJ released fuel oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_utility_treatment_records`
- Sources: `us-epa-ap42-petroleum-refining`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared refinery and blending operations | First avoid allocation by unit-process subdivision, separate metering, batch or tank tracing, or expanding the system for a separately modelled function when justified. | `eu-recommendation-2021-2279` |
| `allocation_physical` | unavoidable multi-output process | When subdivision or system expansion is not feasible, allocate using a demonstrated physical relationship that reflects how inputs and emissions change with the co-products, such as mass, energy content, or another causal process parameter. | `eu-recommendation-2021-2279` |
| `allocation_other_relationship` | process without a defensible physical relationship | Use an economic or other relationship only after documenting why physical allocation is not representative; state prices, geography, period, currency basis, and perform sensitivity to a plausible physical alternative. | `eu-recommendation-2021-2279` |
| `allocation_internal_rework` | off-specification internal return | Treat internal rework as an internal transfer without co-product credit; include the additional blending, utility, storage, and loss burdens incurred. | `mass-balance-identity` |
| `allocation_disclosure` | all allocated burdens | Report each shared process, co-product, allocation key, denominator, assigned share, excluded flow, and sensitivity result so totals can be reproduced. | `eu-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_primary_refining_records` | `primary_refining` | feeds, utilities, components, wastes | meter, tank, laboratory, invoice, and waste records | material id; source; opening and closing inventory; receipt; transfer; mass or volume; density; temperature; NCV; destination | reconcile meters and tank movements to unit operating logs | recorded mass, volume, energy, and test units | batch and monthly reconciliation | same period as product output | included separation units and associated tanks | sum by material and unit; calculate inventory-adjusted totals; normalize after allocation | calibrated meters; tank tables; laboratory certificates; signed reconciliation |
| `cp_conversion_treating_records` | `conversion_and_treating` | feeds, auxiliaries, outputs, wastes, direct emissions | unit feed and output meters; chemical logs; catalyst records; continuous monitoring; stack tests; waste manifests | unit id; operating hours; feed; output; hydrogen; utilities; sulfur; controls; emissions; waste | reconcile unit records and emission calculations by operating campaign | recorded material, energy, concentration, and emission units | continuous or batch records aggregated monthly | same period as product output | each included conversion or treating unit | aggregate only homogeneous routes; retain unit-level calculations before allocation | calibration; laboratory data; monitoring QA; calculation worksheets; waste receipts |
| `cp_blending_release_records` | `blending_and_quality_control` | components, auxiliaries, released product, rework | blend ticket, tank transfer, laboratory release, meter, invoice | batch id; component ids and quantities; density; viscosity and temperature; sulfur; water; sediment; NCV; specification; pass or fail | reconcile batch recipe, tank movement, and release certificate | kg, recorded volume unit, MJ/kg, and property-specific test units | every released batch | all batches in reporting period | blending assets and release laboratory | calculate saleable output only from passing batches; mass-weight reporting-period properties where valid | controlled recipe; calibrated meter; accredited or documented test method; release approval |
| `cp_storage_transfer_records` | `storage_and_transfer` | stored product, energy, gate output, wastes, air releases | tank gauges, transfer meters, loading tickets, energy meters, maintenance and emission-model inputs | tank id; opening and closing stock; receipts; dispatch; density; temperature; NCV; heating energy; waste removal; tank and control parameters | reconcile stock and transfer records and apply documented substance-specific emission method | kg, recorded volume unit, MJ, kWh, and kg emission | each transfer with monthly reconciliation | same period as product output | included product tanks, pumps, and loading points | gate output equals dispatch adjusted to consistent mass and energy basis; allocate tank emissions by defensible throughput or causal driver | meter calibration; tank table; loading ticket; model input review; inventory sign-off |
| `cp_onsite_utility_treatment_records` | `onsite_utilities_and_treatment` | utility inputs, services, treatment outputs, direct emissions | fuel and utility meters, operating logs, monitoring, discharge records, waste manifests | system id; inputs; service output; fuel composition; emission controls; emissions; wastewater; sludge; destination | calculate service efficiencies and attributable outputs from reconciled operating records | recorded material, energy, service, discharge, and emission units | continuous or shift records aggregated monthly | same period as product output | included on-site support systems | allocate delivered service and residuals using section 7 hierarchy | calibrated instruments; laboratory and monitoring QA; operator sign-off; disposal receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_saleable_energy` | released product batch | saleable energy (MJ) = saleable product mass (kg) × batch net calorific value (MJ/kg) | passing-batch mass; batch-matched NCV | MJ saleable output | `mass-balance-identity` |
| `calc_reference_normalization` | every foreground inventory amount | normalized amount = allocated reporting-period amount ÷ total saleable output energy; multiply by 1 MJ reference amount | allocated amount; saleable output MJ | amount per 1 MJ NCV output | `mass-balance-identity` |
| `calc_liquid_mass` | volume-metered liquid | mass = corrected volume × density at the same reference condition; do not mix density and volume reference temperatures | raw volume; meter correction; density; reference temperature | kg material | `astm-d396-21` |
| `calc_mass_reconciliation` | each unit, blend batch, and storage system | inputs + opening inventory = products + co-products + wastes + measured releases + closing inventory + quantified unexplained difference | measured input, output, waste, release, and stock records | balanced mass and disclosed residual | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technological` | route and equipment | Describe actual separation, conversion, treating, blending, storage, utility, and control technologies; do not combine materially different routes without separate results or weighting. | unit list, process diagram, operating records, and route weights |
| `dq_geographical` | foreground and upstream data | Use facility geography for direct operations and representative supplier geography for purchased inputs; disclose geographic proxies. | site address, supplier origin, dataset geography, and proxy rationale |
| `dq_temporal` | all foreground records | Use one internally consistent period not normally longer than 12 months, covering representative operating conditions; disclose shutdowns, start-ups, and abnormal flaring. | timestamps, production calendar, operating hours, and exception log |
| `dq_precision_completeness` | meters, tests, and balances | Report meter and test method, calibration or QA status, sampling frequency, missing-data treatment, mass-balance residual, and coverage of material and emission points. | calibration records, laboratory QA, completeness table, and reconciliation workbook |
| `dq_method_consistency` | allocation and normalization | Apply one declared allocation hierarchy and the NCV reference basis consistently across all processes; retain unrounded calculation inputs. | allocation workbook, NCV records, and normalization checks |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_identity` | product and reference flow | Fail if the dataset lacks CPC 33370 identity and all Required qualifiers, or if the product is an unfinished stream or belongs to a more specific fuel category. | `unsd-cpc-33370`; `astm-d396-21`; `iso-8217-2024` |
| `validate_reference_identity` | Tiangong reference flow | Require product flow `6908344a-d905-4a65-a5e6-9511198fde88`, NCV property `93a60a56-a3c8-11da-a746-0800200c9a66`, energy unit group `93a60a57-a3c8-11da-a746-0800200c9a66`, and reference unit MJ without embedded dataset version. |  |
| `validate_route_completeness` | process map | Require both required processes and every conditional process triggered by the declared route; fail if a route unit, direct emission point, waste, or attributable utility is omitted without quantified justification. | `us-epa-ap42-petroleum-refining` |
| `validate_energy_normalization` | reference output | Recalculate saleable MJ from passing-batch mass and NCV and confirm every inventory row uses the same allocated denominator. | `mass-balance-identity` |
| `validate_mass_balance` | unit, blend, and storage balances | Recalculate the mass reconciliation; report the signed residual and fail when it exceeds the facility's reviewed measurement uncertainty without investigation and approval. | `mass-balance-identity` |
| `validate_allocation` | co-products and shared systems | Confirm the allocation hierarchy, reproduce assigned shares, and require sensitivity when an economic or non-physical fallback is used. | `eu-recommendation-2021-2279` |
| `validate_emission_resolution` | direct air and water releases | Require substance-specific flows, source or calculation method, control status, and no double counting between process units and on-site utilities. | `us-epa-ap42-petroleum-refining` |
| `validate_market_requirements` | declared regulated grade | Apply the declared market specification and sulfur limit only to the relevant product; for marine fuel, verify declared MARPOL area and applicable sulfur requirement. | `iso-8217-2024`; `imo-sulphur-2020` |
| `validate_data_quality` | foreground package | Report checks performed, checks skipped, findings, completeness, temporal and geographic fit, technological representativeness, precision, and unresolved evidence gaps. | `eu-recommendation-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for marketable CPC 33370 fuel oil at a refinery or blending-facility gate. |
| downstream_use | Construction of Tiangong flow, process, and lifecyclemodel projections and comparative or accounting studies that preserve the declared grade and route. |
| allowed_use | Use for the represented facility, period, route, product grade, allocation, and gate condition; broader use requires an explicit representativeness assessment. |
| excluded_use | Do not use as a generic combustion dataset, crude-oil dataset, diesel or gas-oil dataset, marine-fuel default without matching qualifiers, or substitute for a route or geography not represented. |
| required_metadata | PCR id; CPC code; product and commercial grade; reference UUIDs; facility and geography; period; route; feed and component basis; NCV; sulfur; density and temperature; viscosity and test temperature; water and sediment; specification; allocation; gate; data owner and review status. |
| required_quality_disclosure | Primary versus proxy data shares; source and age of upstream datasets; meter and laboratory QA; missing-data treatment; mass-balance residuals; allocation sensitivities; excluded operations; abnormal events; unresolved identity and quantitative-evidence gaps. |
| update_trigger | Material change in product grade, component basis, route technology, sulfur or other specification, facility or geography, allocation, reference-flow identity, reporting period representativeness, or governing classification and market requirements. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-33370` | official_guidance | United Nations Statistics Division, CPC Version 2.1 detail for code 33370, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/1074/33370 | Official explanatory scope for fuel oil, residual fuel oils, heavy fuel oil, heavy gas oil, and blends; interpreted under the repository's CPC 3.0 identity. |
| `us-epa-ap42-petroleum-refining` | official_guidance | U.S. EPA, AP-42, Chapter 5.1 Petroleum Refining, https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf | Refinery process decomposition, storage and transfer, utility systems, and direct-emission inventory points. |
| `eu-recommendation-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on environmental footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 | Allocation hierarchy and technological, geographical, temporal, and precision data-quality criteria. |
| `iso-8217-2024` | standard | ISO 8217:2024, Products from petroleum, synthetic and renewable sources — Fuels (class F) — Specifications of marine fuels, https://www.iso.org/standard/80579.html | Marine-grade qualifiers and quality-property disclosure; not used to narrow the whole CPC category. |
| `imo-sulphur-2020` | official_guidance | International Maritime Organization, IMO 2020 — cutting sulphur oxide emissions, https://www.imo.org/en/mediacentre/hottopics/pages/sulphur-2020.aspx | Marine-fuel sulfur compliance qualifier by MARPOL operating area. |
| `astm-d396-21` | standard | ASTM D396-21, Standard Specification for Fuel Oils, https://doi.org/10.1520/D0396-21 | Fuel-oil grade and test-record qualifiers, including density, viscosity, sulfur, water, sediment, and release quality. |
| `mass-balance-identity` | method_factor | Conservation of mass and batch energy-normalization identities stated in section 8 | Mass reconciliation, liquid mass conversion control, saleable energy, reference normalization, and internal rework treatment. |
