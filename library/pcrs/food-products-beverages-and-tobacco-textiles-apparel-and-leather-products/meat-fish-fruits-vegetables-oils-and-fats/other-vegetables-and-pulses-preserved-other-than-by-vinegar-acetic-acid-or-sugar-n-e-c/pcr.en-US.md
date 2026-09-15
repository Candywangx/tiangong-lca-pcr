---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-preserved-other-than-by-vinegar-acetic-acid-or-sugar-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other vegetables and pulses, preserved other than by vinegar, acetic acid or sugar, n.e.c.

## 1. Scope and Applicability

This PCR covers CPC 3.0 class 21399. It applies to vegetables and pulses prepared or preserved by thermal processing in a hermetically sealed package, concentration, drying, non-vinegar fermentation or brining, or further processing followed by freezing, provided vinegar, acetic acid, or sugar is not the principal preservative. The concrete dataset shall identify one vegetable or pulse, one preservation route, and one saleable product state.

Examples within scope include preserved tomatoes and tomato puree, paste or powder; thermally processed sweet corn, carrots, cabbage, chickpeas, bamboo shoots, garlic, lentils, onions, peppers or spinach; table olives preserved by brining, fermentation, alkali treatment or sterilization; kimchi preserved by salting and lactic fermentation; and beans or peas that are both prepared or preserved and frozen. This PCR does not cover merely frozen vegetables, provisionally preserved vegetables, products principally preserved by vinegar or acetic acid, sugar-preserved products, homogenized preparations, potatoes, mushrooms or truffles, or non-frozen preserved beans and peas assigned to their own CPC classes. The official CPC explanatory note controls classification where an example and the exclusion list appear to overlap. [`unsd-cpc-v3-21399-2025`]

The rules are cradle-to-factory-gate rules for a foreground data package. Agricultural production, ingredient production, packaging-material production, energy supply, transport and off-site treatment remain upstream or downstream linked datasets unless operated inside the reporting organization. Distribution, retail, consumer preparation, use and end-of-life are outside the declared boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-preserved-other-than-by-vinegar-acetic-acid-or-sugar-n-e-c |
| classification_refs | CPC 3.0 21399, exact scope reference |
| covered_products | One specifically identified vegetable or pulse preserved by an in-scope route other than principally by vinegar, acetic acid or sugar |
| excluded_products | CPC 2131 merely frozen vegetables; 21330 provisionally preserved vegetables; 21340 vinegar- or acetic-acid-preserved vegetables; 21392 mushrooms and truffles; 21393 dried vegetables other than tomato powder within 21399; 21394 potatoes; 21395 non-frozen preserved beans; 21396 non-frozen preserved peas; 23991 homogenized food preparations; sugar-preserved products |
| representative_product | Shelf-stable, thermally processed sweet corn in a hermetically sealed retail package; this representative does not replace the declared identity of another qualifying product |
| production_route | Receipt and preparation, product-specific preservation, package filling and closure, stabilization or cold preservation, inspection and factory release |
| market_state | Factory-gate saleable product, with preservation route, packing medium, drained or undrained basis, solids or concentration where relevant, package format, and storage state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable preserved vegetable or pulse conforming to the declared product specification and CPC 3.0 21399 |
| How much | 1 kg net product content at factory gate; packaging mass is excluded from the 1 kg but included as inventory inputs |
| How well | Released product meeting the applicable legal, customer and Codex specification, including package integrity and the scheduled thermal process or validated cold-preservation condition where relevant |
| How long or cycle | One production campaign represented by a temporally representative reporting period; shelf life is a required qualifier, not a multiplier |
| reference_flow_link | The reference output row `finished_preserved_product`; no full-scope Tiangong product-flow UUID has been verified |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product content |
| Reference product flow | Other vegetables and pulses, preserved other than by vinegar, acetic acid or sugar, n.e.c. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Vegetable or pulse identity; preservation route; packing medium; drained or undrained reference basis; soluble or total solids when applicable; package format and net content; ambient, chilled or frozen storage state; shelf life; production geography; reporting period; inclusion or exclusion of secondary and tertiary packaging |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mass-net-product | Reference product | Mass | kg | Determine net product content by calibrated filling or check-weighing records. Declare whether packing medium is included and use the same basis for all normalized exchanges. |
| mass-material | Vegetables, ingredients, packaging, wastes, sludge and mass emissions | Mass | kg | Use receiving, dispensing, packaging-line, waste-haul or laboratory records; do not infer one atomic material by subtracting an aggregated mixture. |
| water-volume | Process, cleaning, cooling and wastewater | Volume | m3 | Use submetered volume or a documented engineering balance; keep incoming water, recirculated water and discharged wastewater distinct. |
| electricity-energy | Purchased and generated electricity | Energy | kWh | Use revenue or calibrated submeter readings; subtract documented exports and allocate shared meters only under Section 7. |
| thermal-energy | Purchased heat and steam | Energy | MJ | Measure delivered useful energy; if only steam mass is available, calculate energy from measured pressure, temperature, condensate return and enthalpy. |
| fuel-energy | Natural gas and other fuels | Energy | MJ LHV | Record each fuel separately and convert the measured purchase unit using supplier lower-heating-value evidence for the reporting period. |
| concentration | Tomato concentrate or packing medium | Mass fraction | kg/kg | Use laboratory solids or formulation records and state the analytical basis; do not convert puree, paste and powder using an assumed generic solids value. |
| refrigeration-loss | Each refrigerant | Mass | kg | Use refrigerant-specific additions, recovery and inventory reconciliation; report each chemical as a separate direct elementary flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified vegetables or pulses, ingredients, packaging components and utilities delivered to the factory gate |
| starting_condition_role | Upstream product inputs to the foreground preservation system |
| product_classification_scope | Only products satisfying CPC 3.0 21399 and the declared product specification |
| recursive_input_rule | Link every purchased material, ingredient, packaging component, fuel, electricity, heat, steam, water service and off-site treatment to an upstream dataset; do not recreate an upstream process inside a flow card |
| upstream_dataset_requirement | Supplier- and geography-representative datasets with matching technology, product state and reference unit; disclose proxies and recycled-content assumptions |
| disclosure | Report cut-offs, excluded capital goods, shared utilities, outsourced steps, storage state, product loss, packaging level and whether wastewater treatment is on-site or off-site |

