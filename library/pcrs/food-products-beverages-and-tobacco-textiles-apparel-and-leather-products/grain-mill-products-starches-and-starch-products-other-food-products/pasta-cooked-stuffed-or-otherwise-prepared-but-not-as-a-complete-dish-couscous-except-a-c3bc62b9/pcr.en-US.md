---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pasta-cooked-stuffed-or-otherwise-prepared-but-not-as-a-complete-dish-couscous-except-a-c3bc62b9
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pasta, cooked, stuffed or otherwise prepared (but not as a complete dish); couscous, except as a complete dish

## 1. Scope and Applicability

This PCR covers factory production of cooked, stuffed, frozen or otherwise prepared pasta, noodles and dumplings, and couscous, when the product is not presented as a complete dish. It includes the route-relevant preparation of cereal ingredients, dough or granule preparation, forming or filling, cooking or other heat treatment, drying or cooling when used, freezing when used, packaging when included in the declared factory-gate product, and shared cleaning and wastewater operations.

The foreground boundary begins with received cereal-based ingredients, water, fillings and other formulation inputs at the manufacturing site and ends with conforming product at the factory gate in the declared chilled, frozen, dried, shelf-stable or other market state. Agricultural production, grain milling, manufacture of purchased ingredients and packaging, off-site utilities, and off-site waste treatment are represented by upstream or downstream datasets rather than recreated inside the foreground process.

