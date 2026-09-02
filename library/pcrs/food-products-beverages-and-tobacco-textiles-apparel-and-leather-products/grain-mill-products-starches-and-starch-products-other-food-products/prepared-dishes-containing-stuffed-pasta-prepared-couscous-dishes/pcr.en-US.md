---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.prepared-dishes-containing-stuffed-pasta-prepared-couscous-dishes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Prepared dishes containing stuffed pasta; prepared couscous dishes

## 1. Scope and Applicability

This PCR applies to factory production of complete prepared dishes whose distinguishing cereal component is stuffed pasta, noodles or a couscous preparation. It covers filled pasta dishes, prepared noodle dishes, dumplings when supplied as a complete prepared dish, and prepared couscous dishes in ambient, chilled, or frozen market states.

The foreground boundary begins with documented receipt of ingredients, processing aids, primary packaging, and utility services at the manufacturing site and ends with saleable, packaged product at the factory gate. It includes ingredient preparation, dough or couscous preparation when performed on site, filling preparation, forming or dish assembly, applicable cooking or other thermal treatment, cooling, chilling, freezing or drying, packaging, on-site finished-product storage, sanitation, directly attributable utility use, food losses, wastewater, and direct releases.

Unfilled or unassembled pasta and couscous that are not complete prepared dishes are excluded. Restaurant or household meal preparation, distribution beyond the factory gate, retail, consumer reheating or cooking, and packaging end of life are excluded from the foreground dataset, but may be added by a downstream lifecycle model. A concrete data package shall state whether the product is ready-to-eat, requires reheating, or requires further cooking and shall state its ambient, chilled, or frozen storage condition.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.prepared-dishes-containing-stuffed-pasta-prepared-couscous-dishes |
| classification_refs | CPC 3.0: 23722 (exact) |
| covered_products | Complete prepared dishes containing stuffed pasta; prepared noodle dishes; dumplings when prepared and supplied as a complete dish; prepared couscous dishes |
| excluded_products | Pasta, noodles, stuffed pasta, or couscous that are cooked or otherwise prepared but not supplied as a complete dish; dry couscous sold as an ingredient; restaurant or household-prepared meals |
| representative_product | One saleable factory-produced prepared dish containing stuffed pasta or prepared couscous, packed for ambient, chilled, or frozen distribution |
| production_route | Ingredient receipt and storage; recipe preparation; dough/couscous and filling preparation as applicable; forming or dish assembly; thermal conditioning as applicable; cooling/chilling/freezing/drying as applicable; packaging; factory-gate storage |
| market_state | Finished manufactured product, production mix at plant; ambient, chilled, or frozen state declared by the data producer |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete prepared dish containing stuffed pasta, noodles, dumplings, or prepared couscous in its declared saleable condition |
| How much | 1 kg net mass of saleable prepared dish at the factory gate |
| How well | Conforms to the declared recipe, food-safety controls, storage condition, packaging format, and intended preparation state |
| How long or cycle | Through the declared shelf-life at the labelled storage condition; downstream storage losses and use-stage preparation are outside this foreground dataset |
| reference_flow_link | 1 kg net saleable product output from `packaging_and_storage` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Prepared dishes containing stuffed pasta, prepared couscous dishes `6ff6840a-8860-4e91-be9a-40d993df7105` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dish family and product name; full recipe or bill of materials and filling share where applicable; ready-to-eat, reheat-only, or further-cooking state; ambient, chilled, or frozen storage state and temperature; net product mass and primary packaging format; shelf-life; manufacturing geography and reference period; on-site thermal treatment and preservation route |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net saleable food product, excluding packaging mass, at the factory gate. |
| `ingredient_mass_basis` | Ingredients, processing aids, product, and food losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass as received or discharged and separately declare dry-matter or moisture conversions when used. Do not mix wet and dry bases in one mass balance. |
| `packaging_mass_basis` | Primary and secondary packaging crossing the foreground boundary | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record packaging by material and mass per 1 kg net product; packaging mass is not part of the 1 kg reference product. |
| `energy_units` | Purchased electricity, fuel, steam, heating, cooling, and refrigeration | Applicable energy property | kWh or MJ | Preserve measured billing or meter units, record conversion factors, and normalize to 1 kg saleable product without treating electricity and thermal energy as interchangeable. |
| `temperature_time` | Cooking, cooling, chilling, freezing, drying, and storage | Temperature and elapsed time | °C and min or h | Retain the measured time-temperature profile or validated route set-point records for product-state and process-route verification. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients, processing aids, packaging materials, and utility services as received at the manufacturing site, with supplier identity, quantity, delivery state, and upstream dataset reference declared |
| starting_condition_role | Gate-to-gate foreground manufacturing starting point backed by receiving, purchasing, inventory, and supplier records |
| product_classification_scope | Complete prepared dishes containing stuffed pasta or prepared couscous, independent of recipe, protein filling, sauce, ambient/chilled/frozen state, or packaging format when the stated exclusions are respected |
| recursive_input_rule | A purchased input already within this PCR category is recorded as an upstream product input with its own compliant dataset; its manufacture is not recursively reconstructed inside this foreground dataset |
| upstream_dataset_requirement | Every material ingredient, packaging input, purchased energy carrier, and externally supplied utility shall link to a geographically, temporally, and technologically representative upstream dataset or be disclosed as a data gap |
| disclosure | Declare recipe family, preparation state, storage state, included and excluded operations, outsourced operations, allocation, upstream proxies, cut-offs, product losses, packaging composition, shelf-life, and reference period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Manufacturing foreground | Include all on-site operations from receipt through saleable packaged product, including sanitation, directly attributable utilities, losses, wastewater, and direct releases. | eu-commission-pef-2021; codex-cxc-1-1969-2022 |
| `boundary_upstream_links` | Purchased materials and utilities | Represent purchased ingredients, packaging, energy carriers, and externally supplied utilities with upstream datasets and disclose any proxy or gap. | eu-commission-pef-2021 |
| `boundary_downstream_exclusion` | Distribution, use, and end of life | Exclude downstream distribution, retail, consumer preparation, and end of life from this foreground dataset; disclose the exclusion so downstream lifecycle models can add them consistently. | eu-commission-pef-2021 |
| `boundary_recursive_category_input` | Purchased same-category prepared dishes used as inputs | Stop recursion at the purchased product input and require a separate upstream dataset for that input. | eu-commission-pef-2021 |
| `boundary_waste_and_coproducts` | Foreground outputs | Identify and quantify saleable products, co-products, food losses, packaging waste, wastewater, and direct emissions before allocation. | eu-commission-pef-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | Ingredient receipt, storage, preparation, and recipe batching | required | Always included | Foreground material preparation | kg prepared recipe or components transferred to assembly |
| `dish_assembly` | Dough/couscous preparation, filling, forming, portioning, and dish assembly | required | Always included; non-applicable substeps are reported as not used | Foreground product formation | kg assembled dish before conditioning |
| `thermal_conditioning` | Cooking, cooling, chilling, freezing, or drying | conditional | Included when any thermal or preservation operation occurs on site | Foreground conditioning and preservation | kg conditioned dish transferred to packaging |
| `packaging_and_storage` | Packaging and factory-gate finished-product storage | required | Always included | Finalization and quantitative reference production | 1 kg net saleable product at factory gate |
| `sanitation_and_waste_management` | Sanitation, wastewater, and directly attributable site waste management | required | Always included | Cross-cutting foreground support | service allocated to 1 kg saleable product |

