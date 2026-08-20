---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-vegetable-flours-and-meals
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other vegetable flours and meals

## 1. Scope and Applicability

This PCR governs gate-to-gate foreground data packages for edible flour or meal made by cleaning, preparing, drying or conditioning, milling, sieving, and packing a declared non-cereal vegetable material. It covers single-botanical and declared blends that retain the market identity of CPC 3.0 subclass 23170, including root- and tuber-based flours such as cassava, sweet potato, taro, and yam flour and comparable powders made from other declared vegetables.

The PCR does not cover wheat or meslin flour, other cereal flour, groats and meal of cereals, starches or isolated starch fractions, oil-cake or flour and meal of oil seeds or oleaginous fruits, mustard flour, potato products assigned to another prepared-vegetable subclass, mixes or doughs, or compounded food and dietary-supplement powders. It also excludes live planting material assigned to CPC 01961 and cut flowers or flower buds assigned to CPC 01962. Agricultural cultivation, transport before receipt, distribution after the packed-product gate, use, and end of life are outside the foreground boundary and require separate upstream or downstream datasets when included in a study.

The representative route is fresh cassava root to unfermented, dried, milled, sieved, packed edible flour. Other botanical sources, wet or dry starting conditions, detoxification, blanching, fermentation, dewatering, solar drying, hot-air drying, and cold storage are declared route variants. The foreground data package must never substitute the representative cassava route for an actual product without declaring the botanical source and route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-vegetable-flours-and-meals |
| classification_refs | CPC 3.0: 23170, Other vegetable flours and meals |
| covered_products | Edible single-botanical or declared blended non-cereal vegetable flours and meals produced by size reduction of dried or conditioned vegetable material and sold as flour, meal, or vegetable powder under CPC 23170. |
| excluded_products | CPC 23110/23120 cereal flours; cereal groats and meals; CPC 21920 oilseed or oleaginous-fruit flours and meals; mustard flour; isolated starches; potato preparations classified elsewhere; mixes, doughs, compounded supplements, and products whose main function is not vegetable flour or meal; CPC 01961 live planting material; CPC 01962 cut flowers and flower buds. |
| representative_product | Unfermented edible cassava flour made from fresh cassava roots. |
| production_route | Receipt and preparation; optional detoxification, blanching, pressing, or conditioning; drying; milling and sieving; sanitation; packing and release. |
| market_state | Dry, free-flowing flour or meal at the manufacturing gate in sealed sale packaging; botanical source, blend share, moisture, particle-size specification, food/feed grade, and route declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a declared other vegetable flour or meal that meets its intended grade and product specification. |
| How much | 1 kg net mass of packed saleable product at the manufacturing gate, excluding packaging mass. |
| How well | Botanical identity or blend composition, route, moisture, particle-size specification, grade, and packaging configuration are declared; cassava flour for direct human consumption meets the applicable safety specification and has moisture no greater than 13% m/m unless a stricter destination rule applies. |
| How long or cycle | One production lot released at the manufacturing gate; no storage duration or use cycle is included. |
| reference_flow_link | The reference product exchange `packaged_vegetable_flour` equals 1 kg net saleable product. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net other vegetable flour or meal |
| Reference product flow | Vegetable Powder `ec00d815-ccbe-4e9d-845a-efc929f58f56` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical species and plant part; single material or blend composition by dry mass; fresh, dried-chip, paste, or other starting condition; preparation and detoxification route; drying technology and fuel; target and measured moisture; particle-size specification; food or feed grade; packaging configuration; geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net saleable flour or meal at measured release moisture; exclude paper, polymer, pallets, and other packaging mass. |
| `moisture_basis` | Source material, intermediate material, co-products, and wastes | Mass and moisture content | kg and % m/m wet basis | Record wet mass and measured moisture for each materially different stream; convert to dry matter only through `calc_dry_matter`. |
| `energy_carriers` | Electricity, steam, fuels, and purchased heat | Energy or carrier mass | kWh, MJ, or kg | Preserve the metered unit and lower/higher heating-value basis; do not merge electricity, steam, hot water, or different fuels. |
| `packaging_mass` | Primary sale packaging | Mass | kg | Record each packaging component separately and normalize its consumed mass to 1 kg net product. |
| `refrigerant_mass` | Refrigerant charge and replenishment | Mass | kg | Record each refrigerant chemical separately; calculate leakage from charge reconciliation and product output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Vegetable source material at the receiving scale: botanical identity, plant part, supplier, origin, wet mass, moisture, and fresh, dried, paste, or other state declared. |
| starting_condition_role | Gate-to-gate foreground starting point; upstream cultivation and pre-gate processing remain linked background systems. |
| product_classification_scope | Finished reference product must resolve to CPC 3.0 subclass 23170; source agricultural products keep their own upstream identities and CPC 01961/01962 products are not reference products. |
| recursive_input_rule | Purchased flour or meal already within CPC 23170 is an upstream product input with its own dataset and is not unfolded again inside the same foreground process; its mass and share in the final blend are disclosed. |
| upstream_dataset_requirement | Supplier-specific or representative datasets are required for source vegetable material, electricity, fuels, steam, hot water, refrigerants, cleaning chemicals, packaging, and treatment services. |
| disclosure | Declare included unit operations, omitted conditional operations, botanical identity, route, yields, moisture basis, energy sources, co-product and waste status, allocation, wastewater destination, direct emissions, packaging, geography, period, and data gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground boundary | Include receipt through packed-product release, including preparation, conditioning, drying, milling, sieving, sanitation, internal rework, packaging, wastes, wastewater, and direct emissions. | `fao-save-and-grow-cassava-2013`; `olaniran-et-al-2017` |
| `boundary_complete_exchanges` | Every included process | Collect all known material, energy, product, co-product, waste, and elementary exchanges; a shared meter may be allocated only by a documented calculation rule. | `eu-pef-2021-2279` |
| `boundary_upstream_links` | Inputs before the receiving gate | Keep cultivation, pre-gate processing, and transport outside the foreground process but link them through disclosed upstream datasets; do not assign zero burdens. | `eu-pef-2021-2279` |
| `boundary_product_route` | Product identity | Exclude starch extraction, oil extraction residues, cereal milling, mustard flour, mixes and doughs, and live or floral products assigned to CPC 01961 or 01962. | `un-cpc-3-23170` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | Receipt and source-material preparation | required | Always; individual washing, peeling, cutting, grating, blanching, soaking, pressing, or detoxification steps apply only when used. | Foreground preparation | kg prepared material transferred to drying |
| `drying_conditioning` | Drying and thermal conditioning | required | Solar or ambient drying still requires material, electricity, and rejected-output records; thermal and refrigeration exchanges apply when used. | Foreground moisture removal | kg dried material transferred to milling |
| `milling_sieving` | Milling, sieving, and blending | required | Always; blending applies only to declared multi-material products. | Foreground size reduction | kg conforming loose flour transferred to packing |
| `facility_sanitation` | Food-contact cleaning and sanitation | required | Record dry cleaning and each wet-cleaning or disinfection exchange actually used. | Foreground support process | kg reference product supported |
| `packaging_release` | Packaging and product release | required | Always; each primary packaging component is recorded separately. | Foreground finishing | 1 kg net packed saleable product |

