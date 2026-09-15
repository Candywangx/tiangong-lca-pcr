---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tomato-juice
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tomato juice

## 1. Scope and Applicability

This PCR supports foreground data packages for tomato juice made from mature tomatoes or from tomato juice concentrate. It covers direct-extraction and from-concentrate routes when the product is released as tomato juice for direct consumption or as an equivalent bulk product. The declared product specification shall identify the production route, preservation state, recipe additions, soluble-solids basis, packaging configuration, and facility-gate product state.

The foreground boundary begins with tomatoes, tomato juice concentrate, water, ingredients, packaging, energy carriers, and other purchased inputs received at the reporting facility. It includes applicable receiving, sorting, washing, crushing, heating, extraction, finishing, deaeration, homogenization, formulation or reconstitution, preservation, filling, packaging, cleaning, onsite residual management, and direct releases. Upstream tomato cultivation, concentrate production outside the reporting facility, purchased utility generation, distribution, retail, use, and packaging end of life are represented by linked datasets when required by the study scope and are not recreated as foreground operations.

Excluded products are tomato paste, concentrated tomato juice sold as such, tomato sauces, mixed vegetable juices, nectars, fermented tomato beverages, and beverages for which tomato juice is only an ingredient. A product prepared from concentrate remains in scope only when the finished product is declared and marketed as tomato juice under the applicable market specification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tomato-juice |
| classification_refs | CPC 3.0: 21321 Tomato juice |
| covered_products | Unconcentrated tomato juice and tomato juice reconstituted from tomato juice concentrate, with permitted declared ingredients and preservation routes |
| excluded_products | Tomato paste; concentrated tomato juice sold as concentrate; tomato sauce; mixed vegetable juice; nectar; fermented tomato beverages; beverages containing tomato juice as an ingredient |
| representative_product | Tomato juice ready for direct consumption, at the processing facility gate |
| production_route | Direct extraction from mature tomatoes or declared reconstitution from tomato juice concentrate, followed by route-specific preservation and filling |
| market_state | Ambient shelf-stable, chilled, or frozen; packaged or bulk; preservation and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of tomato juice meeting the declared product and market specification at the processing facility gate |
| How much | 1,000 kg net tomato juice, excluding packaging |
| How well | Conforms to the declared direct-extraction or from-concentrate identity, recipe, soluble-solids basis, preservation route, packaging state, and applicable market requirements |
| How long or cycle | One representative production batch or campaign ending at facility-gate release; shelf life is a required product qualifier rather than the functional duration |
| reference_flow_link | The measured conforming net product output is normalized to the 1,000 kg reference amount |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net tomato juice |
| Reference product flow | Tomato juice `0e1f9da3-8a58-4fab-a793-1edde8bead88` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production route: direct extraction or from concentrate; source-material specification; soluble-solids or recipe basis; added salt, acid, or other ingredients; preservation route; package or bulk configuration; net product mass; product temperature at release; shelf-life or storage condition; geography; reference period; technology and facility |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | conforming tomato juice output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net tomato juice mass separately from packaging and normalize all inventory amounts to 1,000 kg conforming net output. |
| `route_and_solids_declaration` | direct and from-concentrate routes | Mass and declared soluble-solids measurement basis | kg and declared laboratory unit | Record the route and measured product specification; do not infer concentrate or dilution factors from a generic default. |
| `packaging_count_to_mass` | primary, secondary, and tertiary packaging | Mass | kg | Convert package counts to mass using lot-specific or supplier-supported unit masses and retain the count and conversion evidence. |
| `energy_unit_conversion` | electricity, steam, fuels, heating, cooling, and compressed air | Energy | kWh or MJ | Preserve source meter units and conversion factors; report electricity in kWh and other delivered energy in MJ without applying an undocumented efficiency or heating value. |
| `water_and_wastewater_volume_mass` | process water and wastewater | Volume or Mass | m3 or kg | Record the measured property and unit; if converting between mass and volume, retain the measured or justified density and conversion rule. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_operations` | foreground facility | Include all applicable onsite operations from receipt of source materials through conforming tomato juice release, including cleaning, packaging, onsite utility use, residual handling, and direct releases. | `fao-fruit-vegetable-processing-1995`; `us-ecfr-21-cfr-156-145` |
| `boundary_upstream_inputs` | purchased inputs | Link upstream datasets for tomatoes, concentrate, ingredients, packaging, water supply, fuels, electricity, and other purchased inputs; do not recreate their external production as foreground operations. | `iso-14044-2006` |
| `boundary_concentrate_route` | from-concentrate production | Include concentration only when it occurs inside the declared foreground facility boundary; otherwise record purchased tomato juice concentrate as an input and disclose its upstream dataset. | `us-ecfr-21-cfr-156-145` |
| `boundary_preservation_route` | preservation and filling | Include the actual thermal, chilled, or frozen preservation route and its monitored operations; do not substitute a generic thermal profile for the validated site process. | `fda-juice-haccp-2004`; `us-ecfr-21-cfr-156-145` |
| `boundary_residual_treatment` | wastewater and solid residuals | Include onsite treatment and recovery as foreground processes. Record offsite treatment or recovery as waste or product flows linked to the applicable external datasets. | `iso-14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Tomatoes, tomato juice concentrate, ingredients, packaging, water, and energy carriers as received at the reporting facility |
| starting_condition_role | Facility-gate foreground input condition with upstream burdens supplied by linked datasets |
| product_classification_scope | Tomato juice only; CPC 3.0 21321 is classification context and does not define the canonical PCR identity |
| recursive_input_rule | Purchased tomato juice or tomato juice concentrate used as an input is recorded once as a product input with its upstream dataset; its upstream tomato-juice production is not recursively reproduced inside the same foreground process |
| upstream_dataset_requirement | Use temporally, geographically, technologically, and materially representative upstream datasets for tomatoes, concentrate, ingredients, packaging, utilities, transport brought into scope, and offsite treatment |
| disclosure | Declare source-material form, direct or from-concentrate route, facility operations, preservation method, packaging state, allocation, exclusions, data gaps, and whether residual treatment is onsite or offsite |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_receipt_preparation` | Raw material receipt and preparation | required | Always included for received tomatoes or other source material | Foreground receiving, inspection, sorting, washing, and preparation | Mass of source material and prepared tomatoes per 1,000 kg reference product |
| `juice_extraction_finishing` | Juice extraction and finishing | required | Always included; for from-concentrate-only sites this may represent receipt verification and any onsite finishing before formulation | Foreground crushing, heating where used, extraction, screening, deaeration, and homogenization | Mass balance from prepared material to extracted juice and residuals |
| `formulation_reconstitution` | Formulation and reconstitution | conditional | Include when concentrate, water, salt, acid, or another declared ingredient is added or when blending standardizes the product | Foreground recipe and reconstitution control | Conditioned juice mass and declared recipe or soluble-solids basis |
| `preservation_packaging` | Preservation, filling, and packaging | required | Always included with the actual ambient, chilled, or frozen route | Foreground preservation, filling, closing, cooling or freezing, and packaging | 1,000 kg conforming net tomato juice output |
| `onsite_residuals_treatment` | Onsite residuals and wastewater treatment | conditional | Include when wastewater, pomace, rejects, sludge, or other residuals are treated or recovered onsite | Foreground treatment, recovery, and direct release control | Received residual mass or volume and treatment outputs |

### Process: Raw material receipt and preparation (`raw_receipt_preparation`)

#### Inputs

##### Product flows

###### Tomatoes or declared tomato source material (`source_tomatoes`)

Record mature tomatoes received for direct extraction. For a from-concentrate-only facility, record the concentrate under the formulation process and report zero here with the route disclosed.

- Selected flow: Fresh tomatoes (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass entering preparation, excluding returned loads and separately recorded packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `fao-fruit-vegetable-processing-1995`; `us-ecfr-21-cfr-156-145`
- Range: Provisional source-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1000
  - Upper: 3000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice for the direct-extraction route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing and preparation water (`preparation_water`)

Record supplied water used for source-material washing and preparation, excluding water already counted in a closed-loop internal transfer.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Metered or otherwise measured water entering the preparation operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_use`
- Sources: `fao-fruit-vegetable-processing-1995`
- Range: Provisional water-use QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: m3
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared tomatoes transferred to extraction (`prepared_tomatoes`)

