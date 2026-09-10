---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-oils-crude-or-refined-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other vegetable oils, crude or refined, n.e.c.

## 1. Scope and Applicability

This PCR applies to factory-gate production of one botanically identified vegetable oil that belongs to the residual CPC 21691 category, in either a crude, virgin, cold-pressed, or refined state. The official scope includes crude and refined, but not chemically modified, babassu, palm-kernel, linseed, maize (corn), castor, sesame, tung, jojoba, vegetable-tallow and other vegetable oils not classified elsewhere. The data package shall name one botanical source and one released state; it shall not report an unspecified multi-oil average.

The foreground boundary begins with received oil-bearing seed, kernel, fruit, bran or germ when extraction is controlled by the reporting facility, or with received crude oil when only refining is controlled. It covers the actual receiving, cleaning, conditioning, size reduction, pressing or solvent extraction, clarification, degumming, chemical or physical refining, bleaching, deodorization, storage, packaging, directly controlled utilities, wastewater treatment, wastes, co-products and direct emissions through factory-gate release.

Named oils that have their own CPC subclasses, chemically modified or hydrogenated oils, essential oils, formulated blends, downstream foods, cultivation and external transport are excluded as reference products. A broader study may link those stages using separate datasets. Edible-oil claims shall identify the applicable product specification; non-food castor, tung, jojoba or other technical grades shall declare their intended grade and shall not claim Codex conformity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-oils-crude-or-refined-n-e-c` |
| classification_refs | CPC 3.0: 21691, Other vegetable oils, crude or refined, n.e.c. |
| covered_products | One botanically identified crude, virgin, cold-pressed or refined vegetable oil within the residual CPC 21691 scope, including the examples named in the official explanatory note |
| excluded_products | Soya-bean, groundnut, sunflower/safflower, rape/colza/mustard, palm, coconut, olive and cottonseed oils classified separately; hydrogenated, inter-esterified, re-esterified or elaidinised oils; essential oils; blends and preparations |
| representative_product | Sesame oil at factory gate, with the actual data package locked to its declared botanical oil and crude, virgin, cold-pressed or refined state |
| production_route | Integrated feedstock preparation and mechanical or solvent extraction followed by crude-oil finishing; or received crude oil followed by declared chemical or physical refining; storage, packaging and release as applicable |
| market_state | Net saleable oil at factory gate; bulk or packaged; liquid, semi-solid or solid at declared temperature; food or technical grade; crude, virgin, cold-pressed or refined |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of one botanically identified other vegetable oil in the declared crude, virgin, cold-pressed or refined factory-gate state |
| How much | 1 kg net conforming oil, excluding packaging mass |
| How well | Botanical identity, extraction and refining route, grade/specification, additive status, moisture and impurity basis, physical state and packaging status declared |
| How long or cycle | One released lot or a declared representative production period; no service life is assigned to this intermediate product |
| reference_flow_link | `release_reference_product` in `storage_packaging_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other vegetable oil, crude or refined, n.e.c. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical common and scientific name; oil-bearing material; crude, virgin, cold-pressed or refined state; mechanical, solvent, chemical-refining or physical-refining route; edible or technical grade; applicable specification; physical state and dispatch temperature; bulk or packaging bill of materials; site, geography and data period |

