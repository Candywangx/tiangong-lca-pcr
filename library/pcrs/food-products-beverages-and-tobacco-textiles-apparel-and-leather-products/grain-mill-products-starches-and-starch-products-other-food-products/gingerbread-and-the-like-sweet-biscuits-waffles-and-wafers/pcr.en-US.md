---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.gingerbread-and-the-like-sweet-biscuits-waffles-and-wafers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gingerbread and the like; sweet biscuits; waffles and wafers

## 1. Scope and Applicability

This candidate PCR covers the CPC 23420 product family: gingerbread and similar products, sweet biscuits, waffles, and wafers. The detailed foreground route below is deliberately narrower than the category: it represents an ambient-stable cream-filled sandwich sweet biscuit made from two baked biscuit shells and a non-frozen fat-and-sugar-based filling. The Tiangong product flow `Sandwich Cookie` is used only as the reference identity for that representative route; it must not be interpreted as a complete process model for every product in the category.

The foreground boundary begins with ingredients and packaging materials received at the manufacturing site and ends with saleable packaged sandwich biscuits leaving the packaging line. Upstream production of ingredients, fuels, electricity, water, packaging, and treatment services remains linked through upstream datasets. Distribution, retail, consumer storage and consumption, and end-of-life are outside this foreground dataset unless a downstream study adds them explicitly.

