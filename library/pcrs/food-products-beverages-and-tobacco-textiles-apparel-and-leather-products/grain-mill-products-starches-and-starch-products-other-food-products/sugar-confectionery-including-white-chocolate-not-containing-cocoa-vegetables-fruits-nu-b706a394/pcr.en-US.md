---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.sugar-confectionery-including-white-chocolate-not-containing-cocoa-vegetables-fruits-nu-b706a394
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sugar confectionery (including white chocolate), not containing cocoa; vegetables, fruits, nuts, fruit-peel and other parts of plants, preserved by sugar

## 1. Scope and Applicability

This PCR supports foreground data packages for plant-gate manufacture of sugar confectionery that does not contain cocoa solids, white chocolate, and edible vegetables, fruits, nuts, fruit peel, or other plant parts preserved by sugar. It covers batch and continuous manufacture from received ingredients and primary packaging through saleable packaged product at the manufacturing gate.

The product family includes hard- and soft-boiled sweets, fondants, creams, caramels, toffees, gums, jellies, pastilles, marshmallows, nougats, marzipans, chewing gum, white chocolate, and drained, glacé, candied, or crystallized plant products when they meet the declared category boundary. A foreground data package shall select and describe the actual route; it shall not average materially different routes without a documented production-weighted aggregation.

