---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-decaffeinated-or-roasted
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Coffee, decaffeinated or roasted

## 1. Scope and Applicability

This PCR governs foreground manufacturing data for CPC 3.0 class 23911: decaffeinated green coffee, roasted whole-bean coffee, and roasted ground coffee, including roasted coffee that was decaffeinated before roasting. It applies from receipt of green coffee at the manufacturing site through preparation, any on-site decaffeination, roasting and cooling when applicable, grinding when applicable, and packing at the factory gate.

Cultivation, coffee-cherry processing, and transport to the factory remain upstream and shall be represented by linked datasets. Retail, preparation of a beverage, use, and end-of-life are outside the foreground boundary. Instant or soluble coffee, extracts, essences, concentrates, coffee preparations, non-decaffeinated green coffee as a sale product, substitutes, and husks or skins marketed as products are outside this PCR.

The dataset shall declare one product form and one route. A decaffeination route is selected only when decaffeination occurs in the foreground; water, carbon dioxide, ethyl acetate, dichloromethane, and coffee-oil routes are alternatives and shall never be presented as concurrent default inputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-decaffeinated-or-roasted` |
| classification_refs | CPC 3.0 `23911`, exact |
| covered_products | Decaffeinated green coffee; roasted whole-bean coffee; roasted ground coffee; roasted coffee decaffeinated before roasting |
| excluded_products | Non-decaffeinated green coffee as sale product; instant or soluble coffee; coffee extracts, essences, concentrates, and preparations; coffee substitutes; brewed beverages; husks and skins sold as products |
| representative_product | The declared CPC 23911 coffee product at the packing gate |
| production_route | Prepared green coffee; conditional decaffeination by exactly one declared route; conditional roasting and cooling; conditional grinding; packing |
| market_state | Net coffee product ready to leave the manufacturing site, with packaging inventoried separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | The declared decaffeinated green, roasted whole-bean, or roasted ground coffee product |
| How much | 1 kg net coffee product, excluding packaging mass |
| How well | Conforming to the declared product form, roast specification, caffeine claim, moisture basis, particle-size specification when ground, and release-quality specification |
| How long or cycle | One manufacturing reporting period, normalized to 1 kg of conforming net product output |
| reference_flow_link | `unresolved_reference_product_flow` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net coffee product at the manufacturing gate |
| Reference product flow | Coffee, decaffeinated or roasted |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; decaffeination status; decaffeination route when applicable; roast specification when applicable; species, blend, and origin declaration; moisture basis; ground particle-size specification when applicable; caffeine test method or claim basis; packaging configuration; site, geography, technology, and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and coffee-material transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to exactly 1 kg net conforming coffee product; packaging mass is excluded from the denominator. |
| `moisture_basis` | Green, decaffeinated, roasted, and ground coffee masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received mass and measured moisture; state any dry-matter conversion and do not mix moisture bases. |
| `utility_units` | Electricity, steam, purchased heat, fuels, process water, and liquid carbon dioxide | Native meter unit and SI-convertible unit | kWh, MJ, kg, or m3 as applicable | Preserve the raw meter unit, conversion factor, lower or higher heating-value basis for fuels, and the normalized result. |
| `packaging_mass` | Each packaging component | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each material component separately; do not include packaging mass in the 1 kg coffee reference amount. |
| `caffeine_result` | Products carrying a decaffeinated claim | Method result | declared laboratory unit | Record sampling basis, result, detection or quantification limit, and method identity; ISO 20481 may be used where applicable. |
| `quality_results` | Roasted moisture and ground particle size | Method result | declared laboratory unit | Keep method-specific results with lot identity; ISO 11817 and ISO 23134 may be used where applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Green coffee received at the manufacturing site, with supplier, origin, moisture, decaffeination status, and incoming mass declared |
| starting_condition_role | Upstream product input and foreground mass-balance starting point |
| product_classification_scope | CPC 3.0 `23911` only for the saleable reference product; green non-decaffeinated coffee is an upstream input rather than a covered sale product |
| recursive_input_rule | A purchased CPC 23911 intermediate, such as decaffeinated green coffee, is recorded once as a technosphere input with its upstream dataset and is not recursively reprocessed in the foreground unless the site actually performs the process |
| upstream_dataset_requirement | Supplier-specific or representative upstream datasets are required for green coffee, utilities, chemicals, packaging, and purchased treatment services; geography, technology, time, and data quality shall be disclosed |
| disclosure | Declare product form, included process modules, decaffeination route, direct-fuel combustion, purchased utilities, emission-control and wastewater-treatment boundary, allocation, and excluded activities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground package | Include all manufacturing operations from green-coffee receipt through packing that physically occur at the reporting site. | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |
| `boundary_upstream_inputs` | Purchased inputs | Link upstream datasets without duplicating their production inside the foreground. | `eu-pef-2021-2279` |
| `boundary_route_conditioning` | Decaffeination | Include exactly the declared route and its actual inputs, recovery loops, wastes, wastewater, and emissions; mark alternative-route rows not applicable. | `eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025` |
| `boundary_complete_inventory` | Water, energy, materials, waste gas, wastewater, and residues | Inventory each atomic exchange and its measurement or calculation basis; do not use aggregate utility, material, waste, or emission placeholders. | `eu-bat-fdm-2019-2031` |
| `boundary_packaging` | Packing | Include the actual packaging bill of materials and component scrap separately from net coffee mass. | `eu-jrc-fdm-bref-2019`; `cheron-bessou-coffee-lca-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `green_coffee_preparation` | Green coffee receiving, cleaning, sorting, and blending | `required` | Always | Establish incoming coffee identity and prepared lot mass | Per 1 kg net reference product |
| `decaffeination` | Green coffee decaffeination and redrying | `conditional` | On-site production of a decaffeinated product | Remove caffeine using exactly one declared route | Per 1 kg net reference product |
| `roasting_cooling` | Roasting and cooling | `conditional` | Roasted whole-bean or ground product | Roast, quench when used, cool, and separate silverskin | Per 1 kg net reference product |
| `grinding` | Grinding | `conditional` | Ground roasted product | Reduce roasted beans to declared particle-size specification | Per 1 kg net reference product |
| `packing` | Packing | `required` | Always | Produce the saleable reference product and record component packaging | Exactly 1 kg net reference product |
| `cleaning_effluent_management` | Equipment cleaning and on-site effluent handling | `conditional` | Water, cleaning chemicals, or on-site effluent handling are used | Record cleaning resources, wastewater, sludge, and any direct water release | Per 1 kg net reference product |

