---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.spirits-liqueurs-and-other-spirituous-beverages-of-an-alcoholic-strength-by-volume-of-a-33de9cd9
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Spirits, liqueurs and other spirituous beverages of an alcoholic strength by volume of about 40% vol

## 1. Scope and Applicability

This PCR covers sale-ready spirits, liqueurs and other spirituous beverages declared at about 40% alcohol by volume (ABV). A foreground data package shall declare exactly one of two routes: (A) a spirit distilled from fermented mash, or (B) a liqueur formulated from purchased neutral ethyl alcohol of agricultural origin. Route A covers raw-material preparation and saccharification when applicable, fermentation, distillation, maturation when applicable, blending and strength reduction, filtration, and packaging. Route B covers ingredient preparation and sugar dissolution, maceration or flavour extraction when applicable, blending, filtration, and packaging. The two routes shall not be assumed to operate together.

The PCR excludes beer, wine and other non-spirit fermented beverages; denatured or industrial ethyl alcohol; a product outside the declared about-40% ABV specification; distribution, retail, consumer use, and packaging end-of-life from the foreground gate; and agricultural or packaging manufacture except through linked upstream datasets. Product-specific legal definitions and geographical-indication specifications remain additional conformance requirements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.spirits-liqueurs-and-other-spirituous-beverages-of-an-alcoholic-strength-by-volume-of-a-33de9cd9 |
| classification_refs | CPC 3.0: 24131 |
| covered_products | Sale-ready spirits, liqueurs and other spirituous beverages with declared alcoholic strength by volume about 40% vol |
| excluded_products | Beer, wine and other non-spirit fermented beverages; denatured or industrial alcohol; products outside the declared about-40% ABV specification |
| representative_product | Packaged spirit or liqueur at about 40% ABV |
| production_route | Exactly one declared route: `distilled_from_fermented_mash` or `liqueur_from_purchased_neutral_alcohol`; never both by default |
| market_state | Filtered, packaged, labelled and sale-ready liquid beverage |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A sale-ready spirit, liqueur or other spirituous beverage providing the declared beverage composition and organoleptic function |
| How much | 1 kg packaged product |
| How well | Product identity, formulation, legal name, packaging format and alcoholic strength by volume at 20 °C are declared; ABV is about 40% vol |
| How long or cycle | One production lot delivered at the packaging gate; no use duration is assigned |
| reference_flow_link | The reference amount below is the mass of packaged product leaving the foreground packaging process |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Packaged spirit, liqueur or other spirituous beverage, about 40% vol |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | selected route; legal or commercial product name; ABV at 20 °C; ingredient formulation; agricultural or neutral-alcohol feedstock identity; maturation status and duration; filtration technology; primary and secondary packaging composition; production geography and period; co-product treatment |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | packaged reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every foreground exchange to 1 kg of packaged sale-ready beverage. |
| `abv_at_20c` | product alcoholic strength | Alcoholic strength by volume | % vol | Measure or document ABV as the ratio of pure-alcohol volume to total product volume at 20 °C; retain the batch test or certified specification. |
| `volume_to_mass` | liquid records reported by volume | Mass and measured batch density | kg | Convert volume to mass only with density measured or documented for the same product, temperature and batch; do not use water density by default. |
| `pure_alcohol_balance` | fermentation, distillation, maturation and blending | Pure-alcohol volume and beverage mass | LPA and kg | Track alcohol entering, recovered in product and co-products, and lost to air or wastewater; preserve the measured basis and conversion temperature. |
| `residue_state` | spent grain, pot ale, spent wash and sludge | Mass | kg | Record wet mass and moisture or solids content; convert to dry matter only when the measured conversion basis is retained. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | foreground production | Include exactly one declared product route and its applicable shared finishing operations; do not combine both routes unless the data package explicitly models two separate products. | `eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019` |
| `boundary_foreground_gate` | manufacturing system | Begin at receipt of agricultural/sugar feedstock for Route A or purchased neutral agricultural alcohol and formulation ingredients for Route B; end with packaged sale-ready product. | `eu-fdm-bref-2019` |
| `boundary_complete_inventory` | all foreground processes | Include all environmentally relevant material, energy, water, packaging, waste and elementary exchanges, including measured losses and treatment outputs. | `eu-pef-method-2021` |
| `boundary_upstream_links` | purchased inputs | Link upstream datasets for every purchased feedstock, ingredient, chemical, fuel, utility, barrel, filter medium and packaging component; do not recursively recreate the same product category. | `eu-pef-method-2021` |
| `boundary_downstream_exclusion` | distribution and use | Keep distribution, retail, consumer use and packaging end-of-life outside the foreground package unless the declared study adds them as separate downstream processes. | `whiskey-lca-ireland-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Route A: received named agricultural or sugar feedstock; Route B: received neutral ethyl alcohol of agricultural origin and named formulation ingredients |
| starting_condition_role | Foreground manufacturing gate; upstream production is represented by linked datasets |
| product_classification_scope | Spirits, liqueurs and other spirituous beverages at about 40% ABV; CPC 3.0 code 24131 is classification context, not PCR identity |
| recursive_input_rule | A purchased spirit within this same category is recorded as an input with a separately identified upstream dataset and shall not trigger recursive reconstruction of its production |
| upstream_dataset_requirement | Supplier-, geography- and period-representative datasets are required for all purchased materials, utilities, fuels and packaging |
| disclosure | Declare route, feedstock and formulation, process technology, maturation, co-product status, allocation, geography, period, exclusions and any proxy datasets |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_preparation` | Raw-material preparation and saccharification | conditional | Route A; saccharification only for starch feedstocks | foreground production | prepared fermentable mash |
| `fermentation` | Alcoholic fermentation | conditional | Route A | foreground production | fermented mash |
| `distillation` | Distillation and thermal supply | conditional | Route A | foreground production | new-make or unmatured spirit |
| `maturation` | Maturation in oak | conditional | Route A only when the declared product is matured | conditioning | matured spirit |
| `liqueur_preparation` | Neutral-alcohol ingredient preparation and sugar dissolution | conditional | Route B | foreground production | prepared liqueur base |
| `maceration_extraction` | Maceration or flavour extraction | conditional | Route B only when performed at the foreground site | foreground production | flavoured liqueur base |
| `blending_reduction` | Blending and alcoholic-strength adjustment | required | Applies after the selected route | foreground production | beverage at declared ABV |
| `filtration` | Product filtration | required | Applies to the declared finishing technology | conditioning | filtered beverage |
| `packaging` | Filling, labelling and packing | required | Applies to all products | foreground production | packaged reference product |
| `site_cleaning_treatment` | Cleaning and on-site wastewater treatment | required | Applies to all foreground sites | ancillary production | site service allocated to product |

