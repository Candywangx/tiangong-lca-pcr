---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.poultry-fat-rendered
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Poultry fat, rendered

## 1. Scope and Applicability

This PCR applies to poultry-origin fat and grease that have undergone rendering: controlled heating or an equivalent rendering operation followed by separation of the fat phase from water and non-fat solids. The product leaves the reporting facility as rendered poultry fat in a declared commercial state. That state may be crude rendered, filtered or centrifuged. Physical refining or deodorization may remain in scope only when it does not chemically modify the fat and a CPC classification review confirms that the final product remains CPC 21522.

Unrendered poultry fat or adipose tissue is outside this product category and is an upstream raw material, not the reference product. Fats rendered from pigs, cattle, buffaloes, sheep, goats, fish, marine mammals, mixed or unidentified animal species, used cooking oils, and formulated blends whose poultry-fat share cannot be separated are excluded. Animal fats or fractions that are partly or wholly hydrogenated, inter-esterified, re-esterified, elaidinized, or otherwise chemically modified in a way that changes classification are CPC 21590 products and cannot be the CPC 21522 reference output. A separately marketed physical fraction or additive-containing mixture shall undergo a fresh CPC classification determination and shall not default to CPC 21522. Slaughtering, poultry production, distribution, use, and end-of-life are outside the foreground gate-to-gate boundary unless the declared study expands the boundary and reports them separately.