Include receiving, sorting, washing, trimming or peeling, cutting or size reduction, product-specific preparation, blanching when used, formulation or brining, filling, exhausting, closure, scheduled heat processing and cooling for thermally stable products; concentration and optional drying for tomato products; salting, washing, seasoning and controlled fermentation for kimchi; alkali treatment, washing, brining, fermentation, oxidation or sterilization for table olives; freezing and frozen storage for qualifying further-processed frozen products; package inspection, cleaning, on-site utilities, refrigerant loss, waste handling and on-site wastewater treatment. [`codex-cxc-23-1979`, `codex-cxs-297-2009`, `codex-cxs-13-1981`, `codex-cxs-57-1981`, `codex-cxs-66-1981`, `codex-cxs-223-2001`, `codex-cxs-320-2015`, `eu-jrc-fdm-bref-2019`]

Do not substitute a universal time-temperature schedule. Record the product-, fill-, container- and retort-specific scheduled process and its validation evidence. The quick-frozen route shall reach and maintain the applicable product temperature condition, including the Codex -18 °C thermal-centre criterion where that standard applies, but this conformance value is not an inventory amount range. [`codex-cxc-23-1979`, `codex-cxs-320-2015`]

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | Receiving and vegetable preparation | required | Always | Converts identified raw vegetables or pulses into prepared route feed | 1 kg prepared route feed |
| preservation | Product-specific preservation | required | Include exactly the route operations used by the declared product | Produces stable or controlled-cold preserved product | 1 kg preserved bulk product |
| packaging_release | Filling, packaging and factory release | required | Always; record only package components actually used | Produces the reference product | 1 kg net finished product |
| onsite_utilities | On-site energy and refrigeration supply | conditional | Include when fuel combustion, cogeneration or refrigeration is operated on-site | Supplies measured utilities and records direct emissions | 1 MJ useful utility or 1 kWh electricity |
| cleaning | Cleaning and sanitation | required | Always | Provides line and equipment hygiene | One reporting-period cleaning service normalized to output |
| wastewater_treatment | On-site wastewater treatment | conditional | Include when wastewater is treated before discharge; otherwise record each wastewater stream to off-site treatment | Treats facility wastewater and records residual releases | 1 m3 influent treated |

### Process: Receiving and vegetable preparation (`preparation`)

#### Inputs

##### Product flows

###### Raw sweet corn (`raw_sweet_corn`)

Record sweet corn entering the representative thermal route after receiving acceptance.

- Selected flow: Sweet corn, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted input attributable to the representative route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared sweet corn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-materials`
- Sources: `unsd-cpc-v3-21399-2025`

###### Raw tomatoes (`raw_tomato`)

Record sound tomatoes entering a preserved-tomato, concentrate or powder route.

- Selected flow: Tomato, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted tomato input for the declared tomato route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared tomato output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-materials`
- Sources: `codex-cxs-13-1981`, `codex-cxs-57-1981`

###### Raw Chinese cabbage (`raw_chinese_cabbage`)

Record Chinese cabbage entering a kimchi route.

- Selected flow: Chinese cabbage, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted cabbage input for the fermentation batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared Chinese cabbage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-materials`
- Sources: `codex-cxs-223-2001`

###### Raw olives (`raw_olive`)

Record fresh olives entering the declared table-olive route.

- Selected flow: Olive, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted olive input for the treatment batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared olive output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-materials`
- Sources: `codex-cxs-66-1981`

###### Raw green beans (`raw_green_bean`)

Record green beans entering a qualifying further-processed frozen route.

- Selected flow: Green bean, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted bean input for the declared route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared green bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-materials`
- Sources: `unsd-cpc-v3-21399-2025`, `codex-cxs-320-2015`

###### Raw green peas (`raw_green_pea`)

Record green peas entering a qualifying further-processed frozen route.

- Selected flow: Green pea, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted pea input for the declared route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-materials`
- Sources: `unsd-cpc-v3-21399-2025`, `codex-cxs-320-2015`

###### Preparation water (`preparation_water`)

Record water contacting product during washing, conveying or blanching preparation.

- Selected flow: Water, potable, at factory
- Flow property / unit: Volume / m3
- Amount rule: Submetered make-up water minus separately metered recirculated water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared route feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-water`
- Sources: `codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

###### Preparation electricity (`preparation_electricity`)

Record electricity used by sorting, washing, peeling, cutting and conveying equipment.

- Selected flow: Electricity, grid mix, at factory
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or documented equipment-time allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared route feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Prepared vegetable route feed (`prepared_route_feed`)

Record the single identified prepared vegetable or pulse passed to preservation; the dataset description shall retain its botanical identity.

- Selected flow: Prepared vegetable or pulse route feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted feed leaving preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Quantitative reference of the preparation process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-materials`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Rejected vegetable matter (`preparation_vegetable_reject`)

Record spoiled or specification-rejected vegetable matter separately from intentional trimming residues.

- Selected flow: Rejected vegetable matter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed reject-bin mass net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared route feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Vegetable trimming residue (`preparation_trimming_residue`)

Record stems, pods, cores, skins or other intentional trimming residue as one physical residue stream only when handled together.

- Selected flow: Vegetable trimming residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed residue-bin mass net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared route feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Preparation wastewater (`preparation_wastewater`)

Record washing, conveying and blanching-preparation wastewater before treatment.

- Selected flow: Vegetable preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Submetered discharge or documented water balance excluding recirculated water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared route feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

None.

### Process: Product-specific preservation (`preservation`)

#### Inputs

##### Product flows

###### Prepared route feed (`preservation_route_feed`)

Record the identified output of preparation entering the selected preservation route.

- Selected flow: Prepared vegetable or pulse route feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed transfer into preservation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-materials`
- Sources: `eu-jrc-fdm-bref-2019`

