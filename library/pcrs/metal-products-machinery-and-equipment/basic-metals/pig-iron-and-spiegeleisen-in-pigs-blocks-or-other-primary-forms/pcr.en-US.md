---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.pig-iron-and-spiegeleisen-in-pigs-blocks-or-other-primary-forms
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pig iron and spiegeleisen in pigs, blocks or other primary forms

## 1. Scope and Applicability

This PCR applies to foreground data packages for solid pig iron or spiegeleisen supplied at the producing steelworks gate as pigs, blocks, or another primary form. It covers the blast-furnace ironmaking route, casting or equivalent solidification, blast-furnace gas cleaning, and the on-site treatment of slag and gas-scrubbing water when those operations occur within the reporting facility.

Pig iron is distinguished from steel and other ferro-alloys by its iron-carbon composition and non-malleable state. Spiegeleisen is the high-manganese member of this boundary. The dataset shall declare which product is made, its chemistry or grade, physical form, blast-furnace route, production site and geography, reporting period, and whether gas, slag, and wastewater treatment are on-site. Alternative smelting-reduction routes require a separately reviewed route-specific process map before using this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.pig-iron-and-spiegeleisen-in-pigs-blocks-or-other-primary-forms |
| classification_refs | CPC 3.0: 41111 (exact classification context; acceptance mapping is governed separately) |
| covered_products | Solid pig iron and spiegeleisen in pigs, blocks, or other primary forms, produced by the blast-furnace route |
| excluded_products | Direct-reduced iron and sponge iron; granules and powders of iron or steel; ferro-alloys other than spiegeleisen; crude or semi-finished steel; molten transfer iron at the reporting gate; downstream cast articles |
| representative_product | Solid pig iron at the producing steelworks gate |
| production_route | Blast-furnace burden preparation, hot-blast ironmaking, tapping, gas cleaning, and casting or equivalent solidification; on-site slag and wastewater treatment where applicable |
| market_state | Unpackaged solid primary form at the producing steelworks gate, ready for transfer or sale for downstream metal production |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of declared solid pig iron or spiegeleisen in a primary form for downstream metal production |
| How much | 1,000 kg net product mass |
| How well | Product identity, chemistry or grade, and physical form meet the declared sale or internal-transfer specification and the pig-iron or spiegeleisen boundary |
| How long or cycle | One completed production lot or reporting-period production quantity normalized to 1,000 kg at the steelworks gate |
| reference_flow_link | `cast_primary_form_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Pig iron or spiegeleisen in pigs, blocks, or other primary forms |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product_kind: pig_iron or spiegeleisen; chemistry_or_grade; carbon_mass_fraction; manganese_mass_fraction; physical_form; blast_furnace_route; production_site; geography; reporting_period; product_temperature_state: solid; allocation_method; gas_treatment_route; slag_destination; wastewater_treatment_route |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | Reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net solid product mass at the steelworks gate. Exclude packaging, transport equipment, and unshipped internal returns. |
| `measurement_material_mass` | Solid and liquid material exchanges | Mass | kg | Record gross receipts, closing and opening stocks, internal returns, and measured outputs so net consumption or production can be calculated without double counting. |
| `measurement_gas_volume` | Natural gas and blast-furnace gas | Volume | Nm3 | State the temperature and pressure reference used for normal volume; convert all reported gas volumes to one declared reference condition before normalization. |
| `measurement_electricity` | Purchased and on-site alternating-current electricity crossing a process boundary | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Record metered net electricity by process in kWh and convert to the TianGong flow reference property at exactly 3.6 MJ/kWh; do not combine electricity with fuel or recovered gas energy. |
| `measurement_water` | Makeup, cooling, granulation, scrubbing, and discharged water | Volume | m3 | Record boundary withdrawals and discharges separately from internal recirculation; disclose estimation when no dedicated meter exists. |
| `measurement_emissions` | Direct air and water elementary flows | Mass | kg | Derive mass from validated continuous monitoring, representative sampling with flow measurement, or a documented mass-balance calculation; retain raw concentration, flow, duration, and operating-state records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or transferred iron-bearing burden, manganese ore when producing spiegeleisen, reductants, fluxes, oxygen, electricity, water, refractory consumables, and fuels arrive at the blast-furnace foreground boundary |
| starting_condition_role | Foreground gate at receipt into blast-furnace ironmaking; upstream production and inbound transport remain linked upstream datasets |
| product_classification_scope | Pig iron and spiegeleisen in pigs, blocks, or other primary forms; CPC 3.0 code 41111 is classification context only |
| recursive_input_rule | A same-category pig-iron or spiegeleisen input shall be recorded as an upstream product input with its own dataset and shall not be recursively expanded inside this foreground package |
| upstream_dataset_requirement | Use geographically and technologically representative upstream datasets for every purchased material, fuel, electricity supply, water supply, and external waste-treatment service |
| disclosure | Declare product kind and chemistry, route, site and geography, reporting period, burden composition, fuel injection, gas-cleaning route, slag destination, water-loop configuration, allocation method, and any excluded on-site operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_chain` | Blast-furnace product system | Include blast-furnace ironmaking, hot-blast generation attributable to the furnace, tapping, casting or solidification, and required on-site gas, slag, and water-treatment operations through solid product at the steelworks gate. | `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017` |
| `boundary_upstream_links` | Purchased inputs and services | Represent production and inbound transport of purchased burden, reductants, fluxes, utilities, consumables, and external treatment as linked upstream datasets rather than as untracked cut-offs. | `worldsteel-lci-methodology-2017` |
| `boundary_downstream_exclusion` | Activities after the reporting gate | Exclude basic-oxygen or electric-arc steelmaking, downstream casting into finished articles, product fabrication, use, and end of life. Capital goods and extraordinary accidents are outside the default boundary and shall be disclosed if material to the study goal. | `worldsteel-lci-methodology-2017` |
| `boundary_recursive_input` | Same-category input | Stop recursive expansion at an incoming pig-iron or spiegeleisen product dataset and disclose its amount and dataset identity. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `blast_furnace_ironmaking` | Blast-furnace ironmaking and cast house | required | Always for the covered route | Foreground reduction, melting, hot-blast operation, tapping, and separation of hot metal and slag | kg molten iron tapped |
| `pig_casting_and_cooling` | Pig casting and cooling | required | Always to reach the declared solid primary form | Foreground solidification and product finishing | kg accepted solid primary-form product |
| `blast_furnace_gas_cleaning` | Blast-furnace gas cleaning and recovery | required | Always; wet-scrubbing rows apply only when wet cleaning is used | Foreground gas cleaning and recovered-gas production | Nm3 raw top gas treated |
| `blast_furnace_slag_processing` | Blast-furnace slag processing | conditional | Include when molten slag is granulated, air-cooled, conditioned, or disposed of on-site | Foreground co-product preparation or waste handling | kg molten slag received |
| `gas_scrubbing_wastewater_treatment` | Gas-scrubbing wastewater treatment | conditional | Include when wet gas cleaning produces wastewater treated on-site | Foreground water treatment and discharge | m3 wastewater treated |