This PCR excludes cocoa-containing chocolate and cocoa preparations, flour confectionery and bakery products, table jellies and drink preparations, ice confectionery, pharmaceutical products, refined sugar sold as such, and fruit products preserved primarily by pasteurization, freezing, drying, salt, or acid rather than by sugar. Agricultural production, manufacture of purchased sugar, syrups, cocoa butter, dairy ingredients, gelatin, starch, fruit or other ingredients, distribution after the manufacturing gate, retail, consumption, and end of life are outside the foreground boundary and require linked upstream or downstream datasets when included in a life-cycle model.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.sugar-confectionery-including-white-chocolate-not-containing-cocoa-vegetables-fruits-nu-b706a394 |
| classification_refs | CPC 3.0: 23670 (exact classification context; no accepted mapping is asserted by this PCR) |
| covered_products | Sugar-primary hard and soft candy, nougats, marzipans, gums, jellies, pastilles, marshmallows, fondants, creams, caramels, toffees and chewing gum without cocoa solids; white chocolate; plant parts preserved by sugar as drained, glacé, candied, or crystallized products. |
| excluded_products | Cocoa-containing chocolate; cocoa preparations; flour confectionery and bakery products; table jellies, drink preparations, ice confectionery and pharmaceuticals; refined sugar sold as such; plant products preserved mainly by heat processing, freezing, drying, salt, or acid rather than sugar. |
| representative_product | A declared production-weighted plant-gate mix of saleable packaged products from one identified route and formulation family; route-specific results shall be retained when route burdens differ materially. |
| production_route | Received-ingredient preparation followed by one or a documented combination of: sugar-syrup mixing/cooking/cooling/forming; sugar impregnation and drying of plant material; or white-chocolate mixing/refining/conching/tempering/forming; then finishing, packaging, cleaning and site services. |
| market_state | Finished food product at the manufacturing gate, in the declared primary-packaging state and ready for storage, distribution, or further use. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a saleable sugar-confectionery, white-chocolate, or sugar-preserved plant product at the manufacturing gate. |
| How much | 1 kg net mass of saleable product, excluding primary, secondary, and tertiary packaging. |
| How well | Conforms to the declared route, formulation/product subclass, product state, applicable food specification, and quality release criteria. |
| How long or cycle | One completed production and release cycle at the manufacturing gate; no use-stage duration is represented. |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the Tiangong reference product flow below. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sugar confectionery (including white chocolate), not containing cocoa, vegetables, fruits, nuts, fruit-peel and other parts of plants, preserved by sugar `db6192c0-b83b-4376-95e2-df5c7ad09297` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product route and formulation family; product subclass and physical form; absence of cocoa solids or declared white-chocolate identity; sugar-preservation state for plant products; net moisture or soluble-solids control where relevant; included primary packaging state; manufacturing geography; technology; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | saleable reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net saleable product; exclude every packaging layer from the reference amount and record packaging as separate inputs. |
| `saleable_output_mass` | batch and campaign output | Mass | kg | Use released net product mass after off-spec removal and before including packaging mass; reconcile batch, rework, reject and inventory-change records. |
| `route_process_control` | cooked sugar confectionery and sugar-preserved plant routes | Temperature, moisture content, or soluble solids as applicable | °C, mass %, or °Brix | Preserve the measured route control variable and method. FAO route values are process guidance, not default inventory amounts: boiling temperature depends on confectionery type, while candied fruit uses staged syrup-strength increase and drying; declare the actual recipe target and measurement basis. |
| `white_chocolate_identity` | products declared as white chocolate | Mass fraction on dry-matter basis | mass % | Declare the applicable market specification. When CXS 87 is used, verify at least 20% cocoa butter and at least 14% milk solids on a dry-matter basis; do not infer that “not containing cocoa” excludes cocoa butter. |
| `water_volume_to_mass` | metered water or effluent | Volume and density | m3 and kg | Retain measured volume; convert to mass only with a declared measured or justified density and preserve the original meter record. |
| `energy_conversion` | electricity, fuel, steam, heat, cooling and compressed air | Energy | kWh or MJ | Preserve carrier-specific records. Convert only with documented factors and do not combine electricity and thermal energy into one undifferentiated amount. |
| `packaging_mass` | primary and other packaging | Mass | kg | Record each packaging material separately and never include packaging mass in the 1 kg product reference flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients, processing aids, cleaning materials, utilities and packaging are received at the manufacturing gate in their declared market states. |
| starting_condition_role | Foreground gate-to-gate starting condition for product manufacture; upstream burdens are supplied by linked datasets. |
| product_classification_scope | The semantic product boundary in section 2, with CPC 3.0 code 23670 retained only as classification context. |
| recursive_input_rule | A purchased semi-finished product already within this category is recorded once as a same-category product input and linked to a suitable upstream dataset; this PCR is not recursively reapplied inside that upstream dataset. |
| upstream_dataset_requirement | Link purchased ingredients, fuels, electricity, water, packaging and outsourced treatments to geographically, technologically and temporally representative upstream datasets. |
| disclosure | Declare manufacturing route, formulation family, received ingredient states, included packaging, site and reporting period, allocation, rework, cut-offs or omissions, outsourcing, utility attribution and data gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate_to_gate` | all foreground packages | Include receipt and storage, ingredient preparation, every applicable manufacturing route step, forming/finishing, packaging, cleaning, directly controlled utilities, on-site waste and effluent handling, and direct releases up to the manufacturing gate. | `fao-sugar-confectionery-1992`; `uk-ea-pontefract-confectionery-2016` |
| `sb_route_selection` | route-specific manufacturing | Include at least one declared manufacturing route and retain separate route records whenever production technologies or formulations would be obscured by aggregation. | `fao-sugar-confectionery-1992`; `fao-candied-fruit-2004`; `codex-cxs-87-1981` |
| `sb_upstream_linking` | purchased inputs and outsourced operations | Keep purchased inputs visible and link them to representative upstream datasets; do not absorb their upstream production into untraceable site totals. | `eu-pef-2021-2279` |
| `sb_no_double_counting` | rework and same-category intermediate products | Track internal rework and intermediate transfers without creating a second product input; apply the recursive input rule only to purchased or externally supplied same-category material. | `eu-pef-2021-2279` |
| `sb_no_implicit_cutoff` | required foreground inventory | Do not cut off mandatory material, energy, water, waste, effluent or direct-emission rows in the first foreground package. Any permitted omission under a downstream scheme shall be quantified, justified and disclosed outside the foreground package. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_receipt` | Ingredient receipt, storage and preparation | required | Always included. | Foreground receipt, storage, weighing, conditioning and release of ingredients to production. | kg ingredients released to route processes |
| `sugar_confectionery_manufacture` | Sugar-confectionery mixing, cooking and forming | conditional | Include for hard/soft candy, gums, jellies, fondants, creams, caramels, toffees, nougats, marzipans, marshmallows, chewing gum or comparable non-cocoa sugar confectionery. | Foreground formulation, heating, cooling, beating, extrusion, moulding, curing and finishing. | kg unpackaged conforming route output |
| `sugar_preserved_plant_manufacture` | Sugar preservation of plant products | conditional | Include for drained, glacé, candied or crystallized vegetables, fruits, nuts, peel or other plant parts. | Foreground preparation, syrup impregnation, equilibration, draining, drying and finishing. | kg unpackaged conforming route output |
| `white_chocolate_manufacture` | White-chocolate manufacture | conditional | Include for products declared as white chocolate or cocoa-butter confectionery within this category. | Foreground mixing, refining/conching when used, tempering, forming and cooling. | kg unpackaged conforming route output |
| `packaging_and_site_services` | Packaging, cleaning and directly controlled site services | required | Always included; allocate shared services to the declared product family. | Foreground primary packaging, product release, cleaning, utility attribution, refrigerant accounting, waste and effluent handling. | 1 kg net saleable reference product |