This candidate does not yet provide product-specific routes for gingerbread, unfilled sweet biscuits, wafer-sheet products, ice-cream sandwiches, chilled dairy-cream products, savoury crackers, crispbread, pastry goods, cakes, or bread. A producer shall not apply the representative sandwich-biscuit inventory unchanged to those products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.gingerbread-and-the-like-sweet-biscuits-waffles-and-wafers` |
| classification_refs | CPC 3.0 `23420`, exact classification context; the classification is not the canonical PCR identity |
| covered_products | Gingerbread and similar products; sweet biscuits; waffles; wafers |
| excluded_products | Crispbread, rusks and toasted products; pastry goods and cakes; bread and other bakers' wares; savoury crackers outside CPC 23420; ice-cream sandwiches and other frozen novelties |
| representative_product | Ambient-stable cream-filled sandwich sweet biscuit represented by Tiangong flow `Sandwich Cookie` |
| production_route | Ingredient receipt and metering; dough mixing; forming; tunnel-oven baking; cooling; cream-filling preparation; filling deposition and sandwich assembly; primary packaging; shared cleaning and utilities |
| market_state | Saleable, ambient-stable, packaged food at the manufacturing-site packaging-line gate; net product mass excludes packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of ambient-stable cream-filled sandwich sweet biscuits for human consumption |
| How much | 1 kg net mass of saleable sandwich biscuits at the packaging-line gate, excluding packaging mass |
| How well | Product conforms to the declared recipe family, biscuit-shell type, filling type and mass fraction, final moisture or water-activity specification, size or count-to-mass basis, and saleable quality criteria |
| How long or cycle | One declared production campaign normalized to 1 kg output; shelf life is declared but downstream storage over that shelf life is outside the foreground boundary |
| reference_flow_link | The reference product output row `packaged_sandwich_biscuit` in process `primary_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Sandwich Cookie `80a32a82-0f7d-4112-a92e-5adcc89f1db3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype = cream-filled sandwich sweet biscuit; shell formulation and geometry; filling type and filling mass fraction; final moisture or water activity; net mass and count-to-mass basis; packaging configuration; rework policy; production technology; site geography; data period; market state = ambient-stable packaged product |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory quantities to 1 kg net saleable biscuit mass; exclude primary, secondary, and transport packaging from the reference-product mass and inventory those materials separately. |
| `count_to_mass_conversion` | Piece-count production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When output is recorded by count, determine mean net mass from a documented representative sample for each declared product and campaign; retain sample count, gross and tare masses, and variability. |
| `energy_carrier_separation` | Electricity, fuels, steam, and purchased heat | Carrier-specific energy property | kWh for electricity; MJ for fuels and heat | Preserve energy carriers separately. Convert units with documented conversion factors and do not combine electricity and thermal energy into one unqualified total. |
| `water_mass_basis` | Ingredient, cleaning, and utility water | Mass | kg | Record water by purpose. Convert metered volume to mass using a documented density and temperature assumption when mass is not measured directly. |
| `recipe_mass_basis` | Flour, sugar, fats, filling, water, and minor ingredients | Mass | kg | Record as-used ingredient mass entering the foreground process; disclose whether supplier moisture or solids corrections are applied and do not silently convert product mass to dry matter. |
| `packaging_mass_separation` | Primary and secondary packaging | Mass | kg | Record each packaging material by measured or bill-of-material mass per 1 kg net product; packaging is never included in the reference product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients, processing aids, packaging materials, water, fuels, and purchased utilities are received at the manufacturing-site gate with quantity, supplier or dataset identity, material state, and relevant specification declared. |
| starting_condition_role | Foreground gate-to-gate starting condition with upstream burdens supplied by linked ingredient, energy, water, packaging, and treatment datasets. |
| product_classification_scope | CPC 3.0 `23420` category context, with detailed process guidance limited to the declared representative cream-filled sandwich sweet-biscuit route. |
| recursive_input_rule | A purchased biscuit, wafer sheet, filling preparation, or other input within the same product category remains a visible product input and links to a separate upstream dataset; do not recursively recreate it inside the same foreground package. |
| upstream_dataset_requirement | Each material and service input shall have a geographically, technologically, and temporally representative upstream dataset or a documented data gap; mass and energy flows may not disappear at the foreground gate. |
| disclosure | Declare product formulation family, filling fraction, line technology, direct or indirect oven heating, internal rework treatment, packaging scope, shared-utility allocation, site geography, data period, and every included or excluded conditional process. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_site_receipt` | foreground_system_boundary | Include on-site receipt, metering, storage losses, and transfer of all ingredients and production aids used by the representative route. | `eu-jrc-fdm-bref-2019` |
| `boundary_include_core_manufacturing` | foreground_system_boundary | Include dough mixing, piece formation, baking, cooling, filling preparation, filling deposition, sandwich assembly, packaging, cleaning, and directly attributable utilities. | `eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012` |
| `boundary_include_upstream_links` | foreground_system_boundary | Keep all purchased ingredients, energy carriers, water, packaging materials, and treatment services as visible product or waste flows linked to upstream datasets. | `iso-14044-2006`; `environdec-pcr-2025-03` |
| `boundary_include_direct_releases` | foreground_system_boundary | Include measured or calculated direct releases from on-site fuel combustion, refrigerant leakage, wastewater, and waste handling when they occur; disclose the factor source and calculation method. | `eu-jrc-fdm-bref-2019` |
| `boundary_include_losses_and_treatment` | foreground_system_boundary | Record ingredient spills, dough and biscuit rejects, filling losses, packaging scrap, wastewater, and their actual reuse, recycling, or treatment routes; internal rework remains visible in gross records. | `eu-jrc-fdm-bref-2019`; `ghg-protocol-product-standard-2011` |
| `boundary_exclude_downstream_by_default` | foreground_system_boundary | Exclude distribution, retail, consumer storage and consumption, and end-of-life from this foreground package unless a downstream lifecycle model adds them explicitly and without double counting. | `environdec-pcr-2025-03`; `ghg-protocol-product-standard-2011` |
| `boundary_limit_representative_route` | foreground_system_boundary | Do not use this detailed inventory unchanged for gingerbread, unfilled wafers, ice-cream sandwiches, chilled fillings, or other materially different products; document and review route changes before use. | `eu-jrc-fdm-bref-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_and_dough_preparation` | Ingredient metering and dough preparation | `required` | Always for the representative route | Foreground material preparation | kg mixed dough |
| `forming_and_baking` | Piece forming and tunnel-oven baking | `required` | Always for the representative route | Foreground thermal processing | kg baked biscuit shells |
| `cooling` | Biscuit-shell cooling | `required` | Always for the representative route | Foreground conditioning | kg cooled biscuit shells |
| `filling_and_assembly` | Filling preparation and sandwich assembly | `required` | Always for the representative cream-filled route | Foreground secondary processing | kg assembled sandwich biscuits |
| `primary_packaging` | Primary packaging | `required` | Always for the declared packaged market state | Foreground finalization and reference output | 1 kg net saleable sandwich biscuits |
| `shared_cleaning_and_utilities` | Cleaning, sanitation, and shared utilities | `required` | Always; allocate to the representative route using causal records | Foreground support | production campaign normalized to 1 kg net product |

### Process: Ingredient metering and dough preparation (`ingredient_and_dough_preparation`)

#### Inputs

##### Product flows

###### Flour entering the biscuit-shell recipe (`flour_input`)

Record the as-used flour mass from batch formulation and scale records. Declare flour type, moisture basis when available, and supplier or upstream dataset.

- Selected flow: Wheat or other declared cereal flour; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured batch flour mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional flour-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.25
  - Upper: 0.75
  - Unit: kg/kg net product
  - Basis: flour mass per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sugar and other caloric sweeteners (`sweetener_input`)

Record each sweetener separately where supplier datasets differ; aggregate only after preserving component masses.

- Selected flow: Declared sugar or syrup; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured batch sweetener mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional sweetener-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.10
  - Upper: 0.45
  - Unit: kg/kg net product
  - Basis: sweetener mass per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fats and oils for biscuit shells (`shell_fat_input`)

Record each fat or oil by as-used mass and specification; do not combine shell fat with filling fat unless the foreground records cannot separate them and the limitation is disclosed.

- Selected flow: Declared edible fat or oil; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured batch fat and oil mass used in biscuit shells
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional shell-fat screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.03
  - Upper: 0.30
  - Unit: kg/kg net product
  - Basis: shell fat and oil mass per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dough water (`dough_water_input`)

