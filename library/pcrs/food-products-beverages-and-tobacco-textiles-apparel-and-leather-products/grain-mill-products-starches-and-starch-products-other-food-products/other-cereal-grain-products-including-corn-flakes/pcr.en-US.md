---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-grain-products-including-corn-flakes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other cereal grain products (including corn flakes)

## 1. Scope and Applicability

This PCR governs foreground data packages for factory production of other worked cereal grains and cereal products covered by CPC 3.0 subclass 23140. It covers cereal grains that are hulled, rolled, flaked, pearled, sliced, kibbled, pre-cooked, roasted, puffed, or otherwise prepared; cereal germ in whole, rolled, flaked, or ground form; bulgur wheat; and prepared cereal foods such as corn flakes and mixtures of unroasted flakes with roasted flakes or swollen cereals.

The PCR is route-flexible. A dataset shall identify the actual grain species, product form, formulation, and manufacturing route and shall include only the conditional operations that occur. It does not cover semi- or wholly milled rice, husked rice, cereal-based prepared meals and dishes, cereal flour as the sole product, or mixes and doughs for bakers' wares. Agricultural grain production is upstream of the declared foreground starting condition unless the study explicitly extends the boundary.

The default foreground boundary begins with cereal grain or cereal intermediate received at the manufacturing site and ends with finished product at the factory gate. The reference amount is net product mass; packaging is inventoried separately and is not included in the 1 kg product mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-grain-products-including-corn-flakes |
| classification_refs | CPC 3.0: 23140, Other cereal grain products (including corn flakes) |
| covered_products | Worked cereal grains; whole, rolled, flaked, or ground cereal germ; bulgur wheat; pre-cooked or otherwise prepared non-maize cereals; roasted, swollen, flaked, puffed, shredded, or extruded cereal products, including corn flakes and cereal-flake mixtures |
| excluded_products | Semi- or wholly milled rice (CPC 23161); husked rice (CPC 23162); prepared meals and dishes based on cereal grains (CPC 23997); cereal flour as the sole product; bakery mixes and doughs; agricultural grain production unless explicitly added upstream |
| representative_product | Factory-gate ready-to-eat flaked cereal, represented by corn flakes, with the declared formulation and moisture content |
| production_route | Receipt and preparation of grain or cereal intermediate, followed as applicable by mixing, hydrothermal cooking or extrusion, drying and tempering, flaking or other forming, toasting/roasting/puffing, cooling, coating or fortification, and packaging |
| market_state | Edible finished cereal product at the factory gate, sold in bulk or packaged as declared; net mass reported on an as-received basis with moisture and packaging state disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished other cereal grain product conforming to the declared product specification |
| How much | 1 kg net finished product at the factory gate |
| How well | Edible, released product meeting the declared grain identity, formulation, product form, moisture specification, and quality grade |
| How long or cycle | One production batch or campaign represented at factory-gate release; no use duration is assigned |
| reference_flow_link | `other_cereal_grain_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Other cereal grain products (including corn flakes) `53e35f86-383d-45f6-87ef-13a25f1f10e6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | grain species and origin; product form; conventional, extruded, puffed, roasted, or other route; ingredient and coating formulation; fortification status; as-received moisture or dry-matter content; packaged or bulk state; packaging inclusion; manufacturing geography; reference period; allocation method; upstream boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg of accepted net product at factory-gate release. Exclude packaging mass from the reference amount and inventory packaging separately. |
| `moisture_basis` | Cereal inputs, intermediates, co-products, rejects, and finished product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg as received and kg dry matter | Record measured or specification-based moisture for each material state. Do not compare or convert wet- and dry-basis quantities without the declared moisture values and the `calc_dry_matter` rule. |
| `energy_carrier_separation` | Electricity, purchased heat or steam, and fuels | Energy appropriate to the selected flow | kWh for electricity; MJ for fuels and thermal energy | Preserve energy carriers as separate inventory rows. Convert units with documented factors but do not combine electricity and thermal energy into one unqualified amount. |
| `water_accounting` | Process, cleaning, and formulation water | Mass or volume appropriate to the selected flow | kg or m3 | Record supplied water, recovered/reused water, product-incorporated water, wastewater, and water evaporated or vented consistently so reuse is not counted as a new external input. |
| `batch_reconciliation` | All material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile inputs, outputs, inventory change, moisture transfer, co-products, wastes, and direct material emissions over the same batch or reporting period before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cereal grain, worked cereal material, cereal germ, or formulation ingredients received at the manufacturing site, with supplier, origin, product form, moisture, and upstream dataset coverage declared |
| starting_condition_role | Foreground manufacturing input; agricultural production and off-site pre-processing are represented by linked upstream datasets when cradle-to-gate coverage is claimed |
| product_classification_scope | Semantic scope equivalent to CPC 3.0 subclass 23140, independent of the CPC directory hierarchy |
| recursive_input_rule | If an input is itself a product within this PCR category, record it as a technosphere product input with its own upstream dataset and declared processing state; do not recursively reproduce its manufacturing inside the receiving process |
| upstream_dataset_requirement | Link representative upstream datasets for cereal materials, other ingredients, energy carriers, water supply, packaging, and treatment services whenever the published dataset claims cradle-to-gate or background-dataset use |
| disclosure | Declare the starting material state, included route steps, excluded life-cycle stages, packaging treatment, upstream coverage, cut-offs, allocation, data gaps, and any use of proxy or reasoned-estimate values |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | foreground_manufacturing | Include every operation actually used between receipt and factory-gate release: handling and preparation; cleaning, hulling, cutting, milling, or pearling; mixing; cooking or extrusion; drying and tempering; flaking, shredding, puffing, roasting, or toasting; cooling; coating or fortification; packaging; and associated onsite waste, wastewater, and waste-gas handling. Conditional operations are included only when they occur. | `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat` |
| `boundary_upstream_linkage` | cradle_to_gate_claim | A cradle-to-gate or background dataset shall link upstream datasets for all material and energy inputs. A gate-to-gate dataset shall state that upstream burdens are excluded and shall not be presented as cradle-to-gate. | `eu-commission-2021-2279-environmental-footprint` |
| `boundary_minor_exclusions` | cut_off_and_data_gaps | Avoid cut-offs by default. Any excluded process or flow shall be explicit, justified, and tested for material, energy, and environmental significance; when the target study applies the EU Environmental Footprint method, its cumulative 3% cut-off rule also applies. | `eu-commission-2021-2279-environmental-footprint` |
| `boundary_downstream_exclusion` | distribution_use_end_of_life | Distribution, retail, consumer preparation, use, and end-of-life are outside the default foreground boundary. Include them only in an explicitly extended study and keep their inventories separate from manufacturing. | `eu-commission-2021-2279-environmental-footprint` |
| `boundary_emission_points` | direct_emissions_and_treatment | Assess process vents and collection points for particulate matter and volatile organic compounds where grain handling, milling, cooking, extrusion, drying, flaking, toasting, puffing, cooling, or packaging can emit them; inventory pollutant-specific direct emissions and treatment residues when relevant. | `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_preparation` | Ingredient receiving and cereal preparation | required | Always include the receipt, storage, handling, and preparation operations performed at the reporting facility | Establish the declared starting material and prepared cereal feed | kg prepared cereal material |
| `cereal_transformation` | Cereal transformation and thermal processing | required | Include the actual route subset; if no thermal transformation occurs, record the mechanical working route and mark non-applicable steps | Convert prepared cereal material into worked, cooked, extruded, flaked, puffed, roasted, or otherwise prepared cereal | kg transformed cereal intermediate |
| `finishing_and_release` | Finishing, packaging, and product release | required | Always include final cooling/conditioning and product release; include coating, fortification, and packaging when used | Produce the reference product at factory gate | 1 kg accepted net finished product |
| `onsite_environmental_management` | Onsite waste, wastewater, and waste-gas management | conditional | Include when treatment or abatement occurs within the foreground site | Treat or transfer residual streams and record treatment inputs, outputs, and direct emissions | kg or m3 treated stream |