### Process: Ingredient receipt, storage, preparation, and recipe batching (`ingredient_preparation`)

#### Inputs

##### Product flows

###### Recipe ingredients and processing aids (`ingredient_input`)

Record every ingredient and processing aid by supplier, batch, received state, and recipe role. Ingredient groups shall not hide materially different cereals, fillings, sauces, fats, vegetables, meat, dairy, egg, seasonings, or additives.

- Selected flow: Product-specific ingredient or processing-aid flow; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated from batch issue records and bill of materials, net of returned unopened material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_material_balance`
- Sources: eu-commission-pef-2021; codex-cxc-1-1969-2022
- Range: Provisional total ingredient-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.5
  - Unit: kg/kg net saleable product
  - Basis: total wet ingredient input before processing losses or water gain per 1 kg net saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recipe or direct-contact process water (`process_water`)

Record potable water incorporated into the recipe or directly contacting product separately from sanitation water.

- Selected flow: Potable process water; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated from calibrated batch dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: codex-cxc-1-1969-2022
- Range: Provisional direct process-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg net saleable product
  - Basis: recipe and direct-contact water per 1 kg net saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected ingredients and preparation residues (`preparation_loss`)

Record expired, damaged, spilled, trimmed, screened, or otherwise rejected ingredient material by destination.

- Selected flow: Product-specific food preparation waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured waste-container mass or calculated closing batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_material_balance`
- Sources: mass-balance-identity

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared recipe components transferred to assembly (`prepared_components`)