Record water added to dough separately from cleaning and utility water. Water evaporated during baking remains part of the mass balance rather than an unrecorded loss.

- Selected flow: Process water; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured water added to dough
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional dough-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.02
  - Upper: 0.35
  - Unit: kg/kg net product
  - Basis: dough water per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Minor ingredients and processing aids (`minor_ingredients_input`)

Record salt, leavening agents, emulsifiers, flavours, cocoa, milk solids, and other recipe components separately when they are material or have distinct upstream datasets.

- Selected flow: Declared minor ingredient or processing aid; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured or batch-sheet quantity by ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `eu-jrc-fdm-bref-2019`

###### Electricity for metering and mixing (`dough_preparation_electricity`)

Use submetered electricity where available; otherwise allocate metered line electricity using operating time and verified equipment load.

- Selected flow: Electricity, declared grid or supplier mix; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered or causally allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg mixed dough and then per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_meters`
- Sources: `us-epa-energy-star-baking-2012`
- Range: Provisional mixing-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.005
  - Upper: 0.20
  - Unit: kWh/kg net product
  - Basis: electricity for ingredient metering and dough preparation per 1 kg net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Ingredient spills and unrecovered dough-preparation waste (`dough_preparation_waste`)

Record material that leaves the process without internal rework as waste and identify its treatment route.

- Selected flow: Organic food-production waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured disposed or externally recovered mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg mixed dough
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional preparation-waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg mixed dough
  - Basis: waste leaving dough preparation per kg mixed dough
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Mixed biscuit dough (`mixed_dough_output`)

Record gross dough output before forming and reconcile it with recipe inputs, retained vessel residue, spills, and sampling.

- Selected flow: Mixed biscuit dough; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured batch output or calculated recipe mass adjusted by measured losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per dough batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional mixed-dough output screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.65
  - Upper: 1.30
  - Unit: kg/kg net product
  - Basis: mixed dough required per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Piece forming and tunnel-oven baking (`forming_and_baking`)

#### Inputs

##### Product flows

###### Mixed dough entering forming (`dough_to_forming`)

Transfer the gross mixed-dough mass from `mixed_dough_output` without duplicating upstream ingredients.

- Selected flow: Mixed biscuit dough; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured dough transferred to the forming line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg baked biscuit shells
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Thermal energy for baking (`baking_thermal_energy`)

Record natural gas, other fuel, steam, or purchased heat separately. The source-backed range is a bakery-sector screening range and is not a substitute for site metering.

- Selected flow: Declared oven fuel, steam, or purchased heat; Tiangong UUID unresolved
- Flow property / unit: Energy / MJ
- Amount rule: metered oven thermal input by carrier, allocated to the declared campaign when shared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg baked biscuit shells and then per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_meters`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012`
- Range: Published bakery-oven thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.396
  - Upper: 7.2
  - Unit: MJ/kg baked product
  - Basis: conversion of 0.110 to 2 kWh thermal per kg reported for 51 bakery ovens; use only as a broad sector screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-fdm-bref-2019`

###### Electricity for forming and baking (`forming_baking_electricity`)

Record forming drives, conveyors, oven fans, controls, and electrically heated ovens through submeters or a documented causal allocation.

- Selected flow: Electricity, declared grid or supplier mix; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered or causally allocated forming and baking electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg baked biscuit shells and then per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_meters`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012`
- Range: Published bakery-line baking-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.125
  - Upper: 0.167
  - Unit: kWh/kg baked product
  - Basis: bakery-line electric energy reported for baking; applicability to the declared biscuit line must be reviewed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

#### Outputs

##### Product flows

###### Baked biscuit shells (`baked_shell_output`)

Measure acceptable shells leaving the oven before cooling and record residual moisture or water-activity sampling basis.

- Selected flow: Baked sweet biscuit shells; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured acceptable shell mass leaving the oven
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per forming and baking campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional baked-shell yield screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.45
  - Upper: 0.90
  - Unit: kg/kg net product
  - Basis: acceptable baked shells per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Baking rejects leaving the foreground route (`baking_reject_waste`)

Record burned, underbaked, broken, or contaminated shells that are not returned as internal rework.

- Selected flow: Rejected biscuit waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg baked biscuit shells
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional baking-reject screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg baked biscuit shells
  - Basis: rejects leaving the process per kg baked shell output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct oven-combustion releases (`direct_oven_emissions`)

When fuel is combusted on site, calculate and report direct stack releases separately from upstream fuel production; retain fuel quantity, composition, factor source, oxidation assumptions, and any stack measurements.

