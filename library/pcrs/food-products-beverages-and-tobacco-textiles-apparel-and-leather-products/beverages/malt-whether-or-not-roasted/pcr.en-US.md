---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.malt-whether-or-not-roasted
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Malt, whether or not roasted

## 1. Scope and Applicability

This PCR applies to factory-gate production of malt made by controlled germination of food- or brewing-grade cereal grain and subsequent drying, with optional roasting, caramelisation, smoking, blending, and packing. It covers ordinary kilned malt and roasted malt, including pale, coloured, crystal/caramel, smoked, and light- or dark-roasted malt made from barley, wheat, rye, oats, sorghum, or another explicitly declared cereal species.

The foreground boundary starts with cereal grain received at the maltings and ends with net saleable malt released in bulk or declared packaging. It includes receiving, cleaning and grading, steeping, germination, kilning or a declared direct-roasting route, conditional roasting, cooling, deculming, blending, storage, packing, sanitation, utilities, wastewater, residues, wastes, and direct emissions. Cereal cultivation and inbound transport are upstream. Brewing, distilling, manufacture of malt extract or malt flour, food manufacture using malt, distribution, use, and end of life are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.malt-whether-or-not-roasted |
| classification_refs | CPC 3.0: 24320 Malt, whether or not roasted (`exact`) |
| covered_products | Dried cereal malt and roasted cereal malt; pale, coloured, crystal/caramel, smoked, and specialty malt when made by controlled cereal germination and declared thermal treatment |
| excluded_products | Unmalted roasted grain; malt extract, malt syrup, maltose syrup, malt flour, beer, spirits, prepared foods, cereal cultivation, and generic malting services |
| representative_product | Cereal malt, dried or roasted, at the maltings dispatch gate |
| production_route | Declared cereal receipt and cleaning; steeping; germination; kilning or declared direct-roasting route; conditional roasting/smoking; cooling, deculming, blending, storage, and dispatch |
| market_state | Dry, food- or brewing-grade whole-kernel malt, bulk or packaged, with cereal species, malt style, colour, moisture, treatment route, and dispatch form declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of dry cereal malt, whether ordinarily kilned or roasted, at the maltings dispatch gate |
| How much | 1,000 kg net saleable malt, excluding packaging |
| How well | Meets the declared cereal identity, malt style, moisture, colour, extract or intended-use specification, food-safety release criteria, and packaging integrity |
| How long or cycle | One completed production lot through release; storage duration and shelf life are declared qualifiers |
| reference_flow_link | `cereal_malt_dried_or_roasted_at_maltings_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net product |
| Reference product flow | Cereal malt, dried or roasted |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cereal species and variety; grain origin and crop year; ordinary-kilned, crystal/caramel, roasted, or smoked route; steeping and germination conditions; kilning and roasting time-temperature-moisture profile; finished moisture and colour; extract or intended-use specification where applicable; rootlet and screening destination; bulk or packaging configuration; geography; technology; data period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference malt and mass-normalised exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalise to 1,000 kg net released malt; exclude packaging and keep input grain, intermediate green malt, rootlets, screenings, dust, and losses on separately measured as-received and dry-matter bases. |
| `malt_moisture_basis` | Grain and malt mass balance | Mass and moisture fraction | kg and % | Retain as-received mass and measured moisture for incoming grain, green malt, kilned/roasted malt, and saleable output; use the malt-specific moisture method declared by the producer. |
| `water_separation` | Steeping, germination spray, cleaning, and utility water | Mass or volume | kg or m3 | Meter each use separately; preserve raw volume and density assumptions when converted to mass. |
| `energy_separation` | Electricity, steam, purchased heat, and fuels | Energy | kWh or MJ | Keep electricity, steam, purchased heat, natural gas, gas oil, and fuel oil as separate exchanges; retain lower- or higher-heating-value basis and conversion factors. |
| `refrigerant_mass` | Each refrigerant charge and loss | Mass | kg | Record each refrigerant separately by chemical identity; calculate atmospheric loss from stock reconciliation and service records. |
| `packaging_mass` | Each packaging component | Mass | kg | Record paper, polyethylene, polypropylene, corrugated board, stretch film, and wood pallets as separate placed-on-market masses. |
| `wastewater_load` | Each direct water emission | Mass | kg | Calculate COD, total nitrogen, total phosphorus, and total suspended solids separately from matched discharge volume and concentration records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Food- or brewing-grade cereal grain received at the maltings gate, with species, variety, crop year, origin, moisture, and upstream coverage declared |
| starting_condition_role | Foreground entry point for grain cleaning, steeping, germination, thermal treatment, finishing, and dispatch |
| product_classification_scope | Dry cereal malt whether ordinarily kilned or roasted; excludes unmalted roasted grain and further-processed malt extracts, syrups, flours, beverages, and foods |
| recursive_input_rule | Purchased green, kilned, or roasted malt used for further treatment is recorded once as an upstream product input and is not recursively reconstructed inside the receiving process. |
| upstream_dataset_requirement | Link each cereal species, electricity supply, steam, purchased heat, fuel, refrigerant, chemical, packaging material, inbound transport, and off-site treatment service to a representative upstream dataset. |
| disclosure | Declare cereal and malt style, starting grain state, route, thermal profiles, site and period, utilities, cleaning chemicals, refrigerants, co-products, wastes, wastewater destination, direct emissions, packaging, allocation, and outsourced steps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_malting` | maltings_foreground | Include cleaning and grading, steeping, germination, kilning or declared alternative thermal route, conditional roasting, cooling, deculming, storage/blending, dispatch preparation, sanitation, utilities, residues, wastewater, and direct emissions. | `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024` |
| `boundary_roasted_route` | roasted_and_crystal_malt | Declare whether the roaster receives green malt or previously kilned malt and include the actual saccharification, roasting, cooling, aspiration, and emission-control operations. | `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021` |
| `boundary_food_hygiene` | food_contact_operations | Apply documented good hygiene practices and hazard-based controls to grain receipt, process water, sanitation, pest control, storage, and product release. | `fao-who-cxc-1-1969` |
| `boundary_upstream_downstream` | lifecycle_model | Keep cultivation and incoming transport upstream and brewing, distilling, further food processing, distribution, use, and end of life downstream; connect them only when the study expands beyond the maltings gate. | `unsd-cpc-v3-2025`; `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `base_malt_production` | Grain receiving, cleaning, steeping, germination, and drying | `required` | All products; direct-roasted crystal malt declares that roasting replaces final kilning | Converts declared cereal grain into stable base or green malt | 1,000 kg net saleable malt |
| `roasting` | Roasting, caramelisation, or smoking | `conditional` | Included for roasted, crystal/caramel, coloured, or smoked malt | Produces declared specialty colour and flavour | 1,000 kg net saleable malt |
| `finishing_dispatch` | Cooling, deculming, blending, storage, packing, and dispatch | `required` | All products; packaging cards apply only to actual dispatch configuration | Produces released bulk or packaged malt | 1,000 kg net saleable malt |
| `sanitation_wastewater` | Cleaning, disinfection, and wastewater handling | `required` | Include attributable operations and allocate shared systems transparently | Records sanitation resources and treatment outputs | 1,000 kg net saleable malt |

### Process: Grain receiving, cleaning, steeping, germination, and drying (`base_malt_production`)

#### Inputs

##### Product flows

###### Barley grain (`barley_grain_input`)

Barley grain is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Barley grain
- Applicability: Record only for a barley-malt lot.
- Flow property / unit: Mass / kg
- Amount rule: Net accepted barley mass from calibrated receiving scales
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### Wheat grain (`wheat_grain_input`)

Wheat grain is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Wheat grain
- Applicability: Record only for a wheat-malt lot.
- Flow property / unit: Mass / kg
- Amount rule: Net accepted wheat mass from calibrated receiving scales
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-jrc-fdm-bref-2019`; `bauer-malting-parameters-2022`