Record the measured wet mass of prepared dough, couscous base, filling, sauce, and other components transferred to dish assembly.

- Selected flow: Internal prepared component
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg net saleable prepared dish
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: mass-balance-identity

##### Waste flows

##### Elementary flows

### Process: Dough/couscous preparation, filling, forming, portioning, and dish assembly (`dish_assembly`)

#### Inputs

##### Product flows

###### Prepared components received for assembly (`assembly_components`)

Record the internal prepared components used for the production batch, preserving component identity and filling or sauce share.

- Selected flow: Internal prepared component
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg net saleable prepared dish
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: mass-balance-identity

###### Electricity for preparation and forming (`electricity_input`)

Record electricity for mixing, kneading, forming, portioning, pumping, and line auxiliaries using submeter data or a documented allocation from site meters.

- Selected flow: Electricity supply matching site geography and voltage; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: measured submeter use or calculated allocation from equipment runtime and rated load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_runtime`
- Sources: eu-commission-pef-2021
- Range: Provisional electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh/kg net saleable product
  - Basis: total manufacturing electricity per 1 kg net saleable product before route-specific review
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Forming and assembly rejects (`assembly_rejects`)

Record off-spec portions, line start-up material, spills, and changeover residues by recovery or disposal route.

- Selected flow: Product-specific food manufacturing waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_wastewater`
- Sources: mass-balance-identity

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled dish before conditioning (`assembled_dish`)

Record the measured mass of formed or assembled product transferred to the declared conditioning route.

- Selected flow: Internal assembled prepared dish
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg net saleable prepared dish
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: mass-balance-identity

##### Waste flows

##### Elementary flows

### Process: Cooking, cooling, chilling, freezing, or drying (`thermal_conditioning`)

#### Inputs

##### Product flows

###### Thermal energy or fuel (`thermal_energy_input`)

Record fuel, steam, or purchased heat used for cooking, blanching, drying, hot-water generation, or other route-specific conditioning. Record zero only when the declared route uses no thermal energy carrier.

- Selected flow: Route-specific fuel, steam, or heat supply; Tiangong UUID unresolved
- Flow property / unit: Energy / MJ
- Amount rule: measured meter or invoice use, or calculated from equipment-specific runtime and efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_runtime`
- Sources: eu-commission-pef-2021
- Range: Provisional thermal-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg net saleable product
  - Basis: total direct thermal energy per 1 kg net saleable product before technology-specific review
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned dish transferred to packaging (`conditioned_dish`)

Record the mass and declared temperature or moisture state of the cooked, cooled, chilled, frozen, or dried dish transferred to packaging.

- Selected flow: Internal conditioned prepared dish
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass with associated time-temperature or moisture record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg net saleable prepared dish
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_and_storage`
- Sources: codex-cxc-1-1969-2022

##### Waste flows

###### Cooking, cooling, or conditioning losses (`conditioning_loss`)

Record food solids, condensate retained as waste, off-spec product, and other measurable route losses without double counting evaporated water as a waste flow.