### Process: Receipt and source-material preparation (`receipt_preparation`)

#### Inputs

##### Product flows

###### Received botanical source lot (`received_vegetable_material`)

One received lot of the declared edible vegetable source crosses the gate. Its botanical species, plant part, state, supplier, mass, and moisture are recorded without replacing it by a cereal, oil-extraction residue, planting-material, or floral proxy.

- Selected flow: Vegetable source lot with declared botanical identity
- Flow property / unit: Mass / kg
- Amount rule: receiving-scale net mass assigned to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `fao-utilising-root-crops`
- Range: Provisional source-material screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg packed product
  - Basis: broad wet- or dry-source material estimate per kg product; replace with lot mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Water added for washing, re-washing, soaking, detoxification, blanching, or wet separation is one metered product input. Water already contained in the vegetable is excluded from this card and remains in moisture balance.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance water entering preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `fao-utilising-root-crops`; `fao-who-cxs-176-1989`
- Range: Provisional preparation-water screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg packed product
  - Basis: broad route-dependent estimate; zero only for evidenced dry preparation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Electricity for receiving, washing, peeling, cutting, grating, pressing, pumps, and conveyors is recorded separately from milling and drying electricity.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented equipment-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `eu-pef-2021-2279`
- Range: Provisional preparation-electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg packed product
  - Basis: broad mechanized-preparation estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium hypochlorite used on received material (`sodium_hypochlorite_preparation`)

Sodium hypochlorite contacting incoming material is recorded only when the documented food-safety procedure uses it. Do not combine it with facility disinfectant use.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: active chemical mass from solution concentration and dispensed solution mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `fao-who-cxc-1-1969`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared vegetable material (`prepared_vegetable_material`)

Prepared material leaving washing, peeling, cutting, grating, pressing, soaking, or detoxification is weighed and its moisture is measured before drying.

- Selected flow: Prepared vegetable source lot with declared botanical identity
- Flow property / unit: Mass / kg
- Amount rule: transferred batch mass at measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material transferred to drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `fao-save-and-grow-cassava-2013`

##### Waste flows

###### Rejected incoming vegetable material (`rejected_vegetable_material`)

Spoiled, contaminated, foreign, or otherwise rejected source material is recorded as one waste stream before preparation.

