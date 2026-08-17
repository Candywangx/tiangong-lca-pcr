---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-meat
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Prepared dishes and meals based on meat

## 1. Scope and Applicability

This PCR supports foreground data packages for industrially prepared dishes and meals in which meat or meat products are characterising ingredients. It covers ready-to-eat and ready-to-heat products in chilled, frozen, or shelf-stable market states, including sauce-braised products, cooked meat dishes, stews, filled or composite meat meals, and comparable formulations.

The foreground boundary begins when meat, other food ingredients, packaging, utilities, and purchased services are received by the preparing establishment. It ends when conforming product is released at the factory gate in the declared packaging and storage state. Supplier-to-gate transport and upstream production of all purchased inputs remain required through linked upstream datasets. Distribution after the factory gate, retail, consumer cooking or reheating, consumption, and end-of-life are outside this gate dataset and require downstream modules when included in a lifecycle model.

The selected TianGong product flow `Sauce braised products` is a real representative product classified under CPC 3.0 code 21186. It is not renamed or treated as a fictitious generic flow for every dish in the category. A producer applying this PCR to another covered dish shall retain the PCR methodology while declaring the actual product identity and the representativeness limitation of that selected reference flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-meat |
| classification_refs | CPC 3.0: 21186, Prepared dishes and meals based on meat (exact mapping context) |
| covered_products | Prepared dishes and meals for human consumption in which meat or meat products are characterising ingredients, including sauce-braised products, cooked meat dishes, stews, composite meat meals, and equivalent ready-to-eat or ready-to-heat products |
| excluded_products | Raw meat and slaughter products; uncooked meat preparations sold as raw meat; products whose characterising basis is fish, vegetables, cereals, or another non-meat category; pet food; catering and restaurant services; retail activities; consumer meal preparation |
| representative_product | Sauce braised products, represented by the exact TianGong product flow `Sauce braised products` (`61b586fc-1d4a-4abe-981d-19c27f9a33b0`) |
| production_route | Receipt and controlled storage of ingredients; preparation and formulation; cooking, braising, or other validated thermal processing; post-cook handling; portioning and packaging; cleaning and sanitation; wastewater and solid-waste handling; finished-product storage and factory-gate release |
| market_state | Declared as chilled, frozen, or shelf-stable; packaged or bulk; ready-to-eat or ready-to-heat; storage temperature and labelled shelf-life shall be stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an edible, prepared meat-based dish or meal that meets the declared formulation, heat-treatment, food-safety, packaging, and market-state specifications |
| How much | 1 kg net mass of conforming product at factory-gate release |
| How well | Product identity, meat species and content, formulation family, thermal process, packaging format, readiness state, storage condition, and applicable safety or quality specification are declared |
| How long or cycle | One production output delivered to the factory gate; labelled shelf-life and required storage condition are declared, while downstream storage losses and use are excluded from this gate dataset |
| reference_flow_link | 1 kg of the exact TianGong representative product flow `Sauce braised products` in the declared market state |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sauce braised products `61b586fc-1d4a-4abe-981d-19c27f9a33b0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual product name; meat species and meat-content basis; recipe or formulation family; ready-to-eat or ready-to-heat state; cooking or braising route; chilled, frozen, or shelf-stable state; net mass basis; packaging format; storage temperature; labelled shelf-life; factory-gate geography; production period |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Conforming prepared dish or meal at factory-gate release | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net edible product mass after cooking, cooling, draining where applicable, and before or after packaging only as declared; exclude packaging mass. Normalize all foreground inventory to 1 kg reference product. |
| `ingredient_mass_consistency` | Meat, other ingredients, sauces, edible process water, rework, and recipe additions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert batch recipe and issue records to kg on a consistent as-received or prepared basis and declare the basis for moisture-bearing, frozen, concentrated, or reconstituted inputs. |
| `packaging_mass_separation` | Primary, secondary, and tertiary packaging entering the gate system | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report packaging separately by material and level; packaging shall not be included in the 1 kg edible reference-product mass. |
| `energy_unit_preservation` | Electricity, steam, fuel, hot water, refrigeration, and other energy services | Applicable energy property | kWh or MJ, as recorded | Preserve the metered or invoice unit, document every conversion and heating-value basis, and avoid converting energy carriers into mass without an explicit conversion factor. |
| `water_route_separation` | Ingredient water, process water, cleaning water, direct abstraction, and wastewater | Mass or volume, consistently converted | kg or m3 | Separate water by use and source route. Use measured density or the declared water-density convention for mass-volume conversion and retain the original meter unit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Meat, other food ingredients, packaging, utilities, and purchased services received at the preparing establishment, with temperature, physical state, supplier geography, and upstream dataset identity declared |
| starting_condition_role | Factory-gate foreground starting point; upstream agriculture, slaughter, meat processing, ingredient manufacture, packaging manufacture, energy supply, and inbound transport remain connected background requirements |
| product_classification_scope | Prepared dishes and meals based on meat; the CPC 3.0 code 21186 reference is mapping context and does not replace the semantic product description |
| recursive_input_rule | A purchased input that is itself a prepared meat-based dish or meal shall be recorded once as a product input with its own upstream dataset. Do not recursively rebuild it inside this foreground dataset. Rework generated and reused within the same reporting boundary is recorded as an internal loop and not duplicated as a new external product input. |
| upstream_dataset_requirement | Link representative upstream datasets for every meat and non-meat ingredient, packaging material, energy carrier, water supply route, purchased transport service, refrigerant make-up, waste treatment route, and wastewater treatment route that crosses the boundary |
| disclosure | Declare included and excluded stages, product recipe family, storage state, co-products, rework, food losses, wastewater, direct emissions, packaging levels, allocation methods, cut-offs, data gaps, and whether downstream distribution, retail, use, and end-of-life are outside the dataset |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Factory-gate foreground system | Include receipt and controlled storage, preparation and formulation, thermal processing, post-cook handling, portioning or filling, packaging, cleaning and sanitation, wastewater and solid-waste handling, and finished-product storage through factory-gate release when they occur. | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `boundary_upstream_links` | Purchased products and services | Keep all purchased ingredients, packaging, utilities, refrigerants, transport services, and treatment services as boundary-crossing product or waste flows with representative upstream datasets; do not treat the site gate as a cut-off of their supply chains. | `eu-pef-method-2021` |
| `boundary_waste_and_coproducts` | Foreground outputs other than the reference product | Identify all co-products, by-products, rework, food loss, packaging waste, wastewater, and direct elementary releases; disclose their fate and avoid combining saleable products with wastes. | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `boundary_cutoff_control` | Excluded processes and flows | Avoid cut-offs for meat and other recipe ingredients, packaging, process energy, water, reference product, saleable co-products, food losses, wastewater, and direct releases. Any other exclusion requires screening, explicit justification, and demonstration that cumulative exclusions remain within 3% of material and energy flows and environmental significance; disclose the excluded items and limitation. | `eu-pef-method-2021` |
| `boundary_downstream_exclusion` | Distribution after factory gate, retail, consumer storage and preparation, consumption, and end-of-life | Exclude these stages from this gate dataset and state the exclusion. Add separate downstream modules when the study goal requires a cradle-to-grave result. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_receiving_storage` | Ingredient receiving and controlled storage | required | Always include receipt, inspection, handling, and storage actually performed before preparation | Foreground intake and storage | Per 1 kg reference product |
| `preparation_formulation` | Meat preparation and formulation | required | Always include recipe dosing, thawing, trimming, cutting, mixing, marinating, sauce preparation, and internal rework steps that occur | Foreground preparation | Per 1 kg prepared formulation sent to thermal processing |
| `thermal_processing` | Cooking, braising, or equivalent thermal processing | required | Always include the validated product-defining heat-treatment route | Foreground transformation | Per 1 kg thermally processed product output |
| `post_cook_packaging` | Post-cook handling, portioning, and packaging | required | Include the actual cooling, holding, draining, portioning, filling, sealing, and packaging operations; mark non-occurring operations as not applicable in dataset metadata | Foreground finishing | Per 1 kg conforming packaged or bulk product |
| `cleaning_sanitation` | Cleaning and sanitation | required | Include product-contact and process-area cleaning attributable to the reporting boundary | Foreground support process | Per 1 kg reference product using measured campaign or line allocation |
| `wastewater_waste_handling` | Wastewater and solid-waste handling | required | Include collection, on-site pretreatment, storage, and dispatch of wastewater, food loss, rejected product, and packaging waste | Foreground residual management | Per 1 kg reference product |
| `finished_storage_dispatch` | Finished-product storage and factory-gate dispatch | conditional | Include when chilled, frozen, controlled-atmosphere, heated holding, or other storage occurs before gate release | Foreground storage and dispatch | Per 1 kg reference product and recorded storage duration |