- Selected flow: Product-specific conditioning waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured input, output, separately measured waste, and moisture change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_material_balance`
- Sources: mass-balance-identity

##### Elementary flows

### Process: Packaging and factory-gate finished-product storage (`packaging_and_storage`)

#### Inputs

##### Product flows

###### Primary and allocated secondary packaging (`packaging_input`)

Record each packaging material and component, including tray, pouch, film, carton, label, closure, absorbent pad, or modified-atmosphere gas where used.

- Selected flow: Material-specific packaging flow; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: component mass multiplied by units consumed, including measured line losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: codex-cxc-1-1969-2022
- Range: Provisional packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.30
  - Unit: kg/kg net saleable product
  - Basis: total primary and allocated secondary packaging per 1 kg net saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable prepared dish at factory gate (`reference_product`)

This is the quantitative reference output. Record net food mass separately from packaging mass and preserve the declared preparation and storage state.

- Selected flow: Prepared dishes containing stuffed pasta, prepared couscous dishes `6ff6840a-8860-4e91-be9a-40d993df7105`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed quantitative reference of 1 kg net saleable food product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable prepared dish at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging line waste and non-saleable product (`food_loss_output`)

Record packaging scrap separately from non-saleable food and identify recycling, recovery, treatment, or disposal destinations.

- Selected flow: Material-specific packaging waste or product-specific food waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material, batch, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_wastewater`
- Sources: mass-balance-identity
- Range: Provisional combined food-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg food loss/kg net saleable product
  - Basis: total non-saleable food across the foreground system per 1 kg net saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Sanitation, wastewater, and directly attributable site waste management (`sanitation_and_waste_management`)

#### Inputs

##### Product flows

###### Sanitation and cleaning water (`sanitation_water`)

Record water used for clean-in-place, open-plant cleaning, changeovers, and other sanitation activities separately from recipe water.

- Selected flow: Site-appropriate water supply; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured sanitation meter use or documented allocation from site water records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cleaning`
- Sources: codex-cxc-1-1969-2022
- Range: Provisional sanitation-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg/kg net saleable product
  - Basis: sanitation water allocated to 1 kg net saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and disinfection agents (`cleaning_agent_input`)

Record formulated cleaning and disinfection agents by product, concentration, and issued mass; do not report only active ingredient mass unless the conversion is documented.

- Selected flow: Product-specific cleaning or disinfection agent; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured issued formulation mass or calculated consumption from concentration and solution volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cleaning`
- Sources: codex-cxc-1-1969-2022
- Range: Provisional cleaning-agent QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg formulated agent/kg net saleable product
  - Basis: formulated cleaning and disinfection agents allocated to 1 kg net saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

##### Waste flows

###### Process and sanitation wastewater (`wastewater_output`)

Record wastewater leaving the site or entering on-site treatment, including measured quantity and declared treatment route. Avoid double counting water incorporated into product or separately recorded as evaporation.

