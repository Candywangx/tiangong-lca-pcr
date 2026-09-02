---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.bread-and-other-bakers-wares
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Bread and Other Bakers' Wares

## 1. Scope and Applicability

This PCR applies to the manufacture of bread and other bakers' wares within the semantic scope of CPC 3.0 subclass 23490. It covers fresh or preserved bread made from cereal flours or meals, including ordinary, brown, wholemeal, pumpernickel, rye, gluten and unleavened bread; bread buns and rolls; and other fresh or preserved bakers' wares such as crackers, salty or savoury biscuits, pretzels, tortillas, matzos, communion wafers, empty cachets and rice paper. The data producer shall identify the exact product subgroup and formulation because recipes, leavening routes, moisture, finishing, preservation and packaging materially affect the inventory.

The foreground boundary begins with ingredients, processing aids, packaging materials and utilities received at the bakery gate. It includes ingredient storage and dosing; mixing and dough or batter preparation; forming; fermentation or proofing when used; baking, drying or equivalent thermal setting; cooling; slicing or other finishing; packaging; cleaning; on-site utilities; and frozen or controlled storage when performed before the product leaves the factory gate. Upstream production of purchased ingredients, packaging and utilities and downstream treatment of wastes are represented by linked upstream datasets rather than recreated in the bakery foreground.

Sweet biscuits, gingerbread, waffles and wafers; crispbread, rusks, toasted bread and similar toasted products; pastry goods and cakes; pizza, pancakes and sweet rolls; mixes or unbaked dough sold as products; pasta and other farinaceous products; retail, catering and household preparation are outside this PCR. A product marketed under a familiar bread name remains excluded when its reviewed classification belongs to one of those categories.