### Process: Ingredient receiving and controlled storage (`ingredient_receiving_storage`)

#### Inputs

##### Product flows

###### Meat ingredients received (`received_meat_ingredients`)

Record each meat species, cut, processed meat ingredient, and physical state separately using purchase, receiving, and batch-issue records. Link the selected TianGong flow for the actual ingredient in the produced dataset.

- Selected flow: Site-selected meat or meat-product flow matching the received ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass issued to covered production, including separately reported thawing or trimming losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_bom`
- Sources: `eu-pef-method-2021`; `codex-cxc-58-2005`
- Range: Provisional meat-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.10
  - Upper: 1.50
  - Unit: kg/kg reference product
  - Basis: Broad screening interval for total received meat ingredients before measured product-specific data replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other food ingredients received (`received_other_ingredients`)

Record vegetables, cereals, pulses, oils, fats, seasonings, sauces, sugars, salts, additives, and other recipe ingredients separately by supplier product and formulation role.

- Selected flow: Site-selected product flow matching each non-meat ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass issued to covered production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_bom`
- Sources: `eu-pef-method-2021`; `codex-cxc-1-1969-2022`
- Range: Provisional non-meat-ingredient screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.50
  - Unit: kg/kg reference product
  - Basis: Broad screening interval for total non-meat ingredients before product-specific BoM data replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inbound transport services (`inbound_transport_services`)

Record supplier-to-site transport by material group and route when it is not already embedded in an upstream delivered-product dataset.

- Selected flow: Site-selected freight transport service flow by mode
- Flow property / unit: Transport work / tkm
- Amount rule: Delivered mass in tonnes multiplied by route distance in kilometres for each mode and leg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inbound_transport`
- Sources: `eu-pef-method-2021`

##### Waste flows

No waste enters this process by default. Returned packaging or reusable transport items shall be declared separately when they cross the site boundary.

##### Elementary flows

###### Directly abstracted water for storage support (`storage_direct_water`)

Record direct water abstraction only when the site withdraws water from the environment for storage or refrigeration support. Purchased network water is a product flow and belongs under the process where it is used.

- Selected flow: Site-selected elementary water flow matching source compartment and geography
- Flow property / unit: Volume / m3
- Amount rule: Metered direct abstraction attributable to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-pef-method-2021`
- Range: Provisional storage-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.020
  - Unit: m3/kg reference product
  - Basis: Broad screening interval for attributable direct storage water before site-meter data replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted ingredients issued to production (`accepted_ingredients`)

Track accepted ingredient mass issued to preparation. This is an internal transfer used for mass balance and is not duplicated as an external product output.

