---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pastry-goods-and-cakes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pastry goods and cakes

## 1. Scope and Applicability

This PCR defines foreground data-production rules for pastry goods and cakes supplied as fresh or preserved, ready-to-eat products at the manufacturing gate. It covers product-specific weighing and preparation of ingredients, mixing, forming, filling or layering, conditional resting or fermentation, thermal processing such as baking, steaming or frying, cooling, finishing, packaging, cleaning, utilities, and conditional controlled storage.

The category includes filled and unfilled pastries, cakes, Chinese pastries, and comparable products whose finished identity is a pastry good or cake. It excludes bread and other bakers' wares classified outside this category, biscuits, waffles, wafers, gingerbread, confectionery, raw dough sold as an intermediate, and food-service preparation after the packaged product leaves the manufacturing gate.

The Tiangong product flow `Chinese Pastry / 中式糕点` is the selected representative reference identity. It demonstrates a relevant product within the category but does not define a default recipe, filling, leavening route, technology, package, or market mix. Every foreground data package shall therefore use product- and formulation-specific collection and shall disclose whether the represented product is yeast-leavened, chemically leavened, unleavened, baked, steamed, fried, filled, coated, chilled, frozen, or ambient-stable.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pastry-goods-and-cakes |
| classification_refs | CPC 3.0: 23430, Pastry goods and cakes, exact scope context |
| covered_products | Fresh or preserved pastry goods and cakes, including filled or unfilled pastries, cakes, and Chinese pastries, when delivered as finished food products |
| excluded_products | Bread and other bakers' wares outside the category; gingerbread, sweet biscuits, waffles and wafers; confectionery; raw dough sold as an intermediate; food-service preparation |
| representative_product | Chinese Pastry / 中式糕点; representative identity only, not a representative recipe or quantitative default |
| production_route | Ingredient receipt and weighing; mixing; forming/filling; conditional resting or fermentation; baking, steaming, frying, or other thermal setting; cooling/finishing; packaging; cleaning and utilities; conditional controlled storage |
| market_state | Net saleable finished product at the manufacturing gate, with preservation, package format, and storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared pastry good or cake that is safe, saleable, and ready for the stated market and storage condition |
| How much | 1 kg net product mass, excluding secondary and tertiary transport packaging unless explicitly included in the declared product |
| How well | Conforming to the declared product specification, formulation, filling or topping, moisture/preservation state, package format, and applicable food-safety requirements |
| How long or cycle | One completed production and packaging cycle to the manufacturing gate; shelf life is a required qualifier but is not a service-duration multiplier |
| reference_flow_link | The reference flow is the 1 kg net saleable output of `cooling_finishing_and_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable pastry good or cake |
| Reference product flow | Chinese Pastry / 中式糕点 `06ce1f04-75f8-43b5-bea0-af398fdd46b4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; recipe/formulation identifier; ingredient and allergen profile; filling/topping/coating; leavening route; thermal process route; net moisture or preservation state; package format and included packaging layers; production site and geography; storage condition and shelf life; represented production period; allocation choices |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported amounts to 1 kg net saleable finished product; exclude transport packaging from net product mass and report included packaging separately. |
| `batch_normalization` | Batch and line records | Mass | kg/kg reference product | Divide batch inputs, outputs, losses, utilities, and emissions by measured net conforming product output from the same represented batch or reconciled period. |
| `recipe_mass_basis` | Ingredients and process water | Mass | kg | Record actual as-used ingredient mass, including added water, fillings, coatings, decorations, processing aids retained in product, and recirculated material; distinguish dry-matter or concentrate conversions explicitly. |
| `energy_carrier_separation` | Electricity, steam, fuels, and heat | Energy or fuel mass/volume | kWh, MJ, kg, or m3 | Preserve measured carrier and unit; convert only with a documented factor and do not combine electricity with thermal energy before inventory modelling. |
| `packaging_mass_separation` | Primary, secondary, and tertiary packaging | Mass | kg | Record each material and packaging level separately and state which levels are inside the declared manufacturing-gate boundary. |
| `moisture_and_yield_consistency` | Prepared mix, thermally processed product, and finished product | Mass | kg | Reconcile moisture change, retained filling/coating, rejects, rework, and saleable output so that yield and mass-balance calculations use the same product state. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients, processing aids, packaging materials, utilities, and purchased intermediates received at the manufacturing site with quantity, supplier/geography, and incoming product state declared |
| starting_condition_role | Incoming product and utility inputs to the foreground manufacturing system |
| product_classification_scope | Pastry goods and cakes as a semantic product category; CPC 3.0 code 23430 is classification context and does not by itself establish an accepted mapping |
| recursive_input_rule | A purchased pastry good or cake used as an ingredient or intermediate is recorded once as an incoming product flow with an upstream supplier-gate dataset; do not recursively reproduce its manufacturing processes inside the receiving foreground system |
| upstream_dataset_requirement | Link representative upstream datasets for flour and other cereals, sugar/syrups, fats/oils, eggs, dairy, nuts/seeds, cocoa/fruit/fillings, additives, packaging, electricity, fuels/heat, water supply, wastewater and waste treatment, and transport included by the study |
| disclosure | Declare recipe/formulation, production route and equipment, site/geography, product and package state, represented period and product mix, yields and rework, energy and water coverage, direct emissions, waste treatment, cold-chain condition, and allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | Foreground manufacturing | Include all foreground operations from receipt and weighing of ingredients through net saleable packaged product at the manufacturing gate, including cleaning, utilities, rejects, wastewater, direct emissions, and onsite treatment. | `epd-food-beverage-pcr-2025-03`; `eu-fdm-bref-2019` |
| `boundary_upstream_links` | Purchased inputs | Represent upstream raw-material, energy, water, packaging, transport, and treatment burdens through linked datasets; do not treat purchased inputs as burden-free. | `eu-pef-2021-2279` |
| `boundary_downstream_default` | Distribution, retail, use, and end of life | Exclude downstream stages from this foreground manufacturing package unless the declared study explicitly extends the boundary; any extension shall report the additional stages separately. | `eu-pef-2021-2279`; `epd-food-beverage-pcr-2025-03` |
| `boundary_route_conditionals` | Product-specific operations | Include fermentation/proofing, frying, chilling/freezing, filling/coating, controlled storage, and emission controls only when the represented formulation and route use them; record non-applicability explicitly. | `us-epa-bakery-act-1992`; `eu-fdm-bref-2019` |
| `boundary_product_specificity` | Representative product | Do not apply the Chinese Pastry identity as a default recipe or inventory; collect product-, formulation-, site-, and period-specific foreground data. | `china-gb-7099-2015`; `china-gb-8957-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formulation_and_mixing` | Formulation, weighing, and mixing | required | Always included | Convert measured recipe inputs into prepared batter, dough, or pastry mass | kg prepared mass |
| `fermentation_and_resting` | Fermentation, proofing, or controlled resting | conditional | Include when the declared formulation requires yeast action, proofing, resting, lamination conditioning, or controlled temperature/humidity | Condition prepared mass before thermal processing | kg conditioned mass |
| `forming_and_thermal_processing` | Forming, filling, and thermal processing | required | Always included; select the actual baking, steaming, frying, or other route | Produce thermally set pastry or cake and capture process losses and direct emissions | kg thermally processed product |
| `cooling_finishing_and_packaging` | Cooling, finishing, and packaging | required | Always included | Produce the net saleable reference product and packaging inventory | 1 kg net saleable product |
| `cleaning_and_utility_support` | Cleaning, sanitation, and utility support | required | Always included and allocated to represented production | Capture process water, cleaning agents, utility use, wastewater, and residues | kg net saleable product supported |
| `conditioned_storage` | Chilled, frozen, or humidity-controlled onsite storage | conditional | Include when controlled storage occurs before the manufacturing gate | Maintain declared product state before dispatch | kg product × declared storage duration |