### Process: Blast-furnace ironmaking and cast house (`blast_furnace_ironmaking`)

#### Inputs

##### Product flows

###### Lump iron ore burden (`bf_lump_iron_ore`)

Record lump iron ore charged to the furnace when it is used.

- Selected flow: Lump iron ore
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass charged during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Iron ore sinter burden (`bf_iron_ore_sinter`)

Record iron ore sinter charged to the furnace when it is used.

- Selected flow: Iron ore sinter
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass charged during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Iron ore pellet burden (`bf_iron_ore_pellets`)

Record iron ore pellets charged to the furnace when they are used.

- Selected flow: Iron ore pellets
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass charged during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Manganese ore for spiegeleisen (`bf_manganese_ore`)

Record manganese ore only for a declared spiegeleisen campaign in which it crosses the furnace boundary.

- Selected flow: Manganese ore
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass charged for the spiegeleisen campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted solid spiegeleisen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-cn-2020-chapter-72`

###### Metallurgical coke reductant (`bf_metallurgical_coke`)

Record metallurgical coke charged as reductant and structural burden.

- Selected flow: Metallurgical coke
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass charged during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Pulverized coal injection (`bf_pulverized_coal`)

Record pulverized coal injected at the tuyeres when this fuel-substitution route operates.

- Selected flow: Pulverized coal
- Flow property / unit: Mass / kg
- Amount rule: Metered or weighed mass injected during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Natural gas injection or stove fuel (`bf_natural_gas`)

Record natural gas crossing the furnace or hot-stove boundary when used.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Nm3
- Amount rule: Metered normal volume at the declared reference condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_gases`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Heavy fuel oil injection (`bf_heavy_fuel_oil`)

Record heavy fuel oil injected at the tuyeres when used.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered mass consumed during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Limestone flux (`bf_limestone`)

Record limestone charged to control slag chemistry when used.

- Selected flow: Limestone
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass charged during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Dolomite flux (`bf_dolomite`)

Record dolomite charged to control slag chemistry when used.

- Selected flow: Dolomite
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass charged during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Olivine flux (`bf_olivine`)

Record olivine charged to control slag chemistry when used.

- Selected flow: Olivine
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass charged during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Oxygen enrichment (`bf_oxygen`)

Record oxygen supplied for blast enrichment or injection when used.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Nm3
- Amount rule: Metered oxygen normal volume supplied during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Blast-furnace electricity (`bf_electricity`)

