---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-paste-whether-or-not-defatted
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cocoa paste, whether or not defatted

## 1. Scope and Applicability

This PCR governs foreground data packages for cocoa paste made from cocoa nibs, whether the paste retains its natural cocoa butter or is partially defatted while remaining a paste product. It covers plant-gate manufacture from merchantable cocoa beans or purchased cocoa nibs through preparation, grinding, optional alkalisation, optional pressing or other defatting, conditioning, storage, and packaging.

The foreground boundary excludes cocoa cultivation, fermentation and drying at origin, inbound transport before the declared plant gate, manufacture of separately purchased ingredients and packaging, distribution of the finished paste, chocolate manufacture, consumer use, and end of life. Those excluded life-cycle stages require linked upstream or downstream datasets when the study goal extends beyond gate-to-gate production.

Cocoa butter recovered as a saleable co-product is included. Cocoa cake, cocoa powder, finished chocolate, sweetened cocoa preparations, cocoa butter sold as the sole reference product, and waste-only treatment datasets are excluded. A product that is pressed to a solid cake or pulverised powder is outside this PCR even if it originated from cocoa paste.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-paste-whether-or-not-defatted |
| classification_refs | CPC 3.0: 23610 Cocoa paste, whether or not defatted |
| covered_products | Unsweetened cocoa mass, cocoa liquor, chocolate liquor, cocoa paste, and partially defatted cocoa paste that remains in paste form |
| excluded_products | Cocoa cake; cocoa powder; cocoa butter as the sole reference product; sweetened cocoa preparations; chocolate and chocolate products; cocoa-shell products |
| representative_product | Bulk unsweetened cocoa paste at the manufacturing plant gate, with measured cocoa-butter content and declared defatting status |
| production_route | Receipt of merchantable cocoa beans or cocoa nibs; conditional cleaning, roasting, cracking and winnowing; grinding and refining; conditional alkalisation; conditional defatting with cocoa-butter recovery; conditioning, storage, and packing |
| market_state | Bulk or packed paste at plant gate; moisture, cocoa-butter content, alkalisation status, roasting route, packaging state, and product temperature or conditioning state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cocoa paste suitable for sale or transfer to further cocoa or chocolate manufacture |
| How much | 1,000 kg net cocoa paste at the declared plant gate |
| How well | Meets the declared product specification and market requirements; remains a paste rather than cocoa cake or powder; defatting and alkalisation status are stated |
| How long or cycle | One production lot or reporting-period aggregate delivered at the plant gate; no service duration |
| reference_flow_link | The mass of conforming net cocoa paste output after off-spec material and packaging tare are excluded |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Cocoa paste, whether or not defatted `5b331659-2216-4cc7-9e6d-11bb0b50226f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cocoa-butter mass fraction; defatting status and technology; whole-bean or purchased-nib starting route; roasting status; alkalisation status and agent; moisture basis; product physical state; packaging state; geography; technology; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalised inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass excluding packaging tare and normalise the foreground inventory to 1,000 kg of conforming cocoa paste output. |
| `moisture_basis` | cocoa beans, nibs, paste, cocoa butter, rejects, and mass-balance checks | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass and moisture or solids basis for each material stream; do not compare or allocate dry-basis and as-received masses without conversion. |
| `energy_units` | grid electricity, purchased steam, purchased hot water, natural gas, diesel and LPG rows | Energy; UUID unresolved | kWh for electricity; MJ for each heat or fuel carrier | Preserve each carrier's measured unit and conversion factor; never pool electricity, steam, hot water or fuels into a thermal-energy total. |
| `fat_content_basis` | cocoa-butter content and defatting yield | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg or % m/m | State whether cocoa-butter content is measured on an as-received or dry basis and retain the laboratory method and sample identity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Merchantable cocoa beans or cocoa nibs received at the foreground plant gate with supplier, origin, moisture, bean-or-nib state, and upstream dataset reference declared |
| starting_condition_role | First technosphere material input to the foreground cocoa-paste manufacturing system |
| product_classification_scope | Cocoa paste, whether or not defatted; CPC 3.0 code 23610 is classification context and does not replace the semantic product boundary |
| recursive_input_rule | Purchased cocoa paste in the same product category is recorded as an input linked to an upstream cocoa-paste dataset; its manufacture is not recreated inside the receiving process |
| upstream_dataset_requirement | Link cocoa-bean or nib production, purchased cocoa paste, energy carriers, water supply, alkalising agents, packaging, transport, and waste treatment to geographically and temporally appropriate upstream datasets when the study extends beyond the foreground gate |
| disclosure | Declare starting material, origin and supplier mix, roasting and alkalisation routes, defatting technology, cocoa-butter co-product handling, recycled internal material, exclusions, cut-offs, geography, technology, and reference period |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | all foreground processes | Include all operated preparation, grinding, alkalisation, defatting, conditioning, storage, packing, cleaning, utility use, direct emissions, wastes, and co-products that occur between the declared starting condition and the plant-gate reference product. | `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_links` | purchased materials, utilities, transport, and treatment services | Keep excluded upstream production outside the foreground inventory but provide explicit linked datasets and disclose any proxy or data gap when a cradle-to-gate or broader result is produced. | `eu-pef-recommendation-2021-2279` |
| `boundary_cutoff` | foreground exclusions | Avoid cut-off for cocoa material, energy, water, alkalising agents, packaging, saleable co-products, wastes, wastewater, and direct emissions; any other exclusion must be explicit, justified, and demonstrated to satisfy the cumulative material, energy, and environmental-significance screen used by the declared study method. | `eu-pef-recommendation-2021-2279` |
| `boundary_internal_recycling` | reworked cocoa paste and internally recycled cocoa material | Record internal recycling without duplicating upstream production; disclose stock changes and losses and ensure the same mass is not counted as both fresh input and recycled input. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bean_to_nib_preparation` | Cocoa-bean preparation to nibs | `conditional` | Required when whole cocoa beans enter the foreground plant; omitted when the documented starting condition is purchased cocoa nibs | Foreground material preparation | kg prepared cocoa nibs |
| `nib_grinding_paste_manufacture` | Nib grinding and cocoa-paste manufacture | `required` | Always included when cocoa paste is manufactured from nibs; purchased same-category cocoa paste follows the recursive-input rule | Foreground cocoa-paste production | kg cocoa-paste intermediate |
| `paste_defatting` | Cocoa-paste defatting and cocoa-butter separation | `conditional` | Included when cocoa butter is removed from cocoa paste in the foreground plant | Foreground separation and co-product production | kg paste feed and kg each saleable output |
| `paste_finishing_packing` | Cocoa-paste finishing, storage and packing | `required` | Always included through measurement of net reference product at the plant gate | Foreground finished-product handling | 1,000 kg conforming cocoa paste |
| `plant_cleaning_sanitation` | Plant cleaning and sanitation | `required` | Always include attributable plant sanitation; each chemical and heat carrier applies only when actually used | Foreground hygiene support | 1,000 kg net reference product served |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Included when cocoa-processing wastewater is treated on site before discharge or transfer | Foreground pollution control | kg equalised cocoa-processing wastewater treated |