### Process: Formulation, weighing, and mixing (`formulation_and_mixing`)

#### Inputs

##### Product flows

###### Product-specific recipe ingredients (`recipe_ingredients`)

Record each actual ingredient separately from batch formulation and issue records, including flour/starch, sugars/syrups, fats/oils, eggs, dairy, nuts/seeds, fruit/cocoa, fillings, leavening agents, additives, salt, and retained processing aids.

- Selected flow: Product-specific ingredient flow; UUID selected during foreground package construction
- Flow property / unit: Mass / kg
- Amount rule: Measured as-used mass issued to the represented batch or reconciled production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `epd-food-beverage-pcr-2025-03`
- Range: Provisional recipe-input mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2.5
  - Unit: kg ingredients/kg net saleable product
  - Basis: aggregate as-used ingredient mass before moisture loss and waste
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Added recipe and process water (`recipe_water`)

Record water intentionally added to batter, dough, syrup, fillings, steam contact, or other product-forming steps separately from cleaning water.

- Selected flow: Process water; UUID selected during foreground package construction
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-formula water added to the product-forming process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional added-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg water/kg net saleable product
  - Basis: water added before product moisture loss
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mixing electricity (`mixing_electricity`)

Record electricity for weighing, conveying, sieving, mixing, whipping, milling, pumping, and local controls.