Record net electricity consumed by burden handling, furnace auxiliaries, cast-house equipment, and attributable hot-blast systems.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered net electricity consumed by the process, converted from kWh to MJ at exactly 3.6 MJ/kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_electricity`
- Sources: `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017`

###### Blast-furnace makeup water (`bf_makeup_water`)

Record fresh makeup water entering furnace cooling and cast-house water systems; do not count internal recirculation as a new input.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered boundary withdrawal less documented return to the supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_water`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Alumina-carbon refractory lining (`bf_alumina_carbon_refractory`)

Record the net consumption of alumina-carbon refractory lining attributable to the furnace and cast house.

- Selected flow: Alumina-carbon refractory
- Flow property / unit: Mass / kg
- Amount rule: Installed mass minus recovered reusable stock, apportioned over product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Blast-furnace taphole clay (`bf_taphole_clay`)

Record heat-resistant clay injected to close the taphole.

- Selected flow: Blast-furnace taphole clay
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass less returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molten pig iron or spiegeleisen (`bf_molten_pig_iron`)

Record hot metal tapped and transferred to primary-form casting as an internal product flow.

- Selected flow: Molten pig iron or spiegeleisen
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced hot-metal output transferred to casting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_outputs`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Raw blast-furnace top gas (`bf_raw_top_gas`)

Record untreated top gas transferred to gas cleaning as an internal product flow.

- Selected flow: Raw blast-furnace top gas
- Flow property / unit: Volume / Nm3
- Amount rule: Metered normal volume transferred to gas cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_gases`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Molten blast-furnace slag (`bf_molten_slag`)

Record molten slag separated from hot metal and transferred to treatment, sale preparation, or disposal.

- Selected flow: Molten blast-furnace slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced slag output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_outputs`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Waste flows

###### Cast-house collected dust (`bf_cast_house_dust`)

Record dust captured from tapping and runner operations as one collected waste stream.

- Selected flow: Cast-house collected dust
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass removed from collection equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_wastes`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Elementary flows

###### Carbon dioxide to air (`bf_carbon_dioxide_air`)

Record direct carbon dioxide released by the furnace and attributable hot-blast combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Validated monitored or carbon-balance mass emitted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_air_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Carbon monoxide to air (`bf_carbon_monoxide_air`)

Record direct carbon monoxide released through stacks and measured process vents.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Validated concentration-flow-time mass emitted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_air_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Sulfur dioxide to air (`bf_sulfur_dioxide_air`)

Record direct sulfur dioxide released through furnace, stove, and cast-house exhausts.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Validated concentration-flow-time mass emitted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_air_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Nitrogen monoxide to air (`bf_nitrogen_monoxide_air`)

Record nitrogen monoxide separately when speciation is measured or calculated.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Validated speciated concentration-flow-time mass emitted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_air_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Nitrogen dioxide to air (`bf_nitrogen_dioxide_air`)

Record nitrogen dioxide separately when speciation is measured or calculated.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Validated speciated concentration-flow-time mass emitted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_air_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Particulate matter not greater than 10 micrometres to air (`bf_pm10_air`)

Record direct PM10 mass after abatement and from quantified fugitive capture points.

- Selected flow: Particulate matter, ≤10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Validated concentration-flow-time mass emitted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_air_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`

### Process: Pig casting and cooling (`pig_casting_and_cooling`)

#### Inputs

##### Product flows

###### Molten pig iron or spiegeleisen to casting (`cast_molten_pig_iron`)

Record the internal hot-metal input received from the cast house.

- Selected flow: Molten pig iron or spiegeleisen
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced hot metal received by casting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cast_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Pig-casting electricity (`cast_electricity`)

Record net electricity consumed by casting, conveying, and product handling.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered net electricity consumed by the process, converted from kWh to MJ at exactly 3.6 MJ/kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_electricity`
- Sources: `worldsteel-lci-methodology-2017`

###### Pig-casting cooling water (`cast_cooling_water`)

Record fresh makeup water entering the casting and cooling system; do not count recirculated water as a new input.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: Metered boundary makeup volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_water`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted solid primary-form product (`cast_primary_form_product`)

Record accepted pig iron or spiegeleisen after solidification and final quality release.

- Selected flow: Pig iron or spiegeleisen in pigs, blocks, or other primary forms
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted product released at the steelworks gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_product_output`
- Sources: `un-cpc-v3-structure-2025`; `eu-cn-2020-chapter-72`

##### Waste flows

###### Rejected pig-casting pieces (`cast_rejects`)

Record solid casting pieces rejected from the declared product output before any internal remelting or external dispatch.