###### Packing or brining water (`preservation_water`)

Record water retained in packing medium, brine or formulation separately from preparation and cleaning water.

- Selected flow: Water, potable, at factory
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-formulation water charged to preservation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-water`
- Sources: `codex-cxs-297-2009`, `codex-cxs-66-1981`

###### Sodium chloride (`sodium_chloride`)

Record salt used in packing medium, brining, salting or seasoning.

- Selected flow: Sodium chloride, food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed batch addition net of returned material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-ingredients`
- Sources: `codex-cxs-297-2009`, `codex-cxs-66-1981`, `codex-cxs-223-2001`

###### Calcium chloride (`calcium_chloride`)

Record food-grade calcium chloride only when used as a firming agent.

- Selected flow: Calcium chloride, food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed formulation addition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-ingredients`
- Sources: `codex-cxs-297-2009`

###### Citric acid (`citric_acid`)

Record food-grade citric acid used for product adjustment; confirm that acidification does not move the product to the vinegar or acetic-acid class.

- Selected flow: Citric acid, food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed formulation addition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-ingredients`
- Sources: `codex-cxs-297-2009`

###### Sodium hydroxide for olive treatment (`olive_sodium_hydroxide`)

Record sodium hydroxide charged to the alkali-treated olive route.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed chemical addition net of returned solution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg treated olives
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-ingredients`
- Sources: `codex-cxs-66-1981`

###### Red pepper powder (`kimchi_red_pepper`)

Record red pepper powder used in kimchi seasoning.

- Selected flow: Red pepper powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed batch addition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg kimchi bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-ingredients`
- Sources: `codex-cxs-223-2001`

###### Garlic (`kimchi_garlic`)

Record garlic used in the declared kimchi seasoning.

- Selected flow: Garlic, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed batch addition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg kimchi bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-ingredients`
- Sources: `codex-cxs-223-2001`

###### Ginger (`kimchi_ginger`)

Record ginger used in the declared kimchi seasoning.

- Selected flow: Ginger, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed batch addition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg kimchi bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-ingredients`
- Sources: `codex-cxs-223-2001`

###### Radish (`kimchi_radish`)

Record radish used in the declared kimchi seasoning.

- Selected flow: Radish, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed batch addition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg kimchi bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-ingredients`
- Sources: `codex-cxs-223-2001`

###### Preservation electricity (`preservation_electricity`)

Record electricity for pumps, cutters, evaporators, dryers, fermenters, retorts, freezers and controls attributable to the selected route.

- Selected flow: Electricity, grid mix, at factory
- Flow property / unit: Energy / kWh
- Amount rule: Route submeter reading; exclude separately metered refrigeration electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `eu-jrc-fdm-bref-2019`, `frankowska-vegetables-2019`

###### Purchased steam (`preservation_steam`)

Record externally supplied steam used for blanching, cooking, retorting, evaporation or drying.

- Selected flow: Steam, purchased, at factory
- Flow property / unit: Energy / MJ
- Amount rule: Metered useful energy based on steam and condensate conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

###### Purchased heat (`preservation_heat`)

Record externally supplied non-steam heat used by preservation equipment.

- Selected flow: Heat, purchased, at factory
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered useful heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `eu-jrc-fdm-bref-2019`

###### Refrigeration electricity (`refrigeration_electricity`)

Record electricity supplied to cold rooms, chillers and freezers for the qualifying product route.

- Selected flow: Electricity, grid mix, at factory
- Flow property / unit: Energy / kWh
- Amount rule: Refrigeration submeter reading allocated by measured service load or product residence time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg chilled or frozen preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `codex-cxs-223-2001`, `codex-cxs-320-2015`, `eu-jrc-fdm-bref-2019`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Preserved bulk product (`preserved_bulk_product`)

Record the declared preserved product before final package release, retaining the exact product and route identity.

- Selected flow: Preserved vegetable or pulse, bulk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed conforming output transferred to filling or final release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Quantitative reference of the preservation process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-product`
- Sources: `codex-cxs-297-2009`

##### Waste flows

###### Preservation product loss (`preservation_product_loss`)

Record off-spec or spilled preserved product separately from raw preparation residue.

- Selected flow: Off-spec preserved vegetable product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or mass-balanced route loss with reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Tomato skin residue (`tomato_skin_residue`)

Record skins removed from the tomato route.

- Selected flow: Tomato skin residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed residue leaving screening.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg tomato concentrate or powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `codex-cxs-57-1981`

###### Tomato seed residue (`tomato_seed_residue`)

Record seeds removed from the tomato route separately from skins.

- Selected flow: Tomato seed residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed seed residue leaving screening.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg tomato concentrate or powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `codex-cxs-57-1981`

###### Spent olive brine (`spent_olive_brine`)

Record spent brine from olive treatment or fermentation before treatment.

- Selected flow: Spent olive brine
- Flow property / unit: Volume / m3
- Amount rule: Metered or tank-volume discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg table olive bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `codex-cxs-66-1981`, `eu-jrc-fdm-bref-2019`

###### Preservation wastewater (`preservation_wastewater`)

Record process water discharged by blanching, cooling, fermentation washing, retorting, evaporation or freezing.

- Selected flow: Vegetable preservation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Submetered route discharge excluding cleaning wastewater and spent brine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Tomato drying particulate to air (`tomato_drying_particulate`)

Record measured tomato powder particulate emitted after the installed air-control device.

- Selected flow: Particulate matter, to air, unspecified particle size
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack measurement or reconciled capture-efficiency calculation for the drying route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg tomato powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Filling, packaging and factory release (`packaging_release`)

#### Inputs

##### Product flows

###### Preserved bulk product input (`packaging_bulk_product`)

Record preserved bulk product entering final filling or packaging.

