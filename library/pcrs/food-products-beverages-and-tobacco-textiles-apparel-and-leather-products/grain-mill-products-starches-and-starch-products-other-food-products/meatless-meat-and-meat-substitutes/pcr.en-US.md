---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.meatless-meat-and-meat-substitutes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meatless meat and meat substitutes

## 1. Scope and Applicability

This PCR applies to edible products whose product identity is meatless meat or a meat substitute. It covers the full semantic range of CPC 3.0 subclass 23998: plant-based substitutes made from soy, other pulses, cereals, vegetables, nuts, potato, tapioca, sago or other starches; tofu; tempeh; seitan; structured or formulated products such as burgers, patties, nuggets, sausages and whole-cut analogues; and grown-lab or cultivated meat. Products may be sold chilled, frozen, shelf-stable, dry or wet, but the actual product state and route shall be declared.

The reference Tiangong flow is a category-level product flow. It does not imply that one recipe, protein source, tissue source, structuring technology, moisture content or market state represents the entire category. A foreground data package shall identify the actual product and shall use a more specific publicly available Tiangong product flow when one semantically matches the product and has been read back through the Tiangong CLI. If no more specific flow is available, the category flow may be used only with all required qualifiers.

This PCR models production through the declared factory gate. It requires foreground records for the actual manufacturing route and links purchased ingredients, culture inputs, packaging, fuels, electricity and other supplies to upstream datasets. Distribution after the factory gate, retail, consumer preparation, consumption and end-of-life after sale are outside the default boundary. A study may extend the boundary, but the additional stages shall be reported separately from the factory-gate result.

This PCR does not treat mass-equivalent products as nutritionally or functionally equivalent. Comparative assertions across plant-based, traditional soy/cereal, cultivated or conventional animal products require a separately justified functional equivalence, nutritional specification, use stage and study design.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.meatless-meat-and-meat-substitutes |
| classification_refs | CPC 3.0:23998, exact mapping context |
| covered_products | Plant-based meat substitutes; soy meat and burgers; vegetable burgers; tofu; tempeh; seitan; substitutes made from pulses, cereals, vegetables, nuts, potato, tapioca, sago or other starches; structured, formed or whole-cut analogues; cultivated or grown-lab meat |
| excluded_products | Conventional slaughter-derived meat; isolated protein concentrates or textured protein ingredients sold only as ingredients and not as a meat substitute; prepared multi-ingredient dishes or meals whose identity is the complete meal rather than the substitute product; dairy or egg substitutes not marketed as meat substitutes |
| representative_product | The actual edible meatless meat or meat-substitute product represented by the dataset; the category-level reference flow is only an identity fallback and shall be qualified by route, composition, format and market state |
| production_route | Route-specific: plant ingredient preparation followed by coagulation, fermentation, dough washing, mixing/forming, extrusion or another declared structuring route; or animal-cell sourcing/banking, media preparation, proliferation, differentiation or tissue formation, harvest and food finishing for cultivated meat |
| market_state | At the declared factory gate as chilled, frozen, shelf-stable, dry or wet product; net edible product mass excludes packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An edible meatless meat or meat-substitute product of the declared recipe, route, format and market state |
| How much | 1 kg net edible product, excluding packaging mass |
| How well | Conforms to the declared product specification, composition, moisture content, food-safety release status, storage condition and intended culinary use |
| How long or cycle | One production campaign normalized to the 1 kg factory-gate reference; no service duration is assigned to the food product |
| reference_flow_link | The reference flow is the net mass of conforming product leaving the declared factory gate; gross packed mass shall not be substituted for net product mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net edible product at the declared factory gate |
| Reference product flow | Meatless meat and meat substitutes `f072db26-a3e4-4979-b9ad-d883d280bfe6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual_product_name; route_family; principal_ingredient_or_species_and_tissue; product_format; net_moisture_content_or_solids_basis; market_state; storage_temperature_class; production_technology; geography; reference_period; packaging_configuration |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions or equivalent fields. For cultivated meat, `principal_ingredient_or_species_and_tissue` identifies the source species and tissue or cell type. For a plant-based or traditional route, it identifies the principal ingredient and any material protein source. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure conforming net edible product mass after the last in-scope finishing step and before adding packaging mass; reconcile scales to batch release and packed-unit net-content records. |
| `ingredient_mass` | Ingredients, media constituents, cells, scaffolds, processing aids, cleaning chemicals and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual received or issued mass on an as-used basis and declare moisture, concentration or solids basis whenever it changes interpretation or mass balance. |
| `water_mass` | Process water, formulation water, media water and cleaning water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record metered or batch-calculated water by use; do not merge ingredient water, process water and cleaning water when route decisions require them separately. |
| `energy_carrier_units` | Electricity, thermal energy, cooling and fuels | Carrier-specific property verified against the selected Tiangong flow | kWh, MJ or carrier mass/volume converted with a documented factor | Preserve original meter or invoice units, conversion factors and allocation to the production campaign; never treat search ranking as identity evidence for the selected energy flow. |
| `waste_and_coproduct_mass` | Solid residues, off-spec product, spent biomass, spent media constituents, packaging scrap and saleable co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure by destination and material state; wet and dry masses shall not be mixed without a documented moisture conversion. |

## 5. System Boundary

The following rules define the default factory-gate foreground boundary:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | All product routes | Include every operation actually performed from the declared starting condition through release of conforming product at the factory gate; distinguish plant/traditional conversion from cultivated-cell production and do not silently substitute one route for another. | `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`; `fao-who-cell-based-food-2023` |
| `boundary_purchased_inputs` | Purchased materials and services | Record each purchased ingredient, protein or starch preparation, culture medium constituent, cell bank or inoculum, scaffold, processing aid, packaging item, fuel, electricity, water supply and waste-management service as a visible input linked to an upstream dataset appropriate to its declared identity. | `eu-environmental-footprint-2021` |
| `boundary_support_operations` | Facility operations | Include directly controlled utilities, refrigeration, compressed air, steam, cleaning and disinfection, line changeover, wastewater handling, waste preparation and measured direct emissions attributable to the production campaign. | `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021` |
| `boundary_packaging_storage` | Product release | Include primary and secondary packaging applied before the gate and on-site chilled, frozen or ambient storage to the declared gate; report net product mass separately from packaging mass. | `gfi-plant-meat-manufacturing-2019` |
| `boundary_same_category_input` | Purchased input that is itself meatless meat or a meat substitute | Keep the same-category input visible as a product input with a supplier-specific upstream dataset; do not recursively recreate its production inside the consuming process unless the operation is physically performed within the declared foreground. | `un-cpc-3-23998` |
| `boundary_post_gate_exclusion` | Default factory-gate result | Exclude post-gate distribution, retail, consumer storage and cooking, consumption and disposal from the default result; if included for a study, model and report them as explicit additional stages. | `eu-environmental-footprint-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Plant/traditional route: accepted agricultural raw materials or purchased food ingredients at the manufacturing site; cultivated route: accepted source cells or a qualified cell bank/inoculum plus culture-medium and scaffold inputs at the manufacturing site; the exact starting condition shall state which upstream preparation is purchased and which is performed in-house |
| starting_condition_role | Defines the first foreground-controlled transformation and prevents upstream ingredient, cell-bank or media production from being confused with an in-house operation |
| product_classification_scope | Meatless meat and meat substitutes across the complete CPC 3.0:23998 semantic scope, with route-specific qualifiers and no assumption that the category reference flow is one representative technology |
| recursive_input_rule | A purchased CPC 23998 input remains a separately quantified technosphere input with an upstream dataset; only in-house transformation of that input is included in the current foreground |
| upstream_dataset_requirement | Supplier-, geography-, technology- and period-matched upstream datasets are required for material inputs and services; proxies shall be identified, justified and sensitivity-tested when materially influential |
| disclosure | Declare actual product name, route family, principal ingredient or source species/tissue, product format, moisture or solids basis, market state, storage condition, technology, geography, reference period, packaging, purchased-versus-in-house intermediates, exclusions, proxies and boundary extensions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | Material receipt and preparation | required | Always; depth depends on whether isolates, flours, whole ingredients, cells, media or scaffolds are purchased or prepared in-house | Establishes traceable ingredient and culture inputs and their usable prepared state | kg prepared material or inoculum transferred to the next route step, reconciled to the campaign |
| `plant_conversion` | Plant-based or traditional conversion | conditional | Include for plant, pulse, cereal, vegetable, nut or starch routes, including tofu, tempeh, seitan, extrusion, shear, mixing or forming routes | Converts prepared plant materials into a structured, coagulated, fermented, washed or formulated substitute intermediate | kg conforming plant-route intermediate |
| `cultivated_cell_production` | Cultivated-cell production and tissue formation | conditional | Include for grown-lab or cultivated meat; include only the stages physically performed within the declared foreground | Expands and differentiates cells or forms tissue through media preparation, proliferation, maturation, scaffolding and harvest | kg harvested edible cell or tissue intermediate |
| `finishing_and_preservation` | Product formulation, forming, cooking and preservation | required | Include all operations actually used; individual substeps may be not applicable for products released directly after conversion | Produces the conforming edible product and applies route-specific forming, thermal or non-thermal preservation | kg conforming net edible product before packaging |
| `packaging_and_storage` | Packaging and on-site storage | required | Always; storage technology follows the declared chilled, frozen, shelf-stable, dry or wet market state | Applies packaging and maintains the declared state through the factory gate | 1 kg net edible product at the factory gate, with packaging reported separately |
| `facility_support` | Utilities, cleaning and residuals management | required | Always for directly controlled operations; allocate only after submetering or physical assignment is exhausted | Captures cleaning, line changeover, common utilities, wastewater, waste handling and direct emissions | Support consumption assigned to the campaign and normalized to 1 kg net product |