- Selected flow: Rejected vegetable material
- Flow property / unit: Mass / kg
- Amount rule: measured rejected lot mass and documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `eu-pef-2021-2279`

###### Peel residue (`peel_residue`)

Peels removed from the declared source material are weighed separately from incoming rejects, trimming residue, and sieve residue.

- Selected flow: Vegetable peel residue
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with moisture and management route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `fao-save-and-grow-cassava-2013`

###### Trimming residue (`trimming_residue`)

Damaged tissue and other trimming solids removed from the declared source material are weighed separately from peel and incoming rejects.

- Selected flow: Vegetable trimming residue
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with moisture and management route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `fao-save-and-grow-cassava-2013`

###### Preparation wastewater (`preparation_wastewater`)

Wastewater from washing, soaking, detoxification, blanching, pressing, or wet separation is recorded separately from sanitation wastewater.

- Selected flow: Food-processing wastewater from vegetable preparation
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or water balance, with treatment destination and relevant load data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_preparation`
- Sources: `olaniran-et-al-2017`
- Range: Provisional preparation-wastewater screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg packed product
  - Basis: broad route-dependent estimate; zero requires a documented dry route or closed water balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Drying and thermal conditioning (`drying_conditioning`)

#### Inputs

##### Product flows

###### Prepared drying feed (`drying_feed`)

The prepared material transferred from preparation is the single botanical intermediate entering drying.

- Selected flow: Prepared vegetable source lot with declared botanical identity
- Flow property / unit: Mass / kg
- Amount rule: transferred batch mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `fao-save-and-grow-cassava-2013`

###### Drying electricity (`drying_electricity`)

Electricity for fans, heat pumps, dehumidifiers, conveyors, controls, and mechanical dewatering within drying is recorded separately.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: drying-system submeter or equipment-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `olaniran-et-al-2017`; `eu-pef-2021-2279`
- Range: Provisional drying-electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg packed product
  - Basis: broad estimate spanning passive and electrically intensified drying
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased drying steam (`drying_steam`)

Purchased steam supplied to the dryer or conditioner is one utility exchange and is not merged with hot water or on-site fuel.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: condensate meter, steam meter, or documented enthalpy balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `eu-pef-2021-2279`
- Range: Provisional steam screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg packed product
  - Basis: broad route estimate; zero only when no purchased steam is used
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for drying (`drying_natural_gas`)

Natural gas combusted on site for drying heat is recorded separately from every other fuel.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: meter or invoice quantity converted on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `eu-pef-2021-2279`

###### Liquefied petroleum gas for drying (`drying_lpg`)

Liquefied petroleum gas combusted on site for drying heat is recorded as its own fuel exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: tank or invoice mass with declared heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `eu-pef-2021-2279`

###### Diesel fuel for drying or captive power (`drying_diesel`)

Diesel combusted in a dryer, boiler, or generator assigned to production is recorded separately and the equipment role is declared.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: tank issue or invoice mass assigned by operating hours or submetered generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `olaniran-et-al-2017`

###### Coal for drying (`drying_coal`)

Coal combusted in the dryer or boiler is recorded separately; coal is never represented by a generic thermal-energy card.

- Selected flow: Bituminous coal
- Flow property / unit: Mass / kg
- Amount rule: measured fuel issue with moisture, ash, and declared heating value when available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `olaniran-et-al-2017`

###### Wood pellets for drying (`drying_wood_pellets`)

Wood pellets combusted for drying heat are recorded separately with sustainable-carbon accounting kept distinct from fossil fuels.

- Selected flow: Wood pellets
- Flow property / unit: Mass / kg
- Amount rule: measured fuel issue with moisture and heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `eu-pef-2021-2279`

###### R-134a refrigerant replenishment (`drying_r134a`)

R-134a added to a heat-pump dryer or cold-conditioning system is recorded only when that chemical is present.

- Selected flow: 1,1,1,2-Tetrafluoroethane (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: annual charge reconciliation allocated by operating time and normalized output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `ipcc-2019-refrigeration`

###### R-404A refrigerant replenishment (`drying_r404a`)

R-404A added to a refrigeration or dehumidification system is recorded separately from R-134a.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass / kg
- Amount rule: annual charge reconciliation allocated by operating time and normalized output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `ipcc-2019-refrigeration`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried vegetable material (`dried_vegetable_material`)

Dried chips, granules, cake, or powder transferred to milling are weighed after equilibration and sampled for moisture.

- Selected flow: Dried vegetable source lot with declared botanical identity
- Flow property / unit: Mass / kg
- Amount rule: transferred mass at measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried material transferred to milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `fao-utilising-root-crops`; `fao-who-cxs-176-1989`

##### Waste flows

###### Dewatering wastewater (`dewatering_wastewater`)

Water mechanically expressed before thermal drying is a distinct waste stream from preparation and sanitation wastewater.

- Selected flow: Press water from vegetable material dewatering
- Flow property / unit: Mass / kg
- Amount rule: measured press-water mass or closed water balance with destination and load data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `fao-save-and-grow-cassava-2013`; `olaniran-et-al-2017`

##### Elementary flows

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil`)