### Process: Raw-material preparation and saccharification (`raw_material_preparation`)

#### Inputs

##### Product flows

###### Malted barley feedstock (`malted_barley_input`)

Record malted barley received for a declared cereal-spirit formulation; it is not applicable when absent from the selected Route A recipe.

- Selected flow: Malted barley grain
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`

###### Maize feedstock (`maize_grain_input`)

Record maize grain received for a declared cereal-spirit formulation; it is not applicable when absent from the selected Route A recipe.

- Selected flow: Maize grain
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`

###### Cane molasses feedstock (`cane_molasses_input`)

Record sugar-cane molasses received when it is the declared fermentable sugar feedstock.

- Selected flow: Sugar-cane molasses
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### Grape must feedstock (`grape_must_input`)

Record grape must received when it is the declared fermentable fruit feedstock.

- Selected flow: Grape must
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`

###### Potato feedstock (`potato_input`)

Record potatoes received when they are the declared starch feedstock.

- Selected flow: Potatoes
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`

###### Mashing water (`mashing_water_input`)

Record water added during milling, cooking, mashing or slurrying.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-recipe water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`

###### Alpha-amylase (`alpha_amylase_input`)

Record formulated alpha-amylase used for liquefaction when additional enzyme is used.

- Selected flow: Alpha-amylase enzyme preparation
- Flow property / unit: Mass / kg
- Amount rule: issued mass from batch or dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`

###### Glucoamylase (`glucoamylase_input`)

Record formulated glucoamylase used for saccharification when additional enzyme is used.

- Selected flow: Glucoamylase enzyme preparation
- Flow property / unit: Mass / kg
- Amount rule: issued mass from batch or dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

###### Prepared fermentable mash (`prepared_mash_output`)

Record the wet mass transferred to fermentation.

- Selected flow: Prepared fermentable mash
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or volume converted with batch density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

###### Spent grain (`spent_grain_output`)

Record separated spent grain whether sold as feed, recovered for energy, treated or discarded; do not omit it because it has value.

- Selected flow: Wet distillers spent grain
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with moisture or dry-matter content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_records`
- Sources: `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`

### Process: Alcoholic fermentation (`fermentation`)

#### Inputs

##### Product flows

###### Prepared mash (`fermentation_mash_input`)

Record prepared mash entering the fermentation vessel.

- Selected flow: Prepared fermentable mash
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or volume converted with batch density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `eu-fdm-bref-2019`

###### Fermentation yeast (`yeast_input`)

Record the declared yeast preparation dosed to the mash.

- Selected flow: Saccharomyces cerevisiae yeast preparation
- Flow property / unit: Mass / kg
- Amount rule: issued or dosed mass by fermentation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### Yeast nutrient (`yeast_nutrient_input`)

Record diammonium phosphate only when used as the fermentation nutrient.

- Selected flow: Diammonium phosphate
- Flow property / unit: Mass / kg
- Amount rule: dosed mass by fermentation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources:

###### Fermentation water (`fermentation_water_input`)

Record potable water added directly during fermentation.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: metered or recipe water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `eu-fdm-bref-2019`

###### Fermentation electricity (`fermentation_electricity_input`)

Record electricity for agitation, pumps, controls and fermentation equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `eu-fdm-bref-2019`

###### Fermentation cooling water (`fermentation_cooling_water_input`)

Record make-up or once-through cooling water crossing the process boundary; exclude recirculated internal loops from gross input.

- Selected flow: Cooling water
- Flow property / unit: Mass / kg
- Amount rule: metered make-up or once-through water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

###### Fermented mash (`fermented_mash_output`)

Record fermented mash transferred to distillation.

- Selected flow: Fermented spirit mash
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or volume converted with batch density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

###### Spent yeast (`spent_yeast_output`)

Record separated yeast slurry leaving the process as feed, recovery material or waste.

- Selected flow: Spent yeast slurry
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

###### Fermentation carbon dioxide (`fermentation_co2_output`)

Record carbon dioxide released to air; separately record any captured quantity as a co-product.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or carbon-balance calculation from collected sugar, product alcohol and captured carbon dioxide
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_records`
- Sources: `eu-fdm-bref-2019`

### Process: Distillation and thermal supply (`distillation`)

#### Inputs

##### Product flows

###### Fermented mash feed (`distillation_mash_input`)

Record fermented mash charged to the still.

- Selected flow: Fermented spirit mash
- Flow property / unit: Mass / kg
- Amount rule: measured charge mass or volume converted with batch density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per distillation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

###### Distillation steam (`distillation_steam_input`)

Record purchased or internally generated steam delivered to the still without combining it with boiler fuel.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy or mass converted using measured pressure and enthalpy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`

###### Distillation electricity (`distillation_electricity_input`)

Record electricity for pumps, controls, condensers and distillation equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`