CXS 211-1999 is used only as a negative scope comparison: its named products are lard, rendered pork fat, premier jus, and edible tallow, so its poultry-inapplicable composition and quality values are not adopted here. CXS 329-2017 applies to fish oils and likewise supplies no poultry-fat specification. A data package shall declare the intended food, feed, technical, or other market and the product specification actually applied; this PCR does not establish legal food or feed compliance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.poultry-fat-rendered |
| classification_refs | CPC 3.0: 21522, Poultry fat, rendered |
| covered_products | Fat and grease from poultry that have been rendered and separated; single-poultry-species or declared poultry-species mixtures; crude, filtered, centrifuged, physically refined, or deodorized states only when no chemical modification occurs and CPC 21522 classification is confirmed |
| excluded_products | Unrendered poultry fat or tissue; fats from non-poultry animals; fish or marine-mammal oils; used cooking oils; inseparable mixed-species animal-fat blends; hydrogenated, inter-esterified, re-esterified, elaidinized, or otherwise classification-changing chemically modified animal fats under CPC 21590; separately marketed physical fractions or additive-containing mixtures without a fresh classification decision confirming CPC 21522 |
| representative_product | Bulk rendered poultry fat at the rendering or finishing facility gate |
| production_route | Receipt of poultry-origin fat-bearing material; preparation; thermal rendering or equivalent fat release; fat/solids/water separation; clarification; optional non-chemical physical refining or deodorization; cooling, storage, and dispatch |
| market_state | Bulk liquid, semi-solid, or solid rendered poultry fat at a declared reference temperature; intended market, poultry species, crude/filtered/centrifuged/physically refined/deodorized state, packaging state, applicable quality specification, chemical-modification status, and any required CPC reclassification decision declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Rendered poultry fat supplied at the reporting facility gate |
| How much | 1 kg net mass of rendered poultry fat |
| How well | Poultry origin confirmed; rendering and separation completed; crude, filtered, centrifuged, physically refined, or deodorized state declared as applicable; no hydrogenation, inter-esterification, re-esterification, elaidinization, or other classification-changing chemical modification; a separately marketed physical fraction or additive-containing mixture accepted only after a fresh classification decision confirms CPC 21522; conformance assessed against the producer's declared market specification rather than CXS 211-1999 or CXS 329-2017 |
| How long or cycle | One production lot at dispatch; no service-life function is assigned |
| reference_flow_link | `poultry_fat_rendered_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Poultry fat, rendered `d37d81e1-9262-437f-ac04-7a190b4a1756` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | poultry species or declared species mixture; rendered state; crude/filtered/centrifuged/physically refined/deodorized state; intended market; reference temperature or physical state; chemical-modification status; physical-fraction or additive-mixture status and CPC classification decision if applicable; packaging state; facility geography; production period; applied product specification |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | final rendered poultry fat | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net product mass after the last in-scope physical finishing step and before or at dispatch. Exclude packaging tare. Normalize all inventory results to 1 kg of this mass. |
| `material_mass_basis` | poultry raw material, intermediate fat, co-products, residues, wastes, and packaging | Mass | kg | Record actual wet or as-received mass and identify the material state. Do not convert to dry matter or lipid content without retaining the measured mass, test result, and conversion formula. |
| `energy_accounting` | purchased electricity, fuels, steam, heat, and recovered energy | Energy | kWh and original invoice or meter unit | Preserve carrier-specific quantities. Convert to kWh with documented factors; calculate final net energy as consumed heat plus electricity minus recovered energy exported or reused outside the measured process boundary. |
| `water_accounting` | water withdrawal, supplied water, reused water, and waste water | Volume | m3 | Meter or calculate each stream separately. Do not subtract reused water from gross withdrawal without disclosing both quantities, and do not treat waste-water volume as water consumption. |
| `air_emission_mass` | TVOC, NH3, H2S, and other measured channelled emissions | Mass | kg | Convert concentration and standardized gas-flow records to emitted mass for the matching operating period, then normalize to the reference product. Concentration values alone are not LCI mass flows. |

## 5. System Boundary

The foreground boundary begins when separately identified poultry-origin fat-bearing raw material is received at the rendering facility. It includes receiving and storage losses, size reduction or preparation, thermal rendering or equivalent fat release, mechanical separation, clarification, internal transfers, cleaning, on-site utilities, emission control, waste-water handling, cooling, product storage, and dispatch preparation. Non-chemical physical refining or deodorization is included only when performed before the declared product gate and classification review confirms that the final product remains CPC 21522. Hydrogenation, inter-esterification, re-esterification, elaidinization, and other classification-changing chemical modification are outside this PCR; the CPC 21522 product gate must be placed before such operations.

The foreground boundary ends with 1 kg of conforming rendered poultry fat at the declared facility gate. Upstream poultry production, slaughtering, and production of the received raw material are represented by linked upstream datasets; they shall not be assumed burden-free merely because the input is called a by-product, co-product, residue, or waste. Downstream distribution, use, further formulation, and end-of-life are excluded unless an expanded study reports them separately.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Separately identified poultry-origin fat-bearing material received at the rendering facility, with supplier, species, material description, prior processing, preservation state, mass, and upstream classification declared |
| starting_condition_role | Upstream product, co-product, by-product, residue, or waste input whose assigned upstream burdens and status are preserved from a documented upstream dataset |
| product_classification_scope | Rendered poultry fat under CPC 21522 only; unrendered poultry fat remains an upstream input; chemically modified animal fats under CPC 21590 are excluded; separately marketed physical fractions and additive-containing mixtures require a fresh CPC determination before any CPC 21522 claim |
| recursive_input_rule | Purchased rendered poultry fat used for blending or reprocessing remains an explicit same-category product input linked to a separate upstream dataset; disclose its mass share and do not recursively embed this PCR or count its production twice |
| upstream_dataset_requirement | Provide representative upstream datasets for all received raw materials, energy carriers, water supplies, chemicals, packaging, and external treatment; disclose zero-burden or cut-off treatment with the governing method and evidence |
| disclosure | Declare poultry species, raw-material status, prior processing, rendering technology, included physical refining or deodorization, chemical-modification status, any physical-fraction or additive-mixture classification decision, product specification, intended market, allocation method, temporal and geographic coverage, abnormal operating periods, treatment routes, and all deviations from this boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rendered_state` | reference product and raw-material entry | The reference product shall have undergone rendering and fat-phase separation. Unrendered poultry fat or tissue shall be recorded only as an input and shall never be used as the reference output. | `unsd-cpc-3-0-exp-notes-2025` |
| `boundary_core_operations` | foreground rendering facility | Include the operations and controls directly required to receive, render, separate, clarify, cool, store, and dispatch the declared product, plus associated energy, water, waste-water, waste-gas, residue, and treatment flows. | `eu-sa-bat-2023-2749` |
| `boundary_bat_scope_routing` | environmental performance guidance | Do not apply FDM sector performance levels to rendering or fat melting. The FDM BAT explicitly routes these operations to the slaughterhouses and animal by-products BAT, which is the process source used here. | `eu-fdm-bat-2019-2031`, `eu-sa-bat-2023-2749` |
| `boundary_optional_refining` | physical refining or deodorization | Include only non-chemical physical refining or deodorization performed before the declared gate and only after confirming that its output remains CPC 21522. Identify the operation and exclude any classification-changing chemical modification. | `unsd-cpc-3-0-exp-notes-2025` |
| `boundary_chemical_modification_exclusion` | final product classification | If the final animal fat or a fraction is partly or wholly hydrogenated, inter-esterified, re-esterified, elaidinized, or otherwise chemically modified in a classification-changing way, stop the CPC 21522 workflow: the output is outside this PCR and shall be classified under CPC 21590. | `unsd-cpc-3-0-exp-notes-2025` |
| `boundary_fraction_mixture_reclassification` | separately marketed physical fractions and additive-containing mixtures | Do not inherit CPC 21522 from the rendered poultry-fat feed. Perform a fresh CPC classification determination; without documented confirmation of CPC 21522, the output cannot be this PCR's reference product. | `unsd-cpc-3-0-exp-notes-2025` |
| `boundary_upstream_linkage` | received poultry material and other purchased inputs | Link each received input to an upstream dataset with its actual status and allocation. A waste or by-product label does not by itself authorize zero upstream burden. | `eu-pef-2021-2279` |
| `boundary_codex_limit` | product specification | Do not apply CXS 211-1999 named-fat composition or quality limits or CXS 329-2017 fish-oil requirements to rendered poultry fat. They are scope comparisons only. | `codex-cxs-211-1999`, `codex-cxs-329-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_preparation` | Raw-material receipt and preparation | required | Always included from facility receipt through prepared feed to rendering | Foreground receipt, storage, sorting, and preparation | Mass of poultry-origin raw material received and transferred to rendering |
| `rendering_fat_separation` | Rendering and fat separation | required | Always included | Foreground heating, fat release, phase separation, and associated environmental controls | Mass of raw material processed and crude rendered fat separated |
| `additional_refining` | Physical refining or deodorization | conditional | Include only for non-chemical physical refining or deodorization when documented classification review confirms the final product remains CPC 21522; chemical modification and unconfirmed separately marketed fractions or additive mixtures are outside this PCR | Foreground physical purification without classification-changing chemical modification | Mass of rendered fat entering and physically refined or deodorized fat leaving the included operation |
| `finishing_storage_dispatch` | Clarification, cooling, storage, and dispatch | required | Always include the actual post-rendering finishing and dispatch route; packaging is conditional | Foreground finishing and product-gate definition | 1 kg net rendered poultry fat at the facility gate |

