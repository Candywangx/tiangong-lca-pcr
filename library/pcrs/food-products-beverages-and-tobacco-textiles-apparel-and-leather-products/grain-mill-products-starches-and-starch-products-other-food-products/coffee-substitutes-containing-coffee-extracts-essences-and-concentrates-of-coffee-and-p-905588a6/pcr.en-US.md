---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-substitutes-containing-coffee-extracts-essences-and-concentrates-of-coffee-and-p-905588a6
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Coffee Extracts, Concentrates, Substitutes, and Related Preparations

## 1. Scope and Applicability

This PCR supports foreground data packages for coffee extracts and concentrates, soluble or instant coffee, preparations based on coffee extracts or coffee, coffee-containing substitutes, and roasted chicory or other roasted coffee substitutes and their extracts. It covers factory operations from receipt of declared roasted coffee, chicory, substitute ingredients, or purchased extract through extraction or blending, concentration, optional drying, and packaging at the manufacturing gate.

The Tiangong reference product flow is the real flow `Instant Coffee / 速溶咖啡`. It is representative of CPC 23912, but it is not a generic identity for every product in the category. A data package for liquid or paste coffee extract, a coffee-based preparation, roasted chicory, or another substitute product shall select and verify a more specific Tiangong product flow before publication; the instant-coffee UUID shall not be relabelled or reused for those products.