When constructing a foreground data package, every required qualifier shall be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The reference product UUID remains unresolved because the available generic and refined-only Tiangong candidates do not cover this complete crude-or-refined semantic boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | released reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg net conforming oil and exclude container and transport-packaging mass. |
| `botanical_route_lock` | feedstock, crude oil, intermediates and released oil | Mass | kg | Preserve one botanical identity and one route/state on every product row; do not aggregate different botanical oils or crude and refined states. |
| `wet_dry_basis` | seeds, kernels, bran, germ, cake and residue | Mass | kg | Record as-received mass and the moisture or dry-matter basis used in every yield or balance calculation. |
| `energy_carrier_separation` | electricity, steam, heat and fuels | Energy or carrier-specific property | kWh, MJ, kg or m3 | Meter electricity and steam separately and record every fuel as its own carrier; prevent double counting fuel with generated steam or electricity. |
| `water_balance` | fresh water, recirculated water, evaporated water and wastewater | Mass or volume | kg or m3 | Keep external withdrawal, internal recirculation and discharge separate and state density where mass-volume conversion is used. |
| `solvent_balance` | solvent extraction | Mass | kg | Reconcile solvent make-up, recovered solvent, solvent in product or cake, waste solvent and direct release for the same period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received botanically identified oil-bearing material for an integrated extraction route, or received botanically identified crude oil for a refining-only route |
| starting_condition_role | Foreground manufacturing entry point; cultivation and external inbound transport remain in linked upstream datasets unless the study explicitly expands the boundary |
| product_classification_scope | One crude or refined vegetable oil in residual CPC 21691; the classification reference does not permit mixing botanical identities or route states |
| recursive_input_rule | Purchased oil from this same category is a distinct product input with its own upstream dataset and botanical/state qualifiers; it is not absorbed into the foreground reference output |
| upstream_dataset_requirement | Link each feedstock, crude oil, electricity supply, steam or heat supply, fuel, water, chemical, processing aid, refrigerant and packaging material to a representative upstream dataset |
| disclosure | Declare botanical identity, starting material, process map, mechanical/solvent route, refining route, product state, utility system, water and solvent loops, co-products, wastes, allocation, packaging, site, geography, period and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | foreground manufacture | Include every controlled operation from the declared receiving condition through release; a crude route stops after crude-oil finishing, while a refined route includes the actual degumming, neutralization when used, bleaching and deodorization steps. | `fao-oil-processing-1994`; `fao-cxc-79-2019`; `sun-rice-bran-oil-2022`; `gonzalez-sesame-biorefinery-2025` |
| `boundary_atomic_exchanges` | inventory | Keep each botanical feedstock, electricity, steam, fuel, refrigerant, water, solvent, chemical, package, waste stream and emitted substance as a separate exchange. | `eu-fdm-bat-2019`; `eu-pef-method-2021` |
| `boundary_route_conditionals` | conditional processes | Include only the feedstock, extraction, refining, winterization, storage, packaging and treatment operations actually performed; document bypassed or outsourced operations and link their datasets. | `fao-oil-processing-1994`; `fao-cxc-79-2019` |
| `boundary_direct_releases` | emissions and wastes | Include measured or calculated direct releases after control equipment, wastewater transfers, spent media, residues, off-spec oil and packaging waste with medium and destination. | `eu-fdm-bat-2019`; `eu-pef-method-2021` |
| `boundary_upstream_downstream` | linked life-cycle stages | Link purchased inputs upstream; exclude distribution, downstream formulation, use and end of life from this factory-gate foreground dataset unless separately added. | `iso-14044-2006`; `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `oil_material_preparation` | Oil-bearing material receiving and preparation | `conditional` | Include when seed, kernel, bran, germ or fruit preparation is controlled by the reporting facility | foreground feed preparation | kg prepared botanical feed |
| `oil_extraction_crude_finishing` | Oil extraction and crude-oil finishing | `conditional` | Include when the facility produces crude oil from botanical material | foreground extraction and separation | kg crude botanical oil |
| `oil_refining` | Chemical or physical oil refining | `conditional` | Include for refined reference product or when any refining step is controlled on site | foreground refining | kg refined botanical oil |
| `storage_packaging_release` | Storage, packaging and factory-gate release | `required` | Always; packaging cards apply only to packaged product | reference-product release | 1 kg net released oil |
| `onsite_utilities_wastewater` | On-site utilities and wastewater treatment | `conditional` | Include controlled fuel conversion, steam generation, refrigeration or wastewater treatment | supporting foreground process | metered utility output or treated flow |

### Process: Oil-bearing material receiving and preparation (`oil_material_preparation`)

#### Inputs

##### Product flows

###### Sesame seed (`prep_sesame_seed`)

Include only for a sesame route.

- Selected flow: Sesame seed
- Flow property / unit: Mass / kg
- Amount rule: Net accepted sesame-seed mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `gonzalez-sesame-biorefinery-2025`; `fao-oil-processing-1994`

###### Shea kernel (`prep_shea_kernel`)

Include only for a shea route.

- Selected flow: Shea kernel
- Flow property / unit: Mass / kg
- Amount rule: Net accepted dry shea-kernel mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023`

###### Rice bran (`prep_rice_bran`)

Include only for a rice-bran-oil route.

- Selected flow: Rice bran
- Flow property / unit: Mass / kg
- Amount rule: Net accepted stabilized or unstabilized rice-bran mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `sun-rice-bran-oil-2022`; `fao-oil-processing-1994`

###### Corn germ (`prep_corn_germ`)

Include only for a corn-oil route.

- Selected flow: Corn germ
- Flow property / unit: Mass / kg
- Amount rule: Net accepted corn-germ mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-oil-processing-1994`

###### Oil palm kernel (`prep_palm_kernel`)

Include only for a palm-kernel-oil route.

- Selected flow: Oil palm kernel
- Flow property / unit: Mass / kg
- Amount rule: Net accepted palm-kernel mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-oil-processing-1994`

###### Linseed (`prep_linseed`)

Include only for a linseed-oil route.

- Selected flow: Linseed
- Flow property / unit: Mass / kg
- Amount rule: Net accepted linseed mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-oil-processing-1994`

###### Electricity (`prep_electricity`)

Electricity crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered preparation electricity or documented causal share.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`; `jasaw-shea-resource-use-2015`

###### Steam (`prep_steam`)

Steam crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam enthalpy used for conditioning or heat treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-oil-processing-1994`; `eu-fdm-bat-2019`

###### Natural gas (`prep_natural_gas`)

Natural gas crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered natural gas consumed by direct-fired preparation equipment only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-fdm-bat-2019`

###### Process water (`prep_process_water`)

