---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.unwrought-aluminium
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Unwrought aluminium

## 1. Scope and Applicability

This PCR applies to solid unwrought aluminium and aluminium alloys in cast primary forms, such as ingots, billets, slabs, pigs, or equivalent cast shapes, at the casting-facility gate. The foreground boundary begins with route-specific liquid aluminium delivered to holding, refining, and casting. The liquid-metal input may originate from primary electrolytic production, secondary remelting, or a documented mixture, but its upstream burden shall be represented by linked route- and geography-specific datasets.

The PCR excludes alumina as a product, aluminium powders and flakes, rolled, extruded, drawn, forged, or otherwise semi-finished aluminium products, fabricated articles, and downstream use or end-of-life. It also excludes liquid aluminium sold without solidification. Alloy composition, cast form, primary or recycled route share, liquid-metal source, casting technology, geography, reference year, and product quality specification shall be declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.unwrought-aluminium |
| classification_refs | CPC 3.0: 41431, Unwrought aluminium |
| covered_products | Solid non-alloy aluminium and aluminium alloys in unwrought cast primary forms |
| excluded_products | Alumina; aluminium powders or flakes; semi-finished wrought products; fabricated articles; liquid aluminium sold without solidification |
| representative_product | Cast aluminium ingot at the casting-facility gate |
| production_route | Holding, optional in-furnace treatment, and casting of primary, secondary, or mixed route-specific liquid aluminium |
| market_state | Solid unwrought cast form meeting the declared alloy, purity, dimensions, and quality specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of solid unwrought aluminium in a declared alloy or purity grade and cast primary form |
| How much | 1,000 kg net conforming product at the casting-facility gate |
| How well | Meets the declared chemical composition, cast form, dimensional, surface, and acceptance specification |
| How long or cycle | One production accounting period; no use duration is assigned to a material product |
| reference_flow_link | `cast_unwrought_aluminium_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Unwrought aluminium |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy or purity grade; cast form; primary, secondary, and mixed liquid-metal shares; liquid-metal source datasets; casting technology; geography; reference year; product quality specification; inclusion of surface treatment or packaging |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | conforming unwrought aluminium output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net dry product mass after solidification and removal of non-product dross; normalize all inventory exchanges to 1,000 kg conforming output. |
| `liquid_metal_mass` | liquid aluminium input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure liquid-metal input by calibrated weighing or a documented mass-balance method and preserve its primary, secondary, and mixed route shares. |
| `gas_volume_conditions` | gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the temperature, pressure, moisture basis, and conversion used for all gas volumes; do not combine natural gas and oxygen. |
| `electricity_conversion` | purchased or generated electricity crossing the process boundary | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | kWh | Retain metered kWh; if another energy unit is recorded, document the conversion factor and source before normalization. |
| `water_net_input` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product-water input crossing the boundary and state whether recirculated water is excluded or measured separately. |

## 5. System Boundary

The foreground system includes liquid-metal receipt, holding, optional alloy adjustment or furnace treatment, casting or continuous casting into an unwrought primary form, cooling, dross removal, and internal handling through the product gate. Facility utilities and directly generated emissions and wastes are included when they cross the boundary. The verified source material describes transfer of primary aluminium to holding furnaces and casting, and secondary aluminium melting, refining, skimming, and pouring.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_liquid_metal_start` | foreground_start | Begin the foreground inventory at route-specific liquid aluminium entering the holding or casting operation; do not represent liquid aluminium as burden-free. | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986` |
| `boundary_actual_operations` | included_operations | Include each on-site holding, treatment, casting, cooling, dross-handling, and utility operation actually used; disclose omitted listed operations as not applicable. | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`; `eu-jrc-nfm-bref-2016` |
| `boundary_upstream_linkage` | upstream_inputs | Link the liquid-metal input and all purchased energy and materials to upstream datasets that match product state, production route, geography, technology, and reference year. | `iai-lifecycle` |
| `boundary_direct_emissions` | direct_emissions | Record only direct emissions from foreground operations; keep upstream electricity and material emissions in their linked upstream datasets. | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Route-specific liquid aluminium at the holding or casting operation, with composition, temperature, source facility, and primary, secondary, or mixed share declared |
| starting_condition_role | Upstream product input whose production burden is represented by a linked dataset |
| product_classification_scope | Solid unwrought cast aluminium and aluminium alloys; downstream semi-finished and fabricated products are outside scope |
| recursive_input_rule | Record any same-category solid unwrought aluminium remelted on site as a separate product input and link it to its upstream dataset; do not recursively reproduce this PCR for the same input |
| upstream_dataset_requirement | Require route-, state-, geography-, technology-, and time-representative datasets for liquid aluminium, electricity, fuels, oxygen, water, and any additional material inputs |
| disclosure | Declare liquid-metal route shares, scrap attribution embedded in upstream datasets, alloy or purity grade, cast form, furnace and casting technology, geographic and temporal coverage, internal returns, dross treatment, and cut-offs |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `unwrought_casting` | Liquid aluminium holding and casting | `required` | Always included for solid unwrought aluminium covered by this PCR | Foreground production and solidification | 1,000 kg conforming unwrought aluminium output |