Complete prepared dishes or meals containing pasta, noodles, dumplings or couscous are excluded. Uncooked pasta that is neither stuffed nor otherwise prepared is excluded. Product form, cereal species, filling status and composition, cooking or drying status, preservation route, temperature state, packaging basis and whether the product is sold in bulk or retail form shall be declared because these facts materially change the inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pasta-cooked-stuffed-or-otherwise-prepared-but-not-as-a-complete-dish-couscous-except-a-c3bc62b9 |
| classification_refs | CPC 3.0:23721 (exact) |
| covered_products | Cooked, stuffed, frozen or otherwise prepared pasta; prepared noodles and dumplings; couscous; each sold as a product rather than as a complete dish. |
| excluded_products | Complete prepared dishes or meals; uncooked pasta that is not stuffed or otherwise prepared; upstream cereal farming or milling as foreground operations; consumer preparation after the factory gate unless explicitly added by study scope. |
| representative_product | Net edible prepared pasta or couscous product conforming to its declared formulation, preservation route and market state. |
| production_route | Receipt and preparation of cereal ingredients and water; mixing or granulation; forming and optional filling; cooking or other heat treatment; optional drying, cooling or freezing; optional packaging; cleaning and wastewater handling. |
| market_state | Factory-gate product declared as chilled, frozen, dried, shelf-stable or otherwise preserved, in bulk or packaged form, but not presented as a complete dish. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net edible prepared pasta, noodle, dumpling or couscous product within the declared category boundary. |
| How much | 1 kg net product, excluding packaging mass. |
| How well | Conforming to the declared product identity, formulation, moisture or solids basis, filling status, preservation route, food-safety release criteria and market state. |
| How long or cycle | One released production lot represented over the declared reporting period; no consumer-use duration is assigned. |
| reference_flow_link | `prepared_pasta_or_couscous_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product at the factory gate, excluding packaging. |
| Reference product flow | Pasta, cooked, stuffed or otherwise prepared (but not as a complete dish), couscous, except as a complete dish `1312d181-2dd0-4af3-b938-c38ed2342c7d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; cereal species or principal starch source; filling status and principal filling class; preparation route; cooking status; drying status; moisture or solids basis; chilled, frozen, dried, shelf-stable or other market state; packaging inclusion and format; complete-dish exclusion; geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure released net edible product after the final in-scope conditioning step and exclude packaging mass; preserve the lot total before normalization to 1 kg. |
| `material_mass_basis` | Ingredients, intermediates, product, rework and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-used wet mass and declare moisture, solids or concentration basis whenever it affects comparison or mass balance; do not mix dry and wet bases without a documented conversion. |
| `water_mass` | Ingredient, cooking, cooling and cleaning water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record water separately by use and identify recovered or recycled water; volume-to-mass conversion shall use a documented density and temperature when not reasonably equivalent to 1 kg/L. |
| `energy_carrier_units` | Electricity, fuels, purchased heat, steam and refrigeration | Carrier-specific energy property | kWh or MJ | Preserve metered units and net or gross calorific-value basis; document each conversion and do not combine electricity with thermal energy before characterization. |
| `packaging_separation` | Primary, secondary and transport packaging | Mass | kg | Measure each packaging material separately when packaging is in scope; packaging mass shall not be included in the 1 kg reference product output. |
| `couscous_moisture` | Product represented as Codex CXS 202-1995 couscous | Mass fraction | % | Declare the test method and wet-basis moisture result; the 13.5% maximum applies only when the represented product claims conformity with the Codex couscous standard and shall not be generalized to other products in this PCR. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received cereal ingredients, water, filling ingredients, other formulation materials, processing aids and packaging are available at the manufacturing-site gate with supplier identity, mass basis and upstream dataset link declared. |
| starting_condition_role | The starting condition is the auditable hand-off between upstream ingredient or material datasets and foreground food manufacture. |
| product_classification_scope | CPC 3.0:23721 prepared pasta, noodles, dumplings and couscous that are not presented as a complete dish. |
| recursive_input_rule | A purchased or transferred input already within this PCR category shall be recorded as an input with its own upstream dataset and declared state; its manufacture shall not be recursively reconstructed inside the receiving process. |
| upstream_dataset_requirement | Each purchased cereal ingredient, filling, other material, utility and packaging input requires a geographically and technologically representative upstream dataset or a documented data gap; off-site waste treatment requires a destination-specific dataset. |
| disclosure | Declare product route, formulation scope, filled or unfilled status, preservation and temperature state, packaging scope, site geography, reporting period, upstream dataset substitutions, excluded operations and all unresolved flow identities. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground manufacturing system | Include every on-site operation from receipt of ingredients through release of the declared factory-gate product, including shared cleaning and wastewater generation allocated to the product; model upstream supplies and off-site treatments through linked datasets. | `eu-jrc-fdm-bref-2019`; `iso-14044-2006` |
| `boundary_category_exclusion` | Product scope | Exclude complete dishes and meals and exclude uncooked pasta that is neither stuffed nor otherwise prepared; document any mixed-product line decision against the declared CPC 23721 scope. | `un-cpc-3-23721` |
| `boundary_route_conditionals` | Conditional operations | Include filling, drying, cooling, freezing and packaging only when performed for the represented product, and record an explicit not-applicable decision rather than assuming the operation is absent. | `un-cpc-3-23721`; `eu-jrc-fdm-bref-2019` |
| `boundary_food_safety_utilities` | Product-contact water, steam, cooling and cold chain | Include the utility use and reject or wastewater consequences needed to maintain the declared hygiene and temperature controls; separate non-product-contact utilities when metered and disclose allocation otherwise. | `eu-ec-852-2004` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | Ingredient receipt and preparation | required | Always included for manufactured product. | Foreground receipt, weighing, sieving, tempering, mixing or granulation preparation. | kg prepared mixture transferred to forming |
| `forming_and_filling` | Forming and optional filling | required | Forming is required; filling operations apply only to filled products. | Foreground shaping, extrusion, sheeting, cutting, granulation and optional filling. | kg shaped product transferred to thermal processing |
| `thermal_processing` | Cooking, drying and cooling | required | At least one preparation or heat-treatment operation is declared; drying and cooling are route-specific. | Foreground cooking, steaming, blanching, drying and controlled cooling. | kg conforming processed intermediate |
| `finishing_and_packaging` | Freezing, storage and packaging | conditional | Include each operation when performed before the declared factory gate. | Foreground preservation, cold storage, packing and release. | kg net released reference product |
| `cleaning_and_wastewater` | Cleaning, sanitation and wastewater handling | required | Include shared operations attributable to the represented reporting period. | Foreground hygiene support and on-site wastewater handling. | allocated operation per kg net released product |

### Process: Ingredient receipt and preparation (`ingredient_preparation`)

#### Inputs

##### Product flows