###### Distillation cooling water (`distillation_cooling_water_input`)

Record make-up or once-through water used to condense spirit vapour.

- Selected flow: Cooling water
- Flow property / unit: Mass / kg
- Amount rule: metered make-up or once-through water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

###### Natural gas fuel (`natural_gas_input`)

Record natural gas combusted for distillation steam or direct heat when used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel volume converted with supplier lower heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`

###### Fuel oil (`fuel_oil_input`)

Record fuel oil combusted for distillation heat only when used; do not combine it with natural gas.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: metered or purchased mass reconciled to tank inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

###### Biomass fuel (`biomass_pellet_input`)

Record wood pellets combusted for distillation heat only when used; retain moisture and lower heating value.

- Selected flow: Wood pellets
- Flow property / unit: Mass / kg
- Amount rule: measured consumed mass from delivery and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

###### New-make spirit (`new_make_spirit_output`)

Record the retained distillate, including mass and LPA, before maturation or blending.

- Selected flow: New-make distilled spirit
- Flow property / unit: Mass / kg
- Amount rule: measured retained-cut mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per distillation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### Fusel oil co-product (`fusel_oil_output`)

Record separated fusel oil as a co-product only when recovered and leaving the system for use.

- Selected flow: Fusel oil
- Flow property / unit: Mass / kg
- Amount rule: measured recovered mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

###### Pot ale (`pot_ale_output`)

Record pot ale separately from other liquid residues and state whether it is feed, recovery material or waste.

- Selected flow: Pot ale
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass or volume converted with density and solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`; `scottish-whisky-byproducts-lca-2018`

###### Spent wash or vinasse (`spent_wash_output`)

Record spent wash or vinasse from column or molasses distillation separately from pot ale.

- Selected flow: Distillery spent wash
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass or volume converted with density and solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

###### Fossil carbon dioxide from combustion (`combustion_co2_fossil_output`)

Calculate fossil carbon dioxide from each collected fossil-fuel record and the documented fuel factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: fuel-specific calculation from measured natural gas and fuel-oil use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

###### Biogenic carbon dioxide from combustion (`combustion_co2_biogenic_output`)

Calculate biogenic carbon dioxide from collected wood-pellet use and keep it separate from fossil carbon dioxide.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: fuel-specific calculation from measured biomass use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

###### Nitrogen oxides from combustion (`nitrogen_oxides_output`)

Record measured stack emissions or calculate nitrogen oxides separately for each fuel and combustion unit.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or fuel-specific factor applied to measured fuel use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

###### Sulfur dioxide from combustion (`sulfur_dioxide_output`)

Record sulfur dioxide for sulfur-bearing fuels and zero it only with verified fuel composition or monitoring.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or sulfur-balance calculation from measured fuel use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

###### Particulate matter from combustion (`particulate_matter_output`)

Record particulate matter from the applicable combustion plant, especially biomass or fuel-oil firing.

- Selected flow: Particulate matter, to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or technology-specific factor applied to measured fuel use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

###### Ethanol released during distillation (`distillation_ethanol_air_output`)

Record uncondensed ethanol released to air from distillation and spirit handling.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or pure-alcohol mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distillation_records`
- Sources: `eu-fdm-bref-2019`

### Process: Maturation in oak (`maturation`)

#### Inputs

##### Product flows

###### New-make spirit for maturation (`maturation_spirit_input`)

Record spirit filled into casks with mass and LPA at filling.

- Selected flow: New-make distilled spirit
- Flow property / unit: Mass / kg
- Amount rule: measured cask-fill mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per maturation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maturation_records`
- Sources: `eu-spirit-drinks-regulation-2019`; `whiskey-lca-ireland-2025`

###### Oak cask (`oak_cask_input`)

Record each oak cask or allocated cask use, including new/reused status, capacity, prior use and service cycles.

- Selected flow: Oak barrel
- Flow property / unit: Mass / kg
- Amount rule: cask mass allocated by documented use cycles or direct one-use mass when not reused
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maturation_records`
- Sources: `eu-spirit-drinks-regulation-2019`; `whiskey-lca-ireland-2025`

###### Maturation electricity (`maturation_electricity_input`)

Record warehouse electricity allocated over the declared maturation period.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered warehouse electricity allocated by occupied cask-volume-time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maturation_records`
- Sources: `whiskey-lca-ireland-2025`

#### Outputs

##### Product flows

###### Matured spirit (`matured_spirit_output`)

Record withdrawn matured spirit with mass, LPA and maturation duration.

- Selected flow: Matured distilled spirit
- Flow property / unit: Mass / kg
- Amount rule: measured withdrawal mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per maturation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maturation_records`
- Sources: `eu-spirit-drinks-regulation-2019`; `whiskey-lca-ireland-2025`

##### Elementary flows

###### Ethanol released during maturation (`maturation_ethanol_air_output`)

Calculate ethanol lost to air from the difference between cask-fill and withdrawal alcohol, adjusted for transfers and samples.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: cask or lot pure-alcohol mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maturation_records`
- Sources: `eu-fdm-bref-2019`

### Process: Neutral-alcohol ingredient preparation and sugar dissolution (`liqueur_preparation`)

#### Inputs

##### Product flows

###### Neutral agricultural alcohol (`neutral_alcohol_input`)

Record purchased neutral ethyl alcohol of agricultural origin by mass and LPA; this row is mandatory for Route B.

- Selected flow: Neutral ethyl alcohol of agricultural origin
- Flow property / unit: Mass / kg
- Amount rule: received mass and certified ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Sucrose ingredient (`sucrose_input`)

Record sucrose used to sweeten the liqueur when present in the declared formulation.