### Process: Material receipt and preparation (`material_preparation`)

#### Inputs

##### Product flows

###### Wheat flour (`prep_wheat_flour`)

This card records only the atomic Wheat flour exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Wheat flour `f87532de-91ec-4971-8cde-7cb05b236b0f`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Pea protein concentrate (`prep_pea_protein_concentrate`)

This card records only the atomic Pea protein concentrate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Pea protein concentrate `218fc918-14a6-4085-bb6a-f8a52632c8d6`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Soy protein isolate (`prep_soy_protein_isolate`)

This card records only the atomic Soy protein isolate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Soy protein isolate
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Potato starch (`prep_potato_starch`)

This card records only the atomic Potato starch exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Potato starch `1acb7b11-0259-4f61-b05b-83f1f3f11eda`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Cassava starch (`prep_cassava_starch`)

This card records only the atomic Cassava starch exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Cassava starch `00f8688a-9af4-40bf-95fd-8529f7bc70ce`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Refined vegetable oil (`prep_refined_vegetable_oil`)

This card records only the atomic Refined vegetable oil exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Refined vegetable oil `4c682796-f13c-4585-8046-f1b0b08edc1c`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Tofu (`prep_tofu`)

This card records only the atomic Tofu exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Tofu
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Tempeh (`prep_tempeh`)

This card records only the atomic Tempeh exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Tempeh
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Seitan (`prep_seitan`)

This card records only the atomic Seitan exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Seitan
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Qualified cultivated-cell inoculum (`prep_qualified_cell_inoculum`)

This card records only the atomic Qualified cultivated-cell inoculum exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Qualified cultivated-cell inoculum
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Dextrose monohydrate (`prep_dextrose_monohydrate`)

This card records only the atomic Dextrose monohydrate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Dextrose monohydrate `8f56ee97-f5f8-4685-a958-74f586b40cd9`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### L-glutamine (`prep_l_glutamine`)

This card records only the atomic L-glutamine exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: L-glutamine
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Food-grade salt (`prep_food_grade_salt`)

This card records only the atomic Food-grade salt exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Sodium bicarbonate (`prep_sodium_bicarbonate`)

This card records only the atomic Sodium bicarbonate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Sodium bicarbonate `4aef6625-223e-4097-8b0d-97eb9a3e1cb1`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Insulin (`prep_insulin`)

This card records only the atomic Insulin exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Insulin
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Transferrin (`prep_transferrin`)

This card records only the atomic Transferrin exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Transferrin
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Food-grade collagen scaffold (`prep_collagen_scaffold`)

This card records only the atomic Food-grade collagen scaffold exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade collagen scaffold
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Process water (`prep_process_water`)

This card records only the atomic Process water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Deionised water (`prep_deionised_water`)

This card records only the atomic Deionised water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Food-grade calcium sulfate (`prep_food_grade_calcium_sulfate`)

This card records only the atomic Food-grade calcium sulfate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade calcium sulfate
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Food-grade magnesium chloride (`prep_food_grade_magnesium_chloride`)

This card records only the atomic Food-grade magnesium chloride exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade magnesium chloride
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated soy slurry (`prepared_heat_treated_soy_slurry`)

This card records only the atomic Heat-treated soy slurry exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Heat-treated soy slurry `fa4e7afd-e43c-4284-afd2-8af068c5eceb`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Prepared plant-protein blend (`prepared_plant_protein_blend`)

This card records only the atomic Prepared plant-protein blend exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Prepared plant-protein blend
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Qualified cultivated-cell inoculum (`prepared_qualified_cell_inoculum`)

This card records only the atomic Qualified cultivated-cell inoculum exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Qualified cultivated-cell inoculum
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Prepared direct-formulation blend (`prepared_direct_formulation_blend`)

This card records only the atomic Prepared direct-formulation blend exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Prepared direct-formulation blend
- Flow property / unit: Mass / kg
- Applicability: Applicable only when prepared material passes directly to finishing without plant conversion or cultivated-cell production.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

##### Waste flows

###### Filtration residue (`prep_filtration_residue`)