### Process: Liquid aluminium holding and casting (`unwrought_casting`)

#### Inputs

##### Product flows

###### Route-specific liquid aluminium (`cast_liquid_aluminium`)

Liquid aluminium enters from a separately modelled primary, secondary, or mixed production route. Its composition, temperature, mass, source, and route shares are retained with the foreground records.

- Selected flow: Liquid aluminium
- Flow property / unit: Mass / kg
- Amount rule: measured liquid aluminium charged to holding and casting, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming unwrought aluminium output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_material_balance`
- Sources: `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

###### Electricity supplied to holding and casting (`cast_electricity`)

Electricity crossing the foreground boundary is recorded independently from fuels and oxygen. Metered electricity covers the included holding, casting, cooling, and internal handling equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered electricity consumed by included foreground operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unwrought aluminium output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_electricity`
- Sources: `iai-lifecycle`

###### Gaseous natural gas for fuel-fired equipment (`cast_natural_gas`)

Natural gas is recorded only when fuel-fired holding, treatment, or casting equipment consumes it. Reference conditions and the meter boundary shall be declared.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered gaseous natural gas consumed by included foreground equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unwrought aluminium output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_fuel_gases`
- Sources: `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

###### Industrial oxygen for oxygen-enriched combustion (`cast_industrial_oxygen`)

Industrial oxygen is recorded only when oxygen-enriched or oxy-fuel combustion is used. It is not combined with combustion air or natural gas.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered industrial oxygen supplied to included fuel-fired equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unwrought aluminium output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_fuel_gases`
- Sources: `eu-jrc-nfm-bref-2016`

###### Process water crossing the foreground boundary (`cast_process_water`)

Process water is recorded when it is supplied for direct cooling, equipment cooling, or another included foreground use. Recirculated internal water is not double counted.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: net metered process-water input crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming unwrought aluminium output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_water`
- Sources: `eu-jrc-nfm-bref-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming unwrought aluminium (`cast_unwrought_aluminium_output`)

The reference product is the net solid cast aluminium or aluminium-alloy primary form that meets the declared product specification at the facility gate.

- Selected flow: Unwrought aluminium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed net conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_material_balance`
- Sources: `un-cpc-3-0-structure-2025`; `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

##### Waste flows

###### Aluminium dross leaving the foreground boundary (`cast_aluminium_dross`)

Aluminium dross is recorded as a waste output only when it leaves the foreground system for treatment, disposal, or recovery. Internally returned metal is recorded in the material balance and is not counted as an external waste flow.

- Selected flow: Aluminium dross
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed aluminium dross exported from the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming unwrought aluminium output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_material_balance`
- Sources: `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

##### Elementary flows

###### Direct fossil carbon dioxide from foreground fuel combustion (`cast_fossil_carbon_dioxide`)

Only fossil carbon dioxide emitted directly by fuel combustion in the included foreground equipment is recorded here. Upstream electricity and fuel-supply emissions remain in linked upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculated from foreground fuel consumption and a documented facility-approved carbon-content and oxidation factor, or measured directly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming unwrought aluminium output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_casting_combustion_emissions`
- Sources: `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