Coffee cultivation, primary processing of coffee cherries, manufacture of green coffee, upstream roasting performed by a supplier, distribution, beverage preparation by the user, and end-of-life after the factory gate are represented by linked upstream or downstream datasets when required by the study, not by the foreground processes in this PCR. If roasting, ingredient manufacture, or packaging manufacture occurs at the reporting site, the corresponding foreground operation shall be added and disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-substitutes-containing-coffee-extracts-essences-and-concentrates-of-coffee-and-p-905588a6 |
| classification_refs | CPC 3.0: 23912 |
| covered_products | Dried soluble or instant coffee extract; coffee extract paste; liquid coffee extract or concentrate; preparations based on coffee extract or coffee; coffee-containing substitutes; roasted chicory and other roasted coffee substitutes; extracts and concentrates of those substitutes |
| excluded_products | Green coffee; roasted or decaffeinated coffee sold without extraction or substitute preparation; ready-to-drink brewed coffee beverages; pure flavourings without a coffee or coffee-substitute basis; beverage-serving services |
| representative_product | Instant Coffee / 速溶咖啡, the verified Tiangong flow used only for dried soluble or instant coffee products |
| production_route | Receipt and preparation of roasted coffee or declared substitute ingredients; aqueous extraction and clarification where applicable; concentration; optional spray drying or freeze drying and agglomeration; conditional blending or formulation; packaging |
| market_state | Saleable dry powder or granules, paste, liquid concentrate, roasted substitute, or formulated preparation at the manufacturing gate, with product form, composition basis, dry-matter content, decaffeination status, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable coffee extract, concentrate, instant coffee, coffee-based preparation, or declared coffee-substitute product at the manufacturing gate |
| How much | 1 kg net product, excluding transport packaging unless the study explicitly includes it in the reference product mass |
| How well | Product form, coffee or substitute basis, dry-matter content, decaffeination status, recipe share for preparations, drying technology where relevant, and packaging state meet the declared specification |
| How long or cycle | One completed production lot at factory gate; shelf life and beverage preparation are not represented by this mass reference flow |
| reference_flow_link | One kilogram of net saleable output is the quantitative reference for all foreground inventory amounts |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Instant Coffee / 速溶咖啡 `16ecdc48-3ef5-40b0-8a5d-56b3794a2ba4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form: dried powder/granules, paste, liquid concentrate, roasted substitute, or preparation; coffee/chicory/substitute basis and recipe shares; coffee-based or substitute-based dry-matter content; decaffeinated status; extraction medium; drying technology when dried; net packaging state; geography; reference year |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, the product description, the reference-flow comment, or an equivalent data-package field. For any non-instant-coffee product, a product-specific Tiangong flow shall replace the representative flow before publication.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Net reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize foreground inputs and outputs to 1 kg net saleable product. Record gross packaged mass separately and do not count packaging in the product reference mass. |
| `product_form_dry_matter` | Dried, paste, and liquid extracts | Mass fraction | kg/kg or % by mass | Record dry-matter test result and method. For EU-market coffee extract, screen against Directive 1999/4/EC: at least 95% coffee-based dry matter for dried extract, 70–85% for paste, and 15–55% for liquid extract; use the applicable jurisdictional specification elsewhere. |
| `ingredient_mass_basis` | Coffee, chicory, substitute ingredients, additives, and packaging | Mass | kg | Use as-received mass and separately record moisture or dry-matter basis when it materially affects yield or comparison. |
| `energy_conversion` | Purchased electricity, fuels, steam, refrigeration, and compressed air | Energy | kWh or MJ | Preserve measured billing or meter units and conversion factors. Do not convert energy carriers to mass without a documented lower or higher heating value and basis. |
| `water_balance` | Process water and wastewater | Mass or volume | kg or m3 | Use measured mass or volume; if volume is converted to mass, record temperature-dependent density or an explicit justified approximation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received roasted coffee, roasted chicory or other substitute ingredients, purchased coffee/substitute extract, formulation ingredients, utilities, and packaging materials at the reporting site |
| starting_condition_role | Upstream products entering the foreground manufacturing system |
| product_classification_scope | Coffee extracts, concentrates, coffee-based preparations, coffee-containing substitutes, roasted chicory and other roasted substitutes, and their extracts covered by the declared category scope |
| recursive_input_rule | A purchased extract, concentrate, or preparation within this same category is recorded once as a technosphere product input with its own upstream dataset; its production is not recursively reconstructed inside the receiving foreground process |
| upstream_dataset_requirement | Link representative upstream datasets for coffee or substitute ingredients, purchased extracts, water, energy carriers, packaging materials, transport where in scope, and waste treatment; disclose geographic, temporal, and technological representativeness |
| disclosure | Declare which starting materials are roasted, extracted, concentrated, or already formulated; identify on-site versus supplier operations; state product form, recipe basis, dry matter, drying technology, packaging boundary, geography, reference year, and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Foreground manufacturing | Include all on-site material preparation, aqueous extraction and clarification, concentration, drying or agglomeration, formulation, cleaning, site utilities, wastewater handling, product losses, and packaging operations that occur for the declared route. | `eu-coffee-extracts-directive-1999`; `eu-pef-method-2021` |
| `boundary_upstream_links` | Purchased inputs | Represent purchased coffee, chicory, substitute ingredients, extracts, formulation ingredients, utilities, packaging materials, and treatment services with linked upstream datasets rather than omitting their burdens. | `eu-pef-method-2021` |
| `boundary_route_conditionals` | Conditional operations | Include only route steps that occur for the declared product, but document a not-applicable decision for every conditional process in the Process Map. | `eu-pef-method-2021` |
| `boundary_cutoff_disclosure` | Excluded flows | Do not use an undocumented mass, energy, or environmental-significance cut-off. Quantify excluded flows or justify and disclose why they are immaterial to the intended dataset use. | `iso-14044-2006`; `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | Ingredient receipt and preparation | `required` | Always; the operation may consist only of metered transfer when ingredients arrive ready for extraction or blending | Foreground material preparation | kg prepared feed |
| `aqueous_extraction` | Aqueous extraction and clarification | `conditional` | Required for coffee or substitute extracts produced on site; not applicable when a purchased extract is only blended or packed | Foreground extraction | kg clarified extract liquor |
| `concentration` | Concentration and aroma handling | `conditional` | Required when extract liquor is concentrated on site or recovered aromas are returned | Foreground concentration | kg concentrated extract |
| `drying_finishing` | Drying, agglomeration, and dry-product finishing | `conditional` | Required for dried soluble or instant products produced on site | Foreground product finishing | kg dried finished product |
| `formulation` | Blending and formulation | `conditional` | Required for coffee-based preparations, coffee-containing substitutes, or products made from multiple ingredients | Foreground formulation | kg formulated product |
| `packaging` | Final inspection and packaging | `required` | Always for saleable factory-gate product; use an explicit unpackaged state only when that is the commercial output | Foreground packing | 1 kg net saleable product |

### Process: Ingredient receipt and preparation (`ingredient_preparation`)

#### Inputs

##### Product flows