This card records only the atomic Filtration residue exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Filtration residue `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### Food debris (`prep_food_debris`)

This card records only the atomic Food debris exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per material-preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

##### Elementary flows

### Process: Plant-based or traditional conversion (`plant_conversion`)

#### Inputs

##### Product flows

###### Wheat flour (`plant_wheat_flour`)

This card records only the atomic Wheat flour exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Wheat flour `f87532de-91ec-4971-8cde-7cb05b236b0f`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Pea protein concentrate (`plant_pea_protein_concentrate`)

This card records only the atomic Pea protein concentrate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Pea protein concentrate `218fc918-14a6-4085-bb6a-f8a52632c8d6`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Soy protein isolate (`plant_soy_protein_isolate`)

This card records only the atomic Soy protein isolate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Soy protein isolate
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Potato starch (`plant_potato_starch`)

This card records only the atomic Potato starch exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Potato starch `1acb7b11-0259-4f61-b05b-83f1f3f11eda`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Cassava starch (`plant_cassava_starch`)

This card records only the atomic Cassava starch exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Cassava starch `00f8688a-9af4-40bf-95fd-8529f7bc70ce`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Refined vegetable oil (`plant_refined_vegetable_oil`)

This card records only the atomic Refined vegetable oil exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Refined vegetable oil `4c682796-f13c-4585-8046-f1b0b08edc1c`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Tofu (`plant_tofu`)

This card records only the atomic Tofu exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Tofu
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Tempeh (`plant_tempeh`)

This card records only the atomic Tempeh exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Tempeh
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Seitan (`plant_seitan`)

This card records only the atomic Seitan exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Seitan
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Heat-treated soy slurry (`plant_heat_treated_soy_slurry`)

This card records only the atomic Heat-treated soy slurry exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Heat-treated soy slurry `fa4e7afd-e43c-4284-afd2-8af068c5eceb`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Alternating-current electricity, below 1 kV, consumption mix (`plant_electricity_lt1kv_mix`)

This card records only the atomic Alternating-current electricity, below 1 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Alternating-current electricity, 1–35 kV, consumption mix (`plant_electricity_1_35kv_mix`)

This card records only the atomic Alternating-current electricity, 1–35 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Alternating-current electricity, 35–330 kV, consumption mix (`plant_electricity_35_330kv_mix`)

This card records only the atomic Alternating-current electricity, 35–330 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Photovoltaic electricity, 35–330 kV, technology mix (`plant_electricity_pv_35_330kv_mix`)

This card records only the atomic Photovoltaic electricity, 35–330 kV, technology mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Steam (`plant_steam`)

This card records only the atomic Steam exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Industrial hot water (`plant_industrial_hot_water`)

This card records only the atomic Industrial hot water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Industrial hot water
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Cooling water (`plant_cooling_water`)

This card records only the atomic Cooling water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Compressed air (`plant_compressed_air`)

This card records only the atomic Compressed air exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Natural gas (`plant_natural_gas`)

This card records only the atomic Natural gas exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Diesel oil (`plant_diesel_oil`)

This card records only the atomic Diesel oil exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Liquefied petroleum gas (`plant_lpg`)

This card records only the atomic Liquefied petroleum gas exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Wood pellets (`plant_wood_pellets`)

This card records only the atomic Wood pellets exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Wood pellets `4905586c-0722-4c91-923f-112215546a41`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Textured plant-protein intermediate (`plant_textured_protein_intermediate`)

This card records only the atomic Textured plant-protein intermediate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Textured plant-protein intermediate
- Flow property / unit: Mass / kg
- Applicability: Applicable only to the declared plant route producing this one intermediate; alternative route outputs must not be duplicated as the same campaign reference.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Pressed soybean-curd intermediate (`plant_pressed_curd_intermediate`)

This card records only the atomic Pressed soybean-curd intermediate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Pressed soybean-curd intermediate
- Flow property / unit: Mass / kg
- Applicability: Applicable only to the declared plant route producing this one intermediate; alternative route outputs must not be duplicated as the same campaign reference.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Fermented soybean cake (`plant_fermented_soybean_cake`)

This card records only the atomic Fermented soybean cake exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Fermented soybean cake
- Flow property / unit: Mass / kg
- Applicability: Applicable only to the declared plant route producing this one intermediate; alternative route outputs must not be duplicated as the same campaign reference.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Washed wheat-gluten intermediate (`plant_washed_gluten_intermediate`)

This card records only the atomic Washed wheat-gluten intermediate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Washed wheat-gluten intermediate
- Flow property / unit: Mass / kg
- Applicability: Applicable only to the declared plant route producing this one intermediate; alternative route outputs must not be duplicated as the same campaign reference.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant_conversion_batch`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

##### Waste flows

###### Bean pulp (`plant_bean_pulp`)

This card records only the atomic Bean pulp exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Bean pulp `e99c058b-8acc-4db6-b730-a1b6b04371b9`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Food debris (`plant_food_debris`)

This card records only the atomic Food debris exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Filtration residue (`plant_filtration_residue`)

This card records only the atomic Filtration residue exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Filtration residue `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### Food-processing wastewater (`plant_food_processing_wastewater`)

This card records only the atomic Food-processing wastewater exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming plant-route intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

##### Elementary flows

### Process: Cultivated-cell production and tissue formation (`cultivated_cell_production`)

#### Inputs

##### Product flows

###### Qualified cultivated-cell inoculum (`cult_qualified_cell_inoculum`)

This card records only the atomic Qualified cultivated-cell inoculum exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Qualified cultivated-cell inoculum
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Dextrose monohydrate (`cult_dextrose_monohydrate`)

This card records only the atomic Dextrose monohydrate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Dextrose monohydrate `8f56ee97-f5f8-4685-a958-74f586b40cd9`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### L-glutamine (`cult_l_glutamine`)

This card records only the atomic L-glutamine exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: L-glutamine
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Food-grade salt (`cult_food_grade_salt`)

This card records only the atomic Food-grade salt exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Sodium bicarbonate (`cult_sodium_bicarbonate`)

This card records only the atomic Sodium bicarbonate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Sodium bicarbonate `4aef6625-223e-4097-8b0d-97eb9a3e1cb1`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Insulin (`cult_insulin`)

This card records only the atomic Insulin exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Insulin
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Transferrin (`cult_transferrin`)

This card records only the atomic Transferrin exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Transferrin
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Food-grade collagen scaffold (`cult_collagen_scaffold`)

This card records only the atomic Food-grade collagen scaffold exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade collagen scaffold
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Process water (`cult_process_water`)

This card records only the atomic Process water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Deionised water (`cult_deionised_water`)

This card records only the atomic Deionised water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Alternating-current electricity, below 1 kV, consumption mix (`cult_electricity_lt1kv_mix`)

This card records only the atomic Alternating-current electricity, below 1 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Alternating-current electricity, 1–35 kV, consumption mix (`cult_electricity_1_35kv_mix`)

This card records only the atomic Alternating-current electricity, 1–35 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Alternating-current electricity, 35–330 kV, consumption mix (`cult_electricity_35_330kv_mix`)

This card records only the atomic Alternating-current electricity, 35–330 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Photovoltaic electricity, 35–330 kV, technology mix (`cult_electricity_pv_35_330kv_mix`)

This card records only the atomic Photovoltaic electricity, 35–330 kV, technology mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Steam (`cult_steam`)

This card records only the atomic Steam exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Industrial hot water (`cult_industrial_hot_water`)

This card records only the atomic Industrial hot water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Industrial hot water
- Flow property / unit: Energy / MJ
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Cooling water (`cult_cooling_water`)

This card records only the atomic Cooling water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Compressed air (`cult_compressed_air`)

This card records only the atomic Compressed air exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Natural gas (`cult_natural_gas`)

This card records only the atomic Natural gas exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Oxygen (`cult_oxygen`)

This card records only the atomic Oxygen exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Volume / m3
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Nitrogen gas (`cult_nitrogen_gas`)

This card records only the atomic Nitrogen gas exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

###### Food-grade carbon dioxide (`cult_food_grade_carbon_dioxide`)

This card records only the atomic Food-grade carbon dioxide exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade carbon dioxide
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested cultivated biomass (`cult_harvested_biomass`)

This card records only the atomic Harvested cultivated biomass exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Harvested cultivated biomass `b36f0fe8-8cac-4b68-b24a-a5ed52e54886`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivated_batch`
- Sources: `fao-who-cell-based-food-2023`