- Selected flow: Carrier-specific direct combustion emissions; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg by elementary flow
- Amount rule: metered fuel quantity multiplied by approved carrier- and technology-specific factors, replaced by measured releases where required
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg baked biscuit shells and then per reference flow
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel_meters`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Biscuit-shell cooling (`cooling`)

#### Inputs

##### Product flows

###### Baked shells entering cooling (`shells_to_cooling`)

Transfer the measured acceptable shell mass from the oven to the cooling stage.

- Selected flow: Baked sweet biscuit shells; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured shells entering cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cooled shells
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Cooling electricity (`cooling_electricity`)

Include conveyors, fans, dehumidification, and conditioned-air loads attributable to shell cooling.

- Selected flow: Electricity, declared grid or supplier mix; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered or causally allocated cooling electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cooled shells and then per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_meters`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012`
- Range: Provisional cooling-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.005
  - Upper: 0.30
  - Unit: kWh/kg net product
  - Basis: cooling electricity per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooled biscuit shells (`cooled_shell_output`)

Record shells released to filling after the declared time, temperature, and moisture or water-activity checks.

- Selected flow: Cooled sweet biscuit shells; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured acceptable cooled-shell mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cooling campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Broken shells not internally reworked (`cooling_breakage_waste`)

Record broken or contaminated shells leaving the route and distinguish external recovery from disposal.

- Selected flow: Rejected biscuit waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured breakage mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cooled shells
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional cooling-breakage screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg cooled shells
  - Basis: breakage leaving cooling per kg cooled shell output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Filling preparation and sandwich assembly (`filling_and_assembly`)

#### Inputs

##### Product flows

###### Cooled biscuit shells for assembly (`cooled_shells_to_assembly`)

Transfer cooled shell mass without duplicating shell ingredients or upstream burdens.

- Selected flow: Cooled sweet biscuit shells; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured shells issued to the assembly line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled sandwich biscuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_and_assembly`
- Sources: `eu-jrc-fdm-bref-2019`

###### Filling ingredients (`filling_material_input`)

Record filling fats, sugar, cocoa, milk ingredients, flavours, emulsifiers, and other components separately where upstream datasets differ. This representative route excludes frozen ice-cream and chilled high-moisture fillings.

- Selected flow: Declared ambient-stable cream-filling ingredients; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured batch mass by filling ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_and_assembly`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional filling-mass-fraction screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.10
  - Upper: 0.50
  - Unit: kg/kg net product
  - Basis: filling ingredient mass per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for filling and assembly (`assembly_electricity`)

Include mixing or tempering of the ambient-stable filling, pumps, depositors, sandwiching equipment, conveyors, and directly attributable conditioning.

- Selected flow: Electricity, declared grid or supplier mix; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered or causally allocated filling and assembly electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled sandwich biscuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_meters`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional assembly-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.15
  - Unit: kWh/kg net product
  - Basis: filling and assembly electricity per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled sandwich biscuits (`assembled_biscuit_output`)

Measure gross acceptable assembled output before packaging and record filling fraction, count, and net mass checks.

- Selected flow: Unpackaged sandwich biscuits; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured acceptable assembled biscuit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_and_assembly`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional assembly-yield screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.85
  - Upper: 1.00
  - Unit: kg/kg gross shell and filling input
  - Basis: acceptable assembled output divided by gross shell and filling input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Filling and assembly losses (`assembly_loss_waste`)

Record unreworked filling residue, misassembled biscuits, and contaminated product by actual destination.

- Selected flow: Organic food-production waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured loss mass leaving the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled sandwich biscuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional assembly-loss screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg assembled sandwich biscuits
  - Basis: loss leaving filling and assembly per kg acceptable assembled output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Primary packaging (`primary_packaging`)

#### Inputs

##### Product flows

###### Assembled biscuits entering packaging (`biscuits_to_packaging`)

Transfer measured assembled output to packaging and retain the reconciliation between input, saleable output, samples, and rejects.

- Selected flow: Unpackaged sandwich biscuits; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured unpackaged biscuit mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_and_output`
- Sources: `eu-jrc-fdm-bref-2019`

###### Primary packaging materials (`primary_packaging_material`)

Record films, trays, cartons, labels, inks, and closures separately by material and measured or bill-of-material mass.

- Selected flow: Declared primary packaging material; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled with issue and scrap records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_and_output`
- Sources: `environdec-pcr-2025-03`
- Range: Provisional primary-packaging screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.005
  - Upper: 0.20
  - Unit: kg/kg net product
  - Basis: primary packaging mass per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging electricity (`packaging_electricity`)

Include wrapper, cartoner, labeller, checkweigher, inspection, and directly attributable conveyor electricity.

- Selected flow: Electricity, declared grid or supplier mix; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered or causally allocated packaging electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_meters`
- Sources: `us-epa-energy-star-baking-2012`
- Range: Provisional packaging-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.15
  - Unit: kWh/kg net product
  - Basis: packaging electricity per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Packaged saleable sandwich biscuits (`packaged_sandwich_biscuit`)

This is the quantitative reference output. Record net biscuit mass after excluding all packaging mass.