### Process: Ingredient receipt, storage and preparation (`ingredient_receipt`)

#### Inputs

##### Product flows

###### Purchased ingredients received (`ingredients_received`)

Record each purchased sugar, syrup, plant material, cocoa butter, milk ingredient, fat, starch, gelatin, gum, acid, flavour, colour, salt, processing aid or other formulation ingredient separately in its received market state.

- Selected flow: Route- and ingredient-specific product flow; do not use the reference product flow for upstream ingredients
- Flow property / unit: Mass / kg
- Amount rule: Mass accepted into the reporting-period ingredient ledger, adjusted for opening and closing inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `fao-sugar-confectionery-1992`; `fao-candied-fruit-2004`; `codex-cxs-87-1981`
- Range: Provisional total-ingredient screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2.5
  - Unit: kg/kg net saleable product
  - Basis: broad route-inclusive screening range before reviewed category data are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Ingredients released to manufacturing (`ingredients_released`)

Track materials released from storage to the applicable foreground route as an internal transfer; do not link an additional upstream dataset at this row.

- Selected flow: Internal route-specific ingredient transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured issue quantity from batch sheets, scales, tanks or inventory-control records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `uk-ea-pontefract-confectionery-2016`

##### Waste flows

###### Rejected or lost ingredients (`ingredient_rejects`)

Record expired, damaged, spilled, contaminated or otherwise rejected ingredients by material and destination; subtract any verified return to supplier or internal recovery from waste.

- Selected flow: Material-specific food or ingredient waste flow
- Flow property / unit: Mass / kg
- Amount rule: Measured reject and loss mass by reason and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional ingredient-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg net saleable product
  - Basis: broad first-pass reject fraction before reviewed category data are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Sugar-confectionery mixing, cooking and forming (`sugar_confectionery_manufacture`)

#### Inputs

##### Product flows

###### Released confectionery ingredients (`sugar_route_ingredients`)

Record the internal ingredient transfer used for the declared recipe, including sugar and syrups plus route-specific fats, dairy materials, gelatin, starch, gums, acids, flavours, colours and other additions.

- Selected flow: Internal ingredient transfer from `ingredient_receipt`
- Flow property / unit: Mass / kg
- Amount rule: Sum of recipe issues to included sugar-confectionery batches, less measured returns to storage.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unpackaged conforming sugar-confectionery output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sugar_route_records`
- Sources: `fao-sugar-confectionery-1992`; `uk-ea-pontefract-confectionery-2016`
- Range: Provisional recipe-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.8
  - Unit: kg/kg unpackaged conforming output
  - Basis: broad first-pass recipe and yield range before reviewed category data are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water used in product or processing (`sugar_route_water`)

Record water added to recipes and water crossing the process boundary for contact cooling or other route operations; keep non-contact cooling water separate when metered.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-record water volume attributable to included sugar-confectionery batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg unpackaged conforming sugar-confectionery output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sugar_route_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional process-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: m3/1,000 kg unpackaged conforming output
  - Basis: broad first-pass water range before reviewed category data are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity and thermal energy (`sugar_route_energy`)

Record electricity and each thermal-energy carrier separately for mixing, boiling, vacuum cooking, cooling, beating, extrusion, moulding, curing and finishing.

- Selected flow: Carrier-specific electricity, fuel, steam, heat or cooling service
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Submetered use or calculated attribution from operating time, rated load and verified load factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg unpackaged conforming sugar-confectionery output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sugar_route_records`
- Sources: `fao-sugar-confectionery-1992`; `eu-fdm-bat-2019-2031`
- Range: Provisional route-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh-equivalent/kg unpackaged conforming output
  - Basis: broad screening envelope retained separately by energy carrier in the dataset
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Unpackaged conforming sugar confectionery (`sugar_route_output`)

Record released route output after cooking, cooling, forming, curing and finishing and before primary packaging.

