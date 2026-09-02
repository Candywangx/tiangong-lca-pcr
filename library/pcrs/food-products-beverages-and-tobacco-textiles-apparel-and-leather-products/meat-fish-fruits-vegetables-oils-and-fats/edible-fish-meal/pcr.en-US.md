---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-fish-meal
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Edible fish meal

## 1. Scope and Applicability

This PCR applies to edible, food-grade fish meal produced by stabilizing, drying, and comminuting edible fish material into a meal or powder for human-food use. It covers products supplied in bulk or consumer/food-manufacturing packaging, with the preservation route and product condition declared.

It excludes non-edible fish meal intended only for feed, fertilizer, or industrial use; whole or portioned dried or smoked fish that is not comminuted into meal; prepared meals in which fish meal is only an ingredient; isolated fish oils or protein isolates; and non-fish meals. Species, wild-caught or farmed origin, raw-material form, additives, salt or smoke treatment, target moisture, packaging, and food-safety status are required qualifiers because they can materially change the inventory and product function.

The default reporting boundary is cradle-to-factory-gate. Foreground collection begins when edible fish raw material and other purchased inputs are received at the fish-meal facility. Fishing or aquaculture, landing, and production of purchased energy, water, ice, ingredients, and packaging are represented by linked upstream datasets rather than being recreated inside the foreground system.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-fish-meal |
| classification_refs | CPC 3.0: 21233, Edible fish meal (exact mapping context) |
| covered_products | Food-grade edible fish meal or fish powder made by stabilization, drying, and comminution of edible fish material |
| excluded_products | Feed-grade or industrial fish meal; fertilizer; whole or portioned dried/smoked fish; fish-based prepared dishes; isolated fish oil or protein isolate; non-fish meal |
| representative_product | Packaged edible fish meal at the producing facility gate |
| production_route | Receipt and preparation; thermal or equivalent stabilization; dewatering where used; drying; grinding/sieving; optional salting or smoking treatment; cooling; packaging; applicable cold storage; wastewater and residual management |
| market_state | Food-grade dry meal or powder, bulk or packaged, with moisture condition, preservation route, and storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible fish meal suitable for its declared human-food application |
| How much | 1 kg net mass of edible fish meal at the producing facility gate |
| How well | Conforming to the declared species/material composition, particle form, moisture condition, salt/smoke/additive status, packaging, storage condition, and applicable food-safety specification |
| How long or cycle | One production lot through release at the facility gate; shelf life is declared but no consumption duration is modelled |
| reference_flow_link | The reference flow is the packaged or declared bulk edible fish meal output from `packaging_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product mass |
| Reference product flow | Edible fish meal `fa402946-6236-41bb-8a2d-f7890b2e75cf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species or species group; wild-caught/farmed and geographic origin; raw-material form; edible-grade specification; preservation and drying route; salt/smoke/additive status; moisture basis; particle form; bulk/packaging format; storage temperature; production geography and period |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference edible fish meal | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net edible fish meal, excluding pallet and transport packaging; state whether immediate packaging is included in the inventory. |
| `moisture_basis` | Raw material, intermediate, and product mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass as measured and separately record moisture fraction for the raw material, dried intermediate, and released meal; do not convert between wet and dry basis without retaining the formula and test result. |
| `utility_conversion` | Electricity and thermal energy | Energy | kWh for electricity; MJ for fuels, steam, or heat | Preserve measured utility units and conversion factors; do not add electricity and thermal energy as if they were interchangeable. |
| `packaging_net_mass` | Packaging and reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize product to net mass and report packaging materials separately by material and measured mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Edible fish raw material at receipt, with species/source, physical form, preservation condition, moisture, temperature, and supplier/lot identity declared |
| starting_condition_role | Purchased or transferred product input to the foreground edible-fish-meal facility |
| product_classification_scope | Edible fish meal as a semantic product category; CPC 3.0 code 21233 is mapping context rather than canonical identity |
| recursive_input_rule | If an input is already edible fish meal within this category, record it as a purchased product input with its upstream dataset and amount; do not recursively reproduce its manufacture in the same foreground package. |
| upstream_dataset_requirement | Link representative upstream datasets for fish raw material, transport to the facility, energy carriers, water/ice, ingredients, packaging, treatment services, and other purchased inputs. |
| disclosure | Declare excluded stages, outsourced operations, preservation route, cold-chain use, allocation events, co-products, waste destinations, and whether bulk or immediate packaging is represented. |

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `boundary_gate_rule` | Cradle-to-factory-gate model | Include all foreground operations from receipt through released edible fish meal, including preparation, stabilization, dewatering when used, drying, milling/sieving, cooling, packaging, applicable cold storage, cleaning, wastewater, residual management, and direct releases. Connect upstream and treatment datasets rather than truncating those burdens. | `eu-pef-2021-2279` |
| `boundary_food_safety_rule` | Food-grade processing | Include process steps and monitoring needed to control biological, chemical, and physical hazards for the declared fish material and preservation route; rejected material and sanitation flows cross the foreground boundary. | `codex-cxc-52-2003` |
| `boundary_cutoff_rule` | Inventory completeness | A flow may be omitted only when its absence is justified and disclosed as immaterial to mass, energy, environmental significance, and compliance; hazardous releases, refrigerants, food-safety rejects, and allocation-relevant co-products shall not be omitted solely because their mass is small. | `eu-pef-2021-2279`; `codex-cxc-52-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | Raw-material receipt and preparation | required | Always | Establish starting condition; record fish input, ice/cold preservation, sorting, washing, trimming, and prepared material | kg prepared fish material |
| `stabilization_drying` | Stabilization, dewatering, and drying | required | Always; unit operations reflect the declared technology | Stabilize edible material and reduce moisture to the declared meal condition | kg dried stabilized material |
| `milling_finishing` | Milling, sieving, and finishing | required | Always | Produce the declared particle form and record recirculation or rejects | kg bulk edible fish meal |
| `packaging_release` | Cooling, packaging, storage, and release | required | Always; cold storage only when used | Produce the reference flow at the facility gate | 1 kg net edible fish meal |
| `wastewater_residuals` | Wastewater and residual treatment | conditional | When treatment occurs within the reporting organization or direct releases are recorded | Record treatment inputs, recovered materials, wastes, and elementary releases | kg wastewater or residual handled |

### Process: Raw-material receipt and preparation (`receipt_preparation`)

#### Inputs

##### Product flows

###### Chilled raw fish (`raw_fish_chilled_input`)

Record accepted chilled raw fish by species/source, lot, wet mass, moisture, and temperature; link its upstream dataset.

- Selected flow: Raw fish, chilled, delivered to processing plant `dd9e0589-ca55-4dad-8940-79a60c3bd7af`
- Applicability: Chilled raw-fish input only; use the other atomic raw-fish rows for frozen fish, fresh/chilled fillets or fish meat, or edible offal
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted raw-material wet mass allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Range: Replaceable raw-material-to-meal yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen fish (`raw_frozen_fish_input`)

Record accepted frozen fish by species/source, lot, wet mass, moisture, and incoming frozen condition.

- Selected flow: Frozen Fish `bbae8c72-d732-4f53-bdd5-aff8a0f39d48`
- Applicability: Frozen whole-fish or equivalent frozen-fish input only
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted raw-material wet mass allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Fresh or chilled fish fillets and fish meat (`raw_fish_meat_input`)

Record accepted fresh or chilled fish fillets and fish meat, whether or not minced, by species/source and lot.

- Selected flow: Fish fillets and fish meat (whether or not minced), fresh or chilled `a1c31d45-a225-426f-908a-f79eae6c071f`
- Applicability: Fresh or chilled fillet/fish-meat input only
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted raw-material wet mass allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Edible fish offal (`raw_edible_fish_offal_input`)

Record edible fish fins, heads, tails, maws, and other edible offal separately when they are accepted as food-grade raw material.

- Selected flow: Edible fish offal, fish fins, heads, tails, maws and other edible fish offal `be045cb1-719b-41b1-9bec-bf27cf50c401`
- Applicability: Food-grade edible-offal input only; inedible rejects remain waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted raw-material wet mass allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Ice supplied from the landing site (`ice_cold_input`)

Record purchased landing-site ice when it enters with or is added to the raw fish; electricity for mechanical refrigeration is recorded separately.

- Selected flow: Ice, at landing site `b30afcbe-38ce-47a9-9da5-a1278329b9ba`
- Applicability: Purchased water ice supplied at the landing-site condition represented by the verified flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured purchased or added mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_records`
- Range: Replaceable ice/cold-medium QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fish material (`prepared_fish_output`)

