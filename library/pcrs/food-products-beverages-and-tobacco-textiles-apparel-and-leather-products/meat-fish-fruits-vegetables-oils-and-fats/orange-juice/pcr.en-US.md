---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.orange-juice
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Orange juice

## 1. Scope and Applicability

This PCR applies to orange juice made from oranges and supplied as directly expressed juice, not-from-concentrate juice, juice from concentrate, or concentrated orange juice. It covers clear or cloudy juice, declared pulp or cells, and physically recovered orange aroma or volatile flavour components when these remain within the product definition. The foreground route may start with fresh oranges, purchased single-strength orange juice, or purchased orange juice concentrate, provided the starting condition and the upstream datasets are declared.

The PCR excludes orange nectar, orange-flavoured drinks, mixed-fruit juices, fermented orange beverages, orange purée sold as purée, isolated peel oil, pectin, dried peel, animal feed, and other citrus by-products sold as products in their own right. Those outputs may occur as co-products of the orange juice route, but they do not become the reference product under this PCR. Orchard cultivation, distribution beyond the declared manufacturing handoff, consumer refrigeration or preparation, and packaging end-of-life are outside the foreground boundary unless the study explicitly extends the model and identifies the added processes.

The generic Tiangong reference flow is a representative category flow. A foreground data package shall state the actual orange species or commercial specification, directly expressed or from-concentrate route, concentration and reconstitution state, soluble-solids content, pulp or cell content, preservation treatment, packaging or bulk state, and handoff temperature. If a current publicly readable Tiangong product flow matches those facts more closely than the representative flow, the more specific flow shall replace it while preserving the mass reference property and documenting the substitution.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.orange-juice |
| classification_refs | CPC 3.0: 21431 Orange juice |
| covered_products | Directly expressed orange juice; not-from-concentrate orange juice; orange juice from concentrate; concentrated orange juice; clear or cloudy orange juice with declared pulp or cells and physically recovered orange components from the same kind of fruit |
| excluded_products | Orange nectar; orange-flavoured drinks and beverages; mixed-fruit juice; fermented orange beverages; orange purée sold as purée; isolated orange oil, pectin, dried peel, feed, and other by-products sold as the reference product |
| representative_product | Orange juice represented by the Tiangong product flow declared below; the record is representative rather than a substitute for actual route and product qualifiers |
| production_route | Fresh-orange receiving, sorting and washing, extraction and finishing, followed as applicable by concentration, aroma recovery, storage, reconstitution or blending, stabilization, filling, and bulk or packaged handoff |
| market_state | Bulk or packaged orange juice at the declared manufacturer gate; single strength or concentrated; chilled, frozen, aseptic, hot-filled, or otherwise physically preserved as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of orange juice with the declared concentration, composition, preservation treatment, packaging state, and manufacturer-gate handoff condition |
| How much | 1 kg of the as-sold orange juice product |
| How well | Meets the declared product specification and applicable orange-juice authenticity, composition, hygiene, and labelling requirements; route and soluble-solids basis are disclosed |
| How long or cycle | One production batch or accounting period at the manufacturer-gate handoff; no use-stage service duration is implied |
| reference_flow_link | The reference product output row `orange_juice_reference_output` is exactly 1 kg per reference flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Orange juice `858ebbd0-452b-443d-9964-94ee3f2c1c57` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | orange species or commercial specification; directly expressed, not-from-concentrate, from-concentrate, or concentrated route; measured °Brix and concentration state; pulp or cell content; ingredient and physically restored orange-component statement; preservation treatment; bulk or packaging format; handoff temperature; geography; reference period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comments, product descriptions, or equivalent fields. Missing qualifiers make the reference flow incomplete. The representative Tiangong flow shall not be used to imply that two products with different concentration, composition, preservation, packaging, or handoff states are interchangeable.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference orange juice output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass excluding transport packaging not sold with the product. The normalized reference output is exactly 1 kg; retain measured batch mass before normalization. |
| `as_sold_concentration` | All reference products | Mass and measured soluble solids | kg and °Brix | Keep the 1 kg reference on the as-sold product. Do not silently convert concentrate to single-strength juice. Record the measured °Brix, sampling temperature or correction method, and directly expressed, reconstituted, or concentrated status. |
| `reconstitution_basis` | Juice from concentrate | Mass and measured soluble solids | kg and °Brix | Record concentrate mass, potable reconstitution water, measured final mass, and final °Brix. Apply the applicable market rule; CXS 247-2005 is the default international specification and identifies 11.8–11.2 °Brix for reconstituted orange juice subject to importing-country provisions, with the stated origin exception not below 10 °Brix. |
| `concentrate_status` | Concentrated orange juice | Mass and measured soluble solids | kg and °Brix | Declare the degree of concentration. Under CXS 247-2005, concentrated fruit juice has sufficient physically removed water to raise °Brix by at least 50 percent above the corresponding reconstituted-juice value. |
| `single_strength_equivalent` | Optional comparison across concentration states | Mass and measured soluble solids | kg and °Brix | When a study reports a single-strength equivalent, calculate it as as-sold mass multiplied by measured product °Brix divided by the declared single-strength target °Brix. Report this as an additional result and do not replace the 1 kg reference flow. |
| `utility_conversion` | Electricity, fuels, steam, cooling, water, and wastewater | Property matching the selected Tiangong flow | Selected flow reference unit | Preserve meter or invoice units, document conversion factors, and normalize only after allocation to the orange juice route. Do not treat steam mass, thermal energy, and fuel mass or volume as interchangeable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh oranges at plant receipt; purchased single-strength orange juice at plant receipt; purchased orange juice concentrate at plant receipt; or an explicitly declared combination |
| starting_condition_role | The first product input for which the reporting organization operates or controls foreground transformation |
| product_classification_scope | Orange juice only, consistent with CPC 3.0 code 21431; other fruit juices, juice mixtures, nectars, drinks, and independently sold citrus by-products are outside the reference-product scope |
| recursive_input_rule | Purchased orange juice or orange juice concentrate entering a foreground process is recorded once as a product input with an upstream supplier-gate dataset. Do not recursively recreate supplier operations unless they are actually controlled foreground operations. |
| upstream_dataset_requirement | Every orange, purchased juice or concentrate, ingredient, packaging material, energy carrier, water supply, treatment service, and other technosphere input crossing the boundary requires a geographically, technologically, and temporally appropriate upstream dataset or an explicit data gap. |
| disclosure | Declare starting product state, supplier-gate boundary, included unit operations, outsourced operations, storage and preservation state, packaging boundary, cut-offs, allocation choices, and any downstream stages added beyond the manufacturer gate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_route` | Foreground orange juice production | Include every on-site or controlled operation from the declared starting condition through the declared manufacturer-gate handoff, including cleaning and grading, extraction and finishing, concentration or reconstitution when used, stabilization, storage, filling or bulk loading, cleaning-in-place, and on-site waste or wastewater handling attributable to the route. | `fao-fruit-juice-processing-2001`; `codex-cxs-247-2005` |
| `boundary_upstream_inputs` | Product, material, energy, water, packaging, and treatment inputs | Link all inputs crossing the foreground boundary to upstream datasets. Orchard cultivation is upstream when fresh oranges enter the plant; concentrate production is upstream when purchased concentrate is the declared starting condition. | `eu-pef-method-2021` |
| `boundary_recursive_orange_input` | Purchased orange juice or concentrate | Record the purchased orange product once at supplier gate and require its upstream dataset. Include only the transformations actually performed by the reporting facility after receipt. | `unsd-cpc-3-2025` |
| `boundary_downstream_exclusions` | Distribution, use, and end-of-life | Exclude distribution after the declared handoff, retail and consumer refrigeration, consumer preparation, and packaging end-of-life from the foreground dataset unless the study explicitly adds and labels those stages. | `eu-pef-method-2021` |
| `boundary_environmental_releases` | Foreground operations | Include measured direct releases, refrigerant losses, wastewater leaving the site, and solid residues or wastes at the point they cross the foreground or environment boundary; identify their treatment destinations. | `world-bank-fruit-vegetable-processing-1998` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orange_receiving_preparation` | Orange receiving and preparation | conditional | Required when fresh oranges enter the foreground | Foreground fruit receipt, grading, sorting, washing, and preparation | kg accepted oranges |
| `juice_extraction_finishing` | Juice extraction and finishing | conditional | Required when oranges are extracted in the foreground | Foreground extraction, separation, finishing, and optional pulp recovery | kg intermediate orange juice |
| `juice_concentration_storage` | Juice concentration and concentrate storage | conditional | Required when water is removed or concentrate is stored in the foreground | Foreground evaporation, aroma recovery, cooling, and storage | kg orange juice concentrate |
| `juice_reconstitution_blending` | Juice reconstitution and blending | conditional | Required for from-concentrate production or when permitted orange components or ingredients are blended in the foreground | Foreground potable-water addition, standardization, and blending | kg blended orange juice |
| `stabilization_filling_handoff` | Stabilization, filling, and handoff | required | Always required; record only the treatment, filling, bulk loading, cooling, and storage steps actually performed | Final foreground conditioning and reference-product handoff | 1 kg reference orange juice |