Process water crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered external water used for washing or conditioning; exclude recirculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023`; `eu-fdm-bat-2019`

###### Ammonia refrigerant (`prep_ammonia_refrigerant`)

Ammonia refrigerant crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Stock-balance make-up attributable to chilled feed storage when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

No waste enters this process as a default input.

##### Elementary flows

No elementary input is prescribed; add each measured environmental uptake as its own atomic row.

#### Outputs

##### Product flows

###### Prepared sesame seed (`prep_prepared_sesame_seed`)

Prepared sesame seed crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Prepared sesame seed
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer after cleaning, conditioning, roasting and size reduction for the sesame route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `gonzalez-sesame-biorefinery-2025`

##### Waste flows

###### Foreign material from feed preparation (`prep_foreign_material_waste`)

Foreign material from feed preparation crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Foreign material from oil-bearing feed preparation
- Flow property / unit: Mass / kg
- Amount rule: Weighed removed foreign material by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `fao-oil-processing-1994`

##### Elementary flows

###### Particulate matter to air (`prep_particulate_air`)

Particulate matter to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or validated calculation after dust control.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `eu-fdm-bat-2019`

### Process: Oil extraction and crude-oil finishing (`oil_extraction_crude_finishing`)

#### Inputs

##### Product flows

###### Prepared sesame seed (`extraction_prepared_sesame_seed`)

Prepared sesame seed crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Prepared sesame seed
- Flow property / unit: Mass / kg
- Amount rule: Measured sesame feed entering pressing or extraction; another botanical route adds its own exact atomic feed row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `gonzalez-sesame-biorefinery-2025`

###### Electricity (`extraction_electricity`)

Electricity crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered drives, presses, pumps, filtration and solvent-recovery electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### Steam (`extraction_steam`)

Steam crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam enthalpy used in cooking, desolventizing or solvent recovery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-oil-processing-1994`; `sun-rice-bran-oil-2022`

###### Natural gas (`extraction_natural_gas`)

Natural gas crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered gas used directly in extraction equipment; omit when only purchased steam crosses the boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-fdm-bat-2019`

###### n-Hexane (`extraction_hexane`)

n-Hexane crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: n-Hexane
- Flow property / unit: Mass / kg
- Amount rule: Solvent make-up from purchase and stock balance; include only for the declared solvent route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `fao-oil-processing-1994`; `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### Process water (`extraction_process_water`)

Process water crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered external water used for extraction, separation or cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023`; `eu-fdm-bat-2019`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

###### Crude sesame oil (`extraction_crude_sesame_oil`)

Crude sesame oil crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Crude sesame oil
- Flow property / unit: Mass / kg
- Amount rule: Measured clarified crude sesame oil; another botanical route adds its own exact crude-oil row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `gonzalez-sesame-biorefinery-2025`; `fao-cxc-79-2019`

###### Sesame press cake (`extraction_sesame_cake`)

Sesame press cake crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Sesame press cake
- Flow property / unit: Mass / kg
- Amount rule: Weighed cake by moisture, residual-oil basis and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg crude sesame oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources: `gonzalez-sesame-biorefinery-2025`; `fao-oil-processing-1994`

##### Waste flows

###### Spent filter medium (`extraction_spent_filter_medium`)

Spent filter medium crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Spent oil filter medium
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent medium including retained oil, by treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

###### Extraction wastewater (`extraction_wastewater`)

Extraction wastewater crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Vegetable-oil extraction wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered transfer to treatment or off-site destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `naangmenyele-shea-input-output-2023`; `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

##### Elementary flows

###### n-Hexane to air (`extraction_hexane_air`)

n-Hexane to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: n-Hexane to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or solvent-balance loss assigned to air after control; solvent route only.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### Particulate matter to air (`extraction_particulate_air`)

Particulate matter to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or validated calculation after control equipment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `eu-fdm-bat-2019`

### Process: Chemical or physical oil refining (`oil_refining`)

#### Inputs

##### Product flows

###### Crude sesame oil (`refining_crude_sesame_oil`)

Crude sesame oil crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Crude sesame oil
- Flow property / unit: Mass / kg
- Amount rule: Measured crude sesame oil entering refining; another botanical route adds its own exact crude-oil row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-cxc-79-2019`; `gonzalez-sesame-biorefinery-2025`

###### Process water (`refining_process_water`)

Process water crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered external degumming, washing, vacuum-system and cleaning water; exclude recirculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `fao-cxc-79-2019`; `eu-fdm-bat-2019`

###### Phosphoric acid (`refining_phosphoric_acid`)

Phosphoric acid crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Recipe issue adjusted for concentration; include only when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-cxc-79-2019`; `fao-oil-processing-1994`

###### Citric acid (`refining_citric_acid`)

Citric acid crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Citric acid
- Flow property / unit: Mass / kg
- Amount rule: Recipe issue adjusted for concentration; include only when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-cxc-79-2019`; `fao-oil-processing-1994`

###### Sodium hydroxide (`refining_sodium_hydroxide`)

Sodium hydroxide crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Active NaOH mass from solution concentration and issue records; chemical-neutralization route only.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-cxc-79-2019`; `fao-oil-processing-1994`

###### Bleaching earth (`refining_bleaching_earth`)

Bleaching earth crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Bleaching earth
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry clay charged to the represented batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-cxc-79-2019`; `fao-oil-processing-1994`

###### Activated carbon (`refining_activated_carbon`)

Activated carbon crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry carbon charged; include only when used for contaminant removal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `fao-oil-processing-1994`

###### Steam (`refining_steam`)

Steam crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam enthalpy for heating, stripping and deodorization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-cxc-79-2019`; `fao-oil-processing-1994`; `sun-rice-bran-oil-2022`