###### Rye grain (`rye_grain_input`)

Rye grain is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Rye grain
- Applicability: Record only for a rye-malt lot.
- Flow property / unit: Mass / kg
- Amount rule: Net accepted rye mass from calibrated receiving scales
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-jrc-fdm-bref-2019`

###### Oat grain (`oat_grain_input`)

Oat grain is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Oat grain
- Applicability: Record only for an oat-malt lot.
- Flow property / unit: Mass / kg
- Amount rule: Net accepted oat mass from calibrated receiving scales
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sorghum grain (`sorghum_grain_input`)

Sorghum grain is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Sorghum grain
- Applicability: Record only for a sorghum-malt lot.
- Flow property / unit: Mass / kg
- Amount rule: Net accepted sorghum mass from calibrated receiving scales
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-jrc-fdm-bref-2019`

###### Steeping water (`steeping_water`)

Steeping water is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: Metered water charged to wet steeps and germination sprays
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### Electricity for the malting line (`base_malt_electricity`)

Electricity for the malting line is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or sub-metered electricity for handling, aeration, turning, pumps, fans, controls, and refrigeration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### Purchased steam for kilning (`kilning_steam`)

Purchased steam for kilning is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam delivered to kiln heat exchangers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Purchased heat for kilning (`kilning_purchased_heat`)