Calculate prepared edible material from measured accepted input, segregated rejects, and preparation losses.

- Selected flow: Prepared edible fish
- Flow property / unit: Mass / kg
- Amount rule: accepted raw fish minus measured segregated preparation residuals, reconciled for retained ice/water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Rejected or inedible preparation residuals (`preparation_residuals`)

Record separately by destination; material demonstrably sold as a co-product remains a product flow and enters allocation rather than being labelled waste.

- Selected flow: Inedible fish offal
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Elementary flows

### Process: Stabilization, dewatering, and drying (`stabilization_drying`)

#### Inputs

##### Product flows

###### Prepared fish material (`prepared_fish_input`)

Transfer the reconciled prepared material from `receipt_preparation` without adding upstream production a second time.

- Selected flow: Prepared edible fish
- Flow property / unit: Mass / kg
- Amount rule: transferred measured/calculated prepared mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried stabilized material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

###### Process and sanitation water (`process_water_input`)

Record metered or allocated water used for preparation, cleaning, sanitation, steam contact, and process addition, avoiding double counting returned condensate.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered water or documented allocation from facility meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Replaceable water-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### CN low-voltage grid electricity for processing (`processing_grid_electricity_low_voltage`)

Record this supply only for a Chinese low-voltage grid connection serving pumps, dewatering, dryers, ventilation, and controls.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV, CN `50657322-939c-4829-a87b-47c093bfa6a7`
- Applicability: Chinese grid consumption mix below 1 kV only; do not use for medium-voltage or non-CN supply
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered electricity or documented allocation from facility meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Replaceable processing-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### CN medium-voltage grid electricity for processing (`processing_grid_electricity_medium_voltage`)