###### Electricity (`refining_electricity`)

Electricity crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered refining, vacuum, pumping, filtration and cooling electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### Natural gas (`refining_natural_gas`)

Natural gas crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered gas used directly in refinery equipment; omit when only purchased steam crosses the boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### Nitrogen gas (`refining_nitrogen`)

Nitrogen gas crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Metered or supplier-recorded nitrogen used for blanketing or stripping, when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

###### Refined sesame oil (`refining_refined_sesame_oil`)

Refined sesame oil crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Refined sesame oil
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming refined oil transferred to storage; another botanical route adds its own exact refined-oil row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `fao-cxc-79-2019`; `gonzalez-sesame-biorefinery-2025`

###### Wet gums (`refining_wet_gums`)

Wet gums crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Wet vegetable-oil gums
- Flow property / unit: Mass / kg
- Amount rule: Weighed gums with moisture and destination declared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources: `fao-cxc-79-2019`; `fao-oil-processing-1994`

###### Soapstock (`refining_soapstock`)

Soapstock crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Vegetable-oil soapstock
- Flow property / unit: Mass / kg
- Amount rule: Weighed soapstock by moisture and destination; chemical-neutralization route only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources: `fao-cxc-79-2019`; `fao-oil-processing-1994`

##### Waste flows

###### Spent bleaching earth (`refining_spent_bleaching_earth`)

Spent bleaching earth crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Spent bleaching earth
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent clay including retained oil, by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `fao-cxc-79-2019`; `eu-fdm-bat-2019`

###### Deodorizer distillate (`refining_deodorizer_distillate`)

Deodorizer distillate crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Vegetable-oil deodorizer distillate
- Flow property / unit: Mass / kg
- Amount rule: Weighed distillate by batch and destination; physical-refining or deodorization route only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources: `fao-cxc-79-2019`; `fao-oil-processing-1994`

###### Refinery wastewater (`refining_wastewater`)

Refinery wastewater crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Vegetable-oil refinery wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered transfer to on-site treatment or off-site destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined botanical oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `fao-oil-processing-1994`; `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

##### Elementary flows

No default direct emission is assumed. Add each measured emitted substance as an atomic row and keep on-site combustion emissions in `onsite_utilities_wastewater`.

### Process: Storage, packaging and factory-gate release (`storage_packaging_release`)

#### Inputs

##### Product flows

###### Crude sesame oil (`release_crude_sesame_oil`)

Crude sesame oil crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Crude sesame oil
- Flow property / unit: Mass / kg
- Amount rule: Measured crude oil entering final storage; crude sesame route only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `fao-oil-processing-1994`

###### Refined sesame oil (`release_refined_sesame_oil`)

Refined sesame oil crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Refined sesame oil
- Flow property / unit: Mass / kg
- Amount rule: Measured refined oil entering final storage; refined sesame route only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `fao-cxs-19-1981`; `fao-cxc-79-2019`

###### Electricity (`release_electricity`)

Electricity crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered storage, pumping, filling, cooling and loadout electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### Natural gas (`release_natural_gas`)

Natural gas crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered gas for direct heated storage or filling; omit when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-fdm-bat-2019`

###### Ammonia refrigerant (`release_ammonia_refrigerant`)

Ammonia refrigerant crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Stock-balance make-up assigned to cooled oil storage, when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

###### Steel drum (`release_steel_drum`)

Steel drum crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Steel drum
- Flow property / unit: Mass / kg
- Amount rule: Drum count multiplied by verified net packaging mass and allocated to released oil.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

###### High-density polyethylene container (`release_hdpe_container`)

High-density polyethylene container crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: High-density polyethylene container
- Flow property / unit: Mass / kg
- Amount rule: Container count multiplied by verified net container mass and allocated to released oil.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

###### Corrugated fibreboard box (`release_corrugated_fibreboard`)

Corrugated fibreboard box crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Box count multiplied by verified net box mass and allocated to released oil.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

###### Reference other vegetable oil (`release_reference_product`)

Reference other vegetable oil crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Other vegetable oil, crude or refined, n.e.c.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net conforming oil after release losses and before packaging tare.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `unsd-cpc-3-2025`; `eu-pef-method-2021`

##### Waste flows

###### Off-spec vegetable oil (`release_off_spec_oil`)

Off-spec vegetable oil crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Off-spec vegetable oil
- Flow property / unit: Mass / kg
- Amount rule: Weighed non-reworked oil by botanical identity and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

###### Waste high-density polyethylene (`release_waste_hdpe`)

Waste high-density polyethylene crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Waste high-density polyethylene
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded HDPE packaging by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

###### Waste corrugated fibreboard (`release_waste_fibreboard`)

Waste corrugated fibreboard crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Waste corrugated fibreboard
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded fibreboard by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Ammonia to air (`release_ammonia_air`)

Ammonia to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant stock-balance loss assigned to air unless recovery or another destination is documented.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

### Process: On-site utilities and wastewater treatment (`onsite_utilities_wastewater`)