##### Waste flows

###### Spent culture medium (`cult_spent_culture_medium`)

This card records only the atomic Spent culture medium exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Spent culture medium
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `fao-who-cell-based-food-2023`

###### Off-spec cultivated-cell biomass (`cult_off_spec_biomass`)

This card records only the atomic Off-spec cultivated-cell biomass exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Off-spec cultivated-cell biomass
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `fao-who-cell-based-food-2023`

###### Spent food-grade scaffold (`cult_spent_scaffold`)

This card records only the atomic Spent food-grade scaffold exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Spent food-grade scaffold
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `fao-who-cell-based-food-2023`

###### Single-use bioreactor plastic waste (`cult_bioreactor_plastic_waste`)

This card records only the atomic Single-use bioreactor plastic waste exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Single-use bioreactor plastic waste
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `fao-who-cell-based-food-2023`

###### Filtration residue (`cult_filtration_residue`)

This card records only the atomic Filtration residue exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Filtration residue `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested edible cell or tissue intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `fao-who-cell-based-food-2023`

##### Elementary flows

### Process: Product formulation, forming, cooking and preservation (`finishing_and_preservation`)

#### Inputs

##### Product flows

###### Textured plant-protein intermediate (`finish_textured_protein_intermediate`)

This card records only the atomic Textured plant-protein intermediate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Textured plant-protein intermediate
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Pressed soybean-curd intermediate (`finish_pressed_curd_intermediate`)

This card records only the atomic Pressed soybean-curd intermediate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Pressed soybean-curd intermediate
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Fermented soybean cake (`finish_fermented_soybean_cake`)

This card records only the atomic Fermented soybean cake exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Fermented soybean cake
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Washed wheat-gluten intermediate (`finish_washed_gluten_intermediate`)

This card records only the atomic Washed wheat-gluten intermediate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Washed wheat-gluten intermediate
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared plant-based or traditional route when this one exchange occurs; cultivated-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Harvested cultivated biomass (`finish_harvested_cultivated_biomass`)

This card records only the atomic Harvested cultivated biomass exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Harvested cultivated biomass `b36f0fe8-8cac-4b68-b24a-a5ed52e54886`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to a declared cultivated-cell route when this one exchange occurs; plant-only campaigns record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Process water (`finish_process_water`)

This card records only the atomic Process water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Refined vegetable oil (`finish_refined_vegetable_oil`)

This card records only the atomic Refined vegetable oil exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Refined vegetable oil `4c682796-f13c-4585-8046-f1b0b08edc1c`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Methylcellulose (`finish_methylcellulose`)

This card records only the atomic Methylcellulose exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Methylcellulose
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Carrageenan (`finish_carrageenan`)

This card records only the atomic Carrageenan exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Carrageenan
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Food-grade salt (`finish_food_grade_salt`)

This card records only the atomic Food-grade salt exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Vitamin B12 (`finish_vitamin_b12`)

This card records only the atomic Vitamin B12 exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Vitamin B12
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Breadcrumb (`finish_breadcrumb`)

This card records only the atomic Breadcrumb exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Breadcrumb
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Cellulose sausage casing (`finish_cellulose_casing`)

This card records only the atomic Cellulose sausage casing exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Cellulose sausage casing
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Sodium bicarbonate (`finish_sodium_bicarbonate`)

This card records only the atomic Sodium bicarbonate exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Sodium bicarbonate `4aef6625-223e-4097-8b0d-97eb9a3e1cb1`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Alternating-current electricity, below 1 kV, consumption mix (`finish_electricity_lt1kv_mix`)

This card records only the atomic Alternating-current electricity, below 1 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Alternating-current electricity, 1–35 kV, consumption mix (`finish_electricity_1_35kv_mix`)

This card records only the atomic Alternating-current electricity, 1–35 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Alternating-current electricity, 35–330 kV, consumption mix (`finish_electricity_35_330kv_mix`)

This card records only the atomic Alternating-current electricity, 35–330 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Photovoltaic electricity, 35–330 kV, technology mix (`finish_electricity_pv_35_330kv_mix`)

This card records only the atomic Photovoltaic electricity, 35–330 kV, technology mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Steam (`finish_steam`)

This card records only the atomic Steam exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Industrial hot water (`finish_industrial_hot_water`)

This card records only the atomic Industrial hot water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Industrial hot water
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Cooling water (`finish_cooling_water`)

This card records only the atomic Cooling water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Compressed air (`finish_compressed_air`)

This card records only the atomic Compressed air exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Natural gas (`finish_natural_gas`)

This card records only the atomic Natural gas exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Diesel oil (`finish_diesel_oil`)

This card records only the atomic Diesel oil exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Liquefied petroleum gas (`finish_lpg`)

This card records only the atomic Liquefied petroleum gas exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Meatless meat and meat substitutes (`finish_reference_product`)

This card records only the atomic Meatless meat and meat substitutes exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Meatless meat and meat substitutes `f072db26-a3e4-4979-b9ad-d883d280bfe6`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to released net edible product conforming to the declared recipe, route, format and market state; packaging mass is separate.
- Amount rule: exactly 1 kg conforming net edible product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

##### Waste flows

###### Food debris (`finish_food_debris`)

This card records only the atomic Food debris exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Meat-substitute product trimmings (`finish_product_trimmings`)

This card records only the atomic Meat-substitute product trimmings exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Meat-substitute product trimmings
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Breadcrumb coating residue (`finish_coating_residue`)

This card records only the atomic Breadcrumb coating residue exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Breadcrumb coating residue
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### Food-processing wastewater (`finish_food_processing_wastewater`)

This card records only the atomic Food-processing wastewater exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net edible product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

##### Elementary flows

### Process: Packaging and on-site storage (`packaging_and_storage`)

#### Inputs

##### Product flows

###### Polyethylene film (`pack_polyethylene_film`)

This card records only the atomic Polyethylene film exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Polypropylene food tray (`pack_polypropylene_tray`)

This card records only the atomic Polypropylene food tray exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Polypropylene food tray
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Polyethylene terephthalate food tray (`pack_pet_tray`)

This card records only the atomic Polyethylene terephthalate food tray exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Polyethylene terephthalate food tray
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Paper box (`pack_paper_box`)

This card records only the atomic Paper box exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Paper label (`pack_paper_label`)

This card records only the atomic Paper label exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Paper label `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Aluminium foil (`pack_aluminium_foil`)