- Selected flow: Preserved vegetable or pulse, bulk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed transfer to the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-product`
- Sources: `codex-cxs-297-2009`

###### Tinplate steel can body (`tinplate_can_body`)

Record the can body as a separate packaging component.

- Selected flow: Tinplate steel can body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued component count multiplied by verified unit mass, reconciled to line returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `codex-cxs-297-2009`, `frankowska-vegetables-2019`

###### Tinplate steel can end (`tinplate_can_end`)

Record the can end separately from the can body.

- Selected flow: Tinplate steel can end
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued component count multiplied by verified unit mass, reconciled to line returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `codex-cxs-297-2009`, `frankowska-vegetables-2019`

###### Glass jar (`glass_jar`)

Record the glass container separately from its closure.

- Selected flow: Glass food jar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued jar count multiplied by verified unit mass, reconciled to line returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `codex-cxs-297-2009`, `frankowska-vegetables-2019`

###### Steel jar closure (`steel_jar_closure`)

Record the steel jar closure separately from the jar.

- Selected flow: Steel food-jar closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued closure count multiplied by verified unit mass, reconciled to line returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `codex-cxs-297-2009`

###### Multilayer retort pouch (`retort_pouch`)

Record each retort pouch as one supplied laminate article; disclose its layer composition in metadata.

- Selected flow: Multilayer retort pouch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued pouch count multiplied by verified unit mass, reconciled to line returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `codex-cxc-23-1979`

###### Polyethylene frozen-food bag (`polyethylene_bag`)

Record the primary bag used for frozen product.

- Selected flow: Polyethylene frozen-food bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued bag count multiplied by verified unit mass, reconciled to line returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `codex-cxs-320-2015`

###### Paper label (`paper_label`)

Record paper labels separately from containers and closures.

- Selected flow: Printed paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued label count multiplied by verified unit mass, reconciled to line returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `frankowska-vegetables-2019`

###### Corrugated cardboard case (`corrugated_case`)

Record the secondary transport case separately from primary packaging.

- Selected flow: Corrugated cardboard case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued case count multiplied by verified unit mass, reconciled to line returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `frankowska-vegetables-2019`

###### Polyethylene stretch film (`stretch_film`)

Record pallet stretch film separately from other plastic packaging.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed roll consumption net of unused returned film.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `frankowska-vegetables-2019`

###### Wooden pallet (`wooden_pallet`)

Record non-returnable pallet use or the measured loss share of a returnable pallet pool.

- Selected flow: Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Pallet issue records multiplied by verified mass and documented reuse allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-packaging`
- Sources: `eu-pef-2021-2279`

###### Packaging electricity (`packaging_electricity`)

Record electricity used by filling, exhausting, sealing, labelling, inspection and case packing.

- Selected flow: Electricity, grid mix, at factory
- Flow property / unit: Energy / kWh
- Amount rule: Packaging-line submeter reading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Other vegetables and pulses, preserved other than by vinegar, acetic acid or sugar, n.e.c. (`finished_preserved_product`)

This is the reference output. Its exact vegetable or pulse, route, packing medium, product state and package shall be stated in dataset metadata.

- Selected flow: Other vegetables and pulses, preserved other than by vinegar, acetic acid or sugar, n.e.c.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Set to 1 kg net product content; packaging mass is inventoried separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Quantitative reference of the foreground data package
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-product`
- Sources: `unsd-cpc-v3-21399-2025`

##### Waste flows

###### Off-spec packaged product (`packaged_product_reject`)

Record sealed or filled product rejected before release, including its contents; record recoverable package components separately when disassembled.

- Selected flow: Off-spec packaged preserved vegetable product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed reject mass net of separately recovered packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `codex-cxc-23-1979`

###### Steel packaging scrap (`steel_packaging_scrap`)

Record rejected can bodies, can ends and steel closures handled as one steel scrap stream.

- Selected flow: Steel packaging scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed steel scrap net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Glass packaging scrap (`glass_packaging_scrap`)

Record broken or rejected glass jars separately from metal closures.

- Selected flow: Glass packaging scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed glass scrap net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Plastic packaging scrap (`plastic_packaging_scrap`)

Record rejected pouches, bags and stretch film handled as the declared plastic scrap stream; split by polymer when separately handled.

- Selected flow: Plastic packaging scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed plastic scrap net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Paper packaging scrap (`paper_packaging_scrap`)

Record rejected labels and corrugated case material handled as the declared paper scrap stream.

- Selected flow: Paper packaging scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed paper scrap net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

None.

### Process: On-site energy and refrigeration supply (`onsite_utilities`)

#### Inputs

##### Product flows

###### Natural gas (`natural_gas`)

Record natural gas combusted on-site separately from every other fuel.

- Selected flow: Natural gas, combusted on-site
- Flow property / unit: Energy / MJ LHV
- Amount rule: Metered volume converted with supplier-period lower heating value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-fuels`
- Sources: `eu-jrc-fdm-bref-2019`

###### Diesel fuel (`diesel_fuel`)

Record diesel combusted in stationary utility equipment separately.

- Selected flow: Diesel fuel, combusted on-site
- Flow property / unit: Energy / MJ LHV
- Amount rule: Purchase and tank records converted with supplier-period lower heating value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-fuels`
- Sources: `eu-jrc-fdm-bref-2019`

###### Liquefied petroleum gas (`lpg_fuel`)

Record liquefied petroleum gas combusted on-site separately.

- Selected flow: Liquefied petroleum gas, combusted on-site
- Flow property / unit: Energy / MJ LHV
- Amount rule: Purchase and tank records converted with supplier-period lower heating value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-fuels`
- Sources: `eu-jrc-fdm-bref-2019`

###### Heavy fuel oil (`heavy_fuel_oil`)

Record heavy fuel oil combusted on-site separately.

- Selected flow: Heavy fuel oil, combusted on-site
- Flow property / unit: Energy / MJ LHV
- Amount rule: Purchase and tank records converted with supplier-period lower heating value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-fuels`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wood-chip fuel (`wood_chip_fuel`)

Record wood chips combusted on-site separately from fossil fuels and state moisture content.

- Selected flow: Wood chips, combusted on-site
- Flow property / unit: Energy / MJ LHV
- Amount rule: Weighed fuel converted with batch-specific lower heating value and moisture evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-fuels`
- Sources: `eu-jrc-fdm-bref-2019`

