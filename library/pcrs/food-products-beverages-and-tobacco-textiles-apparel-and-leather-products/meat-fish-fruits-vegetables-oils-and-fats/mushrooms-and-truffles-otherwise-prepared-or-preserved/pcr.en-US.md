---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.mushrooms-and-truffles-otherwise-prepared-or-preserved
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mushrooms and truffles, otherwise prepared or preserved

## 1. Scope and Applicability

This PCR applies to factory-gate production of edible mushrooms and truffles that are materially prepared or preserved by a method other than preservation by vinegar or acetic acid. It covers cultivated or wild edible species, whole or cut product, mixtures whose component species are declared, and edible packing media or formulation ingredients that form part of the marketed product.

The foreground data package shall select exactly one of three mutually exclusive route codes: `thermal_container`, `fermented_non_acetic`, or `other_prepared`. The route is selected from the actual preservation mechanism, not from a generic product name. `thermal_container` takes precedence when stability is achieved by heat treatment in a hermetically sealed container. `fermented_non_acetic` applies when lactic fermentation is the principal transformation, including any declared post-fermentation stabilization. `other_prepared` applies only when neither preceding definition applies and a substantive cooking, seasoning, oil formulation, or comparable preparation produces the marketed product.

Products preserved by vinegar or acetic acid, simply frozen or simply boiled or steamed before freezing, dried mushrooms or truffles, products only provisionally preserved and not ready for immediate consumption, homogenized vegetable preparations, extracts or concentrates, and complete prepared dishes or meals are outside scope. Cultivation and harvesting are represented by upstream datasets for incoming mushrooms or truffles; distribution, retail, use, and end of life are outside the foreground gate unless a study explicitly extends the boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.mushrooms-and-truffles-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0: 21397 — Mushrooms and truffles, otherwise prepared or preserved |
| covered_products | Edible mushrooms and truffles materially prepared or preserved other than by vinegar or acetic acid, including thermally stabilized sealed products, non-acetic fermented products, and other substantively cooked, seasoned, or oil-formulated products |
| excluded_products | Fresh product; simply frozen product; dried product; vinegar- or acetic-acid-preserved product; provisional preserves not ready for immediate consumption; extracts and concentrates; homogenized vegetable preparations; complete dishes or meals |
| representative_product | Declared species of prepared or preserved mushrooms or truffles, in the marketed style and formulation, at the processing facility gate |
| production_route | Exactly one of `thermal_container`, `fermented_non_acetic`, or `other_prepared`; route precedence and preservation mechanism shall be disclosed |
| market_state | Finished saleable product at factory gate; storage regime, net-content basis, packing medium or formulation, container format, and declared shelf life shall be specified |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an edible, saleable mushroom or truffle product that has been prepared or preserved by the declared in-scope route |
| How much | 1 kg net product, including edible packing medium or formulation sold as part of the product and excluding primary packaging |
| How well | Meets the declared species, style, formulation, preservation route, storage regime, food-safety release criteria, and applicable quality specification |
| How long or cycle | Maintains the declared product specification from factory release through the producer-declared shelf-life period under the declared storage conditions |
| reference_flow_link | One kilogram of the exact generic CPC-classified reference product flow, normalized at the processing facility gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net prepared or preserved product at factory gate |
| Reference product flow | Mushrooms and truffles, otherwise prepared or preserved `a73856a4-8862-40be-b505-65863a6cfb66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | mushroom or truffle species and cultivated or wild origin; product style and particle form; route code; preservation mechanism; recipe and edible packing-medium share; net-content basis; primary container; storage regime; production geography and technology; declared shelf life |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass excluding primary, secondary, and tertiary packaging. Include edible packing medium or formulation sold as part of the product and disclose its mass share. |
| `wet_mass_basis` | Mushrooms, truffles, intermediates, ingredients, products, and solid residues | Mass | kg | Record as-received or as-produced wet mass. If dry matter is also used, report measured moisture or solids and retain the conversion calculation; do not substitute dry mass for the reference mass. |
| `route_separation` | All foreground records | Route code | one declared route code | Assign each production batch to exactly one route code. Shared preprocessing may be allocated to that selected route, but inventories of alternative routes shall not be summed into one product system. |
| `energy_conversion` | Electricity, steam, heat, and fuels | Energy or carrier-specific property | kWh or MJ, with original units retained | Retain original meter or invoice units and document all conversion factors. Do not combine electricity and thermal energy before preserving carrier identity and source. |
| `mass_balance` | Each selected route | Mass | kg | Reconcile input mushrooms or truffles, edible ingredients and media, saleable product, recoverable co-products, wastewater-associated solids where measured, and solid losses over the same batch and moisture basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Edible mushrooms or truffles received at the processing facility, with species, origin type, incoming preservation state, moisture or solids basis when available, supplier, geography, and transport hand-off declared |
| starting_condition_role | `processing_gate_input` |
| product_classification_scope | CPC 3.0 subclass 21397 as a classification reference; canonical PCR scope remains the semantic product boundary stated in Sections 1 and 2 |
| recursive_input_rule | If an input is already a product in this same PCR category, record it once as a direct technosphere input with its upstream dataset and declared preparation state; do not recursively re-expand its production inside this foreground package |
| upstream_dataset_requirement | Use representative upstream datasets for mushrooms or truffles, ingredients, packing media, packaging materials, electricity, fuels, water supply, and inbound transport, preserving geography, technology, temporal period, and supplier specificity where available |
| disclosure | Declare route code and precedence decision; species and origin; incoming material state; processing and preservation mechanism; edible packing medium; container; storage regime; shelf life; excluded stages; data gaps; proxies; co-products; and allocation decisions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground production | Include receiving, sorting, cleaning, trimming, route-specific preparation or preservation, filling or formulation, container handling, stabilization, cooling where applicable, and treatment or transfer of foreground wastes through the processing facility gate. Represent cultivation, ingredients, utilities, packaging production, and inbound transport as upstream inputs. | `eu-pef-2021`; `codex-cxs-38-1981`; `codex-cxs-297-2009` |
| `boundary_route_exclusivity` | Route selection | Select exactly one route process. Never model the three route processes as consecutive or simultaneous steps for one reference flow. A batch using lactic fermentation remains `fermented_non_acetic` even when it receives declared post-fermentation stabilization; hermetically sealed heat-stable non-fermented product is `thermal_container`. | `codex-cxs-38-1981`; `codex-cxs-297-2009` |
| `boundary_classification_exclusions` | Product eligibility | Exclude vinegar- or acetic-acid-preserved mushrooms, simple frozen or dried products, provisional preserves, extracts or concentrates, homogenized vegetable preparations, and complete dishes or meals. | `unsd-cpc-3-0`; `codex-cxs-38-1981` |
| `boundary_capital_goods` | Equipment and infrastructure | Exclude capital goods from the foreground inventory unless required by the goal and scope or shown material in screening; disclose the decision consistently for all compared scenarios. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `preprocessing` | Receiving, sorting, cleaning, and size preparation | required | Applies to all routes; operations with no physical occurrence shall be recorded as zero rather than invented | Common foreground preparation | kg prepared mushroom or truffle intermediate |
| `thermal_container` | Filling, hermetic sealing, and thermal stabilization | conditional | Include only when route code is `thermal_container` | Mutually exclusive preservation route | kg net saleable reference product |
| `fermented_non_acetic` | Non-acetic fermentation and finishing | conditional | Include only when route code is `fermented_non_acetic` | Mutually exclusive preservation route | kg net saleable reference product |
| `other_prepared` | Other substantive cooking or formulation and packing | conditional | Include only when route code is `other_prepared` and neither preceding route definition applies | Mutually exclusive preparation route | kg net saleable reference product |

### Process: Receiving, sorting, cleaning, and size preparation (`preprocessing`)

#### Inputs

##### Product flows

###### Incoming edible mushrooms or truffles (`raw_fungi_input`)

Incoming raw material crosses the processing gate and carries cultivation or collection and inbound supply-chain burdens.

- Selected flow: Edible mushrooms or truffles, species and incoming state declared
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass accepted into preprocessing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preprocessing_batch`
- Sources: `codex-cxs-38-1981`

