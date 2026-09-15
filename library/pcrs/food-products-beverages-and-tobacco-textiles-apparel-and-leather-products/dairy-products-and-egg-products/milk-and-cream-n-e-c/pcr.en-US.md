---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.milk-and-cream-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Milk and cream, n.e.c.

## 1. Scope and Applicability

This PCR applies only to animal-milk or cream products that pass the CPC 3.0 hierarchy gate `222 > 2222 > 22229`: the product is milk or cream, is concentrated or contains added sugar or other sweetening matter, remains other than in solid form, and is not classified as evaporated milk (`22221`) or condensed milk (`22222`). The exact commercial product, composition, concentration or sweetening route, physical state, heat treatment, packaging, and facility-gate condition must be declared.

Apply the following gate in order. A failure or unresolved answer means that this PCR must not be selected automatically.

| gate_id | Question | Pass condition | Failure action | source_ids |
| --- | --- | --- | --- | --- |
| `scope_gate_1_dairy_identity` | Is the product animal milk, cream, or a milk product using dairy terms consistently? | Product identity and ingredient records support milk or cream under CXS 206-1999. | Exclude non-dairy beverages, analogues, and products whose dairy identity is unresolved. | `codex-cxs-206-1999` |
| `scope_gate_2_cpc_parent` | Does the product fit CPC 3.0 class 2222? | It is concentrated or contains added sugar or another sweetening matter and is other than in solid form. | Route processed liquid milk, fresh cream, whey, or another category to its own PCR. | `unsd-cpc-22229` |
| `scope_gate_3_named_siblings` | Is it outside the named subclasses 22221 and 22222? | It is neither evaporated milk nor condensed milk under the declared classification decision. | Use the evaporated-milk or condensed-milk PCR. | `unsd-cpc-22229` |
| `scope_gate_4_non_solid` | Does the released product remain non-solid? | Released form is liquid, viscous, or paste-like rather than milk powder or cream powder. | Exclude solid forms; CXS 207-1999 is used only to identify the powder boundary, not to set a CPC 22229 recipe. | `unsd-cpc-22229`; `codex-cxs-207-1999` |
| `scope_gate_5_nec_review` | Is the residual n.e.c. placement documented? | Product name, composition, route, physical state, and reason it is not 22221 or 22222 are recorded and manually reviewed. | Hold as `manual_review`; n.e.c. is not a shortcut for an unknown product. | `unsd-cpc-22229` |

Products outside the gate include raw milk; ordinary processed liquid milk; fresh cream; whey; all milk and cream powders; evaporated milk; condensed milk; fermented or acidified milk and cream; butter and other milk fats; cheese; casein; ice cream; plant-based beverages; and dairy analogues. Farming, raw-milk production, manufacture of purchased ingredients, energy, packaging and chemicals, inbound transport, distribution after the factory gate, retail, use, and end-of-life are linked upstream or downstream datasets when included in the study, not duplicated in this foreground package.