### Process: Green coffee receiving, cleaning, sorting, and blending (`green_coffee_preparation`)

#### Inputs

##### Product flows

###### Green coffee (`input_green_coffee`)

Record the weighed green coffee crossing the site boundary, adjusted only by the documented inventory-change rule.

- Selected flow: Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- Flow property / unit: Mass / kg
- Amount rule: Net received green-coffee mass attributable to the reporting product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_green_coffee_records`
- Sources: `un-cpc-3-2025`; `eu-jrc-fdm-bref-2019`

###### Electricity for preparation (`input_electricity_preparation`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for receiving, cleaning, sorting, conveying, and blending
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_green_coffee_records`
- Sources: `eu-bat-fdm-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared green coffee (`output_prepared_green_coffee`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Prepared green coffee
- Flow property / unit: Mass / kg
- Amount rule: Calculate from accepted incoming mass, separated wastes, dust losses, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_green_coffee_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Removed foreign matter (`output_foreign_matter_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Foreign matter from green coffee cleaning, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed foreign matter sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_green_coffee_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Rejected green coffee (`output_rejected_green_coffee_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Rejected green coffee beans, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected beans sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_green_coffee_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Collected preparation dust (`output_preparation_dust_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Coffee dust from preparation, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed dust captured by collection equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_green_coffee_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Preparation particulate matter to air (`output_preparation_pm_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated uncaptured preparation dust emitted to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`
- Sources: `eu-bat-fdm-2019-2031`

### Process: Green coffee decaffeination and redrying (`decaffeination`)

#### Inputs

##### Product flows

###### Prepared green coffee for decaffeination (`input_prepared_green_coffee_decaf`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Prepared green coffee
- Flow property / unit: Mass / kg
- Amount rule: Recorded prepared coffee charged to the selected decaffeination route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_material_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Process water for decaffeination (`input_process_water_decaf`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up and extraction water; applicable only to actual wetting, steaming, water-extraction, washing, or redrying operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_material_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025`

###### Steam for decaffeination (`input_steam_decaf`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased or transferred steam used for moistening, stripping, or redrying; exclude steam generated from fuel already allocated to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_material_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025`

###### Electricity for decaffeination (`input_electricity_decaf`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for the selected route, recovery equipment, pumps, and redrying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_material_energy_records`
- Sources: `eu-bat-fdm-2019-2031`; `shofinita-decaf-lca-2025`

###### Purchased heat for decaffeination (`input_heat_decaf`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Heat, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased heat used by decaffeination and redrying; applicable only when heat crosses the site boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_material_energy_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Natural gas for decaffeination (`input_natural_gas_decaf`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas combusted on site for decaffeination heat or steam, on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_material_energy_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Liquefied petroleum gas for decaffeination (`input_liquefied_petroleum_gas_decaf`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered liquefied petroleum gas combusted on site for decaffeination heat or steam, on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_material_energy_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Liquid carbon dioxide for carbon-dioxide decaffeination (`input_liquid_carbon_dioxide`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Carbon dioxide, liquid
- Flow property / unit: Mass / kg
- Amount rule: Net make-up carbon dioxide charged after recovered carbon dioxide is subtracted; applicable only to the declared carbon-dioxide route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_decaf_route_agent_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Ethyl acetate for ethyl-acetate decaffeination (`input_ethyl_acetate`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Ethyl acetate `7b656504-e685-4170-ab6a-56f948c994ee`
- Flow property / unit: Mass / kg
- Amount rule: Net make-up ethyl acetate charged after recovered inventory is subtracted; applicable only to the declared ethyl-acetate route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_decaf_route_agent_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-extraction-solvents-2009-32`; `shofinita-decaf-lca-2025`

###### Dichloromethane for dichloromethane decaffeination (`input_dichloromethane`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Dichloromethane `5829259b-4eae-4041-91ec-f2259b83e756`
- Flow property / unit: Mass / kg
- Amount rule: Net make-up dichloromethane charged after recovered inventory is subtracted; applicable only to the declared dichloromethane route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_decaf_route_agent_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-extraction-solvents-2009-32`; `shofinita-decaf-lca-2025`

###### Activated carbon for water decaffeination (`input_activated_carbon`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Activated carbon, food-processing grade
- Flow property / unit: Mass / kg
- Amount rule: Net activated carbon charged to caffeine adsorption; applicable only when used in the declared water route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_route_agent_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Coffee oil for coffee-oil decaffeination (`input_coffee_oil`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Coffee oil
- Flow property / unit: Mass / kg
- Amount rule: Net make-up coffee oil charged after recovery; applicable only to the declared coffee-oil route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_decaf_route_agent_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Decaffeinated green coffee (`output_decaffeinated_green_coffee`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Decaffeinated green coffee
- Flow property / unit: Mass / kg
- Amount rule: Calculate conforming redried product from route mass balance and measured moisture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_decaf_output_records`
- Sources: `eu-jrc-fdm-bref-2019`; `iso-20481-2008`

###### Recovered caffeine (`output_recovered_caffeine`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Caffeine, recovered
- Flow property / unit: Mass / kg
- Amount rule: Weighed recovered caffeine leaving as a separately managed product; otherwise record it in the applicable waste or wastewater row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_output_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Spent activated carbon (`output_spent_activated_carbon_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Spent activated carbon from decaffeination, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent carbon sent to the declared recovery or treatment route; water-route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_output_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent ethyl acetate (`output_spent_ethyl_acetate_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Spent ethyl acetate, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed ethyl-acetate residue or off-specification solvent sent to recovery or treatment; ethyl-acetate route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_output_records`
- Sources: `eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025`

###### Spent dichloromethane (`output_spent_dichloromethane_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Spent dichloromethane, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed dichloromethane residue or off-specification solvent sent to recovery or treatment; dichloromethane route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_output_records`
- Sources: `eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025`

###### Decaffeination wastewater (`output_decaf_wastewater`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Wastewater from coffee decaffeination, waste
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater transferred to on-site or off-site treatment; record water-route and solvent-route streams separately in source records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_output_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Decaffeination sludge (`output_decaf_sludge_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Sludge from coffee decaffeination effluent treatment, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge with dry-matter content and treatment route declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decaf_output_records`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

###### Carbon dioxide released by carbon-dioxide decaffeination (`output_decaf_carbon_dioxide_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Carbon-dioxide route inventory loss not assigned to recovered stock, product, or waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_decaf_emission_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Ethyl acetate to air (`output_ethyl_acetate_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Ethyl acetate, to air
- Flow property / unit: Mass / kg
- Amount rule: Ethyl-acetate route solvent loss to air from validated solvent balance and emission measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_decaf_emission_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### Dichloromethane to air (`output_dichloromethane_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Dichloromethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Dichloromethane-route solvent loss to air from validated solvent balance and emission measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_decaf_emission_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

### Process: Roasting and cooling (`roasting_cooling`)

#### Inputs

##### Product flows

###### Prepared regular green coffee for roasting (`input_prepared_green_coffee_roasting`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Prepared green coffee
- Flow property / unit: Mass / kg
- Amount rule: Recorded prepared non-decaffeinated green coffee charged to the roaster; not applicable to a decaffeinated roast lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Decaffeinated green coffee for roasting (`input_decaffeinated_green_coffee_roasting`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Decaffeinated green coffee
- Flow property / unit: Mass / kg
- Amount rule: Recorded decaffeinated green coffee charged to the roaster; not applicable to a regular roast lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Electricity for roasting and cooling (`input_electricity_roasting`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for roaster drives, fans, cyclones, controls, cooling, and emission control
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### Quench water for roasting (`input_process_water_roasting`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water sprayed for quenching; applicable only when the declared roaster uses water quenching
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Purchased heat for roasting (`input_heat_roasting`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Heat, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased heat delivered to roasting; applicable only when heat crosses the site boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_energy_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Natural gas for roasting (`input_natural_gas_roasting`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas combusted by the roaster or dedicated thermal oxidizer, on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### Liquefied petroleum gas for roasting (`input_liquefied_petroleum_gas_roasting`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered liquefied petroleum gas combusted by the roaster or dedicated thermal oxidizer, on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Roasted coffee beans (`output_roasted_coffee_beans`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Roasted coffee beans
- Flow property / unit: Mass / kg
- Amount rule: Calculate conforming cooled-bean mass from weighed output, rejects, silverskin, dust, moisture loss, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_roasting_output_records`
- Sources: `eu-jrc-fdm-bref-2019`; `iso-11817-1994`

##### Waste flows

###### Coffee silverskin (`output_coffee_silverskin_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Coffee silverskin, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed silverskin separated by cyclone or other collection equipment, with treatment route declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_output_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Rejected roasted coffee (`output_rejected_roasted_coffee_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Rejected roasted coffee beans, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed off-specification roasted beans sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_output_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Biogenic carbon dioxide from coffee roasting (`output_roasting_biogenic_carbon_dioxide_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or carbon-balance-calculated carbon dioxide released from coffee during roasting, separate from fuel combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_roasting_air_emission_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### Fossil carbon dioxide from roasting fuel (`output_roasting_fossil_carbon_dioxide_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from each recorded direct fuel input and documented carbon or emission factor; not applicable without on-site fossil-fuel combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_roasting_air_emission_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Carbon monoxide from roasting (`output_roasting_carbon_monoxide_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack emission normalized by the corresponding production output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_roasting_air_emission_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### Nitrogen dioxide from roasting (`output_roasting_nitrogen_dioxide_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured nitrogen-dioxide stack emission; if a method reports NOx, retain the method and conversion basis rather than relabelling the aggregate as nitrogen dioxide
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_roasting_air_emission_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### Ammonia from roasting (`output_roasting_ammonia_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack emission normalized by the corresponding production output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_roasting_air_emission_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### Roasting particulate matter to air (`output_roasting_pm_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured uncaptured particulate stack emission normalized by the corresponding production output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_roasting_air_emission_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

### Process: Grinding (`grinding`)

#### Inputs

##### Product flows

###### Roasted beans for grinding (`input_roasted_coffee_grinding`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Roasted coffee beans
- Flow property / unit: Mass / kg
- Amount rule: Recorded conforming roasted beans charged to grinding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Electricity for grinding (`input_electricity_grinding`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for grinders, classifiers, conveyors, and dust collection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-bat-fdm-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Ground roasted coffee (`output_ground_roasted_coffee`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Ground roasted coffee
- Flow property / unit: Mass / kg
- Amount rule: Calculate conforming ground-coffee output from weighed charge, rejects, captured dust, emitted dust, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`; `iso-23134-2022`

##### Waste flows

###### Grinding dust (`output_grinding_dust_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Coffee dust from grinding, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed coffee dust captured by grinding dust-control equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Rejected ground coffee (`output_rejected_ground_coffee_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Rejected ground roasted coffee, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed off-specification ground coffee sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Grinding particulate matter to air (`output_grinding_pm_air`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or dust-balance-calculated uncaptured particulate emitted to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`
- Sources: `eu-bat-fdm-2019-2031`

### Process: Packing (`packing`)

#### Inputs

##### Product flows

###### Decaffeinated green coffee for packing (`input_decaffeinated_green_coffee_packing`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Decaffeinated green coffee
- Flow property / unit: Mass / kg
- Amount rule: Recorded conforming product sent to packing; applicable only to decaffeinated green coffee
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: `un-cpc-3-2025`; `eu-jrc-fdm-bref-2019`

###### Roasted whole-bean coffee for packing (`input_roasted_whole_bean_packing`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Roasted coffee beans
- Flow property / unit: Mass / kg
- Amount rule: Recorded conforming product sent to packing; applicable only to roasted whole-bean coffee
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: `un-cpc-3-2025`; `eu-jrc-fdm-bref-2019`

###### Ground roasted coffee for packing (`input_ground_roasted_coffee_packing`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Ground roasted coffee
- Flow property / unit: Mass / kg
- Amount rule: Recorded conforming product sent to packing; applicable only to ground roasted coffee
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: `un-cpc-3-2025`; `eu-jrc-fdm-bref-2019`

###### Electricity for packing (`input_electricity_packing`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for filling, sealing, gas handling, coding, conveying, and pallet wrapping
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### Low-density polyethylene packaging film (`input_ldpe_packaging_film`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Net component mass issued to conforming packs after separately recorded scrap; applicable only when present in the bill of materials
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `eu-jrc-fdm-bref-2019`; `cheron-bessou-coffee-lca-2024`

###### Aluminium packaging foil (`input_aluminium_packaging_foil`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: Net component mass issued to conforming packs after separately recorded scrap; applicable only when present in the bill of materials
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `cheron-bessou-coffee-lca-2024`

###### Kraft paperboard carton (`input_kraft_paperboard_carton`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Kraft paperboard
- Flow property / unit: Mass / kg
- Amount rule: Net carton mass issued to conforming packs after separately recorded scrap; applicable only when present in the bill of materials
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `cheron-bessou-coffee-lca-2024`

###### Polypropylene degassing valve (`input_polypropylene_degassing_valve`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Polypropylene degassing valve
- Flow property / unit: Mass / kg
- Amount rule: Net valve mass fitted to conforming packs; applicable only when present in the bill of materials
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wooden pallet (`input_wooden_pallet`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Net non-returnable pallet mass or allocated loss of a returnable pallet; applicable only when the declared packing configuration uses pallets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `eu-pef-2021-2279`

###### Linear low-density polyethylene stretch film (`input_lldpe_stretch_film`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Net stretch-film mass used for conforming shipments; applicable only when present in the packing configuration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference coffee product (`output_reference_product`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Coffee, decaffeinated or roasted
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net conforming product; packaging mass is excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_packing_records`
- Sources: `un-cpc-3-2025`; `eu-pef-2021-2279`

##### Waste flows

###### Polyethylene packaging scrap (`output_polyethylene_packaging_scrap`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Polyethylene packaging scrap, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed low-density and linear low-density polyethylene scrap, retained as separate source records by polymer and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Aluminium packaging scrap (`output_aluminium_packaging_scrap`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Aluminium packaging scrap, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed aluminium foil scrap sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Paperboard packaging scrap (`output_paperboard_packaging_scrap`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Paperboard packaging scrap, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed paperboard scrap sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_records`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

### Process: Equipment cleaning and on-site effluent handling (`cleaning_effluent_management`)

#### Inputs

##### Product flows

###### Cleaning water (`input_cleaning_water`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water used for equipment and floor cleaning, excluding decaffeination and roaster-quench water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_effluent_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Electricity for effluent handling (`input_electricity_effluent`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for pumps, aeration, dewatering, and other on-site effluent equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_effluent_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Sodium hydroxide cleaning agent (`input_sodium_hydroxide_cleaning`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Net sodium hydroxide used for cleaning; applicable only when documented in the site cleaning recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_effluent_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Nitric acid cleaning agent (`input_nitric_acid_cleaning`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Net nitric acid used for cleaning; applicable only when documented in the site cleaning recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_effluent_records`
- Sources: `eu-bat-fdm-2019-2031`

##### Waste flows

###### Decaffeination wastewater received for on-site treatment (`input_decaf_wastewater_treatment`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Wastewater from coffee decaffeination, waste
- Flow property / unit: Volume / m3
- Amount rule: Metered decaffeination wastewater entering the on-site treatment system; applicable only when treated on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_effluent_records`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Equipment-cleaning wastewater (`output_combined_process_wastewater`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Wastewater from coffee equipment cleaning, waste
- Flow property / unit: Volume / m3
- Amount rule: Metered equipment-cleaning wastewater transferred to on-site or off-site treatment, excluding decaffeination wastewater and any separately inventoried direct release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_effluent_records`
- Sources: `eu-bat-fdm-2019-2031`

###### Effluent-treatment sludge (`output_effluent_sludge_waste`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Coffee-processing effluent sludge, waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge with dry-matter content and treatment destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_effluent_records`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

###### Treated wastewater to receiving water (`output_treated_wastewater_water`)

Record this single atomic exchange when it crosses the process boundary. Obtain its amount by the rule below and include it only when the declared product, route, and technology conditions apply.

- Selected flow: Water, treated, to surface water
- Flow property / unit: Volume / m3
- Amount rule: Metered final effluent discharged directly to receiving water; not applicable when all wastewater is transferred off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_effluent_records`
- Sources: `eu-bat-fdm-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared preparation, decaffeination, roasting, grinding, packing, utilities, and treatment | First subdivide by line, batch, meter, operating time, or other causal record so the declared product receives its measured share. | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | Residual shared processes | If subdivision is not feasible, use a documented physical causal relationship; only if no defensible physical relation exists may another documented relationship, such as economic value, be used. | `eu-pef-2021-2279` |
| `allocation_recovered_caffeine` | Recovered caffeine leaving as a product | Subdivide recovery where possible. Otherwise apply the hierarchy above; do not assign zero burden by default and disclose quantities, prices if used, and sensitivity. | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |
| `allocation_internal_recovery` | Recovered solvent, carbon dioxide, coffee oil, heat, or water reused internally | Model the internal loop once; record net make-up input, inventory change, wastes, and direct releases without creating a second product credit. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | Silverskin, rejected beans, dust, spent agents, wastewater, sludge, and packaging scrap | Record the treatment route. Do not grant an avoided-product credit inside the foreground unless the chosen downstream method explicitly requires it and all substitution assumptions are disclosed. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_green_coffee_records` | `green_coffee_preparation` | Coffee, electricity, prepared output, foreign matter, rejects, and collected dust | Weighbridge, lot, submeter, and waste records | lot id; supplier; origin; green mass; moisture; electricity; output mass; waste masses; opening and closing stock | Reconcile calibrated scales and meter totals to production lots | kg; kWh | Each lot and monthly reconciliation | Representative consecutive reporting period, normally at least 12 months | All preparation equipment serving the declared product | Sum records, subtract inventory change, and normalize by conforming net output | Calibration, invoices, lot sheets, stock records, and waste tickets |
| `cp_decaf_material_energy_records` | `decaffeination` | Coffee, water, steam, electricity, purchased heat, and fuels | Batch, meter, invoice, and stock records | route; batch; coffee mass and moisture; water; steam; electricity; heat; each fuel; heating-value basis; operating hours | Read route-specific meters or allocate documented shared meters causally | kg; m3; MJ; kWh | Each batch and monthly reconciliation | Same reporting period as reference output | All foreground decaffeination and redrying equipment | Sum by declared route; subtract inventory change; normalize by net output | Calibrations, invoices, batch sheets, and meter maps |
| `cp_decaf_route_agent_records` | `decaffeination` | Carbon dioxide, ethyl acetate, dichloromethane, activated carbon, and coffee oil | Purchase, charge, recovery, and inventory records | agent identity; route; purchased; charged; recovered; opening stock; closing stock; waste | Complete an agent-specific inventory balance for the selected route | kg | Each batch and monthly closure | Same reporting period as decaffeination output | Selected route only | Net make-up equals purchases plus opening stock minus closing stock and documented export | Supplier specification, tank or cylinder records, recovery logs, and stock checks |
| `cp_decaf_output_records` | `decaffeination` | Decaffeinated coffee, caffeine, spent agents, wastewater, and sludge | Scale, laboratory, flowmeter, and waste records | output mass; moisture; caffeine result; recovered caffeine; each spent agent; wastewater; sludge; dry matter; destination | Reconcile output and residue records to each route batch | kg; m3; laboratory unit | Each batch or shipment | Same reporting period as decaffeination inputs | Selected route and its on-site treatment | Sum each atomic output and normalize by conforming net product | Test reports, calibrated scales, flowmeters, and transfer notes |
| `cp_decaf_emission_records` | `decaffeination` | Route-specific carbon dioxide, ethyl acetate, and dichloromethane releases | Solvent or gas balance and emission test | route; make-up; recovered; product retention; waste; stock change; measured exhaust concentration; flow; time | Close each agent balance and reconcile with stack or workplace exhaust testing | kg; concentration; volume | Each campaign and legally required monitoring frequency | Representative operating states in the reporting period | All release points for selected route | Convert concentration and flow to mass and reconcile to inventory loss | Sampling plan, laboratory accreditation, instrument calibration, and balance closure |
| `cp_roasting_records` | `roasting_cooling` | Green-coffee charge and roasted output | Batch and scale records | lot; regular or decaf status; green mass and moisture; roasted mass and moisture; roast specification; opening and closing stock | Reconcile calibrated scales by roast lot | kg | Each batch and monthly reconciliation | Same reporting period as packed output | All roasters and coolers serving the declared product | Sum conforming lots and normalize by packed net output | Batch sheets, scale calibration, and moisture test reports |
| `cp_roasting_energy_records` | `roasting_cooling` | Electricity, quench water, purchased heat, natural gas, and LPG | Meter, invoice, and equipment records | meter readings; fuel; heating value; quench water; operating time; thermal oxidizer use | Use dedicated meters; otherwise allocate by documented causal operating parameter | kWh; MJ; m3 | Each batch or daily, reconciled monthly | Same reporting period as roasting output | Roaster, cooler, cyclone, and dedicated control equipment | Sum each atomic utility and normalize by conforming output | Meter calibration, invoices, and equipment logs |
| `cp_roasting_output_records` | `roasting_cooling` | Roasted beans, silverskin, and rejects | Scale and waste records | output mass; moisture; silverskin mass; reject mass; destinations; inventory change | Reconcile product and residue mass by campaign | kg | Each campaign and monthly reconciliation | Same reporting period as roasting inputs | All roasting output handling | Sum each atomic output and close the coffee mass balance | Scale calibration, waste tickets, and stock records |
| `cp_roasting_air_emission_records` | `roasting_cooling` | Biogenic and fossil carbon dioxide, carbon monoxide, nitrogen dioxide, ammonia, and particulate matter | Stack tests, continuous monitors, fuel records, and mass balances | source; pollutant; method; concentration; flow; time; fuel; factor; abatement status | Use pollutant-specific monitoring and keep coffee-process carbon separate from fuel carbon | kg; concentration; volume; MJ | At representative operating states and required monitoring frequency | Reporting-period technologies and controls | Each roaster, cooler, and thermal oxidizer stack | Convert to emitted mass and normalize by corresponding production | Sampling plan, accredited results, calibration, and operating log |
| `cp_air_emission_records` | `green_coffee_preparation`; `grinding` | Particulate matter | Dust-collection balance and emission measurement | captured dust; concentration; gas flow; operating time; production | Reconcile captured and emitted dust by equipment | kg; concentration; volume | Representative campaigns | Same reporting period as production | Preparation and grinding release points | Calculate emitted mass and normalize by corresponding output | Dust tickets, sampling report, and instrument calibration |
| `cp_grinding_records` | `grinding` | Roasted input, electricity, ground output, dust, rejects, and particle size | Batch, scale, submeter, and laboratory records | input; output; electricity; dust; rejects; stock change; particle-size result | Reconcile grinder lots and calibrated measurement records | kg; kWh; laboratory unit | Each lot and monthly reconciliation | Same reporting period as packed ground coffee | All grinders serving the declared product | Sum each atomic flow and normalize by conforming packed output | Scale and meter calibration, lot sheets, and test report |
| `cp_packing_records` | `packing` | Product inputs, electricity, and reference output | Filler, scale, submeter, and finished-goods records | product form; input mass; net packed mass; rejects; electricity; opening and closing stock | Reconcile legal-metrology or calibrated filler records with finished-goods inventory | kg; kWh | Each packing lot and monthly reconciliation | Same reporting period as all foreground modules | All lines packing the declared product | Normalize all flows to exactly 1 kg net conforming coffee | Calibration, batch release, and stock records |
| `cp_packaging_bom_records` | `packing` | Each packaging component and scrap | Bill of materials, purchase, issue, scrap, and stock records | component identity; polymer or material; unit mass; count; issued mass; scrap; returns; stock change | Calculate net component mass from audited component records | kg; count | Each packaging specification and monthly reconciliation | Specifications used during the reporting period | Primary, secondary, and tertiary packing in scope | Sum each component separately and normalize by net coffee output | Approved bill of materials, supplier specification, scale checks, and waste tickets |
| `cp_cleaning_effluent_records` | `cleaning_effluent_management` | Cleaning water, electricity, each chemical, wastewater, sludge, and direct water release | Meter, recipe, laboratory, and waste records | water; electricity; chemical identity and mass; influent; transferred wastewater; final effluent; pollutant results; sludge; dry matter | Reconcile water and material balances and keep off-site waste separate from direct release | kg; m3; kWh; laboratory unit | Each cleaning campaign and required discharge monitoring | Same reporting period as production | Cleaning and on-site treatment attributable to the declared product | Sum atomic flows, allocate shared treatment causally, and normalize by net output | Meter calibration, cleaning recipe, accredited analyses, permit records, and transfer notes |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground exchange | Normalized amount = reporting-period exchange × 1 kg / reporting-period conforming net coffee output. | Atomic exchange total; conforming net output | Amount per reference flow | `eu-pef-2021-2279` |
| `calc_coffee_mass_balance` | Preparation, decaffeination, roasting, grinding, and packing | Opening coffee stock + coffee input = closing coffee stock + conforming transfer or product + each coffee-bearing waste + measured or calculated direct coffee-material loss, all on declared moisture bases. | Coffee masses; moisture; stocks; wastes; emissions | Process closure and unexplained difference | `eu-jrc-fdm-bref-2019`; `cheron-bessou-coffee-lca-2024` |
| `calc_route_agent_balance` | Each selected decaffeination agent | Opening stock + purchases = closing stock + recovered internal stock + product retention + exported recovery + waste + direct release. | Agent-specific inventory and measurements | Net make-up and route-specific loss | `eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025` |
| `calc_shared_energy` | Shared meters | Allocate only the un-submetered remainder using documented causal operating time, throughput, or measured load; disclose the driver and test sensitivity. | Shared meter; submetered use; causal driver | Process-specific utility amount | `eu-bat-fdm-2019-2031`; `eu-pef-2021-2279` |
| `calc_stack_mass` | Each direct air emission | Emitted mass = pollutant concentration × dry or wet gas flow × operating duration, with reference conditions, moisture, and oxygen corrections preserved. | Pollutant result; gas flow; duration; corrections | Pollutant-specific emitted mass | `eu-bat-fdm-2019-2031` |
| `calc_packaging_mass` | Each packaging component | Net component mass = issued mass + opening stock − closing stock − separately weighed scrap − documented returns. | Component issues; stocks; scrap; returns | Component mass in conforming shipments | `eu-pef-2021-2279` |
| `calc_water_balance` | Decaffeination, cleaning, and effluent handling | Water input = water in product or evaporated + wastewater transferred + direct release + sludge water + inventory change; report the unexplained remainder. | Metered water and all water outputs | Water-balance closure | `eu-bat-fdm-2019-2031` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_primary_foreground` | All foreground processes | Use site primary records for mass, water, energy, chemicals, packaging, wastes, and direct emissions; secondary estimates shall not replace available primary records. | Meter, invoice, batch, laboratory, and waste documentation |
| `dq_representativeness` | Dataset | Assess technological, geographical, temporal, and precision or uncertainty representativeness for every material input and direct emission. | Documented data-quality rating and dataset metadata |
| `dq_completeness` | Inventory | Demonstrate that every included process and every atomic row was recorded, calculated, or marked not applicable with a route-specific reason. | Completeness matrix and mass, agent, energy, packaging, and water reconciliations |
| `dq_method_traceability` | Tests and calculations | Preserve method version, samples, raw units, conversion factors, allocation drivers, and calculation workbook or query lineage. | Laboratory reports and reproducible calculation record |
| `dq_no_unsupported_ranges` | Important inventory rows | Do not publish a range until at least two independent original sources support compatible boundary, unit, and normalization bases. | Source comparison record or open `unresolved_range_evidence` |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity | source_ids |
| --- | --- | --- | --- | --- |
| `validate_identity_scope` | Dataset identity | Product form is one covered CPC 23911 form and is not instant coffee, extract, preparation, beverage, substitute, or non-decaffeinated green coffee. | error | `un-cpc-3-2025` |
| `validate_reference_mass` | Reference flow | Reference output equals 1 kg net coffee with packaging excluded and all required qualifiers declared. | error | `eu-pef-2021-2279` |
| `validate_reference_uuid` | Reference flow | Release validation remains inconclusive until an exact public Tiangong reference-product UUID is resolved; an approximate flow shall not be substituted. | error |  |
| `validate_route_exclusivity` | Decaffeination | Exactly one route is declared when decaffeination is in scope; alternative route-agent rows are not applicable and solvent, carbon-dioxide, or water-route losses are not merged. | error | `eu-jrc-fdm-bref-2019` |
| `validate_process_applicability` | Process map | Roasting is included only for roasted products, grinding only for ground products, and decaffeination only when performed in the foreground. | error | `un-cpc-3-2025`; `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | Coffee processes | Coffee-material balances close within the facility's documented measurement uncertainty; unexplained differences are reported and reviewed. | error | `eu-jrc-fdm-bref-2019`; `cheron-bessou-coffee-lca-2024` |
| `validate_resource_inventory` | All processes | Water, steam, electricity, purchased heat, each fuel, each decaffeination agent, and each packaging component used are separate rows with source records. | error | `eu-bat-fdm-2019-2031` |
| `validate_waste_emissions` | All processes | Silverskin, rejected beans, dust, spent agents, wastewater, sludge, packaging scrap, and each direct emission are recorded separately when present. | error | `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031` |
| `validate_decaf_claim` | Decaffeinated product | A lot-linked caffeine test or legally applicable claim basis is present, with method and result traceable; ISO 20481 is an applicable analytical method. | error | `iso-20481-2008` |
| `validate_eu_dcm_residue` | EU-market dichloromethane route | When Directive 2009/32/EC applies, demonstrate the roasted-coffee dichloromethane residue limit of 2 mg/kg and applicable extraction-solvent requirements; otherwise document the governing jurisdiction. | error | `eu-extraction-solvents-2009-32` |
| `validate_product_quality` | Roasted and ground products | Declare moisture method for roasted ground coffee and particle-size method for ground coffee where applicable; ISO 11817 and ISO 23134 are acceptable method identities. | warning | `iso-11817-1994`; `iso-23134-2022` |
| `validate_data_quality` | Dataset | Completeness, temporal, geographical, technological, and precision assessments and all allocation choices are disclosed. | error | `eu-pef-2021-2279` |
| `validate_ranges` | Quantity ranges | No range may be added from one study, one point, incompatible bases, or equal lower and upper values. | error |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground manufacturing package for one declared CPC 3.0 23911 coffee product and route |
| downstream_use | Projection to process and lifecyclemodel datasets and linkage to upstream green coffee, utilities, chemicals, packaging, and treatment datasets |
| allowed_use | Product carbon footprint or LCA studies when product form, route, geography, technology, period, allocation, and data quality are compatible |
| excluded_use | Generic substitution for instant coffee, coffee beverage preparation, cultivation, primary cherry processing, or an undeclared decaffeination route |
| required_metadata | PCR id and version; product form; route; caffeine status and test; roast and grind specifications; moisture basis; reference-flow qualifiers; site and period; process inclusion; UUID status; allocation; packaging; upstream links |
| required_quality_disclosure | Primary-data share; meter and scale coverage; mass, solvent, energy, packaging, and water balance closure; data-quality ratings; not-applicable rows; uncertainty; unresolved UUID and range-evidence status |
| update_trigger | Product or route change; new decaffeination agent; equipment or control change; packaging specification change; material supplier or energy change; reporting-period refresh; regulatory or analytical-method change; exact reference UUID becoming available |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 structure and explanatory notes, class 23911, 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-24) | Category identity and exclusions |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries*, JRC118627, 2019, DOI: 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (official original text locally verified) | Coffee process sequence, alternative decaffeination routes, roasting, cooling, grinding, packing, silverskin, and emission identities; no quantity range inferred |
| `eu-bat-fdm-2019-2031` | `standard` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng (retrieved 2026-08-24) | Water, energy, raw-material, wastewater, waste-gas, residue, monitoring, and energy-management records |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-24) | Functional unit, completeness, company-specific foreground data, data quality, and allocation hierarchy |
| `eu-extraction-solvents-2009-32` | `standard` | Directive 2009/32/EC on extraction solvents, consolidated 2023-02-16, https://eur-lex.europa.eu/eli/dir/2009/32/2023-02-16/eng (retrieved 2026-08-24) | EU-conditional ethyl acetate, carbon dioxide, and dichloromethane use and roasted-coffee dichloromethane residue requirement |
| `iso-20481-2008` | `standard` | ISO 20481:2008, *Coffee and coffee products — Determination of the caffeine content using high performance liquid chromatography (HPLC) — Reference method*, https://www.iso.org/standard/34185.html (retrieved 2026-08-24) | Identity and applicability of caffeine testing method |
| `iso-11817-1994` | `standard` | ISO 11817:1994, *Roasted ground coffee — Determination of moisture content — Karl Fischer method (Reference method)*, https://www.iso.org/standard/20100.html (retrieved 2026-08-24) | Identity and applicability of roasted-ground-coffee moisture method |
| `iso-23134-2022` | `standard` | ISO 23134:2022, *Coffee and coffee products — Determination of particle size of ground roasted coffee — Horizontal sieving motion method using circular brushes*, https://www.iso.org/standard/74672.html (retrieved 2026-08-24) | Identity and applicability of ground-coffee particle-size method |
| `cheron-bessou-coffee-lca-2024` | `literature` | Chéron-Bessou et al., *Unravelling life cycle impacts of coffee: Why do results differ so much among studies?*, Sustainable Production and Consumption, 2024, DOI: 10.1016/j.spc.2024.04.005, https://researchonline.jcu.edu.au/85847/1/85847.pdf (full text verified 2026-08-24) | Functional-unit qualifiers, primary data and mass-balance expectations, secondary processing and packaging scope, and variability caution; no quantity range inferred |
| `shofinita-decaf-lca-2025` | `literature` | Shofinita et al., *Life Cycle Assessment of Decaffeinated Coffee Beans Production*, Journal of Engineering and Technological Sciences 57(3), 2025, DOI: 10.5614/j.eng.technol.sci.2025.57.3.3, https://jets.itb.ac.id/jets/article/download/115/182 (full text verified 2026-08-24) | Ethyl-acetate and dichloromethane route decomposition, steaming, extraction, stripping, drying, electricity, and steam or heat; single-study quantities not used as ranges |