###### Cereal-based ingredients (`cereal_ingredients`)

Record each flour, semolina, starch, meal or other cereal-derived principal ingredient separately at receipt or issue to the represented lot.

- Selected flow: Cereal-based ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured as-used ingredient mass by material and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:
- Range: Provisional cereal-input mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 5
  - Unit: kg/kg net product
  - Basis: per 1 kg net released product across wet, cooked, dried and filled routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ingredient and process water (`ingredient_process_water`)

Record potable water added as an ingredient or used for tempering, mixing or granulation separately from cleaning water.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-dosed water by use and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_by_use`
- Sources: `eu-ec-852-2004`
- Range: Provisional preparation-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net product
  - Basis: per 1 kg net released product before separating water retained in product from water discharged
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other formulation inputs and processing aids (`other_formulation_inputs`)

Record salt, egg, oil, minor ingredients, processing aids and other formulation materials separately; do not infer their quantities from a generic recipe.

- Selected flow: Other formulation material
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass by material and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:
- Range: Provisional other-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg/kg net product
  - Basis: per 1 kg net released product, with zero allowed when no such input is used
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared mixture transferred to forming (`prepared_mixture`)

Calculate the wet mass of mixed dough, batter or granulated intermediate transferred to the forming stage from measured transfer records.

- Selected flow: Prepared cereal mixture
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or calculated opening-plus-input-minus-closing balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_balance`
- Sources:

##### Waste flows

###### Preparation rejects and spills (`preparation_rejects`)

Record sieving rejects, contaminated ingredients and spills by material, moisture state and destination; separately identify rework that remains inside the foreground system.

- Selected flow: Food preparation waste
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources:
- Range: Provisional preparation-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net product
  - Basis: discarded preparation material per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Forming and optional filling (`forming_and_filling`)

#### Inputs

##### Product flows

###### Prepared mixture (`forming_mixture_input`)

Record the prepared mixture received from the preceding foreground process without adding an upstream burden a second time.

- Selected flow: Prepared cereal mixture
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled with `prepared_mixture`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_balance`
- Sources:

###### Filling ingredients (`filling_ingredients`)

For filled products, record each filling ingredient by as-used mass and declared food group; use zero only for an explicitly unfilled route.

- Selected flow: Filling ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured filling ingredient mass by material and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `un-cpc-3-23721`
- Range: Provisional filling-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg/kg net product
  - Basis: per 1 kg net released product across unfilled and filled routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Forming electricity (`forming_electricity`)

Record electricity for mixing, extrusion, sheeting, cutting, granulation and filling equipment from submeters or allocated line meters.

- Selected flow: Electricity supplied to forming equipment
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_operation`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional forming-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg net product
  - Basis: per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Shaped or filled intermediate (`shaped_intermediate`)

Record the wet mass transferred to cooking, drying or other declared preparation step.

- Selected flow: Shaped or filled pasta intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled to forming inputs, rework and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_balance`
- Sources:

##### Waste flows

###### Forming rejects (`forming_rejects`)

Measure trimmings, malformed product and filling losses by destination; internal rework is an intermediate transfer and not a waste output.

- Selected flow: Forming food waste
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources:
- Range: Provisional forming-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net product
  - Basis: discarded forming material per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cooking, drying and cooling (`thermal_processing`)

#### Inputs

##### Product flows

###### Shaped intermediate input (`thermal_product_input`)

Record the shaped or filled intermediate received from forming and reconcile it to the upstream transfer.

- Selected flow: Shaped or filled pasta intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled with `shaped_intermediate`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_balance`
- Sources:

###### Cooking and cooling water (`thermal_process_water`)

Record water used for cooking, steaming generation, blanching, quenching or product-contact cooling separately by use and identify recirculation.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-calculated water withdrawal minus documented recovered water where appropriate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_by_use`
- Sources: `eu-ec-852-2004`
- Range: Provisional cooking-and-cooling-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg net product
  - Basis: per 1 kg net released product across dry-heat, steam, water-cooked and cooling routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy (`thermal_energy`)

Record purchased heat, steam and each on-site fuel separately for cooking, steaming, drying and hot-water generation.

- Selected flow: Thermal energy carrier
- Flow property / unit: Energy / MJ
- Amount rule: Metered carrier use converted with documented energy basis and allocated by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_operation`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional thermal-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg net product
  - Basis: per 1 kg net released product across cooking and drying routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal-process electricity (`thermal_electricity`)