- Selected flow: Refined sucrose
- Flow property / unit: Mass / kg
- Amount rule: issued mass reconciled to batch recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Honey ingredient (`honey_input`)

Record honey separately when used as a sweetening ingredient.

- Selected flow: Honey
- Flow property / unit: Mass / kg
- Amount rule: issued mass reconciled to batch recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Vanilla flavour extract (`vanilla_extract_input`)

Record vanilla extract separately when it is the declared flavour ingredient.

- Selected flow: Vanilla extract
- Flow property / unit: Mass / kg
- Amount rule: issued mass reconciled to batch recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Caramel colour (`caramel_colour_input`)

Record plain caramel colour separately when used.

- Selected flow: Plain caramel colour E150a
- Flow property / unit: Mass / kg
- Amount rule: dosed mass reconciled to batch recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Liqueur preparation water (`liqueur_water_input`)

Record potable water used for dissolving sugar and preparing the liqueur base.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: metered or recipe water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### Liqueur preparation electricity (`liqueur_electricity_input`)

Record electricity for mixing, pumps and controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-fdm-bref-2019`

###### Liqueur preparation steam (`liqueur_steam_input`)

Record steam used for sugar dissolution when heat is applied.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered energy or steam mass converted with measured pressure and enthalpy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

###### Prepared liqueur base (`prepared_liqueur_base_output`)

Record the mixed and dissolved liqueur base transferred to maceration or blending.

- Selected flow: Prepared liqueur base
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per formulation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liqueur_preparation_records`
- Sources: `eu-spirit-drinks-regulation-2019`

### Process: Maceration or flavour extraction (`maceration_extraction`)

#### Inputs

##### Product flows

###### Prepared liqueur base for extraction (`maceration_base_input`)

Record prepared liqueur base entering maceration or extraction.

- Selected flow: Prepared liqueur base
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maceration_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Sour cherry ingredient (`sour_cherry_input`)

Record sour cherries separately when macerated for the declared product.

- Selected flow: Sour cherries
- Flow property / unit: Mass / kg
- Amount rule: accepted mass charged to extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maceration_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Orange peel ingredient (`orange_peel_input`)

Record orange peel separately when macerated or extracted for the declared product.

- Selected flow: Orange peel
- Flow property / unit: Mass / kg
- Amount rule: accepted mass charged to extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maceration_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Juniper berry ingredient (`juniper_berry_input`)

Record juniper berries separately when macerated, infused or distilled for flavour.

- Selected flow: Juniper berries
- Flow property / unit: Mass / kg
- Amount rule: accepted mass charged to extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maceration_records`
- Sources: `eu-spirit-drinks-regulation-2019`

#### Outputs

##### Product flows

###### Flavoured liqueur base (`flavoured_liqueur_base_output`)

Record clarified extract or macerated base transferred to blending.

- Selected flow: Flavoured liqueur base
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maceration_records`
- Sources: `eu-spirit-drinks-regulation-2019`

##### Waste flows

###### Spent sour cherries (`spent_sour_cherry_output`)

Record extracted sour-cherry solids separately when the ingredient is used.

- Selected flow: Spent sour-cherry solids
- Flow property / unit: Mass / kg
- Amount rule: measured drained wet mass with moisture content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maceration_records`
- Sources:

###### Spent orange peel (`spent_orange_peel_output`)

Record extracted orange-peel solids separately when the ingredient is used.

- Selected flow: Spent orange peel
- Flow property / unit: Mass / kg
- Amount rule: measured drained wet mass with moisture content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maceration_records`
- Sources:

###### Spent juniper berries (`spent_juniper_output`)

Record extracted juniper solids separately when the ingredient is used.

- Selected flow: Spent juniper berries
- Flow property / unit: Mass / kg
- Amount rule: measured drained wet mass with moisture content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maceration_records`
- Sources:

### Process: Blending and alcoholic-strength adjustment (`blending_reduction`)

#### Inputs

##### Product flows

###### Route A spirit input (`route_a_spirit_input`)

Record matured or unmatured Route A spirit entering blending; it is not applicable to Route B.

- Selected flow: Distilled spirit for blending
- Flow property / unit: Mass / kg
- Amount rule: measured mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blending batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Route B liqueur base input (`route_b_liqueur_base_input`)

Record prepared or flavoured Route B liqueur base entering blending; it is not applicable to Route A.

- Selected flow: Liqueur base for blending
- Flow property / unit: Mass / kg
- Amount rule: measured mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blending batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Reduction water (`reduction_water_input`)

Record potable water added to reach declared bottling strength.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: metered or recipe mass, reconciled with ABV and product mass balances
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_records`
- Sources: `eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### Blending sucrose (`blending_sucrose_input`)

Record sucrose added during finishing separately and only when permitted and used.

- Selected flow: Refined sucrose
- Flow property / unit: Mass / kg
- Amount rule: dosed mass reconciled to recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Blending caramel colour (`blending_caramel_input`)

Record plain caramel colour added during finishing separately and only when permitted and used.

- Selected flow: Plain caramel colour E150a
- Flow property / unit: Mass / kg
- Amount rule: dosed mass reconciled to recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_records`
- Sources: `eu-spirit-drinks-regulation-2019`

###### Blending electricity (`blending_electricity_input`)

Record electricity for tanks, agitation, pumps and controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

###### Beverage at declared strength (`blended_beverage_output`)

Record blended beverage transferred to filtration with mass and certified ABV.