Purchased heat for kilning is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: Metered non-steam heat delivered to the kiln
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Natural gas combusted for kilning (`kilning_natural_gas`)

Natural gas combusted for kilning is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### Gas oil combusted for kilning (`kilning_gas_oil`)

Gas oil combusted for kilning is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Gas oil
- Flow property / unit: Energy / MJ
- Amount rule: Metered gas-oil use on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Fuel oil combusted for kilning (`kilning_fuel_oil`)

Fuel oil combusted for kilning is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Fuel oil
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel-oil use on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Ammonia refrigerant makeup (`ammonia_makeup`)

Ammonia refrigerant makeup is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Ammonia
- Flow property / unit: Mass / kg
- Amount rule: Makeup mass assigned from refrigeration service and stock records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

###### Refrigerant R134a makeup (`r134a_makeup`)

Refrigerant R134a makeup is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Makeup mass assigned from refrigeration service and stock records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

###### Refrigerant R404A makeup (`r404a_makeup`)

Refrigerant R404A makeup is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass / kg
- Amount rule: Makeup mass assigned from refrigeration service and stock records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

#### Outputs

##### Product flows

###### Kilned or green malt transferred (`base_malt_output`)

Kilned or green malt transferred is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Cereal malt, declared intermediate state
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass with moisture and route state recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

##### Waste flows

###### Cereal screenings (`cereal_screenings`)

Cereal screenings is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Cereal screenings
- Flow property / unit: Mass / kg
- Amount rule: Measured screenings mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Collected cereal dust (`collected_cereal_dust`)

Collected cereal dust is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Cereal dust waste
- Flow property / unit: Mass / kg
- Amount rule: Measured dust removed from aspiration and filtration equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent steep water (`spent_steep_water`)

Spent steep water is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Malting steep wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

##### Elementary flows

###### Fossil carbon dioxide from kiln combustion (`kiln_fossil_co2`)

Fossil carbon dioxide from kiln combustion is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately for each fuel from measured use and an approved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Biogenic carbon dioxide from germination (`germination_biogenic_co2`)

Biogenic carbon dioxide from germination is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or carbon-mass-balance estimate of grain respiration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### Nitrogen oxides from kiln combustion (`kiln_nox`)

Nitrogen oxides from kiln combustion is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sulfur dioxide from kiln combustion (`kiln_so2`)

Sulfur dioxide from kiln combustion is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or sulfur-content calculation for the actual fuel
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Particulate matter from handling and kilning (`base_malt_pm`)

Particulate matter from handling and kilning is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Measured channelled and estimated fugitive particulate mass after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Non-methane volatile organic compounds from germination and kilning (`base_malt_nmvoc`)

Non-methane volatile organic compounds from germination and kilning is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured channelled mass or documented estimate for included vents
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Ammonia refrigerant released to air (`ammonia_to_air`)

Ammonia refrigerant released to air is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant loss from stock reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

###### Refrigerant R134a released to air (`r134a_to_air`)

Refrigerant R134a released to air is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Refrigerant R134a to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant loss from stock reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

###### Refrigerant R404A released to air (`r404a_to_air`)

Refrigerant R404A released to air is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant loss from stock reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

### Process: Roasting, caramelisation, or smoking (`roasting`)

#### Inputs

##### Product flows

###### Green malt for crystal-malt roasting (`green_malt_to_roaster`)

Green malt for crystal-malt roasting is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Green cereal malt
- Applicability: Crystal/caramel route only.
- Flow property / unit: Mass / kg
- Amount rule: Measured green-malt charge with moisture recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_batch_records`
- Sources: `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

###### Kilned malt for dry roasting (`kilned_malt_to_roaster`)

Kilned malt for dry roasting is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Kilned cereal malt
- Applicability: Dry roasted-malt route only.
- Flow property / unit: Mass / kg
- Amount rule: Measured kilned-malt charge with moisture recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_batch_records`
- Sources: `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