### Process: Ingredient receiving and cereal preparation (`receiving_and_preparation`)

#### Inputs

##### Product flows

###### Cereal grain or cereal intermediate (`cereal_material_input`)

Record every cereal material entering the site by species, origin, processing state, supplier, and moisture. Split materially different cereal inputs into separate rows in the foreground dataset.

- Selected flow: Route-specific cereal grain or cereal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net received mass reconciled to issue-to-production records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_moisture`
- Sources: `unsd-cpc-3-0-explanatory-notes`
- Range: Provisional cereal-input mass-balance screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2.0
  - Unit: kg
  - Basis: per 1 kg accepted net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record metered or allocated electricity for receiving, conveying, aspiration, cleaning, hulling, cutting, milling, pearling, and related preparation operations.

- Selected flow: Site- and geography-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or allocated facility-meter electricity under `calc_shared_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cereal material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Indicative grain-milling electricity screen; not a default for full cereal transformation
  - Range role: Typical range (`typical_range`)
  - Lower: 0.05
  - Upper: 0.13
  - Unit: kWh
  - Basis: per kg product from grain milling operations covered by the source
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-commission-2019-2031-fdm-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared cereal material (`prepared_cereal_output`)

Record cleaned, hulled, cut, milled, pearled, or otherwise prepared cereal transferred to the next process. This is an internal intermediate unless it leaves the foreground boundary.