- Selected flow: Internal unpackaged sugar-confectionery intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming output mass transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch or campaign before normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sugar_route_records`
- Sources: `fao-sugar-confectionery-1992`; `uk-ea-pontefract-confectionery-2016`

##### Waste flows

###### Off-spec confectionery and route residues (`sugar_route_waste`)

Record product not suitable for sale, unrecovered moulding starch, coatings, residues and other route wastes by treatment destination; keep internal rework separate from waste.

- Selected flow: Route-specific food-process waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass after subtracting verified internal rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged conforming output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sugar_route_records`
- Sources: `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- Range: Provisional route-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg unpackaged conforming output
  - Basis: broad first-pass route-waste range before reviewed category data are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Sugar preservation of plant products (`sugar_preserved_plant_manufacture`)

#### Inputs

##### Product flows

###### Prepared plant material and sugar (`fruit_route_materials`)

Record accepted vegetables, fruits, nuts, peel or other plant parts, sugar and syrup ingredients used in the declared drained, glacé, candied or crystallized route.

- Selected flow: Plant-material-specific and sugar/syrup product flows
- Flow property / unit: Mass / kg
- Amount rule: Recipe and issue mass to included sugar-preservation batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unpackaged conforming sugar-preserved output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruit_route_records`
- Sources: `codex-gsfa-candied-fruit-2025`; `fao-candied-fruit-2004`
- Range: Provisional plant-and-sugar input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 3.0
  - Unit: kg/kg unpackaged conforming output
  - Basis: broad route-inclusive range accounting for water removal and syrup management
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water and energy for preparation, syruping and drying (`fruit_route_utilities`)

Record water and each energy carrier separately for washing, blanching when used, syrup preparation, staged impregnation, equilibration, draining and drying.

- Selected flow: Process water and carrier-specific energy flows
- Flow property / unit: Volume and energy / m3, kWh or MJ
- Amount rule: Metered use or documented equipment-based attribution to included batches.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg unpackaged conforming sugar-preserved output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fruit_route_records`
- Sources: `fao-candied-fruit-2004`; `eu-fdm-bat-2019-2031`
- Range: Provisional combined utility screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 20
  - Unit: separately reported m3 water or MWh energy per 1,000 kg output
  - Basis: broad first-pass envelope; water and energy remain separate inventory flows
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Unpackaged conforming sugar-preserved plant product (`fruit_route_output`)

Record drained, glacé, candied or crystallized product after the declared sugar-preservation and drying/equilibration endpoint and before packaging.

- Selected flow: Internal unpackaged sugar-preserved plant intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming output mass transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch or campaign before normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruit_route_records`
- Sources: `codex-gsfa-candied-fruit-2025`; `fao-candied-fruit-2004`

##### Waste flows

###### Plant rejects, spent syrup and route wastewater (`fruit_route_wastewater`)

Record solid plant rejects, syrup that is not reused as product input, and wastewater separately by mass or volume and destination.

- Selected flow: Material-specific organic waste, spent syrup and wastewater flows
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measured disposal, treatment or discharge quantity after subtracting verified reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg unpackaged conforming output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruit_route_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional waste-and-effluent screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: separately reported t solid waste or m3 wastewater per t output
  - Basis: broad first-pass envelope; solid waste and wastewater remain separate inventory flows
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: White-chocolate manufacture (`white_chocolate_manufacture`)

#### Inputs

##### Product flows

###### White-chocolate formulation ingredients (`white_route_materials`)

Record sugar, cocoa butter, milk solids and every other formulation ingredient separately; exclude cocoa mass, cocoa powder and other fat-free cocoa solids from the declared product boundary.

- Selected flow: Ingredient-specific product flows
- Flow property / unit: Mass / kg
- Amount rule: Recipe and issue mass to included white-chocolate batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unpackaged conforming white-chocolate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_white_route_records`
- Sources: `codex-cxs-87-1981`
- Range: Provisional formulation-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.9
  - Upper: 1.3
  - Unit: kg/kg unpackaged conforming output
  - Basis: broad first-pass recipe and loss range before reviewed category data are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity and thermal energy for white-chocolate processing (`white_route_energy`)

Record electricity, heat and cooling separately for mixing, refining/conching when used, tempering, forming and cooling.

- Selected flow: Carrier-specific electricity, heat and cooling service
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Submetered use or documented equipment-based attribution to included batches.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg unpackaged conforming white-chocolate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_white_route_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional white-route energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 3
  - Unit: kWh-equivalent/kg unpackaged conforming output
  - Basis: broad screening envelope retained separately by energy carrier in the dataset
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Unpackaged conforming white chocolate (`white_route_output`)

Record released white-chocolate output after tempering, forming and cooling and before primary packaging.

- Selected flow: Internal unpackaged white-chocolate intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming output mass transferred to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch or campaign before normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_white_route_records`
- Sources: `codex-cxs-87-1981`

##### Waste flows

###### Off-spec white chocolate and residues (`white_route_waste`)

Record off-spec product, filter residues and unrecovered line residues by destination; keep documented internal rework separate from waste.

- Selected flow: White-chocolate process waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass after subtracting verified internal rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unpackaged conforming output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_white_route_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional white-route waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg unpackaged conforming output
  - Basis: broad first-pass route-waste range before reviewed category data are available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging, cleaning and directly controlled site services (`packaging_and_site_services`)