###### Electricity for roasting (`roasting_electricity`)

Electricity for roasting is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for roaster drives, fans, aspiration, and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Natural gas combusted for roasting (`roasting_natural_gas`)

Natural gas combusted for roasting is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

#### Outputs

##### Product flows

###### Roasted malt (`roasted_malt_output`)

Roasted malt is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Roasted cereal malt
- Flow property / unit: Mass / kg
- Amount rule: Measured cooled output with moisture, colour, and roast profile recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_roasting_batch_records`
- Sources: `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

##### Elementary flows

###### Fossil carbon dioxide from roasting (`roasting_fossil_co2`)

Fossil carbon dioxide from roasting is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured roasting fuel by fuel type
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Particulate matter from roasting (`roasting_pm`)

Particulate matter from roasting is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated discharge after aspiration controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Non-methane volatile organic compounds from roasting (`roasting_nmvoc`)

Non-methane volatile organic compounds from roasting is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured channelled discharge or documented estimate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

### Process: Cooling, deculming, blending, storage, packing, and dispatch (`finishing_dispatch`)

#### Inputs

##### Product flows

###### Electricity for finishing and dispatch (`finishing_electricity`)

Electricity for finishing and dispatch is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for cooling, deculming, conveying, blending, storage ventilation, and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `evans-malting-efficiency-2024`

###### Paper sack (`paper_sack`)

Paper sack is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Paper sack
- Flow property / unit: Mass / kg
- Amount rule: Placed-on-market paper-sack mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Polyethylene liner (`polyethylene_liner`)

Polyethylene liner is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Placed-on-market liner mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Polypropylene flexible intermediate bulk container (`polypropylene_fibc`)

Polypropylene flexible intermediate bulk container is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Polypropylene flexible intermediate bulk container
- Flow property / unit: Mass / kg
- Amount rule: Placed-on-market FIBC mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated cardboard (`corrugated_cardboard`)

Corrugated cardboard is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Corrugated cardboard
- Flow property / unit: Mass / kg
- Amount rule: Placed-on-market corrugated-board mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Polyethylene stretch film (`polyethylene_stretch_film`)

Polyethylene stretch film is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Placed-on-market stretch-film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Wood pallet (`wood_pallet`)

Wood pallet is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Net new or loss-replacement pallet mass assigned to dispatched malt
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

#### Outputs

##### Product flows

###### Saleable cereal malt (`saleable_malt`)

Saleable cereal malt is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Cereal malt, dried or roasted
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg released net malt after rootlet removal, dust and reject losses
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

###### Malt rootlets sold as feed material (`malt_rootlets`)

Malt rootlets sold as feed material is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Malt rootlets
- Flow property / unit: Mass / kg
- Amount rule: Measured rootlet mass by destination; classify as co-product only when transferred for beneficial use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `eu-jrc-fdm-bref-2019`; `habschied-malting-byproducts-2020`

##### Waste flows

###### Off-specification malt (`off_spec_malt`)

Off-specification malt is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Off-specification cereal malt waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected malt mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:

###### Collected malt dust (`collected_malt_dust`)

Collected malt dust is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Malt dust waste
- Flow property / unit: Mass / kg
- Amount rule: Measured dust removed during deculming, conveying, blending, and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

##### Elementary flows

###### Particulate matter from finishing (`finishing_pm`)