The historical International EPD System bakery PCR confirms the broader CPC 234 bakery context but is expired and is not treated as a current mandatory programme rule. This TianGong PCR therefore uses current public evidence and explicit foreground collection rules, and it requires a new methodological review if a current bakery c-PCR is later published.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.bread-and-other-bakers-wares |
| classification_refs | CPC 3.0: 23490, exact mapping context |
| covered_products | Fresh or preserved cereal-flour bread; bread buns and rolls; unleavened bread; crackers; salty or savoury biscuits; pretzels; tortillas; matzos; communion wafers; empty cachets; rice paper; other semantically equivalent CPC 23490 bakers' wares |
| excluded_products | CPC 23410 crispbread, rusks and toasted bread; CPC 23420 gingerbread, sweet biscuits, waffles and wafers; CPC 23430 pastry goods and cakes including pizza, pancakes and sweet rolls; CPC 23180 mixes and unbaked doughs; pasta; retail, catering and household preparation |
| representative_product | Marketable bread at the bakery factory gate |
| production_route | Ingredient receipt and dosing; mixing and dough preparation; forming; conditional fermentation or proofing; baking, drying or equivalent thermal setting; cooling; conditional slicing, finishing, packaging and controlled storage |
| market_state | Finished fresh, preserved, ambient, chilled or frozen product at the bakery factory gate, with packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared bread or other baker's ware that provides its intended food, sacramental, pharmaceutical-cachet or culinary-sheet function in the stated market state |
| How much | 1 kg of finished, conforming product; packaging mass is excluded from the 1 kg but packaging inputs are included in the inventory when present |
| How well | Conforms to the declared product subgroup, recipe or composition, dimensions or portion format, moisture basis, preservation condition and applicable commercial quality specification |
| How long or cycle | One production lot delivered at the bakery factory gate for the declared shelf-life or storage period; no use-phase service is implied |
| reference_flow_link | The reference product output of `finishing_packaging_and_storage`, or of `baking_and_cooling` when no finishing, packaging or controlled storage occurs |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg finished product, net of packaging |
| Reference product flow | Bread `82f5df4a-9ada-46d2-8686-b3b1265a8188` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact CPC 23490 product subgroup; base cereal or flour; recipe or formulation family; leavened or unleavened route; fermentation or proofing route; fresh, preserved, chilled or frozen state; net moisture basis; edible or non-food functional use; finishing and slicing state; packaging format and packaging mass; production technology; geography; lot and reference period; declared shelf-life or storage duration; allocation choices |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg of conforming finished product at the declared factory-gate market state, excluding packaging mass. Record the product mass after cooling and after any declared finishing loss. |
| `packaging_mass_separate` | packaging inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each packaging material separately. Packaging is within the inventory when used but shall not be added to the 1 kg reference product amount. |
| `moisture_and_bake_loss` | dough, intermediate and final product masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass at each measured process state and declare moisture basis. Do not infer ingredient conversion or bake loss from nominal recipe mass when measured lot masses are available. |
| `energy_carriers_not_merged` | electricity, fuels, steam and thermal energy | Carrier-specific property | kWh, MJ or carrier mass/volume | Preserve metered carrier and unit. Convert only with a documented factor and do not merge purchased electricity, on-site fuel combustion and purchased heat into one unqualified energy total. |
| `production_and_loss_mass_balance` | each production lot | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile ingredients and process water with finished product, saleable co-products, rework, evaporation or fermentation loss, waste and other measured outputs. Disclose the residual and investigation threshold. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients, processing aids, packaging materials and utilities received at the bakery gate with supplier identity, quantity, moisture or concentration where relevant, geography and upstream dataset reference declared |
| starting_condition_role | Gate-to-gate bakery foreground starting point backed by receiving, invoice, inventory and meter records |
| product_classification_scope | Bread and other bakers' wares semantically within CPC 3.0 subclass 23490, independent of directory ancestry |
| recursive_input_rule | A purchased finished CPC 23490 product used as an ingredient or rework input is recorded as a product input with its own upstream dataset; its production is not recursively recreated inside this foreground unless the same facility and reporting period provide separable measured production records |
| upstream_dataset_requirement | Link upstream datasets for all material ingredients, processing aids, packaging, purchased energy and fuels, water supply, transport when included, and waste or wastewater treatment; disclose missing, proxy or geographically mismatched datasets |
| disclosure | Declare facility and sites, reporting period, product subgroup and recipe family, technology and oven route, net product moisture, preservation and packaging state, included and excluded operations, shared-utility allocation, rework treatment, waste destinations and all proxy datasets |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_bakery_gate_to_gate` | foreground production | Include all bakery operations from receipt of ingredients through the conforming product at the factory gate, including cleaning and on-site utilities attributable to the product. | `unsd-cpc-3-0-23490`; `federation-of-bakers-production-methods` |
| `boundary_upstream_links` | purchased inputs and downstream treatment | Represent production of purchased ingredients, packaging, utilities and fuels and treatment of exported waste or wastewater through linked upstream or treatment datasets with geography and representativeness disclosed. | `iso-14044-2006`; `eu-bat-food-drink-milk-2019` |
| `boundary_conditional_operations` | finishing, packaging, freezing and storage | Include slicing, coating, filling, packaging, freezing, chilled storage or other finishing only when performed before the declared factory gate; record an explicit exclusion when a normally relevant operation does not occur. | `federation-of-bakers-production-methods`; `eu-jrc-food-beverage-bemp-2018` |
| `boundary_same_category_rework` | rework and returned intermediate product | Track same-category rework as an internal loop when it remains under facility control. If purchased or transferred across the foreground boundary, record it as a product flow and prevent recursive double counting. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_and_dough_preparation` | Ingredient handling, dosing, mixing and dough preparation | `required` | Always included | Foreground preparation | kg prepared dough or formed feed to the thermal process |
| `baking_and_cooling` | Forming, conditional fermentation or proofing, baking or thermal setting, and cooling | `required` | Always included; fermentation and proofing are zero when not used | Foreground conversion | kg cooled, conforming intermediate product |
| `finishing_packaging_and_storage` | Slicing, other finishing, packaging and controlled storage | `conditional` | Include each operation performed before the declared factory gate; otherwise document direct transfer from baking and cooling to the reference product | Foreground finishing | 1 kg finished reference product |
| `site_utilities_and_cleaning` | Shared utilities, sanitation and cleaning | `required` | Always included, with zero amounts supported by records where no relevant shared service is consumed | Foreground support | Product-attributable share per 1 kg finished reference product |

### Process: Ingredient handling, dosing, mixing and dough preparation (`ingredient_and_dough_preparation`)

#### Inputs

##### Product flows

###### Declared ingredients and processing aids (`ingredients_input`)

Record every recipe ingredient and processing aid crossing the bakery gate, including flour or meal, water-bearing ingredients, salt, yeast or other leavening agent, fats, sugars, improvers, inclusions and release agents as applicable. Select the most specific TianGong product flow for each ingredient during foreground package construction.

- Selected flow: Product-specific ingredient flows selected for the declared formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass minus documented return to stores for each ingredient and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_and_packaging_records`
- Sources: `federation-of-bakers-production-methods`
- Range: Provisional replaceable ingredient-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2.0
  - Unit: kg/kg finished product
  - Basis: total ingredients excluding formulation water per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formulation water (`formulation_water`)

Record water incorporated into the dough or batter separately from cleaning and utility water.

- Selected flow: Process water appropriate to the site supply
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-sheet formulation water corrected for returned or discarded batch water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_records`
- Sources: `federation-of-bakers-production-methods`
- Range: Provisional replaceable formulation-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.2
  - Unit: kg/kg finished product
  - Basis: formulation water added per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mixing and preparation electricity (`preparation_electricity`)