- Selected flow: Rejected pig-iron or spiegeleisen casting pieces
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected mass leaving the accepted-product stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_materials`
- Sources: `worldsteel-lci-methodology-2017`

##### Elementary flows

### Process: Blast-furnace gas cleaning and recovery (`blast_furnace_gas_cleaning`)

#### Inputs

##### Product flows

###### Raw top gas to cleaning (`gas_cleaning_raw_top_gas`)

Record untreated blast-furnace top gas entering the cleaning train.

- Selected flow: Raw blast-furnace top gas
- Flow property / unit: Volume / Nm3
- Amount rule: Metered normal volume entering gas cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_cleaning_gases`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Gas-cleaning electricity (`gas_cleaning_electricity`)

Record net electricity consumed by dust catchers, scrubbers, precipitators, pumps, and fans.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered net electricity consumed by gas cleaning, converted from kWh to MJ at exactly 3.6 MJ/kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_cleaning_electricity`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Gas-scrubbing water (`gas_cleaning_scrubbing_water`)

Record fresh makeup water only when wet gas cleaning is used.

- Selected flow: Gas-scrubbing water
- Flow property / unit: Volume / m3
- Amount rule: Metered boundary makeup volume to wet scrubbers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_cleaning_water`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned blast-furnace gas (`gas_cleaning_clean_gas`)

Record cleaned gas transferred for internal fuel use, export, flaring, or another declared destination.

- Selected flow: Cleaned blast-furnace gas
- Flow property / unit: Volume / Nm3
- Amount rule: Metered normal volume leaving gas cleaning, disaggregated by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_cleaning_gases`
- Sources: `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017`

##### Waste flows

###### Coarse blast-furnace gas-cleaning dust (`gas_cleaning_coarse_dust`)

Record coarse dust removed by dry pre-cleaning as one collected waste stream.

- Selected flow: Coarse blast-furnace gas-cleaning dust
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass removed from dry pre-cleaning equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_cleaning_wastes`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Blast-furnace gas-cleaning sludge (`gas_cleaning_sludge`)

Record sludge removed from wet gas cleaning when that route is used.

- Selected flow: Blast-furnace gas-cleaning sludge
- Flow property / unit: Mass / kg
- Amount rule: Net wet or dry mass removed, with solids basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_cleaning_wastes`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Blast-furnace gas-scrubbing wastewater (`gas_cleaning_wastewater`)

Record wastewater transferred from wet gas cleaning to on-site or external treatment.

- Selected flow: Blast-furnace gas-scrubbing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater volume leaving the gas-cleaning water loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_cleaning_water`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Elementary flows

### Process: Blast-furnace slag processing (`blast_furnace_slag_processing`)

#### Inputs

##### Product flows

###### Molten slag to processing (`slag_processing_molten_slag`)

Record molten blast-furnace slag entering the on-site processing route.

- Selected flow: Molten blast-furnace slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced slag received by processing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slag_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Slag-granulation water (`slag_processing_granulation_water`)

Record fresh makeup water only when wet slag granulation operates.

- Selected flow: Slag-granulation water
- Flow property / unit: Volume / m3
- Amount rule: Metered boundary makeup volume to granulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slag_water`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Slag-processing electricity (`slag_processing_electricity`)

Record net electricity consumed by granulation, dewatering, crushing, screening, and conveying performed on-site.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered net electricity consumed by slag processing, converted from kWh to MJ at exactly 3.6 MJ/kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slag_electricity`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Granulated blast-furnace slag (`slag_granulated_product`)

Record granulated slag dispatched as a saleable co-product when the granulation route operates and product criteria are met.

- Selected flow: Granulated blast-furnace slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry-equivalent saleable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slag_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017`

###### Air-cooled blast-furnace slag (`slag_air_cooled_product`)

Record air-cooled slag dispatched as a saleable co-product when that route operates and product criteria are met.

- Selected flow: Air-cooled blast-furnace slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed saleable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slag_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017`

##### Waste flows

###### Blast-furnace slag sent to disposal (`slag_disposal_waste`)

Record slag leaving as waste when it does not meet a co-product specification and is sent to a declared disposal route.

- Selected flow: Blast-furnace slag for disposal
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass dispatched to disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slag_materials`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Elementary flows

### Process: Gas-scrubbing wastewater treatment (`gas_scrubbing_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wastewater_treatment_electricity`)

Record net electricity consumed by pumps, mixing, separation, and sludge handling.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered net electricity consumed by wastewater treatment, converted from kWh to MJ at exactly 3.6 MJ/kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_electricity`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Waste flows

###### Gas-scrubbing wastewater feed (`wastewater_scrubber_feed`)

Record blast-furnace gas-scrubbing wastewater entering on-site treatment.