###### Cleaning and blanching water (`preprocessing_water`)

Water is recorded when supplied for washing, cleaning, blanching, or cooling in the common preprocessing stage.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-apportioned water supplied, net of documented closed-loop recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preprocessing_utilities`
- Sources: `codex-cxs-38-1981`; `codex-cxs-297-2009`

###### Preprocessing energy (`preprocessing_energy`)

Electricity and thermal carriers used for conveying, washing, cutting, blanching, cooling, and sanitation are kept carrier-specific.

- Selected flow: Electricity and thermal energy carriers, supplier and carrier declared
- Flow property / unit: Energy / kWh or MJ with original unit retained
- Amount rule: measured meter, equipment submeter, or documented batch allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preprocessing_utilities`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared mushroom or truffle intermediate (`prepared_fungi_intermediate`)

This intermediate is the cleaned, sorted, and cut or otherwise size-prepared material transferred to exactly one selected route.

- Selected flow: Prepared mushroom or truffle intermediate, species and physical state declared
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass to the selected route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preprocessing_batch`

##### Waste flows

###### Sorting and trimming residues (`preprocessing_solid_residues`)

Rejected fungi, soil-bearing trim, and other separated organic material are recorded by actual management destination.

- Selected flow: Organic processing residues, treatment route declared
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass or mass-balance result when direct weighing is unavailable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preprocessing_batch`