Record electricity for ingredient handling, dosing, mixing, kneading, pumps, compressed air and local temperature control where separately metered or allocated.

- Selected flow: Site-specific purchased or on-site electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Meter reading or equipment runtime multiplied by measured power, less excluded loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-bat-food-drink-milk-2019`
- Range: Provisional replaceable preparation-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kWh/kg finished product
  - Basis: preparation electricity per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is required by default. Returned rework entering across the foreground boundary shall be recorded as a product input with source, ownership and avoided-recursion treatment disclosed.

##### Elementary flows

No elementary input is prescribed. Water drawn directly from the environment shall be recorded as an elementary input rather than as purchased process water.

#### Outputs

##### Product flows

###### Prepared dough, batter or formed intermediate (`prepared_intermediate`)

Record the measured mass delivered to forming, fermentation, proofing or thermal processing.

- Selected flow: Prepared dough or product-specific intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass, or calculated mass balance only when direct weighing is impracticable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_and_loss_records`
- Sources: `federation-of-bakers-production-methods`
- Range: Provisional replaceable intermediate-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.7
  - Upper: 2.2
  - Unit: kg/kg finished product
  - Basis: prepared intermediate per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Ingredient spills, expired materials and unrecoverable dough (`preparation_waste`)

Record losses by material and destination; keep hygienically reusable internal rework out of waste and disclose its loop.

- Selected flow: Material-specific food or ingredient waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste leaving preparation, net of documented internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_loss_records`
- Sources: `eu-jrc-food-beverage-bemp-2018`
- Range: Provisional replaceable preparation-waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg finished product
  - Basis: preparation waste per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Ingredient dust released to air (`ingredient_dust_air`)

Record measured or calculated flour and ingredient dust that crosses the air-emission boundary after capture and abatement; captured dust leaving as waste is not duplicated here.

- Selected flow: Substance-specific particulate or dust elementary flow
- Flow property / unit: Mass / kg
- Amount rule: Measured emitted mass or calculated value from air-flow and concentration records after abatement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-bat-food-drink-milk-2019`
- Range: Provisional replaceable dust-emission QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg finished product
  - Basis: emitted ingredient dust per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Forming, conditional fermentation or proofing, baking or thermal setting, and cooling (`baking_and_cooling`)

#### Inputs

##### Product flows

###### Prepared dough, batter or formed intermediate (`thermal_feed_intermediate`)

Record the intermediate transferred from preparation without duplicating its upstream burden.

- Selected flow: Prepared dough or product-specific intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: Equal to the recorded output of `prepared_intermediate` after documented transfer differences
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_and_loss_records`
- Sources: `federation-of-bakers-production-methods`
- Range: Provisional replaceable prepared-intermediate transfer QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.7
  - Upper: 2.2
  - Unit: kg/kg finished product
  - Basis: prepared dough, batter or formed intermediate transferred per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Baking fuel or purchased heat (`baking_thermal_energy`)

Record each fuel or purchased-heat carrier separately, including oven, proofing, drying and heat-recovery effects.

- Selected flow: Carrier-specific fuel, steam or heat flow
- Flow property / unit: Energy / MJ, or carrier-specific mass or volume with conversion retained
- Amount rule: Metered consumption or tank/invoice balance allocated to the product line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-bat-food-drink-milk-2019`; `federation-of-bakers-production-methods`
- Range: Provisional replaceable thermal-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: MJ/kg finished product
  - Basis: oven, proofing and drying thermal energy per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Baking, forming and cooling electricity (`baking_electricity`)

Record electricity for dividing, moulding, proofing controls, ovens, fans, conveyors and cooling equipment.

- Selected flow: Site-specific purchased or on-site electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Meter reading or equipment runtime multiplied by measured power, less excluded loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-bat-food-drink-milk-2019`; `federation-of-bakers-production-methods`
- Range: Provisional replaceable baking-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3.0
  - Unit: kWh/kg finished product
  - Basis: forming, proofing, baking and cooling electricity per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is required by default.

##### Elementary flows

No elementary input is prescribed beyond any directly abstracted water or air that the facility reports as crossing the environment boundary.

#### Outputs

##### Product flows

###### Cooled conforming baker's ware before optional finishing (`cooled_bakers_ware`)

Record product mass after baking or thermal setting and cooling, before optional slicing, packaging or controlled storage.

- Selected flow: Bread `82f5df4a-9ada-46d2-8686-b3b1265a8188`
- Flow property / unit: Mass / kg
- Amount rule: Weighed cooled conforming output, with moisture state and lot linkage retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_and_quality`
- Sources: `federation-of-bakers-production-methods`
- Range: Provisional replaceable cooled-product QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.3
  - Unit: kg/kg finished product
  - Basis: cooled conforming intermediate before finishing per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Off-specification, burned or dropped product (`baking_rejects`)