Record this supply only for a Chinese medium-voltage grid connection serving the process equipment.

- Selected flow: Alternating current, electricity mix, consumption mix, 1-35 kV, CN `3d76981f-964a-4865-b588-0e067a2a1163`
- Applicability: Chinese grid consumption mix at 1-35 kV only; do not use for low-voltage or non-CN supply
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered electricity or documented allocation from facility meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Purchased steam for stabilization and drying (`processing_steam_input`)

Record purchased or transferred steam only when the verified supply pressure is 11.0 MPaG.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Applicability: 11.0 MPaG steam supply only; another pressure or generation route requires a separate atomic exchange
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered steam or condensate-corrected engineering balance, converted to delivered energy for utility reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Replaceable thermal-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: MJ
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased industrial hot water (`processing_hot_water_input`)

Record hot water that crosses the foreground boundary as a supplied thermal product, retaining inlet and return temperatures.

- Selected flow: Industrial hot water
- Applicability: Purchased or transferred hot-water supply only; do not combine with steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered hot-water mass and temperature difference converted to delivered energy without double-counting return water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Natural gas for on-site heat (`processing_natural_gas_input`)

Record pipeline natural gas combusted on site for cooking, evaporation, or drying.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered mass or volume converted with measured density and declared net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Liquefied petroleum gas for on-site heat (`processing_lpg_input`)

Record LPG combusted on site only where it is the heat source.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured cylinder or bulk-tank issue reconciled to stock change and converted using the declared calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Diesel oil for on-site heat (`processing_diesel_input`)

Record diesel oil combusted on site only where it is the dryer, boiler, or backup fuel.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured tank issue reconciled to stock change and converted using the declared net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Heavy fuel oil for on-site heat (`processing_heavy_fuel_oil_input`)

Record heavy fuel oil combusted on site only where it is the actual boiler or dryer fuel.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Measured tank issue reconciled to stock change and converted using the declared net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Untreated wood chips for on-site heat (`processing_biomass_wood_chips_input`)

Record untreated wood chips combusted on site only where biomass supplies process heat; retain species and moisture records.

- Selected flow: Untreated wood chips
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass with moisture and lower-heating-value conversion retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Food-grade salt (`food_grade_salt_input`)

Record sodium chloride only when the declared formulation or preservation route uses added salt.

- Selected flow: Salt, food-grade, for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass charged to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Range: Replaceable salt/smoke-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquid smoke flavouring (`liquid_smoke_input`)

Record liquid smoke flavouring only when it is charged directly to the declared smoked-product route.