- Selected flow: Sandwich Cookie `80a32a82-0f7d-4112-a92e-5adcc89f1db3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net saleable biscuit mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:
- Range: Reference-product mass-balance identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: required reference output after normalization
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record start-up film, trim, rejected packs, labels, cartons, and other packaging materials by material and destination.

- Selected flow: Packaging waste by material; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured packaging scrap by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_and_output`
- Sources: `environdec-pcr-2025-03`
- Range: Provisional packaging-scrap screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg net product
  - Basis: packaging scrap per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Product rejected during packaging (`packaging_product_loss`)

Record crushed, contaminated, underweight, or otherwise rejected product that is not internally reworked.

- Selected flow: Rejected biscuit waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured product loss by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable sandwich biscuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_rework_and_waste`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional packaging-product-loss screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg net product
  - Basis: product loss during packaging per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning, sanitation, and shared utilities (`shared_cleaning_and_utilities`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cleaning_water`)

Record water used for cleaning, sanitation, and controlled wet cleaning separately from recipe water; allocate shared cleaning using cleaned equipment area, cleaning time, campaign count, or another causal driver.

- Selected flow: Process water; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: metered or causally allocated cleaning-water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production campaign and then per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_chemicals_and_effluent`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012`
- Range: Provisional cleaning-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.02
  - Upper: 5.0
  - Unit: kg/kg net product
  - Basis: cleaning and sanitation water per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning chemicals (`cleaning_chemical_input`)

Record each detergent, sanitizer, and other cleaning chemical on an as-supplied product-mass basis and disclose dilution calculations.

- Selected flow: Declared cleaning chemical; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: purchase or issue records reconciled with concentration and dosing logs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production campaign and then per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_water_chemicals_and_effluent`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional cleaning-chemical screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.0001
  - Upper: 0.05
  - Unit: kg/kg net product
  - Basis: as-supplied cleaning chemicals per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared facility electricity and heat (`shared_utility_energy`)

Include compressed air, HVAC, lighting, cleaning heat, and other shared utilities not already assigned to a process. Avoid double counting process-submetered energy.

- Selected flow: Electricity and heat, recorded separately; Tiangong UUIDs unresolved
- Flow property / unit: Energy / kWh electricity and MJ heat
- Amount rule: metered shared utility use allocated with documented causal drivers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production campaign and then per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel_meters`
- Sources: `us-epa-energy-star-baking-2012`
- Range: Provisional shared-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kWh/kg net product
  - Basis: shared facility electricity per 1 kg net saleable sandwich biscuits, excluding process-submetered electricity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater sent to treatment (`cleaning_wastewater`)

Record measured discharge mass or volume, destination, and relevant load indicators; do not equate water input with wastewater output without accounting for evaporation, retained water, and other uses.

- Selected flow: Wastewater to declared treatment; Tiangong UUID unresolved
- Flow property / unit: Mass / kg or volume / m3 with documented conversion
- Amount rule: metered discharge allocated to the campaign using a causal basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production campaign and then per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_chemicals_and_effluent`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional wastewater screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg net product
  - Basis: wastewater sent to treatment per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Solid cleaning residues (`solid_cleaning_waste`)

Record swept crumbs, filter residues, contaminated absorbents, and other solid cleaning waste by destination.

- Selected flow: Solid food-production or cleaning waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured or documented container mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production campaign and then per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_chemicals_and_effluent`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional solid-cleaning-waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg net product
  - Basis: solid cleaning waste per 1 kg net saleable sandwich biscuits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | separately measurable processes and campaigns | Avoid allocation by submetering, separate batch records, or process subdivision whenever the representative product can be measured independently. | `ghg-protocol-product-standard-2011`; `iso-14044-2006` |