###### Preprocessing wastewater (`preprocessing_wastewater`)

Wastewater transferred to onsite or offsite treatment is recorded with destination and measured volume or mass.

- Selected flow: Food-processing wastewater, treatment destination declared
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge or documented water-balance result
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preprocessing_utilities`

##### Elementary flows

### Process: Filling, hermetic sealing, and thermal stabilization (`thermal_container`)

#### Inputs

##### Product flows

###### Prepared fungi transferred to thermal route (`thermal_fungi_input`)

Only the prepared intermediate assigned to `thermal_container` enters this route.

- Selected flow: Prepared mushroom or truffle intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_batch`

###### Packing medium and recipe ingredients (`thermal_ingredients`)

Water, salt, oil, sauce, seasonings, or other edible ingredients are recorded separately by material; vinegar or acetic acid as a preservation mechanism is not eligible for this PCR.

- Selected flow: Declared edible packing medium and formulation ingredients
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass less documented return to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_batch`
- Sources: `codex-cxs-297-2009`

###### Container and closure materials (`thermal_packaging`)

Primary container, closure, label, and route-attributable secondary packaging are recorded by material and mass.

- Selected flow: Packaging materials by material and format
- Flow property / unit: Mass / kg
- Amount rule: purchase or issue records reconciled to accepted packed units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_batch`

###### Thermal-route energy (`thermal_energy`)

Electricity and thermal carriers for filling, sealing, retorting or equivalent heat treatment, cooling, and sanitation are retained separately.

- Selected flow: Electricity and thermal energy carriers, supplier and carrier declared
- Flow property / unit: Energy / kWh or MJ with original unit retained
- Amount rule: measured meter or documented batch allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `codex-cxs-38-1981`; `codex-cxs-297-2009`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable thermal-route product (`thermal_reference_product`)

The route output uses the exact generic CPC-classified flow and is counted only for accepted saleable units.

- Selected flow: Mushrooms and truffles, otherwise prepared or preserved `a73856a4-8862-40be-b505-65863a6cfb66`
- Flow property / unit: Mass / kg
- Amount rule: measured net product mass excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_batch`

##### Waste flows

###### Thermal-route rejected product and packaging (`thermal_rejects`)

Rejected product, packing medium, and packaging are recorded separately by material and treatment destination.

- Selected flow: Route rejects by material and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: measured rejects or batch mass-balance result
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_batch`

##### Elementary flows

###### Direct thermal-route emissions to air (`thermal_direct_air_emissions`)

Direct combustion and refrigerant emissions are reported substance by substance when they cross the environmental boundary.

- Selected flow: Substance-specific direct emissions to air
- Flow property / unit: Mass / kg
- Amount rule: measured emissions or calculation from collected fuel and refrigerant records using documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-pef-2021`

### Process: Non-acetic fermentation and finishing (`fermented_non_acetic`)

#### Inputs

##### Product flows

###### Prepared fungi transferred to fermentation route (`fermentation_fungi_input`)

Only the prepared intermediate assigned to `fermented_non_acetic` enters this route.

- Selected flow: Prepared mushroom or truffle intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_batch`

###### Fermentation and finishing ingredients (`fermentation_ingredients`)

Salt, water, starter where used, spices, oil, and other non-acetic ingredients are recorded separately; added vinegar or acetic acid as the preservation mechanism makes the product ineligible.