Direct fossil carbon dioxide from on-site combustion is calculated from each fossil fuel separately and summed only after fuel-specific calculation.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: fuel-specific activity data multiplied by an approved fossil CO2 factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `olaniran-et-al-2017`; `eu-pef-2021-2279`

###### Biogenic carbon dioxide to air (`carbon_dioxide_biogenic`)

Direct biogenic carbon dioxide from wood-pellet combustion is recorded separately from fossil carbon dioxide.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: biomass fuel carbon balance using declared moisture and carbon content
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `eu-pef-2021-2279`

###### Methane to air (`methane_to_air`)

Methane from on-site fuel combustion is calculated as its own elementary exchange.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: fuel- and equipment-specific activity data multiplied by an approved emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `olaniran-et-al-2017`

###### Nitrous oxide to air (`nitrous_oxide_to_air`)

Nitrous oxide from on-site fuel combustion is calculated separately from methane and carbon dioxide.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: fuel- and equipment-specific activity data multiplied by an approved emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `olaniran-et-al-2017`

###### Nitrogen oxides to air (`nitrogen_oxides_to_air`)

Nitrogen oxides from combustion are recorded as a distinct air emission.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack load or fuel- and equipment-specific factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `olaniran-et-al-2017`

###### Sulfur dioxide to air (`sulfur_dioxide_to_air`)

Sulfur dioxide from sulfur-bearing fuel is recorded separately and is zero only when fuel sulfur and control data support zero.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack load or sulfur balance corrected for retained ash and controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `olaniran-et-al-2017`

###### Fine particulate matter to air (`particulate_matter_to_air`)

Combustion particulate matter with aerodynamic diameter at or below 2.5 micrometres is recorded separately from flour dust.

- Selected flow: Particulate matter, <= 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack load or fuel- and control-specific factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_conditioning`
- Sources: `eu-pef-2021-2279`

### Process: Milling, sieving, and blending (`milling_sieving`)

#### Inputs

##### Product flows

###### Dried milling feed (`milling_feed`)

The dried botanical intermediate entering the mill is weighed and moisture-matched to the drying output.

- Selected flow: Dried vegetable source lot with declared botanical identity
- Flow property / unit: Mass / kg
- Amount rule: transferred batch mass at measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming loose flour output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `fao-utilising-root-crops`

###### Milling and sieving electricity (`milling_electricity`)

Electricity for mills, sifters, aspirators, conveyors, and blenders is recorded separately from earlier operations.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or equipment-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `olaniran-et-al-2017`; `eu-pef-2021-2279`
- Range: Provisional milling-electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg packed product
  - Basis: broad first-pass estimate for milling, sieving, aspiration, and blending
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming loose vegetable flour (`milled_vegetable_flour`)

Loose flour meeting the declared moisture and particle-size specification is weighed before packaging.

- Selected flow: Vegetable flour, loose, with declared botanical identity
- Flow property / unit: Mass / kg
- Amount rule: accepted loose-product batch mass at measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming loose flour output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `fao-who-cxs-176-1989`

##### Waste flows

###### Off-specification flour (`off_spec_flour`)

Flour rejected after moisture, contamination, or particle-size testing is recorded separately from recyclable coarse sieve residue.

- Selected flow: Off-specification vegetable flour
- Flow property / unit: Mass / kg
- Amount rule: rejected batch mass, reason, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `fao-who-cxs-176-1989`

###### Coarse sieve residue (`coarse_sieve_residue`)

Coarse fibre or particles removed by sieving are weighed and classified as internal rework, saleable co-product, or waste according to actual management.

- Selected flow: Coarse vegetable fibre from flour sieving
- Flow property / unit: Mass / kg
- Amount rule: measured sieve reject mass with moisture and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `fao-who-cxs-176-1989`; `fao-utilising-root-crops`

##### Elementary flows

###### Flour dust to air (`flour_dust_to_air`)

Uncaptured vegetable flour dust emitted from milling, sieving, transfer, or bagging is recorded as an elementary exchange, separate from captured solid residue.

- Selected flow: Vegetable flour dust, to air
- Flow property / unit: Mass / kg
- Amount rule: measured concentration and exhaust volume or dust mass balance corrected for captured material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-pef-2021-2279`

### Process: Food-contact cleaning and sanitation (`facility_sanitation`)

#### Inputs

##### Product flows

###### Sanitation rinse water (`sanitation_water`)

Ambient-temperature water used to clean or rinse food-contact equipment and rooms is recorded separately from material-preparation water and hot water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: sanitation meter or event-based tank balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `fao-who-cxc-1-1969`