### Process: Orange receiving and preparation (`orange_receiving_preparation`)

#### Inputs

##### Product flows

###### Fresh oranges received (`fresh_oranges_received`)

Record the net mass of sound oranges entering the controlled plant. Select a current Tiangong product flow that matches the declared orange species, production geography, and supplier-gate state; do not use the orange juice reference flow for whole fruit.

- Selected flow: Dataset-specific Tiangong product flow for fresh oranges; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg
- Amount rule: Net accepted and rejected fruit mass from calibrated receiving scales before normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference orange juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Fruit-washing water supplied (`fruit_washing_water`)

Record supplied water crossing the process boundary for fruit washing and preparation, net of separately measured internal recirculation.

- Selected flow: Dataset-specific Tiangong water-supply product flow matching source and treatment; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water attributable to received oranges
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference orange juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `world-bank-fruit-vegetable-processing-1998`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared oranges (`prepared_oranges_output`)

Record the fruit mass released to extraction after removal of debris and rejected fruit.

- Selected flow: Internal intermediate product; no external Tiangong flow is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Calculated as received oranges minus measured debris and rejected fruit, reconciled with direct transfer mass where available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted prepared oranges
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Rejected fruit and debris (`rejected_fruit_debris`)

Record each measured destination separately when rejected fruit, leaves, soil, or other debris leaves the preparation process.