- Selected flow: Declared fermentation and finishing ingredients
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass less documented return to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_batch`
- Sources: `codex-cxs-38-1981`

###### Fermented-product packaging (`fermentation_packaging`)

Primary container, closure, label, and route-attributable secondary packaging are recorded by material and mass.

- Selected flow: Packaging materials by material and format
- Flow property / unit: Mass / kg
- Amount rule: purchase or issue records reconciled to accepted packed units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_batch`

###### Fermentation-route energy (`fermentation_energy`)

Electricity and thermal carriers for fermentation control, pumping, finishing, any declared post-fermentation stabilization, cooling, and sanitation are retained separately.

- Selected flow: Electricity and thermal energy carriers, supplier and carrier declared
- Flow property / unit: Energy / kWh or MJ with original unit retained
- Amount rule: measured meter or documented batch allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_energy`
- Sources: `codex-cxs-38-1981`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable fermented-route product (`fermentation_reference_product`)

The route output uses the exact generic CPC-classified flow and is counted only for accepted saleable units.

- Selected flow: Mushrooms and truffles, otherwise prepared or preserved `a73856a4-8862-40be-b505-65863a6cfb66`
- Flow property / unit: Mass / kg
- Amount rule: measured net product mass excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_batch`

##### Waste flows

###### Fermentation brine, rejects, and packaging losses (`fermentation_wastes`)

Spent brine or liquid, rejected product, and packaging losses are separated by waste type and treatment destination.

- Selected flow: Fermentation wastes by material and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: measured waste or batch mass-balance result
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_batch`

##### Elementary flows

###### Direct fermentation-route emissions to air (`fermentation_direct_air_emissions`)

Direct fuel, refrigerant, and process emissions are reported substance by substance when applicable.

- Selected flow: Substance-specific direct emissions to air
- Flow property / unit: Mass / kg
- Amount rule: measured emissions or calculation from collected activity records using documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_energy`
- Sources: `eu-pef-2021`

### Process: Other substantive cooking or formulation and packing (`other_prepared`)

#### Inputs

##### Product flows

###### Prepared fungi transferred to other-prepared route (`other_fungi_input`)

Only the prepared intermediate assigned to `other_prepared` enters this route.

- Selected flow: Prepared mushroom or truffle intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_other_batch`

###### Cooking, seasoning, or oil-formulation ingredients (`other_ingredients`)

All edible ingredients are recorded separately. The formulation shall not be a complete dish or meal and shall not use vinegar or acetic acid as the preservation mechanism.

- Selected flow: Declared cooking, seasoning, or formulation ingredients
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass less documented return to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_other_batch`
- Sources: `codex-cxs-38-1981`

###### Other-prepared packaging (`other_packaging`)

Primary container, closure, label, and route-attributable secondary packaging are recorded by material and mass.

- Selected flow: Packaging materials by material and format
- Flow property / unit: Mass / kg
- Amount rule: purchase or issue records reconciled to accepted packed units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_other_batch`

###### Other-prepared route energy (`other_energy`)

Electricity and thermal carriers for cooking, mixing, filling, cooling, cold holding when required, and sanitation are retained separately.

- Selected flow: Electricity and thermal energy carriers, supplier and carrier declared
- Flow property / unit: Energy / kWh or MJ with original unit retained
- Amount rule: measured meter or documented batch allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_other_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable other-prepared product (`other_reference_product`)

The route output uses the exact generic CPC-classified flow and is counted only for accepted saleable units.

- Selected flow: Mushrooms and truffles, otherwise prepared or preserved `a73856a4-8862-40be-b505-65863a6cfb66`
- Flow property / unit: Mass / kg
- Amount rule: measured net product mass excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_other_batch`

##### Waste flows

###### Other-prepared route rejects and losses (`other_wastes`)

Cooking losses, rejected product, wastewater, and packaging losses are separated by material and treatment destination.