### Process: Raw-material receipt and preparation (`raw_material_receipt_preparation`)

#### Inputs

##### Product flows

###### Poultry-origin fat-bearing raw material (`poultry_raw_material_input`)

Record every separately supplied poultry fat, fatty tissue, skin/fat trimming, or other declared fat-bearing poultry stream at facility receipt. Keep species, supplier, prior processing, preservation state, and upstream status with the exchange.

- Selected flow: Poultry-origin fat-bearing raw material
- Flow property / unit: Mass / kg
- Amount rule: foreground received mass allocated to the production lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

###### Preparation electricity (`preparation_electricity`)

Record metered or allocated electricity for receiving, chilled or heated holding, pumping, size reduction, and preparation.

- Selected flow: Electricity, supplier-specific or geography-appropriate grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity attributable to receipt and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared poultry rendering feed (`prepared_poultry_feed`)

Record the mass transferred to rendering as an internal product flow so that storage and preparation losses remain visible.

- Selected flow: Prepared poultry-origin rendering feed
- Flow property / unit: Mass / kg
- Amount rule: measured batch mass transferred to rendering
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

##### Waste flows

###### Receipt and preparation rejects (`preparation_rejects`)

Record contamination, spoiled material, spill recovery, and other rejected material by treatment route. Do not combine reusable co-products with wastes.

- Selected flow: Poultry-material preparation rejects, route-specific
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

##### Elementary flows

### Process: Rendering and fat separation (`rendering_fat_separation`)

#### Inputs

##### Product flows

###### Prepared poultry rendering feed input (`prepared_feed_input`)

Record the prepared internal feed entering the rendering equipment.

- Selected flow: Prepared poultry-origin rendering feed
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged to rendering
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

###### Rendering electricity (`rendering_electricity`)

Record electricity for rendering, pumping, centrifugation, pressing, separation, ventilation, and directly associated controls.

- Selected flow: Electricity, supplier-specific or geography-appropriate grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity attributable to rendering and separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Rendering fuel, steam, or purchased heat (`rendering_thermal_energy`)

Record each thermal-energy carrier separately in its original unit and convert it to kWh for the net-energy indicator without replacing the carrier-specific LCI exchange.

- Selected flow: Site-specific fuel, steam, or purchased heat carrier
- Flow property / unit: Energy / kWh after documented conversion; original unit retained
- Amount rule: measured carrier consumption attributable to rendering and separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Rendering and cleaning water (`rendering_water`)

Record supplied water used directly in rendering, equipment cleaning, and emission-control systems, separating source and reuse where records permit.

- Selected flow: Water supply by source
- Flow property / unit: Volume / m3
- Amount rule: measured gross withdrawal and supplied water attributable to rendering and separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude rendered poultry fat (`crude_rendered_poultry_fat`)

Record separated fat before any conditional physical refining or deodorization and before final dispatch adjustment.

- Selected flow: Crude rendered poultry fat
- Flow property / unit: Mass / kg
- Amount rule: measured separated-fat mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

###### Proteinaceous solids and other saleable co-products (`rendering_coproducts`)

Record each saleable or internally used non-fat output separately, with composition, destination, and co-product status. Material sent for disposal or recovery as waste belongs in the waste row instead.

- Selected flow: Route-specific rendering co-product
- Flow property / unit: Mass / kg
- Amount rule: measured mass by co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

##### Waste flows

###### Rendering residues and separated sludge (`rendering_residues`)

Record non-saleable solids, sludge, and other residues by composition and treatment route.