Additional actual atomic material, energy, waste, and elementary exchanges shall be added to the foreground data package when they cross the declared boundary. They shall not be combined into umbrella rows, and their identity, quantity, applicability, and upstream dataset shall be documented separately.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_casting_operations | Subdivide or meter operations by product grade, cast form, production line, or campaign before applying allocation. |  |
| `allocation_internal_returns` | internal_metal_returns | Treat internally returned liquid metal and recovered in-process metal as internal loops; do not assign them an external co-product credit or count them again as new liquid-metal input. |  |
| `allocation_shared_mass` | inseparable_shared_operations | When subdivision is not feasible, allocate shared foreground inputs, direct emissions, and wastes among conforming unwrought products by measured net product mass; disclose the products, period, quantities, and allocation result. |  |
| `allocation_exported_recovery` | exported_dross_or_residues | Keep exported dross or residues as waste outputs and document the selected downstream recovery or disposal model; do not apply an avoided-burden credit inside this foreground process unless the study goal explicitly requires and discloses a separate consequential scenario. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_casting_material_balance` | `unwrought_casting` | liquid metal, conforming output, dross, stock change, internal returns | weighbridge, batch, inventory, and quality-release records | input mass; output mass; dross mass; return mass; opening and closing stock; alloy or purity; cast form; accepted and rejected mass | calibrated weighing reconciled to batch and accounting-period stock | kg | each batch, aggregated monthly and annually | representative consecutive 12-month period or declared campaign | all included holding and casting lines | sum by grade and route, reconcile stock change, then normalize to conforming output | calibration certificates; batch tickets; inventory reconciliation; quality-release records |
| `cp_casting_electricity` | `unwrought_casting` | electricity | utility and submeter records | meter id; opening and closing reading; import; export; allocation key; downtime | calibrated meter reading | kWh | continuous or monthly | same period as product output | all included equipment and common utilities | net imports minus documented exports, allocated after subdivision, then normalized | invoices; meter calibration; submeter coverage map |
| `cp_casting_fuel_gases` | `unwrought_casting` | natural gas and industrial oxygen | supplier invoice and calibrated meter records | separate gas volumes; temperature; pressure; moisture basis; meter id; equipment; operating hours | separate calibrated meters or reconciled supplier records | m3 | batch or monthly | same period as product output | all included fuel-fired equipment | convert each gas separately to declared reference conditions and normalize | invoices; calibration; reference-condition calculation; equipment log |
| `cp_casting_water` | `unwrought_casting` | process water | intake and discharge meter records | intake mass or volume; discharge; recirculation; source; use; density conversion | calibrated metering and water-balance reconciliation | kg | monthly | same period as product output | all included cooling and process-water users | calculate net boundary input, exclude internal recirculation, then normalize | meter calibration; water balance; density and conversion record |
| `cp_casting_combustion_emissions` | `unwrought_casting` | direct fossil carbon dioxide | fuel records, supplier analysis, stack measurement, or approved factor record | fuel amount; carbon content; oxidation factor; measured CO2; method version | direct measurement or calculation from foreground fuel records | kg CO2 | batch or monthly | same period as product output | all included combustion sources | sum source-level direct emissions and normalize; exclude upstream supply emissions | measurement QA record or approved factor, supplier analysis, and calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every inventory exchange | normalized quantity = accounting-period exchange quantity × 1,000 kg / accounting-period net conforming product mass | exchange quantity; net conforming output mass | exchange quantity per 1,000 kg reference product |  |
| `calc_casting_mass_balance` | aluminium-bearing material balance | liquid aluminium input + opening aluminium stock = conforming output + exported aluminium dross + rejected output + closing aluminium stock, after separately reporting documented internal returns | all aluminium-bearing masses and stock changes | reconciled casting-period mass balance and unexplained difference |  |
| `calc_direct_fossil_co2` | `cast_fossil_carbon_dioxide` | use direct measured CO2 where valid; otherwise sum fuel quantity × documented carbon-content factor × oxidation factor × 44/12 for each fossil fuel source | foreground fuel quantities; facility-approved factors | direct fossil CO2 mass | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare alloy or purity, cast form, product specification, acceptance criteria, and excluded off-spec mass. | product specification; laboratory certificate; release record |
| `dq_route_identity` | liquid aluminium input | Declare primary, secondary, and mixed shares and link each share to a product-state-, geography-, technology-, and time-representative upstream dataset. | supplier declaration; mass-balance record; upstream dataset metadata |
| `dq_measurement` | all foreground quantities | Use calibrated meters or reconciled records and retain conversions, allocation keys, stock adjustments, and uncertainty or data-gap treatment. | calibration and reconciliation records; calculation worksheet |
| `dq_temporal` | foreground dataset | Use a representative consecutive 12-month period unless a shorter campaign is justified and disclosed; align all exchange and product totals to the same period. | production calendar; coverage statement; campaign justification |
| `dq_completeness` | foreground inventory | Include every actual atomic exchange crossing the boundary; reconcile aluminium mass and explain omitted, estimated, or below-detection exchanges. | completeness review; mass balance; omission log |
| `dq_direct_upstream_split` | emissions and upstream datasets | Keep direct foreground emissions separate from upstream electricity, fuel, liquid-metal, water, and material burdens. | process boundary diagram; exchange mapping; dataset links |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Confirm that the output is a solid unwrought cast primary form and that its alloy or purity, form, specification, and net mass are declared. | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference_flow | Confirm that all exchanges are normalized to exactly 1,000 kg net conforming output and that rejected or dross mass is excluded from the reference amount. |  |
| `validate_route_linkage` | liquid_metal_input | Reject a dataset that leaves liquid aluminium burden-free or omits primary, secondary, and mixed shares and their upstream dataset links. | `iai-lifecycle` |
| `validate_atomic_inventory` | process_inventory | Confirm that electricity, each fuel gas, oxygen, water, each waste, and each direct elementary emission are represented as separate atomic exchanges when applicable. |  |
| `validate_mass_balance` | aluminium_balance | Require a reconciled accounting-period aluminium mass balance and disclosure of the unexplained difference. |  |
| `validate_gas_conditions` | gas_inputs | Confirm that natural-gas and oxygen volumes use separately declared reference conditions and are not combined. |  |
| `validate_direct_emissions` | direct_emissions | Confirm that `cast_fossil_carbon_dioxide` contains only direct foreground fossil CO2 and excludes upstream electricity and supply-chain emissions. | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986` |
| `validate_unresolved_identities` | uuid_references | Before review or publication, resolve or explicitly review every UUID-empty inventory row and confirm the exact product state, flow type, property, and unit group. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review and publication |
| downstream_use | Attributional foreground data packages, process datasets, and lifecycle models requiring unwrought aluminium at the casting-facility gate |
| allowed_use | Use when product grade, cast form, liquid-metal route shares, technology, geography, time, system boundary, and data quality match the study |
| excluded_use | Do not use for alumina, liquid aluminium sold without casting, semi-finished or fabricated aluminium, or an upstream route represented as burden-free |
| required_metadata | canonical PCR id; product grade and form; reference mass; facility and geography; reference period; primary, secondary, and mixed shares; linked upstream datasets; casting technology; allocation; cut-offs; review status |
| required_quality_disclosure | measurement coverage and calibration; material-balance closure; meter allocation; data gaps and estimates; route-share evidence; direct-versus-upstream emission split; unresolved identities |
| update_trigger | Change in liquid-metal route mix, alloy or cast form, furnace or casting technology, energy supply, facility boundary, allocation, upstream dataset, geography, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official category identity and distinction from alumina and semi-finished aluminium |
| `china-sat-unwrought-aluminium-terminology` | Official guidance (`official_guidance`) | Ministry of Finance and State Tax Administration of China, official export-refund notice, 13 October 2003, https://www.chinatax.gov.cn/n810341/n810765/n812198/n813051/c1205357/content.html | Professional Chinese terminology for HS heading 7601, 未锻轧铝 |
| `us-epa-ap42-primary-aluminium-1998` | Official guidance (`official_guidance`) | US EPA, AP-42 Section 12.1 Primary Aluminum Production, https://www.epa.gov/sites/production/files/2020-11/documents/c12s01.pdf | Primary liquid-metal production context, holding and casting process, direct emissions, and dross formation |
| `us-epa-ap42-secondary-aluminium-1986` | Official guidance (`official_guidance`) | US EPA, AP-42 Section 12.8 Secondary Aluminum Operations, https://www.epa.gov/sites/default/files/2020-11/documents/c12s08.pdf | Secondary melting, refining, skimming, pouring, combustion emissions, and dross context |
| `eu-jrc-nfm-bref-2016` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, adopted June 2016, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf | Primary and secondary non-ferrous-metal scope, process and utility completeness, and conditional oxygen-enrichment and casting-cooling-water requirements |
| `iai-lifecycle` | Official guidance (`official_guidance`) | International Aluminium Institute, Lifecycle work area, https://international-aluminium.org/work-areas/lifecycle/ | Upstream cradle-to-gate linkage from bauxite mining through ingot manufacture and inventory completeness context |