- Selected flow: Site electricity supply; UUID selected during foreground package construction
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or calculated from measured equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional mixing-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg net saleable product
  - Basis: broad candidate range across manual and mechanized preparation routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared batter, dough, or pastry mass (`prepared_mix`)

Record measured prepared mass transferred to forming, resting, fermentation, or thermal processing.

- Selected flow: Product-specific prepared intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or mass-balance calculation from batch records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Preparation losses and non-reused residues (`preparation_waste`)

Record spilled ingredients, trim, expired premixes, filter residues, and prepared mass not returned as documented rework.

- Selected flow: Product-specific food-production waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste by destination; exclude documented same-product rework returned within the represented system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_and_rework`
- Range: Provisional preparation-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg waste/kg net saleable product
  - Basis: non-reused preparation losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Fermentation, proofing, or controlled resting (`fermentation_and_resting`)

#### Inputs

##### Product flows

###### Prepared product mass for conditioning (`conditioning_input`)

Record the prepared batter or dough entering the conditional conditioning step.

- Selected flow: Product-specific prepared intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `us-epa-bakery-act-1992`

###### Conditioning electricity or heat (`conditioning_energy`)

Record energy for proof boxes, resting rooms, humidity control, dough cooling, or lamination conditioning.

- Selected flow: Site-specific electricity, steam, or heat carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or equipment power/fuel consumption multiplied by operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `us-epa-bakery-act-1992`; `eu-fdm-bref-2019`
- Range: Provisional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh-equivalent/kg net saleable product
  - Basis: broad candidate range for route screening; retain actual carrier in the inventory
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned batter or dough (`conditioned_mix`)

Record conditioned product transferred to forming or thermal processing, with yeast dosage and action time retained when applicable.

- Selected flow: Product-specific conditioned intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_parameters`
- Sources: `us-epa-bakery-act-1992`

##### Waste flows

##### Elementary flows

###### Fermentation carbon dioxide to air (`fermentation_co2`)

For yeast-leavened products, report biogenic carbon dioxide from fermentation when required by the selected modelling method; distinguish it from fossil combustion emissions.

- Selected flow: Carbon dioxide, biogenic, to air; UUID selected during foreground package construction
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from documented fermentation chemistry and recipe records; otherwise disclose as unresolved
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `us-epa-bakery-act-1992`

### Process: Forming, filling, and thermal processing (`forming_and_thermal_processing`)

#### Inputs

##### Product flows

###### Prepared or conditioned product mass (`thermal_process_input`)

Record the mass entering forming, filling, baking, steaming, frying, or other thermal setting.

- Selected flow: Product-specific prepared or conditioned intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg thermally processed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_and_rework`
- Sources: `us-epa-bakery-act-1992`

###### Thermal energy and process fuel (`thermal_energy`)

Record each electricity, steam, gas, oil, biomass, or other energy carrier used for ovens, steamers, fryers, hot plates, and thermal controls separately.

- Selected flow: Site-specific electricity, fuel, steam, or heat carrier
- Flow property / unit: Energy or fuel quantity / kWh, MJ, kg, or m3
- Amount rule: Metered carrier consumption or calculated consumption from calibrated equipment and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional thermal-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ delivered energy/kg net saleable product
  - Basis: broad candidate range across baking, steaming, and frying routes; preserve actual carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frying-oil make-up (`frying_oil_makeup`)

For fried products, record fresh oil charged and net oil retained or removed; report circulation stock separately from net consumption.

- Selected flow: Product-specific frying oil
- Flow property / unit: Mass / kg
- Amount rule: Fresh oil additions minus measured recoverable oil inventory change, reconciled with oil retained in product and spent oil
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Range: Provisional frying-oil screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg net oil input/kg net saleable product
  - Basis: applies only to fried routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Thermally processed pastry or cake (`thermally_processed_product`)

Record measured conforming and nonconforming output after thermal setting and before finishing/packaging.

- Selected flow: Product-specific thermally processed pastry or cake
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass at the declared post-process moisture state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg thermally processed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_and_rework`
- Sources: `china-gb-7099-2015`