- Selected flow: Liquid smoke flavouring
- Flow property / unit: Mass / kg
- Amount rule: Measured mass charged to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`

###### Untreated hardwood chips for food smoking (`smoking_wood_chips_input`)

Record untreated hardwood chips only when an on-site smoke generator is used; retain wood species and moisture.

- Selected flow: Untreated hardwood chips for food smoking
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass charged to the smoke generator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried stabilized fish material (`dried_material_output`)

Record output wet mass and moisture fraction after stabilization/drying; retain product-hold and release records.

- Selected flow: Dried stabilized edible fish
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass with moisture test result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried stabilized material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Wastewater from processing and sanitation (`process_wastewater_output`)

Record discharged or treated wastewater and its destination; separately report retained solids when measured.

- Selected flow: Fish-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or water-balance estimate documented by calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Range: Replaceable wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated fish solids (`separated_fish_solids_output`)

Record wet separated fish solids and destination; saleable recovered oil or soluble concentrate remains a product output and enters allocation.

- Selected flow: Separated fish solids
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Range: Replaceable residual-output QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 9
  - Unit: kg
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fish dryer fines (`dryer_fines_output`)

Record collected fish fines removed from the dryer separately from wet separated solids.

- Selected flow: Fish dryer fines
- Flow property / unit: Mass / kg
- Amount rule: Measured dry mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### Fossil carbon dioxide to air (`direct_fossil_co2_air`)

Report direct fossil carbon dioxide from on-site fossil-fuel combustion without including upstream fuel-production emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or fuel-specific calculation using retained carbon-content and oxidation data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Nitrogen oxides to air (`direct_nox_air`)

Report nitrogen oxides from on-site combustion, drying, or smoking using monitoring or a retained equipment- and fuel-specific calculation.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack release or documented emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Sulfur dioxide to air (`direct_so2_air`)

Report sulfur dioxide from sulfur-bearing on-site fuel using monitoring or a retained sulfur-balance calculation.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack release or documented fuel-sulfur calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Fine particulate matter to air (`direct_pm25_air`)

Report primary particulate matter between 0.2 and 2.5 micrometres from combustion, drying, or smoke generation after controls.

- Selected flow: Particulate matter, 0.2-2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack release or documented equipment-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Chemical oxygen demand to water (`direct_cod_water`)

Report chemical oxygen demand only for a monitored direct water release from this process.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by monitored discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Total nitrogen to water (`direct_total_n_water`)

Report total nitrogen only for a monitored direct water release from this process.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by monitored discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

### Process: Milling, sieving, and finishing (`milling_finishing`)

#### Inputs

##### Product flows

###### Dried stabilized fish material (`dried_material_input`)

Transfer measured dried material from `stabilization_drying`.

- Selected flow: Dried stabilized edible fish
- Flow property / unit: Mass / kg
- Amount rule: transferred measured mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk edible fish meal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### CN low-voltage grid electricity for milling (`milling_grid_electricity_low_voltage`)

Record this supply only for a Chinese low-voltage grid connection serving grinding, sieving, dust control, and material transfer.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV, CN `50657322-939c-4829-a87b-47c093bfa6a7`
- Applicability: Chinese grid consumption mix below 1 kV only
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered electricity or documented allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### CN medium-voltage grid electricity for milling (`milling_grid_electricity_medium_voltage`)

Record this supply only for a Chinese medium-voltage grid connection serving milling equipment.

- Selected flow: Alternating current, electricity mix, consumption mix, 1-35 kV, CN `3d76981f-964a-4865-b588-0e067a2a1163`
- Applicability: Chinese grid consumption mix at 1-35 kV only
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered electricity or documented allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Compressed air for milling and conveying (`milling_compressed_air_input`)

Record compressed air only when pneumatic controls or conveying serve the milling process.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered compressed-air volume or documented allocation from compressor records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk edible fish meal (`bulk_meal_output`)

Record bulk output mass, moisture, particle specification, and released or reworked status.

- Selected flow: Edible fish meal `fa402946-6236-41bb-8a2d-f7890b2e75cf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured bulk output mass before immediate packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk edible fish meal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Collected fish-meal dust (`milling_dust_output`)

Record collected fish-meal dust that leaves the process for disposal or recovery; internal return is not a waste output.

- Selected flow: Collected fish-meal dust
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Off-spec edible fish meal (`milling_offspec_meal_output`)

Record off-spec edible fish meal sent to disposal; approved internal rework or saleable output remains a product flow.

- Selected flow: Off-spec edible fish meal
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Fish-meal sieve oversize (`milling_sieve_oversize_output`)

Record sieve oversize that leaves the process as waste separately from dust and off-spec meal.

- Selected flow: Fish-meal sieve oversize
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

### Process: Cooling, packaging, storage, and release (`packaging_release`)

#### Inputs

##### Product flows

###### Bulk edible fish meal input (`bulk_meal_input`)

Transfer released bulk meal from `milling_finishing` without duplicating its upstream burdens.

- Selected flow: Edible fish meal `fa402946-6236-41bb-8a2d-f7890b2e75cf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Paper bag packaging (`packaging_paper_bag_input`)

Record paper bags used for the declared bulk or immediate packaging format.

- Selected flow: Paper Bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchase, issue, and stock-balanced paper-bag mass allocated to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Replaceable packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Plastic film or liner (`packaging_plastic_film_input`)

Record plastic film used as an inner liner, pouch, wrap, or seal; declare polymer, thickness, recycled content, and food-contact status.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchase, issue, and stock-balanced film mass allocated to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Corrugated board box (`packaging_corrugated_box_input`)

Record corrugated board boxes used for the declared immediate or secondary pack.

- Selected flow: Corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchase, issue, and stock-balanced corrugated-box mass allocated to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polypropylene woven sack (`packaging_pp_woven_sack_input`)

Record polypropylene woven sacks only when used in the declared packaging format.

- Selected flow: Polypropylene woven sack
- Flow property / unit: Mass / kg
- Amount rule: Purchase, issue, and stock-balanced sack mass allocated to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Food-grade steel drum (`packaging_steel_drum_input`)

Record steel drums only when they are the declared food-grade bulk packaging.

- Selected flow: Food-grade steel drum
- Flow property / unit: Mass / kg
- Amount rule: Purchase, issue, and stock-balanced drum mass allocated to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### CN low-voltage grid electricity for cold storage (`storage_grid_electricity_low_voltage`)

Record this supply only when controlled-temperature cooling or storage uses a Chinese low-voltage grid connection.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV, CN `50657322-939c-4829-a87b-47c093bfa6a7`
- Applicability: Chinese grid consumption mix below 1 kV only
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered or allocated electricity over the recorded storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_records`
- Range: Replaceable storage/cold-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### CN medium-voltage grid electricity for cold storage (`storage_grid_electricity_medium_voltage`)

