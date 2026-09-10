---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-fish-molluscs-and-crustaceans
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Prepared dishes and meals based on fish, molluscs and crustaceans

## 1. Scope and Applicability

This PCR applies to factory-produced, composite prepared dishes or meals in which fish, molluscs, crustaceans, or a declared combination of them is the characterizing seafood component. It covers chilled, frozen, shelf-stable, ready-to-eat, and heat-and-eat products at the factory gate, including products such as fish pies, seafood rice or pasta meals, seafood curries, stuffed molluscs, and formulated fish or shellfish meal portions.

The foreground boundary begins with receipt of purchased ingredients and packaging at the meal-manufacturing facility and ends with the saleable packaged meal at the factory gate. It includes refrigerated or frozen storage, seafood preparation, formulation, cooking or other validated preservation treatment, portioning, packaging, cooling or freezing, sanitation, foreground waste handling, and on-site wastewater treatment when operated by the producer. Upstream production and transport of purchased seafood, other ingredients, utilities, fuels, packaging, and cleaning chemicals require linked upstream datasets but are not re-created as foreground processes here.

Excluded products are unformulated fresh, chilled, frozen, dried, smoked, salted, canned, or otherwise preserved fish, molluscs, or crustaceans sold as single seafood products; fish meal and other animal-feed ingredients; soups, sauces, or condiments that are not marketed as a dish or meal; meals whose characterizing component is meat or plants rather than seafood; catering or restaurant preparation; retail, distribution, household storage, reheating, consumption, and end-of-life unless a downstream study adds them as separately disclosed modules.