This card records only the atomic Aluminium foil exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Aluminium foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Glass jar (`pack_glass_jar`)

This card records only the atomic Glass jar exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Glass jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Steel food can (`pack_steel_food_can`)

This card records only the atomic Steel food can exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Steel food can `f09b782f-b3db-4b1e-8473-597edcc5b6d7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Wood pallet (`pack_wood_pallet`)

This card records only the atomic Wood pallet exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Wood pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Alternating-current electricity, below 1 kV, consumption mix (`pack_electricity_lt1kv_mix`)

This card records only the atomic Alternating-current electricity, below 1 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Alternating-current electricity, 1–35 kV, consumption mix (`pack_electricity_1_35kv_mix`)

This card records only the atomic Alternating-current electricity, 1–35 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Alternating-current electricity, 35–330 kV, consumption mix (`pack_electricity_35_330kv_mix`)

This card records only the atomic Alternating-current electricity, 35–330 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Photovoltaic electricity, 35–330 kV, technology mix (`pack_electricity_pv_35_330kv_mix`)

This card records only the atomic Photovoltaic electricity, 35–330 kV, technology mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Refrigerant R134a (`pack_refrigerant_r134a`)

This card records only the atomic Refrigerant R134a exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Refrigerant R134a `a4facd51-1e5c-422e-8461-e9562c045164`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when service records show make-up of this one refrigerant; alternative refrigerants must not share the same make-up amount.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Refrigerant R404A (`pack_refrigerant_r404a`)

This card records only the atomic Refrigerant R404A exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when service records show make-up of this one refrigerant; alternative refrigerants must not share the same make-up amount.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Refrigerant R717 (`pack_refrigerant_r717`)

This card records only the atomic Refrigerant R717 exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Refrigerant R717
- Flow property / unit: Mass / kg
- Applicability: Applicable only when service records show make-up of this one refrigerant; alternative refrigerants must not share the same make-up amount.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Refrigerant R744 (`pack_refrigerant_r744`)

This card records only the atomic Refrigerant R744 exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Refrigerant R744
- Flow property / unit: Mass / kg
- Applicability: Applicable only when service records show make-up of this one refrigerant; alternative refrigerants must not share the same make-up amount.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Meatless meat and meat substitutes (`pack_reference_product`)

This card records only the atomic Meatless meat and meat substitutes exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Meatless meat and meat substitutes `f072db26-a3e4-4979-b9ad-d883d280bfe6`
- Flow property / unit: Mass / kg
- Applicability: Applicable only to released net edible product conforming to the declared recipe, route, format and market state; packaging mass is separate.
- Amount rule: exactly 1 kg conforming net edible product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

##### Waste flows

###### Plastic packaging waste (`pack_plastic_packaging_waste`)

This card records only the atomic Plastic packaging waste exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Plastic packaging waste `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Paper and cardboard packaging waste (`pack_paper_packaging_waste`)

This card records only the atomic Paper and cardboard packaging waste exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### Damaged packaged meatless-meat product (`pack_damaged_product`)

This card records only the atomic Damaged packaged meatless-meat product exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Damaged packaged meatless-meat product
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product at the factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

##### Elementary flows

### Process: Utilities, cleaning and residuals management (`facility_support`)

#### Inputs

##### Product flows

###### Alternating-current electricity, below 1 kV, consumption mix (`support_electricity_lt1kv_mix`)

This card records only the atomic Alternating-current electricity, below 1 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Alternating-current electricity, 1–35 kV, consumption mix (`support_electricity_1_35kv_mix`)

This card records only the atomic Alternating-current electricity, 1–35 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Alternating-current electricity, 35–330 kV, consumption mix (`support_electricity_35_330kv_mix`)

This card records only the atomic Alternating-current electricity, 35–330 kV, consumption mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Photovoltaic electricity, 35–330 kV, technology mix (`support_electricity_pv_35_330kv_mix`)

This card records only the atomic Photovoltaic electricity, 35–330 kV, technology mix exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- Flow property / unit: Energy / kWh
- Applicability: Use only for electricity consumed at this voltage and supply scenario. For one metered consumption, select exactly one voltage/supply scenario and do not add an alternative scenario.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Natural gas (`support_natural_gas`)

This card records only the atomic Natural gas exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Diesel oil (`support_diesel_oil`)

This card records only the atomic Diesel oil exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Liquefied petroleum gas (`support_lpg`)

This card records only the atomic Liquefied petroleum gas exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Wood pellets (`support_wood_pellets`)

This card records only the atomic Wood pellets exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Wood pellets `4905586c-0722-4c91-923f-112215546a41`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one fuel is physically consumed; every different fuel remains a separate card.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Steam (`support_steam`)

This card records only the atomic Steam exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Industrial hot water (`support_industrial_hot_water`)

This card records only the atomic Industrial hot water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Industrial hot water
- Flow property / unit: Energy / MJ
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Cooling water (`support_cooling_water`)

This card records only the atomic Cooling water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Compressed air (`support_compressed_air`)

This card records only the atomic Compressed air exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Process water (`support_process_water`)

This card records only the atomic Process water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Softened water (`support_softened_water`)

This card records only the atomic Softened water exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Softened water `f80e7700-5324-4c6f-b4db-686a84e4b274`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: submetered consumption, service-log quantity or physical assignment to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Sodium hydroxide (`support_sodium_hydroxide`)

This card records only the atomic Sodium hydroxide exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Nitric acid, 50% solution (`support_nitric_acid_50`)

This card records only the atomic Nitric acid, 50% solution exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Nitric acid, 50% solution `db613797-10b0-4252-b818-659b99ce85dd`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Hydrogen peroxide, 50% solution (`support_hydrogen_peroxide_50`)

This card records only the atomic Hydrogen peroxide, 50% solution exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Hydrogen peroxide, 50% solution `afda772f-b130-4c32-9a89-c4e79ba4e0e8`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Sodium hypochlorite (`support_sodium_hypochlorite`)

This card records only the atomic Sodium hypochlorite exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Sodium hypochlorite `28c4ca0f-c924-4d2a-93dd-b9ac93009d25`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Orthophosphoric acid (`support_orthophosphoric_acid`)

This card records only the atomic Orthophosphoric acid exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Orthophosphoric acid `9102d985-3980-4e5d-a870-f5164ff2e977`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Food-grade salt (`support_food_grade_salt`)