- Selected flow: Blended spirituous beverage, about 40% vol
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blending batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_records`
- Sources: `eu-spirit-drinks-regulation-2019`

### Process: Product filtration (`filtration`)

#### Inputs

##### Product flows

###### Beverage before filtration (`unfiltered_beverage_input`)

Record blended beverage entering the declared filtration technology.

- Selected flow: Blended spirituous beverage, about 40% vol
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per filtration batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources:

###### Diatomaceous-earth filter aid (`diatomaceous_earth_input`)

Record diatomaceous earth separately when used as the filter aid.

- Selected flow: Diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: issued mass by filtration batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources:

###### Activated-carbon filter medium (`activated_carbon_input`)

Record activated carbon separately when used.

- Selected flow: Activated carbon
- Flow property / unit: Mass / kg
- Amount rule: issued mass by filtration batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources:

###### Cellulose filter medium (`cellulose_filter_input`)

Record cellulose filter sheets or media separately when used.

- Selected flow: Cellulose filter medium
- Flow property / unit: Mass / kg
- Amount rule: consumed mass by filtration batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources:

###### Filtration electricity (`filtration_electricity_input`)

Record electricity for pumps, chillers and filter equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources: `eu-fdm-bref-2019`

###### Ammonia refrigerant make-up (`ammonia_refrigerant_input`)

When an ammonia refrigeration system serves chill filtration or product cooling, record purchased make-up ammonia separately; omit this row when that refrigerant is not used.

- Selected flow: Anhydrous ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: purchased or charged make-up mass assigned to the declared filtration and cooling load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources: `eu-fdm-bref-2019`

###### HFC-134a refrigerant make-up (`hfc134a_refrigerant_input`)

When an HFC-134a refrigeration system serves chill filtration or product cooling, record purchased make-up HFC-134a separately; omit this row when that refrigerant is not used.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant
- Flow property / unit: Mass / kg
- Amount rule: purchased or charged make-up mass assigned to the declared filtration and cooling load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

###### Filtered beverage (`filtered_beverage_output`)

Record filtered beverage transferred to packaging.

- Selected flow: Filtered spirituous beverage, about 40% vol
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass and ABV at 20 °C
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per filtration batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources:

##### Waste flows

###### Spent diatomaceous earth (`spent_diatomaceous_earth_output`)

Record spent diatomaceous earth with retained product separately from other filter wastes.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with retained-liquid content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources:

###### Spent activated carbon (`spent_activated_carbon_output`)

Record spent activated carbon separately from other filter wastes.

- Selected flow: Spent activated carbon
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with retained-liquid content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources:

###### Spent cellulose filter medium (`spent_cellulose_filter_output`)

Record spent cellulose media separately from other filter wastes.

- Selected flow: Spent cellulose filter medium
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with retained-liquid content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources:

##### Elementary flows

###### Ammonia refrigerant released to air (`ammonia_refrigerant_air_output`)

For an applicable ammonia refrigeration system, record ammonia leakage to air separately from make-up refrigerant and other air emissions.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: measured leakage or documented refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filtration_records`
- Sources: `eu-fdm-bref-2019`

###### HFC-134a refrigerant released to air (`hfc134a_refrigerant_air_output`)

For an applicable HFC-134a refrigeration system, record HFC-134a leakage to air separately from make-up refrigerant and other air emissions.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: measured leakage or documented refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filtration_records`
- Sources: `eu-fdm-bref-2019`

### Process: Filling, labelling and packing (`packaging`)

#### Inputs

##### Product flows

###### Filtered beverage for filling (`packaging_beverage_input`)

Record filtered beverage entering the filler.

- Selected flow: Filtered spirituous beverage, about 40% vol
- Flow property / unit: Mass / kg
- Amount rule: measured filler-feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Glass bottle (`glass_bottle_input`)

Record empty glass bottles by received mass, including breakage.

- Selected flow: Glass bottle
- Flow property / unit: Mass / kg
- Amount rule: issued bottle mass from unit count and verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Aluminium closure (`aluminium_closure_input`)

Record aluminium closures separately when used.

- Selected flow: Aluminium bottle closure
- Flow property / unit: Mass / kg
- Amount rule: issued count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Plastic closure (`plastic_closure_input`)

Record plastic closures separately when used; do not combine them with aluminium closures.

- Selected flow: Polypropylene bottle closure
- Flow property / unit: Mass / kg
- Amount rule: issued count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Paper label (`paper_label_input`)

Record paper labels separately from cartons.

- Selected flow: Coated paper label
- Flow property / unit: Mass / kg
- Amount rule: issued count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated carton (`corrugated_carton_input`)

Record corrugated shipping cartons separately from labels.

- Selected flow: Corrugated board carton
- Flow property / unit: Mass / kg
- Amount rule: issued count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Polyethylene stretch film (`polyethylene_film_input`)

Record stretch film separately when used for palletisation.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: issued roll mass minus returned roll and core mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Wooden pallet (`wooden_pallet_input`)

Record allocated pallet use, including reuse cycles and losses.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: pallet mass allocated by documented use cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Packaging electricity (`packaging_electricity_input`)

Record electricity for filling, capping, labelling, conveying and case packing.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: line-metered electricity or documented allocation by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

#### Outputs

##### Product flows

###### Packaged reference product (`packaged_product_output`)

Record conforming packaged product at the packaging gate.

- Selected flow: Packaged spirit, liqueur or other spirituous beverage, about 40% vol
- Flow property / unit: Mass / kg
- Amount rule: fixed reference amount of conforming packaged output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

##### Waste flows

###### Off-specification beverage (`off_spec_spirit_output`)

Record off-specification beverage separately, including whether it is reworked, recovered or discarded.

- Selected flow: Off-specification spirituous beverage
- Flow property / unit: Mass / kg
- Amount rule: measured mass with destination and recovery status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste glass (`waste_glass_output`)

Record broken and rejected glass separately.

- Selected flow: Waste packaging glass
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass or reconciled bottle count and unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste aluminium (`waste_aluminium_output`)

Record rejected aluminium closures separately.

- Selected flow: Waste aluminium packaging
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass or reconciled count and unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste polyethylene film (`waste_plastic_output`)

Record rejected polyethylene stretch-film scrap separately from closure waste.

- Selected flow: Waste polyethylene packaging
- Flow property / unit: Mass / kg
- Amount rule: measured polyethylene waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste polypropylene closures (`waste_polypropylene_closure_output`)

Record rejected polypropylene closures separately from polyethylene film and other polymers.

- Selected flow: Waste polypropylene packaging
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass or reconciled closure count and unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste paper labels (`waste_paper_label_output`)

Record rejected coated-paper labels separately from corrugated cartons.

- Selected flow: Waste coated paper label
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass or reconciled label count and unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste paperboard (`waste_paperboard_output`)

Record rejected corrugated cartons separately from paper labels.

- Selected flow: Waste corrugated board
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste wood (`waste_wood_output`)

Record pallets leaving service as waste wood separately from reusable pallet inventory.

- Selected flow: Waste wood packaging
- Flow property / unit: Mass / kg
- Amount rule: measured discarded pallet mass allocated to product throughput
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

### Process: Cleaning and on-site wastewater treatment (`site_cleaning_treatment`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water_input`)