###### Boiler feedwater (`boiler_feedwater`)

Record make-up water entering on-site steam generation.

- Selected flow: Boiler feedwater
- Flow property / unit: Volume / m3
- Amount rule: Boiler make-up water meter reading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful steam output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-water`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### On-site steam (`onsite_steam`)

Record useful steam delivered to foreground users after distribution losses.

- Selected flow: Steam, generated on-site
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered steam energy net of condensate return.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Quantitative reference of the steam utility process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Boiler blowdown (`boiler_blowdown`)

Record boiler blowdown water before treatment.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or documented cycles-of-concentration balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful steam output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `eu-jrc-fdm-bref-2019`

###### Boiler ash (`boiler_ash`)

Record solid ash from wood-chip or heavy-fuel-oil combustion separately from food residues and sludge.

- Selected flow: Boiler ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed ash removed from utility equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide`)

Record fossil carbon dioxide from on-site fuel combustion.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack measurement or fuel-specific calculation from recorded fossil fuel carbon content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-pef-2021-2279`

###### Biogenic carbon dioxide to air (`biogenic_carbon_dioxide`)

Record biogenic carbon dioxide from wood-chip combustion separately from fossil carbon dioxide.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack measurement or biomass-carbon calculation from recorded wood-chip carbon content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-pef-2021-2279`

###### Nitrogen oxides to air (`nitrogen_oxides`)

Record nitrogen oxides from on-site combustion as the monitored reporting species.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack monitoring or fuel- and equipment-specific calculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sulfur dioxide to air (`sulfur_dioxide`)

Record sulfur dioxide from on-site combustion separately.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack monitoring or calculation from measured fuel sulfur content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Methane from combustion to air (`combustion_methane`)

Record unburned methane from on-site combustion separately.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack monitoring or fuel- and equipment-specific calculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nitrous oxide from combustion to air (`combustion_nitrous_oxide`)

Record nitrous oxide from on-site combustion separately.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack monitoring or fuel- and equipment-specific calculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Carbon monoxide to air (`carbon_monoxide`)

Record carbon monoxide from on-site combustion separately.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack monitoring or fuel- and equipment-specific calculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Combustion particulate to air (`combustion_particulate`)

Record particulate matter emitted after combustion air controls.

- Selected flow: Particulate matter, to air, unspecified particle size
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Stack monitoring or equipment-specific calculation after control efficiency.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured useful utility output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Refrigerant R134a to air (`refrigerant_r134a`)

Record unrecovered R134a loss separately from every other refrigerant.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: R134a additions plus opening inventory minus recovery and closing inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg refrigerated preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-refrigerants`
- Sources: `eu-pef-2021-2279`

###### Refrigerant R404A to air (`refrigerant_r404a`)

Record unrecovered R404A loss as its own refrigerant flow; use constituent flows instead if required by the target database.

- Selected flow: Refrigerant R404A, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: R404A additions plus opening inventory minus recovery and closing inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg refrigerated preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-refrigerants`
- Sources: `eu-pef-2021-2279`

###### Ammonia refrigerant to air (`refrigerant_ammonia`)

Record unrecovered ammonia refrigerant loss separately.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Ammonia additions plus opening inventory minus recovery and closing inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg refrigerated preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-refrigerants`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Cleaning and sanitation (`cleaning`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

Record water used for equipment, floor and container cleaning separately from product water.

- Selected flow: Water, potable, at factory
- Flow property / unit: Volume / m3
- Amount rule: Cleaning-system submeter reading net of measured reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-water`
- Sources: `codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

###### Sodium hydroxide cleaner (`cleaning_sodium_hydroxide`)

Record sodium hydroxide used for cleaning separately from olive treatment chemical.

- Selected flow: Sodium hydroxide cleaning agent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Chemical issue or dosing-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-cleaning`
- Sources: `codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

###### Nitric acid cleaner (`cleaning_nitric_acid`)

Record nitric acid used for cleaning separately.

- Selected flow: Nitric acid cleaning agent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Chemical issue or dosing-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-cleaning`
- Sources: `eu-jrc-fdm-bref-2019`

###### Phosphoric acid cleaner (`cleaning_phosphoric_acid`)

Record phosphoric acid used for cleaning separately.

- Selected flow: Phosphoric acid cleaning agent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Chemical issue or dosing-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-cleaning`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sodium hypochlorite sanitizer (`cleaning_sodium_hypochlorite`)

Record sodium hypochlorite used for sanitation separately.

- Selected flow: Sodium hypochlorite sanitizer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Chemical issue or dosing-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-cleaning`
- Sources: `codex-cxc-23-1979`

###### Peracetic acid sanitizer (`cleaning_peracetic_acid`)

Record peracetic acid used for sanitation separately.

- Selected flow: Peracetic acid sanitizer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Chemical issue or dosing-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-cleaning`
- Sources: `codex-cxc-23-1979`

###### Cleaning electricity (`cleaning_electricity`)

Record electricity used by clean-in-place pumps, washers and sanitation equipment.

- Selected flow: Electricity, grid mix, at factory
- Flow property / unit: Energy / kWh
- Amount rule: Cleaning-system submeter reading or documented operating-time allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

None.

##### Waste flows

###### Alkaline cleaning wastewater (`alkaline_cleaning_wastewater`)

Record spent alkaline cleaning solution separately from acid and sanitizer wastewater.

- Selected flow: Alkaline cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Cleaning-program discharge meter or tank-volume record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `eu-jrc-fdm-bref-2019`

###### Acid cleaning wastewater (`acid_cleaning_wastewater`)

Record spent acid cleaning solution separately.

- Selected flow: Acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Cleaning-program discharge meter or tank-volume record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sanitizer wastewater (`sanitizer_wastewater`)

Record spent sanitizer solution separately from alkaline and acid cleaning wastewater.

- Selected flow: Sanitizer wastewater
- Flow property / unit: Volume / m3
- Amount rule: Sanitation-program discharge meter or tank-volume record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `codex-cxc-23-1979`

##### Elementary flows

None.

### Process: On-site wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater influent (`wastewater_influent`)

Record the metered combined influent only after all upstream wastewater streams have been retained as separate process outputs.

- Selected flow: Food-processing wastewater, to on-site treatment
- Flow property / unit: Volume / m3
- Amount rule: Treatment inlet flow meter reconciled to upstream wastewater streams.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wastewater treatment electricity (`wwt_electricity`)

Record electricity used by on-site wastewater treatment.

- Selected flow: Electricity, grid mix, at factory
- Flow property / unit: Energy / kWh
- Amount rule: Treatment-plant submeter reading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-energy`
- Sources: `eu-jrc-fdm-bref-2019`