- Selected flow: Internal transfer matching each accepted ingredient
- Flow property / unit: Mass / kg
- Amount rule: Accepted received mass minus recorded receiving and storage losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_bom`
- Sources: `eu-pef-method-2021`

##### Waste flows

###### Receiving and storage losses (`receiving_storage_losses`)

Record rejected, spoiled, damaged, leaked, or temperature-abused food materials by material and treatment fate.

- Selected flow: Site-selected food-waste flow matching material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured mass rejected or lost before production issue
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`
- Range: Provisional receiving-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg reference product
  - Basis: Broad screening interval before product- and site-specific reject records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No category-specific elementary output is prescribed. Refrigerant leakage or on-site combustion emissions attributable to storage shall be recorded by substance when they occur.

### Process: Meat preparation and formulation (`preparation_formulation`)

#### Inputs

##### Product flows

###### Accepted meat and other recipe inputs (`prepared_recipe_inputs`)

Record the issued masses of all recipe inputs, including separately identified internal rework, on the declared physical-state basis.

- Selected flow: Internal accepted-ingredient transfer or site-selected product flow
- Flow property / unit: Mass / kg
- Amount rule: Batch-issued mass by ingredient and formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_bom`
- Sources: `eu-pef-method-2021`

###### Formulation and process water (`formulation_water`)

Record potable water intentionally added to the product or used in sauces, brines, reconstitution, washing, or thawing when it crosses the process boundary.

- Selected flow: Site-selected potable or process-water product flow
- Flow property / unit: Mass / kg
- Amount rule: Metered or recipe-recorded water by use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxc-1-1969-2022`
- Range: Provisional formulation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.0
  - Unit: kg/kg reference product
  - Basis: Broad screening interval covering recipe, washing, and thawing water before use-specific records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record electricity used for thawing equipment, cutting, grinding, mixing, pumping, and formulation operations.

- Selected flow: Site-selected electricity supply flow matching geography and voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or documented allocation from line-level records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-pef-method-2021`
- Range: Provisional preparation-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kWh/kg reference product
  - Basis: Broad screening interval before sub-metered or allocated foreground electricity replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed. Off-site recovered food material entering as an ingredient shall be treated as a product input with disclosed quality and upstream modelling.

##### Elementary flows

Direct abstraction shall be recorded only when water is withdrawn from the environment rather than supplied as a product flow.

#### Outputs

##### Product flows

###### Prepared formulation sent to cooking (`prepared_formulation`)

Record the internal mass sent to thermal processing by batch and formulation family.

- Selected flow: Internal prepared-formulation transfer
- Flow property / unit: Mass / kg
- Amount rule: Total recipe inputs minus separately measured preparation losses and wastewater-carried solids
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg prepared formulation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Sources: `eu-pef-method-2021`

##### Waste flows

###### Trimming and preparation residues (`preparation_residues`)

Record bones, fat, skin, trimmings, spilled ingredients, sieving residues, and rejected formulation separately by material and destination; identify any saleable co-product instead as a product flow.

- Selected flow: Site-selected waste flow matching residue and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured residue mass by batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`; `codex-cxc-58-2005`
- Range: Provisional preparation-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg reference product
  - Basis: Broad screening interval before measured residue records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No category-specific elementary output is prescribed. Direct releases from on-site equipment shall be recorded by substance when they cross the environmental boundary.

### Process: Cooking, braising, or equivalent thermal processing (`thermal_processing`)

#### Inputs

##### Product flows

###### Prepared formulation input (`thermal_formulation_input`)

Record the internal prepared formulation entering the validated heat-treatment operation.

- Selected flow: Internal prepared-formulation transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured batch mass charged to cooking or braising equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg thermally processed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_batch`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`

###### Thermal energy and electricity (`thermal_energy_input`)

Record steam, fuel, hot water, electricity, or other energy carriers separately by carrier and supply route. Do not collapse on-site fuel and purchased steam into one unspecified energy total.

- Selected flow: Site-selected energy-carrier or electricity flow matching the actual supply
- Flow property / unit: Energy / MJ or kWh
- Amount rule: Metered energy or documented equipment-level allocation for the thermal process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg thermally processed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-pef-method-2021`; `codex-cxc-1-1969-2022`
- Range: Provisional thermal-process energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 30
  - Unit: MJ/kg thermally processed product
  - Basis: Broad combined useful-energy-equivalent screening interval before carrier-specific foreground records replace it
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed. Recovered heat or secondary fuel entering the process shall be modelled using its actual product or waste status and treatment route.

##### Elementary flows

###### Direct water abstraction for thermal processing (`thermal_direct_water`)

Record direct water withdrawal only when environmental water is abstracted for the thermal process. Purchased network water remains a product input.

- Selected flow: Site-selected elementary water flow matching source compartment and geography
- Flow property / unit: Volume / m3
- Amount rule: Metered direct abstraction attributable to thermal processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional direct-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.020
  - Unit: m3/kg reference product
  - Basis: Broad screening interval before site-meter data replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Thermally processed meat-based product (`thermally_processed_product`)

Record cooked or braised product mass leaving the validated heat-treatment step together with time-temperature batch evidence and any draining basis.

- Selected flow: Internal thermally processed product transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming mass after thermal processing and declared draining point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg thermally processed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_batch`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`

##### Waste flows

###### Cooking losses and rejected product (`thermal_food_losses`)

Record scorched, spilled, rejected, or otherwise discarded product and separately identify collected cooking liquor or fat that is sold or used as a co-product.

- Selected flow: Site-selected food-waste flow matching material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected or lost mass from thermal processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`; `codex-cxc-1-1969-2022`
- Range: Provisional thermal-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg reference product
  - Basis: Broad screening interval before measured cooking-loss records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct air emissions from on-site thermal energy (`thermal_direct_air_emissions`)

When fuel is combusted on site, record each direct air emission by substance using site measurements or a disclosed calculation rule. Purchased electricity, steam, or heat shall not duplicate upstream generation emissions in the foreground.