Record water used for cleaning and disinfection, including clean-in-place make-up water.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: metered cleaning-water mass allocated to product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utility_waste_records`
- Sources: `eu-fdm-bref-2019`

###### Cleaning electricity (`cleaning_electricity_input`)

Record electricity for clean-in-place pumps and wastewater treatment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utility_waste_records`
- Sources: `eu-fdm-bref-2019`

###### Cleaning steam (`cleaning_steam_input`)

Record steam used to heat cleaning solutions separately from distillation steam.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered energy or steam mass converted with pressure and enthalpy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utility_waste_records`
- Sources: `eu-fdm-bref-2019`

###### Sodium hydroxide cleaner (`sodium_hydroxide_input`)

Record sodium hydroxide active mass used for alkaline cleaning.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: solution mass multiplied by supplier active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_utility_waste_records`
- Sources: `eu-fdm-bref-2019`

###### Nitric acid cleaner (`nitric_acid_input`)

Record nitric acid active mass used for acid cleaning.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: solution mass multiplied by supplier active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_utility_waste_records`
- Sources: `eu-fdm-bref-2019`

###### Peracetic acid disinfectant (`peracetic_acid_input`)

Record peracetic acid active mass used for disinfection.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: solution mass multiplied by supplier active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_utility_waste_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Waste flows

###### Process wastewater (`wastewater_output`)

Record combined discharged process wastewater after internal reuse, keeping raw records by contributing process.

- Selected flow: Distillery wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass or volume converted with density, with COD, BOD, suspended solids, pH and alcohol concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utility_waste_records`
- Sources: `eu-fdm-bref-2019`

###### Wastewater-treatment sludge (`wastewater_sludge_output`)