#### Inputs

##### Product flows

###### Unpackaged conforming product received from route processes (`bulk_product_to_packaging`)

Record internal unpackaged product transferred from the selected route or production-weighted route combination.

- Selected flow: Internal route output
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled to route outputs, packaging rejects and saleable output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_site_records`
- Sources: `uk-ea-pontefract-confectionery-2016`

###### Primary packaging materials (`primary_packaging`)

Record each film, wrapper, foil, tray, jar, lid, label, carton or other primary-packaging material separately, including measured line losses.

- Selected flow: Material-specific packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued packaging adjusted for inventory change, returns and separately measured waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_site_records`
- Sources: `fao-sugar-confectionery-1992`; `eu-pef-2021-2279`
- Range: Provisional primary-packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.30
  - Unit: kg/kg net saleable product
  - Basis: broad package-format envelope before reviewed category data are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning water, chemicals and shared utilities (`site_service_inputs`)

Record cleaning water and chemicals and each shared utility carrier allocated to included production; retain electricity, fuel, steam, heat, cooling and compressed air as separate flows.

- Selected flow: Material- and carrier-specific site-service inputs
- Flow property / unit: Mass, volume or energy / kg, m3, kWh or MJ
- Amount rule: Metered totals attributed by submeter, operating time, mass throughput or another documented causal driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_site_records`
- Sources: `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- Range: Provisional site-service screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 20
  - Unit: separately reported m3, kg, or MWh per 1,000 kg net saleable product
  - Basis: broad first-pass envelope; carriers remain separate inventory flows
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Saleable packaged reference product (`reference_product_output`)

Record net released food-product mass separately from packaging mass and normalize the completed foreground package to this output.

- Selected flow: Sugar confectionery (including white chocolate), not containing cocoa, vegetables, fruits, nuts, fruit-peel and other parts of plants, preserved by sugar `db6192c0-b83b-4376-95e2-df5c7ad09297`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net saleable product after normalization.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging waste and off-spec packed product (`packaging_waste`)

Record packaging trim, damaged packaging and packed-product rejects separately by material and treatment destination; separate recovered saleable product from disposal.

- Selected flow: Material-specific packaging or packed-food waste flow
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass after subtracting verified reuse or product recovery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_site_records`
- Sources: `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- Range: Provisional packaging-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg net saleable product
  - Basis: broad first-pass packaging-waste range before reviewed category data are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and cleaning wastewater (`site_wastewater`)

Record wastewater sent to sewer, on-site treatment, off-site treatment or reuse, with non-contact cooling water kept separate where possible.

- Selected flow: Destination-specific wastewater flow
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or collection volume attributed to included production, with destination and treatment route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_site_records`
- Sources: `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- Range: Provisional wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/1,000 kg net saleable product
  - Basis: broad first-pass wastewater range before reviewed category data are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct fuel-combustion emissions (`direct_combustion_emissions`)

Calculate direct fossil carbon dioxide and other relevant boiler or heater emissions from measured fuel use and documented factors; do not duplicate upstream fuel-production emissions.

- Selected flow: Pollutant-specific elementary flows to air
- Flow property / unit: Mass / kg
- Amount rule: Measured fuel use multiplied by documented pollutant-specific emission factors, with biogenic and fossil carbon kept separate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_site_records`
- Sources: `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- Range: Provisional direct-carbon-dioxide screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg fossil CO2/kg net saleable product
  - Basis: broad first-pass direct-combustion envelope before route-specific factors are reviewed
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant leakage to air (`refrigerant_leakage`)

Record each refrigerant substance separately using stock reconciliation and maintenance records for cooling, chilling, air conditioning and freezing equipment serving included production.

- Selected flow: Refrigerant-specific elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus additions minus closing stock, recovery and documented transfers, allocated to included production.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_site_records`
- Sources: `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- Range: Provisional refrigerant-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg refrigerant/kg net saleable product
  - Basis: deliberately broad first-pass leak envelope before reviewed plant data are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | independently measurable products, routes and batches | Avoid allocation by subdividing lines, batches, route processes and directly metered utilities wherever records permit. | `eu-pef-2021-2279` |