Tiangong flow Milk `84a8c346-2832-400b-a2a6-421ef7701958` is only a representative product-flow identity for the milk subset of CPC 22229. It cannot represent cream or the whole n.e.c. subclass. If the actual product is cream, or otherwise does not semantically match Milk/牛奶, replace the flow with an exact product flow and complete manual identity review before modelling or publication.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.milk-and-cream-n-e-c |
| classification_refs | CPC 3.0: 22229, Milk and cream, n.e.c., exact; interpreted only through parent class 2222 and sibling exclusions 22221/22222 |
| covered_products | Animal-milk or cream products that are concentrated or contain added sugar or other sweetening matter, remain other than in solid form, are not evaporated milk or condensed milk, and have a documented residual CPC 22229 classification decision |
| excluded_products | Raw or ordinary processed liquid milk; fresh cream; whey; milk or cream powders; evaporated milk; condensed milk; fermented or acidified products; butter or other milk fats; cheese; casein; ice cream; plant-based products; products with unresolved n.e.c. placement |
| representative_product | A qualifying non-solid concentrated or sweetened milk product at the dairy factory gate; the Tiangong Milk flow represents only a product that is actually milk |
| production_route | Dairy-base reception and identity check; conditional standardization, blending, concentration or sweetening; heat treatment and cooling as applicable; filling or bulk dispatch; factory-gate storage; cleaning and wastewater management |
| market_state | Declared bulk or packaged non-solid milk or cream product at the dairy factory gate, with required refrigerated or ambient-stable condition stated from actual release records |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of the specifically declared CPC 22229 milk or cream product at the dairy factory gate |
| How much | 1 kg net released product, excluding packaging mass |
| How well | Passes all five scope gates and meets the declared composition, concentration or sweetening basis, physical state, heat treatment, packaging, and release specification |
| How long or cycle | One declared production lot or representative production period at factory-gate release; shelf life and storage condition are qualifiers, not additional product quantity |
| reference_flow_link | `cpc_22229_product_at_factory_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Milk `84a8c346-2832-400b-a2a6-421ef7701958` — representative only when the actual qualifying CPC 22229 product is milk; replace for cream or any non-matching product and require manual review |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | commercial product name; milk versus cream identity; animal species and dairy-base origin; CPC parent-path and sibling-exclusion decision; concentration method and concentration basis; added sugar or other sweetener identity and content when applicable; released physical state; fat, protein, total-solids or dry-matter basis used by the product specification; heat-treatment route; homogenization status; ingredient formulation; bulk or packaging configuration; net mass; facility geography; reference period; factory-gate temperature or storage condition; shelf life; actual product-flow UUID; representative-flow fit decision and manual reviewer when replacement is required |

Every required qualifier must be present in metadata, product description, process notes, reference-flow comment, or an equivalent foreground-package field. The given Milk UUID does not satisfy the product-flow requirement for cream or another non-matching n.e.c. product.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | released reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net released product mass only. Record packaging separately and exclude it from the 1 kg reference amount. |
| `volume_to_mass` | milk, cream, liquid ingredients, water, and liquid wastes | Mass or volume with measured density | kg or m3 | Convert volume to mass only with density measured or verified for the actual material, composition, temperature, and period; retain original volume, density, temperature, and calculation. |
| `composition_and_concentration` | dairy inputs, intermediate products, final product, and dairy co-products | mass fraction on a declared wet- or dry-matter basis | kg/kg or % by mass | Measure or obtain verified lot-specific values for the composition fields used in identity, mass balance, concentration control, or allocation. Do not infer composition from the generic Milk flow name. |
| `sweetener_basis` | added sugars and other sweetening matter | Mass | kg | Record each sweetener separately from purchase, dosing, or batch records and state whether its content is reported as ingredient mass, solids, or another verified analytical basis. |
| `energy_carrier_separation` | electricity, fuels, steam, hot water, and cooling | Energy | kWh, MJ, or another declared unit | Preserve each carrier as a separate exchange and retain conversion factors. Do not combine electricity and thermal energy before linking background datasets. |
| `water_and_wastewater` | process water, cleaning water, recovered water, and wastewater | Volume | m3 or L | Keep source, use, recovery, and discharge measurement points distinct. Use 1 m3 = 1,000 L and do not infer wastewater quantity from product mass without collected records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted dairy base and other formulation ingredients at the manufacturing facility, with identity, supplier, quantity, composition, temperature where relevant, acceptance status, and upstream-dataset reference declared |
| starting_condition_role | Foreground collection begins at facility receipt; agricultural production and manufacture of purchased inputs remain upstream datasets |
| product_classification_scope | Only products passing the ordered CPC 22229 gate in Section 1; category selection is independent of the representative Milk flow |
| recursive_input_rule | A same-category transferred product or rework is a distinct technosphere input with origin, quantity, composition, and supplying dataset; terminate recursion at that dataset and prevent duplication of its prior production |
| upstream_dataset_requirement | Link every dairy base, sweetener, other ingredient, energy carrier, water supply, cleaning agent, refrigerant, packaging material, transport service, and off-site treatment to a representative upstream dataset when in study scope |
| disclosure | Declare the five gate results, product-flow fit or replacement review, facility, period, product route, included and outsourced steps, composition basis, storage condition, allocation method, co-products, losses, treatment destinations, data gaps, and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_gate` | product category selection | Include a product only after all five CPC 22229 scope gates pass. An unresolved n.e.c. decision or non-matching representative flow requires manual review and cannot be treated as automatic coverage. | `unsd-cpc-22229`; `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `boundary_factory_gate_operations` | foreground dairy manufacture | Include receipt and storage, applicable standardization and blending, the qualifying concentration or sweetening operation, heat treatment and cooling when used, filling or bulk dispatch, on-site storage, cleaning, product losses, wastes, wastewater, and applicable direct emissions through factory-gate release. | `eu-fdm-bref-2019` |
| `boundary_upstream_links` | purchased inputs and services | Keep agricultural production and manufacture of ingredients, utilities, chemicals, packaging, and refrigerants outside the foreground operation, but connect them through explicit upstream datasets for cradle-to-gate or broader studies. | `eu-pef-2021-2279` |
| `boundary_downstream_separation` | downstream lifecycle stages | Distribution after the factory gate, retail, use, food loss, packaging end-of-life, and product end-of-life are separate downstream modules and must not be folded into the factory-gate foreground result. | `eu-pef-2021-2279` |
| `boundary_no_missing_as_zero` | all foreground activity data | Collect applicable materials, energy, water, chemicals, refrigerants, packaging, co-products, losses, wastewater, wastes, and direct emissions. A missing record is a data gap, not a zero flow; zero requires evidence that the activity or exchange did not occur. | `eu-pef-2021-2279`; `eu-fdm-bref-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | Dairy-base receipt, identity control, standardization, and formulation | `required` | Always include receipt and identity control; include separation, standardization, blending, reconstitution, or formulation when performed | Establishes eligible product inputs and prepared mix | Per measured kg of prepared dairy mix transferred onward |
| `qualifying_treatment` | Concentration or sweetening, heat treatment, and cooling | `required` | Include the actual concentration or added-sweetener route that qualifies the product for CPC class 2222; include heat treatment and cooling when performed | Produces the declared non-solid CPC 22229 intermediate | Per measured kg of treated intermediate |
| `filling_and_storage` | Filling or bulk dispatch and factory-gate storage | `required` | Always; packaging input is zero only for documented bulk dispatch | Produces released reference product | Per 1 kg net released product |
| `sanitation_and_effluent` | Cleaning, sanitation, and wastewater management | `required` | Include all attributable CIP, line cleaning, sanitation, wastewater collection, and on-site treatment | Cross-cutting foreground support | Per 1 kg net released product after direct assignment or allocation |

### Process: Dairy-base receipt, identity control, standardization, and formulation (`receipt_and_preparation`)

#### Inputs

##### Product flows

###### Raw cow milk input (`raw_cow_milk_input`)

Raw cow milk is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Raw cow milk
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Raw buffalo milk input (`raw_buffalo_milk_input`)

Raw buffalo milk is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Raw buffalo milk
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Raw goat milk input (`raw_goat_milk_input`)

Raw goat milk is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Raw goat milk
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Raw sheep milk input (`raw_sheep_milk_input`)

Raw sheep milk is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Raw sheep milk
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Raw camel milk input (`raw_camel_milk_input`)

Raw camel milk is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Raw camel milk
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Cow-milk cream input (`cow_milk_cream_input`)

Cow-milk cream is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Cow-milk cream
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Skim milk input (`skim_milk_input`)

Skim milk is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Skim milk
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Concentrated milk input (`concentrated_milk_input`)

Concentrated milk is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Concentrated milk
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Concentrated cream input (`concentrated_cream_input`)

Concentrated cream is recorded as one accepted dairy input when it crosses the receipt boundary; supplier identity, animal species where relevant, composition, lot, and net accepted mass are retained.