Record dewatered treatment sludge with wet mass and dry-solids content.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and dry-solids fraction allocated to treated product load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_utility_waste_records`
- Sources: `eu-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared processes and utilities | Avoid allocation first by submetering and subdividing route-, process- and product-specific records; system expansion may be used only when the added function and reporting scope are explicit. | `eu-pef-method-2021` |
| `allocation_physical_second` | inseparable shared burdens | If subdivision or system expansion is not feasible, use a documented relevant physical relationship, such as process time, delivered heat or occupied cask-volume-time, that causally represents the shared service. | `eu-pef-method-2021` |
| `allocation_other_last` | remaining multifunctionality | Use another relationship such as economic allocation only after documenting why subdivision, system expansion and physical allocation are not feasible; retain prices, period, geography and sensitivity. | `eu-pef-method-2021` |
| `allocation_distillery_coproducts` | spent grain, pot ale, spent wash, captured carbon dioxide and fusel oil | Record each output before choosing waste or co-product status. Do not apply avoided burdens by default. State the destination and apply the declared allocation method consistently to upstream and foreground burdens. | `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`; `scottish-whisky-byproducts-lca-2018` |
| `allocation_rework` | off-specification beverage | Burdens remain with the product system when off-specification beverage is internally reworked; exported recovery or disposal is modelled at the point the material leaves the foreground boundary. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material_records` | `raw_material_preparation` | named feedstocks, water, enzymes, prepared mash and spent grain | weighbridge, batch sheet, meter and laboratory record | lot id; material id; accepted mass; water; enzyme dose; mash transfer; spent-grain wet mass; moisture | reconcile receipts, issues, transfers and residues by lot | kg | each lot | representative 12 months and all seasonal campaigns | all included preparation lines | sum inputs and outputs by product lot, then normalize to packaged output | calibrated scales/meters; supplier identity; moisture method; reconciliation |
| `cp_fermentation_records` | `fermentation` | mash, yeast, nutrient, water, electricity, cooling, fermented mash, spent yeast and carbon dioxide | batch, meter and laboratory record | fermenter id; charge mass; doses; utilities; ABV; transferred mass; captured CO2; yeast residue | collect each fermentation batch and reconcile carbon and alcohol | kg; kWh; % vol | each batch | representative 12 months | all included fermenters | aggregate only batches assigned to the declared product | calibration; ABV method; batch completeness; carbon-balance check |
| `cp_distillation_records` | `distillation` | mash, steam, electricity, cooling water, each fuel, spirit, residues, co-products and air emissions | still log, meters, tank records and monitoring | charge; retained cuts; ABV; steam; electricity; cooling water; fuel by type; residues; stack data | collect each run and reconcile mass and pure alcohol | kg; MJ; kWh; LPA | each run; continuous meters monthly | representative 12 months | all stills and thermal units serving the product | submeter first; otherwise allocate with documented causal driver | meter calibration; fuel certificates; ABV test; monitoring method; balance closure |
| `cp_maturation_records` | `maturation` | casks, spirit stocks, electricity and ethanol loss | cask ledger, warehouse meter and stocktake | cask id; mass; prior use; fill/withdrawal date; fill/withdrawal mass and ABV; electricity | follow cask or homogeneous maturation lot from fill to withdrawal | kg; LPA; kWh; day | each cask movement; monthly meter | full declared maturation period | all warehouses holding the product | allocate warehouse service by occupied cask-volume-time | cask traceability; stocktake; meter calibration; loss reconciliation |
| `cp_liqueur_preparation_records` | `liqueur_preparation` | neutral alcohol, each ingredient, water, electricity, steam and prepared base | receipt certificate, recipe, dosing and meter record | batch id; alcohol mass and ABV; each ingredient mass; water; utilities; transfer mass | reconcile certified receipts and actual dosing to prepared base | kg; LPA; kWh; MJ | each batch | representative 12 months | all preparation vessels | aggregate batches for the declared formulation only | supplier certificates; calibrated dosing; approved recipe; ABV test |
| `cp_maceration_records` | `maceration_extraction` | base, each botanical, flavoured base and each spent botanical | batch and weigh record | batch id; base mass; botanical identity and mass; duration; output mass; spent wet mass and moisture | follow each extraction batch and keep botanical records separate | kg; day | each batch | representative 12 months | all extraction vessels | normalize declared product batches to packaged output | material identity; calibrated scale; batch reconciliation |
| `cp_blending_records` | `blending_reduction` | route-specific base, reduction water, finishing ingredients, electricity and blended beverage | batch, recipe, meter and laboratory record | route; input masses and ABV; water; additives; electricity; output mass and ABV | reconcile mass and pure alcohol for each blend | kg; LPA; kWh | each batch | representative 12 months | all blend tanks | aggregate only conforming declared-product batches | approved recipe; ABV test at 20 °C; calibrated meters; balance closure |
| `cp_filtration_records` | `filtration` | beverage, each filter medium, electricity, filtered beverage and each spent medium | issue, meter, transfer and waste record | technology; input/output mass; each medium mass; electricity; spent wet mass | collect each filtration campaign and retain media separately | kg; kWh | each campaign | representative 12 months | all filters serving the product | reconcile input, output, retained product and waste | scale and meter calibration; waste tickets; campaign completeness |
| `cp_packaging_records` | `packaging` | beverage, each packaging component, electricity, packaged output, rejects and each packaging waste | bill of materials, line count, unit mass, meter and waste record | SKU; filled mass; component count and unit mass; electricity; conforming units; reject mass; waste by material | reconcile issued components and beverage to conforming output and rejects | kg; kWh; item | each packaging lot | representative 12 months | all packaging lines for the SKU | calculate material mass from verified unit mass and count; allocate pallets by use cycles | approved bill of materials; checkweigher; unit-mass sample; waste tickets |
| `cp_site_utility_waste_records` | `site_cleaning_treatment` | cleaning water, electricity, steam, each chemical, wastewater and sludge | CIP log, meters, chemical issue, discharge and treatment record | circuit; water; steam; electricity; solution mass and concentration; discharge; COD/BOD/TSS/pH/alcohol; sludge wet and dry mass | meter each cleaning circuit and treatment output; retain source-process tags | kg; kWh; MJ | each clean; continuous discharge with composite sampling | representative 12 months | all included foreground operations and treatment units | submeter first; otherwise allocate by cleaning cycle or measured pollutant load | calibration; chemical certificates; laboratory QA; discharge and sludge records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every exchange | normalized exchange = exchange assigned to conforming product / packaged conforming product mass | assigned exchange; packaged product mass | exchange per 1 kg reference product | `mass-balance-identity` |
| `calc_abv_lpa` | alcohol balance | pure-alcohol volume = beverage volume at 20 °C × ABV fraction; retain density when converting beverage mass and volume | volume; ABV at 20 °C; density where needed | LPA and alcohol-balance fields | `eu-spirit-drinks-regulation-2019` |
| `calc_route_exclusivity` | process inclusion | require exactly one selected route; Route A process records and Route B process records shall not both be normalized into one reference product | route declaration; process ids | route-conformance result | `eu-spirit-drinks-regulation-2019` |
| `calc_mass_balance` | each process and lot | input mass = product output + co-product output + waste output + quantified emission/loss + stock change, within documented uncertainty | collected inputs, outputs, losses and stock | closure percentage and unexplained difference | `mass-balance-identity` |
| `calc_combustion_emissions` | each thermal fuel | apply fuel-specific measured composition or documented emission factor to measured fuel use; keep fossil and biogenic carbon dioxide separate | fuel by type; heating value; emission factor or stack result | individual combustion emissions | `eu-fdm-bref-2019` |
| `calc_maturation_loss` | maturation | ethanol loss = alcohol filled + alcohol added − alcohol withdrawn − samples − documented transfers, converted to ethanol mass | cask/lot LPA records | ethanol to air | `eu-fdm-bref-2019` |
| `calc_cask_pallet_reuse` | reusable oak casks and wooden pallets | allocated mass = item mass × losses or one service share / verified lifetime service cycles; disclose allocation convention | item mass; cycles; losses; product throughput | allocated item mass | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain legal/commercial name, route, recipe, ABV at 20 °C, packaging bill and lot traceability. | product specification, batch release and approved bill of materials |
| `dq_primary_manufacturing_data` | all foreground processes | Use company-specific activity data for the manufacturing processes and a product-specific bill of materials. | meters, batch records, invoices, recipes and line records; `eu-pef-method-2021` |
| `dq_temporal_coverage` | annual dataset | Cover a representative continuous 12-month period or all campaigns in a seasonal year; disclose shutdowns, start-ups and missing periods. | dated raw-data register and coverage assessment |
| `dq_technology_geography` | foreground and upstream links | Match still type, heat source, maturation, filtration, site geography, electricity market, ingredient origin and packaging technology; justify every proxy. | technology inventory and dataset-selection log |
| `dq_completeness` | inventory | Account for every listed applicable atomic flow and explain confirmed zero, not-applicable and missing records separately. | completeness matrix and mass/alcohol balances; `eu-pef-method-2021` |
| `dq_measurement` | measured and calculated quantities | Retain calibration, sampling, laboratory method, density/temperature basis, emission factors and uncertainty for each material quantity. | calibration certificates, laboratory QA and calculation workbook |
| `dq_coproduct_destination` | spent grain, pot ale, spent wash, captured CO2 and fusel oil | Retain quantity, moisture or concentration, legal status, recipient, destination and allocation decision. | dispatch tickets, contracts and allocation record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_route_exactly_one` | product and process map | Fail when neither route or both routes are selected, or when inventory from both routes is silently combined. | `eu-spirit-drinks-regulation-2019` |
| `validate_reference_product` | reference flow | Fail unless the output is 1 kg of packaged sale-ready product with declared product identity, packaging and ABV at 20 °C about 40% vol. | `unsd-cpc-3-0-24131`; `eu-spirit-drinks-regulation-2019` |
| `validate_atomic_inventory` | every inventory row | Fail any selected flow that combines materials, utilities, fuels, refrigerants, wastes, packaging or emissions; each exchange shall be individually named. | `eu-pef-method-2021` |
| `validate_mass_alcohol_balance` | each process and production lot | Report closure and fail unexplained material or pure-alcohol imbalance outside the site's documented measurement uncertainty. | `mass-balance-identity` |
| `validate_applicability` | conditional rows and processes | Require an explicit applicable/not-applicable decision supported by route, formulation and technology; absence of a record is not proof of zero. | `eu-fdm-bref-2019` |
| `validate_energy_emissions` | thermal supply | Require each fuel separately and require matching fossil/biogenic carbon dioxide and applicable NOx, SO2 and particulate calculations or monitored results. | `eu-fdm-bref-2019` |
| `validate_residues_wastewater` | residues and treatment | Require spent grain, pot ale/spent wash as applicable, wastewater, sludge, off-spec product and each packaging waste with measured quantity and destination. | `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025` |
| `validate_data_quality` | dataset | Require completeness, technological/geographical/time representativeness, precision, documentation, nomenclature and review evidence; disclose data gaps and proxies. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for packaged spirituous beverage at about 40% ABV |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed for representative market use |
| allowed_use | Product carbon-footprint or LCA modelling when route, formulation, technology, geography, period, packaging and allocation are compatible |
| excluded_use | Generic representation of all spirits or liqueurs; comparison across unlike ABV, packaging, maturation or system boundaries without adjustment; industrial ethanol modelling |
| required_metadata | PCR id and version; route; legal/commercial identity; ABV at 20 °C; recipe; feedstock; still and heat technology; maturation; filtration; packaging bill; geography; period; allocation and co-product destinations |
| required_quality_disclosure | Primary-data share; meter and sampling coverage; mass and alcohol closure; missing flows; proxy datasets; representativeness; uncertainty; review status |
| update_trigger | Material change in recipe, alcohol source, still or energy system, maturation, filtration, packaging, site, allocation, co-product destination, annual data period or applicable product law |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-24131` | official_guidance | United Nations Statistics Division. Central Product Classification Version 3.0, structure dated 30 June 2025, subclass 24131. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-24). | Official classification title and scope coordinate |
| `eu-spirit-drinks-regulation-2019` | standard | Regulation (EU) 2019/787, consolidated current text through 13 May 2024. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02019R0787-20240513 (retrieved 2026-08-24). | Spirit-drink definition; agricultural alcohol; distillation, sweetening, flavouring, maturation, liqueur and ABV rules |
| `eu-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre. Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-24). | Distilled-beverage process map; materials, water, energy, cooling, cleaning, residues, wastewater and air-emission inclusion |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annexes I and II, corrected 2022. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 (retrieved 2026-08-24). | Company-specific manufacturing data, bill of materials, completeness, data quality, allocation hierarchy and validation |
| `whiskey-lca-ireland-2025` | literature | Umego, E. C., Byrne, M., and Barry-Ryan, C. (2025). Life Cycle Assessment of Single Malt Irish Whiskey: A Case Study in Ireland. Environmental Quality Management 34(4), e70100. https://doi.org/10.1002/tqem.70100; verified full text: https://pure.tudublin.ie/ws/portalfiles/portal/67075181/Environmental_Quality_Mgmt_-_2025_-_Umego_-_Life_Cycle_Assessment_of_Single_Malt_Irish_Whiskey_A_Case_Study_in_Ireland.pdf (retrieved 2026-08-24). | Verified real-site process boundary, primary data collection, energy inputs, maturation, spent grain and pot-ale management |
| `scottish-whisky-byproducts-lca-2018` | official_guidance | Ricardo Energy & Environment for ClimateXChange and the Scottish Government (2018). Whisky by-products in renewable energy. https://www.climatexchange.org.uk/wp-content/uploads/2023/09/revised-february-2018-whisky-by-products-life-cycle-analysis-report-v02-03.pdf (retrieved 2026-08-24). | By-product identity, destination scenarios and explicit LCA treatment need for spent grain and pot ale |
| `mass-balance-identity` | method_factor | Conservation-of-mass and pure-alcohol balance identity. | Reference normalization and process closure calculations |