###### Sanitation hot water (`sanitation_hot_water`)

Purchased or separately generated hot water used for sanitation is one utility exchange and is not merged with steam or ambient water.

- Selected flow: Hot water
- Flow property / unit: Mass / kg
- Amount rule: hot-water meter or event volume, with supply temperature recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `fao-who-cxc-1-1969`
- Range: Provisional sanitation-hot-water screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg packed product
  - Basis: broad first-pass estimate; zero requires a documented dry-cleaning route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sanitation electricity (`sanitation_electricity`)

Electricity for pumps, pressure washers, vacuum systems, and cleaning support equipment is recorded separately.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submeter or equipment-load calculation assigned to sanitation events
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `eu-pef-2021-2279`

###### Sodium hydroxide cleaner (`sodium_hydroxide_cleaner`)

Sodium hydroxide used as an alkaline cleaner is recorded as active chemical mass and never combined with disinfectant.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: dispensed solution mass multiplied by active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `fao-who-cxc-1-1969`

###### Sodium hypochlorite disinfectant (`sodium_hypochlorite_disinfectant`)

Sodium hypochlorite used after cleaning is recorded as active chemical mass, separate from sodium hydroxide and material-contact treatment.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: dispensed solution mass multiplied by active concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `fao-who-cxc-1-1969`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater`)

Spent cleaning and rinse water is recorded separately from vegetable-preparation and dewatering wastewater, with treatment destination and cleaning-chemical load disclosed.

- Selected flow: Food-processing sanitation wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or event water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `fao-who-cxc-1-1969`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Packaging and product release (`packaging_release`)

#### Inputs

##### Product flows

###### Loose flour for packing (`packaging_feed`)

Conforming loose flour entering the packer is weighed and reconciled with packed product, retained samples, rework, dust, and off-specification product.

- Selected flow: Vegetable flour, loose, with declared botanical identity
- Flow property / unit: Mass / kg
- Amount rule: transferred loose-product mass at measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-utilising-root-crops`

###### Packaging electricity (`packaging_electricity`)

Electricity for conveying, filling, sealing, coding, check-weighing, and local dust collection is separately metered or calculated.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: packaging-line submeter or equipment-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `olaniran-et-al-2017`; `eu-pef-2021-2279`

###### Kraft paper sack (`kraft_paper_sack`)

The kraft paper outer sack consumed in the declared package is recorded separately from its polymer liner.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: purchased mass less stock change and measured scrap, allocated to conforming packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-utilising-root-crops`; `eu-pef-2021-2279`
- Range: Provisional paper-sack screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg net product
  - Basis: broad consumer-to-bulk package estimate; replace with bill of materials
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Low-density polyethylene liner (`ldpe_liner`)

The low-density polyethylene liner or sealed inner bag is recorded separately from the paper sack.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material mass plus measured line loss assigned to conforming packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `fao-utilising-root-crops`; `eu-pef-2021-2279`
- Range: Provisional polyethylene-liner screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net product
  - Basis: broad package estimate; zero only for a verified liner-free package
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed other vegetable flour or meal (`packaged_vegetable_flour`)

The released output is the sole reference product. It must match CPC 23170, the declared botanical and route qualifiers, measured release moisture, particle-size specification, grade, and package configuration.

- Selected flow: Vegetable Powder `ec00d815-ccbe-4e9d-845a-efc929f58f56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed at 1 kg net saleable product after release testing
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Kraft paper packaging scrap (`kraft_paper_scrap`)

Kraft paper cuttings, damaged sacks, and rejected paper packs are weighed as one packaging waste stream.

- Selected flow: Waste kraft paper
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene film scrap (`ldpe_film_scrap`)