- Selected flow: Concentrated cream
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass after rejection and inventory change for this dairy input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_identity_and_mass`
- Sources: `codex-cxs-206-1999`; `unsd-cpc-22229`

###### Sucrose input (`sucrose_input`)

Sucrose is recorded as one formulation or process-aid input when it is dosed into the represented production lot.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of documented returns, or batch dose calculated from the verified formulation and produced mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `unsd-cpc-22229`

###### Glucose syrup input (`glucose_syrup_input`)

Glucose syrup is recorded as one formulation or process-aid input when it is dosed into the represented production lot.

- Selected flow: Glucose syrup
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of documented returns, or batch dose calculated from the verified formulation and produced mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `unsd-cpc-22229`

###### Fructose input (`fructose_input`)

Fructose is recorded as one formulation or process-aid input when it is dosed into the represented production lot.

- Selected flow: Fructose
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of documented returns, or batch dose calculated from the verified formulation and produced mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `unsd-cpc-22229`

###### Lactose input (`lactose_input`)

Lactose is recorded as one formulation or process-aid input when it is dosed into the represented production lot.

- Selected flow: Lactose
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of documented returns, or batch dose calculated from the verified formulation and produced mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `unsd-cpc-22229`

###### Sodium citrate input (`sodium_citrate_input`)

Sodium citrate is recorded as one formulation or process-aid input when it is dosed into the represented production lot.

- Selected flow: Sodium citrate
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of documented returns, or batch dose calculated from the verified formulation and produced mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `eu-fdm-bref-2019`

###### Polydimethylsiloxane antifoam input (`pdms_antifoam_input`)

Polydimethylsiloxane antifoam is recorded as one formulation or process-aid input when it is dosed into the represented production lot.

- Selected flow: Polydimethylsiloxane antifoam
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of documented returns, or batch dose calculated from the verified formulation and produced mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation mains water (`preparation_mains_water`)

Potable mains water supplied across the facility boundary for receipt and preparation is recorded separately from direct environmental withdrawals and recovered water.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to receipt and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation grid electricity (`preparation_grid_electricity`)

Electricity, medium voltage, grid mix consumed by receipt and preparation is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to receipt and preparation; shared totals are allocated once and reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation purchased steam (`preparation_purchased_steam`)

Purchased steam consumed by receipt and preparation is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy, or energy calculated from measured steam mass and retained supply conditions directly assigned to receipt and preparation; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation purchased hot water (`preparation_purchased_hot_water`)

Purchased hot water consumed by receipt and preparation is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered hot-water energy, or energy calculated from measured flow and retained supply and return temperatures directly assigned to receipt and preparation; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation natural gas (`preparation_natural_gas`)

Natural gas consumed by receipt and preparation is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy, or measured gas quantity converted with a documented supplier heating value directly assigned to receipt and preparation; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation diesel fuel (`preparation_diesel`)

Diesel fuel consumed by receipt and preparation is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value directly assigned to receipt and preparation; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation liquefied petroleum gas (`preparation_lpg`)

Liquefied petroleum gas consumed by receipt and preparation is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value directly assigned to receipt and preparation; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation R-717 refrigerant make-up (`preparation_r717_makeup`)

Ammonia refrigerant (R-717) charged as make-up to refrigeration equipment serving receipt and preparation is recorded as one product input.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation HFC-134a refrigerant make-up (`preparation_hfc134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) charged as make-up to refrigeration equipment serving receipt and preparation is recorded as one product input.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation R-404A refrigerant make-up (`preparation_r404a_makeup`)

R-404A refrigerant charged as make-up to refrigeration equipment serving receipt and preparation is recorded as one product input.

- Selected flow: R-404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

##### Elementary flows

###### Direct groundwater withdrawal (`preparation_groundwater`)

Water, ground withdrawn directly from the environment for receipt and preparation is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to receipt and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Direct surface-water withdrawal (`preparation_surface_water`)

Water, surface withdrawn directly from the environment for receipt and preparation is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to receipt and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

###### Prepared dairy mix (`prepared_mix_output`)

Prepared dairy mix is the single internal product transferred from receipt and preparation to qualifying treatment.

- Selected flow: Prepared dairy mix
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with dairy inputs, ingredients, retained inventory, co-products, and recorded losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-pef-2021-2279`

###### Cream co-product (`cream_coproduct_output`)

Cream leaving standardization as a marketable co-product is recorded as one positive product output.

- Selected flow: Cream
- Flow property / unit: Mass / kg
- Amount rule: measured output mass with composition and destination retained for the same production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-pef-2021-2279`

###### Skim-milk co-product (`skim_milk_coproduct_output`)

Skim milk leaving standardization as a marketable co-product is recorded as one positive product output.

- Selected flow: Skim milk
- Flow property / unit: Mass / kg
- Amount rule: measured output mass with composition and destination retained for the same production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Rejected raw milk (`rejected_raw_milk_waste`)

Rejected raw milk leaving receipt or preparation is recorded as one waste exchange with its measured destination retained.

- Selected flow: Rejected raw milk
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-fdm-bref-2019`

###### Rejected dairy cream (`rejected_cream_waste`)

Rejected dairy cream leaving receipt or preparation is recorded as one waste exchange with its measured destination retained.

- Selected flow: Rejected dairy cream
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-fdm-bref-2019`

###### Dairy formulation spill (`preparation_dairy_spill_waste`)

Dairy formulation spill leaving receipt or preparation is recorded as one waste exchange with its measured destination retained.

- Selected flow: Dairy formulation spill
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

###### Preparation fossil carbon dioxide to air (`preparation_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving receipt and preparation is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation methane to air (`preparation_methane_air`)