###### Ferric chloride coagulant (`wwt_ferric_chloride`)

Record ferric chloride used in wastewater treatment separately.

- Selected flow: Ferric chloride coagulant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Dosing-system or chemical issue record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-treatment-chemicals`
- Sources: `eu-jrc-fdm-bref-2019`

###### Flocculant polymer (`wwt_flocculant`)

Record wastewater flocculant polymer separately from coagulant.

- Selected flow: Wastewater flocculant polymer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Dosing-system or chemical issue record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-treatment-chemicals`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

None.

##### Waste flows

###### Treated wastewater (`treated_wastewater`)

Record final treated effluent volume; direct pollutant releases are separate elementary-flow cards.

- Selected flow: Treated food-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Final-effluent flow meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-wastewater`
- Sources: `eu-jrc-fdm-bref-2019`

###### Primary wastewater sludge (`primary_sludge`)

Record primary sludge separately from biological sludge and state wet or dry basis.

- Selected flow: Primary food-processing wastewater sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed removal with measured dry-matter fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Biological wastewater sludge (`biological_sludge`)

Record waste biological sludge separately from primary sludge and state wet or dry basis.

- Selected flow: Biological food-processing wastewater sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed removal with measured dry-matter fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wastewater screenings (`wastewater_screenings`)

Record screenings removed at treatment inlet separately from sludge.

- Selected flow: Food-processing wastewater screenings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed screened solids net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-waste`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

Record chemical oxygen demand discharged in final effluent.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Flow-weighted final-effluent concentration multiplied by discharged volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-effluent`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total nitrogen to water (`nitrogen_to_water`)

Record total nitrogen discharged in final effluent separately.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Flow-weighted final-effluent concentration multiplied by discharged volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-effluent`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total phosphorus to water (`phosphorus_to_water`)

Record total phosphorus discharged in final effluent separately.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Flow-weighted final-effluent concentration multiplied by discharged volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-effluent`
- Sources: `eu-jrc-fdm-bref-2019`

###### Suspended solids to water (`suspended_solids_to_water`)

Record suspended solids discharged in final effluent separately.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Flow-weighted final-effluent concentration multiplied by discharged volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-effluent`
- Sources: `eu-jrc-fdm-bref-2019`

###### Methane from wastewater to air (`wastewater_methane`)

Record measured or plant-modelled methane released by on-site wastewater treatment.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Off-gas measurement or treatment-specific carbon balance using recorded influent and effluent data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-pef-2021-2279`

###### Nitrous oxide from wastewater to air (`wastewater_nitrous_oxide`)

Record measured or plant-modelled nitrous oxide released by nitrogen treatment.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Off-gas measurement or treatment-specific nitrogen balance using recorded operating data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 wastewater influent treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `protocol-emissions`
- Sources: `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

Build separate unit processes and meter route-specific operations wherever practicable. Avoid allocation by directly weighing product, ingredients, packaging, wastes and route utilities. For a shared operation, first subdivide by line, batch, preservation route or time period. If subdivision is not feasible, apply system expansion only when a documented substituted function and market are defensible; otherwise allocate using a measured physical relationship that represents the driver of consumption or loss, such as equipment time, useful steam, refrigeration load, wastewater volume or net product mass. Economic allocation is a last resort and shall use a representative price period with sensitivity analysis. [`eu-pef-2021-2279`, `iso-14044-2006`]