- Selected flow: Dataset-specific Tiangong waste flow matching material and treatment destination; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted prepared oranges
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Fruit-washing wastewater (`fruit_washing_wastewater`)

Record wastewater leaving washing after subtracting separately measured recirculation and evaporation; retain pollutant measurements where available.

- Selected flow: Dataset-specific Tiangong wastewater flow matching discharge or treatment destination; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge attributable to fruit preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted prepared oranges
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `world-bank-fruit-vegetable-processing-1998`

##### Elementary flows

### Process: Juice extraction and finishing (`juice_extraction_finishing`)

#### Inputs

##### Product flows

###### Prepared oranges transferred to extraction (`prepared_oranges_input`)

Transfer the reconciled intermediate mass from `prepared_oranges_output` without adding an upstream burden a second time.

- Selected flow: Internal intermediate product; no external Tiangong flow is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Equal to the linked prepared-orange output from the preceding foreground process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg intermediate orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

###### Extraction processing aids and make-up water (`extraction_aids_water`)

Record potable or process water, permitted enzymes, antifoam, filtration aids, and other processing aids only when used and crossing the foreground boundary.

- Selected flow: Separate dataset-specific Tiangong product flow for each used material; every UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Property and reference unit of each selected flow
- Amount rule: Purchased, metered, or batch-dosed quantity by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg intermediate orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxs-247-2005`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Intermediate orange juice (`intermediate_orange_juice`)

Record juice after extraction and finishing before concentration, reconstitution, or final stabilization. Measure mass and °Brix at the defined transfer point.

- Selected flow: Internal intermediate orange juice; use the representative Tiangong reference flow only if the intermediate is also the declared reference product
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass with paired soluble-solids measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg intermediate orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_mass`
- Sources: `codex-cxs-247-2005`; `fao-fruit-juice-processing-2001`

###### Saleable peel, pulp, cells, seeds, oil, or other citrus co-products (`extraction_coproducts`)

Record each exported material with separate mass, product specification, market status, and destination. Material with no economic product function is recorded as waste instead.