###### Roasted coffee, chicory, substitute, or purchased extract feed (`primary_ingredient_feed`)

Record each principal ingredient separately by identity, origin, roasted/extracted state, moisture or dry matter, and lot. Do not merge coffee, chicory, other substitutes, or purchased extract into an unnamed aggregate.

- Selected flow: Declared roasted coffee, roasted chicory, coffee substitute, or purchased extract
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received lot mass consumed, net of documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`
- Range: Provisional ingredient-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 10
  - Unit: kg/kg net saleable product
  - Basis: broad category-level screen spanning preparations, liquid extracts, and dried extracts; replace with product- and site-specific yield evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Minor formulation and processing aids (`minor_ingredients`)

Record sugars, carriers, anti-caking agents, or other declared ingredients and processing aids separately when used. Apply applicable product-composition rules and retain recipe records.

- Selected flow: Declared formulation ingredient or processing aid
- Flow property / unit: Mass / kg
- Amount rule: Measured issue-to-production mass by ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`
- Sources: `eu-coffee-extracts-directive-1999`

##### Waste flows

###### Rejected or spilled ingredients (`ingredient_rejects`)

Record off-specification, spilled, and discarded ingredient mass by material and destination.

- Selected flow: Organic food-processing waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected or discarded mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Range: Provisional material-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg prepared feed
  - Basis: broad first-pass screen; replace with site mass-balance history
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared ingredient feed (`prepared_feed`)

Prepared material transferred to extraction or formulation is calculated from opening stock, receipts, closing stock, returns, and measured losses.

- Selected flow: Prepared coffee or substitute feed
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared feed transferred to the next foreground process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_lot_records`

##### Waste flows

##### Elementary flows

### Process: Aqueous extraction and clarification (`aqueous_extraction`)

#### Inputs

##### Product flows

###### Prepared roasted material (`extraction_feed`)

Record the prepared roasted coffee or substitute material entering extraction. Purchased extract bypasses this process and enters concentration or formulation.

- Selected flow: Prepared roasted coffee or substitute material
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-weighed extraction feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clarified extract liquor
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`
- Sources: `eu-coffee-extracts-directive-1999`

###### Extraction and cleaning water (`process_water`)

Separate water incorporated in extract from cleaning water where metering permits; record recycled water and condensate without double counting makeup water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered freshwater makeup plus other externally supplied water entering the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter_records`
- Range: Provisional water-use QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 50
  - Unit: kg/kg net saleable product
  - Basis: broad first-pass screen across extract forms and cleaning regimes; replace with site metering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Extraction energy and utilities (`extraction_energy`)

Record electricity and thermal energy carriers separately. Steam crossing the process boundary shall include its pressure or temperature basis and condensate return treatment.

- Selected flow: Purchased electricity and thermal-energy carriers
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered or allocated utility consumption for extraction and clarification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter_records`
- Range: Provisional extraction-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: MJ/kg net saleable product
  - Basis: broad first-pass combined-energy screen; replace with separated meter or engineering records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Clarified coffee or substitute extract liquor (`clarified_extract`)

Record extract mass and dry-matter fraction at the transfer point to concentration or direct liquid-product finishing.

- Selected flow: Clarified coffee or substitute extract liquor
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass with paired dry-matter test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clarified extract liquor
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_quality_records`

##### Waste flows

###### Spent coffee grounds or substitute solids (`spent_extraction_solids`)

Record wet mass, dry matter, any recovered coffee oil or other co-product, and treatment or use destination.

- Selected flow: Spent coffee grounds or spent substitute solids
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass leaving extraction, paired with representative dry-matter samples
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Range: Provisional spent-solids QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg wet solids/kg net saleable product
  - Basis: broad first-pass screen; replace with site mass balance and moisture data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Extraction wastewater (`extraction_wastewater`)

Record wastewater volume or mass, relevant load indicators, and destination; do not combine it with water incorporated in product or evaporated water.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered discharge from extraction, cleaning, and clarification attributable to the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg net saleable product
  - Basis: broad first-pass screen; replace with flow-meter and production records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Concentration and aroma handling (`concentration`)

#### Inputs

##### Product flows

###### Clarified extract or purchased extract (`concentration_feed`)

Record the feed mass, dry matter, and whether aromas are recovered and returned.

- Selected flow: Clarified or purchased coffee or substitute extract
- Flow property / unit: Mass / kg
- Amount rule: Measured feed transfer mass with dry-matter test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg concentrated extract output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_quality_records`