This card records only the atomic Food-grade salt exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-grade salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured issued, consumed or transferred mass from lot and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Food-processing wastewater (`support_food_processing_wastewater`)

This card records only the atomic Food-processing wastewater exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Food-processing wastewater-treatment sludge (`support_wastewater_treatment_sludge`)

This card records only the atomic Food-processing wastewater-treatment sludge exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Food-processing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Filtration residue (`support_filtration_residue`)

This card records only the atomic Filtration residue exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Filtration residue `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Cleaning residue from meat-substitute production (`support_cleaning_residue`)

This card records only the atomic Cleaning residue from meat-substitute production exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Cleaning residue from meat-substitute production
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Used food-production personal protective equipment (`support_used_ppe`)

This card records only the atomic Used food-production personal protective equipment exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Used food-production personal protective equipment
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Plastic packaging waste (`support_plastic_packaging_waste`)

This card records only the atomic Plastic packaging waste exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Plastic packaging waste `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when this one exchange occurs in the declared recipe or operation; otherwise record not applicable.
- Amount rule: measured mass by material, moisture state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

##### Elementary flows

###### Carbon dioxide, fossil, to air, unspecified (`emission_fossil_co2_air`)

This card records only the atomic Carbon dioxide, fossil, to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Carbon dioxide, fossil, to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Methane, fossil, to air, unspecified (`emission_fossil_methane_air`)

This card records only the atomic Methane, fossil, to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Methane, fossil, to air, unspecified `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Dinitrogen monoxide to air, unspecified (`emission_nitrous_oxide_air`)

This card records only the atomic Dinitrogen monoxide to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Dinitrogen monoxide to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Nitrogen oxides to air, unspecified (`emission_nitrogen_oxides_air`)

This card records only the atomic Nitrogen oxides to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Nitrogen oxides to air, unspecified
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Sulfur oxides to air, unspecified (`emission_sulfur_oxides_air`)

This card records only the atomic Sulfur oxides to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Sulfur oxides to air, unspecified `fe0acd60-3ddc-11dd-a207-0050c2490048`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Particulate matter, less than 2.5 µm, to air, unspecified (`emission_pm25_air`)

This card records only the atomic Particulate matter, less than 2.5 µm, to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Particulate matter, less than 2.5 µm, to air, unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Ammonia to air, unspecified (`emission_ammonia_air`)

This card records only the atomic Ammonia to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Ammonia to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Chemical oxygen demand to water, unspecified (`emission_cod_water`)

This card records only the atomic Chemical oxygen demand to water, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Chemical oxygen demand to water, unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Nitrogen, total, to freshwater (`emission_total_n_freshwater`)

This card records only the atomic Nitrogen, total, to freshwater exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Nitrogen, total, to freshwater `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Phosphorus, total, to freshwater (`emission_total_p_freshwater`)

This card records only the atomic Phosphorus, total, to freshwater exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Phosphorus, total, to freshwater `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 1,1,1,2-Tetrafluoroethane to air, unspecified (`emission_hfc134a_air`)

This card records only the atomic 1,1,1,2-Tetrafluoroethane to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### Refrigerant R404A to air, unspecified (`emission_r404a_air`)

This card records only the atomic Refrigerant R404A to air, unspecified exchange; its amount, state and destination must not be combined with another substance.

- Selected flow: Refrigerant R404A to air, unspecified
- Flow property / unit: Mass / kg
- Applicability: Applicable only when monitoring, mass balance or a verified calculation shows this one pollutant is emitted directly to the stated compartment.
- Amount rule: measured discharge or documented calculation by pollutant and receiving compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible product after causal assignment and documented allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_utilities`
- Sources: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

## 7. Allocation and Co-product Handling