Saleable tomato skins, seeds, vegetable residues, recovered brine ingredients, recovered packaging material, energy exports or sludge are co-products only when they meet a product specification and leave for a documented beneficial use. Otherwise they remain waste flows with the receiving treatment linked. Do not assign avoided burdens to waste recycling or energy recovery inside the foreground inventory unless the declared LCA method explicitly requires it; disclose the chosen recycling and end-of-life convention.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| protocol-materials | preparation; preservation | vegetable or pulse input; intermediate | weighbridge, scale or batch record | material identity, supplier, lot, gross mass, tare, accepted mass, route, batch | Calibrated weighing reconciled to inventory movement | kg | Each receipt or batch | At least one representative annual period including seasonal campaigns | Each included site and route | Sum accepted mass by exact material and route; no aggregation across botanical identities | Calibration, lot traceability and annual mass balance |
| protocol-ingredients | preservation | ingredient | formulation and dispensing record | ingredient identity, batch, issued mass, returned mass, concentration | Calibrated dispensing or verified formulation record | kg | Each batch | Same period as product output | Each included line | Sum net additions by atomic ingredient | Formula authorization and stock reconciliation |
| protocol-packaging | packaging_release | packaging component | component issue and line return | component identity, composition, unit mass, issued count, returned count, rejects | Count multiplied by verified unit mass | kg | Each production order | Same period as product output | Each package format | Sum each component separately; allocate shared tertiary packaging by shipped mass | Supplier specification, count reconciliation and unit-mass checks |
| protocol-product | preservation; packaging_release | conforming output | filler, check-weigher and release record | product identity, route, gross mass, tare, net mass, packing medium, solids, package, status | Calibrated weighing and quality release | kg | Each batch | Same period as all inputs | Each included product route | Sum only conforming released net content | Calibration and release certificate |
| protocol-water | all applicable processes | incoming water | water meter and tank record | meter id, opening, closing, recirculation, use area | Submeter or reconciled water balance | m3 | Daily or per batch | Representative annual period | Each included site | Sum make-up water by use; do not count recirculation as new input | Meter calibration and site water balance |
| protocol-energy | all applicable processes | electricity, heat or steam | meter and utility record | meter id, opening, closing, export, steam state, condensate return, process time | Calibrated submeter; documented allocation only for shared meter | kWh or MJ | Daily or per batch | Representative annual period | Each included site and line | Sum by energy carrier and route; subtract documented exports | Meter calibration, invoices and allocation check |
| protocol-fuels | onsite_utilities | individual fuel | meter, purchase and tank record | fuel identity, quantity, density, LHV, moisture, opening and closing stock | Metered or stock-reconciled consumption | MJ LHV | Delivery and monthly reconciliation | Representative annual period | Each on-site utility unit | Convert each fuel separately; do not use a combined fuel flow | Invoice, tank reconciliation and supplier LHV |
| protocol-refrigerants | onsite_utilities | individual refrigerant loss | service and inventory record | chemical identity, opening stock, additions, recovery, closing stock, equipment | Refrigerant mass balance | kg | Every service event and annual reconciliation | Representative annual period | Each refrigeration system | Calculate each chemical separately | Service tickets and inventory reconciliation |
| protocol-cleaning | cleaning | individual cleaning agent | dosing and chemical issue record | chemical identity, concentration, issued mass, returned mass, program | Calibrated dosing or stock reconciliation | kg | Each cleaning program | Representative annual period | Each included line | Sum active supplied product by chemical | Dosing calibration and safety-data-sheet identity |
| protocol-treatment-chemicals | wastewater_treatment | individual treatment chemical | dosing and chemical issue record | chemical identity, concentration, issued mass, returned mass, treatment stage | Calibrated dosing or stock reconciliation | kg | Each dosing period | Representative annual period | Each on-site treatment system | Sum net addition by chemical; do not aggregate coagulant and flocculant | Dosing calibration, chemical identity and stock reconciliation |
| protocol-waste | all applicable processes | solid waste or sludge | waste scale and consignment record | waste identity, gross mass, tare, dry matter, destination, recovery status | Calibrated scale or contractor ticket | kg | Each collection | Same period as product output | Each included site | Sum each physically separate waste stream and destination | Ticket reconciliation and dry-matter analysis for sludge |
| protocol-wastewater | all applicable processes | wastewater volume | flow meter and batch discharge | stream identity, volume, destination, recirculation | Submeter or verified water balance | m3 | Continuous total or each discharge | Representative annual period | Each source and treatment system | Preserve source streams before treatment aggregation | Meter calibration and water-balance closure |
| protocol-effluent | wastewater_treatment | pollutant to water | flow and laboratory record | sampling time, flow, concentration, method, detection limit | Flow-weighted sampling and accredited analysis | kg | Permit frequency or representative composite sampling | Same period as treatment operation | Final discharge point | Multiply flow-weighted concentration by discharge volume for each pollutant | Laboratory report, method and detection-limit treatment |
| protocol-emissions | preservation; onsite_utilities; wastewater_treatment | direct emission to air | stack, off-gas or engineering record | species, concentration or factor, gas flow, fuel or activity, control state | Measurement preferred; otherwise equipment-specific calculation from collected activity | kg | Permit frequency and representative operation | Representative annual period | Each direct emission source | Calculate each species separately | Monitoring report or calculation inputs and factor provenance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize-reference | All exchanges | normalized exchange = reporting-period exchange / reporting-period conforming net product content | atomic exchange amount; kg net product | exchange per 1 kg net product | eu-pef-2021-2279 |
| material-balance | Each route | accepted raw material + ingredients + retained packing water = conforming product + measured product losses + residues + water removed, after consistent moisture basis | mass records; solids or moisture analyses | route mass-balance closure | eu-jrc-fdm-bref-2019 |
| steam-energy | Purchased or on-site steam | useful steam energy = steam mass × (supply enthalpy - returned-condensate enthalpy) | steam mass, pressure, temperature, condensate state | MJ useful steam | eu-jrc-fdm-bref-2019 |
| pollutant-load | Wastewater release | pollutant mass = flow-weighted concentration × discharged volume, with explicit unit conversion | concentration; discharge volume | kg pollutant | eu-jrc-fdm-bref-2019 |
| refrigerant-loss | Each refrigerant | loss = opening inventory + additions - recovered mass - closing inventory; investigate negative or implausible balances | refrigerant inventory and service records | kg emitted chemical | eu-pef-2021-2279 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq-identity | Product and all inputs | Preserve exact product, vegetable or pulse, ingredient, package, fuel, refrigerant, waste and emission identity; prohibit selector text and unverified UUID substitution. | Product specification, supplier document, Tiangong direct-read evidence where a UUID is used |
| dq-time | All foreground data | Use one consistent representative reporting period covering seasonal starts, shutdowns and normal campaigns; disclose exclusions and exceptional production. | Production calendar, meter coverage and reconciliation |
| dq-technology | Preservation route | Record actual equipment, scheduled thermal process or cold condition, solids, packing medium and process control; do not substitute a generic route. | Process authority record, batch log, equipment list and product release record |
| dq-geography | Upstream links | Match electricity, heat, water, agricultural inputs, packaging and treatment to the supplying geography; disclose proxies. | Supplier location, contracts and dataset metadata |
| dq-completeness | Inventory | Account for all atomic inputs, outputs, wastes and direct emissions in Section 6 that apply to the route; document a true zero or non-applicability. | Signed route checklist and annual mass, water and energy balances |
| dq-measurement | Foreground amounts | Prefer calibrated meters and scales; document calibration, estimation method, uncertainty and any shared-meter allocation. | Calibration certificates and raw records |
| dq-source | External evidence | Use original official or peer-reviewed sources for method and route rules; do not use search snippets or another PCR as evidence. | Source register in Section 11 |