Record this supply only when controlled-temperature cooling or storage uses a Chinese medium-voltage grid connection.

- Selected flow: Alternating current, electricity mix, consumption mix, 1-35 kV, CN `3d76981f-964a-4865-b588-0e067a2a1163`
- Applicability: Chinese grid consumption mix at 1-35 kV only
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered or allocated electricity over the recorded storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_records`

###### R134a refrigerant make-up (`storage_r134a_makeup_input`)

Record R134a issued to cold rooms or freezers after charging or leakage.

- Selected flow: Refrigerant R134a `a4facd51-1e5c-422e-8461-e9562c045164`
- Applicability: Equipment charged with R134a only
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or issued make-up mass assigned from the equipment refrigerant ledger
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

###### R404A refrigerant make-up (`storage_r404a_makeup_input`)

Record R404A issued to industrial freezing or cold-storage equipment after charging or leakage.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Applicability: Equipment charged with R404A only
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or issued make-up mass assigned from the equipment refrigerant ledger
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

###### R717 ammonia refrigerant make-up (`storage_r717_makeup_input`)

Record refrigeration-grade ammonia issued to equipment after charging or leakage.

- Selected flow: Refrigeration-grade ammonia R717
- Applicability: Equipment charged with R717 only
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued make-up mass assigned from the equipment refrigerant ledger
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

###### R744 carbon dioxide refrigerant make-up (`storage_r744_makeup_input`)

Record refrigeration-grade carbon dioxide issued to equipment after charging or leakage.

- Selected flow: Refrigeration-grade carbon dioxide R744
- Applicability: Equipment charged with R744 only
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued make-up mass assigned from the equipment refrigerant ledger
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released edible fish meal (`reference_product_output`)

This is the quantitative reference after product release, with net mass and required qualifiers recorded.

- Selected flow: Edible fish meal `fa402946-6236-41bb-8a2d-f7890b2e75cf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net released product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

##### Elementary flows

###### R134a refrigerant loss to air (`storage_r134a_emission_air`)

Calculate R134a released to air from equipment charge and service records.

- Selected flow: HFC-134a, to air
- Applicability: Equipment charged with R134a only
- Flow property / unit: Mass / kg
- Amount rule: Calculated R134a loss from charge and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Range: Replaceable refrigerant-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: per 1 kg released edible fish meal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R404A refrigerant loss to air (`storage_r404a_emission_air`)

Calculate R404A released to air from equipment charge and service records.

- Selected flow: Refrigerant R404A, to air
- Applicability: Equipment charged with R404A only
- Flow property / unit: Mass / kg
- Amount rule: Calculated R404A loss from charge and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R717 ammonia refrigerant loss to air (`storage_r717_emission_air`)

Calculate ammonia released to air from R717 equipment charge and service records.

- Selected flow: Ammonia from R717, to air
- Applicability: Equipment charged with R717 only
- Flow property / unit: Mass / kg
- Amount rule: Calculated R717 ammonia loss from charge and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R744 carbon dioxide refrigerant loss to air (`storage_r744_emission_air`)

Calculate carbon dioxide released to air from R744 equipment charge and service records.

- Selected flow: Carbon dioxide from R744, to air
- Applicability: Equipment charged with R744 only
- Flow property / unit: Mass / kg
- Amount rule: Calculated R744 carbon-dioxide loss from charge and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released edible fish meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

### Process: Wastewater and residual treatment (`wastewater_residuals`)

#### Inputs

##### Product flows

###### CN low-voltage grid electricity for treatment (`treatment_grid_electricity_low_voltage`)

Record this supply only for Chinese low-voltage grid electricity used by on-site wastewater or residual treatment.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV, CN `50657322-939c-4829-a87b-47c093bfa6a7`
- Applicability: Chinese grid consumption mix below 1 kV only
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered electricity or documented allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### CN medium-voltage grid electricity for treatment (`treatment_grid_electricity_medium_voltage`)

Record this supply only for Chinese medium-voltage grid electricity used by on-site treatment.

- Selected flow: Alternating current, electricity mix, consumption mix, 1-35 kV, CN `3d76981f-964a-4865-b588-0e067a2a1163`
- Applicability: Chinese grid consumption mix at 1-35 kV only
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered electricity or documented allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Process water for treatment (`treatment_process_water_input`)

Record new process water used to prepare treatment chemicals or wash on-site treatment equipment.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or purchased mass attributable to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Purchased steam for treatment (`treatment_steam_input`)

Record steam used by on-site treatment only when the verified supply pressure is 11.0 MPaG.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Applicability: 11.0 MPaG steam supply only
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or condensate-corrected steam mass attributable to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Purchased industrial hot water for treatment (`treatment_hot_water_input`)

Record hot water that crosses the treatment boundary as a supplied thermal product.