The data producer shall declare the recipe, seafood species and production origin, raw or pre-processed state of each seafood input, preservation route, thermal-process status, package system, net saleable mass, intended use, storage state and temperature regime, shelf-life basis, and whether the meal is ready to eat or requires heating. Codex CXC 52-2003 supports explicit product, ingredient, packaging, intended-use, storage, distribution, and process-flow descriptions for fish and fishery products (`codex-cxc-52-2003`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-fish-molluscs-and-crustaceans |
| classification_refs | CPC 3.0: 21241, Prepared dishes and meals based on fish, molluscs and crustaceans (exact) |
| covered_products | Factory-produced composite dishes or meals whose characterizing component is fish, molluscs, crustaceans, or a declared combination, supplied chilled, frozen, shelf-stable, ready to eat, or heat and eat |
| excluded_products | Single-ingredient preserved seafood; fish meal and animal feed; non-meal soups, sauces, and condiments; non-seafood-characterized meals; catering and restaurant preparation |
| representative_product | One saleable packaged prepared seafood meal containing cooked seafood, declared accompaniments or sauce, and its immediate packaging |
| production_route | Ingredient receipt and temperature-controlled storage; seafood preparation; recipe formulation; cooking or validated preservation; portioning and packaging; cooling, freezing, or shelf-stabilization; sanitation and waste or wastewater management |
| market_state | Packaged chilled, frozen, or shelf-stable finished meal at the manufacturing facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a packaged prepared dish or meal whose characterizing component is fish, molluscs, crustaceans, or a declared combination |
| How much | 1 kg net saleable meal, excluding primary, secondary, and tertiary packaging |
| How well | Conforming to the declared recipe, seafood species and origin, edible-content specification, preservation route, package integrity, storage state, shelf-life basis, and intended-use instructions |
| How long or cycle | One production lot delivered at the factory gate; shelf life is declared as a product qualifier and is not converted into a time-weighted reference amount |
| reference_flow_link | `prepared_fish_meal` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable prepared seafood meal |
| Reference product flow | Prepared dish or meal based on fish, molluscs or crustaceans |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | recipe identifier and version; seafood species and capture or aquaculture origin; seafood input state; seafood mass fraction; other ingredient composition; ready-to-eat or heat-and-eat status; preservation and thermal-treatment route; chilled, frozen, or shelf-stable state; declared storage temperature; shelf-life basis; primary package materials and format; net mass; production geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass | kg | Normalize all foreground exchanges to 1 kg of saleable meal excluding every packaging component; derive net mass from verified pack fill weights and accepted units, not nominal gross package weight. |
| `ingredient_wet_mass` | seafood and other ingredients | Mass | kg | Record each ingredient separately on the as-received wet-mass basis and retain moisture or solids content when it is needed for recipe or yield reconciliation. |
| `packaging_component_mass` | primary, secondary, and tertiary packaging | Mass | kg | Record each material component separately and allocate reusable transport packaging by measured uses or documented lifetime. |
| `energy_carrier_separation` | electricity, steam, purchased heat, and fuels | Energy or fuel mass/volume | kWh, MJ, kg, or m3 | Preserve metered or invoiced carrier units and convert with documented calorific value and density where needed; never combine carriers in one exchange. |
| `water_balance` | ingredient water, process water, sanitation water, wastewater, and treated effluent | Mass or volume | kg or m3 | Keep water uses and discharges separate by role; if volume is converted to mass, document measured density or the water-density convention. |
| `refrigerant_component_mass` | refrigerant make-up and direct leakage | Mass | kg | Record ammonia and each halocarbon component separately; derive leakage from charge, purchases, recovery, and stock change rather than a generic refrigerant percentage. |
| `mass_reconciliation` | each production lot | Mass | kg | Reconcile ingredient and processing-water inputs to saleable product, co-products, food losses, seafood residues, packaging scrap, wastewater, sludge, and retained inventory, with all terms normalized to the reference flow. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | foreground manufacturing | Include all on-site activities from receipt of ingredients and packaging through the saleable packaged meal at the factory gate, including cold storage, formulation, thermal treatment, packaging, cooling or freezing, sanitation, waste handling, and on-site wastewater treatment when present. | `codex-cxc-52-2003`; `schmidt-rivera-azapagic-2019-ready-meals`; `us-epa-seafood-effluent-guidelines` |
| `boundary_upstream_links` | purchased inputs | Link upstream datasets for every purchased seafood ingredient, other ingredient, utility, fuel, refrigerant, packaging component, cleaning chemical, and externally treated waste; do not replace these links with generic unrecorded cut-offs. | `eu-pef-2021-2279` |
| `boundary_direct_emissions` | on-site emissions | Record all known direct emissions to air and water as separate elementary exchanges, using measurements or calculations from foreground activity records and documented emission factors. | `eu-pef-2021-2279`; `fao-fisheries-technical-paper-355` |
| `boundary_downstream_modules` | distribution, retail, use, and end-of-life | Exclude downstream stages from the core factory-gate dataset; a study that adds them shall report them as separate modules and disclose transport, temperature control, reheating, food loss, and packaging end-of-life scenarios. | `schmidt-rivera-azapagic-2019-ready-meals` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased seafood and other ingredients are received at the meal-manufacturing facility in their documented raw, chilled, frozen, cooked, preserved, or otherwise pre-processed state, together with packaging and auxiliary materials. |
| starting_condition_role | Factory-gate foreground starting point for preparation of a composite seafood dish or meal. |
| product_classification_scope | Prepared dishes and meals characterized by fish, molluscs, crustaceans, or a declared combination; classification does not substitute for recipe and product-state qualifiers. |
| recursive_input_rule | If a purchased input is itself a prepared seafood dish or meal in this category, record it once as an atomic purchased product input and link its supplier dataset; do not recursively reproduce its manufacturing inventory inside the receiving process. |
| upstream_dataset_requirement | Require supplier-specific datasets where available for seafood species and origin, major ingredients, electricity, fuels, refrigerants, packaging components, and external waste treatment; disclose proxies and their geographic, temporal, and technological representativeness. |
| disclosure | Declare the included facility operations, recipe, process route, storage state, package system, wastewater destination, waste destinations, allocation choices, upstream dataset substitutions, and any downstream modules added by the study. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_cold_storage` | Ingredient receipt and temperature-controlled storage | required | Always; non-refrigerated shelf-stable inputs shall report refrigeration rows as not applicable | foreground receipt and storage | kg accepted seafood ingredients |
| `seafood_preparation_formulation` | Seafood preparation and recipe formulation | required | Always; individual seafood and recipe-component rows apply only when present in the declared recipe | foreground preparation and mixing | kg formulated uncooked meal mix |
| `cooking_preservation` | Cooking or validated preservation treatment | required | Always; energy-carrier rows apply only to carriers actually used | foreground transformation | kg cooked or otherwise preserved meal base |
| `packaging_cooling` | Portioning, packaging, cooling or freezing | required | Always; MAP gases, freezing, and refrigerant-component rows apply only when used | foreground finishing | kg saleable packaged meal |
| `sanitation_wastewater` | Sanitation and on-site wastewater management | required | Sanitation is always included; on-site treatment outputs apply when the facility operates treatment before discharge | foreground support and treatment | kg saleable packaged meal |

### Process: Ingredient receipt and temperature-controlled storage (`receipt_cold_storage`)

#### Inputs

##### Product flows

###### Fish flesh ingredient (`raw_fish_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Edible fish flesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: accepted mass of each declared fish species entering the lot; create separate dataset exchanges by species and origin when identities differ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxc-52-2003`

###### Mollusc flesh ingredient (`raw_mollusc_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Edible mollusc flesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: accepted mass of each declared mollusc species entering the lot, excluding shell unless the whole animal is intentionally processed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxc-52-2003`

###### Crustacean flesh ingredient (`raw_crustacean_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Edible crustacean flesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: accepted mass of each declared crustacean species entering the lot, excluding shell unless the whole animal is intentionally processed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxc-52-2003`

###### Storage ice (`storage_ice`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Food-grade ice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured ice supplied for seafood temperature control and not already included in a supplier product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `codex-cxc-52-2003`

###### Storage electricity (`storage_electricity`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered cold-room and frozen-storage electricity allocated to the production lot using measured occupancy time and stored mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_meter`
- Sources: `schmidt-rivera-azapagic-2019-ready-meals`

###### Ammonia refrigerant make-up (`storage_ammonia_makeup`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Ammonia
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: ammonia make-up attributable to storage equipment from the annual refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### HFC-125 refrigerant make-up (`storage_hfc125_makeup`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Pentafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: HFC-125 component of refrigerant make-up attributable to storage equipment from charge composition and annual mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### HFC-143a refrigerant make-up (`storage_hfc143a_makeup`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: 1,1,1-Trifluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: HFC-143a component of refrigerant make-up attributable to storage equipment from charge composition and annual mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### HFC-134a refrigerant make-up (`storage_hfc134a_makeup`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: HFC-134a component of refrigerant make-up attributable to storage equipment from charge composition and annual mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted temperature-controlled seafood (`accepted_seafood`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Accepted edible seafood ingredient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed seafood released from receipt inspection and storage to preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receipt lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Rejected seafood (`rejected_seafood`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Rejected edible seafood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed seafood rejected at receipt or discarded during storage, excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receipt lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

###### Ammonia leakage to air (`storage_ammonia_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: ammonia loss calculated from the storage-system refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### HFC-125 leakage to air (`storage_hfc125_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Pentafluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: leaked HFC-125 calculated from refrigerant composition and the storage-system mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### HFC-143a leakage to air (`storage_hfc143a_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: 1,1,1-Trifluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: leaked HFC-143a calculated from refrigerant composition and the storage-system mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### HFC-134a leakage to air (`storage_hfc134a_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: leaked HFC-134a calculated from refrigerant composition and the storage-system mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seafood ingredient
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

### Process: Seafood preparation and recipe formulation (`seafood_preparation_formulation`)

#### Inputs

##### Product flows

###### Accepted seafood (`prep_accepted_seafood`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Accepted edible seafood ingredient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: transferred mass from `accepted_seafood`, separated by fish, mollusc, or crustacean identity in the dataset
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Potato ingredient (`potato_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Potato
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: as-received potato mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Rice ingredient (`rice_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Rice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: as-received rice mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Wheat pasta ingredient (`pasta_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Dried wheat pasta
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: as-received dried pasta mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Onion ingredient (`onion_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Onion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: as-received onion mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Carrot ingredient (`carrot_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Carrot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: as-received carrot mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Green pea ingredient (`pea_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Green pea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: as-received green-pea mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Milk ingredient (`milk_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Cow milk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: milk mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Cream ingredient (`cream_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Dairy cream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: cream mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Butter ingredient (`butter_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Butter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: butter mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Wheat flour ingredient (`flour_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Wheat flour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: flour mass added to the declared recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Vegetable oil ingredient (`vegetable_oil_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Refined rapeseed oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: rapeseed oil mass added to the declared recipe; another named oil shall be a separate atomic exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Salt ingredient (`salt_ingredient`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: sodium chloride mass added to the declared recipe or brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Recipe water (`recipe_water`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Potable water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: metered or batch-weighed water incorporated into the meal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`

###### Preparation electricity (`preparation_electricity`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity for trimming, cutting, washing, mixing, and conveying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formulated uncooked meal mix (`formulated_meal_mix`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Formulated uncooked seafood meal mix
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed formulated mix transferred to cooking or preservation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

##### Waste flows

###### Fish bones (`fish_bones_waste`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Fish bones
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed fish bones removed during preparation and classified as waste at the facility gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Fish skin (`fish_skin_waste`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Fish skin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed fish skin removed during preparation and classified as waste at the facility gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Fish viscera (`fish_viscera_waste`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Fish viscera
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed viscera removed on site and classified as waste at the facility gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Mollusc shells (`mollusc_shell_waste`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Mollusc shells
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed shells removed from molluscs on site and classified as waste at the facility gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Crustacean shells (`crustacean_shell_waste`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Crustacean shells
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed shells removed from crustaceans on site and classified as waste at the facility gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Vegetable trimmings (`vegetable_trimmings_waste`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Vegetable trimmings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed inedible vegetable peelings and trimmings classified as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Preparation wastewater (`preparation_wastewater`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Seafood preparation wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: metered or balanced wastewater from thawing, washing, trimming, and equipment rinsing before treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg formulated uncooked meal mix
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`; `us-epa-seafood-effluent-guidelines`

##### Elementary flows

### Process: Cooking or validated preservation treatment (`cooking_preservation`)

#### Inputs

##### Product flows

###### Formulated meal mix (`cooking_meal_mix`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Formulated uncooked seafood meal mix
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed transfer from `formulated_meal_mix`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cooking or preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Cooking electricity (`cooking_electricity`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity for ovens, kettles, fryers, retorts, pumps, controls, and ventilation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`
- Sources: `schmidt-rivera-azapagic-2019-ready-meals`

###### Purchased steam (`purchased_steam`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased steam supplied to cooking or retort equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`

###### Natural gas (`natural_gas_fuel`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: metered natural gas combusted on site for cooking or steam generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

###### Fuel oil (`fuel_oil`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Light fuel oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured fuel oil combusted on site for cooking or steam generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `schmidt-rivera-azapagic-2019-ready-meals`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooked or preserved meal base (`cooked_meal_base`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Cooked or preserved seafood meal base
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed acceptable meal base released to portioning after validated treatment and yield reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Cooking food loss (`cooking_food_loss`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Out-of-spec cooked seafood meal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed cooked material rejected after treatment or lost during transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

###### Fossil carbon dioxide to air (`combustion_co2_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: calculate from each on-site fuel quantity and documented carbon content or measure directly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`

###### Methane to air (`combustion_ch4_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or fuel-specific calculation for on-site combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`

###### Nitrous oxide to air (`combustion_n2o_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or fuel-specific calculation for on-site combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`

###### Nitrogen oxides to air (`combustion_nox_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or fuel- and boiler-specific calculation expressed consistently as the selected flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`

###### Sulfur dioxide to air (`combustion_so2_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or calculation from fuel sulfur content and control efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`

###### Carbon monoxide to air (`combustion_co_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or fuel- and boiler-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`

###### Fine particulate matter to air (`combustion_pm25_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or fuel- and control-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooked or preserved meal base
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`

### Process: Portioning, packaging, cooling or freezing (`packaging_cooling`)

#### Inputs

##### Product flows

###### Cooked meal base (`packaging_meal_base`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Cooked or preserved seafood meal base
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed transfer from `cooked_meal_base`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### PET tray (`pet_tray`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Polyethylene terephthalate tray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: bill-of-material mass of PET trays consumed, including production scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `schmidt-rivera-azapagic-2019-ready-meals`; `kontominas-et-al-2021-seafood-packaging`

###### Polyethylene sealing film (`pe_sealing_film`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: bill-of-material mass of sealing film consumed, including trim
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `schmidt-rivera-azapagic-2019-ready-meals`; `kontominas-et-al-2021-seafood-packaging`

###### Paperboard sleeve (`paperboard_sleeve`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Paperboard sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: bill-of-material mass of paperboard sleeves consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`

###### Corrugated transport carton (`corrugated_carton`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: mass of transport cartons consumed and allocated across contained saleable meals
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Sources: `schmidt-rivera-azapagic-2019-ready-meals`

###### Paper label (`paper_label`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Printed paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: bill-of-material mass of labels consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`

###### Carbon dioxide for modified atmosphere (`map_carbon_dioxide`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Carbon dioxide, food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured food-grade carbon dioxide supplied to modified-atmosphere packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `kontominas-et-al-2021-seafood-packaging`

###### Nitrogen for modified atmosphere (`map_nitrogen`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Nitrogen, gaseous, food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured food-grade nitrogen supplied to modified-atmosphere packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `kontominas-et-al-2021-seafood-packaging`

###### Oxygen for modified atmosphere (`map_oxygen`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Oxygen, gaseous, food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured food-grade oxygen supplied to modified-atmosphere packs when the declared gas recipe uses oxygen
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `kontominas-et-al-2021-seafood-packaging`

###### Packaging and cooling electricity (`packaging_electricity`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity for filling, sealing, metal detection, cooling, freezing, conveyors, and finished-product cold storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`
- Sources: `schmidt-rivera-azapagic-2019-ready-meals`

###### Finished-product ammonia refrigerant make-up (`packaging_ammonia_makeup`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Ammonia
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: ammonia make-up attributable to cooling, freezing, and finished-product storage from the annual refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### Finished-product HFC-125 make-up (`packaging_hfc125_makeup`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Pentafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: HFC-125 component of refrigerant make-up attributable to finished-product refrigeration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### Finished-product HFC-143a make-up (`packaging_hfc143a_makeup`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: 1,1,1-Trifluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: HFC-143a component of refrigerant make-up attributable to finished-product refrigeration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### Finished-product HFC-134a make-up (`packaging_hfc134a_makeup`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: HFC-134a component of refrigerant make-up attributable to finished-product refrigeration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable packaged prepared seafood meal (`prepared_fish_meal`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Prepared dish or meal based on fish, molluscs or crustaceans
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg net saleable meal excluding packaging, verified from accepted pack count and net fill mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Packaging film scrap (`packaging_film_scrap`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Polyethylene film scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed sealing-film trim and rejected film classified as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Rejected packaging units (`rejected_packaged_meal`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Rejected packaged prepared seafood meal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: net food mass in sealed units rejected during packaging and cooling; record rejected packaging components separately when recovered
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

###### Finished-product ammonia leakage to air (`packaging_ammonia_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: ammonia loss calculated from cooling, freezing, and finished-product storage refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### Finished-product HFC-125 leakage to air (`packaging_hfc125_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Pentafluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: leaked HFC-125 calculated from refrigerant composition and the finished-product refrigeration mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### Finished-product HFC-143a leakage to air (`packaging_hfc143a_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: 1,1,1-Trifluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: leaked HFC-143a calculated from refrigerant composition and the finished-product refrigeration mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### Finished-product HFC-134a leakage to air (`packaging_hfc134a_air`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: leaked HFC-134a calculated from refrigerant composition and the finished-product refrigeration mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

### Process: Sanitation and on-site wastewater management (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Potable water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: metered water used for pre-rinsing, cleaning, disinfection, and final rinsing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `codex-cxc-52-2003`; `fao-fisheries-technical-paper-355`

###### Alkaline cleaning agent (`sodium_hydroxide_cleaner`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: active sodium-hydroxide mass in cleaning solution consumed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemicals`

###### Chlorine disinfectant (`sodium_hypochlorite_disinfectant`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: active sodium-hypochlorite mass in disinfectant consumed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemicals`

###### Wastewater-treatment electricity (`wastewater_electricity`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity for screening, pumping, flotation, aeration, and sludge handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`
- Sources: `fao-fisheries-technical-paper-355`

###### Preparation wastewater to treatment (`treatment_preparation_wastewater`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Seafood preparation wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: transferred mass from `preparation_wastewater`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_monitoring`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Combined process wastewater (`combined_process_wastewater`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: metered wastewater transferred to external treatment when no on-site treatment is operated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`; `us-epa-seafood-effluent-guidelines`

###### Wastewater-treatment sludge (`wastewater_sludge`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Biological wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed wet sludge leaving on-site wastewater treatment, with dry-solids content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`

###### Separated oil and grease (`separated_oil_grease`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Separated food oil and grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed oil and grease removed by traps or flotation and sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`

##### Elementary flows

###### Biochemical oxygen demand to water (`effluent_bod_water`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Biochemical oxygen demand, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: treated-effluent volume multiplied by paired final-effluent BOD concentration for the same reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`; `us-epa-seafood-effluent-guidelines`

###### Chemical oxygen demand to water (`effluent_cod_water`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: treated-effluent volume multiplied by paired final-effluent COD concentration for the same reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`

###### Total nitrogen to water (`effluent_nitrogen_water`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: treated-effluent volume multiplied by paired final-effluent total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`

###### Total phosphorus to water (`effluent_phosphorus_water`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: treated-effluent volume multiplied by paired final-effluent total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`

###### Suspended solids to water (`effluent_tss_water`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: treated-effluent volume multiplied by paired final-effluent total-suspended-solids concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`; `us-epa-seafood-effluent-guidelines`

###### Oil and grease to water (`effluent_oil_grease_water`)

This card records the named atomic exchange when it crosses the declared foreground process boundary; its quantity is obtained by the rule below.

- Selected flow: Oil and grease, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: treated-effluent volume multiplied by paired final-effluent oil-and-grease concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `fao-fisheries-technical-paper-355`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared manufacturing and support processes | Avoid allocation by submetering or subdividing storage, preparation, cooking, packaging, sanitation, and wastewater operations wherever practicable. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | residual shared utilities | When subdivision is not practicable, allocate a shared utility by a documented causal physical driver such as metered equipment time and load, occupied storage volume-time, treated wastewater volume and load, or packaging-machine throughput; use mass only when it represents the physical relationship. | `eu-pef-2021-2279`; `schmidt-rivera-azapagic-2019-ready-meals` |
| `allocation_seafood_outputs` | seafood residues and recovered materials | Classify each outgoing material as co-product or waste from its actual legal and economic status. For a co-product, prefer subdivision or system expansion, then a documented physical relationship; use economic allocation only when no defensible physical relationship exists. Do not credit a waste destination as avoided production inside the factory-gate result unless an explicit system-expansion scenario is reported separately. | `eu-pef-2021-2279` |
| `allocation_recipe_batches` | multi-product batches | Allocate shared batch inputs to saleable meal variants using measured recipe mass, actual yields, equipment occupancy, and rework transfers; disclose the rule and prohibit allocation to rejected product as if it were saleable output. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `receipt_cold_storage`; `seafood_preparation_formulation`; `cooking_preservation`; `packaging_cooling` | seafood and recipe material inputs | receiving records, batch sheets, scales, recipe system | material identity; supplier; species; origin; input state; lot; gross mass; tare; accepted mass; recipe issue | calibrated scale and controlled batch record | kg | every receipt and batch | representative continuous 12-month period, or full shorter campaign | all facilities producing the declared product | sum accepted mass by atomic material and lot; normalize to accepted process output and reference flow | scale calibration, supplier lot traceability, recipe version, acceptance record |
| `cp_output_mass` | all production processes | intermediate and final product output | batch yield and pack records | batch id; output identity; good mass; rework mass; retained inventory; pack count; net fill | calibrated scale and verified pack-count reconciliation | kg | every batch | same period as input records | all included lines and sites | sum accepted outputs and reconcile transfers between processes | scale calibration, release record, mass-balance sign-off |
| `cp_energy_meter` | all production processes | electricity, steam, and purchased heat | submeters, utility meters, invoices, equipment logs | carrier; meter id; opening and closing reading; batch time; load; production mass | prefer direct submetering; otherwise allocate by documented physical driver | kWh or MJ | continuous or each batch; invoice reconciliation monthly | representative continuous 12-month period | every included line and support system | subtract baseline where justified, allocate by causal driver, normalize to process output | meter calibration or verification, invoice reconciliation, allocation worksheet |
| `cp_fuel_records` | `cooking_preservation` | each on-site fuel | fuel meter, tank dip, delivery invoice, boiler log | fuel identity; quantity; density; lower heating value; sulfur and carbon content; boiler id; operating time | meter or stock balance reconciled to deliveries | m3 or kg | each batch or daily; monthly reconciliation | representative continuous 12-month period | all included boilers and direct-fired equipment | sum each fuel separately and normalize to treated meal output | meter check, invoice, stock reconciliation, fuel specification |
| `cp_water_chemicals` | `receipt_cold_storage`; `seafood_preparation_formulation`; `sanitation_wastewater` | ice, water, cleaner, and disinfectant | water meters, batch dosing records, purchase and stock records | material identity; solution concentration; active content; opening and closing meter or stock; batch id | dedicated meter or mass/stock balance; calculate active chemical from solution mass and assay | kg or m3 | each batch or shift; monthly reconciliation | representative continuous 12-month period | all included preparation and sanitation areas | sum by atomic material and role; normalize to process output | meter calibration, chemical certificate, dosing-system check, stock reconciliation |
| `cp_packaging_bom` | `packaging_cooling` | packaging components and MAP gases | approved bill of materials, issue records, scrap records, gas meter | component material and layer; item mass; units issued; units returned; trim; rejected packs; gas identity and use | component weighing plus inventory issue and return; gas meter or cylinder balance | kg | each packaging lot | representative continuous 12-month period | all included package formats and lines | calculate consumed mass per component, subtract returned stock, include scrap, normalize to net meal mass | packaging specification, scale check, stock reconciliation, approved artwork and gas recipe |
| `cp_refrigerant_balance` | `receipt_cold_storage`; `packaging_cooling` | refrigerant make-up and direct emissions | equipment register, service log, purchase, recovery, and stock records | equipment id; refrigerant trade name; component composition; charge; additions; recovery; disposal; opening and closing stock | annual mass balance for each equipment system and each chemical component | kg | every service event with annual reconciliation | representative continuous 12-month period | all included cold stores, chillers, and freezers | loss = opening stock + purchases + additions - recovered - transferred - closing stock; apportion by equipment service and physical storage driver | technician record, cylinder weights, refrigerant specification, balance closure |
| `cp_waste_mass` | all production processes | each solid or liquid waste | waste scales, bins, transfer notes, destruction and recovery records | waste identity; process source; legal status; wet mass; dry solids where relevant; destination; date | dedicated weighing or verified container count and average mass | kg | every batch or waste collection | representative continuous 12-month period | all included lines and waste areas | sum separately by atomic waste and destination; normalize to process output | scale calibration, transfer note, destination contract, classification record |
| `cp_effluent_monitoring` | `seafood_preparation_formulation`; `sanitation_wastewater` | wastewater, sludge, and direct water emissions | flow meter, composite samples, laboratory reports, sludge records | wastewater source; volume or mass; sampling period; BOD; COD; total nitrogen; total phosphorus; TSS; oil and grease; sludge wet mass and dry solids | flow-proportional composite sampling where practicable and accredited laboratory analysis | m3, kg, or mg/L | continuous flow; pollutant sampling at permit or representative operating frequency | same representative period as production | all included drains and treatment units; separate external-transfer and direct-discharge routes | pair concentration with flow for the same period; calculate pollutant mass; normalize to reference flow | meter calibration, chain of custody, laboratory accreditation, sampling plan, permit report |
| `cp_stack_emissions` | `cooking_preservation` | direct combustion emissions | continuous or periodic stack measurements, fuel records, equipment-specific factors | pollutant; concentration; exhaust flow; operating time; fuel quantity; factor source; control efficiency | direct measurement preferred; otherwise calculate from atomic fuel records and documented factors | kg | continuous or permit test; calculate for each reporting period | same period as fuel inventory | every included combustion unit | calculate each pollutant separately and normalize to treated meal output | calibration and test report or factor reference, fuel specification, calculation sheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every foreground exchange | normalized exchange = reporting-period exchange / reporting-period net saleable meal mass | atomic exchange quantity; accepted net meal mass | quantity per 1 kg reference flow | `eu-pef-2021-2279` |
| `calc_recipe_yield` | preparation, cooking, and packaging | yield = accepted output mass / total recipe-material input mass; separately report evaporation, residues, wastewater transfers, rework, and unexplained imbalance | atomic ingredient masses; accepted outputs; waste and wastewater masses; inventory change | stage yield and mass-balance closure | `codex-cxc-52-2003` |
| `calc_active_chemical` | cleaning agents | active chemical mass = solution mass × supplier-certified active mass fraction | solution mass; active fraction | kg sodium hydroxide or sodium hypochlorite | `codex-cxc-52-2003` |
| `calc_refrigerant_components` | refrigeration | allocate system loss to each chemical component using the documented refrigerant composition; do not report only the blend trade name | system mass loss; component mass fractions; equipment service | kg of each refrigerant component emitted | `eu-pef-2021-2279` |
| `calc_effluent_load` | direct discharge | pollutant mass = paired treated-effluent volume × pollutant concentration with consistent units | flow and BOD, COD, total nitrogen, total phosphorus, TSS, or oil-and-grease concentration | kg of each pollutant to water | `fao-fisheries-technical-paper-355`; `us-epa-seafood-effluent-guidelines` |
| `calc_shared_utility` | shared support systems | allocated quantity = measured shared quantity × product-specific causal driver / sum of drivers for all products; mass is allowed only when it represents the causal relationship | shared meter; equipment time/load, storage volume-time, wastewater load, or throughput | product-attributed utility quantity | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and ingredients | Preserve recipe version, seafood species, origin, input state, supplier lot, preservation route, package format, storage state, intended use, and net mass for every represented product. | batch record, supplier specification, product specification, approved label |
| `dq_temporal_alignment` | all foreground records | Use one common representative reporting period, normally a continuous 12 months; a shorter campaign shall cover all operating states and disclose seasonality, start-up, shutdown, and abnormal events. | meter and batch date coverage, production calendar, variance review |
| `dq_mass_balance` | each process and the whole foreground | Reconcile all material inputs, outputs, waste, wastewater, evaporation estimates, rework, and inventory change; investigate and disclose unexplained imbalance. | signed process and facility mass balance |
| `dq_atomicity` | inventory | Keep each ingredient, packaging component, energy carrier, fuel, refrigerant component, chemical, waste, and direct emission as a separate exchange with its own identity and amount. | atomic row audit and source-record crosswalk |
| `dq_measurement` | meters, scales, and analyses | Retain calibration or verification status, detection limits, sampling method, laboratory quality evidence, and conversion factors. | calibration certificates, laboratory reports, sampling and calculation records |
| `dq_representativeness` | upstream and foreground datasets | Assess technological, geographical, and time-related representativeness and precision; disclose every proxy and substitution. | dataset quality assessment and proxy register |
| `dq_completeness` | known inputs and outputs | Account for all known inputs and outputs, including direct air and water emissions; a justified exclusion shall identify the flow, basis, and expected significance. | completeness checklist, process walk-through, environmental permit cross-check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | product identity | Confirm that the product is a composite prepared dish or meal characterized by fish, molluscs, crustaceans, or a declared combination and is not an excluded single seafood product. | `codex-cxc-52-2003` |
| `validate_reference_mass` | reference flow | Confirm that the reference amount is exactly 1 kg net saleable meal excluding packaging and that pack-count and fill-mass records reconcile to it. | `eu-pef-2021-2279` |
| `validate_qualifiers` | reference flow metadata | Fail completeness if recipe, seafood species and origin, seafood input state, seafood fraction, preservation route, intended use, storage state, package system, net mass, production geography, or reporting period is missing. | `codex-cxc-52-2003` |
| `validate_process_coverage` | foreground boundary | Confirm that every applicable process in the map has records and that omitted or not-applicable steps are justified for the declared route. | `codex-cxc-52-2003` |
| `validate_atomic_inventory` | all exchanges | Reject combined ingredient, utility, packaging, refrigerant, waste, or emission rows; each selected flow shall represent one atomic exchange. | `eu-pef-2021-2279` |
| `validate_recipe_and_yield` | material balance | Confirm recipe issue, ingredient inputs, intermediate transfers, saleable output, rework, seafood residues, food loss, wastewater, and inventory change reconcile within a site-defined documented tolerance. | `codex-cxc-52-2003` |
| `validate_refrigerants` | refrigeration | Confirm the equipment register covers every included cold store, chiller, and freezer and that make-up and leakage are resolved to individual chemical components. | `eu-pef-2021-2279` |
| `validate_emissions` | direct emissions | Confirm every known direct air and water emission is measured or calculated separately and that concentration, flow, fuel, and operating-period records are temporally aligned. | `eu-pef-2021-2279`; `fao-fisheries-technical-paper-355` |
| `validate_allocation` | shared processes and co-products | Confirm subdivision was attempted first, the chosen allocation driver is causal and documented, seafood outputs are classified as co-product or waste, and sensitivity is disclosed when an economic fallback materially affects results. | `eu-pef-2021-2279` |
| `validate_data_quality` | published foreground dataset | Confirm temporal, technological, and geographical representativeness, measurement quality, proxy disclosure, and completeness of known inputs and outputs are documented. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for a declared prepared seafood dish or meal |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-specific process datasets and lifecycle models when recipe, seafood species and origin, preservation route, storage state, package format, geography, technology, allocation, and reporting period are compatible |
| excluded_use | Comparative claims across dissimilar meal functions or serving qualities; substitution for unformulated seafood products; use without linked upstream ingredients and packaging; use as a cradle-to-grave result without explicit downstream modules |
| required_metadata | canonical PCR id; recipe id and version; seafood species, origin, and input state; seafood mass fraction; complete ingredient list; process route; preservation and thermal treatment; ready-to-eat or heat-and-eat status; storage state and temperature; shelf-life basis; net mass; package components and MAP gas recipe; facility geography; technology; reporting period; allocation; waste and wastewater destinations |
| required_quality_disclosure | collection coverage; calibration and laboratory evidence; material and energy balance; refrigerant balance; direct-emission method; temporal, geographical, and technological representativeness; proxy register; allocation drivers; completeness exclusions; unresolved Tiangong identities and range evidence |
| update_trigger | recipe or seafood-species change; supplier-origin change; preservation or cooking technology change; package redesign; refrigerant conversion; energy-system change; wastewater-treatment or discharge change; allocation change; facility or geography change; or foreground data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | official_guidance | FAO and WHO, *Code of Practice for Fish and Fishery Products*, second edition, CXC 52-2003, ISBN 978-92-5-107018-5, https://www.fao.org/4/i2382e/i2382e.pdf | Product description, intended use, process-flow documentation, seafood preparation, cooking, packaging, temperature control, sanitation, waste handling, and traceability requirements |
| `schmidt-rivera-azapagic-2019-ready-meals` | literature | Schmidt Rivera, X. C. and Azapagic, A. (2019), *Life cycle environmental impacts of ready-made meals considering different cuisines and recipes*, Science of the Total Environment 660, 1168-1181, https://doi.org/10.1016/j.scitotenv.2019.01.069 | Ready-meal functional-unit precedent; recipe-sensitive inventory; manufacturing, packaging, refrigeration, distribution and waste stages; utility collection and shared-energy allocation precedent |
| `kontominas-et-al-2021-seafood-packaging` | literature | Kontominas, M. G., Badeka, A. V., Kosma, I. S. and Nathanailides, C. I. (2021), *Recent Developments in Seafood Packaging Technologies*, Foods 10(5), 940, https://doi.org/10.3390/foods10050940 | Seafood perishability, packaging functions and technologies, package-material performance, modified-atmosphere gas identities, and dependence on temperature control |
| `fao-fisheries-technical-paper-355` | official_guidance | González, J. F. (1996), *Wastewater treatment in the fishery industry*, FAO Fisheries Technical Paper 355, ISBN 92-5-103788-4, https://www.fao.org/4/v9922e/v9922e00.htm | Seafood wastewater sources, characterization by solids, BOD, COD, oil and grease, nitrogen and phosphorus, primary and biological treatment, and sludge management |
| `us-epa-seafood-effluent-guidelines` | official_guidance | United States Environmental Protection Agency, *Seafood Processing Effluent Guidelines*, 40 CFR Part 408, https://www.epa.gov/eg/seafood-processing-effluent-guidelines | Official confirmation that seafood receiving, cleaning, butchering, cooking, freezing and packaging generate process wastewater and require pollutant-specific treatment and discharge accounting |
| `eu-pef-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Official Journal L 471, 30 December 2021, ELI http://data.europa.eu/eli/reco/2021/2279/oj | Functional-unit and reference-flow structure; system boundary; company-specific input, output, waste and direct-emission data; data quality; proxy disclosure; and multi-functionality hierarchy |