###### Concentration energy and utilities (`concentration_energy`)

Record electricity, steam, refrigeration, and vacuum-system utilities separately where available.

- Selected flow: Purchased electricity and thermal-energy carriers
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered or engineering-allocated concentration utility consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter_records`
- Range: Provisional concentration-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: MJ/kg net saleable product
  - Basis: broad first-pass combined-energy screen; replace with site utility data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Concentrated extract (`concentrated_extract`)

Record product mass, product form, and dry matter at the concentration outlet. Recovered aroma returned to the same product is an internal flow and shall not be counted as an additional output.

- Selected flow: Concentrated coffee or substitute extract
- Flow property / unit: Mass / kg
- Amount rule: Measured outlet mass with dry-matter test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg concentrated extract output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_quality_records`
- Sources: `eu-coffee-extracts-directive-1999`

##### Waste flows

###### Concentration condensate or wastewater (`concentration_water_output`)

Record condensate reuse, discharge, or treatment separately so recovered water is not counted both as waste and avoided input.

- Selected flow: Process condensate or wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-balance-calculated water output by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg concentrated extract output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`

##### Elementary flows

### Process: Drying, agglomeration, and dry-product finishing (`drying_finishing`)

#### Inputs

##### Product flows

###### Concentrated extract feed (`drying_feed`)

Declare spray drying, freeze drying, or another reviewed drying technology and record feed mass and dry matter.

- Selected flow: Concentrated coffee or substitute extract
- Flow property / unit: Mass / kg
- Amount rule: Measured concentrated feed to the dryer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_quality_records`

###### Drying energy and utilities (`drying_energy`)

Record electricity, heat, refrigeration, compressed air, and inert gas separately by drying technology.

- Selected flow: Purchased electricity and thermal-energy carriers
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered or engineering-allocated utility consumption for drying and agglomeration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dried product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter_records`
- Range: Provisional drying-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 100
  - Unit: MJ/kg dried product
  - Basis: broad first-pass screen spanning spray and freeze drying; replace with technology-specific site data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried soluble or instant product (`dried_product`)

Record net dried output, dry matter, retained fines returned internally, and off-specification product separately.

- Selected flow: Instant Coffee / 速溶咖啡 `16ecdc48-3ef5-40b0-8a5d-56b3794a2ba4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured conforming dried output transferred to formulation or packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_quality_records`
- Sources: `eu-coffee-extracts-directive-1999`

##### Waste flows

###### Off-specification dried product and captured fines (`drying_rejects`)

Record final destination and distinguish internally recycled fines from material that leaves the foreground system.

- Selected flow: Off-specification soluble coffee or substitute product
- Flow property / unit: Mass / kg
- Amount rule: Measured off-specification output leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Range: Provisional drying-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg dried product output
  - Basis: broad first-pass screen; replace with site yield history
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Blending and formulation (`formulation`)

#### Inputs

##### Product flows

###### Coffee extract, substitute, and formulation components (`formulation_components`)

Record every recipe component separately and identify the coffee, chicory, or other substitute basis.

- Selected flow: Declared formulation components
- Flow property / unit: Mass / kg
- Amount rule: Measured batch recipe quantities corrected for returns and rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`
- Sources: `eu-coffee-extracts-directive-1999`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formulated coffee or substitute preparation (`formulated_product`)

Record net batch output, recipe version, dry matter, and product-specific flow identity.

- Selected flow: Formulated coffee or substitute preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming formulated output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_quality_records`

##### Waste flows

##### Elementary flows

### Process: Final inspection and packaging (`packaging`)

#### Inputs

##### Product flows

###### Unpacked conforming product (`unpacked_product`)

Record the product-specific flow entering packaging. The instant-coffee UUID is used only when the product is instant or soluble coffee.

- Selected flow: Product-specific coffee extract, preparation, or substitute product
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming product transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_quality_records`

###### Primary and secondary packaging materials (`packaging_materials`)