- Selected flow: Site-selected elementary air-emission flow for each emitted substance
- Flow property / unit: Mass / kg
- Amount rule: Measured emission or fuel-use calculation by substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-method-2021`
- Range: Provisional direct-air-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg emitted substance/kg reference product
  - Basis: Deliberately broad per-substance screening interval; it is not an emission factor and shall be replaced by measured or calculated foreground values
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Post-cook handling, portioning, and packaging (`post_cook_packaging`)

#### Inputs

##### Product flows

###### Thermally processed product input (`post_cook_product_input`)

Record the internal product mass entering cooling, draining, holding, portioning, filling, or packaging.

- Selected flow: Internal thermally processed product transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred from thermal processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_post_cook_packaging`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging separately by material, recycled-content claim where relevant, and number of uses for reusable items.

- Selected flow: Site-selected packaging-material flow matching material and level
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill of materials or weighed packaging consumption net of unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `eu-pef-method-2021`
- Range: Provisional packaging-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg reference product
  - Basis: Broad screening interval for all packaging levels before the product-specific packaging BoM replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling and packaging electricity (`post_cook_electricity`)

Record electricity used by cooling, refrigeration, pumps, portioning, filling, sealing, coding, and packaging equipment.

- Selected flow: Site-selected electricity supply flow matching geography and voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or documented allocation from line-level electricity records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-pef-method-2021`; `codex-cxc-1-1969-2022`
- Range: Provisional post-cook-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kWh/kg reference product
  - Basis: Broad screening interval before sub-metered or allocated foreground electricity replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed. Reused transport packaging shall be represented according to its actual product-system treatment and use count.

##### Elementary flows

###### Refrigerant leakage (`post_cook_refrigerant_emissions`)

Record refrigerant leakage by substance when cooling or cold-room equipment is inside the foreground boundary.

- Selected flow: Site-selected elementary air-emission flow matching refrigerant substance
- Flow property / unit: Mass / kg
- Amount rule: Service-record mass balance or measured make-up less documented recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional refrigerant-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg refrigerant/kg reference product
  - Basis: Deliberately broad equipment-loss screening interval before service-record calculations replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Factory-gate reference product (`reference_product_output`)

Record the net edible mass of conforming product in the declared market state. `Sauce braised products` is the exact representative TianGong flow and shall not be rewritten as a generic category flow.

- Selected flow: Sauce braised products `61b586fc-1d4a-4abe-981d-19c27f9a33b0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net edible reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging scrap and post-cook rejects (`packaging_and_post_cook_waste`)

Record offcuts, damaged packaging, seal-test rejects, non-conforming finished product, and drained solids separately by material and treatment fate.

- Selected flow: Site-selected waste flow matching material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass from post-cook handling and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional packaging-and-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg reference product
  - Basis: Broad screening interval before measured waste records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No additional category-specific elementary output is prescribed beyond substance-specific refrigerant leakage and other measured direct releases.

### Process: Cleaning and sanitation (`cleaning_sanitation`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

Record water used for equipment, utensils, food-contact surfaces, floors, and clean-in-place systems within the reporting boundary.

- Selected flow: Site-selected potable or process-water product flow
- Flow property / unit: Mass / kg
- Amount rule: Metered cleaning water or documented allocation from sanitation-cycle records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`
- Range: Provisional cleaning-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.030
  - Unit: m3/kg reference product
  - Basis: Broad screening interval before measured sanitation-cycle water replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and disinfection agents (`cleaning_agents`)

Record detergents, alkalis, acids, disinfectants, and other cleaning chemicals by product and active concentration when relevant.

- Selected flow: Site-selected cleaning-agent product flow
- Flow property / unit: Mass / kg
- Amount rule: Purchase or dosing records allocated to covered sanitation cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`
- Range: Provisional cleaning-agent screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg reference product
  - Basis: Broad screening interval before product-dosing records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning energy (`cleaning_energy`)

Record electricity, steam, or heat used by hot-water preparation, pumps, clean-in-place systems, and sanitation equipment.

- Selected flow: Site-selected energy-carrier flow
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or documented allocation from sanitation-cycle and utility records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `codex-cxc-1-1969-2022`
- Range: Provisional cleaning-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg reference product
  - Basis: Broad screening interval before sanitation-cycle energy records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed.

##### Elementary flows

Directly abstracted cleaning water shall be represented as an elementary input instead of duplicating it as purchased water.

#### Outputs

##### Product flows

No product output is prescribed. Cleaning is an attributable support process allocated to the covered production.

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater discharged from cleaning, including the declared routing to on-site pretreatment, municipal treatment, or another destination.

- Selected flow: Site-selected wastewater flow matching composition and treatment route
- Flow property / unit: Mass / kg or Volume / m3
- Amount rule: Metered discharge or water-balance calculation, with retained unit and conversion basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`
- Range: Provisional cleaning-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.030
  - Unit: m3/kg reference product
  - Basis: Broad screening interval before measured discharge or site water balance replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct wastewater releases (`cleaning_waterborne_releases`)

Where wastewater is discharged directly to the environment after on-site treatment, record each measured or calculated released substance as an elementary flow. Wastewater sent to an external treatment service remains a waste flow and shall not duplicate treated-release emissions in this foreground dataset.

- Selected flow: Site-selected elementary water-emission flow by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: Measured effluent concentration multiplied by measured discharge volume, adjusted for sampling basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_quality`
- Sources: `eu-pef-method-2021`
- Range: Provisional direct-waterborne-release screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg emitted substance/kg reference product
  - Basis: Deliberately broad per-substance screening interval; it is not an effluent factor and shall be replaced by measured concentration-volume calculations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Wastewater and solid-waste handling (`wastewater_waste_handling`)

#### Inputs

##### Product flows

###### Purchased on-site waste-treatment utilities (`waste_treatment_utilities`)