Damaged liners, trim, and rejected low-density polyethylene film are weighed separately from paper scrap.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed vegetable flour or meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared foreground operations | Avoid allocation by submetering, batch segregation, or process subdivision whenever technically possible. | `eu-pef-2021-2279` |
| `allocation_rework` | Internal coarse fraction or conforming flour returned to the same lot | Treat internal rework as an internal loop without a co-product credit; retain the energy and material losses in the reference-product system. | `eu-pef-2021-2279` |
| `allocation_co_product` | Saleable peel, fibre, coarse meal, or other co-product | If subdivision is not possible, apply a documented physical relationship that reflects causality; dry-matter allocation is preferred for materially similar food/feed solids. If no defensible physical relationship exists, apply economic allocation and disclose prices, period, geography, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste` | Waste sent to treatment | Assign collection and treatment burdens to the reference-product system up to the declared boundary; do not create an avoided-product credit without a separately justified recovery model. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_preparation` | `receipt_preparation` | received material, water, electricity, material-contact chemical, prepared output, rejects, peel, trimming, wastewater | weighbridge and batch records; meters; chemical issue; laboratory moisture; waste manifest | lot_id; botanical_species; plant_part; state; supplier; origin; wet_mass_kg; moisture_percent; water_kg; electricity_kWh; chemical_name; solution_mass_kg; concentration; output_mass_kg; reject_mass_kg; peel_mass_kg; trimming_mass_kg; wastewater_kg; destination | Calibrated scales and meters linked to production lot; laboratory moisture sampling; chemical concentration from certificate or preparation record. | kg; % m/m; kWh | Each lot, shift, or cleaning event; meters at least monthly with production reconciliation. | At least 12 representative months or the full campaign when seasonal. | Every facility in the declared product system. | Sum eligible records, subtract documented unrelated uses, then normalize to net released product; retain lot-level moisture balance. | Calibration, meter reconciliation, batch sheets, laboratory results, invoices, chemical certificates, and treatment receipts. |
| `cp_drying_conditioning` | `drying_conditioning` | feed, dried output, electricity, steam, each fuel, each refrigerant, wastewater, and direct emissions | batch mass and moisture; utility meters; fuel and refrigerant inventory; stack or factor records | lot_id; feed_mass_kg; feed_moisture_percent; dried_mass_kg; dried_moisture_percent; electricity_kWh; steam_kg; fuel_name; fuel_mass_or_energy; heating_value_basis; refrigerant_name; opening_charge_kg; additions_kg; recovery_kg; closing_charge_kg; wastewater_kg; emission_factor_id; measured_emission_kg | Calibrated scales, moisture tests, submeters, invoices and stock reconciliation; stack measurement or approved factor calculation. | kg; % m/m; kWh; MJ | Each batch and utility period; refrigerant at service events and annual reconciliation. | At least 12 representative months or the full campaign. | Each dryer, boiler, generator, heat pump, and refrigeration system. | Allocate shared utilities by metered use or documented operating-time/load rule; calculate fuel and refrigerant emissions separately before aggregation. | Calibration, moisture closure, invoices, fuel analysis, maintenance logs, refrigerant service records, factor provenance, and stack reports. |
| `cp_milling_sieving` | `milling_sieving` | dried feed, electricity, loose flour, off-spec flour, coarse residue, and dust | batch transfer; submeter; acceptance tests; waste and dust-control records | lot_id; feed_mass_kg; feed_moisture_percent; electricity_kWh; loose_flour_kg; flour_moisture_percent; particle_size_result; off_spec_kg; coarse_residue_kg; rework_kg; captured_dust_kg; emitted_dust_kg | Calibrated scales and submeter; laboratory release tests; dust mass balance or measured exhaust. | kg; % m/m; kWh | Each lot or shift; dust measurement at permit frequency. | At least 12 representative months or full campaign. | Each mill, sifter, blender, and aspiration system. | Reconcile input with product, rework, residues, dust, and moisture change; normalize accepted output to reference product. | Calibration, sieve checks, laboratory results, rework log, filter-change record, and emission test. |
| `cp_facility_sanitation` | `facility_sanitation` | water, hot water, electricity, sodium hydroxide, sodium hypochlorite, and sanitation wastewater | sanitation event log; meters; chemical preparation and discharge records | event_id; area_or_equipment; method; start_time; water_kg; hot_water_kg; temperature_C; electricity_kWh; chemical_name; solution_mass_kg; active_concentration; wastewater_kg; treatment_destination; verification_result | Meter or event-volume measurement; chemical dilution calculation; written sanitation schedule and verification. | kg; °C; kWh | Every sanitation event. | At least 12 representative months or full campaign. | All food-contact and production-support areas included in the foreground. | Assign event totals to the cleaned line's production since the previous equivalent event; disclose multi-product allocation. | Written procedure, operator log, concentration test, temperature record, verification swab or audit, and discharge record. |
| `cp_packaging_release` | `packaging_release` | loose feed, electricity, paper sack, polyethylene liner, packed product, and packaging scrap | batch transfer; line submeter; bill of materials; stock and scrap records; release laboratory record | lot_id; loose_feed_kg; electricity_kWh; paper_sack_kg; ldpe_liner_kg; packed_net_kg; retained_sample_kg; paper_scrap_kg; ldpe_scrap_kg; moisture_percent; particle_size_result; grade; package_configuration | Calibrated check-weigher and scales; submeter; procurement and stock reconciliation; release sampling. | kg; % m/m; kWh | Each lot or packaging run; inventory reconciliation at least monthly. | At least 12 representative months or full campaign. | Every packing line in the declared system. | Reconcile loose feed with released product, retained samples, rework, waste, and dust; normalize packaging to net product. | Scale calibration, bill of materials, invoices, stock reconciliation, scrap tickets, and signed release results. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground exchange | normalized_exchange = eligible exchange amount / net released product mass; net released product excludes packaging and nonconforming product. | exchange amount; net released product kg | exchange per kg reference product | `eu-pef-2021-2279` |
| `calc_dry_matter` | Moist source, intermediate, product, co-product, and waste | dry_mass = wet_mass × (1 - moisture_percent / 100). Keep original wet mass and moisture result. | wet mass; moisture % m/m | dry mass kg | `fao-who-cxs-176-1989` |
| `calc_mass_balance` | Each process and total foreground | mass closure = identified outputs and measured mass loss divided by identified inputs; investigate differences outside the declared tolerance and never use unexplained loss as an elementary flow. | input, product, waste, wastewater, retained sample, moisture data | wet- and dry-matter closure | `eu-pef-2021-2279` |
| `calc_active_cleaner` | Sodium hydroxide and sodium hypochlorite | active chemical mass = dispensed solution mass × active concentration mass fraction. | solution mass; concentration | kg active chemical | `fao-who-cxc-1-1969` |
| `calc_combustion_emissions` | Each on-site fuel and pollutant | pollutant mass = fuel activity on declared basis × approved fuel/equipment-specific emission factor; document factor identity and control efficiency. | fuel amount; heating value; factor; control efficiency | kg pollutant per kg product | `olaniran-et-al-2017`; `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | Each refrigerant chemical | loss = opening charge + additions - recovered amount - closing charge; allocate only the share attributable to included systems and period. | opening, additions, recovery, closing charge; output | kg refrigerant loss per kg product | `ipcc-2019-refrigeration` |
| `calc_allocation` | Multi-product operations | Apply the declared subdivision or allocation rule consistently to all shared inputs and outputs; retain unallocated totals and allocation factors. | total exchanges; product quantities; physical or economic factors | allocated exchanges | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and source material | Botanical species, plant part, CPC 23170 product status, route, grade, blend composition, moisture, particle size, and packaging must be traceable to each released lot. | Approved specification, supplier records, batch genealogy, and release certificate. |
| `dq_temporal` | Foreground activity data | Use at least 12 representative months or the full seasonal campaign; disclose shutdowns, abnormal batches, and extrapolation. | Dated meter, production, invoice, inventory, maintenance, and laboratory records. |
| `dq_completeness` | Every process | Reconcile all known material and energy inputs with products, co-products, wastes, wastewater, and direct emissions; document zero and not-applicable decisions for each atomic card. | Process-level wet and dry mass balances, energy reconciliation, and completeness checklist. |
| `dq_measurement` | Scales, meters, moisture, particle size, emissions, and chemical concentration | Use calibrated equipment and retain method, sampling frequency, detection limit, and uncertainty where material. | Calibration certificates, methods, quality-control charts, and test reports. |
| `dq_geography_technology` | Background links and shared utilities | Match geography, voltage, fuel, steam source, dryer technology, wastewater treatment, refrigerant, and packaging material to the foreground period and site. | Supplier declarations, contracts, invoices, equipment records, and dataset metadata. |
| `dq_provisional_ranges` | Every `reasoned_estimate` range | Treat the range only as a temporary screening prior; do not replace collected values with its midpoint and replace or explicitly review it before `reviewed_methodology`. | Review record identifying retained, replaced, or removed ranges. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require UUID `ec00d815-ccbe-4e9d-845a-efc929f58f56`, Product flow, CPC 3.0 code 23170 and title, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. | `un-cpc-3-23170` |
| `validate_scope_exclusions` | Product identity | Reject cereal flour, oilseed or oleaginous-fruit flour or meal, mustard flour, isolated starch, mixes or doughs, CPC 01961 planting material, CPC 01962 flowers, and any compounded product whose function is not vegetable flour or meal. | `un-cpc-3-23170` |
| `validate_qualifiers` | Product and dataset metadata | Fail completeness when botanical identity, route, starting condition, moisture, particle size, grade, packaging, geography, or period is missing. | `fao-who-cxs-176-1989`; `eu-pef-2021-2279` |
| `validate_cassava_moisture` | Cassava flour for direct human consumption | Require measured release moisture <= 13% m/m unless a stricter destination requirement applies; for other botanical products require their applicable declared specification rather than silently applying the cassava limit. | `fao-who-cxs-176-1989` |
| `validate_atomic_inventory` | Process inventory | Electricity, steam, hot water, each fuel, each refrigerant, each cleaner, each packaging component, each waste stream, wastewater, and each pollutant must remain separate atomic exchanges. | `eu-pef-2021-2279` |
| `validate_mass_balance` | Every process | Require documented wet- and dry-matter closure; investigate unexplained differences and prohibit balancing with an invented emission. | `eu-pef-2021-2279` |
| `validate_route_zeroes` | Conditional exchanges | A zero or not-applicable entry requires evidence that the named exchange is absent; an unmetered or unknown value is a data gap, not zero. | `eu-pef-2021-2279` |
| `validate_sanitation` | Cleaning and disinfection | Require written method, frequency, chemical identity and concentration, water temperature when relevant, responsibility, and monitoring or verification evidence. | `fao-who-cxc-1-1969` |
| `validate_allocation` | Co-products and shared utilities | Require subdivision evidence or a disclosed physical/economic allocation basis, factors summing to one, consistent application, and sensitivity where economic allocation is used. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | Reasoned estimates | Flag every provisional range for review and prohibit presenting it as an observed, allowed, or source-backed range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset for 1 kg net packed other vegetable flour or meal. |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and linkage to representative upstream and treatment datasets. |
| allowed_use | Product-specific process or lifecycle models that match the declared botanical source, route, moisture, grade, geography, period, allocation, and package. |
| excluded_use | Direct substitution for cereal flour, oilseed meal, starch, mustard flour, mixes, planting material, cut flowers, unqualified vegetable powders, agricultural cultivation, or cradle-to-grave claims without additional stages. |
| required_metadata | PCR id and version; reference UUIDs; botanical species and plant part; blend shares; starting state; route; facility and geography; period; technology; moisture and particle size; grade; yields; energy and fuel sources; refrigerants; cleaning chemicals; wastewater and waste destinations; direct emissions; packaging; allocation; upstream dataset identities; data gaps. |
| required_quality_disclosure | Coverage period and sites; primary-data share; calibration and sampling; mass and energy closure; allocation; background-data representativeness; provisional estimates; unresolved UUIDs; exclusions and limitations. |
| update_trigger | Change in botanical source or blend, starting condition, detoxification or conditioning route, dryer or fuel, refrigeration system, cleaner, packaging, co-product status, allocation, facility, geography, product specification, or a material change in annual normalized exchange. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-23170` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, 30 June 2025, subclass 23170. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-20). | Official category identity and separation from CPC 01961 and 01962 and other product subclasses. |
| `fao-who-cxs-176-1989` | standard | FAO/WHO Codex Alimentarius, CXS 176-1989, Standard for Edible Cassava Flour, adopted 1989, revised 1995, amended 2013. https://www.fao.org/input/download/standards/59/CXS_176e.pdf (retrieved 2026-08-20). | Representative product definition, grinding or milling and sifting route, bitter-cassava soaking, safety, and 13% m/m moisture limit. |
| `fao-save-and-grow-cassava-2013` | official_guidance | FAO, Save and Grow: Cassava—A guide to sustainable production intensification, 2013, Chapter 7. https://www.fao.org/4/i3278e/i3278e.pdf (retrieved 2026-08-20). | High-quality cassava flour process decomposition: peeling, washing, grating, pressing, disintegration, sifting, drying, milling, screening, packaging, and storage. |
| `fao-utilising-root-crops` | handbook | FAO, Utilising Root Crops, Section 2: Root crop flour. https://www.fao.org/4/x5049E/x5049E04.htm (retrieved 2026-08-20). | Cassava, sweet potato, taro, and yam flour route; washing, peeling, slicing, drying, grinding, sieving, sealed bags or sacks, and storage. |
| `fao-who-cxc-1-1969` | standard | FAO/WHO Codex Alimentarius, CXC 1-1969, General Principles of Food Hygiene, 2022 revision. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+1-1969%2FCXC_001e.pdf (retrieved 2026-08-20). | Atomic cleaning inputs, hot-water rinsing, chemical concentration, written sanitation procedures, monitoring, and verification. |
| `olaniran-et-al-2017` | literature | Olaniran, J. A.; Jekayinfa, S. O.; Agbarha, H. A. (2017). Life cycle assessment of cassava flour production: A case study in Southwest Nigeria. Journal of Engineering and Technology Research 9(1), 6-13. DOI: 10.5897/JETR2015.0580. OpenAlex: W2753030442. Full text: https://academicjournals.org/journal/JETR/article-full-text-pdf/F4996CC65461 (retrieved 2026-08-20). | Peer-reviewed full-text evidence for unit operations, foreground inventory, drying and milling energy relevance, coal and diesel, wastewater, and CO2, CH4, N2O, NOx, and SO2 exchanges. |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I, as corrected 23 May 2022. https://eur-lex.europa.eu/eli/reco/2021/2279/corrigendum/2022-05-23/oj/eng (retrieved 2026-08-20). | Company-specific process data, complete material/energy/product/waste/emission inventory, calculation from activity data and factors, data quality, and allocation hierarchy. |
| `ipcc-2019-refrigeration` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 3, Chapter 7, Emissions of Fluorinated Substitutes for Ozone Depleting Substances. https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol3.html (retrieved 2026-08-20). | Refrigerant-specific charge, service, recovery, and leakage accounting. |