- Selected flow: Rendering residue or sludge, route-specific
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to each treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

###### Rendering waste water (`rendering_wastewater`)

Record the volume leaving the rendering system for on-site or external treatment. The official range below is an annual installation-level BAT screening range for the combined rendering, fat-melting, blood, and feather process group, not a poultry-specific default and not a substitute for foreground measurement.

- Selected flow: Waste water to declared treatment route
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume attributable to rendering and separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg poultry raw material processed, with conversion also reported per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources: `eu-sa-bat-2023-2749`
- Range: BAT installation-level waste-water discharge screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0002
  - Upper: 0.00155
  - Unit: m3/kg raw material
  - Basis: annual waste-water discharge divided by raw material processed for the official rendering/fat-melting/blood/feather process group
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-sa-bat-2023-2749`

##### Elementary flows

###### Channelled total volatile organic compounds (`rendering_tvoc_air`)

Record TVOC emitted to air as mass, calculated from representative concentration, standardized gas flow, and operating time. Keep the monitoring point and abatement state.

- Selected flow: Non-methane volatile organic compounds or facility-specific TVOC elementary flow
- Flow property / unit: Mass / kg
- Amount rule: calculated emitted mass from matched monitoring and gas-flow records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_gas_monitoring`
- Sources: `eu-sa-bat-2023-2749`

###### Ammonia to air (`rendering_ammonia_air`)

Record NH3 emitted to air when relevant to the identified waste-gas stream, using mass rather than concentration as the LCI amount.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated emitted mass from matched monitoring and gas-flow records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_gas_monitoring`
- Sources: `eu-sa-bat-2023-2749`

###### Hydrogen sulphide to air (`rendering_h2s_air`)

Record H2S emitted to air only when identified as relevant in the site waste-gas inventory, using mass rather than concentration as the LCI amount.

- Selected flow: Hydrogen sulphide to air
- Flow property / unit: Mass / kg
- Amount rule: calculated emitted mass from matched monitoring and gas-flow records when H2S is relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_gas_monitoring`
- Sources: `eu-sa-bat-2023-2749`

### Process: Physical refining or deodorization (`additional_refining`)

#### Inputs

##### Product flows

###### Rendered fat entering physical refining or deodorization (`rendered_fat_for_refining`)

Record this internal input only when a non-chemical physical refining or deodorization route is included and the classification gate confirms that the route may retain CPC 21522.

- Selected flow: Crude or conditioned rendered poultry fat
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the included physical refining or deodorization operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

###### Physical-refining energy and non-incorporated process aids (`refining_inputs`)

Disaggregate electricity, heat, steam, water, adsorbents, filter media, and other non-incorporated physical-refining aids into separate LCI exchanges in the produced dataset. This grouped PCR row defines the collection requirement and does not authorize hydrogenation reagents, esterification catalysts, additives incorporated into the product, or a generic default amount.

- Selected flow: Actual physical-refining energy carriers, water, steam, adsorbents, filter media, and non-incorporated process aids, separately identified
- Flow property / unit: Carrier-appropriate property and unit
- Amount rule: measured quantity of each input to the included physical refining or deodorization operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_input_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Physically refined or deodorized rendered poultry fat (`conditioned_rendered_fat`)

Record the internal output with the exact physical treatment state and documented confirmation that no classification-changing chemical modification occurred. A separately marketed physical fraction or additive-containing mixture cannot use this row without a fresh decision confirming CPC 21522.

- Selected flow: Physically refined or deodorized rendered poultry fat, CPC 21522 classification confirmed
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the included physical refining or deodorization operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

##### Waste flows

###### Refining residues and waste water (`refining_residues_wastewater`)

Disaggregate spent adsorbent, filter residue, deodorizer distillate, waste water, and other physical-refining outputs by flow type and treatment route in the produced dataset.

- Selected flow: Actual refining residue or waste-water stream, separately identified
- Flow property / unit: Mass / kg or Volume / m3 as appropriate
- Amount rule: measured quantity by stream and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_input_records`

##### Elementary flows

### Process: Clarification, cooling, storage, and dispatch (`finishing_storage_dispatch`)

#### Inputs

##### Product flows

###### Rendered fat entering final finishing (`rendered_fat_for_finishing`)

Record crude rendered fat or an in-scope physically refined or deodorized output entering the final clarification, cooling, storage, and dispatch route. Do not accept a chemically modified product or an unclassified separately marketed physical fraction or additive-containing mixture.

- Selected flow: Rendered poultry fat before final finishing
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering final finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

###### Finishing and storage electricity (`finishing_electricity`)

Record electricity for polishing, pumping, cooling or heating, storage temperature control, and dispatch.

- Selected flow: Electricity, supplier-specific or geography-appropriate grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity attributable to finishing, storage, and dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Product packaging (`product_packaging`)

Record drums, intermediate bulk containers, liners, pallets, or other packaging only when included at the declared gate. Bulk unpackaged dispatch records zero packaging and declares that state.

- Selected flow: Packaging material by material and component
- Flow property / unit: Mass / kg
- Amount rule: measured packaging placed on dispatched product, net of reusable packaging managed outside the product system as documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rendered poultry fat reference product (`poultry_fat_rendered_reference`)

This is the final reference output after all in-scope operations and before downstream transport. It shall contain no classification-changing chemical modification; any separately marketed physical fraction or additive-containing mixture requires a documented decision confirming CPC 21522.

- Selected flow: Poultry fat, rendered `d37d81e1-9262-437f-ac04-7a190b4a1756`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net product mass after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Finishing losses and off-specification fat (`finishing_losses`)

Record filter residues, tank bottoms, spills, and off-specification fat by actual reuse, rework, co-product, or treatment route.

- Selected flow: Finishing residue or off-specification rendered fat, route-specific
- Flow property / unit: Mass / kg
- Amount rule: measured mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_identity`