Record electricity for pumps, conveyors, cookers, dryers, fans and cooling equipment assigned to this process.

- Selected flow: Electricity supplied to thermal processing
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_operation`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional thermal-process-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg net product
  - Basis: per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared product intermediate (`prepared_product_intermediate`)

Measure conforming product after the last thermal step and declared cooling or drying step, before optional freezing and packaging.

- Selected flow: Prepared pasta or couscous intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming transfer mass with moisture or solids basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output_and_quality`
- Sources:

##### Waste flows

###### Thermal-process wastewater (`thermal_wastewater`)

Measure wastewater discharged from cooking, quenching and cooling by destination and retain sampled load data when available.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or documented water balance by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume_load`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional thermal-wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg net product
  - Basis: wastewater sent to on-site or off-site treatment per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct fossil carbon dioxide (`direct_fossil_co2`)

Include this row only for on-site fuel combustion and calculate carbon dioxide from measured fuel use using an applicable reviewed factor; keep other direct pollutants as separate elementary rows.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: Calculated from collected fuel use and reviewed fuel-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:
- Range: Provisional direct-fossil-CO2 QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg CO2/kg net product
  - Basis: direct on-site fossil carbon dioxide only, per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Freezing, storage and packaging (`finishing_and_packaging`)

#### Inputs

##### Product flows

###### Prepared product for finishing (`finishing_product_input`)

Record the prepared product transferred from thermal processing; bypassed finishing operations shall be explicitly declared.

- Selected flow: Prepared pasta or couscous intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled with `prepared_product_intermediate`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_balance`
- Sources:

###### Refrigeration and packaging electricity (`finishing_electricity`)

Record electricity for freezing, chilled or frozen storage, conveyors, sealers and packing equipment when those operations are in scope.