Record rejected product separately from reusable rework and state its treatment or destination.

- Selected flow: Product-specific bakery waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejects leaving the process, net of documented internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_loss_records`
- Sources: `eu-jrc-food-beverage-bemp-2018`
- Range: Provisional replaceable baking-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg finished product
  - Basis: baking and cooling rejects per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct combustion and process emissions to air (`direct_air_emissions`)

Record each emitted substance separately when fuel is combusted on site or monitored process emissions occur. Biogenic fermentation carbon dioxide may be reported separately when required by the study method, but shall not be confused with fossil combustion carbon dioxide.

- Selected flow: Substance-specific elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: Measured mass or calculated mass from metered carrier consumption and a documented facility or regulatory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-bat-food-drink-milk-2019`
- Range: Provisional replaceable substance-level emission QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.0
  - Unit: kg emitted substance/kg finished product
  - Basis: each separately identified direct air emission per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Slicing, other finishing, packaging and controlled storage (`finishing_packaging_and_storage`)

#### Inputs

##### Product flows

###### Cooled baker's ware transferred for finishing (`cooled_product_input`)

Record the cooled product entering optional finishing, packaging or storage.

- Selected flow: Bread `82f5df4a-9ada-46d2-8686-b3b1265a8188`
- Flow property / unit: Mass / kg
- Amount rule: Equal to transferred `cooled_bakers_ware` after documented transfer losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output_and_quality`
- Sources: `federation-of-bakers-production-methods`
- Range: Provisional replaceable cooled-product transfer QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.3
  - Unit: kg/kg finished product
  - Basis: cooled baker's ware transferred per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary and product-attributable tertiary packaging by material and measured mass.

- Selected flow: Material-specific packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: Issued packaging mass minus returned unused packaging, reconciled to packaged units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product, packaging mass excluded from reference amount
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_and_packaging_records`
- Sources: `eu-jrc-food-beverage-bemp-2018`
- Range: Provisional replaceable packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg finished product
  - Basis: packaging material per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing, packaging and storage electricity (`finishing_storage_electricity`)

Record electricity for slicing, coating or filling equipment, packaging lines, conveyors, metal detection and controlled or frozen storage before dispatch.

- Selected flow: Site-specific purchased or on-site electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Meter reading or equipment runtime multiplied by measured power; storage electricity shall use actual storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-food-beverage-bemp-2018`
- Range: Provisional replaceable finishing-and-storage electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.0
  - Unit: kWh/kg finished product
  - Basis: finishing, packaging and declared pre-dispatch storage per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is required by default.

##### Elementary flows

No elementary input is prescribed. Refrigerant makeup is a product input; measured refrigerant leakage is an elementary output.

#### Outputs

##### Product flows

###### Finished reference bread or baker's ware (`reference_product_output`)

This is the quantitative reference output. Record conforming net product mass after all included finishing and before factory-gate dispatch.

- Selected flow: Bread `82f5df4a-9ada-46d2-8686-b3b1265a8188`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net finished product; packaging mass excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `iso-14044-2006`
- Range: Reference-output consistency check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: net finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Packaging trim and rejected packaging (`packaging_waste`)

Record packaging trim, damaged packs and unused material leaving the foreground by material and destination.

- Selected flow: Material-specific packaging waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed packaging waste, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_loss_records`
- Sources: `eu-jrc-food-beverage-bemp-2018`
- Range: Provisional replaceable packaging-waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg finished product
  - Basis: packaging waste per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing rejects and unsaleable product (`finishing_rejects`)

Record slicing crumbs, trim and rejected finished units by whether they are internally reworked, sold as a co-product, donated, used as feed, digested, composted or discarded.