#### Inputs

##### Product flows

###### Natural gas (`utility_natural_gas`)

Natural gas crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered boiler or thermal-utility gas consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per metered utility output and per 1 kg released oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-fdm-bat-2019`; `sun-rice-bran-oil-2022`

###### Fuel oil (`utility_fuel_oil`)

Fuel oil crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-reconciled boiler fuel-oil consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per metered utility output and per 1 kg released oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-fdm-bat-2019`

###### Shea kernel residue fuel (`utility_shea_residue_fuel`)

Shea kernel residue fuel crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Shea kernel residue
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry shea residue combusted on site; shea route only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per metered utility output and per 1 kg released oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023`

###### Wastewater-treatment electricity (`utility_treatment_electricity`)

Wastewater-treatment electricity crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for pumps, aeration, dewatering and controls.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated and per 1 kg released oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`

###### Sodium hydroxide (`utility_sodium_hydroxide`)

Sodium hydroxide crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Active NaOH mass used in wastewater treatment, from issue and concentration records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated and per 1 kg released oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_chemical_records`
- Sources: `eu-fdm-bat-2019`

###### Ferric chloride (`utility_ferric_chloride`)

Ferric chloride crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Active ferric-chloride mass used in treatment, from issue and concentration records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated and per 1 kg released oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_chemical_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

No waste input is prescribed; wastewater remains recorded as the output of its source process and linked to this treatment process without duplicate external counting.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

###### Steam (`utility_steam`)

Steam crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered useful steam enthalpy delivered to foreground processes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`

###### Treated process water (`utility_treated_water`)

Treated process water crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Treated process water
- Flow property / unit: Volume / m3
- Amount rule: Metered treated water transferred for reuse; do not also count it as fresh withdrawal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Wastewater-treatment sludge (`utility_wastewater_sludge`)

Wastewater-treatment sludge crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Vegetable-oil wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge with dry matter and destination declared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Fossil carbon dioxide to air (`utility_fossil_carbon_dioxide_air`)

Fossil carbon dioxide to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from each fossil fuel separately using measured consumption and a reviewed factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `eu-fdm-bat-2019`

###### Biogenic carbon dioxide to air (`utility_biogenic_carbon_dioxide_air`)

Biogenic carbon dioxide to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from biogenic fuel separately; do not merge with fossil carbon dioxide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `eu-pef-method-2021`

###### Methane to air (`utility_methane_air`)

Methane to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated separately for each combustion or treatment source.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `eu-fdm-bat-2019`

###### Nitrous oxide to air (`utility_nitrous_oxide_air`)

Nitrous oxide to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated separately for each combustion or treatment source.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `eu-fdm-bat-2019`

###### Nitrogen monoxide to air (`utility_nitrogen_monoxide_air`)

Nitrogen monoxide to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release after control or calculation from measured fuel and operating data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `eu-fdm-bat-2019`

###### Sulfur dioxide to air (`utility_sulfur_dioxide_air`)

Sulfur dioxide to air crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculation from fuel sulfur content and control efficiency.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `eu-fdm-bat-2019`

###### Chemical oxygen demand to water (`utility_cod_water`)

Chemical oxygen demand to water crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by flow-proportional COD concentration after treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

###### Total phosphorus to water (`utility_total_phosphorus_water`)