- Selected flow: Route-specific prepared cereal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared cereal material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_moisture`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`
- Range: Provisional preparation-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.0
  - Unit: kg/kg cereal material input
  - Basis: prepared cereal output divided by cereal material input on a consistent moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated cereal fractions (`separated_cereal_coproducts`)

Record saleable or internally used bran, germ, hulls, fines, or other separated fractions as product outputs only when they have a documented next use or economic value; otherwise record them as waste.

- Selected flow: Fraction-specific cereal co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured separated fraction mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared cereal material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_moisture`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`
- Range: Provisional separated-fraction screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg cereal material input
  - Basis: separated fraction mass divided by cereal material input on a consistent moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation rejects and collected dust (`preparation_rejects`)

Record foreign material, non-saleable cereal rejects, and collected dust leaving preparation for treatment or disposal, split by destination where treatment differs.

- Selected flow: Site-specific cereal preparation waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste-container or disposal-ticket mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cereal material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_and_treatment`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional preparation-waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg cereal material input
  - Basis: waste leaving preparation divided by cereal material input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct particulate matter to air (`preparation_particulate_to_air`)

Record pollutant-specific particulate emissions that bypass collection or remain after abatement. Do not use captured dust mass as an air emission.

- Selected flow: Pollutant- and compartment-specific particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission load or calculated load from flow and concentration under an approved monitoring method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared cereal material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat`
- Range: Provisional direct-particulate screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg prepared cereal material
  - Basis: direct particulate emission after abatement divided by prepared cereal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cereal transformation and thermal processing (`cereal_transformation`)

#### Inputs

##### Product flows

###### Prepared cereal feed (`prepared_cereal_input`)

Record the prepared cereal intermediate transferred into the declared transformation route.

- Selected flow: Route-specific prepared cereal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass and moisture, equal to the linked upstream internal output after inventory adjustment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_moisture`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`
- Range: Provisional transformation-feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2.0
  - Unit: kg/kg transformed cereal intermediate
  - Basis: prepared cereal feed divided by transformed cereal output on an as-received basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formulation ingredients and additives (`formulation_ingredients`)

Record sugar, malt, salt, oils, binders, flavours, micronutrient carriers, and other recipe ingredients individually when material or environmentally relevant.

- Selected flow: Ingredient-specific product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued recipe mass corrected for returns, rework, and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_packaging`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`
- Range: Provisional total formulation-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg transformed cereal intermediate
  - Basis: total non-cereal formulation ingredients divided by transformed cereal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and formulation water (`transformation_water`)

Record external water used for formulation, cooking, steam contact, equipment cleaning attributable to the batch, and other transformation uses. Record recovered water separately and avoid double counting recirculation.

- Selected flow: Site-specific process water supply
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-record external water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional external-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg transformed cereal intermediate
  - Basis: external water input excluding recirculated water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Transformation electricity (`transformation_electricity`)

Record electricity for mixers, cookers, extruders, dryers, blowers, rollers, puffing equipment, ovens, conveyors, and cooling equipment used by the declared route.