- Selected flow: Electricity supplied to finishing operations
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or documented equipment-time and storage-duration allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_operation`
- Sources: `eu-ec-852-2004`; `eu-jrc-fdm-bref-2019`
- Range: Provisional finishing-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg net product
  - Basis: per 1 kg net released product, with declared storage duration and zero only when the operation is not used
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

When packaging is in scope, record primary, secondary and transport packaging separately by material and actual issued mass.

- Selected flow: Packaging material
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass by material, including documented line loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources:
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net product
  - Basis: packaging material per 1 kg net released product, with zero only for declared bulk unpackaged product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared pasta or couscous output (`prepared_pasta_or_couscous_output`)

This is the quantitative reference output. Record the released net edible mass after final conditioning and before adding packaging mass.

- Selected flow: Pasta, cooked, stuffed or otherwise prepared (but not as a complete dish), couscous, except as a complete dish `1312d181-2dd0-4af3-b938-c38ed2342c7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-23721`

##### Waste flows

###### Packaging scrap and off-spec finished product (`finishing_waste`)

Record packaging scrap and discarded finished product separately by material, food-contact status, moisture state and destination.

- Selected flow: Finishing and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources:
- Range: Provisional finishing-waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net product
  - Basis: finishing and packaging waste per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant emitted to air (`refrigerant_loss`)

For chilled or frozen routes, calculate each refrigerant loss separately from charge and service records; omit only when no refrigeration equipment is attributable to the product.

- Selected flow: Refrigerant emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated refrigerant make-up or verified leak mass allocated to represented production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_loss`
- Sources:
- Range: Provisional refrigerant-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net product
  - Basis: direct refrigerant loss per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cleaning, sanitation and wastewater handling (`cleaning_and_wastewater`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cleaning_water`)

Record product-contact and non-product-contact cleaning water separately where metered and document recycled-water controls.

- Selected flow: Cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Metered water by cleaning circuit or documented cycle allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_by_use`
- Sources: `eu-ec-852-2004`; `eu-jrc-fdm-bref-2019`
- Range: Provisional cleaning-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg net product
  - Basis: allocated cleaning water per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation agents (`cleaning_agents`)

Record each detergent, disinfectant and sanitation chemical on an as-used product-mass and concentration basis.

- Selected flow: Cleaning or sanitation agent
- Flow property / unit: Mass / kg
- Amount rule: Measured issued product mass or calculated dose from verified concentration and solution volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_agent_use`
- Sources: `eu-ec-852-2004`
- Range: Provisional cleaning-agent QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net product
  - Basis: as-used cleaning product per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater sent to on-site or off-site treatment and retain flow and sampled load data without subtracting pollutants already represented in the wastewater dataset.

- Selected flow: Food-processing cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or water balance by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume_load`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional cleaning-wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg net product
  - Basis: allocated cleaning wastewater per 1 kg net released product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Multi-product lines and shared operations | First separate product routes, time periods, meters and directly measured material balances so burdens are assigned without allocation wherever practicable. | `iso-14044-2006` |
| `allocation_rework_internal` | Rework returned within the represented foreground system | Treat internal rework as an intermediate transfer and do not assign it a second upstream burden or report it as a waste output. |  |
| `allocation_shared_operations` | Shared cleaning, refrigeration, storage, compressed air and utilities | Use a documented causal physical driver such as metered use, equipment time, cleaning cycle, occupied storage time or throughput; do not default to net product mass when another driver better represents causality. | `iso-14044-2006` |
| `allocation_coproducts` | Saleable co-products or recovered materials leaving the system | Report quantity, state, destination and economic status separately; prefer physical causal allocation when justified and use economic allocation only when physical relationships cannot be supported, with method and sensitivity disclosed. | `iso-14044-2006`; `iso-14067-2018` |
| `allocation_waste_treatment` | Wastes and wastewater | Keep collection and on-site treatment in the foreground; link off-site treatment by destination and state, and disclose any recycling or substitution credit rather than silently netting it from the inventory. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `ingredient_preparation`; `forming_and_filling` | Cereal, filling and other formulation inputs | Weighing, receiving and batch issue records | material_id; supplier_lot; product_lot; gross_mass; tare_mass; net_mass; moisture_or_solids_basis; rework_flag | Calibrated scale or verified receiving/issue system reconciled to batch recipe and inventory movement | kg | Each receipt or batch issue | At least the declared representative reporting period, covering all included product lots | All represented lines and sites | Sum net mass by material and product lot; allocate only documented shared issues | Scale calibration, lot traceability, inventory reconciliation and exception log |
| `cp_water_by_use` | `ingredient_preparation`; `thermal_processing`; `cleaning_and_wastewater` | Ingredient, process, cooling and cleaning water | Meter, batch-dose and water-balance records | meter_id; timestamp; opening_reading; closing_reading; batch_volume; water_use; recycled_volume; density_basis | Submeter preferred; otherwise verified batch dosing or reconciled site water balance | kg | Continuous or each batch/cycle | Representative reporting period including seasonal or campaign variation | Each represented line, circuit and site | Sum by use; subtract only documented recirculated quantity not withdrawn anew; normalize to released product | Meter calibration, potable-water evidence where required and balance residual review |
| `cp_energy_by_operation` | `forming_and_filling`; `thermal_processing`; `finishing_and_packaging` | Electricity, heat, steam, fuel and refrigeration energy | Meter, invoice and equipment operating records | carrier; meter_id; opening_reading; closing_reading; equipment_id; operating_time; load; calorific_value_basis; storage_duration | Submeter by operation; otherwise allocation from verified meter totals using causal equipment records | kWh; MJ | Continuous, batch or billing interval | Full reporting period with production shutdowns and storage time represented | Each represented line and shared utility system | Sum by carrier and operation; document conversions and allocation drivers; normalize to released product | Meter/invoice reconciliation, conversion worksheet and allocation sensitivity |
| `cp_intermediate_balance` | `ingredient_preparation`; `forming_and_filling`; `thermal_processing`; `finishing_and_packaging` | Intermediate transfers and mass balance | Batch transfer and stock records | product_lot; opening_stock; inputs; transfer_mass; closing_stock; rework; rejects; moisture_basis | Calibrated transfer scales or opening-plus-input-minus-closing calculation | kg | Each batch or lot | All included product lots in reporting period | Each represented process hand-off | Reconcile matched upstream output and downstream input; investigate unmatched transfers | Batch genealogy, scale calibration and signed reconciliation |
| `cp_waste_mass_destination` | `ingredient_preparation`; `forming_and_filling`; `finishing_and_packaging` | Food rejects, spills, off-spec product and packaging scrap | Waste scale, container and shipment records | waste_type; source_process; gross_mass; tare_mass; moisture_basis; rework_status; destination; ticket_id | Weigh at generation or destination; distinguish internal rework from waste crossing the boundary | kg | Each batch or shipment | Full reporting period | All represented lines and waste destinations | Sum net waste by type, state and destination; no netting against inputs | Scale records, transfer tickets, destination evidence and rework reconciliation |
| `cp_reference_output_and_quality` | `thermal_processing`; `finishing_and_packaging` | Conforming product output and release state | Production and quality release records | product_id; lot_id; net_mass; moisture_or_solids; filling_status; route; temperature_state; packaging_state; release_result | Calibrated product scale linked to lot release and declared test methods | kg; %; °C where applicable | Each released lot | All included lots in reporting period | All represented products, lines and sites | Sum only released conforming net edible mass; exclude packaging and separately record rejected lots | Scale calibration, product specification, laboratory or process-control result and release authorization |
| `cp_wastewater_volume_load` | `thermal_processing`; `cleaning_and_wastewater` | Wastewater by treatment destination | Flow meter, water balance and sampling records | discharge_point; flow; sampling_time; parameter; concentration; treatment_route; sludge_or_residue | Metered flow and representative sampling under the site monitoring plan | kg; m3; mg/L or site reporting unit | Continuous flow where available and scheduled representative sampling | Full reporting period including cleaning peaks | Every included discharge point and treatment route | Sum flow by destination; calculate loads only from temporally matched flow and concentration; avoid duplicate elementary reporting | Meter calibration, chain of custody, laboratory method and sampling representativeness review |
| `cp_direct_emissions` | `thermal_processing` | On-site combustion emissions | Fuel meter and emission-factor record | fuel_type; fuel_amount; energy_basis; factor_id; factor_value; pollutant; control_state | Calculate each pollutant from measured fuel use and reviewed applicable factor or direct monitoring | kg; MJ | Reporting interval or monitored event | Full reporting period | All attributable on-site combustion units | Sum by pollutant and unit; allocate with documented causal driver | Fuel reconciliation, factor version and unit check, monitoring QA where used |
| `cp_packaging_mass` | `finishing_and_packaging` | Packaging by material | Packaging issue and scrap records | packaging_id; material; issued_mass; returned_mass; scrap_mass; packed_units; product_lot | Calibrated scale or supplier unit mass verified by periodic weighing | kg | Each lot or packaging campaign | Full reporting period | All included packaging formats | Issued minus returned mass, reconciled with packed units and scrap; normalize separately from product mass | Supplier specification, check-weigh results and packaging balance |
| `cp_refrigerant_loss` | `finishing_and_packaging` | Refrigerant emitted to air | Charge, make-up, recovery and service records | refrigerant_id; opening_charge; added_mass; recovered_mass; closing_charge; equipment_id; operating_period | Verified mass balance for each refrigeration system | kg | Each service event and annual/reporting-period close | Full reporting period including leakage and maintenance | All attributable refrigeration equipment | Calculate loss by refrigerant; allocate shared systems by documented cooling load or storage driver | Service certificate, cylinder weights and charge reconciliation |
| `cp_cleaning_agent_use` | `cleaning_and_wastewater` | Cleaning and sanitation chemicals | Issue, dosing and concentration records | chemical_id; product_mass; solution_volume; concentration; circuit; cleaning_cycle | Metered dosing or verified issue mass reconciled to cleaning schedule | kg | Each cleaning cycle or issue | Full reporting period | All represented cleaning circuits | Sum as-used product mass by chemical; do not confuse formulated product mass with active ingredient | Doser calibration, safety/specification sheet and inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | Every foreground inventory row | normalized amount = reporting-period amount / reporting-period net released reference-product mass | Unnormalized row total; net released product mass from `cp_reference_output_and_quality` | Amount per 1 kg net released product |  |
| `calc_intermediate_balance` | Each process hand-off | calculated transfer = opening stock + measured inputs - closing stock - measured rejects - separately recorded losses; compare with downstream receipt | Matched batch mass fields from `cp_intermediate_balance` | Reconciled intermediate transfer and residual |  |
| `calc_water_balance` | Water uses and wastewater | withdrawal = retained product water + evaporation + wastewater + other measured outputs + closing storage - opening storage; report rather than force-close the residual | Water-use, product moisture, wastewater and storage records | Water-balance residual and normalized use by purpose |  |
| `calc_direct_emission` | Each on-site fuel and pollutant | direct emission = measured fuel quantity on the declared basis × reviewed applicable emission factor; no factor may be inserted without source and unit review | Fuel record; factor id, value and units | Pollutant mass by elementary flow |  |
| `calc_refrigerant_loss` | Each refrigeration system | refrigerant loss = opening charge + additions - recovered mass - closing charge, adjusted only for documented transfers | Charge, make-up, recovery and closing records | Refrigerant loss by substance |  |
| `calc_shared_operation_allocation` | Shared utilities and support operations | allocated amount = measured shared total × documented product-specific causal driver / sum of the same driver for all products | Shared total and selected physical driver | Product-attributed shared amount with allocation factor | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and reference flow | Demonstrate that each represented product is within CPC 23721 and is not a complete dish; retain formulation, filling, route, state and packaging qualifiers. | Product specification, label, batch record and CPC scope review using `un-cpc-3-23721` |
| `dq_temporal` | All foreground data | Use a representative period that captures product mix, cleaning, storage and seasonal or campaign variation; disclose shutdowns, abnormal lots and substitutions. | Dated source records, production schedule and representativeness statement |
| `dq_completeness` | Process map and inventory | Reconcile every required process and each applicable conditional process; quantify material, water, energy, waste and direct-emission gaps rather than treating missing records as zero. | Completeness matrix, mass/water/energy reconciliation and gap log |
| `dq_measurement` | Measured rows | Use calibrated or verified instruments and retain raw totals before normalization; document estimation, conversion and allocation separately. | Calibration certificates, meter checks, invoices, batch records and calculation workbook |
| `dq_food_safety_state` | Product-contact water, heat treatment, cooling and cold chain | Retain evidence that the declared operation and market state were produced under applicable hygiene, HACCP and temperature controls; this PCR does not replace food-safety compliance. | HACCP records, potable-water evidence, process-control records and `eu-ec-852-2004` |
| `dq_provisional_ranges` | Every `reasoned_estimate` range | Treat the range only as a candidate-stage QA screen; replace it with representative foreground distribution or reviewed source evidence and document reviewer acceptance before publication. | Range-replacement log, foreground statistics or reviewed source record |
| `dq_uuid_resolution` | Non-reference inventory flows | Resolve and independently verify Tiangong UUID, flow property and unit group before publication; until then retain the semantic candidate without a fabricated UUID. | Tiangong readback record and reviewer sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference output shall use Tiangong product-flow UUID `1312d181-2dd0-4af3-b938-c38ed2342c7d`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and exactly 1 kg net product excluding packaging. | `un-cpc-3-23721` |
| `validate_category_and_qualifiers` | Dataset identity | Reject a dataset that represents a complete dish, omits the complete-dish exclusion, or lacks product form, principal cereal, filling status, preparation and preservation route, market state, packaging scope, geography or reporting period. | `un-cpc-3-23721` |
| `validate_process_coverage` | Process inventory | Require all required process ids and every applicable conditional operation; each not-applicable filling, drying, cooling, freezing or packaging decision shall be explicit. | `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | Material inventory | Reconcile cereal, filling, other material and water inputs with released product, intermediates, rework, wastes, wastewater and disclosed losses on consistent moisture bases; flag unexplained residuals using the dataset's reviewed threshold. | `iso-14044-2006` |
| `validate_no_double_count` | Intermediate, rework, wastewater and emissions | Reject duplicate upstream burdens on internal intermediates or rework, duplicate water withdrawal and wastewater quantities, and duplicate pollutant reporting both inside a wastewater treatment dataset and as a direct elementary emission. | `iso-14044-2006` |
| `validate_couscous_claim` | Codex-claiming couscous route | When the dataset claims Codex CXS 202-1995 conformity, require durum-wheat or explicitly qualified alternative cereal identity, potable-water use, cooking and drying route, declared test method and moisture not exceeding 13.5%; do not apply this rule to other products. | `codex-cxs-202-1995` |
| `validate_food_safety_records` | Product-contact water, steam, cooling and cold chain | Require applicable hygiene/HACCP evidence and prevent non-potable water or unsafe recycled water from being represented as product-contact water without authority-backed suitability evidence. | `eu-ec-852-2004` |
| `validate_provisional_estimates` | Reasoned-estimate ranges | Candidate QA guardrails shall not be interpreted as measured values or publication defaults; publication review must replace or explicitly accept every provisional range with documented rationale. |  |
| `validate_unresolved_identities` | Inventory flow identities | Fail publication readiness while any non-reference UUID required by the implemented inventory remains unresolved or unverified; never infer UUIDs from names alone. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for prepared pasta, noodles, dumplings or couscous that is not a complete dish. |
| downstream_use | `secondary_dataset`; `background_dataset`; downstream `process` and `lifecyclemodel` projections after review. |
| allowed_use | Product-specific factory-gate modelling when the declared formulation, route, temperature state, geography, reporting period, packaging scope and data quality are representative. |
| excluded_use | Complete dishes or meals; uncooked unstuffed pasta; unqualified substitution across materially different filled, dried, chilled, frozen or shelf-stable routes; food-safety certification; use of provisional QA ranges as measured defaults. |
| required_metadata | Canonical PCR id and version; CPC mapping context; reference UUID and amount; product and cereal identity; filling and formulation class; processing and preservation route; moisture or solids basis; market and packaging state; geography; site and technology; reporting period; allocation method; upstream datasets; unresolved identities. |
| required_quality_disclosure | Foreground coverage; meter and scale quality; sampling and calculation methods; mass, water and energy residuals; conditional process decisions; allocation drivers; data gaps; provisional range replacements; wastewater and waste destinations; refrigerant and direct-emission treatment. |
| update_trigger | Change in formulation, filling class, cereal source, process technology, cooking/drying/freezing route, packaging, site, energy or water system, wastewater treatment, allocation method, data age or source/UUID review that materially changes representativeness. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-23721` | official_guidance | United Nations Statistics Division, Draft CPC Version 3.0 Explanatory Notes, subclass 23721, https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf (retrieved 2026-08-11) | Product scope, included prepared pasta/noodle/dumpling/couscous forms, complete-dish exclusion and classification identity. |
| `codex-cxs-202-1995` | standard | Codex Alimentarius, CXS 202-1995 Standard for Couscous, https://www.fao.org/input/download/standards/65/CXS_202e.pdf (retrieved 2026-08-11) | Couscous ingredient and process identity, potable-water basis, cooking and drying, moisture limit, hygiene, packaging and labelling qualifiers. |
| `eu-ec-852-2004` | official_guidance | Regulation (EC) No 852/2004 on the hygiene of foodstuffs, consolidated text, https://eur-lex.europa.eu/eli/reg/2004/852 (retrieved 2026-08-11) | HACCP and hygiene controls, potable/recycled water and product-contact steam, heat-treatment cooling and cold-chain evidence. |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries (retrieved 2026-08-11) | Food-manufacturing process scope, operational resource and emission inventory, cleaning, wastewater and monitoring coverage. |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | LCI goal and scope, inventory consistency, allocation, reporting, review and data-quality framing. |
| `iso-14067-2018` | standard | ISO 14067:2018, Greenhouse gases — Carbon footprint of products — Requirements and guidelines for quantification, https://www.iso.org/standard/71206.html (retrieved 2026-08-11) | Product carbon-footprint quantification and reporting consistent with ISO 14040/14044. |