Record electricity, fuel, water, and treatment chemicals used by on-site waste or wastewater treatment that are not already included in another process.

- Selected flow: Site-selected utility or treatment-chemical flow
- Flow property / unit: Applicable property / recorded unit
- Amount rule: Metered or purchase-record quantity attributable to covered treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

###### Collected foreground residuals (`collected_residuals`)

Receive the internal food losses, packaging wastes, sludges, and wastewater streams from the preceding foreground processes without duplicating their external crossing.

- Selected flow: Internal residual transfer matching each recorded waste stream
- Flow property / unit: Mass / kg or Volume / m3
- Amount rule: Sum of process-level residual records by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`; `codex-cxc-1-1969-2022`

##### Elementary flows

No elementary input is prescribed beyond direct environmental water withdrawals already assigned to their using process.

#### Outputs

##### Product flows

###### Saleable recovered products (`recovered_products`)

Record saleable fats, broths, meat fragments, or recovered materials as product flows only when they meet the producer's declared product specification and have a documented destination. Otherwise record them as waste.

- Selected flow: Site-selected product flow matching the recovered product
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched mass by recovered product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

###### Residuals dispatched for treatment (`residuals_to_treatment`)

Record each waste and wastewater stream at the site boundary with treatment route, destination, and any on-site pretreatment already performed.

- Selected flow: Site-selected waste or wastewater flow matching treatment route
- Flow property / unit: Mass / kg or Volume / m3
- Amount rule: Measured dispatch or discharge quantity by route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`
- Range: Provisional total-residual screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg or L/kg reference product, reported separately by stream
  - Basis: Broad screening interval before measured waste and wastewater records replace it; units shall not be added across unlike streams
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Direct releases from on-site waste treatment shall be recorded by substance and compartment; emissions assigned to external treatment datasets shall not be duplicated.

### Process: Finished-product storage and factory-gate dispatch (`finished_storage_dispatch`)

#### Inputs

##### Product flows

###### Conforming finished product held before release (`stored_finished_product`)

Record the internal finished-product mass and storage duration when controlled storage occurs before dispatch.

- Selected flow: Sauce braised products `61b586fc-1d4a-4abe-981d-19c27f9a33b0` as representative, or the actual covered product flow in the produced dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass-time inventory linked to dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product and recorded storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_storage`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`

###### Finished-storage electricity (`finished_storage_electricity`)

Record refrigeration, freezing, ventilation, controlled-atmosphere, lighting, and handling electricity attributable to covered product before gate release.

- Selected flow: Site-selected electricity supply flow matching geography and voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered storage electricity allocated using mass-time occupancy or another documented causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product and recorded storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_storage`
- Sources: `eu-pef-method-2021`; `codex-cxc-1-1969-2022`
- Range: Provisional finished-storage-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kWh/kg reference product
  - Basis: Broad screening interval for pre-gate storage before mass-time and metered records replace it
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed.

##### Elementary flows

Refrigerant leakage attributable to finished-product storage shall be recorded by substance using service records and shall not be duplicated in post-cook handling.

#### Outputs

##### Product flows

###### Product released at factory gate (`factory_gate_release`)

Record the same reference-product identity and 1 kg net mass at the declared gate. This internal release marker does not create a second product output in the aggregated dataset.

- Selected flow: Sauce braised products `61b586fc-1d4a-4abe-981d-19c27f9a33b0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net edible reference product released at factory gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Finished-product storage losses (`finished_storage_losses`)

Record expired, damaged, leaked, temperature-abused, or otherwise rejected product before factory-gate release.