### Process: Cocoa-bean preparation to nibs (`bean_to_nib_preparation`)

#### Inputs

##### Product flows

###### Cocoa beans entering preparation (`cocoa_beans_input`)

Merchantable cocoa beans enter cleaning, roasting, cracking and winnowing as one raw-material exchange; purchased nibs bypass this process.

- Selected flow: Cocoa beans
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured accepted cocoa-bean mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting grid electricity (`preparation_grid_electricity_input`)

Grid electricity supplied to bean preparation and roasting is recorded separately from purchased heat and on-site fuels.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow property and unit-group UUIDs unresolved
- Amount rule: measured bean preparation and roasting grid-electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting purchased steam (`preparation_purchased_steam_input`)

Purchased steam crossing the facility boundary for bean preparation and roasting is metered separately from hot water and direct fuels.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased steam supplied to bean preparation and roasting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting purchased hot water (`preparation_purchased_hot_water_input`)

Purchased hot water used by bean preparation and roasting is recorded as one heat-supply exchange and is not pooled with steam.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased hot-water energy supplied to bean preparation and roasting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting natural gas (`preparation_natural_gas_input`)

Natural gas burned on site for bean preparation and roasting is recorded from its own meter or fuel reconciliation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured natural-gas energy used for bean preparation and roasting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting diesel fuel (`preparation_diesel_input`)

Diesel burned on site for bean preparation and roasting is recorded independently from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured diesel energy used for bean preparation and roasting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting liquefied petroleum gas (`preparation_lpg_input`)

Liquefied petroleum gas burned on site for bean preparation and roasting is recorded as its own fuel exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured LPG energy used for bean preparation and roasting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting process water (`preparation_process_water_input`)

Water supplied directly to bean preparation and roasting is measured separately from plant sanitation water.

- Selected flow: Process water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured process-water mass supplied to bean preparation and roasting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared cocoa nibs (`prepared_cocoa_nibs_output`)

Prepared cocoa nibs transferred to grinding are weighed with moisture, roasting state and lot identity retained.

- Selected flow: Cocoa nibs
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured prepared cocoa-nib mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Saleable cocoa shells (`cocoa_shell_coproduct_output`)

Cocoa shells leaving as a documented saleable output are weighed separately from shells consigned as waste.

- Selected flow: Cocoa shells for further processing
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured saleable cocoa-shell mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Cocoa shell waste (`cocoa_shell_waste_output`)

Cocoa shells consigned to waste treatment are weighed as one specific waste and linked to their receiving treatment.

- Selected flow: Waste cocoa shells
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured waste cocoa-shell mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Stone rejects (`stone_reject_waste_output`)

Stones removed during bean cleaning are weighed separately from cocoa-derived residues.

- Selected flow: Waste stones from cocoa-bean cleaning
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured rejected-stone mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Rejected cocoa beans (`rejected_cocoa_beans_waste_output`)

Immature, damaged or otherwise rejected cocoa beans not returned to a supplier are weighed as a specific cocoa-bean waste.

- Selected flow: Waste rejected cocoa beans
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured rejected cocoa-bean mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Collected cocoa dust (`cocoa_dust_waste_output`)

Cocoa dust captured from preparation equipment is weighed separately and linked to its actual treatment.

- Selected flow: Waste collected cocoa dust
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured collected cocoa-dust mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean-preparation wastewater (`preparation_wastewater_output`)

Wastewater from wet bean cleaning or preparation washdown is measured before common treatment and remains distinct from direct water emissions.