##### Waste flows

###### Thermal-processing rejects and spent oil (`thermal_process_waste`)

Record scorched, underprocessed, broken, or contaminated product and spent frying oil separately by treatment destination.

- Selected flow: Product-specific food waste or spent oil waste
- Flow property / unit: Mass / kg
- Amount rule: Measured non-reused waste mass by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_and_rework`
- Range: Provisional thermal-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg waste/kg net saleable product
  - Basis: non-reused thermal-processing losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Bakery-oven volatile organic compounds to air (`oven_voc`)

For yeast-raised baked products within the scope of the cited EPA method, calculate or measure oven VOC emissions from product-specific yeast dosage and action-time records. For other cakes and pastries, do not apply the EPA equation by analogy; use measured or jurisdiction-appropriate evidence or disclose the gap.

- Selected flow: Volatile organic compounds to air; UUID selected during foreground package construction
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or `calc_yeast_baking_voc` when its applicability conditions are satisfied
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `us-epa-ap42-9-9-6`; `us-epa-bakery-act-1992`

### Process: Cooling, finishing, and packaging (`cooling_finishing_and_packaging`)

#### Inputs

##### Product flows

###### Thermally processed product and post-bake components (`finishing_input`)

Record the thermally processed base plus product-specific fillings, coatings, glazes, decorations, and other components added after thermal processing.

- Selected flow: Product-specific thermally processed product and finishing ingredients
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer and addition mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_batch_mass`
- Sources: `china-gb-7099-2015`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and included tertiary packaging by material, component, recycled content, and package level.

- Selected flow: Material-specific packaging flow; UUID selected during foreground package construction
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill of materials reconciled with issued components and packaged saleable units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Sources: `eu-pef-2021-2279`; `epd-food-beverage-pcr-2025-03`
- Range: Provisional packaging-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.6
  - Unit: kg packaging/kg net saleable product
  - Basis: all packaging levels included in the declared manufacturing-gate boundary
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling, finishing, and packaging electricity (`finishing_electricity`)

Record electricity for cooling fans/tunnels, conveyors, pumps, coating, slicing, metal detection, sealing, coding, and packaging equipment.

- Selected flow: Site electricity supply; UUID selected during foreground package construction
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or calculated from measured power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional finishing-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg net saleable product
  - Basis: broad candidate range across ambient and mechanically cooled routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable pastry good or cake (`reference_product`)

This is the quantitative reference output. Record only conforming net product mass and retain package count and gross mass as supporting records.