- Selected flow: Site-selected food-waste flow matching treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured storage reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_storage`
- Sources: `codex-cxc-1-1969-2022`; `codex-cxc-58-2005`
- Range: Provisional finished-storage-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: Broad screening interval before dispatch and reject records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No additional category-specific elementary output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared lines, utilities, storage, cleaning, and treatment processes | Avoid allocation by sub-metering, batch tracking, or subdividing processes so that inputs, outputs, and emissions directly attributable to the covered product are isolated. System expansion may be used only when the additional function and reporting purpose are explicit. | `eu-pef-method-2021` |
| `allocation_physical_driver` | Shared burdens that cannot be subdivided | Allocate using a documented causal physical driver such as measured equipment time, energy demand, mass-time storage occupancy, cleaning cycle, wastewater load, or product mass when that driver represents the relationship between the shared process and outputs. | `eu-pef-method-2021` |
| `allocation_other_relationship_last` | Multifunctional processes with no defensible physical relationship | Use another relationship, including economic allocation, only after documenting why subdivision, system expansion, and a relevant physical relationship are not feasible. Record prices, period, market, and sensitivity where economic allocation is used. | `eu-pef-method-2021` |
| `allocation_rework_internal_loop` | Rework returned to the same covered product system | Treat internal rework as an internal mass loop. Count only added processing burdens and losses; do not create an external co-product credit or duplicate the rework input. | `eu-pef-method-2021` |
| `allocation_product_waste_status` | Fats, broths, trimmings, rejects, packaging residues, and wastewater | Classify an output as a co-product only when it meets a declared product specification and has a documented beneficial destination. Otherwise model it as waste with its treatment route. Keep the classification and any allocation decision consistent across mass balance, inventory, and dataset metadata. | `eu-pef-method-2021`; `codex-cxc-58-2005` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_bom` | `ingredient_receiving_storage`; `preparation_formulation` | Meat and other ingredient receipt, acceptance, issue, and internal transfer | Purchase, receiving, warehouse issue, recipe, batch, and weigh-scale records | ingredient_id; supplier; lot; species_or_material; physical_state; received_mass; accepted_mass; issued_mass; rework_mass; basis; batch_id | Reconcile calibrated scale and ERP or batch records by ingredient and formulation | kg | Each receipt and batch | Representative reporting period covering declared season and product mix | Every included site and covered line | Sum accepted and issued mass by ingredient, exclude unrelated products, and normalize by conforming reference-product mass | Scale calibration, lot traceability, recipe revision, acceptance record, and mass reconciliation |
| `cp_inbound_transport` | `ingredient_receiving_storage` | Supplier-to-site transport | Delivery note, route, carrier, vehicle-mode, and distance record | material_id; delivered_mass_t; origin; destination; mode; distance_km; load_factor_if_used; upstream_dataset_scope | Collect actual route records where available; otherwise document route model and distance source | tkm | Each route or representative route class | Same period as ingredient receipts | All material groups crossing the site gate | Sum mass_t × distance_km by mode and avoid duplication with delivered-product datasets | Delivery notes, route evidence, and scope check |
| `cp_water_records` | `preparation_formulation`; `thermal_processing`; `cleaning_sanitation` | Ingredient, process, cleaning, abstracted, and discharged water | Meter, recipe, sanitation-cycle, abstraction, and discharge records | meter_id; source_route; use_route; opening; closing; unit; batch_or_period; discharge_route | Read dedicated meters where available and reconcile shared meters by documented driver | kg or m3 | Each batch, sanitation cycle, or meter interval | Representative reporting period | Every included site and water route | Convert only with declared density; preserve original unit; reconcile water input, product incorporation, evaporation, and wastewater | Meter calibration, invoices, abstraction permits, recipe records, and water balance |
| `cp_utilities` | `ingredient_receiving_storage`; `preparation_formulation`; `thermal_processing`; `post_cook_packaging`; `finished_storage_dispatch` | Electricity, fuel, steam, heat, refrigeration, and utility consumption | Meter, invoice, fuel issue, equipment runtime, and production records | carrier; meter_id; opening; closing; unit; heating_value_basis; runtime; batch_id; line_id; product_mass | Prefer sub-metering; otherwise allocate shared utilities with a documented causal driver | kWh, MJ, or carrier unit | Meter interval and production batch | Representative reporting period covering production and storage variation | Every included site and shared utility system | Sum by carrier, subtract unrelated uses, allocate shared consumption, and normalize by conforming product mass | Meter calibration, invoices, fuel certificates, allocation driver, and reconciliation |
| `cp_thermal_batch` | `thermal_processing` | Thermal input, processed output, and time-temperature evidence | Batch sheet, equipment log, scale, temperature recorder, and deviation record | batch_id; input_mass; output_mass; start_time; end_time; target_temperature; achieved_temperature; holding_time; reject_mass | Collect from validated batch and monitoring systems | kg; °C; min | Each batch | Entire reporting period | Every included thermal route | Link mass and time-temperature records to the same batch; aggregate only conforming route-equivalent batches | Calibrated scales and sensors, validation evidence, deviation disposition, and batch release |
| `cp_post_cook_packaging` | `post_cook_packaging` | Post-cook product transfer, cooling, portioning, filling, and rejects | Line scale, cooling log, filler counter, batch, and reject records | batch_id; incoming_mass; drained_mass; packed_mass; bulk_mass; reject_mass; cooling_time; cooling_temperature | Collect per production batch and reconcile product transfers | kg; °C; min | Each batch | Entire reporting period | Every included line | Sum conforming output and separately report drained liquid, rejects, and internal transfers | Scale calibration, line reconciliation, cooling log, and release record |
| `cp_packaging_bom` | `post_cook_packaging` | Primary, secondary, and tertiary packaging | Packaging specification, issue, return, scrap, and production records | packaging_id; material; level; unit_mass; units_issued; unused_returns; scrap_mass; reuse_count | Use product-specific packaging BoM and reconcile with stock issues | kg | Each packaging specification and production period | Same period as product output | Every included packaging configuration | Net packaging consumption = issues − unused returns; report scrap separately and normalize by net edible product mass | Supplier specification, unit-mass check, stock reconciliation, and packaging revision |
| `cp_cleaning_records` | `cleaning_sanitation` | Cleaning water, chemicals, energy, and sanitation cycles | SSOP or sanitation programme, dosing, meter, runtime, and chemical issue records | cycle_id; area_or_equipment; water; chemical_product; concentration; dose; contact_time; energy; linked_campaign | Collect each sanitation cycle and link shared cycles to covered production using documented campaign or line basis | kg; m3; kWh; MJ | Each cycle | Entire reporting period | Product-contact and process areas within the boundary | Sum resources by cycle, exclude unrelated areas, allocate shared cycles causally, and normalize by covered product mass | Written procedure, dosing verification, meter evidence, concentration check, and completion record |
| `cp_waste_records` | `ingredient_receiving_storage`; `preparation_formulation`; `thermal_processing`; `post_cook_packaging`; `wastewater_waste_handling` | Food loss, rejects, packaging waste, sludge, recovered products, and dispatched residuals | Bin scale, waste manifest, invoice, transfer note, and treatment record | stream_id; material; product_or_waste_status; mass; volume; destination; treatment_route; hazardous_status; batch_or_period | Weigh by stream where feasible and reconcile internal transfer with site-boundary dispatch | kg or m3 | Each dispatch and reporting interval | Same period as product output | Every included site and residual route | Sum by stream and fate, avoid duplicate internal transfers, and normalize by reference-product mass | Calibrated scales, manifests, contractor records, and product-specification evidence for co-products |
| `cp_mass_balance` | `preparation_formulation`; `thermal_processing`; `post_cook_packaging`; `wastewater_waste_handling` | Batch and reporting-period mass reconciliation | Ingredient, product, rework, waste, wastewater-solids, and inventory-change records | input_mass; output_mass; rework_in; rework_out; waste_mass; saleable_coproduct_mass; inventory_change; moisture_or_evaporation_basis | Reconcile each route at batch level where feasible and at reporting-period level | kg | Each batch and reporting period | Entire reporting period | Each included process and site | Inputs + opening inventory = products + co-products + wastes + closing inventory + explained evaporation or moisture change + residual | Signed reconciliation, explained residual, and consistent wet/dry basis |
| `cp_direct_emissions` | `thermal_processing`; `wastewater_waste_handling` | Direct air emissions from on-site energy or treatment | Fuel record, stack measurement, permit report, and calculation worksheet | fuel_type; fuel_amount; heating_value; substance; measured_concentration; gas_flow; factor; factor_source; control_efficiency | Use site measurement where available; otherwise apply a disclosed factor to collected fuel data | kg substance | Measurement event and reporting period | Same period as fuel and product output | All in-boundary direct sources | Calculate each substance separately and prevent duplication with upstream energy datasets | Calibration, laboratory or permit report, factor source, and calculation audit trail |
| `cp_refrigerant_records` | `post_cook_packaging`; `finished_storage_dispatch` | Refrigerant make-up, recovery, and leakage | Equipment register and service record | equipment_id; refrigerant; opening_charge; additions; recovered_mass; closing_charge; service_date; process_assignment | Use service-record mass balance and assign equipment consistently | kg | Each service event and reporting period | Entire reporting period | All in-boundary cooling and storage equipment | Leakage = opening + additions − recovered − closing, bounded at zero after resolving data errors; allocate shared systems by causal cooling or mass-time driver | Technician record, refrigerant identity, equipment register, and reconciliation |
| `cp_wastewater_quality` | `cleaning_sanitation`; `wastewater_waste_handling` | Direct waterborne releases | Discharge meter, composite sample, laboratory result, and treatment log | sample_id; substance; concentration; discharge_volume; sampling_period; detection_limit; treatment_state; receiving_compartment | Pair representative concentration with the matching discharge volume and sampling period | kg substance; mg/L; m3 | Permit or monitoring frequency | Same period as wastewater discharge | Every direct environmental discharge point | Emitted mass = concentration × discharge volume with unit conversion and non-detect treatment disclosed | Accredited laboratory result, sampling method, meter calibration, and permit record |
| `cp_finished_storage` | `finished_storage_dispatch` | Finished mass-time occupancy, energy, rejects, and release | Warehouse inventory, temperature, electricity, dispatch, and reject records | product_id; market_state; mass; entry_time; release_time; storage_zone; temperature; electricity; reject_mass | Collect mass-time inventory and match it to storage-zone utilities and dispatch | kg; kg·day; kWh; °C | Continuous or daily inventory and each dispatch | Entire reporting period | Every included finished-product storage zone | Allocate storage utilities by mass-time occupancy or another documented causal driver and normalize by released product mass | Inventory reconciliation, temperature log, meter record, and dispatch evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | Normalized amount = attributable row amount / net conforming product mass released at factory gate | Attributable amount; net conforming product mass | Amount per 1 kg reference product | `eu-pef-method-2021` |
| `calc_batch_mass_balance` | Preparation, thermal processing, post-cook handling, and residual management | Reconcile inputs and opening inventory against products, co-products, wastes, closing inventory, and explained evaporation or moisture change; investigate and disclose the residual rather than forcing it to zero | `cp_ingredient_bom`; `cp_mass_balance`; `cp_waste_records`; `cp_water_records` | Process- and period-level mass balance with explained residual | `eu-pef-method-2021` |
| `calc_shared_utility_allocation` | Shared energy, water, storage, cleaning, and treatment systems | Apply the allocation hierarchy: direct sub-metering or subdivision first; otherwise use a documented causal physical driver; use another relationship only with justification and sensitivity | Shared utility total; covered and total driver quantities | Attributable utility amount by product | `eu-pef-method-2021` |
| `calc_inbound_transport` | Supplier-to-site transport not embedded upstream | Transport work = delivered mass in tonnes × route distance in kilometres, summed by mode and leg | `cp_inbound_transport` fields | tkm per 1 kg reference product | `eu-pef-method-2021` |
| `calc_refrigerant_loss` | Cooling and storage equipment | Refrigerant loss = opening charge + additions − recovered mass − closing charge; resolve any negative result as a data-quality error before normalization | `cp_refrigerant_records` fields | kg leakage by substance per 1 kg reference product | `eu-pef-method-2021` |
| `calc_direct_emission` | On-site combustion and treatment emissions | Emitted mass by substance = measured mass or collected activity data × disclosed factor, adjusted only by documented control efficiency; do not use the provisional QA range as a factor | `cp_direct_emissions` fields | kg direct emission by substance per 1 kg reference product | `eu-pef-method-2021` |
| `calc_waterborne_release` | Direct wastewater discharge | Emitted mass = representative concentration × matching discharge volume with explicit unit conversion; state non-detect handling and treatment state | `cp_wastewater_quality` fields | kg released substance per 1 kg reference product | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Product, ingredients, packaging, wastes, and source data | Retain product formulation, lot or batch, supplier, site, reporting period, flow identity, and unit basis so every aggregated value can be traced to its source records. | Batch genealogy, purchase and issue records, specifications, and data extract audit trail |
| `dq_temporal_coverage` | Foreground activity data | Use one representative reporting period that covers declared seasonal, recipe, route, and operating variation. State excluded shutdowns, campaigns, missing intervals, and any extrapolation. | Coverage table, production calendar, meter completeness, and gap log |
| `dq_representativeness` | Foreground and upstream datasets | Assess technological, geographical, and time-related representativeness and precision. Explain proxies and mismatches for meat species, ingredient technology, electricity geography, packaging, transport, treatment, and market state. | Representativeness assessment and proxy justification |
| `dq_completeness_consistency` | Complete inventory | Demonstrate completeness and methodological consistency for ingredients, packaging, utilities, products, co-products, wastes, wastewater, and direct releases. Apply consistent wet/dry, gross/net, and edible/package mass bases. | Mass, water, energy, and waste reconciliation; documented cut-off screen |
| `dq_measurement_control` | Scales, meters, temperature sensors, laboratory data, and calculated values | Retain calibration or verification status, resolution, sampling basis, conversion factors, and calculation worksheets. Do not replace foreground values with provisional PCR screening ranges. | Calibration certificates, laboratory reports, formulas, and review record |
| `dq_method_disclosure` | Allocation, cut-off, data gaps, and downstream exclusions | Document the allocation hierarchy applied, every exclusion, cumulative cut-off evidence, data gaps, proxy datasets, and the gate nature of the published dataset. | Method statement, sensitivity where relevant, limitation register, and reviewer evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require exactly 1 kg net edible product using `Sauce braised products` UUID `61b586fc-1d4a-4abe-981d-19c27f9a33b0`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. Reject packaging-inclusive reference mass. |  |
| `validate_representative_flow_scope` | Product identity | Require a declaration that `Sauce braised products` is the representative real CPC 21186 product flow, not a generic name for all meat-based dishes. For another covered product, require the actual product name and a representativeness limitation. |  |
| `validate_required_qualifiers` | Functional unit and reference product | Require all listed qualifiers, including meat species and content basis, formulation family, readiness state, process route, market state, packaging, storage temperature, shelf-life, geography, and production period. | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `validate_process_coverage` | Foreground process map | Require all applicable receiving, preparation, thermal, post-cook, packaging, cleaning, residual-management, and finished-storage operations. Any omitted applicable operation shall be justified and assessed under the cut-off rule. | `eu-pef-method-2021`; `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `validate_mass_balance` | Product routes and reporting period | Require reconciled ingredient, product, co-product, rework, waste, wastewater-solids, inventory-change, evaporation, and moisture-change terms. Unexplained residuals shall be reported and resolved; do not force balance by adjusting the reference product. | `eu-pef-method-2021` |
| `validate_no_double_counting` | Upstream and foreground modelling | Reject duplicate upstream burdens, internal-transfer exchanges, treatment emissions, or rework. Purchased energy includes upstream supply while only on-site direct emissions are elementary foreground outputs. | `eu-pef-method-2021` |
| `validate_allocation_hierarchy` | Shared and multifunctional processes | Require subdivision or system expansion assessment first, a relevant physical relationship second, and another relationship only with justification. Require drivers and allocated totals to reconcile to the shared total. | `eu-pef-method-2021` |
| `validate_cutoff_and_completeness` | Exclusions and inventory completeness | Reject cut-off of specified important flows. For any other exclusion, require documented screening, cumulative 3% checks for material, energy, and environmental significance, and limitation disclosure. | `eu-pef-method-2021` |
| `validate_food_process_records` | Thermal processing, cooling, storage, water, and sanitation | Require route-appropriate time-temperature, water-source, cleaning-cycle, and waste-disposition records sufficient to support the inventory and declared product state. | `codex-cxc-1-1969-2022`; `codex-cxc-58-2005` |
| `validate_provisional_ranges` | Every `reasoned_estimate` range | Treat provisional ranges only as QA screens. Require actual dataset amounts from foreground records or calculations, and flag any use of a provisional bound as a default emission factor or final amount. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for a declared prepared meat-based dish or meal |
| downstream_use | `secondary_dataset`; `background_dataset` for lifecycle models whose product, technology, geography, market state, packaging, and time period match the declared profile |
| allowed_use | Modelling production of the declared prepared meat-based dish or meal through factory-gate release; comparative or aggregate use only after checking reference-flow, recipe, meat species, processing route, packaging, storage, allocation, and data-quality compatibility |
| excluded_use | Generic representation of every CPC 21186 product without qualification; raw meat, slaughter, meat preparation sold raw, fish- or vegetable-based meals, catering service, retail, consumer cooking, consumption, or end-of-life without additional modules; use of provisional ranges as final inventory factors |
| required_metadata | PCR id and version state; actual product name; representative-flow relationship; CPC mapping context; meat species and content basis; recipe family; preparation and thermal route; ready state; chilled, frozen, or shelf-stable state; packaging; net mass basis; site and geography; production period; storage temperature and shelf-life; included and excluded stages; allocation; cut-offs; upstream dataset list |
| required_quality_disclosure | Foreground period and coverage; mass, water, energy, and waste reconciliation; meter and scale status; ingredient and packaging BoM specificity; technological, geographical, and temporal representativeness; precision; proxies; data gaps; allocation drivers; exclusions; direct-emission calculation methods; status of every provisional range |
| update_trigger | Material change in recipe or meat-content basis, meat species, thermal route, packaging, market state, storage requirement, site or geography, energy or water system, waste or wastewater treatment, allocation method, reference-flow identity, source method, or foreground data older than the producer's accepted representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-pef-method-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng/pdf (retrieved 2026-08-11) | Functional-unit dimensions; supply-chain system boundary; company-specific BoM and manufacturing data; co-product, by-product, and waste disclosure; allocation hierarchy; cut-off controls; completeness and data-quality requirements |
| `codex-cxc-1-1969-2022` | `standard` | FAO and WHO, General Principles of Food Hygiene, CXC 1-1969, revised 2022, Rome 2023, DOI 10.4060/cc6125en, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B1-1969%2FCXC_001e.pdf (retrieved 2026-08-11) | Food-processing scope; time-temperature records; safe water; cleaning and disinfection cycles; drainage, wastewater, and waste-management process inclusion; quality evidence for product-state declarations |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius Commission, Code of Hygienic Practice for Meat, CXC 58-2005, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B58-2005%2FCXC_058e.pdf (retrieved 2026-08-11) | Meat preparation and manufactured-meat identity; temperature-controlled handling; cooling, chilling, packaging, sanitation, wastewater, and waste process decomposition; product and waste-status evidence |