- Selected flow: Wastewater from cocoa-bean preparation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or mass-balance-calculated bean-preparation wastewater
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`; `mass-balance-identity`

##### Elementary flows

###### Bean preparation and roasting fossil carbon dioxide emission (`preparation_fossil_co2_air_output`)

Fossil carbon dioxide from the separately recorded on-site fuels used by bean preparation and roasting is measured or calculated as one elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated fossil carbon dioxide released by bean preparation and roasting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting nitrogen oxides emission (`preparation_nox_air_output`)

Nitrogen oxides from direct fuel combustion for bean preparation and roasting are measured or calculated separately from every other pollutant.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated nitrogen oxides released by bean preparation and roasting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting sulfur oxides emission (`preparation_sox_air_output`)

Sulfur oxides from direct fuel combustion for bean preparation and roasting are quantified as one distinct air emission.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated sulfur oxides released by bean preparation and roasting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Bean preparation and roasting fine particulate matter emission (`preparation_pm25_air_output`)

Primary PM2.5 from direct fuel combustion for bean preparation and roasting is measured or calculated separately from gaseous emissions.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated primary PM2.5 released by bean preparation and roasting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared cocoa nib output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bean_preparation_records`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Nib grinding and cocoa-paste manufacture (`nib_grinding_paste_manufacture`)

#### Inputs

##### Product flows

###### Internally prepared cocoa nibs (`prepared_cocoa_nibs_input`)

Prepared nibs transferred from the foreground preparation process enter grinding as one traceable intermediate exchange.

- Selected flow: Cocoa nibs
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured internally prepared cocoa-nib mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Purchased cocoa nibs (`purchased_cocoa_nibs_input`)

Purchased nibs crossing the facility boundary enter grinding separately from internally prepared nibs and retain their upstream dataset reference.

- Selected flow: Cocoa nibs, purchased
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured purchased cocoa-nib mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Nib grinding and paste manufacture grid electricity (`grinding_grid_electricity_input`)

Grid electricity supplied to nib grinding and paste manufacture is recorded separately from purchased heat and on-site fuels.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow property and unit-group UUIDs unresolved
- Amount rule: measured nib grinding and paste manufacture grid-electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nib grinding and paste manufacture purchased steam (`grinding_purchased_steam_input`)

Purchased steam crossing the facility boundary for nib grinding and paste manufacture is metered separately from hot water and direct fuels.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased steam supplied to nib grinding and paste manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nib grinding and paste manufacture purchased hot water (`grinding_purchased_hot_water_input`)

Purchased hot water used by nib grinding and paste manufacture is recorded as one heat-supply exchange and is not pooled with steam.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased hot-water energy supplied to nib grinding and paste manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nib grinding and paste manufacture process water (`grinding_process_water_input`)

Water supplied directly to nib grinding and paste manufacture is measured separately from plant sanitation water.

- Selected flow: Process water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured process-water mass supplied to nib grinding and paste manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Potassium carbonate alkalising agent (`potassium_carbonate_input`)

Potassium carbonate used for alkalisation is weighed as one chemical input with grade and recipe identity retained.

- Selected flow: Potassium carbonate
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured potassium-carbonate mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Sodium carbonate alkalising agent (`sodium_carbonate_input`)

Sodium carbonate used for alkalisation is recorded separately from every other alkalising chemical.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured sodium-carbonate mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Potassium hydroxide alkalising agent (`potassium_hydroxide_input`)

Potassium hydroxide used for alkalisation is recorded from the product-specific dosing record.

- Selected flow: Potassium hydroxide
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured potassium-hydroxide mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Sodium hydroxide alkalising agent (`sodium_hydroxide_alkalising_input`)

Sodium hydroxide used as an alkalising agent is recorded independently from sodium-hydroxide cleaning formulation.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured alkalising sodium-hydroxide mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cocoa-paste intermediate (`cocoa_paste_intermediate_output`)

Paste leaving grinding before optional defatting or final conditioning is weighed with cocoa-butter content, moisture and alkalisation status.

- Selected flow: Cocoa paste intermediate
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured cocoa-paste intermediate mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Grinding filter residue (`grinding_filter_residue_waste_output`)

Filter residue removed from the grinding line is weighed separately from spills and off-spec paste.

- Selected flow: Waste cocoa grinding filter residue
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured cocoa grinding filter-residue mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spilled cocoa material (`grinding_spill_waste_output`)

Cocoa material collected from a grinding-line spill and not returned as controlled rework is recorded as one waste exchange.

- Selected flow: Waste spilled cocoa material
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured spilled cocoa-material mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Off-spec paste from grinding (`grinding_off_spec_paste_waste_output`)

Off-spec paste leaving grinding for treatment rather than internal rework is weighed independently from other residues.

- Selected flow: Waste off-spec cocoa paste from grinding
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured off-spec grinding-paste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Grinding-process wastewater (`grinding_wastewater_output`)

Wastewater attributable to grinding or alkalisation is measured before common treatment as one stage-specific waste flow.