- Selected flow: Separate dataset-specific Tiangong product flow for each saleable co-product; every UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg
- Amount rule: Measured exported mass by co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg intermediate orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_allocation`
- Sources: `fao-fruit-juice-processing-2001`

##### Waste flows

###### Extraction residues and wastewater (`extraction_residues_wastewater`)

Record non-saleable peel, pulp, seeds, sludge, and wastewater separately by physical state and treatment destination.

- Selected flow: Separate dataset-specific Tiangong waste or wastewater flow for each material and destination; every UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg for solids; Volume / m3 for wastewater
- Amount rule: Measured mass or discharge volume by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg intermediate orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `fao-fruit-juice-processing-2001`; `world-bank-fruit-vegetable-processing-1998`

##### Elementary flows

### Process: Juice concentration and concentrate storage (`juice_concentration_storage`)

#### Inputs

##### Product flows

###### Juice feed to concentration (`juice_feed_concentration`)

Record the linked juice mass and measured °Brix entering evaporation or another physical concentration operation.

- Selected flow: Internal intermediate product; no external Tiangong flow is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Measured feed mass with paired °Brix
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg orange juice concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_mass`

###### Concentration energy and cooling (`concentration_energy_cooling`)

Record electricity, fuels, steam, heat, cooling media, and refrigerant make-up separately. Do not combine thermal and electrical quantities.

- Selected flow: Separate dataset-specific Tiangong product flow for each energy carrier or utility; every UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Energy, mass, or volume in the selected flow reference unit
- Amount rule: Metered use or documented allocation from equipment and utility records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg orange juice concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Orange juice concentrate (`orange_juice_concentrate`)

Record concentrate mass, °Brix, recovered aroma or volatile components added back, and storage condition.

- Selected flow: Use a current specific Tiangong orange juice concentrate flow when publicly available and semantically matched; otherwise use the representative Orange juice flow with an explicit concentrated-product qualifier
- Flow property / unit: Mass / kg
- Amount rule: Measured concentrate output mass with paired °Brix
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg orange juice concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_mass`
- Sources: `codex-cxs-247-2005`; `fao-fruit-juice-processing-2001`

###### Recovered orange aroma, volatile components, or oil (`concentration_recovered_components`)

Record separately exported recovered components as co-products. Components returned to the same juice batch are internal transfers and are not separate product outputs.

- Selected flow: Dataset-specific Tiangong product flow for each exported component; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg
- Amount rule: Measured exported mass by component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg orange juice concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_allocation`
- Sources: `codex-cxs-247-2005`; `fao-fruit-juice-processing-2001`

##### Waste flows

###### Concentration condensate and cleaning wastewater (`concentration_condensate_wastewater`)

Record condensate reuse as an internal transfer; record only net discharge and its treatment destination as wastewater.

- Selected flow: Dataset-specific Tiangong wastewater flow matching discharge or treatment destination; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Volume / m3
- Amount rule: Metered net discharge after internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg orange juice concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`

##### Elementary flows

###### Refrigerant released during concentration and storage (`concentration_refrigerant_loss`)

Record measured or reconciled refrigerant loss to air by refrigerant identity; do not record refrigerant purchases as direct emissions.

- Selected flow: Dataset-specific Tiangong elementary flow for the released refrigerant; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant inventory balance allocated to concentration and concentrate storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg orange juice concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`

### Process: Juice reconstitution and blending (`juice_reconstitution_blending`)

#### Inputs

##### Product flows

###### Purchased or foreground orange juice concentrate (`concentrate_for_reconstitution`)

Record concentrate mass, supplier or linked foreground dataset, measured °Brix, and whether it is purchased or internally transferred.

- Selected flow: Current specific Tiangong concentrate flow when matched; otherwise the representative Orange juice flow with an explicit concentrate qualifier and upstream dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured concentrate mass charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg blended orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_mass`
- Sources: `codex-cxs-247-2005`

###### Potable reconstitution water (`reconstitution_water`)

Record water added to restore concentrate to the declared product specification. The water supply shall meet the applicable potable-water requirement.

- Selected flow: Dataset-specific Tiangong potable-water product flow matching the supply; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Volume / m3
- Amount rule: Metered batch addition, reconciled with final mass and soluble-solids balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg blended orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_mass`
- Sources: `codex-cxs-247-2005`

###### Permitted orange components, ingredients, and processing aids (`blending_components_aids`)

Record each physically restored orange aroma, volatile component, pulp or cells, permitted ingredient, and processing aid separately. Do not group undeclared materials into a balancing flow.