- Selected flow: Site- and geography-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or allocated facility-meter electricity under `calc_shared_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional route-wide electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh/kg transformed cereal intermediate
  - Basis: electricity used by the declared transformation route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fuel, purchased heat, or steam (`transformation_thermal_energy`)

Record each thermal energy carrier separately, including onsite fuel and purchased steam or heat. Combustion emissions are direct elementary outputs when fuel is burned inside the foreground boundary.

- Selected flow: Carrier- and geography-specific fuel, heat, or steam supply
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel consumption, steam mass and enthalpy, or purchased heat apportioned under `calc_shared_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional route-wide thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg transformed cereal intermediate
  - Basis: thermal energy used by the declared transformation route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Transformed cereal intermediate (`transformed_cereal_output`)

Record cooked, extruded, dried, tempered, flaked, puffed, roasted, toasted, or otherwise transformed cereal transferred to finishing.

- Selected flow: Route-specific transformed cereal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted transfer mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_moisture`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`
- Range: Transformation-output normalization check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg transformed cereal intermediate
  - Basis: accepted transformed output divided by its own process-output quantitative reference
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-conservation-identity`

##### Waste flows

###### Off-spec cereal and process residues (`transformation_residues`)

Record off-spec product, spills, start-up/shutdown residues, filter solids, and other transformation waste by disposition. Rework returned within the same reporting period is an internal loop, not a waste output.

- Selected flow: Site-specific cereal transformation waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste and residue mass net of documented rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_and_treatment`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional transformation-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg transformed cereal intermediate
  - Basis: waste and residue mass net of rework
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water released to air (`water_to_air`)

Record net water transferred from material and external water inputs to direct atmospheric release during drying, cooling, toasting, roasting, or puffing when required for material balance or impact modelling.

- Selected flow: Water to air, compartment selected for the site
- Flow property / unit: Mass / kg
- Amount rule: calculated under `calc_water_balance` from measured moisture, water input, wastewater, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_and_moisture`
- Sources: `mass-conservation-identity`
- Range: Provisional evaporated-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg transformed cereal intermediate
  - Basis: net water released to air from the transformation route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct volatile organic compounds to air (`transformation_voc_to_air`)

Record pollutant-specific volatile organic compound emissions from cooking, extrusion, drying, cooling, toasting, roasting, puffing, or coating vents when relevant. Split individual substances when the selected LCIA method requires them.

- Selected flow: Pollutant- and compartment-specific volatile organic compound to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission load or calculated load from vent flow and concentration under an approved method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg transformed cereal intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat`
- Range: Provisional direct-VOC screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg transformed cereal intermediate
  - Basis: direct VOC emissions after abatement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Finishing, packaging, and product release (`finishing_and_release`)

#### Inputs

##### Product flows

###### Transformed cereal input (`transformed_cereal_input`)

Record the transformed cereal intermediate transferred to finishing, aligned with the upstream internal output.

- Selected flow: Route-specific transformed cereal intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_moisture`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`
- Range: Provisional finishing-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2.0
  - Unit: kg/kg accepted net finished product
  - Basis: transformed cereal input to finishing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coating and fortification materials (`finishing_ingredients`)

Record post-transformation coatings, flavours, oils, sugars, vitamins, minerals, and carriers by ingredient when used.

- Selected flow: Ingredient-specific coating or fortification product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued recipe mass corrected for returns and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_packaging`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`
- Range: Provisional finishing-ingredient screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg accepted net finished product
  - Basis: post-transformation ingredients added to finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging by material and mass when packaging is included. Moisture-barrier packaging shall be identified for products that require it.

- Selected flow: Material-specific packaging product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: bill-of-material or issued packaging mass net of returned unused packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_packaging`
- Sources: `us-epa-ap42-9-9-2-cereal-breakfast-food`
- Range: Provisional packaging-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg accepted net finished product
  - Basis: total packaging material issued to saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and packaging electricity (`finishing_electricity`)

Record electricity for cooling, coating, inspection, conveying, filling, sealing, coding, and packing.

- Selected flow: Site- and geography-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or allocated facility-meter electricity under `calc_shared_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional finishing-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/kg accepted net finished product
  - Basis: electricity used for finishing, packaging, and release
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Other cereal grain product output (`other_cereal_grain_product_output`)

This is the accepted net reference product at factory-gate release. Record gross packaged mass separately when packaging is included.