- Selected flow: Wastewater from cocoa nib grinding
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or mass-balance-calculated grinding wastewater
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoa-paste intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`; `mass-balance-identity`

##### Elementary flows

### Process: Cocoa-paste defatting and cocoa-butter separation (`paste_defatting`)

#### Inputs

##### Product flows

###### Cocoa paste entering defatting (`cocoa_paste_to_press_input`)

Cocoa paste entering pressing or another declared defatting technology is weighed with moisture and inlet cocoa-butter content.

- Selected flow: Cocoa paste intermediate
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured cocoa-paste feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa paste entering defatting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defatting_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Paste defatting grid electricity (`defatting_grid_electricity_input`)

Grid electricity supplied to paste defatting is recorded separately from purchased heat and on-site fuels.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow property and unit-group UUIDs unresolved
- Amount rule: measured paste defatting grid-electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoa paste entering defatting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defatting_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Paste defatting purchased steam (`defatting_purchased_steam_input`)

Purchased steam crossing the facility boundary for paste defatting is metered separately from hot water and direct fuels.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased steam supplied to paste defatting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cocoa paste entering defatting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defatting_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Paste defatting purchased hot water (`defatting_purchased_hot_water_input`)

Purchased hot water used by paste defatting is recorded as one heat-supply exchange and is not pooled with steam.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased hot-water energy supplied to paste defatting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cocoa paste entering defatting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defatting_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Defatted cocoa paste (`defatted_cocoa_paste_output`)

The retained fraction is recorded here only when it remains a paste and meets the declared product specification.

- Selected flow: Defatted cocoa paste
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured defatted cocoa-paste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa paste entering defatting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defatting_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Recovered cocoa butter (`cocoa_butter_coproduct_output`)

Saleable cocoa butter recovered during defatting is weighed separately from paste and cocoa cake for allocation.

- Selected flow: Cocoa butter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured recovered cocoa-butter mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa paste entering defatting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defatting_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Cocoa cake (`cocoa_cake_coproduct_output`)

Solid cocoa cake produced by pressing is weighed as a specific co-product and cannot be included in reference cocoa-paste mass.

- Selected flow: Cocoa cake
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured cocoa-cake mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cocoa paste entering defatting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defatting_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Defatting filter residue (`defatting_filter_residue_waste_output`)

Non-saleable filter residue from defatting is weighed as one specific waste and linked to its treatment.

- Selected flow: Waste cocoa defatting filter residue
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured defatting filter-residue mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoa paste entering defatting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defatting_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

### Process: Cocoa-paste finishing, storage and packing (`paste_finishing_packing`)

#### Inputs

##### Product flows

###### Internally produced cocoa paste (`internal_cocoa_paste_finishing_input`)

Cocoa paste transferred from grinding or defatting enters final conditioning as an internal intermediate with rework separately identified.

- Selected flow: Cocoa paste intermediate
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured internal cocoa-paste mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Purchased cocoa paste (`purchased_cocoa_paste_input`)

Purchased cocoa paste crossing the facility boundary is recorded separately from internally produced paste and retains its upstream dataset reference.

- Selected flow: Cocoa paste, purchased
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured purchased cocoa-paste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### Paste finishing and packing grid electricity (`finishing_grid_electricity_input`)

Grid electricity supplied to paste finishing and packing is recorded separately from purchased heat and on-site fuels.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow property and unit-group UUIDs unresolved
- Amount rule: measured paste finishing and packing grid-electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Paste finishing and packing purchased steam (`finishing_purchased_steam_input`)

Purchased steam crossing the facility boundary for paste finishing and packing is metered separately from hot water and direct fuels.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased steam supplied to paste finishing and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Paste finishing and packing purchased hot water (`finishing_purchased_hot_water_input`)

Purchased hot water used by paste finishing and packing is recorded as one heat-supply exchange and is not pooled with steam.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased hot-water energy supplied to paste finishing and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Polyethylene product liner (`polyethylene_liner_input`)

A polyethylene liner contacting or enclosing cocoa paste is weighed separately from every rigid package and transport component.

- Selected flow: Polyethylene packaging liner
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured polyethylene-liner mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Steel drum (`steel_drum_input`)

A steel drum used for cocoa-paste dispatch is recorded as one packaging component by measured empty mass and count.

- Selected flow: Steel packaging drum
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured steel-drum mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Corrugated paperboard carton (`corrugated_carton_input`)

A corrugated carton used for blocks or liners is weighed separately from the liner and pallet.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured corrugated-carton mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wood pallet (`wood_pallet_input`)

A wooden pallet assigned to dispatched product is recorded from pallet mass and the documented reuse allocation.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured wood-pallet mass assigned to product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Polypropylene strapping (`polypropylene_strapping_input`)

Polypropylene strapping used to secure the package is weighed independently from polyethylene film.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured polypropylene-strap mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Paper product label (`paper_label_input`)

Paper labels applied to the package are recorded as one paper input separately from corrugated board.

- Selected flow: Paper packaging label
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured paper-label mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net cocoa-paste reference product (`reference_cocoa_paste_output`)

Conforming net cocoa paste leaves the foreground plant gate at exactly 1,000 kg after packaging tare is excluded; this is the only inventory row carrying the verified reference UUID.

- Selected flow: Cocoa paste, whether or not defatted `5b331659-2216-4cc7-9e6d-11bb0b50226f`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: conforming net cocoa-paste mass normalized to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `codex-cxs-141-1983-2025`; `mass-balance-identity`

##### Waste flows

###### Off-spec cocoa paste (`off_spec_cocoa_paste_waste_output`)

Off-spec paste not returned as controlled internal rework is weighed as one product-specific waste and linked to its destination.

- Selected flow: Waste off-spec cocoa paste
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured off-spec cocoa-paste waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Waste polyethylene liner (`polyethylene_film_waste_output`)

Damaged, trimmed or unused polyethylene liner material is weighed separately from all other packaging waste.

- Selected flow: Waste polyethylene packaging film
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured waste polyethylene-film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Waste steel drum (`steel_drum_waste_output`)

A rejected steel drum leaving as waste is recorded by its measured mass and actual treatment destination.

- Selected flow: Waste steel packaging drum
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured waste steel-drum mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Waste corrugated paperboard (`corrugated_carton_waste_output`)

Damaged or unused corrugated carton material is weighed as one paperboard waste exchange.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured waste corrugated-paperboard mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Waste wood pallet (`wood_pallet_waste_output`)

A non-reusable wooden pallet consigned to treatment is recorded separately from paper, steel and plastic packaging.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured waste wood-pallet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Waste polypropylene strapping (`polypropylene_strapping_waste_output`)

Discarded polypropylene strapping is weighed independently from polyethylene liner waste.

- Selected flow: Waste polypropylene packaging strap
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured waste polypropylene-strap mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Waste paper label stock (`paper_label_waste_output`)

Rejected or unused paper label stock is weighed separately from corrugated paperboard.

- Selected flow: Waste paper label stock
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured waste paper-label mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

### Process: Plant cleaning and sanitation (`plant_cleaning_sanitation`)

#### Inputs

##### Product flows

###### Plant sanitation water (`sanitation_process_water_input`)

Water supplied to cleaning and sanitation is metered separately from water added to cocoa-processing stages.

- Selected flow: Process water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured plant-sanitation water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation grid electricity (`sanitation_grid_electricity_input`)

Grid electricity supplied to plant cleaning and sanitation is recorded separately from purchased heat and on-site fuels.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow property and unit-group UUIDs unresolved
- Amount rule: measured plant cleaning and sanitation grid-electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation purchased steam (`sanitation_purchased_steam_input`)

Purchased steam crossing the facility boundary for plant cleaning and sanitation is metered separately from hot water and direct fuels.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased steam supplied to plant cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation purchased hot water (`sanitation_purchased_hot_water_input`)

Purchased hot water used by plant cleaning and sanitation is recorded as one heat-supply exchange and is not pooled with steam.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured purchased hot-water energy supplied to plant cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation natural gas (`sanitation_natural_gas_input`)

Natural gas burned on site for plant cleaning and sanitation is recorded from its own meter or fuel reconciliation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured natural-gas energy used for plant cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation diesel fuel (`sanitation_diesel_input`)

Diesel burned on site for plant cleaning and sanitation is recorded independently from natural gas and LPG.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured diesel energy used for plant cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation liquefied petroleum gas (`sanitation_lpg_input`)

Liquefied petroleum gas burned on site for plant cleaning and sanitation is recorded as its own fuel exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ; flow property and unit-group UUIDs unresolved
- Amount rule: measured LPG energy used for plant cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sodium hydroxide cleaner (`sodium_hydroxide_cleaner_input`)

Supplied sodium-hydroxide cleaning formulation is recorded by formulation mass with active concentration retained.

- Selected flow: Sodium hydroxide cleaning formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured sodium-hydroxide cleaning-formulation mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nitric acid cleaner (`nitric_acid_cleaner_input`)

Supplied nitric-acid cleaning formulation is weighed separately from alkaline cleaner and disinfectant.

- Selected flow: Nitric acid cleaning formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured nitric-acid cleaning-formulation mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Peracetic acid disinfectant (`peracetic_acid_disinfectant_input`)

Supplied peracetic-acid disinfectant is recorded as one formulation with active concentration retained.

- Selected flow: Peracetic acid disinfectant formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured peracetic-acid disinfectant-formulation mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sodium hypochlorite disinfectant (`sodium_hypochlorite_disinfectant_input`)

Supplied sodium-hypochlorite disinfectant is recorded independently from peracetic acid.

- Selected flow: Sodium hypochlorite disinfectant formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured sodium-hypochlorite disinfectant-formulation mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Alkaline cleaning wastewater (`alkaline_cleaning_wastewater_output`)

Wastewater collected from the alkaline cleaning step is measured separately before equalisation.

- Selected flow: Wastewater from alkaline plant cleaning
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured alkaline-cleaning wastewater mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Acid cleaning wastewater (`acid_cleaning_wastewater_output`)

Wastewater collected from the acid cleaning step is measured separately from alkaline wash water.

- Selected flow: Wastewater from acid plant cleaning
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured acid-cleaning wastewater mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Peracetic disinfection wastewater (`peracetic_disinfection_wastewater_output`)

Wastewater from peracetic-acid disinfection is recorded as one composition-specific wastewater exchange.

- Selected flow: Wastewater from peracetic acid disinfection
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured peracetic-disinfection wastewater mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Hypochlorite disinfection wastewater (`hypochlorite_disinfection_wastewater_output`)

Wastewater from sodium-hypochlorite disinfection is recorded independently from every other sanitation wastewater.

- Selected flow: Wastewater from sodium hypochlorite disinfection
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured hypochlorite-disinfection wastewater mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Used cleaning cloth waste (`used_cleaning_cloth_waste_output`)

Discarded cleaning cloth is weighed as one solid waste and linked to its actual treatment.

- Selected flow: Waste used cleaning cloth
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured used cleaning-cloth waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Plant cleaning and sanitation fossil carbon dioxide emission (`sanitation_fossil_co2_air_output`)

Fossil carbon dioxide from the separately recorded on-site fuels used by plant cleaning and sanitation is measured or calculated as one elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated fossil carbon dioxide released by plant cleaning and sanitation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation nitrogen oxides emission (`sanitation_nox_air_output`)

Nitrogen oxides from direct fuel combustion for plant cleaning and sanitation are measured or calculated separately from every other pollutant.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated nitrogen oxides released by plant cleaning and sanitation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation sulfur oxides emission (`sanitation_sox_air_output`)

Sulfur oxides from direct fuel combustion for plant cleaning and sanitation are quantified as one distinct air emission.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated sulfur oxides released by plant cleaning and sanitation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plant cleaning and sanitation fine particulate matter emission (`sanitation_pm25_air_output`)

Primary PM2.5 from direct fuel combustion for plant cleaning and sanitation is measured or calculated separately from gaseous emissions.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated primary PM2.5 released by plant cleaning and sanitation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment grid electricity (`wastewater_treatment_grid_electricity_input`)

Grid electricity supplied to on-site wastewater treatment is metered separately from production electricity.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow property and unit-group UUIDs unresolved
- Amount rule: measured wastewater-treatment grid-electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Ferric chloride treatment formulation (`ferric_chloride_treatment_input`)

Ferric-chloride formulation dosed to on-site wastewater treatment is recorded separately with concentration retained.

- Selected flow: Ferric chloride wastewater-treatment formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured ferric-chloride treatment-formulation mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Polyacrylamide flocculant formulation (`polyacrylamide_flocculant_input`)

Polyacrylamide flocculant used in wastewater treatment is weighed as one supplied formulation.

- Selected flow: Polyacrylamide flocculant formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured polyacrylamide-flocculant formulation mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Equalised cocoa-processing wastewater (`equalised_cocoa_wastewater_input`)

The physical wastewater mixture entering on-site treatment after equalisation is measured at the treatment inlet as one waste exchange.

- Selected flow: Equalised cocoa-processing wastewater
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured equalised wastewater mass entering treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge_output`)