##### Elementary flows

###### Refrigerant leakage (`storage_refrigerant_leakage`)

Record refrigerant leakage when refrigeration is used for raw-material or product storage. Keep the refrigerant identity and calculation evidence.

- Selected flow: Refrigerant emission to air by substance
- Flow property / unit: Mass / kg
- Amount rule: measured recharge minus documented recovery and inventory change, or direct leak measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rendered poultry fat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-sa-bat-2023-2749`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | separable rendering, refining, utility, and treatment operations | First use direct metering, batch segregation, or process subdivision to assign inputs and outputs to rendered poultry fat and other products; retain only directly attributable inventory where subdivision is feasible. | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | shared processes that cannot be subdivided or expanded | If subdivision or system expansion is not feasible, use a relevant and quantifiable physical relationship that reflects how shared inputs and emissions relate to the outputs. Do not default to mass merely because mass data are available; justify the selected relationship. | `eu-pef-2021-2279` |
| `allocation_other_relationship` | multifunctionality without a defensible physical relationship | Use another relationship, such as economic allocation at the point and conditions where co-products arise, only after documenting why subdivision, system expansion, and physical allocation are not applicable; report data period, prices, allocation shares, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_upstream_status` | poultry fat-bearing raw material | Preserve the upstream dataset's product, co-product, by-product, residue, or waste status and assigned burden. Do not assign zero upstream burden solely from terminology or local disposal cost. | `eu-pef-2021-2279` |
| `allocation_output_classification` | proteinaceous solids, recovered material, residues, and energy recovery | Classify an output as co-product only when it has a documented function and destination. Otherwise model it as waste with the actual treatment route. Avoided-product credits require the chosen study method, evidence of substitution, and separate disclosure. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_and_identity` | raw_material_receipt_preparation; rendering_fat_separation; additional_refining; finishing_storage_dispatch | received raw material, internal transfers, product, co-products, rejects, residues, losses | weighbridge, scale, tank-level, batch, dispatch, supplier, and laboratory records | timestamp; batch; supplier; poultry species; material description; prior processing; preservation state; upstream status; gross; tare; net mass; internal transfer; product state; destination | Calibrated mass measurement reconciled to batch and inventory changes; use tank-volume conversion only with measured density and temperature | kg | Each receipt, batch, transfer, and dispatch | Representative continuous period, normally at least 12 months; shorter campaigns disclosed | Every included rendering and finishing site | Sum net masses by homogeneous route and period; reconcile opening/closing stock; normalize to conforming product mass | Calibration records, weigh tickets, batch sheets, stock reconciliation, supplier declarations, and product test records |
| `cp_energy_records` | raw_material_receipt_preparation; rendering_fat_separation; finishing_storage_dispatch | electricity, fuels, steam, purchased heat, recovered energy | submeter, main meter, fuel invoice, steam/heat meter, and energy-recovery records | meter id; reading time; carrier; quantity; unit; calorific value or conversion factor; process assignment; recovered energy; operating hours | Prefer process submeters; otherwise allocate shared meters using documented operating data and disclose the basis | Original unit and kWh | At least monthly, with batch or shift records where available | Same period as product mass; seasonal coverage required | Every included site and utility system | Convert carriers separately to kWh; sum consumed heat and electricity; subtract only documented recovered energy consistent with the net-energy definition | Meter calibration, invoices, conversion-factor source, allocation worksheet, and energy balance |
| `cp_water_and_wastewater_records` | rendering_fat_separation; additional_refining; finishing_storage_dispatch | water withdrawal, supplied water, reused water, and waste-water discharge | water and effluent meters, treatment records, and sampling logs | source; meter id; volume; reuse loop; discharge point; destination; flow; pH; temperature; COD/TOC; nitrogen; phosphorus; sampling time | Meter volumes at key points and sample relevant quality parameters for identified streams | m3 and parameter-specific units | Continuous or batch volume totals; quality frequency appropriate to permit and process variability | Same period as product mass, including cleaning and abnormal events | Every included site, water source, and discharge route | Report gross withdrawal, supplied water, reuse, and discharge separately; calculate intensity per kg raw material and per kg reference product | Meter calibration, laboratory reports, discharge records, treatment logs, and water balance |
| `cp_waste_gas_monitoring` | rendering_fat_separation | TVOC, NH3, H2S, odour, gas flow, temperature, and abatement | stack test, continuous or periodic monitoring, operating log, and abatement record | emission point; pollutant; concentration; standard conditions; gas flow; temperature; moisture; oxygen correction; operating time; production; abatement state; abnormal operation | Use applicable recognized methods and match concentration, gas flow, and operating time at representative conditions | mg/Nm3, Nm3/h, h, and kg | Legal or BAT-consistent frequency plus representative operating-condition coverage | Same production period, including identified abnormal operation | Every relevant emission point at included sites | Calculate pollutant mass by matched concentration and standardized gas volume; aggregate points and normalize to product mass | Laboratory accreditation, method reference, calibration, raw stack-test report, flow record, and operating log |
| `cp_refining_input_records` | additional_refining | energy, water, steam, adsorbents, filter media, non-incorporated process aids, residues, and waste water | batch recipe, dosing meter, inventory, purchase, utility, classification-review, and waste records | operation; batch; input identity; quantity; concentration; recycled share; output identity; physical treatment state; chemical-modification confirmation; CPC decision; residue; waste-water volume; destination | Record each actual physical-refining flow separately, reconcile material entering and leaving, and stop CPC 21522 production if chemical modification occurs or classification is not confirmed | Carrier-appropriate unit | Each batch or production campaign | All included physical-refining or deodorization campaigns in the reporting period | Each included physical-refining line | Sum by flow and route, reconcile stock, and normalize only confirmed CPC 21522 final product mass | Dosing calibration, batch sheet, certificate, invoice, stock reconciliation, classification decision, and waste manifest |
| `cp_packaging_records` | finishing_storage_dispatch | primary, secondary, tertiary, and reusable packaging | bill of materials, purchase, packing, return, and dispatch records | component; material; unit mass; units used; product mass; recycled content claim; return rate; reuse cycles; disposal responsibility | Weigh representative components and reconcile to packed dispatch quantities | kg | Each packaging specification and monthly reconciliation | Same period as packaged output | Each included dispatch site | Calculate packaging mass per kg packed product; report zero for verified bulk unpackaged output | Packaging specifications, scale records, purchase/dispatch reconciliation, and return records |
| `cp_refrigerant_records` | raw_material_receipt_preparation; finishing_storage_dispatch | refrigerant leakage | equipment inventory, recharge, recovery, maintenance, and leak-detection records | refrigerant; equipment; opening charge; additions; recovered quantity; closing charge; event; date | Mass balance by refrigerant and equipment, supplemented by direct leak detection where available | kg | Each service event and annual reconciliation | Reporting period and rolling history where available | All refrigeration equipment serving included operations | Additions minus documented recovery and inventory increase; normalize by product mass | Service invoices, cylinder weights, leak alarms, equipment register, and reconciliation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory exchanges | normalized exchange = period exchange × 1 kg / net conforming rendered poultry fat dispatched in the same allocation period | period exchange; conforming product mass; stock changes; allocation share | exchange per 1 kg rendered poultry fat |  |
| `calc_mass_balance` | each process and the whole foreground system | Reconcile measured input mass with product, co-products, wastes, waste water where mass is available, stock change, and quantified losses. Investigate differences exceeding the facility's documented measurement uncertainty; do not insert an unmeasured balancing flow without disclosure. | input masses; output masses; stock change; water content where used; measurement uncertainty | mass-balance closure and unresolved difference |  |
| `calc_net_energy_intensity` | rendering and fat-melting installation | final net energy intensity = (consumed heat + electricity - recovered energy) / raw material processed. For facilities within the source applicability, compare the annual result with 0.12-0.91 kWh/kg raw material; the range covers the combined rendering, fat-melting, blood, and feather process group and is a QA screen, not a poultry-specific default. | carrier-specific energy records; recovered energy; raw material mass | kWh/kg raw material and per-reference-product conversion | `eu-sa-bat-2023-2749` |
| `calc_wastewater_intensity` | rendering and fat-melting installation | waste-water intensity = annual discharged waste-water volume / annual raw material processed. For facilities within the source applicability, compare with 0.0002-0.00155 m3/kg raw material and disclose differences in scope or process mix. | discharged waste-water volume; raw material mass | m3/kg raw material and per-reference-product conversion | `eu-sa-bat-2023-2749` |
| `calc_channelled_air_emission` | each monitored emission point and pollutant | emitted mass = corrected concentration × standardized dry gas volume over the matching operating period, with unit conversion; sum relevant points and normalize to reference product mass. Keep odour concentration as additional information rather than an LCI mass flow. | concentration; gas flow; operating time; correction basis; product mass | kg pollutant/kg reference product | `eu-sa-bat-2023-2749` |
| `calc_allocation_shares` | shared multifunctional operations | Apply the declared hierarchy: subdivision or system expansion first, then a relevant physical relationship, then another justified relationship. Allocation shares shall sum to one for the allocated inventory and use data from the co-production point and reporting period. | direct metering; output quantities; physical relationship data; co-product values; selected method | allocated exchange quantities and allocation shares | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and raw material | Confirm poultry origin and distinguish unrendered input from rendered output. Confirm that no hydrogenation, inter-esterification, re-esterification, elaidinization, or other classification-changing chemical modification occurred. For a separately marketed physical fraction or additive-containing mixture, retain the fresh CPC classification decision. Declare species mixture, product state, intended market, and actual specification without claiming CXS 211-1999 or CXS 329-2017 conformance. | Supplier declarations, receiving records, process records, classification decision, product description, and applicable specification |
| `dq_reference_measurement` | product mass and normalization | Use calibrated net-mass measurement, exclude packaging tare, reconcile stock, and match the reporting period used for inputs and outputs. | Calibration certificate, weigh or tank records, dispatch data, and stock reconciliation |
| `dq_temporal_representativeness` | foreground activity data | Cover representative operating conditions and seasonality, normally at least 12 consecutive months. If a shorter campaign is used, disclose dates, reason, and representativeness limits. | Dated meter, batch, purchase, production, and maintenance records |
| `dq_process_completeness` | rendering route | Include all actual foreground steps, utilities, water, treatment, co-products, wastes, and relevant emissions; document omitted flows and show they are immaterial under the chosen study rule. | Process flow diagram, input/output inventory, meter map, waste manifests, and omission assessment |
| `dq_source_applicability` | BAT energy, waste-water, and air screens | Verify installation, process-group, averaging period, denominator, emission-point, and abatement applicability before using a BAT range. Never use a concentration range as an LCI mass quantity. | Applicability memo, calculation worksheet, monitoring report, and source citation |
| `dq_allocation_transparency` | multifunctional operations and upstream raw material | Record the allocation hierarchy step, data, shares, co-product status, price period when relevant, and sensitivity. Preserve rather than overwrite the upstream dataset's assigned burdens. | Allocation worksheet, contracts or price records, mass/energy relationships, upstream metadata, and sensitivity results |
| `dq_geographic_technology_fit` | upstream and foreground datasets | Select energy, water, transport, treatment, and material datasets representative of the actual geography, technology, and period; disclose proxies and substitution triggers. | Dataset metadata, supplier evidence, technology description, and proxy register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_rendered_scope` | product identity | Reject the data package if the reference output is unrendered poultry fat or tissue, non-poultry fat, fish oil, marine-mammal oil, used cooking oil, or an inseparable mixed-species fat blend. | `unsd-cpc-3-0-exp-notes-2025`, `codex-cxs-329-2017` |
| `validate_reference_identity` | reference flow | Require exactly 1 kg after normalization, product-flow UUID `d37d81e1-9262-437f-ac04-7a190b4a1756`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg, with every required qualifier present. |  |
| `validate_route_boundary` | foreground process inventory | Require receipt/preparation, rendering/fat separation, and finishing/storage/dispatch records. Require physical-refining or deodorization records only when that non-chemical operation is included and the final product is confirmed as CPC 21522. Do not extend this PCR through a classification-changing chemical modification. | `eu-sa-bat-2023-2749`, `unsd-cpc-3-0-exp-notes-2025` |
| `validate_chemical_modification_exclusion` | final product and production route | Fail CPC 21522 conformance if the final animal fat or fraction is partly or wholly hydrogenated, inter-esterified, re-esterified, elaidinized, or otherwise chemically modified in a classification-changing way. Route the output to CPC 21590 and do not use the CPC 21522 reference-flow UUID for it. | `unsd-cpc-3-0-exp-notes-2025` |
| `validate_fraction_mixture_classification` | separately marketed physical fraction or additive-containing mixture | Require a fresh documented CPC classification decision. If CPC 21522 is not explicitly confirmed, or the decision is absent, the output cannot be the reference product under this PCR. | `unsd-cpc-3-0-exp-notes-2025` |
| `validate_upstream_linkage` | poultry raw material and purchased inputs | Require an upstream dataset and status/allocation disclosure for each material input. Flag an unexplained zero-burden poultry raw material as non-conforming. | `eu-pef-2021-2279` |
| `validate_mass_balance` | each foreground process and total system | Require reconciled input, product, co-product, waste, stock-change, and loss masses within documented measurement uncertainty; unresolved differences shall be reported and shall make validation inconclusive rather than silently balanced. |  |
| `validate_energy_screen` | annual rendering installation energy | Calculate final net energy on the source denominator before comparing with 0.12-0.91 kWh/kg raw material. A result outside the range triggers investigation, not automatic replacement; skip the comparison with an explicit reason when installation or process-group applicability differs. | `eu-sa-bat-2023-2749` |
| `validate_wastewater_screen` | annual rendering installation waste water | Calculate 0.0002-0.00155 m3/kg raw material as the applicable official screening range. A result outside it triggers investigation, not substitution; skip with an explicit reason when applicability differs. | `eu-sa-bat-2023-2749` |
| `validate_air_emissions` | relevant rendering waste-gas streams | Require TVOC and NH3 relevance assessment and H2S relevance assessment; when monitored, convert concentration and standardized gas flow to mass. Do not enter odour units or mg/Nm3 directly as kg elementary flows. | `eu-sa-bat-2023-2749` |
| `validate_allocation` | multifunctional foreground system | Require the allocation hierarchy, selected relationship, shares, co-product/waste status, and sensitivity to be documented. Allocation shares for each allocated inventory block shall sum to one. | `eu-pef-2021-2279` |
| `validate_codex_non_extension` | product quality claims | Reject any poultry-fat composition, fatty-acid, quality, or contaminant limit copied from CXS 211-1999 or fish-oil rule copied from CXS 329-2017 unless an independent poultry-applicable source is cited and the scope is explicitly justified. | `codex-cxs-211-1999`, `codex-cxs-329-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for rendered poultry fat at a declared facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology, representativeness, and review requirements are met |
| allowed_use | LCA of food, feed, oleochemical, fuel, or other systems that use rendered poultry fat when species, market, product state, boundary, allocation, geography, technology, and period match the study |
| excluded_use | Unrendered poultry fat; non-poultry or mixed unidentified animal fat; hydrogenated, inter-esterified, re-esterified, elaidinized, or otherwise classification-changing chemically modified animal fat under CPC 21590; separately marketed physical fractions or additive-containing mixtures without a fresh CPC 21522 confirmation; automatic food/feed legal compliance; poultry slaughter dataset; default use of BAT concentration values as LCI amounts |
| required_metadata | PCR id and version; product and flow UUIDs; poultry species; raw-material identity and upstream status; rendering and optional physical-refining or deodorization technology; product state and intended market; chemical-modification confirmation; classification decision for any separately marketed physical fraction or additive-containing mixture; facility geography; period; reference temperature/physical state; packaging state; system boundary; allocation method and shares; upstream datasets; treatment routes |
| required_quality_disclosure | Measurement and calibration basis; mass balance; temporal coverage; process completeness; BAT applicability; energy and waste-water intensities; emission calculation methods; allocation sensitivity; proxy datasets; uncertainty; abnormal operations; exclusions and deviations |
| update_trigger | New poultry-specific official specification or PCR; change in Tiangong identity; rendering or physical-refining technology or boundary change; chemical modification, physical fraction, additive mixture, or CPC classification change; species or market change; material allocation or upstream-status change; new representative foreground evidence; sustained movement outside applicable BAT screens; source revision; reviewer correction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-exp-notes-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-12 | Product identity; rendered-versus-unrendered poultry-fat boundary; CPC 21590 exclusion for hydrogenated, inter-esterified, re-esterified, or elaidinized animal fats; reclassification gate for classification-changing outputs |
| `codex-cxs-211-1999` | Standard (`standard`) | Codex Alimentarius, CXS 211-1999, Standard for Named Animal Fats, amended 2024, https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf, retrieved 2026-08-12 | Negative scope comparison only: named pork, bovine, and sheep fats; no poultry composition or quality limits imported |
| `codex-cxs-329-2017` | Standard (`standard`) | Codex Alimentarius, CXS 329-2017, Standard for Fish Oils, amended 2024, https://workspace.fao.org/sites/codex/Standards/CXS%20329-2017/CXS_329e.pdf, retrieved 2026-08-12 | Negative scope comparison only: fish oils are outside this PCR; no fish-oil rules imported |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-12 | Multifunctionality hierarchy, subdivision, physical allocation, other allocation relationships, data transparency, and upstream linkage |
| `eu-fdm-bat-2019-2031` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2019/2031, BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj, retrieved 2026-08-12 | Scope routing only: rendering and fat melting are excluded from FDM BAT and directed to slaughterhouses and animal by-products BAT; no FDM sector performance values used |
| `eu-sa-bat-2023-2749` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2023/2749, BAT conclusions for slaughterhouses, animal by-products and/or edible co-products industries, https://eur-lex.europa.eu/eli/dec_impl/2023/2749/oj, retrieved 2026-08-12 | Rendering and fat-melting process scope; input/output inventory; energy, water, waste-water, waste-gas, odour, TVOC, NH3, and H2S monitoring; annual net-energy and waste-water QA screens |