Apply the following hierarchy and preserve the decision evidence:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_routes` | Distinct products, routes, lines and campaigns | Keep plant/traditional and cultivated routes, different product formats and separately metered campaigns as distinct process records; do not average them merely because they use the same category-level reference flow. | `un-cpc-3-23998`; `eu-environmental-footprint-2021` |
| `allocation_avoid` | Multi-output or shared processes | First avoid allocation by process subdivision using line, batch, time, meter or equipment records; use system expansion only when the added function and substituted product system are explicitly justified and consistently modelled. | `eu-environmental-footprint-2021` |
| `allocation_physical_relation` | Multi-output process that cannot be subdivided or expanded | Allocate using a documented causal physical relationship, such as independently measured mass, dry matter, energy demand, equipment time or another parameter that explains resource use; do not select mass merely because it is convenient. | `eu-environmental-footprint-2021` |
| `allocation_other_relation` | No defensible physical relationship | Use an explicitly justified other relationship, such as economic value, only after documenting why physical allocation is not meaningful; report the factor period, prices or other basis and a sensitivity result against at least one plausible alternative. | `eu-environmental-footprint-2021` |
| `allocation_residue_status` | Residues, spent media, off-spec material, rework and saleable outputs | Closed-loop same-campaign rework is an internal transfer, not a co-product. An output sold or used beneficially outside the system shall be assessed as a co-product when it carries a function or value; otherwise record it as waste with its actual treatment and disclose the classification decision. | `eu-environmental-footprint-2021` |
| `allocation_shared_support` | Cleaning, refrigeration and common utilities | Assign shared support consumption first by submetering or causal operating records; only the unresolved remainder may follow the selected allocation hierarchy, with the unallocated total and reconciliation disclosed. | `eu-environmental-footprint-2021`; `codex-cxc-1-1969-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch` | `material_preparation` | Purchased and prepared materials, cells, media, scaffolds, water and preparation residues | Receiving, inventory issue, recipe, scale, concentration and transfer records | lot_id; supplier; material_identity; route_role; received_mass; issued_mass; returns; moisture_or_solids; concentration; prepared_output_mass; reject_mass; destination | Reconcile receiving and inventory movements to batch sheets and calibrated scale or meter records | kg and declared concentration basis | Each lot and batch | All campaigns in the reference period | Every in-scope facility and preparation line | Sum accepted consumption after stock change and returns; preserve lot-level traceability before normalization | Calibration records; supplier specifications; lot certificates; inventory reconciliation; batch sign-off |
| `cp_plant_conversion_batch` | `plant_conversion` | Plant-route material, utilities, intermediate and residuals | Recipe, batch, fermentation, extrusion, cooking, drying, water and utility records | batch_id; route; equipment_id; input_mass; process_water; electricity; thermal_energy; time; temperature; pressure; moisture; intermediate_mass; reject_mass; wastewater | Use batch sheets and submeters; retain the actual operation sequence and settings relevant to technology identity | kg, kWh, MJ, h and route-specific settings | Each batch; continuous meters at shift or campaign resolution | All plant-route campaigns in the reference period | Each included plant-conversion line | Aggregate like products and technologies only; divide by conforming intermediate output | Meter calibration; batch release; moisture tests; production log; waste tickets |
| `cp_cultivated_batch` | `cultivated_cell_production` | Cells, media, scaffolds, gases, utilities, harvested tissue, spent media and residuals | Cell-bank, media-recipe, bioreactor, harvest, cleaning and batch-release records | culture_lot; species; tissue_or_cell_type; cell_bank_input; media_component_mass; water; gas; scaffold_mass; vessel_volume; electricity; heat; cooling; culture_time; harvest_mass; moisture_or_solids; spent_media; reject_biomass | Link qualified cell-bank and media lots to equipment logs, submeters and harvest measurements | kg, kWh, MJ, m3, h and declared cell or solids basis | Each culture and harvest lot | All cultivated-route campaigns in the reference period | Each included culture, differentiation, maturation and harvest system | Preserve stage-level data; aggregate only identical route and equipment states before normalization | Cell-bank qualification; media lot records; sensor calibration; sterility and release records; mass balance |
| `cp_finishing_batch` | `finishing_and_preservation` | Formulation inputs, finishing utilities, conforming product and residues | Recipe, scale, forming, cooking, preservation, cooling, release and rework records | batch_id; intermediate_mass; ingredient_mass; water; energy; process_time; temperature_or_pressure; conforming_net_mass; rework; off_spec_mass; moisture; release_status | Reconcile issued ingredients and equipment records to calibrated net-product mass and quality release | kg, kWh, MJ, h and process-specific settings | Each finishing batch | All finishing campaigns in the reference period | Each included finishing line | Normalize only released net edible product; deduct packaging and unresolved hold stock | Calibration; recipe control; process log; release certificate; rework and reject disposition |
| `cp_packaging_storage` | `packaging_and_storage` | Packaging, packed units, on-site storage energy, refrigerant and storage loss | Packaging issue, packed-unit, warehouse, refrigeration and inventory records | packaging_item; packaging_mass; units_packed; net_mass_per_unit; storage_state; storage_time; electricity; refrigerant_makeup; damaged_units; expired_units | Reconcile packaging inventory and packed counts; meter storage energy or calculate from verified equipment and occupancy records | kg, count, kWh, h or day | Each packaging run; storage meters at least monthly | Complete residence through the gate for all reference-period production | Each packaging line and on-site warehouse used | Allocate storage by verified mass-time or pallet-time only when direct batch metering is unavailable | Net-content checks; packaging specifications; meter records; refrigerant service log; stock reconciliation |
| `cp_support_utilities` | `facility_support` | Shared utilities, cleaning agents, wastewater, support waste and direct emissions | Utility invoice and meter, sanitation, wastewater, waste-transfer and emissions records | meter_id; start_reading; end_reading; fuel; water; detergent; disinfectant; cleaning_time; wastewater; sludge; waste_mass; destination; direct_emission; factor_source | Use submeters and sanitation logs first; reconcile facility totals to assigned and unassigned consumption | Carrier-specific unit, kg, m3, kWh or MJ | Meter reading by shift, campaign or month; sanitation by event | Complete reference period including shutdown and changeover associated with production | Entire facility with line-level separation where possible | Assign causally to lines/campaigns, then allocate only the unresolved balance under section 7 | Meter calibration; invoices; sanitation verification; discharge report; waste manifest; emissions calculation record |
| `cp_waste_coproduct` | `all_processes` | Waste, rework, residues and co-products | Weigh-ticket, container, transfer, sale and treatment records | flow_identity; source_process; wet_mass; dry_mass_or_moisture; rework_destination; external_destination; revenue_or_function; treatment; transport_record | Measure by flow and destination; verify any conversion from count or volume | kg with moisture basis; destination-specific service unit where applicable | Each transfer or shipment | Complete reference period | All in-scope processes and contractors | Reconcile generated, internally reworked, externally transferred and stored quantities without double counting | Weighbridge or calibrated scale; transfer manifest; invoice; treatment certificate; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Reference product | net_product_mass = sum(released_unit_net_mass) - returned_or_rejected_net_mass; packaging mass is excluded | released unit count; verified net mass per unit; bulk release mass; returns; rejects | kg conforming net edible product | `codex-cxc-1-1969-2022` |
| `calc_normalized_inventory` | Every foreground flow | normalized_amount = campaign_flow_amount / conforming_net_product_mass; multiply by 1 kg reference flow | collected campaign flow amount; conforming net product mass; unit conversion | flow amount per 1 kg net edible product | `eu-environmental-footprint-2021` |
| `calc_stock_adjusted_input` | Purchased materials and packaging | consumed_mass = opening_stock + receipts - closing_stock - verified_returns; separately identify abnormal loss | stock and receiving records; returns; abnormal loss | kg consumed material by campaign or period | `eu-environmental-footprint-2021` |
| `calc_mass_balance` | Each process and total foreground | balance_gap = total_mass_inputs - total_mass_outputs - measured_direct_mass_emissions; water incorporation, evaporation, wastewater, stock change and moisture-basis conversions shall be explicit | all mass inputs; products; co-products; wastes; wastewater; mass emissions; stock change; moisture conversions | signed kg gap and percent of input mass, reported without an invented pass threshold | `eu-environmental-footprint-2021` |
| `calc_shared_support` | Facility support | assigned_support = directly_metered_support + unresolved_support × documented_allocation_factor; allocation factors shall sum to one across recipients | facility total; direct meters; operating records; allocation basis | assigned utility or support amount per campaign | `eu-environmental-footprint-2021` |
| `calc_allocation_factor` | Multi-output process | factor_i = documented_physical_or_other_basis_i / sum(documented_basis_all_outputs); apply the same factor to only those inseparable inputs and outputs and preserve unallocated direct records | co-product quantities; causal basis; price or other basis where approved | allocation factor and allocated inventory by output | `eu-environmental-footprint-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all route intermediates | Preserve actual product name, route family, ingredient or species/tissue basis, format, composition or recipe version, moisture or solids basis, market state, storage class and production technology; category-level flow identity alone is insufficient. | Product specification; recipe version; cell-bank or ingredient specification; batch release; required qualifiers |
| `dq_technological_representativeness` | Foreground processes | Data shall represent the actual equipment, route and purchased-versus-in-house preparation used for the declared product; plant/traditional and cultivated routes shall not be pooled. | Process flow diagram confirmed on site; equipment list; batch records; technology-specific meter data |
| `dq_temporal_coverage` | Foreground activity data | Use the most recent complete representative annual administration period where normal continuous production exists; for seasonal, pilot or campaign production, include all relevant campaigns and disclose the shorter coverage, utilization and scale-up limitations. | Dated meter, invoice, batch and production records; campaign list; representativeness statement |
| `dq_geographical_coverage` | Foreground and upstream datasets | Identify every foreground site and select upstream datasets matching supplier geography and technology where available; disclose proxy geography and its materiality. | Site list; supplier origin; upstream dataset metadata; proxy and sensitivity record |
| `dq_measurement_traceability` | Mass, energy, water, process conditions and direct emissions | Retain original readings, units, conversion factors, calibration or verification evidence and responsible record owner; calculated data shall link to collected inputs and a calculation rule. | Meter exports; calibrated scale records; laboratory records; invoices; formula audit trail |
| `dq_completeness` | All in-scope processes | Include all known inputs and outputs for directly controlled processes, including cleaning, changeover, storage, wastewater, waste and direct emissions; identify data gaps and proxies and do not apply an undocumented cut-off. | Completed flow checklist; mass and utility reconciliations; waste manifests; gap register |
| `dq_food_safety_and_lot_traceability` | Food production and release records | Preserve lot identification, monitoring, corrective action, cleaning verification and product-release evidence needed to confirm that inventory records correspond to conforming product rather than rejected or unsafe output. | HACCP/GHP records; lot tracing; sanitation verification; corrective action; release status |
| `dq_cultivated_route_transparency` | Cultivated-cell datasets | Confidentiality may mask proprietary names in public presentation but shall not remove material categories, quantities, source species/tissue, media function, scaffold status, energy, water, residuals or upstream coverage from the auditable data package. | Confidential audit annex; mass balance; media bill of materials; culture and harvest records |