- Selected flow: Industrial hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered supply mass and temperature difference converted to delivered energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Natural gas for treatment (`treatment_natural_gas_input`)

Record natural gas combusted by on-site treatment equipment.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered mass or volume converted with measured density and declared net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Liquefied petroleum gas for treatment (`treatment_lpg_input`)

Record LPG combusted by on-site treatment equipment.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered cylinder or bulk-tank issue reconciled to stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Diesel oil for treatment (`treatment_diesel_input`)

Record diesel oil consumed by on-site treatment equipment.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered tank issue reconciled to stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Heavy fuel oil for treatment (`treatment_heavy_fuel_oil_input`)

Record heavy fuel oil consumed by on-site treatment equipment.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered tank issue reconciled to stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Untreated wood chips for treatment heat (`treatment_biomass_wood_chips_input`)

Record untreated wood chips consumed by on-site thermal treatment equipment.

- Selected flow: Untreated wood chips
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass with moisture retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Sodium hydroxide solution for treatment (`treatment_sodium_hydroxide_input`)

Record sodium hydroxide solution used for pH control, with concentration retained.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased or stock-balanced solution mass with concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Ferric chloride solution for treatment (`treatment_ferric_chloride_input`)

Record ferric chloride solution used as coagulant, with concentration retained.

- Selected flow: Ferric chloride solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased or stock-balanced solution mass with concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Polyacrylamide flocculant for treatment (`treatment_polyacrylamide_input`)

Record polyacrylamide flocculant used in on-site treatment, with grade and concentration retained.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Purchased or stock-balanced active-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Waste flows

###### Fish-processing wastewater accepted for on-site treatment (`treatment_fish_wastewater_input`)

Transfer measured fish-processing wastewater from the producing processes without double counting.

- Selected flow: Fish-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Separated fish solids accepted for on-site treatment (`treatment_fish_solids_input`)

Transfer measured separated fish solids from the producing processes without double counting.

- Selected flow: Separated fish solids
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered fish oil (`recovered_fish_oil_output`)

Record recovered fish oil only when it meets a documented product specification and leaves for beneficial use; apply the allocation rules.

- Selected flow: Recovered fish oil
- Flow property / unit: Mass / kg
- Amount rule: measured saleable output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Concentrated fish solubles (`recovered_fish_solubles_output`)

Record concentrated fish solubles only when they meet a documented product specification and leave for beneficial use; apply the allocation rules.

- Selected flow: Concentrated fish solubles
- Flow property / unit: Mass / kg
- Amount rule: measured saleable output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Waste flows

###### Fish-processing wastewater-treatment sludge (`treatment_sludge_output`)

Record dewatered or wet sludge mass and destination, and link the applicable external treatment dataset.

- Selected flow: Fish-processing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### Methane to air from treatment (`treatment_methane_air`)

Report methane released from on-site biological treatment using monitoring or a retained calculation.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated methane release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Nitrous oxide to air from treatment (`treatment_n2o_air`)

Report nitrous oxide released from on-site nitrogen treatment using monitoring or a retained calculation.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated nitrous-oxide release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Chemical oxygen demand to water from treatment (`treatment_cod_water`)

Report chemical oxygen demand in treated effluent from monitored concentration and discharge volume.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by monitored discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Total nitrogen to water from treatment (`treatment_total_n_water`)

Report total nitrogen in treated effluent from monitored concentration and discharge volume.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by monitored discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Total phosphorus to water from treatment (`treatment_total_p_water`)