Calculate prepared material from measured accepted source material, sorting rejects, other removed material, and stock change.

- Selected flow: Prepared tomatoes, internal product flow (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Accepted source mass minus measured preparation rejects and other removed material, adjusted for measured stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Sources: `mass-balance-identity`
- Range: Provisional prepared-material balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Sorting and preparation rejects (`preparation_rejects`)

Record rejected tomatoes, foreign material, and other removed solids by actual destination; do not combine recovered product with disposed waste.

- Selected flow: Preparation rejects (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected and removed mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `fao-fruit-vegetable-processing-1995`
- Range: Provisional reject-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, including its destination and whether it enters onsite treatment or an external system.

- Selected flow: Preparation wastewater (Tiangong UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or calculated balance supported by water records and retained calculation inputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `mass-balance-identity`
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: m3
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Juice extraction and finishing (`juice_extraction_finishing`)

#### Inputs

##### Product flows

###### Prepared tomatoes or received juice intermediate (`extraction_feed`)

Record the measured internal prepared-tomato transfer or a received juice intermediate without double counting the source-material input.

- Selected flow: Prepared tomatoes or tomato juice intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer into extraction and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_mass`
- Sources: `fao-fruit-vegetable-processing-1995`
- Range: Provisional extraction-feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for extraction and finishing (`extraction_electricity`)

Record metered electricity for crushing, pumping, extraction, finishing, deaeration, homogenization, and associated line operation.

- Selected flow: Electricity supply (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or allocated facility-meter electricity using a documented operating basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources:
- Range: Provisional electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivered thermal energy for extraction and finishing (`extraction_thermal_energy`)

Record steam, hot water, or fuel-derived heat used by the actual extraction and finishing route without embedding undocumented boiler efficiency.

- Selected flow: Delivered thermal energy carrier (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered heat or measured fuel quantity converted with a documented supplier or laboratory heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources:
- Range: Provisional thermal-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Extracted and finished tomato juice intermediate (`extracted_juice`)

Record the mass transferred from extraction and finishing to formulation or preservation.

- Selected flow: Extracted tomato juice intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured intermediate output, reconciled with feed, pomace, other residuals, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_extraction_mass`
- Sources: `mass-balance-identity`
- Range: Provisional extracted-juice balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pomace, peel, seeds, and extraction residuals (`extraction_residuals`)

Record each materially different residual by actual recovery, feed, treatment, or disposal destination where records permit disaggregation.

- Selected flow: Tomato extraction residuals (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured residual mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `fao-fruit-vegetable-processing-1995`
- Range: Provisional extraction-residual QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Formulation and reconstitution (`formulation_reconstitution`)

#### Inputs

##### Product flows

###### Extracted juice or purchased tomato juice concentrate (`formulation_tomato_input`)

Record extracted juice and purchased concentrate as separate input rows in the foreground dataset when both are used; this PCR row defines their shared role only.

- Selected flow: Extracted tomato juice or tomato juice concentrate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured batch input by source-material form and supplier lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `us-ecfr-21-cfr-156-145`
- Range: Provisional tomato-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice across direct and from-concentrate routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reconstitution and recipe water (`reconstitution_water`)

Record water added to reconstitute concentrate or implement the declared recipe separately from cleaning water.

- Selected flow: Potable process water (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Metered or weighed batch addition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `us-ecfr-21-cfr-156-145`
- Range: Provisional reconstitution-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Declared salt, acid, and other recipe ingredients (`recipe_ingredients`)

Record every added ingredient by identity, lot, and measured mass; zero is valid when no ingredient is added.

- Selected flow: Declared recipe ingredients (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed or supplier-recorded addition by ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `us-ecfr-21-cfr-156-145`
- Range: Provisional ingredient-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned tomato juice transferred to preservation (`conditioned_juice`)

Calculate conditioned juice from measured recipe inputs, recovered returns, measured losses, and stock change, then verify the declared product specification.

- Selected flow: Conditioned tomato juice intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Sum of measured recipe inputs and eligible returns minus measured losses, adjusted for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `mass-balance-identity`; `us-ecfr-21-cfr-156-145`
- Range: Provisional conditioned-juice balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Preservation, filling, and packaging (`preservation_packaging`)

#### Inputs

##### Product flows

###### Conditioned tomato juice feed (`preservation_feed`)

Record the measured product entering the actual thermal, chilled, or frozen preservation and filling route.

- Selected flow: Conditioned tomato juice intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer into preservation and filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `fao-fruit-vegetable-processing-1995`
- Range: Provisional preservation-feed balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging separately in the foreground dataset and distinguish reusable packaging and pallets.

- Selected flow: Packaging materials by material and component (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Package count multiplied by verified unit mass, or direct measured issued mass minus returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`
- Sources:
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for preservation and packaging (`preservation_electricity`)

Record metered electricity for pumping, heating systems, cooling or freezing, filling, closure, conveying, and packaging.

- Selected flow: Electricity supply (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or allocated facility-meter electricity using documented operating evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources:
- Range: Provisional preservation-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivered thermal energy for preservation (`preservation_thermal_energy`)

Record delivered heat or fuel used for the actual validated preservation route and retain its measured conversion basis.

- Selected flow: Delivered thermal energy carrier (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered heat or measured fuel quantity converted with a documented heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources: `fda-juice-haccp-2004`
- Range: Provisional preservation-thermal-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming tomato juice reference product (`tomato_juice_reference_output`)

This is the sole UUID-resolved reference product row. Measure conforming net output, exclude packaging mass, and normalize it to the PCR reference amount.

- Selected flow: Tomato juice `0e1f9da3-8a58-4fab-a793-1edde8bead88`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured conforming net output normalized to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `mass-balance-identity`; `us-ecfr-21-cfr-156-145`
- Range: Reference-output normalization check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: PCR reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Off-specification product and filling losses (`offspec_product`)

Record off-specification product, start-up and shutdown losses, spills, and retained rework separately by actual destination.

- Selected flow: Off-specification tomato juice (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by destination, with eligible internal rework excluded from final waste only after reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `mass-balance-identity`
- Range: Provisional off-specification-product QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging scrap and rejected containers (`packaging_scrap`)

Record packaging scrap and rejected containers by material and destination.

- Selected flow: Packaging scrap by material (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap mass or rejected count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`
- Sources:
- Range: Provisional packaging-scrap QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and filling wastewater (`packaging_wastewater`)

Record wastewater generated by cleaning, sterilization, cooling, filling, and packaging operations by destination.

- Selected flow: Process wastewater (Tiangong UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or retained water-balance calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `mass-balance-identity`
- Range: Provisional cleaning-wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: m3
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant releases from onsite cooling or freezing (`refrigerant_release`)

Include only when the selected route uses onsite refrigeration and a charge-balance, service, or leak record supports a direct release.

- Selected flow: Refrigerant substance by actual identity (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Annual or campaign refrigerant loss allocated using documented equipment service and charge-balance records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice using the documented production allocation period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:
- Range: Provisional refrigerant-release QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Onsite residuals and wastewater treatment (`onsite_residuals_treatment`)

#### Inputs

##### Product flows

###### Electricity and treatment aids (`treatment_inputs`)

Disaggregate electricity and each treatment aid in the foreground dataset; this shared row defines the collection role for the conditional treatment process.

- Selected flow: Electricity and treatment aids by actual input (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh for electricity; Mass / kg for treatment aids
- Amount rule: Metered electricity and measured treatment-aid additions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources:
- Range: Provisional treatment-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg or kWh as applicable to the disaggregated row
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wastewater and organic residuals received for onsite treatment (`residuals_received`)

Record internal wastewater, pomace, rejects, and other residuals without duplicating their originating process outputs.

- Selected flow: Residual received by actual waste identity (Tiangong UUID unresolved)
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: Measured internal transfer reconciled to originating process records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `mass-balance-identity`
- Range: Provisional received-residual QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg or m3 as applicable to the disaggregated row
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered material or energy coproduct (`recovered_coproduct`)

Record a recovered output as a product only when it has a documented recipient and substitutes a specified product or service; otherwise retain it as a waste flow.

- Selected flow: Recovered material or energy by actual product identity (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg or Energy / MJ
- Amount rule: Measured dispatched quantity supported by recipient or sales records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources:
- Range: Provisional recovered-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg or MJ as applicable to the disaggregated row
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Treatment sludge and residual waste (`treatment_residual_waste`)

Record treatment sludge and other residual waste by measured mass, composition where required, and destination.

- Selected flow: Treatment residual waste by actual identity (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched or stored mass adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources:
- Range: Provisional treatment-residual QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated effluent and direct treatment releases (`treated_effluent_release`)

Record treated effluent volume and each measured direct pollutant or gas as separate elementary flows with the actual receiving compartment.

- Selected flow: Treated effluent and measured direct release by actual identity (Tiangong UUID unresolved)
- Flow property / unit: Volume / m3 for effluent; substance-specific Mass / kg for pollutant releases
- Amount rule: Metered effluent and measured or permitted-monitoring-based direct release, disaggregated by substance and compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming net tomato juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:
- Range: Provisional treated-effluent QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: m3 for the effluent-volume row
  - Basis: per 1,000 kg conforming net tomato juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | multifunctional foreground operations | First seek process subdivision or expansion of separately measured operations so that tomato juice and recovered outputs receive directly attributable inputs and releases. | `iso-14044-2006` |
| `allocation_physical_relation` | unavoidable joint processing | When subdivision is not practicable and a physical causal relationship can be justified, allocate remaining shared burdens using that documented physical relationship and report the factor and sensitivity. | `iso-14044-2006` |
| `allocation_other_relation` | no defensible physical relation | When no defensible physical relation exists, use another documented relationship consistent with the study goal, such as economic value, and disclose prices, reference period, calculation, and sensitivity. | `iso-14044-2006` |
| `allocation_residual_status` | pomace, rejects, sludge, recovered materials, and energy | Do not assign coproduct status solely to avoid waste burdens. Record the actual destination and evidence of a useful product or service before applying coproduct allocation or substitution. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `raw_receipt_preparation` | accepted source material, prepared tomatoes, and preparation rejects | weighbridge, calibrated scale, receiving, and stock records | timestamp; batch; supplier lot; gross; tare; net mass; acceptance status; stock change; destination | Reconcile accepted deliveries, preparation output, rejects, returns, and inventory | kg | Each load or batch | At least one representative continuous production period, normally 12 months where available | All included lines and storage points at the reporting facility | Sum by product and route; subtract returns; reconcile opening and closing stock; normalize with `calc_reference_normalization` | Scale calibration, delivery tickets, batch records, stock reconciliation, and exception log |
| `cp_water_use` | `raw_receipt_preparation`; `formulation_reconstitution`; `preservation_packaging` | washing, recipe, cleaning, cooling, and other water | water meter, batch meter, or justified water balance | meter id; opening and closing reading; batch; use area; recycled volume; discharge volume | Meter each material water use where practicable and separate recipe water from cleaning and utility water | m3 or kg | Each batch or daily meter interval | Same representative period as product output | All included water users | Subtract documented recirculated internal water; aggregate by use and normalize with `calc_reference_normalization` | Meter calibration, meter map, batch sheet, and water-balance reconciliation |
| `cp_extraction_mass` | `juice_extraction_finishing` | extraction feed, juice intermediate, and extraction residuals | flowmeter, tank level, calibrated scale, and batch records | batch; input mass; intermediate output mass; residual mass; stock change; rework | Measure transfers and reconcile the extraction mass balance | kg | Each batch | Same representative period as product output | All included extraction and finishing lines | Sum accepted transfers; account for rework once; reconcile stock change and normalize | Instrument calibration, batch sheet, and signed mass-balance review |
| `cp_recipe_inputs` | `formulation_reconstitution` | concentrate, extracted juice, water, salt, acid, other ingredients, and conditioned juice | recipe system, batch scale, laboratory, and supplier lot records | batch; ingredient identity; lot; quantity; soluble-solids result; recipe revision; output mass; loss; stock change | Record each addition and verify the finished product against the declared recipe and product specification | kg and declared laboratory unit | Each batch | Same representative period as product output | Every included formulation tank and product variant | Aggregate by product variant; calculate with `calc_reconstitution_balance`; normalize | Scale calibration, recipe authorization, certificates, laboratory results, and deviation records |
| `cp_metered_energy` | `juice_extraction_finishing`; `preservation_packaging`; `onsite_residuals_treatment` | electricity, steam, hot water, fuels, refrigeration, and compressed air | submeter, utility invoice, fuel issue, and operating-hour record | meter id; opening and closing reading; fuel mass or volume; heating value; operating time; allocation driver | Prefer submeters; otherwise allocate facility totals with documented operating or engineering evidence | kWh or MJ | Continuous, batch, shift, or invoice interval | Same representative period as product output | All included equipment and shared utilities | Convert with documented factors; subtract exports; allocate shared use transparently; normalize | Meter calibration, invoices, fuel specifications, equipment logs, and allocation calculation |
| `cp_packaging_mass` | `preservation_packaging` | packaging issued, returned, rejected, and incorporated | bill of materials, count, supplier unit mass, and scale record | component; material; count; unit mass; issued; returned; rejected; reuse cycles | Calculate each component mass from verified count and unit mass or direct measurement | kg | Each packaging lot or product batch | Same representative period as product output | Primary, secondary, tertiary, and reusable packaging in scope | Issued minus returned stock; separate product packaging from scrap; normalize | Supplier specification, sampled unit-mass check, bill of materials, and stock record |
| `cp_product_output` | `preservation_packaging` | preservation feed, conforming net tomato juice, off-specification product, and rework | batch meter, filler count, checkweigher, tank record, and release record | batch; product code; route; gross; tare; net mass; package count; released mass; off-spec mass; rework; stock change | Measure conforming net product separately from packaging and reconcile preservation and filling outputs | kg | Each batch | Same representative period as all inventory inputs | Every included product and filling line | Sum released net mass; exclude packaging; account for rework once; normalize to 1,000 kg | Instrument calibration, quality release, checkweigher results, batch record, and reconciliation |
| `cp_waste_records` | all foreground processes | rejects, pomace, off-specification product, packaging scrap, wastewater, and other waste | scale, waste manifest, meter, invoice, and internal transfer record | waste identity; origin; mass or volume; destination; date; carrier; recovery status; stock change | Measure or reconcile each material waste stream and destination | kg or m3 | Each dispatch, batch, or meter interval | Same representative period as product output | All included foreground processes | Sum by identity and destination; prevent duplicate internal transfers; normalize | Scale or meter calibration, manifests, invoices, treatment receipts, and stock records |
| `cp_thermal_process` | `preservation_packaging` | actual preservation process and release evidence | validated process schedule, temperature, time, flow, pressure, and deviation records | process authority or validation reference; product; pH or relevant property; temperature; residence time; flow rate; hold; deviation; disposition | Retain the site- and product-specific validated schedule and continuous or batch monitoring required by the selected process | Declared process units | Each batch with continuous records where applicable | Same representative period as product output and current validated process | Every included preservation line and product route | No averaging across failed critical limits; link each released batch to valid monitoring and deviation disposition | Validation study or process authority record, calibrated sensors, monitoring charts, deviation and release records |
| `cp_treatment_records` | `onsite_residuals_treatment` | received residuals, treatment inputs, recovered outputs, sludge, and stored material | meter, scale, treatment log, laboratory, dispatch, and stock record | stream identity; input; chemical; electricity; output; quality; destination; stock change | Reconcile each treatment operation and retain evidence for recovered product status | kg, m3, kWh, or MJ | Each batch, day, or dispatch | Same representative period as product output | All onsite residual treatment and recovery | Sum inputs and outputs; reconcile stock and moisture basis; normalize | Meter and scale calibration, laboratory reports, treatment logs, recipient evidence, and manifests |
| `cp_direct_emissions` | `preservation_packaging`; `onsite_residuals_treatment` | refrigerants, treated effluent, and measured direct releases | service record, charge balance, stack or effluent monitoring, and permit record | substance; compartment; measured value; method; detection limit; equipment; charge added or recovered; effluent volume; sampling period | Record each substance and compartment separately using measured or permitted-monitoring evidence | kg or m3 | Per event and reporting interval | Same representative period as product output | All included direct release points | Apply documented sampling and allocation method; report below-detection treatment; normalize | Laboratory accreditation where applicable, calibration, service records, permits, and calculation file |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory amount | normalized amount = period or batch amount / conforming net tomato juice output × 1,000 kg | collected amount; conforming net product mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_process_mass_balance` | each foreground process | measured inputs + opening stock = measured outputs + closing stock + quantified loss; report the unexplained difference and do not force it to zero | input, output, stock, rework, and loss records | reconciled mass balance and unexplained difference | `mass-balance-identity` |
| `calc_reconstitution_balance` | from-concentrate and formulation routes | conditioned juice mass = measured tomato input + measured recipe water + measured ingredients + eligible returns - measured losses, adjusted for stock change; verify the declared product specification from measured laboratory and recipe records | recipe inputs; returns; losses; stock change; laboratory results | conditioned juice mass and specification check | `mass-balance-identity`; `us-ecfr-21-cfr-156-145` |
| `calc_energy_conversion` | energy records | convert electricity to kWh and delivered fuel or heat to MJ using retained supplier or measured conversion data; do not assume an efficiency or heating value | meter readings; fuel quantity; heating value; conversion factor | kWh or MJ by process |  |
| `calc_packaging_mass` | packaging materials and scrap | component mass = verified component count × verified unit mass; reconcile issued, returned, incorporated, and rejected components | counts; sampled or supplier unit mass; stock movement | packaging and packaging-scrap mass by material |  |
| `calc_allocation_factor` | unavoidable shared burdens | calculate the selected physical or other relationship from period-matched records and document sensitivity to a reasonable alternative | separately attributable burdens; coproduct quantities; selected allocation driver | allocation factor and sensitivity result | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and source materials | Verify product name, UUID for the reference flow, production route, recipe, product specification, preservation state, and package or bulk state. | Tiangong flow readback, batch specification, label or sales specification, and release record |
| `dq_representativeness` | all foreground data | State geography, technology, facility, reference period, seasonal coverage, capacity utilization, and material product variants; justify any proxy period or site. | Dataset metadata, production schedule, site description, and variance review |
| `dq_completeness` | process map and inventory | Cover every required process and every applicable conditional process; reconcile material, water, energy, waste, and direct-release records without double counting internal transfers. | Process flow diagram, meter map, mass and water balances, inventory reconciliation, and gap log |
| `dq_measurement` | collected and calculated values | Retain instrument identity, calibration or verification status, raw units, conversion factors, aggregation, and data owner. | Calibration certificates, raw exports, calculation workbook, and signed review |
| `dq_thermal_validation` | preservation and filling | Link each released product route to the current validated process and retain critical monitoring and deviation disposition; generic time-temperature values are not a substitute for route-specific validation. | Validated process schedule, process authority or equivalent evidence, monitoring records, deviations, and release approval |
| `dq_provisional_ranges` | every `reasoned_estimate` range | Treat the range only as a broad screening or QA prior. Replace it with foreground measurements or reviewed source evidence before publication-critical use and explain deviations rather than clipping data. | Range replacement log, foreground records, reviewed source, and reviewer disposition |
| `dq_unresolved_uuid` | non-reference inventory flows | Resolve and verify Tiangong UUIDs before active use where a database-backed identity is required; do not copy the tomato-juice reference UUID to another flow. | Tiangong identity readback and reviewer confirmation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | The reference product must be Tomato juice `0e1f9da3-8a58-4fab-a793-1edde8bead88` with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg; no other inventory flow may inherit this UUID by analogy. |  |
| `validation_reference_amount` | normalized inventory | Conforming net tomato juice output, excluding packaging, must equal exactly 1,000 kg after normalization and every reported inventory amount must state its basis. | `mass-balance-identity` |
| `validation_required_qualifiers` | dataset metadata | The data package must declare every required qualifier, including route, source material, product specification, ingredients, preservation, package or bulk state, storage condition, geography, reference period, technology, and facility. | `us-ecfr-21-cfr-156-145` |
| `validation_process_coverage` | process map | Every required process and each applicable conditional process must have inventory and collection evidence; excluded conditional processes must carry a reason. | `fao-fruit-vegetable-processing-1995` |
| `validation_mass_balance` | foreground processes | Each process must report measured inputs, outputs, stock change, rework, quantified loss, and unexplained balance difference; material differences require investigation and disclosure. | `mass-balance-identity` |
| `validation_route_consistency` | direct and from-concentrate routes | Source-material form, recipe water, concentrate input, process map, product label or specification, and upstream datasets must describe one consistent production route. | `us-ecfr-21-cfr-156-145` |
| `validation_preservation_evidence` | preserved product release | The selected preservation route must have current product- and process-specific validation, monitored process records, and disposition of deviations; do not validate a dataset from generic guidance values alone. | `fda-juice-haccp-2004` |
| `validation_allocation_disclosure` | multifunctional operations | Report subdivision attempts, coproduct or waste status evidence, allocation method, factors, period-matched inputs, and sensitivity when allocation remains. | `iso-14044-2006` |
| `validation_provisional_estimates` | reasoned estimates | A value outside a provisional range is a review trigger, not an automatic failure. Publication-critical use requires replacement or explicit reviewer acceptance supported by evidence. |  |
| `validation_uuid_resolution` | non-reference inventory rows | Any non-reference Tiangong flow UUID left unresolved makes identity coverage incomplete and must be disclosed; invented or unverified UUIDs are prohibited. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground tomato-juice production data package normalized to 1,000 kg conforming net product |
| downstream_use | May support a `secondary_dataset` or `background_dataset` after methodology, identity, evidence, and review requirements are satisfied |
| allowed_use | Product- and route-matched LCI studies, supply-chain models, process improvement, and scenario analysis within the declared geography, period, technology, preservation, and packaging scope |
| excluded_use | Unqualified proxy for tomato paste, concentrated tomato juice, sauces, mixed juices, nectars, fermented beverages, cultivation, consumer use, or materially different production and preservation routes |
| required_metadata | Canonical PCR id; reference-flow UUIDs; required qualifiers; facility and geography; reference period; technology; direct or from-concentrate route; preservation; packaging; process coverage; upstream dataset identities; allocation; data owners; review state |
| required_quality_disclosure | Measurement coverage; data gaps; unresolved UUIDs; reasoned estimates; mass, water, and energy reconciliation; thermal-process evidence; allocation sensitivity; waste destinations; direct-release measurement; deviations and reviewer dispositions |
| update_trigger | Change in product specification, source-material form, recipe, preservation or packaging route, facility technology, supplier mix, allocation, validated process, material data gap, reference period, or Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `us-ecfr-21-cfr-156-145` | standard | U.S. Electronic Code of Federal Regulations, 21 CFR 156.145, Tomato juice, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-156/subpart-B/section-156.145, retrieved 2026-08-11 | Tomato-juice identity, direct and from-concentrate routes, permitted processing and declared ingredients, and preservation-state requirements |
| `fao-fruit-vegetable-processing-1995` | official_guidance | FAO Agricultural Services Bulletin No. 119, Fruit and vegetable processing, section 9.5.1.1 Tomato juice, https://www.fao.org/4/V5030E/V5030E0r.htm, retrieved 2026-08-11 | Candidate process decomposition from washing and sorting through extraction, finishing, preservation, filling, and cooling; not used as a mandatory numeric process schedule |
| `fda-juice-haccp-2004` | official_guidance | U.S. Food and Drug Administration, Guidance for Industry: Juice HACCP Hazards and Controls Guidance, First Edition, March 2004, https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-juice-hazard-analysis-critical-control-point-hazards-and-controls-guidance-first, retrieved 2026-08-11 | Requirement to retain product- and process-specific hazard analysis, validation, monitoring, critical process records, and deviation disposition; not used to impose a generic tomato-juice time-temperature value |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html, confirmed current in 2022 and retrieved 2026-08-11 | LCI requirements, system-boundary disclosure, allocation hierarchy, reporting, and review framework |
| `mass-balance-identity` | method_factor | Conservation of mass applied to each foreground process with explicit stock change, rework, quantified loss, and unexplained balance difference | Process reconciliation, recipe balance, reference normalization, and validation |