| `allocation_physical_causality_first` | unavoidable multi-output allocation | When allocation cannot be avoided, use a physical relationship that reflects causality, such as product mass, machine time, thermal demand, or cleaning area; document why the driver represents resource use and releases. | `ghg-protocol-product-standard-2011` |
| `allocation_shared_utilities` | shared electricity, heat, compressed air, HVAC, cleaning, and wastewater | Allocate shared utilities using verified submeters where available; otherwise use equipment operating time and rated load, campaign duration, cleaned area, or another causal driver. Do not allocate all utilities solely by revenue. | `us-epa-energy-star-baking-2012`; `ghg-protocol-product-standard-2011` |
| `allocation_economic_fallback` | co-products with no usable physical relationship | Economic or another justified relationship is allowed only when physical causality cannot be established; disclose values, price period, geography, sensitivity, and the reason physical allocation failed. | `ghg-protocol-product-standard-2011` |
| `allocation_internal_rework` | dough, shells, filling, and assembled biscuits returned within the same campaign | Treat internal rework as an internal loop: retain gross input and loss records, avoid creating an external co-product credit, and include any extra energy or material used for rework. | `ghg-protocol-product-standard-2011` |
| `allocation_waste_and_recovery` | rejects, food residues, packaging scrap, and wastewater outputs | Outputs with no economic value are waste and receive no upstream burden allocation; include their handling and treatment. Any sold or functionally used recovered output is a co-product and requires the declared allocation rule and destination. | `ghg-protocol-product-standard-2011`; `iso-14044-2006` |
| `allocation_consistency` | recurring campaigns and similar flows | Apply the same allocation method to similar inputs and outputs over time; disclose and justify changes and recalculate comparative baselines when required by the downstream study. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_and_batch_mass` | `ingredient_and_dough_preparation` | recipe ingredients and mixed dough | batch formulation, scale record, material issue, moisture specification | batch_id; product_id; ingredient_id; supplier_lot; gross_mass; tare_mass; net_mass; moisture_basis; timestamp; dough_output_mass | Calibrated scales reconciled with approved recipe and material issue records | kg | Every batch | Complete declared data period, including start-up and changeover batches | All lines and campaigns producing the declared product | Sum ingredient and dough masses by batch; normalize only after batch reconciliation | Scale calibration; approved recipe version; lot traceability; exception log |
| `cp_energy_and_fuel_meters` | `ingredient_and_dough_preparation`; `forming_and_baking`; `cooling`; `filling_and_assembly`; `primary_packaging`; `shared_cleaning_and_utilities` | electricity, fuels, steam, heat, compressed air, and direct combustion releases | utility meter, fuel invoice, submeter, operating log, emission-factor record | meter_id; carrier; opening_reading; closing_reading; unit; start_time; end_time; product_output; equipment_runtime; factor_id; factor_value | Read calibrated meters at campaign boundaries or use interval data; reconcile with site totals and fuel purchases | kWh; MJ; carrier unit; kg emission | Per campaign or interval no longer than one month, with campaign allocation | At least 12 representative months where available; otherwise the complete shorter period with seasonality limitation disclosed | Manufacturing site and all directly supporting utilities | Subtract non-production and separately metered loads; allocate residual shared use by documented causal driver; normalize to net product | Meter calibration; invoice reconciliation; equipment runtime; factor source and version; site energy balance |
| `cp_outputs_rework_and_waste` | `ingredient_and_dough_preparation`; `forming_and_baking`; `cooling`; `filling_and_assembly`; `primary_packaging` | process outputs, internal rework, rejects, and waste destinations | production counter, scale ticket, reject log, rework log, waste manifest | batch_id; process_id; gross_output_mass; acceptable_output_mass; rework_mass; waste_mass; destination; moisture_or_aw; timestamp | Measure outputs and losses at each process transfer; identify internal rework separately from material leaving the foreground route | kg | Every batch or shift | Complete declared data period | All representative-route lines and waste destinations | Reconcile input, acceptable output, rework, waste, samples, and documented evaporation by process | Calibrated scales; signed waste records; quality-release record; mass-balance exception investigation |
| `cp_filling_and_assembly` | `filling_and_assembly` | filling formulation, shell input, filling fraction, and assembled output | filling batch sheet, scale record, depositor setting, checkweigher record | filling_batch_id; ingredient_id; ingredient_mass; shell_mass; filling_mass; assembled_mass; unit_count; sample_net_mass; reject_mass | Reconcile filling batch ingredients with deposited mass and assembled-biscuit output; verify filling fraction by representative sampling | kg; count; fraction | Every filling batch and product changeover | Complete declared data period | All declared product variants in the representative route | Calculate filling mass fraction from measured filling and final product mass; weight by saleable output | Scale and checkweigher calibration; approved filling recipe; sampling plan; deviation record |
| `cp_packaging_material_and_output` | `primary_packaging` | packaging materials, packaging scrap, and reference output | packaging bill of materials, issue record, scrap record, checkweigher, finished-goods record | material_id; material_mass; packs_produced; net_mass_per_pack; packaging_scrap_mass; product_reject_mass; saleable_net_product_mass | Reconcile packaging issues with saleable packs, packaging scrap, and remaining stock; determine net food mass separately | kg; count | Every packaging campaign | Complete declared data period | All primary packaging formats declared in scope | Sum material-specific packaging mass and divide by saleable net product mass; keep packaging outside reference mass | Approved packaging specification; checkweigher calibration; stock reconciliation; scrap destination record |
| `cp_cleaning_water_chemicals_and_effluent` | `shared_cleaning_and_utilities` | cleaning water, chemicals, wastewater, and solid residues | water meter, chemical issue, cleaning log, effluent meter or sample, waste record | cleaning_event_id; equipment_or_area; water_volume; water_temperature; chemical_product_mass; dilution; effluent_volume; COD_or_other_load; solid_waste_mass; destination | Meter water and effluent where practicable; reconcile chemicals with dosing records; allocate shared events using cleaned area, duration, or campaign count | kg; m3; concentration; kg load | Every cleaning event with monthly reconciliation | Complete declared data period including major sanitation events | Equipment and areas serving the declared route | Convert volume with documented density; allocate only the shared portion by causal driver; normalize to net product | Meter calibration; cleaning schedule; dosing verification; laboratory report; treatment invoice or manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory quantity | normalized amount = campaign quantity / saleable net biscuit mass; packaging mass is excluded from the denominator | campaign flow quantity; `saleable_net_product_mass` | flow amount per 1 kg net product | `environdec-pcr-2025-03`; `iso-14044-2006` |
| `calc_count_to_mass` | count-based product output | net product mass = unit count multiplied by representative mean net biscuit mass; calculate by product and campaign and retain sample variability | unit_count; sample gross mass; tare mass; sample count | saleable net product mass in kg | `iso-14044-2006` |
| `calc_filling_fraction` | representative product identity | filling mass fraction = deposited or recipe-reconciled filling mass / assembled sandwich-biscuit mass | filling_mass; assembled_mass | filling mass fraction | `eu-jrc-fdm-bref-2019` |
| `calc_process_mass_balance` | each foreground process | mass-balance difference = measured inputs - acceptable outputs - external waste - samples - measured transfers - documented evaporated water; investigate rather than silently force closure | process input and output records; rework; waste; samples; evaporation basis | process mass-balance difference and closure statement | `iso-14044-2006`; `eu-jrc-fdm-bref-2019` |
| `calc_shared_energy` | shared utilities | allocated utility = shared metered utility multiplied by the declared causal-driver share; subtract separately metered process use before allocation | shared meter delta; process submeters; equipment runtime and load; campaign output | carrier-specific allocated energy per reference flow | `us-epa-energy-star-baking-2012`; `ghg-protocol-product-standard-2011` |
| `calc_combustion_releases` | on-site fuel combustion | direct release = metered fuel quantity multiplied by a declared carrier- and technology-specific factor, adjusted by measurement or oxidation assumptions; report each elementary flow separately | fuel quantity; composition; factor identity; factor value; stack measurement when available | direct elementary-flow mass per reference flow | `eu-jrc-fdm-bref-2019` |
| `calc_packaging_mass` | primary packaging | packaging mass per reference flow = material issued - returned stock - material-specific scrap, divided by saleable net biscuit mass; reconcile with bill of materials | packaging issue; return; scrap; packs; net product mass | kg packaging material per kg net product | `environdec-pcr-2025-03` |
| `calc_rework_netting` | internal rework | keep gross rework generation and return visible; exclude the internal transfer from external inputs and outputs while retaining additional resources and unreworked loss | rework generated; rework returned; rework resources; rework discarded | net external waste and transparent internal-loop record | `ghg-protocol-product-standard-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | reference flow | Use the declared Sandwich Cookie UUID, Mass property UUID, mass unit-group UUID, kg unit, and all required qualifiers; do not store a Tiangong dataset version in the PCR or foreground identity. | Exact Tiangong identity readback retained outside PCR content; foreground metadata and reference-flow comment |
| `dq_route_representativeness` | product and process scope | Demonstrate that the product is an ambient-stable cream-filled sandwich sweet biscuit produced by the declared route; otherwise flag the PCR as not product-specific and obtain route review. | Product specification; recipe; process flow diagram; line and filling description |
| `dq_primary_data` | owned or controlled foreground processes | Use primary records for every required process and all significant material, energy, water, waste, and direct-release flows. | Collection protocols; calibrated records; reconciliation results; exception log |
| `dq_temporal_coverage` | foreground period | Prefer 12 consecutive representative months. If a shorter period is used, cover complete campaigns and disclose seasonality, start-up, shutdown, and product-mix limitations. | Dated raw records; production calendar; period coverage statement |
| `dq_completeness` | process and flow coverage | Reconcile required process outputs and all important flows; document zero, not applicable, missing, and estimated values distinctly. | Process map; mass and energy balances; missing-data register |
| `dq_upstream_quality` | purchased inputs and services | Select upstream datasets that match ingredient specification, geography, technology, and time as closely as practical; disclose proxies and material data gaps. | Dataset references; supplier specification; proxy rationale |
| `dq_uncertainty_and_estimates` | provisional ranges and modelled values | Keep `reasoned_estimate` ranges separate from foreground values. Disclose uncertainty and replace provisional ranges with reviewed evidence before publication unless explicitly accepted. | Range evidence kind; review record; uncertainty statement |
| `dq_allocation_transparency` | shared and multi-output processes | Retain allocation driver values, method choice, causal justification, and sensitivity where the choice can materially affect results. | Meter and driver records; allocation calculation; sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | foreground_dataset_conformance | The reference output shall be exactly 1 kg net product using Sandwich Cookie `80a32a82-0f7d-4112-a92e-5adcc89f1db3`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; packaging mass shall be excluded. | `iso-14044-2006`; `environdec-pcr-2025-03` |
| `validate_required_qualifiers` | foreground_dataset_conformance | Product subtype, shell formulation and geometry, filling type and fraction, moisture or water activity, count-to-mass basis, packaging, rework policy, technology, geography, period, and market state shall be declared. | `eu-jrc-fdm-bref-2019` |
| `validate_representative_route` | foreground_dataset_conformance | The dataset shall demonstrate the ambient-stable cream-filled sandwich sweet-biscuit route; a materially different gingerbread, wafer, frozen, chilled, or unfilled route fails product-specific conformance. | `eu-jrc-fdm-bref-2019` |
| `validate_process_coverage` | foreground_dataset_conformance | Every `required` process shall have foreground records or a documented, reviewable not-applicable finding; required material and energy flows shall not be silently omitted. | `eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012` |
| `validate_mass_balance` | foreground_dataset_conformance | Ingredient, dough, shell, filling, packaged-product, rework, waste, sample, and documented evaporation records shall reconcile within a site-declared tolerance; exceptions shall be investigated and disclosed. | `iso-14044-2006`; `eu-jrc-fdm-bref-2019` |
| `validate_energy_completeness` | foreground_dataset_conformance | Electricity and each thermal-energy carrier shall be reported separately; direct oven fuel use, process energy, and shared utilities shall reconcile to meters or purchases without double counting. | `us-epa-energy-star-baking-2012`; `eu-jrc-fdm-bref-2019` |
| `validate_losses_and_treatment` | foreground_dataset_conformance | Internal rework, external food waste, packaging scrap, wastewater, and each destination shall be distinguished; no external credit may be assigned without a declared co-product or recycling method. | `ghg-protocol-product-standard-2011`; `eu-jrc-fdm-bref-2019` |
| `validate_allocation` | foreground_dataset_conformance | Allocation shall first be avoided; any unavoidable physical or fallback allocation shall identify the driver, values, causal justification, and sensitivity or limitation. | `ghg-protocol-product-standard-2011`; `iso-14044-2006` |
| `validate_upstream_links` | foreground_dataset_conformance | Every purchased material, energy, water, packaging, and treatment flow shall link to an upstream dataset or carry an explicit data gap; same-category inputs shall not be silently expanded or omitted. | `iso-14044-2006`; `environdec-pcr-2025-03` |
| `validate_provisional_ranges` | foreground_dataset_conformance | A foreground value outside a screening range triggers review rather than automatic rejection; every `reasoned_estimate` remains provisional and cannot become publication-critical evidence without review. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for an ambient-stable cream-filled sandwich sweet biscuit; candidate methodology until review |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology, translation, UUID, and evidence review |
| allowed_use | Gate-to-gate manufacturing inventory; ingredient-to-factory-gate lifecycle modelling when complete upstream datasets are linked; scenario and hotspot analysis that preserves the declared route and qualifiers |
| excluded_use | Direct use as product-specific guidance for gingerbread, unfilled wafers, frozen or chilled sandwich products, savoury crackers, cakes, or bread; comparative assertions without aligned functional performance and downstream scope; publication while unresolved UUIDs or provisional critical ranges remain |
| required_metadata | canonical PCR id; product and route qualifiers; reference UUIDs and unit; recipe and filling fraction; line and oven technology; packaging configuration; site geography; data period; production volume; allocation methods; upstream dataset references; rework and waste destinations |
| required_quality_disclosure | primary-data coverage; temporal and technological representativeness; mass and energy balance results; meter and scale quality; allocation drivers; missing data and proxies; reasoned estimates; uncertainty; deviations from the representative route |
| update_trigger | Material change in recipe or filling fraction, biscuit-shell type, oven or filling technology, site energy supply, packaging configuration, rework or waste route, allocation method, reference-flow identity, source PCR, or data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `environdec-pcr-2025-03` | `standard` | International EPD System, PCR 2025:03 Food and beverage products (main PCR), version 1.0.1, registered through 2030-07-14, https://environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5 (retrieved 2026-08-11) | Sector-general PCR context, declared-unit framing, upstream and packaging disclosure, dataset profile |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, especially Sections 16.2.1 and 16.8.1, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-11) | Biscuit ingredients and process decomposition, secondary cream-filling route, oven energy screening, water, waste, emissions, and monitoring requirements |
| `us-epa-energy-star-baking-2012` | `official_guidance` | Masanet, E.; Therkelsen, P.; Worrell, E., Energy Efficiency Improvement and Cost Saving Opportunities for the Baking Industry, LBNL-6112E, U.S. EPA ENERGY STAR and Lawrence Berkeley National Laboratory, 2012, https://www.energystar.gov/sites/default/files/buildings/tools/Baking_Guide.pdf (retrieved 2026-08-11) | Cookie and cracker process and energy structure, metering priorities, shared utilities, cooling and packaging energy |
| `ghg-protocol-product-standard-2011` | `standard` | World Resources Institute and World Business Council for Sustainable Development, Product Life Cycle Accounting and Reporting Standard, 2011, Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-08-11) | Process-map reporting, primary-data expectations, allocation avoidance and hierarchy, consistency, recycling and waste treatment |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current by ISO in 2022 with Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | LCA and LCI scope, inventory completeness, allocation, interpretation, reporting, and review framework |