Dewatered sludge removed from on-site treatment is weighed separately and linked to its receiving treatment.

- Selected flow: Sludge from cocoa-processing wastewater treatment
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured dewatered wastewater-sludge mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Chemical oxygen demand discharge (`cod_water_output`)

Chemical oxygen demand in final effluent is calculated from matched concentration and discharge mass or volume.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated COD mass discharged to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Five-day biochemical oxygen demand discharge (`bod5_water_output`)

Five-day biochemical oxygen demand is reported as one water emission using the matched effluent result.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated BOD5 mass discharged to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total nitrogen discharge (`total_nitrogen_water_output`)

Total nitrogen in final effluent is calculated separately from every other monitored parameter.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated total-nitrogen mass discharged to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total phosphorus discharge (`total_phosphorus_water_output`)

Total phosphorus in final effluent is calculated as one distinct water emission.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated total-phosphorus mass discharged to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Suspended-solids discharge (`suspended_solids_water_output`)

Suspended solids in final effluent are calculated separately using the matched concentration and discharge record.

- Selected flow: Suspended solids to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated suspended-solids mass discharged to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Biogenic methane from wastewater treatment (`wastewater_methane_air_output`)

Biogenic methane released by on-site treatment is measured or calculated as one air emission when anaerobic conditions occur.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured or calculated biogenic methane released to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg equalised cocoa-processing wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all multifunctional foreground processes | Avoid allocation by sub-metering and subdividing preparation, grinding, defatting, finishing, utility, and waste-treatment operations wherever separately attributable data can be collected. | `eu-pef-recommendation-2021-2279` |
| `allocation_cocoa_butter` | defatted cocoa paste and recovered cocoa butter | After subdivision, allocate remaining shared defatting burdens between saleable defatted paste and saleable cocoa butter by their measured dry-mass outputs; use consistent moisture bases, disclose the factor, and report a sensitivity result when economic allocation would materially change conclusions. | `eu-pef-recommendation-2021-2279`; `mass-balance-identity` |
| `allocation_waste_and_rework` | rejects, waste, internal rework, and recovered materials | Assign burdens to internal rework without duplicating upstream input; do not credit waste or recovered material unless a documented system-expansion or substitution method and destination dataset are applied consistently with the declared study method. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bean_preparation_records` | `bean_to_nib_preparation` | beans; each utility carrier; nibs; each shell, reject, dust and wastewater output; each combustion emission | receiving and batch logs; calibrated scales; carrier meters or invoices; waste and monitoring records | bean and nib mass/moisture; electricity; steam; hot water; natural gas; diesel; LPG; water; each output mass; stock change; emission measurement or factor | reconcile each material, carrier and output independently by batch or reporting period | kg; kWh; MJ; % m/m | each lot and monthly carrier reconciliation | representative continuous 12-month period or all batches for a shorter campaign | every foreground preparation site | preserve each carrier and output row, reconcile mass, and normalise to prepared nib output | calibration; supplier certificate; moisture result; fuel and heat records; batch genealogy; waste ticket; emission workpaper |
| `cp_grinding_records` | `nib_grinding_paste_manufacture` | internal nibs; purchased nibs; each utility; each alkalising chemical; paste; each residue and wastewater | batch recipe; scales; dosing and transfer logs; utility meters; laboratory and waste records | each nib source mass; paste mass; electricity; steam; hot water; water; each chemical mass; moisture; cocoa-butter content; each waste mass; stock change | reconcile every input, chemical, transfer and output for each grinding batch | kg; kWh; MJ; % m/m | each batch and monthly meter reconciliation | representative continuous 12-month period or all batches for a shorter campaign | every foreground grinding line | keep internal and purchased nibs and each chemical separate, then normalise to paste intermediate | calibration; formulation approval; chemical specification; sample identity; genealogy; mass-balance sign-off |
| `cp_defatting_records` | `paste_defatting` | feed paste; electricity; steam; hot water; defatted paste; cocoa butter; cocoa cake; filter residue | feed and product scales; press log; carrier meters; laboratory fat analysis; waste record | feed mass/moisture/fat; each utility; each product mass/moisture/fat; residue mass; stock change | reconcile each defatting campaign on a common moisture basis and keep all saleable outputs separate | kg; kWh; MJ; % m/m | each campaign and monthly carrier reconciliation | all defatting campaigns in the reference period | every foreground defatting line | calculate saleable dry-mass outputs and allocation factors, then normalise to paste feed | calibrated scales and meters; laboratory method; sample identity; campaign mass balance; allocation approval |
| `cp_finishing_records` | `paste_finishing_packing` | internal paste; purchased paste; each utility; each package component; reference product; off-spec paste; each packaging waste | transfer and dispatch records; filling scale; utility meters; component issues and tare weights; waste records | each paste source; electricity; steam; hot water; each component count and mass; net product; tare; off-spec paste; each packaging waste; stock change | reconcile each paste source, carrier, packaging component and waste for every finished lot | kg; kWh; MJ; item | each lot and monthly reconciliation | representative continuous 12-month period or all lots for a shorter campaign | every foreground finishing and packing site | subtract tare, preserve every packaging material separately, and normalise conforming output to 1,000 kg | scale and meter calibration; packaging specification; issue/return log; lot release; dispatch and waste tickets |
| `cp_cleaning_sanitation_records` | `plant_cleaning_sanitation` | water; each utility and fuel; each cleaning or disinfecting formulation; each sanitation wastewater; cloth waste; each combustion emission | sanitation schedule; meters; fuel and chemical issues; wastewater and emission records | water; electricity; steam; hot water; natural gas; diesel; LPG; each formulation mass and concentration; each wastewater and solid-waste mass; emission result or factor | record every carrier, formulation, wastewater and emission independently for each sanitation event | kg; kWh; MJ | each sanitation event or shift, aggregated monthly | representative continuous 12-month period or all campaign events | all in-scope plant sanitation systems | assign shared sanitation by a documented causal driver and normalise to reference output | calibration; invoice; SDS and formulation specification; sanitation log; waste receipt; emission workpaper |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | equalised wastewater; electricity; ferric chloride; polyacrylamide; sludge; COD; BOD5; nitrogen; phosphorus; suspended solids; methane | inlet flow or mass meter; chemical issues; electricity meter; sludge scale; laboratory and gas records | inlet and discharge quantity; each chemical; electricity; sludge mass/moisture; each matched concentration; methane measurement or model fields | match representative samples to measured discharge and calculate each emission separately | kg; kWh; mg/L | flow continuous or daily; sampling by permit or operating plan | representative continuous 12-month period or complete campaign | complete on-site treatment boundary | calculate each mass load separately and assign treatment inventory by measured wastewater quantity | laboratory quality record; sampling plan; meter calibration; chemical record; sludge receipt; calculation workpaper |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | all foreground inventory amounts | normalised amount = reporting-period row amount / conforming net cocoa-paste output × 1,000 kg | collected row amount; conforming net output | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_process_mass_balance` | each foreground process | unaccounted mass = opening stock + measured inputs - measured outputs - closing stock; calculate on both as-received and dry-mass bases where moisture changes materially | material inputs; product, co-product, waste outputs; opening and closing stock; moisture | signed and absolute mass-balance residual | `mass-balance-identity` |
| `calc_defatting_yield` | paste defatting | dry-mass product yield and cocoa-butter recovery = each saleable dry-mass output / dry-mass feed; allocation factor = each saleable dry-mass output / total saleable dry-mass outputs | feed and output masses; moisture; cocoa-butter content | yields, recovery, and allocation factors | `mass-balance-identity`; `eu-pef-recommendation-2021-2279` |
| `calc_wastewater` | each process or sanitation wastewater | wastewater to treatment = measured discharge, or supplied water - water retained in product - evaporation - separately measured reuse when direct metering is unavailable | stage-specific water, retained water, evaporation and reuse | one stage-specific wastewater mass with calculation flag | `mass-balance-identity` |
| `calc_combustion_emission` | each direct air emission | emission mass = each separately recorded on-site fuel quantity × its disclosed applicable factor, summed only for the same elementary flow; use direct measurement when available | natural gas, diesel or LPG record; fuel properties; factor or measurement | kg of one specified elementary emission | `eu-jrc-fdm-bref-2019` |
| `calc_effluent_load` | each treated-effluent emission | discharged mass = matched concentration × measured discharge quantity with documented density and unit conversion | one parameter concentration; discharge quantity; sampling representativeness | kg of one specified water emission | `eu-jrc-fdm-bref-2019` |
| `calc_packaging_component` | each packaging input | component mass = issued count × measured empty unit mass - returned unused component mass, with reusable pallets assigned by documented use share | count; unit mass; returns; reuse share | kg of one packaging component per reference product | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | all lots and material streams | Retain supplier, origin, lot, route, product specification, defatting and alkalisation status, and linkage from starting material to reference product. | receiving records; batch genealogy; product specification; lot release |
| `dq_measurement_control` | mass, energy, water, composition, and waste records | Use calibrated or verified measurement systems; retain unit, conversion, calibration status, and estimation flag for every aggregated field. | calibration certificate; meter register; laboratory quality record; approved conversion sheet |
| `dq_temporal_representativeness` | foreground dataset | Cover a representative continuous 12-month period when operations are continuous, or all lots in the declared campaign; disclose shutdowns, atypical batches, and missing periods. | production calendar; completeness reconciliation; exception log |
| `dq_completeness` | named foreground flows | Account for all named material, energy, water, co-product, waste, wastewater, and direct-emission rows or explicitly mark them not applicable with route evidence. | signed inventory checklist; process mass balance; cut-off statement |
| `dq_atomic_exchange_identity` | every inventory card | Retain one physical or chemical flow identity per row; do not substitute a carrier, chemical, packaging, waste or emission collection label for an implemented exchange. | row-level inventory review; Tiangong lookup disposition; signed applicability checklist |
| `dq_source_currency` | external rules and specifications | Confirm that product specifications, official methods, and legal or customer requirements are current for the geography and reference period before activation or publication. | source review record; applicable specification list |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Require exactly 1,000 kg after normalization, Tiangong product-flow UUID `5b331659-2216-4cc7-9e6d-11bb0b50226f`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `mass-balance-identity` |
| `validate_product_scope` | product identity | Require paste physical state, cocoa-butter content, defatting status, roasting route, alkalisation status, moisture basis, and packaging state; reject cocoa cake, cocoa powder, sweetened preparations, and finished chocolate from this PCR. | `codex-cxs-141-1983-2025` |
| `validate_codex_claim` | products claimed to conform to CXS 141-1983 as cocoa mass | Verify the declared composition and quality criteria against the current applicable Codex text, including cocoa butter of 47–60% m/m for cocoa mass and the applicable shell-and-germ limit; do not apply that cocoa-mass fat interval to a separately declared defatted paste. | `codex-cxs-141-1983-2025` |
| `validate_process_route` | conditional processes | Require bean preparation for whole-bean input; keep internal and purchased nibs or paste separate; require each actual alkalising chemical; and require feed, paste, cocoa butter, cocoa cake, each utility and composition record when defatting is declared. | `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | each foreground process and the overall foreground system | Reconcile inputs, outputs, and stock change on consistent moisture bases; investigate and disclose material residuals outside the facility's approved measurement uncertainty. | `mass-balance-identity` |
| `validate_allocation` | cocoa butter and any other saleable co-product | Confirm subdivision was attempted first, shared burdens use measured dry-mass factors, moisture bases are consistent, factors sum to one, and the allocation method and sensitivity are disclosed. | `eu-pef-recommendation-2021-2279`; `mass-balance-identity` |
| `validate_cutoff_and_completeness` | foreground inventory | Require every named important flow to be measured, calculated, or marked not applicable; disclose all other exclusions and verify them against the declared cut-off method without using cut-off to omit known significant flows. | `eu-pef-recommendation-2021-2279` |
| `validate_atomic_flows` | process inventory | Every card must name one concrete exchange; grid electricity, purchased steam, purchased hot water, each fuel, each chemical, each packaging component, each product or co-product, each waste and each elementary emission must remain separate. | `eu-jrc-fdm-bref-2019`; `eu-pef-recommendation-2021-2279` |
| `validate_direct_emissions` | on-site fuel combustion | For every used direct fuel, calculate or measure fossil carbon dioxide, nitrogen oxides, sulfur oxides and primary PM2.5 separately using disclosed evidence; do not report a combined emissions row. | `eu-jrc-fdm-bref-2019` |
| `validate_wastewater_rows` | wastewater and on-site treatment | Keep each stage wastewater, treatment sludge and COD, BOD5, total nitrogen, total phosphorus, suspended solids and methane result separate; mark the treatment process not applicable when all wastewater leaves untreated by the foreground site. | `eu-jrc-fdm-bref-2019` |
| `validate_uuid_resolution` | non-reference inventory flows | Leave every non-reference UUID absent until flow-hybrid-search and state-100 direct readback agree on the exact atomic identity and support; activation or publication requires resolution or an approved explicit exception. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cocoa-paste production dataset suitable for publication as a secondary_dataset or background_dataset after methodology, translation, UUID, and evidence review |
| downstream_use | Product-flow creation, foreground process datasets, cradle-to-gate product systems, chocolate and cocoa-product lifecycle models, and supply-chain footprint studies |
| allowed_use | Gate-to-gate modelling for the declared plant, technology, product state, geography, and reference period; broader use only with linked upstream and downstream datasets and disclosed allocation |
| excluded_use | Cocoa cultivation as a stand-alone dataset; cocoa cake or powder production; cocoa butter as the sole reference product; sweetened cocoa or chocolate production; generic global representation without representativeness review |
| required_metadata | PCR id and version; reference UUID; CPC context; site and geography; reference period; starting material and origin mix; whole-bean or nib route; roasting, alkalisation, and defatting status; cocoa-butter and moisture basis; process technology; packaging; allocation; upstream links; unresolved UUID disposition |
| required_quality_disclosure | Primary-data share; temporal and site coverage; calibration and laboratory controls; mass-balance residuals; cut-offs and proxies; co-product allocation factors and sensitivity; carrier and chemical applicability; unresolved UUIDs; missing flows; uncertainty and limitations |
| update_trigger | Material change in starting material, origin mix, roasting or grinding technology, alkalising formulation, defatting route, product physical state or composition, energy mix, allocation, site scope, applicable specification, Tiangong identity, or evidence that invalidates a QA guardrail |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-141-1983-2025` | standard | Codex Alimentarius, CXS 141-1983, Standard for Cocoa (Cacao) Mass (Cocoa/Chocolate Liquor) and Cocoa Cake, amended 2025; https://openknowledge.fao.org/handle/20.500.14283/cd8967en; retrieved 2026-08-11 | Product definition, covered names, cocoa-butter composition for standard cocoa mass, shell-and-germ limits, additives, and product-scope validation |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document in the Food, Drink and Milk Industries, 2019; https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf; retrieved 2026-08-11 | Cocoa process decomposition: receiving and cleaning, roasting, winnowing, grinding, alkalisation, hydraulic pressing, cocoa-butter recovery, and packing |
| `eu-pef-recommendation-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, CELEX 32021H2279; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279; retrieved 2026-08-11 | System-boundary disclosure, allocation hierarchy, cut-off controls, data collection, data quality, and verification principles |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to measured foreground inputs, outputs, and stock changes | Reference normalization, process reconciliation, yield, allocation-factor, wastewater, and validation calculations |