## 9. Validation Rules

A foreground data package conforms only when every applicable rule passes:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The output uses a Tiangong flow read back as a public Product flow; the category fallback UUID is `f072db26-a3e4-4979-b9ad-d883d280bfe6`, Mass is `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass is `93a60a57-a4c8-11da-a746-0800200c9a66`, and the normalized net edible output is exactly 1 kg excluding packaging. | `un-cpc-3-23998` |
| `validate_specific_flow_preference` | Product identity | If a more specific public Tiangong product flow semantically matches the actual product, it replaces the category fallback only after CLI readback; otherwise all required qualifiers accompany the category flow and no single route is implied. | `un-cpc-3-23998` |
| `validate_scope_and_route` | Product and process map | The actual product falls within the covered category, excluded meal or ingredient-only products are absent, and exactly the applicable plant/traditional or cultivated route operations are included without route averaging. | `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`; `fao-who-cell-based-food-2023` |
| `validate_required_qualifiers` | Dataset metadata | All required qualifiers are present and consistent across product specification, reference-flow comment, process records and published metadata. | `un-cpc-3-23998` |
| `validate_mass_reconciliation` | Each process and total foreground | Inputs, products, co-products, internal rework, wastes, wastewater, direct mass emissions and stock change are reconciled on consistent moisture or solids bases; the signed gap and explanation are reported without silently forcing balance. | `eu-environmental-footprint-2021` |
| `validate_utility_completeness` | All foreground processes | Electricity, fuels, heating, cooling, water, refrigeration, cleaning and shared support are present where used, and facility totals reconcile to directly assigned plus allocated amounts. | `eu-environmental-footprint-2021`; `codex-cxc-1-1969-2022` |
| `validate_residual_destinations` | Waste, spent media, residues and off-spec outputs | Every residual has a measured or calculated quantity, moisture state where relevant, internal rework status and external treatment or destination; waste and co-product classification is not chosen to manipulate allocation. | `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021` |
| `validate_allocation` | Multi-output and shared processes | The dataset shows the allocation hierarchy, basis, factors and recipients; subdivision or expansion is considered first, causal physical allocation is preferred next, and any other relationship has an alternative-basis sensitivity result. | `eu-environmental-footprint-2021` |
| `validate_collection_links` | Foreground inventory rows | Each foreground-record or calculated-from-collection row links to an applicable collection protocol, original records and any calculation rule; unsupported estimates are not presented as measured values. | `eu-environmental-footprint-2021` |
| `validate_food_release_alignment` | Conforming reference product | Lot, sanitation, monitoring, corrective-action and release records demonstrate that the inventory denominator is conforming released product and that rejected product is recorded separately. | `codex-cxc-1-1969-2022` |
| `validate_boundary_disclosure` | Published dataset | Purchased-versus-in-house intermediates, upstream datasets, proxies, exclusions, post-gate extensions, packaging convention and reference period are disclosed and consistent with the foreground model. | `eu-environmental-footprint-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared meatless meat or meat-substitute product and route |
| downstream_use | May be published as a `secondary_dataset` and used as a `background_dataset` only for products whose required qualifiers and factory-gate boundary match |
| allowed_use | Mass-normalized factory-gate inventories, process datasets and lifecycle-model inputs for the declared product, route, technology, geography, market state, packaging and reference period |
| excluded_use | Unqualified category averages; automatic substitution across plant/traditional, cultivated and conventional meat routes; nutritional or comparative claims based only on 1 kg mass; ingredient-only protein datasets; prepared-meal datasets; post-gate use without explicit extension |
| required_metadata | Canonical PCR id and version; actual product name; all required qualifiers; facility geography; reference period; route process map; purchased-versus-in-house intermediates; upstream dataset identities; net-mass convention; packaging; allocation; cut-offs or gaps; proxy register |
| required_quality_disclosure | Foreground and upstream temporal, technological and geographical representativeness; meter and mass-balance coverage; allocation sensitivity; proxy and confidentiality treatment; route-specific limitations; completeness of cleaning, storage, wastewater, waste and direct emissions |
| update_trigger | Recipe, principal ingredient, source species/tissue or cell line, media or scaffold system, production route, equipment scale, preservation method, market state, packaging, supplier geography, allocation basis, facility boundary or reference-flow identity changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-23998` | Official guidance (`official_guidance`) | United Nations Statistics Division. Central Product Classification Version 3.0, Explanatory Notes, subclass 23998 “Meatless meat and meat substitutes”, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Full category scope, exclusions and the requirement to distinguish plant/traditional and grown-lab products |
| `fao-who-cell-based-food-2023` | Official guidance (`official_guidance`) | FAO and WHO. 2023. Food safety aspects of cell-based food. Rome. https://doi.org/10.4060/cc4855en; ISBN 978-92-4-007094-3 (retrieved 2026-08-11) | Cultivated-cell route definition and decomposition into cell sourcing, cell production, harvesting and food processing; route-specific records and hazard-control context |
| `eu-environmental-footprint-2021` | Official guidance (`official_guidance`) | European Commission. Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, including corrigendum. CELEX 32021H2279. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279 (retrieved 2026-08-11) | Company-specific input/output collection, functional-unit normalization, representativeness, completeness, multi-functionality hierarchy, allocation and sensitivity disclosure |
| `codex-cxc-1-1969-2022` | Standard (`standard`) | FAO and WHO Codex Alimentarius. General Principles of Food Hygiene, CXC 1-1969, revised 2022, published 2023. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-11) | Cleaning and disinfection, monitoring, corrective action, lot traceability, documentation, records and food-release evidence |
| `gfi-plant-meat-manufacturing-2019` | Handbook (`handbook`) | Kinney, M.J.; Weston, Z.; Bauman, J.D. 2019. Overview of Plant-Based Meat Manufacturing: Plant-Based Meat Manufacturing by Extrusion. The Good Food Institute. https://gfi.org/wp-content/uploads/2021/01/Plant-Based-Meat-Manufacturing-Guide-_GFI.pdf (retrieved 2026-08-11) | Plant-based product spectrum and process decomposition for dry/wet texturing, hydration, mixing, forming, coating, cooking, preservation, cooling, packaging and storage |