- Selected flow: Route wastes by material and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: measured waste or batch mass-balance result
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_other_batch`

##### Elementary flows

###### Direct other-prepared-route emissions to air (`other_direct_air_emissions`)

Direct combustion and refrigerant emissions are reported substance by substance when applicable.

- Selected flow: Substance-specific direct emissions to air
- Flow property / unit: Mass / kg
- Amount rule: measured emissions or calculation from collected activity records using documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_other_energy`
- Sources: `eu-pef-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared and multifunctional foreground operations | First avoid allocation through batch, line, time, meter, or recipe subdivision. Keep route-specific operations separate and assign common preprocessing to the selected route using measured batch transfers. | `eu-pef-2021` |
| `allocation_co_products` | Saleable co-products other than the reference product | Where subdivision is not possible, apply a documented physical relationship that reflects the causal use of the process. If no defensible physical relationship exists, use economic allocation with contemporaneous factory-gate prices and test sensitivity. | `eu-pef-2021` |
| `allocation_wastes` | Residues and waste treatment | Do not assign avoided burdens to residues merely because they leave the site. Record their treatment or recovery route and apply any substitution or recycling model only in the downstream study with the method, quality, and displaced product disclosed. | `eu-pef-2021` |
| `allocation_packing_medium` | Edible packing medium and recipe ingredients | Treat edible medium sold with the product as part of the reference product mass, not as a co-product. Packaging remains a separate input and is excluded from reference mass. | `codex-cxs-297-2009` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preprocessing_batch` | `preprocessing` | incoming material, prepared intermediate, and residues | batch production record | batch_id; species; origin_type; supplier; incoming_state; input_mass; intermediate_mass; residue_mass; moisture_or_solids_if_measured; disposition | calibrated scales, receiving tickets, production and waste logs | kg wet mass | every batch | representative continuous 12-month period or all production in a shorter declared campaign | each included facility and line | sum like flows by batch, reconcile mass balance, then divide by prepared intermediate output | scale calibration; signed batch record; supplier specification; reconciliation record |
| `cp_preprocessing_utilities` | `preprocessing` | water, energy, and wastewater | meter and allocation record | meter_id; period; water_in; water_recirculated; wastewater_out; electricity; steam; fuel; production_hours; batch_id; allocation_driver | submeters preferred; otherwise documented engineering or production allocation | original units plus kg water, m3 wastewater, kWh electricity, and MJ thermal energy | batch or at least monthly | same period as production data | each included facility and utility system | subtract documented recirculation only once, allocate shared totals by causal driver, and normalize to prepared intermediate output | meter calibration; invoices; allocation worksheet; completeness check |
| `cp_thermal_batch` | `thermal_container` | route material inputs, packaging, product, and rejects | batch and packaging record | batch_id; route_code; intermediate_mass; ingredient_mass_by_material; packaging_mass_by_material; filled_units; net_content; accepted_units; rejected_product; rejected_packaging; treatment_destination | formulation sheets, issue records, checkweigher or net-content records, packaging bills, and reject logs | kg and unit count | every batch | representative continuous 12-month period or all production in a shorter declared campaign | each thermal line and container format | retain material identity, calculate accepted net product mass, reconcile route mass, and normalize to accepted net product | calibrated scales; approved recipe; net-content verification; container specification; reject log |
| `cp_thermal_energy` | `thermal_container` | route energy and direct emissions | meter, fuel, refrigerant, and process record | batch_id; meter_id; electricity; steam; fuel_by_type; retort_or_heat_cycle; cooling; refrigerant_makeup; measured_emissions; factor_source | submeters and cycle logs; invoices and documented allocation only where submetering is unavailable | original units plus kWh, MJ, and kg emission | batch or at least monthly | same period as thermal-route production | each thermal line and utility system | keep carriers separate, allocate by causal cycle or operating time, calculate substance-specific emissions, and normalize to accepted net product | meter calibration; cycle record; fuel invoice; refrigerant log; factor citation; calculation worksheet |
| `cp_fermentation_batch` | `fermented_non_acetic` | route material inputs, packaging, product, and wastes | fermentation lot record | lot_id; route_code; species; intermediate_mass; water; salt; starter; ingredient_mass_by_material; fermentation_time; control_measurements; packaging_mass; net_product_mass; spent_liquid; rejects; destinations | approved formulation, issue records, tank records, control logs, scales, and packaging records | kg, hours, and declared control units | every lot | representative continuous 12-month period or all production in a shorter declared campaign | each fermentation vessel, finishing line, and product formulation | retain ingredient identity, aggregate only comparable lots, reconcile mass, and normalize to accepted net product | calibrated instruments; approved formulation; fermentation control log; release record; waste transfer record |
| `cp_fermentation_energy` | `fermented_non_acetic` | route energy and direct emissions | meter, fuel, refrigerant, and process record | lot_id; meter_id; electricity; heat; cooling; fuel_by_type; refrigerant_makeup; stabilization_cycle_if_any; measured_emissions; factor_source | submeters and equipment logs; documented allocation where direct measurement is unavailable | original units plus kWh, MJ, and kg emission | lot or at least monthly | same period as fermentation-route production | each fermentation and finishing system | keep carriers separate, allocate by causal operating time or vessel use, calculate substance-specific emissions, and normalize to accepted net product | meter calibration; equipment log; fuel invoice; refrigerant log; factor citation; calculation worksheet |
| `cp_other_batch` | `other_prepared` | route material inputs, packaging, product, and wastes | batch and packaging record | batch_id; route_code; preparation_description; intermediate_mass; ingredient_mass_by_material; packaging_mass_by_material; net_product_mass; rejects; wastewater; destinations | approved recipe, issue records, calibrated scales, packaging records, and waste logs | kg and unit count | every batch | representative continuous 12-month period or all production in a shorter declared campaign | each cooking or formulation line and product style | retain ingredient identity, aggregate only comparable recipes and storage regimes, reconcile mass, and normalize to accepted net product | calibrated scales; approved recipe; release record; container specification; waste log |
| `cp_other_energy` | `other_prepared` | route energy and direct emissions | meter, fuel, refrigerant, and process record | batch_id; meter_id; electricity; heat; cooling; cold_holding_time; fuel_by_type; refrigerant_makeup; measured_emissions; factor_source | submeters and equipment logs; documented allocation where direct measurement is unavailable | original units plus kWh, MJ, and kg emission | batch or at least monthly | same period as other-prepared-route production | each cooking, formulation, cooling, and storage system | keep carriers separate, allocate by causal cycle or operating time, calculate substance-specific emissions, and normalize to accepted net product | meter calibration; equipment log; fuel invoice; refrigerant log; factor citation; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Selected route | normalized amount = period or batch amount / accepted net product mass in kg; packaging mass is excluded from the denominator and edible packing medium is included | flow amount; accepted units; measured net content; edible-medium status | amount per 1 kg reference product | `eu-pef-2021`; `codex-cxs-297-2009` |
| `calc_preprocessing_transfer` | Common preprocessing | route-attributed preprocessing amount = total preprocessing amount × measured intermediate mass transferred to selected route / total prepared intermediate mass; use a more causal measured driver when documented | common preprocessing records; route transfer masses | preprocessing inventory assigned to selected route | `eu-pef-2021` |
| `calc_route_mass_balance` | Each selected route | mass balance difference = total measured mass inputs − saleable net product − separately measured co-products − separately measured wastes; investigate rather than silently allocate an unexplained material difference | batch material, product, co-product, and waste masses on consistent wet-mass basis | disclosed reconciliation difference and completeness flag | `eu-pef-2021` |
| `calc_direct_emissions` | Onsite fuel and refrigerant use | emission by substance = collected activity × documented applicable factor, with oxidation, density, and unit conversions retained; use direct measurements where available | fuel by carrier; refrigerant makeup; measured emission; factor and conversion records | kg substance-specific elementary flow per kg reference product | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and route | Verify the exact generic reference-flow UUID, species or declared mixture, product style, incoming state, route code, preservation mechanism, container, storage regime, and shelf life. | Product specification, approved recipe, label, batch release, and route decision record |
| `dq_route_exclusivity` | Process map | Demonstrate that exactly one route process supplies the reference product and that alternative-route inventories are absent. | Batch route code, process flow diagram, and inventory completeness review |
| `dq_measurement` | Mass, water, and energy | Use calibrated instruments or reconciled supplier records; retain raw units, conversions, allocation drivers, and meter coverage. | Calibration certificates, invoices, meter maps, batch records, and calculation worksheets |
| `dq_temporal` | Foreground dataset | Prefer a representative continuous 12-month period; a shorter seasonal or campaign period shall cover the full campaign and disclose why it represents the product. | Dated production calendar and coverage calculation |
| `dq_completeness` | Foreground inventory | Reconcile material balance, include utilities and direct emissions, and identify every excluded flow, missing month, proxy, and waste destination. | Mass balance, utility reconciliation, emission-factor register, and gap log |
| `dq_provisional_estimates` | Missing foreground quantity | No default numeric estimate is supplied by this PCR. If a quantity is temporarily gap-filled, tag it as `reasoned_estimate`, state the applicable route, technology, geography, and basis, state that it is provisional, and replace it when representative batch records, calibrated measurements, supplier primary data, or reviewed evidence become available. Such estimates shall not support verified comparative assertions. | Assumption register, applicability statement, uncertainty disclosure, owner, and explicit replacement trigger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require the product-flow UUID `a73856a4-8862-40be-b505-65863a6cfb66`, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and reference unit kg. |  |
| `validate_scope` | Product eligibility | Reject fresh, simply frozen, dried, vinegar- or acetic-acid-preserved, provisionally preserved, extract or concentrate, homogenized, or complete-meal products. | `unsd-cpc-3-0`; `codex-cxs-38-1981` |
| `validate_route` | Route processes | Require exactly one of `thermal_container`, `fermented_non_acetic`, or `other_prepared` to produce the reference flow. Reject a dataset that sums alternative routes or lacks the route precedence decision. | `codex-cxs-38-1981`; `codex-cxs-297-2009` |
| `validate_reference_mass` | Quantitative reference | Require 1 kg accepted net product excluding packaging and including edible medium or formulation sold as product; require the edible-medium share and net-content basis. | `codex-cxs-297-2009` |
| `validate_inventory` | Foreground completeness | Require incoming fungi or truffles, ingredients and media, packaging, water where used, carrier-specific energy, saleable output, residues, wastewater where generated, rejects, and applicable direct emissions; require consistent period and mass basis. | `eu-pef-2021` |
| `validate_mass_balance` | Material inventory | Require a documented route mass balance and investigation of unexplained difference; do not accept silent balancing through an unspecified waste flow. | `eu-pef-2021` |
| `validate_data_quality` | Dataset production | Require temporal coverage, site and technology representation, calibration or reconciliation evidence, upstream dataset metadata, proxy disclosure, and replacement triggers for every `reasoned_estimate`. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground data package for one declared prepared or preserved mushroom or truffle product and one mutually exclusive route |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness, projection readiness, and data quality |
| allowed_use | Product carbon or environmental footprint modelling, supply-chain inventory, process improvement, and scenario analysis for products matching the declared species, formulation, route, geography, technology, storage regime, and reference-mass basis |
| excluded_use | Fresh, simply frozen, dried, vinegar- or acetic-acid-preserved, provisional, extract or concentrate, homogenized, or complete-meal products; aggregation of mutually exclusive routes; verified comparative assertions based on unreviewed proxies or `reasoned_estimate` values |
| required_metadata | PCR id and version state; exact flow UUIDs; species and origin type; product style; route code and precedence decision; preservation mechanism; recipe and edible-medium share; net-content basis; container; storage regime; shelf life; facility geography; technology; data period; upstream dataset identities; allocation method |
| required_quality_disclosure | Meter and batch coverage; calibration and reconciliation; material-balance difference; excluded flows; missing data; proxies and provisional estimates; factor sources; uncertainty; representativeness limits; co-products and waste destinations |
| update_trigger | New or changed product-flow identity; classification scope; preservation route; recipe or edible-medium share; container; storage regime; technology; supplier or geography; material allocation basis; evidence affecting rules; or replacement of provisional estimates by representative batch, supplier, or reviewed evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | CPC identity and exclusions for vinegar or acetic acid preservation, simple freezing, drying, provisional preservation, and complete dishes |
| `codex-cxs-38-1981` | standard | Codex Alimentarius, CXS 38-1981, General Standard for Edible Fungi and Fungus Products, amended 2022 and 2023, https://workspace.fao.org/sites/codex/Standards/CXS%2038-1981/CXS_038e.pdf (retrieved 2026-08-11) | Edible-fungi identity, raw-material quality, and decomposition of non-acetic fermentation, thermal stabilization, and oil-preserved routes |
| `codex-cxs-297-2009` | standard | Codex Alimentarius, CXS 297-2009, Standard for Certain Canned Vegetables, including Annex on Certain Mushrooms, amended 2022 and 2023, https://workspace.fao.org/sites/codex/Standards/CXS%20297-2009/CXS_297e.pdf (retrieved 2026-08-11) | Canned-route process decomposition, net product and packing-medium interpretation, mushroom styles, filling, hermetic sealing, and heat stabilization |
| `eu-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on Environmental Footprint methods, Annex I Product Environmental Footprint Method, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Functional unit, system boundary, company-specific inventory, allocation hierarchy, data quality, modelling, and disclosure rules |