- Selected flow: Blast-furnace gas-scrubbing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater volume entering treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_feed`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Gas-scrubbing wastewater-treatment sludge (`wastewater_treatment_sludge`)

Record dewatered sludge leaving on-site wastewater treatment, with solids basis and destination declared.

- Selected flow: Gas-scrubbing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet or dry mass removed, with solids basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_sludge`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Elementary flows

###### Water discharged to freshwater (`wastewater_water_freshwater`)

Record the treated water volume discharged to a freshwater receiving compartment.

- Selected flow: Water to freshwater
- Flow property / unit: Volume / m3
- Amount rule: Metered treated-effluent discharge volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_discharge`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Suspended solids to freshwater (`wastewater_suspended_solids`)

Record measured suspended-solids mass in the treated discharge.

- Selected flow: Suspended solids to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Validated concentration multiplied by discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Iron to freshwater (`wastewater_iron`)

Record measured total iron mass in the treated discharge.

- Selected flow: Iron to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Validated total-iron concentration multiplied by discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Lead to freshwater (`wastewater_lead`)

Record measured total lead mass in the treated discharge.

- Selected flow: Lead to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Validated total-lead concentration multiplied by discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Zinc to freshwater (`wastewater_zinc`)

Record measured total zinc mass in the treated discharge.

- Selected flow: Zinc to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Validated total-zinc concentration multiplied by discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Easily released cyanide to freshwater (`wastewater_free_cyanide`)

Record measured easily released cyanide mass in the treated discharge.

- Selected flow: Easily released cyanide to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Validated easily released cyanide concentration multiplied by discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted solid primary-form product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge`
- Sources: `eu-jrc-iron-steel-bref-2013`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | Separately metered process chains | First avoid allocation by keeping ironmaking, casting, gas cleaning, slag processing, and wastewater treatment as separately measured unit processes. | `worldsteel-lci-methodology-2017` |
| `allocation_system_expansion` | Saleable blast-furnace gas and slag | Use system expansion for net exported gas or slag only when the displaced function, quality, market destination, and substitution ratio are documented. Report credits separately and test sensitivity when material. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recovery` | Internally reused gas, dust, sludge, slag, and rejected metal | Model internal recovery as an internal product or waste transfer; do not count it as both an external output and a new external input. | `worldsteel-lci-methodology-2017` |
| `allocation_energy_partition` | Electricity, steam, hot water, compressed air, and blast-air services | Partition shared energy services by metered delivered energy or another documented physical relationship; do not use mass allocation for energy services. | `worldsteel-lci-methodology-2017` |
| `allocation_fallback` | Study rules that prohibit system expansion | Use a documented physical relationship consistent with the co-product function; disclose the departure, factors, and sensitivity. Economic allocation is permitted only when no defensible physical relationship exists and prices, period, and geography are reported. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bf_materials` | `blast_furnace_ironmaking` | Burden, reductant, flux, oxygen, refractory, and taphole consumables | Weighbridge, feeder, stock, invoice, and issue records | opening_stock; receipts; transfers_in; closing_stock; transfers_out; measured_feed; product_grade | Reconcile stock movement and calibrated feeder or weighbridge totals | kg | Per shift or batch; aggregate monthly | Same reporting period as product output | All blast furnaces included in the dataset | Net consumption = opening + receipts + transfers in - closing - transfers out; reconcile with measured feed | Calibration records, stock reconciliation, material certificates, and variance investigation |
| `cp_bf_gases` | `blast_furnace_ironmaking` | Natural gas and raw top gas | Gas meters and composition analyses | normal_volume; temperature; pressure; moisture; lower_heating_value; destination | Calibrated flow metering at declared reference conditions | Nm3 | Continuous; aggregate monthly | Same reporting period as product output | All included furnaces and hot stoves | Sum valid interval volumes; gap-fill only by documented adjacent-period method | Meter calibration, data-availability report, and gas analysis |
| `cp_bf_electricity` | `blast_furnace_ironmaking` | Process electricity | Revenue or submeter data | imported_kWh; exported_kWh; meter_id; allocation_key | Calibrated metering and documented partition of shared loads | kWh | Continuous; aggregate monthly | Same reporting period as product output | Included furnace, cast house, and attributable hot-blast equipment | Net import minus export; shared load by delivered service | Meter calibration and reconciliation to site electricity balance |
| `cp_bf_water` | `blast_furnace_ironmaking` | Makeup water | Water meters and water-balance records | withdrawal_m3; supplier_return_m3; recycled_m3; meter_id | Boundary metering with recirculation recorded separately | m3 | Continuous or daily; aggregate monthly | Same reporting period as product output | Included furnace and cast-house water systems | Boundary withdrawal minus supplier return; exclude internal recirculation | Meter calibration and closed water-balance review |
| `cp_bf_outputs` | `blast_furnace_ironmaking` | Molten iron and molten slag | Ladle weights, level/volume records, and production logs | tap_id; molten_iron_kg; slag_kg; transfer_destination | Direct weighing where available; otherwise validated vessel-volume and density balance | kg | Every tap | Same reporting period as product output | Every tap supplying the declared product | Sum valid taps by product campaign and destination | Scale calibration, tap reconciliation, and mass-balance closure |
| `cp_bf_wastes` | `blast_furnace_ironmaking` | Cast-house dust | Waste container weights and destination records | container_id; gross_mass; tare_mass; moisture; destination | Weigh each shipment or container; report dry basis when used | kg | Each removal | Same reporting period as product output | All included cast-house collection systems | Sum net mass by destination; keep internal recovery separate | Scale records, waste manifests, and moisture tests |
| `cp_bf_air_emissions` | `blast_furnace_ironmaking` | Direct air elementary flows | Continuous monitors, stack tests, gas flow, operating logs, and carbon balance | concentration; flow_rate; duration; oxygen_reference; operating_state; fuel_carbon | Validated monitoring or representative sampling with measured flow; carbon balance for CO2 where justified | kg | Continuous or permit-compliant campaign | Representative of normal and abnormal operation in the reporting period | All material stacks and quantified capture points | Convert concentration and flow to mass by interval; aggregate valid intervals and disclose gaps | Calibration, laboratory QA/QC, detection limits, coverage, and uncertainty |
| `cp_cast_materials` | `pig_casting_and_cooling` | Molten input and rejected pieces | Ladle weights and casting production logs | molten_input_kg; reject_kg; return_destination; product_kind | Reconcile molten input, accepted product, rejects, and returns | kg | Every cast or batch | Same reporting period as product output | All casting lines producing the declared product | Sum by product campaign; do not double-count returned rejects | Scale calibration and casting mass-balance closure |
| `cp_cast_electricity` | `pig_casting_and_cooling` | Casting electricity | Submeter data | imported_kWh; exported_kWh; meter_id | Calibrated submetering | kWh | Continuous; aggregate monthly | Same reporting period as product output | Included casting and product-handling equipment | Net metered consumption | Meter calibration and site-balance reconciliation |
| `cp_cast_water` | `pig_casting_and_cooling` | Cooling-water makeup | Water meters | makeup_m3; recycled_m3; blowdown_m3 | Boundary metering with recirculation separate | m3 | Continuous or daily; aggregate monthly | Same reporting period as product output | Included casting water loop | Sum makeup only; reconcile with blowdown and losses | Meter calibration and water-balance closure |
| `cp_cast_product_output` | `pig_casting_and_cooling` | Accepted reference product | Calibrated product scales and quality-release records | product_mass_kg; product_kind; grade; chemistry; physical_form; release_status | Weigh accepted released product and link laboratory certificate | kg | Every lot | Same reporting period as all inventory rows | All accepted output represented by the dataset | Sum accepted lots only; normalize inventory to 1,000 kg | Scale calibration, lot traceability, and chemistry certificate |
| `cp_gas_cleaning_gases` | `blast_furnace_gas_cleaning` | Raw and cleaned blast-furnace gas | Gas meters, composition, and destination logs | raw_Nm3; clean_Nm3; temperature; pressure; lower_heating_value; destination | Calibrated inlet and outlet gas metering at common reference conditions | Nm3 | Continuous; aggregate monthly | Same reporting period as product output | Complete gas-cleaning train for included furnaces | Reconcile raw, clean, vented, and flared volumes | Meter calibration, gas analysis, and volume-balance closure |
| `cp_gas_cleaning_electricity` | `blast_furnace_gas_cleaning` | Gas-cleaning electricity | Submeter data | imported_kWh; exported_kWh; meter_id | Calibrated submetering | kWh | Continuous; aggregate monthly | Same reporting period as product output | Included cleaning train | Net metered consumption | Meter calibration and site-balance reconciliation |
| `cp_gas_cleaning_water` | `blast_furnace_gas_cleaning` | Scrubbing-water makeup and wastewater | Water meters | makeup_m3; recycled_m3; wastewater_m3; solids | Calibrated inlet and outlet metering | m3 | Continuous or daily; aggregate monthly | Same reporting period as product output | Wet cleaning train only | Reconcile makeup, recirculation, evaporation, sludge water, and wastewater | Meter calibration and water-balance closure |
| `cp_gas_cleaning_wastes` | `blast_furnace_gas_cleaning` | Coarse dust and sludge | Container weights, moisture tests, and destination records | gross_mass; tare_mass; moisture; solids; destination | Weigh each removal and declare wet or dry basis | kg | Each removal | Same reporting period as product output | Included dry and wet cleaning stages | Sum net mass by material and destination | Scale records, moisture tests, and waste manifests |
| `cp_slag_materials` | `blast_furnace_slag_processing` | Molten slag, products, and disposal slag | Ladle weights, belt scales, product dispatch, and waste manifests | input_kg; granulated_kg; air_cooled_kg; disposal_kg; moisture; destination | Reconcile processing input and all outputs by route | kg | Every batch or dispatch | Same reporting period as product output | All on-site slag routes | Sum by route and destination on a consistent moisture basis | Scale calibration, dispatch records, specification tests, and mass-balance closure |
| `cp_slag_water` | `blast_furnace_slag_processing` | Granulation-water makeup | Water meters | makeup_m3; recycled_m3; blowdown_m3 | Boundary metering with recirculation separate | m3 | Continuous or daily; aggregate monthly | Same reporting period as product output | Wet granulation route only | Sum makeup only and reconcile the loop | Meter calibration and water-balance closure |
| `cp_slag_electricity` | `blast_furnace_slag_processing` | Slag-processing electricity | Submeter data | imported_kWh; exported_kWh; meter_id | Calibrated submetering | kWh | Continuous; aggregate monthly | Same reporting period as product output | Included slag-processing equipment | Net metered consumption | Meter calibration and site-balance reconciliation |
| `cp_wastewater_feed` | `gas_scrubbing_wastewater_treatment` | Scrubber wastewater feed | Inlet meter and sampling | inflow_m3; suspended_solids; iron; lead; zinc; cyanide | Calibrated flow meter and representative composite sampling | m3 | Continuous flow; sampling per control plan | Same reporting period as product output | On-site treatment of included scrubber water | Sum valid inflow intervals and retain concentration records | Meter calibration, chain of custody, laboratory QA/QC, and detection limits |
| `cp_wastewater_electricity` | `gas_scrubbing_wastewater_treatment` | Treatment electricity | Submeter data | imported_kWh; exported_kWh; meter_id | Calibrated submetering | kWh | Continuous; aggregate monthly | Same reporting period as product output | Included treatment equipment | Net metered consumption | Meter calibration and site-balance reconciliation |
| `cp_wastewater_sludge` | `gas_scrubbing_wastewater_treatment` | Treatment sludge | Container weights, solids tests, and manifests | gross_mass; tare_mass; solids_fraction; destination | Weigh each removal and declare wet or dry basis | kg | Each removal | Same reporting period as product output | Included treatment system | Sum net mass by destination | Scale records, solids tests, and waste manifests |
| `cp_wastewater_discharge` | `gas_scrubbing_wastewater_treatment` | Water and pollutant discharge | Effluent meter and laboratory analyses | discharge_m3; suspended_solids; total_iron; total_lead; total_zinc; easily_released_cyanide | Calibrated flow meter with qualified grab or composite sampling | m3 and kg | Continuous flow; sampling per control plan | Representative of the reporting period | Every included discharge point | Water volume from meter; pollutant mass = concentration × matched discharge volume | Meter calibration, chain of custody, laboratory QA/QC, detection limits, and data coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized amount = reporting-period row amount / accepted solid product mass × 1,000 kg | row amount; accepted product mass | amount per 1,000 kg reference product |  |
| `calc_stock_consumption` | Stocked materials | net consumption = opening stock + receipts + transfers in - closing stock - transfers out | stock and movement records | net material input |  |
| `calc_gas_reference_condition` | Gas volumes | Convert measured volume to the declared normal condition using recorded absolute pressure and temperature; apply one consistent moisture basis. | measured volume; pressure; temperature; moisture basis | Nm3 gas |  |
| `calc_emission_mass` | Monitored air and water emissions | emitted mass = sum of matched concentration × flow × duration intervals, with unit conversion and detection-limit treatment documented | concentration; flow; interval duration | kg emitted substance | `eu-jrc-iron-steel-bref-2013` |
| `calc_coproduct_balance` | Gas and slag | Reconcile generated amount with internal use, sale, external transfer, flare or disposal; only net external co-product output enters system expansion. | generated; internal use; sale; transfer; flare; disposal | destination-resolved co-product quantities | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Link every accepted lot to product kind, chemistry or grade, carbon and manganese mass fractions, physical form, and release status. | Laboratory certificate and lot-release record |
| `dq_temporal_alignment` | All foreground rows | Use the same reporting period as accepted product output; explain shutdowns, relines, abnormal operation, and data gaps. | Reporting calendar, operating log, and coverage report |
| `dq_technology_geography` | Dataset scope | Declare furnace, hot-stove, fuel-injection, gas-cleaning, casting, slag, and wastewater technologies and the production geography. | Process description and site boundary diagram |
| `dq_meter_quality` | Metered material, energy, gas, and water | Use calibrated meters or scales; record calibration status and quantify any estimated share. | Calibration certificates and estimation log |
| `dq_mass_balance` | Ironmaking, casting, gas cleaning, slag, and wastewater | Close mass or volume balances at process level and investigate material unexplained residuals. | Signed balance worksheets and variance investigation |
| `dq_emission_quality` | Direct emissions | Report method, detection limits, sampling representativeness, data coverage, oxygen and moisture references, and uncertainty. | Monitoring QA/QC and laboratory reports |
| `dq_upstream_representativeness` | Linked upstream datasets | Prefer suppliers and electricity, fuel, ore, coke, flux, water, and treatment datasets representative of the source geography and technology; disclose generic substitutes. | Supplier identity and dataset-selection record |
| `dq_uuid_status` | Reference and inventory flows | Keep TianGong UUID cells empty until hybrid discovery and a public state-code-100 direct read confirm semantic identity, property, unit group, state, geography, technology, and comment. | UUID audit record in review workflow |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_product` | Reference flow | Fail completeness when product kind, chemistry or grade, carbon and manganese mass fractions, physical form, blast-furnace route, solid gate state, site, geography, or reporting period is missing. | `un-cpc-v3-structure-2025`; `eu-cn-2020-chapter-72` |
| `validation_process_coverage` | Process map | Require ironmaking, casting, and gas cleaning. Require slag and wastewater treatment when the declared site operates those processes inside the boundary. | `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017` |
| `validation_mass_balance` | Process inventory | Require accepted product, hot metal, slag, gas, wastes, and internal returns to reconcile with measured inputs within a disclosed site threshold; unresolved residuals require correction or explanation. | `worldsteel-lci-methodology-2017` |
| `validation_utility_separation` | Energy and water | Reject combined utility rows. Electricity, each fuel, each water stream, and recovered blast-furnace gas shall remain separate and use the declared measurement basis. | `worldsteel-lci-methodology-2017` |
| `validation_coproducts` | Gas and slag handling | Require destination-resolved quantities and allocation or system-expansion documentation; prohibit crediting internally reused output as an external avoided product. | `worldsteel-lci-methodology-2017` |
| `validation_emissions` | Direct air and water emissions | Require substance-specific rows, receiving compartment, monitored or calculated method, reporting-period coverage, and traceable raw concentration and flow records. | `eu-jrc-iron-steel-bref-2013` |
| `validation_uuid_and_ranges` | Publication readiness | Unresolved exact flow UUIDs and unresolved independent range evidence shall remain explicit. They do not block candidate authoring but must be reviewed before publication claims that depend on them. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared pig-iron or spiegeleisen product, route, site, geography, and reporting period |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Cradle-to-gate or gate-to-gate modelling of downstream iron and steel products when product chemistry, route, geography, allocation, and boundary are compatible |
| excluded_use | Direct representation of DRI, sponge iron, ferro-alloys other than spiegeleisen, crude or semi-finished steel, downstream cast articles, alternative ironmaking routes without an extension, or comparative assertions without compatible functional context |
| required_metadata | Product kind; grade and chemistry; carbon and manganese mass fractions; physical form; site; geography; reporting period; furnace and hot-stove technology; burden and injection route; gas, slag, and water routes; allocation method; upstream dataset identities; reference product UUID status |
| required_quality_disclosure | Primary-data coverage; meter calibration; estimation share; mass-balance closure; emission monitoring coverage and uncertainty; co-product destinations and substitution assumptions; generic upstream substitutions; unresolved UUIDs and range evidence |
| update_trigger | Material change in product chemistry or form, furnace or injection route, burden mix, energy supply, gas cleaning, casting, slag or water treatment, co-product destination, allocation method, site geography, or reporting-period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-02) | CPC 41111 classification identity and English title |
| `un-cpc-v11-chinese-2004` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-02) | Professional Chinese category terminology |
| `eu-cn-2020-chapter-72` | standard | European Commission, Commission Implementing Regulation (EU) 2020/1577, Combined Nomenclature Chapter 72 notes, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32020R1577 (retrieved 2026-09-02) | Chemical distinction between pig iron, spiegeleisen, ferro-alloys, and steel |
| `eu-jrc-iron-steel-bref-2013` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for Iron and Steel Production, EUR 25521 EN, 2013, doi:10.2791/97469, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf (retrieved 2026-09-02) | Blast-furnace process decomposition, inputs, outputs, gas cleaning, slag handling, water treatment, and monitoring |
| `worldsteel-lci-methodology-2017` | method_factor | World Steel Association, Life Cycle Inventory Methodology Report, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-02) | Declared unit, steelworks boundary, data collection, geographic and technology disclosure, and co-product system expansion |