- Selected flow: Product-specific bakery waste or co-product flow according to verified destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed output by destination, excluding material returned to an internal rework loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_loss_records`
- Sources: `eu-jrc-food-beverage-bemp-2018`
- Range: Provisional replaceable finishing-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg finished product
  - Basis: finishing rejects per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant leakage to air (`refrigerant_leakage`)

Record each refrigerant emitted during controlled storage or cooling from charge reconciliation or service records. Use zero with evidence when no refrigerant system is in the foreground.

- Selected flow: Refrigerant-specific elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated leakage from opening and closing charge, additions, recovery and documented transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-jrc-food-beverage-bemp-2018`
- Range: Provisional replaceable refrigerant-leakage QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg finished product
  - Basis: each refrigerant emitted per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Shared utilities, sanitation and cleaning (`site_utilities_and_cleaning`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cleaning_water`)

Record water used for wet cleaning, sanitation, rinsing and product-attributable utility services separately from formulation water.

- Selected flow: Process water appropriate to the site supply
- Flow property / unit: Mass / kg
- Amount rule: Metered cleaning water or allocated measured site water after excluding non-production uses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_records`
- Sources: `eu-bat-food-drink-milk-2019`
- Range: Provisional replaceable cleaning-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg finished product
  - Basis: cleaning and sanitation water per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning chemicals and consumables (`cleaning_chemicals`)

Record detergents, disinfectants and other cleaning consumables by formulated product mass and concentration.

- Selected flow: Chemical-specific cleaning product flow
- Flow property / unit: Mass / kg
- Amount rule: Issued quantity minus returns, apportioned using cleaning-event or line records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-bat-food-drink-milk-2019`
- Range: Provisional replaceable cleaning-chemical QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg finished product
  - Basis: formulated cleaning product per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared utility energy (`shared_utility_energy`)

Record product-attributable energy for compressed air, ventilation, dust control, water treatment, boilers and other shared services not already assigned to a production process.

- Selected flow: Carrier-specific electricity, fuel, steam or heat flow
- Flow property / unit: kWh, MJ or carrier-specific mass/volume
- Amount rule: Metered shared consumption allocated by documented causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-bat-food-drink-milk-2019`
- Range: Provisional replaceable shared-utility QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3.0
  - Unit: kWh/kg finished product
  - Basis: electricity-equivalent screening only; inventory retains original carriers per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is required by default. Imported waste treatment is outside the bakery foreground unless the facility operates that treatment.

##### Elementary flows

Directly abstracted water shall be recorded as an elementary input with source compartment and location rather than duplicated as purchased water.

#### Outputs

##### Product flows

No product output is required. Recovered water, heat or material exported as a product shall be separately recorded and reviewed for co-product treatment.

##### Waste flows

###### Wastewater sent to treatment (`wastewater_output`)

Record wastewater quantity and, where relevant, pollutant loads by destination. Water sent to an on-site treatment process remains inside the foreground until the treatment output crosses the boundary.

- Selected flow: Site- and treatment-specific wastewater flow
- Flow property / unit: Mass or volume / kg or m3, with density conversion documented
- Amount rule: Metered discharge or water balance, with recirculated water and uncontaminated segregated streams identified
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-bat-food-drink-milk-2019`
- Range: Provisional replaceable wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg finished product
  - Basis: wastewater leaving the foreground per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Treatment residues and general production waste (`support_waste`)

Record sludge, spent filters, captured dust, cleaning residues and other wastes by material and verified destination.

- Selected flow: Waste-specific flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed output or documented waste-manifest quantity allocated to the reporting product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_destination_records`
- Sources: `eu-bat-food-drink-milk-2019`; `eu-jrc-food-beverage-bemp-2018`
- Range: Provisional replaceable support-waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg finished product
  - Basis: support-process waste per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### On-site wastewater-treatment emissions (`wastewater_treatment_emissions`)

When wastewater is treated on site, record monitored releases to water and air by substance after treatment. Do not duplicate burdens represented in an external treatment dataset.

- Selected flow: Substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by measured concentration, or direct mass-load measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-bat-food-drink-milk-2019`
- Range: Provisional replaceable substance-level wastewater-emission QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg emitted substance/kg finished product
  - Basis: each separately identified treated-water emission per 1 kg finished reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | multi-product lines and shared processes | First avoid allocation by metering, temporal separation, recipe or line subdivision, or another technically justified causal split. Preserve measured product-specific ingredient, yield and energy records whenever available. | `iso-14044-2006` |
| `allocation_internal_rework` | dough, crumbs, trim and returned same-site material | Treat material returned to the same production system as an internal loop. Do not create a co-product credit or duplicate the upstream product burden; disclose quality limits and any additional reprocessing inputs. | `iso-14044-2006`; `eu-jrc-food-beverage-bemp-2018` |
| `allocation_saleable_co_products` | saleable crumbs, animal-feed material, recovered heat or other outputs with economic value | When subdivision cannot resolve shared burdens, allocate according to a documented physical relationship that reflects the way inputs and outputs change. Use economic allocation only when no defensible physical relationship exists, and report quantities, prices, reference period and a sensitivity result. | `iso-14044-2006`; `international-epd-gpi-5-0-1` |
| `allocation_waste_no_avoided_burden` | outputs legally or operationally managed as waste | Assign bakery operations up to the waste boundary to the reference product unless an applicable method explicitly defines another rule. Link transport and treatment burdens without assuming an avoided-product credit merely because the waste is recovered. | `international-epd-gpi-5-0-1`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_and_packaging_records` | `ingredient_and_dough_preparation`; `finishing_packaging_and_storage` | ingredients and packaging | receiving, invoice, recipe, issue and return records | material id; supplier; lot; issued quantity; returned quantity; moisture or concentration; packaging material; packaged units | Calibrated scale records reconciled with purchasing and stock movement | kg | Each lot or production batch | Representative continuous 12-month period, or justified seasonal campaign | Every included bakery and warehouse | Sum net issued mass by material and divide by conforming reference-product mass | Scale calibration; stock reconciliation; supplier specification; exception log |
| `cp_process_water_records` | `ingredient_and_dough_preparation`; `site_utilities_and_cleaning` | formulation and cleaning water | meter and batch records | meter opening and closing; batch additions; return; reuse; source; density | Read line or submeter and batch controller; allocate only unmetered shared water by documented causal driver | kg or m3 | Each batch and monthly meter reconciliation | Same period as product output | Every included site and water source | Separate formulation, cleaning, cooling and directly abstracted water before normalization | Meter calibration; water balance; reuse register |
| `cp_energy_records` | all processes | electricity, fuel, steam and heat | meter, invoice, fuel and operating records | meter readings; invoices; tank balance; runtime; power; carrier; conversion factor; heat recovery | Use line or equipment meters first, then a documented causal allocation from site meters | kWh, MJ, kg or m3 by carrier | Continuous or each batch; monthly reconciliation | Same period as product output, covering seasonality | Every included meter and on-site generation unit | Retain carriers separately; subtract exported energy and excluded loads; normalize by conforming product | Meter calibration; invoices; runtime logs; conversion-factor source; balance check |
| `cp_yield_and_loss_records` | all production processes | intermediate yield, rework, rejects and waste | production and waste records | input mass; intermediate mass; conforming output; rework; reject; waste; destination; moisture | Calibrated scales and production or waste-management records | kg | Each batch or daily line total | Same period as product output | Every included product line | Reconcile mass by lot or defined campaign; internal rework is a loop, not waste | Scale calibration; batch genealogy; waste tickets; residual investigation |
| `cp_product_output_and_quality` | `baking_and_cooling`; `finishing_packaging_and_storage` | reference product and intermediate | production and quality-release records | product id; subgroup; recipe; lot; net mass; moisture; temperature; quality status; packaging; storage duration | Calibrated checkweigher or scale plus product-quality release record | kg and product-specific quality units | Each lot | Same period as all foreground inputs | Every included line and product family | Sum released net product mass only; reject or hold mass remains separate | Calibration; release certificate; moisture method; traceability record |
| `cp_direct_emission_records` | `ingredient_and_dough_preparation`; `baking_and_cooling`; `finishing_packaging_and_storage` | dust, combustion, process and refrigerant emissions | monitoring, calculation and service records | substance; compartment; concentration; flow; runtime; fuel; factor; charge; additions; recovery | Direct monitoring where required; otherwise calculate from collected activity and documented factor | kg by substance | Monitoring or service event; at least annual reconciliation | Same period as activity data | Every relevant stack, oven, refrigerant circuit and abatement unit | Calculate substance-specific mass; preserve biogenic and fossil carbon identities | Laboratory or monitor QA; factor source; service log; abatement status |
| `cp_cleaning_records` | `site_utilities_and_cleaning` | cleaning chemicals and events | issue and sanitation records | chemical id; concentration; issue; return; cleaning line; duration; production allocation driver | Chemical issue records and sanitation log linked to line or area | kg formulated product and kg active substance where required | Each cleaning event | Same period as product output | Every included production and support area | Sum product-attributable consumption; keep concentration and active-substance conversion | Supplier specification; issue reconciliation; sanitation completion log |
| `cp_water_and_wastewater_records` | `site_utilities_and_cleaning` | wastewater and monitored water emissions | discharge-meter, sampling and analytical records | discharge flow; pH; temperature; COD or TOC; BOD; nitrogen; phosphorus; suspended solids; substance concentrations; reuse | Metered discharge and accredited or controlled sampling according to permit and process variability | m3, kg and mg/L as applicable | Continuous flow; analytical frequency justified by permit and variability | Same period as product output | Every discharge and on-site treatment unit | Flow-weight concentrations to mass loads; separate reused, uncontaminated and treated streams | Meter and laboratory QA; sample plan; permit record; water balance |
| `cp_waste_destination_records` | all processes | exported waste and treatment residues | waste-transfer and destination records | material; mass; hazardous status; transporter; destination; treatment; recovery status | Weighbridge, container weights and waste transfer documentation | kg | Each shipment; monthly reconciliation | Same period as product output | Every included site and contractor | Sum by material and verified destination; do not infer avoided burden from destination label | Waste manifest; contractor receipt; scale record; destination verification |
| `cp_shared_allocation_records` | all processes | shared facility burdens and co-products | allocation and production records | shared input; driver; product output; co-product output; prices; period; subdivision evidence | Meter, production, time, area or other causal driver linked to each product family | driver-specific | Monthly and at reporting-period close | Same period as product output | Every shared process and included product family | Apply the approved hierarchy; totals before and after allocation must reconcile | Driver justification; source records; sensitivity calculation; allocation reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | every inventory row | normalized amount = reporting-period row quantity / reporting-period conforming net reference-product mass | Collected row quantity; released product mass | Row quantity per 1 kg finished product | `iso-14044-2006` |
| `calc_net_reference_product` | reference product | net reference-product mass excludes all packaging and excludes rejected, held or returned product not released at the factory gate | Checkweigher or scale mass; packaging mass; quality-release status | Conforming net product mass | `iso-14044-2006` |
| `calc_mass_balance` | each lot or justified production campaign | residual = total mass inputs - finished product - saleable co-products - exported waste - measured emissions - documented evaporation or fermentation loss - closing work in progress + opening work in progress | Ingredient, water, intermediate, output, waste, emission and stock records | Absolute and percentage residual with disposition | `eu-bat-food-drink-milk-2019`; `iso-14044-2006` |
| `calc_energy_conversion` | energy carriers | Convert only where needed using a documented net or gross calorific value consistent with the selected upstream dataset; retain original metered quantity and conversion basis | Carrier quantity; calorific value; electricity reading; purchased heat | Carrier-specific energy normalized to reference product | `eu-bat-food-drink-milk-2019` |
| `calc_direct_emissions` | direct air and water emissions | substance mass = measured concentration × measured flow integrated over the period, or collected activity × documented factor when direct measurement is unavailable | Concentration; flow; runtime; fuel or activity; factor | kg emitted substance per 1 kg finished product | `eu-bat-food-drink-milk-2019` |
| `calc_shared_utility_allocation` | shared utilities and cleaning | Prefer direct metering; otherwise multiply shared total by a causal driver share such as equipment time, cleaned area, line throughput or measured demand, then reconcile allocated totals to the shared total | Shared total; product-specific driver; total driver | Product-attributable shared input | `iso-14044-2006`; `eu-bat-food-drink-milk-2019` |
| `calc_co_product_allocation` | unavoidable multifunctionality | Apply documented physical allocation; if no defensible physical relation exists, economic share = co-product revenue / total revenue over a representative period and report sensitivity | Co-product masses; physical driver; prices; reporting period | Allocated burdens and sensitivity result | `iso-14044-2006`; `international-epd-gpi-5-0-1` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | product, ingredients and packaging | Maintain product subgroup, recipe family, lot, supplier and material identity from receipt through released reference product. | Batch genealogy; supplier specifications; recipe and release records |
| `dq_measurement_control` | mass, water, energy and emissions | Use calibrated or controlled measurement systems, retain units and original readings, and document conversion factors and missing-data substitutions. | Calibration certificates; meter QA; laboratory QA; conversion-factor register |
| `dq_temporal_representativeness` | all foreground data | Use a continuous 12-month period that captures seasonality, or a complete justified campaign for seasonal products; align numerator and denominator periods. | Reporting-period declaration; production calendar; meter and inventory timestamps |
| `dq_site_and_technology_coverage` | multi-site or multi-line datasets | Cover every declared site and material technology route; weight aggregation by conforming net product mass and disclose omitted sites or routes. | Site list; line inventory; weighted aggregation workbook; omission justification |
| `dq_completeness_and_balances` | material, water and energy inventory | Reconcile ingredient/product mass, site water and purchased/on-site energy. Investigate material residuals and unassigned shared consumption rather than silently scaling them away. | Mass, water and energy balances; exception log; corrective-action record |
| `dq_upstream_representativeness` | linked background datasets | Match ingredient or carrier identity, geography, technology and time as closely as practicable; disclose proxy datasets and material gaps. | Dataset mapping table; proxy justification; source metadata |
| `dq_reasoned_estimate_replacement` | all provisional QA ranges in this candidate PCR | Treat every `reasoned_estimate` range as a non-mandatory, replaceable screening guardrail. It shall not replace foreground records or be presented as an observed industry benchmark. | Range review log; foreground comparison; replacement source or reviewer acceptance |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow and product metadata | Fail validation when the reference product is not a semantically included CPC 23490 ware, when the product subgroup or market state is missing, or when the reference quantity is not 1 kg net finished product excluding packaging. | `unsd-cpc-3-0-23490` |
| `validate_required_qualifiers` | foreground data package | Fail validation when any required qualifier is absent, ambiguous or inconsistent across product metadata, the reference flow and process records. | `unsd-cpc-3-0-23490`; `federation-of-bakers-production-methods` |
| `validate_process_coverage` | process map and inventory | Require ingredient and dough preparation, baking or equivalent thermal setting and cooling, and site utilities and cleaning. Require explicit inclusion or justified exclusion of fermentation/proofing, finishing, packaging and controlled storage. | `federation-of-bakers-production-methods`; `eu-jrc-food-beverage-bemp-2018` |
| `validate_mass_and_period_balance` | material inventory | Require numerator and denominator period alignment, product/reject/rework separation and a disclosed mass-balance residual. Flag unexplained negative amounts, duplicate rework, packaging included in reference mass or unexplained residuals above the facility's documented investigation threshold. | `iso-14044-2006`; `eu-bat-food-drink-milk-2019` |
| `validate_energy_water_and_emissions` | utilities and direct releases | Require energy carriers to remain separately identified, formulation water to be separated from cleaning water, and on-site air or water emissions to be substance- and compartment-specific without duplication of external treatment datasets. | `eu-bat-food-drink-milk-2019` |
| `validate_allocation_and_proxies` | shared burdens, co-products and background links | Require the allocation hierarchy, causal driver, reconciliation and sensitivity where economic allocation is used; require every proxy or geographically mismatched upstream dataset to be disclosed. | `iso-14044-2006`; `international-epd-gpi-5-0-1` |
| `validate_provisional_ranges` | QA screening ranges | A value outside a provisional `reasoned_estimate` range triggers investigation, not automatic rejection. Validation shall report that these broad ranges are temporary authoring estimates and shall prefer collected records and reviewed source-backed replacements. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground bakery production dataset normalized to 1 kg net finished bread or other included baker's ware at the factory gate |
| downstream_use | `secondary_dataset`; `background_dataset` after independent methodology review, identity review and publication controls |
| allowed_use | Product carbon-footprint or LCA modelling of declared CPC 23490 products when geography, recipe, market state, technology, reference period, packaging and boundary are compatible |
| excluded_use | Direct comparison of different product functions, moisture states, shelf lives or packaging formats without equivalence review; use for excluded bakery categories; nutritional, food-safety or legal conformity claims; use of candidate QA ranges as industry benchmarks |
| required_metadata | Canonical PCR id and version; product subgroup; recipe family; base cereal or flour; leavening and fermentation route; market and moisture state; packaging; facility and geography; technology and oven route; reporting period; shelf life or storage duration; allocation choices; upstream dataset mapping |
| required_quality_disclosure | Site and line coverage; mass, water and energy balances; measurement and calibration evidence; temporal coverage; missing data; proxy datasets; rework and waste destinations; allocation sensitivity; all provisional `reasoned_estimate` uses and replacements |
| update_trigger | Recipe or product-subgroup change; greater than material change in technology, oven, fuel, energy source, preservation, packaging, site mix or allocation; new current bakery PCR/c-PCR; changed reference-flow identity; new source-backed evidence replacing provisional ranges; reporting data older than the programme's accepted representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-23490` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 23490 Bread and other bakers' wares, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-10 | Authoritative semantic inclusion and exclusion boundary for CPC 23490 |
| `international-epd-bakery-pcr-2012-06` | `standard` | International EPD System, PCR 2012:06 Bakery products, version 3.0.4, expired, https://environdec.com/pcr-library/pcr2012-06, retrieved 2026-08-10 | Historical bakery PCR scope and evidence that CPC 234 included CPC 2349; not used as a current mandatory programme rule |
| `international-epd-gpi-5-0-1` | `standard` | International EPD System, General Programme Instructions 5.0.1, https://www.environdec.com/resources/general-programme-instructions, retrieved 2026-08-10 | Current programme-level allocation, data-quality transparency and EPD governance context |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including published amendments, https://www.iso.org/standard/38498.html, retrieved 2026-08-10 | LCA goal and scope, inventory, allocation, reporting, review and consistency principles |
| `eu-bat-food-drink-milk-2019` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj, retrieved 2026-08-10 | Process flow sheets; inventories and monitoring of raw materials, water, energy, wastewater, waste gas and resource efficiency |
| `eu-jrc-food-beverage-bemp-2018` | `official_guidance` | European Commission Joint Research Centre, Best Environmental Management Practice for the Food and Beverage Manufacturing Sector, JRC113418, EUR 29382 EN, DOI 10.2760/2115, https://publications.jrc.ec.europa.eu/repository/handle/JRC113418, retrieved 2026-08-10 | Food-manufacturing environmental management, cleaning, energy, refrigeration, transport, food-waste prevention and bread/biscuit/cake subsector practices |
| `federation-of-bakers-production-methods` | `extension_guidance` | Federation of Bakers, Production methods, https://www.fob.uk.com/about-the-bread-industry/how-bread-is-made/production-methods/, retrieved 2026-08-10 | Bread ingredient set and process decomposition: mixing, fermentation/proving, dividing, baking, cooling and slicing |