- Selected flow: Separate dataset-specific Tiangong product flow for each material; every UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Property and reference unit of each selected flow
- Amount rule: Measured batch addition by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg blended orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxs-247-2005`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Blended or reconstituted orange juice (`blended_orange_juice`)

Record final blended mass and measured °Brix before stabilization or handoff.

- Selected flow: Internal intermediate product; use the representative Tiangong flow only if this is the reference-product handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass with paired °Brix and mass-balance reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg blended orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_mass`
- Sources: `codex-cxs-247-2005`

##### Waste flows

###### Off-specification juice and blending losses (`blending_losses`)

Record reworked internal material as an internal transfer; record only net discarded product by destination as waste.

- Selected flow: Dataset-specific Tiangong waste flow matching product state and treatment destination; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg
- Amount rule: Measured net discarded mass after rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg blended orange juice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Elementary flows

### Process: Stabilization, filling, and handoff (`stabilization_filling_handoff`)

#### Inputs

##### Product flows

###### Orange juice entering final conditioning (`juice_for_final_conditioning`)

Record the linked or purchased juice mass, °Brix, temperature, and route status entering the final controlled process.

- Selected flow: Internal intermediate or purchased orange juice matched to a current Tiangong flow; UUID shall be read back when a purchased external flow is selected
- Flow property / unit: Mass / kg
- Amount rule: Measured input mass with paired product-quality record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference orange juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_mass`

###### Final-conditioning energy and cooling (`final_energy_cooling`)

Record electricity, fuels, steam, heat, cooling media, and refrigerant make-up used for pasteurization or other declared preservation, cooling, storage, and filling.

- Selected flow: Separate dataset-specific Tiangong product flow for each utility; every UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Energy, mass, or volume in each selected flow reference unit
- Amount rule: Metered use or documented equipment allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference orange juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `fao-fruit-juice-processing-2001`

###### Packaging materials supplied (`packaging_materials`)

Record primary, secondary, and tertiary packaging included within the declared handoff boundary, including closures and labels, separately by material.

- Selected flow: Separate dataset-specific Tiangong product flow for each packaging material; every UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg or item count with a measured count-to-mass conversion
- Amount rule: Issued packaging minus measured unused returns, normalized by conforming product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference orange juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference orange juice at manufacturer gate (`orange_juice_reference_output`)

This is the quantitative reference. Record conforming net output at the declared bulk or packaged handoff and preserve all required qualifiers.

- Selected flow: Orange juice `858ebbd0-452b-443d-9964-94ee3f2c1c57`; replace with a more specific current public Tiangong flow when it matches the actual declared product more closely
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg after normalization from measured conforming net output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference orange juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Filling rejects, packaging waste, and cleaning wastewater (`filling_wastes_wastewater`)

Record discarded juice, packaging rejects, cleaning residues, and net wastewater separately by material and destination; subtract documented internal reuse.

- Selected flow: Separate dataset-specific Tiangong waste or wastewater flow for each material and destination; every UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg for solids and discarded product; Volume / m3 for wastewater
- Amount rule: Measured waste mass or discharge volume by class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference orange juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `world-bank-fruit-vegetable-processing-1998`

##### Elementary flows

###### Refrigerant released during final cooling and storage (`final_refrigerant_loss`)

Record actual or reconciled refrigerant loss to air by refrigerant identity.

- Selected flow: Dataset-specific Tiangong elementary flow for the released refrigerant; UUID shall be selected and read back when the foreground package is built
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant inventory balance allocated to final conditioning and storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference orange juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output orange juice operations | First avoid allocation by separately metering or subdividing operations that serve only orange juice, peel oil, pulp, dried peel, feed material, pectin feedstock, recovered aroma, or another co-product. Internal recycling or return of pulp, aroma, water, condensate, or rework to the same product route is not a co-product. | `eu-pef-method-2021`; `fao-fruit-juice-processing-2001` |
| `allocation_physical` | Remaining indivisible multi-output processes | Where subdivision is not possible, use a documented causal physical relationship only when it represents how process inputs or operating intensity change with the co-product functions. Mass alone shall not be used merely because it is available. | `eu-pef-method-2021` |
| `allocation_economic` | Co-products without a defensible physical relationship | If no defensible causal physical relationship exists, allocate the remaining shared burden by the relative economic value of co-products using prices and quantities from the same representative period. Disclose zero-price, negative-price, seasonal, or subsidized outputs and test sensitivity when allocation is material. | `eu-pef-method-2021` |
| `allocation_waste_recovery` | Residues, wastes, recycling, energy recovery, and avoided-product claims | Material leaving as waste carries the treatment burden assigned by the selected waste modelling convention. Do not grant an avoided-product credit inside this foreground dataset unless a declared consequential or system-expansion scenario is separately reported with its substitution assumptions. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `orange_receiving_preparation`; `juice_extraction_finishing`; `juice_reconstitution_blending` | Fruit, ingredients, aids, intermediate transfers, rejects, residues, and losses | Scale tickets, batch sheets, inventory issues, and destination records | timestamp; batch_id; material_id; gross_mass; tare_mass; net_mass; route; destination; instrument_id | Calibrated scales and reconciled batch or inventory records | kg | Each batch or receipt | At least 12 representative months, or the full shorter seasonal campaign with season disclosed | Every included facility and outsourced controlled operation | Sum net mass by material and destination; reconcile opening inventory plus receipts against closing inventory plus outputs and losses; normalize after allocation | Scale calibration, batch sign-off, inventory reconciliation, and destination evidence |
| `cp_product_quality_mass` | `juice_extraction_finishing`; `juice_concentration_storage`; `juice_reconstitution_blending`; `stabilization_filling_handoff` | Juice mass, °Brix, route state, pulp, treatment, and handoff quality | Flowmeter or scale records, laboratory results, product specification, and batch release | timestamp; batch_id; input_mass; output_mass; brix; sample_temperature; method; pulp_content; treatment; product_state; release_status | Paired mass and representative product sampling using the applicable analytical method | kg and °Brix | Each batch, tank, or custody-transfer lot | Same period as the inventory | Every included product line and product state | Mass-weight batch results; do not average concentrate and single-strength states without separate strata | Instrument calibration, laboratory method, sample chain, product specification, and release record |
| `cp_utility_records` | `juice_concentration_storage`; `stabilization_filling_handoff` | Electricity, fuels, steam, heat, cooling, and refrigerant balance | Dedicated meters, invoices, equipment logs, and refrigerant service records | timestamp; meter_id; opening; closing; unit; fuel_or_refrigerant_id; purchase; recovery; closing_inventory; operating_hours | Prefer dedicated meters; otherwise allocate shared utilities using a documented engineering driver | Native meter or invoice unit | Continuous or monthly, with batch links where available | At least 12 representative months or the full seasonal campaign | Every included facility and relevant utility system | Subtract non-production use and internal transfers; allocate shared use using the declared driver; convert once and normalize after allocation | Meter calibration, invoices, runtime logs, service records, and allocation calculation |
| `cp_water_wastewater` | `orange_receiving_preparation`; `juice_extraction_finishing`; `juice_concentration_storage`; `stabilization_filling_handoff` | Water supply, internal recirculation, net wastewater, and pollutant load | Supply and discharge meters, cleaning logs, treatment records, and laboratory analyses | timestamp; source; supplied_volume; recirculated_volume; discharged_volume; destination; pollutant; concentration; sample_method | Meter each major water circuit and discharge point; sample pollutants at representative operating conditions | m3 and pollutant-specific units | Continuous or per batch; analyses at permit or risk-based frequency | At least 12 representative months or the full seasonal campaign | Every included facility, discharge point, and outsourced treatment route | Report gross supply, internal recirculation, and net discharge separately; calculate pollutant mass as volume times measured concentration | Meter calibration, sampling plan, laboratory reports, permit records, and treatment receipts |
| `cp_coproduct_allocation` | `juice_extraction_finishing`; `juice_concentration_storage` | Saleable co-product quantity, function, price, and destination | Scale tickets, sales records, specifications, and contracts | timestamp; batch_id; coproduct_id; mass; specification; destination; price; currency; price_basis; revenue | Measure exported quantity and use transaction or contract prices from the same period | kg and currency per declared unit | Each shipment; prices summarized monthly or seasonally | Same representative period as the inventory | All facilities producing co-products | Apply subdivision first; otherwise calculate allocation shares from the selected physical driver or same-period economic values | Scale calibration, invoices, contracts, specification, allocation workbook, and sensitivity record |
| `cp_packaging_records` | `stabilization_filling_handoff` | Primary, secondary, and tertiary packaging | Bills of materials, issue and return records, item counts, and package mass tests | packaging_id; material; items_issued; items_returned; item_mass; filled_units; scrap_mass | Reconcile issued and returned items and verify item mass with representative weighing | item and kg | Each production batch or packaging run | Same representative period as the inventory | Each included packaging configuration and line | Net items used times measured item mass plus measured scrap, divided by conforming product mass | Approved bill of materials, scale calibration, package mass sample, and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground inventory rows | Divide the post-allocation amount by conforming net orange juice output mass in kg; multiply by 1 kg | Post-allocation amount; conforming net product mass | Amount per 1 kg reference orange juice |  |
| `calc_mass_balance` | Each process and the linked foreground route | Reconcile opening inventory plus measured inputs with closing inventory plus measured product outputs, co-products, wastes, emissions, and documented internal transfers; investigate material residuals rather than creating an unlabelled balancing flow | Mass records from `cp_material_mass_balance` and `cp_product_quality_mass` | Process and route mass-balance residual with explanation | `fao-fruit-juice-processing-2001` |
| `calc_reconstituted_juice` | Juice from concentrate | Final batch mass equals concentrate mass plus potable water plus permitted additions minus measured losses; soluble-solids balance shall be checked against measured input and final °Brix | Concentrate mass and °Brix; water; additions; losses; final mass and °Brix | Reconstituted orange juice mass and soluble-solids reconciliation | `codex-cxs-247-2005` |
| `calc_single_strength_equivalent` | Optional cross-concentration result | Single-strength-equivalent mass equals as-sold mass multiplied by measured as-sold °Brix divided by the declared single-strength target °Brix | As-sold mass; measured °Brix; target °Brix | Additional kg single-strength-equivalent result | `codex-cxs-247-2005` |
| `calc_pollutant_load` | Wastewater pollutant releases | Pollutant mass equals net discharged wastewater volume multiplied by representative measured concentration with consistent unit conversion | Discharged volume; measured concentration; sampling period | Pollutant mass by discharge destination | `world-bank-fruit-vegetable-processing-1998` |
| `calc_economic_allocation` | Shared burdens assigned economically | Allocation share for a co-product equals its same-period quantity times price divided by the sum of quantity times price for all co-products; apply the share only to the remaining indivisible burden | Co-product quantities; same-period prices; remaining shared inputs and outputs | Allocated inventory by co-product | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and all external flows | Record flow UUID after exact Tiangong CLI readback, flow property, reference unit, product state, route qualifiers, and upstream dataset identity. Search ranking alone is not evidence. | CLI readback record retained outside the PCR; dataset metadata; supplier and product specifications |
| `dq_temporal` | Foreground activity data | Use at least 12 representative months unless production is seasonal or the site has operated for a shorter period; then cover the full available campaign and disclose omitted seasons, downtime, and abnormal runs. | Dated source records and coverage calculation |
| `dq_technology_geography` | Foreground and upstream data | Match extraction, concentration, preservation, packaging, water, energy, waste treatment, geography, and supplier technology to the declared route; justify every proxy. | Process description, supplier records, selected dataset metadata, and proxy rationale |
| `dq_completeness` | All included processes | Reconcile major material, product, co-product, waste, water, utility, packaging, and direct-emission records; list missing flows and quantify their known coverage where possible. | Mass and utility reconciliations, missing-data register, and destination records |
| `dq_measurement` | Mass, °Brix, water, utilities, emissions, and packaging | Retain instrument identity, calibration or verification status, sampling method, conversion factor, and responsible reviewer for every material measurement family. | Calibration certificates, laboratory methods, invoices, meter logs, and review sign-off |
| `dq_allocation` | Multi-output processes | Retain subdivision evidence, selected allocation relationship, quantities, prices or physical drivers, representative period, and sensitivity results when allocation materially affects the orange juice result. | Allocation workbook, contracts, price records, and sensitivity analysis |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Fail if the actual product is not orange juice, if it is nectar, a drink, a mixed-fruit juice, fermented, or an isolated by-product, or if required product-state qualifiers are missing. | `unsd-cpc-3-2025`; `codex-cxs-247-2005` |
| `validate_reference_mass` | Quantitative reference | Require exactly 1 kg net as-sold orange juice output after normalization, Mass property, kg unit, and the declared generic or more specific read-back Tiangong product flow. |  |
| `validate_route_completeness` | Process coverage | Require every controlled operation between the declared starting condition and handoff. Fresh-fruit routes require receiving and extraction; concentration and reconstitution routes require their applicable processes; all routes require final conditioning or an explicit untreated bulk handoff. | `fao-fruit-juice-processing-2001` |
| `validate_concentration` | Concentrated and from-concentrate products | Require measured input and output mass and °Brix, water additions or removals, applicable Codex or market specification, and a soluble-solids reconciliation. Do not compare concentration states as if 1 kg provided an equal quantity of orange soluble solids. | `codex-cxs-247-2005` |
| `validate_mass_balance` | Each process and the route | Require a documented mass-balance reconciliation covering product, co-products, internal transfers, wastes, wastewater where mass is available, and identified residuals; reject an unexplained balancing flow. | `fao-fruit-juice-processing-2001` |
| `validate_allocation` | Multi-output operations | Require evidence that subdivision was attempted first and that any physical or economic allocation follows the declared hierarchy with same-period data and disclosed sensitivity when material. | `eu-pef-method-2021` |
| `validate_environmental_releases` | Water, waste, and direct emissions | Require net water and wastewater records, treatment destinations, solid-residue destinations, and any direct refrigerant or other measured releases; do not transform purchased inputs into direct emissions. | `world-bank-fruit-vegetable-processing-1998` |
| `validate_upstream_datasets` | Inputs crossing the boundary | Require an appropriate upstream dataset or an explicit unresolved data gap for oranges, purchased juice or concentrate, ingredients, packaging, water, energy, and treatment services; reject recursive duplication of supplier orange-juice operations. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground orange juice production dataset at a declared manufacturer-gate handoff |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed, representative, and accompanied by the required quality disclosure |
| allowed_use | LCA models that match the declared orange juice route, concentration, composition, preservation, packaging boundary, geography, technology, reference period, and handoff state |
| excluded_use | Silent substitution for orange nectar, drinks, mixed-fruit juice, fermented products, isolated citrus by-products, orchard production alone, or orange juice with materially different concentration or processing qualifiers; comparative claims without functional-equivalence review |
| required_metadata | PCR id and version; reference flow UUID and qualifiers; starting condition; included facilities and processes; geography; reference period; product mass and °Brix; pulp, ingredient, preservation, packaging, and handoff state; upstream dataset identities; cut-offs; allocation method; data owners and review status |
| required_quality_disclosure | Temporal, geographical, and technological representativeness; foreground coverage; instrument and sampling quality; mass and soluble-solids reconciliation; missing data and proxies; allocation shares and sensitivity; wastewater, waste, and refrigerant coverage; any added downstream stages |
| update_trigger | Change in starting material, orange specification, concentration or reconstitution route, extraction or stabilization technology, energy or water system, packaging, product °Brix, co-product market, allocation relationship, facility geography, upstream datasets, regulation, or representative period that can materially alter the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, 30 June 2025, subclass 21431. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Classification scope and separation from other fruit juices and mixtures |
| `codex-cxs-247-2005` | standard | FAO/WHO Codex Alimentarius, General Standard for Fruit Juices and Nectars, CXS 247-2005, amended 2025. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B247-2005%252FCXS_247e.pdf (retrieved 2026-08-11) | Orange juice, concentrate, reconstitution, composition, °Brix, processing aids, hygiene, and labelling rules |
| `fao-fruit-juice-processing-2001` | handbook | Bates, R.P., Morris, J.R. and Crandall, P.G. Principles and practices of small- and medium-scale fruit juice processing. FAO Agricultural Services Bulletin 146, 2001, ISBN 92-5-104661-1. https://www.fao.org/4/y2515e/y2515e13.htm (retrieved 2026-08-11) | Orange receiving, washing, extraction, finishing, concentration, pasteurization, storage, by-products, and mass-balance process decomposition |
| `eu-pef-method-2021` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I, 2021. https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02021H2279-20211230 (retrieved 2026-08-11) | Life-cycle boundary, data quality, multifunctionality hierarchy, allocation, recycling, and disclosure |
| `world-bank-fruit-vegetable-processing-1998` | official_guidance | World Bank Group, Pollution Prevention and Abatement Handbook: Fruit and Vegetable Processing, effective July 1998. https://www.ifc.org/content/dam/ifc/doc/1990/fruitandvg-ppah.pdf (retrieved 2026-08-11) | Water, wastewater, solid waste, pollution prevention, discharge monitoring, and treatment-flow identification |