Particulate matter from finishing is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Measured channelled and estimated fugitive mass after dust controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Cleaning, disinfection, and wastewater handling (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

Sanitation water is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: Metered water used for cleaning and disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `fao-who-cxc-1-1969`

###### Sodium hydroxide cleaner (`sodium_hydroxide_cleaner`)

Sodium hydroxide cleaner is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass from issued formulation and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-who-cxc-1-1969`

###### Nitric acid cleaner (`nitric_acid_cleaner`)

Nitric acid cleaner is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Active nitric-acid mass from issued formulation and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-who-cxc-1-1969`

###### Peracetic acid disinfectant (`peracetic_acid_disinfectant`)

Peracetic acid disinfectant is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Active peracetic-acid mass from issued formulation and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-who-cxc-1-1969`

###### Sodium hypochlorite disinfectant (`sodium_hypochlorite_disinfectant`)

Sodium hypochlorite disinfectant is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hypochlorite mass from issued formulation and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-who-cxc-1-1969`

###### Electricity for wastewater treatment (`wastewater_electricity`)

Electricity for wastewater treatment is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity for attributable treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

#### Outputs

##### Waste flows

###### Maltings wastewater (`maltings_wastewater`)

Maltings wastewater is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Maltings wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered wastewater sent to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wastewater treatment sludge (`wastewater_sludge`)

Wastewater treatment sludge is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet and dry sludge mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Empty chemical container waste (`chemical_container_waste`)

Empty chemical container waste is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Empty chemical container waste
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded container mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `fao-who-cxc-1-1969`

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

Chemical oxygen demand to water is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by COD concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total nitrogen to water (`total_nitrogen_to_water`)

Total nitrogen to water is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total phosphorus to water (`total_phosphorus_to_water`)

Total phosphorus to water is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total suspended solids to water (`tss_to_water`)

Total suspended solids to water is recorded as a separate atomic exchange at this process boundary; determine its quantity with the rule below.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by total-suspended-solids concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable malt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | process_subdivision | Avoid allocation by sub-metering route-specific batches, utilities, roasting, packaging, wastewater, and emissions. | `eu-pef-method-2021` |
| `allocation_rootlets` | rootlets_and_screenings | Treat rootlets or screenings as co-products only when they leave for a documented beneficial use; first apply system expansion or a justified subdivision. If allocation remains, use a disclosed physical dry-mass relationship when it reflects causality; otherwise use economic allocation with period-matched prices and sensitivity analysis. | `eu-pef-method-2021`; `habschied-malting-byproducts-2020` |
| `allocation_waste` | wastes_and_treatment | Do not allocate burdens to discarded dust, sludge, off-spec malt, or wastewater; assign collection and treatment burdens to malt production until the waste or recovery system boundary is reached. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `base_malt_production`; `finishing_dispatch` | cereal inputs, intermediate malt, saleable malt | weighbridge, batch and laboratory records | species; variety; lot; wet mass; moisture; transfer/output mass; rejects | calibrated scales and malt-specific moisture test | kg; % | each lot/batch | representative 12 months or full campaign | all included lines | moisture-correct only when dry-matter comparison is required; normalise to released malt | calibration, laboratory method, reconciliation |
| `cp_route_conditions` | `base_malt_production`; `roasting` | steeping, germination, kilning, roasting | control-system historian and batch sheet | wet/dry periods; temperature; grain moisture; airflow; duration; kiln/roast profile; colour | direct sensors and batch records | h; °C; %; airflow unit | continuous plus batch release | every represented batch | each vessel/kiln/roaster | retain profiles and mass-weight batches | sensor calibration, release record |
| `cp_water_records` | all | steeping and sanitation water | meter and batch ticket | meter start/end; purpose; batch; reuse; discharge | calibrated sub-meter or batch measurement | kg or m3 | each batch/daily | representative period | each use area | sum by purpose; do not net reused water without both transfers | meter calibration and water-quality record |
| `cp_energy_records` | all | electricity, steam, purchased heat | utility meters and invoices | carrier; meter; quantity; unit; pressure/temperature for steam/heat | calibrated meter and invoice reconciliation | kWh or MJ | continuous/monthly | representative period | all included equipment | allocate shared use by defensible operating driver | meter checks and invoice reconciliation |
| `cp_fuel_records` | `base_malt_production`; `roasting` | each fuel | meter, tank and invoice | fuel identity; quantity; density; heating-value basis; batch/period | calibrated meter or stock balance | kg, m3, MJ | daily/monthly | representative period | each combustion unit | convert each fuel separately to MJ | invoice, stock and heating-value evidence |
| `cp_refrigerant_records` | `base_malt_production` | each refrigerant | equipment and service log | chemical; charge; additions; recovery; disposal; leak event | annual stock reconciliation | kg | each service event/annual | representative period | each circuit | loss = additions + opening stock - recovered - closing stock | signed service logs |
| `cp_roasting_batch_records` | `roasting` | roasted-route materials and output | batch and laboratory record | input state/mass/moisture; time-temperature profile; output mass/moisture/colour | scales, historian and EBC/declared tests | kg; %; °C; h; colour unit | each batch | all represented roast batches | each roaster and specialty-malt line | mass-weight by saleable output | test method and batch release |
| `cp_packaging_records` | `finishing_dispatch` | each packaging component | bill of materials and issue record | component; material; unit mass; count; reuse/loss | supplier mass plus line count | kg | each SKU/batch | representative period | all dispatch forms | component mass × net count, with reuse separately modelled | supplier specification and count reconciliation |
| `cp_chemical_records` | `sanitation_wastewater` | each cleaner/disinfectant | issue, concentration and sanitation log | product; active ingredient; concentration; issued mass; returned mass; use | inventory reconciliation | kg active substance | each sanitation event | representative period | all included systems | active mass = net formulation mass × active fraction | SDS/specification and issue log |
| `cp_residue_records` | all | each co-product and waste | scales and transfer notes | residue identity; wet/dry mass; moisture; destination; revenue/status | calibrated scale and destination record | kg | each transfer | representative period | all included lines | aggregate separately by identity and destination | weigh ticket and receiver evidence |
| `cp_wastewater_records` | `base_malt_production`; `sanitation_wastewater` | wastewater and each pollutant | flow meter and matched sample | volume; COD; TN; TP; TSS; sampling time; destination | continuous flow plus representative composite sample | m3; mg/L; kg | continuous and permit/sample frequency | representative period | each outfall | load = matched volume × concentration | laboratory accreditation and flow calibration |
| `cp_air_emissions` | `base_malt_production`; `roasting`; `finishing_dispatch` | each direct air emission | stack test, CEMS, dust capture and fuel record | source; operating time; flow; concentration; fuel; control efficiency | direct measurement preferred; approved factor otherwise | kg | permit frequency and each represented fuel/route | representative period | each source | calculate each pollutant separately | test report, factor reference and operating log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise` | all exchanges | exchange per reference flow = period exchange × 1,000 / released net malt mass | period exchange; released malt mass | exchange per 1,000 kg malt | `mass-balance-identity` |
| `calc_dry_matter` | grain and malt | dry matter = as-received mass × (1 - moisture fraction) | mass; moisture | kg dry matter | `mass-balance-identity`; `ebc-analytica-malt` |
| `calc_refrigerant_loss` | each refrigerant | loss = opening stock + additions - recovered - closing stock | stock and service records | kg chemical released | `mass-balance-identity` |
| `calc_water_pollutant` | each water pollutant | load = matched discharge volume × concentration with unit conversion | m3; mg/L | kg pollutant | `eu-jrc-fdm-bref-2019` |
| `calc_combustion` | each fuel and pollutant | emission = measured fuel activity × pollutant-specific approved factor when direct measurement is unavailable | fuel activity; factor | kg pollutant | `eu-jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Preserve cereal species/variety, crop year, malt style, thermal route, moisture, colour, and dispatch form; do not average ordinary and roasted routes without disclosed production weighting. | batch release and product specification |
| `dq_completeness` | foreground inventory | Reconcile grain, water, dry matter, saleable malt, rootlets, screenings, dust, wastewater, sludge, and other losses; keep every utility, fuel, refrigerant, chemical, packaging material, waste, and emission atomic. | signed balances and exception log |
| `dq_temporal` | all data | Use a representative 12-month period or complete campaign and explain shutdowns, abnormal batches, and product-mix changes. | dated meters, invoices and batch records |
| `dq_hygiene` | product-contact operations | Retain water suitability, sanitation verification, pest control, hazard analysis, corrective action, and release evidence. | GHP/HACCP records |
| `dq_method` | malt quality | Declare the method used for moisture, colour, extract, modification/friability, and other claimed attributes. | EBC, MEBAK, or equivalent validated method record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | dataset_metadata | Reject a package that does not identify cereal species, malt style, ordinary-kilned versus roasted/crystal/smoked route, finished moisture, and bulk or packaging form. | `unsd-cpc-v3-2025`; `ebc-analytica-malt` |
| `validate_steeping_context` | steeping_and_germination | Require actual wet/dry periods, temperatures, moisture and duration. Use 12-16 °C, one to two days, and 42-45 % grain moisture only as jointly supported review context, not as a replacement for site records or a universal conformance limit. | `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024` |
| `validate_kilning_context` | ordinary_kilned_malt | Require the actual staged drying profile. Use 50-85 °C as jointly supported context for pale ordinary malt; higher-temperature styles require their declared product-specific profile. | `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024` |
| `validate_roasting_context` | roasted_or_crystal_malt | Require input state, saccharification stand when applicable, and complete time-temperature-moisture profile. Use 130-230 °C only as jointly supported context for roasted-malt production; product release follows the declared specification. | `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021` |
| `validate_atomic_inventory` | process_inventory | Fail any combined energy-carrier, multi-fuel, multi-refrigerant, multi-chemical, packaging-collection, waste-collection, or emission-collection row. | `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | foreground_inventory | Require an explained wet- and dry-matter balance linking cereal inputs to saleable malt, rootlets, screenings, dust, wastewater, and other losses. | `mass-balance-identity`; `evans-malting-efficiency-2024` |
| `validate_range_evidence` | quantitative_ranges | Reject an empirical inventory range supported by only one paper, plant, batch, or point; require at least two independent boundary-compatible full-text sources or an explicit authoritative conformance interval. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground dataset for 1,000 kg net dry cereal malt, ordinary or roasted as declared |
| downstream_use | `secondary_dataset`; `background_dataset`; input to brewing, distilling, malt-food, and other life-cycle models matching the declared malt identity |
| allowed_use | Product- and route-matched studies with compatible cereal species, malt style, geography, technology, period, moisture, colour, and packaging form |
| excluded_use | Substitution for unmalted roasted grain, malt extract/syrup/flour, beer, spirits, generic food, or an undisclosed average of materially different ordinary and roasted routes |
| required_metadata | PCR id; cereal and crop identity; malt style; process route and condition profiles; reference moisture/colour/specification; geography; technology; period; bulk/packaging form; allocation; upstream links; co-product/waste destinations |
| required_quality_disclosure | Data coverage and representativeness; metering; laboratory methods; mass-balance closure; route weighting; unresolved UUIDs and ranges; allocation sensitivity; wastewater and air-emission methods |
| update_trigger | Change in cereal mix, malt style, kiln/roaster, fuel or refrigeration system, energy source, water reuse, sanitation chemistry, packaging, allocation, emission control, product specification, geography, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division. Central Product Classification Version 3.0, structure and explanatory notes. https://unstats.un.org/unsd/classifications/econ | Product-category scope and exclusions |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre. Best Available Techniques Reference Document for the Food, Drink and Milk Industries, Chapter 16.9 Malting, 2019. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf | Full process decomposition, ordinary and roasted routes, energy, water, residues, wastewater, and separate air emissions |
| `ebc-analytica-malt` | `standard` | European Brewery Convention. Analytica EBC methods for malt, including 4.2 moisture, 4.5.1 extract, 4.7.1 colour, 4.12 diastatic power, 4.14 modification and 4.15 friability. https://dev.brewup.brewersofeurope.eu/ebc-analytica/category/chemical-physical/malt | Malt quality measurement and release-method disclosure |
| `fao-who-cxc-1-1969` | `standard` | FAO/WHO. General Principles of Food Hygiene, CXC 1-1969, 2022 revision/2023 edition. https://www.fao.org/fao-who-codexalimentarius/publications/en/ | GHP, HACCP, water, cleaning, disinfection, storage and verification rules |
| `evans-malting-efficiency-2024` | `literature` | Evans, D.E., Shen, W. and Brookes, P.A. Malting - 'the middle parts of fortune' - a history of innovation and the enduring quest for efficiency. Journal of the Institute of Brewing 130 (2024) 126-181. https://doi.org/10.58430/jib.v130i3.58 | Full malting route, independently compatible steeping/kilning context, energy, water, losses, rootlets and storage |
| `prado-specialty-malts-2021` | `literature` | Prado, R. et al. Aroma and color development during the production of specialty malts: A review. Comprehensive Reviews in Food Science and Food Safety (2021). https://doi.org/10.1111/1541-4337.12806 | Roasted and crystal-malt route, independently compatible roasting context and product-defining conditions |
| `bauer-malting-parameters-2022` | `literature` | Bauer, A. et al. The malting parameters: steeping, germination, withering, and kilning temperature and aeration rate as possibilities for styrene mitigation in wheat beer. European Food Research and Technology 248 (2022). https://doi.org/10.1007/s00217-021-03852-5 | Barley and wheat malting identity, route-condition recording and deculming |
| `habschied-malting-byproducts-2020` | `literature` | Habschied, K. et al. By-Products in the Malting and Brewing Industries-Re-Usage Possibilities. Fermentation 6 (2020) 82. https://doi.org/10.3390/fermentation6030082 | Rootlet identity, removal and beneficial-use decision |
| `eu-pef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/eli/reco/2021/2279/oj | Boundary disclosure, allocation hierarchy, data quality and range-evidence discipline |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass identity applied to measured foreground records. | Normalisation, dry matter, stock reconciliation and balance validation |