## 9. Validation Rules

Reject or return the foreground data package for correction when any of the following applies:

1. The product does not satisfy CPC 3.0 21399, or the vegetable or pulse, route, product state, packing medium, package and reference basis are not declared.
2. The reference output is not exactly 1 kg net product content, packaging mass is included in that kilogram, or packing medium inclusion is inconsistent across records.
3. A card contains more than one electricity, steam, heat, fuel, refrigerant, ingredient, packaging component, waste, sludge or direct-emission species; an applicable card is replaced with “other”, “various”, “as applicable”, or selector text.
4. Merely frozen vegetables are included without the preparation or preservation condition required by CPC 21399, or vinegar, acetic acid or sugar is the principal preservative.
5. A generic heat schedule replaces the product-, container- and retort-specific scheduled process, or the frozen route lacks recorded thermal-centre and cold-chain evidence.
6. Purchased electricity, steam and heat are double counted with on-site fuel and utility output, or recirculated water is counted as new water input.
7. Refrigerant loss is aggregated across chemicals, direct combustion emissions are missing while on-site fuel is used, or treated-effluent pollutants are embedded only in a wastewater volume flow.
8. Packaging components, cleaning agents, wastewater source streams, primary sludge, biological sludge, screenings, food residues and package scrap are aggregated in a way that conceals a physically separate record or destination.
9. Allocation is used before subdivision, lacks a measured causal basis, or omits sensitivity analysis when economic allocation is used.
10. A non-empty amount range lacks at least two independent, compatible original sources and traceable source ids. This PCR authors no ranges; absence of a range never authorizes a default amount.
11. Any UUID-bearing identity was not verified by direct read, or a full-category reference flow was replaced by a narrower Tiangong candidate.
12. Annual mass, water and energy reconciliations are absent, source records do not cover the product reporting period, or cut-offs and proxies are undisclosed.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site- and route-specific foreground data package for one qualifying preserved vegetable or pulse |
| downstream_use | Construction of TianGong LCA flow, process and lifecycle-model datasets and comparative or product-footprint studies with matched functions |
| allowed_use | Factory-gate inventory, hotspot analysis, supplier engagement and downstream modelling when product identity, reference basis, boundary and data quality are compatible |
| excluded_use | Direct comparison of products with different edible-content, drained-content, solids, storage or packaging functions; representation of an excluded CPC class; use of this candidate as a published reviewed PCR |
| required_metadata | CPC code; botanical/product identity; preservation route; recipe and packing medium; drained basis; solids where relevant; scheduled process or cold condition; package composition and level; geography; technology; reporting period; allocation; cut-offs; upstream datasets; treatment destinations |
| required_quality_disclosure | Meter coverage, calibration, mass/water/energy balance closure, estimation and allocation shares, seasonal representativeness, proxy datasets, unresolved UUIDs, missing applicable records and uncertainty |
| update_trigger | Product reformulation, preservation-route or package change, new scheduled process, refrigeration or fuel change, site or supplier change, material meter change, reporting-period refresh, classification revision, verified flow identity or compatible range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-v3-21399-2025 | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, CPC 21399, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact product-category scope, examples and exclusions |
| codex-cxs-297-2009 | standard | Codex Alimentarius CXS 297-2009, *Standard for Certain Canned Vegetables*, amended through 2023, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ua/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B297-2009%252FCXS_297e.pdf | Thermal canned route, preparation, packing medium, hermetic package and product release |
| codex-cxc-23-1979 | standard | Codex Alimentarius CXC 23-1979, *Code of Hygienic Practice for Low and Acidified Low-Acid Canned Foods*, revised 1993, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B23-1979%252FCXC_023e.pdf | Product-specific scheduled process, filling, closure, cooling, cleaning and production records |
| codex-cxs-13-1981 | standard | Codex Alimentarius CXS 13-1981, *Standard for Preserved Tomatoes*, amended through 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B13-1981%252FCXS_013e.pdf | Preserved whole and cut tomato identity and packing media |
| codex-cxs-57-1981 | standard | Codex Alimentarius CXS 57-1981, *Standard for Processed Tomato Concentrates*, amended through 2013, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B57-1981%252FCXS_057e.pdf | Tomato screening, concentration, solids declaration and separated residues |
| codex-cxs-66-1981 | standard | Codex Alimentarius CXS 66-1981, *Standard for Table Olives*, revised 2013 and amended 2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B66-1981%252FCXS_066e.pdf | Table-olive alkali, brining, fermentation, oxidation and sterilization routes |
| codex-cxs-223-2001 | standard | Codex Alimentarius CXS 223-2001, *Standard for Kimchi*, amended 2017, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B223-2001%252FCXS_223e.pdf | Chinese-cabbage preparation, salting, seasoning and low-temperature lactic fermentation route |
| codex-cxs-320-2015 | standard | Codex Alimentarius CXS 320-2015, *Standard for Quick Frozen Vegetables*, amended through 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B320-2015%252FCXS_320e.pdf | Further-processed frozen route, blanching, quick freezing and cold-chain condition |
| eu-jrc-fdm-bref-2019 | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries*, JRC118627, 2019, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | Process decomposition, energy and water use, wastewater, waste, emissions and monitoring |
| eu-pef-2021-2279 | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/2021-12-30 | Boundary, company-specific data, allocation hierarchy, quality and emission accounting |
| iso-14044-2006 | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, reviewed and confirmed 2022, https://www.iso.org/standard/38498.html | LCI boundary, allocation and data-quality principles |
| frankowska-vegetables-2019 | literature | Frankowska, A.; Jeswani, H. K.; Azapagic, A., *Environmental impacts of vegetables consumption in the UK*, Science of the Total Environment 682 (2019) 80–105, DOI 10.1016/j.scitotenv.2019.04.424, https://doi.org/10.1016/j.scitotenv.2019.04.424 | Independent support for separately collecting vegetable-processing energy and glass, metal and other packaging inputs; no amount range derived |