Methane to air from on-site combustion serving receipt and preparation is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation dinitrogen monoxide to air (`preparation_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving receipt and preparation is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation nitrogen monoxide to air (`preparation_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving receipt and preparation is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation nitrogen dioxide to air (`preparation_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving receipt and preparation is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation carbon monoxide to air (`preparation_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving receipt and preparation is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation sulfur dioxide to air (`preparation_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving receipt and preparation is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation ammonia refrigerant to air (`preparation_ammonia_air`)

Ammonia to air released from refrigeration equipment serving receipt and preparation is reported as one elementary output.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation HFC-134a to air (`preparation_hfc134a_air`)

1,1,1,2-Tetrafluoroethane to air released from refrigeration equipment serving receipt and preparation is reported as one elementary output.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation HFC-125 to air (`preparation_hfc125_air`)

Pentafluoroethane to air released from refrigeration equipment serving receipt and preparation is reported as one elementary output.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Preparation HFC-143a to air (`preparation_hfc143a_air`)

1,1,1-Trifluoroethane to air released from refrigeration equipment serving receipt and preparation is reported as one elementary output.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of prepared dairy mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

### Process: Concentration or sweetening, heat treatment, and cooling (`qualifying_treatment`)

#### Inputs

##### Product flows

###### Prepared dairy mix input (`prepared_mix_input`)

Prepared dairy mix entering qualifying treatment is the same single internal product as the preparation-stage output.

- Selected flow: Prepared dairy mix
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass for the represented lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-pef-2021-2279`

###### Treatment mains water (`treatment_mains_water`)

Potable mains water supplied across the facility boundary for qualifying treatment is recorded separately from direct environmental withdrawals and recovered water.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to qualifying treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment grid electricity (`treatment_grid_electricity`)

Electricity, medium voltage, grid mix consumed by qualifying treatment is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to qualifying treatment; shared totals are allocated once and reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment purchased steam (`treatment_purchased_steam`)

Purchased steam consumed by qualifying treatment is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy, or energy calculated from measured steam mass and retained supply conditions directly assigned to qualifying treatment; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment purchased hot water (`treatment_purchased_hot_water`)

Purchased hot water consumed by qualifying treatment is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered hot-water energy, or energy calculated from measured flow and retained supply and return temperatures directly assigned to qualifying treatment; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment natural gas (`treatment_natural_gas`)

Natural gas consumed by qualifying treatment is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy, or measured gas quantity converted with a documented supplier heating value directly assigned to qualifying treatment; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment diesel fuel (`treatment_diesel`)

Diesel fuel consumed by qualifying treatment is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value directly assigned to qualifying treatment; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment liquefied petroleum gas (`treatment_lpg`)

Liquefied petroleum gas consumed by qualifying treatment is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value directly assigned to qualifying treatment; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment R-717 refrigerant make-up (`treatment_r717_makeup`)

Ammonia refrigerant (R-717) charged as make-up to refrigeration equipment serving qualifying treatment is recorded as one product input.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment HFC-134a refrigerant make-up (`treatment_hfc134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) charged as make-up to refrigeration equipment serving qualifying treatment is recorded as one product input.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment R-404A refrigerant make-up (`treatment_r404a_makeup`)

R-404A refrigerant charged as make-up to refrigeration equipment serving qualifying treatment is recorded as one product input.

- Selected flow: R-404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

##### Elementary flows

###### Treatment groundwater withdrawal (`treatment_groundwater`)

Water, ground withdrawn directly from the environment for qualifying treatment is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to qualifying treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment surface-water withdrawal (`treatment_surface_water`)

Water, surface withdrawn directly from the environment for qualifying treatment is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to qualifying treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

###### Treated non-solid dairy product (`treated_intermediate_output`)

Treated non-solid dairy product is the single internal product leaving the declared concentration or sweetening and heat-treatment route before filling.

- Selected flow: Treated non-solid dairy product
- Flow property / unit: Mass / kg
- Amount rule: measured output mass reconciled with the prepared mix, water removal, retained inventory, co-products, and recorded losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Process condensate (`process_condensate_output`)

Process condensate recovered from concentration is one product output when it is reused or leaves the treatment accounting boundary.

- Selected flow: Process condensate
- Flow property / unit: Volume / m3
- Amount rule: measured output quantity with quality, destination, and reuse or market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Milk permeate co-product (`milk_permeate_output`)

Milk permeate leaving a membrane concentration operation as a usable co-product is recorded as one positive product output.

- Selected flow: Milk permeate
- Flow property / unit: Mass / kg
- Amount rule: measured output quantity with quality, destination, and reuse or market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

###### Off-specification treated dairy product (`off_spec_treated_product_waste`)

Off-specification treated dairy product diverted from the treatment stage is recorded as one waste exchange.

- Selected flow: Off-specification treated dairy product
- Flow property / unit: Mass / kg
- Amount rule: measured diverted mass assigned once to its recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_solids_balance`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

###### Treatment fossil carbon dioxide to air (`treatment_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving qualifying treatment is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment methane to air (`treatment_methane_air`)

Methane to air from on-site combustion serving qualifying treatment is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment dinitrogen monoxide to air (`treatment_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving qualifying treatment is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment nitrogen monoxide to air (`treatment_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving qualifying treatment is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment nitrogen dioxide to air (`treatment_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving qualifying treatment is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment carbon monoxide to air (`treatment_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving qualifying treatment is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment sulfur dioxide to air (`treatment_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving qualifying treatment is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment ammonia refrigerant to air (`treatment_ammonia_air`)

Ammonia to air released from refrigeration equipment serving qualifying treatment is reported as one elementary output.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment HFC-134a to air (`treatment_hfc134a_air`)

1,1,1,2-Tetrafluoroethane to air released from refrigeration equipment serving qualifying treatment is reported as one elementary output.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment HFC-125 to air (`treatment_hfc125_air`)

Pentafluoroethane to air released from refrigeration equipment serving qualifying treatment is reported as one elementary output.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Treatment HFC-143a to air (`treatment_hfc143a_air`)

1,1,1-Trifluoroethane to air released from refrigeration equipment serving qualifying treatment is reported as one elementary output.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured kg of treated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

### Process: Filling or bulk dispatch and factory-gate storage (`filling_and_storage`)

#### Inputs

##### Product flows

###### Treated dairy product input (`treated_product_input`)

Treated non-solid dairy product entering filling or bulk dispatch is the same single internal product as the treatment-stage output.

- Selected flow: Treated non-solid dairy product
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to filling or bulk dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_released_product`
- Sources: `eu-pef-2021-2279`

###### PET bottle (`pet_bottle_input`)

Polyethylene terephthalate bottle crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Polyethylene terephthalate bottle
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### HDPE bottle (`hdpe_bottle_input`)

High-density polyethylene bottle crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: High-density polyethylene bottle
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Glass bottle (`glass_bottle_input`)

Glass bottle crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Glass bottle
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Tinplate steel can (`tinplate_can_input`)

Tinplate steel can crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Tinplate steel can
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Paperboard liquid-food carton (`paperboard_carton_input`)

Paperboard liquid-food carton crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Paperboard liquid-food carton
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### LDPE pouch (`ldpe_pouch_input`)

Low-density polyethylene pouch crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Low-density polyethylene pouch
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Polypropylene closure (`pp_closure_input`)

Polypropylene closure crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Polypropylene closure
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Aluminium foil seal (`aluminium_seal_input`)

Aluminium foil seal crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Aluminium foil seal
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Corrugated board box (`corrugated_box_input`)

Corrugated board box crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Wooden pallet (`wooden_pallet_input`)

Wooden pallet crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### LDPE stretch film (`ldpe_stretch_film_input`)

Low-density polyethylene stretch film crossing the facility boundary for the released packaging configuration is recorded as one packaging-component input.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued less documented returns, reconciled with filled units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Filling and storage grid electricity (`filling_storage_grid_electricity`)

Electricity, medium voltage, grid mix consumed by filling and factory-gate storage is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to filling and factory-gate storage; shared totals are allocated once and reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage purchased steam (`filling_storage_purchased_steam`)

Purchased steam consumed by filling and factory-gate storage is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy, or energy calculated from measured steam mass and retained supply conditions directly assigned to filling and factory-gate storage; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage purchased hot water (`filling_storage_purchased_hot_water`)

Purchased hot water consumed by filling and factory-gate storage is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered hot-water energy, or energy calculated from measured flow and retained supply and return temperatures directly assigned to filling and factory-gate storage; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage natural gas (`filling_storage_natural_gas`)

Natural gas consumed by filling and factory-gate storage is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy, or measured gas quantity converted with a documented supplier heating value directly assigned to filling and factory-gate storage; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage diesel fuel (`filling_storage_diesel`)

Diesel fuel consumed by filling and factory-gate storage is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value directly assigned to filling and factory-gate storage; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage liquefied petroleum gas (`filling_storage_lpg`)

Liquefied petroleum gas consumed by filling and factory-gate storage is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value directly assigned to filling and factory-gate storage; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage R-717 refrigerant make-up (`filling_storage_r717_makeup`)

Ammonia refrigerant (R-717) charged as make-up to refrigeration equipment serving filling and factory-gate storage is recorded as one product input.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage HFC-134a refrigerant make-up (`filling_storage_hfc134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) charged as make-up to refrigeration equipment serving filling and factory-gate storage is recorded as one product input.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage R-404A refrigerant make-up (`filling_storage_r404a_makeup`)

R-404A refrigerant charged as make-up to refrigeration equipment serving filling and factory-gate storage is recorded as one product input.

- Selected flow: R-404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from refrigerant service and inventory records; total system charge is not used as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released CPC 22229 product (`reference_product_output`)

The UUID-bearing Milk flow is retained as the reference only when the released qualifying product is milk. A cream or semantically different product requires a separately reviewed replacement flow before modelling or publication.

- Selected flow: Milk `84a8c346-2832-400b-a2a6-421ef7701958`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: exactly 1 kg net released product as the quantitative reference
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_released_product`
- Sources: `unsd-cpc-22229`; `codex-cxs-206-1999`

##### Waste flows

###### Rejected filled dairy product (`rejected_filled_product_waste`)

Rejected filled dairy product leaving filling is recorded separately from every packaging waste component.

- Selected flow: Rejected filled dairy product
- Flow property / unit: Mass / kg
- Amount rule: measured rejected product mass excluding separately recorded packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-fdm-bref-2019`

###### PET packaging waste (`pet_bottle_waste`)

Waste polyethylene terephthalate packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste polyethylene terephthalate packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### HDPE packaging waste (`hdpe_bottle_waste`)

Waste high-density polyethylene packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste high-density polyethylene packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Glass packaging waste (`glass_bottle_waste`)

Waste glass packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste glass packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Tinplate steel packaging waste (`tinplate_can_waste`)

Waste tinplate steel packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste tinplate steel packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Paperboard packaging waste (`paperboard_carton_waste`)

Waste paperboard packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste paperboard packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### LDPE packaging waste (`ldpe_pouch_waste`)

Waste low-density polyethylene packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste low-density polyethylene packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Polypropylene packaging waste (`pp_closure_waste`)

Waste polypropylene packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste polypropylene packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Aluminium packaging waste (`aluminium_seal_waste`)

Waste aluminium packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste aluminium packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Corrugated board packaging waste (`corrugated_box_waste`)

Waste corrugated board packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste corrugated board packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### Wooden packaging waste (`wooden_pallet_waste`)

Waste wooden packaging generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste wooden packaging
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### LDPE stretch-film waste (`ldpe_stretch_film_waste`)

Waste low-density polyethylene stretch film generated during filling is recorded as one single-material waste exchange.

- Selected flow: Waste low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to the recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bref-2019`

##### Elementary flows

###### Filling and storage fossil carbon dioxide to air (`filling_storage_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage methane to air (`filling_storage_methane_air`)

Methane to air from on-site combustion serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage dinitrogen monoxide to air (`filling_storage_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage nitrogen monoxide to air (`filling_storage_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage nitrogen dioxide to air (`filling_storage_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage carbon monoxide to air (`filling_storage_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage sulfur dioxide to air (`filling_storage_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage ammonia refrigerant to air (`filling_storage_ammonia_air`)

Ammonia to air released from refrigeration equipment serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage HFC-134a to air (`filling_storage_hfc134a_air`)

1,1,1,2-Tetrafluoroethane to air released from refrigeration equipment serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage HFC-125 to air (`filling_storage_hfc125_air`)

Pentafluoroethane to air released from refrigeration equipment serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Filling and storage HFC-143a to air (`filling_storage_hfc143a_air`)

1,1,1-Trifluoroethane to air released from refrigeration equipment serving filling and factory-gate storage is reported as one elementary output.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

### Process: Cleaning, sanitation, and wastewater management (`sanitation_and_effluent`)

#### Inputs

##### Product flows

###### Sanitation mains water (`sanitation_mains_water`)

Potable mains water supplied across the facility boundary for cleaning and sanitation is recorded separately from direct environmental withdrawals and recovered water.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Sodium hydroxide for CIP (`sodium_hydroxide_input`)

Sodium hydroxide used for cleaning or sanitation is recorded as one chemical input on an active-substance basis.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured commercial-product issue converted to active-substance mass with the retained verified concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bref-2019`

###### Nitric acid for CIP (`nitric_acid_input`)

Nitric acid used for cleaning or sanitation is recorded as one chemical input on an active-substance basis.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: measured commercial-product issue converted to active-substance mass with the retained verified concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bref-2019`

###### Peracetic acid sanitizer (`peracetic_acid_input`)

Peracetic acid used for cleaning or sanitation is recorded as one chemical input on an active-substance basis.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: measured commercial-product issue converted to active-substance mass with the retained verified concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bref-2019`

###### Sodium hypochlorite sanitizer (`sodium_hypochlorite_input`)

Sodium hypochlorite used for cleaning or sanitation is recorded as one chemical input on an active-substance basis.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: measured commercial-product issue converted to active-substance mass with the retained verified concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation grid electricity (`sanitation_grid_electricity`)

Electricity, medium voltage, grid mix consumed by cleaning, sanitation, and wastewater management is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to cleaning, sanitation, and wastewater management; shared totals are allocated once and reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation purchased steam (`sanitation_purchased_steam`)

Purchased steam consumed by cleaning, sanitation, and wastewater management is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy, or energy calculated from measured steam mass and retained supply conditions directly assigned to cleaning, sanitation, and wastewater management; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation purchased hot water (`sanitation_purchased_hot_water`)

Purchased hot water consumed by cleaning, sanitation, and wastewater management is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered hot-water energy, or energy calculated from measured flow and retained supply and return temperatures directly assigned to cleaning, sanitation, and wastewater management; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation natural gas (`sanitation_natural_gas`)

Natural gas consumed by cleaning, sanitation, and wastewater management is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy, or measured gas quantity converted with a documented supplier heating value directly assigned to cleaning, sanitation, and wastewater management; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation diesel fuel (`sanitation_diesel`)

Diesel fuel consumed by cleaning, sanitation, and wastewater management is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value directly assigned to cleaning, sanitation, and wastewater management; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation liquefied petroleum gas (`sanitation_lpg`)

Liquefied petroleum gas consumed by cleaning, sanitation, and wastewater management is recorded as one carrier exchange and is kept separate from every other energy input.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value directly assigned to cleaning, sanitation, and wastewater management; shared totals are allocated once and reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

##### Elementary flows

###### Sanitation groundwater withdrawal (`sanitation_groundwater`)

Water, ground withdrawn directly from the environment for cleaning and sanitation is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation surface-water withdrawal (`sanitation_surface_water`)

Water, surface withdrawn directly from the environment for cleaning and sanitation is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

#### Outputs

##### Product flows

##### Waste flows

###### Dairy process wastewater (`dairy_process_wastewater`)

Dairy process wastewater leaving sanitation or wastewater management is recorded as one waste exchange without duplicating a direct environmental release.

- Selected flow: Dairy process wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater volume transferred once to the recorded on-site or off-site treatment exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Spent sodium hydroxide cleaning solution (`spent_sodium_hydroxide_solution`)

Spent sodium hydroxide cleaning solution leaving sanitation or wastewater management is recorded as one waste exchange without duplicating a direct environmental release.

- Selected flow: Spent sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: measured separately collected mass; solution discharged into the wastewater system is included only in the wastewater row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bref-2019`

###### Spent nitric acid cleaning solution (`spent_nitric_acid_solution`)

Spent nitric acid cleaning solution leaving sanitation or wastewater management is recorded as one waste exchange without duplicating a direct environmental release.

- Selected flow: Spent nitric acid cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: measured separately collected mass; solution discharged into the wastewater system is included only in the wastewater row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bref-2019`

###### Spent peracetic acid sanitizer solution (`spent_peracetic_acid_solution`)

Spent peracetic acid sanitizer solution leaving sanitation or wastewater management is recorded as one waste exchange without duplicating a direct environmental release.

- Selected flow: Spent peracetic acid sanitizer solution
- Flow property / unit: Mass / kg
- Amount rule: measured separately collected mass; solution discharged into the wastewater system is included only in the wastewater row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bref-2019`

###### Spent sodium hypochlorite sanitizer solution (`spent_sodium_hypochlorite_solution`)

Spent sodium hypochlorite sanitizer solution leaving sanitation or wastewater management is recorded as one waste exchange without duplicating a direct environmental release.

- Selected flow: Spent sodium hypochlorite sanitizer solution
- Flow property / unit: Mass / kg
- Amount rule: measured separately collected mass; solution discharged into the wastewater system is included only in the wastewater row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bref-2019`

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Wastewater-treatment sludge leaving sanitation or wastewater management is recorded as one waste exchange without duplicating a direct environmental release.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and measured dry matter when used for treatment linkage or allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Screened dairy solids (`screened_dairy_solids`)

Screened dairy solids leaving sanitation or wastewater management is recorded as one waste exchange without duplicating a direct environmental release.

- Selected flow: Screened dairy solids
- Flow property / unit: Mass / kg
- Amount rule: measured collected mass assigned once to its recorded recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

###### Sanitation fossil carbon dioxide to air (`sanitation_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving cleaning, sanitation, and wastewater management is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation methane to air (`sanitation_methane_air`)

Methane to air from on-site combustion serving cleaning, sanitation, and wastewater management is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation dinitrogen monoxide to air (`sanitation_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving cleaning, sanitation, and wastewater management is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation nitrogen monoxide to air (`sanitation_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving cleaning, sanitation, and wastewater management is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation nitrogen dioxide to air (`sanitation_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving cleaning, sanitation, and wastewater management is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation carbon monoxide to air (`sanitation_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving cleaning, sanitation, and wastewater management is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Sanitation sulfur dioxide to air (`sanitation_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving cleaning, sanitation, and wastewater management is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or substance mass calculated from separately recorded fuel inputs and retained verified factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bref-2019`

###### Chemical oxygen demand to water (`direct_cod_water`)

Chemical oxygen demand to water is reported as one elementary output only for a direct treated-wastewater discharge from the foreground facility.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Biochemical oxygen demand to water (`direct_bod5_water`)

Biochemical oxygen demand to water is reported as one elementary output only for a direct treated-wastewater discharge from the foreground facility.

- Selected flow: Biochemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Total nitrogen to water (`direct_total_nitrogen_water`)

Total nitrogen to water is reported as one elementary output only for a direct treated-wastewater discharge from the foreground facility.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Total phosphorus to water (`direct_total_phosphorus_water`)

Total phosphorus to water is reported as one elementary output only for a direct treated-wastewater discharge from the foreground facility.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Total suspended solids to water (`direct_suspended_solids_water`)

Total suspended solids to water is reported as one elementary output only for a direct treated-wastewater discharge from the foreground facility.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

###### Chloride to water (`direct_chloride_water`)

Chloride to water is reported as one elementary output only for a direct treated-wastewater discharge from the foreground facility.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released product after direct assignment or allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | all multi-output and shared operations | First avoid allocation through subdivision, separate metering, batch records, or expansion of the process description; directly assign product-specific ingredients, packaging, energy, losses, and treatment records. | `eu-pef-2021-2279` |
| `allocation_physical_then_economic` | inseparable co-products and remaining shared burdens | When subdivision cannot resolve a shared burden, use a documented physical relationship reflecting the underlying process causality. If no defensible physical relationship exists, use a documented economic relationship and perform a sensitivity check. | `eu-pef-2021-2279` |
| `allocation_foreground_factors` | every allocated quantity | Derive quantities, composition, physical parameters, prices, and allocation factors from the same representative foreground period; no category-wide default factor is supplied by this PCR. | `eu-pef-2021-2279` |
| `allocation_positive_outputs` | dairy co-products and recovered materials | Record co-products as positive outputs with identity, amount, composition, destination, and economic status. Do not use avoided-product substitution unless the declared study method separately requires and documents it. | `eu-pef-2021-2279` |
| `allocation_reconciliation` | allocated results | Factors for each shared burden must sum to 1 within documented rounding tolerance, and allocated quantities must reconcile to the unallocated total. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_identity_and_mass` | `receipt_and_preparation` | dairy base and accepted materials | receiving, supplier, certificate, scale, tank, and inventory records | product identity; supplier; species; lot; gross/net mass; composition; temperature; rejects; opening/closing inventory | calibrated scales or tanks reconciled to supplier and acceptance records | kg; composition unit | each delivery and lot | representative production period | all supplying points and receiving tanks | accepted input plus inventory change, assigned to represented lots | calibration; certificates; acceptance log; reconciliation |
| `cp_formulation_records` | `receipt_and_preparation` | sweeteners and formulation ingredients | bill of materials, batch sheet, issue and return records | ingredient identity; lot; issued mass; return; dose; formulation version; produced mass | reconcile warehouse issue and batch dosing to released lots | kg | each batch | representative production period | all formulation lines | net issued mass assigned directly to lots | approved formulation; scale calibration; batch sign-off |
| `cp_mass_and_solids_balance` | `receipt_and_preparation`; `qualifying_treatment` | intermediates, co-products, water removal, and losses | tank, meter, laboratory, inventory, recovery, and waste records | opening/closing inventory; wet mass; composition; transfers; recovered water; co-products; losses | reconcile wet mass and measured composition across each bounded process | kg; kg solids; m3 | each lot or production day | representative production period | all included vessels and lines | aggregate only after lot/process reconciliation | signed balance; laboratory QA; exception log |
| `cp_utility_records` | all processes | electricity, fuel, heat, steam, cooling, and compressed air | submeter, invoice, fuel, runtime, and equipment records | carrier; meter start/end; quantity; unit; equipment; operating time; allocation key | prefer submeters; otherwise calculate from collected equipment records or allocate residual facility totals | kWh; MJ; carrier unit | continuous, each batch, or monthly | same period as product output | all included operations | direct assignment first; allocate only residual shared totals | meter calibration; invoice tie-out; calculation workbook |
| `cp_released_product` | `filling_and_storage` | treated input and released reference product | filler, bulk-dispatch, scale, release, warehouse, and inventory records | actual product name; product-flow UUID; gate results; net mass; composition; package; release status; temperature; inventory | calibrated filling or dispatch measurement reconciled to released lots | kg | each lot | representative production period | all filling and bulk-dispatch lines | accepted released net mass only | release certificate; scale calibration; manual flow-fit review |
| `cp_packaging_records` | `filling_and_storage` | packaging and packaging waste | bill of materials, issue, return, scrap, and filled-unit records | material; component; unit mass; issued quantity; returns; scrap; filled units | mass records or count multiplied by measured component mass | kg; item count | each lot or shift | representative production period | all packaging lines | net material by component per released mass | supplier specification; count-to-mass check; reconciliation |
| `cp_cleaning_records` | `sanitation_and_effluent` | water and cleaning agents | CIP recipe, flowmeter, dosing, purchase, and cycle records | circuit; cycle; water; chemical identity; concentration; dose; duration; recovered volume | meter water and chemical dose by circuit; reconcile purchases and inventory | m3; kg | each cycle or shift | representative production period | all product-contact circuits and cleaning areas | direct cycle assignment first; allocate shared cycles transparently | meter calibration; recipe control; issue reconciliation |
| `cp_water_and_wastewater_records` | `receipt_and_preparation`; `qualifying_treatment`; `sanitation_and_effluent` | mains water, direct water withdrawals, recovered water, wastewater, sludge, and water emissions | flowmeter, sample, laboratory, sludge, and dispatch records | source; volume; destination; concentration; sampling time; sludge wet/dry mass; treatment route | meter flows and use representative sampling for calculated loads | m3; kg; concentration unit | continuous volume and plan-defined sampling | representative production period | all drains, recovery points, and treatment outlets | prevent double counting between off-site waste flow and direct emission | calibration; chain of custody; laboratory QA; dispatch tickets |
| `cp_direct_emission_records` | `receipt_and_preparation`; `qualifying_treatment`; `filling_and_storage`; `sanitation_and_effluent` | direct combustion and refrigerant emissions | fuel, stack, refrigerant charge, service, recovery, and incident records | substance; compartment; fuel; measured emission; charge; additions; recovery; factor | direct measurement or transparent calculation from collected records | kg | event, service, or reporting period | representative production period | all included combustion and refrigeration equipment | substance-specific totals assigned to causing operations | monitoring report; service log; factor/version record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | all inventory exchanges | normalized amount = attributed foreground amount / net released reference-product mass | attributed amount; net released mass | amount per 1 kg net released product | `eu-pef-2021-2279` |
| `calc_mass_balance` | each bounded process | opening inventory + measured inputs = measured outputs + closing inventory + measured or calculated losses; report unresolved difference separately | input/output mass; inventory; co-products; losses | mass-balance result and unresolved difference | `eu-fdm-bref-2019` |
| `calc_solids_balance` | concentration, formulation, and allocation | apply the same balance structure to measured total solids or dry matter when solids are used for identity, control, or a physical allocation relationship | wet masses; measured solids fractions; ingredient solids; losses | solids balance and unresolved difference | `eu-pef-2021-2279` |
| `calc_allocation` | residual shared burdens | attributed amount i = shared amount x documented factor i; factors are derived from same-period foreground physical or economic records and sum to 1 | shared total; output records; factor basis | attributed amount by output | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | refrigeration systems | emitted refrigerant = opening charge + additions - closing charge - recovered amount; reconcile negative or unexplained results | charge, additions, closing charge, recovery | kg emitted by refrigerant species | `eu-fdm-bref-2019` |
| `calc_direct_water_load` | direct wastewater discharge | discharged substance load = metered discharge volume x representative measured concentration using compatible units | volume; concentration; conversion | kg substance emitted | `eu-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | product and reference flow | Retain all five scope-gate decisions, actual commercial identity, exact product-flow UUID, and manual reviewer evidence whenever the representative Milk flow is replaced or rejected. | classification record; specification; ingredient list; flow metadata; signed review |
| `dq_temporal` | all foreground records | Use one coherent representative period and explain seasonality, shutdowns, abnormal lots, inventory carry-over, and substitutions. | dated meters; production calendar; exception log |
| `dq_technological` | process route | Identify concentration, sweetening, heat-treatment, cooling, filling, storage, cleaning, recovery, and treatment technologies actually represented. | process flow diagram; equipment list; batch and operating records |
| `dq_geographical` | inputs and linked datasets | Match dairy base, ingredients, energy, water, packaging, transport, and treatment datasets to the declared geography or justify every proxy. | supplier origin; dataset metadata; proxy rationale |
| `dq_completeness` | mass, solids, energy, water, waste, and emissions | Reconcile process and facility records, disclose cut-offs and unresolved differences, and treat missing data as gaps rather than zeros. | signed balances; meter/invoice reconciliation; exclusion register |
| `dq_measurement` | collected and calculated values | Retain instrument, calibration, sampling, analytical method, detection limit where relevant, formula, factor version, and responsible record owner. | calibration; laboratory QA; calculation workbook; audit trail |
| `dq_no_defaults` | all non-reference quantities | Use foreground records or calculations from collected records. This PCR supplies no category-wide numerical inventory default or range for CPC 22229. | field-level provenance; collection protocol links; data-gap register |
| `dq_allocation` | co-products and shared operations | Retain subdivision evidence, shared totals, factor basis, output data, calculation, sensitivity when required, and reconciliation. | allocation workbook; production and price records; sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope_path` | product category | Reject automatic applicability unless the product passes `scope_gate_1_dairy_identity` through `scope_gate_5_nec_review` and the recorded CPC path is `222 > 2222 > 22229`. | `unsd-cpc-22229`; `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `validation_named_exclusions` | classification decision | Reject evaporated milk, condensed milk, all solid-form milk or cream products, processed liquid milk, fresh cream, whey, fermented or acidified products, and non-dairy products from this PCR. | `unsd-cpc-22229`; `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `validation_reference_flow_fit` | reference product identity | Permit Milk `84a8c346-2832-400b-a2a6-421ef7701958` only when the actual qualifying product is milk. For cream or another semantic mismatch, require a replacement flow UUID and manual review; otherwise fail identity completeness. | `unsd-cpc-22229`; `codex-cxs-206-1999` |
| `validation_reference_quantity` | reference flow | Require exactly 1 kg net released product using Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg; packaging mass is separate. | `eu-pef-2021-2279` |
| `validation_required_qualifiers` | foreground package metadata | Fail completeness when any required qualifier in Section 3 is missing, ambiguous, or inconsistent with the declared product, scope gate, route, or actual product flow. | `unsd-cpc-22229`; `codex-cxs-206-1999` |
| `validation_process_coverage` | foreground inventory | Require all four process-map rows and every applicable material, utility, packaging, cleaning, loss, waste, wastewater, co-product, and direct-emission record; a zero requires evidence and a missing record remains a gap. | `eu-fdm-bref-2019`; `eu-pef-2021-2279` |
| `validation_foreground_only` | non-reference quantities | Reject publication-quality completeness when a non-reference amount is an unsupported default, proxy, or reasoned numerical estimate instead of a foreground record or calculation from collected records. | `eu-pef-2021-2279` |
| `validation_balances` | mass and solids | Require same-period mass balances and, when used in identity or allocation, solids balances; report and explain unresolved differences and retained inventory. | `eu-fdm-bref-2019`; `eu-pef-2021-2279` |
| `validation_allocation` | multi-output and shared operations | Require direct assignment first, a documented physical or economic factor basis for residual burdens, factors summing to 1 within rounding tolerance, reconciliation to shared totals, and sensitivity when economic allocation is used. | `eu-pef-2021-2279` |
| `validation_no_double_count` | recovery, wastewater, utilities, and shared totals | Reject duplicate counting between internal transfers and final output, recovered water and purchased water, off-site wastewater treatment and direct water emissions, or assigned process data and residual facility totals. | `eu-pef-2021-2279`; `eu-fdm-bref-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate data package and product dataset for one specifically declared CPC 22229 milk or cream product |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` after review and linkage to representative upstream dairy, ingredient, energy, material, transport, and treatment datasets; downstream lifecycle stages remain separate |
| allowed_use | Attributional factory-gate modelling only for a product that passes the five gates and matches the declared milk/cream identity, concentration or sweetening route, composition, physical state, technology, geography, packaging, storage condition, period, and allocation method |
| excluded_use | Generic representation of all milk and cream n.e.c.; use of the Milk UUID for cream; evaporated or condensed milk; solid, ordinary liquid, fresh-cream, whey, fermented, non-dairy, or unresolved products; comparative claims without equivalent identity, boundary, allocation, and data quality; cradle-to-consumer use without explicit downstream modules |
| required_metadata | PCR id and version when assigned; all five gate results; actual product-flow UUID; representative-flow fit and reviewer; commercial product identity; species and dairy-base origin; composition and concentration/sweetening basis; route and technology; physical state; packaging; storage condition; facility; period; upstream dataset identities; included processes; allocation; data owner; review status |
| required_quality_disclosure | Measurement and sampling coverage; mass and solids balances; foreground provenance; allocation factors and sensitivity; temporal, geographical, and technological representativeness; data gaps, proxies, exclusions, uncertainty, unresolved identities, and evidence supporting every zero or non-applicable operation |
| update_trigger | Change in UNSD CPC scope or sibling structure; CXS dairy-term or powder boundary; Tiangong reference identity; product-flow fit; formulation, concentration, sweetening, heat-treatment, packaging, storage, utility, water, recovery, treatment, allocation, facility, or period; revised EU PEF or FDM method; new reviewed product-specific evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-22229` | dataset | United Nations Statistics Division, CPC Version 3.0 structure, code 22229 “Milk and cream, n.e.c.” under class 2222 “Milk and cream, concentrated or containing added sugar or other sweetening matter, other than in solid forms”, official CSV dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23) | Classification identity, parent path, named-sibling exclusions, and n.e.c. manual-review gate |
| `codex-cxs-206-1999` | standard | Codex Alimentarius, CXS 206-1999, General Standard for the Use of Dairy Terms, official English text, https://www.fao.org/input/download/standards/332/CXS_206e.pdf (retrieved 2026-08-11) | Animal-milk and milk-product terminology, dairy identity, and exclusion of non-dairy products from automatic coverage |
| `codex-cxs-207-1999` | standard | Codex Alimentarius, CXS 207-1999, Standard for Milk Powders and Cream Powder, official English text, https://www.fao.org/input/download/standards/333/CXS_207e.pdf (retrieved 2026-08-10) | Identification of solid milk-powder and cream-powder forms excluded from CPC 22229; not used for a CPC 22229 recipe or numerical default |
| `eu-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, including Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional unit and reference flow, system-boundary disclosure, data quality, multifunctionality hierarchy, allocation, completeness, and verification principles |
| `eu-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, EUR 29978 EN, JRC118627, 2019, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (retrieved 2026-08-11) | Dairy-manufacturing process decomposition and foreground collection coverage for materials, energy, water, cleaning, recovery, wastewater, waste, monitoring, and direct emissions |