- Selected flow: Other cereal grain products (including corn flakes) `53e35f86-383d-45f6-87ef-13a25f1f10e6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg accepted net finished product after quality rejection and excluding packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-conservation-identity`
- Range: Reference-flow normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-conservation-identity`

##### Waste flows

###### Finishing rejects and packaging waste (`finishing_waste`)

Record rejected product not returned as rework, packaging trim, damaged packaging, and line-clearance waste by destination.

- Selected flow: Site- and material-specific finishing waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reject and waste mass net of documented rework and returned packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_and_treatment`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional finishing-waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg accepted net finished product
  - Basis: non-reworked finishing rejects and packaging waste
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Onsite waste, wastewater, and waste-gas management (`onsite_environmental_management`)

#### Inputs

##### Product flows

###### Treatment electricity and auxiliaries (`treatment_inputs`)

Record electricity, chemicals, water, and fuels used by onsite treatment or abatement as separate material- and energy-specific foreground rows in the implemented dataset.

- Selected flow: Treatment-input-specific product flow
- Flow property / unit: Property and unit appropriate to each selected treatment input
- Amount rule: measured treatment input allocated to cereal production by treated load or another documented causal driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg or m3 treated residual stream, then normalized to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_and_treatment`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional treatment-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: declared input unit per kg or m3 treated stream
  - Basis: broad route-specific treatment screen; replace with site evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wastewater entering onsite treatment (`wastewater_to_treatment`)

Record wastewater flow and relevant pollutant loads entering onsite treatment. Split materially different wastewater streams when treatment differs.

- Selected flow: Site-specific wastewater to treatment
- Flow property / unit: Volume / m3; pollutant loads in kg
- Amount rule: measured wastewater volume and calculated pollutant load from representative concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional wastewater-volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg accepted net finished product
  - Basis: wastewater entering onsite treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Solid residues entering onsite treatment (`solid_residues_to_treatment`)

Record cereal residues, collected dust, sludge, and other solid wastes transferred into onsite treatment or storage.

- Selected flow: Residue-specific waste flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by residue type and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_and_treatment`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional solid-residue treatment screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg accepted net finished product
  - Basis: solid residues entering onsite treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated wastewater discharge or offsite transfer (`treated_wastewater_output`)

Record treated effluent discharged from the site or wastewater transferred to offsite treatment, including destination and relevant residual pollutant loads.

- Selected flow: Site-specific treated wastewater or wastewater for offsite treatment
- Flow property / unit: Volume / m3; pollutant loads in kg
- Amount rule: measured discharge volume and calculated pollutant load, or documented offsite-transfer quantity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional treated-wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg accepted net finished product
  - Basis: treated discharge or offsite-transfer volume
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Treatment residues (`treatment_residues`)

Record sludge, spent filters, captured dust, and other treatment residues by final destination.