- Selected flow: Chinese Pastry / 中式糕点 `06ce1f04-75f8-43b5-bea0-af398fdd46b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net saleable finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Finishing rejects and packaging waste (`finishing_packaging_waste`)

Record non-reused product rejects and packaging scrap separately by material and destination.

- Selected flow: Product-specific food waste and material-specific packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by type and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_and_rework`
- Range: Provisional finishing-and-packaging waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg waste/kg net saleable product
  - Basis: non-reused product and packaging waste
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning, sanitation, and utility support (`cleaning_and_utility_support`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cleaning_water`)

Record water used for wet cleaning, rinsing, sanitation, clean-in-place systems, and utility support; distinguish it from recipe water.

- Selected flow: Process water; UUID selected during foreground package construction
- Flow property / unit: Mass / kg or volume / m3
- Amount rule: Metered use or justified allocation from a site meter to represented production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_cleaning_and_wastewater`
- Sources: `eu-fdm-bref-2019`; `china-gb-8957-2016`
- Range: Provisional cleaning-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg water/kg net saleable product
  - Basis: broad candidate range across dry-cleaning and wet-cleaning facilities
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation agents (`cleaning_agents`)

Record formulated detergents, disinfectants, and other cleaning chemicals as purchased products, including concentration used for dilution calculations.

- Selected flow: Product-specific cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: Stock issue or purchase reconciliation corrected for inventory change and dilution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_cleaning_and_wastewater`
- Sources: `china-gb-8957-2016`; `eu-fdm-bref-2019`
- Range: Provisional cleaning-agent screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg formulated agent/kg net saleable product
  - Basis: purchased formulated cleaning and sanitation agents
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater from cleaning and production (`process_wastewater`)

Record discharged wastewater by destination and available pollutant load; keep onsite treatment inputs and sludge in the foreground when present.

- Selected flow: Wastewater to treatment
- Flow property / unit: Mass / kg or volume / m3
- Amount rule: Metered discharge or water balance corrected for product water, evaporation, and other outlets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_cleaning_and_wastewater`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional wastewater-volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg wastewater/kg net saleable product
  - Basis: wastewater leaving the foreground manufacturing system
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Chilled, frozen, or humidity-controlled onsite storage (`conditioned_storage`)

#### Inputs

##### Product flows

###### Storage electricity (`storage_electricity`)

Record electricity for refrigeration, freezing, humidity control, circulation fans, defrosting, and local controls before dispatch.

- Selected flow: Site electricity supply; UUID selected during foreground package construction
- Flow property / unit: Energy / kWh
- Amount rule: Metered use allocated by product occupancy, mass, time, temperature zone, and shared capacity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg net saleable product for the declared onsite storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_and_refrigerant`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional onsite-storage electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh/kg net saleable product
  - Basis: declared onsite controlled-storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Product released from controlled storage (`stored_product`)

Record saleable product released at the same net-mass basis, subtracting storage losses.

- Selected flow: Chinese Pastry / 中式糕点 `06ce1f04-75f8-43b5-bea0-af398fdd46b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured released mass reconciled with storage rejects and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_refrigerant`

##### Waste flows

###### Storage rejects (`storage_rejects`)

Record damaged, temperature-abused, expired, or otherwise rejected product by destination.

- Selected flow: Product-specific food waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_refrigerant`
- Range: Provisional storage-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg reject/kg net saleable product
  - Basis: onsite controlled-storage losses
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant emissions to air (`refrigerant_loss`)

Record refrigerant leakage attributable to controlled storage from maintenance and recharge records, differentiated by refrigerant substance.

- Selected flow: Refrigerant-specific emission to air; UUID selected during foreground package construction
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance or verified recharge loss allocated to represented product storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable product for the declared onsite storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_and_refrigerant`
- Sources: `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared lines, ovens, utilities, cleaning, and packaging | Avoid allocation by collecting batch-, line-, equipment-, or product-specific data and subdividing independently measurable operations. | `eu-pef-2021-2279` |
| `allocation_physical_second` | Unavoidable shared burdens | When subdivision is not feasible, allocate using a documented causal physical relationship such as measured equipment time, delivered energy, cleaned surface/operation, product mass, or controlled-storage occupancy and duration. | `eu-pef-2021-2279` |
| `allocation_other_last` | Remaining multifunctionality | Use another relationship, including economic allocation, only after documenting why subdivision and a relevant physical relationship are not feasible; disclose data period, price basis, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_rework_and_losses` | Rework, rejects, edible residues, and sold by-products | Treat same-product rework returned within the represented system as an internal loop; report net losses. Treat a residue as a co-product only when it leaves with a documented function and destination, and apply the allocation hierarchy. | `epd-food-beverage-pcr-2025-03`; `eu-pef-2021-2279` |
| `allocation_product_mix` | Multiple recipes or package formats | Do not apply an unweighted site average to a specific product. Use product-specific data or a production-mass-weighted mix whose recipes, package formats, quantities, and represented period are disclosed. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_and_batch_mass` | `formulation_and_mixing`; `fermentation_and_resting`; `forming_and_thermal_processing`; `cooling_finishing_and_packaging` | Ingredients, water, intermediate transfers, finishing components, frying oil | Approved recipe, scale record, issue ticket, batch log | product_id; recipe_version; batch_id; ingredient_id; as_used_mass; water_mass; transfer_mass; rework_mass; timestamp | Calibrated scales, dosing meters, and reconciled batch records | kg | Each batch, aggregated for the represented period | Complete declared representative production period and all included recipe variants | All sites and lines represented by the dataset | Sum inputs and transfers by product/recipe; normalize to measured net saleable output; no substitution of the Chinese Pastry description for actual recipe records | Calibration records; recipe approvals; batch reconciliation; exception log |
| `cp_yield_waste_and_rework` | all manufacturing processes | Conforming output, rejects, residues, rework, waste destinations | Scale record, production report, waste manifest | batch_id; process_id; input_mass; conforming_output_mass; rework_in; rework_out; waste_mass; waste_type; destination; moisture_state | Calibrated scales and destination-specific waste records | kg | Each batch or shift | Same period as recipe and output data | Each represented line/site | Reconcile process and overall mass balance; internal rework counted once; normalize net waste by reference output | Scale calibration; signed waste records; mass-balance reconciliation |
| `cp_energy_and_fuel` | `formulation_and_mixing`; `fermentation_and_resting`; `forming_and_thermal_processing`; `cooling_finishing_and_packaging`; `cleaning_and_utility_support` | Electricity, fuels, steam, and delivered heat | Meter, invoice, fuel issue, equipment runtime | meter_id; carrier; opening_reading; closing_reading; fuel_quantity; power; runtime; production_mass; allocation_driver | Submeter preferred; otherwise calibrated runtime model reconciled to site totals | Native carrier unit and kWh or MJ after documented conversion | Continuous, batch, shift, or billing period | Same representative period as production, including relevant seasonal operating conditions | Each represented site and shared utility system | Direct metering first; otherwise allocate by causal driver under section 7 and reconcile to site totals | Meter calibration; invoices; conversion factors; reconciliation residual and explanation |
| `cp_packaging_bom` | `cooling_finishing_and_packaging` | Packaging materials and scrap | Packaging BOM, issue record, unit count, scrap record | product_id; package_format; component_id; material; unit_mass; units_used; recycled_content; scrap_mass; packaging_level | Component weighing and BOM reconciliation | kg | Each package format or controlled BOM change | All package formats included in the represented mix | Each represented packaging line/site | Component mass × units used plus measured scrap; normalize to net saleable product mass | BOM approval; component specifications; sample weights; issue reconciliation |
| `cp_water_cleaning_and_wastewater` | `cleaning_and_utility_support` | Cleaning water, agents, wastewater, sludge | Water meter, cleaning log, chemical issue, discharge record | water_in; recipe_water; cleaning_water; agent_mass; dilution; wastewater_volume; pollutant_load; sludge_mass; destination | Metering and inventory balance; sampling where available | kg, m3, and pollutant-specific units | Shift, cleaning event, or meter period | Same representative period as production | Each represented site and treatment system | Separate recipe water; allocate shared cleaning by causal cleaning activity; reconcile water inputs and outputs | Meter calibration; cleaning schedule; chemical inventory; discharge/sampling records |
| `cp_fermentation_parameters` | `fermentation_and_resting`; `forming_and_thermal_processing` | Yeast dosage, yeast action time, product applicability, oven VOC | Recipe, proofing log, process control record, stack test | product_id; yeast_type; initial_yeast_percent; initial_action_time_h; spike_yeast_percent; spike_action_time_h; leavening_route; oven_id; measured_voc | Recipe and control-system records; stack testing where available | %, h, kg VOC | Each applicable recipe and campaign | All yeast-raised baked products represented | Each applicable oven and product route | Apply EPA equation only when scope conditions are satisfied; otherwise use measured or jurisdiction-specific method | Approved recipe; timestamped controls; applicability review; stack-test report |
| `cp_storage_and_refrigerant` | `conditioned_storage` | Storage electricity, duration, rejects, refrigerant loss | Zone meter, warehouse inventory, maintenance and recharge log | zone_id; temperature; humidity; product_mass; entry_time; exit_time; electricity; refrigerant_type; charge; recharge; recovered_mass; reject_mass | Zone metering, inventory records, and refrigerant mass balance | kWh, kg, h or day | Continuous or each storage event; maintenance event | Declared onsite storage period within the representative production period | Each controlled zone serving represented product | Allocate electricity by causal occupancy/time/capacity model; calculate refrigerant loss from verified inventory balance | Meter calibration; temperature logs; service records; refrigerant invoices and recovery certificates |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | Normalized amount = period or batch amount / net saleable reference-product mass from the same scope | Collected flow amount; net saleable mass | Amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_mass_balance` | Each process and complete foreground system | Reconcile input mass = saleable output + co-product output + waste + direct mass emissions + inventory change; identify moisture transfer/evaporation separately and explain any residual | Ingredient/intermediate mass; output; waste; emissions; inventory change; moisture | Reconciled yield, losses, and residual disclosure | `eu-pef-2021-2279` |
| `calc_energy_intensity` | Energy-consuming processes | Carrier intensity = measured carrier use attributable to product / net saleable product mass; retain each carrier separately | Meter/fuel records; allocation driver; net saleable mass | kWh, MJ, kg, or m3 per kg product | `eu-fdm-bref-2019` |
| `calc_packaging_intensity` | Packaging | Packaging intensity by component = component unit mass × units used / net saleable product mass; add measured scrap separately | Component mass; unit count; net product mass; scrap | kg component and kg scrap per kg product | `eu-pef-2021-2279` |
| `calc_water_balance` | Recipe, cleaning, and wastewater | Reconcile incoming water with water retained in product, evaporation, wastewater, and other documented outlets; do not infer cleaning water from recipe water | Water meters; recipe water; product moisture; wastewater; evaporation estimate | Water-use and wastewater intensity with residual | `eu-fdm-bref-2019` |
| `calc_yeast_baking_voc` | Yeast-raised baked products within EPA scope | VOC EF [lb VOC/short ton baked product] = 0.95 × Yi + 0.195 × ti - 0.51 × S - 0.86 × ts + 1.90; convert to kg/kg and multiply by product output. Yi and S are initial and spike baker's yeast percentages; ti and ts are their action times in hours. | Product applicability; Yi; ti; S; ts; baked-product mass | Product-specific oven VOC to air | `us-epa-ap42-9-9-6`; `us-epa-bakery-act-1992` |
| `calc_refrigerant_loss` | Controlled storage | Refrigerant loss = opening inventory + purchases/recharge - closing inventory - recovered/transferred mass, allocated to represented product by documented causal storage driver | Refrigerant inventory and service records; allocation driver | kg refrigerant emitted per kg product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and inputs | Use the declared product/recipe/package identity and verified Tiangong reference UUID; do not infer recipe or process data from the representative Chinese Pastry description | Product specification; approved recipe; package BOM; Tiangong UUID readback evidence retained outside PCR content |
| `dq_technology_geography_time` | All foreground data | Document technological, geographical, and time representativeness and explain any proxy, shared-site allocation, missing period, or excluded route | Dataset metadata; site/line list; represented period; process description; representativeness assessment |
| `dq_measurement_traceability` | Mass, energy, water, packaging, waste, and emissions | Retain calibrated measurement or reconciled source records and document conversion factors, allocation drivers, and residuals | Calibration certificates; meters; invoices; batch logs; reconciliations; sampling or test reports |
| `dq_completeness` | Complete foreground system | Cover every required process and explicitly mark conditional processes applicable or not applicable; account for major recipe inputs, utilities, packaging, waste, wastewater, and direct emissions | Completeness checklist; process map; mass/energy/water reconciliations; non-applicability justifications |
| `dq_uncertainty_and_estimates` | Estimated and modelled values | Label modelled values and provisional ranges; report method, input uncertainty, and replacement plan. `reasoned_estimate` ranges are QA priors, not default foreground values | Calculation workbook; uncertainty note; review record; source replacement action |
| `dq_source_currency` | External rules and factors | Verify source status and applicability at dataset release; replace superseded regulatory, PCR, or emission-factor methods when the declared jurisdiction or programme requires newer rules | Source register; retrieval date; applicability and currency review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference product UUID, Mass flow-property UUID, mass unit-group UUID, and kg unit shall match section 3, and the normalized reference output shall equal 1 kg net saleable product. |  |
| `validate_required_qualifiers` | Dataset metadata | Every required qualifier in section 3 shall be present; the representative Chinese Pastry flow shall not substitute for product-specific recipe, route, package, or storage declarations. | `china-gb-7099-2015`; `china-gb-8957-2016` |
| `validate_process_coverage` | Process inventory | All required processes shall contain collected or calculated foreground values; each conditional process shall be marked applicable with data or not applicable with justification. | `eu-fdm-bref-2019` |
| `validate_mass_balance` | Each process and complete system | Inputs, product/co-product outputs, waste, direct mass emissions, inventory change, and moisture transfer shall be reconciled on consistent product states; any residual shall be quantified and explained. | `eu-pef-2021-2279` |
| `validate_energy_water_packaging` | Major inventory drivers | Electricity, each thermal-energy carrier, recipe water, cleaning water, wastewater, and packaging shall be separately reported or explicitly justified as not applicable. | `eu-fdm-bref-2019`; `epd-food-beverage-pcr-2025-03` |
| `validate_allocation` | Shared processes and co-products | The dataset shall document the selected allocation hierarchy step, driver, scope, and sensitivity where another relationship is used; unweighted site averages shall fail product-specific validation. | `eu-pef-2021-2279` |
| `validate_oven_voc_applicability` | Yeast-raised baked products | EPA oven-VOC calculation may be used only when product and process applicability, yeast percentages, and action times are documented; otherwise measured or jurisdiction-appropriate evidence is required or the gap shall be disclosed. | `us-epa-ap42-9-9-6`; `us-epa-bakery-act-1992` |
| `validate_data_quality` | Published dataset candidate | Technology, geography, time, completeness, precision/uncertainty, documentation, and review evidence shall be disclosed; provisional reasoned estimates shall not be silently promoted to measured data. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and formulation-specific foreground manufacturing dataset for pastry goods and cakes |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed, representative, and linked to upstream and treatment datasets |
| allowed_use | Manufacturing-gate inventory modelling for the declared product, recipe, technology, site/geography, package, storage condition, and represented period; aggregation into a declared production mix when weighting is documented |
| excluded_use | Default recipe or global category average; direct substitution for bread, biscuits, waffles, confectionery, or raw dough; consumer-use or end-of-life claims outside an explicitly extended boundary; comparative claims without programme-specific review |
| required_metadata | PCR id; reference UUIDs; product subtype; recipe/formulation version; ingredient/allergen profile; leavening and thermal route; filling/topping/coating; preservation and moisture state; package format; net and gross mass; site/geography; represented period and product mix; storage condition/shelf life; process applicability; allocation choices; source versions |
| required_quality_disclosure | Foreground versus secondary data shares; measurement and calibration evidence; technology/geography/time representativeness; mass/energy/water reconciliation; allocation drivers; proxy datasets; missing flows; uncertainty; provisional reasoned estimates; source applicability; review status |
| update_trigger | Recipe or supplier change; material package change; different leavening/thermal or storage route; equipment or site change; material energy/water/waste change; new direct-emission evidence; source or regulatory revision; review finding; loss of representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-food-beverage-pcr-2025-03` | standard | EPD International, PCR 2025:03 Food and beverage products (main PCR), version 1.0.1, valid to 2030-07-14, https://www.environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5 (retrieved 2026-08-11) | Sector-level declared-unit, foreground boundary, packaging, dataset profile, and update context |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint method, OJ L 471, 30.12.2021, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Life-cycle boundary, allocation hierarchy, company-specific data quality, representativeness, and validation |
| `eu-fdm-bref-2019` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, 2019, DOI 10.2760/243911, https://op.europa.eu/en/publication-detail/-/publication/ef80e416-329c-11ea-ba6e-01aa75ed71a1/language-en (retrieved 2026-08-11) | Food-manufacturing process coverage, energy, water, wastewater, cleaning, emissions, and monitoring records |
| `us-epa-ap42-9-9-6` | method_factor | US EPA, AP-42 Section 9.9.6 Bread Baking, February 1997, https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-6.pdf (retrieved 2026-08-11) | Conditional VOC emission equation for applicable yeast-raised baked products |
| `us-epa-bakery-act-1992` | official_guidance | US EPA, Alternative Control Technology Document for Bakery Oven Emissions, EPA-453/R-92-017, December 1992, https://www.epa.gov/sites/default/files/2020-10/documents/rel_c09s0906.pdf (retrieved 2026-08-11) | Conditional dough/fermentation/baking process decomposition, oven-emission sources, and AP-42 applicability limits |
| `china-gb-7099-2015` | standard | GB 7099-2015, National Food Safety Standard — Pastry and Bread; current listing verified in NHC food-safety standards catalogue through September 2025, https://www.nhc.gov.cn/sps/c100087/202601/b8bc7bf0fd6243c1914d8c0708d9929a/files/%E9%A3%9F%E5%93%81%E5%AE%89%E5%85%A8%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E7%9B%AE%E5%BD%95%EF%BC%88%E6%88%AA%E8%87%B32025%E5%B9%B49%E6%9C%88%E5%85%B11725%E9%A1%B9%EF%BC%89.pdf (retrieved 2026-08-11) | Product identity, conformity, and product-specific qualifier context; no LCA default amounts |
| `china-gb-8957-2016` | standard | GB 8957-2016, National Food Safety Standard — Hygienic Practice for Pastry and Bread; current listing verified in NHC food-safety standards catalogue through September 2025, same official catalogue URL as above (retrieved 2026-08-11) | Route disclosure, sanitation/cleaning process inclusion, records, and validation context; no LCA default amounts |