| `alloc_physical_relationship` | inseparable multi-output operations | If subdivision or justified system expansion is not possible, allocate by a documented causal physical relationship such as recipe mass, measured processing time, energy demand or another parameter that represents the shared operation. | `eu-pef-2021-2279` |
| `alloc_other_relationship` | operations lacking a defensible physical relationship | Use another relationship, including relative economic value at the point of co-production, only after documenting why subdivision, expansion and physical allocation are not representative; disclose prices, period and sensitivity. | `eu-pef-2021-2279` |
| `alloc_internal_rework` | rework, returned syrup, recovered starch and internal residues | Treat verified internal recovery as an internal transfer: subtract it from waste and do not create a co-product credit or duplicate upstream burden. | `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031` |
| `alloc_waste_and_coproduct_status` | residues leaving the foreground system | Classify a stream as waste, recyclable residue or co-product according to its actual destination and economic/function status; document any burden or credit applied by the downstream modelling scheme. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `alloc_shared_site_services` | cleaning, boiler, cooling, compressed air and common utilities | Prefer submetering; otherwise use a documented causal driver and exclude unrelated product families, non-production buildings and periods outside the reporting scope. | `eu-fdm-bat-2019-2031` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_records` | `ingredient_receipt` | purchased ingredients, internal releases and rejects | purchase, inventory, scale, tank and batch issue records | material_id; supplier; received_state; opening_stock; receipts; closing_stock; returns; issued_mass; reject_mass; destination | Reconcile calibrated scales, tank levels and inventory records by material and lot. | kg | each receipt and batch; monthly reconciliation | full declared reporting period | all receiving and storage areas serving included products | opening + receipts - closing - returns = issues + rejects + unexplained difference; normalize through saleable output | calibration records; lot traceability; inventory reconciliation; reject tickets |
| `cp_sugar_route_records` | `sugar_confectionery_manufacture` | recipe inputs, water, energy, output, rework and waste | batch sheet, meter, equipment log and quality release record | batch_id; recipe_id; ingredient_mass; water_volume; energy_by_carrier; temperature; time; output_mass; rework_mass; waste_mass; destination | Collect per batch or homogeneous campaign and reconcile against route output. | kg; m3; kWh; MJ; °C; h | each batch or campaign | representative full reporting period including product mix | all included sugar-confectionery lines | aggregate separately by route and product family, then production-weight by released net mass | meter/calibration status; signed batch sheets; release tests; waste tickets |
| `cp_fruit_route_records` | `sugar_preserved_plant_manufacture` | plant inputs, syrup, water, energy, soluble solids/moisture, output and wastes | batch, refractometer, moisture, meter and waste records | batch_id; plant_mass; sugar_mass; syrup_mass; water_volume; energy_by_carrier; Brix; moisture; soak_time; output_mass; spent_syrup; solid_waste; wastewater | Collect each impregnation/drying batch and preserve staged syrup and endpoint records. | kg; m3; kWh; MJ; °Brix; mass %; h | each batch | full declared production season or reporting period | all included sugar-preservation lines | reconcile plant, sugar, syrup, water removal, retained product, reuse and waste; normalize by conforming output | instrument calibration; batch traceability; endpoint test; waste and effluent records |
| `cp_white_route_records` | `white_chocolate_manufacture` | formulation, energy, output, rework and waste | recipe, batch, meter, composition and release records | batch_id; ingredient_mass; cocoa_butter_fraction; milk_solids_fraction; energy_by_carrier; process_time; output_mass; rework_mass; waste_mass | Collect each batch or homogeneous campaign and verify the declared white-chocolate specification. | kg; kWh; MJ; mass %; h | each batch or campaign | full declared reporting period | all included white-chocolate lines | aggregate by formulation family, reconcile mass and normalize by conforming output | recipe authorization; composition evidence; meter status; release record |
| `cp_packaging_site_records` | `packaging_and_site_services` | packaging, saleable output, cleaning, shared utilities, wastewater, emissions and refrigerants | packaging issue, production release, utility meter, cleaning, waste, effluent, fuel and refrigerant records | product_mass; packaging_material_mass; packaging_waste; water_volume; chemical_mass; energy_by_carrier; fuel_use; wastewater_volume; treatment_destination; refrigerant_stock; additions; recovery; emission_factor | Combine line records with calibrated site/submeters and documented allocation drivers; retain carrier and destination detail. | kg; m3; kWh; MJ | batch or shift for output and packaging; meter interval for utilities; each service event | full declared reporting period | all directly controlled site services attributable to included products | reconcile net output and packaging; allocate shared services causally; calculate direct emissions and normalize to 1 kg net saleable output | meter/calibration certificates; invoices; release records; cleaning logs; waste manifests; refrigerant service logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = reporting-period amount attributable to included products / reporting-period net saleable included product mass | attributable row amount; net saleable output mass | amount per 1 kg reference product | `eu-fdm-bat-2019-2031` |
| `calc_route_mass_balance` | each manufacturing route | input mass + opening work-in-process = conforming output + waste + material releases to water/air + closing work-in-process + documented difference; explain material imbalance | ingredient, water-in-product, output, rework, waste, inventory and release records | route mass-balance statement and unexplained difference | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_energy_by_carrier` | route and site energy | preserve measured carrier units; where attribution is required, attributable energy = metered total × documented causal share; record conversion factor and source | meter totals; carrier; operating driver; conversion factor | carrier-specific kWh or MJ per reference flow | `eu-fdm-bat-2019-2031` |
| `calc_water_effluent_balance` | process water and wastewater | reconcile incoming metered water with water retained in product, evaporation, separately discharged non-contact water, wastewater and documented difference | water meters; product moisture; evaporation estimate; wastewater meters | water-use and wastewater amount per reference flow | `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_loss` | cooling and refrigeration | loss = opening stock + additions - closing stock - recovered quantity - documented transfers; report negative or unexplained balances as findings | refrigerant stock and service records | kg loss by refrigerant substance per reference flow | `eu-fdm-bat-2019-2031` |
| `calc_allocation_share` | shared multi-product processes | calculate the declared allocation share from directly attributable records or the selected physical/economic driver; shares across outputs shall sum to 1 within rounding tolerance | process totals; product-specific records; allocation driver | attributable inventory by product family | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and route | Use the specified product-flow UUID, Mass property and kg unit; declare route, formulation/product subclass, packaging state and manufacturing geography. | Tiangong identity readback; product master; approved recipe; release specification |
| `dq_completeness` | foreground process map | Cover both required processes and every applicable conditional route; record raw materials, water, energy, residues, wastewater, direct air releases and monitoring level appropriate to the process. | `eu-fdm-bat-2019-2031`; process flow sheet; inventory reconciliation |
| `dq_representativeness` | primary and secondary data | Disclose technological, geographical and time representativeness, precision and completeness; justify proxies and route aggregation. | `eu-pef-2021-2279`; dataset metadata; proxy register |
| `dq_temporal_coverage` | foreground records | Cover the declared reporting period and representative product/season mix; disclose shutdowns, trials, abnormal events and missing intervals. | dated meter, batch, inventory and production records |
| `dq_measurement` | meters, scales and analytical controls | Retain calibration/verification status, measurement method, unit and conversion factors for mass, water, energy, temperature, soluble solids and moisture measurements used. | calibration certificates; instrument logs; laboratory or in-line test records |
| `dq_mass_and_water_balance` | route and site reconciliations | Quantify and explain imbalances rather than forcing closure; identify inventory change, evaporation, wastewater and unrecovered losses. | mass-balance and water-balance calculations; reviewer sign-off |
| `dq_effluent_and_emissions` | relevant wastewater and waste-gas streams | Record flow and relevant characteristics at an appropriate frequency and location; preserve treatment destination and the basis for any calculated pollutant flow. | `eu-fdm-bat-2019-2031`; meter, sampling, laboratory and treatment records |
| `dq_provisional_ranges` | all reasoned-estimate ranges | Treat every `reasoned_estimate` range as a replaceable screening guardrail, never as a measured value or publication-critical allowed range. | manifest review metadata; foreground records; future reviewed category evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Confirm the exact Tiangong product UUID, Mass property UUID, mass unit-group UUID, kg unit and exactly 1 kg net product excluding packaging. |  |
| `val_category_and_route` | product identity | Confirm the product is within the covered semantic boundary, all required qualifiers are declared, and at least one applicable route is included; reject undeclared mixing of materially different routes. | `codex-gsfa-confectionery-2025`; `codex-gsfa-candied-fruit-2025`; `codex-cxs-87-1981` |
| `val_process_coverage` | foreground inventory | Confirm both required processes and every applicable conditional process have detailed inventory records, collection protocols and calculation links. | `eu-fdm-bat-2019-2031` |
| `val_mass_water_energy` | quantitative inventory | Recalculate route mass balances, water/effluent reconciliation and carrier-specific energy normalization; flag unexplained imbalance, mixed carriers or missing conversion evidence. | `eu-fdm-bat-2019-2031` |
| `val_rework_waste_and_emissions` | output classification | Confirm internal rework is not counted as waste or a new input, waste destinations are declared, and direct combustion and refrigerant releases are not duplicated with upstream datasets. | `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031` |
| `val_allocation` | multi-product and shared services | Confirm the allocation hierarchy was followed, shares sum to 1 within declared rounding, causal drivers and exclusions are documented, and any economic allocation includes price period and sensitivity. | `eu-pef-2021-2279` |
| `val_cutoff_and_sources` | completeness and evidence | Reject implicit cut-offs in required foreground rows; disclose downstream-scheme omissions and verify every external source id resolves to section 11 while reasoned estimates carry no invented source. | `eu-pef-2021-2279` |
| `val_data_quality` | dataset readiness | Confirm reporting-period coverage, calibration and traceability evidence, route/geography/technology representativeness, proxy disclosure, and explicit treatment of provisional ranges and unresolved data gaps. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground plant-gate production dataset for a declared sugar-confectionery, sugar-preserved plant, white-chocolate route, or documented production-weighted route mix. |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication controls required by the consuming system. |
| allowed_use | Construction of process or lifecyclemodel inventories for products matching the declared semantic scope, route, geography, technology, reporting period and packaging state; hotspot and improvement analysis with disclosed limitations. |
| excluded_use | Unqualified substitution for cocoa-containing chocolate, bakery or flour confectionery, raw sugar, non-sugar-preserved fruit products, agricultural production, distribution, retail, use or end-of-life; comparative public claims without applicable verification. |
| required_metadata | PCR id and version used by the consuming package; reference UUID and unit; product subclass; formulation/route; product state; packaging boundary; site geography; technology; reporting period; route mix; allocation; rework; cut-offs/omissions; linked datasets; source ids; proxy and uncertainty disclosures. |
| required_quality_disclosure | Primary-data coverage and gaps; meter and calibration status; mass/water/energy reconciliation; representativeness; allocation drivers; waste/effluent destinations; emission calculations; all provisional reasoned estimates; review and verification status. |
| update_trigger | Material change in formulation, route, equipment, energy supply, cooling/refrigerant system, packaging, waste or effluent treatment, allocation, production mix or geography; expiry of representativeness; new reviewed category evidence; correction of UUID or classification scope. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-gsfa-confectionery-2025` | official_guidance | FAO/WHO Codex Alimentarius, GSFA Online Food Category 05.2, updated through the 48th Session (2025), https://www.fao.org/gsfaonline/foods/details.html?id=93&print=true (retrieved 2026-08-11) | Sugar-confectionery product-family boundary and examples. |
| `codex-gsfa-candied-fruit-2025` | official_guidance | FAO/WHO Codex Alimentarius, GSFA Online Food Category 04.1.2.7 Candied fruit, updated through the 48th Session (2025), https://www.fao.org/gsfaonline/foods/details.html?id=66&print=true (retrieved 2026-08-11) | Glacé, candied and crystallized fruit identity and sugar-preservation route distinction. |
| `codex-cxs-87-1981` | standard | FAO/WHO Codex Alimentarius, CXS 87-1981, Standard for Chocolate and Chocolate Products, Rev. 1-2003, https://www.fao.org/input/download/standards/67/CXS_087e.pdf (retrieved 2026-08-11) | White-chocolate identity, composition qualifiers and exclusion of fat-free cocoa solids. |
| `fao-sugar-confectionery-1992` | handbook | Intermediate Technology Publications, Small-scale Food Processing: A Guide for Appropriate Equipment, chapter 6 Sugar Confectionery, 1992, https://www.fao.org/4/x5434e/x5434e0a.htm (retrieved 2026-08-11) | Generic recipe preparation, mixing, boiling, cooling, forming, packaging and route process-control guidance. |
| `fao-candied-fruit-2004` | extension_guidance | International Centre for Underutilised Crops, Fruits for the Future 1: Revised Edition, Technical Note 16 Processing of Candies and Preserves, 2004, https://www.fao.org/fileadmin/templates/inpho/documents/AE618e.pdf (retrieved 2026-08-11) | Staged sugar impregnation, soluble-solids measurement, draining, drying, preservation mechanism and route data fields. |
| `uk-ea-pontefract-confectionery-2016` | official_guidance | UK Environment Agency, Decision Document EPR/LP3232EG/A001, Pontefract Confectionery Production, issued 2016-12-07, https://assets.publishing.service.gov.uk/media/5a7f8fb3ed915d74e33f7310/Decision_document.pdf (retrieved 2026-08-11) | Real facility process decomposition for jelly, liquorice and cream confectionery; storage, boiler, cooling, cleaning, starch recovery, waste, effluent and air-release candidates. |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission Implementing Decision (EU) 2019/2031, BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019D2031 (retrieved 2026-08-11) | Resource and emission inventory, monitoring, water and cleaning practices, energy, refrigerants, residues, wastewater and data-quality requirements. |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint method, Annex I, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Life-cycle boundary, allocation hierarchy, cut-off disclosure, representative-product concept, data quality and verification logic. |