Total phosphorus to water crosses this process boundary as one atomic exchange; its quantity is obtained under the rule below.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by flow-proportional total-phosphorus concentration after treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | extraction, refining, utilities and packaging | Avoid allocation through process subdivision, submetering and direct assignment; assign botanical-oil-specific preparation and finishing directly to that oil. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_causal_physical` | inseparable oil and cake, meal, gums, soapstock or distillate | When subdivision is not feasible, use a physical relationship only when it reflects the causal relationship between inputs and outputs and document the parameter and moisture basis. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_economic_fallback` | remaining multi-output burden | If no defensible physical relationship exists, use economic allocation with consistent prices at the common process exit and report price period, currency and sensitivity. | `eu-pef-method-2021` |
| `allocation_waste_status` | residues and off-spec outputs | Treat an output as a co-product when it has a documented market or beneficial use; otherwise record it as waste with treatment destination and do not apply an avoided-burden credit inside this unit process. | `eu-pef-method-2021`; `jasaw-shea-resource-use-2015` |
| `allocation_internal_loops` | recovered oil, solvent, water, heat and rework | Record internal transfers once and prevent simultaneous external input, product credit or waste burden for the same quantity. | `eu-pef-method-2021`; `eu-fdm-bat-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `oil_material_preparation`; `oil_extraction_crude_finishing`; `oil_refining` | botanical feed and crude oil | weighbridge, scale, tank gauge, supplier certificate, batch ticket | botanical name; material state; lot; gross mass; tare; net mass; moisture; oil content when measured; origin; timestamp | reconcile accepted receipts, batch issues and stock | kg; % m/m | each lot or batch | same representative period as output | all represented sites and lines | sum by exact botanical material and state; never aggregate different oils | calibration; supplier certificate; rejection record; stock reconciliation |
| `cp_process_outputs` | all production processes | prepared feed, crude oil, refined oil and reference product | scale, tank gauge, meter, batch and release record | identity; route/state; mass; moisture; quality result; destination; opening/closing stock; timestamp | measure each transfer and reconcile tank or packaged stock | kg | each batch; period reconciliation | same period as inputs | every represented line | sum conforming output by exact botanical identity and state | calibration; batch reconciliation; laboratory release |
| `cp_energy_records` | all included processes | electricity and steam | meter, submeter, invoice, steam flow and condition record | meter readings; carrier; pressure; temperature; condensate return; equipment; batch assignment | direct metering preferred; otherwise documented causal allocation | kWh; MJ | continuous or each batch; monthly reconciliation | same period as output | all relevant meters and utility systems | subtract non-production loads; prevent double counting fuel-generated energy | calibration; invoice; meter map; allocation worksheet |
| `cp_fuel_records` | preparation, extraction, refining, release and utilities | each individual fuel | flow meter, tank gauge, purchase, stock and fuel specification | fuel identity; quantity; unit; density; heating value; sulfur; biomass moisture; equipment; period | reconcile purchase, stock and metering for each carrier | kg; m3; MJ | continuous or each delivery; monthly reconciliation | same period as output | every combustion unit | convert with documented carrier-specific factors; no generic fuel total | meter calibration; invoice; fuel certificate; stock balance |
| `cp_water_records` | preparation, extraction and refining | fresh and recirculated water | supply meter, submeter, cleaning log | source; readings; use; recirculation; evaporation estimate; destination | meter external make-up and internal loops separately | m3 | continuous or each event; monthly reconciliation | same period as output | all represented water systems | external withdrawal minus documented export; do not count recirculation as repeated input | calibration; utility bill; loop diagram; balance closure |
| `cp_solvent_balance` | `oil_extraction_crude_finishing` | n-hexane | purchase, stock, recovery meter, product/cake test, waste and emission record | opening stock; purchase; closing stock; recovered solvent; product residue; cake residue; waste; release | complete period solvent mass balance | kg | each batch plus period reconciliation | same period as solvent route output | every solvent-using line | input equals recovery, stock, residues, waste and releases within disclosed closure | stock count; recovery calibration; test report; waste manifest |
| `cp_chemical_records` | `oil_refining` | each refining chemical or processing aid | purchase, issue, recipe, return and stock record | chemical identity; concentration; lot; opening; receipt; issue; return; closing; batch | calculate active substance separately for each chemical | kg active substance | each batch; monthly reconciliation | same period as output | all refining lines | opening plus receipts minus closing and returns; assign by actual recipe | invoice; certificate; recipe authorization; stock count |
| `cp_refrigerant_records` | preparation and release | ammonia refrigerant | cylinder, service and recovery log | refrigerant identity; opening stock; added; recovered; transferred; closing; incident | annual or campaign mass balance with event attribution | kg | each service event; annual reconciliation | same period as output | all included refrigeration systems | make-up minus recovery and stock change equals loss by documented destination | service certificate; leak test; cylinder record |
| `cp_packaging_records` | `storage_packaging_release` | each packaging component | bill of materials, count, sample mass, purchase and scrap record | material; component; units; sample mass; oil filled; return; scrap | count and verify component mass | kg; item | each packaging format; monthly reconciliation | same period as packaged output | all represented lines | component mass divided by net conforming oil; bulk product records zero packaging | BOM; calibrated scale; purchase and scrap reconciliation |
| `cp_coproduct_records` | extraction and refining | cake, gums, soapstock and distillate | scale, tank gauge, sales and destination record | identity; wet mass; dry matter; residual oil; quality; destination; price where allocated | measure each output and preserve product/waste decision | kg | each batch or dispatch | same period as output | every co-product outlet | sum by identity and destination; retain allocation inputs | calibration; sale record; destination evidence; laboratory result |
| `cp_waste_records` | all included processes | each waste stream | scale, manifest, collection and treatment record | waste identity; mass; moisture; hazardous status; destination; treatment; date | weigh each shipment or reconcile container counts | kg | each shipment | same period as output | all waste generation points | sum by exact waste and destination | scale calibration; manifest; contractor receipt |
| `cp_wastewater_records` | extraction, refining and treatment | wastewater and water emissions | influent/discharge meter, flow-proportional sample, laboratory report | volume; sampling time; COD; phosphorus; other substance concentrations; treatment; destination | meter flow and use representative composite sampling | m3; mg/L; kg | continuous flow; sampling by permit or justified plan | same period as output | all included discharge points | concentration × volume; sum by substance and destination | meter calibration; chain of custody; accredited laboratory report |
| `cp_emission_records` | all included processes | each direct air emission | stack test, continuous monitor, fuel and operating record | substance; concentration; flow; duration; fuel; control efficiency; uncertainty | direct measurement preferred; calculations retain formula and measured inputs | kg; mg/Nm3 | continuous or representative campaign | same period as output | every included source | calculate and sum separately by substance and medium | monitor calibration; stack report; factor review; control log |
| `cp_treatment_chemical_records` | `onsite_utilities_wastewater` | each treatment chemical | purchase, issue, concentration and stock record | chemical; concentration; issue; return; opening/closing stock; treated volume | calculate active substance from solution records | kg active substance | each batch; monthly reconciliation | same period as wastewater | all treatment units | assign to treated volume and normalize to released oil | invoice; certificate; stock reconciliation; operator log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period amount × documented allocation share ÷ net released oil mass | measured amount; allocation share; released oil mass | amount per 1 kg reference product | `eu-pef-method-2021` |
| `calc_mass_balance` | each production process | opening stock + product inputs = closing stock + product outputs + co-products + wastes + direct mass releases + unexplained difference | all mass and stock records | balance closure and unexplained difference | `eu-pef-method-2021`; `jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023` |
| `calc_oil_yield` | extraction and refining | net conforming oil output ÷ as-received botanical feed or crude-oil input; report moisture, oil-content and route basis | input and output mass; moisture; route | route-specific yield, not a category default | `sun-rice-bran-oil-2022`; `gonzalez-sesame-biorefinery-2025` |
| `calc_solvent_closure` | solvent route | opening stock + purchases = closing stock + recovered solvent + product/cake residues + wastes + releases + unexplained difference | complete solvent records | solvent closure and loss by destination | `eu-fdm-bat-2019`; `sun-rice-bran-oil-2022` |
| `calc_water_emission` | treated discharge | emitted substance mass = discharge volume × flow-proportional concentration with unit conversion | discharge volume; concentration; sampling coverage | kg substance per reference product | `eu-fdm-bat-2019` |
| `calc_allocation_share` | multi-output processes | apply the declared subdivision and allocation hierarchy; shares across co-products at one common process shall sum to one | direct assignments; physical parameters or consistent prices | reproducible allocation share | `iso-14044-2006`; `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | every product row | Preserve one botanical identity, material state, process route and grade from receipt through release; do not substitute a generic vegetable-oil identity for missing facts. | supplier certificate; lot genealogy; process map; release specification |
| `dq_measurement` | mass, energy, water, solvent, chemical and emissions | Use calibrated or verified systems and retain units, conversion factors, analytical methods, detection limits and uncertainty or limitations. | calibration register; laboratory report; conversion worksheet; meter map |
| `dq_temporal` | foreground period | Use a representative production year where available; justify a campaign and cover start-up, shutdown, cleaning and route changes that materially affect results. | production calendar; downtime log; representativeness statement |
| `dq_completeness` | process and exchange coverage | Reconcile material, solvent, water and energy records; disclose every missing measurement, proxy, exclusion and unresolved UUID; absence of a measurement is not evidence of zero. | balance worksheets; gap register; source-to-row trace |
| `dq_route_geography` | foreground and upstream datasets | Match botanical origin, extraction/refining technology, site geography, electricity and fuel supply, water source and period, or document the proxy and bias. | dataset metadata; supplier record; proxy justification |
| `dq_allocation` | multi-output operations | Retain subdivision evidence, quantities, physical parameters, prices, price period, currency and sensitivity needed to reproduce allocation. | allocation workbook; meter map; sales records; sensitivity result |
| `dq_range_status` | all important inventory rows | Treat the absence of a range as an explicit evidence gap; do not create a range from one case or from equal lower and upper values. | manifest unresolved-range record; literature review; review decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm exactly 1 kg net released oil, Mass property and mass unit group UUIDs, one botanical identity, one crude/virgin/cold-pressed/refined state and every required qualifier; fail if the unresolved product-flow UUID is represented as resolved. | `unsd-cpc-3-2025`; `eu-pef-method-2021` |
| `validate_scope_route` | process map and boundary | Confirm that the starting condition and route match the included processes and that every bypassed, outsourced or non-applicable operation is disclosed and linked where needed. | `fao-oil-processing-1994`; `fao-cxc-79-2019` |
| `validate_atomic_inventory` | all inventory rows | Reject any combined electricity/steam/fuel, chemical collection, packaging collection, waste collection or multi-substance emission row; each selected flow shall be one physical exchange. | `eu-fdm-bat-2019`; `eu-pef-method-2021` |
| `validate_balances` | material, solvent, water and energy | Recalculate closures from raw records, investigate unexplained differences and prevent double counting internal recovery, recirculation and utility conversion. | `eu-fdm-bat-2019`; `eu-pef-method-2021` |
| `validate_refining_route` | refined oil | Verify whether the route is chemical or physical and whether degumming, neutralization, bleaching and deodorization inputs, residues, wastewater and operating conditions match the declared route. | `fao-cxc-79-2019`; `fao-oil-processing-1994` |
| `validate_coproduct_allocation` | cake, meal, gums, soapstock and distillate | Confirm product-versus-waste status, avoid allocation where feasible, apply the hierarchy consistently and require all shares at a common process to sum to one. | `iso-14044-2006`; `eu-pef-method-2021` |
| `validate_data_quality` | foreground package | Check identity, calibration, temporal coverage, site and route representativeness, source traceability, missing UUIDs, range gaps, proxies, cut-offs and update triggers. | `eu-pef-method-2021`; `eu-fdm-bat-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate unit-process dataset for one botanically identified other vegetable oil in one declared factory-gate state |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA models whose botanical oil, crude/refined state, route, grade, technology, geography, period and packaging match the dataset and whose upstream boundary is linked at the declared starting condition |
| excluded_use | Unspecified average vegetable oil; substitution for separately classified named oils; comparison of botanical oils or crude/refined states without aligned functions and qualifiers; chemically modified oil; cradle-to-gate claim when cultivation or received crude-oil production is absent |
| required_metadata | PCR id and lifecycle state; botanical common and scientific name; oil-bearing material; product state; route; grade/specification; site and geography; period; process map; energy, water and solvent systems; co-products and allocation; packaging; source ids; unresolved UUIDs and range evidence |
| required_quality_disclosure | Measurement and calibration coverage; material, solvent, water and energy closure; temporal, technological and geographical representativeness; missing data and proxies; cut-offs; allocation sensitivity; unresolved flow identities; absence of source-backed ranges; limitations |
| update_trigger | Change in botanical input, extraction or refining route, grade/specification, energy or water supply, solvent system, co-product destination or price, allocation, packaging, treatment, site coverage or data period; resolution of a UUID or range evidence gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `dataset` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0*, code 21691, 2025, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-23) | Residual product scope, included botanical oil examples, crude/refined coverage and exclusion of chemically modified oils |
| `fao-cxs-19-1981` | `standard` | FAO/WHO, CXS 19-1981, *Standard for Edible Fats and Oils Not Covered by Individual Standards*, amended 2024, https://workspace.fao.org/sites/codex/Standards/CXS%2019-1981/CXS_019e.pdf (retrieved 2026-08-23) | Edible oil, virgin oil and cold-pressed oil definitions; grade and release-specification context; applicability limits |
| `fao-cxc-79-2019` | `official_guidance` | FAO/WHO, CXC 79-2019, *Code of Practice for the Reduction of 3-MCPDEs and GEs in Refined Oils and Food Products Made with Refined Oils*, 2019, https://workspace.fao.org/sites/codex/Standards/CXC%2079-2019/CXC_079e.pdf (retrieved 2026-08-23) | Oilseed cleaning, grinding and heating; crude-oil treatment; chemical and physical refining; degumming, neutralization, bleaching, deodorization and route-dependent monitoring |
| `fao-oil-processing-1994` | `official_guidance` | FAO, *Fats and Oils in Human Nutrition*, Chapter 5, Processing and refining edible oils, 1994, https://www.fao.org/4/v4700e/v4700e0a.htm (retrieved 2026-08-23) | Small- and large-scale feed preparation, pressing and solvent extraction; oil-cake handling; alkaline and physical refining; process chemicals, effluent, filtration and deodorization |
| `eu-fdm-bat-2019` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, 2019, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-23) | Process-flow and inventory requirements for water, energy, raw materials, wastewater, waste gas and residues; measurement and monitoring; hexane, wastewater and emission accounting |
| `iso-14044-2006` | `standard` | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, confirmed 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-23) | LCA/LCI goal, scope, inventory, interpretation, reporting and review framework; allocation and consistency context |
| `eu-pef-method-2021` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279, Annex I, *Product Environmental Footprint Method*, consolidated 2021 text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-23) | Functional unit and reference flow; system boundary; company-specific manufacturing data; completeness, allocation, data quality, validation and disclosure |
| `jasaw-shea-resource-use-2015` | `literature` | Jasaw, G. S., Saito, O., and Takeuchi, K. (2015), *Shea (Vitellaria paradoxa) Butter Production and Resource Use by Urban and Rural Processors in Northern Ghana*, Sustainability 7, 3592–3614, https://doi.org/10.3390/su7043592 (full text verified 2026-08-23) | Field-measured shea process sequence and material-flow boundary; kernels, water, fuelwood, electricity, residue and wastewater; no category range adopted |
| `naangmenyele-shea-input-output-2023` | `literature` | Naangmenyele, Z. et al. (2023), *Fundamentals of shea butter production; input-output analyses and profit maximization in Northern Ghana*, Research in Globalization 6, 100113, https://doi.org/10.1016/j.resglo.2023.100113 (open full text verified 2026-08-23) | Independent field input-output evidence for shea-kernel washing, crushing, roasting, milling, kneading, boiling, filtering, cooling, packaging, water, fuel, residue and wastewater; no category range adopted |
| `sun-rice-bran-oil-2022` | `literature` | Sun, L.-H., Wang, Y.-Y., and Gong, Y.-Q. (2022), *Life cycle assessment of rice bran oil production: a case study in China*, Environmental Science and Pollution Research 29, 39847–39859, https://doi.org/10.1007/s11356-021-18172-0 (author manuscript/full text verified 2026-08-23) | Rice-bran transport, crude-oil extraction, refining and storage process decomposition; electricity, fuel, wastewater and n-hexane relevance; case values not adopted as ranges |
| `gonzalez-sesame-biorefinery-2025` | `literature` | Gonzalez, J. M. et al. (2025), *Techno-economic and Environmental Assessment of a Biorefinery for the Valorisation of Sesame Crop*, Chemical Engineering Transactions 117, 97–102, https://doi.org/10.3303/CET25117017 (publisher full text verified 2026-08-23) | Sesame drying/roasting, grinding, cold pressing, filtration, cake and refining route decomposition; simulation values not adopted as ranges |