Record each material and component separately, including multilayer packs, closures, labels, cartons, and pallets when inside the declared packaging boundary.

- Selected flow: Product-specific packaging material
- Flow property / unit: Mass / kg
- Amount rule: Measured or bill-of-material packaging mass consumed, net of returned components
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kg/kg net saleable product
  - Basis: broad first-pass screen spanning bulk and retail formats; replace with the packaging bill of materials
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record packaging scrap by material and treatment destination.

- Selected flow: Packaging waste by material
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging scrap leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable reference product (`reference_product_output`)

The output flow shall be product-specific. Use the verified Instant Coffee flow only for instant or soluble coffee; all other products require a verified, more specific Tiangong flow.

- Selected flow: Instant Coffee / 速溶咖啡 `16ecdc48-3ef5-40b0-8a5d-56b3794a2ba4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed quantitative reference of 1 kg net saleable product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output foreground processes | First avoid allocation through process subdivision, separate metering, and mass balance, including separate accounting for recovered aroma, coffee oil, reusable condensate, internally recycled fines, and saleable co-products. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_physical_then_other` | Unavoidable shared burdens | When subdivision is not feasible, use a documented physical causal relationship. If no defensible physical relationship exists, use an explicitly justified alternative such as economic allocation, report prices and reference period, and test sensitivity. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_internal_recycling` | Internal loops | Do not assign a second product output or avoided burden to recovered aroma, condensate, extract, or fines returned to the same foreground route; record the loop and count only makeup inputs and losses crossing the system boundary. | `eu-pef-method-2021` |
| `allocation_waste_treatment` | Spent grounds, wastewater, and packaging scrap | Assign treatment burdens to the foreground product up to the declared system boundary. Do not credit substitution or recycling benefits unless the downstream method and dataset scope explicitly require them and the modelling choice is disclosed. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_lot_records` | `ingredient_preparation` | Principal and minor ingredient inputs; prepared feed; formulation components | ERP issue records, scale tickets, batch sheets, stock reconciliation | material_id; supplier; lot_id; product_state; opening_stock; receipts; issues; returns; closing_stock; moisture_or_dry_matter; timestamp | Calibrated scales plus inventory reconciliation | kg and kg/kg dry matter | Each lot or batch, reconciled monthly | Representative production cycle; preferably 12 consecutive months for annual datasets | Every included manufacturing site and product recipe | Sum net consumption by material and divide by conforming reference-product output; keep ingredients separate | Scale calibration, lot traceability, stock-variance review, recipe approval |
| `cp_utility_meter_records` | `aqueous_extraction` | Water, electricity, fuels, steam, refrigeration, compressed air, and other utilities for extraction, concentration, and drying | Utility meters, invoices, boiler logs, engineering allocation records | meter_id; carrier; opening_reading; closing_reading; unit; conversion_factor; process_area; production_period; allocation_key | Submeter preferred; otherwise documented engineering allocation from site totals | kg, m3, kWh, or MJ | Continuous or per batch, reconciled monthly | Same representative period as product output; preferably 12 consecutive months | All equipment and shared utilities serving included processes | Convert with documented factors, subtract verified exports or returns, allocate shared totals using causal operating data, normalize to output | Meter calibration, invoice reconciliation, operating-hour record, conversion-factor source |
| `cp_product_mass_quality_records` | `packaging` | Extract intermediates and conforming product outputs | Batch mass records, tank or hopper measurements, laboratory results, release records | batch_id; product_id; input_mass; output_mass; product_form; dry_matter; caffeine_status; recipe_version; drying_technology; release_status | Calibrated mass measurement paired with representative laboratory sampling | kg and % by mass | Every batch or production lot | All batches in the representative dataset period | Every included product and site | Sum released output only; retain intermediate mass and dry-matter pairs for mass balance | Scale calibration, laboratory method, sample plan, release authorization |
| `cp_waste_records` | `ingredient_preparation` | Ingredient rejects, spent solids, off-specification product, and packaging scrap | Waste scales, container tickets, transfer notes, treatment invoices | waste_id; material; wet_mass; dry_matter_if_relevant; destination; treatment; recovery_status; batch_or_period | Weigh each transfer or use calibrated container factors verified by periodic weighing | kg and kg/kg dry matter where relevant | Each transfer, reconciled monthly | Same representative period as product output | All included processes and destinations | Sum by waste type and destination; subtract only documented internal return before boundary crossing | Scale calibration, transfer documentation, treatment receipt, moisture sampling |
| `cp_wastewater_records` | `aqueous_extraction` | Wastewater and condensate discharge or reuse | Flow meter, tank record, discharge permit sampling, treatment log | stream_id; volume_or_mass; density_if_used; COD_or_relevant_load; destination; reuse_quantity; period | Continuous flow meter or documented water balance with representative sampling | kg, m3, and applicable load unit | Continuous/monthly plus permit sampling frequency | Same representative period as product output, including seasonal cleaning campaigns | All included wastewater and condensate streams | Separate discharge, treatment, evaporation, product incorporation, and internal reuse; avoid double counting | Meter calibration, balance closure, laboratory report, discharge record |
| `cp_packaging_records` | `packaging` | Primary, secondary, and tertiary packaging inside the declared boundary | Bill of materials, supplier specification, issue and scrap records | component_id; material; unit_mass; units_used; recycled_content_if_claimed; scrap; pallet_cycles; product_format | Component weighing and approved bill of materials reconciled to issues | kg | Per packaging specification; issues reconciled monthly | All packaging formats produced in the representative dataset period | Every saleable format and included site | Sum component mass consumed minus documented reusable returns; normalize to net product mass | Approved specification, supplier declaration, scale record, inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground flows | normalized amount = period or batch flow amount / net conforming saleable product mass for the same period or batch | flow_amount; net_saleable_product_mass | amount per 1 kg net saleable reference product | `eu-pef-method-2021` |
| `calc_dry_matter` | Extract and product quality | dry-matter fraction = dry sample mass / as-received sample mass; retain the laboratory method and sampling basis | dry_sample_mass; as_received_sample_mass | kg/kg and % by mass dry matter | `eu-coffee-extracts-directive-1999` |
| `calc_material_balance` | Each process and complete foreground route | mass-balance difference = total measured mass inputs - total measured mass outputs - separately measured evaporation or other mass transfer; report difference relative to total inputs | input_masses; product_outputs; waste_outputs; wastewater; evaporation_or_transfer | kg difference and % closure |  |
| `calc_shared_utility` | Shared utility systems | allocated utility = metered shared total × causal process driver / sum of the same driver across served processes; use operating time only when it reasonably represents demand | shared_utility_total; causal_driver_by_process | utility amount assigned to each process | `eu-pef-method-2021` |
| `calc_packaging_mass` | Packaging | packaging mass = sum(component unit mass × units consumed) - verified reusable components returned without crossing the boundary | component_unit_mass; units_consumed; reusable_returns | kg packaging per kg net product |  |
| `calc_yield` | Extraction, concentration, drying, formulation, and packaging | process yield = conforming output dry mass / applicable input dry mass; for packaging use conforming net product mass / unpacked input mass | input_mass_and_dry_matter; conforming_output_mass_and_dry_matter | kg/kg process yield on declared basis |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and ingredients | Preserve product-specific identities, lot links, product form, coffee/chicory/substitute basis, recipe version, and the verified Tiangong flow UUID. Non-instant products shall not use the Instant Coffee UUID. | Product specification, batch release record, supplier record, and Tiangong identity verification |
| `dq_measurement` | Mass, utilities, water, wastes, and quality tests | Use calibrated or legally controlled instruments where applicable; retain calibration status, reading units, conversion factors, and laboratory methods. | Calibration certificate, meter log, laboratory report, and conversion record |
| `dq_temporal` | Foreground annual or campaign dataset | Cover at least one representative production cycle and preferably 12 consecutive months when seasonality or product campaigns affect utilities or yield; disclose shorter coverage and its limitations. | Production calendar, monthly reconciliation, and representativeness assessment |
| `dq_completeness` | Foreground system | Reconcile material, water, energy, product, waste, and wastewater records across every included process and document excluded or unmetered flows. | Completeness checklist, mass and water balances, utility reconciliation |
| `dq_representativeness` | Upstream datasets and shared allocations | Document geographic, temporal, and technological match, shared-site allocation drivers, and substitutions used when exact upstream data are unavailable. | Dataset metadata, allocation worksheet, supplier geography, technology description |
| `dq_uncertainty` | Provisional ranges and modelled estimates | Treat every `reasoned_estimate` range only as a QA screen; replace it with foreground measurements or reviewed source-backed evidence before publication or disclose the unresolved limitation. | Range review log, measured value, source citation, or explicit limitation statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm UUID `16ecdc48-3ef5-40b0-8a5d-56b3794a2ba4`, flow name Instant Coffee / 速溶咖啡, flow type Product flow, state code 100, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg reference unit. |  |
| `validate_non_instant_flow` | Non-instant products | Reject publication if liquid or paste extract, coffee-based preparation, roasted chicory, or another substitute product relabels or reuses the Instant Coffee UUID; require a verified product-specific flow. |  |
| `validate_qualifiers` | Reference product metadata | Require product form, coffee/chicory/substitute and recipe basis, dry matter, decaffeination status, extraction medium, applicable drying technology, packaging state, geography, and reference year. | `eu-coffee-extracts-directive-1999` |
| `validate_route` | Process coverage | Require both mandatory processes and a documented included/not-applicable decision for aqueous extraction, concentration, drying, and formulation; the detailed inventories shall match the declared production route. | `eu-pef-method-2021` |
| `validate_mass_balance` | Foreground processes | Require batch or period mass-balance calculations for extraction, concentration, drying, formulation, and packaging; investigate and disclose material imbalances instead of forcing closure. | `iso-14044-2006`; `eu-pef-method-2021` |
| `validate_foreground_evidence` | Collected and calculated rows | Require every `collected_record` or `calculated_from_collection` row to reference an implemented collection protocol and retain the stated quality evidence. | `eu-pef-method-2021` |
| `validate_allocation` | Multi-output and shared processes | Require documented subdivision attempts, allocation method, allocation factors totaling one, source period, and sensitivity when a non-physical basis is used. | `iso-14044-2006`; `eu-pef-method-2021` |
| `validate_estimate_status` | Reasoned-estimate ranges | Flag every `reasoned_estimate` as a non-authoritative QA guardrail and require replacement by measured or reviewed evidence, or explicit limitation disclosure, before normal published use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared coffee extract, concentrate, instant coffee, coffee-based preparation, or coffee-substitute product |
| downstream_use | `secondary_dataset`; `background_dataset` when product identity, route, geography, technology, and data quality are sufficiently representative for reuse |
| allowed_use | Product-footprint, process, and lifecycle-model studies using the same product form and composition basis, manufacturing route, boundary, geography, time period, packaging state, and allocation assumptions |
| excluded_use | Direct substitution across dried, paste, liquid, preparation, chicory, or other substitute forms without dry-matter and function adjustment; consumer beverage preparation; agricultural coffee production; use of the Instant Coffee UUID for a non-instant product; comparative public claims without applicable review |
| required_metadata | Product-specific flow UUID; product name and form; coffee/chicory/substitute basis and recipe shares; dry matter; decaffeination status; extraction medium; drying technology; net and packaging mass basis; process inclusion decisions; geography; reference year; site coverage; allocation method; upstream dataset versions |
| required_quality_disclosure | Foreground coverage period and site share; meter and scale quality; laboratory methods; mass and water balance closure; missing-flow assessment; shared-utility allocation; upstream representativeness; provisional estimate status; exclusions and limitations |
| update_trigger | Change of product flow identity, product form or recipe, dry-matter specification, extraction or drying technology, site or geography, packaging format, allocation method, material supplier route, or a material shift in yield, energy, water, waste, or wastewater performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-coffee-extracts-directive-1999` | Official guidance (`official_guidance`) | European Parliament and Council, Directive 1999/4/EC relating to coffee extracts and chicory extracts, consolidated current version, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31999L0004 (retrieved 2026-08-11) | Product definitions; water-only extraction definition; dried, paste, and liquid form distinctions; dry-matter and composition qualifiers |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional unit and reference flow; system boundary; company-specific data; data quality; multifunctionality; validation and reporting rules |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including published amendments; official record https://www.iso.org/standard/38498.html (confirmed current in 2022; retrieved 2026-08-11) | LCA inventory consistency, allocation hierarchy, completeness, interpretation, reporting, and critical-review basis |