- Selected flow: Residue-specific treatment waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured treatment residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_and_treatment`
- Sources: `eu-commission-2019-2031-fdm-bat`
- Range: Provisional treatment-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg accepted net finished product
  - Basis: treatment residue mass leaving the site
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multi_output_processes | Avoid allocation where possible by separately metering or subdividing cereal preparation, utilities, transformation, finishing, and treatment processes, or by system expansion when the study goal permits it. | `eu-commission-2021-2279-environmental-footprint` |
| `allocation_physical_relation` | inseparable_coproducts | If subdivision or system expansion is not feasible, allocate shared inputs and emissions using a documented causal physical relationship. Mass allocation is acceptable only when mass is relevant to the shared process burden; moisture bases shall be consistent. | `eu-commission-2021-2279-environmental-footprint` |
| `allocation_other_relation` | no_relevant_physical_relation | If no relevant physical relationship can be justified, use another documented relationship such as economic allocation, state prices, geography, period, and calculation, and test sensitivity for material co-products. | `eu-commission-2021-2279-environmental-footprint` |
| `allocation_residue_classification` | fractions_residues_and_waste | Classify bran, germ, hulls, fines, off-spec product, and treatment residues according to actual destination and economic status. Rework is an internal loop; a saleable or beneficially used fraction is a co-product; a discarded stream is waste. Do not apply both co-product allocation and avoided-burden credit to the same output. | `eu-commission-2021-2279-environmental-footprint`; `eu-commission-2019-2031-fdm-bat` |
| `allocation_shared_utilities` | shared_energy_water_and_treatment | Allocate shared metered utilities and treatment burdens with process-specific meters where available; otherwise use a causal driver such as operating time, energy demand, treated flow, pollutant load, or product mass, and disclose the driver and coverage. | `eu-commission-2019-2031-fdm-bat`; `eu-commission-2021-2279-environmental-footprint` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_and_moisture` | `receiving_and_preparation`; `cereal_transformation`; `finishing_and_release` | material inputs, intermediates, products, co-products, and rejects | weighbridge, batch-scale, production, inventory, and laboratory records | material_id; supplier; origin; batch_id; timestamp; gross_mass; tare_mass; net_mass; moisture_fraction; dry_matter_method; destination; rework_flag | calibrated scale plus representative moisture test or controlled product specification | kg; mass fraction | each receipt, batch, transfer, and release | at least one representative continuous 12-month period or the complete campaign for seasonal production | each included facility and line | reconcile opening inventory + receipts - closing inventory to issued and output masses; aggregate accepted product-weighted values | scale calibration; sampling plan; laboratory method; inventory reconciliation; missing-record log |
| `cp_recipe_and_packaging` | `cereal_transformation`; `finishing_and_release` | formulation, coating, fortification, and packaging inputs | approved recipe, bill of materials, issue/return, and packaging records | ingredient_id; packaging_material_id; batch_id; issued_mass; returned_mass; rework_mass; product_output_mass; specification_revision | reconcile controlled recipe or bill of materials to actual issue and return records | kg | each batch or production order | same period as reference product records | each product formulation and packaging configuration | net issue divided by accepted net product mass; keep each material separate | approved specification; lot traceability; issue/return reconciliation |
| `cp_energy_and_fuel` | `receiving_and_preparation`; `cereal_transformation`; `finishing_and_release`; `onsite_environmental_management` | electricity, fuel, purchased heat, and steam | meters, fuel delivery records, invoices, boiler or steam logs | meter_id; carrier; start_reading; end_reading; fuel_quantity; unit; steam_mass; pressure; temperature; operating_time; process_driver; product_output | calibrated submeter preferred; otherwise facility meter reconciled and allocated by documented causal driver | kWh; MJ; kg steam | meter interval and each fuel delivery; aggregate monthly | same representative 12-month period or complete campaign | process or line where metered, otherwise whole facility with allocation | subtract non-production uses and exports; convert units transparently; normalize carrier-specific totals to process output and reference flow | meter calibration; invoice reconciliation; conversion factors; allocation record |
| `cp_water_and_wastewater` | `cereal_transformation`; `onsite_environmental_management` | external water, reused water, wastewater, and pollutant loads | water meters, batch records, effluent flow meters, and representative sampling | source; meter_reading; use_area; reused_volume; discharge_volume; sample_time; flow; pH; temperature; COD_or_TOC; nitrogen; phosphorus; chloride; conductivity; TSS | calibrated flow measurement and representative laboratory analysis; distinguish external and recirculated water | m3; kg; concentration unit | flow continuously or per batch where practicable; quality at permit or representative monitoring frequency | same period as production data and representative of operating states | each materially different water and wastewater stream | volume-weight concentration to loads; reconcile supply, incorporation, evaporation, reuse, discharge, and inventory change | meter calibration; laboratory accreditation or method; sampling plan; flow-quality time alignment |
| `cp_direct_emissions` | `receiving_and_preparation`; `cereal_transformation`; `finishing_and_release`; `onsite_environmental_management` | particulate matter, VOC, combustion pollutants, and other direct emissions | stack or vent test, continuous monitor, operating hours, and approved calculation records | source_id; pollutant; compartment; flow_rate; concentration; test_duration; operating_state; abatement_state; operating_hours; calculation_method | applicable standardized measurement or documented engineering calculation; measure at representative/high expected normal emission state where required | kg; mg/Nm3; Nm3/h | permit or method frequency and after significant process change | representative of the production period and relevant operating states | each material emission point | calculate pollutant load from matched flow and concentration, subtract no captured material unless supported, and normalize to process output | test report; method; instrument calibration; detection limit; abatement status |
| `cp_residuals_and_treatment` | `receiving_and_preparation`; `cereal_transformation`; `finishing_and_release`; `onsite_environmental_management` | waste, co-products, offsite treatment, and onsite treatment inputs/outputs | container weights, disposal tickets, invoices, treatment logs, and destination records | residue_id; classification; mass; moisture; destination; treatment; economic_value; rework_quantity; treatment_input; treatment_output | measured mass or volume with documented destination and status | kg; m3 | each transfer or treatment batch | same period as production data | each facility and treatment route | net internal transfers and rework; aggregate by material and treatment destination; normalize to reference flow | weigh tickets; contractor records; chain of custody; treatment log; status decision |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period or batch amount / accepted net finished product mass | collected row amount; accepted net product mass | amount per 1 kg reference product | `mass-conservation-identity` |
| `calc_dry_matter` | cereal materials and product | dry mass = as-received mass × (1 - moisture mass fraction); convert between material states only with their own measured moisture | as-received mass; moisture fraction | kg dry matter and documented wet-basis conversion | `mass-conservation-identity` |
| `calc_mass_balance` | each process and full foreground system | opening inventory + inputs = accepted product + co-products + wastes + direct material emissions + closing inventory, with water incorporation and evaporation stated explicitly | mass and moisture records; inventory change; emissions; wastewater | reconciliation residual and percentage of total input | `mass-conservation-identity`; `eu-commission-2019-2031-fdm-bat` |
| `calc_water_balance` | water-using and drying processes | external water + water in materials = water in outputs + wastewater + water to air + closing water inventory - opening water inventory; reused water is an internal loop | external and reused water; material moisture; wastewater; inventory | kg or m3 water by destination | `mass-conservation-identity`; `eu-commission-2019-2031-fdm-bat` |
| `calc_shared_energy` | shared utilities | allocate carrier-specific metered consumption first by submeter; if unavailable, use documented causal drivers and preserve unallocated residuals for QA | facility and process meters; operating time; rated load; process output | carrier-specific energy by process and reference flow | `eu-commission-2019-2031-fdm-bat`; `eu-commission-2021-2279-environmental-footprint` |
| `calc_emission_load` | direct air or water emissions | load = matched flow × concentration × operating time or discharged volume, with unit conversion and detection-limit treatment documented | flow or volume; concentration; time; method metadata | pollutant-specific kg per reference flow | `eu-commission-2019-2031-fdm-bat` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all material rows | Retain product code, grain species, formulation revision, route, moisture basis, packaging state, site, geography, and reference period; avoid aggregating materially different products without a documented weighting rule. | product specification; batch and lot records; declared required qualifiers |
| `dq_temporal` | foreground activity data | Use a representative continuous 12-month period where production is continuous, or the complete campaign for seasonal production; identify abnormal shutdown, start-up, and trial production and justify inclusion. | dated meters, production records, and exception log |
| `dq_completeness` | process and flow coverage | Cover all included route operations and all material, energy, water, waste, wastewater, and relevant direct-emission flows; document cut-offs, data gaps, proxies, and reasoned estimates. | process flow diagram; BAT 2-style inventory; gap register; `eu-commission-2021-2279-environmental-footprint` |
| `dq_measurement` | collected records | Use calibrated meters and scales where practicable, keep raw and adjusted values, document conversions, and reconcile meters or invoices to facility totals. | calibration certificates; invoices; reconciliation worksheets |
| `dq_representativeness` | site, technology, geography, and time | Assess technological, geographical, and temporal representativeness and precision for foreground and linked secondary data; replace proxies when representative data become available. | data-quality assessment following `eu-commission-2021-2279-environmental-footprint` |
| `dq_uncertainty` | calculated and allocated values | Retain sampling variation, detection limits, allocation sensitivity, and uncertainty or range metadata for material results. | laboratory reports; uncertainty calculation; sensitivity results |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | The reference product UUID shall be `53e35f86-383d-45f6-87ef-13a25f1f10e6`, the reference flow property UUID shall be `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group UUID shall be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference unit shall be kg. |  |
| `validate_required_qualifiers` | dataset_metadata | Reject an incomplete reference definition when grain identity, product form, route, formulation, moisture basis, packaging state, geography, period, allocation, or upstream boundary is missing. | `unsd-cpc-3-0-explanatory-notes` |
| `validate_scope` | product_category | Confirm the product is within the stated semantic scope and is not milled or husked rice, a cereal-based prepared meal, flour-only output, or bakery mix/dough. | `unsd-cpc-3-0-explanatory-notes` |
| `validate_process_coverage` | foreground_process_map | Every required process and every conditional process used by the declared route shall have inventory rows; omitted route steps shall be explicitly non-applicable rather than silently absent. | `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat` |
| `validate_material_reconciliation` | material_and_water_balance | Calculate process and full-system mass and water balances over aligned periods. Investigate and disclose residuals before release; reasoned-estimate ranges are QA screens, not acceptance of unexplained imbalance. | `mass-conservation-identity`; `eu-commission-2019-2031-fdm-bat` |
| `validate_energy_reconciliation` | energy_inventory | Reconcile electricity and fuel totals to meters, invoices, or delivery records; preserve carriers separately and disclose allocation of shared utilities. | `eu-commission-2019-2031-fdm-bat` |
| `validate_coproduct_allocation` | multi_output_processes | Verify co-product/waste classification, subdivision attempts, allocation driver, factors, period, and sensitivity; prevent double credit or double burden for rework, co-products, and wastes. | `eu-commission-2021-2279-environmental-footprint` |
| `validate_emission_specificity` | direct_emissions | Direct emissions shall use pollutant- and compartment-specific flows with measurement or calculation evidence. Captured dust and treatment residues shall not also be reported as unabated elementary emissions. | `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat` |
| `validate_data_quality_and_sources` | all_inventory_and_rules | Verify temporal coverage, completeness, representativeness, calibration, source references, collection protocol links, and explicit disclosure of all data gaps, proxies, cut-offs, and reasoned estimates. | `eu-commission-2021-2279-environmental-footprint`; `eu-commission-2019-2031-fdm-bat` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for manufacture of a declared other cereal grain product at a specified facility, route, and reference period |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after review, with upstream links added when cradle-to-gate coverage is claimed; may project to Tiangong `process` and `lifecyclemodel` records |
| allowed_use | Gate-to-gate manufacturing assessment; cradle-to-gate product modelling when upstream datasets are linked; scenario and hotspot analysis within the declared product, route, geography, period, and allocation |
| excluded_use | Unqualified representation of all CPC 23140 products; direct comparative assertion without harmonized function, formulation, moisture, packaging, boundary, allocation, geography, and data quality; agricultural production or downstream life-cycle claims when those stages are excluded |
| required_metadata | PCR id and version; reference flow UUID; product and formulation identifier; grain species and origin; process route; moisture basis; packaging state; site and geography; reference period; technology; upstream coverage; allocation; cut-offs; collection protocols; source ids; data-quality statement |
| required_quality_disclosure | Foreground/secondary data share; meter and sampling coverage; mass, water, and energy reconciliation; missing data; proxy flows; unresolved UUIDs; reasoned estimates; uncertainty; allocation sensitivity; representativeness; validation findings |
| update_trigger | Material formulation, route, equipment, energy or water system, packaging, co-product destination, abatement, site, regulation, source evidence, Tiangong identity, or data-quality change; otherwise review when the represented period is no longer current |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes` | `official_guidance` | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, updated 30 June 2025, subclass 23140, pp. 102-103. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Product scope, inclusions, exclusions, and classification identity |
| `us-epa-ap42-9-9-2-cereal-breakfast-food` | `official_guidance` | U.S. Environmental Protection Agency, *AP-42, Chapter 9.9.2: Cereal Breakfast Food*, August 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-2.pdf (retrieved 2026-08-11) | Route-specific process decomposition for traditional, flaked, extruded, puffed, and other cereals; particulate and VOC emission-point screening |
| `eu-commission-2019-2031-fdm-bat` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, especially BAT 2, BAT 5, and BAT 28. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-11) | Water, energy, raw-material, wastewater, waste-gas, and residue inventories; monitoring strategy; grain-cleaning and milling dust controls; indicative grain-milling energy screen |
| `eu-commission-2021-2279-environmental-footprint` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I, sections 4.5 and 4.6. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | System boundary, allocation hierarchy, cut-off disclosure, data quality, representativeness, and verification principles |
| `mass-conservation-identity` | `method_factor` | Conservation-of-mass identity applied over an aligned process batch or reporting period; no external numerical factor. | Reference normalization, dry-matter conversion, material and water balance calculations, and QA reconciliation |