- Selected flow: Wastewater to declared treatment; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured effluent volume converted using measured or justified density, or reconciled water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_wastewater`
- Sources: mass-balance-identity
- Range: Provisional wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net saleable product
  - Basis: wastewater leaving the foreground boundary per 1 kg net saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant released from foreground refrigeration (`refrigerant_emission`)

When refrigeration, chilling, or freezing is operated on site, calculate direct refrigerant release from verified inventory change, additions, recovery, and equipment records by refrigerant species.

- Selected flow: Refrigerant-specific emission to air; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant loss allocated from equipment serving the foreground route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable prepared dish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- Sources: eu-commission-pef-2021
- Range: Provisional refrigerant-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg/kg net saleable product
  - Basis: direct refrigerant loss allocated to 1 kg net saleable product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared lines, utilities, sanitation, and storage | Prefer subdivision using product-specific meters, batch records, equipment runtime, recipe records, and dedicated storage data; use system expansion only when the added function and reporting scope are explicit. | eu-commission-pef-2021 |
| `allocation_physical` | Unavoidable shared inputs and emissions | When subdivision is not feasible, allocate using a documented causal physical relationship such as metered energy, equipment time, occupied chilled volume-time, or cleaned surface-time. Do not default automatically to product mass. | eu-commission-pef-2021 |
| `allocation_mass_fallback` | Shared production with no better physical driver | Use saleable net product mass only when it reasonably represents the physical cause of the shared burden; disclose the denominator, period, included products, and sensitivity to an alternative driver. | eu-commission-pef-2021 |
| `allocation_economic_fallback` | Co-products with dissimilar functions and no defensible physical relation | Use economic allocation only after documenting why subdivision, system expansion, and physical allocation are not feasible; use revenue excluding taxes over a representative period and disclose price volatility. | eu-commission-pef-2021 |
| `allocation_waste_status` | Food residues and packaging scrap | Classify each output as saleable co-product, recoverable by-product, or waste using documented destination and economic status; do not assign avoided burdens inside the foreground dataset unless the chosen downstream method explicitly requires them. | eu-commission-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_material_balance` | ingredient_preparation; dish_assembly; thermal_conditioning | ingredients, internal transfers, recipe water, product, and losses | Batch production, weighing, BOM, receiving, and inventory records | batch_id; product_code; ingredient_id; supplier_lot; opening_mass; issued_mass; returned_mass; transfer_mass; product_mass; reject_mass; moisture_basis | Calibrated scales and reconciled batch records | kg | Each batch | At least 12 consecutive representative months or the full campaign for seasonal production | All lines producing the declared product at the site | Sum compatible wet-mass records, reconcile by batch, then divide by net saleable product mass | Scale calibration; signed batch sheet; BOM revision; supplier and lot traceability; reconciliation residual |
| `cp_energy_and_runtime` | dish_assembly; thermal_conditioning; packaging_and_storage | electricity, fuel, steam, heat, cooling, and compressed air | Submeters, utility invoices, fuel stock, and equipment runtime | meter_id; opening_reading; closing_reading; fuel_quantity; steam_quantity; runtime; rated_load; product_code; output_mass | Prefer submetering; otherwise allocate with a documented causal driver | kWh; MJ; kg fuel; h | Batch, shift, or monthly meter period | At least 12 consecutive representative months or full campaign | All foreground equipment and shared utilities included in the model | Subtract meter readings, apply documented conversions, allocate shared use, and divide by saleable output | Meter calibration or invoice; conversion factor source; allocation-driver record; completeness reconciliation |
| `cp_temperature_and_storage` | thermal_conditioning; packaging_and_storage | product condition and cold or ambient storage | Validated route, logger, line control, and warehouse records | batch_id; step; set_point; measured_temperature; start_time; end_time; storage_temperature; shelf_life; deviation | Calibrated sensors and retained route records | °C; min; h; day | Each batch or validated continuous monitoring interval | Representative reference period including seasonal extremes where relevant | All conditioning and storage zones serving the product | Preserve batch profiles and calculate residence time from timestamps | Sensor calibration; route validation; deviation and corrective-action records |
| `cp_packaging_records` | packaging_and_storage | packaging materials and line loss | Packaging specification, purchase, issue, count, and scrap records | component_id; material; unit_mass; units_issued; units_returned; scrap_mass; product_units; net_content | Component weighing plus issued-count and scrap reconciliation | kg; item | Batch or packaging campaign | At least 12 consecutive representative months or full campaign | All primary and allocated secondary packaging used for the product | Component mass × net units consumed plus measured scrap, divided by net product mass | Approved packaging specification; scale calibration; purchase and scrap reconciliation |
| `cp_water_and_cleaning` | sanitation_and_waste_management | sanitation water and cleaning agents | Water meters, dosing logs, sanitation schedule, and chemical issue records | meter_id; water_volume; agent_id; formulation_mass; solution_volume; concentration; cleaned_line; start_time; end_time | Submetering and controlled dosing records | kg; m3; L; % | Each cleaning event or meter period | At least 12 consecutive representative months or full campaign | All sanitation activities attributable to included lines | Convert volume with measured or justified density, allocate shared events by causal driver, and divide by product mass | Meter calibration; dosing calibration; sanitation record; chemical inventory reconciliation |
| `cp_waste_and_wastewater` | all foreground processes | food loss, packaging waste, wastewater, and treatment route | Waste tickets, container weights, effluent meters, and disposal records | waste_id; material; gross_mass; tare_mass; destination; effluent_volume; density; treatment_route; batch_or_period | Weighing and flow metering with destination reconciliation | kg; m3 | Batch, collection event, or meter period | At least 12 consecutive representative months or full campaign | All foreground waste and effluent points | Net gross-minus-tare mass or volume × density, allocate by documented driver, and divide by product mass | Scale or meter calibration; contractor ticket; treatment acceptance record; mass and water balance |
| `cp_refrigerant_inventory` | thermal_conditioning; packaging_and_storage | direct refrigerant release | Equipment register, charge, addition, recovery, and service records | equipment_id; refrigerant_species; opening_charge; additions; recovered_mass; closing_charge; service_date; served_product_or_zone | Annual or campaign inventory balance by refrigerant species | kg | Each service event and annual closure | At least 12 consecutive representative months | Refrigeration equipment serving the product route | Opening charge + additions - recovered mass - closing charge, allocated by documented cooling service driver | Certified service record; cylinder weights; equipment register; non-negative balance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = attributable foreground amount / net saleable product mass | Attributable amount; net saleable product mass in the same period | Amount per 1 kg reference product | eu-commission-pef-2021 |
| `calc_batch_mass_balance` | Each production batch | total material input = saleable product + internal closing inventory change + measured food loss + wastewater-borne product solids + measured retained samples + unexplained residual; report water evaporation or uptake separately | Wet-basis ingredient, water, transfer, product, waste, solids, and inventory records | Reconciled batch mass balance and residual | mass-balance-identity |
| `calc_energy_allocation` | Shared energy services | attributable energy = total measured energy × documented causal-driver share; mass share is allowed only under `allocation_mass_fallback` | Metered energy; equipment time, metered sub-load, volume-time, or approved fallback driver | Product-attributable kWh or MJ | eu-commission-pef-2021 |
| `calc_packaging_mass` | Packaging | packaging mass = sum(component unit mass × net components consumed) + allocated measured packaging scrap | Component specifications; counts issued and returned; scrap | kg packaging per kg net product | mass-balance-identity |
| `calc_refrigerant_loss` | Refrigeration equipment | refrigerant loss = opening charge + additions - recovered mass - closing charge; negative results require record correction and shall not be reported as emissions | Charge and service inventory by refrigerant species | kg refrigerant emission allocated to product | mass-balance-identity |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and batches | Preserve product code, dish family, recipe/BOM revision, preparation state, storage state, packaging format, net content, shelf-life, manufacturing site, and reference period. | Approved product specification and batch traceability records; codex-cxc-1-1969-2022 |
| `dq_temporal_coverage` | Foreground activity data | Use at least 12 consecutive representative months unless the full production campaign is shorter; disclose shutdowns, new-product ramp-up, abnormal batches, and seasonal coverage. | Dated production, meter, purchasing, and waste records; eu-commission-pef-2021 |
| `dq_measurement` | Mass, energy, water, temperature, and time | Retain calibration or verification evidence for instruments and document every unit conversion, density, and allocation driver. | Calibration certificates, meter checks, conversion records; codex-cxc-1-1969-2022 |
| `dq_completeness` | Process map and inventory | Reconcile BOM, material, energy, water, packaging, waste, wastewater, and direct-release records to the included process map; quantify missing coverage and do not hide it as zero. | Completeness checklist, batch mass balances, utility reconciliation; eu-commission-pef-2021 |
| `dq_representativeness` | Foreground and upstream datasets | Assess technological, geographical, and time representativeness and precision; identify proxy datasets and material mismatches. | Data-quality assessment and proxy register; eu-commission-pef-2021 |
| `dq_food_route_records` | Cooking, cooling, chilling, freezing, drying, storage, and packaging | Retain route-specific time-temperature, moisture where relevant, packaging, allergen, deviation, and corrective-action evidence for the declared product state. | Validated route and batch records; codex-cxc-1-1969-2022 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The product-flow UUID shall equal `6ff6840a-8860-4e91-be9a-40d993df7105`, the reference flow property shall be Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group shall be Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference unit shall be kg. |  |
| `validate_reference_amount` | Reference output | Net saleable food product shall equal 1 kg; packaging mass shall be reported separately and shall not be included in the reference mass. | eu-commission-pef-2021 |
| `validate_required_qualifiers` | Dataset metadata | Every required qualifier in section 3 shall be present and internally consistent with the product specification and process route. | codex-cxc-1-1969-2022 |
| `validate_process_route` | Process map | Every required process shall have inventory coverage; `thermal_conditioning` shall be included or explicitly marked not applicable with the declared ready-to-eat/reheat/further-cooking and ambient/chilled/frozen route. | codex-cxc-1-1969-2022 |
| `validate_mass_balance` | Batch and annual foreground inventory | Inputs, product, measured losses, moisture change, wastewater-borne product material, and inventory change shall reconcile; report the residual and investigate material unexplained residuals rather than forcing closure. | mass-balance-identity |
| `validate_energy_water_waste_coverage` | Foreground inventory | Electricity, thermal energy, direct-contact water, sanitation water, packaging, food loss, packaging waste, wastewater, and direct refrigerant release shall each be quantified or explicitly documented as not applicable. | eu-commission-pef-2021; codex-cxc-1-1969-2022 |
| `validate_allocation` | Shared processes and co-products | Allocation shall follow the ordered rules in section 7 and disclose driver, denominator, period, co-products, waste classification, and any sensitivity test. | eu-commission-pef-2021 |
| `validate_data_quality` | Foreground and upstream data | Temporal, technological, geographical, precision, completeness, measurement, and proxy evidence shall be reported; missing data shall be disclosed as gaps rather than entered as zero. | eu-commission-pef-2021 |
| `validate_temporary_ranges` | All `reasoned_estimate` ranges | Treat each provisional range only as a QA screen; a foreground value outside the range requires review and explanation, while a value inside the range does not establish correctness. Replace these ranges with reviewed source-backed evidence before publication-critical use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-production dataset for a declared prepared stuffed-pasta, noodle, dumpling, or couscous dish |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product carbon footprint or LCA models that need factory-gate manufacture of a product matching the declared recipe, preparation state, storage state, geography, period, and packaging format |
| excluded_use | Agricultural or ingredient production without upstream datasets; generic restaurant meals; consumer cooking or reheating; distribution, retail, food loss after factory gate, or packaging end of life unless added separately; nutrition or food-safety certification |
| required_metadata | PCR id and version when published; product-flow UUID; product code; recipe/BOM revision; dish family; filling share where applicable; preparation state; ambient/chilled/frozen state and temperature; net mass; packaging composition; shelf-life; site geography; reference period; technology route; allocation; upstream dataset versions |
| required_quality_disclosure | Foreground coverage; temporal, geographical, and technological representativeness; precision; completeness; instrument calibration; mass-balance residual; allocation drivers; proxies; cut-offs; data gaps; temporary estimates; review status |
| update_trigger | Recipe or filling change; change in cooking, cooling, freezing, drying, packaging, sanitation, or storage technology; new site or geography; material change in energy or water supply; shelf-life or product-state change; allocation change; data older than the declared representativeness period; replacement of a temporary estimate with reviewed evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-commission-pef-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Functional unit and reference flow; system-boundary logic; foreground company-specific manufacturing data; allocation hierarchy; data quality and proxy disclosure |
| `codex-cxs-202-1995` | standard | Codex Alimentarius, CXS 202-1995, Standard for Couscous. https://www.fao.org/input/download/standards/65/CXS_202e.pdf (retrieved 2026-08-11) | Couscous identity, processing state, moisture/packaging context, and distinction from a complete prepared couscous dish |
| `codex-cxc-1-1969-2022` | official_guidance | Codex Alimentarius, CXC 1-1969, General Principles of Food Hygiene, revision current in the official 2022 Codex listing. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+1-1969%2FCXC_001e.pdf (retrieved 2026-08-11) | Incoming-material records; time-temperature control; packaging and water controls; lot traceability; process-route records; calibration and documentation expectations |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to batch and period inventory reconciliation | Batch material balance, packaging calculation, wastewater reconciliation, and refrigerant inventory balance |