Report total phosphorus in treated effluent from monitored concentration and discharge volume.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by monitored discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater or residual handled
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared foreground operations | First avoid allocation by process subdivision, separate metering, or expanding separately controllable unit operations. | `eu-pef-2021-2279` |
| `allocation_direct_assignment` | Meal, recovered oil, soluble fractions, saleable residuals, and waste streams | Directly assign inputs, emissions, and treatment burdens when causal records identify the receiving output. Materials classified as waste receive no co-product share before the selected waste-treatment boundary. | `eu-pef-2021-2279` |
| `allocation_physical_then_economic` | Unavoidable multifunctional processes | If direct assignment is not possible, use a documented physical relation that reflects the causal production relationship. If no defensible physical relation exists, allocate by economic value using representative annual quantities and prices; disclose the method and test a reasonable alternative. | `eu-pef-2021-2279` |
| `allocation_mass_balance` | Internal transfers and rework | Do not allocate burdens to internal recirculation. Reconcile fish material, water incorporated or removed, meal, saleable co-products, wastewater, and residuals before allocating shared burdens. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receipt_preparation`; `stabilization_drying`; `milling_finishing`; `packaging_release` | Raw material, intermediates, product, rejects, and residuals | Weighbridge, scale, production, moisture, and disposition records | lot_id; species/source; input_mass_kg; output_mass_kg; residual_mass_kg; moisture_fraction; destination; timestamp | Calibrated weighing with lot reconciliation and retained moisture test | kg; mass fraction | Each lot; daily reconciliation | Representative continuous 12-month period or all lots for a shorter declared campaign | All foreground lines and outsourced steps attributed to the product | Sum by lot and normalize released quantities to 1 kg net product; reconcile wet and dry matter separately | Calibration records; laboratory result; lot release; reconciliation sign-off |
| `cp_utility_records` | `stabilization_drying`; `milling_finishing`; `wastewater_residuals` | Water, electricity, fuel, steam, and heat | Meter, invoice, fuel stock, and operating-hour records | meter_id; opening; closing; unit; carrier; lot_or_period; allocation_driver; conversion_factor | Prefer submetering; otherwise document a physical allocation driver | kg or m3; kWh; MJ; carrier unit | Meter interval or monthly, matched to production | Representative continuous 12-month period or declared campaign | All foreground equipment and shared utilities | Carrier-specific total divided by reconciled output; retain conversions | Meter verification; invoices; stock reconciliation; allocation worksheet |
| `cp_cold_chain_records` | `receipt_preparation`; `packaging_release` | Ice, storage electricity, temperature, and duration | Purchase, meter, temperature logger, and inventory records | ice_mass_kg; electricity_kwh; storage_mass_kg; start_time; end_time; setpoint; measured_temperature | Weigh ice; meter electricity; retain continuous or defined-interval temperature records | kg; kWh; h; degC | Each lot plus meter interval | All relevant storage within the reporting period | All foreground chilled/frozen receiving and storage serving the product | Allocate shared electricity by mass-time and temperature-zone where defensible | Scale/meter checks; logger calibration; excursion log |
| `cp_ingredient_records` | `stabilization_drying` | Salt, smoke treatment, and other ingredients/additives | Batch sheet and stock issue | material_id; supplier_lot; mass_kg; batch_id; purpose | Weigh each charged material and reconcile stock | kg | Each batch | All batches in the reporting period | All declared formulations/routes | Sum by material and normalize to released product | Scale calibration; supplier specification; batch authorization |
| `cp_packaging_records` | `packaging_release` | Immediate packaging | Bill of materials, purchase, stock, and packing records | material; unit_mass_kg; units_used; scrap_kg; returned_kg | Weigh representative packaging units and reconcile issues | kg | Each packaging format; monthly reconciliation | All formats in the reporting period | All immediate packaging at the reference gate | Net issued packaging plus attributable scrap divided by released net product | Scale record; bill of materials; stock reconciliation |
| `cp_waste_records` | all applicable processes | Wastewater, residuals, treatment inputs, recovered outputs, and dispatched waste | Meter, manifest, scale, laboratory, and destination records | stream_id; mass_or_volume; moisture; destination; classification; treatment; recovered_product_status | Measure by stream; document density conversion and product/waste decision | kg; m3; mass fraction | Each transfer or meter interval | Representative continuous 12-month period or declared campaign | All foreground waste and recovery routes | Aggregate by stream and destination; normalize to reference flow or treatment output as specified | Meter/scale checks; manifests; analyses; receiving documentation |
| `cp_emission_records` | `stabilization_drying`; `wastewater_residuals` | Direct substance-specific releases | Monitoring, permit, fuel analysis, and approved calculation records | substance; compartment; measured_value; unit; flow_rate; operating_time; factor; source | Use measured monitoring where available; otherwise document formula and factor provenance | substance-appropriate | Monitoring/permit frequency and each calculation period | Same period as production data | All foreground emission points and diffuse sources that can be quantified | Calculate each substance and normalize to the applicable output | Laboratory QA; instrument calibration; permit report; calculation file |
| `cp_refrigerant_records` | `packaging_release` | Refrigerant losses | Equipment register, charge, purchase, recovery, and service records | equipment_id; refrigerant; opening_charge_kg; added_kg; recovered_kg; closing_charge_kg; service_date | Annual or campaign mass balance by refrigerant | kg | Each service event and annual balance | Same period as production data | All refrigerant-bearing foreground equipment serving the product | Loss = opening charge + additions - recovery - closing charge; allocate by documented service driver | Technician/service records; equipment register; purchase and recovery records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = attributed amount / net released edible fish meal mass | attributed amount; released net mass | amount per 1 kg reference flow |  |
| `calc_wet_dry_balance` | Fish material and product | dry matter = wet mass x (1 - moisture fraction); reconcile dry matter across inputs, meal, co-products, residuals, and measured losses | wet mass; moisture fraction; destinations | wet- and dry-matter balance |  |
| `calc_wastewater` | Process wastewater | wastewater mass = measured discharge, or documented water inputs minus water retained in products/co-products and separately quantified evaporation/losses | water inputs; retained water; evaporation/losses | wastewater mass |  |
| `calc_refrigerant_loss` | Refrigeration equipment | loss by substance = opening charge + additions - recovered refrigerant - closing charge | charge and service fields | kg refrigerant emitted before allocation |  |
| `calc_allocation` | Unavoidable multifunctionality | Apply direct assignment first, then the selected physical relation, and economic value only when no defensible physical relation exists; fractions shall sum to 1 | assigned burdens; output quantities; physical driver or economic values | allocation fractions and allocated inventory | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and inputs | Retain species/source, raw-material condition, route, formulation, moisture basis, packaging, storage condition, geography, period, and supplier/lot identity. | Product specification, supplier record, batch record, and release record; `unsd-cpc-3-2025`; `codex-cxc-52-2003` |
| `dq_measurement` | Mass, utilities, temperature, moisture, and emissions | Use calibrated or verified instruments where material; retain units, conversions, detection limits, allocation drivers, and calculation provenance. | Calibration/verification records and calculation files; `eu-pef-2021-2279` |
| `dq_temporal` | Foreground inventory | Prefer a representative continuous 12-month period; if a shorter or discontinuous campaign is used, disclose seasonality and justify representativeness. | Dated records, production calendar, and representativeness assessment; `eu-pef-2021-2279` |
| `dq_completeness` | Foreground and linked upstream inventory | Reconcile mass and energy, account for all required and conditionally applicable processes, and document any omitted flow against the cut-off rule. | Reconciliation and completeness checklist; `eu-pef-2021-2279` |
| `dq_food_safety` | Food-grade production | Retain hazard-control, sanitation, temperature, process control, reject, and product-release evidence applicable to the declared material and route. | HACCP or equivalent food-safety plan, monitoring and release records; `codex-cxc-52-2003` |
| `dq_estimate_replacement` | Provisional QA ranges | Treat every `reasoned_estimate` range as a review flag, not an industry default; compare foreground values but do not substitute the midpoint. Replace the range when reviewed representative evidence becomes available. | Manifest review note and reviewer decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `validate_identity` | Reference product and dataset metadata | Fail completeness when the product-flow UUID, 1 kg Mass reference, CPC mapping context, or any required qualifier is missing or inconsistent. | `unsd-cpc-3-2025` |
| `validate_reference_output` | `reference_product_output` | Require exactly 1 kg net released edible fish meal and report packaging separately; the product output shall use the declared Mass property and kg unit. |  |
| `validate_process_coverage` | Process map | Require every `required` process and each `conditional` process whose condition applies; disclose outsourced steps and link their datasets. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validate_mass_balance` | Material flows | Require wet-mass and dry-matter reconciliation within a declared tolerance; unresolved differences, unclassified saleable outputs, and missing destinations are findings. |  |
| `validate_allocation` | Multifunctional operations | Require fractions to sum to 1, prohibit allocation to internal recirculation, and retain direct-assignment/physical/economic method rationale and sensitivity where economic allocation is used. | `eu-pef-2021-2279` |
| `validate_food_safety_records` | Food-grade route | Require applicable hazard-control, sanitation, process monitoring, reject, and release records; this validates inventory evidence and does not certify regulatory compliance. | `codex-cxc-52-2003` |
| `validate_provisional_ranges` | `reasoned_estimate` ranges | Flag values outside a provisional range for review, but do not replace measured values or treat the range as a conformance limit. |  |
| `validate_data_quality` | Foreground package | Require temporal, geographical, technological, measurement, and completeness disclosures plus the evidence named by each data-collection protocol. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for food-grade edible fish meal at the producing facility gate |
| downstream_use | May be published as a `secondary_dataset` and used as a `background_dataset` when product, geography, technology, time, and quality are representative |
| allowed_use | Product-footprint, process, and lifecyclemodel studies matching the declared edible-grade product, preservation route, boundary, geography, technology, and period |
| excluded_use | Feed-grade fish meal; whole dried/smoked fish; products with materially different species mix, moisture, additives, preservation, or co-product treatment without adjustment; regulatory or food-safety certification |
| required_metadata | PCR id/version; product-flow UUID; CPC mapping context; required qualifiers; facility geography; technology; reporting period; boundary; allocation; upstream dataset references; packaging and storage scenario |
| required_quality_disclosure | Primary-data share; coverage period; mass/energy balance; measurement and conversion methods; missing data; provisional estimates; allocation sensitivity; data-quality representativeness; food-safety record coverage |
| update_trigger | Material change in raw-material source/species, preservation or drying technology, product moisture/formulation, energy system, packaging/storage, co-product route/allocation, regulation, or representative data; replacement of any provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, structure dated 30 June 2025, code 21233 “Edible fish meal”, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Official classification boundary and distinction from adjacent dried, smoked, offal, and otherwise prepared fish categories |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B52-2003%252FCXC_052e.pdf (retrieved 2026-08-11) | Fish-product process decomposition, hygiene and hazard-control records, handling, sanitation, process control, rejection, and release evidence |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional-unit completeness, lifecycle boundary, allocation hierarchy, inventory completeness, data-quality representativeness, and disclosure |
